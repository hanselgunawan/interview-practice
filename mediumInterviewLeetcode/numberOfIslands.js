/*
 Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 Example 1:

 11110
 11010
 11000
 00000
 Answer: 1

 Example 2:

 11000
 11000
 00100
 00011
 Answer: 3
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
function recursion(row, col, grid)
{
    grid[row][col] = '2';//'2' means visited
    if(col+1<grid[0].length && grid[row][col+1] == '1')
    {
        recursion(row,col+1,grid);//go right
    }
    if(col-1>=0 && grid[row][col-1] == '1')
    {
        recursion(row,col-1,grid);//go left
    }
    if(row+1<grid.length && grid[row+1][col] == '1')
    {
        recursion(row+1,col,grid);//go down
    }
    if(row-1>=0 && grid[row-1][col] == '1')
    {
        recursion(row-1,col,grid);//go up
    }
}

var numIslands = function(grid) {
    let numOfIsland = 0;
    for(let i=0;i<grid.length;i++)
    {
        for(let j=0;j<grid[i].length;j++)
        {
            if(grid[i][j]=='1')//if its a land / '1', run through the recursion function
            {
                recursion(i,j,grid);
                numOfIsland++;
            }
        }
    }

    return numOfIsland;
};