/*
 Given an array containing n distinct numbers taken from 0,1,2,...,n, find the one that is missing from the array.

 Example 1:
 Input: [3,0,1]
 Output: 2

 Example 2:
 Input: [9,6,4,2,3,5,7,0,1]
 Output: 8

 Note:
 Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function(nums) {
    //SOLUTION 1
    // nums.sort(function(a,b){return a-b;});
    // for(let i=0;i<=nums.length;i++)
    // {
    //     if(nums[i] != i) return i;
    // }

    //BETTER SOLUTION
    let total = 0;
    for(let i=0;i<=nums.length;i++)
    {
        total += i;
    }

    for(let j=0;j<nums.length;j++)
    {
        total -= nums[j];
    }

    return total;
};