class Node {
  constructor(priority) {
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
    return this.heap;
  }

  moveUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex].priority > this.heap[index].priority) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
    return 0;
  }

  moveDown() {
    let parentIndex = 0;
    const length = this.heap.length;
    const elementPriority = this.heap[0].priority;

    while (true) {
      let leftChildIndex = 2 * parentIndex + 1;
      let rightChildIndex = 2 * parentIndex + 2;
      let leftChildPriority, rightChildPriority;
      let indexToSwap = null;

      if (leftChildIndex < length) {
        leftChildPriority = this.heap[leftChildIndex].priority;
        if (leftChildPriority < elementPriority) {
          indexToSwap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChildPriority = this.heap[rightChildIndex].priority;

        if (
          (rightChildPriority < elementPriority && indexToSwap === null) ||
          (rightChildPriority < leftChildPriority && indexToSwap !== null)
        ) {
          indexToSwap = rightChildIndex;
        }
      }

      if (indexToSwap === null) {
        break;
      }

      this.swap(parentIndex, indexToSwap);
      parentIndex = indexToSwap;
    }
  }

  add(value) {
    this.heap.push(value);
    this.moveUp();

    return this.heap;
  }

  remove() {
    this.swap(0, this.heap.length - 1);
    let poppedNode = this.heap.pop();

    if (this.heap.length > 1) {
      this.moveDown();
    }

    return poppedNode;
  }

  runTasks() {
    this.heap.forEach((task) =>
      console.log(`Task with priority ${task.priority} is running`)
    );
  }
}
const JOB_RUNNER = new PriorityQueue();

for (let index = 0; index < 10000; index++) {
  const priority = Math.floor(Math.random() * (500 - 1) + 1);
  JOB_RUNNER.add(new Node(priority));
}

JOB_RUNNER.runTasks();
