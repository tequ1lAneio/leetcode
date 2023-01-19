/**
 * @param {number[][]} orders
 * @return {number}
 */

let orders
orders = [[10,5,0],[15,2,1],[25,1,1],[30,4,0]]
orders = [[7,1000000000,1],[15,3,0],[5,999999995,0],[5,1,1]]

const getNumberOfBacklogOrders = (orders) => {
  let mod = 1000000007
  let buy = new MaxPriorityQueue({ priority: (bid) => bid.price })
  let sell = new MinPriorityQueue({ priority: (bid) => bid.price })
  let total = 0
  for(let [price, amount, orderType] of orders) {
    if (orderType === 0) {
      while (!sell.isEmpty() && sell.front().priority <= price && amount > 0) {
        let head = sell.dequeue().element
        if (amount < head.amount) {
          sell.enqueue({price: head.price, amount: head.amount - amount})
          total -= amount
          amount = 0
        } else {
          amount -= head.amount
          total -= head.amount
        }
      }
      if (amount > 0) buy.enqueue({price, amount}), total += amount
    } else {
      while (!buy.isEmpty() && buy.front().priority >= price && amount > 0)  {
        let head = buy.dequeue().element
        if (amount < head.amount) {
          buy.enqueue({price: head.price, amount: head.amount - amount})
          total -= amount
          amount = 0
        } else {
          amount -= head.amount
          total -= head.amount
        }
      }
      if (amount > 0) sell.enqueue({price, amount}), total += amount
    }
  }
  return total % mod
}

console.log(getNumberOfBacklogOrders(orders))
