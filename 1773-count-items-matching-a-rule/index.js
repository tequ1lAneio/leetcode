/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

let items, ruleKey, ruleValue
items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"

const countMatches = (items, ruleKey, ruleValue) => {
  const map = new Map()
  map.set('type', 0)
  map.set('color', 1)
  map.set('name', 2)
  let ans = 0
  const idx = map.get(ruleKey)

  for (let i = 0; i < items.length; i++) {
    if (items[i][idx] === ruleValue) {
      ans++
    }
  }

  return ans
}

console.log(countMatches(items, ruleKey, ruleValue))
