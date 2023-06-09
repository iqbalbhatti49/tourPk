const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { showAllBlogs, showBlogById, createBlogPost, updateBlogPost, deleteBlogPost, showRandomBlogs } = require("../controllers/Blogs.js");

router.post("/addBlog", authenticateMiddleware, createBlogPost);
router.put("/:id", authenticateMiddleware, updateBlogPost);
router.delete("/:id", authenticateMiddleware, deleteBlogPost);
router.get("/blogs", showAllBlogs);
router.get(`/:id`, showBlogById);
router.get("/randomBlogs/:id", showRandomBlogs);
module.exports = router;