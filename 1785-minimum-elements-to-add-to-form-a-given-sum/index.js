const _ = require('lodash')
/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */

let nums, limit, goal
nums = [1,-1,1], limit = 3, goal = -4
// nums = [1,-10,9,1], limit = 100, goal = 0

const minElements = (nums, limit, goal) => {
  const sum = _.sum(nums)
  const diff = Math.abs(sum - goal)
  return Math.abs(Math.floor((diff + limit - 1) / limit))
}

console.log(minElements(nums, limit, goal))
