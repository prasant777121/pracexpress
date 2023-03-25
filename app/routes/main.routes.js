module.exports = app => {
    const express = require("express");
    const router = express.Router();

    require('./products.routes.js')(app, router);
    require('./users.routes.js')(app, router);

 

}