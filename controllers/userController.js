

const userService = require('../Services/userService')



const addUser = async (req, res, next) => {
    // console.log('con')
    const Data = await userService.createUser(req, res, next);

    res.status(200).send(Data);

}


const getAllUsers = async (req, res) => {
    const Data = await userService.allUsers(req, res);
    res.status(200).send(Data);
}


const getOneUser = async (req, res) => {
    const Data = await userService.singleUser(req, res);

    res.status(200).send(Data);
}


const updateUser = async (req, res) => {
    const Data = await userService.updateUser(req, res);
    res.status(202).send(Data);
}


const deleteUser = async (req, res) => {
    const Data = await userService.deleteUser(req, res);
    // res.status(204).send('Blog is deleted');
}

module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
}