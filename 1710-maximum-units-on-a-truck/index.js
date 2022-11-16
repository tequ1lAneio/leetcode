/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */

let boxTypes, truckSize
boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10

const maximumUnits = (boxTypes, truckSize) => {
  let ans = 0
  boxTypes.sort((a, b) => b[1] - a[1])

  for (const boxType of boxTypes) {
    const a = boxType[0]
    const b = boxType[1]

    if (a < truckSize) {
      ans += a * b
      truckSize -= a
    } else {
      ans += truckSize * b
      break
    }
  }

  return ans
}

console.log(maximumUnits(boxTypes, truckSize))
