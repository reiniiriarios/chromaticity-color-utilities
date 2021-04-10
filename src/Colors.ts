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
import Harmony from './Harmony';

export interface newColorArgs {
    round?: boolean
    bitDepth?: number
    bitRate?: number
    normalize?: boolean
    colorSpace?: string
    referenceWhite?: string
    kb?: number
    kr?: number
    pb?: number
    pr?: number
    yLower?: number
    yUpper?: number
    cLower?: number
    cUpper?: number
    gamma?: number
}

export interface allColorProps {
    bitDepth?: number
    normalized?: boolean
    colorSpace?: string
    referenceWhite?: string
    kb?: number
    kr?: number
    pb?: number
    pr?: number
    pg?: number
    yLower?: number
    yUpper?: number
    cLower?: number
    cUpper?: number
    gamma?: number
}

export interface modifyArgs {
    method?: string
    with?: colorType
    amount?: number
    round?: boolean
}

export interface schemeArgs {
    angle?: number
}

export abstract class colorType {
    constructor() {}
    
    bitDepth?: number
    normalized?: boolean
    colorSpace?: string
    referenceWhite?: string
    kb?: number
    kr?: number
    yLower?: number
    yUpper?: number
    cLower?: number
    cUpper?: number
    gamma?: number

    a?: number

    public to(type:string, args?: newColorArgs) : colorType|any {
        args = this.setArgs(args)
        type = type.toLowerCase().replace(/[^a-z0-9]/,'')
        switch (type) {
            case 'rgb':
            case 'rgba':
                return this.torgb(args)
            case 'hex':
                return this.tohex(args)
            case 'rec709':
            case 'rgb709':
            case 'rec709rgb':
            case 'rgbrec709':
                return this.torec709(args)
            case 'rec2020':
            case 'rgb2020':
            case 'rec2020rgb':
            case 'rgbrec2020':
                return this.torec2020(args)
            case 'hsv':
            case 'hsva':
                return this.tohsv(args)
            case 'hsl':
            case 'hsla':
                return this.tohsl(args)
            case 'hsi':
            case 'hsia':
                return this.tohsi(args)
            case 'hsp':
            case 'hspa':
            case 'hspb':
            case 'hspba':
                return this.tohsp(args)
            case 'cmyk':
                return this.tocmyk(args)
            case 'yiq':
                return this.toyiq(args)
            case 'xyz':
                return this.toxyz(args)
            case 'xyy':
                return this.toxyy(args)
            case 'lab':
                return this.tolab(args)
            case 'luv':
                return this.toluv(args)
            case 'ypbpr':
                return this.toypbpr(args)
            case 'ycbcr':
                return this.toycbcr(args)
            default:
                throw new Error('Unable to find conversion path')
        }
    }

    public modify(modification:string, args?: modifyArgs) : colorType {
        if (typeof args == 'undefined') args = {}
        let og = this.constructor['name']
        let ogargs : allColorProps = {
            bitDepth: this.bitDepth,
            normalized: this.normalized,
            colorSpace: this.colorSpace,
            referenceWhite: this.referenceWhite,
            kb: this.kb,
            kr: this.kr,
            yLower: this.yLower,
            yUpper: this.yUpper,
            cLower: this.cLower,
            cUpper: this.cUpper,
            gamma: this.gamma
        }
        let ogalpha : boolean|number = (typeof this.a == 'undefined' ? false : this.a)
        let modified: colorType
        switch (modification) {
            case 'blend':
                if (typeof args.with === 'undefined') {
                    throw new Error('Missing second color to blend with')
                }
                if (typeof args.method === 'undefined') {
                    args.method = 'rgb'
                }
                let tmpColor1, tmpColor2
                switch (args.method) {
                    case 'rgb':
                    case 'rgba':
                    case 'hex':
                        tmpColor1 = this.torgb({ round: false })
                        tmpColor2 = args.with.torgb({ round: false })
                        modified = Modify.rgbBlend(tmpColor1, tmpColor2, args.amount)
                        break
                    case 'hsv':
                    case 'hsva':
                        tmpColor1 = this.tohsv({ round: false })
                        tmpColor2 = args.with.tohsv({ round: false })
                        modified = Modify.hsvBlend(tmpColor1, tmpColor2, args.amount)
                        break
                    default:
                        throw new Error('Unrecognized blending method')
                }
            case 'darken':
            case 'darker':
                if (typeof args.method === 'undefined') {
                    args.method = 'hsl'
                }
                switch (args.method) {
                    case 'hsl':
                    case 'hsla':
                    case 'lightness':
                        modified = Modify.hslDarken(this.tohsl({ round: false }), args.amount, args.round)
                        break
                    case 'hsp':
                    case 'hspa':
                    case 'brightness':
                    case 'perceived brightness':
                    case 'perceived':
                    case 'perceivedbrightness':
                        modified = Modify.hspDarken(this.tohsp({ round: false }), args.amount, args.round)
                        break
                    default:
                        throw new Error('Unrecognized darken method')
                }
                break
            case 'lighten':
            case 'lighter':
                if (typeof args.method === 'undefined') {
                    args.method = 'hsl'
                }
                switch (args.method) {
                    case 'hsl':
                    case 'hsla':
                    case 'lightness':
                        modified = Modify.hslLighten(this.tohsl({ round: false }), args.amount, args.round)
                        break
                    case 'hsp':
                    case 'hspa':
                    case 'brightness':
                    case 'perceived brightness':
                    case 'perceived':
                    case 'perceivedbrightness':
                        modified = Modify.hspLighten(this.tohsp({ round: false }), args.amount, args.round)
                        break
                    default:
                        throw new Error('Unrecognized lighten method')
                }
                break
            case 'desaturate':
            case 'desat':
                if (typeof args.method === 'undefined') {
                    args.method = 'hsl'
                }
                switch (args.method) {
                    case 'hsv':
                    case 'hsva':
                    case 'value':
                        modified = Modify.hsvDesaturate(this.tohsv({ round: false }), args.amount, args.round)
                        break
                    case 'hsl':
                    case 'hsla':
                    case 'lightness':
                        modified = Modify.hslDesaturate(this.tohsl({ round: false }), args.amount, args.round)
                        break
                    default:
                        throw new Error('Unrecognized desaturate method')
                }
                break
            case 'saturate':
            case 'sat':
                if (typeof args.method === 'undefined') {
                    args.method = 'hsl'
                }
                switch (args.method) {
                    case 'hsv':
                    case 'hsva':
                    case 'value':
                        modified = Modify.hsvSaturate(this.tohsv({ round: false }), args.amount, args.round)
                        break
                    case 'hsl':
                    case 'hsla':
                    case 'lightness':
                        modified = Modify.hslSaturate(this.tohsl({ round: false }), args.amount, args.round)
                        break
                    default:
                        throw new Error('Unrecognized saturate method')
                }
                break
            default:
                throw new Error('Unrecognized modify action')
        }

        let ogModified = modified.to(og, ogargs)
        if (ogalpha) ogModified.a = ogalpha // otherwise this gets lost on some modifications

        return ogModified
    }

    public scheme(type:string, args?: schemeArgs) : colorType[] {
        if (typeof args === 'undefined') args = {}
        let og = this.constructor['name']
        let hsv = this.to('hsv', { round: false })
        let hsvScheme: colorType[]
        type = type.toLowerCase()
        switch (type) {
            case 'complement':
            case 'comp':
                hsvScheme = Harmony.complement(hsv)
                break
            case 'analogous':
                hsvScheme = Harmony.analogous(hsv, args.angle)
                break
            case 'split complement':
            case 'splitcomplement':
            case 'split':
                hsvScheme = Harmony.splitComplement(hsv, args.angle)
                break
            case 'triadic':
            case 'triad':
            case 'triangle':
                hsvScheme = Harmony.triadic(hsv, args.angle)
                break
            case 'tetradic':
            case 'tetrad':
                hsvScheme = Harmony.tetradic(hsv, args.angle)
                break
            case 'square':
                hsvScheme = Harmony.square(hsv)
                break
            default:
                throw new Error('Unrecognized color scheme')
        }
        let ogScheme: colorType[] = []
        hsvScheme.forEach(color => {
            ogScheme.push(color.to(og))
        })
        return ogScheme
    }

    public css() : string {
        return 'not yet implemented'
    }

    protected torgb(args: newColorArgs) : rgb { // always override
        let rgbOverridden = new rgb(0, 0, 0)
        return rgbOverridden
    }

    protected torec709(args: newColorArgs) : rec709rgb {
        if (typeof args.bitRate !== 'undefined') args.bitDepth = args.bitRate
        else if (typeof args.bitDepth === 'undefined') args.bitDepth = 8
        let rgb = this.torgb(args)
        return Convert.rgb2rec709rgb(rgb, args.round, args.bitDepth)
    }
    protected torec2020(args: newColorArgs) : rec2020rgb {
        if (typeof args.bitRate !== 'undefined') args.bitDepth = args.bitRate
        else if (typeof args.bitDepth === 'undefined') args.bitDepth = 10
        let rgb = this.torgb(args)
        return Convert.rgb2rec2020rgb(rgb, args.round, args.bitDepth)
    }
    protected tohex(args: newColorArgs) : hex {
        let rgb = this.torgb(args)
        return Convert.rgb2hex(rgb)
    }
    protected tohsv(args: newColorArgs) : hsv {
        let rgb = this.torgb(args)
        return Convert.rgb2hsv(rgb, args.round)
    }
    protected tohsl(args: newColorArgs) : hsl {
        let rgb = this.torgb(args)
        return Convert.rgb2hsl(rgb, args.round)
    }
    protected tohsi(args: newColorArgs) : hsi {
        let rgb = this.torgb(args)
        return Convert.rgb2hsi(rgb, args.round)
    }
    protected tohsp(args: newColorArgs) : hsp {
        let rgb = this.torgb(args)
        return Convert.rgb2hsp(rgb, args.round, args.pb, args.pr)
    }
    protected tocmyk(args: newColorArgs) : cmyk {
        let rgb = this.torgb(args)
        return Convert.rgb2cmyk(rgb, args.round)
    }
    protected toyiq(args: newColorArgs) : yiq {
        let rgb = this.torgb(args)
        return Convert.rgb2yiq(rgb, args.normalize, args.round)
    }
    protected toxyz(args: newColorArgs) : xyz {
        let rgb = this.torgb(args)
        return Convert.rgb2xyz(rgb, args.colorSpace, args.referenceWhite)
    }
    protected toxyy(args: newColorArgs) : xyy {
        return Convert.xyz2xyy(this.toxyz(args))
    }
    protected tolab(args: newColorArgs) : lab {
        return Convert.xyz2lab(this.toxyz(args))
    }
    protected toluv(args: newColorArgs) : luv {
        return Convert.xyz2luv(this.toxyz(args))
    }
    protected toypbpr(args: newColorArgs) : ypbpr {
        if (typeof args.kb === 'undefined' || typeof args.kr === 'undefined') {
            throw new Error('Missing arguments kb and kr')
        }
        let rgb = this.torgb(args)
        return Convert.rgb2ypbpr(rgb, args.kb, args.kr)
    }
    protected toycbcr(args: newColorArgs) : ycbcr {
        if (typeof args.kb === 'undefined' || typeof args.kr === 'undefined') {
            throw new Error('Missing arguments kb and kr')
        }
        let rgb = this.torgb(args)
        return Convert.rgb2ycbcr(rgb, args.kb, args.kr)
    }

    protected setArgs(args?: newColorArgs) : newColorArgs {
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
    protected valueRangeCheck(value: number, lowerLimit: number | boolean, upperLimit: number | boolean, msg?: string) : void {
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
}

export class hex extends colorType {
    hex: string

    constructor(hex: string|number) {
        super()
        
        if (typeof hex === 'string') {
            if (hex.charAt(0) == '#') {
                hex = hex.substr(1);
            }
            if (!/[0-9A-Fa-f]/g.test(hex)) {
                throw new Error('Invalid hex value')
            }
            if (hex.length == 3) {
                hex = hex.split('').map(hex => { return hex + hex; }).join('')
            }
            else if (hex.length != 6) {
                throw new Error('Invalid hex value')
            }
            this.hex = hex
        }
        else {
            this.hex = hex.toString(16).slice(1)
        }
    }

    protected torgb(args: newColorArgs) : rgb {
        return Convert.hex2rgb(this)
    }

    protected tohex(args: newColorArgs) : hex {
        return this
    }
}

export class rgbNormalized extends colorType {
    r: number
    g: number
    b: number
    a: number
    gamma?: number

    constructor(r: number, g: number, b: number, a: number = 1, gamma?: number) {
        super()
        this.valueRangeCheck(r, 0, 1)
        this.valueRangeCheck(g, 0, 1)
        this.valueRangeCheck(b, 0, 1)
        this.valueRangeCheck(a, 0, 1)
        this.r = r
        this.g = g
        this.b = b
        this.a = a
        if (typeof gamma !== 'undefined') {
            this.valueRangeCheck(gamma, 0, false)
            this.gamma = gamma
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

    protected torgb(args: newColorArgs) : rgb {
        return this
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
        // this.valueRangeCheck(r, 0, max)
        // this.valueRangeCheck(g, 0, max)
        // this.valueRangeCheck(b, 0, max)
        if (typeof a == 'undefined') a = max
        else this.valueRangeCheck(a, 0, max)
        this.r = r
        this.g = g
        this.b = b
        this.a = a
        this.bitDepth = bitDepth
        this.max = max
    }

    protected torgb(args: newColorArgs) : rgb {
        return Convert.rec709rgb2rgb(this, args.round, args.bitDepth)
    }

    protected torec709(args: newColorArgs) : rec709rgb {
        return this
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
        // this.valueRangeCheck(r, 0, max)
        // this.valueRangeCheck(g, 0, max)
        // this.valueRangeCheck(b, 0, max)
        if (typeof a == 'undefined') a = max
        else this.valueRangeCheck(a, 0, max)
        this.r = r
        this.g = g
        this.b = b
        this.a = a
        this.bitDepth = bitDepth
        this.max = max
    }

    protected torgb(args: newColorArgs) : rgb {
        return Convert.rec2020rgb2rgb(this, args.round, args.bitDepth)
    }

    protected torec2020(args: newColorArgs) : rec2020rgb {
        return this
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

    protected torgb(args: newColorArgs) : rgb {
        return Convert.hsv2rgb(this, args.round, args.bitDepth)
    }

    protected tohsv(args: newColorArgs) : hsv {
        return this
    }

    protected tohsl(args: newColorArgs) : hsl {
        return Convert.hsv2hsl(this, args.round)
    }

    protected tohsi(args: newColorArgs) : hsi {
        return Convert.hsv2hsi(this, args.round)
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

    protected torgb(args: newColorArgs) : rgb {
        return Convert.hsl2rgb(this, args.round, args.bitDepth)
    }

    protected tohsv(args: newColorArgs) : hsv {
        return Convert.hsl2hsv(this, args.round)
    }

    protected tohsl(args: newColorArgs) : hsl {
        return this
    }

    protected tohsi(args: newColorArgs) : hsi {
        return Convert.hsl2hsi(this, args.round)
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

    protected torgb(args: newColorArgs) : rgb {
        return Convert.hsi2rgb(this, args.round, args.bitDepth)
    }

    protected tohsv(args: newColorArgs) : hsv {
        return Convert.hsi2hsv(this, args.round)
    }

    protected tohsl(args: newColorArgs) : hsl {
        return Convert.hsi2hsl(this, args.round)
    }

    protected tohsi(args: newColorArgs) : hsi {
        return this
    }
}

export class hsp extends colorType {
    h: number
    s: number
    p: number
    a: number
    pr: number
    pg: number
    pb: number

    constructor(h: number, s: number, p: number, a: number = 100, pb: number = 0.114, pr: number = 0.299) {
        super()
        this.valueRangeCheck(h, 0, 360)
        this.valueRangeCheck(s, 0, 100)
        this.valueRangeCheck(p, 0, 100)
        this.valueRangeCheck(a, 0, 100)
        if (pr + pb > 1) {
            throw new Error('Pr + Pg + Pb must = 1')
        }
        this.h = h
        this.s = s
        this.p = p
        this.a = a
        this.pr = pr
        this.pg = 1 - pr - pb
        this.pb = pb
    }

    protected torgb(args: newColorArgs) : rgb {
        return Convert.hsp2rgb(this, args.round, args.bitDepth)
    }

    protected tohsb(args: newColorArgs) : hsp {
        return this
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

    protected torgb(args: newColorArgs) : rgb {
        return Convert.cmyk2rgb(this, args.round, args.bitDepth)
    }

    protected tocmyk(args: newColorArgs) : cmyk {
        return this
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

    protected torgb(args: newColorArgs) : rgb {
        return Convert.yiq2rgb(this, args.round, args.bitDepth)
    }

    protected toyiq(args: newColorArgs) : yiq {
        return this
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

    protected torgb(args: newColorArgs) : rgb {
        return Convert.xyz2rgb(this, args.round, args.bitDepth)
    }

    protected toxyz(args: newColorArgs) : xyz {
        return this
    }
}

export class xyy extends colorType {
    x: number
    y: number
    yy: number
    colorSpace: string
    referenceWhite: string

    constructor(x: number, y:number, yy:number, colorSpace: string = 'srgb', referenceWhite: string = 'd65') {
        super()
        this.x = x
        this.y = y
        this.yy = yy
        this.colorSpace = colorSpace
        this.referenceWhite = referenceWhite
    }

    protected torgb(args: newColorArgs) : rgb {
        return Convert.xyz2rgb(this.toxyz(args), args.round, args.bitDepth)
    }

    protected toxyz(args: newColorArgs) : xyz {
        return Convert.xyy2xyz(this)
    }

    protected toxyy(args: newColorArgs) : xyy {
        return this
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
    constructor(l: number, a:number, b:number, colorSpace: string = 'srgb', referenceWhite: string = 'd65') {
        super()
        this.valueRangeCheck(l, 0, 100)
        this.l = l
        this.a = a
        this.b = b
        this.colorSpace = colorSpace
        this.referenceWhite = referenceWhite
    }

    protected torgb(args: newColorArgs) : rgb {
        return Convert.xyz2rgb(this.toxyz(args), args.round, args.bitDepth)
    }

    protected toxyz(args: newColorArgs) : xyz {
        return Convert.lab2xyz(this)
    }

    protected tolab(args: newColorArgs) : lab {
        return this
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
    constructor(l: number, u:number, v:number, colorSpace: string = 'srgb', referenceWhite: string = 'd65') {
        super()
        this.valueRangeCheck(l, 0, 100)
        // this.valueRangeCheck(u, -100, 100)
        // this.valueRangeCheck(v, -100, 100)
        this.l = l
        this.u = u
        this.v = v
        this.colorSpace = colorSpace
        this.referenceWhite = referenceWhite
    }

    protected torgb(args: newColorArgs) : rgb {
        return Convert.xyz2rgb(this.toxyz(args), args.round, args.bitDepth)
    }

    protected toxyz(args: newColorArgs) : xyz {
        return Convert.luv2xyz(this)
    }

    protected toluv(args: newColorArgs) : luv {
        return this
    }
}

export class ypbpr extends colorType {
    y: number
    pb: number
    pr: number
    kb: number
    kr: number

    constructor(y: number, pb:number, pr:number, kb: number, kr: number) {
        super()
        this.valueRangeCheck(y, 0, 1)
        this.valueRangeCheck(pb, -0.5, 0.5)
        this.valueRangeCheck(pr, -0.5, 0.5)
        this.y = y
        this.pb = pb
        this.pr = pr
        this.kb = kb
        this.kr = kr
    }

    protected torgb(args: newColorArgs) : rgb {
        if (typeof args.kb === 'undefined' || typeof args.kr === 'undefined') {
            throw new Error('Missing arguments kb and kr')
        }
        return Convert.ypbpr2rgb(this, args.kb, args.kr, args.round, args.bitDepth)
    }

    protected toypbpr(args: newColorArgs) : ypbpr {
        return this
    }

    protected toycbcr(args: newColorArgs) : ycbcr {
        if (typeof args.yLower === 'undefined' || typeof args.yUpper === 'undefined' || typeof args.cLower === 'undefined' || typeof args.cUpper === 'undefined') {
            throw new Error('Missing arguments yLower, yUpper, cLower, cUpper')
        }
        return Convert.ypbpr2ycbcr(this, args.yLower, args.yUpper, args.cLower, args.cUpper, args.round)
    }
}

export class ycbcr extends colorType {
    y: number
    cb: number
    cr: number
    yLower: number
    yUpper: number
    cLower: number
    cUpper: number

    constructor(y: number, cb:number, cr:number, yLower?: number, yUpper?: number, cLower?: number, cUpper?: number) {
        super()
        this.y = y
        this.cb = cb
        this.cr = cr
        if (typeof yLower === 'undefined') yLower = 16
        if (typeof yUpper === 'undefined') yUpper = 235
        if (typeof cLower === 'undefined') cLower = 16
        if (typeof cUpper === 'undefined') cUpper = 240
        this.yLower = yLower
        this.yUpper = yUpper
        this.cLower = cLower
        this.cUpper = cUpper
    }

    protected torgb(args: newColorArgs) : rgb {
        if (typeof args.kb === 'undefined' || typeof args.kr === 'undefined') {
            throw new Error('Missing arguments kb and kr')
        }
        return Convert.ypbpr2rgb(this.toypbpr(args), args.kb, args.kr, args.round, args.bitDepth)
    }

    protected toypbpr(args: newColorArgs) : ypbpr {
        if (typeof args.kb === 'undefined' || typeof args.kr === 'undefined') {
            throw new Error('Missing arguments kb and kr')
        }
        return Convert.ycbcr2ypbpr(this, args.kb, args.kr)
    }

    protected toycbcr(args: newColorArgs) : ycbcr {
        return this
    }
}

export class nm extends colorType {
    wavelength: number

    constructor(wavelength: number) {
        super()
        this.valueRangeCheck(wavelength, 200, 800, 'Wavelength (in nm) must fall between 200 and 800')
        this.wavelength = wavelength
    }

    protected torgb(args: newColorArgs) : rgb {
        return Convert.nm2rgb(this, args.gamma, args.round, args.bitDepth)
    }
}

export class kelvin extends colorType {
    k: number

    constructor(k: number) {
        super()
        this.valueRangeCheck(k, 1000, 40000, 'Temperature must fall between 1000 and 40000')
        this.k = k
    }

    protected torgb(args: newColorArgs) : rgb {
        return Convert.kelvin2rgb(this, args.round, args.bitDepth)
    }
}