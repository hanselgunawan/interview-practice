/**
 * Created by hansel.tritama on 3/26/18.
 */
function isPowerOfTwo(value)
{
    if(value != 0 && (value & value-1) == 0) return true;
    return false;
}

//explanation:
// 1.)
// 4 & 3
//
// 100
// 011
// ----AND
// 000 -> 0 -> true
//
// 2.)
// 10 & 9
//
// 1010
// 1001
// ----AND
// 0011 -> 3 -> false