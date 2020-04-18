import HashTable from './HashTable'

describe('HashTable', () => {
  describe('constructor', () => {
    it('should create empty HashTable', () => {
      const ht = new HashTable()
      expect(ht.isEmpty()).toBeTruthy()
      expect(ht.size()).toBe(0)
    })
  })
  describe('get(key)', () => {
    it('should retrieve data from HashTable', () => {
      const ht = new HashTable()
      ht.set('name', 'mike')
      ht.set('age', 32)
      ht.set('country', 'USA')

      expect(ht.get('name')).toMatch('mike')
      expect(ht.get('age')).toBe(32)
      expect(ht.get('country')).toMatch('USA')
    })
    it('should return undefined if non exist key entered', () => {
      const ht = new HashTable()
      expect(ht.get('name')).toBeUndefined()
    })
    it('should override value if same key passed', () => {
      const ht = new HashTable()
      ht.set('name', 'mike')
      ht.set('name', 'john')
      expect(ht.get('name')).toMatch('john')
    })
  })
  describe('set(key, value)', () => {
    it('should set key and value into HashTable', () => {
      const ht = new HashTable()
      ht.set('name', 'mike')
      expect(ht.get('name')).toMatch('mike')
    })
  })
  describe('delete(key)', () => {
    it('should delete specificed key from HashTable', () => {
      const ht = new HashTable()
      ht.set('name', 'mike')
      ht.set('age', 39)
      expect(ht.size()).toBe(2)

      ht.delete('age')
      expect(ht.size()).toBe(1)
      expect(ht.get('name')).toMatch('mike')
      expect(ht.get('age')).toBeUndefined()

      ht.delete('name')
      expect(ht.get('name')).toBeUndefined()
      expect(ht.size()).toBe(0)
      expect(ht.isEmpty()).toBeTruthy()
    })
    it('should not throw error while deleteing non exist key', () => {
      const ht = new HashTable()
      ht.set('age', 20)
      ht.delete('name')
      expect(ht.size()).toBe(1)
    })
  })
  describe('contains', () => {
    it('should return true if key exist into hashtable', () => {
      const ht = new HashTable()
      ht.set('age', 38)
      expect(ht.contains('age')).toBeTruthy()
    })
    it('should return false if key not exist into hashtable', () => {
      const ht = new HashTable()
      ht.set('name', 'mike')
      expect(ht.contains('age')).toBeFalsy()
    })
  })
  describe('keys()', () => {
    it('should return all keys from hashtable', () => {
      const ht = new HashTable()
      ht.set('name', 'mike')
      ht.set('age', 78)
      ht.set('country', 'USA')
      expect(ht.keys()).toEqual(['name', 'age', 'country'])
    })
    it('should return empty array if key not exist', () => {
      const ht = new HashTable()
      expect(ht.keys()).toEqual([])
    })
  })
  describe('clear()', () => {
    it('should clear all values from hashtable', () => {
      const ht = new HashTable()
      ht.set('name', 'mike')
      ht.set('age', 89)
      expect(ht.size()).toBe(2)
      ht.clear()
      expect(ht.size()).toBe(0)
    })
    it('shoule clear empty hashtable', () => {
      const ht = new HashTable()
      ht.clear()
      expect(ht.size()).toBe(0)
    })
  })
  describe('size()', () => {
    it('should return 0 if hashtable is empty', () => {
      const ht = new HashTable()
      expect(ht.size()).toBe(0)
    })
    it('should return 2 if we set two keys in hashtable', () => {
      const ht = new HashTable()
      ht.set('name', 'mike')
      ht.set('age', 89)
      expect(ht.size()).toBe(2)
      ht.delete('age')
      expect(ht.size()).toBe(1)
    })
  })
  describe('isEmpty()', () => {
    it('should return true if hashtable is empty', () => {
      const ht = new HashTable()
      expect(ht.isEmpty()).toBeTruthy()
    })
    it('should return false if hashtable is not empty', () => {
      const ht = new HashTable()
      ht.set('name', 'mike')
      expect(ht.isEmpty()).toBeFalsy()
    })
  })
})
