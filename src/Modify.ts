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
    let r3 = rgb1.getR() + (rgb2.getR() - rgb1.getR()) * amount
    let g3 = rgb1.getG() + (rgb2.getG() - rgb1.getG()) * amount
    let b3 = rgb1.getB() + (rgb2.getB() - rgb1.getB()) * amount
    let a3 = rgb1.getA() + (rgb2.getA() - rgb1.getA()) * amount

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
    if (Math.abs(hsv2.getH() - hsv1.getH()) > 180) {
      hueDiff = 360 - (hsv2.getH() - hsv1.getH()) * amount * -1
    } else {
      hueDiff = (hsv2.getH() - hsv1.getH()) * amount
    }
    let h3 = this.hueShift(hsv1.getH(), hueDiff)
    let s3 = hsv1.getS() + (hsv2.getS() - hsv1.getS()) * amount
    let v3 = hsv1.getV() + (hsv2.getV() - hsv1.getV()) * amount
    let a3 = hsv1.getA() + (hsv2.getA() - hsv1.getA()) * amount

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
    if (Math.abs(hsl2.getH() - hsl1.getH()) > 180) {
      hueDiff = 360 - (hsl2.getH() - hsl1.getH()) * amount * -1
    } else {
      hueDiff = (hsl2.getH() - hsl1.getH()) * amount
    }

    let h3 = this.hueShift(hsl1.getH(), hueDiff)
    let s3 = hsl1.getS() + (hsl2.getS() - hsl1.getS()) * amount
    let l3 = hsl1.getL() + (hsl2.getL() - hsl1.getL()) * amount
    let a3 = hsl1.getA() + (hsl2.getA() - hsl1.getA()) * amount

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
    if (Math.abs(hsi2.getH() - hsi1.getH()) > 180) {
      hueDiff = 360 - (hsi2.getH() - hsi1.getH()) * amount * -1
    } else {
      hueDiff = (hsi2.getH() - hsi1.getH()) * amount
    }

    let h3 = this.hueShift(hsi1.getH(), hueDiff)
    let s3 = hsi1.getS() + (hsi2.getS() - hsi1.getS()) * amount
    let i3 = hsi1.getI() + (hsi2.getI() - hsi1.getI()) * amount
    let a3 = hsi1.getA() + (hsi2.getA() - hsi1.getA()) * amount

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
    if (Math.abs(hsp2.getH() - hsp1.getH()) > 180) {
      hueDiff = 360 - (hsp2.getH() - hsp1.getH()) * amount * -1
    } else {
      hueDiff = (hsp2.getH() - hsp1.getH()) * amount
    }

    let h3 = this.hueShift(hsp1.getH(), hueDiff)
    let s3 = hsp1.getS() + (hsp2.getS() - hsp1.getS()) * amount
    let p3 = hsp1.getP() + (hsp2.getP() - hsp1.getP()) * amount
    let a3 = hsp1.getA() + (hsp2.getA() - hsp1.getA()) * amount

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
    let c3 = cmyk1.getC() + (cmyk2.getC() - cmyk1.getC()) * amount
    let m3 = cmyk1.getM() + (cmyk2.getM() - cmyk1.getM()) * amount
    let y3 = cmyk1.getY() + (cmyk2.getY() - cmyk1.getY()) * amount
    let k3 = cmyk1.getK() + (cmyk2.getK() - cmyk1.getK()) * amount
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
    let y = c1.getY() + (c2.getY() - c1.getY()) * amount
    let i = c1.getI() + (c2.getI() - c1.getI()) * amount
    let q = c1.getQ() + (c2.getQ() - c1.getQ()) * amount
    return new Colors.yiq(y, i, q)
  }

  static labBlend(
    c1: Colors.lab,
    c2: Colors.lab,
    amount: number = 0.5
  ): Colors.lab {
    amount = Math.min(Math.max(amount, 0), 1)
    let l = c1.getL() + (c2.getL() - c1.getL()) * amount
    let a = c1.getA() + (c2.getA() - c1.getA()) * amount
    let b = c1.getB() + (c2.getB() - c1.getB()) * amount
    return new Colors.lab(l, a, b)
  }

  static luvBlend(
    c1: Colors.luv,
    c2: Colors.luv,
    amount: number = 0.5
  ): Colors.luv {
    amount = Math.min(Math.max(amount, 0), 1)
    let l = c1.getL() + (c2.getL() - c1.getL()) * amount
    let u = c1.getU() + (c2.getU() - c1.getU()) * amount
    let v = c1.getV() + (c2.getV() - c1.getV()) * amount
    return new Colors.luv(l, u, v)
  }

  static rgbDarken(rgb: Colors.rgb, amount: number = 0.5): Colors.rgb {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let rd = rgb.getR() * realAmount
    let gd = rgb.getG() * realAmount
    let bd = rgb.getB() * realAmount
    return new Colors.rgb(rd, gd, bd, rgb.getA())
  }

  static rgbLighten(rgb: Colors.rgb, amount: number = 0.5): Colors.rgb {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let rl = rgb.getR() + (rgb.getMax() - rgb.getR()) * realAmount
    let gl = rgb.getG() + (rgb.getMax() - rgb.getG()) * realAmount
    let bl = rgb.getB() + (rgb.getMax() - rgb.getB()) * realAmount
    return new Colors.rgb(rl, gl, bl, rgb.getA())
  }

  static rgb2Darken(rgb: Colors.rgb, amount: number = 0.5): Colors.rgb {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let distanceLeft = Math.max(rgb.getR(), rgb.getG(), rgb.getB())
    let changeValue = distanceLeft * realAmount
    let rd = Math.max(0, rgb.getR() - changeValue)
    let gd = Math.max(0, rgb.getG() - changeValue)
    let bd = Math.max(0, rgb.getB() - changeValue)
    return new Colors.rgb(rd, gd, bd, rgb.getA())
  }

  static rgb2Lighten(rgb: Colors.rgb, amount: number = 0.5): Colors.rgb {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let distanceLeft = rgb.getMax() - Math.min(rgb.getR(), rgb.getG(), rgb.getB())
    let changeValue = distanceLeft * realAmount
    let rl = Math.min(rgb.getR() + changeValue, rgb.getMax())
    let gl = Math.min(rgb.getG() + changeValue, rgb.getMax())
    let bl = Math.min(rgb.getB() + changeValue, rgb.getMax())
    return new Colors.rgb(rl, gl, bl, rgb.getA())
  }

  static cmykDarken(cmyk: Colors.cmyk, amount: number = 0.5): Colors.cmyk {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let c2 = cmyk.getC() + (100 - cmyk.getC()) * realAmount
    let m2 = cmyk.getM() + (100 - cmyk.getM()) * realAmount
    let y2 = cmyk.getY() + (100 - cmyk.getY()) * realAmount
    let k2 = cmyk.getK() + (100 - cmyk.getK()) * realAmount
    return new Colors.cmyk(c2, m2, y2, k2)
  }

  static cmykLighten(cmyk: Colors.cmyk, amount: number = 0.5): Colors.cmyk {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let c2 = cmyk.getC() * realAmount
    let m2 = cmyk.getM() * realAmount
    let y2 = cmyk.getY() * realAmount
    let k2 = cmyk.getK() * realAmount
    return new Colors.cmyk(c2, m2, y2, k2)
  }

  static cmyk2Darken(cmyk: Colors.cmyk, amount: number = 0.5): Colors.cmyk {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let k2 = cmyk.getK() + (100 - cmyk.getK()) * realAmount
    return new Colors.cmyk(cmyk.getC(), cmyk.getM(), cmyk.getY(), k2)
  }

  static cmyk2Lighten(cmyk: Colors.cmyk, amount: number = 0.5): Colors.cmyk {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let k2 = cmyk.getK() * realAmount
    return new Colors.cmyk(cmyk.getC(), cmyk.getM(), cmyk.getY(), k2)
  }

  static hslDarken(hsl: Colors.hsl, amount: number = 0.5): Colors.hsl {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let vDarker = hsl.getL() * realAmount
    return new Colors.hsl(hsl.getH(), hsl.getS(), vDarker, hsl.getA())
  }

  static hslLighten(hsl: Colors.hsl, amount: number = 0.5): Colors.hsl {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let vLighter = hsl.getL() + (100 - hsl.getL()) * realAmount
    return new Colors.hsl(hsl.getH(), hsl.getS(), vLighter, hsl.getA())
  }

  static hsvDarken(hsv: Colors.hsv, amount: number = 0.5): Colors.hsv {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let vDarker = hsv.getV() * realAmount
    return new Colors.hsv(hsv.getH(), hsv.getS(), vDarker, hsv.getA())
  }

  static hsvLighten(hsv: Colors.hsv, amount: number = 0.5): Colors.hsv {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let vLighter: number = hsv.getV() + (100 - hsv.getV()) * realAmount
    let sLighter: number = hsv.getS() - realAmount * hsv.getS()
    return new Colors.hsv(hsv.getH(), sLighter, vLighter, hsv.getA())
  }

  static hsiDarken(hsi: Colors.hsi, amount: number = 0.5): Colors.hsi {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let vDarker = hsi.getI() * realAmount
    return new Colors.hsi(hsi.getH(), hsi.getS(), vDarker, hsi.getA())
  }

  static hsiLighten(hsi: Colors.hsi, amount: number = 0.5): Colors.hsi {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let vLighter = hsi.getI() + (100 - hsi.getI()) * realAmount
    let sLighter: number = hsi.getS() - realAmount * hsi.getS()
    return new Colors.hsi(hsi.getH(), sLighter, vLighter, hsi.getA())
  }

  static hspDarken(hsp: Colors.hsp, amount: number = 0.5): Colors.hsp {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let pDarker = hsp.getP() * realAmount
    return new Colors.hsp(hsp.getH(), hsp.getS(), pDarker, hsp.getA(), hsp.getPb(), hsp.getPr())
  }

  static hspLighten(hsp: Colors.hsp, amount: number = 0.5): Colors.hsp {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let pLighter = hsp.getP() + (100 - hsp.getP()) * realAmount
    let sLighter: number = hsp.getS() - realAmount * hsp.getS()
    return new Colors.hsp(hsp.getH(), sLighter, pLighter, hsp.getA(), hsp.getPb(), hsp.getPr())
  }

  static labDarken(lab: Colors.lab, amount: number = 0.5): Colors.lab {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let lDarker = lab.getL() * realAmount
    let aDarker = lab.getA() * realAmount
    let bDarker = lab.getB() * realAmount
    return new Colors.lab(lDarker, aDarker, bDarker)
  }

  static labLighten(lab: Colors.lab, amount: number = 0.5): Colors.lab {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let realAmountAB = 1 - Math.min(Math.max(amount, 0), 1)
    let lLighter = lab.getL() + (100 - lab.getL()) * realAmount
    let aLighter = lab.getA() * realAmountAB
    let bLighter = lab.getB() * realAmountAB
    return new Colors.lab(lLighter, aLighter, bLighter)
  }

  static lab2Darken(lab: Colors.lab, amount: number = 0.5): Colors.lab {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let lDarker = lab.getL() * realAmount
    return new Colors.lab(lDarker, lab.getA(), lab.getB())
  }

  static lab2Lighten(lab: Colors.lab, amount: number = 0.5): Colors.lab {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let lLighter = lab.getL() + (100 - lab.getL()) * realAmount
    return new Colors.lab(lLighter, lab.getA(), lab.getB())
  }

  static luvDarken(luv: Colors.luv, amount: number = 0.5): Colors.luv {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let lDarker = luv.getL() * realAmount
    let uDarker = luv.getU() * realAmount
    let vDarker = luv.getV() * realAmount
    return new Colors.luv(lDarker, uDarker, vDarker)
  }

  static luvLighten(luv: Colors.luv, amount: number = 0.5): Colors.luv {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let realAmountAB = 1 - Math.min(Math.max(amount, 0), 1)
    let lLighter = luv.getL() + (100 - luv.getL()) * realAmount
    let uLighter = luv.getU() * realAmountAB
    let vLighter = luv.getV() * realAmountAB
    return new Colors.luv(lLighter, uLighter, vLighter)
  }

  // breaks as L* approaches 0
  static luv2Darken(luv: Colors.luv, amount: number = 0.5): Colors.luv {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let lDarker = luv.getL() * realAmount
    return new Colors.luv(lDarker, luv.getU(), luv.getV())
  }

  static luv2Lighten(luv: Colors.luv, amount: number = 0.5): Colors.luv {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let lLighter = luv.getL() + (100 - luv.getL()) * realAmount
    return new Colors.luv(lLighter, luv.getU(), luv.getV())
  }

  static hslDesaturate(hsl: Colors.hsl, amount: number = 0.5): Colors.hsl {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let sLess = hsl.getS() * realAmount
    return new Colors.hsl(hsl.getH(), sLess, hsl.getL(), hsl.getA())
  }

  static hslSaturate(hsl: Colors.hsl, amount: number = 0.5): Colors.hsl {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let sMore = hsl.getS() + (100 - hsl.getS()) * realAmount
    return new Colors.hsl(hsl.getH(), sMore, hsl.getL(), hsl.getA())
  }

  static hsvDesaturate(hsv: Colors.hsv, amount: number = 0.5): Colors.hsv {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let sLess = hsv.getS() * realAmount
    return new Colors.hsv(hsv.getH(), sLess, hsv.getV(), hsv.getA())
  }

  static hsvSaturate(hsv: Colors.hsv, amount: number = 0.5): Colors.hsv {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let sMore = hsv.getS() + (100 - hsv.getS()) * realAmount
    return new Colors.hsv(hsv.getH(), sMore, hsv.getV(), hsv.getA())
  }

  static hsiDesaturate(hsi: Colors.hsi, amount: number = 0.5): Colors.hsi {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let sLess = hsi.getS() * realAmount
    return new Colors.hsi(hsi.getH(), sLess, hsi.getI(), hsi.getA())
  }

  static hsiSaturate(hsi: Colors.hsi, amount: number = 0.5): Colors.hsi {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let sMore = hsi.getS() + (100 - hsi.getS()) * realAmount
    return new Colors.hsi(hsi.getH(), sMore, hsi.getI(), hsi.getA())
  }

  static hspDesaturate(hsp: Colors.hsp, amount: number = 0.5): Colors.hsp {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let sLess = hsp.getS() * realAmount
    return new Colors.hsp(hsp.getH(), sLess, hsp.getP(), hsp.getA())
  }

  static hspSaturate(hsp: Colors.hsp, amount: number = 0.5): Colors.hsp {
    let realAmount = Math.min(Math.max(amount, 0), 1)
    let sMore = hsp.getS() + (100 - hsp.getS()) * realAmount
    return new Colors.hsp(hsp.getH(), sMore, hsp.getP(), hsp.getA())
  }
}

export = Modify
