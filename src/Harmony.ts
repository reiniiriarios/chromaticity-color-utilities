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

import Modify from './Modify'
import * as Colors from './Colors'
import { colorType } from './ColorType'

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
   * @param {T extends colorType} color
   * @param {string}              [method='hsl']
   * @param {number}              colors
   * @param {number}              [distanceToBlack=1]  0-1, where 1 is all the way to black
   * @param {boolesn}             [round=true]
   * @returns {T[]}
   */
  static shade<T extends colorType>(
    color: T,
    method: string = 'hsl',
    colors: number,
    distanceToBlack: number = 1
  ): T[] {
    let scheme: T[] = []
    if (
      [
        'hsv',
        'hsva',
        'hsi',
        'hsia',
        'hsp',
        'hspa',
        'hsl',
        'hsla',
        'rgb',
        'rgb2',
        'cmyk',
      ].includes(method)
    ) {
      let type = method.replace(/[0-9]/, '').replace(/a$/, '')
      let start = color.to(type, { round: false })
      for (let n = 0; n < colors; n++) {
        scheme.push(
          start.modify('darken', {
            method: method,
            amount: (n / (colors - 1)) * distanceToBlack,
            round: false,
          })
        )
      }
    } else {
      throw new Error('Invalid shade scheme method: ' + method)
    }
    return scheme
  }

  /**
   * Returns an array of colors of a lighter tint
   *
   * @param {T extends colorType} color
   * @param {string}              [method='hsl']
   * @param {number}              colors
   * @param {number}              [distanceToWhite=1]  0-1, where 1 is all the way to white
   * @param {boolesn}             [round=true]
   * @returns {T[]}
   */
  static tint<T extends colorType>(
    color: T,
    method: string = 'hsl',
    colors: number,
    distanceToWhite: number = 1
  ): T[] {
    let scheme: T[] = []
    if (
      [
        'hsv',
        'hsva',
        'hsi',
        'hsia',
        'hsp',
        'hspa',
        'hsl',
        'hsla',
        'rgb',
        'rgb2',
        'cmyk',
      ].includes(method)
    ) {
      let type = method.replace(/[0-9]/, '').replace(/a$/, '')
      let start = color.to(type, { round: false })
      for (let n = 0; n < colors; n++) {
        scheme.push(
          start.modify('lighten', {
            method: method,
            amount: (n / (colors - 1)) * distanceToWhite,
            round: false,
          })
        )
      }
    } else {
      throw new Error('Invalid tint scheme method: ' + method)
    }
    return scheme
  }

  /**
   * Returns an array of colors of darker shades and lighter tints
   *
   * @param {T extends colorType} color
   * @param {string}              method
   * @param {number}              colors
   * @param {boolean}             [round=true]
   * @param {number}              [distance=1]       0-1, where 1 is all the way to closest bound OR white, if distanceShade given
   * @param {number}              [distanceShade=1]  0-1, where 1 is all the way to black
   * @returns
   */
  static shadetint<T extends colorType>(
    color: T,
    method: string,
    colors: number,
    round: boolean = true,
    distance: number = 1,
    distanceShade?: number
  ): T[] {
    let scheme: T[] = []
    let tEnd: number, sEnd: number, tSeparation: number, sSeparation: number
    switch (method) {
      case 'hsl':
      case 'hsla':
        let hsl: Colors.hsl = color.to('hsl', { round: false })
        if (typeof distanceShade === 'undefined') {
          if (100 - hsl.l < hsl.l) {
            distanceShade = (100 - hsl.l) / 50 * distance
          } else {
            distanceShade = distance
            distance = hsl.l / 50 * distanceShade
          }
        }

        for (let i = 0; i < colors; i++) {
          scheme.push(Modify.hslDarken(hsl, (colors - i) / colors * distanceShade).to(color.getType(), { round: round }))
        }
        scheme.push(hsl.to(color.getType(), { round: round }))
        for (let i = 1; i <= colors; i++) {
          scheme.push(Modify.hslLighten(hsl, i / colors * distance).to(color.getType(), { round: round }))
        }
        break
      case 'hsv':
      case 'hsva':
        let hsv: Colors.hsv = color.to('hsv', { round: false })
        if (typeof distanceShade === 'undefined') {
          if (100 - hsv.v < hsv.v) {
            distanceShade = (100 - hsv.v) / 50 * distance
          } else {
            distanceShade = distance
            distance = hsv.v / 50 * distanceShade
          }
        }

        for (let i = 0; i < colors; i++) {
          scheme.push(Modify.hsvDarken(hsv, (colors - i) / colors * distanceShade).to(color.getType(), { round: round }))
        }
        scheme.push(hsv.to(color.getType(), { round: round }))
        for (let i = 1; i <= colors; i++) {
          scheme.push(Modify.hsvLighten(hsv, i / colors * distance).to(color.getType(), { round: round }))
        }
        break
      case 'hsi':
      case 'hsia':
        let hsi: Colors.hsi = color.to('hsi', { round: false })
        if (typeof distanceShade === 'undefined') {
          if (100 - hsi.i < hsi.i) {
            distanceShade = (100 - hsi.i) / 50 * distance
          } else {
            distanceShade = distance
            distance = hsi.i / 50 * distanceShade
          }
        }

        for (let i = 0; i < colors; i++) {
          scheme.push(Modify.hsiDarken(hsi, (colors - i) / colors * distanceShade).to(color.getType(), { round: round }))
        }
        scheme.push(hsi.to(color.getType(), { round: round }))
        for (let i = 1; i <= colors; i++) {
          scheme.push(Modify.hsiLighten(hsi, i / colors * distance).to(color.getType(), { round: round }))
        }
        break
      case 'hsp':
      case 'hspa':
        let hsp: Colors.hsp = color.to('hsp', { round: false })
        if (typeof distanceShade === 'undefined') {
          if (100 - hsp.p < hsp.p) {
            distanceShade = (100 - hsp.p) / 50 * distance
          } else {
            distanceShade = distance
            distance = hsp.p / 50 * distanceShade
          }
        }

        for (let i = 0; i < colors; i++) {
          scheme.push(Modify.hspDarken(hsp, (colors - i) / colors * distanceShade).to(color.getType(), { round: round }))
        }
        scheme.push(hsp.to(color.getType(), { round: round }))
        for (let i = 1; i <= colors; i++) {
          scheme.push(Modify.hspLighten(hsp, i / colors * distance).to(color.getType(), { round: round }))
        }
        break
      case 'rgb2':
      case 'rgba2':
        let rgb2: Colors.rgb = color.to('rgb', { round: false })
        if (typeof distanceShade === 'undefined') {
          let avg = (rgb2.r + rgb2.g + rgb2.b) / 3
          if (rgb2.max - avg < avg) {
            distanceShade = (rgb2.max - Math.min(rgb2.r, rgb2.g, rgb2.b)) / rgb2.max / 2 * distance
          } else {
            distanceShade = distance
            distance = Math.max(rgb2.r, rgb2.g, rgb2.b) / rgb2.max / 2 * distanceShade
          }
        }

        for (let i = 0; i < colors; i++) {
          scheme.push(Modify.rgb2Darken(rgb2, (colors - i) / colors * distanceShade).to(color.getType(), { round: round }))
        }
        scheme.push(rgb2.to(color.getType(), { round: round }))
        for (let i = 1; i <= colors; i++) {
          scheme.push(Modify.rgb2Lighten(rgb2, i / colors * distance).to(color.getType(), { round: round }))
        }
        break
      case 'rgb':
      case 'rgba':
        let rgb: Colors.rgb = color.to('rgb', { round: false })
        if (typeof distanceShade === 'undefined') {
          let avg = (rgb.r + rgb.g + rgb.b) / 3
          if (rgb.max - avg < avg) {
            distanceShade = (rgb.max - Math.min(rgb.r, rgb.g, rgb.b)) / rgb.max / 2 * distance
          } else {
            distanceShade = distance
            distance = Math.max(rgb.r, rgb.g, rgb.b) / rgb.max / 2 * distanceShade
          }
        }

        for (let i = 0; i < colors; i++) {
          scheme.push(Modify.rgbDarken(rgb, (colors - i) / colors * distanceShade).to(color.getType(), { round: round }))
        }
        scheme.push(rgb.to(color.getType(), { round: round }))
        for (let i = 1; i <= colors; i++) {
          scheme.push(Modify.rgbLighten(rgb, i / colors * distance).to(color.getType(), { round: round }))
        }
        break
      case 'cmyk':
        let cmyk: Colors.cmyk = color.to('cmyk', { round: false })
        if (typeof distanceShade === 'undefined') {
          if (cmyk.k < 50) {
            distanceShade = cmyk.k / 50 * distance
          } else {
            distanceShade = distance
            distance = (100 - cmyk.k) / 50 * distanceShade
          }
        }

        for (let i = 0; i < colors; i++) {
          scheme.push(Modify.cmykDarken(cmyk, (colors - i) / colors * distanceShade).to(color.getType(), { round: round }))
        }
        scheme.push(cmyk.to(color.getType(), { round: round }))
        for (let i = 1; i <= colors; i++) {
          scheme.push(Modify.cmykLighten(cmyk, i / colors * distance).to(color.getType(), { round: round }))
        }
        break
      default:
        throw new Error('Invalid method for generating color scheme')
    }

    return scheme
  }

  /**
   * Return an array of colors blended from color1 to color2
   *
   * @param {T extends colorType} color1
   * @param {T extends colorType} color2
   * @param {number}              colors  number of colors in scheme (including color1 and color2)
   * @returns {T[]}
   */
  static gradient<T extends colorType>(
    type: string,
    color1: T,
    color2: T,
    colors: number,
    round: boolean = true
  ): T[] {
    if (colors < 2) {
      throw new Error('Unable to generate gradient with less than two colors')
    }
    let inBetweenColors = colors - 2
    let gradient: T[] = []
    gradient.push(color1)
    for (let i = 0; i < inBetweenColors; i++) {
      let amount = (i + 1) / (inBetweenColors + 1)
      switch (type) {
        case 'rgb':
        case 'rgba':
          gradient.push(
            Modify.rgbBlend(
              color1.to('rgb', { round: false }),
              color2.to('rgb', { round: false }),
              amount
            ).to(color1.getType(), { round: round })
          )
          break
        case 'hsv':
        case 'hsva':
          gradient.push(
            Modify.hsvBlend(
              color1.to('hsv', { round: false }),
              color2.to('hsv', { round: false }),
              amount
            ).to(color1.getType(), { round: round })
          )
          break
        case 'hsl':
        case 'hsla':
          gradient.push(
            Modify.hslBlend(
              color1.to('hsl', { round: false }),
              color2.to('hsl', { round: false }),
              amount
            ).to(color1.getType(), { round: round })
          )
          break
        case 'hsi':
        case 'hsia':
          gradient.push(
            Modify.hsiBlend(
              color1.to('hsi', { round: false }),
              color2.to('hsi', { round: false }),
              amount
            ).to(color1.getType(), { round: round })
          )
          break
        case 'hsp':
        case 'hspa':
          gradient.push(
            Modify.hspBlend(
              color1.to('hsp', { round: false }),
              color2.to('hsp', { round: false }),
              amount
            ).to(color1.getType(), { round: round })
          )
          break
        case 'cmyk':
          gradient.push(
            Modify.cmykBlend(
              color1.to('cmyk', { round: false }),
              color2.to('cmyk', { round: false }),
              amount
            ).to(color1.getType(), { round: round })
          )
          break
        case 'yiq':
          gradient.push(
            Modify.yiqBlend(
              color1.to('yiq', { round: false }),
              color2.to('yiq', { round: false }),
              amount
            ).to(color1.getType(), { round: round })
          )
          break
        case 'lab':
          gradient.push(
            Modify.labBlend(
              color1.to('lab', { round: false }),
              color2.to('lab', { round: false }),
              amount
            ).to(color1.getType(), { round: round })
          )
          break
        case 'luv':
          gradient.push(
            Modify.luvBlend(
              color1.to('luv', { round: false }),
              color2.to('luv', { round: false }),
              amount
            ).to(color1.getType(), { round: round })
          )
          break
      }
    }
    gradient.push(color2)

    return gradient
  }
}

export = Harmony
