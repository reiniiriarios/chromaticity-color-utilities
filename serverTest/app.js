const http = require('http')
const template = require('./template.js')
const Color = require('../dist/main.js').default

let content = ''

function colorBlock(hex, tip, highlight) {
  return (
    '<span class="color" style="background-color: #' +
    hex +
    '"><span class="tip">' +
    tip +
    '</span></span><label class="' +
    (highlight ? 'highlight' : '') +
    '">' +
    hex +
    '</label><br>'
  )
}

function grad(method, start, end) {
  content += '<div><h2>gradient</h2><h3>' + method + '</h3>'
  let realMethod = method.replace(/[^a-z]/, '')
  if (
    [
      'screen',
      'multiply',
      'overlay',
      'softlight',
      'colordodge',
      'colorburn',
      'lineardodge',
      'linearburn',
      'linearlight',
    ].includes(realMethod)
  )
    realMethod = 'rgb'
  Color.from('hex', start)
    .scheme('gradient', {
      with: Color.from('hex', end),
      colors: 20,
      method: method,
    })
    .forEach((color) => {
      highlight = color.hex == start || color.hex == end
      content += colorBlock(
        color.hex,
        color.to(realMethod).toString(),
        highlight
      )
    })
  content += '</div>'
}

content += '<div class="container">'
grad('rgb', 'cc1111', '11aaaa')
grad('hsv', 'cc1111', '11aaaa')
grad('hsl', 'cc1111', '11aaaa')
grad('hsi', 'cc1111', '11aaaa')
grad('hsp', 'cc1111', '11aaaa')
grad('cmyk', 'cc1111', '11aaaa')
grad('lab', 'cc1111', '11aaaa')
grad('luv', 'cc1111', '11aaaa')
content += '</div>'

content += '<div class="container">'
grad('rgb', 'aa22bb', '55aa00')
grad('hsv', 'aa22bb', '55aa00')
grad('hsl', 'aa22bb', '55aa00')
grad('hsi', 'aa22bb', '55aa00')
grad('hsp', 'aa22bb', '55aa00')
grad('cmyk', 'aa22bb', '55aa00')
grad('lab', 'aa22bb', '55aa00')
grad('luv', 'aa22bb', '55aa00')
content += '</div>'

content += '<div class="container">'
grad('rgb', '11aaaa', 'cc1111')
grad('hsv', '11aaaa', 'cc1111')
grad('hsl', '11aaaa', 'cc1111')
grad('hsi', '11aaaa', 'cc1111')
grad('hsp', '11aaaa', 'cc1111')
grad('cmyk', '11aaaa', 'cc1111')
grad('lab', '11aaaa', 'cc1111')
grad('luv', '11aaaa', 'cc1111')
content += '</div>'

content += '<div class="container">'
grad('rgb', '55aa00', 'aa22bb')
grad('hsv', '55aa00', 'aa22bb')
grad('hsl', '55aa00', 'aa22bb')
grad('hsi', '55aa00', 'aa22bb')
grad('hsp', '55aa00', 'aa22bb')
grad('cmyk', '55aa00', 'aa22bb')
grad('lab', '55aa00', 'aa22bb')
grad('luv', '55aa00', 'aa22bb')
content += '</div>'

content += '<div class="container">'
grad('rgb', 'ee8822', '118844')
grad('hsv', 'ee8822', '118844')
grad('hsl', 'ee8822', '118844')
grad('hsi', 'ee8822', '118844')
grad('hsp', 'ee8822', '118844')
grad('cmyk', 'ee8822', '118844')
grad('lab', 'ee8822', '118844')
grad('luv', 'ee8822', '118844')
content += '</div>'

content += '<div class="container">'
grad('rgb', 'ee2288', '114488')
grad('hsv', 'ee2288', '114488')
grad('hsl', 'ee2288', '114488')
grad('hsi', 'ee2288', '114488')
grad('hsp', 'ee2288', '114488')
grad('cmyk', 'ee2288', '114488')
grad('lab', 'ee2288', '114488')
grad('luv', 'ee2288', '114488')
content += '</div>'

content += '<div class="container">'
grad('rgb', '118844', 'ee8822')
grad('hsv', '118844', 'ee8822')
grad('hsl', '118844', 'ee8822')
grad('hsi', '118844', 'ee8822')
grad('hsp', '118844', 'ee8822')
grad('cmyk', '118844', 'ee8822')
grad('lab', '118844', 'ee8822')
grad('luv', '118844', 'ee8822')
content += '</div>'

content += '<div class="container">'
grad('rgb', '114488', 'ee2288')
grad('hsv', '114488', 'ee2288')
grad('hsl', '114488', 'ee2288')
grad('hsi', '114488', 'ee2288')
grad('hsp', '114488', 'ee2288')
grad('cmyk', '114488', 'ee2288')
grad('lab', '114488', 'ee2288')
grad('luv', '114488', 'ee2288')
content += '</div>'

content += '<div class="container">'
grad('rgb', '445566', 'ff2255')
grad('hsv', '445566', 'ff2255')
grad('hsl', '445566', 'ff2255')
grad('hsi', '445566', 'ff2255')
grad('hsp', '445566', 'ff2255')
grad('cmyk', '445566', 'ff2255')
grad('lab', '445566', 'ff2255')
grad('luv', '445566', 'ff2255')
content += '</div>'

content += '<div class="container">'
grad('rgb', 'eeccaa', '1133ff')
grad('hsv', 'eeccaa', '1133ff')
grad('hsl', 'eeccaa', '1133ff')
grad('hsi', 'eeccaa', '1133ff')
grad('hsp', 'eeccaa', '1133ff')
grad('cmyk', 'eeccaa', '1133ff')
grad('lab', 'eeccaa', '1133ff')
grad('luv', 'eeccaa', '1133ff')
content += '</div>'

content += '<div class="container">'
grad('rgb', 'ff2255', '445566')
grad('hsv', 'ff2255', '445566')
grad('hsl', 'ff2255', '445566')
grad('hsi', 'ff2255', '445566')
grad('hsp', 'ff2255', '445566')
grad('cmyk', 'ff2255', '445566')
grad('lab', 'ff2255', '445566')
grad('luv', 'ff2255', '445566')
content += '</div>'

content += '<div class="container">'
grad('rgb', '1133ff', 'eeccaa')
grad('hsv', '1133ff', 'eeccaa')
grad('hsl', '1133ff', 'eeccaa')
grad('hsi', '1133ff', 'eeccaa')
grad('hsp', '1133ff', 'eeccaa')
grad('cmyk', '1133ff', 'eeccaa')
grad('lab', '1133ff', 'eeccaa')
grad('luv', '1133ff', 'eeccaa')
content += '</div>'

content += '<div class="container">'
grad('screen', 'cc1111', '11aaaa')
grad('screen', 'aa22bb', '55aa00')
grad('screen', '11aaaa', 'cc1111')
grad('screen', '55aa00', 'aa22bb')
grad('screen', 'ee8822', '118844')
grad('screen', 'ee2288', '114488')
grad('screen', '118844', 'ee8822')
grad('screen', '114488', 'ee2288')
grad('screen', '445566', 'ff2255')
grad('screen', 'eeccaa', '1133ff')
grad('screen', 'ff2255', '445566')
grad('screen', '1133ff', 'eeccaa')
content += '</div>'

content += '<div class="container">'
grad('multiply', 'cc1111', '11aaaa')
grad('multiply', 'aa22bb', '55aa00')
grad('multiply', '11aaaa', 'cc1111')
grad('multiply', '55aa00', 'aa22bb')
grad('multiply', 'ee8822', '118844')
grad('multiply', 'ee2288', '114488')
grad('multiply', '118844', 'ee8822')
grad('multiply', '114488', 'ee2288')
grad('multiply', '445566', 'ff2255')
grad('multiply', 'eeccaa', '1133ff')
grad('multiply', 'ff2255', '445566')
grad('multiply', '1133ff', 'eeccaa')
content += '</div>'

content += '<div class="container">'
grad('overlay', 'cc1111', '11aaaa')
grad('overlay', 'aa22bb', '55aa00')
grad('overlay', '11aaaa', 'cc1111')
grad('overlay', '55aa00', 'aa22bb')
grad('overlay', 'ee8822', '118844')
grad('overlay', 'ee2288', '114488')
grad('overlay', '118844', 'ee8822')
grad('overlay', '114488', 'ee2288')
grad('overlay', '445566', 'ff2255')
grad('overlay', 'eeccaa', '1133ff')
grad('overlay', 'ff2255', '445566')
grad('overlay', '1133ff', 'eeccaa')
content += '</div>'

content += '<div class="container">'
grad('softlight', 'cc1111', '11aaaa')
grad('softlight', 'aa22bb', '55aa00')
grad('softlight', '11aaaa', 'cc1111')
grad('softlight', '55aa00', 'aa22bb')
grad('softlight', 'ee8822', '118844')
grad('softlight', 'ee2288', '114488')
grad('softlight', '118844', 'ee8822')
grad('softlight', '114488', 'ee2288')
grad('softlight', '445566', 'ff2255')
grad('softlight', 'eeccaa', '1133ff')
grad('softlight', 'ff2255', '445566')
grad('softlight', '1133ff', 'eeccaa')
content += '</div>'

content += '<div class="container">'
grad('colorburn', 'cc1111', '11aaaa')
grad('colorburn', 'aa22bb', '55aa00')
grad('colorburn', '11aaaa', 'cc1111')
grad('colorburn', '55aa00', 'aa22bb')
grad('colorburn', 'ee8822', '118844')
grad('colorburn', 'ee2288', '114488')
grad('colorburn', '118844', 'ee8822')
grad('colorburn', '114488', 'ee2288')
grad('colorburn', '445566', 'ff2255')
grad('colorburn', 'eeccaa', '1133ff')
grad('colorburn', 'ff2255', '445566')
grad('colorburn', '1133ff', 'eeccaa')
content += '</div>'

content += '<div class="container">'
grad('colordodge', 'cc1111', '11aaaa')
grad('colordodge', 'aa22bb', '55aa00')
grad('colordodge', '11aaaa', 'cc1111')
grad('colordodge', '55aa00', 'aa22bb')
grad('colordodge', 'ee8822', '118844')
grad('colordodge', 'ee2288', '114488')
grad('colordodge', '118844', 'ee8822')
grad('colordodge', '114488', 'ee2288')
grad('colordodge', '445566', 'ff2255')
grad('colordodge', 'eeccaa', '1133ff')
grad('colordodge', 'ff2255', '445566')
grad('colordodge', '1133ff', 'eeccaa')
content += '</div>'

content += '<div class="container">'
grad('linearburn', 'cc1111', '11aaaa')
grad('linearburn', 'aa22bb', '55aa00')
grad('linearburn', '11aaaa', 'cc1111')
grad('linearburn', '55aa00', 'aa22bb')
grad('linearburn', 'ee8822', '118844')
grad('linearburn', 'ee2288', '114488')
grad('linearburn', '118844', 'ee8822')
grad('linearburn', '114488', 'ee2288')
grad('linearburn', '445566', 'ff2255')
grad('linearburn', 'eeccaa', '1133ff')
grad('linearburn', 'ff2255', '445566')
grad('linearburn', '1133ff', 'eeccaa')
content += '</div>'

content += '<div class="container">'
grad('lineardodge', 'cc1111', '11aaaa')
grad('lineardodge', 'aa22bb', '55aa00')
grad('lineardodge', '11aaaa', 'cc1111')
grad('lineardodge', '55aa00', 'aa22bb')
grad('lineardodge', 'ee8822', '118844')
grad('lineardodge', 'ee2288', '114488')
grad('lineardodge', '118844', 'ee8822')
grad('lineardodge', '114488', 'ee2288')
grad('lineardodge', '445566', 'ff2255')
grad('lineardodge', 'eeccaa', '1133ff')
grad('lineardodge', 'ff2255', '445566')
grad('lineardodge', '1133ff', 'eeccaa')
content += '</div>'

content += '<div class="container">'
grad('linearlight', 'cc1111', '11aaaa')
grad('linearlight', 'aa22bb', '55aa00')
grad('linearlight', '11aaaa', 'cc1111')
grad('linearlight', '55aa00', 'aa22bb')
grad('linearlight', 'ee8822', '118844')
grad('linearlight', 'ee2288', '114488')
grad('linearlight', '118844', 'ee8822')
grad('linearlight', '114488', 'ee2288')
grad('linearlight', '445566', 'ff2255')
grad('linearlight', 'eeccaa', '1133ff')
grad('linearlight', 'ff2255', '445566')
grad('linearlight', '1133ff', 'eeccaa')
content += '</div>'

function blend(method, start, end) {
  let realMethod = method.replace(/[^a-z]/, '')
  if (
    [
      'screen',
      'multiply',
      'overlay',
      'softlight',
      'colordodge',
      'colorburn',
      'lineardodge',
      'linearburn',
      'vividlight',
      'linearlight',
    ].includes(realMethod)
  )
    realMethod = 'rgb'
  content += '<div><h2>blend</h2><h3>' + method + '</h3>'
  let colors = []
  let cstart = Color.from('hex', start)
  for (i = 0; i <= 10; i++) {
    let lighter = cstart.modify('blend', {
      with: Color.from('hex', end),
      method: method,
      amount: i / 10,
    })
    colors.push(lighter)
  }
  colors.forEach((color, i) => {
    highlight = color.hex == start || color.hex == end
    tip = i / 10 + ': ' + color.to(realMethod).toString(1)
    content += colorBlock(color.hex, tip, highlight)
  })
  content += '</div>'
}

content += '<div class="container">'
blend('rgb', 'cc1111', '11aaaa')
blend('hsv', 'cc1111', '11aaaa')
blend('hsl', 'cc1111', '11aaaa')
blend('hsi', 'cc1111', '11aaaa')
blend('hsp', 'cc1111', '11aaaa')
blend('cmyk', 'cc1111', '11aaaa')
blend('lab', 'cc1111', '11aaaa')
blend('luv', 'cc1111', '11aaaa')
content += '</div>'

content += '<div class="container">'
blend('rgb', 'aa22bb', '55aa00')
blend('hsv', 'aa22bb', '55aa00')
blend('hsl', 'aa22bb', '55aa00')
blend('hsi', 'aa22bb', '55aa00')
blend('hsp', 'aa22bb', '55aa00')
blend('cmyk', 'aa22bb', '55aa00')
blend('lab', 'aa22bb', '55aa00')
blend('luv', 'aa22bb', '55aa00')
content += '</div>'

content += '<div class="container">'
blend('rgb', '11aaaa', 'cc1111')
blend('hsv', '11aaaa', 'cc1111')
blend('hsl', '11aaaa', 'cc1111')
blend('hsi', '11aaaa', 'cc1111')
blend('hsp', '11aaaa', 'cc1111')
blend('cmyk', '11aaaa', 'cc1111')
blend('lab', '11aaaa', 'cc1111')
blend('luv', '11aaaa', 'cc1111')
content += '</div>'

content += '<div class="container">'
blend('rgb', '55aa00', 'aa22bb')
blend('hsv', '55aa00', 'aa22bb')
blend('hsl', '55aa00', 'aa22bb')
blend('hsi', '55aa00', 'aa22bb')
blend('hsp', '55aa00', 'aa22bb')
blend('cmyk', '55aa00', 'aa22bb')
blend('lab', '55aa00', 'aa22bb')
blend('luv', '55aa00', 'aa22bb')
content += '</div>'

content += '<div class="container">'
blend('rgb', 'ee8822', '118844')
blend('hsv', 'ee8822', '118844')
blend('hsl', 'ee8822', '118844')
blend('hsi', 'ee8822', '118844')
blend('hsp', 'ee8822', '118844')
blend('cmyk', 'ee8822', '118844')
blend('lab', 'ee8822', '118844')
blend('luv', 'ee8822', '118844')
content += '</div>'

content += '<div class="container">'
blend('rgb', 'ee2288', '114488')
blend('hsv', 'ee2288', '114488')
blend('hsl', 'ee2288', '114488')
blend('hsi', 'ee2288', '114488')
blend('hsp', 'ee2288', '114488')
blend('cmyk', 'ee2288', '114488')
blend('lab', 'ee2288', '114488')
blend('luv', 'ee2288', '114488')
content += '</div>'

content += '<div class="container">'
blend('rgb', '118844', 'ee8822')
blend('hsv', '118844', 'ee8822')
blend('hsl', '118844', 'ee8822')
blend('hsi', '118844', 'ee8822')
blend('hsp', '118844', 'ee8822')
blend('cmyk', '118844', 'ee8822')
blend('lab', '118844', 'ee8822')
blend('luv', '118844', 'ee8822')
content += '</div>'

content += '<div class="container">'
blend('rgb', '114488', 'ee2288')
blend('hsv', '114488', 'ee2288')
blend('hsl', '114488', 'ee2288')
blend('hsi', '114488', 'ee2288')
blend('hsp', '114488', 'ee2288')
blend('cmyk', '114488', 'ee2288')
blend('lab', '114488', 'ee2288')
blend('luv', '114488', 'ee2288')
content += '</div>'

content += '<div class="container">'
blend('rgb', '445566', 'ff2255')
blend('hsv', '445566', 'ff2255')
blend('hsl', '445566', 'ff2255')
blend('hsi', '445566', 'ff2255')
blend('hsp', '445566', 'ff2255')
blend('cmyk', '445566', 'ff2255')
blend('lab', '445566', 'ff2255')
blend('luv', '445566', 'ff2255')
content += '</div>'

content += '<div class="container">'
blend('rgb', 'eeccaa', '1133ff')
blend('hsv', 'eeccaa', '1133ff')
blend('hsl', 'eeccaa', '1133ff')
blend('hsi', 'eeccaa', '1133ff')
blend('hsp', 'eeccaa', '1133ff')
blend('cmyk', 'eeccaa', '1133ff')
blend('lab', 'eeccaa', '1133ff')
blend('luv', 'eeccaa', '1133ff')
content += '</div>'

content += '<div class="container">'
blend('rgb', 'ff2255', '445566')
blend('hsv', 'ff2255', '445566')
blend('hsl', 'ff2255', '445566')
blend('hsi', 'ff2255', '445566')
blend('hsp', 'ff2255', '445566')
blend('cmyk', 'ff2255', '445566')
blend('lab', 'ff2255', '445566')
blend('luv', 'ff2255', '445566')
content += '</div>'

content += '<div class="container">'
blend('rgb', '1133ff', 'eeccaa')
blend('hsv', '1133ff', 'eeccaa')
blend('hsl', '1133ff', 'eeccaa')
blend('hsi', '1133ff', 'eeccaa')
blend('hsp', '1133ff', 'eeccaa')
blend('cmyk', '1133ff', 'eeccaa')
blend('lab', '1133ff', 'eeccaa')
blend('luv', '1133ff', 'eeccaa')
content += '</div>'

content += '<div class="container">'
blend('screen', 'cc1111', '11aaaa')
blend('screen', 'aa22bb', '55aa00')
blend('screen', '11aaaa', 'cc1111')
blend('screen', '55aa00', 'aa22bb')
blend('screen', 'ee8822', '118844')
blend('screen', 'ee2288', '114488')
blend('screen', '118844', 'ee8822')
blend('screen', '114488', 'ee2288')
blend('screen', '445566', 'ff2255')
blend('screen', 'eeccaa', '1133ff')
blend('screen', 'ff2255', '445566')
blend('screen', '1133ff', 'eeccaa')
content += '</div>'

content += '<div class="container">'
blend('multiply', 'cc1111', '11aaaa')
blend('multiply', 'aa22bb', '55aa00')
blend('multiply', '11aaaa', 'cc1111')
blend('multiply', '55aa00', 'aa22bb')
blend('multiply', 'ee8822', '118844')
blend('multiply', 'ee2288', '114488')
blend('multiply', '118844', 'ee8822')
blend('multiply', '114488', 'ee2288')
blend('multiply', '445566', 'ff2255')
blend('multiply', 'eeccaa', '1133ff')
blend('multiply', 'ff2255', '445566')
blend('multiply', '1133ff', 'eeccaa')
content += '</div>'

content += '<div class="container">'
blend('overlay', 'cc1111', '11aaaa')
blend('overlay', 'aa22bb', '55aa00')
blend('overlay', '11aaaa', 'cc1111')
blend('overlay', '55aa00', 'aa22bb')
blend('overlay', 'ee8822', '118844')
blend('overlay', 'ee2288', '114488')
blend('overlay', '118844', 'ee8822')
blend('overlay', '114488', 'ee2288')
blend('overlay', '445566', 'ff2255')
blend('overlay', 'eeccaa', '1133ff')
blend('overlay', 'ff2255', '445566')
blend('overlay', '1133ff', 'eeccaa')
content += '</div>'

content += '<div class="container">'
blend('softlight', 'cc1111', '11aaaa')
blend('softlight', 'aa22bb', '55aa00')
blend('softlight', '11aaaa', 'cc1111')
blend('softlight', '55aa00', 'aa22bb')
blend('softlight', 'ee8822', '118844')
blend('softlight', 'ee2288', '114488')
blend('softlight', '118844', 'ee8822')
blend('softlight', '114488', 'ee2288')
blend('softlight', '445566', 'ff2255')
blend('softlight', 'eeccaa', '1133ff')
blend('softlight', 'ff2255', '445566')
blend('softlight', '1133ff', 'eeccaa')
content += '</div>'

content += '<div class="container">'
blend('colorburn', 'cc1111', '11aaaa')
blend('colorburn', 'aa22bb', '55aa00')
blend('colorburn', '11aaaa', 'cc1111')
blend('colorburn', '55aa00', 'aa22bb')
blend('colorburn', 'ee8822', '118844')
blend('colorburn', 'ee2288', '114488')
blend('colorburn', '118844', 'ee8822')
blend('colorburn', '114488', 'ee2288')
blend('colorburn', '445566', 'ff2255')
blend('colorburn', 'eeccaa', '1133ff')
blend('colorburn', 'ff2255', '445566')
blend('colorburn', '1133ff', 'eeccaa')
content += '</div>'

content += '<div class="container">'
blend('colordodge', 'cc1111', '11aaaa')
blend('colordodge', 'aa22bb', '55aa00')
blend('colordodge', '11aaaa', 'cc1111')
blend('colordodge', '55aa00', 'aa22bb')
blend('colordodge', 'ee8822', '118844')
blend('colordodge', 'ee2288', '114488')
blend('colordodge', '118844', 'ee8822')
blend('colordodge', '114488', 'ee2288')
blend('colordodge', '445566', 'ff2255')
blend('colordodge', 'eeccaa', '1133ff')
blend('colordodge', 'ff2255', '445566')
blend('colordodge', '1133ff', 'eeccaa')
content += '</div>'

content += '<div class="container">'
blend('vividlight', 'cc1111', '11aaaa')
blend('vividlight', 'aa22bb', '55aa00')
blend('vividlight', '11aaaa', 'cc1111')
blend('vividlight', '55aa00', 'aa22bb')
blend('vividlight', 'ee8822', '118844')
blend('vividlight', 'ee2288', '114488')
blend('vividlight', '118844', 'ee8822')
blend('vividlight', '114488', 'ee2288')
blend('vividlight', '445566', 'ff2255')
blend('vividlight', 'eeccaa', '1133ff')
blend('vividlight', 'ff2255', '445566')
blend('vividlight', '1133ff', 'eeccaa')
content += '</div>'

content += '<div class="container">'
blend('linearburn', 'cc1111', '11aaaa')
blend('linearburn', 'aa22bb', '55aa00')
blend('linearburn', '11aaaa', 'cc1111')
blend('linearburn', '55aa00', 'aa22bb')
blend('linearburn', 'ee8822', '118844')
blend('linearburn', 'ee2288', '114488')
blend('linearburn', '118844', 'ee8822')
blend('linearburn', '114488', 'ee2288')
blend('linearburn', '445566', 'ff2255')
blend('linearburn', 'eeccaa', '1133ff')
blend('linearburn', 'ff2255', '445566')
blend('linearburn', '1133ff', 'eeccaa')
content += '</div>'

content += '<div class="container">'
blend('lineardodge', 'cc1111', '11aaaa')
blend('lineardodge', 'aa22bb', '55aa00')
blend('lineardodge', '11aaaa', 'cc1111')
blend('lineardodge', '55aa00', 'aa22bb')
blend('lineardodge', 'ee8822', '118844')
blend('lineardodge', 'ee2288', '114488')
blend('lineardodge', '118844', 'ee8822')
blend('lineardodge', '114488', 'ee2288')
blend('lineardodge', '445566', 'ff2255')
blend('lineardodge', 'eeccaa', '1133ff')
blend('lineardodge', 'ff2255', '445566')
blend('lineardodge', '1133ff', 'eeccaa')
content += '</div>'

content += '<div class="container">'
blend('linearlight', 'cc1111', '11aaaa')
blend('linearlight', 'aa22bb', '55aa00')
blend('linearlight', '11aaaa', 'cc1111')
blend('linearlight', '55aa00', 'aa22bb')
blend('linearlight', 'ee8822', '118844')
blend('linearlight', 'ee2288', '114488')
blend('linearlight', '118844', 'ee8822')
blend('linearlight', '114488', 'ee2288')
blend('linearlight', '445566', 'ff2255')
blend('linearlight', 'eeccaa', '1133ff')
blend('linearlight', 'ff2255', '445566')
blend('linearlight', '1133ff', 'eeccaa')
content += '</div>'

function shade(method, start, amount = 1) {
  content += '<div><h2>shade</h2><h3>' + method + '</h3>'
  Color.from('hex', start)
    .scheme('shade', {
      colors: 20,
      method: method,
      distance: amount,
      round: true,
    })
    .forEach((color) => {
      highlight = color.hex == start
      tipMethod = method.replace(/[0-9]/, '')
      content += colorBlock(
        color.hex,
        color.to(tipMethod).toString(),
        highlight
      )
    })
  content += '</div>'
}

content += '<div class="container">'
shade('hsl', 'ee5588')
shade('hsv', 'ee5588')
shade('hsi', 'ee5588')
shade('hsp', 'ee5588')
shade('rgb', 'ee5588')
shade('rgb2', 'ee5588')
shade('cmyk', 'ee5588')
shade('lab', 'ee5588')
shade('luv', 'ee5588')
content += '</div>'
content += '<div class="container">'
shade('hsl', '22aaee')
shade('hsv', '22aaee')
shade('hsi', '22aaee')
shade('hsp', '22aaee')
shade('rgb', '22aaee')
shade('rgb2', '22aaee')
shade('cmyk', '22aaee')
shade('lab', '22aaee')
shade('luv', '22aaee')
content += '</div>'

content += '<div class="container">'
shade('hsl', 'ee5588', 0.5)
shade('hsv', 'ee5588', 0.5)
shade('hsi', 'ee5588', 0.5)
shade('hsp', 'ee5588', 0.5)
shade('rgb', 'ee5588', 0.5)
shade('rgb2', 'ee5588', 0.5)
shade('cmyk', 'ee5588', 0.5)
shade('lab', 'ee5588', 0.5)
shade('luv', 'ee5588', 0.5)
content += '</div>'
content += '<div class="container">'
shade('hsl', '22aaee', 0.5)
shade('hsv', '22aaee', 0.5)
shade('hsi', '22aaee', 0.5)
shade('hsp', '22aaee', 0.5)
shade('rgb', '22aaee', 0.5)
shade('rgb2', '22aaee', 0.5)
shade('cmyk', '22aaee', 0.5)
shade('lab', '22aaee', 0.5)
shade('luv', '22aaee', 0.5)
content += '</div>'

function tint(method, start, amount = 1) {
  content += '<div><h2>tint</h2><h3>' + method + '</h3>'
  Color.from('hex', start)
    .scheme('tint', {
      colors: 20,
      method: method,
      distance: amount,
      round: true,
    })
    .forEach((color) => {
      highlight = color.hex == start
      tipMethod = method.replace(/[0-9]/, '')
      content += colorBlock(
        color.hex,
        color.to(tipMethod).toString(),
        highlight
      )
    })
  content += '</div>'
}

content += '<div class="container">'
tint('hsl', '881155')
tint('hsv', '881155')
tint('hsi', '881155')
tint('hsp', '881155')
tint('rgb', '881155')
tint('rgb2', '881155')
tint('cmyk', '881155')
tint('lab', '881155')
tint('luv', '881155')
content += '</div>'
content += '<div class="container">'
tint('hsl', '22aaee')
tint('hsv', '22aaee')
tint('hsi', '22aaee')
tint('hsp', '22aaee')
tint('rgb', '22aaee')
tint('rgb2', '22aaee')
tint('cmyk', '22aaee')
tint('lab', '22aaee')
tint('luv', '22aaee')
content += '</div>'

content += '<div class="container">'
tint('hsl', '881155', 0.5)
tint('hsv', '881155', 0.5)
tint('hsi', '881155', 0.5)
tint('hsp', '881155', 0.5)
tint('rgb', '881155', 0.5)
tint('rgb2', '881155', 0.5)
tint('cmyk', '881155', 0.5)
tint('lab', '881155', 0.5)
tint('luv', '881155', 0.5)
content += '</div>'
content += '<div class="container">'
tint('hsl', '22aaee', 0.5)
tint('hsv', '22aaee', 0.5)
tint('hsi', '22aaee', 0.5)
tint('hsp', '22aaee', 0.5)
tint('rgb', '22aaee', 0.5)
tint('rgb2', '22aaee', 0.5)
tint('cmyk', '22aaee', 0.5)
tint('lab', '22aaee', 0.5)
tint('luv', '22aaee', 0.5)
content += '</div>'

function shadetint(method, start, amountT = 1, amountS = undefined) {
  content += '<div><h2>shadetint</h2><h3>' + method + '</h3>'
  Color.from('hex', start)
    .scheme('shadetint', {
      colors: 10,
      method: method,
      distance: amountT,
      distanceToBlack: amountS,
      round: true,
    })
    .forEach((color) => {
      highlight = color.hex == start
      tipMethod = method.replace(/[0-9]/, '')
      content += colorBlock(
        color.hex,
        color.to(tipMethod).toString(),
        highlight
      )
    })
  content += '</div>'
}

content += '<div class="container">'
shadetint('hsl', 'eeaa44')
shadetint('hsv', 'eeaa44')
shadetint('hsi', 'eeaa44')
shadetint('hsp', 'eeaa44')
shadetint('rgb', 'eeaa44')
shadetint('rgb2', 'eeaa44')
shadetint('cmyk', 'eeaa44')
shadetint('lab', 'eeaa44')
shadetint('luv', 'eeaa44')
content += '</div>'
content += '<div class="container">'
shadetint('hsl', '44ddee')
shadetint('hsv', '44ddee')
shadetint('hsi', '44ddee')
shadetint('hsp', '44ddee')
shadetint('rgb', '44ddee')
shadetint('rgb2', '44ddee')
shadetint('cmyk', '44ddee')
shadetint('lab', '44ddee')
shadetint('luv', '44ddee')
content += '</div>'

content += '<div class="container">'
shadetint('hsl', 'eeaa44', 0.5)
shadetint('hsv', 'eeaa44', 0.5)
shadetint('hsi', 'eeaa44', 0.5)
shadetint('hsp', 'eeaa44', 0.5)
shadetint('rgb', 'eeaa44', 0.5)
shadetint('rgb2', 'eeaa44', 0.5)
shadetint('cmyk', 'eeaa44', 0.5)
shadetint('lab', 'eeaa44', 0.5)
shadetint('luv', 'eeaa44', 0.5)
content += '</div>'
content += '<div class="container">'
shadetint('hsl', '44ddee', 0.5)
shadetint('hsv', '44ddee', 0.5)
shadetint('hsi', '44ddee', 0.5)
shadetint('hsp', '44ddee', 0.5)
shadetint('rgb', '44ddee', 0.5)
shadetint('rgb2', '44ddee', 0.5)
shadetint('cmyk', '44ddee', 0.5)
shadetint('lab', '44ddee', 0.5)
shadetint('luv', '44ddee', 0.5)
content += '</div>'

content += '<div class="container">'
shadetint('hsl', '882211')
shadetint('hsv', '882211')
shadetint('hsi', '882211')
shadetint('hsp', '882211')
shadetint('rgb', '882211')
shadetint('rgb2', '882211')
shadetint('cmyk', '882211')
shadetint('lab', '882211')
shadetint('luv', '882211')
content += '</div>'
content += '<div class="container">'
shadetint('hsl', '117766')
shadetint('hsv', '117766')
shadetint('hsi', '117766')
shadetint('hsp', '117766')
shadetint('rgb', '117766')
shadetint('rgb2', '117766')
shadetint('cmyk', '117766')
shadetint('lab', '117766')
shadetint('luv', '117766')
content += '</div>'

content += '<div class="container">'
shadetint('hsl', '882211', 0.5)
shadetint('hsv', '882211', 0.5)
shadetint('hsi', '882211', 0.5)
shadetint('hsp', '882211', 0.5)
shadetint('rgb', '882211', 0.5)
shadetint('rgb2', '882211', 0.5)
shadetint('cmyk', '882211', 0.5)
shadetint('lab', '882211', 0.5)
shadetint('luv', '882211', 0.5)
content += '</div>'
content += '<div class="container">'
shadetint('hsl', '117766', 0.5)
shadetint('hsv', '117766', 0.5)
shadetint('hsi', '117766', 0.5)
shadetint('hsp', '117766', 0.5)
shadetint('rgb', '117766', 0.5)
shadetint('rgb2', '117766', 0.5)
shadetint('cmyk', '117766', 0.5)
shadetint('lab', '117766', 0.5)
shadetint('luv', '117766', 0.5)
content += '</div>'

content += '<div class="container">'
shadetint('hsl', 'ee2266', 1, 1)
shadetint('hsv', 'ee2266', 1, 1)
shadetint('hsi', 'ee2266', 1, 1)
shadetint('hsp', 'ee2266', 1, 1)
shadetint('rgb', 'ee2266', 1, 1)
shadetint('rgb2', 'ee2266', 1, 1)
shadetint('cmyk', 'ee2266', 1, 1)
shadetint('lab', 'ee2266', 1, 1)
shadetint('luv', 'ee2266', 1, 1)
content += '</div>'
content += '<div class="container">'
shadetint('hsl', '55aa11', 1, 1)
shadetint('hsv', '55aa11', 1, 1)
shadetint('hsi', '55aa11', 1, 1)
shadetint('hsp', '55aa11', 1, 1)
shadetint('rgb', '55aa11', 1, 1)
shadetint('rgb2', '55aa11', 1, 1)
shadetint('cmyk', '55aa11', 1, 1)
shadetint('lab', '55aa11', 1, 1)
shadetint('luv', '55aa11', 1, 1)
content += '</div>'

content += '<div class="container">'
shadetint('hsl', 'ee2266', 0.5, 0.5)
shadetint('hsv', 'ee2266', 0.5, 0.5)
shadetint('hsi', 'ee2266', 0.5, 0.5)
shadetint('hsp', 'ee2266', 0.5, 0.5)
shadetint('rgb', 'ee2266', 0.5, 0.5)
shadetint('rgb2', 'ee2266', 0.5, 0.5)
shadetint('cmyk', 'ee2266', 0.5, 0.5)
shadetint('lab', 'ee2266', 0.5, 0.5)
shadetint('luv', 'ee2266', 0.5, 0.5)
content += '</div>'
content += '<div class="container">'
shadetint('hsl', '55aa11', 0.5, 0.5)
shadetint('hsv', '55aa11', 0.5, 0.5)
shadetint('hsi', '55aa11', 0.5, 0.5)
shadetint('hsp', '55aa11', 0.5, 0.5)
shadetint('rgb', '55aa11', 0.5, 0.5)
shadetint('rgb2', '55aa11', 0.5, 0.5)
shadetint('cmyk', '55aa11', 0.5, 0.5)
shadetint('lab', '55aa11', 0.5, 0.5)
shadetint('luv', '55aa11', 0.5, 0.5)
content += '</div>'

function lighten(method, start) {
  let realMethod = method.replace(/[^a-z]/, '')
  content += '<div><h2>lighten</h2><h3>' + method + '</h3>'
  let colors = []
  let cstart = Color.from('hex', start)
  for (i = 0; i <= 10; i++) {
    let lighter = cstart.modify('lighten', {
      method: method,
      amount: i / 10,
    })
    colors.push(lighter)
  }
  colors.forEach((color, i) => {
    highlight = color.hex == start
    tip = i / 10 + ': ' + color.to(realMethod).toString(1)
    content += colorBlock(color.hex, tip, highlight)
  })
  content += '</div>'
}

content += '<div class="container">'
lighten('hsl', '881155')
lighten('hsv', '881155')
lighten('hsi', '881155')
lighten('hsp', '881155')
lighten('rgb', '881155')
lighten('rgb2', '881155')
lighten('cmyk', '881155')
lighten('cmyk2', '881155')
lighten('lab', '881155')
lighten('lab2', '881155')
lighten('luv', '881155')
lighten('luv2', '881155')
content += '</div>'
content += '<div class="container">'
lighten('hsl', '22aaee')
lighten('hsv', '22aaee')
lighten('hsi', '22aaee')
lighten('hsp', '22aaee')
lighten('rgb', '22aaee')
lighten('rgb2', '22aaee')
lighten('cmyk', '22aaee')
lighten('cmyk2', '22aaee')
lighten('lab', '22aaee')
lighten('lab2', '22aaee')
lighten('luv', '22aaee')
lighten('luv2', '22aaee')
content += '</div>'

function darken(method, start) {
  let realMethod = method.replace(/[^a-z]/, '')
  if (realMethod == 'black') realMethod = 'cmyk'
  content += '<div><h2>darken</h2><h3>' + method + '</h3>'
  let colors = []
  let cstart = Color.from('hex', start)
  for (i = 0; i <= 10; i++) {
    let darker = cstart.modify('darken', {
      method: method,
      amount: i / 10,
    })
    colors.push(darker)
  }
  colors.forEach((color, i) => {
    highlight = color.hex == start
    tip = i / 10 + ': ' + color.to(realMethod).toString(1)
    content += colorBlock(color.hex, tip, highlight)
  })
  content += '</div>'
}

content += '<div class="container">'
darken('hsl', 'ee5588')
darken('hsv', 'ee5588')
darken('hsi', 'ee5588')
darken('hsp', 'ee5588')
darken('rgb', 'ee5588')
darken('rgb2', 'ee5588')
darken('cmyk', 'ee5588')
darken('cmyk2', 'ee5588')
darken('lab', 'ee5588')
darken('lab2', 'ee5588')
darken('luv', 'ee5588')
darken('luv2', 'ee5588')
content += '</div>'
content += '<div class="container">'
darken('hsl', '22aaee')
darken('hsv', '22aaee')
darken('hsi', '22aaee')
darken('hsp', '22aaee')
darken('rgb', '22aaee')
darken('rgb2', '22aaee')
darken('cmyk', '22aaee')
darken('cmyk2', '22aaee')
darken('lab', '22aaee')
darken('lab2', '22aaee')
darken('luv', '22aaee')
darken('luv2', '22aaee')
content += '</div>'

function saturate(method, start) {
  content += '<div><h2>saturate</h2><h3>' + method + '</h3>'
  let colors = []
  let cstart = Color.from('hex', start)
  for (i = 0; i < 10; i++) {
    colors.push(
      cstart.modify('saturate', {
        method: method,
        amount: (i + 1) / 10,
      })
    )
  }
  content += colorBlock(start, 0, highlight)
  colors.forEach((color, i) => {
    highlight = color.hex == start
    tip = (i + 1) / 10
    content += colorBlock(color.hex, tip, highlight)
  })
  content += '</div>'
}

content += '<div class="container">'
saturate('hsl', 'ccaabb')
saturate('hsv', 'ccaabb')
saturate('hsi', 'ccaabb')
saturate('hsp', 'ccaabb')
// saturate('rgb', 'ee5588')
// saturate('cmyk', 'ee5588')
saturate('hsl', 'aabbcc')
saturate('hsv', 'aabbcc')
saturate('hsi', 'aabbcc')
saturate('hsp', 'aabbcc')
// saturate('rgb', '22aaee')
// saturate('cmyk', '22aaee')
content += '</div>'

function desaturate(method, start) {
  content += '<div><h2>desaturate</h2><h3>' + method + '</h3>'
  let colors = []
  let cstart = Color.from('hex', start)
  for (i = 0; i < 10; i++) {
    colors.push(
      cstart.modify('desaturate', {
        method: method,
        amount: (i + 1) / 10,
      })
    )
  }
  content += colorBlock(start, 0, highlight)
  colors.forEach((color, i) => {
    highlight = color.hex == start
    tip = (i + 1) / 10
    content += colorBlock(color.hex, tip, highlight)
  })
  content += '</div>'
}

content += '<div class="container">'
desaturate('hsl', 'ff0033')
desaturate('hsv', 'ff0033')
desaturate('hsi', 'ff0033')
desaturate('hsp', 'ff0033')
// desaturate('rgb', 'ee5588')
// desaturate('cmyk', 'ee5588')
desaturate('hsl', '0033ff')
desaturate('hsv', '0033ff')
desaturate('hsi', '0033ff')
desaturate('hsp', '0033ff')
// desaturate('rgb', '22aaee')
// desaturate('cmyk', '22aaee')
content += '</div>'

function nm(start, end) {
  content += '<div><h2>wavelength</h2><h3>nm</h3>'
  let colors = []
  for (i = start; i <= end; i += 5) {
    colors.push(Color.from('nm', i))
  }
  colors.forEach((color, i) => {
    tip = color.wavelength + 'nm'
    let hex = color.to('hex')
    content += colorBlock(hex.hex, tip)
  })
  content += '</div>'
}

content += '<div class="container">'
nm(380, 450)
nm(450, 520)
nm(520, 590)
nm(590, 660)
nm(660, 730)
nm(730, 800)
content += '</div>'

function anal(start, angle, name) {
  let actualName = name.replace(/[^a-z]/, '')
  content += '<div><h2>' + name + '</h2><h3>' + angle + '°</h3>'
  let colors = Color.from('hex', start).scheme(actualName, {
    angle: angle,
  })
  colors.forEach((color, i) => {
    tip = color.to('hsv').toString(1, false)
    let hex = color.to('hex')
    content += colorBlock(hex.hex, tip)
  })
  content += '</div>'
}

content += '<div class="container">'
anal('ff4400', 30, 'analogous')
anal('ff4400', 10, 'analogous')
anal('ff4400', 50, 'analogous')
anal('ff4400', 120, 'triadic')
anal('ff4400', 90, 'triadic')
anal('ff4400', 135, 'triadic')
anal('ff4400', 150, 'split complement')
anal('ff4400', 170, 'split complement')
anal('ff4400', 160, 'split complement')
content += '</div>'

const fullContent = template(content)
let app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(fullContent)
})

app.listen(3005, '127.0.0.1')
console.log('Node server running on port 3005')
