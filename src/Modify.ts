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
    hue += angle;
    while (hue >= 360) hue -= 360;
    while (hue < 0) hue += 360;

    return hue;
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
  static rgbBlend(rgb1: Colors.rgb, rgb2: Colors.rgb, amount: number = 0.5, round: boolean = true): Colors.rgb {
    amount = Math.min(Math.max(amount, 0), 1)

    let r3 = rgb1.r + ((rgb2.r - rgb1.r) * amount);
    let g3 = rgb1.g + ((rgb2.g - rgb1.g) * amount);
    let b3 = rgb1.b + ((rgb2.b - rgb1.b) * amount);
    let a3 = rgb1.a + ((rgb2.a - rgb1.a) * amount);

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
  static hsvBlend(hsv1: Colors.hsv, hsv2: Colors.hsv, amount: number = 0.5, round: boolean = true): Colors.hsv {
    amount = Math.min(Math.max(amount, 0), 1)

    let hueDiff;
    if (Math.abs(hsv2.h - hsv1.h) > 180) {
      hueDiff = 360 - Math.abs((hsv2.h - hsv1.h) * amount);
      if (hsv1.h > hsv2.h) hueDiff *= -1;
    }
    else {
      hueDiff = (hsv2.h - hsv1.h) * amount;
    }

    let h3 = this.hueShift(hsv1.h, hueDiff);
    let s3 = hsv1.s + ((hsv2.s - hsv1.s) * amount);
    let v3 = hsv1.v + ((hsv2.v - hsv1.v) * amount);
    let a3 = hsv1.a + ((hsv2.a - hsv1.a) * amount);

    if (round) {
      h3 = Math.round(h3)
      s3 = Math.round(s3)
      v3 = Math.round(v3)
      a3 = Math.round(a3)
    }

    return new Colors.hsv(h3, s3, v3, a3)
  }

  static hslDarken(hsl: Colors.hsl, amount: number = 0.5, round: boolean = true) : Colors.hsl {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let vDarker = hsl.l * realAmount
    if (round) vDarker = Math.round(vDarker)
    return new Colors.hsl(hsl.h, hsl.s, vDarker, hsl.a)
  }

  static hslLighten(hsl: Colors.hsl, amount: number = 0.5, round: boolean = true) : Colors.hsl {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let vLighter = hsl.l + ((100 - hsl.l) * realAmount)
    if (round) vLighter = Math.round(vLighter)
    return new Colors.hsl(hsl.h, hsl.s, vLighter, hsl.a)
  }

  static hspDarken(hsp: Colors.hsp, amount: number = 0.5, round: boolean = true) : Colors.hsp {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let pDarker = hsp.p * realAmount
    if (round) pDarker = Math.round(pDarker)
    return new Colors.hsp(hsp.h, hsp.s, pDarker, hsp.a, hsp.pb, hsp.pr)
  }

  static hspLighten(hsp: Colors.hsp, amount: number = 0.5, round: boolean = true) : Colors.hsp {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let pLighter = hsp.p + ((100 - hsp.p) * realAmount)
    if (round) pLighter = Math.round(pLighter)
    return new Colors.hsp(hsp.h, hsp.s, pLighter, hsp.a, hsp.pb, hsp.pr)
  }

  static hslDesaturate(hsl: Colors.hsl, amount: number = 0.5, round: boolean = true) : Colors.hsl {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let sLess = hsl.s * realAmount
    if (round) sLess = Math.round(sLess)
    return new Colors.hsl(hsl.h, sLess, hsl.l, hsl.a)
  }

  static hslSaturate(hsl: Colors.hsl, amount: number = 0.5, round: boolean = true) : Colors.hsl {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let sMore = hsl.s + ((100 - hsl.s) * realAmount)
    if (round) sMore = Math.round(sMore)
    return new Colors.hsl(hsl.h, sMore, hsl.l, hsl.a)
  }

  static hsvDesaturate(hsv: Colors.hsv, amount: number = 0.5, round: boolean = true) : Colors.hsv {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let sLess = hsv.s * realAmount
    if (round) sLess = Math.round(sLess)
    return new Colors.hsv(hsv.h, sLess, hsv.v, hsv.a)
  }

  static hsvSaturate(hsv: Colors.hsv, amount: number = 0.5, round: boolean = true) : Colors.hsv {
    let realAmount = 1 - Math.min(Math.max(amount, 0), 1)
    let sMore = hsv.s + ((100 - hsv.s) * realAmount)
    if (round) sMore = Math.round(sMore)
    return new Colors.hsv(hsv.h, sMore, hsv.v, hsv.a)
  }
}

export = Modify