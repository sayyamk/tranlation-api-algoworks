'use strict';

const express = require('express');
const port = process.env.PORT || 3002;
const app = express();

require('./Routes')(app);

listen();

function listen() {
    app.listen(port);
    console.log("Api running on port " + port + " at " + (new Date()))
}

module.exports = {
    app
};