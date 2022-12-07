/**
 * @param {string} word
 * @return {number}
 */

let word
word = "a123bc34d8ef34"
// word = "leet1234code234"
// word = "a1b01c001"

const numDifferentIntegers = (word) => {
  const n = word.length
  const ans = new Set()

  for (let p1 = 0, p2 = 0;;) {
    while (!isDigit(word[p1]) && p1 < n) {
      p1++
    }

    if (p1 === n) {
      break
    }

    p2 = p1
    while (isDigit(word[p2]) && p2 < n) {
      p2++
    }

    while (word[p1] === '0' && p2 - p1 > 1) {
      p1++
    }

    ans.add(word.slice(p1, p2))
    p1 = p2
  }

  return ans.size
}

const isDigit = (char) => {
  return char >= '0' && char <= '9'
}

console.log(numDifferentIntegers(word))
