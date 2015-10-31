var User = (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.browsing = function () {
        return this.name + " is a User from a ES2015 class/module and is eating";
    };
    return User;
})();
exports["default"] = User;
