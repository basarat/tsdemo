var Utils = (function () {
    function Utils() { }
    Utils.prototype.fac = function (num) {
        if(num == 0 || num == 1) {
            return 1;
        }
        return num * this.fac(num - 1);
    };
    return Utils;
})();
//@ sourceMappingURL=main.js.map
