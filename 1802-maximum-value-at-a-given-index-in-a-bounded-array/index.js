/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */

let n, index, maxSum
n = 4, index = 2,  maxSum = 6
n = 6, index = 1,  maxSum = 10

const maxValue = (n, index, maxSum) => {
  let left = 1, right = maxSum
  while (left < right) {
    const mid = Math.floor((left + right + 1) / 2)
    if (valid(mid, n, index, maxSum)) {
      left = mid
    } else {
      right = mid - 1
    }
  }
  return left
}

const valid = (mid, n, index, maxSum) => {
  let left = index
  let right = n - index - 1
  return mid + cal(mid, left) + cal(mid, right) <= maxSum
}

const cal = (big, length) => {
  if (length + 1 < big) {
    const small = big - length
    return Math.floor((big - 1 + small) * length / 2)
  } else {
    const ones = length - (big - 1)
    return Math.floor(big * (big - 1) / 2) + ones
  }
}

console.log(maxValue(n, index, maxSum))
