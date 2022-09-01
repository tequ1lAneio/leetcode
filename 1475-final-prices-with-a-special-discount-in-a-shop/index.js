/**
 * @param {number[]} prices
 * @return {number[]}
 */

let prices
prices = [8,4,6,2,3]
// prices = [1,2,3,4,5]
// prices = [10,1,1,6]
// prices = [6, 4, 5]
// prices = [3,4,5,2]
prices = [5,4,3,2]

// const finalPrices = function(prices) {
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[j] <= prices[i]) {
//         prices[i] = prices[i] - prices[j]
//         break
//       }
//     }
//   }
//
//   return prices
// };

const finalPrices = function(prices) {
  const stack = []
  const ans = []

  for (let i = prices.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] > prices[i]) {
      stack.pop()
    }

    ans[i] = stack.length === 0 ? prices[i] : prices[i] - stack[stack.length - 1]
    stack.push(prices[i])
  }

  return ans
}

console.log(finalPrices(prices))
