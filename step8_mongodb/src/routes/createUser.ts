/// <reference path='../../typings/tsd.d.ts' />

import express = require('express');
var router = express.Router();
import {IUserModel, User} from '../models/User';

/* GET new User */
router.get('/', function(req, res, next) {
  /*var user = createPersistantUser();
  User.findOne({email: email },  function(err: any, res: IUserModel){
        
    });*/
  res.render('createUser');
  
  
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