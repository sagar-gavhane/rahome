# Stack

A stack is an abstract data type that serves as a collection of elements, with two principal operations: push and pop. Order of element to be inserted is last-in-first-out (LIFO) The usual push and pop operations are provided, as well as a method to peek at the top item on the stack, a method to test for whether the stack is empty.

```javascript
import { Stack } from 'rahome'

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

stack.isEmpty() // return false

stack.pop() // remove 40 from stack
stack.pop() // remove 30 from stack
```
