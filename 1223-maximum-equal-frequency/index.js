/**
 * @param {number[]} nums
 * @return {number}
 */

let nums
nums = [2,2,1,1,5,3,3,5]
nums = [1,1,1,2,2,2,3,3,3,4,4,4,5]

const maxEqualFreq = function(nums) {
  let count = new Map()
  let freq = new Map()
  let maxFreq = 0

  for (let i = 0; i < nums; i++) {
    if (!count.has(nums[i])) {
      count.set(nums[i], 0)
    }

    count.set(nums[i], count.get(nums[i] + 1))

    maxFreq = Math.max(maxFreq, count.get(nums[i]));
  }

  console.log(count)
};

var maxEqualFreq23 = function(nums) {
  const freq = new Map();
  const count = new Map();
  let res = 0, maxFreq = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!count.has(nums[i])) {
      count.set(nums[i], 0);
    }
    if (count.get(nums[i]) > 0) {
      freq.set(count.get(nums[i]), freq.get(count.get(nums[i])) - 1);
    }
    count.set(nums[i], count.get(nums[i]) + 1);
    maxFreq = Math.max(maxFreq, count.get(nums[i]));
    if (!freq.has(count.get(nums[i]))) {
      freq.set(count.get(nums[i]), 0);
    }
    freq.set(count.get(nums[i]), freq.get(count.get(nums[i])) + 1);
    const ok = maxFreq === 1 ||
      freq.get(maxFreq) * maxFreq + freq.get(maxFreq - 1) * (maxFreq - 1) === i + 1 && freq.get(maxFreq) === 1 ||
      freq.get(maxFreq) * maxFreq + 1 === i + 1 && freq.get(1) === 1;
    if (ok) {
      res = Math.max(res, i + 1);
    }
  }
  return res;
};

console.log(maxEqualFreq(nums))

