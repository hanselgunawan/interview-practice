/**
 * Created by hansel.tritama on 3/27/18.
 */
// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
//
// For example:
//     Given binary tree [3,9,20,null,null,15,7],
//    3
//  /  \
//  9   20
//     /  \
//    15   7
//
// return its level order traversal as:
// [
//     [3],
//     [9,20],
//     [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let levelOrder = function(root) {
    let queue = [];
    let resultArr = [];
    let tempArr = [];
    let counter = 1, numChildren = 0;
    queue.push(root);//push the root first
    if (root == null) return []
    while(queue.length > 0)//can't use queue != null
    {
        root = queue[0];

        if(root.left != null){
            queue.push(root.left);
            numChildren++//count the number of nodes in the next layer
        }
        if(root.right != null){
            queue.push(root.right);
            numChildren++//count the number of nodes in the next layer
        }

        tempArr.push(root.val);//push current node to temp array

        counter--;

        if(counter == 0)
        {
            resultArr.push(tempArr);
            counter = numChildren;//set counter to number of nodes in the next layer. Excluding: null
            tempArr = [];
            numChildren = 0;//reset number of Children to zero to count the next layer (grandson)
        }

        queue.shift();
    }
    return resultArr;
};