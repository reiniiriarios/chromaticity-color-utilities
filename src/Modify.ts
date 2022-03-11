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

import * as Colors from './Colors'

class Modify {
  /**
   * Rotate $hue by $angle degrees
   * Degrees can be more than 360 or less than -360 and will loop around
   *
   * @param  {number} hue   degrees
   * @param  {number} angle degrees
   * @return {number}       rotated hue
   */
  static hueShift(hue: number, angle: number): number {
    hue += angle
    while (hue >= 360) hue -= 360
    while (hue < 0) hue += 360

    return hue
  }

  /**
   * Blend one RGB color with another
   *
   * @param  {Colors.rgb} rgb1
   * @param  {Colors.rgb} rgb2
   * @param  {number}     amount amount to blend, 0-1
   * @param  {boolean}    [round=true]
   * @return {Colors.rgb}
   */
  static rgbBlend(
    rgb1: Colors.rgb,
    rgb2: Colors.rgb,
    amount: number = 0.5,
    round: boolean = true
  ): Colors.rgb {
    amount = Math.min(Math.max(amount, 0), 1)

    let r3 = rgb1.r + (rgb2.r - rgb1.r) * amount
    let g3 = rgb1.g + (rgb2.g - rgb1.g) * amount
    let b3 = rgb1.b + (rgb2.b - rgb1.b) * amount
    let a3 = rgb1.a + (rgb2.a - rgb1.a) * amount

    if (round) {
      r3 = Math.round(r3)
      g3 = Math.round(g3)
      b3 = Math.round(b3)
      a3 = Math.round(a3)
    }

    return new Colors.rgb(r3, g3, b3, a3)
  }

  /**
   * Blend one HSV color with another
   *
   * @param  {Colors.hsv} hsv1
   * @param  {Colors.hsv} hsv2
   * @param  {number}     amount amount to blend (0-1)
   * @param  {boolean}    [round=true]
   * @return {Colors.hsv}
   */
  static hsvBlend(
    hsv1: Colors.hsv,
    hsv2: Colors.hsv,
    amount: number = 0.5,
    round: boolean = true
  ): Colors.hsv {
    amount = Math.min(Math.max(amount, 0), 1)

    let hueDiff: number
    let a: number, b: number
    if (hsv1.h > hsv2.h) {
      a = hsv1.h
      b = hsv2.h
    }
    else {
      a = hsv2.h
      b = hsv1.h
    }
    if (a - b > 180) {
      hueDiff = 360 - (a - b) * amount
    }
    else {
      hueDiff = (a - b) * amount
    }

    let h3 = this.hueShift(hsv1.h, hueDiff)
    let s3 = hsv1.s + (hsv2.s - hsv1.s) * amount
    let v3 = hsv1.v + (hsv2.v - hsv1.v) * amount
    let a3 = hsv1.a + (hsv2.a - hsv1.a) * amount

    if (round) {
      h3 = Math.round(h3)
      s3 = Math.round(s3)
      v3 = Math.round(v3)
      a3 = Math.round(a3)
    }

    return new Colors.hsv(h3, s3, v3, a3)
  }

  /**
   * Blend one HSL color with another
   *
   * @param  {Colors.hsl} hsl1
   * @param  {Colors.hsl} hsl2
   * @param  {number}     amount amount to blend (0-1)
   * @param  {boolean}    [round=true]
   * @return {Colors.hsl}
   */
  static hslBlend(
    hsl1: Colors.hsl,
    hsl2: Colors.hsl,
    amount: number = 0.5,
    round: boolean = true
  ): Colors.hsl {
    amount = Math.min(Math.max(amount, 0), 1)

    let hueDiff: number
    let a: number, b: number
    if (hsl1.h > hsl2.h) {
      a = hsl1.h
      b = hsl2.h
    }
    else {
      a = hsl2.h
      b = hsl1.h
    }
    if (a - b > 180) {
      hueDiff = 360 - (a - b) * amount
    }
    else {
      hueDiff = (a - b) * amount
    }

    let h3 = this.hueShift(hsl1.h, hueDiff)
    let s3 = hsl1.s + (hsl2.s - hsl1.s) * amount
    let l3 = hsl1.l + (hsl2.l - hsl1.l) * amount
    let a3 = hsl1.a + (hsl2.a - hsl1.a) * amount

    if (round) {
      h3 = Math.round(h3)
      s3 = Math.round(s3)
      l3 = Math.round(l3)
      a3 = Math.round(a3)
    }

    return new Colors.hsl(h3, s3, l3, a3)
  }

  /**
   * Blend one HSI color with another
   *
   * @param  {Colors.hsi} hsi1
   * @param  {Colors.hsi} hsi2
   * @param  {number}     amount amount to blend (0-1)
   * @param  {boolean}    [round=true]
   * @return {Colors.hsi}
   */
  static hsiBlend(
    hsi1: Colors.hsi,
    hsi2: Colors.hsi,
    amount: number = 0.5,
    round: boolean = true
  ): Colors.hsi {
    amount = Math.min(Math.max(amount, 0), 1)

    let hueDiff: number
    let a: number, b: number
    if (hsi1.h > hsi2.h) {
      a = hsi1.h
      b = hsi2.h
    }
    else {
      a = hsi2.h
      b = hsi1.h
    }
    if (a - b > 180) {
      hueDiff = 360 - (a - b) * amount
    }
    else {
      hueDiff = (a - b) * amount
    }

    console.log(hueDiff)

    let h3 = this.hueShift(hsi1.h, hueDiff)
    let s3 = hsi1.s + (hsi2.s - hsi1.s) * amount
    let i3 = hsi1.i + (hsi2.i - hsi1.i) * amount
    let a3 = hsi1.a + (hsi2.a - hsi1.a) * amount

    if (round) {
      h3 = Math.round(h3)
      s3 = Math.round(s3)
      i3 = Math.round(i3)
      a3 = Math.round(a3)
    }

    return new Colors.hsi(h3, s3, i3, a3)
  }

  /**
   * Blend one HSP color with another
   *
   * @param  {Colors.hsp} hsp1
   * @param  {Colors.hsp} hsp2
   * @param  {number}     amount amount to blend (0-1)
   * @param  {boolean}    [round=true]
   * @return {Colors.hsp}
   */
  static hspBlend(
    hsp1: Colors.hsp,
    hsp2: Colors.hsp,
    amount: number = 0.5,
    round: boolean = true
  ): Colors.hsp {
    amount = Math.min(Math.max(amount, 0), 1)

    let hueDiff: number
    let a: number, b: number
    if (hsp1.h > hsp2.h) {
      a = hsp1.h
      b = hsp2.h
    }
    else {
      a = hsp2.h
      b = hsp1.h
    }
    if (a - b > 180) {
      hueDiff = 360 - (a - b) * amount
    }
    else {
      hueDiff = (a - b) * amount
    }

    let h3 = this.hueShift(hsp1.h, hueDiff)
    let s3 = hsp1.s + (hsp2.s - hsp1.s) * amount
    let p3 = hsp1.p + (hsp2.p - hsp1.p) * amount
    let a3 = hsp1.a + (hsp2.a - hsp1.a) * amount

    if (round) {
      h3 = Math.round(h3)
      s3 = Math.round(s3)
      p3 = Math.round(p3)
      a3 = Math.round(a3)
    }

    return new Colors.hsp(h3, s3, p3, a3)
  }

  /**
   * Blend one CMYK color with another
   *
   * @param  {Colors.cmyk} cmyk1
   * @param  {Colors.cmyk} cmyk2
   * @param  {number}      amount amount to blend (0-1)
   * @param  {boolean}     [round=true]
   * @return {Colors.cmyk}
   */
  static cmykBlend(
    cmyk1: Colors.cmyk,
    cmyk2: Colors.cmyk,
    amount: number = 0.5,
    round: boolean = true
  ): Colors.cmyk {
    amount = Math.min(Math.max(amount, 0), 1)

    let c3 = cmyk1.c + (cmyk2.c - cmyk1.c) * amount
    let m3 = cmyk1.m + (cmyk2.m - cmyk1.m) * amount
    let y3 = cmyk1.y + (cmyk2.y - cmyk1.y) * amount
    let k3 = cmyk1.k + (cmyk2.k - cmyk1.k) * amount

    if (round) {
      c3 = Math.round(c3)
      m3 = Math.round(m3)
      y3 = Math.round(y3)
      k3 = Math.round(k3)
    }

    return new Colors.cmyk(c3, m3, y3, k3)
  }

  /**
   * Blend one YIQ color with another
   *
   * @param  {Colors.yiq} c1
   * @param  {Colors.yiq} c2
   * @param  {number}     amount amount to blend (0-1)
   * @param  {boolean}    [round=true]
   * @return {Colors.yiq}
   */
  static yiqBlend(
    c1: Colors.yiq,
    c2: Colors.yiq,
    amount: number = 0.5,
    round: boolean = true
  ): Colors.yiq {
    amount = Math.min(Math.max(amount, 0), 1)

    let y = c1.y + (c2.y - c1.y) * amount
    let i = c1.i + (c2.i - c1.i) * amount
    let q = c1.q + (c2.q - c1.q) * amount

    if (round) {
      y = Math.round(y)
      i = Math.round(i)
      q = Math.round(q)
    }

    return new Colors.yiq(y, i, q)
  }

  static rgbDarken(
    rgb: Colors.rgb,
    amount: number = 0.5,
    round: boolean = true
  ): Colors.rgb {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let rd = rgb.r * realAmount
    let gd = rgb.g * realAmount
    let bd = rgb.b * realAmount
    if (round) {
      rd = Math.round(rd)
      gd = Math.round(gd)
      bd = Math.round(bd)
    }
    return new Colors.rgb(rd, gd, bd, rgb.a)
  }

  static rgbLighten(
    rgb: Colors.rgb,
    amount: number = 0.5,
    round: boolean = true
  ): Colors.rgb {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let rl = rgb.r + (100 - rgb.r) * realAmount
    let gl = rgb.g + (100 - rgb.g) * realAmount
    let bl = rgb.b + (100 - rgb.b) * realAmount
    if (round) {
      rl = Math.round(rl)
      gl = Math.round(gl)
      bl = Math.round(bl)
    }
    return new Colors.rgb(rl, gl, bl, rgb.a)
  }

  static hslDarken(
    hsl: Colors.hsl,
    amount: number = 0.5,
    round: boolean = true
  ): Colors.hsl {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let vDarker = hsl.l * realAmount
    if (round) vDarker = Math.round(vDarker)
    return new Colors.hsl(hsl.h, hsl.s, vDarker, hsl.a)
  }

  static hslLighten(
    hsl: Colors.hsl,
    amount: number = 0.5,
    round: boolean = true
  ): Colors.hsl {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let vLighter = hsl.l + (100 - hsl.l) * realAmount
    if (round) vLighter = Math.round(vLighter)
    return new Colors.hsl(hsl.h, hsl.s, vLighter, hsl.a)
  }

  static hspDarken(
    hsp: Colors.hsp,
    amount: number = 0.5,
    round: boolean = true
  ): Colors.hsp {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let pDarker = hsp.p * realAmount
    if (round) pDarker = Math.round(pDarker)
    return new Colors.hsp(hsp.h, hsp.s, pDarker, hsp.a, hsp.pb, hsp.pr)
  }

  static hspLighten(
    hsp: Colors.hsp,
    amount: number = 0.5,
    round: boolean = true
  ): Colors.hsp {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let pLighter = hsp.p + (100 - hsp.p) * realAmount
    if (round) pLighter = Math.round(pLighter)
    return new Colors.hsp(hsp.h, hsp.s, pLighter, hsp.a, hsp.pb, hsp.pr)
  }

  static hslDesaturate(
    hsl: Colors.hsl,
    amount: number = 0.5,
    round: boolean = true
  ): Colors.hsl {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let sLess = hsl.s * realAmount
    if (round) sLess = Math.round(sLess)
    return new Colors.hsl(hsl.h, sLess, hsl.l, hsl.a)
  }

  static hslSaturate(
    hsl: Colors.hsl,
    amount: number = 0.5,
    round: boolean = true
  ): Colors.hsl {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let sMore = hsl.s + (100 - hsl.s) * realAmount
    if (round) sMore = Math.round(sMore)
    return new Colors.hsl(hsl.h, sMore, hsl.l, hsl.a)
  }

  static hsvDesaturate(
    hsv: Colors.hsv,
    amount: number = 0.5,
    round: boolean = true
  ): Colors.hsv {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let sLess = hsv.s * realAmount
    if (round) sLess = Math.round(sLess)
    return new Colors.hsv(hsv.h, sLess, hsv.v, hsv.a)
  }

  static hsvSaturate(
    hsv: Colors.hsv,
    amount: number = 0.5,
    round: boolean = true
  ): Colors.hsv {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let sMore = hsv.s + (100 - hsv.s) * realAmount
    if (round) sMore = Math.round(sMore)
    return new Colors.hsv(hsv.h, sMore, hsv.v, hsv.a)
  }
}

export = Modify
