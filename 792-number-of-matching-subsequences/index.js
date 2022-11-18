/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */

let s, words
s = "abcde", words = ["a","bb","acd","ace"]
s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
s = "rwpddkvbnnuglnagtvamxkqtwhqgwbqgfbvgkwyuqkdwhzudsxvjubjgloeofnpjqlkdsqvruvabjrikfwronbrdyyjnakstqjac", words = ["wpddkvbnn","lnagtva","kvbnnuglnagtvamxkqtwhqgwbqgfbvgkwyuqkdwhzudsxvju","rwpddkvbnnugln","gloeofnpjqlkdsqvruvabjrikfwronbrdyyj","vbgeinupkvgmgxeaaiuiyojmoqkahwvbpwugdainxciedbdkos","mspuhbykmmumtveoighlcgpcapzczomshiblnvhjzqjlfkpina","rgmliajkiknongrofpugfgajedxicdhxinzjakwnifvxwlokip","fhepktaipapyrbylskxddypwmuuxyoivcewzrdwwlrlhqwzikq","qatithxifaaiwyszlkgoljzkkweqkjjzvymedvclfxwcezqebx"]

const numMatchingSubseq = (s, words) => {
  const pos = new Array(26).fill(0).map(_ => new Array())
  for (let i = 0; i < s.length; i++) {
    pos[s[i].charCodeAt() - 'a'.charCodeAt()].push(i)
  }

  let ans = words.length

  for (const word of words) {
    if (word.length > s.length) {
      ans--
      continue
    }

    let p = -1

    for (let i = 0; i < word.length; i++) {
      const char = word[i]

      if (pos[char.charCodeAt() - 'a'.charCodeAt()].length === 0 || pos[char.charCodeAt() - 'a'.charCodeAt()][pos[char.charCodeAt() - 'a'.charCodeAt()].length - 1] <= p) {
        ans--
        break
      }

      p = binarySearch(pos[char.charCodeAt() - 'a'.charCodeAt()], p)
    }
  }

  return ans
}

const binarySearch = (list, target) => {
  let left = 0, right = list.length - 1
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (list[mid] > target) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return list[left]
}

console.log(numMatchingSubseq(s, words))
