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
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        if(updatedUser != null){
            response(res, updatedUser, 204);
        }
        else {
            const newUser = await userService.registerUser(req.body);
            response(res, newUser, 201);
        }
    }
    catch(error){
        response(res, {message: error.message}, error.status);
    }

}

module.exports = { getAllUsers, registerUser, updateUser };