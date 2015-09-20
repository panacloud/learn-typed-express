/// <reference path='../../../typings/tsd.d.ts' />

//https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

import express = require('express');
var router = express.Router();
import {IUserModel, User} from '../../models/User';

/* GET new User */
router.post('/create', function(req, res, next) {
  createPersistantUser(req.body.displayname, req.body.email, function(error: any, user: IUserModel){
    findUser(user.email, function(userDB: IUserModel){
      if(userDB != null){
          res.json({ created: true }); 
      }
      else {
        res.json({ created: false }); 
      }
      
    });
  });
  
  
});


function createPersistantUser(displayname: string, email: string, cb: (error, IUserModel)=>void) {
  console.log("Data Received: " + displayname);
  
  var user = new User({email: email, displayName: displayname});
  user.save(function(error){
    if(error){
      console.log(error);
    }
    cb(error, user);
  });
  
}

function findUser(email:string, cb: (IUserModel)=>void){
    User.findOne({email: email },  function(err: any, res: IUserModel){
        if(err){
          cb(null);
        }
        cb(res);
    });
}


export = router;