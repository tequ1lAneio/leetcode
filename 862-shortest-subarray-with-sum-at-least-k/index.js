/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

let nums, k
nums = [1], k = 1
nums = [1,2], k = 4
nums = [2,-1,2], k = 3

const shortestSubarray = function(nums, k) {
  const n = nums.length
  const preSumArr = new Array(n + 1).fill(0)

  for (let i = 0; i < n; i++) {
    preSumArr[i + 1] = preSumArr[i] + nums[i]
  }

  let ans = n + 1
  const queue = []

  for (let i = 0; i <= n; i++) {
    const curSum = preSumArr[i]

    while (queue.length > 0 && curSum - preSumArr[queue[0]] >= k) {
      ans = Math.min(ans, i - queue.shift())
    }

    while (queue.length > 0 && preSumArr[queue[queue.length - 1]]) {
      queue.pop()
    }

    queue.push(i)
  }

  return ans < n + 1 ? ans : -1
}

console.log(shortestSubarray(nums, k))
