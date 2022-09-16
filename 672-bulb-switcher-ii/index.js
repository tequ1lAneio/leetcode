/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */

let n, presses
n = 1, presses = 1  // 2
n = 2, presses = 1  // 3
n = 3, presses = 1  // 4

// enumerate all situations
const flipLights = (n, presses) => {
  if (presses === 0) {
    return 1
  }

  if (n === 1) {
    return 2
  }

  if (n === 2) {
    return presses === 1 ? 3 : 4
  }

  return presses === 1 ? 4 : presses === 2 ? 7 : 8
};

console.log(flipLights(n, presses))
