export const getElementStyle = (cssVar: string) => {
  const root = document.documentElement
  const style = getComputedStyle(root)

  if (!style) {
    console.error('Could not get computed style')
    return ''
  }

  // removing new lines and double spaces
  const formattedStyle = style.getPropertyValue(cssVar).replace(/\n/g, '').replace(/\s\s+/g, ' ')

  // for any calc() values, we need to do some math
  return calculateCalcValues(formattedStyle)
}


// calculates calc() values from css (can be dropped and simpl)
const calculateCalcValues = (style: string) => {
  const calcRegex = /calc\((.*?)\)/g
  const calcMatches = style.match(calcRegex)

  if (!calcMatches) {
    return style
  }

  calcMatches.forEach((match) => {
    const calcValue = match.replace('calc(', '').replace(')', '')
    // if calcValue stil has calc inside
    if (calcValue.includes('calc')) {
      const calcResult = calculateCalcValues(calcValue)
      style = style.replace(match, calcResult)
      return
    }
    
    
    const calcValueWihoutPx = calcValue.replace(/px/g, '')
    const calcResult = eval(calcValueWihoutPx)

    style = style.replace(match, `${calcResult}px`)
  })

  return style
}
