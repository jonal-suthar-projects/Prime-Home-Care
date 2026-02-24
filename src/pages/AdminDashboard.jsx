import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE = "https://backend-prime-home-care.onrender.com/api/blogs";

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
  const [loading, setLoading] = useState(false);

  // Redirect if not logged in
  useEffect(() => {
    if (!token) navigate("/admin-login");
  }, [token, navigate]);

  // =============================
  // FETCH BLOGS
  // =============================
  const fetchBlogs = async () => {
    try {
      const res = await fetch(API_BASE);
      const data = await res.json();

      if (!res.ok) {
        console.error(data);
        return;
      }

      setBlogs(data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // =============================
  // ADD / UPDATE BLOG
  // =============================
  const handleSubmit = async () => {
    if (!title || !content) {
      return alert("Title and Content are required");
    }

    const blogData = {
      title,
      description,
      content,
      image,
      author: author || "Admin",
    };

    try {
      setLoading(true);

      let res;

      if (editingId) {
        // UPDATE
        res = await fetch(`${API_BASE}/edit/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogData),
        });
      } else {
        // ADD
        res = await fetch(`${API_BASE}/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogData),
        });
      }

      const data = await res.json();

      if (!res.ok) {
        console.error(data);
        alert(data.message || "Operation failed");
        setLoading(false);
        return;
      }

      // Reset form
      setTitle("");
      setDescription("");
      setContent("");
      setImage("");
      setAuthor("");
      setEditingId(null);

      fetchBlogs();
    } catch (err) {
      console.error("Error saving blog:", err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // =============================
  // EDIT BUTTON CLICK
  // =============================
  const editBlog = (blog) => {
    setTitle(blog.title);
    setDescription(blog.description || "");
    setContent(blog.content);
    setImage(blog.image || "");
    setAuthor(blog.author || "");
    setEditingId(blog._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // =============================
  // DELETE BLOG
  // =============================
  const deleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      const res = await fetch(`${API_BASE}/delete/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(data);
        alert(data.message || "Delete failed");
        return;
      }

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

      {/* FORM */}
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
          style={inputStyle}
        />

        <input
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={inputStyle}
        />

        <textarea
          placeholder="Short Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
          style={inputStyle}
        />

        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="5"
          style={inputStyle}
        />

        <input
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            padding: "12px 25px",
            background: loading ? "#999" : "#0077b6",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          {loading
            ? "Processing..."
            : editingId
              ? "Update Blog"
              : "Add Blog"}
        </button>
      </div>

      {/* BLOG LIST */}
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
                style={editBtnStyle}
              >
                Edit
              </button>

              <button
                onClick={() => deleteBlog(blog._id)}
                style={deleteBtnStyle}
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

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ddd",
};

const editBtnStyle = {
  marginRight: "10px",
  padding: "8px 15px",
  background: "#ffb703",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const deleteBtnStyle = {
  padding: "8px 15px",
  background: "#e63946",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default AdminDashboard;