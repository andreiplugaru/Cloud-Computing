let mongoose = require('mongoose');
let uuid = require('uuid');
let userSchema = new mongoose.Schema({
    _id:{
        type: String,
        default: () => uuid.v4()
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
})

module.exports = mongoose.model('User', userSchema);