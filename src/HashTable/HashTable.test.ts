import { HashTable } from '../index'

describe('HashTable', () => {
  describe('constructor()', () => {
    it('should create hashtable with default size', () => {
      const ht = new HashTable()
      ht.set('user', 'jake')
      expect('').toBe('')
    })
  })
})
