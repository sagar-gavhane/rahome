import Node from './Node'
import isEqual from '../utils/isEqual'

class LinkedList {
  // eslint-disable-next-line prettier/prettier
  #head: null | Node = null
  #tail: null | Node = null
  #numberOfNodes: number = 0

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
    if (position && position > this.#numberOfNodes + 1) {
      throw new Error('invalid position')
    }

    if (position === null) {
      this.isEmpty() ? this.addFirst(element) : this.addLast(element)

      return this
    }

    if (position === 0) {
      this.addFirst(element)

      return this
    } else {
      let current: null | Node = this.#head
      let currentPosition: number = 0
      const node = new Node(element, null)

      while (
        current?.next !== null &&
        position !== null &&
        currentPosition < position - 1
      ) {
        current = current?.next || null
        currentPosition++
      }

      if (current) {
        const temp = current.next
        current.next = node
        current.next.next = temp
      }
      this.#numberOfNodes++

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
    const node = new Node(element, this.#head)

    this.#head = node
    this.#numberOfNodes++

    if (!this.#tail) {
      this.#tail = node
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

    if (this.isEmpty()) {
      this.#head = node
      this.#tail = node
    }

    /* istanbul ignore else */
    if (this.#tail !== null) {
      this.#tail.next = node
      this.#tail = node
    }

    this.#numberOfNodes++

    return this
  }

  /**
   * Removes all of the elements from list.
   *
   * @memberof LinkedList
   */
  public clear(): void {
    this.#head = null
    this.#tail = null
    this.#numberOfNodes = 0
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
    if (this.isEmpty()) return false

    let current: Node | null = this.#head

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
    return this.#head === null
  }

  /**
   *
   *
   * @returns {(Node | null)}
   * @memberof LinkedList
   */
  public remove(
    element: string | string[] | number | number[] | object
  ): Node | null {
    if (this.#head === null) {
      return null
    }

    let deletedNode: Node | null = null

    if (isEqual(this.#head.value, element)) {
      deletedNode = this.#head
      this.#head = this.#head.next
    }

    let current = this.#head

    while (current && current?.next !== null) {
      if (isEqual(current?.next.value, element)) {
        deletedNode = current?.next
        current.next = current?.next.next
      } else {
        current = current?.next
      }
    }

    if (isEqual(this.#tail?.value, element)) {
      this.#tail = current
    }

    return deletedNode
  }
  /**
   * Removes and returns the last element from this list.
   *
   * @returns {(Node | null)}
   * @memberof LinkedList
   */
  public removeFirst(): Node | null {
    if (this.#head === null) {
      return null
    }

    const current = this.#head
    this.#head = this.#head.next
    current.next = null

    return current
  }
  /**
   * Removes and returns the last element from this list.
   *
   * @returns {(Node | null)}
   * @memberof LinkedList
   */
  public removeLast(): Node | null {
    if (this.#head === null) {
      return null
    }

    let deletedNode: Node | null = null

    if (this.#head === this.#tail) {
      deletedNode = this.#head

      this.#head = null
      this.#tail = null

      return deletedNode
    }

    let current: Node | null = this.#head

    while (current?.next !== null) {
      if (!current?.next.next) {
        /* istanbul ignore else */
        if (current?.next) {
          deletedNode = current.next
          current.next = null
        }
      } else {
        current = current.next
      }
    }

    this.#tail = current

    return deletedNode
  }

  public size(): number {
    return this.#numberOfNodes
  }

  /**
   * Returns an array containing all of the elements in list.
   *
   * @returns {Node[]}
   * @memberof LinkedList
   */
  public toArray(): Node[] {
    const nodes: Array<Node> = []
    let current = this.#head

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
