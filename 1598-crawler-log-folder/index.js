/**
 * @param {string[]} logs
 * @return {number}
 */

let logs
logs = ['d1/','d2/','../','d21/','./']
logs = ['d1/','d2/','./','d3/','../','d31/']
logs = ['d1/','../','../','../']
logs = ['./','../','./']

const minOperations = (logs) => {
  let ans = 0

  for (const log of logs) {
    if (log === './') {
      continue
    } else if (log === '../') {
      if (ans > 0) {
        ans--
      }
    } else {
      ans++
    }
  }

  return ans
}

console.log(minOperations(logs))
