type ElementType = string | number | object | Array<string | number | object>

const DEFAULT_CAPACITY = 100

class Queue {
  #storage: Array<ElementType> = []
  #front: number = 0
  #rear: number = DEFAULT_CAPACITY - 1
  #size: number = 0
  #capacity: number = DEFAULT_CAPACITY

  constructor(capacity: number = DEFAULT_CAPACITY) {
    const absoluteCapacity = Math.abs(capacity)
    this.#capacity = absoluteCapacity > 0 ? absoluteCapacity : DEFAULT_CAPACITY
    this.#storage = new Array(this.#capacity).fill(null)
    this.#rear = this.#capacity - 1
  }

  public dequeue(): ElementType | null {
    if (this.isEmpty()) {
      return null
    }

    const element = this.#storage[this.#front]
    this.#front = (this.#front + 1) % this.#capacity
    this.#size--

    return element
  }

  public enqueue(element: ElementType): boolean {
    if (this.isFull()) {
      const message = `IllegalStateException: There is no space available for current element`
      throw new Error(message)
    }

    this.#rear = (this.#rear + 1) % this.#capacity
    this.#storage[this.#rear] = element
    this.#size++
    return true
  }

  public isEmpty(): boolean {
    return this.#size === 0
  }

  public isFull(): boolean {
    return this.#size === this.#capacity
  }

  public peek(): ElementType {
    return this.#storage[this.#front]
  }

  public toArray(): Array<ElementType> {
    return this.#storage
  }

  public toString(): string {
    return this.#storage
      .map((item: ElementType) => JSON.stringify(item))
      .toString()
  }
}

export default Queue
