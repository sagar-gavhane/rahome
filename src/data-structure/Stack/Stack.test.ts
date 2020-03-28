import Stack from './../Stack'

describe('Stack', () => {
  describe('empty()', () => {
    it('should return true if stack is empty', () => {
      const stack = new Stack()
      expect(stack.isEmpty()).toBeTruthy()
    })
    it('should return false if stack is not empty', () => {
      const stack = new Stack()
      stack.push(10)
      stack.push(20)
      stack.push(30)
      expect(stack.isEmpty()).toBeFalsy()
    })
    it('should return true after popping all stack elements', () => {
      const stack = new Stack()
      stack.push(10)
      stack.push(20)
      stack.push(30)
      expect(stack.isEmpty()).toBeFalsy()
      stack.pop()
      stack.pop()
      stack.pop()
      expect(stack.isEmpty()).toBeTruthy()
    })
  })
  describe('pop()', () => {
    it('should remove element at top of empty stack', () => {
      expect(() => {
        const stack = new Stack()
        stack.pop()
      }).toThrow(/EmptyStackException/)
    })
    it('should remove element at top of stack', () => {
      const stack = new Stack()
      stack.push(10)
      stack.push(20)
      stack.push(30)
      const element = stack.pop()
      expect(stack.isEmpty()).toBeFalsy()
      expect(element).toEqual(30)
    })
  })
  describe('push', () => {
    it('should push element onto empty stack', () => {
      const stack = new Stack()
      stack.push(10)
      stack.push(20)
      stack.push(30)
      expect(stack.isEmpty()).toBeFalsy()
      expect(stack.toString()).toBe('10,20,30')
    })
    it('should push/pop element from stack', () => {
      const stack = new Stack()
      stack.push(10)
      stack.push(20)
      stack.push(30)
      stack.pop()
      stack.pop()
      stack.push(40)
      expect(stack.isEmpty()).toBeFalsy()
      expect(stack.toString()).toBe('10,40')
    })
  })
  describe('toArray()', () => {
    it('should return array representation of empty stack', () => {
      const stack = new Stack()
      expect(stack.toArray()).toEqual([])
    })
    it('should return array representation of non empty stack', () => {
      const stack = new Stack()
      stack.push(20)
      stack.push(30)
      stack.push(40)
      expect(stack.toArray()).toEqual([20, 30, 40])
    })
  })
  describe('toString()', () => {
    it('should return string representation of empty stack', () => {
      const stack = new Stack()
      expect(stack.toString()).toBe('')
    })
    it('should return string representation of non empty stack', () => {
      const stack = new Stack()
      stack.push(20)
      stack.push(30)
      stack.push(40)
      expect(stack.toString()).toMatch('20,30,40')
    })
  })
})
