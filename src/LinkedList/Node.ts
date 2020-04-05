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

// eslint-disable-next-line prettier/prettier
Node.prototype.toString = function () {
  if (typeof this.value === 'object' && this.value !== null) {
    return JSON.stringify(this.value)
  }
  return `${this.value}`
}

export default Node
