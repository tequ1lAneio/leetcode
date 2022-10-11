/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

let s1, s2
s1 = "bank", s2 = "kanb"
s1 = "attack", s2 = "defend"
s1 = "kelb", s2 = "kelb"
s1 = "abcd", s2 = "dcba"

const areAlmostEqual = (s1, s2) => {
  const n = s1.length
  const diff = []

  for (let i = 0; i < n; i++) {
    if (s1[i] !== s2[i]) {
      if (diff.length === 2) {
        return false
      }
      diff.push(i)
    }
  }

  if (diff.length === 0) {
    return true
  }

  if (diff.length !== 2) {
    return false
  }

  return s1[diff[0]] === s2[diff[1]] && s2[diff[0]] === s1[diff[1]]
}
