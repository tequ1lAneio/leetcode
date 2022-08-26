/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */

let startTime, endTime, queryTime
startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
startTime = [4], endTime = [4], queryTime = 4
startTime = [4], endTime = [4], queryTime = 5
// startTime = [1,1,1,1], endTime = [1,3,2,4], queryTime = 7
// startTime = [9,8,7,6,5,4,3,2,1], endTime = [10,10,10,10,10,10,10,10,10], queryTime = 5
// startTime = [3], endTime = [5], queryTime = 5
// startTime = [1, 2, 3, 6, 8], endTime = [10, 10, 10, 10, 10], queryTime = 3
// startTime = [1, 2, 3, 4, 6], endTime = [0, 0, 0, 0, 0], queryTime = 1

// const busyStudent = (startTime, endTime, queryTime) => {
//   let count = 0
//   for (let i = 0; i < startTime.length; i++) {
//     const start = startTime[i]
//     const end = endTime[i]
//
//     if (queryTime >= start && queryTime <= end) {
//       count++
//     }
//   }
//
//   return count
// }

// Differential array
// const busyStudent = (startTime, endTime, queryTime) => {
//   let ans = 0
//   const maxEndTime = Math.max(...endTime)
//
//   if (maxEndTime < queryTime) {
//     return ans
//   }
//
//   const count = new Array(maxEndTime + 2).fill(0)
//   for (let i = 0; i < endTime.length; i++) {
//     count[startTime[i]]++
//     count[endTime[i] + 1]--
//   }
//
//   for (let i = 0; i <= queryTime; i++) {
//     ans += count[i]
//   }
//
//   return ans
// }


// binary grouped
const busyStudent = (startTime, endTime, queryTime) => {
  startTime.sort((a, b) => a - b)
  endTime.sort((a, b) => a - b)

  const eligibleStarts = getEligibleStarts(startTime, 0, startTime.length - 1, queryTime)
  const eligibleEnds = getEligibleEnds(endTime, 0, endTime.length - 1, queryTime)

  return eligibleStarts - eligibleEnds
}

const getEligibleStarts = (arr, low, high, target) => {
  let res = high + 1

  while (low <= high) {
    const mid = Math.floor((low + high) >> 1)
    if (arr[mid] > target) {
      res = mid
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return res
}

const getEligibleEnds = (arr, low, high, target) => {
  let res = high + 1

  while (low <= high) {
    const mid = Math.floor((low + high) >> 1)
    if (arr[mid] >= target) {
      res = mid
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return res
}

console.log(busyStudent(startTime, endTime, queryTime))
