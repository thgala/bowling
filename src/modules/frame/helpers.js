export const arrayFromNumber = number => {
  return Array.from({ length: number }, (v, i) => i)
}

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
