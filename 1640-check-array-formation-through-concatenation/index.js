/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */

let arr, pieces
arr = [15,88], pieces = [[88],[15]]
arr = [49,18,16], pieces = [[16,18,49]]
arr = [91,4,64,78], pieces = [[78],[4,64],[91]]

const canFormArray = (arr, pieces) => {
  const n = arr.length
  const m = pieces.length
};

console.log(canFormArray(arr, pieces))
