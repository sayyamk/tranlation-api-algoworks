"use strict";
const Translate = require('../App/Controllers/Translate/translate');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const {translateTextValidation} = require("../Config/Validations/validations");

module.exports = function (app) {

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    });
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidator());

    app.get('/', function (req, res, next) {
        res.send({status: "API Running", message: "Language Translation API for Algoworks, submitted by Sayyam Kapoor"});
    });

    app.post('/translate', translateTextValidation, Translate.translateText);
};