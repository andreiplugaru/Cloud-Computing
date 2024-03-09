const HttpException = require("../utils/HttpException");

class UserService{
    constructor(userRepository){
        this.userRepository = userRepository;
    }
    async getAllUsers(){
        return await this.userRepository.getAllUsers();
    }
    async registerUser(user){
        if (await this.userRepository.getUserByEmail(user.email))
            throw new HttpException(409, "Email already in use");
        return await this.userRepository.registerUser(user);
    }
    async getUserById(userId){
        return await this.userRepository.getUserById(userId);
    }
    async getUserByEmail(email){
        return await this.userRepository.getUserByEmail(email);
    }
    async updateUser(userId, user){
        return await this.userRepository.updateUser(userId, user);
    }
}

module.exports = UserService;