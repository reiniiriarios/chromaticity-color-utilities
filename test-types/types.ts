// This file does not run as a part of `npm run test`
// Using this file to validate typechecking

import Color, { colorTypes } from '../dist/main'

let a: colorTypes.rgb = Color.from('rgb', [22, 33, 44])
let b: colorTypes.hsv = a.to('hsv')
let c: colorTypes.hsl = b.to('hsl')
// expand here to include all types

const x = (rgb: colorTypes.rgb): colorTypes.hsv => {
  let hsv: colorTypes.hsv = rgb.to('hsv')
  return hsv
}
let y: colorTypes.hsv = x(a)

// README.md dummy check

const color1: colorTypes.hsv = Color.from('rgb', [255, 128, 0]).to('hsv')

const scheme1: colorTypes.lab[] = Color.from('hex', 0x9a237f)
  .modify('desaturate', { amount: 0.2 })
  .to('lab', {
    colorSpace: 'AdobeRGB',
    referenceWhite: 'D50',
  })
  .scheme('gradient', {
    with: Color.from('hsl', [300, 50, 45]),
    colors: 5,
  })

const yourMethod = (rgb: colorTypes.rgb): colorTypes.hsv => {
  // do things
  let hsv: colorTypes.hsv = rgb.to('hsv')
  // do things
  return hsv
}
