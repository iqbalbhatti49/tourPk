const { BlogPost } = require("../models");

exports.showAllBlogs = async (req, res) => {
    const blogPosts = await BlogPost.findAll();
    res.json(blogPosts);
}

exports.showBlogById = async (req, res) => {
    const id = req.params.id;
    // console.log("id:", id);
    const blogPost = await BlogPost.findByPk(id);
    //TODO: join with blog and comments table to get all comments
    // console.log("--------inside server show blog by id--------");
    // console.log(blogPost);
    res.json(blogPost);
}

exports.createBlogPost = async (req, res) => {
    const blogPost = req.body;
    // console.log("req.body blog: ", blogPost);
    blogPost.userId = "4";

    // console.log("--------inside server create blog--------");
    // console.log(blogPost);
    const resp = await BlogPost.create(blogPost);
    // console.log("resp id: ", resp.id);
    res.json(resp.id);
}

exports.updateBlogPost = async (req, res) => {
    const id = req.params.id;
    const blogPost = req.body;
    await BlogPost.update(blogPost, { where: { id } });
    res.json(blogPost);
}
