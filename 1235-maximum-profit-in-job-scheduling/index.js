/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */

let startTime, endTime, profit
startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
// startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]

const jobScheduling = (startTime, endTime, profit) => {
  const n = startTime.length
  const jobs = new Array(n).fill(0).map((_, i) => [startTime[i], endTime[i], profit[i]])
  jobs.sort((a, b) => a[1] - b[1])
  const dp = new Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    const k = binarySearch(jobs, i - 1, jobs[i - 1][0])
    dp[i] = Math.max(dp[i - 1], dp[k] + jobs[i - 1][2])
  }

  return dp[n]
}

const binarySearch = (jobs, right, target) => {
  let left = 0

  while (left < right) {
    const mid = Math.floor((right + left) / 2);

    if (jobs[mid][1] <= target) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left
}

console.log(jobScheduling(startTime, endTime, profit))
