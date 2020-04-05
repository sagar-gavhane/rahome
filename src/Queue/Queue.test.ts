import Queue from './Queue'

describe('Queue', () => {
  describe('constructor(capacity)', () => {
    it('should create new queue with default capacity 100', () => {
      const queue = new Queue()
      expect(queue.toArray()).toHaveLength(100)
    })
    it('should create new queue with defined capacity 50', () => {
      const queue = new Queue(50)
      expect(queue.toArray()).toHaveLength(50)
    })
    it('should not accept negative capacity like -25', () => {
      // when constructor receives negative capacity then
      // it will convert to absolute positive number
      const queue = new Queue(-25)
      expect(queue.toArray()).toHaveLength(25)
    })
    it('should not accept zero capacity', () => {
      const queue = new Queue(0)
      expect(queue.toArray()).toHaveLength(100)
    })
  })
  describe('isEmpty()', () => {
    it('should return true if queue is empty', () => {
      const queue = new Queue()
      expect(queue.isEmpty()).toBeTruthy()
    })
    it('should return false if queue is not empty', () => {
      const queue = new Queue()
      queue.enqueue(10)
      expect(queue.isEmpty()).toBeFalsy()
    })
    it('should return true after dequeue all element from queue', () => {
      const queue = new Queue()
      queue.enqueue(10)
      queue.enqueue(20)
      queue.dequeue()
      queue.dequeue()
      expect(queue.isEmpty()).toBeTruthy()
    })
  })
  describe('enqueue(element)', () => {
    it('should enqueue elements into empty queue', () => {
      const queue = new Queue(5)
      expect(queue.toArray().filter(Boolean)).toEqual([])
      queue.enqueue(10)
      queue.enqueue(20)
      queue.enqueue(30)
      expect(queue.toArray().filter(Boolean)).toEqual([10, 20, 30])
    })
    it('should throw IllegalStateException if queue capacity is full', () => {
      expect(() => {
        const queue = new Queue(3)
        queue.enqueue(10)
        queue.enqueue(20)
        queue.enqueue(30)
        queue.enqueue(40)
      }).toThrow(/IllegalStateException/)
    })
  })
  describe('dequeue()', () => {
    it('should dequeue elements from empty queue', () => {
      const queue = new Queue(5)
      const element = queue.dequeue()
      expect(element).toBeNull()
    })
    it('should dequeue elements from not empty queue', () => {
      const queue = new Queue(5)
      queue.enqueue(10)
      queue.enqueue(20)
      queue.enqueue(30)

      expect(queue.toArray().filter(Boolean)).toEqual([10, 20, 30])
      expect(queue.dequeue()).toBe(10)
      expect(queue.dequeue()).toBe(20)
      expect(queue.dequeue()).toBe(30)
      expect(queue.dequeue()).toBeNull()
      expect(queue.toArray().filter(Boolean)).toEqual([10, 20, 30])
    })
  })
  describe('isFull()', () => {
    it('should return false if queue is empty', () => {
      const queue = new Queue(3)
      expect(queue.isFull()).toBeFalsy()
    })
    it('should return false if number of elements is less than queue capacity', () => {
      const queue = new Queue(5)
      queue.enqueue(10)
      queue.enqueue(20)
      queue.enqueue(30)
      expect(queue.isFull()).toBeFalsy()
    })
    it('should return true if number of elements is equal to queue capacity', () => {
      const queue = new Queue(5)
      queue.enqueue(10)
      queue.enqueue(20)
      queue.enqueue(30)
      queue.enqueue(40)
      queue.enqueue(50)
      expect(queue.isFull()).toBeTruthy()
    })
  })
  describe('peek()', () => {
    it('should return null if queue is empty', () => {
      const queue = new Queue(5)
      expect(queue.peek()).toBeNull()
    })
    it('should return current element without removing it from queue', () => {
      const queue = new Queue(5)
      queue.enqueue(10)
      queue.enqueue(20)
      queue.enqueue(30)
      expect(queue.peek()).toEqual(10)
    })
  })
  describe('toArray()', () => {
    it('should return representation of empty queue', () => {
      const queue = new Queue(5)
      expect(queue.toArray()).toEqual([null, null, null, null, null])
    })
    it('should return representation of non empty queue', () => {
      const queue = new Queue(5)
      queue.enqueue(10)
      queue.enqueue(20)
      queue.enqueue(30)
      expect(queue.toArray()).toEqual([10, 20, 30, null, null])
    })
  })
  describe('toString()', () => {
    it('should return representation of empty queue', () => {
      const queue = new Queue(5)
      expect(queue.toString()).toMatch('null,null,null,null,null')
    })
    it('should return representation of non empty queue', () => {
      const queue = new Queue(5)
      queue.enqueue(10)
      queue.enqueue(20)
      queue.enqueue(30)
      expect(queue.toString()).toMatch('10,20,30,null,null')
    })
  })
})
