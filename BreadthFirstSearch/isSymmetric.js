/**
 * Created by hansel.tritama on 3/26/18.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */


//Solution:
/*
 1. initialize the nodes / break into 2 sub-trees
 node1 = the left sub-tree of the root
 node2 = the right sub-tree of the root

 2. check if the left of node1 = right of node2
 if yes, run through the recursion
 if no, return false immediately


  Question:
     (1)
  (2)   (2)
 (3)(4)(4)(3)
 */
function checkSymmetric(node1, node2)
{
    if(node1 == null && node2 == null) return true;//we don't use node1.val because there's no node at the end of the tree
    if(node1 == null || node2 == null) return false;
    if(node1.val == node2.val)//if the compared numbers are the same, run the recursion
    {
        if(checkSymmetric(node1.left, node2.right) && checkSymmetric(node1.right, node2.left)) return true;
    }
    return false;
}

var isSymmetric = function(root) {
    if(root == null) return true;
    if(root.length == 1) return true;

    let node1, node2;
    node1 = root.left;
    node2 = root.right;

    return checkSymmetric(node1, node2);
};