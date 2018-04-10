/*
 Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

 Find all the elements of [1, n] inclusive that do not appear in this array.

 Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

 Example:

 Input:
 [4,3,2,7,8,2,3,1] <-- this input missed number 5 and 6. Because this array SHOULD contain 1-N numbers, which is 1-8 in this context

 Output:
 [5,6] <-- that's why the input is 5 and 6
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let dict = {};
    let resultArr = [];
    //store 0 to all dictionary. Ex: dict['1'] = 0, dict['2'] = 0, dict['3'] = 0
    for(let i=1;i<=nums.length;i++)
    {
        dict[i] = 0;
    }

    // change 0 to 1 in the dict for every number that exist in the array.
    // Ex: [1,4,5,5] --> dict['1'] = 1, dict['4'] = 1, dict['5'] = 1. dict['5'] is NOT 0, no need to change
    for(let j=0;j<nums.length;j++)
    {
        if(dict[nums[j]]==0) dict[nums[j]] = 1;
    }

    //push to resultArr for every dict key that have 0 value
    for(let k=1;k<=nums.length;k++)
    {
        if(dict[k]==0) resultArr.push(k);
    }

    return resultArr;
};