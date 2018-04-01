/*
 Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

 The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let charStack = [];
    for(let i = 0;i<s.length;i++)
    {
        if(s[i]=="(") charStack.push(")");//if find ')' on pop(), it means '(' has its partner which is ')'.
        else if(s[i]=="{") charStack.push("}");//if find '}' on pop(), it means '{' has its partner which is '}'.
        else if(s[i]=="[") charStack.push("]");//if find ']' on pop(), it means '[' has its partner which is ']'.
        else
        {
            if(s[i] != charStack.pop()) return false;//if ) found { or [ in the stack, immediately return false
        }
    }
    return charStack.length == 0;//if the stack is NOT 0, return false. If its 0, return true.
};