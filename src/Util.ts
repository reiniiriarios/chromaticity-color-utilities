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

import { colorSpaces, stdIlluminants, referenceWhite } from './Reference';

class Util {
  /**
   * Scale a value to a different range of values
   * e.g. Scale value from 16-235 to 64-940
   *
   * @param  {number}       value
   * @param  {number}       minFrom      input lower range
   * @param  {number}       maxFrom      input upper range
   * @param  {number}       minTo        output lower range
   * @param  {number}       maxTo        output upper range
   * @param  {boolean}      [round=true]
   * @return {number}                    scaled value
   */
  static scaleValueRange(value: number, minFrom: number, maxFrom: number, minTo: number, maxTo: number, round: boolean = true): number {
    let valueTo = (Math.min(maxFrom, Math.max(minFrom, value)) - minFrom) * ((maxTo - minTo) / (maxFrom - minFrom)) + minTo;
    if (round) {
      valueTo = Math.round(valueTo);
    }
    return valueTo;
  }

  /**
   * Generates the inverse of a 3x3 matrix
   * Utilized for XYZ matrix generation
   *
   * @param  {number[][]} matrix 3x3 matrix
   * @return {number[][]}        matrix^-1
   */
  static matrix3x3inverse(matrix: number[][]): number[][] {
    
    // Calculate matrices of minors and cofactors
    let minors: number[][] = [];
    let cofactors: number[][] = [];
    let flip_sign = false;
    matrix.forEach((row, rowN) => {
      row.forEach((val, colN) => {
        let ax = colN == 0 ? 1 : 0;
        let ay = rowN == 0 ? 1 : 0;
        let dx = colN == 2 ? 1 : 2;
        let dy = rowN == 2 ? 1 : 2;
        let bx = colN == 2 ? 1 : 2;
        let by = rowN == 0 ? 1 : 0;
        let cx = colN == 0 ? 1 : 0;
        let cy = rowN == 2 ? 1 : 2;

        minors[rowN][colN] = matrix[ax][ay] * matrix[dx][dy] - matrix[bx][by] * matrix[cx][cy];
        if (flip_sign) {
          cofactors[rowN][colN] = minors[rowN][colN] * -1;
          flip_sign = false;
        }
        else {
          cofactors[rowN][colN] = minors[rowN][colN];
          flip_sign = true;
        }
      });
    });

    // Calculate adjugate matrix
    let adjugate: number[][] = [];
    adjugate[0][1] = cofactors[1][0];
    adjugate[1][0] = cofactors[0][1];
    adjugate[0][2] = cofactors[2][0];
    adjugate[2][0] = cofactors[0][2];
    adjugate[1][2] = cofactors[2][1];
    adjugate[2][1] = cofactors[1][2];

    // Calculate determinant of matrix
    let determinant = minors[0][0] * cofactors[0][0] + minors[0][1] * cofactors[0][1] + minors[0][2] * cofactors[0][2];

    // Calculate inverse matrix
    let inverse: number[][] = [];
    adjugate.forEach((row, rowN) => {
      row.forEach((val, colN) => {
        inverse[rowN][colN] = val * (1 / determinant);
      });
    });

    return inverse;
  }

  /**
   * Generate RGB to XYZ matrix
   * ($xr, $yr), ($xg, $yg), and ($xb, $yb) are chromaticity coordinates of an RGB system (such as sRGB)
   * ($xw, $yw, $zw) are a reference white vector (such as D65)
   *
   * To utilize matrix, RGB values MUST be linear and in the nominal range [0, 1]
   *
   * Common Reference White Standards:
   * a   CIE standard illuminant A; 2856 K
   * c   CIE standard illuminant C; 6774 K; deprecated
   * e   Equal-energy radiator
   * d50 CIE standard illuminant D50; 5003 K
   * d55 CIE standard illuminant D55; 5500 K
   * d65 CIE standard illuminant D65; 6504 K
   * icc Profile Connection Space (PCS) illuminant used in ICC profiles
   *
   * @param  {number}  xr red   x chromaticity coordinate
   * @param  {number}  yr red   y chromaticity coordinate
   * @param  {number}  xg green x chromaticity coordinate
   * @param  {number}  yg green y chromaticity coordinate
   * @param  {number}  xb blue  x chromaticity coordinate
   * @param  {number}  yb blue  y chromaticity coordinate
   * @param  {number}  xw x reference white coordinate
   * @param  {number}  yw y reference white coordinate
   * @param  {number}  zw z reference white coordinate
   * @return {number[][]} 3x3 matrix for converting RGB to XYZ
   */
   static rgb2xyzMatrix(xr: number, yr: number, xg: number, yg: number, xb: number, yb: number, xw: number, yw: number, zw: number): number[][] {
    //       [Sr*Xr Sg*Xg Sb*Xb]
    // [M] = [Sr*Yr Sg*Yg Sb*Yb]
    //       [Sr*Zr Sg*Zg Sb*Zb]

    // [Sr]   [Xr Xg Xb]^-1  [Xw]
    // [Sg] = [Yr Yg Yb]   * [Yw]
    // [Sb]   [Zr Zg Zb]     [Zw]

    // Xn = xn / yn
    // Yn = 1
    // Zn = (1 - xn - yn) / yn

    // Calculate XYZrgb matrix
    let xyzrgb = [
      [xr / yr, xg / yg, xb / yb],
      [1, 1, 1],
      [(1 - xr - yr) / yr, (1 - xg - yg) / yg, (1 - xb - yb) / yb]
    ];

    let inverse = this.matrix3x3inverse(xyzrgb);

    // Calculate the Sn matrix (as individual values)
    let sr = inverse[0][0] * xw + inverse[0][1] * yw + inverse[0][2] * zw;
    let sg = inverse[1][0] * xw + inverse[1][1] * yw + inverse[1][2] * zw;
    let sb = inverse[2][0] * xw + inverse[2][1] * yw + inverse[2][2] * zw;

    // Calculate final matrix
    let m = [
      [sr * xyzrgb[0][0], sg * xyzrgb[0][1], sb * xyzrgb[0][2]],
      [sr * xyzrgb[1][0], sg * xyzrgb[1][1], sb * xyzrgb[1][2]],
      [sr * xyzrgb[2][0], sg * xyzrgb[2][1], sb * xyzrgb[2][2]]
    ];

    return m;
  }

  /**
   * Generate XYZ to RGB matrix
   * Generates inverse of matrix from self::rgb2xyz_matrix()
   * ($xr, $yr), ($xg, $yg), and ($xb, $yb) are chromaticity coordinates of an RGB system (such as sRGB)
   * ($xw, $yw, $zw) are a reference white vector (such as D65)
   *
   * To utilize matrix, RGB values MUST be linear and in the nominal range [0, 1]
   *
   * @param  {number}   xr red   x chromaticity coordinate
   * @param  {number}   yr red   y chromaticity coordinate
   * @param  {number}   xg green x chromaticity coordinate
   * @param  {number}   yg green y chromaticity coordinate
   * @param  {number}   xb blue  x chromaticity coordinate
   * @param  {number}   yb blue  y chromaticity coordinate
   * @param  {number}   xw x reference white coordinate
   * @param  {number}   yw y reference white coordinate
   * @param  {number}   zw z reference white coordinate
   * @return {number[][]}  3x3 matrix for converting XYZ to RGB
   */
  static xyz2rgbMatrix(xr: number, yr: number, xg: number, yg: number, xb: number, yb: number, xw: number, yx: number, zw: number): number[][] {
    let rgb2xyzM = this.rgb2xyzMatrix(xr, yr, xg, yg, xb, yb, xw, yx, zw);
    let xyz2rgbM = this.matrix3x3inverse(rgb2xyzM);
    return xyz2rgbM;
  }

  /**
   * Finds reference white or returns input number[][] as reference white
   * 
   * @param  {string|number[][]} referenceWhite
   * @return {number[][]}
   */
  static validReferenceWhite(referenceWhite: string | referenceWhite) : referenceWhite {
    let w: referenceWhite
    if (typeof referenceWhite == 'string') {
      referenceWhite = referenceWhite.toLowerCase();
      if (typeof stdIlluminants[referenceWhite as keyof object] == 'undefined') {
            throw new Error('Invalid reference white');
      }
      w = stdIlluminants[referenceWhite as keyof object]['chrom']['2d'];
    }
    else {
      w = referenceWhite;
    }
    let z = 1 - w['x'] - w['y']

    return {
      x: w['x'],
      y: w['y'],
      z: z
    };
  }

  static validColorSpace(colorSpace: string) : object {
    // make lowercase, include common nomenclature differences, ignore spaces, etc
    colorSpace = colorSpace.toLowerCase().replace(/[^a-z0-9]/,'')
    let conform = {
        'adobe':     'adobergb1998',
        'adobergb':  'adobergb1998',
        'ntsc':      'ntscrgb',
        'palsecam':  'palsecamrgb',
        'pal':       'palsecamrgb',
        'palrgb':    'palsecamrgb',
        'secam':     'palsecamrgb',
        'secamrgb':  'palsecamrgb',
        'prophoto':  'prophotorgb',
        'smpte':     'smptecrgb',
        'smptec':    'smptecrgb',
        'widegamut': 'widegamutrgb',
        'ecirgbv2':  'ecirgb',
        'ektaspace': 'ektaspaceps5'
    }
    if (typeof conform[colorSpace as keyof object] == 'string') {
      colorSpace = conform[colorSpace as keyof object]
    }
    if (typeof colorSpaces[colorSpace as keyof object] == 'undefined') {
      throw new Error('Unable to parse given color space')
    }
    let space = colorSpaces[colorSpace as keyof object]
    return space
  }

  /**
   * Floating point modulo function
   * Original from: https://locutus.io/php/fmod/
   * 
   * @param  {number} x
   * @param  {number} y
   * @return {number}
   */
  static fmod(x: number, y: number): number {
    let p = 0
    let pY = 0
    let l = 0.0
    let l2 = 0.0
    let tmp: RegExpMatchArray | null
    tmp = x.toExponential().match(/^.\.?(.*)e(.+)$/)
    if (tmp == null) throw new Error('value is null');
    p = parseInt(tmp[2], 10) - (tmp[1] + '').length
    tmp = y.toExponential().match(/^.\.?(.*)e(.+)$/)
    if (tmp == null) throw new Error('value is null');
    pY = parseInt(tmp[2], 10) - (tmp[1] + '').length
    if (pY > p) {
      p = pY
    }
    let tmp2: number = (x % y)
    if (p < -100 || p > 20) {
      // toFixed will give an out of bound error so we fix it like this:
      l = Math.round(Math.log(tmp2) / Math.log(10))
      l2 = Math.pow(10, l)
      return parseFloat((tmp2 / l2).toFixed(l - p)) * l2
    } else {
      return parseFloat(tmp2.toFixed(-p))
    }
  }
}

export = Util