// generate random number between 100 and 999, so it's always will be 3 digits number

const generateRandomNumber = (): number => {
  return Math.floor(Math.random() * (999 - 100 + 1)) + 100
}

export default generateRandomNumber
