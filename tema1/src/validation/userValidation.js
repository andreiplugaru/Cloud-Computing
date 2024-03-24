const response = require('../utils/response');
const {getPostBody} = require('../utils/getPostBody');

const validateUser = async (req, res, next) => {
    try {
        let parsedBody = await getPostBody(req);
        if (parsedBody.name && parsedBody.email) {
            req.body = parsedBody;
            next(req, res);
        } else {
            response(res, { message: "name and email are required" }, 400);
        }
    }
    catch (error) {
        response(res, { message: "Invalid JSON" }, 400);
    }

}

const validateLoginUser = async (req, res, next) => {
    try {
        let parsedBody = await getPostBody(req);
        if (parsedBody.email) {
            req.body = parsedBody;
            next(req, res);
        } else {
            response(res, { message: "email is required" }, 400);
        }
    }
    catch (error) {
        response(res, { message: "Invalid JSON" }, 400);
    }

}
module.exports = { validateUser,validateLoginUser };