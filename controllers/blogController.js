
const blogService = require('../Services/blogService')

const addBlog = async (req, res) => {
    const Data = await blogService.createBlog();
    res.status(201).send(Data);

}


const getAllBlog = async (req, res) => {
    const Data = await blogService.allBlogs();

    res.status(200).send(Data);
}


const getOneBlog = async (req, res) => {
    const Data = await blogService.singleBlog();
    res.status(200).send(Data);
}


const updateBlog = async (req, res) => {
    const Data = await blogService.updateBlog();
    res.status(202).send(Data);
}


const deleteBlog = async (req, res) => {
    const Data = await blogService.deleteBlog();
    res.status(204).send('Blog is deleted');
}

module.exports = {
    addBlog,
    getAllBlog,
    getOneBlog,
    updateBlog,
    deleteBlog,

}