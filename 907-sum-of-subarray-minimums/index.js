/**
 * @param {number[]} arr
 * @return {number}
 */

let arr
arr = [3,1,2,4]
// arr = [11,81,94,43,3]

const sumSubarrayMins = function(arr) {
  const MOD = 1000000007
  const n = arr.length
  const left = new Array(n).fill(0)
  const right = new Array(n).fill(0)
  let stack = []

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[i] <= arr[stack[stack.length - 1]]) {
      stack.pop()
    }

    left[i] = i - (stack.length === 0 ? -1 : stack[stack.length - 1])
    stack.push(i)
  }

  stack = []
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[i] < arr[stack[stack.length - 1]]) {
      stack.pop()
    }

    right[i] = (stack.length === 0 ? n : stack[stack.length - 1]) - i
    stack.push(i)
  }

  let ans = 0
  for (let i = 0; i < n; i++) {
    ans = (ans + left[i] * right[i] * arr[i]) % MOD
  }

  return ans
}

console.log(sumSubarrayMins(arr))
