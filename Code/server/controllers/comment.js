const { Comment } = require("../models");
const { User } = require('../models');

exports.addComment = async (req, res) => {
    const comment = req.body;
    console.log("in server -------------- comment:", comment);
    const resp = await Comment.create(comment);
    res.status(200).json(resp);
}

exports.commentByBlogPostId = async (req, res) => {
    const id = req.params.blogId;
    const comment = await Comment.findAll({ where: { blogPostId: id } });
    // const comments = await Comment.findAll({
    //     where: { blogPostId: id },
    //     include: [
    //         {
    //             model: User,
    //             attributes: ['name', 'id']
    //         }
    //     ],
    //     attributes: ['id', 'commentText', 'datePosted']
    // });
    console.log("-----------------comments:", comment);
    res.json(comment);
}

exports.updateComment = async (req, res) => {
    const id = req.params.id;
    const comment = req.body;
    await Comment.update(comment, { where: { id } });
    res.json(id);
}

exports.deleteComment = async (req, res) => {
    const id = req.params.id;
    const comment = await Comment.findByPk(id);
    await Comment.destroy({ where: { id } });
    res.json({ comment, id });
}