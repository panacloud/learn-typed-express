/// <reference path="./typings/tsd.d.ts" />
var passport = require("passport");
var pl = require("passport-local");
var LocalStrategy = pl.Strategy;
var User = require("./models/user");
function default_1() {
    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
    passport.use("login", new LocalStrategy(function (username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: "No user has that username!" });
            }
            user.checkPassword(password, function (err, isMatch) {
                if (err) {
                    return done(err);
                }
                if (isMatch) {
                    return done(null, user);
                }
                else {
                    return done(null, false, { message: "Invalid password." });
                }
            });
        });
    }));
}
exports["default"] = default_1;
;
