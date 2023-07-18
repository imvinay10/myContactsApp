const { constant } = require("../constant");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case 400:
            res.json({
                title: "Validation Failed",
                meesage: err.message,
                stackTrace: err.stack
            });
            break;

        case constant.NOT_FOUND:
            res.json({
                title: "Not Found",
                meesage: err.message,
                stackTrace: err.stack
            });

        case constant.UNAUTHRIZED:
            res.json({
                title: "Unauthorised",
                meesage: err.message,
                stackTrace: err.stack
            });

        case constant.FORBIDDEN:
            res.json({
                title: "Forbidden",
                meesage: err.message,
                stackTrace: err.stack
            });

        case constant.SERVER_ERROR:
            res.json({
                title: "Server Error",
                meesage: err.message,
                stackTrace: err.stack
            });
        default:
            console.log("No Error, All good !")
            break;
    }
};
module.exports = errorHandler;