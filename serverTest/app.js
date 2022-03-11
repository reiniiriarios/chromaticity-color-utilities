const http = require('http')
const template = require('./template.js')
const Color = require('../dist/main.js').default

let content = ''

function grad(method) {
  content += '<div><h2>gradient</h2><h3>'+method+'</h3>'
  Color.from('hex',0xcc0000).scheme('gradient', {
    with: Color.from('hex','00aaaa'),
    colors: 20,
    method: method
  }).forEach(color => {
    content += '<i class="color" style="background-color: #'+color.hex+'"></i> '+color.hex+'<br>'
  })
  content += '</div>'
}

grad('rgb')
grad('hsv')
grad('hsl')
grad('hsi')
grad('hsp')
grad('cmyk')
//grad('yiq') same as rgb

function shade(method) {
  content += '<div><h2>shade</h2><h3>'+method+'</h3>'
  Color.from('hex',0xcc5588).scheme('shade', {
    colors: 20,
    method: method,
    distance: 1,
    round: true
  }).forEach(color => {
    content += '<i class="color" style="background-color: #'+color.hex+'"></i> '+color.hex+'<br>'
  })
  content += '</div>'
}

shade('hsl')
shade('rgb')

function tint(method) {
  content += '<div><h2>tint</h2><h3>'+method+'</h3>'
  Color.from('hex',0x881155).scheme('tint', {
    colors: 20,
    method: method,
    distance: 1,
    round: true
  }).forEach(color => {
    content += '<i class="color" style="background-color: #'+color.hex+'"></i> '+color.hex+'<br>'
  })
  content += '</div>'
}

tint('hsl')
tint('rgb')

function shadetint(method) {
  content += '<div><h2>shadetint</h2><h3>'+method+'</h3>'
  Color.from('hex',0xffaa88).scheme('shadetint', {
    colors: 10,
    method: method,
    distance: 1,
    round: true
  }).forEach(color => {
    content += '<i class="color" style="background-color: #'+color.hex+'"></i> '+color.hex+'<br>'
  })
  content += '</div>'
}

shadetint('hsl')
shadetint('rgb')

function shadetint2(method) {
  content += '<div><h2>shadetint</h2><h3>'+method+'</h3>'
  Color.from('hex',0xaa5511).scheme('shadetint', {
    colors: 10,
    method: method,
    distance: 1,
    round: true
  }).forEach(color => {
    content += '<i class="color" style="background-color: #'+color.hex+'"></i> '+color.hex+'<br>'
  })
  content += '</div>'
}

shadetint2('hsl')
shadetint2('rgb')

const fullContent = template(content)
let app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(fullContent)
})

app.listen(3000, '127.0.0.1')
console.log('Node server running on port 3000')
