/*
 Suppose we abstract our file system by a string in the following manner:

 The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

 dir
    subdir1
    subdir2
        file.ext

 The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

 The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

 dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
        file2.ext

 The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.

 We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).

 Given a string representing the file system in the above format, return the length of the longest absolute path to file in the abstracted file system. If there is no file in the system, return 0.

 Note:
 The name of a file contains at least a . and an extension.
 The name of a directory or sub-directory will not contain a ..
 Time complexity required: O(n) where n is the size of the input string.

 Notice that a/aa/aaa/file1.txt is not the longest file path, if there is another path aaaaaaaaaaaaaaaaaaaaa/sth.png.
 */
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    if(input.indexOf('.')==-1) return 0;//if there's no DOT, its not a file, return 0
    let maxLength = 0;
    let tempLength, tabIndex;
    let visitedDict = {};
    let stack;
    let dirArr = input.split('\n');
    if(dirArr.length==1) return dirArr[0].length;//if there's only one file in the root folder, return length[0]
    console.log(dirArr);
    while(Object.keys(visitedDict).length != dirArr.length-1)//if visitedDict = dirArr.length -> all filepath is VISITED.
    {                                                       //-1 because we don't want to count the length of the first array.
        tabIndex = -1;//start from a path that don't have '\t' on it. It represents the filepath level
        tempLength = 0;
        stack = [];
        console.log("============================================");
        for(let i=0;i<dirArr.length;i++)
        {
            if(dirArr[i].lastIndexOf('\t') == tabIndex && visitedDict[i] == null)//if number of '\t' found and not visited
            {
                stack.push(i);
                tempLength += dirArr[i].length - (tabIndex+1) + 1;//tabIndex*2 to ignore '\t' to be counted
                console.log(dirArr[i], dirArr[i].length);       //backlash is not counted in a string length!
                console.log("tmp length: ", tempLength);
                tabIndex++;//increment tabIndex/level-of-search by one
            }
            else if(dirArr[i].lastIndexOf('\t') == tabIndex && visitedDict[i] != null)//if number of '\t' found BUT visited
            {
                continue;
            }
            else if(dirArr[i].lastIndexOf('\t') == tabIndex-1 && visitedDict[i] == null)//if the loop hits a level that below
            {                                                                           //the expected level.
                break; //For example: we should find level 2, but it hits level 1. That means no more level 2. Break.
            }
        }
        visitedDict[stack.pop()] = 1;//set the top of the stack to VISITED
        console.log(visitedDict);
        console.log("temp: ",tempLength);
        if(tempLength>maxLength) maxLength = tempLength-1;//decrease by 1 because 'dir' doesn't contain '/' at the front
        console.log("maxLength: ",maxLength);           // maxLength = Math.max(maxLength, tempLength); <-- other alternative
    }
    return maxLength;
};