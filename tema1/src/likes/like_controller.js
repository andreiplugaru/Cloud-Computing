const {userService, postService, likeService} = require('../container');
const response = require('../utils/response');
const addLike = async (req, res) => {
    try{
        const like = await likeService.addLike(req.body);
        response(res, like, 201)
    }
    catch(error){
        response(res, {message: error.message}, error.status);
    }
}
const removeLike = async (req, res) => {
    try{
        const like = await likeService.removeLike(req.body.userId, req.body.postId);
        response(res, like, 204)
    }
    catch(error){
        response(res, {message: error.message}, error.status);
    }
}

module.exports = { addLike, removeLike}