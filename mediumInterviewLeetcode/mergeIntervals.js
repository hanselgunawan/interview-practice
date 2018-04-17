/*
 Given a collection of intervals, merge all overlapping intervals.

 Example:

 Input: [[1,3],[2,6],[8,10],[15,18]]
 Output: [[1,6],[8,10],[15,18]]
 Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 Example 2:

 Input: [[1,4],[4,5]]
 Output: [[1,5]]
 Explanation: Intervals [1,4] and [4,5] are considerred overlapping.
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    //special case: [1,4],[4,0] --> [1,4]
    let sortedIntervals = intervals.sort(function(a,b){return a.start-b.start});//sort the array by starting integer ASCENDING
    let i = 0;
    let length = sortedIntervals.length-1;
    let maxNumber = 0;

    while(i<length)
    {
        if(sortedIntervals[i].end>=sortedIntervals[i+1].start)
        {
            maxNumber = Math.max(sortedIntervals[i].end, sortedIntervals[i+1].end);//check the largest end value between 2 intervals
            let newInterval = new Interval(sortedIntervals[i].start, maxNumber);
            sortedIntervals.splice(i,2);//remove 2 elements. Ex: [1,5],[2,6],[7,10]
            sortedIntervals.splice(i,0,newInterval);//merge it into 1 element. Ex: [1,6],[7,10]
            length = sortedIntervals.length-1;//update the length. Ex: from 3 into 2 length size
            continue;
        }
        i++;//if current end value is LESS THAN next start value, continue to the next interval
    }
    return sortedIntervals;
};