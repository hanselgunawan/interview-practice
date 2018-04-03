/*
 Given n non-negative integers a_1, a_2, ..., a_n  where each represents a point at coordinate  (i, a_i) .
 ‘ n ‘ vertical lines are drawn such that the two endpoints of line i is at  (i, a_i)  and (i, 0).

 Find two lines, which together with x-axis forms a container, such that the container contains the most water.

 The program should return an integer which corresponds to the maximum area of water that can be contained
 ( maximum area instead of maximum volume sounds weird but this is 2D plane we are working with for simplicity ).

 Note : You may not slant (miring) the container.

 Examples :

 Input : [1, 5, 4, 3]
 Output : 6
 Explanation :
 5 and 3 are distance 2 apart.
 So the size of the base = 2.
 Height of container = min(5, 3) = 3.
 So total area = 3 * 2 = 6

 Input : [3, 1, 2, 4, 5]
 Output : 12
 Explanation :
 5 and 3 are distance 4 apart.
 So the size of the base = 4.
 Height of container = min(5, 3) = 3.
 So total area = 4 * 3 = 12
 */

/**
 * @param {number[]} height
 * @return {number}
 */


//the idea is to find 2 highest height between all the non-negative integers
/*
example:
[3,1,2,4,5]

first interation:
(3,5) --> because the lower bucket is 3, so the maximum water is 3 liter. If we pour 5 liter, it will fail
3 & 5? get the minimum number ==> 3
3*(distance between 2 end-points)
3*4 = 12

because 5 is greater than 3, seek another bucket that higher than 5. So, start pointer increments by 1.

second iteration:
(1,5)
1*3 = 3

...
...

last iteration;
(4,5)
4*1 = 4

Answer = 12 (the biggest container)
*/
var maxArea = function(height) {
    let maxArea = 0;
    let subMaxArea = 0;
    let start = 0, end = height.length-1;
    while(start<end)
    {
        subMaxArea = Math.min(height[start],height[end])*(end-start);
        if(subMaxArea>maxArea) maxArea = subMaxArea;
        if(height[end]>height[start]) start++;
        else end--;
    }
    return maxArea;
};