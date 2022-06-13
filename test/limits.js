const should = require('chai').should()
const Color = require('../dist/main.js')

describe('limits', () => {
  it('rgb conversions for values 0-255 should remain in bounds', () => {
    should.not.throw(() => {
      for (let x = 0; x <= 255; x++) {
        let c = Color.from('rgba', [x, x, x, x])
        let hsv = c.to('hsv')
        let hsl = c.to('hsl')
        let hsi = c.to('hsi')
        let hsp = c.to('hsp')
        let yiq = c.to('yiq')
        let xyz = c.to('xyz')
        let lab = c.to('lab')
        let luv = c.to('luv')
        let ypbpr = c.to('ypbpr', { kb: 1 / 3, kr: 1 / 3 })
        let ycbcr = c.to('ycbcr', {
          kb: 1 / 3,
          kr: 1 / 3,
          yLower: 0,
          yUpper: 255,
          cLower: 0,
          cUpper: 255,
        })
      }
    })
  })

  it('rgb should fail out of bounds', () => {
    should.throw(() => {
      let color = Color.from('rgb', [256, 1, 1])
    })
    should.throw(() => {
      let color = Color.from('rgb', [1, 256, 1])
    })
    should.throw(() => {
      let color = Color.from('rgb', [1, 1, 256])
    })
    should.throw(() => {
      let color = Color.from('rgb', [1, 1, 1, 256])
    })
    should.throw(() => {
      let color = Color.from('rgb', [1024, 1, 1], { bitDepth: 10 })
    })
    should.throw(() => {
      let color = Color.from('rgb', [1, 1024, 1], { bitDepth: 10 })
    })
    should.throw(() => {
      let color = Color.from('rgb', [1, 1, 1024], { bitDepth: 10 })
    })
    should.throw(() => {
      let color = Color.from('rgb', [1, 1, 1, 1024], { bitDepth: 10 })
    })
    should.not.throw(() => {
      let color = Color.from('rgb', [1023, 1, 1], { bitDepth: 10 })
    })
    should.not.throw(() => {
      let color = Color.from('rgb', [1, 1023, 1], { bitDepth: 10 })
    })
    should.not.throw(() => {
      let color = Color.from('rgb', [1, 1, 1023], { bitDepth: 10 })
    })
    should.not.throw(() => {
      let color = Color.from('rgb', [1, 1, 1, 1023], { bitDepth: 10 })
    })
    should.throw(() => {
      let color = Color.from('rgb', [1, 1])
    })
    should.throw(() => {
      let color = Color.from('rgb', [-1, 1, 1])
    })
    should.throw(() => {
      let color = Color.from('rgb', [1, -1, 1])
    })
    should.throw(() => {
      let color = Color.from('rgb', [1, 1, -1])
    })
    should.throw(() => {
      let color = Color.from('rgb', [1, 1, 1, -1])
    })
  })
  it('hsv should fail out of bounds', () => {
    should.throw(() => {
      let color = Color.from('hsv', [1, 1])
    })
    should.throw(() => {
      let color = Color.from('hsv', [-1, 1, 1])
    })
    should.throw(() => {
      let color = Color.from('hsv', [1, -1, 1])
    })
    should.throw(() => {
      let color = Color.from('hsv', [1, 1, -1])
    })
    should.throw(() => {
      let color = Color.from('hsv', [1, 1, 1, -1])
    })
    should.throw(() => {
      let color = Color.from('hsv', [366, 1, 1])
    })
    should.throw(() => {
      let color = Color.from('hsv', [1, 101, 1])
    })
    should.throw(() => {
      let color = Color.from('hsv', [1, 1, 101])
    })
    should.throw(() => {
      let color = Color.from('hsv', [1, 1, 1, 101])
    })
  })
  it('hsl should fail out of bounds', () => {
    should.throw(() => {
      let color = Color.from('hsl', [1, 1])
    })
    should.throw(() => {
      let color = Color.from('hsl', [-1, 1, 1])
    })
    should.throw(() => {
      let color = Color.from('hsl', [1, -1, 1])
    })
    should.throw(() => {
      let color = Color.from('hsl', [1, 1, -1])
    })
    should.throw(() => {
      let color = Color.from('hsl', [1, 1, 1, -1])
    })
    should.throw(() => {
      let color = Color.from('hsl', [366, 1, 1])
    })
    should.throw(() => {
      let color = Color.from('hsl', [1, 101, 1])
    })
    should.throw(() => {
      let color = Color.from('hsl', [1, 1, 101])
    })
    should.throw(() => {
      let color = Color.from('hsl', [1, 1, 1, 101])
    })
  })
  it('hsi should fail out of bounds', () => {
    should.throw(() => {
      let color = Color.from('hsi', [1, 1])
    })
    should.throw(() => {
      let color = Color.from('hsi', [-1, 1, 1])
    })
    should.throw(() => {
      let color = Color.from('hsi', [1, -1, 1])
    })
    should.throw(() => {
      let color = Color.from('hsi', [1, 1, -1])
    })
    should.throw(() => {
      let color = Color.from('hsi', [1, 1, 1, -1])
    })
    should.throw(() => {
      let color = Color.from('hsi', [366, 1, 1])
    })
    should.throw(() => {
      let color = Color.from('hsi', [1, 101, 1])
    })
    should.throw(() => {
      let color = Color.from('hsi', [1, 1, 101])
    })
    should.throw(() => {
      let color = Color.from('hsi', [1, 1, 1, 101])
    })
  })
  it('hsp should fail out of bounds', () => {
    should.throw(() => {
      let color = Color.from('hsp', [1, 1])
    })
    should.throw(() => {
      let color = Color.from('hsp', [-1, 1, 1])
    })
    should.throw(() => {
      let color = Color.from('hsp', [1, -1, 1])
    })
    should.throw(() => {
      let color = Color.from('hsp', [1, 1, -1])
    })
    should.throw(() => {
      let color = Color.from('hsp', [1, 1, 1, -1])
    })
    should.throw(() => {
      let color = Color.from('hsp', [366, 1, 1])
    })
    should.throw(() => {
      let color = Color.from('hsp', [1, 101, 1])
    })
    should.throw(() => {
      let color = Color.from('hsp', [1, 1, 101])
    })
    should.throw(() => {
      let color = Color.from('hsp', [1, 1, 1, 101])
    })
  })
  it('cmyk should fail out of bounds', () => {
    should.throw(() => {
      let color = Color.from('cmyk', [1, 1])
    })
    should.throw(() => {
      let color = Color.from('cmyk', [1, 1, 1])
    })
    should.throw(() => {
      let color = Color.from('cmyk', [-1, 1, 1, 1])
    })
    should.throw(() => {
      let color = Color.from('cmyk', [1, -1, 1, 1])
    })
    should.throw(() => {
      let color = Color.from('cmyk', [1, 1, -1, 1])
    })
    should.throw(() => {
      let color = Color.from('cmyk', [1, 1, 1, -1])
    })
    should.throw(() => {
      let color = Color.from('cmyk', [101, 1, 1, 1])
    })
    should.throw(() => {
      let color = Color.from('cmyk', [1, 101, 1, 1])
    })
    should.throw(() => {
      let color = Color.from('cmyk', [1, 1, 101, 1])
    })
    should.throw(() => {
      let color = Color.from('cmyk', [1, 1, 1, 101])
    })
  })
  it('yiq should fail out of bounds', () => {
    should.throw(() => {
      let color = Color.from('yiq', [1, 1])
    })
    should.throw(() => {
      let color = Color.from('yiq', [-1, 1, 1])
    })
    should.throw(() => {
      let color = Color.from('yiq', [1, -129, 1])
    })
    should.throw(() => {
      let color = Color.from('yiq', [1, 1, -129])
    })
    should.throw(() => {
      let color = Color.from('yiq', [256, 1, 1])
    })
    should.throw(() => {
      let color = Color.from('yiq', [1, 129, 1])
    })
    should.throw(() => {
      let color = Color.from('yiq', [1, 1, 129])
    })
  })
  it('rec709 should fail out of bounds', () => {
    should.throw(() => {
      let color = Color.from('rec709', [1, 1])
    })
    should.throw(() => {
      let color = Color.from('rec709', [1, 1, 1, -1])
    })
    should.throw(() => {
      let color = Color.from('rec709', [1, 1, 1, 256])
    })
    should.throw(() => {
      let color = Color.from('rec709', [1, 1, 1, 1024], { bitDepth: 10 })
    })
    should.not.throw(() => {
      let color = Color.from('rec709', [1, 1, 1, 1023], { bitDepth: 10 })
    })
  })
  it('rec2020 should fail out of bounds', () => {
    should.throw(() => {
      let color = Color.from('rec2020', [1, 1])
    })
    should.throw(() => {
      let color = Color.from('rec2020', [1, 1, 1, -1])
    })
    should.throw(() => {
      let color = Color.from('rec2020', [1, 1, 1, 1024])
    })
    should.not.throw(() => {
      let color = Color.from('rec2020', [1, 1, 1, 1023])
    })
    should.throw(() => {
      let color = Color.from('rec2020', [1, 1, 1, 4096], { bitDepth: 10 })
    })
    should.not.throw(() => {
      let color = Color.from('rec2020', [1, 1, 1, 4095], { bitDepth: 12 })
    })
  })
  it('lab should fail out of bounds', () => {
    should.throw(() => {
      let color = Color.from('lab', [1, 1])
    })
    should.throw(() => {
      let color = Color.from('lab', [-1, 1, 1])
    })
  })
  it('luv should fail out of bounds', () => {
    should.throw(() => {
      let color = Color.from('luv', [1, 1])
    })
    should.throw(() => {
      let color = Color.from('luv', [-1, 1, 1])
    })
    should.throw(() => {
      let color = Color.from('luv', [101, 1, 1])
    })
  })
  it('ypbpr should fail out of bounds', () => {
    should.throw(() => {
      let color = Color.from('ypbpr', [1, 0])
    })
    should.throw(() => {
      let color = Color.from('ypbpr', [1, 0, 0])
    })
    should.throw(() => {
      let color = Color.from('ypbpr', [1, 0, 0], { kb: 1 / 3 })
    })
    should.throw(() => {
      let color = Color.from('ypbpr', [1, 0, 0], { kr: 1 / 3 })
    })
    should.throw(() => {
      let color = Color.from('ypbpr', [-1, 0, 0], { kb: 1 / 3, kr: 1 / 3 })
    })
    should.throw(() => {
      let color = Color.from('ypbpr', [1, -1, 0], { kb: 1 / 3, kr: 1 / 3 })
    })
    should.throw(() => {
      let color = Color.from('ypbpr', [1, 0, -1], { kb: 1 / 3, kr: 1 / 3 })
    })
    should.throw(() => {
      let color = Color.from('ypbpr', [1, 1, 0], { kb: 1 / 3, kr: 1 / 3 })
    })
    should.throw(() => {
      let color = Color.from('ypbpr', [1, 0, 1], { kb: 1 / 3, kr: 1 / 3 })
    })
    should.not.throw(() => {
      let color = Color.from('ypbpr', [1, 0, 0], { kb: 1 / 3, kr: 1 / 3 })
    })
  })
  // skip ycbcr until better implementation?
  it('nm should fail out of bounds', () => {
    should.throw(() => {
      let color = Color.from('nm', 199)
    })
    should.throw(() => {
      let color = Color.from('nm', 801)
    })
    should.not.throw(() => {
      let color = Color.from('nm', 500)
    })
  })
  it('kelvin should fail out of bounds', () => {
    should.throw(() => {
      let color = Color.from('kelvin', 999)
    })
    should.throw(() => {
      let color = Color.from('kelvin', 40001)
    })
    should.not.throw(() => {
      let color = Color.from('kelvin', 2000)
    })
  })
})
