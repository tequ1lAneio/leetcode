/**
 * @param {number} n
 * @return {boolean}
 */

let n
n = 12
n = 91
n = 21

const checkPowersOfThree = (n) => {
  while (n) {
    if (n % 3 === 2) {
      return false
    }

    n = Math.floor(n / 3)
  }

  return true
}

console.log(checkPowersOfThree(n))
