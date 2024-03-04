const userController = require('../users/user_controller');
const {validateUser} = require('../validation/userValidation');
const routes = {
    "/users":{
        GET: (req, res) => {
         userController.getAllUsers(req, res);
        },
        POST:(req, res) => {
            validateUser(req, res, userController.registerUser);
        }
    },
    "/:id":{
        GET: (req, res) => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Hello World2");
        },
    },
    notFound: (_req, res) => {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "requested resource not found!" }));
    },
}

module.exports = routes;