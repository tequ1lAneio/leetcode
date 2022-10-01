/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */

let start
start = "RXXLRXRXL", end = "XRLXXRRLX"

const canTransform = (start, end) => {
  const n = start.length
  let i = 0
  let j = 0

  while (i < n && j < n) {
    while (i < n && start[i] === 'X') {
      i++
    }

    while (j < n && end[j] === 'X') {
      j++
    }

    if (i < n && j < n) {
      if (start[i] !== end[j]) {
        return false
      }

      if (start[i] === 'L' && j > i) {
        return false
      }

      if (start[i] === 'R' &&  i > j)  {
        return false
      }

      i++
      j++
    }
  }

  while (i < n) {
    if (start[i] !== 'X') {
      return false
    }
    i++
  }

  while (j < n) {
    if (end[j] !== 'X') {
      return false
    }
    j++
  }

  return true
}

console.log(canTransform(start, end))
