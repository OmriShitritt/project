module.exports.sendRes = (res, data, statusCode, isError = false ) => {
    if(!isError) {
        res.status(statusCode).json({
            status: 'success',
            statusCode,
            data,
            lenght: data.lenght
        });
    } else {
        res.status(statusCode).json({
            status: 'failture',
            statusCode: statusCode,
            error: data.message,
        });
    };

};