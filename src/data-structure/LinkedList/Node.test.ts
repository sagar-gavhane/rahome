import Node from './Node'

describe('Node', () => {
  it('should return Node type object', () => {
    const node = new Node(10)

    expect(node.value).toEqual(10)
    expect(node.next).toBeNull()
  })
  describe('toString()', () => {
    it('should return "10"', () => {
      const node = new Node(10)

      expect(node.toString()).toEqual('10')
    })
    it('should return "{ id : 10 }"', () => {
      const node = new Node({ id: 10 })

      expect(JSON.parse(node.toString())).toEqual({ id: 10 })
    })
    it('should return "[{ id : 10 }]"', () => {
      const node = new Node([{ id: 10 }])

      expect(JSON.parse(node.toString())).toEqual([{ id: 10 }])
    })
  })
})
