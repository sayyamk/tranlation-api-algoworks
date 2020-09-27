"use strict";
const TranslateManager = require('../../Managers/Translate/translateManager');
const Utils = require('../../Utils/Api-response');
const Constants = require("../../Common/constants");

exports.translateText = async function (req, res) {
    try {
        let translateObject = req.body;
        let translateTextResponse = await TranslateManager.translateText(translateObject);
        res.send(translateTextResponse);
    } catch (e) {
        res.send(Utils.createResponseObject({}, Constants.API_RESPONSE_MESSAGES.SOME_ERROR, false));
    }
};