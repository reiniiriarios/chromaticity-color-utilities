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
  }
  .container > div {
    padding: 1rem;
    width: 7rem;
    display: inline-block;
  }
  h1, h2, h3, h4 { margin: 0; padding: 0; }
  h2 { font-size: 1rem; }
  h3 { font-size: 1.6rem; margin-bottom: 1rem; }
  .color {
    display: inline-block;
    width: 2rem;
    height: 1rem;
  }
  </style>
    </head>
    <body>
      ${content}
    </body>
  </html>  
`
}
