const Like = require('./like')
class LikeRepository{
    async addLike(like){
        return Like.create(like);
    }
    async getLikeForUserAndPost(userId, postId){
        return Like.findOne({userId: userId, postId: postId});
    }
    async removeLike(likeId){
        return Like.findByIdAndDelete(likeId);
    }
}
module.exports = LikeRepository;