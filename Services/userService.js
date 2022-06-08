const db = require('../models');

const user = db.users


const createUser = async (req, res, next) => {
    let info = {
        name: req.body.name,
        email: req.body.email,
    }

    console.log(info)

    const Users = await user.create(info);
    return Users;
}

const allUsers = async (req, res, next) => {
    let users = await user.findAll({});
    return users;
}


const singleUser = async (req, res, next) => {
    let id = req.params.id;
    let users = await user.findOne({
        where: { id: id }
    })
    return users;
}

const updateUser = async (req, res, next) => {
    let id = req.params.id;
    let users = await user.update(req.body,
        { where: { id: id } });

    return users;
}

const deleteUser = async (req, res, next) => {
    let id = req.params.id;
    let users = await user.destroy({ where: { id: id } });
    return users;
}

module.exports = {
    createUser,
    allUsers,
    singleUser,
    updateUser,
    deleteUser
}