# Queue

A `queue` is an abstract data type that serves as a collection of elements, with two principal operations: `enqueue` and `dequeue`. The order of element to be inserted is `first-in-first-out` (FIFO).

A good example of a `queue` is any queue of consumers for a resource where the consumer that came first is served first. The difference between stacks and queues is in removing. In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added as shown in the below image:

```js
import { Queue } from 'rahome'

const queue = new Queue(3)

console.log(queue.isEmpty()) // return true

queue.enqueue(10) // add 10
queue.enqueue(20) // add 20
queue.enqueue(30) // add 30

console.log(queue.toString()) // 10,20,30,40,50
console.log(queue.isFull()) // true

console.log(queue.isEmpty()) // return false

console.log(queue.peek()) // 10
queue.dequeue()

console.log(queue.peek()) // 20
queue.dequeue()

console.log(queue.peek()) // 30
queue.dequeue()

console.log(queue.isEmpty()) // return true
console.log(queue.toString()) // ''
```

[![Edit rahome-queue-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/rahome-queue-example-5kndn?fontsize=14&hidenavigation=1&theme=dark)

## Methods

### `enqueue(element)`

**Signature:** `enqueue(element: string | number | object | Array<string | number | object>): boolean`

**Description:** Method to add element into `Queue`.

**Example:**

```js
import { Queue } from 'rahome'

const queue = new Queue()

queue.enqueue(10) // add 10
queue.enqueue(20) // add 20
queue.enqueue(30) // add 30
queue.enqueue(40) // add 40

console.log(queue.toString()) // 10,20,30,40,null, ..., null
```

---

### `dequeue()`

**Signature:** `dequeue(): ElementType | null`

**Description:** Method to remove element from `Queue`.

**Example:**

```js
import { Queue } from 'rahome'

const queue = new Queue()

queue.enqueue(10) // add 10
queue.enqueue(20) // add 20
queue.enqueue(30) // add 30

queue.dequeue() // remove 10
queue.dequeue() // remove 20
queue.dequeue() // remove 30

console.log(queue.toString()) // ''
console.log(queue.isEmpty()) // true
```

### `isEmpty()`

**Signature:** `isEmpty(): boolean`

**Description:** Method to check queue is empty or not. It will return `true` if queue is empty else return `false`.

**Example:**

```js
import { Queue } from 'rahome'

const queue = new Queue()

console.log(queue.isEmpty()) // true

queue.enqueue(10) // add 10
queue.enqueue(20) // add 20

console.log(queue.isEmpty()) // false

queue.dequeue()
queue.dequeue()

console.log(queue.isEmpty()) // true
```

---

### `isFull()`

**Signature:** `isFull(): boolean`

**Description:** Method to check queue is full or not. It will return `true` if queue is full else return `false`.

**Example:**

```js
import { Queue } from 'rahome'

const queue = new Queue(3)

console.log(queue.isFull()) // false

queue.enqueue(10) // add 10
queue.enqueue(20) // add 20
queue.enqueue(30) // add 20

console.log(queue.isFull()) // true

queue.dequeue()
queue.dequeue()
queue.dequeue()

console.log(queue.isFull()) // false
```

### `peek()`

**Signature:** `peek(): ElementType`

**Description:** Method to retrieves, but does not remove, the head of the queue, or returns null if this queue is empty.

**Example:**

```js
import { Queue } from 'rahome'

const queue = new Queue(3)

console.log(queue.peek()) // null

queue.enqueue(10) // add 10
queue.enqueue(20) // add 20
queue.enqueue(30) // add 20

console.log(queue.peek()) // 10
queue.dequeue()

console.log(queue.peek()) // 20
queue.dequeue()
queue.dequeue()

console.log(queue.peek()) // null
```

---

### `toArray()`

**Signature:** `toArray(): Node[]`

**Description:** Method to returns an array containing all of the elements in queue.

**Example:**

```js
import { Queue } from 'rahome'

const queue = new Queue(3)

console.log(queue.toArray()) // [null,null,null]

queue.enqueue(10) // add 10
queue.enqueue(20) // add 20
queue.enqueue(30) // add 20

console.log(queue.toArray()) // [10,20,30]
```

---

### `toString()`

**Signature:** `toString(): Node[]`

**Description:** Method to returns string representation of queue.

**Example:**

```jsx
import { Queue } from 'rahome'

const queue = new Queue(3)

console.log(queue.toString()) // null,null,null

queue.enqueue(10) // add 10
queue.enqueue(20) // add 20
queue.enqueue(30) // add 20

console.log(queue.toString()) // 10,20,30
```
