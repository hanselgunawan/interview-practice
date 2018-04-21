/*
 Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

 Calling next() will return the next smallest number in the BST.

 Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
 */

/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */

let stack = [];

var BSTIterator = function(root) {
    while(root!=null)//initialize stack by pushing all LEFT NODE (the most minimum number first)
    {
        stack.push(root);
        root = root.left;
    }
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    if(stack.length==0) return false;
    else return true;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    let node = stack.pop();//top of the stack is a TreeNode
    let result = node.val;//grab the value of the Node
    if(node.right!=null)//this is the most important part on Iterator.
    {
        node = node.right;//go right
        while(node!=null)
        {
            stack.push(node);
            node = node.left;//push the value all the way to the LEFT (grab the lowest numbers)
        }
    }
    return result;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */