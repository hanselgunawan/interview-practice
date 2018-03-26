/**
 * Created by hansel.tritama on 3/26/18.
 */
function findSingleChar(str1, str2)
{
    let temp = 0;
    for(let i = 0;i<str1.length;i++)
    {
        temp ^= str1.charCodeAt(i);//to convert CHAR to CODE (UNICODE)
    }
    for(let j = 0;j<str2.length;j++)
    {
        temp ^= str2.charCodeAt(j);
    }
    return String.fromCharCode(temp);//to convert CODE (UNICODE) to CHAR
}