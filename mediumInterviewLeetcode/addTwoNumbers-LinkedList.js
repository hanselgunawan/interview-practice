/*
 You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

 You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 Example

 Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 Output: 7 -> 0 -> 8
 Explanation: 342 + 465 = 807.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function convertLinkToInt(list)
{
    let num = 0;
    if(list.length==0) return 0;
    while(list!=null)
    {
        num = num * 10 + list.val;
        list = list.next;
    }
    return num;
}

function reverseInt(number)
{
    let reverseNum = 0;
    while(number!=0)
    {
        reverseNum = reverseNum * 10 + (number % 10);
        number = parseInt(number/10);
    }
    return reverseNum;
}

function convertIntToList(resultList, total)
{
    let counter = total.toString().length;
    let currNode = resultList;
    while(counter > 0)
    {
        if(currNode.val == null)
        {
            currNode.val = total%10;
            total = parseInt(total/10);
            currNode.next = null;
            currNode = resultList;
        }
        else
        {
            while(currNode.next != null)
            {
                currNode = currNode.next;
            }
            let newList = new ListNode();
            newList.val = total % 10;
            total = parseInt(total/10);
            newList.next = null;
            currNode.next = newList;
        }
        counter--;
    }
    return resultList;
}

var addTwoNumbers = function(l1, l2) {
    let num1 = 0;
    let num2 = 0;
    let total = 0;
    let resultList = new ListNode();

    //convert linked list to an integer
    num1 = convertLinkToInt(l1);
    num2 = convertLinkToInt(l2);

    //reverse the integer
    num1 = reverseInt(num1);
    num2 = reverseInt(num2);

    //add 2 numbers
    total = num1 + num2;

    resultList = convertIntToList(resultList, total);

    return resultList;

};