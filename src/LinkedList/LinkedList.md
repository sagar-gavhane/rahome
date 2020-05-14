# LinkedList

A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations.

```js
import LinkedList from 'rahome'

const list = new LinkedList()
list.add(10) // add 10 to list => [10]
list.add(20) // add 20 to list => [10] -> [20]
list.add(30) // add 20 to list => [10] -> [20] -> [30]

list.addFirst(5) // add 10 to list => [5] -> [10] -> [20] -> [30]

list.addLast(40) // add 40 to list => [5] -> [10] -> [20] -> [30] -> [40]
```

## Reference

### `constructor`

**Signature:**

`LinkedList(): void`

**Description:**

It will constructs an empty linked list.

**Note:**

`constructs()` will ignore passed paramaters.

---

### `add(element, position)`

**Signature:**

`add(element: string | string[] | number | number[] | object, position: null | number = null): LinkedList`

**Description:**

Method to inserts the specified element at the specified position in list.

```js
const list = new LinkedList()
list.add(30) // add 30 to list
list.add(20) // add 20 to list
list.add(10, 1) // add 10 to first position
```

**Note:**

position argument should be positive integer number. if we pass negative or invalid number then it will through `invalid position` error.

---

### `addFirst(element)`

**Signature:**

`addFirst(element: string | string[] | number | number[] | object): LinkedList`

**Description:**

Method to inserts the specified element at the beginning of list.

```js
const list = new LinkedList()
list.add(20) // adds to 20 to list
list.add(30) // adds to 30 to list
list.addFirst(10) // it will add 10 to begining of list
```

---

### `addLast(element)`

**Signature:**

`addLast(element: string | string[] | number | number[] | object): LinkedList`

**Description:**

Method to appends the specified element to the end of list.

```js
const list = new LinkedList()
list.add(20) // adds to 20 to list
list.add(30) // adds to 30 to list
list.addLast(10) // it will add 10 to end of list
```

---

### `clear()`

**Signature:**

`clear():void`

**Description:**

Method to removes all of the elements from list.

```js
const list = new LinkedList()
list.add(20) // adds to 20 to list
list.add(30) // adds to 30 to list
list.clear() // this line will remove all elements from list
```

---

### `contains(element)`

**Signature:**

`contains(element: string | number | object | string[] | number[]): boolean`

**Description:**

Method to check element is contains into the list. It will returns `true` if this list contains the specified element else return `false`.

```js
const list = new LinkedList()
list.add(10) // adds to 10 to list
list.add(20) // adds to 20 to list
list.add(30) // adds to 30 to list
list.contains(10) // this line will return true
list.contains(40) // this line will return false
```

---

### `isEmpty()`

**Signature:**

`isEmpty(): boolean`

**Description:**

Method to check list is empty or not. It will return `true` if list is empty else return `false`.

```js
const list = new LinkedList()
list.isEmpty() // returns true
list.add(10) // adds 10 to list
list.isEmpty() // returns false
```

---

### `remove(element)`

**Signature:**

`remove(element: string | string[] | number | number[] | object): Node | null`

**Description:**

Method to retrieves and removes element from the list. If element is not found then it will `null` value

---

### `removeFirst()`

**Signature:**

`removeFirst(): Node | null`

**Description:**

Method to remove and returns the last element from this list.

---

### `removeLast()`

**Signature:**

`removeLast(): Node | null`

**Description:**

Method to remove and returns the last element from this list.

---

### `size()`

**Signature:**

`size(): number`

**Description:**

Method to returns the number of elements in the list.

---

### `toArray()`

**Signature:**

`toArray(): Node[]`

**Description:**

Method to returns an array containing all of the elements in list.

---

### `toString()`

**Signature:**

`toString(): Node[]`

**Description:**

Method to returns string representation of list
