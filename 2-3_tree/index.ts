class TreeNode<T> {
	values: T[];
	children: TreeNode<T>[];
	constructor(values?: T[]) {
	  this.values = values || [];
	  this.children = [];
	}
  }

  class TwoThreeTree<T> {
	root: TreeNode<T> | null;
	constructor() {
	  this.root = null;
	}

	insert(value: T) {
	  if (!this.root) {
		this.root = new TreeNode([value]);
		return;
	  }

	  let node = this.root;
	  while (node) {
		if (node.values.length === 2) {
		  this.splitNode(node);
		  node = node.children.find(child => child.values[0] <= value);
		} else {
		  node = node.children.find(child => child.values[0] <= value) || node.children[node.children.length - 1];
		}
	  }

	  node.values.push(value);
	  node.values.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
	}

	splitNode(node: TreeNode<T>) {
	  const medianIndex = Math.floor(node.values.length / 2);
	  const median = node.values[medianIndex];

	  const leftValues = node.values.slice(0, medianIndex);
	  const leftNode = new TreeNode(leftValues);
	  leftNode.children = node.children.slice(0, medianIndex + 1);

	  const rightValues = node.values.slice(medianIndex + 1);
	  const rightNode = new TreeNode(rightValues);
	  rightNode.children = node.children.slice(medianIndex + 1);

	  if (node === this.root) {
		this.root = new TreeNode([median]);
		this.root.children = [leftNode, rightNode];
	  } else {
		const parent = this.getParent(node);
		parent.values.push(median);
		parent.values.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
		const medianIndex = parent.values.indexOf(median);

		parent.children.splice(medianIndex, 1, leftNode, rightNode);
	  }
	}

	getParent(node: TreeNode<T>) {
	  let parent = null;
	  let current = this.root;
	  while (current) {
		if (current.children.includes(node)) {
		  parent = current;
		  break;
		} else {
		  current = current.children.find(child => child.values[0] <= node.values[0]);
		}
	  }
	  return parent;
	}

	search(value: T) {
	  let node = this.root;
	  while (node) {
		if (node.values.includes(value)) {
		  return true;
		} else {
		  node = node.children.find(child => child.values[0] <= value);
		}
	  }
	  return false;
	}
  }
