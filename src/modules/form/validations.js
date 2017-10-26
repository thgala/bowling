const defaultCheck = value => {
  if(typeof value !== 'string'){
    return 'Field value is not a string...'
  }
}

export const isEmpty = value => {
  defaultCheck(value)

  return value.length === 0
    ? 'This field cannot be empty'
    : ''
}

export const isTooSmall = value => {
  defaultCheck(value)

  return value.length < 3
    ? 'Field value cannot be less then 3 symbols'
    : ''
}
