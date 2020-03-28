# LinkedList

A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations

```js
import LinkedList from 'rahome'

const list = new LinkedList()
list.add(10) // add 10 to list => [10]
list.add(20) // add 20 to list => [10] -> [20]
list.add(30) // add 20 to list => [10] -> [20] -> [30]

list.addFirst(5) // add 10 to list => [5] -> [10] -> [20] -> [30]

list.addLast(40) // add 40 to list => [5] -> [10] -> [20] -> [30] -> [40]
```
