const Utils = require('../../Utils/Api-response');
const Constants = require("../../Common/constants");
const {Translate} = require('@google-cloud/translate').v2;

const translate = new Translate({
    projectId: Constants.VARIABLES.PROJECT_ID,
    keyFilename: Constants.VARIABLES.PATH_TO_SERVICE_ACCOUNT
});

exports.translateText = async function (dataObject) {
    try {
        let translatedText = await translateText(dataObject.text, "es")

        let translateResponse = {
            original: dataObject.text,
            translation: translatedText
        }

        return Utils.createResponseObject(translateResponse, Constants.API_RESPONSE_MESSAGES.TEXT_TRANSLATED, true);
    } catch (e) {
        return Utils.createResponseObject({}, Constants.API_RESPONSE_MESSAGES.FAILED_TO_TRANSLATE, false);
    }
};

async function translateText(text, target) {
    const [translation] = await translate.translate(text, target);
    return translation
}