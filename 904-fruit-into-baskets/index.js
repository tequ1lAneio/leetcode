/**
 * @param {number[]} fruits
 * @return {number}
 */

let fruits
fruits = [1,2,1]  // 3
// fruits = [0,1,2,2] // 3
// fruits = [1,2,3,2,2]  // 4
// fruits = [3,3,3,1,2,1,1,2,3,3,4]  // 5

const totalFruit = (fruits) => {
  const count = new Map()
  let ans = 0
  let left = 0

  for (let i = 0; i < fruits.length; i++) {
    count.set(fruits[i], (count.get(fruits[i]) || 0) + 1)

    while (count.size > 2) {
      count.set(fruits[left], count.get(fruits[left]) - 1)
      if (count.get(fruits[left]) === 0) {
        count.delete(fruits[left])
      }
      left++
    }

    ans = Math.max(ans, i - left + 1)
  }

  return ans
}

console.log(totalFruit(fruits))
