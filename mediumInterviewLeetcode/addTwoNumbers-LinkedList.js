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
    return num;//it will fail if the linked list start with '0'. Need to convert it into String instead of Integer
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
    while(counter > 0)//we use counter to store 0 if there's a number that's start with 0, such as: '01', '012'
    {
        if(currNode.val == null)
        {
            currNode.val = total%10;//it will grab the last number
            total = parseInt(total/10);//divide the number by 10 to decrease the length of the number
            currNode.next = null;
            currNode = resultList;//resultList should stay in the HEAD, and currNode is the one who walk through the list
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

    //convert linked list to an integer, ex: [3]->[4] to 34
    num1 = convertLinkToInt(l1);
    num2 = convertLinkToInt(l2);

    //reverse the integer, ex: 34 to 43
    num1 = reverseInt(num1);
    num2 = reverseInt(num2);

    //add 2 numbers
    total = num1 + num2;

    //convert integer to list, ex: 43 to [4]->[3]
    resultList = convertIntToList(resultList, total);

    return resultList;

};