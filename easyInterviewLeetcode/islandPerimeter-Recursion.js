/*
 You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

 Example:

 [[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

 Answer: 16

 Link: https://leetcode.com/problems/island-perimeter/description
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    for(let row=0;row<grid.length;row++)
    {
        for(let col=0;col<grid[row].length;col++)
        {
            if(grid[row][col]==1)
            {
                let visited = new Array(grid[0].length);//this is how you create 2D array in Javascript
                for (let i = 0; i < grid.length; ++i)
                {
                    visited[i] = new Array(grid[0].length);//add columns on every row
                }
                return dfs(grid, visited, row, col);
            }
        }
    }
    return 0;
};

function dfs(grid, visited, row, col)
{
    //if up is out of scope OR down is higher than the scope OR left is out of scope OR right is higher than the grid map --> return 0
    if(row<0 || row>=grid.length || col<0 || col>=grid[0].length) return 0;
    if(grid[row][col]==0) return 0;//if it's a water, return 0;
    if(visited[row][col]) return 0;//if land is visited, return 0;
    visited[row][col] = true;
    let sides = 4;
    if(row > 0 && grid[row-1][col] == 1) sides--; // if UP is a land, sides--
    if(col > 0 && grid[row][col-1] == 1) sides--; // if LEFT is a land, sides--
    if(col+1 < grid[0].length && grid[row][col+1] == 1) sides--; // if RIGHT is a land, sides--
    if(row+1 < grid.length && grid[row+1][col] == 1) sides--; // if DOWN is a land, sides--
    return sides +
        dfs(grid, visited, row-1, col) + // up
        dfs(grid, visited, row, col-1) + // left
        dfs(grid, visited, row, col+1) + // right
        dfs(grid, visited, row+1, col); // down
}