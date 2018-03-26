/**
 * Created by hansel.tritama on 3/26/18.
 */
function isPowerOfTwo(value)
{
    if(value==0) return false;//0 is not the power of 2
    if(value%2==1)//if odd number is found, that means is NOT power of two
    {
        return false;
    }
    else if(value>2 && value%2==0)//if its even and still more than 2, keep looping. Ex: 12/2 = 6. 12 is NOT power of two!
    {
        return isPowerOfTwo(parseInt(value/2));
    }
    else
    {
        return true;
    }
}