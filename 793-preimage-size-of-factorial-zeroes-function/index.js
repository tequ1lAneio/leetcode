/**
 * @param {number} k
 * @return {number}
 */

let k
k = 0
k = 5
k = 3

const getNumOfZero = (n) => {
  let res = 0

  while (n !== 0) {
    n = Math.floor(n / 5)
    res += n
  }

  return res
}

const helper = (k) => {
  let low = 0
  let high = k * 5

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)

    if (getNumOfZero(mid) < k) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return high
}

const preimageSizeFZF = (k) => {
  return helper(k + 1) - helper(k)
}

console.log(preimageSizeFZF(k))
