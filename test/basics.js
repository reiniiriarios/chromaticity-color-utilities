const should = require('chai').should()
const Color = require('../dist/main.js')

describe('basics',() => {
    it('rgb for values 0-255 should remain in bounds',() => {
        for (let x=0; x <= 255; x++) {
            let c = Color.from('rgba',[x,x,x,x])
            let hsv = c.to('hsv')
            let hsl = c.to('hsl')
            let hsi = c.to('hsi')
            let hsp = c.to('hsp')
            let yiq = c.to('yiq')
            let xyz = c.to('xyz')
            let lab = c.to('lab')
            let luv = c.to('luv')
        }
    })
    it('rgb should fail out of bounds',() => {
        should.throw(() => {
            let color = Color.from('rgb',[500,100,0])
        })
        should.throw(() => {
            let color = Color.from('rgb',[5,555,0])
        })
        should.throw(() => {
            let color = Color.from('rgb',[5,100,555])
        })
        should.throw(() => {
            let color = Color.from('rgb',[5,100,0,555])
        })
        should.throw(() => {
            let color = Color.from('rgb',[100,100])
        })
        should.throw(() => {
            let color = Color.from('rgb',[-100,100,100])
        })
        should.throw(() => {
            let color = Color.from('rgb',[100,-100,100])
        })
        should.throw(() => {
            let color = Color.from('rgb',[100,100,-100])
        })
        should.throw(() => {
            let color = Color.from('rgb',[100,100,100,-10])
        })
    })
})

