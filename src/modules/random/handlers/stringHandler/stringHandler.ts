const stringHandler = (val1: number | undefined): string => {
  const newVal1 = val1 === undefined ? 5 : val1
  let randomString = ''
  let randomAscii
  for (let i = 0; i < newVal1; i += 1) {
    randomAscii = Math.floor(Math.random() * 25 + 97)
    randomString += String.fromCharCode(randomAscii)
  }
  return randomString
}

export default stringHandler
