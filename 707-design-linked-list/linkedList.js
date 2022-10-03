function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var MyLinkedList = function() {
  this.size = 0
  this.head = new ListNode(0)
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.size) {
    return -1
  }

  let curIndex = 0
  let cur = this.head
  while (curIndex < index) {
    cur = cur.next
    curIndex++
  }

  return cur.val
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const node = new ListNode(val)
  node.next = this.head
  this.head = node.next
  this.size++
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const node = new ListNode(val)
  let cur = this.head
  while (node.next) {
    cur = next
  }
  cur.next = node
  this.size++
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (this.size < index) {
    return
  }

  index = Math.max(0, index)
  let curIndex = 0
  let cur = this.head
  while (curIndex < index) {
    cur = cur.next
    curIndex++
  }

  const node = new ListNode(val)
  node.next = cur.next
  cur.next = node
  this.size++
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index >= this.size || index < 0) {
    return
  }

  let curIndex = 0
  let cur = this.head
  while (curIndex < index) {
    cur = cur.next
    curIndex++
  }

  cur.next = cur.next.next
  this.size--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index.js)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index.js,val)
 * obj.deleteAtIndex(index.js)
 */
