var maxProfit = function(prices) {
    var maxProfit = 0;
    var minPrice = prices[0];
    var length = prices.length
    for (i=1; i<length; i++) {
        var res = prices[i]-minPrice;
        if (prices[i]<minPrice) {
            minPrice = prices[i];
        }
        if (res>maxProfit) {
            maxProfit = res
        }
    }
    return maxProfit;
};