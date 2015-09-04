/// <reference path='../../typings/tsd.d.ts' />

import express = require('express');
var router = express.Router();
import User from '../models/User';

/* GET new User */
router.get('/', function(req, res, next) {
  res.render('createUser', { userData: createPersistantUser() });
});


function createPersistantUser() {
  var user = new User({email: "ziaukhan@hotmail.com", displayName: "Zia"});
  user.save(function(error){
    if(error){
      console.log(error);
    }
  });
  return user;
}


export = router;