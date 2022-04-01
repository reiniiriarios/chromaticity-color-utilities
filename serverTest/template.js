module.exports = function template(content) {
  return `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>chromaticity tests</title>
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
    width: 8rem;
    display: inline-block;
  }
  h1, h2, h3, h4 { margin: 0; padding: 0; }
  h2 { font-size: 1rem; }
  h3 { font-size: 1.6rem; margin-bottom: 1rem; }
  .color {
    display: inline-block;
    width: 2rem;
    height: 1rem;
    position: relative;
    cursor: help;
  }
  .tip {
    position: absolute;
    left: 2.5rem;
    padding: 0.5rem 1rem;
    background-color: rgba(0,0,0,0.85);
    width: 16rem;
    display: none;
    z-index: 1000;
    font-size: 0.75rem;
  }
  .color:hover .tip {
    display: block;
  }
  label {
    margin-left: 0.5rem;
    font-family: 'Consolas', 'Lucida Console', 'Source Mono Pro', 'Roboto Mono', monospace;
    opacity: 0.75;
  }
  label.highlight {
    font-weight: bold;
    opacity: 1;
  }
  </style>
    </head>
    <body>
      ${content}
    </body>
  </html>  
`
}
