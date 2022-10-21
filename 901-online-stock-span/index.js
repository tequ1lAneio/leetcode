const StockSpanner = function() {
  this.stack = []
  this.stack.push([-1, Number.MAX_SAFE_INTEGER])
  this.idx = -1
}

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  let ans = 0
  this.idx++
  while(price > this.stack[this.stack.length - 1][0]) {
    this.stack.pop()
  }
  ans = this.idx - this.stack[this.stack.length - 1][0]
  this.stack.push([this.idx, price])

  return ans
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
