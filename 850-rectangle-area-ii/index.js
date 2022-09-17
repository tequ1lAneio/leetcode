/**
 * @param {number[][]} rectangles
 * @return {number}
 */

let rectangles
rectangles = [[0,0,2,2],[1,0,2,3],[1,0,3,1]]
rectangles = [[0,0,1000000000,1000000000]]
rectangles = [[224386961,128668997,546647847,318900555],[852286866,238086790,992627088,949888275],[160239672,137108804,398130330,944807066],[431047948,462092719,870611028,856851714],[736895365,511285772,906155231,721626624],[289309389,607009433,558359552,883664714],[780746435,397872372,931219192,863727103],[573523994,124874359,889018012,471879750],[619886375,149607927,727026507,446976526],[51739879,716225241,115331335,785850603],[171077223,267051983,548436248,349498903],[314437215,169054168,950814572,481179241],[64126215,646689712,595562376,829164135],[926011655,481539702,982179297,832455610],[40370235,231510218,770233582,851797196],[292546319,45032676,413358795,783606009],[424366277,369838051,453541063,777456024],[211837048,142665527,217366958,952362711],[228416869,402115549,672143142,644930626],[755018294,194555696,846854520,939022548],[192890972,586071668,992336688,759060552],[127869582,392855032,338983665,954245205],[665603955,208757599,767586006,276627875],[260384651,10960359,736299693,761411808],[46440611,559601039,911666265,904518674],[54013763,90331595,332153447,106222561],[73093292,378586103,423488105,826750366],[327100855,516514806,676134763,653520887],[930781786,407609872,960671631,510621750],[35479655,449171431,931212840,617916927]]

const rectangleArea = (rectangles) => {
  const MOD = 1e9 + 7
  const n = rectangles.length
  const set = new Set()

  for (const rect of rectangles) {
    set.add(rect[1])
    set.add(rect[3])
  }

  const highBound = [...set]
  highBound.sort((a, b) => a - b)
  const m = highBound.length
  const seg = new Array(m - 1).fill(0)

  const sweep = []
  for (let i = 0; i < n; i++) {
    sweep.push([rectangles[i][0], i, 1])
    sweep.push([rectangles[i][2], i, -1])
  }

  sweep.sort((a, b) => {
    if (a[0] != b[0]) {
      return a[0] - b[0]
    } else if (a[1] != b[1]) {
      return a[1] - b[1]
    } else {
      return a[2] - b[2]
    }
  })

  let ans = 0
  for (let i = 0; i < sweep.length; i++) {
    let j = i

    while (j + 1 < sweep.length && sweep[i][0] === sweep[j + 1][0]) {
      j++
    }

    if (j + 1 === sweep.length) {
      break
    }

    for (let k = i; k <= j; k++) {
      const arr = sweep[k]
      const idx = arr[1]
      const diff = arr[2]
      const left = rectangles[idx][1]
      const right = rectangles[idx][3]

      for (let x = 0; x < m - 1; x++) {
        if (left <= highBound[x] && highBound[x + 1] <= right) {
          seg[x] += diff
        }
      }
    }

    let cover = 0
    for (let k = 0; k < m - 1; k++) {
      if (seg[k] > 0) {
        cover += (highBound[k + 1] - highBound[k])
      }
    }

    ans += cover * (sweep[j + 1][0] - sweep[j][0])
    i = j
  }

  return ans % MOD
}

console.log(rectangleArea(rectangles))
