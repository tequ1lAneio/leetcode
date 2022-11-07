/**
 * @param {string} s
 * @return {number}
 */

let s
s = 'abcabcbb'
s = "bbbbb"
// s = "pwwkew"

// const lengthOfLongestSubstring = (s) => {
//   const n = s.length
//   let ans = 0
//
//   for (let i = 0; i < n; i++) {
//     const map = new Map()
//     for (let j = i; j < n; j++) {
//       if (map.has(s[j])) {
//         break
//       } else {
//         map.set(s[j], 1)
//         ans = Math.max(ans, j - i + 1)
//       }
//     }
//   }
//
//   return ans
// }

const lengthOfLongestSubstring = (s) => {
  const n = s.length
  const set = new Set()

  let p = 0
  let ans = 1

  for (let i = 0; i < n; i++) {

  }
}

console.log(lengthOfLongestSubstring(s))
