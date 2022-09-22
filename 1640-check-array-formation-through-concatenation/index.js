/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */

let arr, pieces
arr = [15,88], pieces = [[88],[15]]
// arr = [49,18,16], pieces = [[16,18,49]]
// arr = [91,4,64,78], pieces = [[78],[4,64],[91]]

const canFormArray = (arr, pieces) => {
  const n = arr.length
  const m = pieces.length
  const map = new Map()

  for (let i = 0; i < m; i++) {
    map.set(pieces[i][0], i);
  }

  for (let i = 0; i < n;) {
    if (!map.has(arr[i])) {
      return false
    }

    const j = map.get(arr[i])
    const len = pieces[j].length
    for (let k = 0; k < len; k++) {
      if (arr[i + k] !== pieces[j][k]) {
        return false
      }
    }
    i += len
  }

  return true
};

console.log(canFormArray(arr, pieces))
