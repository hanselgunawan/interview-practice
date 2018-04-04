/*
 There are a total of n courses you have to take, labeled from 0 to n - 1.

 Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

 Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

 There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

 For example:

 2, [[1,0]]
 There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1]

 4, [[1,0],[2,0],[3,1],[3,2]]
 There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2.
 Both courses 1 and 2 should be taken after you finished course 0. So one correct course order is [0,1,2,3].
 Another correct ordering is [0,2,1,3].

 Note:
 The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
 You may assume that there are no duplicate edges in the input prerequisites.
*/

/**
 * @param {number} numCourses
 * @param {number[from][to]} prerequisites
 * @return {number[]}
 */

/*
SPECIAL CASES:
1)
5
[[1,0]]
result: [4,3,2,0,1]

2)
5
[]
result: [4,3,2,1,0]

3)
2
[1,0],[0,1]
result: []

4)
5
[1,0]
result: [4,3,2,0,1]
*/

function checkCyclic(visiting, toBePushedNum)
{
    for(let j=0;j<visiting.length;j++)
    {
        if(toBePushedNum==visiting[j]) return false;
    }
    return true;
}

//start = start endpoint / node / course
//visiting = to monitor cyclic and traversal
//visited = a fixed array to monitor visited node / course
//graph = the prerequistes itself
//resultArr = if there's no more path, push to this array as a result
//numCourses = run recursion until resultArr.length is NOT equal to numCourses (all visited)
function dfs(start, visiting, visited, graph, resultArr, numCourses)
{
    if(resultArr.length!=numCourses)
    {
        let found = false;
        for(let i=0;i<graph.length;i++)
        {
            if(graph[i][1]==start && !visited[graph[i][0]])
            {
                if(checkCyclic(visiting, graph[i][0]))//duplicate num in visiting arr = cycle exist!
                {
                    visiting.push(graph[i][0]);
                    start = graph[i][0];
                    found = true;
                    break;
                }
                else
                {
                    return [];
                }
            }
        }
        if(!found)
        {
            let popNumber = visiting.pop();
            visited[popNumber] = true;
            start = visiting[visiting.length-1];//backtracking with visiting stack
            resultArr.unshift(popNumber);//use unshift, so we don't have to reverse the array
        }
        resultArr = dfs(start, visiting, visited, graph, resultArr, numCourses);
    }

    return resultArr;
}

var findOrder = function(numCourses, prerequisites) {
    if(prerequisites.length==0 && numCourses>0)//if there's no prerequisites BUT there's a course,
    {                                         //store the result in descending order.
        let prereqArr = [];
        for(let i=numCourses-1;i>=0;i--)//to handle a case where prereq = [] and numCourses > 0
        {
            prereqArr.push(i);
        }
        return prereqArr;
    }
    let start = prerequisites[0][1];
    let visiting = [];
    let visited = new Array(numCourses);
    let resultArr = [];

    visiting.push(start);

    resultArr = dfs(start, visiting, visited, prerequisites, resultArr, numCourses);

    return resultArr;

};