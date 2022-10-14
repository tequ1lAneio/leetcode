/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */

let target, n
target = [1,3], n = 3
// target = [1,2,3], n = 3
// target = [1,2], n = 4

const buildArray = (target, n) => {
  const ans = []
  let cur = 0

  for (const num of target) {
    for (let i = 0; i < num - cur - 1; i++) {
      ans.push('Push')
      ans.push('Pop')
    }

    cur = num
    ans.push('Push')
  }

  return ans
}

console.log(buildArray(target, n))
