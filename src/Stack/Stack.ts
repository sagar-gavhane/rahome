class Stack {
  // private storage: Array<any> = []
  // eslint-disable-next-line prettier/prettier
  #storage: Array<any> = []

  /**
   * Tests if this stack is empty.
   *
   * @returns {boolean} true if and only if this stack contains no items; false otherwise.
   * @memberof Stack
   */
  public isEmpty(): boolean {
    return this.#storage.length === 0
  }

  /**
   * Removes the object at the top of this stack and returns that object as the value of this function.
   *
   * @returns {*} The element at the top of this stack.
   * @memberof Stack
   */
  public pop(): any {
    if (this.isEmpty()) {
      const message = `EmptyStackException: Trying to perform pop operation on empty stack`
      throw new Error(message)
    }

    return this.#storage.pop()
  }
  /**
   * Pushes an element onto the top of this stack.
   *
   * @param {*} element element to be pushed onto this stack.
   * @memberof Stack
   */
  public push(element: any): void {
    this.#storage.push(element)
  }

  /**
   * Returns an array representation of stack
   *
   * @returns {Array<any>}
   * @memberof Stack
   */
  public toArray(): Array<any> {
    return this.#storage
  }

  /**
   * Returns string representation of stack
   *
   * @returns {Array<any>}
   * @memberof Stack
   */
  public toString(): string {
    return this.#storage.map((el: any) => JSON.stringify(el)).toString()
  }
}

export default Stack
