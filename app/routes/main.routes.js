module.exports = app => {
    const express = require("express");
    const router = express.Router();

    require('./users.routes.js')(app, router);

 

}