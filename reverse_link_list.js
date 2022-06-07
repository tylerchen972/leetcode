/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if (head === null) {
        return head
    }
    var prevnode = head
    var node = head
    var nextnode = node.next
    while (nextnode != null) {
        prevnode = node
        // console.log("prevnode=" + prevnode.val)
        node = nextnode
        // console.log("node=" + node.val)
        nextnode = node.next
        // console.log("nextnode=" + nextnode.val)
//-----------------------------------------------------------------
        node.next = prevnode
        // console.log(node.next)
    }
    head.next = null
    return node
};