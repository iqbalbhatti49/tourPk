const { BlogPost, User } = require("../models");
const { Op } = require("sequelize");
const Sequelize = require('sequelize');

exports.showAllBlogs = async (req, res) => {
    const blogPosts = await BlogPost.findAll();
    res.json(blogPosts);
}

exports.showBlogById = async (req, res) => {
    const id = req.params.id;
    const blogPost = await BlogPost.findOne({
        where: {
            id: id
        },
        include: [
            {
                model: User,
                attributes: ['name', 'id']
            }
        ]
    });
    res.json(blogPost);
}

exports.createBlogPost = async (req, res) => {
    const blogPost = req.body;
    console.log("--- ", blogPost, "--------------");
    let rootPath = "../static/images/upload/";
    blogPost.image = rootPath + blogPost.image;
    const resp = await BlogPost.create(blogPost);
    res.status(200).json(resp);
}

exports.deleteBlogPost = async (req, res) => {
    const id = req.params.id;
    const blogPost = await BlogPost.findByPk(id);
    await BlogPost.destroy({ where: { id } });
    const { category } = blogPost;
    res.json({ category, id });
}

exports.showRandomBlogs = async (req, res) => {
    const id = req.params.id;
    const blogPost = await BlogPost.findOne({
        where: { id: id }
    });
    console.log("---> ", blogPost);

    const cat = blogPost ? blogPost.category : "Other Blogs of Interest";
    const blogPosts = await BlogPost.findAll({
        where: {
            [Op.and]: [
                { category: cat },
                {
                    id: {
                        [Op.ne]: id
                    }
                }
            ]
        },
        limit: 3,
        order: Sequelize.literal('rand()')
    });
    res.json(blogPosts);
}

exports.updateBlogPost = async (req, res) => {
    const id = req.params.id;
    let blog = req.body;
    let rootPath = "../static/images/upload/";
    blog.image = rootPath + blog.image;
    await BlogPost.update(blog, { where: { id } });
    res.json(id);
}