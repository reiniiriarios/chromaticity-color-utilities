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

import Convert from './Convert'
import Modify from './Modify'
import Harmony from './Harmony'
import * as Colors from './Colors'

export interface newColorArgs {
  round?: boolean
  bitDepth?: number
  bitRate?: number
  normalize?: boolean
  colorSpace?: string
  referenceWhite?: string
  kb?: number
  kr?: number
  pb?: number
  pr?: number
  yLower?: number
  yUpper?: number
  cLower?: number
  cUpper?: number
  gamma?: number
}

export interface allColorProps {
  bitDepth?: number
  normalized?: boolean
  colorSpace?: string
  referenceWhite?: string
  kb?: number
  kr?: number
  pb?: number
  pr?: number
  pg?: number
  yLower?: number
  yUpper?: number
  cLower?: number
  cUpper?: number
  gamma?: number
}

export interface modifyArgs {
  method?: string
  with?: colorType
  amount?: number
  round?: boolean
}

export interface schemeArgs {
  angle?: number
  colors?: number
  distance?: number
  distanceToBlack?: number
  distanceToWhite?: number
  round?: boolean
  method?: string
  with?: colorType
}

export abstract class colorType {
  constructor() {}

  protected type: string = 'colorType'

  bitDepth?: number
  normalized?: boolean
  colorSpace?: string
  referenceWhite?: string
  kb?: number
  kr?: number
  pb?: number
  pr?: number
  yLower?: number
  yUpper?: number
  cLower?: number
  cUpper?: number
  gamma?: number

  a?: number

  /**
   * Returns generic simplified object for toString()
   * Overwrite with each subclass
   *
   * @returns {object}
   */
  protected toStringValues = (): object => ({})

  /**
   * Stringify object
   *
   * @param   {string} whitespace equiv to third JSON.stringify parameter
   * @returns {string}
   */
  public toString(whitespace?: string, quotes: boolean = true): string {
    let colon = whitespace ? ': ' : ':' // only have a space if the string is whitespaced
    let json = JSON.stringify(this.toStringValues(), null, whitespace)
    if (!quotes) {
      json = json.replace(/"([^"]+)":/g, '$1:')
    }
    return this.getType() + colon + json
  }

  public to<T extends colorType>(type: string, args?: newColorArgs): T {
    args = this.setArgs(args)
    type = type.toLowerCase().replace(/[^a-z0-9]/, '')
    let to: any
    switch (type) {
      case 'rgb':
      case 'rgba':
        to = this.torgb(args)
        break
      case 'hex':
        to = this.tohex(args)
        break
      case 'rec709':
      case 'rgb709':
      case 'rec709rgb':
      case 'rgbrec709':
        to = this.torec709(args)
        break
      case 'rec2020':
      case 'rgb2020':
      case 'rec2020rgb':
      case 'rgbrec2020':
        to = this.torec2020(args)
        break
      case 'hsv':
      case 'hsva':
        to = this.tohsv(args)
        break
      case 'hsl':
      case 'hsla':
        to = this.tohsl(args)
        break
      case 'hsi':
      case 'hsia':
        to = this.tohsi(args)
        break
      case 'hsp':
      case 'hspa':
      case 'hspb':
      case 'hspba':
        to = this.tohsp(args)
        break
      case 'cmyk':
        to = this.tocmyk(args)
        break
      case 'yiq':
        to = this.toyiq(args)
        break
      case 'xyz':
        to = this.toxyz(args)
        break
      case 'xyy':
        to = this.toxyy(args)
        break
      case 'lab':
        to = this.tolab(args)
        break
      case 'luv':
        to = this.toluv(args)
        break
      case 'ypbpr':
        to = this.toypbpr(args)
        break
      case 'ycbcr':
        to = this.toycbcr(args)
        break
      default:
        throw new Error(
          'Unable to find conversion path from ' +
            this.getType() +
            ' to ' +
            type
        )
    }
    return to
  }

  public getType(): string {
    return this.type
  }

  public modify<T extends colorType>(
    modification: string,
    args?: modifyArgs
  ): T {
    modification = modification.toLowerCase()
    if (typeof args == 'undefined') args = {}
    let og: string = this.getType()
    let ogargs: newColorArgs = {
      round: args.round,
      bitDepth: this.bitDepth,
      normalize: this.normalized,
      colorSpace: this.colorSpace,
      referenceWhite: this.referenceWhite,
      kb: this.kb,
      kr: this.kr,
      pb: this.pb,
      pr: this.pr,
      yLower: this.yLower,
      yUpper: this.yUpper,
      cLower: this.cLower,
      cUpper: this.cUpper,
      gamma: this.gamma,
    }
    let ogalpha: number | undefined = this.a
    let modified: any
    switch (modification) {
      case 'blend':
        if (typeof args.with === 'undefined') {
          throw new Error('Missing second color to blend with')
        }
        if (typeof args.method === 'undefined') {
          if (['rgb','hsl','hsi','hsv','hsp','cmyk'].includes(og)) {
            args.method = og
          }
          else {
            args.method = 'rgb'
          }
        }
        let tmpColor1, tmpColor2
        switch (args.method) {
          case 'rgb':
          case 'rgba':
          case 'hex':
            tmpColor1 = this.torgb({ round: false })
            tmpColor2 = args.with.torgb({ round: false })
            modified = Modify.rgbBlend(
              tmpColor1,
              tmpColor2,
              args.amount,
              args.round
            )
            break
          case 'hsv':
          case 'hsva':
            tmpColor1 = this.tohsv({ round: false })
            tmpColor2 = args.with.tohsv({ round: false })
            modified = Modify.hsvBlend(
              tmpColor1,
              tmpColor2,
              args.amount,
              args.round
            )
            break
          case 'hsl':
          case 'hsla':
            tmpColor1 = this.tohsl({ round: false })
            tmpColor2 = args.with.tohsl({ round: false })
            modified = Modify.hslBlend(
              tmpColor1,
              tmpColor2,
              args.amount,
              args.round
            )
            break
          case 'hsi':
          case 'hsia':
            tmpColor1 = this.tohsi({ round: false })
            tmpColor2 = args.with.tohsi({ round: false })
            modified = Modify.hsiBlend(
              tmpColor1,
              tmpColor2,
              args.amount,
              args.round
            )
            break
          case 'hsp':
          case 'hspa':
            tmpColor1 = this.tohsp({ round: false })
            tmpColor2 = args.with.tohsp({ round: false })
            modified = Modify.hspBlend(
              tmpColor1,
              tmpColor2,
              args.amount,
              args.round
            )
            break
          case 'cmyk':
            tmpColor1 = this.tocmyk({ round: false })
            tmpColor2 = args.with.tocmyk({ round: false })
            modified = Modify.cmykBlend(
              tmpColor1,
              tmpColor2,
              args.amount,
              args.round
            )
            break
          default:
            throw new Error('Unrecognized blending method')
        }
        break
      case 'darken':
      case 'darker':
        if (typeof args.method === 'undefined') {
          if (['rgb','hsl','hsi','hsv','hsp','cmyk'].includes(og)) {
            args.method = og
          }
          else {
            args.method = 'hsl'
          }
        }
        switch (args.method) {
          case 'rgb':
          case 'rgba':
            modified = Modify.rgbDarken(
              this.torgb({ round: false }),
              args.amount,
              args.round
            )
            break
          case 'hsl':
          case 'hsla':
          case 'lightness':
            modified = Modify.hslDarken(
              this.tohsl({ round: false }),
              args.amount,
              args.round
            )
            break
          case 'hsv':
          case 'hsva':
          case 'value':
            modified = Modify.hsvDarken(
              this.tohsv({ round: false }),
              args.amount,
              args.round
            )
            break
          case 'hsi':
          case 'hsia':
          case 'intensity':
            modified = Modify.hsiDarken(
              this.tohsi({ round: false }),
              args.amount,
              args.round
            )
            break
          case 'hsp':
          case 'hspa':
          case 'brightness':
          case 'perceived brightness':
          case 'perceived':
          case 'perceivedbrightness':
            modified = Modify.hspDarken(
              this.tohsp({ round: false }),
              args.amount,
              args.round
            )
            break
          case 'cmyk':
            modified = Modify.cmykDarken(
              this.tocmyk({ round: false }),
              args.amount,
              args.round
            )
            break
          case 'cmyk2':
          case 'black':
          case 'cmykBlack':
            modified = Modify.cmykBlackDarken(
              this.tocmyk({ round: false }),
              args.amount,
              args.round
            )
            break
          default:
            throw new Error('Unrecognized darken method')
        }
        break
      case 'lighten':
      case 'lighter':
        if (typeof args.method === 'undefined') {
          if (['rgb','hsl','hsi','hsv','hsp','cmyk'].includes(og)) {
            args.method = og
          }
          else {
            args.method = 'hsl'
          }
        }
        switch (args.method) {
          case 'rgb':
          case 'rgba':
            modified = Modify.rgbLighten(
              this.torgb({ round: false }),
              args.amount,
              args.round
            )
            break
          case 'hsl':
          case 'hsla':
          case 'lightness':
            modified = Modify.hslLighten(
              this.tohsl({ round: false }),
              args.amount,
              args.round
            )
            break
          case 'hsv':
          case 'hsva':
          case 'value':
            modified = Modify.hsvLighten(
              this.tohsv({ round: false }),
              args.amount,
              args.round
            )
            break
          case 'hsi':
          case 'hsia':
          case 'intensity':
            modified = Modify.hsiLighten(
              this.tohsi({ round: false }),
              args.amount,
              args.round
            )
            break
          case 'hsp':
          case 'hspa':
          case 'brightness':
          case 'perceived brightness':
          case 'perceived':
          case 'perceivedbrightness':
            modified = Modify.hspLighten(
              this.tohsp({ round: false }),
              args.amount,
              args.round
            )
            break
          case 'cmyk':
            modified = Modify.cmykLighten(
              this.tocmyk({ round: false }),
              args.amount,
              args.round
            )
            break
          case 'cmyk2':
          case 'black':
          case 'cmykBlack':
            modified = Modify.cmykBlackLighten(
              this.tocmyk({ round: false }),
              args.amount,
              args.round
            )
            break
          default:
            throw new Error('Unrecognized lighten method')
        }
        break
      case 'desaturate':
      case 'desat':
        if (typeof args.method === 'undefined') {
          args.method = 'hsl'
        }
        switch (args.method) {
          case 'hsv':
          case 'hsva':
          case 'value':
            modified = Modify.hsvDesaturate(
              this.tohsv({ round: false }),
              args.amount,
              args.round
            )
            break
          case 'hsl':
          case 'hsla':
          case 'lightness':
            modified = Modify.hslDesaturate(
              this.tohsl({ round: false }),
              args.amount,
              args.round
            )
            break
          default:
            throw new Error('Unrecognized desaturate method')
        }
        break
      case 'saturate':
      case 'sat':
        if (typeof args.method === 'undefined') {
          args.method = 'hsl'
        }
        switch (args.method) {
          case 'hsv':
          case 'hsva':
          case 'value':
            modified = Modify.hsvSaturate(
              this.tohsv({ round: false }),
              args.amount,
              args.round
            )
            break
          case 'hsl':
          case 'hsla':
          case 'lightness':
            modified = Modify.hslSaturate(
              this.tohsl({ round: false }),
              args.amount,
              args.round
            )
            break
          default:
            throw new Error('Unrecognized saturate method')
        }
        break
      default:
        throw new Error('Unrecognized modify action')
    }

    let ogModified: T = modified.to(og, ogargs)
    if (typeof ogalpha !== 'undefined') ogModified.a = ogalpha // otherwise this gets lost on some modifications

    return ogModified
  }

  public scheme<T extends colorType>(type: string, args?: schemeArgs): T[] {
    if (typeof args === 'undefined') args = {}
    let og = this.getType()
    let ogargs: newColorArgs = {
      round: args.round,
      bitDepth: this.bitDepth,
      normalize: this.normalized,
      // Don't pass the following or the color will shift
      // colorSpace: this.colorSpace,
      // referenceWhite: this.referenceWhite,
      kb: this.kb,
      kr: this.kr,
      pb: this.pb,
      pr: this.pr,
      yLower: this.yLower,
      yUpper: this.yUpper,
      cLower: this.cLower,
      cUpper: this.cUpper,
      gamma: this.gamma,
    }
    let ogalpha: number | undefined = this.a
    let intScheme: colorType[]
    let distance: number | undefined
    type = type.toLowerCase()
    switch (type) {
      case 'complement':
      case 'comp':
        let hsv: Colors.hsv = this.to('hsv', { round: false })
        intScheme = Harmony.complement(hsv)
        break
      case 'analogous':
        intScheme = Harmony.analogous(
          this.to('hsv', { round: false }),
          args.angle
        )
        break
      case 'split complement':
      case 'splitcomplement':
      case 'split':
        intScheme = Harmony.splitComplement(
          this.to('hsv', { round: false }),
          args.angle
        )
        break
      case 'triadic':
      case 'triad':
      case 'triangle':
        intScheme = Harmony.triadic(
          this.to('hsv', { round: false }),
          args.angle
        )
        break
      case 'tetradic':
      case 'tetrad':
        intScheme = Harmony.tetradic(
          this.to('hsv', { round: false }),
          args.angle
        )
        break
      case 'square':
        intScheme = Harmony.square(this.to('hsv', { round: false }))
        break
      case 'shade':
      case 'shades':
      case 'darken':
        if (typeof args.colors === 'undefined') {
          throw new Error('Must specify number of colors to include in scheme')
        }
        distance =
          typeof args.distanceToBlack === 'undefined'
            ? args.distance
            : args.distanceToBlack
        intScheme = Harmony.shade(
          this,
          args.method ? args.method.toLowerCase() : 'hsl',
          args.colors,
          distance ?? 1,
          args.round ?? true
        )
        break
      case 'tint':
      case 'tints':
      case 'lighten':
        if (typeof args.colors === 'undefined') {
          throw new Error('Must specify number of colors to include in scheme')
        }
        distance =
          typeof args.distanceToWhite === 'undefined'
            ? args.distance
            : args.distanceToWhite
        intScheme = Harmony.tint(
          this,
          args.method ? args.method.toLowerCase() : 'hsl',
          args.colors,
          distance ?? 1,
          args.round ?? true
        )
        break
      case 'tintshade':
      case 'tintsshades':
      case 'shadetint':
      case 'shadestints':
      case 'lightdark':
      case 'darklight':
        if (typeof args.colors === 'undefined') {
          throw new Error('Must specify number of colors to include in scheme')
        }
        distance =
          typeof args.distanceToWhite === 'undefined'
            ? args.distance
            : args.distanceToWhite
        intScheme = Harmony.shadetint(
          this,
          args.method ? args.method.toLowerCase() : 'hsl',
          args.colors,
          args.round ?? true,
          distance ?? 1,
          args.distanceToBlack
        )
        break
      case 'gradient':
      case 'grad':
        if (typeof args.colors === 'undefined') {
          throw new Error('Must specify number of colors to include in scheme')
        }
        if (typeof args.with === 'undefined') {
          throw new Error('Must specify second color')
        }
        intScheme = Harmony.gradient(
          args.method ? args.method.toLowerCase() : 'rgb',
          this,
          args.with,
          args.colors,
          args.round
        )
        break
      default:
        throw new Error('Unrecognized color scheme')
    }
    let ogScheme: T[] = []
    intScheme.forEach((color) => {
      let ogColor: T = color.to(og, ogargs)
      if (typeof ogalpha !== 'undefined') ogColor.a = ogalpha // otherwise this gets lost on some modifications
      ogScheme.push(ogColor)
    })
    return ogScheme
  }

  public css(): string {
    return 'not yet implemented'
  }

  protected torgb(args: newColorArgs): Colors.rgb {
    // always override
    let rgbOverridden = new Colors.rgb(0, 0, 0)
    return rgbOverridden
  }

  protected torec709(args: newColorArgs): Colors.rec709rgb {
    if (typeof args.bitRate !== 'undefined') args.bitDepth = args.bitRate
    else if (typeof args.bitDepth === 'undefined') args.bitDepth = 8
    let rgb: Colors.rgb = this.torgb(args)
    return Convert.rgb2rec709rgb(rgb, args.round, args.bitDepth)
  }
  protected torec2020(args: newColorArgs): Colors.rec2020rgb {
    if (typeof args.bitRate !== 'undefined') args.bitDepth = args.bitRate
    else if (typeof args.bitDepth === 'undefined') args.bitDepth = 10
    let rgb: Colors.rgb = this.torgb(args)
    return Convert.rgb2rec2020rgb(rgb, args.round, args.bitDepth)
  }
  protected tohex(args: newColorArgs): Colors.hex {
    let rgb: Colors.rgb = this.torgb(args)
    return Convert.rgb2hex(rgb)
  }
  protected tohsv(args: newColorArgs): Colors.hsv {
    let rgb = this.torgb(args)
    return Convert.rgb2hsv(rgb, args.round)
  }
  protected tohsl(args: newColorArgs): Colors.hsl {
    let rgb = this.torgb(args)
    return Convert.rgb2hsl(rgb, args.round)
  }
  protected tohsi(args: newColorArgs): Colors.hsi {
    let rgb = this.torgb(args)
    return Convert.rgb2hsi(rgb, args.round)
  }
  protected tohsp(args: newColorArgs): Colors.hsp {
    let rgb = this.torgb(args)
    return Convert.rgb2hsp(rgb, args.round, args.pb, args.pr)
  }
  protected tocmyk(args: newColorArgs): Colors.cmyk {
    let rgb = this.torgb(args)
    return Convert.rgb2cmyk(rgb, args.round)
  }
  protected toyiq(args: newColorArgs): Colors.yiq {
    let rgb = this.torgb(args)
    return Convert.rgb2yiq(rgb, args.normalize, args.round)
  }
  protected toxyz(args: newColorArgs): Colors.xyz {
    let rgb = this.torgb(args)
    return Convert.rgb2xyz(rgb, args.colorSpace, args.referenceWhite)
  }
  protected toxyy(args: newColorArgs): Colors.xyy {
    return Convert.xyz2xyy(this.toxyz(args), args.referenceWhite)
  }
  protected tolab(args: newColorArgs): Colors.lab {
    return Convert.xyz2lab(this.toxyz(args), args.referenceWhite, args.round)
  }
  protected toluv(args: newColorArgs): Colors.luv {
    return Convert.xyz2luv(this.toxyz(args), args.referenceWhite, args.round)
  }
  protected toypbpr(args: newColorArgs): Colors.ypbpr {
    if (typeof args.kb === 'undefined' || typeof args.kr === 'undefined') {
      throw new Error('Missing arguments kb and kr')
    }
    let rgb = this.torgb(args)
    return Convert.rgb2ypbpr(rgb, args.kb, args.kr)
  }
  protected toycbcr(args: newColorArgs): Colors.ycbcr {
    if (typeof args.kb === 'undefined' || typeof args.kr === 'undefined') {
      throw new Error('Missing arguments kb and kr')
    }
    let rgb = this.torgb(args)
    return Convert.rgb2ycbcr(rgb, args.kb, args.kr)
  }

  protected setArgs(args?: newColorArgs): newColorArgs {
    if (typeof args == 'undefined') args = {}
    else if (
      typeof args.bitDepth === 'undefined' &&
      typeof args.bitRate !== 'undefined'
    ) {
      args.bitDepth = args.bitRate
    }
    return args
  }

  /**
   * Range check to make sure numeric value is within lower and upper limits
   * Throws error on fail, returns nothing
   *
   * @param  {number}         value
   * @param  {number|boolean} lowerLimit number or false
   * @param  {number|boolean} upperLimit number or false
   * @param  {string}         msg        error message if fail
   */
  protected valueRangeCheck(
    value: number,
    lowerLimit: number | boolean,
    upperLimit: number | boolean,
    msg?: string
  ): void {
    if (!isFinite(value)) {
      throw new Error('Invalid color value: ' + value)
    }
    if (
      lowerLimit !== false &&
      upperLimit !== false &&
      lowerLimit >= upperLimit
    ) {
      throw new Error('Invalid range (lower limit must exceed upper limit)')
    }
    if (
      (lowerLimit !== false && value < lowerLimit) ||
      (upperLimit !== false && value > upperLimit)
    ) {
      throw new Error(
        typeof msg !== 'undefined'
          ? msg
          : 'Color value: ' +
            value +
            ' out of range [' +
            lowerLimit +
            ',' +
            upperLimit +
            ']'
      )
    }
  }
}
