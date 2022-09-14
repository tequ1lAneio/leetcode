/**
 * @param {number} num
 * @return {number}
 */


let num
num = 2736
// num = 9973

// const maximumSwap = (num) => {
//   let ans = num
//   let arr = [...('' + num)]
//
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       ;[arr[i], arr[j]] = [arr[j], arr[i]]
//       ans = Math.max(ans, parseInt(arr.join('')))
//       ;[arr[i], arr[j]] = [arr[j], arr[i]]
//     }
//   }
//
//   return ans
// }

// greedy
const maximumSwap = num => {
  let ans = num
  let arr = [...('' + num)]
  let max = [-1, 0]

  for (let i = arr.length - 1; i >= 0; i--) {
    const val = parseInt(arr[i])
    if (val > max[1]) {
      max[0] = i
      max[1] = val
    }
  }

  if (max[0] === 0) {
    return
  }

}

console.log(maximumSwap(num))
