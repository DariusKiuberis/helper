const arrayHandler = (
  val1: number | undefined,
  val2: number | undefined
): number => {
  const newVal1 = val1 === undefined ? 3 : val1
  const newVal2 = val2 === undefined ? 3 : val2
  const generatedArray = []

  for (let outer = 0; outer < newVal1; outer++) {
    const innerArray: string[] = []
    generatedArray.push(innerArray)
    for (let inner = 0; inner < newVal2; inner++) {
      let randomString = ''
      let randomAscii
      for (let i = 0; i < 5; i += 1) {
        randomAscii = Math.floor(Math.random() * 25 + 97)
        randomString += String.fromCharCode(randomAscii)
      }

      innerArray.push([
        `${randomString}-` + 1,
        `${randomString}-` + 2,
        `${randomString}-` + 3
      ])
    }
  }

  return generatedArray
}

export default arrayHandler
