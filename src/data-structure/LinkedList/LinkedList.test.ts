import { LinkedList } from './../../index'

describe('LinkedList', () => {
  describe('core', () => {
    it('should create empty linked list', () => {
      const list = new LinkedList()
      expect(list.isEmpty()).toBe(true)
      expect(list.toString()).toBe('')
    })
  })
  describe('methods', () => {
    describe('add(element, idx)', () => {
      it('should inserts element at zero position in empty list.', () => {
        const list = new LinkedList()
        list.add(2, 0)
        expect(list.toString()).toBe('2')
      })
      it('should inserts element at zero position in non empty list.', () => {
        const list = new LinkedList()
        list.add(10)
        list.add(20)
        list.add(30)
        list.add(15, 0)
        expect(list.toString()).toBe('15,10,20,30')
      })
      it('should inserts element at 2nd position in non empty list.', () => {
        const list = new LinkedList()
        list.add(10)
        list.add(20)
        list.add(30)
        list.add(15, 2)
        expect(list.toString()).toBe('10,15,20,30')
      })
      it('should throw error of invalid position', () => {
        expect(() => {
          const list = new LinkedList()
          list.add(10)
          list.add(20)
          list.add(30, 9)
        }).toThrow('invalid position')
      })
    })
    describe('addFirst(element)', () => {
      it('should inserts the element at the beginning of empty list.', () => {
        const list = new LinkedList()
        list.addFirst(10)
        list.addFirst(12)
        expect(list.toString()).toBe('12,10')
      })
      it('should inserts the element at the beginning of non empty list.', () => {
        const list = new LinkedList()
        list.addLast(78)
        list.addLast(25)
        list.addFirst(45)
        expect(list.toString()).toBe('45,78,25')
      })
    })
    describe('addLast(element)', () => {
      it('should appends the specified element to the end of empty list.', () => {
        const list = new LinkedList()
        list.addLast(28)
        list.addLast(32)
        expect(list.toString()).toBe('28,32')
      })
      it('should appends the specified element to the end of non empty list.', () => {
        const list = new LinkedList()
        list.addLast(78)
        list.addLast(12)
        list.addLast(98)
        expect(list.toString()).toBe('78,12,98')
      })
    })
    describe('clear()', () => {
      it('should remove all elements from list', () => {
        const list = new LinkedList()
        list.addLast(56)
        list.addLast(34)
        list.addLast(91)

        expect(list.size()).toBe(3)

        list.clear()
        expect(list.size()).toBe(0)
      })
    })
    describe('contains(data)', () => {
      it('should return true if list contains element', () => {
        const list = new LinkedList()
        list.add(10)
        list.add(20)
        list.add(30)
        expect(list.contains(20)).toBeTruthy()
      })
      it('should return true if list contains element object type', () => {
        const list = new LinkedList()
        list.add({ val: 10, id: 1 })
        list.add({ val: 20, id: 2 })
        list.add({ val: 30, id: 3 })
        expect(list.contains({ val: 10, id: 1 })).toBeTruthy()
      })
      it('should return true if list contains element array type', () => {
        const list = new LinkedList()
        list.add([{ val: 10, id: 1 }])
        list.add([{ val: 20, id: 2 }])
        list.add([{ val: 30, id: 3 }])
        expect(list.contains([{ val: 10, id: 1 }])).toBeTruthy()
      })
      it('should return false if list doesnt contains element', () => {
        const list = new LinkedList()
        list.add(10)
        list.add(20)
        list.add(30)
        expect(list.contains(15)).toBeFalsy()
      })
      it('should return false if list doesnt contains element object type', () => {
        const list = new LinkedList()
        list.add({ val: 10, id: 1 })
        list.add({ val: 20, id: 2 })
        list.add({ val: 30, id: 3 })
        expect(list.contains({ val: 10, id: 3 })).toBeFalsy()
      })
    })
  })
})
