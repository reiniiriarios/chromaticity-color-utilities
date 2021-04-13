"use strict";

const Color = require('./dist/main.js')

const { rgb, rec709rgb } = require('./dist/Colors.js')
const Convert = require('./dist/Convert.js')

try {
    //let color = Color.from('rgb',[225, 128, 0, 128])
    //console.log(color)
    //console.log(color.to('hex'))
    //console.log(color.to('hsv'))
    //console.log(Color.from('hex','ff4401').to('rec709rgb',{bitRate:10}))
    //console.log(color.to('hsl'))
    //console.log(color.to('hsi'))
    //console.log(Color.from('hsv',[0, 50, 50.5]).to('rgb',{bitDepth: 10, round: false}))
    //console.log(Color.from('hsv',[0, 50, 50.5]).to('rgb',{bitDepth: 10, round: true}))
    //console.log(Color.from('hsv',[0, 50, 50.5]).to('rgb',{bitDepth: 8}))
    //console.log(color.to('cmyk'))
    //console.log(color.to('yiq'))
    //console.log(color.to('xyz'))

    /*
    let rgb = Color.from('rgb',[234, 100, 20, 64])
    //console.log(rgb)
    let blend = Color.from('hex','ee5432').modify('blend', {
        with: rgb,
        amount: 1/3
    }).to('hsv')
    console.log(blend)
    */
    /*

    console.log(blend)

    console.log(Color.from('rgb',[255,0,0]).modify('blend',{ with: Color.from('rgb',[0,255,0])}))

    let blendedColor2 = Color.from('rgb',[255,0,0]).modify('blend',{
        with: Color.from('hex','00ff00'),
        amount: 0.4
      })
      console.log(blendedColor2)
   let scheme1 = Color.from('rgb',[200, 180, 0]).scheme('splitComplement')
   console.log(scheme1)
   let scheme2 = Color.from('hsl',[180, 80, 48]).scheme('tetradic', { angle: 40 })
   console.log(scheme2)
    */
   /*
   let rgb1 = new rgb(255, 128, 0)
   console.log(rgb1)
   let rgb709 = Convert.rgb2rec709rgb(rgb1)
   console.log('\n',rgb709)
   let ycbcr709 = Convert.rgb2rec709ycbcr(rgb1)
   console.log('\n',ycbcr709)
   let rgb2 = Convert.rec709ycbcr2rgb(ycbcr709)
   console.log('\n',rgb2)
   let rgb709back = Convert.rec709ycbcr2rec709rgb(ycbcr709)
   console.log(rgb709back)
   */
  /*
  let color = new Color.from('hex','ff00ff')
  console.log(color.to('hsv'))
  console.log(color.to('hsl'))
  console.log(color.to('hsi'))
  console.log(color.to('cmyk'))
  console.log(color.to('yiq'))
  console.log(color.to('yiq',{normalize: false}))
  console.log(color.to('xyz'))
  console.log(color.to('xyz',{colorSpace: 'AdobeRGB', referenceWhite: 'd50'}))
  console.log(color.to('xyy'))
  console.log(color.to('xyy',{colorSpace: 'AdobeRGB', referenceWhite: 'd50'}))
  console.log(color.to('lab'))
  console.log(color.to('lab',{colorSpace: 'AdobeRGB', referenceWhite: 'd50'}))
  console.log(color.to('luv'))
  console.log(color.to('luv',{colorSpace: 'AdobeRGB', referenceWhite: 'd50'}))
  console.log(color.to('ypbpr',{kb:0.0722, kr:0.2126}))
  console.log(color.to('ycbcr',{kb:0.0722, kr:0.2126}))
  */

  /*
  let color4 = Color.from('rgb',[255,0,0]).modify('blend', {
    with: Color.from('hex','00ff00')
  })
  console.log(color4)
  */
  //console.log(Color.from('rgb',[255,0,255]).scheme('complement'))

  //console.log(Color.from('hex','ff00ff').to('hsl'))

  let colors = []
  
  /*
  colors.push(Color.from('rgb',[255,0,255, 200]).modify('desaturate',{method: 'hsl'}))
  colors.push(Color.from('rgb',[255,0,255, 200]).modify('desaturate',{method: 'hsv'}))
  colors.push(Color.from('rgb',[128,64,128, 200]).modify('saturate',{method: 'hsl'}))
  colors.push(Color.from('rgb',[128,64,128, 200]).modify('saturate',{method: 'hsv'}))
  colors.push(Color.from('rgb',[255,0,255, 200]).modify('darken',{method: 'hsl'}))
  //colors.push(Color.from('rgb',[255,0,255, 200]).modify('darken',{method: 'luminance'}))
  colors.push(Color.from('rgb',[255,0,255, 200]).modify('lighten',{method: 'hsl'}))
  //colors.push(Color.from('rgb',[255,0,255, 200]).modify('lighten',{method: 'luminance'}))
  */
  let magenta = Color.from('rgb',[255,0,255])
  //colors.push(magenta)
  /*
  colors.push(magenta.to('hsp'))
  colors.push(magenta.to('hsp',{round:false}))
  colors.push(magenta.to('hsp',{round:false}).to('hsp'))
  colors.push(magenta.to('hsp',{round:false}).to('rgb'))
  colors.push(Color.from('hsp',[300,100,50]))
  colors.push(Color.from('hsp',[300,100,50]).to('rgb'))
  colors.push(Color.from('hsp',[300,100,1]).to('rgb'))
  colors.push(Color.from('hsp',[300,100,65]).to('rgb'))
  */
// colors.push(magenta.modify('lighten',{method: 'hsp'}))
 //colors.push(magenta.modify('darken',{method: 'hsp'}))
  //colors.push( Color.from('hsl',[280,80,90]).to('rgb').r)

  /*
  colors.push(Color.from('rgb',[255,0,255]).scheme('shade', {colors: 4}))

  colors.push(Color.from('rgb',[100,0,100]).scheme('tint', {colors: 4}))

  colors.push(Color.from('rgb',[255,0,255]).scheme('shade', {colors: 4, distanceToBlack: 0.5}))

  colors.push(Color.from('rgb',[100,0,100]).scheme('tint', {colors: 4, distance: 0.5}))
  
  colors.push(Color.from('rgb',[100,0,100]).scheme('tintshade', {colors: 3}))
  
  colors.push(Color.from('rgb',[200,100,200]).scheme('tintshade', {colors: 3}))
  
  colors.push(Color.from('rgb',[200,100,200,40]).scheme('tintshade', {colors: 3, distance: 0.5}))
  
  colors.push(Color.from('rgb',[200,100,200]).scheme('tintshade', {colors: 3, distanceToWhite: 1, distanceToBlack: 1}))

colors.push( Color.from('rgb',[255,0,0]).modify('blend', {
  with: Color.from('hex','00ff00'),
  method: 'hsv'
}))
*/
/*
  colors.push(magenta.scheme('gradient',{
    with: Color.from('rgb',[0,255,0]),
    colors: 5
  }))
  colors.push(magenta.scheme('gradient',{
    with: Color.from('rgb',[0,255,0]),
    colors: 5,
    method: 'hsv'
  }))
  */
 /*
 colors.push(Color.from('kelvin',1000).to('rgb'))
 colors.push(Color.from('kelvin',2000).to('rgb'))
 colors.push(Color.from('kelvin',4000).to('rgb'))
 colors.push(Color.from('kelvin',8000).to('rgb'))
 colors.push(Color.from('kelvin',10000).to('rgb'))
 colors.push(Color.from('kelvin',12000).to('rgb'))
 colors.push(Color.from('kelvin',14000).to('rgb'))
 colors.push(Color.from('kelvin',20000).to('rgb'))
 colors.push(Color.from('kelvin',30000).to('rgb'))
 colors.push(Color.from('kelvin',40000).to('rgb'))
 */
/*
 colors.push(Color.from('hex','ff00ff').to('xyy'))
 colors.push(Color.from('hex','00ff00').to('xyy'))
 colors.push(Color.from('hex','ffff00').to('xyy'))
 colors.push(Color.from('hex','00ffff').to('xyy'))
 colors.push(Color.from('hex','000').to('xyy'))
 */
/*
colors.push(magenta.to('lab'))
colors.push(magenta.to('luv'))
colors.push(magenta.to('xyz'))
colors.push(magenta.to('xyy'))

colors.push(Color.from('hex', 'ff00ff').to('lab'))
colors.push(Color.from('hex', 'ff00ff').to('lab',{
  colorSpace: 'AdobeRGB',
  referenceWhite: 'D50'
}))
*/
colors.push(Color.from('hex',0x9A237F).modify('desaturate',{amount:0.2}).to('lab',{
  colorSpace: 'AdobeRGB',
  referenceWhite: 'D50'
}).scheme('gradient',{
  with: Color.from('hsl',[300,50,45]),
  colors: 5
}))

  console.log(colors)
}
catch (err) {
    console.log(err);
}