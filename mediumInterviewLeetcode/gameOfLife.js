/*
 According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

 Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

 Any live cell with fewer than two live neighbors dies, as if caused by under-population.
 Any live cell with two or three live neighbors lives on to the next generation.
 Any live cell with more than three live neighbors dies, as if by over-population..
 Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 Write a function to compute the next state (after one update) of the board given its current state.

 Follow up:
 Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
 In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?
 */

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    if(board[0].length==1 && board[0][0]==1)
    {
        board[0][0] = 0;
        return;
    }
    else if(board[0].length==1 && board[0][0]==0) return;
    let liveCounter = 0;
    let row = 0, col = 0;
    let dict = {};

    if(board.length==1)//one-row only
    {
        for(let i=0;i<board[0].length;i++)
        {
            if(i-1<0 && i+1<board[0].length) liveCounter += board[0][i+1];
            else if(i-1>=0 && i+1<board[0].length) liveCounter += board[0][i-1] + board[0][i+1];
            else if(i-1>=0 && i+1>=board[0].length) liveCounter += board[0][i-1];

            if(board[0][i] == 1)
            {
                if(liveCounter<2) dict[""+0+""+i] = -1;//under-population
                else if(liveCounter == 2 || liveCounter == 3) dict[""+0+""+i] = 2;//next-generation
                else if(liveCounter>3) dict[""+0+""+i] = -1;//over-population
            }
            else if(board[0][i] == 0)
            {
                if(liveCounter == 3) dict[""+0+""+i] = 2;//reproduction
            }
            liveCounter = 0;
        }

        //convert the array to the expected answer
        for(let i=0;i<board[0].length;i++)
        {
            if(dict[""+0+""+i] == -1)
            {
                board[0][i] = 0;
            }
            else if(dict[""+0+""+i] == 2)
            {
                board[0][i] = 1;
            }
        }
    }
    else
    {
        for(row=0;row<board.length;row++)
        {
            for(col=0;col<board[0].length;col++)
            {
                // console.log(row,col);
                if(row-1<0 && col-1<0)//top-left
                {
                    // console.log("top-left");
                    liveCounter = liveCounter+board[row][col+1]+board[row+1][col+1]+board[row+1][col];
                }
                else if(row-1<0 && col+1!=board[0].length && col-1>=0)//top
                {
                    // console.log("top");
                    liveCounter = liveCounter+board[row][col+1]+board[row+1][col+1]+board[row+1][col]+board[row+1][col-1]+board[row][col-1];
                }
                else if(row-1<0 && col+1>=board[0].length)//top-right
                {
                    // console.log("top-right");
                    liveCounter = liveCounter+board[row+1][col]+board[row+1][col-1]+board[row][col-1];
                }
                else if(row+1>=board.length && col+1>=board[0].length)//bottom-right
                {
                    // console.log("bottom-right");
                    liveCounter = liveCounter+board[row][col-1]+board[row-1][col-1]+board[row-1][col];
                }
                else if(col+1>=board[0].length)//right
                {
                    // console.log("right");
                    liveCounter = liveCounter+board[row+1][col]+board[row+1][col-1]+board[row][col-1]+board[row-1][col-1]+board[row-1][col];
                }
                else if(row+1>=board.length && col-1<0)//bottom-left
                {
                    // console.log("bottom-left");
                    liveCounter = liveCounter+board[row-1][col]+board[row-1][col+1]+board[row][col+1];
                }
                else if(row+1>=board.length)//bottom
                {
                    // console.log("bottom");
                    liveCounter = liveCounter+board[row][col+1]+board[row][col-1]+board[row-1][col-1]+board[row-1][col]+board[row-1][col+1];
                }
                else if(row+1<board.length && col-1<0)//left
                {
                    // console.log("left");
                    liveCounter = liveCounter+board[row-1][col]+board[row-1][col+1]+board[row][col+1]+board[row+1][col+1]+board[row+1][col];
                }
                else if(row-1>=0 && row+1<board.length && col-1>=0 && col+1<board[0].length)
                {
                    // console.log("middle");
                    liveCounter = liveCounter+board[row-1][col]+board[row-1][col+1]+board[row][col+1]+board[row+1][col+1]+board[row+1][col]+board[row+1][col-1]+board[row][col-1]+board[row-1][col-1];
                }

                if(board[row][col] == 1)
                {
                    if(liveCounter<2) dict[""+row+""+col] = -1;//under-population
                    else if(liveCounter == 2 || liveCounter == 3) dict[""+row+""+col] = 2;//next-generation
                    else if(liveCounter>3) dict[""+row+""+col] = -1;//over-population
                }
                else if(board[row][col] == 0)
                {
                    if(liveCounter == 3) dict[""+row+""+col] = 2;//reproduction
                }
                liveCounter = 0;//reset to zero
            }
        }

        //convert the array to the expected answer
        // console.log(dict);
        for(row=0;row<board.length;row++)
        {
            for(col=0;col<board[0].length;col++)
            {
                if(dict[""+row+""+col] == -1)
                {
                    board[row][col] = 0;
                }
                else if(dict[""+row+""+col] == 2)
                {
                    board[row][col] = 1;
                }
                // console.log(board);
            }
        }
    }
};