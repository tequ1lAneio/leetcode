/**
 * @param {number} k
 */
function MyCircularDeque(k) {
  this.elements = []
  this.capacity = k + 1
  this.front = 0
  this.rear = 0
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if (this.isFull()) {
    return false
  }

  this.front = (this.front - 1 + this.capacity) % this.capacity
  this.elements[this.front] = value
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

  this.elements[this.rear] = value
  this.rear = (this.rear + 1) % this.capacity
  return true
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  if (this.isEmpty()) {
    return false
  }

  this.front = (this.front + 1) % this.capacity
  return true
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  if (this.isEmpty()) {
    return false
  }

  this.rear = (this.rear - 1 + this.capacity) % this.capacity
  return true
}

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  if (this.isEmpty()) {
    return -1
  }
  return this.elements[this.front]
}

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  if (this.isEmpty()) {
    return -1
  }
  return this.elements[(this.rear - 1 + this.capacity) % this.capacity]
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  return this.front === this.rear
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  return (this.rear + 1) % this.capacity === this.front
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