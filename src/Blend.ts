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
import Convert from './Convert'
import Modify from './Modify'
import Util from './Util'

class Blend {
  /**
   * Multiply one RGB color onto another
   *
   * @param  {Colors.rgb} rgb1
   * @param  {Colors.rgb} rgb2
   * @param  {number}     amount amount to blend, 0-1
   * @return {Colors.rgb}
   */
  static rgbMultiply(
    rgb1: Colors.rgb,
    rgb2: Colors.rgb,
    amount: number = 0.5
  ): Colors.rgb {
    amount = Math.min(Math.max(amount, 0), 1)

    // normalize to [0,1]
    let c1 = Convert.rgbNormalize(rgb1)
    let c2 = Convert.rgbNormalize(rgb2)

    // multiply
    let r3 = c1.getR() * c2.getR()
    let g3 = c1.getG() * c2.getG()
    let b3 = c1.getB() * c2.getB()

    // clamp
    r3 = Math.min(Math.max(r3, 0), rgb1.getMax())
    g3 = Math.min(Math.max(g3, 0), rgb1.getMax())
    b3 = Math.min(Math.max(b3, 0), rgb1.getMax())

    // scale to bitdepth
    r3 = Util.scaleValueRange(r3, 0, 1, 0, rgb1.getMax(), false)
    g3 = Util.scaleValueRange(g3, 0, 1, 0, rgb1.getMax(), false)
    b3 = Util.scaleValueRange(b3, 0, 1, 0, rgb1.getMax(), false)

    // blend as much as opacity of color 2
    let realAmount = (rgb1.getA() / rgb1.getMax()) * amount

    // blend
    let c4 = this.rgbBlend(
      rgb1,
      new Colors.rgb(r3, g3, b3, rgb1.getA()),
      realAmount
    )

    return c4
  }

  /**
   * Screen one RGB color onto another
   *
   * @param  {Colors.rgb} rgb1
   * @param  {Colors.rgb} rgb2
   * @param  {number}     amount amount to blend, 0-1
   * @return {Colors.rgb}
   */
  static rgbScreen(
    rgb1: Colors.rgb,
    rgb2: Colors.rgb,
    amount: number = 0.5
  ): Colors.rgb {
    amount = Math.min(Math.max(amount, 0), 1)

    // normalize to [0,1]
    let c1 = Convert.rgbNormalize(rgb1)
    let c2 = Convert.rgbNormalize(rgb2)

    // screen
    let r3 = 1 - (1 - c1.getR()) * (1 - c2.getR())
    let g3 = 1 - (1 - c1.getG()) * (1 - c2.getG())
    let b3 = 1 - (1 - c1.getB()) * (1 - c2.getB())

    // clamp
    r3 = Math.min(Math.max(r3, 0), rgb1.getMax())
    g3 = Math.min(Math.max(g3, 0), rgb1.getMax())
    b3 = Math.min(Math.max(b3, 0), rgb1.getMax())

    // scale to bitdepth
    r3 = Util.scaleValueRange(r3, 0, 1, 0, rgb1.getMax(), false)
    g3 = Util.scaleValueRange(g3, 0, 1, 0, rgb1.getMax(), false)
    b3 = Util.scaleValueRange(b3, 0, 1, 0, rgb1.getMax(), false)

    // blend as much as opacity of color 2
    let realAmount = (rgb1.getA() / rgb1.getMax()) * amount

    // blend
    let c4 = this.rgbBlend(
      rgb1,
      new Colors.rgb(r3, g3, b3, rgb1.getA()),
      realAmount
    )

    return c4
  }

  /**
   * Overlay one RGB color onto another
   *
   * @param  {Colors.rgb} rgb1
   * @param  {Colors.rgb} rgb2
   * @param  {number}     amount amount to blend, 0-1
   * @return {Colors.rgb}
   */
  static rgbOverlay(
    rgb1: Colors.rgb,
    rgb2: Colors.rgb,
    amount: number = 0.5
  ): Colors.rgb {
    amount = Math.min(Math.max(amount, 0), 1)

    // normalize to [0,1]
    let c1 = Convert.rgbNormalize(rgb1)
    let c2 = Convert.rgbNormalize(rgb2)

    // overlay
    let r3 =
      c1.getR() < 0.5
        ? 2 * c1.getR() * c2.getR()
        : 1 - 2 * (1 - c1.getR()) * (1 - c2.getR())
    let g3 =
      c1.getG() < 0.5
        ? 2 * c1.getG() * c2.getG()
        : 1 - 2 * (1 - c1.getG()) * (1 - c2.getG())
    let b3 =
      c1.getB() < 0.5
        ? 2 * c1.getB() * c2.getB()
        : 1 - 2 * (1 - c1.getB()) * (1 - c2.getB())

    // clamp
    r3 = Math.min(Math.max(r3, 0), rgb1.getMax())
    g3 = Math.min(Math.max(g3, 0), rgb1.getMax())
    b3 = Math.min(Math.max(b3, 0), rgb1.getMax())

    // scale to bitdepth
    r3 = Util.scaleValueRange(r3, 0, 1, 0, rgb1.getMax(), false)
    g3 = Util.scaleValueRange(g3, 0, 1, 0, rgb1.getMax(), false)
    b3 = Util.scaleValueRange(b3, 0, 1, 0, rgb1.getMax(), false)

    // blend as much as opacity of color 2
    let realAmount = (rgb1.getA() / rgb1.getMax()) * amount

    // blend
    let c4 = this.rgbBlend(
      rgb1,
      new Colors.rgb(r3, g3, b3, rgb1.getA()),
      realAmount
    )

    return c4
  }

  /**
   * Soft light blend of one RGB color onto another
   *
   * @param  {Colors.rgb} rgb1
   * @param  {Colors.rgb} rgb2
   * @param  {number}     amount amount to blend, 0-1
   * @return {Colors.rgb}
   */
  static rgbSoftLight(
    rgb1: Colors.rgb,
    rgb2: Colors.rgb,
    amount: number = 0.5
  ): Colors.rgb {
    amount = Math.min(Math.max(amount, 0), 1)

    // normalize to [0,1]
    let c1 = Convert.rgbNormalize(rgb1)
    let c2 = Convert.rgbNormalize(rgb2)

    // soft light
    let softVals: number[] = []
    let vals = [
      { a: c1.getR(), b: c2.getR() },
      { a: c1.getG(), b: c2.getG() },
      { a: c1.getB(), b: c2.getB() },
    ]
    vals.forEach((c) => {
      let soft
      if (c.b <= 0.5) {
        soft = c.a - (1 - 2 * c.b) * c.a * (1 - c.a)
      } else {
        let gR =
          c.a <= 0.25 ? ((16 * c.a - 12) * c.a + 4) * c.a : Math.sqrt(c.a)
        soft = c.a + (2 * c.b - 1) * (gR - c.a)
      }
      softVals.push(soft)
    })

    // clamp
    let r3 = Math.min(Math.max(softVals[0], 0), rgb1.getMax())
    let g3 = Math.min(Math.max(softVals[1], 0), rgb1.getMax())
    let b3 = Math.min(Math.max(softVals[2], 0), rgb1.getMax())

    // scale to bitdepth
    r3 = Util.scaleValueRange(r3, 0, 1, 0, rgb1.getMax(), false)
    g3 = Util.scaleValueRange(g3, 0, 1, 0, rgb1.getMax(), false)
    b3 = Util.scaleValueRange(b3, 0, 1, 0, rgb1.getMax(), false)

    // blend as much as opacity of color 2
    let realAmount = (rgb1.getA() / rgb1.getMax()) * amount

    // blend
    let c4 = this.rgbBlend(
      rgb1,
      new Colors.rgb(r3, g3, b3, rgb1.getA()),
      realAmount
    )

    return c4
  }

  /**
   * Blend one RGB color with another
   *
   * @param  {Colors.rgb} rgb1
   * @param  {Colors.rgb} rgb2
   * @param  {number}     amount amount to blend, 0-1
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
    let h3 = Modify.hueShift(hsv1.getH(), hueDiff)
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

    let h3 = Modify.hueShift(hsl1.getH(), hueDiff)
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

    let h3 = Modify.hueShift(hsi1.getH(), hueDiff)
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

    let h3 = Modify.hueShift(hsp1.getH(), hueDiff)
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

  /**
   * Blend one Lab color with another
   *
   * @param  {Colors.lab} c1
   * @param  {Colors.lab} c2
   * @param  {number}     amount amount to blend (0-1)
   * @return {Colors.lab}
   */
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

  /**
   * Blend one Luv color with another
   *
   * @param  {Colors.luv} c1
   * @param  {Colors.luv} c2
   * @param  {number}     amount amount to blend (0-1)
   * @return {Colors.luv}
   */
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
}

export = Blend
