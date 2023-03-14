class TreeNode {
	value: number
	leftNode: TreeNode | null
	rightNode: TreeNode | null

	constructor(value: number) {
		this.value = value
		this.rightNode = null
		this.leftNode = null
	}
}

class BinaryTree {
	root: TreeNode | null

	constructor() {
		this.root = null
	}

	insert(value: number) {
		if (!this.root) {
			this.root = new TreeNode(value)
		} else {
			this.insertNode(this.root, value)
		}
	}

	insertNode(root: TreeNode, value: number) {
		if (value < root.value) {
			if (root.leftNode === null) {
				root.leftNode = new TreeNode(value)
			} else {
				this.insertNode(root.leftNode as TreeNode, value)
			}
		} else {
			if (root.rightNode === null) {
				root.rightNode = new TreeNode(value)
			} else {
				this.insertNode(root.rightNode as TreeNode, value)
			}
		}
	}
	inOrder(root: TreeNode) {
		if (root) {
		  this.inOrder(root.leftNode as TreeNode);
		  console.log(root.value);
		  this.inOrder(root.rightNode as TreeNode);
		}
	}
}

const bst = new BinaryTree()

bst.insert(1)
bst.insert(72)
bst.insert(47)
bst.insert(4)
bst.insert(11)

bst.inOrder(bst.root as TreeNode)