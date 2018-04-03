/*
 Given a string, find the length of the longest substring without repeating characters.

 Examples:

 Given "abcabcbb", the answer is "abc", which the length is 3.

 Given "bbbbb", the answer is "b", with the length of 1.

 Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */

function findLongestSubArray(str, counter, longestLength)
{
    let subLongestLength;
    let repeating;
    let dict;//dictionary to keep track repeating character
    if(counter<=str.length)
    {
        for(let i=0;i<counter;i++)
        {
            repeating = false;
            subLongestLength = 0;
            dict = {};//initiate dictionary
            for(let j=i;j<=(str.length-counter+i);j++)
            {
                if(dict[str[j]]==null)//if the character NOT found on the dictionary, add it to dictionary
                {
                    dict[str[j]] = 1;//ex: ['a'] = 1, ['&'] = 1
                    subLongestLength++;
                }
                else
                {
                    repeating = true;
                    break;
                }
            }
            if(!repeating)//if no repeating character, compare current length with the existing one
            {
                if(subLongestLength > longestLength)
                {
                    longestLength = subLongestLength;
                }
            }
        }
        longestLength = findLongestSubArray(str, counter+1, longestLength);
    }
    return longestLength;
}

var lengthOfLongestSubstring = function(s) {
    let counter = 1;
    let longestLength = 0;
    if(s.length==0) return 0;

    longestLength = findLongestSubArray(s, counter, longestLength);

    return longestLength;
};