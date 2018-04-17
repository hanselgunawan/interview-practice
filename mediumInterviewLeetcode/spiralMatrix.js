/*
 Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

 Example 1:

 Input:
 [
     [ 1, 2, 3 ],
     [ 4, 5, 6 ],
     [ 7, 8, 9 ]
 ]
 Output: [1,2,3,6,9,8,7,4,5]
 Example 2:

 Input:
 [
     [1, 2, 3, 4],
     [5, 6, 7, 8],
     [9,10,11,12]
 ]
 Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length==0) return [];
    let lowRowBound = 0;
    let lowColBound = 0;
    let hiRowBound = matrix.length-1;//minus 1 because array starts from 0
    let hiColBound = matrix[0].length-1;//minus 1 because array starts from 0
    let resultArr = [];
    let row = 0;
    let col = 0;

    while(resultArr.length!=(matrix.length*matrix[0].length))
    {
        resultArr.push(matrix[row][col]);
        if(col<hiColBound && row==lowRowBound)//top-left to top-right
        {
            col++;
        }
        else if(col==hiColBound	&& row<hiRowBound)//top-right to bottom-right
        {
            row++;
        }
        else if(row==hiRowBound && col>lowColBound)//bottom-right to bottom-left
        {
            col--;
        }
        else if(col==lowColBound && row>lowRowBound)//bottom-left to top-left-1 (we don't want to visit the starting point)
        {
            if(row==col+1)//if it hits (top-left)-1, go deeper inside the array
            {
                lowRowBound+=1;
                hiRowBound-=1;
                lowColBound+=1;
                hiColBound-=1;
                col += 1;
                //no need to increment Row, because Row already in (Col+1) position
                continue;
            }
            row--;
        }
    }
    return resultArr;
};