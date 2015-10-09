/// <reference path='../../../typings/tsd.d.ts' />
//https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
var express = require('express');
var router = express.Router();
var User_1 = require('../../models/User');
/* GET new User */
router.post('/create', function (req, res, next) {
    createPersistantUser(req.body.displayname, req.body.email, function (error, user) {
        findUser(user.email, function (userDB) {
            if (userDB != null) {
                res.json({ created: true });
            }
            else {
                res.json({ created: false });
            }
        });
    });
});
function createPersistantUser(displayname, email, cb) {
    console.log("Data Received: " + displayname);
    var user = new User_1.User({ email: email, displayName: displayname });
    user.save(function (error) {
        if (error) {
            console.log(error);
        }
        cb(error, user);
    });
}
function findUser(email, cb) {
    User_1.User.findOne({ email: email }, function (err, res) {
        if (err) {
            cb(null);
        }
        cb(res);
    });
}
module.exports = router;
