const userController = require('../users/user_controller');
const {validateUser, validateLoginUser} = require('../validation/userValidation');
const {validatePost, validatePutPost} = require('../posts/post_validation');
const {validateLike} = require('../likes/like_validation');
const postController = require('../posts/post_controller');
const likeController = require('../likes/like_controller');

const routes = {
    "/users": {
        GET: (req, res) => {
            userController.getAllUsers(req, res);
        },
        POST: (req, res) => {
            validateUser(req, res, userController.registerUser);
        }
    },
    "/users/login":{
      POST: (req, res) => {
          validateLoginUser(req, res, userController.loginUser);
      }
    },
    "/users/:id": {
        PUT: (req, res) => {
            validateUser(req, res, userController.updateUser);
        }
    },
    "/posts": {
        POST: (req, res) => {
            validatePost(req, res, postController.addPost);
        },
    },
    "/posts/users/:userId": {
        GET: (req, res) => {
            postController.getPostsForUser(req, res);
        }
    },
    "/posts/:id": {
        GET: (req, res) => {
            postController.getPostById(req, res);
        },
        PUT: (req, res) => {
            validatePutPost(req, res, postController.updatePost);
        },
        DELETE: (req, res) => {
            postController.deletePost(req, res);
        }
    },
    "/likes": {
        POST: (req, res) => {
            validateLike(req, res, likeController.addLike);
        },
        DELETE: (req, res) => {
            validateLike(req, res, likeController.removeLike);
        }
    },
    notFound: (_req, res) => {
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({message: "Requested route was not found!"}));
    },
}

module.exports = routes;