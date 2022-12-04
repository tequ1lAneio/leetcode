/**
 * @param {string} s
 * @return {number}
 */

let s
s = "dfa12321afd"
// s = "abc1111"

const secondHighest = (s) => {
  let best = -1
  let second = -1

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if ('0'.charCodeAt() <= char.charCodeAt() && char.charCodeAt() <= '9'.charCodeAt()) {
      const num = char.charCodeAt() - '0'.charCodeAt()
      if (num > best) {
        second = best
        best = num
      } else if (num < best && num > second) {
        second = num
      }
    }
  }

  return second
}

console.log(secondHighest(s))
