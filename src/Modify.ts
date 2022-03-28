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
