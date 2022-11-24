/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */

let lowLimit, highLimit
lowLimit = 1, highLimit = 10
lowLimit = 5, highLimit = 15
lowLimit = 19, highLimit = 28
lowLimit = 11, highLimit = 104

const countBalls = (lowLimit, highLimit) => {
  const boxes = new Map()
  let ans = 0

  for (let i = lowLimit; i <= highLimit; i++) {
    let sum = 0
    let cur = i

    while (cur !== 0) {
      sum += cur % 10
      cur = Math.floor(cur / 10)
    }

    if (boxes.has(sum)) {
      boxes.set(sum, boxes.get(sum) + 1)
    } else {
      boxes.set(sum, 1)
    }

    ans = Math.max(ans, boxes.get(sum))
  }

  return ans
}

console.log(countBalls(lowLimit, highLimit))
