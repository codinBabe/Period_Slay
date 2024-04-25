import express from "express";
import Blog from "../db/models/Blog.js";

const router = express.Router();
router.post("/", async (req, res) => {
  const data = await req.body;
  const blogDoc = await Blog.create(data);
  return res.json(blogDoc);
});

router.get("/", async (req, res) => {
  return res.json(await Blog.find());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const blogPost = await Blog.findById(id);
  return res.json(blogPost);
});

export default router;
