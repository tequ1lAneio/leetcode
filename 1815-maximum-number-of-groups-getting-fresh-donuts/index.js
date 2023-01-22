/**
 * @param {number} batchSize
 * @param {number[]} groups
 * @return {number}
 */

let batchSize, groups
batchSize = 3, groups = [1,2,3,4,5,6]
batchSize = 4, groups = [1,3,2,5,2,2,1,6]

function useMask(nums, m) {
  const n = nums.length
  const pow = new Array(n + 1).fill(0).map((_, idx) => Math.pow(m, idx))
  let data = 0
  for (let i = n - 1; i >= 0; i--) {
    data = data * m + nums[i]
  }
  if (data > Number.MAX_SAFE_INTEGER) {
    throw new Error('超出最大数字范围，要不还是换个语言吧')
  }
  const get = (index) => {
    if (index < 0 || index >= n)
      return undefined
    return Math.trunc(data / pow[index]) % m
  };
  const set = (index, val) => {
    if (index < 0 || index >= n || val >= m)
      return false;
    const l = Math.trunc(data / pow[index + 1])
    const r = data % pow[index]
    data = (l * m + val) * pow[index] + r
    return true;
  };
  const toArray = () => {
    let t = data
    const res = []
    while (t) {
      res.push(t % m)
      t = Math.trunc(t / m)
    }
    return res;
  };
  const value = () => data
  return { get, set, value, toArray }
}

const maxHappyGroups = (batchSize, groups) => {
  const cnt = groups.reduce((cnt, g) => ++cnt[g % batchSize] && cnt, new Array(batchSize).fill(0))
  const memo = new Map()
  const mask = useMask([0, ...cnt.slice(1)], 31)

  function dfs(mask) {
    const key = mask.value()
    if (key === 0)
      return 0
    if (memo.has(key))
      return memo.get(key)
    const sum = mask.toArray().reduce((acc, v, idx) => acc + (v * idx), 0)
    let res = 0

    for (let i = 1; i < batchSize; i++) {
      const amount = mask.get(i)
      if (amount === 0)
        continue
      mask.set(i, amount - 1)
      let count = dfs(mask)
      mask.set(i, amount)

      if ((sum - i) % batchSize === 0) {
        count++
      }
      res = Math.max(res, count)
    }
    memo.set(key, res)
    return res
  }

  return dfs(mask) + cnt[0]
}

console.log(maxHappyGroups(batchSize, groups))
