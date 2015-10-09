/// <reference path='../../typings/tsd.d.ts' />
var express = require('express');
var User_1 = require('../models/User');
var router = express.Router();
var u = new User_1["default"]("Zia");
/* GET second page. */
router.get('/', function (req, res, next) {
    res.render('page2', { titleData: u.browsing() });
});
module.exports = router;
