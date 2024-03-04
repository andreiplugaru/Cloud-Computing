const {userService} = require('../container');
const response = require('../utils/response');
const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    response(res, users)
}
const registerUser = async (req, res) => {
    const user = await userService.registerUser(req.body);
    response(res, user)
}

module.exports = { getAllUsers, registerUser };