// chromaticity-color-utilities
// Copyright (C) 2021 Emma Litwa-Vulcu
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import Util from './Util'
import Convert from './Convert'
import Modify from './Modify'
import { colorSpaces } from './Reference';

export interface newColorArgs {
    round?: boolean
    bitDepth?: number
    bitRate?: number
    normalize?: boolean
    colorSpace?: string
    referenceWhite?: string
}

export interface modifyArgs {
    method?: string
    with?: colorType
    amount?: number
}

export abstract class colorType {
    constructor() {}

    to(type:string, args?: newColorArgs) : colorType|any {
        return this
    }

    setArgs(args?: newColorArgs) : newColorArgs {
        if (typeof args == 'undefined') args = {}
        else if (typeof args.bitDepth === 'undefined' && typeof args.bitRate !== 'undefined') {
            args.bitDepth = args.bitRate
        }
        return args
    }
    
    /**
     * Range check to make sure numeric value is within lower and upper limits
     * Throws error on fail, returns nothing
     *
     * @param  {number}         value
     * @param  {number|boolean} lowerLimit number or false
     * @param  {number|boolean} upperLimit number or false
     * @param  {string}         msg        error message if fail
     */
    valueRangeCheck(value: number, lowerLimit: number | boolean, upperLimit: number | boolean, msg?: string) : void {
        if (!isFinite(value)) {
            throw new Error('Invalid color value');
        }
        if (lowerLimit && upperLimit && lowerLimit >= upperLimit) {
            throw new Error('Invalid range (lower limit must exceed upper limit)');
        }
        if ((lowerLimit && value < lowerLimit) || (upperLimit && value > upperLimit)) {
            throw new Error(typeof msg !== 'undefined' ? msg : 'Color value out of range');
        }
    }

    modify(modification:string, args?: modifyArgs) : colorType {
        if (typeof args == 'undefined') args = {}
        switch (modification) {
            case 'blend':
                if (typeof args.with === 'undefined') {
                    throw new Error('Missing second color to blend with')
                }
                if (typeof args.amount === 'undefined') {
                    args.amount = 0.5
                }
                else {
                    this.valueRangeCheck(args.amount, 0, 1, 'Blend amount must be between 0 and 1')
                }
                if (typeof args.method === 'undefined') {
                    args.method = 'rgb'
                }
                let tmpColor1, tmpColor2
                switch (args.method) {
                    case 'rgb':
                    case 'rgba':
                    case 'hex':
                        tmpColor1 = this.to('rgb', { round: false })
                        tmpColor2 = args.with.to('rgb', { round: false })
                        return Modify.rgbBlend(tmpColor1, tmpColor2, args.amount)
                    case 'hsv':
                    case 'hsva':
                        tmpColor1 = this.to('hsv', { round: false })
                        tmpColor2 = args.with.to('hsv', { round: false })
                        return Modify.hsvBlend(tmpColor1, tmpColor2, args.amount)
                }
            default:
                throw new Error('Unrecognized modify action')
        }
    }
}

export class hex extends colorType {
    hex: string

    constructor(hex: string) {
        super()
        this.hex = Util.expandHex(hex)
    }

    to(type:string, args?: newColorArgs): colorType {
        args = super.setArgs(args)
        switch (type) {
            case 'rgb':
                return Convert.hex2rgb(this, args.bitDepth)
            case 'hex':
                return this
            case 'rec709':
            case 'rgb709':
            case 'rec709rgb':
            case 'rgbrec709':
                if (typeof args.bitDepth == 'undefined') args.bitDepth = 8
                return Convert.rgb2rec709rgb(Convert.hex2rgb(this), args.round, args.bitDepth)
            case 'rec2020':
            case 'rgb2020':
            case 'rec2020rgb':
            case 'rgbrec2020':
                if (typeof args.bitDepth == 'undefined') args.bitDepth = 10
                return Convert.rgb2rec2020rgb(Convert.hex2rgb(this), args.round, args.bitDepth)
            case 'hsv':
                return Convert.rgb2hsv(Convert.hex2rgb(this), args.round)
            case 'hsl':
                return Convert.rgb2hsl(Convert.hex2rgb(this), args.round)
            case 'hsi':
                return Convert.rgb2hsi(Convert.hex2rgb(this), args.round)
            case 'cmyk':
                return Convert.rgb2cmyk(Convert.hex2rgb(this), args.round)
            case 'yiq':
                return Convert.rgb2yiq(Convert.hex2rgb(this), args.normalize, args.round)
            case 'xyz':
                return Convert.rgb2xyz(Convert.hex2rgb(this), args.colorSpace, args.referenceWhite)
            default:
                throw new Error('Unable to find conversion path')
        }
    }
}

export class rgb extends colorType {
    r: number
    g: number
    b: number
    a: number
    bitDepth: number
    max: number

    constructor(r: number, g: number, b: number, a?: number, bitDepth: number = 8) {
        super()
        this.valueRangeCheck(bitDepth, 1, false, 'Bit depth must be a positive number greater than 1')
        let max = (2 ** bitDepth) - 1
        if (typeof a == 'undefined') a = max
        this.valueRangeCheck(r, 0, max)
        this.valueRangeCheck(g, 0, max)
        this.valueRangeCheck(b, 0, max)
        this.valueRangeCheck(a, 0, max)
        this.r = r
        this.g = g
        this.b = b
        this.a = a
        this.bitDepth = bitDepth
        this.max = max
    }

    to(type:string, args?: newColorArgs): colorType {
        args = super.setArgs(args)
        switch (type) {
            case 'rgb':
                return this
            case 'hex':
                return Convert.rgb2hex(this)
            case 'rec709':
            case 'rgb709':
            case 'rec709rgb':
            case 'rgbrec709':
                if (typeof args.bitDepth == 'undefined') args.bitDepth = 8
                return Convert.rgb2rec709rgb(this, args.round, args.bitDepth)
            case 'rec2020':
            case 'rgb2020':
            case 'rec2020rgb':
            case 'rgbrec2020':
                if (typeof args.bitDepth == 'undefined') args.bitDepth = 10
                return Convert.rgb2rec2020rgb(this, args.round, args.bitDepth)
            case 'hsv':
                return Convert.rgb2hsv(this, args.round)
            case 'hsl':
                return Convert.rgb2hsl(this, args.round)
            case 'hsi':
                return Convert.rgb2hsi(this, args.round)
            case 'cmyk':
                return Convert.rgb2cmyk(this, args.round)
            case 'yiq':
                return Convert.rgb2yiq(this, args.normalize, args.round)
            case 'xyz':
                return Convert.rgb2xyz(this, args.colorSpace, args.referenceWhite)
            default:
                throw new Error('Unable to find conversion path')
        }
    }
}

export class rec709rgb extends colorType {
    r: number
    g: number
    b: number
    a: number
    bitDepth: number
    max: number

    constructor(r: number, g: number, b: number, a?: number, bitDepth: number = 8) {
        super()
        if (bitDepth != 8 && bitDepth != 10) {
            throw new Error('Invalid bitrate for Rec709, must be 8 or 10')
        }
        let max = (2 ** bitDepth) - 1
        if (typeof a == 'undefined') a = max
        this.valueRangeCheck(r, 0, max)
        this.valueRangeCheck(g, 0, max)
        this.valueRangeCheck(b, 0, max)
        this.valueRangeCheck(a, 0, max)
        this.r = r
        this.g = g
        this.b = b
        this.a = a
        this.bitDepth = bitDepth
        this.max = max
    }

    to(type:string, args?: newColorArgs) : colorType {
        args = super.setArgs(args)
        switch (type) {
            case 'rgb':
                return Convert.rec709rgb2rgb(this, args.round, args.bitDepth)
            case 'hex':
                return Convert.rgb2hex(Convert.rec709rgb2rgb(this))
            case 'rec709':
            case 'rgb709':
            case 'rec709rgb':
            case 'rgbrec709':
                return this
            case 'rec2020':
            case 'rgb2020':
            case 'rec2020rgb':
            case 'rgbrec2020':
                if (typeof args.bitDepth == 'undefined') args.bitDepth = 10
                return Convert.rgb2rec2020rgb(Convert.rec709rgb2rgb(this, false), args.round, args.bitDepth)
            case 'hsv':
                return Convert.rgb2hsv(Convert.rec709rgb2rgb(this, false), args.round)
            case 'hsl':
                return Convert.rgb2hsl(Convert.rec709rgb2rgb(this, false), args.round)
            case 'hsi':
                return Convert.rgb2hsi(Convert.rec709rgb2rgb(this, false), args.round)
            case 'cmyk':
                return Convert.rgb2cmyk(Convert.rec709rgb2rgb(this, false), args.round)
            case 'yiq':
                return Convert.rgb2yiq(Convert.rec709rgb2rgb(this, false), args.normalize, args.round)
            case 'xyz':
                return Convert.rgb2xyz(Convert.rec709rgb2rgb(this, false), args.colorSpace, args.referenceWhite)
            default:
                throw new Error('Unable to find conversion path')
        }
    }
}

export class rec2020rgb extends colorType {
    r: number
    g: number
    b: number
    a: number
    bitDepth: number
    max: number

    constructor(r: number, g: number, b: number, a?: number, bitDepth: number = 10) {
        super()
        if (bitDepth != 10 && bitDepth != 12) {
            throw new Error('Invalid bitrate for Rec2020, must be 10 or 12')
        }
        let max = (2 ** bitDepth) - 1
        if (typeof a == 'undefined') a = max
        this.valueRangeCheck(r, 0, max)
        this.valueRangeCheck(g, 0, max)
        this.valueRangeCheck(b, 0, max)
        this.valueRangeCheck(a, 0, max)
        this.r = r
        this.g = g
        this.b = b
        this.a = a
        this.bitDepth = bitDepth
        this.max = max
    }

    to(type:string, args?: newColorArgs) : colorType {
        args = super.setArgs(args)
        switch (type) {
            case 'rgb':
                return Convert.rec2020rgb2rgb(this, args.round, args.bitDepth)
            case 'hex':
                return Convert.rgb2hex(Convert.rec2020rgb2rgb(this))
            case 'rec709':
            case 'rgb709':
            case 'rec709rgb':
            case 'rgbrec709':
                if (typeof args.bitDepth == 'undefined') args.bitDepth = 10
                return Convert.rgb2rec709rgb(Convert.rec2020rgb2rgb(this, false), args.round, args.bitDepth)
            case 'rec2020':
            case 'rgb2020':
            case 'rec2020rgb':
            case 'rgbrec2020':
                return this
            case 'hsv':
                return Convert.rgb2hsv(Convert.rec2020rgb2rgb(this, false), args.round)
            case 'hsl':
                return Convert.rgb2hsl(Convert.rec2020rgb2rgb(this, false), args.round)
            case 'hsi':
                return Convert.rgb2hsi(Convert.rec2020rgb2rgb(this, false), args.round)
            case 'cmyk':
                return Convert.rgb2cmyk(Convert.rec2020rgb2rgb(this, false), args.round)
            case 'yiq':
                return Convert.rgb2yiq(Convert.rec2020rgb2rgb(this, false), args.normalize, args.round)
            case 'xyz':
                return Convert.rgb2xyz(Convert.rec2020rgb2rgb(this, false), args.colorSpace, args.referenceWhite)
            default:
                throw new Error('Unable to find conversion path')
        }
    }
}

export class hsv extends colorType {
    h: number
    s: number
    v: number
    a: number

    constructor(h: number, s: number, v: number, a: number = 100) {
        super()
        this.valueRangeCheck(h, 0, 360)
        this.valueRangeCheck(s, 0, 100)
        this.valueRangeCheck(v, 0, 100)
        this.valueRangeCheck(a, 0, 100)
        this.h = h
        this.s = s
        this.v = v
        this.a = a
    }

    to(type:string, args?: newColorArgs) : colorType {
        args = super.setArgs(args)
        switch (type) {
            case 'rgb':
                return Convert.hsv2rgb(this, args.round, args.bitDepth)
            case 'hex':
                return Convert.rgb2hex(Convert.hsv2rgb(this))
            case 'rec709':
            case 'rgb709':
            case 'rec709rgb':
            case 'rgbrec709':
                if (typeof args.bitDepth == 'undefined') args.bitDepth = 10
                return Convert.rgb2rec709rgb(Convert.hsv2rgb(this, false), args.round, args.bitDepth)
            case 'rec2020':
            case 'rgb2020':
            case 'rec2020rgb':
            case 'rgbrec2020':
                if (typeof args.bitDepth == 'undefined') args.bitDepth = 10
                return Convert.rgb2rec2020rgb(Convert.hsv2rgb(this, false), args.round, args.bitDepth)
            case 'hsv':
                return this
            case 'hsl':
                return Convert.hsv2hsl(this, args.round)
            case 'hsi':
                return Convert.hsv2hsi(this, args.round)
            case 'cmyk':
                return Convert.rgb2cmyk(Convert.hsv2rgb(this, false), args.round)
            case 'yiq':
                return Convert.rgb2yiq(Convert.hsv2rgb(this, false), args.normalize, args.round)
            case 'xyz':
                return Convert.rgb2xyz(Convert.hsv2rgb(this, false), args.colorSpace, args.referenceWhite)
            default:
                throw new Error('Unable to find conversion path')
        }
    }
}

export class hsl extends colorType {
    h: number
    s: number
    l: number
    a: number

    constructor(h: number, s: number, l: number, a: number = 100) {
        super()
        this.valueRangeCheck(h, 0, 360)
        this.valueRangeCheck(s, 0, 100)
        this.valueRangeCheck(l, 0, 100)
        this.valueRangeCheck(a, 0, 100)
        this.h = h
        this.s = s
        this.l = l
        this.a = a
    }

    to(type:string, args?: newColorArgs) : colorType {
        args = super.setArgs(args)
        switch (type) {
            case 'rgb':
                return Convert.hsl2rgb(this, args.round, args.bitDepth)
            case 'hex':
                return Convert.rgb2hex(Convert.hsl2rgb(this))
            case 'rec709':
            case 'rgb709':
            case 'rec709rgb':
            case 'rgbrec709':
                if (typeof args.bitDepth == 'undefined') args.bitDepth = 10
                return Convert.rgb2rec709rgb(Convert.hsl2rgb(this, false), args.round, args.bitDepth)
            case 'rec2020':
            case 'rgb2020':
            case 'rec2020rgb':
            case 'rgbrec2020':
                if (typeof args.bitDepth == 'undefined') args.bitDepth = 10
                return Convert.rgb2rec2020rgb(Convert.hsl2rgb(this, false), args.round, args.bitDepth)
            case 'hsv':
                return Convert.hsl2hsv(this, args.round)
            case 'hsl':
                return this
            case 'hsi':
                return Convert.hsl2hsi(this, args.round)
            case 'cmyk':
                return Convert.rgb2cmyk(Convert.hsl2rgb(this, false), args.round)
            case 'yiq':
                return Convert.rgb2yiq(Convert.hsl2rgb(this, false), args.normalize, args.round)
            case 'xyz':
                return Convert.rgb2xyz(Convert.hsl2rgb(this, false), args.colorSpace, args.referenceWhite)
            default:
                throw new Error('Unable to find conversion path')
        }
    }
}

export class hsi extends colorType {
    h: number
    s: number
    i: number
    a: number

    constructor(h: number, s: number, i: number, a: number = 100) {
        super()
        this.valueRangeCheck(h, 0, 360)
        this.valueRangeCheck(s, 0, 100)
        this.valueRangeCheck(i, 0, 100)
        this.valueRangeCheck(a, 0, 100)
        this.h = h
        this.s = s
        this.i = i
        this.a = a
    }

    to(type:string, args?: newColorArgs) : colorType {
        args = super.setArgs(args)
        switch (type) {
            case 'rgb':
                return Convert.hsi2rgb(this, args.round, args.bitDepth)
            case 'hex':
                return Convert.rgb2hex(Convert.hsi2rgb(this))
            case 'rec709':
            case 'rgb709':
            case 'rec709rgb':
            case 'rgbrec709':
                if (typeof args.bitDepth == 'undefined') args.bitDepth = 10
                return Convert.rgb2rec709rgb(Convert.hsi2rgb(this, false), args.round, args.bitDepth)
            case 'rec2020':
            case 'rgb2020':
            case 'rec2020rgb':
            case 'rgbrec2020':
                if (typeof args.bitDepth == 'undefined') args.bitDepth = 10
                return Convert.rgb2rec2020rgb(Convert.hsi2rgb(this, false), args.round, args.bitDepth)
            case 'hsv':
                return Convert.hsi2hsv(this, args.round)
            case 'hsl':
                return Convert.hsi2hsl(this, args.round)
            case 'hsi':
                return this
            case 'cmyk':
                return Convert.rgb2cmyk(Convert.hsi2rgb(this, false), args.round)
            case 'yiq':
                return Convert.rgb2yiq(Convert.hsi2rgb(this, false), args.normalize, args.round)
            case 'xyz':
                return Convert.rgb2xyz(Convert.hsi2rgb(this, false), args.colorSpace, args.referenceWhite)
            default:
                throw new Error('Unable to find conversion path')
        }
    }
}

export class cmyk extends colorType {
    c: number
    m: number
    y: number
    k: number

    constructor(c: number, m: number, y: number, k:number) {
        super()
        this.valueRangeCheck(c, 0, 100, 'CMYK values must be between 0 and 100')
        this.valueRangeCheck(m, 0, 100, 'CMYK values must be between 0 and 100')
        this.valueRangeCheck(y, 0, 100, 'CMYK values must be between 0 and 100')
        this.valueRangeCheck(k, 0, 100, 'CMYK values must be between 0 and 100')
        this.c = c
        this.m = m
        this.y = y
        this.k = k
    }

    to(type:string, args?: newColorArgs) : colorType {
        args = super.setArgs(args)
        switch (type) {
            case 'rgb':
                return Convert.cmyk2rgb(this, args.round, args.bitDepth)
            case 'hex':
                return Convert.rgb2hex(Convert.cmyk2rgb(this))
            case 'rec709':
            case 'rgb709':
            case 'rec709rgb':
            case 'rgbrec709':
                if (typeof args.bitDepth == 'undefined') args.bitDepth = 10
                return Convert.rgb2rec709rgb(Convert.cmyk2rgb(this, false), args.round, args.bitDepth)
            case 'rec2020':
            case 'rgb2020':
            case 'rec2020rgb':
            case 'rgbrec2020':
                if (typeof args.bitDepth == 'undefined') args.bitDepth = 10
                return Convert.rgb2rec2020rgb(Convert.cmyk2rgb(this, false), args.round, args.bitDepth)
            case 'hsv':
                return Convert.rgb2hsv(Convert.cmyk2rgb(this, false), args.round)
            case 'hsl':
                return Convert.rgb2hsl(Convert.cmyk2rgb(this, false), args.round)
            case 'hsi':
                return Convert.rgb2hsi(Convert.cmyk2rgb(this, false), args.round)
            case 'cmyk':
                return this
            case 'yiq':
                return Convert.rgb2yiq(Convert.cmyk2rgb(this, false), args.normalize, args.round)
            case 'xyz':
                return Convert.rgb2xyz(Convert.cmyk2rgb(this, false), args.colorSpace, args.referenceWhite)
            default:
                throw new Error('Unable to find conversion path')
        }
    }
}

export class yiq extends colorType {
    y: number
    i: number
    q: number
    normalized: boolean

    /**
     * YIQ
     * 
     * @param {number}  y 0-1 or 0-255 normalized
     * @param {number}  i -0.5957 to 0.5957 or -128 to 128 normalized
     * @param {number}  q -0.5226 to 0.5226 or -128 to 128 normalized
     * @param {boolean} normalized
     */
    constructor(y: number, i: number, q: number, normalized: boolean = true) {
        super()
        if (normalized) {
            this.valueRangeCheck(y, 0, 255, 'Normalized Y value must be between 0 and 255')
            this.valueRangeCheck(i, -128, 128, 'Normalized I value must be between -128 and 128')
            this.valueRangeCheck(q, -128, 128, 'Normalized Q value must be between -128 and 128')
        }
        else {
            this.valueRangeCheck(y, 0, 1, 'Non-normalized Y value must be between 0 and 1')
            this.valueRangeCheck(i, -0.5957, 0.5957, 'Non-normalized I value must be between -0.5957 and 0.5957')
            this.valueRangeCheck(q, -0.5226, 0.5226, 'Non-normalized Q value must be between -0.5226 and 0.5226')
        }
        this.y = y
        this.i = i
        this.q = q
        this.normalized = normalized
    }

    to(type:string, args?: newColorArgs) : colorType {
        args = super.setArgs(args)
        switch (type) {
            case 'rgb':
                return Convert.yiq2rgb(this, args.round, args.bitDepth)
            case 'hex':
                return Convert.rgb2hex(Convert.yiq2rgb(this))
            case 'rec709':
            case 'rgb709':
            case 'rec709rgb':
            case 'rgbrec709':
                if (typeof args.bitDepth == 'undefined') args.bitDepth = 10
                return Convert.rgb2rec709rgb(Convert.yiq2rgb(this, false), args.round, args.bitDepth)
            case 'rec2020':
            case 'rgb2020':
            case 'rec2020rgb':
            case 'rgbrec2020':
                if (typeof args.bitDepth == 'undefined') args.bitDepth = 10
                return Convert.rgb2rec2020rgb(Convert.yiq2rgb(this, false), args.round, args.bitDepth)
            case 'hsv':
                return Convert.rgb2hsv(Convert.yiq2rgb(this, false), args.round)
            case 'hsl':
                return Convert.rgb2hsl(Convert.yiq2rgb(this, false), args.round)
            case 'hsi':
                return Convert.rgb2hsi(Convert.yiq2rgb(this, false), args.round)
            case 'cmyk':
                return Convert.rgb2cmyk(Convert.yiq2rgb(this, false), args.round)
            case 'yiq':
                return this
            case 'xyz':
                return Convert.rgb2xyz(Convert.yiq2rgb(this, false), args.colorSpace, args.referenceWhite)
            default:
                throw new Error('Unable to find conversion path')
        }
    }
}

export class xyz extends colorType {
    x: number
    y: number
    z: number
    colorSpace: string
    referenceWhite: string

    constructor(x: number, y:number, z:number, colorSpace: string = 'srgb', referenceWhite: string = 'd65') {
        super()
        this.valueRangeCheck(x, 0, 1, 'XYZ values must be between 0 and 1')
        this.valueRangeCheck(y, 0, 1, 'XYZ values must be between 0 and 1')
        this.valueRangeCheck(z, 0, 1, 'XYZ values must be between 0 and 1')
        this.x = x
        this.y = y
        this.z = z
        // error handling of the following two properties handled in conversion
        this.colorSpace = colorSpace
        this.referenceWhite = referenceWhite
    }

    to(type:string, args?: newColorArgs) : colorType {
        args = super.setArgs(args)
        switch (type) {
            case 'rgb':
                return Convert.xyz2rgb(this, args.round, args.bitDepth)
            case 'hex':
                return Convert.rgb2hex(Convert.xyz2rgb(this))
            case 'rec709':
            case 'rgb709':
            case 'rec709rgb':
            case 'rgbrec709':
                if (typeof args.bitDepth == 'undefined') args.bitDepth = 10
                return Convert.rgb2rec709rgb(Convert.xyz2rgb(this, false), args.round, args.bitDepth)
            case 'rec2020':
            case 'rgb2020':
            case 'rec2020rgb':
            case 'rgbrec2020':
                if (typeof args.bitDepth == 'undefined') args.bitDepth = 10
                return Convert.rgb2rec2020rgb(Convert.xyz2rgb(this, false), args.round, args.bitDepth)
            case 'hsv':
                return Convert.rgb2hsv(Convert.xyz2rgb(this, false), args.round)
            case 'hsl':
                return Convert.rgb2hsl(Convert.xyz2rgb(this, false), args.round)
            case 'hsi':
                return Convert.rgb2hsi(Convert.xyz2rgb(this, false), args.round)
            case 'cmyk':
                return Convert.rgb2cmyk(Convert.xyz2rgb(this, false), args.round)
            case 'yiq':
                return Convert.rgb2yiq(Convert.xyz2rgb(this, false), args.normalize, args.round)
            case 'xyz':
                return this
            default:
                throw new Error('Unable to find conversion path')
        }
    }
}

export class xyy extends colorType {
    x: number
    y: number
    yy: number
    colorSpace: string
    referenceWhite: string

    constructor(x: number, y:number, yy:number, colorSpace: string, referenceWhite: string) {
        super()
        this.x = x
        this.y = y
        this.yy = yy
        this.colorSpace = colorSpace
        this.referenceWhite = referenceWhite
    }
}

export class lab extends colorType {
    l: number
    a: number
    b: number
    colorSpace: string
    referenceWhite: string

    /**
     * 
     * @param {number} l  0-1
     * @param {number} a  unbounded, but typically clamped at -128 and 127
     * @param {number} b  unbounded, but typically clamped at -128 and 127
     * @param {string} colorSpace 
     * @param {string} referenceWhite 
     */
    constructor(l: number, a:number, b:number, colorSpace: string, referenceWhite: string) {
        super()
        this.valueRangeCheck(l, 0, 100)
        this.l = l
        this.a = a
        this.b = b
        this.colorSpace = colorSpace
        this.referenceWhite = referenceWhite
    }
}

export class luv extends colorType {
    l: number
    u: number
    v: number
    colorSpace: string
    referenceWhite: string

    /**
     * 
     * @param {number} l    0-100
     * @param {number} u -100-100
     * @param {number} v -100-100
     * @param {string} colorSpace 
     * @param {string} referenceWhite
     */
    constructor(l: number, u:number, v:number, colorSpace: string, referenceWhite: string) {
        super()
        this.valueRangeCheck(l, 0, 100)
        this.valueRangeCheck(u, -100, 100)
        this.valueRangeCheck(v, -100, 100)
        this.l = l
        this.u = u
        this.v = v
        this.colorSpace = colorSpace
        this.referenceWhite = referenceWhite
    }
}

export class ypbpr extends colorType {
    y: number
    pb: number
    pr: number

    constructor(y: number, pb:number, pr:number) {
        super()
        this.valueRangeCheck(y, 0, 1)
        this.valueRangeCheck(pb, -0.5, 0.5)
        this.valueRangeCheck(pr, -0.5, 0.5)
        this.y = y
        this.pb = pb
        this.pr = pr
    }
}

export class ycbcr extends colorType {
    y: number
    cb: number
    cr: number

    constructor(y: number, cb:number, cr:number) {
        super()
        this.y = y
        this.cb = cb
        this.cr = cr
    }
}

export class nm extends colorType {
    wavelength: number

    constructor(wavelength: number) {
        super()
        this.valueRangeCheck(wavelength, 200, 800)
        this.wavelength = wavelength
    }
}

export class kelvin extends colorType {
    k: number

    constructor(k: number) {
        super()
        this.valueRangeCheck(k, 1000, 40000)
        this.k = k
    }
}