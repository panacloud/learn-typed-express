/// <reference path='../../typings/tsd.d.ts' />
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Multi-page Express app using Typescript and Bootstrap' });
});
module.exports = router;
