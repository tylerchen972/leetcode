/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    var l1 = list1;
    var l2 = list2;
    var queue = [];
    var bothEmpty = false;
    if (l1 == null && l2 == null) {
        return l1;
    }
    while (!bothEmpty) {
        if ((l1 != null && l2 == null) || (l1 != null && l1.val <= l2.val)) {
            queue.push(l1);
            l1 = l1.next;
        }
        else if (l2 != null) {
            queue.push(l2);
            l2 = l2.next;
        }
        else if (l1 == null) {
            if (l2 == null) {
                bothEmpty = true;
            }
        }
    }
    for(var i=0; i<queue.length; i++) {
        if(i+1 != queue.length) {
            queue[i].next = queue[i+1];
        }
    }
    return queue[0];
};