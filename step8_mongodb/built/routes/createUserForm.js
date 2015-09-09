/// <reference path='../../typings/tsd.d.ts' />
var express = require('express');
var router = express.Router();
/* GET new User */
router.get('/', function (req, res, next) {
    res.render('createUserForm');
});
module.exports = router;
