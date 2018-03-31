/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==0) return "";
    let longest = strs[0];
    let prefix;
    for(let i =0;i<strs.length;i++)//loop through the array of strings
    {
        prefix = "";
        for(let j=0;j<longest.length;j++)//loop through the longest prefix
        {
            if(longest[j]!=strs[i][j]) break;//ex: ABC & ABD. C is not D, break the loop. Longest = AB
            prefix += longest[j];
        }
        longest = prefix;
    }
    return longest;
};