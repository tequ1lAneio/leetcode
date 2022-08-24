/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */

let target, arr
target = [1,2,3,4], arr = [2,4,1,3]
target = [7], arr = [7]
target = [3,7,9], arr = [3,7,11]

const canBeEqual = (target, arr) => {
  arr.sort((a, b) => a - b)
  target.sort((a, b ) => a - b)

  return target.toString() === arr.toString()
};

// hashMap
const canBeEqual = (target, arr) => {
  const targetCount = new Map()
  const arrCount = new Map()

  for (const num of target) {
    targetCount.set(num, (targetCount.get(num) || 0) + 1)
  }

  for (const num of arr) {
    arrCount.set(num, (arrCount.get(num) || 0) + 1)
  }

  for (const [key, value] of Object.entries(targetCount)) {
    if (!arrCount.has(key) || arrCount.get(key) !== value) {
      return false
    }
  }

  return true
}

console.log(canBeEqual(target, arr))
