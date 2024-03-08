const {userService, postService} = require('../container');
const response = require('../utils/response');
const addPost = async (req, res) => {
    try{
    const post = await postService.addPost(req.body);
    response(res, post, 201)
    }
    catch(error){
        response(res, {message: error.message}, error.status);
    }
}

const getPostsForUser = async (req, res) => {
    const posts = await postService.getPostsForUser(req.params.email);
    response(res, posts);
}

const updatePost = async (req, res) => {
    try {
        const post = await postService.updatePost(req.params.id, req.body);
        response(res, post, 201);
    }
    catch (error) {
        response(res, { message: error.message }, error.status);
    }
}
const deletePost = async (req, res) => {
    try {
        await postService.deletePost(req.params.id);
        response(res, {}, 204);
    }
    catch (error) {
        response(res, { message: error.message }, error.status);
    }
}
module.exports = { addPost, getPostsForUser, updatePost, deletePost };