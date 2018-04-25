/**
 * Created by hansel.tritama on 4/25/18.
 */
/*
array = [1,3,5,4,6,8,7];
return 8 and 7
 */

function secondLargest(nums)
{
    if(nums.length==1) return nums[0];
    let l1, l2;
    l1 = nums[0];
    l2 = nums[1];
    if(nums.length==2) return l1,l2;
    for(let i=2;i<nums.length;i++)
    {
        if(nums[i]>l2 && l2>l1)
        {
            l1 = nums[i];
        }
        else if(nums[i]>l2 && l2<l1)
        {
            l2 = l1;
            l1 = nums[i];
        }
    }
    return l1,l2;
}