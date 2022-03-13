const should = require('chai').should()
const Color = require('../dist/main.js').default

describe('lighten', () => {
  it('rgb', () => {
    let blend = Color.from('rgb', [128, 0, 255, 128]).modify('lighten',{
      amount: 0.5,
      method: 'rgb'
    })
    blend.r.should.equal(192)
    blend.g.should.equal(128)
    blend.b.should.equal(255)
    blend.a.should.equal(128)
  })

  it('hsl', () => {
    let blend = Color.from('hsl', [180, 50, 50, 50]).modify('lighten',{
      amount: 0.5,
      method: 'hsl'
    })
    blend.h.should.equal(180)
    blend.s.should.equal(50)
    blend.l.should.equal(75)
    blend.a.should.equal(50)
  })

  it('hsv', () => {
    let blend = Color.from('hsv', [180, 50, 50, 50]).modify('lighten',{
      amount: 0.5,
      method: 'hsv'
    })
    blend.h.should.equal(180)
    blend.s.should.equal(50)
    blend.v.should.equal(75)
    blend.a.should.equal(50)
  })

  it('hsi', () => {
    let blend = Color.from('hsi', [180, 50, 50, 50]).modify('lighten',{
      amount: 0.5,
      method: 'hsi'
    })
    blend.h.should.equal(180)
    blend.s.should.equal(50)
    blend.i.should.equal(75)
    blend.a.should.equal(50)
  })

  it('hsp', () => {
    let blend = Color.from('hsp', [180, 50, 50, 50]).modify('lighten',{
      amount: 0.5,
      method: 'hsp'
    })
    blend.h.should.equal(180)
    blend.s.should.equal(50)
    blend.p.should.equal(75)
    blend.a.should.equal(50)
  })

  it('cmyk', () => {
    let blend = Color.from('cmyk', [50, 50, 50, 50]).modify('lighten',{
      amount: 0.5,
      method: 'cmyk'
    })
    blend.c.should.equal(25)
    blend.m.should.equal(25)
    blend.y.should.equal(25)
    blend.k.should.equal(25)
  })

  it('cmykBlack', () => {
    let blend = Color.from('cmyk', [50, 50, 50, 50]).modify('lighten',{
      amount: 0.5,
      method: 'black'
    })
    blend.c.should.equal(50)
    blend.m.should.equal(50)
    blend.y.should.equal(50)
    blend.k.should.equal(25)
  })
})


describe('darken', () => {
  it('rgb', () => {
    let blend = Color.from('rgb', [128, 0, 128, 128]).modify('darken',{
      amount: 0.5,
      method: 'rgb'
    })
    blend.r.should.equal(64)
    blend.g.should.equal(0)
    blend.b.should.equal(64)
    blend.a.should.equal(128)
  })

  it('hsl', () => {
    let blend = Color.from('hsl', [180, 50, 50, 50]).modify('darken',{
      amount: 0.5,
      method: 'hsl'
    })
    blend.h.should.equal(180)
    blend.s.should.equal(50)
    blend.l.should.equal(25)
    blend.a.should.equal(50)
  })

  it('hsv', () => {
    let blend = Color.from('hsv', [180, 50, 50, 50]).modify('darken',{
      amount: 0.5,
      method: 'hsv'
    })
    blend.h.should.equal(180)
    blend.s.should.equal(50)
    blend.v.should.equal(25)
    blend.a.should.equal(50)
  })

  it('hsi', () => {
    let blend = Color.from('hsi', [180, 50, 50, 50]).modify('darken',{
      amount: 0.5,
      method: 'hsi'
    })
    blend.h.should.equal(180)
    blend.s.should.equal(50)
    blend.i.should.equal(25)
    blend.a.should.equal(50)
  })

  it('hsp', () => {
    let blend = Color.from('hsp', [180, 50, 50, 50]).modify('darken',{
      amount: 0.5,
      method: 'hsp'
    })
    blend.h.should.equal(180)
    blend.s.should.equal(50)
    blend.p.should.equal(25)
    blend.a.should.equal(50)
  })

  it('cmyk', () => {
    let blend = Color.from('cmyk', [50, 50, 50, 50]).modify('darken',{
      amount: 0.5,
      method: 'cmyk'
    })
    blend.c.should.equal(75)
    blend.m.should.equal(75)
    blend.y.should.equal(75)
    blend.k.should.equal(75)
  })

  it('cmykBlack', () => {
    let blend = Color.from('cmyk', [50, 50, 50, 50]).modify('darken',{
      amount: 0.5,
      method: 'black'
    })
    blend.c.should.equal(50)
    blend.m.should.equal(50)
    blend.y.should.equal(50)
    blend.k.should.equal(75)
  })
})
