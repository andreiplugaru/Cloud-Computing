let mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
})

module.exports = mongoose.model('User', userSchema);