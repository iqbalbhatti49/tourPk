const express = require("express");
const router = express.Router();
// BlogPost model to be used in this router
const { BlogPost } = require("../models");

// GET all blog posts
router.get("/", async (req, res) => {
    const blogPosts = await BlogPost.findAll();
    res.json(blogPosts);
});

// GET a blog post by id
router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const post = await Posts.findByPk(id);
    res.json(post);
});

//Post a new blog post
router.post("/", async (req, res) => {
    const blogPost = req.body;
    await BlogPost.create(blogPost);
    res.json(blogPost);
});

module.exports = router;