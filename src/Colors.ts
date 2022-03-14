// chromaticity-color-utilities
// Copyright (C) 2022 Emma Litwa-Vulcu
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

import Convert from './Convert'
import { newColorArgs, colorType } from './ColorType'

export class rgbNormalized extends colorType {
  protected type: string = 'rgbNormalized'

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

  protected toStringValues = (): object => ({
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a,
      gamma: this.gamma
  })
}

export class hex extends colorType {
  protected type: string = 'hex'

  hex: string

  constructor(hex: string | number) {
    super()

    if (typeof hex === 'string') {
      if (hex.charAt(0) == '#') {
        hex = hex.substring(1)
      }
      if (!/[0-9A-Fa-f]/g.test(hex)) {
        throw new Error('Invalid hex value')
      }
      if (hex.length == 3) {
        hex = hex
          .split('')
          .map((hex) => {
            return hex + hex
          })
          .join('')
      } else if (hex.length != 6) {
        throw new Error('Invalid hex value')
      }
      this.hex = hex
    } else {
      this.hex = hex.toString(16)
    }
  }

  protected toStringValues = (): object => ({
      hex: this.hex
  })

  protected torgb(args: newColorArgs): rgb {
    return Convert.hex2rgb(this, args.bitDepth)
  }

  protected tohex(args: newColorArgs): hex {
    return this
  }
}

export class rgb extends colorType {
  protected type: string = 'rgb'

  r: number
  g: number
  b: number
  a: number
  bitDepth: number
  max: number

  constructor(
    r: number,
    g: number,
    b: number,
    a?: number,
    bitDepth: number = 8
  ) {
    super()
    this.valueRangeCheck(
      bitDepth,
      1,
      false,
      'Bit depth must be a positive number greater than 1'
    )
    let max = 2 ** bitDepth - 1
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

  protected toStringValues = (): object => ({
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a,
      bitDepth: this.bitDepth
  })

  protected torgb(args: newColorArgs): rgb {
    if (args.round !== false) {
      this.r = Math.round(this.r)
      this.g = Math.round(this.g)
      this.b = Math.round(this.b)
      this.a = Math.round(this.a)
    }
    return this
  }
}

export class rec709rgb extends colorType {
  protected type: string = 'rec709rgb'

  r: number
  g: number
  b: number
  a: number
  bitDepth: number
  max: number

  constructor(
    r: number,
    g: number,
    b: number,
    a?: number,
    bitDepth: number = 8
  ) {
    super()
    if (bitDepth != 8 && bitDepth != 10) {
      throw new Error('Invalid bitrate for Rec709, must be 8 or 10')
    }
    let max = 2 ** bitDepth - 1
    // this.valueRangeCheck(r, 0, max)
    // this.valueRangeCheck(g, 0, max)
    // this.valueRangeCheck(b, 0, max)
    if (typeof r == 'undefined') throw new Error('r undefined')
    if (typeof g == 'undefined') throw new Error('g undefined')
    if (typeof b == 'undefined') throw new Error('b undefined')
    if (typeof a == 'undefined') a = max
    else this.valueRangeCheck(a, 0, max)
    this.r = r
    this.g = g
    this.b = b
    this.a = a
    this.bitDepth = bitDepth
    this.max = max
  }

  protected toStringValues = (): object => ({
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a,
      bitDepth: this.bitDepth
  })

  protected torgb(args: newColorArgs): rgb {
    return Convert.rec709rgb2rgb(this, args.round, args.bitDepth)
  }

  protected torec709(args: newColorArgs): rec709rgb {
    if (args.round !== false) {
      this.r = Math.round(this.r)
      this.g = Math.round(this.g)
      this.b = Math.round(this.b)
      this.a = Math.round(this.a)
    }
    return this
  }
}

export class rec2020rgb extends colorType {
  protected type: string = 'rec2020rgb'

  r: number
  g: number
  b: number
  a: number
  bitDepth: number
  max: number

  constructor(
    r: number,
    g: number,
    b: number,
    a?: number,
    bitDepth: number = 10
  ) {
    super()
    if (bitDepth != 10 && bitDepth != 12) {
      throw new Error('Invalid bitrate for Rec2020, must be 10 or 12')
    }
    let max = 2 ** bitDepth - 1
    // this.valueRangeCheck(r, 0, max)
    // this.valueRangeCheck(g, 0, max)
    // this.valueRangeCheck(b, 0, max)
    if (typeof r == 'undefined') throw new Error('r undefined')
    if (typeof g == 'undefined') throw new Error('g undefined')
    if (typeof b == 'undefined') throw new Error('b undefined')
    if (typeof a == 'undefined') a = max
    else this.valueRangeCheck(a, 0, max)
    this.r = r
    this.g = g
    this.b = b
    this.a = a
    this.bitDepth = bitDepth
    this.max = max
  }

  protected toStringValues = (): object => ({
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a,
      bitDepth: this.bitDepth
  })

  protected torgb(args: newColorArgs): rgb {
    return Convert.rec2020rgb2rgb(this, args.round, args.bitDepth)
  }

  protected torec2020(args: newColorArgs): rec2020rgb {
    if (args.round !== false) {
      this.r = Math.round(this.r)
      this.g = Math.round(this.g)
      this.b = Math.round(this.b)
      this.a = Math.round(this.a)
    }
    return this
  }
}

export class hsv extends colorType {
  protected type: string = 'hsv'

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

  protected toStringValues = (): object => ({
      h: this.h,
      s: this.s,
      v: this.v,
      a: this.a
  })

  protected torgb(args: newColorArgs): rgb {
    return Convert.hsv2rgb(this, args.round, args.bitDepth)
  }

  protected tohsv(args: newColorArgs): hsv {
    if (args.round !== false) {
      this.h = Math.round(this.h)
      this.s = Math.round(this.s)
      this.v = Math.round(this.v)
      this.a = Math.round(this.a)
    }
    return this
  }

  protected tohsl(args: newColorArgs): hsl {
    return Convert.hsv2hsl(this, args.round)
  }

  // protected tohsi(args: newColorArgs): hsi {
  //   return Convert.hsv2hsi(this, args.round)
  // }
}

export class hsl extends colorType {
  protected type: string = 'hsl'

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

  protected toStringValues = (): object => ({
      h: this.h,
      s: this.s,
      l: this.l,
      a: this.a
  })

  protected torgb(args: newColorArgs): rgb {
    return Convert.hsl2rgb(this, args.round, args.bitDepth)
  }

  protected tohsv(args: newColorArgs): hsv {
    return Convert.hsl2hsv(this, args.round)
  }

  protected tohsl(args: newColorArgs): hsl {
    if (args.round !== false) {
      this.h = Math.round(this.h)
      this.s = Math.round(this.s)
      this.l = Math.round(this.l)
      this.a = Math.round(this.a)
    }
    return this
  }

  // protected tohsi(args: newColorArgs): hsi {
  //   return Convert.hsl2hsi(this, args.round)
  // }
}

export class hsi extends colorType {
  protected type: string = 'hsi'

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

  protected toStringValues = (): object => ({
      h: this.h,
      s: this.s,
      i: this.i,
      a: this.a
  })

  protected torgb(args: newColorArgs): rgb {
    return Convert.hsi2rgb(this, args.round, args.bitDepth)
  }

  // protected tohsv(args: newColorArgs): hsv {
  //   return Convert.hsi2hsv(this, args.round)
  // }

  // protected tohsl(args: newColorArgs): hsl {
  //   return Convert.hsi2hsl(this, args.round)
  // }

  protected tohsi(args: newColorArgs): hsi {
    if (args.round !== false) {
      this.h = Math.round(this.h)
      this.s = Math.round(this.s)
      this.i = Math.round(this.i)
      this.a = Math.round(this.a)
    }
    return this
  }
}

export class hsp extends colorType {
  protected type: string = 'hsp'

  h: number
  s: number
  p: number
  a: number
  pr: number
  pg: number
  pb: number

  constructor(
    h: number,
    s: number,
    p: number,
    a: number = 100,
    pb: number = 0.114,
    pr: number = 0.299
  ) {
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
    this.pb = pb
    this.pg = 1 - pr - pb
  }

  protected toStringValues = (): object => ({
      h: this.h,
      s: this.s,
      p: this.p,
      a: this.a,
      pb: this.pb,
      pr: this.pr
  })

  protected torgb(args: newColorArgs): rgb {
    return Convert.hsp2rgb(this, args.round, args.bitDepth)
  }

  protected tohsp(args: newColorArgs): hsp {
    if (args.round !== false) {
      this.h = Math.round(this.h)
      this.s = Math.round(this.s)
      this.p = Math.round(this.p)
      this.a = Math.round(this.a)
    }
    return this
  }
}

export class cmyk extends colorType {
  protected type: string = 'cmyk'

  c: number
  m: number
  y: number
  k: number

  constructor(c: number, m: number, y: number, k: number) {
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

  protected toStringValues = (): object => ({
    c: this.c,
    m: this.m,
    y: this.y,
    k: this.k,
  })

  protected torgb(args: newColorArgs): rgb {
    return Convert.cmyk2rgb(this, args.round, args.bitDepth)
  }

  protected tocmyk(args: newColorArgs): cmyk {
    if (args.round !== false) {
      this.c = Math.round(this.c)
      this.m = Math.round(this.m)
      this.y = Math.round(this.y)
      this.k = Math.round(this.k)
    }
    return this
  }
}

export class yiq extends colorType {
  protected type: string = 'yiq'

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
      this.valueRangeCheck(
        y,
        0,
        255,
        'Normalized Y value must be between 0 and 255'
      )
      this.valueRangeCheck(
        i,
        -128,
        128,
        'Normalized I value must be between -128 and 128'
      )
      this.valueRangeCheck(
        q,
        -128,
        128,
        'Normalized Q value must be between -128 and 128'
      )
    } else {
      this.valueRangeCheck(
        y,
        0,
        1,
        'Non-normalized Y value must be between 0 and 1'
      )
      this.valueRangeCheck(
        i,
        -0.5957,
        0.5957,
        'Non-normalized I value must be between -0.5957 and 0.5957'
      )
      this.valueRangeCheck(
        q,
        -0.5226,
        0.5226,
        'Non-normalized Q value must be between -0.5226 and 0.5226'
      )
    }
    this.y = y
    this.i = i
    this.q = q
    this.normalized = normalized
  }

  protected toStringValues = (): object => ({
    y: this.y,
    i: this.i,
    q: this.q,
    normalized: this.normalized,
  })

  protected torgb(args: newColorArgs): rgb {
    return Convert.yiq2rgb(this, args.round, args.bitDepth)
  }

  protected toyiq(args: newColorArgs): yiq {
    if (args.round !== false) {
      this.y = Math.round(this.y)
      this.i = Math.round(this.i)
      this.q = Math.round(this.q)
    }
    return this
  }
}

export class xyz extends colorType {
  protected type: string = 'xyz'

  x: number
  y: number
  z: number

  constructor(x: number, y: number, z: number) {
    super()
    // this.valueRangeCheck(x, 0, 1, 'XYZ values must be between 0 and 1')
    // this.valueRangeCheck(y, 0, 1, 'XYZ values must be between 0 and 1')
    // this.valueRangeCheck(z, 0, 1, 'XYZ values must be between 0 and 1')
    this.x = x
    this.y = y
    this.z = z
  }

  protected toStringValues = (): object => ({
    x: this.x,
    y: this.y,
    z: this.z,
  })

  protected torgb(args: newColorArgs): rgb {
    return Convert.xyz2rgb(
      this,
      args.colorSpace,
      args.referenceWhite,
      args.round,
      args.bitDepth
    )
  }

  protected toxyz(args: newColorArgs): xyz {
    return this
  }
}

export class xyy extends colorType {
  protected type: string = 'xyy'

  x: number
  y: number
  yy: number

  constructor(x: number, y: number, yy: number) {
    super()
    this.x = x
    this.y = y
    this.yy = yy
  }

  protected torgb(args: newColorArgs): rgb {
    return Convert.xyz2rgb(
      this.toxyz(args),
      args.colorSpace,
      args.referenceWhite,
      args.round,
      args.bitDepth
    )
  }

  protected toStringValues = (): object => ({
    x: this.x,
    y: this.y,
    yy: this.yy,
  })

  protected toxyz(args: newColorArgs): xyz {
    return Convert.xyy2xyz(this)
  }

  protected toxyy(args: newColorArgs): xyy {
    return this
  }
}

export class lab extends colorType {
  protected type: string = 'lab'

  l: number
  a: number
  b: number

  /**
   *
   * @param {number} l  0-100+
   * @param {number} a  unbounded, but typically clamped at -128 and 127
   * @param {number} b  unbounded, but typically clamped at -128 and 127
   */
  constructor(l: number, a: number, b: number) {
    super()
    this.valueRangeCheck(l, 0, false)
    if (typeof a === 'undefined') throw new Error('a undefined')
    if (typeof b === 'undefined') throw new Error('b undefined')
    this.l = l
    this.a = a
    this.b = b
  }

  protected toStringValues = (): object => ({
    l: this.l,
    a: this.a,
    b: this.b,
  })

  protected torgb(args: newColorArgs): rgb {
    return Convert.xyz2rgb(
      this.toxyz(args),
      args.colorSpace,
      args.referenceWhite,
      args.round,
      args.bitDepth
    )
  }

  protected toxyz(args: newColorArgs): xyz {
    return Convert.lab2xyz(this, args.referenceWhite)
  }

  protected tolab(args: newColorArgs): lab {
    if (args.round !== false) {
      this.l = Math.round(this.l)
      this.a = Math.round(this.a)
      this.b = Math.round(this.b)
    }
    return this
  }
}

export class luv extends colorType {
  protected type: string = 'luv'

  l: number
  u: number
  v: number

  /**
   *
   * @param {number} l    0-100
   * @param {number} u -100-100
   * @param {number} v -100-100
   */
  constructor(l: number, u: number, v: number) {
    super()
    this.valueRangeCheck(l, 0, 100)
    // this.valueRangeCheck(u, -100, 100)
    // this.valueRangeCheck(v, -100, 100)
    if (typeof u === 'undefined') throw new Error('u undefined')
    if (typeof v === 'undefined') throw new Error('v undefined')
    this.l = l
    this.u = u
    this.v = v
  }

  protected toStringValues = (): object => ({
    l: this.l,
    u: this.u,
    v: this.v,
  })

  protected torgb(args: newColorArgs): rgb {
    return Convert.xyz2rgb(
      this.toxyz(args),
      args.colorSpace,
      args.referenceWhite,
      args.round,
      args.bitDepth
    )
  }

  protected toxyz(args: newColorArgs): xyz {
    return Convert.luv2xyz(this, args.referenceWhite)
  }

  protected toluv(args: newColorArgs): luv {
    if (args.round !== false) {
      this.l = Math.round(this.l)
      this.u = Math.round(this.u)
      this.v = Math.round(this.v)
    }
    return this
  }
}

export class ypbpr extends colorType {
  protected type: string = 'ypbpr'

  y: number
  pb: number
  pr: number
  kb: number
  kr: number

  constructor(y: number, pb: number, pr: number, kb: number, kr: number) {
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

  protected toStringValues = (): object => ({
    y: this.y,
    pb: this.pb,
    pr: this.pr,
    kb: this.kb,
    kr: this.kr,
  })

  protected torgb(args: newColorArgs): rgb {
    if (typeof args.kb === 'undefined' || typeof args.kr === 'undefined') {
      throw new Error('Missing arguments kb and kr')
    }
    return Convert.ypbpr2rgb(this, args.kb, args.kr, args.round, args.bitDepth)
  }

  protected toypbpr(args: newColorArgs): ypbpr {
    return this
  }

  protected toycbcr(args: newColorArgs): ycbcr {
    if (
      typeof args.yLower === 'undefined' ||
      typeof args.yUpper === 'undefined' ||
      typeof args.cLower === 'undefined' ||
      typeof args.cUpper === 'undefined'
    ) {
      throw new Error('Missing arguments yLower, yUpper, cLower, cUpper')
    }
    return Convert.ypbpr2ycbcr(
      this,
      args.yLower,
      args.yUpper,
      args.cLower,
      args.cUpper,
      args.round
    )
  }
}

export class ycbcr extends colorType {
  protected type: string = 'ycbcr'

  y: number
  cb: number
  cr: number
  yLower: number
  yUpper: number
  cLower: number
  cUpper: number

  constructor(
    y: number,
    cb: number,
    cr: number,
    yLower?: number,
    yUpper?: number,
    cLower?: number,
    cUpper?: number
  ) {
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

  protected toStringValues = (): object => ({
    y: this.y,
    cb: this.cb,
    cr: this.cr,
    yLower: this.yLower,
    yUpper: this.yUpper,
    cLower: this.cLower,
    cUpper: this.cUpper,
  })

  protected torgb(args: newColorArgs): rgb {
    if (typeof args.kb === 'undefined' || typeof args.kr === 'undefined') {
      throw new Error('Missing arguments kb and kr')
    }
    return Convert.ypbpr2rgb(
      this.toypbpr(args),
      args.kb,
      args.kr,
      args.round,
      args.bitDepth
    )
  }

  protected toypbpr(args: newColorArgs): ypbpr {
    if (typeof args.kb === 'undefined' || typeof args.kr === 'undefined') {
      throw new Error('Missing arguments kb and kr')
    }
    return Convert.ycbcr2ypbpr(this, args.kb, args.kr)
  }

  protected toycbcr(args: newColorArgs): ycbcr {
    if (args.round !== false) {
      this.y = Math.round(this.y)
      this.cb = Math.round(this.cb)
      this.cr = Math.round(this.cr)
    }
    return this
  }
}

export class nm extends colorType {
  protected type: string = 'nm'

  wavelength: number

  constructor(wavelength: number) {
    super()
    this.valueRangeCheck(
      wavelength,
      200,
      800,
      'Wavelength (in nm) must fall between 200 and 800'
    )
    this.wavelength = wavelength
  }

  protected toStringValues = (): object => ({
    wavelength: this.wavelength,
  })

  protected torgb(args: newColorArgs): rgb {
    return Convert.nm2rgb(this, args.gamma, args.round, args.bitDepth)
  }
}

export class kelvin extends colorType {
  protected type: string = 'kelvin'

  k: number

  constructor(k: number) {
    super()
    this.valueRangeCheck(
      k,
      1000,
      40000,
      'Temperature must fall between 1000 and 40000'
    )
    this.k = k
  }

  protected toStringValues = (): object => ({
    k: this.k,
  })

  protected torgb(args: newColorArgs): rgb {
    return Convert.kelvin2rgb(this, args.round, args.bitDepth)
  }
}
