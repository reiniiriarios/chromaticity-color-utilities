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
    amount: number = 0.5
  ): Colors.rgb {
    amount = Math.min(Math.max(amount, 0), 1)
    let r3 = rgb1.r + (rgb2.r - rgb1.r) * amount
    let g3 = rgb1.g + (rgb2.g - rgb1.g) * amount
    let b3 = rgb1.b + (rgb2.b - rgb1.b) * amount
    let a3 = rgb1.a + (rgb2.a - rgb1.a) * amount

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
    amount: number = 0.5
  ): Colors.hsv {
    amount = Math.min(Math.max(amount, 0), 1)
    let hueDiff: number
    if (Math.abs(hsv2.h - hsv1.h) > 180) {
      hueDiff = 360 - (hsv2.h - hsv1.h) * amount * -1
    } else {
      hueDiff = (hsv2.h - hsv1.h) * amount
    }
    let h3 = this.hueShift(hsv1.h, hueDiff)
    let s3 = hsv1.s + (hsv2.s - hsv1.s) * amount
    let v3 = hsv1.v + (hsv2.v - hsv1.v) * amount
    let a3 = hsv1.a + (hsv2.a - hsv1.a) * amount

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
    amount: number = 0.5
  ): Colors.hsl {
    amount = Math.min(Math.max(amount, 0), 1)
    
    let hueDiff: number
    if (Math.abs(hsl2.h - hsl1.h) > 180) {
      hueDiff = 360 - (hsl2.h - hsl1.h) * amount * -1
    } else {
      hueDiff = (hsl2.h - hsl1.h) * amount
    }

    let h3 = this.hueShift(hsl1.h, hueDiff)
    let s3 = hsl1.s + (hsl2.s - hsl1.s) * amount
    let l3 = hsl1.l + (hsl2.l - hsl1.l) * amount
    let a3 = hsl1.a + (hsl2.a - hsl1.a) * amount

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
    amount: number = 0.5
  ): Colors.hsi {
    amount = Math.min(Math.max(amount, 0), 1)

    let hueDiff: number
    if (Math.abs(hsi2.h - hsi1.h) > 180) {
      hueDiff = 360 - (hsi2.h - hsi1.h) * amount * -1
    } else {
      hueDiff = (hsi2.h - hsi1.h) * amount
    }

    let h3 = this.hueShift(hsi1.h, hueDiff)
    let s3 = hsi1.s + (hsi2.s - hsi1.s) * amount
    let i3 = hsi1.i + (hsi2.i - hsi1.i) * amount
    let a3 = hsi1.a + (hsi2.a - hsi1.a) * amount

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
    amount: number = 0.5
  ): Colors.hsp {
    amount = Math.min(Math.max(amount, 0), 1)

    let hueDiff: number
    if (Math.abs(hsp2.h - hsp1.h) > 180) {
      hueDiff = 360 - (hsp2.h - hsp1.h) * amount * -1
    } else {
      hueDiff = (hsp2.h - hsp1.h) * amount
    }

    let h3 = this.hueShift(hsp1.h, hueDiff)
    let s3 = hsp1.s + (hsp2.s - hsp1.s) * amount
    let p3 = hsp1.p + (hsp2.p - hsp1.p) * amount
    let a3 = hsp1.a + (hsp2.a - hsp1.a) * amount

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
    amount: number = 0.5
  ): Colors.cmyk {
    amount = Math.min(Math.max(amount, 0), 1)
    let c3 = cmyk1.c + (cmyk2.c - cmyk1.c) * amount
    let m3 = cmyk1.m + (cmyk2.m - cmyk1.m) * amount
    let y3 = cmyk1.y + (cmyk2.y - cmyk1.y) * amount
    let k3 = cmyk1.k + (cmyk2.k - cmyk1.k) * amount
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
    amount: number = 0.5
  ): Colors.yiq {
    amount = Math.min(Math.max(amount, 0), 1)
    let y = c1.y + (c2.y - c1.y) * amount
    let i = c1.i + (c2.i - c1.i) * amount
    let q = c1.q + (c2.q - c1.q) * amount
    return new Colors.yiq(y, i, q)
  }

  static labBlend(
    c1: Colors.lab,
    c2: Colors.lab,
    amount: number = 0.5
  ): Colors.lab {
    amount = Math.min(Math.max(amount, 0), 1)
    let l = c1.l + (c2.l - c1.l) * amount
    let a = c1.a + (c2.a - c1.a) * amount
    let b = c1.b + (c2.b - c1.b) * amount
    return new Colors.lab(l, a, b)
  }

  static luvBlend(
    c1: Colors.luv,
    c2: Colors.luv,
    amount: number = 0.5
  ): Colors.luv {
    amount = Math.min(Math.max(amount, 0), 1)
    let l = c1.l + (c2.l - c1.l) * amount
    let u = c1.u + (c2.u - c1.u) * amount
    let v = c1.v + (c2.v - c1.v) * amount
    return new Colors.luv(l, u, v)
  }

  static rgbDarken(rgb: Colors.rgb, amount: number = 0.5): Colors.rgb {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let rd = rgb.r * realAmount
    let gd = rgb.g * realAmount
    let bd = rgb.b * realAmount
    return new Colors.rgb(rd, gd, bd, rgb.a)
  }

  static rgbLighten(rgb: Colors.rgb, amount: number = 0.5): Colors.rgb {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let rl = rgb.r + (rgb.max - rgb.r) * realAmount
    let gl = rgb.g + (rgb.max - rgb.g) * realAmount
    let bl = rgb.b + (rgb.max - rgb.b) * realAmount
    return new Colors.rgb(rl, gl, bl, rgb.a)
  }

  static rgb2Darken(rgb: Colors.rgb, amount: number = 0.5): Colors.rgb {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let distanceLeft = Math.max(rgb.r, rgb.g, rgb.b)
    let changeValue = distanceLeft * realAmount
    let rd = Math.max(0, rgb.r - changeValue)
    let gd = Math.max(0, rgb.g - changeValue)
    let bd = Math.max(0, rgb.b - changeValue)
    return new Colors.rgb(rd, gd, bd, rgb.a)
  }

  static rgb2Lighten(rgb: Colors.rgb, amount: number = 0.5): Colors.rgb {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let distanceLeft = rgb.max - Math.min(rgb.r, rgb.g, rgb.b)
    let changeValue = distanceLeft * realAmount
    let rl = Math.min(rgb.r + changeValue, rgb.max)
    let gl = Math.min(rgb.g + changeValue, rgb.max)
    let bl = Math.min(rgb.b + changeValue, rgb.max)
    return new Colors.rgb(rl, gl, bl, rgb.a)
  }

  static cmykDarken(cmyk: Colors.cmyk, amount: number = 0.5): Colors.cmyk {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let c2 = cmyk.c + (100 - cmyk.c) * realAmount
    let m2 = cmyk.m + (100 - cmyk.m) * realAmount
    let y2 = cmyk.y + (100 - cmyk.y) * realAmount
    let k2 = cmyk.k + (100 - cmyk.k) * realAmount
    return new Colors.cmyk(c2, m2, y2, k2)
  }

  static cmykLighten(cmyk: Colors.cmyk, amount: number = 0.5): Colors.cmyk {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let c2 = cmyk.c * realAmount
    let m2 = cmyk.m * realAmount
    let y2 = cmyk.y * realAmount
    let k2 = cmyk.k * realAmount
    return new Colors.cmyk(c2, m2, y2, k2)
  }

  static cmyk2Darken(cmyk: Colors.cmyk, amount: number = 0.5): Colors.cmyk {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let k2 = cmyk.k + (100 - cmyk.k) * realAmount
    return new Colors.cmyk(cmyk.c, cmyk.m, cmyk.y, k2)
  }

  static cmyk2Lighten(cmyk: Colors.cmyk, amount: number = 0.5): Colors.cmyk {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let k2 = cmyk.k * realAmount
    return new Colors.cmyk(cmyk.c, cmyk.m, cmyk.y, k2)
  }

  static hslDarken(hsl: Colors.hsl, amount: number = 0.5): Colors.hsl {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let vDarker = hsl.l * realAmount
    return new Colors.hsl(hsl.h, hsl.s, vDarker, hsl.a)
  }

  static hslLighten(hsl: Colors.hsl, amount: number = 0.5): Colors.hsl {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let vLighter = hsl.l + (100 - hsl.l) * realAmount
    return new Colors.hsl(hsl.h, hsl.s, vLighter, hsl.a)
  }

  static hsvDarken(hsv: Colors.hsv, amount: number = 0.5): Colors.hsv {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let vDarker = hsv.v * realAmount
    return new Colors.hsv(hsv.h, hsv.s, vDarker, hsv.a)
  }

  static hsvLighten(hsv: Colors.hsv, amount: number = 0.5): Colors.hsv {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let vLighter: number = hsv.v + (100 - hsv.v) * realAmount
    let sLighter: number = hsv.s - realAmount * hsv.s
    return new Colors.hsv(hsv.h, sLighter, vLighter, hsv.a)
  }

  static hsiDarken(hsi: Colors.hsi, amount: number = 0.5): Colors.hsi {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let vDarker = hsi.i * realAmount
    return new Colors.hsi(hsi.h, hsi.s, vDarker, hsi.a)
  }

  static hsiLighten(hsi: Colors.hsi, amount: number = 0.5): Colors.hsi {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let vLighter = hsi.i + (100 - hsi.i) * realAmount
    let sLighter: number = hsi.s - realAmount * hsi.s
    return new Colors.hsi(hsi.h, sLighter, vLighter, hsi.a)
  }

  static hspDarken(hsp: Colors.hsp, amount: number = 0.5): Colors.hsp {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let pDarker = hsp.p * realAmount
    return new Colors.hsp(hsp.h, hsp.s, pDarker, hsp.a, hsp.pb, hsp.pr)
  }

  static hspLighten(hsp: Colors.hsp, amount: number = 0.5): Colors.hsp {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let pLighter = hsp.p + (100 - hsp.p) * realAmount
    let sLighter: number = hsp.s - realAmount * hsp.s
    return new Colors.hsp(hsp.h, sLighter, pLighter, hsp.a, hsp.pb, hsp.pr)
  }

  static labDarken(lab: Colors.lab, amount: number = 0.5): Colors.lab {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let lDarker = lab.l * realAmount
    let aDarker = lab.a * realAmount
    let bDarker = lab.b * realAmount
    return new Colors.lab(lDarker, aDarker, bDarker)
  }

  static labLighten(lab: Colors.lab, amount: number = 0.5): Colors.lab {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let realAmountAB = 1 - Math.min(Math.max(amount, 0), 1)
    let lLighter = lab.l + (100 - lab.l) * realAmount
    let aLighter = lab.a * realAmountAB
    let bLighter = lab.b * realAmountAB
    return new Colors.lab(lLighter, aLighter, bLighter)
  }

  static lab2Darken(lab: Colors.lab, amount: number = 0.5): Colors.lab {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let lDarker = lab.l * realAmount
    return new Colors.lab(lDarker, lab.a, lab.b)
  }

  static lab2Lighten(lab: Colors.lab, amount: number = 0.5): Colors.lab {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let lLighter = lab.l + (100 - lab.l) * realAmount
    return new Colors.lab(lLighter, lab.a, lab.b)
  }

  static luvDarken(luv: Colors.luv, amount: number = 0.5): Colors.luv {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let lDarker = luv.l * realAmount
    let uDarker = luv.u * realAmount
    let vDarker = luv.v * realAmount
    return new Colors.luv(lDarker, uDarker, vDarker)
  }

  static luvLighten(luv: Colors.luv, amount: number = 0.5): Colors.luv {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let realAmountAB = 1 - Math.min(Math.max(amount, 0), 1)
    let lLighter = luv.l + (100 - luv.l) * realAmount
    let uLighter = luv.u * realAmountAB
    let vLighter = luv.v * realAmountAB
    return new Colors.luv(lLighter, uLighter, vLighter)
  }

  // breaks as L* approaches 0
  static luv2Darken(luv: Colors.luv, amount: number = 0.5): Colors.luv {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let lDarker = luv.l * realAmount
    return new Colors.luv(lDarker, luv.u, luv.v)
  }

  static luv2Lighten(luv: Colors.luv, amount: number = 0.5): Colors.luv {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let lLighter = luv.l + (100 - luv.l) * realAmount
    return new Colors.luv(lLighter, luv.u, luv.v)
  }

  static hslDesaturate(hsl: Colors.hsl, amount: number = 0.5): Colors.hsl {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let sLess = hsl.s * realAmount
    return new Colors.hsl(hsl.h, sLess, hsl.l, hsl.a)
  }

  static hslSaturate(hsl: Colors.hsl, amount: number = 0.5): Colors.hsl {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let sMore = hsl.s + (100 - hsl.s) * realAmount
    return new Colors.hsl(hsl.h, sMore, hsl.l, hsl.a)
  }

  static hsvDesaturate(hsv: Colors.hsv, amount: number = 0.5): Colors.hsv {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let sLess = hsv.s * realAmount
    return new Colors.hsv(hsv.h, sLess, hsv.v, hsv.a)
  }

  static hsvSaturate(hsv: Colors.hsv, amount: number = 0.5): Colors.hsv {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let sMore = hsv.s + (100 - hsv.s) * realAmount
    return new Colors.hsv(hsv.h, sMore, hsv.v, hsv.a)
  }

  static hsiDesaturate(hsi: Colors.hsi, amount: number = 0.5): Colors.hsi {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let sLess = hsi.s * realAmount
    return new Colors.hsi(hsi.h, sLess, hsi.i, hsi.a)
  }

  static hsiSaturate(hsi: Colors.hsi, amount: number = 0.5): Colors.hsi {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let sMore = hsi.s + (100 - hsi.s) * realAmount
    return new Colors.hsi(hsi.h, sMore, hsi.i, hsi.a)
  }

  static hspDesaturate(hsp: Colors.hsp, amount: number = 0.5): Colors.hsp {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let sLess = hsp.s * realAmount
    return new Colors.hsp(hsp.h, sLess, hsp.p, hsp.a)
  }

  static hspSaturate(hsp: Colors.hsp, amount: number = 0.5): Colors.hsp {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let sMore = hsp.s + (100 - hsp.s) * realAmount
    return new Colors.hsp(hsp.h, sMore, hsp.p, hsp.a)
  }
}

export = Modify
