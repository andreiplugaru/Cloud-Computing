const UserService = require('./users/user_service');
const UserRepository = require('./users/user_repository');
const database = require('./database');

let userRepository = new UserRepository();
let userService = new UserService(userRepository);
module.exports = { userService };
