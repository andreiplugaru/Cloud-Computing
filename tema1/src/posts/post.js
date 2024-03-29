let mongoose = require('mongoose');
const {Schema} = require("mongoose");
let uuid = require('uuid');
let postSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => uuid.v4()
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    userId:{
        type: String,
        ref: 'User'
    },
    likes: [{
        type: String,
        ref: 'Like'
    }]
})

module.exports = mongoose.model('Post', postSchema);