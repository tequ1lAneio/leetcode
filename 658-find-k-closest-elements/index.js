/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

let arr, k, x
arr = [1,2,3,4,5], k = 4, x = 3
arr = [1,2,3,4,5], k = 4, x = -1
arr = [1,1,1,10,10,10], k = 1, x = 9


// sort
// const findClosestElements = (arr, k, x) => {
//   const sortedArr = [...arr]
//   sortedArr.sort((a, b) => {
//     if (Math.abs(a - x) === Math.abs(b - x)) {
//       return a - b
//     } else {
//       return Math.abs(a - x) - Math.abs(b - x)
//     }
//   })
//
//   const ans = sortedArr.slice(0, k)
//   ans.sort((a, b) => a - b)
//   return ans
// }

// double pointer
const binarySearch = (arr, x) => {
  let low = 0
  let high = arr.length - 1

  while (low < high) {
    const mid = Math.floor((low + high) / 2)
    if (arr[mid] >= x) {
      high = mid
    } else {
      low = mid + 1
    }
  }

  return low
}

const findClosestElements = (arr, k, x) => {
  const ans = []

  let right = binarySearch(arr, x) // debug to see what is right, supposingly it should equal or less than x
  let left = right - 1

  while (k > 0) {
    if (left < 0) {
      right++
    } else if (right >= arr.length) {
      left--
    } else if (Math.abs(x - arr[left]) <= Math.abs(arr[right] - x)) {
      left--
    } else {
      right++
    }

    k--
  }

  for (let i = left + 1; i < right; i++) {
    ans.push(arr[i])
  }

  return ans
}

console.log(findClosestElements(arr, k, x))
