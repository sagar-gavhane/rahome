type K = string | number
type V = string | number | object | Array<string | number | object>

interface Keys {
  [key: string]: V
}

class HashTable {
  #buckets: Map<K, V>
  #keys: Keys = {}

  /**
   * Creates an instance of HashTable.
   * @memberof HashTable
   */
  constructor() {
    this.#buckets = new Map()
  }

  /**
   * Returns the hash code passed key
   *
   * @param {K} key
   * @returns {K} hash code of passed key
   * @memberof HashTable
   */
  private hashCode(key: K): K {
    // copied from https://gist.github.com/hyamamoto/fd435505d29ebfa3d9716fd2be8d42f0#gistcomment-2694461
    let i, h

    for (i = 0, h = 0; i < `${key}`.length; i++)
      h = (Math.imul(31, h) + `${key}`.charCodeAt(i)) | 0

    return h
  }

  /**
   * Returns the value to which the specified key is mapped, or undefined if this HashTable contains no mapping for the key.
   *
   * @param {K} key
   * @returns {(V | undefined)} value or undefined
   * @memberof HashTable
   */
  public get(key: K): V | undefined {
    const keyHash: K = this.hashCode(key)
    return this.#buckets.get(keyHash)
  }

  /**
   * Adds or updates an value with a specified key
   *
   * @param {K} key
   * @param {V} value
   * @memberof HashTable
   */
  public set(key: K, value: V): void {
    const keyHash: K = this.hashCode(key)
    this.#keys[keyHash] = key
    this.#buckets.set(keyHash, value)
  }

  /**
   * Removes the specified key and value from a HashTable
   *
   * @param {K} key
   * @memberof HashTable
   */
  public delete(key: K): void {
    const keyHash: K = this.hashCode(key)
    delete this.#keys[keyHash]
    this.#buckets.delete(keyHash)
  }

  /**
   * Tests if some key is exist into HashTable.
   *
   * @param {K} key
   * @returns {boolean}
   * @memberof HashTable
   */
  public contains(key: K): boolean {
    const keyHash: K = this.hashCode(key)
    return this.#buckets.has(keyHash)
  }

  /**
   * Returns an enumeration of the keys in this hashtable.
   *
   * @returns {Array<any>}
   * @memberof HashTable
   */
  public keys(): Array<any> {
    return this.toArray().map((value) => {
      const [key] = value
      return key
    })
  }

  /**
   * Clears this hashtable so that it contains no keys.
   *
   * @memberof HashTable
   */
  public clear(): void {
    this.#keys = {}
    this.#buckets.clear()
  }

  /**
   * Returns the number of keys in this hashtable.
   *
   * @returns {number} number of keys in this hashtable
   * @memberof HashTable
   */
  public size(): number {
    return this.#buckets.size
  }

  /**
   * Returns true if hashtable is empty
   *
   * @returns {boolean} true if hashtable is empty
   * @memberof HashTable
   */
  public isEmpty(): boolean {
    return this.size() === 0
  }

  /**
   * Returns an array containing all of the hashtable
   *
   * @returns {Array}
   * @memberof HashTable
   */
  public toArray(): Array<any> {
    return Array.from(this.#buckets).map((pairs) => {
      const [hashCode, value] = pairs
      return [this.#keys[hashCode], value]
    })
  }

  /**
   * Returns string representation of hashtable
   *
   * @returns {string}
   * @memberof HashTable
   */
  public toString(): string {
    let output: any = []
    this.#buckets.forEach((value, key) => {
      let decodedHashKey = this.#keys[key]
      output.push(`${decodedHashKey}=${JSON.stringify(value)}`)
    })

    return output.join(',')
  }
}

export default HashTable
