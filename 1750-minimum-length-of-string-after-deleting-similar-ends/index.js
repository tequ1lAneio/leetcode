/**
 * @param {string} s
 * @return {number}
 */

let s
s = "ca"
s = "cabaabac"
s = "aabccabba"

const minimumLength = (s) => {
  const n = s.length
  let left = 0
  let right = n - 1

  while (left < right && s[left] === s[right]) {
    const char = s[left]

    while (left <= right && s[left] === char) {
      left++
    }

    while (left <= right && s[right] === char) {
      right--
    }
  }

  return right - left + 1
}

console.log(minimumLength(s))
