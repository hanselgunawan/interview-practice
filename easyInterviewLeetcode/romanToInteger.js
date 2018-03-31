/*
 Given a roman numeral, convert it to an integer.

 Input is guaranteed to be within the range from 1 to 3999.
 */

/**
 * @param {string} s
 * @return {number}
 */
function storeRomanNumeral(romanDict)
{
    romanDict["I"] = 1;
    romanDict["V"] = 5;
    romanDict["X"] = 10;
    romanDict["L"] = 50;
    romanDict["C"] = 100;
    romanDict["D"] = 500;
    romanDict["M"] = 1000;
    return romanDict;
}

var romanToInt = function(s) {
    let romanDict = {};
    let total = 0;
    romanDict = storeRomanNumeral(romanDict);
    for(let j=s.length-1;j>=0;j--)
    {
        if(j==s.length-1)
        {
            total += romanDict[s[j]];
        }
        else if(romanDict[s[j+1]]>romanDict[s[j]])//Ex: IV. V is bigger than I
        {
            total -= romanDict[s[j]];
        }
        else if(romanDict[s[j+1]]<=romanDict[s[j]])//Ex: VI. V is less than I
        {
            total += romanDict[s[j]];
        }
    }
    return total;
};

/*
I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000
 */