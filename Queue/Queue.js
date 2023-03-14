class Queue {
	constructor() {
	  this.items = [];
	}

	// Add element to the queue
	enqueue(item) {
	  this.items.push(item);
	}

	// Remove the first element from the queue
	dequeue() {
	  return this.items.shift();
	}

	// Get the first element from the queue
	peek() {
	  return this.items[0];
	}

	// Get the size of the queue
	size() {
	  return this.items.length;
	}

	// Check if the queue is empty
	isEmpty() {
	  return this.items.length === 0;
	}
  }
