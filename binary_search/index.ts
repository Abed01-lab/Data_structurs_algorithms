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

	isEmpty() {
		return this.root === null
	}

	insert(value: number) {
		const newNode = new TreeNode(value)
		if (this.isEmpty()) {
			this.root = newNode
		} else {
			this.insertNode(this.root as TreeNode, newNode)
		}
	}

	insertNode(root: TreeNode, newNode: TreeNode) {
		if (newNode.value < root.value) {
			if (root.leftNode === null) {
				root.leftNode = newNode
			} else {
				this.insertNode(root.leftNode, newNode)
			}
		} else {
			if (root.rightNode === null) {
				root.rightNode = newNode
			} else {
				this.insertNode(root.rightNode, newNode)
			}
		}
	}

	min(root: TreeNode) {
		if (root?.leftNode === null) {
			return this.root?.value
		} else {
			this.min(root.leftNode)
		}
	}

	max(root: TreeNode) {
		if (root?.rightNode === null) {
			return this.root?.value
		} else {
			this.min(root.rightNode)
		}
	}

	inOrder(root: TreeNode) {
		if (root) {
		  this.inOrder(root.leftNode as TreeNode);
		  console.log(root.value);
		  this.inOrder(root.rightNode as TreeNode);
		}
	}


	delete(value: number) {
		if (this.isEmpty()) return null
		this.root = this.deleteNode(this.root as TreeNode, value)
	}

	deleteNode(root: TreeNode, value: number): TreeNode {
		if (root.value < value) {
			root.leftNode = this.deleteNode(root.leftNode as TreeNode, value)
		} else if (root.value > value) {
			root.rightNode = this.deleteNode(root.rightNode as TreeNode, value)
		} else {
			if(root.rightNode === null) {
				return root.leftNode as TreeNode
			} else if (root.leftNode === null) {
				return root.rightNode as TreeNode
			}

			root.value = this.min(root.rightNode) as number

			root.rightNode = this.deleteNode(root.rightNode as TreeNode, root.value)
		}

		return root
	}
}

const bst = new BinaryTree()

bst.insert(1)
bst.insert(72)
bst.insert(47)
bst.insert(4)
bst.insert(11)

bst.inOrder(bst.root as TreeNode)

bst.delete(47)
console.log("deleted 47")
bst.inOrder(bst.root as TreeNode)

console.log(bst.min(bst.root as TreeNode))
