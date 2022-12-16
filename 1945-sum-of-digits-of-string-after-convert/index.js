/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

let s, k
s = "iiii", k = 1
// s = "leetcode", k = 2

const getLucky = (s, k) => {
  const n = s.length
  let aCode = 'a'.charCodeAt()
  let str = ''

  for (let i = 0; i < n; i++) {
    str += s[i].charCodeAt() - aCode + 1
  }

  for (let i = 0; i < k; i++) {
    let sum = 0
    for (let j = 0; j < str.length; j++) {
      sum += str[j].charCodeAt() - '0'.charCodeAt()
    }

    str = '' + sum
  }

  return Number(str)
}

console.log(getLucky(s, k))
