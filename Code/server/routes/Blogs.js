const express = require("express");
const router = express.Router();
const { showAllBlogs, showBlogById, createBlogPost, updateBlogPost } = require("../controllers/Blogs.js");

router.get("/blogs", showAllBlogs);
router.get("/:id", showBlogById);
router.post("/addBlog", createBlogPost);

//Post a new blog post
router.post("/addBlog", async (req, res) => {
    const blogPost = req.body;
    await BlogPost.create(blogPost);
    res.json(blogPost);
});

module.exports = router;
