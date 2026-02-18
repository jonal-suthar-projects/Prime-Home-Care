import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then(res => res.json())
      .then(setBlogs);
  }, []);

  const addBlog = async () => {
    await fetch("http://localhost:5000/api/blogs/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ title, content, image })
    });

    window.location.reload();
  };

  const deleteBlog = async id => {
    await fetch(`http://localhost:5000/api/blogs/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    window.location.reload();
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Admin Blog Dashboard</h2>

      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Content" onChange={e => setContent(e.target.value)} />
      <input placeholder="Image URL" onChange={e => setImage(e.target.value)} />

      <button onClick={addBlog}>Add Blog</button>

      {blogs.map(blog => (
        <div key={blog._id}>
          <h3>{blog.title}</h3>
          <button onClick={() => deleteBlog(blog._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
