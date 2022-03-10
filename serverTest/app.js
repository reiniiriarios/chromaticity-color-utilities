const http = require('http')
const template = require('./template.js')
const Color = require('../dist/main.js').default

let content = ''

function grad(method) {
  content += '<div><h3>'+method+'</h3>'
  Color.from('hex',0xcc0000).scheme('gradient', {
    with: Color.from('hex','00aaaa'),
    colors: 10,
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

const fullContent = template(content)
let app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(fullContent)
})

app.listen(3000, '127.0.0.1')
console.log('Node server running on port 3000')
