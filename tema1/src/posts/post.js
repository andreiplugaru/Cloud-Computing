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
    userEmail:{
        type: String,
        ref: 'User'
    },
    likes: [{
        type: Schema.Types.UUID,
        ref: 'Like'
    }]
})

module.exports = mongoose.model('Post', postSchema);