const { customAPIError } = require('../errors/custom-errors');


const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof customAPIError){
        return res.status(err.status).json({msg: err.message});
    }
    res.status(err.status || 500).json({msg: err.message || 'Something went wrong, try again later'});
}      

module.exports = errorHandlerMiddleware;
