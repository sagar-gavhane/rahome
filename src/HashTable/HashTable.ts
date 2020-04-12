type MyKeyType = string | number
type ValueType = string | number | object | Array<string | number | object>

class HashTable {
  #buckets: Array<ValueType> = []
  #keys: any = {}

  private hashCode(key: MyKeyType): number {
    let i, h

    for (i = 0, h = 0; i < `${key}`.length; i++)
      h = (Math.imul(31, h) + `${key}`.charCodeAt(i)) | 0

    return h
  }

  set(key: MyKeyType, value: ValueType) {
    const keyHash: any = `${this.hashCode(key)}`.toString()
    const tuple: object = { [key]: value }
    const bucket: any = this.#buckets.find((bucket) => bucket === keyHash)

    if (!bucket) {
      this.#buckets.push(keyHash)
      this.#keys[keyHash] = { tuple }
    } else {
      this.#keys[bucket] = { tuple }
    }
  }

  get(key: MyKeyType) {
    const keyHash: any = `${this.hashCode(key)}`.toString()
    const bucket: any = this.#buckets.find((bucket) => bucket === keyHash)

    if (!bucket) return undefined

    return this.#keys[keyHash].tuple
  }
}

export default HashTable

// const ht = new HashTable()
// ht.set('name', 'mike')

// // eslint-disable-next-line sonarjs/no-element-overwrite
// ht.set(900, 'jake')
// console.log(ht.get(900))
