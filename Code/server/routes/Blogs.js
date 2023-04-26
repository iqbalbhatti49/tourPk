const express = require("express");
const router = express.Router();
const { showAllBlogs, showBlogById, createBlogPost, updateBlogPost } = require("../controllers/Blogs.js");

router.get("/blogs", showAllBlogs);
router.get("/:id", showBlogById);
router.post("/addBlog", createBlogPost);


module.exports = router;