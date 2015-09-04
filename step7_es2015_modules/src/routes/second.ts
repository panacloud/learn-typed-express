/// <reference path='../../typings/tsd.d.ts' />

import express = require('express');
import User from '../models/User';
var router = express.Router();

var u: User = new User("Zia");

/* GET second page. */
router.get('/', function(req, res, next) {
  res.render('page2', { titleData: u.browsing() });
});

export = router;