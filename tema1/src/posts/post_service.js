const HttpException = require("../utils/HttpException");
const uuid = require('uuid');
class PostService{
    constructor(postRepository, userService){
        this.postRepository = postRepository;
        this.userService = userService;
    }

    async addPost(post){
        let user = await this.userService.getUserById(post.userId);
        if(user == null)
            throw new HttpException(404, "User not found");
       return await this.postRepository.addPost(post);
    }

    async getPostsForUser(userId){
        let user = await this.userService.getUserById(userId);
        if(user == null)
            throw new HttpException(404, "User not found");
        return await this.postRepository.getPostsForUser(userId);
    }

    async updatePost(post_id, post){
        let user = await this.userService.getUserById(post.userId);
        if(user == null)
            throw new HttpException(404, "User not found");
        return await this.postRepository.updatePost(post_id, post);
    }
    // async getPostById(postId){
    //     return await this.postRepository.getPostById(postId);
    // }
    async deletePost(postId){
        let post = await this.postRepository.getPostById(postId);
        if (post == null)
            throw new HttpException(404, "Post not found");
        return await this.postRepository.deletePost(postId);
    }
    async getPostById(postId){
        let post = await this.postRepository.getPostById(postId);
        if (post == null)
            throw new HttpException(404, "Post not found");
        return post;
    }
}

module.exports = PostService;