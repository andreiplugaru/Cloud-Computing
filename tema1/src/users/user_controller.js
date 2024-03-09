const {userService} = require('../container');
const response = require('../utils/response');
const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    response(res, users)
}
const registerUser = async (req, res) => {
    try{
    const user = await userService.registerUser(req.body);
    response(res, user)}
    catch(error){
        response(res, {message: error.message}, error.status);
    }
}

const updateUser = async (req, res) => {
    try{
        const user = await userService.updateUser(req.params.id, req.body);
        response(res, user, 201);
    }
    catch(error){
        response(res, {message: error.message}, error.status);
    }

}

module.exports = { getAllUsers, registerUser, updateUser };