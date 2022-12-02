/**
 * @param {string} boxes
 * @return {number[]}
 */

let boxes
boxes = "110"
boxes = "001011"

// const minOperations = (boxes) => {
//   const n = boxes.length
//   const ans = []
//
//   for (let i = 0; i < n; i++) {
//     let sum = 0
//
//     for (let j = 0; j < n; j++) {
//       if (boxes[j] === '1') {
//         sum += Math.abs(j - i)
//       }
//     }
//
//     ans.push(sum)
//   }
//
//   return ans
// }

const minOperations = (boxes) => {
  const n = boxes.length
  let left = boxes[0].charCodeAt() - '0'.charCodeAt()
  let right = 0
  let operations = 0

  for (let i = 1; i < n; i++) {
    if (boxes[i] === '1') {
      right++
      operations += i
    }
  }

  const ans = new Array(n).fill(0)
  ans[0] = operations

  for (let i = 1; i < n; i++) {
    operations += left - right

    if (boxes[i] === '1') {
      left++
      right--
    }

    ans[i] = operations
  }

  return ans
}

console.log(minOperations(boxes))
