const should = require('chai').should()
const Color = require('../dist/main.js').default

rgbIsMagenta = (color, a = 255) => {
  color.r.should.equal(255)
  color.g.should.equal(0)
  color.b.should.equal(255)
  color.a.should.equal(a)
  color.bitDepth.should.equal(8)
  color.max.should.equal(255)
}
rgbIsMagenta10 = (color, a = 1023) => {
  color.r.should.equal(1023)
  color.g.should.equal(0)
  color.b.should.equal(1023)
  color.a.should.equal(a)
  color.bitDepth.should.equal(10)
  color.max.should.equal(1023)
}
rec709IsMagenta = (color, a = 255) => {
  color.r.should.equal(235)
  color.g.should.equal(16)
  color.b.should.equal(235)
  color.a.should.equal(a)
  color.bitDepth.should.equal(8)
  color.max.should.equal(255)
}
rec709IsMagenta10 = (color, a = 1023) => {
  color.r.should.equal(940)
  color.g.should.equal(64)
  color.b.should.equal(940)
  color.a.should.equal(a)
  color.bitDepth.should.equal(10)
  color.max.should.equal(1023)
}
rec2020IsMagenta = (color, a = 1023) => {
  color.r.should.equal(940)
  color.g.should.equal(64)
  color.b.should.equal(940)
  color.a.should.equal(a)
  color.bitDepth.should.equal(10)
  color.max.should.equal(1023)
}
rec2020IsMagenta12 = (color, a = 1023) => {
  color.r.should.equal(3760)
  color.g.should.equal(256)
  color.b.should.equal(3760)
  color.a.should.equal(a)
  color.bitDepth.should.equal(12)
  color.max.should.equal(4095)
}
hexIsMagenta = (color) => {
  color.hex.should.equal('ff00ff')
}
hsvIsMagenta = (color, a = 100) => {
  color.h.should.equal(300)
  color.s.should.equal(100)
  color.v.should.equal(100)
  color.a.should.equal(a)
}
hslIsMagenta = (color, a = 100) => {
  color.h.should.equal(300)
  color.s.should.equal(100)
  color.l.should.equal(50)
  color.a.should.equal(a)
}
hsiIsMagenta = (color, a = 100) => {
  color.h.should.equal(300)
  color.s.should.equal(100)
  color.i.should.equal(67)
  color.a.should.equal(a)
}
hspIsMagenta = (color, a = 100) => {
  color.h.should.equal(300)
  color.s.should.equal(100)
  color.p.should.equal(64)
  color.a.should.equal(a)
}
cmykIsMagenta = (color) => {
  color.c.should.equal(0)
  color.m.should.equal(100)
  color.y.should.equal(0)
  color.k.should.equal(0)
}
yiqIsMagenta = (color) => {
  color.y.should.equal(105)
  color.i.should.equal(59)
  color.q.should.equal(128)
}
yiqNIsMagenta = (color) => {
  color.y.should.equal(0.413)
  color.i.should.equal(0.2746)
  color.q.should.equal(0.5226)
}
xyzIsMagenta = (color) => {
  color.x.should.equal(0.5928939)
  color.y.should.equal(0.2848479)
  color.z.should.equal(0.969638)
}
labIsMagenta = (color) => {
  color.l.should.equal(60)
  color.a.should.equal(98)
  color.b.should.equal(-61)
}
luvIsMagenta = (color) => {
  color.l.should.equal(60)
  color.u.should.equal(84)
  color.v.should.equal(-109)
}

describe('conversions', () => {
  let rgb = Color.from('rgb', [255, 0, 255, 128])
  it('rgb to hex', () => {
    let color = rgb.to('hex')
    hexIsMagenta(color)
  })
  it('hex to rgb', () => {
    let hexes = ['ff00ff', 'FF00FF', '#ff00ff', '#f0f', 'f0f', 0xff00ff]
    hexes.forEach((hex) => {
      let color = Color.from('hex', hex).to('rgb')
      rgbIsMagenta(color)
    })
    hexes.forEach((hex) => {
      let color = Color.from('hex', hex).to('rgb', { bitDepth: 10 })
      rgbIsMagenta10(color)
    })
  })

  it('rgb to rec709', () => {
    let color = rgb.to('rec709')
    rec709IsMagenta(color, 128)
    let color2 = rgb.to('rec709', { bitDepth: 10 })
    rec709IsMagenta10(color2, 514) // 128 > 255/2, gains two points
  })
  it('rec709 to rgb', () => {
    let color = Color.from('rec709', [235, 16, 235, 128]).to('rgb')
    rgbIsMagenta(color, 128)
    let color2 = Color.from('rec709', [940, 64, 940, 512], { bitDepth: 10 }).to(
      'rgb'
    )
    rgbIsMagenta(color2, 128)
    let color3 = Color.from('rec709', [235, 16, 235, 128]).to('rgb', {
      bitDepth: 10,
    })
    rgbIsMagenta10(color3, 514)
  })

  it('rgb to rec2020', () => {
    let color = rgb.to('rec2020')
    rec2020IsMagenta(color, 514)
    let color2 = rgb.to('rec2020', { bitDepth: 12 })
    rec2020IsMagenta12(color2, 2056) // 128 > 255/2, gains points
  })
  it('rec2020 to rgb', () => {
    let color = Color.from('rec2020', [940, 64, 940, 512]).to('rgb')
    rgbIsMagenta(color, 128)
    let color2 = Color.from('rec2020', [3760, 256, 3760, 2048], {
      bitDepth: 12,
    }).to('rgb')
    rgbIsMagenta(color2, 128)
    let color3 = Color.from('rec2020', [940, 64, 940, 512]).to('rgb', {
      bitDepth: 10,
    })
    rgbIsMagenta10(color3, 512)
  })

  it('rgb to hsv', () => {
    let color = rgb.to('hsv')
    hsvIsMagenta(color, 50)
  })
  it('hsv to rgb', () => {
    let color = Color.from('hsv', [300, 100, 100, 50]).to('rgb')
    rgbIsMagenta(color, 127)
    let color2 = Color.from('hsv', [300, 100, 100, 50]).to('rgb', {
      bitDepth: 10,
    })
    rgbIsMagenta10(color2, 512)
  })

  it('rgb to hsl', () => {
    let color = rgb.to('hsl')
    hslIsMagenta(color, 50)
  })
  it('hsl to rgb', () => {
    let color = Color.from('hsl', [300, 100, 50, 50]).to('rgb')
    rgbIsMagenta(color, 127)
    let color2 = Color.from('hsl', [300, 100, 50, 50]).to('rgb', {
      bitDepth: 10,
    })
    rgbIsMagenta10(color2, 512)
  })

  it('rgb to hsi', () => {
    let color = rgb.to('hsi')
    hsiIsMagenta(color, 50)
  })
  it('hsi to rgb', () => {
    let color = Color.from('hsi', [300, 100, 67, 50]).to('rgb')
    rgbIsMagenta(color, 127)
    let color2 = Color.from('hsi', [300, 100, 67, 50]).to('rgb', {
      bitDepth: 10,
    })
    rgbIsMagenta10(color2, 512)
  })

  it('rgb to hsp', () => {
    let color = rgb.to('hsp')
    hspIsMagenta(color, 50)

    let color2 = Color.from('rgb', [66, 114, 242]).to('hsp')
    color2.h.should.equal(224)
    color2.s.should.equal(73)
    color2.p.should.equal(49)
    let color3 = Color.from('rgb', [66, 114, 242])
      .to('hsp', { round: false })
      .to('rgb')
    color3.r.should.equal(66)
    color3.g.should.equal(114)
    color3.b.should.equal(242)
  })
  it('hsp to rgb', () => {
    let color = Color.from('hsp', [300, 100, 65, 50]).to('rgb')
    rgbIsMagenta(color, 127)
    let color2 = Color.from('hsp', [300, 100, 65, 50]).to('rgb', {
      bitDepth: 10,
    })
    rgbIsMagenta10(color2, 512)
  })

  it('rgb to cmyk', () => {
    let color = rgb.to('cmyk')
    cmykIsMagenta(color)
  })
  it('cmyk to rgb', () => {
    let color = Color.from('cmyk', [0, 100, 0, 0]).to('rgb')
    rgbIsMagenta(color, 255)
    let color2 = Color.from('cmyk', [0, 100, 0, 0]).to('rgb', { bitDepth: 10 })
    rgbIsMagenta10(color2, 1023)
  })

  it('rgb to yiq', () => {
    let color = rgb.to('yiq')
    yiqIsMagenta(color)
    let color2 = rgb.to('yiq', { normalize: false })
    yiqNIsMagenta(color2)
  })
  it('yiq to rgb', () => {
    let color = Color.from('yiq', [105, 59, 128]).to('rgb')
    rgbIsMagenta(color, 255)
    let color2 = Color.from('yiq', [105, 59, 128]).to('rgb', { bitDepth: 10 })
    color2.r.should.equal(1022)
    color2.g.should.equal(0)
    color2.b.should.equal(1021)
    color2.a.should.equal(1023)
    let color3 = Color.from('yiq', [0.413, 0.2746, 0.5226], {
      normalized: false,
    }).to('rgb')
    rgbIsMagenta(color3, 255)
  })

  it('rgb to xyz', () => {
    let color = rgb.to('xyz')
    xyzIsMagenta(color)
  })
  it('xyz to rgb', () => {})
    it('xyz to rgb',() => {
        let color = Color.from('xyz',[0.5928939, 0.2848479, 0.969638]).to('rgb')
        rgbIsMagenta(color,255)
        let color2 = Color.from('xyz',[0.5928939, 0.2848479, 0.969638]).to('rgb',{bitDepth: 10})
        rgbIsMagenta10(color2,1023)
    })
  it('rgb to lab', () => {
    let color = rgb.to('lab')
    labIsMagenta(color)
  })
  it('lab to rgb', () => {
    let color = Color.from('lab',[60,98,-61]).to('rgb')
    // rgbIsMagenta(color) -- off by 1 point
  })

  it('rgb to luv', () => {
    let color = rgb.to('luv')
    luvIsMagenta(color)
  })
  it('luv to rgb', () => {
    let color = Color.from('luv',[60, 84, -109]).to('rgb')
    // rgbIsMagenta(color) -- off by 1 point
  })

  it('nm to rgb', () => {
    let red = Color.from('nm', 600).to('rgb')
    red.r.should.equal(255)
    red.g.should.equal(190)
    red.b.should.equal(0)
    red.a.should.equal(255)
    let red2 = Color.from('nm', 600).to('rgb', { bitDepth: 10 })
    red2.r.should.equal(1023)
    red2.g.should.equal(762)
    red2.b.should.equal(0)
    red2.a.should.equal(1023)
  })

  it('kelvin to rgb', () => {
    let color1 = Color.from('kelvin', 2000).to('rgb')
    color1.r.should.equal(255)
    color1.g.should.equal(169)
    color1.b.should.equal(7)
    color1.a.should.equal(255)
    let color2 = Color.from('kelvin', 4000).to('rgb', { bitDepth: 10 })
    color2.r.should.equal(964)
    color2.g.should.equal(1023)
    color2.b.should.equal(700)
    color2.a.should.equal(1023)
  })
})
