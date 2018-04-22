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
var numSquares = function(n) {
    var dp=[0];

    for (var i=1;i<=n;i++)
        for (var j=Math.sqrt(i)|0; j>=1 ;j--)
            dp[i]=Math.min(dp[i] || n, dp[i-j*j]+1)


    return dp[n]
};