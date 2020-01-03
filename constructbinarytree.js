var buildTree = function(preorder, inorder) {
    if (!inorder || inorder.length === 0) {
        return null
    }

    let next = preorder.shift()
    let index = inorder.indexOf(next)

    let node = new TreeNode(next)

    node.left = buildTree(preorder, inorder.slice(0, index))
    node.right = buildTree(preorder, inorder.slice(index + 1))

    return node
};
