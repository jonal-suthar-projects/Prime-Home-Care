import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (!token) navigate("/admin-login");
  }, [token, navigate]);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(
        "https://backend-prime-home-care.onrender.com/api/blogs"
      );
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSubmit = async () => {
    if (!title || !content) return alert("Fill required fields");

    const blogData = {
      title,
      description,
      content,
      image,
      author: author || "Admin",
      date: new Date().toISOString(),
    };

    try {
      if (editingId) {
        await fetch(
          `https://backend-prime-home-care.onrender.com/api/blogs/edit/${editingId}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blogData),
          }
        );
        setEditingId(null);
      } else {
        await fetch(
          "https://backend-prime-home-care.onrender.com/api/blogs/add", // ✅ fixed (removed double slash)
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blogData),
          }
        );
      }

      // Reset form
      setTitle("");
      setDescription("");
      setContent("");
      setImage("");
      setAuthor("");

      fetchBlogs();
    } catch (err) {
      console.error("Error saving blog:", err);
      alert("Something went wrong");
    }
  };

  const editBlog = (blog) => {
    setTitle(blog.title);
    setDescription(blog.description || "");
    setContent(blog.content);
    setImage(blog.image || "");
    setAuthor(blog.author || "");
    setEditingId(blog._id); // ✅ always use _id
    window.scrollTo(0, 0);
  };

  const deleteBlog = async (id) => {
    try {
      await fetch(
        `https://backend-prime-home-care.onrender.com/api/blogs/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      fetchBlogs();
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  return (
    <div style={{ padding: "60px", background: "#f9fafc", minHeight: "80vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <h2 style={{ fontWeight: "600", color: "black" }}>
          Admin Blog Dashboard
        </h2>

        <button
          onClick={logout}
          style={{
            padding: "10px 18px",
            background: "#e63946",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          marginBottom: "50px",
        }}
      >
        <h3 style={{ marginBottom: "20px", color: "black" }}>
          {editingId ? "Update Blog" : "Add New Blog"}
        </h3>

        <input
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ddd",
          }}
        />

        <input
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ddd",
          }}
        />

        <textarea
          placeholder="Short Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ddd",
          }}
        />

        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="5"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ddd",
          }}
        />

        <input
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #ddd",
          }}
        />

        <button
          onClick={handleSubmit}
          style={{
            padding: "12px 25px",
            background: "#0077b6",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          {editingId ? "Update Blog" : "Add Blog"}
        </button>
      </div>

      <div>
        <h3 style={{ marginBottom: "20px" }}>Existing Blogs</h3>

        {blogs.map((blog) => (
          <div
            key={blog._id}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "20px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h4>{blog.title}</h4>

            <div style={{ marginTop: "10px" }}>
              <button
                onClick={() => editBlog(blog)}
                style={{
                  marginRight: "10px",
                  padding: "8px 15px",
                  background: "#ffb703",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>

              <button
                onClick={() => deleteBlog(blog._id)}
                style={{
                  padding: "8px 15px",
                  background: "#e63946",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;