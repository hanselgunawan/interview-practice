/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */

function recursion(result, curr, open, close, target) {
    if(open === close && open === target && close === target) result.push(curr);
    else 
    {
        if(open > close) 
        {
           recursion(result, curr+")", open, close+1, target);
           if(open < target) recursion(result, curr+"(", open+1, close, target);
        } 
        else if(open === close) 
        {
           recursion(result, curr+"(", open+1, close, target);
        }
    }
}

var generateParenthesis = function(n) {
    let result = [];
    recursion(result, "", 0, 0, n);
    return result;
};
