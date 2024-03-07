class HttpException{
    constructor(status, message, data){
        this.status = status;
        this.message = message;
    }
}

module.exports = HttpException;