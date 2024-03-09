let mongoose = require('mongoose');
let uuid = require('uuid');
const Post = require('../posts/post');
let likeSchema = new mongoose.Schema({
    _id:{
        type: String,
        default: () => uuid.v4()
    },
    userId: {
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
likeSchema.post("save", async function(like){
   await Post.updateMany({_id: like.postId}, {$push: {likes: like._id}}).exec();
});
module.exports = mongoose.model('Like', likeSchema);