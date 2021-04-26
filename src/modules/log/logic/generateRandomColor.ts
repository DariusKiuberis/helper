import colors from '../../../utils/styles/browser/colors'

const generateRandomColor = (): string => {
  return colors[Math.floor(Math.random() * colors.length)]
}

export default generateRandomColor
