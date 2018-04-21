/*
 Given a sorted integer array without duplicates, return the summary of its ranges.

 Example 1:
 Input: [0,1,2,4,5,7]
 Output: ["0->2","4->5","7"]
 Example 2:
 Input: [0,2,3,4,6,8,9]
 Output: ["0","2->4","6","8->9"]
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let resultArr = [];
    let diff = 0;
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i+1] == nums[i]+1) diff++;
        else
        {
            if(diff>0)
            {
                resultArr.push(""+nums[i-diff]+"->"+nums[i]);
                diff = 0;
            }
            else
            {
                resultArr.push(""+nums[i]);
            }
        }
    }
    return resultArr;
};