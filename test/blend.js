const should = require('chai').should()
const Color = require('../dist/main.js')

describe('blending', () => {
  it('rgb', () => {
    let blend = Color.from('rgb', [255, 0, 255, 128]).modify('blend',{
      with: Color.from('rgb', [0, 255, 0]),
      method: 'rgb'
    })
    blend.r.should.equal(128)
    blend.g.should.equal(128)
    blend.b.should.equal(128)
    // blend.a.should.equal(128)
  })
  
  it('hsl', () => {
    let blend = Color.from('hsl', [0, 100, 75, 50]).modify('blend',{
      with: Color.from('hsl', [180, 50, 25]),
      method: 'hsl'
    })
    blend.h.should.equal(90)
    blend.s.should.equal(75)
    blend.l.should.equal(50)
    // blend.a.should.equal(75)
  })
  
  it('hsv', () => {
    let blend = Color.from('hsv', [0, 100, 75, 50]).modify('blend',{
      with: Color.from('hsv', [180, 50, 25]),
      method: 'hsv'
    })
    blend.h.should.equal(90)
    blend.s.should.equal(75)
    blend.v.should.equal(50)
    // blend.a.should.equal(75)
  })
  
  it('hsi', () => {
    let blend = Color.from('hsi', [0, 100, 75, 50]).modify('blend',{
      with: Color.from('hsi', [180, 50, 25]),
      method: 'hsi'
    })
    blend.h.should.equal(90)
    blend.s.should.equal(75)
    blend.i.should.equal(50)
    // blend.a.should.equal(75)
  })
  
  it('hsp', () => {
    let blend = Color.from('hsp', [0, 100, 75, 50]).modify('blend',{
      with: Color.from('hsp', [180, 50, 25]),
      method: 'hsp'
    })
    blend.h.should.equal(90)
    blend.s.should.equal(75)
    blend.p.should.equal(50)
    // blend.a.should.equal(75)
  })
  
  it('cmyk', () => {
    let blend = Color.from('cmyk', [0, 100, 75, 50]).modify('blend',{
      with: Color.from('cmyk', [100, 50, 25, 0]),
      method: 'cmyk'
    })
    blend.c.should.equal(50)
    blend.m.should.equal(75)
    blend.y.should.equal(50)
    blend.k.should.equal(25)
  })
})
