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

let colorSets = [
  ['cc1111','11aaaa'],
  ['aa22bb','55aa00'],
  ['11aaaa','cc1111'],
  ['55aa00','aa22bb'],
  ['ee8822','118844'],
  ['ee2288','114488'],
  ['118844','ee8822'],
  ['114488','ee2288'],
  ['445566','ff2255'],
  ['eeccaa','1133ff'],
  ['ff2255','445566'],
  ['1133ff','eeccaa'],
]

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
      'vividlight',
      'lineardodge',
      'linearburn',
      'linearlight',
      'divide',
      'addition',
      'subtraction',
      'difference',
      'hue',
      'lightness',
      'intensity',
      'value',
      'perceived',
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

colorSets.forEach(pair => {
  content += '<div class="container">'
  grad('rgb', pair[0], pair[1])
  grad('hsv', pair[0], pair[1])
  grad('hsl', pair[0], pair[1])
  grad('hsi', pair[0], pair[1])
  grad('hsp', pair[0], pair[1])
  grad('cmyk', pair[0], pair[1])
  grad('lab', pair[0], pair[1])
  grad('luv', pair[0], pair[1])
  
  grad('hue', pair[0], pair[1])
  grad('value', pair[0], pair[1])
  grad('lightness', pair[0], pair[1])
  grad('intensity', pair[0], pair[1])
  grad('perceived', pair[0], pair[1])
  content += '</div>'

  content += '<div class="container">'
  grad('screen', pair[0], pair[1])
  grad('multiply', pair[0], pair[1])
  grad('overlay', pair[0], pair[1])
  grad('softlight', pair[0], pair[1])
  grad('divide', pair[0], pair[1])
  grad('subtraction', pair[0], pair[1])
  grad('difference', pair[0], pair[1])
  
  grad('colorburn', pair[0], pair[1])
  grad('colordodge', pair[0], pair[1])
  grad('vividlight', pair[0], pair[1])
  grad('linearburn', pair[0], pair[1])
  grad('lineardodge', pair[0], pair[1])
  grad('linearlight', pair[0], pair[1])
  content += '</div>'
})

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
      'divide',
      'addition',
      'subtraction',
      'difference',
      'hue',
      'lightness',
      'intensity',
      'value',
      'perceived',
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

colorSets.forEach(pair => {
  content += '<div class="container">'
  blend('rgb', pair[0], pair[1])
  blend('hsv', pair[0], pair[1])
  blend('hsl', pair[0], pair[1])
  blend('hsi', pair[0], pair[1])
  blend('hsp', pair[0], pair[1])
  blend('cmyk', pair[0], pair[1])
  blend('lab', pair[0], pair[1])
  blend('luv', pair[0], pair[1])
  
  blend('hue', pair[0], pair[1])
  blend('value', pair[0], pair[1])
  blend('lightness', pair[0], pair[1])
  blend('intensity', pair[0], pair[1])
  blend('perceived', pair[0], pair[1])
  content += '</div>'

  content += '<div class="container">'
  blend('screen', pair[0], pair[1])
  blend('multiply', pair[0], pair[1])
  blend('overlay', pair[0], pair[1])
  blend('softlight', pair[0], pair[1])
  blend('divide', pair[0], pair[1])
  blend('subtraction', pair[0], pair[1])
  blend('difference', pair[0], pair[1])
  
  blend('colorburn', pair[0], pair[1])
  blend('colordodge', pair[0], pair[1])
  blend('vividlight', pair[0], pair[1])
  blend('linearburn', pair[0], pair[1])
  blend('lineardodge', pair[0], pair[1])
  blend('linearlight', pair[0], pair[1])
  content += '</div>'
})

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
