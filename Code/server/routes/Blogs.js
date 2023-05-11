const express = require("express");
const router = express.Router();
const { authenticateMiddleware } = require("../middleware/auth.js");
const { showAllBlogs, showBlogById, createBlogPost, updateBlogPost, deleteBlogPost, showRandomBlogs } = require("../controllers/Blogs.js");

router.post("/addBlog", authenticateMiddleware, createBlogPost);
router.get("/blogs", authenticateMiddleware, showAllBlogs);
router.get("/:id", authenticateMiddleware, showBlogById);
router.put("/:id", authenticateMiddleware, updateBlogPost);
router.delete("/:id", authenticateMiddleware, deleteBlogPost);
router.get("/randomBlogs/:id", authenticateMiddleware, showRandomBlogs);
module.exports = router;