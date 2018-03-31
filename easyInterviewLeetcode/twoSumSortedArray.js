/**
 * Created by hansel.tritama on 3/31/18.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let leftPos = 0;
    let rightPos = nums.length-1;
    let answerArr = [];
    let sum = 0;

    while(leftPos < rightPos)
    {
        sum = nums[leftPos] + nums[rightPos];
        if(sum < target)
        {
            //rightPos--;
            leftPos++;
        }
        else if(sum > target)
        {
            //leftPos++;
            rightPos--;
        }
        else
        {
            answerArr.push(leftPos);
            answerArr.push(rightPos);
            return answerArr;
        }
    }
    return false;
};