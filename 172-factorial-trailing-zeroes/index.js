/**
 * @param {number} n
 * @return {number}
 */

let n
n = 3
n = 5
n = 0
n = 26
n = 10

// const trailingZeroes = (n) => {
//   let ans = 0
//
//   while (n > 0) {
//     n = Math.floor(n / 5)
//     ans += n
//   }
//
//   return ans
// }

const trailingZeroes = (n) => {
  let ans = 0

  for (let i = 5; i <= n; i += 5) {
    for (let j = i; j % 5 === 0; j /= 5) {
      ans++
    }
  }

  return ans
}

console.log(trailingZeroes(n))
