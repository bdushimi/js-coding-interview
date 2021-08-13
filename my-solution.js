/*
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


//const stocks = [1,2,3,4,3,2,1,2,5]; //expects 1, 5
const stocks = [8, 6, 5, 4, 3, 2, 1]; //expects 6, 5;
// initial profit
let global_profit = stocks[1] - stocks[0];

let buy_max_price = stocks[0];
let sell_max_price = stocks[1];


for (let i = 2; i < stocks.length; i++) {

  current_profit = stocks[i] - stocks[i - 1];

  if (current_profit > global_profit) {

    // check if this global_profil would skyrock if we used previous buy_max_price
    if (buy_max_price > stocks[i - 1]) {

      // Update previous buy_max_price
      buy_max_price = stocks[i - 1];

      // update global_profit to the current_profit
      global_profit = stocks[i] - buy_max_price;

      // store this sell price at which the profit is max
      sell_max_price = stocks[i];
    } else {
      global_profit = stocks[i] - buy_max_price;
      sell_max_price = stocks[i];
    }
  }
}
