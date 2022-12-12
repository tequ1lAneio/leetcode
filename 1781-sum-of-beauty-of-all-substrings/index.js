/**
 * @param {string} s
 * @return {number}
 */

let s
s = "aabcb"
s = "aabcbaa"
s = "pgljlqegfyqhs"

const beautySum = (s) => {
  const n = s.length
  let ans = 0

  for (let i = 0; i < n; i++) {
    const count = new Array(26).fill(0)
    let maxFreq = 0

    for (let j = i; j < n; j++) {
      count[s[j].charCodeAt() - 'a'.charCodeAt()]++
      const xx = s[j].charCodeAt() - 'a'.charCodeAt()
      maxFreq = Math.max(maxFreq, count[s[j].charCodeAt() - 'a'.charCodeAt()])

      let minFreq = n
      for (let k = 0; k < 26; k++) {
        if (count[k] > 0) {
          minFreq = Math.min(minFreq, count[k])
        }
      }

      ans += maxFreq - minFreq
    }
  }

  return ans
}

console.log(beautySum(s))
