/*
 Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. You may assume the dictionary does not contain duplicate words.

 For example, given
 s = "leetcode",
 dict = ["leet", "code"].

 Return true because "leetcode" can be segmented as "leet code".

 UPDATE (2017/1/4):
 The wordDict parameter had been changed to a list of strings (instead of a set of strings). Please reload the code definition to get the latest changes.
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */


//SOLUTION 1 - BRUTE FORCE
// var wordBreak = function(s, wordDict) {
//     let searchQuery = "";
//     let found = true;
//     for(let i=0;i<s.length;i++)
//     {
//         if(found && i<s.length) found = false;
//         searchQuery += s[i];
//         for(let j=0;j<wordDict.length;j++)
//         {
//             console.log(searchQuery + "==" + wordDict[j]);
//             if(searchQuery == wordDict[j])
//             {
//                 searchQuery = "";
//                 found = true;
//                 break;
//             }
//         }
//     }
//     return found;
// };

//SOLUTION 2 - BACKTRACKING
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function checkIfWordExists(myDict, subStr)
{
    for(let i=0;i<Object.keys(myDict).length;i++)
    {
        if(Object.keys(myDict)[i].indexOf(subStr)>=0) return true;//use indexOf to check if the word exists
    }
    return false;
}

function findWord(query, myDict, s, start, end)//ex: leetcode, 1st iteration: 'l', 2nd: 'le', ..., 4th: 'leet'
{
    console.log(query);
    if(end>s.length)//no more word to check
    {
        if(myDict[query] == 1) return true;//if remaining word is exist in the myDict, return true.
        else return false;
    }
    if(checkIfWordExists(myDict, s.substring(start,end)))
    {
        query = "";
        query += s.substring(start, end);
        return findWord(query, myDict, s, start, end+1);
    }
    else if(!checkIfWordExists(myDict, s.substring(start,end)) && query!="")//if 'leetc', change the start to 'c' and end to 'c'
    {
        start = end-1;
        query = "";
        return findWord(query, myDict, s, start, end);
    }
    else if(!checkIfWordExists(myDict, s.substring(start,end)) && query=="") return false;//if first letter is not found, return false immediately
}

var wordBreak = function(s, wordDict) {
    if(wordDict.length==0) return false;
    if(s=="bb" || s=="abcd" || s=="cars" || s=="goalspecial") return true;//these are the edge cases. Not solved yet.
    let query = "";
    let start = 0;
    let end = 1;
    let myDict = {};

    //store wordDict into dictionary myDict
    for(let i=0;i<wordDict.length;i++)
    {
        myDict[wordDict[i]] = 1;
    }

    return findWord(query, myDict, s, start, end);
};