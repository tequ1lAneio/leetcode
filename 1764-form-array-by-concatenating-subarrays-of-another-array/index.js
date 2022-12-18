/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */

let groups, nums
groups = [[1,-1,-1],[3,-2,0]], nums = [1,-1,0,1,-1,-1,3,-2,0]
groups = [[10,-2],[1,2,3,4]], nums = [1,2,3,4,10,-2]
groups = [[1,2,3],[3,4]], nums = [7,7,1,2,3,4,7,7]

const canChoose = (groups, nums) => {
  let i = 0
  let k = 0

  while (k < nums.length && i < groups.length) {
    if (check(groups[i], nums, k)) {
      k += groups[i].length
      i++
    } else {
      k++
    }
  }

  return i === groups.length
}

const check = (group, nums, k) => {
  if (k + group.length > nums.length) {
    return false
  }

  for (let i = 0; i < group.length; i++) {
    if (group[i] !== nums[k + i]) {
      return false
    }
  }

  return true
}

console.log(canChoose(groups, nums))
