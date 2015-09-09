/// <reference path='../../typings/tsd.d.ts' />

import express = require('express');
var router = express.Router();
import {IUserModel, User} from '../models/User';

/* GET new User */
router.get('/', function(req, res, next) {
  res.render('createUserForm');
});



export = router;