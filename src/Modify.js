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
const path = require('path');
const Util = require(path.join(__dirname, 'Util.js'));

class Modify {
  /**
   * Rotate $hue by $angle degrees
   * Degrees can be more than 360 or less than -360 and will loop around
   *
   * @param  {int|float} hue   degrees
   * @param  {int|float} angle degrees
   * @return {int|float}       rotated hue
   */
  static hueShift(hue, angle) {
    Util.valueRangeCheck(hue, 0, 360);
    hue += angle;

    while (hue >= 360) hue -= 360;
    while (hue < 0) hue += 360;
    return hue;
  }

  /**
   * Blend one RGB color with another
   * 
   * @param  {int} r1     color A red
   * @param  {int} g1     color A green
   * @param  {int} b1     color A blue
   * @param  {int} r2     color B red
   * @param  {int} g2     color B green
   * @param  {int} b2     color B blue
   * @param  {int} amount amount to blend, 0-1
   * @return {int[]}      r, g, b
   */
  static rgbBlend(r1, g1, b1, r2, g2, b2, amount) {
    Util.valueRangeCheck(r1, 0, 255);
    Util.valueRangeCheck(g1, 0, 255);
    Util.valueRangeCheck(b1, 0, 255);
    Util.valueRangeCheck(r2, 0, 255);
    Util.valueRangeCheck(g2, 0, 255);
    Util.valueRangeCheck(b2, 0, 255);
    Util.valueRangeCheck(amount, 0, 1);

    let r3 = r1 + ((r2 - r1) * amount);
    let g3 = g1 + ((g2 - g1) * amount);
    let b3 = b1 + ((b2 - b1) * amount);

    return [r3, g3, b3];
  }

  /**
   * Blend one HSV color with another
   * 
   * @param  {int} h1     color A hue        (degrees)
   * @param  {int} s1     color A saturation (0-100)
   * @param  {int} v1     color A value      (0-100)
   * @param  {int} h2     color B hue        (degrees)
   * @param  {int} s2     color B saturation (0-100)
   * @param  {int} v2     color B value      (0-100)
   * @param  {int} amount amount to blend    (0-1)
   * @return {int[]}      h, s, v
   */
  static hsvBlend(h1, s1, v1, h2, s2, v2, amount) {
    Util.valueRangeCheck(h1, 0, 360);
    Util.valueRangeCheck(s1, 0, 100);
    Util.valueRangeCheck(v1, 0, 100);
    Util.valueRangeCheck(h2, 0, 360);
    Util.valueRangeCheck(s2, 0, 100);
    Util.valueRangeCheck(v2, 0, 100);
    Util.valueRangeCheck(amount, 0, 1);

    let hueDiff;
    if (Math.abs(h2 - h1) > 180) {
      hueDiff = 360 - Math.abs((h2 - h1) * amount);
      if (h1 > h2) hueDiff *= -1;
    }
    else {
      hueDiff = (h2 - h1) * amount;
    }

    let h3 = this.hueShift(h1, hueDiff);
    let s3 = s1 + ((s2 - s1) * amount);
    let v3 = v1 + ((v2 - v1) * amount);

    return [h3, s3, v3];
  }
}

module.exports = Modify;