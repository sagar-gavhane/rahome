import isNull from 'lodash/isNull'
import isEqual from 'lodash/isEqual'
import Node from './Node'

class LinkedList {
  private head: null | Node = null
  private tail: null | Node = null
  private numberOfNodes: number = 0

  /**
   * Inserts the specified element at the specified position in list.
   *
   * @param {(string | string[] | number | number[] | object)} element
   * @param {(null | number)} [position=null]
   * @returns {LinkedList}
   * @memberof LinkedList
   */
  public add(
    element: string | string[] | number | number[] | object,
    position: null | number = null
  ): LinkedList {
    if (!isNull(position) && position > this.numberOfNodes + 1) {
      throw new Error('invalid position')
    }

    if (isNull(position)) {
      this.isEmpty() ? this.addFirst(element) : this.addLast(element)

      return this
    }

    if (position === 0) {
      this.addFirst(element)

      return this
    } else {
      let current: null | Node = this.head
      let currentPosition: number = 0
      const node = new Node(element, null)

      while (!isNull(position) && currentPosition < position - 1) {
        current = current?.next || null
        currentPosition++
      }

      node.next = current || null
      current = node
      this.numberOfNodes++

      if (!isNull(this.head)) this.head.next = current || null

      return this
    }
  }

  /**
   * Inserts the specified element at the beginning of list.
   *
   * @param {(string | string[] | number | number[] | object)} element
   * @returns {LinkedList}
   * @memberof LinkedList
   */
  public addFirst(
    element: string | string[] | number | number[] | object
  ): LinkedList {
    const node = new Node(element, this.head)

    this.head = node
    this.numberOfNodes++

    if (!this.tail) {
      this.tail = node
    }

    return this
  }

  /**
   * Appends the specified element to the end of list.
   *
   * @param {(string | string[] | number | number[] | object)} element
   * @returns {LinkedList}
   * @memberof LinkedList
   */
  public addLast(
    element: string | string[] | number | number[] | object
  ): LinkedList {
    const node: Node = new Node(element)

    if (!this.head) {
      this.head = node
      this.tail = node
    }

    if (!isNull(this.tail)) {
      this.tail.next = node
      this.tail = node
    }

    this.numberOfNodes++

    return this
  }

  /**
   * Removes all of the elements from list.
   *
   * @memberof LinkedList
   */
  public clear(): void {
    this.head = null
    this.tail = null
    this.numberOfNodes = 0
  }

  /**
   * Returns true if this list contains the specified element.
   *
   * @param {*} element
   * @returns {boolean}
   * @memberof LinkedList
   */
  public contains(
    element: string | number | object | string[] | number[]
  ): boolean {
    if (!this.head) return false

    let current: Node | null = this.head

    while (current) {
      if (isEqual(current.value, element)) return true
      current = current.next
    }

    return false
  }

  /**
   * Returns true if list is empty
   *
   * @returns {boolean}
   * @memberof LinkedList
   */
  public isEmpty(): boolean {
    return isNull(this.head)
  }

  public size(): number {
    return this.numberOfNodes
  }

  /**
   * Returns an array containing all of the elements in list.
   *
   * @returns {Node[]}
   * @memberof LinkedList
   */
  public toArray(): Node[] {
    const nodes = []
    let current = this.head

    while (current) {
      nodes.push(current)
      current = current.next
    }

    return nodes
  }

  /**
   * Returns string representation of list
   *
   * @returns {string}
   * @memberof LinkedList
   */
  public toString() {
    const convertToString = (node: Node) => node.toString()
    const nodes: Node[] = this.toArray()

    return nodes.map(convertToString).toString()
  }
}

export default LinkedList
