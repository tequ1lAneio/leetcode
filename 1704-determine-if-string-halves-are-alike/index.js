/**
 * @param {string} s
 * @return {boolean}
 */

let s
s = "book"
// s = "textbook"

const halvesAreAlike = (s) => {
  const vowels = 'aeiouAEIOU'
  const n = s.length
  const firstHalf = s.substring(0, n / 2)
  const lastHalf = s.substring(n / 2)
  let firstSum = 0
  let lastSum = 0

  for (let i = 0; i < n; i++) {
    if (vowels.indexOf(firstHalf[i]) > -1) {
      firstSum++
    }

    if (vowels.indexOf(lastHalf[i]) > -1) {
      lastSum++
    }
  }

  return firstSum === lastSum
}

console.log(halvesAreAlike(s))
