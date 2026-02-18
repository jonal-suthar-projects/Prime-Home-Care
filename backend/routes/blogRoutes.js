const express = require("express");
const jwt = require("jsonwebtoken");
const Blog = require("../models/Blogs");

const router = express.Router();

const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json("No token");

  try {
    jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json("Invalid token");
  }
};

router.get("/", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

router.post("/add", verifyAdmin, async (req, res) => {
  const blog = new Blog(req.body);
  await blog.save();
  res.json(blog);
});

router.put("/edit/:id", verifyAdmin, async (req, res) => {
  await Blog.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Updated" });
});

router.delete("/delete/:id", verifyAdmin, async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
