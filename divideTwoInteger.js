/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    var i = 0;
    var sol = 0;
    var currentdividend = dividend;
    var d1 = divisor * 10;
    var d2 = divisor * 100;
    var d3 = divisor * 1000;
    var d4 = divisor * 10000;
    var d5 = divisor * 100000;
    if (dividend === divisor) {
        return 1;
    }
    if (divisor === 1) {
        return dividend;
    }
    if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
        var dividend1 = dividend;
        if (dividend < 0) {
            currentdividend = 0 - dividend
        }
        var divisor1 = divisor;
        if (divisor < 0) {
            divisor1 = 0 - divisor
        }
        d1 = divisor1 * 10;
        d2 = divisor1 * 100;
        d3 = divisor1 * 1000;
        d4 = divisor1 * 10000;
        d5 = divisor1 * 100000;
        while (i < currentdividend) {
            if ((i+d5)<currentdividend)  {
                i = i + d5;
                if (i > currentdividend) {
                    return (0 - sol);
                }
                else {
                    sol = sol + 100000;
                }
            }
            else if ((i+d4)<currentdividend)  {
                i = i + d4;
                if (i > currentdividend) {
                    return (0 - sol);
                }
                else {
                    sol = sol + 10000;
                }
            }
            else if ((i+d3)<currentdividend)  {
                i = i + d3;
                if (i > currentdividend) {
                    return (0 - sol);
                }
                else {
                    sol = sol + 1000;
                }
            }
            else if ((i+d2)<currentdividend)  {
                i = i + d2;
                if (i > currentdividend) {
                    return (0 - sol);
                }
                else {
                    sol = sol + 100;
                }
            }
            else if ((i+d1)<currentdividend)  {
                i = i + d1;
                if (i > currentdividend) {
                    return (0 - sol);
                }
                else {
                    sol = sol + 10;
                }
            }
            else if (i<currentdividend)  {
                i = i + divisor1;
                if (i > currentdividend) {
                    return (0 - sol);
                }
                else {
                    sol = sol + 1;
                }
            }
        }
        return (0 - sol);
    }
    else if (divisor > 0 && dividend > 0) {
        d1 = divisor * 10;
        d2 = divisor * 100;
        d3 = divisor * 1000;
        d4 = divisor * 10000;
        d5 = divisor * 100000;
        while (i < currentdividend) {
            if ((i+d5)<currentdividend)  {
                i = i + d5;
                if (i > currentdividend) {
                    return sol;
                }
                else {
                    sol = sol + 100000;
                }
            }
            else if ((i+d4)<currentdividend)  {
                i = i + d4;
                if (i > currentdividend) {
                    return sol;
                }
                else {
                    sol = sol + 10000;
                }
            }
            else if ((i+d3)<currentdividend)  {
                i = i + d3;
                if (i > currentdividend) {
                    return sol;
                }
                else {
                    sol = sol + 1000;
                }
            }
            else if ((i+d2)<currentdividend)  {
                i = i + d2;
                if (i > currentdividend) {
                    return sol;
                }
                else {
                    sol = sol + 100;
                }
            }
            else if ((i+d1)<currentdividend)  {
                i = i + d1;
                if (i > currentdividend) {
                    return sol;
                }
                else {
                    sol = sol + 10;
                }
            }
            else if (i<currentdividend)  {
                i = i + divisor;
                if (i > currentdividend) {
                    return sol;
                }
                else {
                    sol = sol + 1;
                }
            }
        }
        if (sol >= 2147483647) {
            return 2147483647
        }
    }
    else {
d1 = divisor * 10;
        d2 = divisor * 100;
        d3 = divisor * 1000;
        d4 = divisor * 10000;
        d5 = divisor * 100000;
        while (i > currentdividend) {
            if ((i+d5)>currentdividend)  {
                i = i + d5;
                if (i < currentdividend) {
                    return sol;
                }
                else {
                    sol = sol + 100000;
                }
            }
            else if ((i+d4)>currentdividend)  {
                i = i + d4;
                if (i < currentdividend) {
                    return sol;
                }
                else {
                    sol = sol + 10000;
                }
            }
            else if ((i+d3)>currentdividend)  {
                i = i + d3;
                if (i < currentdividend) {
                    return sol;
                }
                else {
                    sol = sol + 1000;
                }
            }
            else if ((i+d2)>currentdividend)  {
                i = i + d2;
                if (i < currentdividend) {
                    return sol;
                }
                else {
                    sol = sol + 100;
                }
            }
            else if ((i+d1)>currentdividend)  {
                i = i + d1;
                if (i < currentdividend) {
                    return sol;
                }
                else {
                    sol = sol + 10;
                }
            }
            else if (i>currentdividend)  {
                i = i + divisor;
                if (i < currentdividend) {
                    return sol;
                }
                else {
                    sol = sol + 1;
                }
            }
        }
        if (sol >= 2147483647) {
            return 2147483647
        }
        return sol
    }
    return sol;
};