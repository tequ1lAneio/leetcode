/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */

const numComponents = (head, nums) => {
  const cur = head
  const set = new Set()
  for (const num in nums) {
    set.add(num)
  }
  let prevIsInNums = false
  let ans = 0

  while (head) {
    if (set.has(cur.val)) {
      if (!prevIsInNums) {
        prevIsInNums = true
        ans++
      }
    } else {
      prevIsInNums = false
    }

    head = head.next
  }

  return ans
}
