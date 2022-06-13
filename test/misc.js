const should = require('chai').should()
const Color = require('../dist/main.js')

describe('miscellanous', () => {

  it('setAlpha() should work and return true on appropriate types', () => {
    const rgb = Color.from('rgb',[1,1,1])
    rgb.setAlpha(10).should.be.true
    rgb.get('a').should.equal(10)

    const rgb709 = Color.from('rec709rgb',[1,1,1])
    rgb709.setAlpha(10).should.be.true
    rgb709.get('a').should.equal(10)
    
    const rgb2020 = Color.from('rec2020rgb',[1,1,1])
    rgb2020.setAlpha(10).should.be.true
    rgb2020.get('a').should.equal(10)

    const hsl = Color.from('hsl',[1,1,1])
    hsl.setAlpha(10).should.be.true
    hsl.get('a').should.equal(10)

    const hsv = Color.from('hsv',[1,1,1])
    hsv.setAlpha(10).should.be.true
    hsv.get('a').should.equal(10)

    const hsi = Color.from('hsi',[1,1,1])
    hsi.setAlpha(10).should.be.true
    hsi.get('a').should.equal(10)

    const hsp = Color.from('hsp',[1,1,1])
    hsp.setAlpha(10).should.be.true
    hsp.get('a').should.equal(10)
  })

  it('setAlpha() should return false on appropriate types', () => {
    const cmyk = Color.from('cmyk',[1,1,1,1])
    cmyk.setAlpha(10).should.be.false

    const yiq = Color.from('yiq',[1,1,1])
    yiq.setAlpha(10).should.be.false

    const lab = Color.from('lab',[1,1,1])
    lab.setAlpha(10).should.be.false

    const luv = Color.from('luv',[1,1,1])
    luv.setAlpha(10).should.be.false

    const xyz = Color.from('xyz',[1,1,1])
    xyz.setAlpha(10).should.be.false

    const xyy = Color.from('xyy',[1,1,1])
    xyy.setAlpha(10).should.be.false

    const nm = Color.from('nm',400)
    nm.setAlpha(10).should.be.false

    const kelvin = Color.from('kelvin',4000)
    kelvin.setAlpha(10).should.be.false
  })
  
})
