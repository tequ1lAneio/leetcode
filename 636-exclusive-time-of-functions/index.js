/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */

let count, logs
// count = 2, logs = ['0:start:0','1:start:2','1:end:5','0:end:6'] // [3, 4]
// count = 1, logs = ['0:start:0','0:start:2','0:end:5','0:start:6','0:end:6','0:end:7']
// count = 2, logs = ['0:start:0','0:start:2','0:end:5','1:start:6','1:end:6','0:end:7']
count = 2, logs = ['0:start:0','0:start:2','0:end:5','1:start:7','1:end:7','0:end:8']
// count = 1, logs = ['0:start:0','0:end:0']

const exclusiveTime = (n, logs) => {
  const stack = []
  const res = new Array(n).fill(0)

  for (const log of logs) {
    const firstColon = log.indexOf(':')
    const lastColon = log.lastIndexOf(':')

    const num = parseFloat(log.substring(0, firstColon))
    const tag = log.substring(firstColon + 1, lastColon)
    const time = parseFloat(log.substring(lastColon + 1))

    if (tag === 'start') {
      if (stack.length) {
        res[stack[stack.length - 1][0]] += time - stack[stack.length - 1][1]
        stack[stack.length - 1][1] = time
      }
      stack.push([num, time])
    } else {
      const last = stack.pop()
      res[last[0]] += time + 1 - last[1]
      if (stack.length) {
        stack[stack.length - 1][1] = time + 1
      }
    }
  }

  return res
}

console.log(exclusiveTime(count, logs))
