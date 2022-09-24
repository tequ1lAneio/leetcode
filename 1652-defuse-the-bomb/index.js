/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */

let code, k
code = [5,7,1,4], k = 3
code = [1,2,3,4], k = 0
code = [2,4,9,3], k = -2

code = [5,7,1,4,6,2], k = -3

const decrypt = (code, k) => {
  const n = code.length
  const ans = []

  if (k === 0) {
    return new Array(n).fill(0)
  }

  const newCode = new Array(2 * n).fill(0).map((_, i) => code[i % n])

  let l = k > 0 ? 1 : n + k
  let r = k > 0 ? k : n - 1
  let w = 0

  for (let i = l; i <= r; i++) {
    w += newCode[i]
  }

  for (let i = 0; i < n; i++) {
    ans.push(w)
    w -= newCode[l]
    w += newCode[r + 1]
    l++
    r++
  }

  return ans
}

console.log(decrypt(code, k))
