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
   * @return {Colors.rgb}
   */
  static rgbBlend(rgb1: Colors.rgb, rgb2: Colors.rgb, amount: number): Colors.rgb {
    let r3 = rgb1.r + ((rgb2.r - rgb1.r) * amount);
    let g3 = rgb1.g + ((rgb2.g - rgb1.g) * amount);
    let b3 = rgb1.b + ((rgb2.b - rgb1.b) * amount);

    return new Colors.rgb(r3, g3, b3)
  }

  /**
   * Blend one HSV color with another
   * 
   * @param  {Colors.hsv} hsv1
   * @param  {Colors.hsv} hsv2
   * @param  {number}     amount amount to blend (0-1)
   * @return {Colors.hsv}
   */
  static hsvBlend(hsv1: Colors.hsv, hsv2: Colors.hsv, amount: number): Colors.hsv {
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

    return new Colors.hsv(h3, s3, v3)
  }
}

export = Modify