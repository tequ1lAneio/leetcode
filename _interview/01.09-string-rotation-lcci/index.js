/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
let s1, s2
s1 = "waterbottle", s2 = "erbottlewat"
// s1 = "aa", s2 = "aba"


const isFlippedString = (s1, s2) => {
  const m = s1.length
  const n = s2.length
  if (m !== n) {
    return false
  }

  if (n === 0) {
    return true
  }

  let flag = true
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (s1[(i + j) % n] !== s2[j]) {
        flag = false
        break
      }
    }

    if (flag) {
      return true
    } else {
      flag = true
    }
  }

  return false
}

// const isFlippedString = (s1, s2) => s1.length === s2.length && (s1 + s1).indexOf(s2) !== -1

console.log(isFlippedString(s1, s2))
