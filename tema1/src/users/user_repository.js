const User = require('./user');

class UserRepository {
    async getAllUsers() {
        return await User.find();
    }
    async registerUser(user) {
        return User.create(user);
    }
}

module.exports = UserRepository;