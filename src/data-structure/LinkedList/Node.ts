import isObject from 'lodash/isObject'

class Node {
  public value: string | number | object | string[] | number[]
  public next: null | Node

  constructor(
    value: string | number | object | string[] | number[],
    next: null | Node = null
  ) {
    this.value = value
    this.next = next
  }
}

Node.prototype.toString = function() {
  if (isObject(this.value)) {
    return JSON.stringify(this.value)
  }
  return `${this.value}`
}

export default Node
