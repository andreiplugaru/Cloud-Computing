let mongoose = require('mongoose');
let uuid = require('uuid');

let likeSchema = new mongoose.Schema({
    _id:{
        type: String,
        default: () => uuid.v4()
    },
    userEmail: {
        type: String,
        ref: 'User'
    },
    postId: {
        type: String,
        ref: 'Post'
    },
    addedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Like', likeSchema);