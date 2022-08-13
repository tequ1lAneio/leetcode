/**
 * @param {number[]} arr
 * @return {number}
 */

let arr
arr = [5, 4, 3, 2, 1]
arr = [2, 1, 3, 4, 4]
arr = [8,18,3,5,3,6,9,16,4,11,22,32,23,24,30,29,35,22,24,33]


// // hash
// const maxChunksToSorted = function(arr) {
//   const n = arr.length
//   const count = new Map()
//   let res = 0
//
//   const sortedArr = new Array(n).fill(0);
//   sortedArr.splice(0, n, ...arr);
//   sortedArr.sort();
//   sortedArr.sort((a, b) => a - b);
//
//   for (let i = 0; i < n; i++) {
//     const a = arr[i]
//     const b = sortedArr[i]
//
//     count.set(a, (count.get(a) || 0) + 1)
//     if (count.get(a) === 0) {
//       count.delete(a)
//     }
//
//     count.set(b, (count.get(b) || 0) - 1)
//     if (count.get(b) === 0) {
//       count.delete(b)
//     }
//
//     if (count.size === 0) {
//       res++
//     }
//   }
//
//   return res
// };

// monotonically stack
const maxChunksToSorted = (arr) => {
  const stack = []

  for (const num of arr) {
    if (stack.length === 0 || num >= stack[stack.length - 1]) {
      stack.push(num)
    } else {
      const max = stack.pop()
      while (stack.length > 0 && num < stack[stack.length - 1]) {
        stack.pop()
      }
      stack.push(max)
    }
  }

  return stack.length
}

console.log(maxChunksToSorted(arr))
