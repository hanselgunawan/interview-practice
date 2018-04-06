/*
 Description:

 Count the number of prime numbers less than a non-negative number, n.
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    //SIEVE OF ERATHOSTHENES
    if(n<=2) return 0;
    let primeTable = new Array(n);
    let count = 0;
    primeTable.fill(true);
    for(let j=2;j<n;j++)
    {
        if(!primeTable[j]) continue;//if it has been visited, continue the loop
        count++;
        for(let k=j*2;k<n;k+=j)
        {
            primeTable[k] = false;
        }
    }
    return count;
};