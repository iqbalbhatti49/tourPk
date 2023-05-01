const { BlogPost } = require("../models");
const { Op } = require("sequelize");
const Sequelize = require('sequelize');

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
    res.json(resp.id);
}

exports.updateBlogPost = async (req, res) => {
    const id = req.params.id;
    const blogPost = req.body;
    await BlogPost.update(blogPost, { where: { id } });
    res.json(blogPost);
}

exports.deleteBlogPost = async (req, res) => {
    const id = req.params.id;
    const count = await BlogPost.destroy({ where: { id } });
    res.json({ message: "Blog deleted successfully" },);
    console.log("deleted: ", count);
}

exports.showRandomBlogs = async (req, res) => {
    const id = req.params.id;
    // console.log("id blog: ", id);
    const blogPost = await BlogPost.findByPk(id);
    // console.log("blogPost in server--- : ", blogPost);
    const blogPosts = await BlogPost.findAll({
        where: {
            id: {
                [Op.ne]: id
            }
        },
        limit: 3,
        order: Sequelize.literal('rand()')
    });
    res.json(blogPosts);
}
