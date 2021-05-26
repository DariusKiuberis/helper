const numberHandler = (
  val1: number | undefined,
  val2: number | undefined
): number => {
  const newVal1 = val1 === undefined ? 1 : val1
  const newVal2 = val2 === undefined ? 99 : val2
  return Math.floor(Math.random() * (newVal2 - newVal1) + newVal1)
}

export default numberHandler
