/// <reference path='../../typings/tsd.d.ts' />
var express = require('express');
var router = express.Router();
var User_1 = require('../models/User');
/* GET new User */
router.get('/', function (req, res, next) {
    /*var user = createPersistantUser();
    User.findOne({email: email },  function(err: any, res: IUserModel){
          
      });*/
    res.render('createUser');
});
function createPersistantUser() {
    var user = new User_1.User({ email: "ziaukhan@hotmail.com", displayName: "Zia" });
    user.save(function (error) {
        if (error) {
            console.log(error);
        }
    });
    return user;
}
module.exports = router;
