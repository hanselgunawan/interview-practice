/*
 Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

 Example:
 Input: 1->2->4, 1->3->4
 Output: 1->1->2->3->4->4
 */

function insertNode(newNode, resultList)
{
    if(resultList == null)
    {
        resultList = newNode;
    }

    while(resultList.next != null)
    {
        resultList = resultList.next;
    }
    resultList.next = newNode;
}

function mergeList(remainingList, resultList)
{
    while(remainingList != null)
    {
        insertNode(remainingList.val, resultList);
        remainingList = remainingList.next;
    }
}

var mergeTwoLists = function(list1, list2) {
    let resultList = new ListNode();
    while(list1 != null || list2 != null)
    {
        //compare 2 lists
        if(list1.val < list2.val)
        {
            let node = {
                val:list1.val,
                next:null
            };
            insertNode(node, resultList);
            list1 = list1.next;
        }
        else
        {
            let node = {
                val:list2.val,
                next:null
            };
            insertNode(node, resultList);
            list2 = list2.next;
        }
    }

    if(list1==null)
    {
        mergeList(list1, resultList)
    }
    else
    {
        mergeList(list2,resultList);
    }

    return resultList;
};