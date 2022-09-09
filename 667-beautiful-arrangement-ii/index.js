/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */

let n, k
n = 3, k = 1
n = 3, k = 2

const constructArray = (n, k) => {
  const ans = []

  const neededNums = k + 1
  for (let i = n; i > k + 1; --i) {
    ans.push(i)
  }

  let left = 1
  let right = k + 1

  while (left <= right) {
    ans.push(right)
    right--

    if (left > right) {
      break
    }

    ans.push(left)
    left++
  }
};

console.log(constructArray(n, k))
