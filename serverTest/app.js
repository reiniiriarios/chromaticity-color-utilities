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
// grad('yiq', 'cc1111', '11aaaa') //same as rgb??
grad('rgb', 'aa22bb', '55aa00')
grad('hsv', 'aa22bb', '55aa00')
grad('hsl', 'aa22bb', '55aa00')
grad('hsi', 'aa22bb', '55aa00')
grad('hsp', 'aa22bb', '55aa00')
grad('cmyk', 'aa22bb', '55aa00')
// grad('yiq', 'aa22bb', '55aa00') //same as rgb??
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
      content += colorBlock(color.hex, color.to(tipMethod).toString(), highlight)
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
      content += colorBlock(color.hex, color.to(tipMethod).toString(), highlight)
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
      content += colorBlock(color.hex, color.to(tipMethod).toString(), highlight)
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

const fullContent = template(content)
let app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(fullContent)
})

app.listen(3000, '127.0.0.1')
console.log('Node server running on port 3000')
