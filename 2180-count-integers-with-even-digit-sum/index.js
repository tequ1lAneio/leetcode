/**
 * @param {number} num
 * @return {number}
 */

let num
num = 4
num = 30

const countEven = (num) => {
  let ans = 0

  for (let i = 1; i <= num; i++) {
    let x = i, sum = 0;

    while (x !== 0) {
      sum += x % 10
      x = Math.floor(x / 10)
    }

    if (sum % 2 === 0) {
      ans++
    }
  }

  return ans
}

console.log(countEven(num))
