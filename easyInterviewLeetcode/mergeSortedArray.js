/*
 Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

 Note:

 The number of elements initialized in nums1 and nums2 are m and n respectively.
 You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
 Example:

 Input:
 nums1 = [1,2,3,0,0,0], m = 3
 nums2 = [2,5,6],       n = 3

 Output: [1,2,2,3,5,6]
 */

/*
EDGE CASE:
 [1,0]
 1
 [2]
 1

 [-1,-1,0,0,0,0]
 4
 [-1,0]
 2
 Expected: [-1,-1,-1,0,0,0]
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let j = 0;
    for(let i=0;i<m+n;i++)
    {
        if(nums2[j]<nums1[i])
        {
            nums1.splice(i,0,nums2[j]);
            nums1.pop();
            j++;
        }
        else
        {
            if(nums1[i]==0 && i>=m)
            {
                nums1[i] = nums2[j];
                j++;
            }
            else if(nums1[i]==0 && i==0)
            {
                nums1[i] = nums2[j];
                j++;
            }
        }
    }
};