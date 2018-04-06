/*
 Rotate an array of n elements to the right by k steps.

 For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

 Note:
 Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

 Hint:
 Could you do it in-place with O(1) extra space?
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
    let length = nums.length;
    if(k > length) k %= nums.length;

    let startPoint = 0;
    while(startPoint + k < nums.length && k != 0) {//if k==0, immediately return
        for(let i = 0; i < k; i++) {
            let temp = nums[startPoint + i];//ex: [1,2,3,4,5]
            nums[startPoint + i] = nums[nums.length-k+i];//[4,2,3,1,5]
            nums[nums.length-k+i] = temp;//[4,5,3,1,2]. [4,5|3,1,2] we start another loop for [3,1,2] sub-array
        }
        startPoint += k;//we don't care about the first k elements, change startPoint to the element after k
        length -= k;//we decrease the loop to (length-k), because we don't want to loop 'length' times anymore
        if(k > length) k %= length;//ex: if(5 > 1) 5%1 = 1; loop 1 time instead of 5 times
    }
};