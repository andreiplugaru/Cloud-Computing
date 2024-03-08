let Post = require('./post');
let Like = require('../likes/like');
class PostRepository{
    async getPostsForUser(userEmail){
        return Post.find({userEmail: userEmail}).populate('likes').exec();
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
    async deletePost(postId){
        return Post.findByIdAndDelete(postId);
    }
    async addLike(postId, like){
        let post = await Post.findById(postId);
        post.likes.push(like);
        return post.save();
    }
}

module.exports = PostRepository;