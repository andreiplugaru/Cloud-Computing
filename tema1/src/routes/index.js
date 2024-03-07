const userController = require('../users/user_controller');
const {validateUser} = require('../validation/userValidation');
const {validatePost, validatePutPost} = require('../posts/post_validation');
const postController = require('../posts/post_controller');
const routes = {
    "/users": {
        GET: (req, res) => {
            userController.getAllUsers(req, res);
        },
        POST: (req, res) => {
            validateUser(req, res, userController.registerUser);
        }
    },
    "/:id": {
        GET: (req, res) => {
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("Hello World2");
        },
    },
    "/posts": {
        GET: (req, res) => {
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("Hello World3");
        },
        POST: (req, res) => {
            validatePost(req, res, postController.addPost);
        },
    },
    "/posts/:email": {
        GET: (req, res) => {
           postController.getPostsForUser(req, res);
        },
        PUT: (req, res) => {
            req.params.id = req.params.email;
            delete req.params.email;
            validatePutPost(req, res, postController.updatePost);
        }
    },
    notFound: (_req, res) => {
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({message: "requested resource not found!"}));
    },
}

module.exports = routes;