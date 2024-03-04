const response = (res, data, status = 200) => {
    res.writeHead(status, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
}

module.exports = response;