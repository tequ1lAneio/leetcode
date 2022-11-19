/**
 * @param {number[]} gain
 * @return {number}
 */

let gain
gain = [-5,1,5,0,-7]
// gain = [-4,-3,-2,-1,4,3,2]

const largestAltitude = (gain) => {
  let ans = 0
  let cur = 0

  for (const m of gain) {
    cur += m
    ans = Math.max(ans, cur)
  }

  return ans
}

console.log(largestAltitude(gain))
