/*
 Given an array of integers, return indices of the two numbers such that they add up to a specific target.

 You may assume that each input would have exactly one solution, and you may not use the same element twice.

 Example:
 Given nums = [2, 7, 11, 15], target = 9,

 Because nums[0] + nums[1] = 2 + 7 = 9,
 return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let dict = {};
    let resultArr = [];

    for(let i=0;i<nums.length;i++)
    {
        //store target-current index to dictionary
        if(dict[nums[i]]!=null)
        {
            resultArr.push(dict[nums[i]]);
            resultArr.push(i);//push the current index
            return resultArr;//dict[nums[i]], currentIndex
        }
        else
        {
            //example: [6,2,4,3]
            //target: 8
            // 8 - 6 = 2
            //dict['2'] = 0;
            //next iteration:
            //dict[2] == found!
            //return VALUE of dict[2] and current Index
            //return 0,1
            dict[target-nums[i]] = i;
        }
    }
    return false;
};