/// <reference path="./typings/tsd.d.ts" />
var Converter1 = (function () {
    function Converter1() {
    }
    Converter1.setRate = function (rate) {
        Converter1.rate = rate;
    };
    Converter1.rupeeToDollar = function (rupee) {
        return rupee / Converter1.rate;
    };
    Converter1.rate = 100;
    return Converter1;
})();
exports.Converter1 = Converter1;
