const response = require('../utils/response');
const {getPostBody} = require("../utils/getPostBody");
const uuid = require('uuid');
const validatePost = async (req, res, next) => {
    try {
        let parsedBody = await getPostBody(req);

        if (parsedBody.title && parsedBody.content && parsedBody.userId) {
            req.body = parsedBody;
            next(req, res);
        } else {
            response(res, { message: "Title, content and userId are required" }, 400);
        }
    }
    catch (error) {
        response(res, { message: "Invalid JSON" }, 400);
    }
}
const validatePutPost = async (req, res, next) => {
    try {
        let parsedBody = await getPostBody(req);

        if (parsedBody.title && parsedBody.content && parsedBody.userId) {
            req.body = parsedBody;
            next(req, res);
        } else {
            response(res, { message: "_id, title, content and userId are required" }, 400);
        }
    }
    catch (error) {
        response(res, { message: "Invalid JSON" }, 400);
    }
}
module.exports = {validatePost,validatePutPost};