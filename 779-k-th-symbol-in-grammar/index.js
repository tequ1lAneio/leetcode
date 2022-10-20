/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

let n, k
// n = 1
// k = 1
// n = 2
// k = 1
n = 2
k = 2

const kthGrammar = (n, k) => {
  if (n === 1) {
    return 0
  }

  return (k & 1) ^ 1 ^ kthGrammar(n - 1, (k + 1) / 2);
}


const kthGrammar = (n, k) => {
  if (k === 1) {
    return 0
  }
  if (k > (1 << (n - 2))) {
    return 1 ^ kthGrammar(n - 1, k - (1 << (n - 2)))
  }
  return kthGrammar(n - 1, k)
}

const kthGrammar = (n, k) => {
  k--
  let res = 0
  while (k > 0) {
    k &= k - 1
    res ^= 1
  }
  return res
}

console.log(kthGrammar(n, k))
