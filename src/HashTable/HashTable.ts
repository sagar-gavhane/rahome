import LinkedList from './../LinkedList'

type MyKeyType = string | number
type ValueType = string | number | object | Array<string | number | object>

const DEFAULT_HASH_TABLE_CAPACITY = 32

class HashTable {
  #buckets: Array<ValueType> = []
  #keys: any = {}
  #capacity: number = DEFAULT_HASH_TABLE_CAPACITY

  constructor(capacity: number = DEFAULT_HASH_TABLE_CAPACITY) {
    const absoluteCapacity = Math.abs(capacity)
    this.#capacity =
      absoluteCapacity > 0 ? absoluteCapacity : DEFAULT_HASH_TABLE_CAPACITY
    this.#buckets = Array(this.#capacity)
      .fill(null)
      .map(() => new LinkedList())
  }

  // todo: hashCode method should be private
  public hashCode(key: MyKeyType): number {
    let i, h

    for (i = 0, h = 0; i < `${key}`.length; i++)
      h = (Math.imul(31, h) + `${key}`.charCodeAt(i)) | 0

    return h
  }

  set(key: MyKeyType, _value: ValueType) {
    const keyHash = this.hashCode(key)

    this.#keys[key] = keyHash
    let bucket: any = this.#buckets[keyHash]

    if (bucket) {
      // const node = bucket.find({  })
    }
    console.log('#buckets', this.#buckets)
    console.log('bucket', bucket)
    console.log('k', this.#keys)
  }
}

export default HashTable
// const ht = new HashTable(10)
// ht.set('name', 'mike')
// console.log('[code]', code)
