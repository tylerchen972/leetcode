/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    var prev = 0;
    for (i=0; i<x+1; i++) {
        var squared = i*i
        if (squared === x) {
            return i;
        }
        else if (squared > x) {
            return prev
        }
        else {
            prev = i;
        }
    }
    return prev;
};