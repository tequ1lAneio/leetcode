/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

let s1, s2
s1 = "abc", s2 = "bca"
// s1 = "abc", s2 = "bad"

// const checkPermutation = function(s1, s2) {
//   const sortedS1 = s1.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt())
//   const sortedS2 = s2.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt())
//
//   return sortedS1.join('') === sortedS2.join('')
// }

// hash
const checkPermutation = function(s1, s2) {
  if (s1.length !== s2.length) {
    return false
  }
  let map = new Map()

  for (const char of s1) {
    if (!map.has(char)) {
      map.set(char, 1)
    } else {
      map.set(char, map.get(char) + 1)
    }
  }

  for (const char of s2) {
    if ( !map.has(char) || map.get(char) === 0) {
      return false
    }
    map.set(char, map.get(char) - 1)
  }

  return true
}

console.log(checkPermutation(s1, s2))
