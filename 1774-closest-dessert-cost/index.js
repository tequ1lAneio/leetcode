/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */

let baseCosts, toppingCosts, target
baseCosts = [1,7], toppingCosts = [3,4], target = 10
baseCosts = [2,3], toppingCosts = [4,5,100], target = 18
// baseCosts = [3,10], toppingCosts = [2,5], target = 9
// baseCosts = [10], toppingCosts = [1], target = 1

// enumeration
// const closestCost = (baseCosts, toppingCosts, target) => {
//   let ans = Math.min(...baseCosts)
//
//   const dfs = (toppingCosts, p, curCost, target) => {
//     if (Math.abs(ans - target) < curCost - target) {
//       return
//     } else if (Math.abs(ans - target) >= Math.abs(target - curCost)) {
//       if (Math.abs(ans - target) > Math.abs(target - curCost)) {
//         ans = curCost
//       } else {
//         ans = Math.min(ans, curCost)
//       }
//     }
//
//     if (p === toppingCosts.length) {
//       return
//     }
//
//     dfs(toppingCosts, p + 1, curCost + toppingCosts[p] * 2, target)
//     dfs(toppingCosts, p + 1, curCost + toppingCosts[p], target)
//     dfs(toppingCosts, p + 1, curCost, target)
//   }
//
//   for (const cost of baseCosts) {
//     dfs(toppingCosts, 0, cost, target)
//   }
//
//   return ans
// }

// dp
const closestCost = (baseCosts, toppingCosts, target) => {
  const min = Math.min(...baseCosts)
  if (min >= target) {
    return min
  }

  const can = new Array(target + 1).fill(0)

  let ans = 2 * target - min
  for (const cost of baseCosts) {
    if (cost <= target) {
      can[cost] = true
    } else {
      ans = Math.min(ans, cost)
    }
  }

  for (const topping of toppingCosts) {
    for (let count = 0; count < 2; count++) {
      for (let i = target; i > 0; i--)  {
        if (can[i] && i + topping > target) {
          ans = Math.min(ans, i + topping)
        }

        if (i - topping > 0) {
          can[i] = can[i] | can[i - topping]
        }
      }
    }
  }

  for (let i = 0; i <= ans - target; i++) {
    if (can[target - i]) {
      return target - i
    }
  }

  return ans
}

console.log(closestCost(baseCosts, toppingCosts, target))
