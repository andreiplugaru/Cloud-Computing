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

module.exports = { getAllUsers, registerUser };