/**
 * @param {number[][]} pairs
 * @return {number}
 */

let pairs
pairs = [[1,2], [2,3], [3,4]]
// pairs = [[1,2], [1,3], [3,4], [6,8]]
// pairs = [[2,9], [2,3], [4,5]]
pairs = [[-10,-8],[8,9],[-5,0],[6,10],[-6,-4],[1,7],[9,10],[-4,7]]
// pairs = [[2,9], [3,7]]
// greedy
// const findLongestChain = (pairs) => {
//   let ans = 0
//   let cur = -Number.MAX_SAFE_INTEGER
//   pairs.sort((a, b) => a[1] - b[1])
//
//   for (const pair of pairs) {
//     if (pair[0] > cur) {
//       cur = pair[1]
//       ans++
//     }
//   }
//
//   return ans
// }

// dp
// const findLongestChain = (pairs) => {
//   const n = pairs.length
//   pairs.sort((a, b) => a[0] - b[0])
//   const dp = new Array(n).fill(1)
//
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//       if (pairs[j][1] < pairs[i][0]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1)
//       }
//     }
//   }
//
//   return dp[n - 1]
// };
//

// binary + greedy
const binarySearch = (arr, x) => {
  let low = 0
  let high = arr.length - 1

  while (low < high) {
    const mid = Math.floor((high + low) / 2)

    if (arr[mid] >= x) {
      low = mid
    } else {
      low = mid + 1
    }
  }

  return low
}

const findLongestChain = (pairs) => {
  const tails = []
  pairs.sort((a, b) => a[0] - b[0])

  for (const p of pairs) {
    if (!tails.length || tails[tails.length - 1] < p[0]) {
      tails.push(p[1])
    } else {
      const index = binarySearch(tails, p[0])
      tails[index] = Math.min(tails[index], p[1])
    }
  }

  return tails.length
}

console.log(findLongestChain(pairs))
