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

    async updatePost(postId, post){
        let user = await this.userService.getUserById(post.userId);
        if(user == null)
            throw new HttpException(404, "User not found");
        if(postId !== post._id)
            throw new HttpException(400, "The id of the post cannot be changed");
        if(uuid.validate(postId) === false || uuid.validate(post._id) === false)
            throw new HttpException(400, "Invalid id");
        let currentPost = await this.postRepository.getPostById(postId);
        if(currentPost == null)
            return await this.postRepository.addPost(post);
        return await this.postRepository.updatePost(postId, post);
    }
    async getPostById(postId){
        return await this.postRepository.getPostById(postId);
    }
    async deletePost(postId){
        let post = await this.postRepository.getPostById(postId);
        if (post == null)
            throw new HttpException(404, "Post not found");
        return await this.postRepository.deletePost(postId);
    }
}

module.exports = PostService;