const Like = require('./like')
class LikeRepository{
    async addLike(like){
        return Like.create(like);
    }
    async getLikeForEmailAndPost(userEmail, postId){
        return Like.findOne({userEmail: userEmail, postId: postId});
    }
    async removeLike(likeId){
        return Like.findByIdAndDelete(likeId);
    }
}
module.exports = LikeRepository;