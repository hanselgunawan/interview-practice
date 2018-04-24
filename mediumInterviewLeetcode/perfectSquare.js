/*
 Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

 For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.

 THIS IS A DYNAMIC PROGRAMMING QUESTION!
 The key is to find the relation which is dp[i] = min(dp[i], dp[i-square]+1). For example, dp[5]=dp[4]+1=1+1=2.

 The base cases are:
 dp[0]=0;
 dp[1]=1;
 dp[2]=2;
 dp[3]=3;
 */
/**
 * @param {number} n
 * @return {number}
 */
// var numSquares = function(n) {
//     var dp=[0];
//
//     for (var i=1;i<=n;i++)
//         for (var j=Math.sqrt(i)|0; j>=1 ;j--)
//             dp[i]=Math.min(dp[i] || n, dp[i-j*j]+1)
//
//
//     return dp[n]
// };

//SOLUTION 2
/**
 * @param {number} n
 * @return {number}
 */
function isPerfectSquare(num)
{
    return Math.sqrt(num)%1==0;
}

function countSquare(squaredNum, counter, totalNum)
{
    console.log(squaredNum,totalNum, counter);
    if(totalNum==0) return counter;
    for(let k=squaredNum;k>=1;k--)
    {
        if(isPerfectSquare(k))
        {
            if(totalNum-k>=0)
            {
                return countSquare(k, counter+1, totalNum-k);
            }
            else continue;
        }
    }
}

var numSquares = function(n) {
    let minCounter = 10;
    let counter = 0;
    for(let i=n;i>=1;i--)
    {
        if(isPerfectSquare(i))
        {
            counter = countSquare(i, counter, n);
            if(counter < minCounter)
            {
                minCounter = counter;
                counter = 0;
            }
        }
    }
    return minCounter;
};

//SOLUTION 3
var numSquares = function(n) {
    minValue = 4
    function countSquare(counter, totalNum)
    {
        if(totalNum == 0) if (counter < minValue) minValue = counter;
        if(counter < minValue)
        {
            for(let k = Math.floor(Math.sqrt(totalNum)); k >= 1; k--)
                countSquare(counter+1, totalNum-(k*k));
        }
    }
    countSquare(0, n)
    return minValue;
};