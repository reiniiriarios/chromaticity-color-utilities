const should = require('chai').should()
const Color = require('../dist/main.js')

rgbIsMagenta = (color,a=255) => {
    color.r.should.equal(255)
    color.g.should.equal(0)
    color.b.should.equal(255)
    color.a.should.equal(a)
    color.bitDepth.should.equal(8)
    color.max.should.equal(255)
}
rgbIsMagenta10 = (color,a=1023) => {
    color.r.should.equal(1023)
    color.g.should.equal(0)
    color.b.should.equal(1023)
    color.a.should.equal(a)
    color.bitDepth.should.equal(10)
    color.max.should.equal(1023)
}
hexIsMagenta = (color) => {
    color.hex.should.equal('ff00ff')
}

describe('rgb',() => {
    it('rgb to hex',() => {
        let color = Color.from('rgb',[255, 0, 255, 100]).to('hex')
        hexIsMagenta(color)
    })
    it('hex to rgb',() => {
        let hexes = ['ff00ff','FF00FF','#ff00ff','#f0f','f0f',0xFF00FF]
        hexes.forEach(hex => {
            let color = Color.from('hex',hex).to('rgb')
            rgbIsMagenta(color)
        })
        hexes.forEach(hex => {
            let color = Color.from('hex',hex).to('rgb',{bitDepth:10})
            rgbIsMagenta10(color)
        })
    })
    
    it('rgb to hsv',() => {
        let color = Color.from('rgb',[255,0,255,128]).to('hsv')
        color.h.should.equal(300)
        color.s.should.equal(100)
        color.v.should.equal(100)
        color.a.should.equal(50)
    })
    it('hsv to rgb',() => {
        let color = Color.from('hsv',[300,100,100,50]).to('rgb')
        rgbIsMagenta(color,127)
        let color2 = Color.from('hsv',[300,100,100,50]).to('rgb',{bitDepth: 10})
        rgbIsMagenta10(color2,512)
    })
    it('rgb to hsl',() => {
        let color = Color.from('rgb',[255,0,255,128]).to('hsl')
        color.h.should.equal(300)
        color.s.should.equal(100)
        color.l.should.equal(50)
        color.a.should.equal(50)
    })
    it('hsl to rgb',() => {
        let color = Color.from('hsl',[300,100,50,50]).to('rgb')
        rgbIsMagenta(color,127)
        let color2 = Color.from('hsl',[300,100,50,50]).to('rgb',{bitDepth: 10})
        rgbIsMagenta10(color2,512)
    })
})

