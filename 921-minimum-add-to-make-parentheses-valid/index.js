/**
 * @param {string} s
 * @return {number}
 */

let s
s = "())"
// s = "((("
// s = ")()"

const minAddToMakeValid = function(s) {
  const n = s.length
  let ans = 0
  let leftCount = 0

  for (let i = 0; i < n; i++) {
    if (s[i] === '(') {
      leftCount++
    } else {
      if (leftCount > 0) {
        leftCount--
      } else {
        ans++
      }
    }
  }

  ans += leftCount
  return ans
}

console.log(minAddToMakeValid(s))
