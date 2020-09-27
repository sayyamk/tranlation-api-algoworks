"use strict";
const Constants = require("../../App/Common/constants");
const Utility = require('../../App/Utils/Api-response');

module.exports = {

    translateTextValidation: function (req, res, next) {
        const schema = {
            [Constants.API_VALIDATION_MESSAGES.TRANSLATE.NAME]: {
                notEmpty: true,
                errorMessage: Constants.API_VALIDATION_MESSAGES.TRANSLATE.IS_REQUIRED
            }
        };
        req.checkBody(schema);
        let errors = req.validationErrors();
        if (!errors) {
            return next();
        } else {
            return Utility.respondWithArray(res, {}, errors, false);
        }
    }
}