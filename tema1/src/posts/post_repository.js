let Post = require('./post');
let Like = require('../likes/like');
class PostRepository{
    async getPostsForUser(userEmail){
        return Post.find({userEmail: userEmail}).populate('likes');
    }
    async addPost(post){
        return Post.create(post);
    }
    async updatePost(postId, post) {
        return Post.findByIdAndUpdate(postId, post);
    }
    async getPostById(postId){
        return Post.findById(postId);
    }
}

module.exports = PostRepository;