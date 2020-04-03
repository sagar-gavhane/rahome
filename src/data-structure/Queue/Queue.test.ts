import Queue from './Queue'

describe('Queue', () => {
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
})
