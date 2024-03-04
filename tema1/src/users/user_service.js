const UserRepository = require('./user_repository');
class UserService{
    constructor(userRepository){
        this.userRepository = userRepository;
    }
    async getAllUsers(){
        return await this.userRepository.getAllUsers();
    }
    async registerUser(user){
        return await this.userRepository.registerUser(user);
    }
}

module.exports = UserService;