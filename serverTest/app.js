const http = require('http')
const template = require('./template.js')
const Color = require('../dist/main.js').default

let content = ''

function grad(method, start, end) {
  content += '<div><h2>gradient</h2><h3>'+method+'</h3>'
  Color.from('hex',start).scheme('gradient', {
    with: Color.from('hex',end),
    colors: 20,
    method: method
  }).forEach(color => {
    content += '<i class="color" style="background-color: #'+color.hex+'"></i> '+color.hex+'<br>'
  })
  content += '</div>'
}

content += '<div class="container">'
grad('rgb', 0xcc1111, 0x11aaaa)
grad('hsv', 0xcc1111, 0x11aaaa)
grad('hsl', 0xcc1111, 0x11aaaa)
grad('hsi', 0xcc1111, 0x11aaaa)
grad('hsp', 0xcc1111, 0x11aaaa)
grad('cmyk', 0xcc1111, 0x11aaaa)
// grad('yiq', 0xcc1111, 0x11aaaa) //same as rgb??
grad('rgb', 0xaa22bb, 0x55aa00)
grad('hsv', 0xaa22bb, 0x55aa00)
grad('hsl', 0xaa22bb, 0x55aa00)
grad('hsi', 0xaa22bb, 0x55aa00)
grad('hsp', 0xaa22bb, 0x55aa00)
grad('cmyk', 0xaa22bb, 0x55aa00)
// grad('yiq', 0xaa22bb, 0x55aa00) //same as rgb??
content += '</div>'

function shade(method, start) {
  content += '<div><h2>shade</h2><h3>'+method+'</h3>'
  Color.from('hex',start).scheme('shade', {
    colors: 20,
    method: method,
    distance: 1,
    round: true
  }).forEach(color => {
    content += '<i class="color" style="background-color: #'+color.hex+'"></i> '+color.hex+'<br>'
  })
  content += '</div>'
}

content += '<div class="container">'
shade('hsl', 0xee5588)
shade('hsv', 0xee5588)
shade('hsi', 0xee5588)
shade('hsp', 0xee5588)
shade('rgb', 0xee5588)
shade('rgb2', 0xee5588)
shade('hsl', 0x22aaee)
shade('hsv', 0x22aaee)
shade('hsi', 0x22aaee)
shade('hsp', 0x22aaee)
shade('rgb', 0x22aaee)
shade('rgb2', 0x22aaee)
content += '</div>'

function tint(method, start) {
  content += '<div><h2>tint</h2><h3>'+method+'</h3>'
  Color.from('hex',start).scheme('tint', {
    colors: 20,
    method: method,
    distance: 1,
    round: true
  }).forEach(color => {
    content += '<i class="color" style="background-color: #'+color.hex+'"></i> '+color.hex+'<br>'
  })
  content += '</div>'
}

content += '<div class="container">'
tint('hsl', 0x881155)
tint('hsv', 0x881155)
tint('hsi', 0x881155)
tint('hsp', 0x881155)
tint('rgb', 0x881155)
tint('rgb2', 0x881155)
tint('hsl', 0x22aaee)
tint('hsv', 0x22aaee)
tint('hsi', 0x22aaee)
tint('hsp', 0x22aaee)
tint('rgb', 0x22aaee)
tint('rgb2', 0x22aaee)
content += '</div>'

function shadetint(method, start) {
  content += '<div><h2>shadetint</h2><h3>'+method+'</h3>'
  Color.from('hex',start).scheme('shadetint', {
    colors: 10,
    method: method,
    distance: 1,
    round: true
  }).forEach(color => {
    content += '<i class="color" style="background-color: #'+color.hex+'"></i> '+color.hex+'<br>'
  })
  content += '</div>'
}

content += '<div class="container">'
shadetint('hsl', 0xddaa88)
shadetint('hsv', 0xddaa88)
shadetint('hsi', 0xddaa88)
shadetint('hsp', 0xddaa88)
shadetint('rgb', 0xddaa88)
shadetint('rgb2', 0xddaa88)
shadetint('hsl', 0x44ddee)
shadetint('hsv', 0x44ddee)
shadetint('hsi', 0x44ddee)
shadetint('hsp', 0x44ddee)
shadetint('rgb', 0x44ddee)
shadetint('rgb2', 0x44ddee)
content += '</div>'

content += '<div class="container">'
shadetint('hsl', 0x883311)
shadetint('hsv', 0x883311)
shadetint('hsi', 0x883311)
shadetint('hsp', 0x883311)
shadetint('rgb', 0x883311)
shadetint('rgb2', 0x883311)
shadetint('hsl', 0x117766)
shadetint('hsv', 0x117766)
shadetint('hsi', 0x117766)
shadetint('hsp', 0x117766)
shadetint('rgb', 0x117766)
shadetint('rgb2', 0x117766)
content += '</div>'

const fullContent = template(content)
let app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(fullContent)
})

app.listen(3000, '127.0.0.1')
console.log('Node server running on port 3000')
