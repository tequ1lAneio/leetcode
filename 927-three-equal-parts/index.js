const _ = require('lodash')
/**
 * @param {number[]} arr
 * @return {number[]}
 */

let arr
arr = [1,0,1,0,1]
arr = [1,1,0,1,1]
arr = [1,1,0,0,1]

const threeEqualParts = (arr) => {
  const sum = _.sum(arr)
  if (sum % 3 !== 0) {
    return [-1, -1]
  }

  if (sum === 0) {
    return [0, 2]
  }

  const partial = sum / 3

  let first = 0
  let second = 0
  let third = 0
  let cur = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      if (cur === 0) {
        first = i
      } else if (cur === partial) {
        second = i
      } else if (cur === 2 * partial) {
        third = i
      }

      cur++
    }
  }

  let len = arr.length - third
  if (len + first <= second && second + len <= third) {
    let i = 0
    while (third + i < arr.length) {
      if (arr[first + i] !== arr[second + i] || arr[second + i] !== arr[third + i]) {
        return [-1, -1]
      }
      i++
    }
    return [first + len - 1, second + len]
  }

  return [-1, -1]
}

console.log(threeEqualParts(arr))
