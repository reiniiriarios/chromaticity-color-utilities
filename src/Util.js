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

"use strict";
const path      = require('path');
const Reference = require(path.join(__dirname, 'Reference.js'));

class Util {
  /**
   * Range check to make sure numeric value is within lower and upper limits
   * Throws error on fail, returns nothing
   *
   * @param  {int|float} value
   * @param  {int|float} lowerLimit
   * @param  {int|float} upperLimit
   */
  static valueRangeCheck(value, lowerLimit, upperLimit) {
    if (!isFinite(value)) {
      throw new Error('Invalid color value');
    }
    if ((!isFinite(lowerLimit) && lowerLimit !== false) || (!isFinite(upperLimit) && upperLimit !== false)) {
      throw new Error('Invalid range');
    }
    if (lowerLimit && upperLimit && lowerLimit >= upperLimit) {
      throw new Error('Invalid range (lower limit must exceed upper limit)');
    }
    if ((lowerLimit && value < lowerLimit) || (upperLimit && value > upperLimit)) {
      throw new Error('Color value out of range');
    }
  }

  /**
   * Expands shorthand hex color values to full 6-digit values
   *
   * @param  {string} hex RGB or RRGGBB
   * @return {string}     RRGGBB
   */
  static expandHex(hex) {
    if (typeof hex != 'string') {
      throw new Error('Invalid hex value');
    }
    if (hex.charAt(0) == '#') {
      hex = hex.substr(1);
    }
    if (!/[0-9A-Fa-f]/g.test(hex)) {
      throw new Error('Invalid hex value');
    }
    if (hex.length == 6) {
      return hex;
    }
    if (hex.length != 3) {
      throw new Error('Invalid hex value');
    }
    hex = hex.split('').map(hex => { return hex + hex; }).join('');
    return hex;
  }

  /**
   * Generates the inverse of a 3x3 matrix
   * Utilized for XYZ matrix generation
   *
   * @param  {array} matrix 3x3 matrix
   * @return {array}        matrix^-1
   */
  static matrix3x3inverse(matrix) {
    
    // Calculate matrices of minors and cofactors
    let minors = [];
    let cofactors = [];
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
    let adjugate = [];
    adjugate[0][1] = cofactors[1][0];
    adjugate[1][0] = cofactors[0][1];
    adjugate[0][2] = cofactors[2][0];
    adjugate[2][0] = cofactors[0][2];
    adjugate[1][2] = cofactors[2][1];
    adjugate[2][1] = cofactors[1][2];

    // Calculate determinant of matrix
    let determinant = minors[0][0] * cofactors[0][0] + minors[0][1] * cofactors[0][1] + minors[0][2] * cofactors[0][2];

    // Calculate inverse matrix
    let inverse = [];
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
   * @param  {float} xr red   x chromaticity coordinate
   * @param  {float} yr red   y chromaticity coordinate
   * @param  {float} xg green x chromaticity coordinate
   * @param  {float} yg green y chromaticity coordinate
   * @param  {float} xb blue  x chromaticity coordinate
   * @param  {float} yb blue  y chromaticity coordinate
   * @param  {float} xw x reference white coordinate
   * @param  {float} yw y reference white coordinate
   * @param  {float} zw z reference white coordinate
   * @return float[] 3x3 matrix for converting RGB to XYZ
   */
   static rgb2xyzMatrix(xr, yr, xg, yg, xb, yb, xw, yx, zw) {
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
   * @param  {float}   xr red   x chromaticity coordinate
   * @param  {float}   yr red   y chromaticity coordinate
   * @param  {float}   xg green x chromaticity coordinate
   * @param  {float}   yg green y chromaticity coordinate
   * @param  {float}   xb blue  x chromaticity coordinate
   * @param  {float}   yb blue  y chromaticity coordinate
   * @param  {float}   xw x reference white coordinate
   * @param  {float}   yw y reference white coordinate
   * @param  {float}   zw z reference white coordinate
   * @return {float[]}    3x3 matrix for converting XYZ to RGB
   */
  static xyz2rgbMatrix(xr, yr, xg, yg, xb, yb, xw, yx, zw) {
    let rgb2xyzM = this.rgb2xyzMatrix(xr, yr, xg, yg, xb, yb, xw, yx, zw);
    let xyz2rgbM = this.matrix3x3inverse(rgb2xyzM);
    return xyz2rgbM;
  }

  static validReferenceWhite(referenceWhite) {
    if (typeof referenceWhite == 'string') {
      referenceWhite = referenceWhite.toLowerCase();
      if (typeof Reference.stdIlluminants[referenceWhite] == 'undefined' ||
          typeof Reference.stdIlluminants[referenceWhite]['vector'] == 'undefined') {
            throw new Error('Invalid reference white, vector not found');
      }
      let w = Reference.stdIlluminants[referenceWhite]['vector'];
    }
    else if (referenceWhite.isArray) {
      if (referenceWhite.length != 3 ||
          typeof referenceWhite[0] != 'number' ||
          typeof referenceWhite[1] != 'number' ||
          typeof referenceWhite[2] != 'number') {
            throw new Error('Invalid reference white matrix, must be 1x3 numerical matrix');
      }
      let w = referenceWhite;
    }
    else {
      throw new Error('Invalid reference white');
    }

    return w;
  }

  /**
   * Floating point modulo function
   * From: https://locutus.io/php/fmod/
   * 
   * @param  {float} x
   * @param  {float} y
   * @return {float}
   */
  static fmod(x, y) {
    let tmp
    let tmp2
    let p = 0
    let pY = 0
    let l = 0.0
    let l2 = 0.0
    tmp = x.toExponential().match(/^.\.?(.*)e(.+)$/)
    p = parseInt(tmp[2], 10) - (tmp[1] + '').length
    tmp = y.toExponential().match(/^.\.?(.*)e(.+)$/)
    pY = parseInt(tmp[2], 10) - (tmp[1] + '').length
    if (pY > p) {
      p = pY
    }
    tmp2 = (x % y)
    if (p < -100 || p > 20) {
      // toFixed will give an out of bound error so we fix it like this:
      l = Math.round(Math.log(tmp2) / Math.log(10))
      l2 = Math.pow(10, l)
      return (tmp2 / l2).toFixed(l - p) * l2
    } else {
      return parseFloat(tmp2.toFixed(-p))
    }
  }
}

module.exports = Util;