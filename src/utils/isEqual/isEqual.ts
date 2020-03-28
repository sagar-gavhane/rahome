const isEqual = (value: any, other: any) => {
  return JSON.stringify(value) === JSON.stringify(other)
}

export default isEqual
