/**
 * @param {number} k
 */

function Node(value) {
  this.value = value
  this.prev = null
  this.next = null
}

function MyCircularDeque(k) {
  this.size = 0
  this.capacity = k
  this.head = null
  this.tail = null
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if (this.isFull()) {
    return false
  }
  const node = new Node(value)

  if (this.size === 0) {
    this.tail = this.head = node
  } else {
    node.next = this.head
    this.head.prev = node
    this.head = node
  }
  this.size++
  return true
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.isFull()) {
    return false
  }

  const node = new Node(value)

  if (this.size === 0) {
    this.head = this.tail = node
  } else {
    this.tail.next = node
    node.prev = this.tail
    this.tail = node
  }
  this.size++
  return true
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  if (this.isEmpty()) {
    return false
  }

  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  }
  this.size--
  return true
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  if (this.isEmpty()) {
    return false
  }

  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  }
  this.size--
  return true
}

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  if (this.isEmpty()) {
    return -1
  }

  return this.head.value
}

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  if (this.isEmpty()) {
    return -1
  }

  return this.tail.value
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  return this.size === 0
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  return this.size === this.capacity
}

const circularDeque = new MyCircularDeque(3);
console.log(circularDeque.insertLast(1))
console.log(circularDeque.insertLast(2))
console.log(circularDeque.insertFront(3))
console.log(circularDeque.insertFront(4))
console.log(circularDeque.getRear())
console.log(circularDeque.isFull())
console.log(circularDeque.deleteLast())
console.log(circularDeque.insertFront(4))
console.log(circularDeque.getFront())

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * const obj = new MyCircularDeque(k)
 * const param_1 = obj.insertFront(value)
 * const param_2 = obj.insertLast(value)
 * const param_3 = obj.deleteFront()
 * const param_4 = obj.deleteLast()
 * const param_5 = obj.getFront()
 * const param_6 = obj.getRear()
 * const param_7 = obj.isEmpty()
 * const param_8 = obj.isFull()
 */