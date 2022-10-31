/**
 * @param {number} n
 * @return {number}
 */

let n
n = 6
// n = 1

const magicalString = function(n) {
  if (n < 4) {
    return 1
  }

  const arr = new Array(n).fill('0')
  const code0 = '0'.charCodeAt()

  arr[0] = '1'
  arr[1] = '2'
  arr[2] = '2'

  let ans = 1
  let i = 2
  let j = 3

  while (j < n) {
    let size = arr[i].charCodeAt() - code0
    const num = 3 ^ (arr[j - 1].charCodeAt() - code0)

    while (size > 0 && j < n) {
      arr[j] = String.fromCharCode(num + code0)

      if (num === 1) {
        ans++
      }
      j++
      size--
    }

    i++
  }

  return ans
}

console.log(magicalString(n))
