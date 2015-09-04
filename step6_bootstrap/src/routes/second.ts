/// <reference path='../../typings/tsd.d.ts' />

import express = require('express');
var router = express.Router();

/* GET second page. */
router.get('/', function(req, res, next) {
  res.render('page2', { titleData: 'This is the second page' });
});

export = router;