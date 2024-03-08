const {getPostBody} = require("../utils/getPostBody");
const response = require("../utils/response");
const validateLike = async (req, res, next) => {
    try {
        let parsedBody = await getPostBody(req);
        if (parsedBody.userEmail && parsedBody.postId) {
            req.body = parsedBody;
            next(req, res);
        } else {
            response(res, { message: "UserEmail and PostId are required" }, 400);
        }
    }
    catch (error) {
        response(res, { message: "Invalid JSON" }, 400);
    }
}

module.exports = {validateLike};