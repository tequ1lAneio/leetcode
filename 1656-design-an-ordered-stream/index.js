/**
 * @param {number} n
 */
function OrderedStream(n) {
  this.ptr = 0
  this.elements = new Array(n)
}

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
// OrderedStream.prototype.insert = function(idKey, value) {
//   const index.js = idKey - 1
//   this.elements[index.js] = value
//
//   if (idKey > this.elements.length) {
//     return []
//   }
//
//   if (this.ptr === index.js) {
//     const res = []
//
//     for (let i = index.js; i < this.elements.length && this.elements[i]; i++) {
//       res.push(this.elements[i])
//       ++this.ptr
//     }
//     return res
//   }
//
//   return []
// }

// Optimized
OrderedStream.prototype.insert = function(idKey, value) {
  const index = idKey - 1
  this.elements[index] = value

  if (idKey > this.elements.length) {
    return []
  }

  if (this.ptr === index) {
    const res = []

    while (this.ptr < this.elements.length && this.elements[this.ptr]) {
      res.push(this.elements[this.ptr])
      ++this.ptr
    }

    return res
  }

  return []
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

const os = new OrderedStream(5)
console.log(os.insert(3, 'ccccc'))
console.log(os.insert(1, 'aaaaa'))
console.log(os.insert(2, 'bbbbb'))
console.log(os.insert(5, 'eeeee'))
console.log(os.insert(4, 'ddddd'))
