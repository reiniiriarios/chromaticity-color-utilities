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

import { colorType } from './ColorType'
import * as Colors from './Colors'

interface newColorArgs {
  bitDepth?: number
  bitRate?: number
  normalized?: boolean
  colorSpace?: string
  referenceWhite?: string
  yLower?: number
  yUpper?: number
  cLower?: number
  cUpper?: number
  kb?: number
  kr?: number
  pb?: number
  pr?: number
}

class Color {
  from<T extends colorType>(
    type: string,
    value: number[] | number | string,
    args?: newColorArgs
  ): T {
    type = type.toLowerCase().replace(/[^a-z0-9]/, '')
    if (typeof args === 'undefined') args = {}
    if (
      typeof args.bitDepth === 'undefined' &&
      typeof args.bitRate !== 'undefined'
    ) {
      args.bitDepth = args.bitRate
    }

    let from: any
    if (typeof value === 'string') {
      if (type == 'hex') from = new Colors.hex(value)
      else throw new Error('Unable to parse color')
    } else if (typeof value === 'number') {
      switch (type) {
        case 'hex':
          from = new Colors.hex(value)
          break
        case 'nm':
        case 'light':
        case 'nanometers':
        case 'nano':
        case 'wavelength':
          from = new Colors.nm(value)
          break
        case 'kelvin':
        case 'k':
        case 'temperature':
        case 'temp':
          from = new Colors.kelvin(value)
          break
        default:
          throw new Error('Unable to determine color type')
      }
    } else {
      switch (type) {
        case 'rgb':
        case 'rgba':
          if (typeof args.bitDepth === 'undefined') args.bitDepth = 8
          if (typeof value[3] === 'undefined') value[3] = 2 ** args.bitDepth - 1
          from = new Colors.rgb(
            value[0],
            value[1],
            value[2],
            value[3],
            args.bitDepth
          )
          break
        case 'rec709':
        case 'rgb709':
        case 'rec709rgb':
        case 'rgbrec709':
          if (typeof args.bitDepth === 'undefined') args.bitDepth = 8
          if (typeof value[3] === 'undefined') value[3] = 2 ** args.bitDepth - 1
          from = new Colors.rec709rgb(
            value[0],
            value[1],
            value[2],
            value[3],
            args.bitDepth
          )
          break
        case 'rec2020':
        case 'rgb2020':
        case 'rec2020rgb':
        case 'rgbrec2020':
          if (typeof args.bitDepth === 'undefined') args.bitDepth = 10
          if (typeof value[3] === 'undefined') value[3] = 2 ** args.bitDepth - 1
          from = new Colors.rec2020rgb(
            value[0],
            value[1],
            value[2],
            value[3],
            args.bitDepth
          )
          break
        case 'hsv':
        case 'hsva':
          if (typeof value[3] === 'undefined') value[3] = 100
          from = new Colors.hsv(value[0], value[1], value[2], value[3])
          break
        case 'hsl':
        case 'hsla':
          if (typeof value[3] === 'undefined') value[3] = 100
          from = new Colors.hsl(value[0], value[1], value[2], value[3])
          break
        case 'hsi':
        case 'hsia':
          if (typeof value[3] === 'undefined') value[3] = 100
          from = new Colors.hsi(value[0], value[1], value[2], value[3])
          break
        case 'hsp':
        case 'hspa':
          if (typeof value[3] === 'undefined') value[3] = 100
          from = new Colors.hsp(
            value[0],
            value[1],
            value[2],
            value[3],
            args.pb,
            args.pr
          )
          break
        case 'cmyk':
          from = new Colors.cmyk(value[0], value[1], value[2], value[3])
          break
        case 'yiq':
          from = new Colors.yiq(value[0], value[1], value[2], args.normalized)
          break
        case 'xyz':
          from = new Colors.xyz(value[0], value[1], value[2])
          break
        case 'xyy':
          from = new Colors.xyy(value[0], value[1], value[2])
          break
        case 'lab':
          from = new Colors.lab(value[0], value[1], value[2])
          break
        case 'luv':
          from = new Colors.luv(value[0], value[1], value[2])
          break
        case 'ypbpr':
          if (typeof args.kb == 'undefined' || typeof args.kr == 'undefined') {
            throw new Error('Must supply Kb and Kr constants')
          }
          from = new Colors.ypbpr(
            value[0],
            value[1],
            value[2],
            args.kb,
            args.kr
          )
          break
        case 'ycbcr':
          from = new Colors.ycbcr(
            value[0],
            value[1],
            value[2],
            args.yLower,
            args.yUpper,
            args.cLower,
            args.cUpper
          )
          break
        default:
          throw new Error('Unable to determine color type')
      }
    }
    return from
  }
}

export default new Color()
