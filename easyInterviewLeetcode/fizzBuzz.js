/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let resultStr = [];
    for(let i=1;i<=n;i++)
    {
        if(i%15==0)//can't use i%3==0 && i%5==0
        {
            resultStr.push("FizzBuzz");
        }
        else if(i%3==0)
        {
            resultStr.push("Fizz");
        }
        else if(i%5==0)
        {
            resultStr.push("Buzz");
        }
        else
        {
            resultStr.push(i.toString());
        }
    }
    return resultStr;
};