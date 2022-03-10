const http = require('http')
const template = require('./template.js')
const Color = require('../dist/main.js').default

let content = ''

content += '<div><h3>default</h3>'
Color.from('hex',0xaa0000).scheme('gradient', {
  with: Color.from('rgb',[0, 128, 0]),
  colors: 10
}).forEach(color => {
  content += '<i class="color" style="background-color: #'+color.hex+'"></i> '+color.hex+'<br>'
})
content += '</div>'

content += '<div><h3>hsv</h3>'
Color.from('hex',0xaa0000).scheme('gradient', {
  with: Color.from('rgb',[0, 128, 0]),
  colors: 10,
  method: 'hsv'
}).forEach(color => {
  content += '<i class="color" style="background-color: #'+color.hex+'"></i> '+color.hex+'<br>'
})
content += '</div>'

content += '<div><h3>hsl</h3>'
Color.from('hex',0xaa0000).scheme('gradient', {
  with: Color.from('rgb',[0, 128, 0]),
  colors: 10,
  method: 'hsl'
}).forEach(color => {
  content += '<i class="color" style="background-color: #'+color.hex+'"></i> '+color.hex+'<br>'
})
content += '</div>'

content += '<div><h3>hsi</h3>'
Color.from('hex',0xaa0000).scheme('gradient', {
  with: Color.from('rgb',[0, 128, 0]),
  colors: 10,
  method: 'hsi'
}).forEach(color => {
  content += '<i class="color" style="background-color: #'+color.hex+'"></i> '+color.hex+'<br>'
})
content += '</div>'

content += '<div><h3>hsp</h3>'
Color.from('hex',0xaa0000).scheme('gradient', {
  with: Color.from('rgb',[0, 128, 0]),
  colors: 10,
  method: 'hsp'
}).forEach(color => {
  content += '<i class="color" style="background-color: #'+color.hex+'"></i> '+color.hex+'<br>'
})
content += '</div>'

content += '<div><h3>cmyk</h3>'
Color.from('hex',0xaa0000).scheme('gradient', {
  with: Color.from('rgb',[0, 128, 0]),
  colors: 10,
  method: 'cmyk'
}).forEach(color => {
  content += '<i class="color" style="background-color: #'+color.hex+'"></i> '+color.hex+'<br>'
})
content += '</div>'

const fullContent = template(content)
let app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(fullContent)
})

app.listen(3000, '127.0.0.1')
console.log('Node server running on port 3000')
