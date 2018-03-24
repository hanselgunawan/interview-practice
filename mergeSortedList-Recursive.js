/**
 Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

 Example:
 Input: 1->2->4, 1->3->4
 Output: 1->1->2->3->4->4
 */

var mergeTwoLists = function(list1, list2) {
    let head;

    if(list1 === null)
    {
        return list2;
    }
    else if(list2 === null)
    {
        return list1;
    }

    if(list1.val < list2.val)
    {
        head = list1;
        head.next = mergeTwoLists(list1.next, list2);
    }
    else if(list1.val >= list2.val)
    {
        head = list2;
        head.next = mergeTwoLists(list1, list2.next);
    }
    return head;
};