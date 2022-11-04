/**
 * @param {number} target
 * @return {number}
 */

let target
target = 2
target = 3
// target = 7

const reachNumber = (target) => {
  let ans = 0
  let cur = 0
  target = Math.abs(target)

  while (cur < target || (cur - target) % 2 !== 0) {
    cur += ++ans
  }

  return ans
}

console.log(reachNumber(target))
