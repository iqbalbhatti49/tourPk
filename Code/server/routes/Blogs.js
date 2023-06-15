const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { showAllBlogs, showBlogById, createBlogPost, updateBlogPost, deleteBlogPost, showRandomBlogs } = require("../controllers/Blogs.js");

router.post("/addBlog", createBlogPost);
router.put("/:id", updateBlogPost);
router.delete("/:id", deleteBlogPost);
router.get("/blogs", showAllBlogs);
router.get(`/:id`, showBlogById);
router.get("/randomBlogs/:id", showRandomBlogs);
module.exports = router;