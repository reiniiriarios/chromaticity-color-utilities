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

import Modify from './Modify'
import * as Colors from './Colors'

class Harmony {
  /**
   * Return 180deg complement of color
   *
   * @param  {Colors.hsv} hsv
   * @return {Colors.hsv[]}
   */
  static complement(hsv: Colors.hsv): Colors.hsv[] {
    let hueComplement = Modify.hueShift(hsv.h, 180)
    return [hsv, new Colors.hsv(hueComplement, hsv.s, hsv.v)]
  }

  /**
   * Return an analogous color scheme based on input color and angle
   *
   * @param  {Colors.hsv}        hsv
   * @param  {number}            [angle=30] degrees
   * @return {Array<Colors.hsv>}
   */
  static analogous(hsv: Colors.hsv, angle: number = 30): Array<Colors.hsv> {
    let aHue1 = Modify.hueShift(hsv.h, angle)
    let aHue2 = Modify.hueShift(hsv.h, angle * -1)

    return [
      hsv,
      new Colors.hsv(aHue1, hsv.s, hsv.v),
      new Colors.hsv(aHue2, hsv.s, hsv.v),
    ]
  }

  /**
   * Return a triadic color scheme based on input color
   * Alias of analogous() with 120deg angle
   *
   * @param  {Colors.hsv}        hsv
   * @param  {number}            [angle=120]
   * @return {Array<Colors.hsv>}
   */
  static triadic(hsv: Colors.hsv, angle: number = 120): Array<Colors.hsv> {
    return this.analogous(hsv, angle)
  }

  /**
   * Return a split complement color scheme based on input color and angle
   * Alias of analogous() but with different default angle
   *
   * @param  {Colors.hsv}        hsv
   * @param  {number}            [angle=150] degrees
   * @return {Array<Colors.hsv>}
   */
  static splitComplement(
    hsv: Colors.hsv,
    angle: number = 150
  ): Array<Colors.hsv> {
    return this.analogous(hsv, angle)
  }

  /**
   * Return a tetradic color scheme based on input color and angle
   *
   * @param  {Colors.hsv}        hsv
   * @param  {number}            [angle=45] degrees
   * @return {Array<Colors.hsv>}
   */
  static tetradic(hsv: Colors.hsv, angle: number = 45): Array<Colors.hsv> {
    let hue2 = Modify.hueShift(hsv.h, angle)
    let hue3 = Modify.hueShift(hsv.h, angle + 180)
    let hue4 = Modify.hueShift(hsv.h, 180)

    return [
      hsv,
      new Colors.hsv(hue2, hsv.s, hsv.v),
      new Colors.hsv(hue3, hsv.s, hsv.v),
      new Colors.hsv(hue4, hsv.s, hsv.v),
    ]
  }

  /**
   * Return a square color scheme based on input color
   * Alias of tetradic() with 90deg angle
   *
   * @param  {Colors.hsv}        hsv
   * @return {Array<Colors.hsv>}
   */
  static square(hsv: Colors.hsv): Array<Colors.hsv> {
    return this.tetradic(hsv, 90)
  }

  /**
   * Returns an array of colors of a darker shade
   *
   * @param {Colors.hsl} hsl
   * @param {number}     colors
   * @param {number}     [distanceToBlack=1]  0-1, where 1 is all the way to black
   * @returns
   */
  static shade(
    hsl: Colors.hsl,
    colors: number,
    distanceToBlack: number = 1
  ): Colors.hsl[] {
    let hsls: Colors.hsl[] = []
    let start = hsl.l
    let end = hsl.l * (1 - Math.min(Math.max(distanceToBlack, 0), 1))
    let separation = (start - end) / (colors - 1)
    for (let i = 0; i < colors; i++) {
      let nextL = Math.max(hsl.l - separation * i, 0)
      hsls.push(new Colors.hsl(hsl.h, hsl.s, nextL))
    }
    return hsls
  }

  /**
   * Returns an array of colors of a lighter tint
   *
   * @param {Colors.hsl} hsl
   * @param {number}     colors
   * @param {number}     [distanceToWhite=1]  0-1, where 1 is all the way to white
   * @returns
   */
  static tint(
    hsl: Colors.hsl,
    colors: number,
    distanceToWhite: number = 1
  ): Colors.hsl[] {
    let hsls: Colors.hsl[] = []
    let start = hsl.l
    let end = hsl.l + (100 - hsl.l) * Math.min(Math.max(distanceToWhite, 0), 1)
    let separation = (end - start) / (colors - 1)
    for (let i = 0; i < colors; i++) {
      let nextL = Math.min(hsl.l + separation * i, 100)
      hsls.push(new Colors.hsl(hsl.h, hsl.s, nextL))
    }
    return hsls
  }

  /**
   * Returns an array of colors of darker shades and lighter tints
   *
   * @param {Colors.hsl} hsl
   * @param {number}     colors
   * @param {number}     [distance=1]       0-1, where 1 is all the way to closest bound OR white, if distanceShade given
   * @param {number}     [distanceShade=1]  0-1, where 1 is all the way to black
   * @returns
   */
  static shadetint(
    hsl: Colors.hsl,
    colors: number,
    distance: number = 1,
    distanceShade?: number
  ): Colors.hsl[] {
    let hsls: Colors.hsl[] = []
    let tEnd, sEnd, tSeparation, sSeparation

    if (typeof distanceShade === 'undefined') {
      if (100 - hsl.l < hsl.l) {
        tEnd = hsl.l + (100 - hsl.l) * Math.min(Math.max(distance, 0), 1)
        tSeparation = (tEnd - hsl.l) / colors
        sSeparation = tSeparation
        sEnd = hsl.l - sSeparation * colors
      } else {
        sEnd = hsl.l * (1 - Math.min(Math.max(distance, 0), 1))
        sSeparation = (hsl.l - sEnd) / colors
        tSeparation = sSeparation
        tEnd = hsl.l + tSeparation * colors
      }
    } else {
      tEnd = hsl.l + (100 - hsl.l) * Math.min(Math.max(distance, 0), 1)
      tSeparation = (tEnd - hsl.l) / colors
      sEnd = hsl.l * (1 - Math.min(Math.max(distanceShade, 0), 1))
      sSeparation = (hsl.l - sEnd) / colors
    }

    for (let i = 0; i < colors; i++) {
      let nextL = Math.max(sEnd + sSeparation * i, 0)
      hsls.push(new Colors.hsl(hsl.h, hsl.s, nextL))
    }
    hsls.push(hsl)
    for (let i = 1; i <= colors; i++) {
      let nextL = Math.min(hsl.l + tSeparation * i, 100)
      hsls.push(new Colors.hsl(hsl.h, hsl.s, nextL))
    }

    return hsls
  }

  /**
   * Return an array of colors blended from color1 to color2, via rgb
   *
   * @param {Colors.rgb} color1
   * @param {Colors.rgb} color2
   * @param {number}     colors  number of colors in scheme (including color1 and color2)
   * @returns
   */
  static rgbGradient(
    color1: Colors.rgb,
    color2: Colors.rgb,
    colors: number
  ): Colors.rgb[] {
    if (colors < 2) {
      throw new Error('Unable to generate gradient with less than two colors')
    }
    let inBetweenColors = colors - 2
    let gradient: Colors.rgb[] = []
    gradient.push(color1)
    for (let i = 0; i < inBetweenColors; i++) {
      let amount = (i + 1) / (inBetweenColors + 1)
      gradient.push(Modify.rgbBlend(color1, color2, amount, false))
    }
    gradient.push(color2)

    return gradient
  }

  /**
   * Return an array of colors blended from color1 to color2, via hsv
   *
   * @param {Colors.hsv} color1
   * @param {Colors.hsv} color2
   * @param {number}     colors  number of colors in scheme (including color1 and color2)
   * @returns
   */
  static hsvGradient(
    color1: Colors.hsv,
    color2: Colors.hsv,
    colors: number
  ): Colors.hsv[] {
    if (colors < 2) {
      throw new Error('Unable to generate gradient with less than two colors')
    }
    let inBetweenColors = colors - 2
    let gradient: Colors.hsv[] = []
    gradient.push(color1)
    for (let i = 0; i < inBetweenColors; i++) {
      let amount = (i + 1) / (inBetweenColors + 1)
      gradient.push(Modify.hsvBlend(color1, color2, amount, false))
    }
    gradient.push(color2)

    return gradient
  }
}

export = Harmony
