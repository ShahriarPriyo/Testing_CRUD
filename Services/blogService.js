const db = require('../models');

const blog = db.bloglist

const createBlog = async (req, res, next) => {
    let info = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
    }

    const Blog = await blog.create(info);
    return Blog;
}

const allBlogs = async (req, res, next) => {
    let blogs = await blog.findAll({});
    return blogs;
}

const singleBlog = async (req, res, next) => {
    let id = req.params.id;
    let blogs = await blog.findOne({
        where: { id: id }
    })
    return blogs;
}

const updateBlog = async (req, res, next) => {
    let id = req.params.id;
    let blogs = await blog.update(req.body,
        { where: { id: id } });

    return blogs;
}

const deleteBlog = async (req, res, next) => {
    let id = req.params.id;
    let blogs = await blog.destroy({ where: { id: id } });
    return blogs;
}

module.exports = {
    createBlog,
    allBlogs,
    singleBlog,
    updateBlog,
    deleteBlog
}