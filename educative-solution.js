/*
Iterative Solution
Runtime complexity O(log n)
Memory complexity O(1)


Solution #
Runtime complexity #
The runtime complexity of this solution is linear, O(n)O(n).

Memory complexity #
The memory complexity of this algorithm is constant, O(1)O(1).

The values in the array represent the cost of a stock each day. As we can buy and sell the stock only once, we need to find the best buy and sell prices for which our profit is maximized (or loss is minimized) over a given span of time.

A naive solution, with runtime complexity of O(n^2)O(n
​2
​​ ), is to find the maximum gain between each element and its succeeding elements.

There is a tricky linear solution to this problem that requires maintaining current_buy_price (which is the smallest number seen so far), current_profit, and global_profit as we iterate through the entire array of stock prices. At each iteration, we will compare the current_profit with the global_profit and update the global_profit accordingly.

The basic algorithm is as follows:
*/
let findBuySellStockPrices = function (array) {
  if (!array || array.length < 2) {
    return;
  }

  let currentBuy = array[0];
  let globalSell = array[1];
  let globalProfit = globalSell - currentBuy;

  let currentProfit = 0;

  for (let i = 1; i < array.length; i++) {
    currentProfit = array[i] - currentBuy;

    if (currentProfit > globalProfit) {
      globalProfit = currentProfit;
      globalSell = array[i];
    }

    if (currentBuy > array[i]) {
      currentBuy = array[i];
    }
  }
  return [globalSell - globalProfit, globalSell];
};

let arrayForStockPrices = [1, 2, 3, 4, 3, 2, 1, 2, 5];
let result = findBuySellStockPrices(arrayForStockPrices);
console.log("Buy Price: " + result[0] + ", Sell Price: " + result[1]);

arrayForStockPrices = [8, 6, 5, 4, 3, 2, 1];
result = findBuySellStockPrices(arrayForStockPrices);
console.log("Buy Price: " + result[0] + ", Sell Price: " + result[1]);