# HashTable

In computing, a hash table is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called hash code, into an array of buckets or slots, from which the desired value can be found.

```javascript
class HashTable {
  get(key): Element
  set(key, value): Void
  remove(key): Element
  contains(key): Boolean
  keys(): Elements[]
  clear(): Void
  size(): Number
  isEmpty(): Boolean
  toString(): String
  toArray(): Array<Element>
}
```
