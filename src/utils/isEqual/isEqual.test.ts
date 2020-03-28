import isEqual from './index'

describe('isEqual', () => {
  describe('should compare numbers', () => {
    it('should compare [1,1,true]', () => {
      expect(isEqual(1, 1)).toBeTruthy()
    })
    it('should compare [0,0,true]', () => {
      expect(isEqual(0, 0)).toBeTruthy()
    })
    it('should compare [1,0,false]', () => {
      expect(isEqual(1, 0)).toBeFalsy()
    })
    it('should compare [Number(1),1,true]', () => {
      expect(isEqual(Number(1), 1)).toBeTruthy()
    })
    it('should compare [Number(0),1,false]', () => {
      expect(isEqual(Number(0), 1)).toBeFalsy()
    })
    it('should compare [1122.9182,1122.9182,true]', () => {
      expect(isEqual(1122.9182, 1122.9182)).toBeTruthy()
    })
    it('should compare [-8711.9182,8711.9182,false]', () => {
      expect(isEqual(-8711.9182, 8711.9182)).toBeFalsy()
    })
    it('should compare [-8711.9182,8711.9182,true]', () => {
      expect(isEqual(-8711.9182, -8711.9182)).toBeTruthy()
    })
    it('should compare [1,Object(1),true]', () => {
      expect(isEqual(1, Object(1))).toBeTruthy()
    })
    it('should compare [1,"1",false]', () => {
      expect(isEqual(1, '1')).toBeFalsy()
    })
    it('should compare [-0, -0, true]', () => {
      expect(isEqual(-0, -0)).toBeTruthy()
    })
  })
  describe('should compare string', () => {
    it('should compare ["lorem", "lorem", true]', () => {
      expect(isEqual('lorem', 'lorem')).toBeTruthy()
    })
    it('should compare ["Lorem", "lorem", true]', () => {
      expect(isEqual('Lorem', 'lorem')).toBeFalsy()
    })
    it('should compare ["lorem", String(lorem), true]', () => {
      expect(isEqual('lorem', String('lorem'))).toBeTruthy()
    })
    it('should compare ["", "", true]', () => {
      expect(isEqual('', '')).toBeTruthy()
    })
  })
  describe('should compare objects', () => {
    it('should compare [{}, {}, true]', () => {
      expect(isEqual({}, {})).toBeTruthy()
    })
    it('should compare [{id:1}, {}, false]', () => {
      expect(isEqual({ id: 1 }, {})).toBeFalsy()
    })
    it('should compare [{id:1}, {id:1}, true]', () => {
      expect(isEqual({ id: 1 }, { id: 1 })).toBeTruthy()
    })
    it('should compare [{id:1}, {id:2}, false]', () => {
      expect(isEqual({ id: 1 }, { id: 2 })).toBeFalsy()
    })
    it('should compare [Object({}), {}, true]', () => {
      expect(isEqual(Object({}), {})).toBeTruthy()
    })
    it('should compare [Object.create({}), {}, true]', () => {
      expect(isEqual(Object.create({}), {})).toBeTruthy()
    })
  })
  describe('should compare array', () => {
    it(`should compare [[true, null, 1, 'a', undefined], [true, null, 1, 'a', undefined]]`, () => {
      const a = [true, null, 1, 'a', undefined]
      const b = [true, null, 1, 'a', undefined]
      expect(isEqual(a, b)).toBeTruthy()
    })
    it(`should compare [[[1, 2, 3], new Date(2012, 4, 23), /x/, { 'e': 1 }];,[[1, 2, 3], new Date(2012, 4, 23), /x/, { 'e': 1 }]]`, () => {
      const a = [[1, 2, 3], new Date(2012, 4, 23), /x/, { e: 1 }]
      const b = [[1, 2, 3], new Date(2012, 4, 23), /x/, { e: 1 }]
      expect(isEqual(a, b)).toBeTruthy()
    })
    it(`should compare [[1, 2],[1, 2, 3],false]`, () => {
      const a = [1, 2]
      const b = [1, 2, 3]
      expect(isEqual(a, b)).toBeFalsy()
    })
    it(`should compare [[{id: 1}],[{id:1}],true]`, () => {
      const a = [{ id: 1 }]
      const b = [{ id: 1 }]
      expect(isEqual(a, b)).toBeTruthy()
    })
    it(`should compare [[{id: 1}],[{id:2}],false]`, () => {
      const a = [{ id: 1 }]
      const b = [{ id: 2 }]
      expect(isEqual(a, b)).toBeFalsy()
    })
  })
  describe('should compare null values', () => {
    it('should compare [null, null, true]', () => {
      expect(isEqual(null, null)).toBeTruthy()
    })
    it('should compare [null, null, true]', () => {
      expect(isEqual(null, {})).toBeFalsy()
    })
  })
  describe('should compare undefined values', () => {
    it('should compare [undefined, undefined, true]', () => {
      expect(isEqual(undefined, undefined)).toBeTruthy()
    })
    it('should compare [undefined, null, false]', () => {
      expect(isEqual(undefined, null)).toBeFalsy()
    })
  })
})
