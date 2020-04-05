# Queue

A queue is an abstract data type that serves as a collection of elements, with two principal operations: enqueue and dequeue. The order of element to be inserted is first-in-first-out (FIFO). A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first. The difference between stacks and queues is in removing. In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added.

```javascript
import { Queue } from 'rahome'

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log(queue.isEmpty()) // return false

queue.dequeue()
queue.dequeue()
queue.dequeue()

console.log(queue.isEmpty()) // return true
```
