/*
 Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 For example,
 "A man, a plan, a canal: Panama" is a palindrome.
 "race a car" is not a palindrome.

 Note:
 Have you consider that the string might be empty? This is a good question to ask during an interview.

 For the purpose of this problem, we define empty string as valid palindrome.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s=="") return true;

    // SOLUTION 1 : ReGex
    // let newStr = s.toLowerCase().replace(/[^a-z]/g, "");
    // let rev = newStr.split("").reverse().join("");
    // return (newStr == rev);

    // SOLUTION 2: Remove all non-character & non-digit with for loop
    let newStr = "";
    for(let i=0;i<s.length;i++)
    {
        if((s[i].toLowerCase()>='a' && s[i].toLowerCase()<='z') || (s[i]>='0' && s[i]<='9')) newStr+=s[i].toLowerCase();
    }
    return (newStr == newStr.split("").reverse().join(""));
};