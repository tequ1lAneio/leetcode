/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */

// const subdomainVisits = (cpdomains) => {
//   const map = new Map()
//   for (const cp of cpdomains) {
//     let [count, domain] = cp.split(' ')
//     let dotIndex
//     do {
//       dotIndex = domain.indexOf('.')
//       if (map.has(domain)) {
//         map.set(domain, map.get(domain) + Number(count))
//       } else {
//         map.set(domain, Number(count))
//       }
//       domain = domain.slice(dotIndex + 1)
//       console.log(domain, count, dotIndex)
//     } while (dotIndex > -1)
//   }
//
//   const ans = []
//   for (const [domain, count] of map) {
//     ans.push(`${count} ${domain}`)
//   }
//
//   return ans
// }

// optimized
const subdomainVisits = (cpdomains) => {
  const map = new Map()
  for (const cp of cpdomains) {
    const spacePos = cp.indexOf(' ')
    const count = Number(cp.slice(0, spacePos))
    let domain = cp.slice(spacePos + 1)

    let dotIndex
    do {
      dotIndex = domain.indexOf('.')
      if (map.has(domain)) {
        map.set(domain, map.get(domain) + count)
      } else {
        map.set(domain, count)
      }
      domain = domain.slice(dotIndex + 1)
    } while (dotIndex > -1)
  }

  const ans = []
  for (const [domain, count] of map) {
    ans.push(`${count} ${domain}`)
  }

  return ans
}

