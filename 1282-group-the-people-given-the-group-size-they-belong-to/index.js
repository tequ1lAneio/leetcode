/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */

let groupSizes = []
groupSizes = [3,3,3,3,3,1,3]
groupSizes = [2,1,3,3,3,2]
groupSizes = [2,2,1,1,1,1,1,1]

const groupThePeople = function(groupSizes) {
  const groups = new Map()

  for (let i = 0; i < groupSizes.length; i++) {
    const size = groupSizes[i]
    if (!groups.has(size)) {
      groups.set(size, [])
    }
    groups.get(size).push(i)
  }

  const res = []
  for (const [key, members] of groups.entries()) {
    const count = members.length / key
    for (let i = 0; i < count; i++) {
      const current = []
      for (let j = 0; j < key; j++) {
        current.push(members[i  * key + j])
      }
      res.push(current)
    }
  }

  return res
};

console.log(groupThePeople(groupSizes))
