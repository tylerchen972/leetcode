/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    var min = prices[0];
    var currentsum = 0;
    for (i=1; i<prices.length; i++) {
        if (prices[i]-min>0) {
            currentsum += (prices[i]-min);
        }
        min = prices[i];
    }
    return currentsum
};