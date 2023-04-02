const express = require("express");
const router = express.Router(); 
const {BlogPost} = require("../models"); // BlogPost model to be used in this router

// GET all blog posts
router.get("/", async (req, res) => {
    const blogPosts = await BlogPost.findAll();
    res.json(blogPosts);
});

router.post("/", async (req, res) => {
    const blogPost = await BlogPost.create(req.body);
    res.json(blogPost);
});