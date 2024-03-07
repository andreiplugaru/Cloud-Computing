const User = require('./user');

class UserRepository {
    async getAllUsers() {
        return User.find();
    }
    async registerUser(user) {
        return User.create(user);
    }
    async getUserById(userId) {
        return User.findById(userId);
    }
    async getUserByEmail(email) {
        return User.findOne({email: email});
    }
}

module.exports = UserRepository;