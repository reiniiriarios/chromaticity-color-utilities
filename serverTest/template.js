
module.exports = function template(content) {
  return `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>reinii.riarios</title>
      <link rel="stylesheet" type="text/css" href="font.css">
      <link rel="stylesheet" type="text/css" href="glitch.css">
  <style>
  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    font-size: 1rem;
    color: #eee;
    background-color: #111;
  }
  .container {
    margin: 2rem;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
  }
  .container > div {
    
  }
  .color {
    display: inline-block;
    width: 2rem;
    height: 1rem;
  }
  </style>
    </head>
    <body>
      <div class="container">
        ${content}
      </div>
    </body>
  </html>  
`
}
