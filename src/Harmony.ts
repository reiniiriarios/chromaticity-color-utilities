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
    distanceToBlack: number = 1,
    round: boolean = true
  ): T[] {
    let scheme: T[] = []
    let start: number, end: number, separation: number
    switch (method) {
      case 'hsv':
      case 'hsva':
        let hsv: Colors.hsv = color.to('hsv', { round: false })
        start = hsv.v
        end = start * (1 - Math.min(Math.max(distanceToBlack, 0), 1))
        separation = (start - end) / (colors - 1)
        for (let i = 0; i < colors; i++) {
          let nextV = Math.max(start - separation * i, 0)
          scheme.push(
            new Colors.hsv(hsv.h, hsv.s, nextV, hsv.a).to(
              color.constructor.name,
              {
                round: round,
              }
            )
          )
        }
        break
      case 'hsi':
      case 'hsia':
        let hsi: Colors.hsi = color.to('hsi', { round: false })
        start = hsi.i
        end = start * (1 - Math.min(Math.max(distanceToBlack, 0), 1))
        separation = (start - end) / (colors - 1)
        for (let i = 0; i < colors; i++) {
          let nextI = Math.max(start - separation * i, 0)
          scheme.push(
            new Colors.hsi(hsi.h, hsi.s, nextI, hsi.a).to(
              color.constructor.name,
              {
                round: round,
              }
            )
          )
        }
        break
      case 'hsp':
      case 'hspa':
        let hsp: Colors.hsp = color.to('hsp', { round: false })
        start = hsp.p
        end = start * (1 - Math.min(Math.max(distanceToBlack, 0), 1))
        separation = (start - end) / (colors - 1)
        for (let i = 0; i < colors; i++) {
          let nextP = Math.max(start - separation * i, 0)
          scheme.push(
            new Colors.hsp(hsp.h, hsp.s, nextP, hsp.a).to(
              color.constructor.name,
              {
                round: round,
              }
            )
          )
        }
        break
      case 'hsl':
      case 'hsla':
        let hsl: Colors.hsl = color.to('hsl', { round: false })
        start = hsl.l
        end = start * (1 - Math.min(Math.max(distanceToBlack, 0), 1))
        separation = (start - end) / (colors - 1)
        for (let i = 0; i < colors; i++) {
          let nextL = Math.max(start - separation * i, 0)
          scheme.push(
            new Colors.hsl(hsl.h, hsl.s, nextL, hsl.a).to(
              color.constructor.name,
              {
                round: round,
              }
            )
          )
        }
        break
      case 'rgb':
      case 'rgba':
        let rgb: Colors.rgb = color.to('rgb', { round: false })
        start = Math.max(rgb.r, rgb.g, rgb.b)
        end = start * (1 - Math.min(Math.max(distanceToBlack, 0), 1))
        separation = (start - end) / (colors - 1)
        for (let i = 0; i < colors; i++) {
          let rNext = Math.max(rgb.r - separation * i, 0)
          let gNext = Math.max(rgb.g - separation * i, 0)
          let bNext = Math.max(rgb.b - separation * i, 0)
          scheme.push(
            new Colors.rgb(rNext, gNext, bNext, rgb.a).to(
              color.constructor.name,
              { round: round, bitDepth: rgb.bitDepth }
            )
          )
        }
        break
      case 'rgb2':
      case 'rgba2':
        let rgb2: Colors.rgb = color.to('rgb', { round: false })
        let rEnd = rgb2.r * (1 - Math.min(Math.max(distanceToBlack, 0), 1))
        let gEnd = rgb2.g * (1 - Math.min(Math.max(distanceToBlack, 0), 1))
        let bEnd = rgb2.b * (1 - Math.min(Math.max(distanceToBlack, 0), 1))
        let rSep = (rgb2.r - rEnd) / (colors - 1)
        let gSep = (rgb2.g - gEnd) / (colors - 1)
        let bSep = (rgb2.b - bEnd) / (colors - 1)
        for (let i = 0; i < colors; i++) {
          let rNext = Math.max(rgb2.r - rSep * i, 0)
          let gNext = Math.max(rgb2.g - gSep * i, 0)
          let bNext = Math.max(rgb2.b - bSep * i, 0)
          scheme.push(
            new Colors.rgb(rNext, gNext, bNext, rgb2.a).to(
              color.constructor.name,
              { round: round, bitDepth: rgb2.bitDepth }
            )
          )
        }
        break
      case 'cmyk':
        let cmyk: Colors.cmyk = color.to('cmyk', { round: false })
        // reverse algorithm, max k is all values = 100
        let cEnd = cmyk.c + (100 - cmyk.c) * Math.min(Math.max(distanceToBlack, 0), 1)
        let mEnd = cmyk.m + (100 - cmyk.m) * Math.min(Math.max(distanceToBlack, 0), 1)
        let yEnd = cmyk.y + (100 - cmyk.y) * Math.min(Math.max(distanceToBlack, 0), 1)
        let kEnd = cmyk.k + (100 - cmyk.k) * Math.min(Math.max(distanceToBlack, 0), 1)
        let cSep = (cmyk.c - cEnd) / (colors - 1)
        let mSep = (cmyk.m - mEnd) / (colors - 1)
        let ySep = (cmyk.y - yEnd) / (colors - 1)
        let kSep = (cmyk.k - kEnd) / (colors - 1)
        for (let i = 0; i < colors; i++) {
          let nextC = Math.min(cmyk.c - cSep * i, 100)
          let nextM = Math.min(cmyk.m - mSep * i, 100)
          let nextY = Math.min(cmyk.y - ySep * i, 100)
          let nextK = Math.min(cmyk.k - kSep * i, 100)
          scheme.push(
            new Colors.cmyk(nextC, nextM, nextY, nextK).to(
              color.constructor.name,
              {
                round: round,
              }
            )
          )
        }
        break
      default:
        throw new Error('Invalid method for generating color scheme')
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
    distanceToWhite: number = 1,
    round: boolean = true
  ): T[] {
    let scheme: T[] = []
    let start: number, end: number, separation: number
    switch (method) {
      case 'hsv':
      case 'hsva':
        let hsv: Colors.hsv = color.to('hsv', { round: false })
        let startV = hsv.v
        let endV =
          startV + (100 - startV) * Math.min(Math.max(distanceToWhite, 0), 1)
        let separationV = (endV - startV) / (colors - 1)
        let startVS = hsv.s
        let separationVS = (0 - startVS) / (colors - 1)
        for (let i = 0; i < colors; i++) {
          let nextV = Math.min(startV + separationV * i, 100)
          let nextS = Math.min(startVS + separationVS * i, 100)
          scheme.push(
            new Colors.hsv(hsv.h, nextS, nextV).to(color.constructor.name, {
              round: round,
            })
          )
        }
        break
      case 'hsi':
      case 'hsia':
        let hsi: Colors.hsi = color.to('hsi', { round: false })
        start = hsi.i
        end = start + (100 - start) * Math.min(Math.max(distanceToWhite, 0), 1)
        separation = (end - start) / (colors - 1)
        let startIS = hsi.s
        let separationIS = (0 - startIS) / (colors - 1)
        for (let i = 0; i < colors; i++) {
          let nextI = Math.min(start + separation * i, 100)
          let nextS = Math.min(startIS + separationIS * i, 100)
          scheme.push(
            new Colors.hsi(hsi.h, nextS, nextI).to(color.constructor.name, {
              round: round,
            })
          )
        }
        break
      case 'hsp':
      case 'hspa':
        let hsp: Colors.hsp = color.to('hsp', { round: false })
        start = hsp.p
        end = start + (100 - start) * Math.min(Math.max(distanceToWhite, 0), 1)
        separation = (end - start) / (colors - 1)
        for (let i = 0; i < colors; i++) {
          let nextP = Math.min(start + separation * i, 100)
          scheme.push(
            new Colors.hsl(hsp.h, hsp.s, nextP).to(color.constructor.name, {
              round: round,
            })
          )
        }
        break
      case 'hsl':
      case 'hsla':
        let hsl: Colors.hsl = color.to('hsl', { round: false })
        start = hsl.l
        end = start + (100 - start) * Math.min(Math.max(distanceToWhite, 0), 1)
        separation = (end - start) / (colors - 1)
        for (let i = 0; i < colors; i++) {
          let nextL = Math.min(start + separation * i, 100)
          scheme.push(
            new Colors.hsl(hsl.h, hsl.s, nextL).to(color.constructor.name, {
              round: round,
            })
          )
        }
        break
      case 'rgb':
      case 'rgba':
        let rgb: Colors.rgb = color.to('rgb', { round: false })
        start = Math.min(rgb.r, rgb.g, rgb.b)
        end =
          start + (rgb.max - start) * Math.min(Math.max(distanceToWhite, 0), 1)
        separation = (end - start) / (colors - 1)
        for (let i = 0; i < colors; i++) {
          let rNext = Math.min(rgb.r + separation * i, rgb.max)
          let gNext = Math.min(rgb.g + separation * i, rgb.max)
          let bNext = Math.min(rgb.b + separation * i, rgb.max)
          scheme.push(
            new Colors.rgb(rNext, gNext, bNext, rgb.a).to(
              color.constructor.name,
              { round: round, bitDepth: rgb.bitDepth }
            )
          )
        }
        break
      case 'rgb2':
      case 'rgba2':
        let rgb2: Colors.rgb = color.to('rgb', { round: false })
        let rEnd =
          rgb2.r +
          (rgb2.max - rgb2.r) * Math.min(Math.max(distanceToWhite, 0), 1)
        let gEnd =
          rgb2.g +
          (rgb2.max - rgb2.g) * Math.min(Math.max(distanceToWhite, 0), 1)
        let bEnd =
          rgb2.b +
          (rgb2.max - rgb2.b) * Math.min(Math.max(distanceToWhite, 0), 1)
        let rSep = (rEnd - rgb2.r) / (colors - 1)
        let gSep = (gEnd - rgb2.g) / (colors - 1)
        let bSep = (bEnd - rgb2.b) / (colors - 1)
        for (let i = 0; i < colors; i++) {
          let rNext = Math.min(rgb2.r + rSep * i, rgb2.max)
          let gNext = Math.min(rgb2.g + gSep * i, rgb2.max)
          let bNext = Math.min(rgb2.b + bSep * i, rgb2.max)
          scheme.push(
            new Colors.rgb(rNext, gNext, bNext, rgb2.a).to(
              color.constructor.name,
              { round: round, bitDepth: rgb2.bitDepth }
            )
          )
        }
        break
      case 'cmyk':
        let cmyk: Colors.cmyk = color.to('cmyk', { round: false })
        // reverse algorithm, max "white" is all values = 0
        let cEnd = cmyk.c * (1 - Math.min(Math.max(distanceToWhite, 0), 1))
        let mEnd = cmyk.m * (1 - Math.min(Math.max(distanceToWhite, 0), 1))
        let yEnd = cmyk.y * (1 - Math.min(Math.max(distanceToWhite, 0), 1))
        let kEnd = cmyk.k * (1 - Math.min(Math.max(distanceToWhite, 0), 1))
        let cSep = (cmyk.c - cEnd) / (colors - 1)
        let mSep = (cmyk.m - mEnd) / (colors - 1)
        let ySep = (cmyk.y - yEnd) / (colors - 1)
        let kSep = (cmyk.k - kEnd) / (colors - 1)
        for (let i = 0; i < colors; i++) {
          let nextC = Math.max(cmyk.c - cSep * i, 0)
          let nextM = Math.max(cmyk.m - mSep * i, 0)
          let nextY = Math.max(cmyk.y - ySep * i, 0)
          let nextK = Math.max(cmyk.k - kSep * i, 0)
          console.log(nextC, nextM, nextY, nextK)
          scheme.push(
            new Colors.cmyk(nextC, nextM, nextY, nextK).to(
              color.constructor.name,
              {
                round: round,
              }
            )
          )
        }
        break
      default:
        throw new Error('Invalid method for generating color scheme')
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
          scheme.push(
            new Colors.hsl(hsl.h, hsl.s, nextL, hsl.a).to(
              color.constructor.name,
              {
                round: round,
              }
            )
          )
        }
        scheme.push(hsl.to(color.constructor.name, { round: round }))
        for (let i = 1; i <= colors; i++) {
          let nextL = Math.min(hsl.l + tSeparation * i, 100)
          scheme.push(
            new Colors.hsl(hsl.h, hsl.s, nextL, hsl.a).to(
              color.constructor.name,
              {
                round: round,
              }
            )
          )
        }
        break
      case 'hsv':
      case 'hsva':
        let hsv: Colors.hsv = color.to('hsv', { round: false })
        let separationTVS: number
        if (typeof distanceShade === 'undefined') {
          let distanceFromWhite = 100 - hsv.v + hsv.s
          if (distanceFromWhite < 100) {
            // closer to white
            tEnd = hsv.v + (100 - hsv.v) * Math.min(Math.max(distance, 0), 1)
            tSeparation = (tEnd - hsv.v) / colors
            separationTVS = (0 - hsv.s) / colors
            sSeparation = tSeparation - separationTVS
            sEnd = hsv.v - sSeparation * colors
          } else {
            // closer to black
            sEnd = hsv.v * (1 - Math.min(Math.max(distance, 0), 1))
            sSeparation = (hsv.v - sEnd) / colors
            tEnd = hsv.v + sSeparation * (colors - 1)
            separationTVS = (-1 * Math.abs(hsv.s - tEnd)) / colors
            // tint spacing should take saturation into account?
            tSeparation = sSeparation + separationTVS
          }
        } else {
          tEnd = hsv.v + (100 - hsv.v) * Math.min(Math.max(distance, 0), 1)
          tSeparation = (tEnd - hsv.v) / colors
          sEnd = hsv.v * (1 - Math.min(Math.max(distanceShade, 0), 1))
          sSeparation = (hsv.v - sEnd) / colors
          separationTVS = (0 - hsv.s) / colors
        }

        for (let i = 0; i < colors; i++) {
          let nextV = Math.min(Math.max(sEnd + sSeparation * i, 0), 100)
          scheme.push(
            new Colors.hsv(hsv.h, hsv.s, nextV, hsv.a).to(
              color.constructor.name,
              {
                round: round,
              }
            )
          )
        }
        for (let i = 0; i <= colors; i++) {
          let nextV = Math.max(Math.min(hsv.v + tSeparation * i, 100), 0)
          let nextTVS = Math.min(Math.max(hsv.s + separationTVS * i, 0), 100)
          scheme.push(
            new Colors.hsv(hsv.h, nextTVS, nextV, hsv.a).to(
              color.constructor.name,
              {
                round: round,
              }
            )
          )
        }
        break
      case 'hsi':
      case 'hsia':
        let hsi: Colors.hsi = color.to('hsi', { round: false })
        let separationTIS: number
        if (typeof distanceShade === 'undefined') {
          let distanceFromWhite = 100 - hsi.i + hsi.s
          if (distanceFromWhite < 100) {
            // closer to white
            tEnd = hsi.i + (100 - hsi.i) * Math.min(Math.max(distance, 0), 1)
            tSeparation = (tEnd - hsi.i) / colors
            sSeparation = tSeparation
            sEnd = hsi.i - sSeparation * colors
            separationTIS = (0 - hsi.s) / colors
          } else {
            // closer to black
            sEnd = hsi.i * (1 - Math.min(Math.max(distance, 0), 1))
            sSeparation = (hsi.i - sEnd) / colors
            tSeparation = sSeparation
            tEnd = hsi.i + tSeparation * (colors - 1)
            separationTIS = (-1 * Math.abs(hsi.s - tEnd)) / colors
          }
        } else {
          tEnd = hsi.i + (100 - hsi.i) * Math.min(Math.max(distance, 0), 1)
          tSeparation = (tEnd - hsi.i) / colors
          sEnd = hsi.i * (1 - Math.min(Math.max(distanceShade, 0), 1))
          sSeparation = (hsi.i - sEnd) / colors
          separationTIS = (0 - hsi.s) / colors
        }

        for (let i = 0; i < colors; i++) {
          let nextI = Math.max(sEnd + sSeparation * i, 0)
          scheme.push(
            new Colors.hsi(hsi.h, hsi.s, nextI, hsi.a).to(
              color.constructor.name,
              {
                round: round,
              }
            )
          )
        }
        scheme.push(hsi.to(color.constructor.name, { round: round }))
        for (let i = 1; i <= colors; i++) {
          let nextI = Math.min(hsi.i + tSeparation * i, 100)
          let nextTIS = Math.max(hsi.s + separationTIS * i, 0)
          scheme.push(
            new Colors.hsi(hsi.h, nextTIS, nextI, hsi.a).to(
              color.constructor.name,
              {
                round: round,
              }
            )
          )
        }
        break
      case 'hsp':
      case 'hspa':
        let hsp: Colors.hsp = color.to('hsp', { round: false })
        if (typeof distanceShade === 'undefined') {
          if (100 - hsp.p < hsp.p) {
            tEnd = hsp.p + (100 - hsp.p) * Math.min(Math.max(distance, 0), 1)
            tSeparation = (tEnd - hsp.p) / colors
            sSeparation = tSeparation
            sEnd = hsp.p - sSeparation * colors
          } else {
            sEnd = hsp.p * (1 - Math.min(Math.max(distance, 0), 1))
            sSeparation = (hsp.p - sEnd) / colors
            tSeparation = sSeparation
            tEnd = hsp.p + tSeparation * colors
          }
        } else {
          tEnd = hsp.p + (100 - hsp.p) * Math.min(Math.max(distance, 0), 1)
          tSeparation = (tEnd - hsp.p) / colors
          sEnd = hsp.p * (1 - Math.min(Math.max(distanceShade, 0), 1))
          sSeparation = (hsp.p - sEnd) / colors
        }

        for (let i = 0; i < colors; i++) {
          let nextP = Math.max(sEnd + sSeparation * i, 0)
          scheme.push(
            new Colors.hsp(hsp.h, hsp.s, nextP, hsp.a).to(
              color.constructor.name,
              {
                round: round,
              }
            )
          )
        }
        scheme.push(hsp.to(color.constructor.name, { round: round }))
        for (let i = 1; i <= colors; i++) {
          let nextP = Math.min(hsp.p + tSeparation * i, 100)
          scheme.push(
            new Colors.hsp(hsp.h, hsp.s, nextP, hsp.a).to(
              color.constructor.name,
              {
                round: round,
              }
            )
          )
        }
        break
      case 'rgb':
      case 'rgba':
        let rgb: Colors.rgb = color.to('rgb', { round: false })
        let maxVal = Math.max(rgb.r, rgb.g, rgb.b)
        let minVal = Math.min(rgb.r, rgb.g, rgb.b)
        if (typeof distanceShade === 'undefined') {
          if (rgb.max - minVal < maxVal) {
            tEnd =
              minVal + (rgb.max - minVal) * Math.min(Math.max(distance, 0), 1)
            tSeparation = (tEnd - minVal) / colors
            sSeparation = tSeparation
            sEnd = minVal - sSeparation * colors
          } else {
            sEnd = maxVal * (1 - Math.min(Math.max(distance, 0), 1))
            sSeparation = (maxVal - sEnd) / colors
            tSeparation = sSeparation
            tEnd = maxVal + tSeparation * colors
          }
        } else {
          tEnd =
            minVal + (rgb.max - minVal) * Math.min(Math.max(distance, 0), 1)
          tSeparation = (tEnd - minVal) / colors
          sEnd = maxVal * (1 - Math.min(Math.max(distanceShade, 0), 1))
          sSeparation = (maxVal - sEnd) / colors
        }

        for (let i = 1; i <= colors; i++) {
          let rNext = Math.max(rgb.r - sSeparation * i, 0)
          let gNext = Math.max(rgb.g - sSeparation * i, 0)
          let bNext = Math.max(rgb.b - sSeparation * i, 0)
          scheme.unshift(
            new Colors.rgb(rNext, gNext, bNext, rgb.a).to(
              color.constructor.name,
              { round: round, bitDepth: rgb.bitDepth }
            )
          )
        }
        scheme.push(rgb.to(color.constructor.name, { round: round }))
        for (let i = 1; i <= colors; i++) {
          let rNext = Math.min(rgb.r + tSeparation * i, rgb.max)
          let gNext = Math.min(rgb.g + tSeparation * i, rgb.max)
          let bNext = Math.min(rgb.b + tSeparation * i, rgb.max)
          scheme.push(
            new Colors.rgb(rNext, gNext, bNext, rgb.a).to(
              color.constructor.name,
              { round: round, bitDepth: rgb.bitDepth }
            )
          )
        }
        break
      case 'rgb2':
      case 'rgba2':
        let rgb2: Colors.rgb = color.to('rgb', { round: false })
        let tREnd: number,
          tGEnd: number,
          tBEnd: number,
          sREnd: number,
          sGEnd: number,
          sBEnd: number,
          tRSep: number,
          tGSep: number,
          tBSep: number,
          sRSep: number,
          sGSep: number,
          sBSep: number

        if (typeof distanceShade === 'undefined') {
          let percentDistanceToWhite = (rgb2.max * 3 - rgb2.r - rgb2.g - rgb2.b) / (rgb2.max * 3)
          if (percentDistanceToWhite < 0.5) {
            tREnd = rgb2.r + (rgb2.max - rgb2.r) * Math.min(Math.max(distance, 0), 1)
            tRSep = (tREnd - rgb2.r) / colors
            sREnd = rgb2.r * percentDistanceToWhite
            sRSep = (rgb2.r - sREnd) / colors

            tGEnd = rgb2.g + (rgb2.max - rgb2.g) * Math.min(Math.max(distance, 0), 1)
            tGSep = (tGEnd - rgb2.g) / colors
            sGEnd = rgb2.g * percentDistanceToWhite
            sGSep = (rgb2.g - sGEnd) / colors

            tBEnd = rgb2.b + (rgb2.max - rgb2.b) * Math.min(Math.max(distance, 0), 1)
            tBSep = (tBEnd - rgb2.b) / colors
            sBEnd = rgb2.b * percentDistanceToWhite
            sBSep = (rgb2.b - sBEnd) / colors

          } else {
            sREnd = rgb2.r * (1 - Math.min(Math.max(distance, 0), 1))
            sRSep = (rgb2.r - sREnd) / colors
            tREnd = rgb2.r * (1 + ((rgb2.max - rgb2.r) / rgb2.max))
            tRSep = (tREnd - rgb2.r) / colors

            sGEnd = rgb2.g * (1 - Math.min(Math.max(distance, 0), 1))
            sGSep = (rgb2.g - sGEnd) / colors
            tGEnd = rgb2.g * (1 + ((rgb2.max - rgb2.g) / rgb2.max))
            tGSep = (tGEnd - rgb2.g) / colors

            sBEnd = rgb2.b * (1 - Math.min(Math.max(distance, 0), 1))
            sBSep = (rgb2.b - sBEnd) / colors
            tBEnd = rgb2.b * (1 + ((rgb2.max - rgb2.b) / rgb2.max))
            tBSep = (tBEnd - rgb2.b) / colors
          }
        } else {
          tREnd = rgb2.r + (rgb2.max - rgb2.r) * Math.min(Math.max(distance, 0), 1)
          tRSep = (tREnd - rgb2.r) / colors
          sREnd = rgb2.r * (1 - Math.min(Math.max(distanceShade, 0), 1))
          sRSep = (rgb2.r - sREnd) / colors

          tGEnd = rgb2.g + (rgb2.max - rgb2.g) * Math.min(Math.max(distance, 0), 1)
          tGSep = (tGEnd - rgb2.g) / colors
          sGEnd = rgb2.g * (1 - Math.min(Math.max(distanceShade, 0), 1))
          sGSep = (rgb2.g - sGEnd) / colors

          tBEnd = rgb2.b + (rgb2.max - rgb2.b) * Math.min(Math.max(distance, 0), 1)
          tBSep = (tBEnd - rgb2.b) / colors
          sBEnd = rgb2.b * (1 - Math.min(Math.max(distanceShade, 0), 1))
          sBSep = (rgb2.b - sBEnd) / colors
        }

        for (let i = 0; i < colors; i++) {
          let rNext = Math.min(Math.max(sREnd + sRSep * i, 0), rgb2.max)
          let gNext = Math.min(Math.max(sGEnd + sGSep * i, 0), rgb2.max)
          let bNext = Math.min(Math.max(sBEnd + sBSep * i, 0), rgb2.max)
          scheme.push(
            new Colors.rgb(rNext, gNext, bNext, rgb2.a).to(
              color.constructor.name,
              {
                round: round,
              }
            )
          )
        }
        for (let i = 0; i <= colors; i++) {
          let rNext = Math.min(Math.max(rgb2.r + tRSep * i, 0), rgb2.max)
          let gNext = Math.min(Math.max(rgb2.g + tGSep * i, 0), rgb2.max)
          let bNext = Math.min(Math.max(rgb2.b + tBSep * i, 0), rgb2.max)
          scheme.push(
            new Colors.rgb(rNext, gNext, bNext, rgb2.a).to(
              color.constructor.name,
              {
                round: round,
              }
            )
          )
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
              amount,
              false
            ).to(color1.constructor.name, { round: round })
          )
          break
        case 'hsv':
        case 'hsva':
          gradient.push(
            Modify.hsvBlend(
              color1.to('hsv', { round: false }),
              color2.to('hsv', { round: false }),
              amount,
              false
            ).to(color1.constructor.name, { round: round })
          )
          break
        case 'hsl':
        case 'hsla':
          gradient.push(
            Modify.hslBlend(
              color1.to('hsl', { round: false }),
              color2.to('hsl', { round: false }),
              amount,
              false
            ).to(color1.constructor.name, { round: round })
          )
          break
        case 'hsi':
        case 'hsia':
          gradient.push(
            Modify.hsiBlend(
              color1.to('hsi', { round: false }),
              color2.to('hsi', { round: false }),
              amount,
              false
            ).to(color1.constructor.name, { round: round })
          )
          break
        case 'hsp':
        case 'hspa':
          gradient.push(
            Modify.hspBlend(
              color1.to('hsp', { round: false }),
              color2.to('hsp', { round: false }),
              amount,
              false
            ).to(color1.constructor.name, { round: round })
          )
          break
        case 'cmyk':
          gradient.push(
            Modify.cmykBlend(
              color1.to('cmyk', { round: false }),
              color2.to('cmyk', { round: false }),
              amount,
              false
            ).to(color1.constructor.name, { round: round })
          )
          break
        case 'yiq':
          gradient.push(
            Modify.yiqBlend(
              color1.to('yiq', { round: false }),
              color2.to('yiq', { round: false }),
              amount,
              false
            ).to(color1.constructor.name, { round: round })
          )
          break
      }
    }
    gradient.push(color2)

    return gradient
  }
}

export = Harmony
