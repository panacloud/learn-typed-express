/// <reference path='../../typings/tsd.d.ts' />

import express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Multi-page Express app using Typescript and Bootstrap' });
});

export = router;