/**
 * @param {number[]} arr
 * @return {number}
 */

let arr
arr = [4,3,2,1,0]
arr = [1,0,2,3,4]

const maxChunksToSorted = (arr) => {
  let ans = 0
  let max = 0

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(arr[i], max)
    if (i === max) {
      ans++
    }
  }

  return ans
}

console.log(maxChunksToSorted(arr))
