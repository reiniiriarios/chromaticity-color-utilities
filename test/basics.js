const should = require('chai').should()
const Color = require('../dist/main.js')

describe('rgb',() => {
    it('should behave',() => {
        let color = Color.from('rgb',[225, 128, 0, 100])
        color.should.be.a('object')
        color.should.have.property('r')
        color.should.have.property('g')
        color.should.have.property('b')
        color.should.have.property('a')
        color.r.should.equal(225)
        color.g.should.equal(128)
        color.b.should.equal(0)
        color.a.should.equal(100)
        color.should.have.property('bitDepth')
        color.bitDepth.should.equal(8)
        color.should.have.property('max')
        color.max.should.equal(255)
    })
    it('should fail appropriately',() => {
        should.throw(() => {
            let color = Color.from('rgb',[500,100,0])
        })
        should.throw(() => {
            let color = Color.from('rgb',[100,100])
        })
        should.throw(() => {
            let color = Color.from('rgb',[-100,100,100])
        })
    })
})

