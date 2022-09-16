/**
 * @param {number} num
 * @return {number}
 */


let num
num = 2736
num = 9973
num = 98368

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
  let arr = [...('' + num)]
  let maxIdx = arr.length - 1
  let idxToUpdate = -1
  let targetIdx = -1
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[maxIdx] < arr[i]) {
      maxIdx = i
    } else if (arr[maxIdx] > arr[i]) {
      idxToUpdate = i
      targetIdx = maxIdx
    }
  }

  if (idxToUpdate > -1) {
    [arr[idxToUpdate], arr[targetIdx]] = [arr[targetIdx], arr[idxToUpdate]]
    return parseInt(arr.join(''))
  } else {
    return num
  }
}

console.log(maximumSwap(num))
