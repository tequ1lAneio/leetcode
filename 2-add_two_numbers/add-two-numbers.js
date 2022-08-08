/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

// const l1 = [2,4,3]
// const l2 = [5,6,4]

// const l1 = [0], l2 = [0]

const l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]

const linkedList = (l) => {
  const head = new ListNode(l[0], undefined)
  let current = head
  for (let i = 1; i < l.length; i++) {
     current.next = new ListNode(l[i], undefined)
     current = current.next
  }
  return head
}

let ll1 = linkedList(l1)
let ll2 = linkedList(l2)

const addTwoNumbers = (l1, l2) => {
  let head = null
  let current = null
  let carry = 0

  while (l1 || l2) {
    const v1 = l1 ? l1.val : 0
    const v2 = l2 ? l2.val : 0

    const sum = v1 + v2 + carry
    carry = Math.floor(sum / 10)

    if (!head) {
      head = current = new ListNode(sum % 10, undefined)
    } else {
      current.next = new ListNode(sum % 10, undefined)
      current = current.next
    }

    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }

  if (carry > 0) {
    current.next = new ListNode(carry, undefined)
  }

  return head
}

// const addTwoNumbers = (l1, l2) => {
//   const reverse = (arr) => {
//     const newArr = []
//     for (let i = 0; i < arr.length; i++ ) {
//       newArr[arr.length - i - 1] = arr[i]
//     }
//     return newArr
//   }
//
//   const reversedL1 = reverse(l1)
//   const reversedL2 = reverse(l2)
//   const result = [];
//
//   const steps = reversedL1.length > reversedL2.length ? reversedL1.length : reversedL2.length
//   let valueForNextLevel = 0;
//
//   for (let i = 0; i < steps; i++) {
//     const valueFromL1 = l1[i] != undefined ? l1[i] : 0
//     const valueFromL2 = l2[i] != undefined ? l2[i] : 0
//     // let value = (l1[i] || 0) + (l2[i] || 0)
//
//     let value = valueFromL1 + valueFromL2
//     if (valueForNextLevel) {
//       value += valueForNextLevel
//     }
//
//     if (value >= 10) {
//       result[i] = value - 10
//       valueForNextLevel = 1
//     } else {
//       result[i] = value
//       valueForNextLevel = 0
//     }
//   }
//
//   if (valueForNextLevel) {
//     result.push(valueForNextLevel)
//   }
//
//   return result
// };



let res = addTwoNumbers(ll1, ll2)
while (res) {
  console.log(res.val)
  res = res.next
}
