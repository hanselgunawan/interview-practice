/*
 Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

 For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
 the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function countMaxSubArray(nums, start, total)
{
    let subtotal;
    if(start > nums.length) return total;
    for(let i=0;i<start;i++)
    {
        subtotal = 0;
        for(let j=i;j<=nums.length-start+i;j++)
        {
            subtotal += nums[j];
        }
        if(subtotal > total) total = subtotal;
    }
    console.log("my total: ",total);
    total = countMaxSubArray(nums, start+1,total);
    return total;
}

var maxSubArray = function(nums) {
    if(nums.length==1) return nums[0];
    let grandTotal = -999999;//use Number.MIN_VALUE in Javascript to get the lowest number
    let start = 1;
    grandTotal = countMaxSubArray(nums, start, grandTotal);
    return grandTotal;
};