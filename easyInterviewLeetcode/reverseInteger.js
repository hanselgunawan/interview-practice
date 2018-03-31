/*
 Given a 32-bit SIGNED integer, reverse digits of an integer.

 Example 1:

 Input: 123
 Output:  321
 Example 2:

 Input: -123
 Output: -321
 Example 3:

 Input: 120
 Output: 21
 Note:
 Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range.
 For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    let sign = 1;
    let lastDigit;
    if(x<0)
    {
        sign = -1;
        x *= -1;//times by -1 to make the X positive
    }
    while(x>0)
    {
        lastDigit = x%10;//to get the last digit use MOD 10
        x = parseInt(x/10);//to eliminate the last number. Ex: 213/10 = 21/10 = 2/10 = 0;
        result = result * 10 + lastDigit;//Ex: lastDigit = 3 || result = 0 * 10 + 3 = 3
        // lastDigit = 6 || result = 3 * 10 + 6 = 30 + 6 = 36
    }
    if(result >= Math.pow(2, 32) / 2) result = 0;
    return result * sign;
};

//SIGNED Max = 2^31-1
//SIGNED Min = -2^31

//UNSIGNED Max = 2^32/2 = 2^32-2^1 = 2^31
//UNSIGNED Min = 0 (because there's no  negative number)