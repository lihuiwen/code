// ```
// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: 1->2->3->4->5->NULL, k = 2
// 输出: 4->5->1->2->3->NULL
// 解释:
// 向右旋转 1 步: 5->1->2->3->4->NULL
// 向右旋转 2 步: 4->5->1->2->3->NULL
// 示例 2:

// 输入: 0->1->2->NULL, k = 4
// 输出: 2->0->1->NULL
// 解释:
// 向右旋转 1 步: 2->0->1->NULL
// 向右旋转 2 步: 1->2->0->NULL
// 向右旋转 3 步: 0->1->2->NULL
// 向右旋转 4 步: 2->0->1->NULL
// ```

var rotateRight = function (head, k) {
  if (k === 0 || !head || !head.next) {
    return head
  }
  let count = 1
  let cur = head
  while (cur.next) {
    cur = cur.next
    count++
  }
  let n = count - k % count
  if (n === count) {
    return head
  }
  cur.next = head
  while (n > 1) {
    cur = cur.next
    n--
  }
  let temp = cur.next
  cur.next = null
  return temp
}