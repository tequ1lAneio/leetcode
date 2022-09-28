/**
 * @param {number} k
 * @return {number}
 */

let k
k = 5
k = 12

// const getKthMagicNumber = (k) => {
  // const dp = new Array(k + 1).fill(0)
  // dp[1] = 1
  // let p3 = 1
  // let p5 = 1
  // let p7 = 1
  //
  // for (let i = 2; i <= k; i++) {
  //   let num3 = dp[p3] * 3
  //   let num5 = dp[p5] * 5
  //   let num7 = dp[p7] * 7
  //
  //   console.log("====", num3, num5, num7)
  //   dp[i] = Math.min(num3, num5, num7)
  //
  //   if (dp[i] === num3) {
  //     p3++
  //   }
  //
  //   if (dp[i] === num5) {
  //     p5++
  //   }
  //
  //   if (dp[i] === num7) {
  //     p7++
  //   }
  // }
  //
  // return dp[k]
// }

// min heap
const getKthMagicNumber = (k) => {
  const factors = [3, 5, 7]
  const seen = new Set()
  const queue = new PriorityQueue()

  for (let i = 0; i < k; i++) {
    min = queue.dequeue()

    for (const f of factors) {
      const x = f * min
      if (!seen.has(x)) {
        seen.add(x)
        queue.enqueue(x)
      }
    }
  }

  return min
}

console.log(getKthMagicNumber(k))
