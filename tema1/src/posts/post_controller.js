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
    try {
        const posts = await postService.getPostsForUser(req.params.userId);
        response(res, posts);
    }
    catch (error) {
        response(res, { message: error.message }, error.status);
    }
}

const updatePost = async (req, res) => {
    try {
        const updatedPost = await postService.updatePost(req.params.id, req.body);
        if(updatedPost !== null) {
            response(res, updatedPost, 204);
        }
        else{
            const newPost = await postService.addPost(req.body);
            response(res, newPost, 201);

        }
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