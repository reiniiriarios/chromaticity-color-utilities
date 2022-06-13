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

import From from './From'
import * as Colors from './Colors'

export const from = From

// deprecated
export namespace colorTypes {
  export type rgbNormalized = Colors.rgbNormalized
  export type hex = Colors.hex
  export type rgb = Colors.rgb
  export type rec709rgb = Colors.rec709rgb
  export type rec2020rgb = Colors.rec2020rgb
  export type hsv = Colors.hsv
  export type hsl = Colors.hsl
  export type hsi = Colors.hsi
  export type hsp = Colors.hsp
  export type cmyk = Colors.cmyk
  export type yiq = Colors.yiq
  export type xyz = Colors.xyz
  export type xyy = Colors.xyy
  export type lab = Colors.lab
  export type luv = Colors.luv
  export type ypbpr = Colors.ypbpr
  export type ycbcr = Colors.ycbcr
  export type nm = Colors.nm
  export type kelvin = Colors.kelvin
}

// new method
export type rgbNormalized = Colors.rgbNormalized
export type hex = Colors.hex
export type rgb = Colors.rgb
export type rec709rgb = Colors.rec709rgb
export type rec2020rgb = Colors.rec2020rgb
export type hsv = Colors.hsv
export type hsl = Colors.hsl
export type hsi = Colors.hsi
export type hsp = Colors.hsp
export type cmyk = Colors.cmyk
export type yiq = Colors.yiq
export type xyz = Colors.xyz
export type xyy = Colors.xyy
export type lab = Colors.lab
export type luv = Colors.luv
export type ypbpr = Colors.ypbpr
export type ycbcr = Colors.ycbcr
export type nm = Colors.nm
export type kelvin = Colors.kelvin
