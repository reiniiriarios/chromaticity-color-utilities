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
  Color.from('hex', start)
    .scheme('gradient', {
      with: Color.from('hex', end),
      colors: 20,
      method: method,
    })
    .forEach((color) => {
      highlight = color.hex == start || color.hex == end
      content += colorBlock(color.hex, color.to(method).toString(), highlight)
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
grad('rgb', 'aa22bb', '55aa00')
grad('hsv', 'aa22bb', '55aa00')
grad('hsl', 'aa22bb', '55aa00')
grad('hsi', 'aa22bb', '55aa00')
grad('hsp', 'aa22bb', '55aa00')
grad('cmyk', 'aa22bb', '55aa00')
content += '</div>'

content += '<div class="container">'
grad('rgb', '11aaaa', 'cc1111')
grad('hsv', '11aaaa', 'cc1111')
grad('hsl', '11aaaa', 'cc1111')
grad('hsi', '11aaaa', 'cc1111')
grad('hsp', '11aaaa', 'cc1111')
grad('cmyk', '11aaaa', 'cc1111')
grad('rgb', '55aa00', 'aa22bb')
grad('hsv', '55aa00', 'aa22bb')
grad('hsl', '55aa00', 'aa22bb')
grad('hsi', '55aa00', 'aa22bb')
grad('hsp', '55aa00', 'aa22bb')
grad('cmyk', '55aa00', 'aa22bb')
content += '</div>'

content += '<div class="container">'
grad('rgb', 'ee8822', '118844')
grad('hsv', 'ee8822', '118844')
grad('hsl', 'ee8822', '118844')
grad('hsi', 'ee8822', '118844')
grad('hsp', 'ee8822', '118844')
grad('cmyk', 'ee8822', '118844')
grad('rgb', 'ee2288', '114488')
grad('hsv', 'ee2288', '114488')
grad('hsl', 'ee2288', '114488')
grad('hsi', 'ee2288', '114488')
grad('hsp', 'ee2288', '114488')
grad('cmyk', 'ee2288', '114488')
content += '</div>'

content += '<div class="container">'
grad('rgb', '118844', 'ee8822')
grad('hsv', '118844', 'ee8822')
grad('hsl', '118844', 'ee8822')
grad('hsi', '118844', 'ee8822')
grad('hsp', '118844', 'ee8822')
grad('cmyk', '118844', 'ee8822')
grad('rgb', '114488', 'ee2288')
grad('hsv', '114488', 'ee2288')
grad('hsl', '114488', 'ee2288')
grad('hsi', '114488', 'ee2288')
grad('hsp', '114488', 'ee2288')
grad('cmyk', '114488', 'ee2288')
content += '</div>'

content += '<div class="container">'
grad('rgb', '445566', 'ff2255')
grad('hsv', '445566', 'ff2255')
grad('hsl', '445566', 'ff2255')
grad('hsi', '445566', 'ff2255')
grad('hsp', '445566', 'ff2255')
grad('cmyk', '445566', 'ff2255')
grad('rgb', 'eeccaa', '1133ff')
grad('hsv', 'eeccaa', '1133ff')
grad('hsl', 'eeccaa', '1133ff')
grad('hsi', 'eeccaa', '1133ff')
grad('hsp', 'eeccaa', '1133ff')
grad('cmyk', 'eeccaa', '1133ff')
content += '</div>'

content += '<div class="container">'
grad('rgb', 'ff2255', '445566')
grad('hsv', 'ff2255', '445566')
grad('hsl', 'ff2255', '445566')
grad('hsi', 'ff2255', '445566')
grad('hsp', 'ff2255', '445566')
grad('cmyk', 'ff2255', '445566')
grad('rgb', '1133ff', 'eeccaa')
grad('hsv', '1133ff', 'eeccaa')
grad('hsl', '1133ff', 'eeccaa')
grad('hsi', '1133ff', 'eeccaa')
grad('hsp', '1133ff', 'eeccaa')
grad('cmyk', '1133ff', 'eeccaa')
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
shade('hsl', '22aaee')
shade('hsv', '22aaee')
shade('hsi', '22aaee')
shade('hsp', '22aaee')
shade('rgb', '22aaee')
shade('rgb2', '22aaee')
shade('cmyk', '22aaee')
content += '</div>'

content += '<div class="container">'
shade('hsl', 'ee5588', 0.5)
shade('hsv', 'ee5588', 0.5)
shade('hsi', 'ee5588', 0.5)
shade('hsp', 'ee5588', 0.5)
shade('rgb', 'ee5588', 0.5)
shade('rgb2', 'ee5588', 0.5)
shade('cmyk', 'ee5588', 0.5)
shade('hsl', '22aaee', 0.5)
shade('hsv', '22aaee', 0.5)
shade('hsi', '22aaee', 0.5)
shade('hsp', '22aaee', 0.5)
shade('rgb', '22aaee', 0.5)
shade('rgb2', '22aaee', 0.5)
shade('cmyk', '22aaee', 0.5)
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
tint('hsl', '22aaee')
tint('hsv', '22aaee')
tint('hsi', '22aaee')
tint('hsp', '22aaee')
tint('rgb', '22aaee')
tint('rgb2', '22aaee')
tint('cmyk', '22aaee')
content += '</div>'

content += '<div class="container">'
tint('hsl', '881155', 0.5)
tint('hsv', '881155', 0.5)
tint('hsi', '881155', 0.5)
tint('hsp', '881155', 0.5)
tint('rgb', '881155', 0.5)
tint('rgb2', '881155', 0.5)
tint('cmyk', '881155', 0.5)
tint('hsl', '22aaee', 0.5)
tint('hsv', '22aaee', 0.5)
tint('hsi', '22aaee', 0.5)
tint('hsp', '22aaee', 0.5)
tint('rgb', '22aaee', 0.5)
tint('rgb2', '22aaee', 0.5)
tint('cmyk', '22aaee', 0.5)
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
shadetint('hsl', '44ddee')
shadetint('hsv', '44ddee')
shadetint('hsi', '44ddee')
shadetint('hsp', '44ddee')
shadetint('rgb', '44ddee')
shadetint('rgb2', '44ddee')
shadetint('cmyk', '44ddee')
content += '</div>'

content += '<div class="container">'
shadetint('hsl', 'eeaa44', 0.5)
shadetint('hsv', 'eeaa44', 0.5)
shadetint('hsi', 'eeaa44', 0.5)
shadetint('hsp', 'eeaa44', 0.5)
shadetint('rgb', 'eeaa44', 0.5)
shadetint('rgb2', 'eeaa44', 0.5)
shadetint('cmyk', 'eeaa44', 0.5)
shadetint('hsl', '44ddee', 0.5)
shadetint('hsv', '44ddee', 0.5)
shadetint('hsi', '44ddee', 0.5)
shadetint('hsp', '44ddee', 0.5)
shadetint('rgb', '44ddee', 0.5)
shadetint('rgb2', '44ddee', 0.5)
shadetint('cmyk', '44ddee', 0.5)
content += '</div>'

content += '<div class="container">'
shadetint('hsl', '882211')
shadetint('hsv', '882211')
shadetint('hsi', '882211')
shadetint('hsp', '882211')
shadetint('rgb', '882211')
shadetint('rgb2', '882211')
shadetint('cmyk', '882211')
shadetint('hsl', '117766')
shadetint('hsv', '117766')
shadetint('hsi', '117766')
shadetint('hsp', '117766')
shadetint('rgb', '117766')
shadetint('rgb2', '117766')
shadetint('cmyk', '117766')
content += '</div>'

content += '<div class="container">'
shadetint('hsl', '882211', 0.5)
shadetint('hsv', '882211', 0.5)
shadetint('hsi', '882211', 0.5)
shadetint('hsp', '882211', 0.5)
shadetint('rgb', '882211', 0.5)
shadetint('rgb2', '882211', 0.5)
shadetint('cmyk', '882211', 0.5)
shadetint('hsl', '117766', 0.5)
shadetint('hsv', '117766', 0.5)
shadetint('hsi', '117766', 0.5)
shadetint('hsp', '117766', 0.5)
shadetint('rgb', '117766', 0.5)
shadetint('rgb2', '117766', 0.5)
shadetint('cmyk', '117766', 0.5)
content += '</div>'

content += '<div class="container">'
shadetint('hsl', 'ee2266', 1, 1)
shadetint('hsv', 'ee2266', 1, 1)
shadetint('hsi', 'ee2266', 1, 1)
shadetint('hsp', 'ee2266', 1, 1)
shadetint('rgb', 'ee2266', 1, 1)
shadetint('rgb2', 'ee2266', 1, 1)
shadetint('cmyk', 'ee2266', 1, 1)
shadetint('hsl', '55aa11', 1, 1)
shadetint('hsv', '55aa11', 1, 1)
shadetint('hsi', '55aa11', 1, 1)
shadetint('hsp', '55aa11', 1, 1)
shadetint('rgb', '55aa11', 1, 1)
shadetint('rgb2', '55aa11', 1, 1)
shadetint('cmyk', '55aa11', 1, 1)
content += '</div>'

content += '<div class="container">'
shadetint('hsl', 'ee2266', 0.5, 0.5)
shadetint('hsv', 'ee2266', 0.5, 0.5)
shadetint('hsi', 'ee2266', 0.5, 0.5)
shadetint('hsp', 'ee2266', 0.5, 0.5)
shadetint('rgb', 'ee2266', 0.5, 0.5)
shadetint('rgb2', 'ee2266', 0.5, 0.5)
shadetint('cmyk', 'ee2266', 0.5, 0.5)
shadetint('hsl', '55aa11', 0.5, 0.5)
shadetint('hsv', '55aa11', 0.5, 0.5)
shadetint('hsi', '55aa11', 0.5, 0.5)
shadetint('hsp', '55aa11', 0.5, 0.5)
shadetint('rgb', '55aa11', 0.5, 0.5)
shadetint('rgb2', '55aa11', 0.5, 0.5)
shadetint('cmyk', '55aa11', 0.5, 0.5)
content += '</div>'

function lighten(method, start) {
  content += '<div><h2>lighten</h2><h3>' + method + '</h3>'
  let colors = []
  let cstart = Color.from('hex', start)
  for (i = 0; i < 9; i++) {
    colors.push(
      cstart.modify('lighten', {
        method: method,
        amount: (i + 1) / 10
      })
    )
  }
  content += colorBlock(start, 'start', highlight)
  colors.forEach((color, i) => {
    highlight = color.hex == start
    tip = (i + 1) / 10
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
lighten('cmyk', '881155')
lighten('hsl', '22aaee')
lighten('hsv', '22aaee')
lighten('hsi', '22aaee')
lighten('hsp', '22aaee')
lighten('rgb', '22aaee')
lighten('cmyk', '22aaee')
content += '</div>'

function darken(method, start) {
  content += '<div><h2>darken</h2><h3>' + method + '</h3>'
  let colors = []
  let cstart = Color.from('hex', start)
  for (i = 0; i < 9; i++) {
    colors.push(
      cstart.modify('darken', {
        method: method,
        amount: (i + 1) / 10
      })
    )
  }
  content += colorBlock(start, 'start', highlight)
  colors.forEach((color, i) => {
    highlight = color.hex == start
    tip = (i + 1) / 10
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
darken('cmyk', 'ee5588')
darken('hsl', '22aaee')
darken('hsv', '22aaee')
darken('hsi', '22aaee')
darken('hsp', '22aaee')
darken('rgb', '22aaee')
darken('cmyk', '22aaee')
content += '</div>'

function saturate(method, start) {
  content += '<div><h2>saturate</h2><h3>' + method + '</h3>'
  let colors = []
  let cstart = Color.from('hex', start)
  for (i = 0; i < 9; i++) {
    colors.push(
      cstart.modify('saturate', {
        method: method,
        amount: (i + 1) / 10
      })
    )
  }
  content += colorBlock(start, 'start', highlight)
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
  for (i = 0; i < 9; i++) {
    colors.push(
      cstart.modify('desaturate', {
        method: method,
        amount: (i + 1) / 10
      })
    )
  }
  content += colorBlock(start, 'start', highlight)
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

const fullContent = template(content)
let app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(fullContent)
})

app.listen(3005, '127.0.0.1')
console.log('Node server running on port 3005')
