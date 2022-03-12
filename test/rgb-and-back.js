const should = require('chai').should()
const Color = require('../dist/main.js').default

const black = '\x1b[30m'
const red = '\x1b[31m'
const green = '\x1b[32m'
const yellow = '\x1b[33m'
const blue = '\x1b[34m'
const magenta = '\x1b[35m'
const cyan = '\x1b[36m'
const white = '\x1b[37m'
const gray = '\x1b[90m'
const bred = '\x1b[91m'
const bgreen = '\x1b[92m'
const byellow = '\x1b[93m'
const bblue = '\x1b[94m'
const bmagenta = '\x1b[95m'
const bcyan = '\x1b[96m'
const bwhite = '\x1b[97m'
const endTermColor = '\x1b[0m'

toRgbAndBack = (
  to,
  checkAlpha = true,
  step = 1,
  tolerance = 0.1,
  toArgs = {},
  backArgs = {}
) => {
  toArgs.round = false
  backArgs.round = false
  let percentComplete = 0
  process.stdout.write(
    `${gray}  - ${cyan}toRgbAndBack (${magenta}${to}${cyan})${endTermColor}\n`
  )
  for (let r = 0; r <= 255; r += step) {
    for (let g = 0; g <= 255; g += step) {
      for (let b = 0; b <= 255; b += step) {
        if (checkAlpha) {
          for (let a = 0; a <= 255; a += step) {
            const rgbA = Color.from('rgba', [r, g, b, a])
            const toColor = rgbA.to(to, toArgs)
            const rgbB = toColor.to('rgba', backArgs)
            Math.abs(rgbA.r - rgbB.r).should.be.lessThanOrEqual(tolerance)
            Math.abs(rgbA.g - rgbB.g).should.be.lessThanOrEqual(tolerance)
            Math.abs(rgbA.b - rgbB.b).should.be.lessThanOrEqual(tolerance)
            Math.abs(rgbA.a - rgbB.a).should.be.lessThanOrEqual(tolerance)
          }
        } else {
          const rgbA = Color.from('rgb', [r, g, b])
          const toColor = rgbA.to(to, toArgs)
          const rgbB = toColor.to('rgb', backArgs)
          // process.stdout.write(`\r    ${gray}${rgbA.r} ${rgbA.g} ${rgbA.b} => ${toColor.toString().replace(/\n/g,' ')} => ${rgbB.r} ${rgbB.g} ${rgbB.b}  ${endTermColor}\n`)
          Math.abs(rgbA.r - rgbB.r).should.be.lessThanOrEqual(tolerance)
          Math.abs(rgbA.g - rgbB.g).should.be.lessThanOrEqual(tolerance)
          Math.abs(rgbA.b - rgbB.b).should.be.lessThanOrEqual(tolerance)
        }
      }
      percentComplete += 1 / ((255 + step) / step) / ((255 + step) / step)
      let percentDisplay = (percentComplete * 100).toFixed(2)
      process.stdout.write(`\r    ${green}${percentDisplay}%  ${endTermColor}`)
    }
  }
  process.stdout.write(`\r                               \r`)
}

describe('conversions to RGB and back', function () {
  this.timeout(5 * 60000) //5min
  it('hex', () => {
    toRgbAndBack('hex', false, 5)
  })
  it('hsv', () => {
    toRgbAndBack('hsv', false, 5)
  })
  it('hsl', () => {
    toRgbAndBack('hsv', false, 5)
  })
  it('hsi', () => {
    toRgbAndBack('hsi', false, 5)
  })
  it('hsp', () => {
    toRgbAndBack('hsp', false, 5)
  })
  it('rec709rgb', () => {
    toRgbAndBack('rec709rgb', false, 5)
  })
  it('rec2020rgb', () => {
    toRgbAndBack('rec2020rgb', false, 5, 1)
  })
  it('cmyk', () => {
    toRgbAndBack('cmyk', false, 5)
  })
  it('yiq', () => {
    toRgbAndBack('yiq', false, 5, 0.2)
  })
  it('xyz', () => {
    toRgbAndBack('xyz', false, 5)
  })
  it('xyy', () => {
    toRgbAndBack('xyy', false, 5)
  })
  it('lab', () => {
    toRgbAndBack('lab', false, 5)
  })
  it('luv', () => {
    toRgbAndBack('luv', false, 5)
  })
  it('ypbpr', () => {
    toRgbAndBack('ypbpr', false, 5, undefined, { kb: 1/3, kr: 1/3 }, { kb: 1/3, kr: 1/3 })
  })
  it('ycbcr', () => {
    // high tolerance required; floating point issues?
    toRgbAndBack('ycbcr', false, 5, 1.8, { kb: 1/3, kr: 1/3 }, { kb: 1/3, kr: 1/3 })
  })
})
