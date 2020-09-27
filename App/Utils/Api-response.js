"use strict";

module.exports = {
    respondWithArray,
    createResponseObjectWithCode,
    createResponseObject
};

function responseObj(data, message, success) {
    let messageObj = {
        "param": "",
        "msg": message
    };
    return responseObj = {
        data: data,
        message: [messageObj],
        success: success
    };
}

function respondWithArray(res, data, message, success) {
    let responseObj = {
        responseData: data,
        message: message,
        success: success
    };
    res.format({
        json: () => {
            res.json(responseObj);
        }
    });
}

function createResponseObject(data, message, success) {
    let messageObj = {
        "param": "",
        "msg": message
    };
    return responseObj = {
        responseData: data,
        message: [messageObj],
        success: success
    };
}

function createResponseObjectWithCode(data, message, success, code) {
    let messageObj = {
        "param": "",
        "msg": message,
        "errorCode": code
    };
    return responseObj = {
        responseData: data,
        message: [messageObj],
        success: success
    };
}

