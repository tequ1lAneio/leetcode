const FreqStack = function() {
  this.freq = new Map()
  this.group = new Map()
  this.maxFreq = 0
}

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
  this.freq.set(val, (this.freq.get(val) || 0) + 1)

  if (!this.group.has(this.freq.get(val))) {
    this.group.set(this.freq.get(val), [])
  }

  this.group.get(this.freq.get(val)).push(val)
  this.maxFreq = Math.max(this.maxFreq, this.freq.get(val))
}

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
  const val = this.group.get(this.maxFreq)[this.group.get(this.maxFreq).length - 1];
  this.freq.set(val, this.freq.get(val) - 1)
  this.group.get(this.maxFreq).pop()

  if (this.group.get(this.maxFreq).length === 0) {
    this.maxFreq--
  }
  return val
}


/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */