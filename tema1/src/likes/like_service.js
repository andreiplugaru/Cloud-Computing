const HttpException = require('../utils/HttpException');
class LikeService{
    constructor(likeRepository, userService, postService){
        this.likeRepository = likeRepository;
        this.userService = userService;
        this.postService = postService;
    }

   async addLike(like){
        let user = await this.userService.getUserById(like.userId);
        if (user == null)
            throw new HttpException(404, "User not found");
        let post = await this.postService.getPostById(like.postId);
        if (post == null)
            throw new HttpException(404, "Post not found");
        let currentLike = await this.likeRepository.getLikeForUserAndPost(like.userId, like.postId);
        if(currentLike != null){
            throw new HttpException(400, "User already liked this post");
        }
        return await this.likeRepository.addLike(like);
    }

    async removeLike(userId, postId){
        let like = await this.likeRepository.getLikeForUserAndPost(userId, postId);
        if (like == null)
            throw new HttpException(404, "There is no like for this user and post");
        return await this.likeRepository.removeLike(like._id);
    }
}

module.exports = LikeService;