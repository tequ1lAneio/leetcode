/**
 * @param {string[]} operations
 * @return {number}
 */

let operations
operations = ["--X","X++","X++"]
operations = ["++X","++X","X++"]
// operations = ["X++","++X","--X","X--"]

const finalValueAfterOperations = (operations) => {
  let ans = 0

  for (const operation of operations) {
    if (operation === '++X' || operation === 'X++') {
      ++ans
    } else {
      --ans
    }
  }

  return ans
}

console.log(finalValueAfterOperations(operations))
