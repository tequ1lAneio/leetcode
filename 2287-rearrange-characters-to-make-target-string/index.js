/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */

let s, target
s = "ilovecodingonleetcode", target = "code"
// s = "abcba", target = "abc"
// s = "abbaccaddaeea", target = "aaaaa"

const rearrangeCharacters = (s, target) => {
  const n = s.length
  const m = target.length
  const count = new Map()
  const targetCount = new Map()

  for (let i = 0; i < m; i++) {
    const key = target[i]
    targetCount.set(key, (targetCount.get(key) || 0) + 1)
  }

  for (let i = 0; i < n; i++) {
    const key = s[i]

    if (targetCount.has(key)) {
      count.set(key, (count.get(key) || 0) + 1)
    }
  }

  let ans = Number.MAX_SAFE_INTEGER

  for (const [key, v] of targetCount.entries()) {
    const totalCount = count.has(key) ? count.get(key) : 0
    ans = Math.min(ans, Math.floor(totalCount / v))

    if (ans === 0) {
      return 0
    }
  }

  return ans
}

console.log(rearrangeCharacters(s, target))
