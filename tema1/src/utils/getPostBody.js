const getPostBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                body = body ? JSON.parse(body) : {};

                resolve(body);
            } catch (error) {
                reject(error);
            }
        });
    });
};

module.exports = { getPostBody };