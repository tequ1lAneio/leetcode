/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */

let quality, wage, k
quality = [10,20,5], wage = [70,50,30], k = 2
// quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3

function mincostToHireWorkers(quality, wage, k) {
  const n = quality.length
  let ans = Number.MAX_SAFE_INTEGER
  let indexes = new Array(n).fill(0).map((_, idx) => idx)

  indexes.sort((a, b) => wage[a] * quality[b] - wage[b] * quality[a])

  let totalQuality = 0
  const queue = new MaxPriorityQueue()
  for (let i = 0; i < k - 1; i++) {
    totalQuality += quality[indexes[i]]
    queue.enqueue(quality[indexes[i]])
  }

  for (let i = k - 1; i < n; i++) {
    let idx = indexes[i];
    totalQuality += quality[idx]
    queue.enqueue(quality[idx])
    const totalc = (wage[idx] / quality[idx]) * totalQuality
    ans = Math.min(ans, totalc)
    totalQuality -= queue.dequeue().element
  }

  return ans
}

console.log(mincostToHireWorkers(quality, wage, k))
