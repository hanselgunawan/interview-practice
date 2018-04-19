/*
Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

Note:
The number of people is less than 1,100.


Example

Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
*/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let sortedPeople = people.sort(function(a,b){
        if(a[0]!=b[0]) return b[0]-a[0];//ex: [5,2],[6,1],[4,3] --> [4,3],[5,2],[6,1]
        else return a[1]-b[1];//ex: [5,2],[5,1] --> [5,1],[5,2]
    });
    let resultArr = [];
    let popArr = [];
    
    for(let i=0;i<sortedPeople.length;i++)
    {
        if(sortedPeople[i][1]==resultArr.length)//if number of result array is EQUAL TO 'k' of current element
        {
            resultArr.push(sortedPeople[i]);//push the element to the result array.
        }
        else if(resultArr.length>sortedPeople[i][1])//if number of result array is BIGGER THAN 'k' of current element
        {
            while(resultArr.length>sortedPeople[i][1])//pop up the result array until the length of 'k'
            {
                popArr.push(resultArr.pop());
            }
            resultArr.push(sortedPeople[i]);//push the element after deletion process
        }
        else if(resultArr.length<sortedPeople[i][1])//if the number of result array if LESS THAN 'k' of current element
        {
            while(resultArr.length<sortedPeople[i][1])//push the element of Pop array to Result array until result length = 'k'
            {
                resultArr.push(popArr.pop());
            }
            resultArr.push(sortedPeople[i]);//push the element to the result array
        }
    }
    
    //push the remaining element on the Pop array
    while(popArr.length>0)
    {
        resultArr.push(popArr.pop());
    }
    
    return resultArr;
};
