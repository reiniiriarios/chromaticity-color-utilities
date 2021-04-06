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
    let hueComplement = Modify.hueShift(hsv.h, 180);
    return [
      hsv,
      new Colors.hsv(hueComplement, hsv.s, hsv.v)
    ]
  }

  /**
   * Return an analogous color scheme based on input color and angle
   * 
   * @param  {Colors.hsv}        hsv
   * @param  {number}            [angle=30] degrees
   * @return {Array<Colors.hsv>}
   */
  static analogous(hsv: Colors.hsv, angle: number = 30): Array<Colors.hsv> {
    let aHue1 = Modify.hueShift(hsv.h, angle);
    let aHue2 = Modify.hueShift(hsv.h, angle * -1);

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
    return this.analogous(hsv, angle);
  }

  /**
   * Return a split complement color scheme based on input color and angle
   * Alias of analogous() but with different default angle
   * 
   * @param  {Colors.hsv}        hsv
   * @param  {number}            [angle=150] degrees
   * @return {Array<Colors.hsv>}
   */
  static splitComplement(hsv: Colors.hsv, angle: number = 150): Array<Colors.hsv> {
    return this.analogous(hsv, angle);
  }

  /**
   * Return a tetradic color scheme based on input color and angle
   * 
   * @param  {Colors.hsv}        hsv
   * @param  {number}            [angle=45] degrees
   * @return {Array<Colors.hsv>}
   */
  static tetradic(hsv: Colors.hsv, angle: number = 45): Array<Colors.hsv> {
    let hue2 = Modify.hueShift(hsv.h, angle);
    let hue3 = Modify.hueShift(hsv.h, angle + 180);
    let hue4 = Modify.hueShift(hsv.h, 180);

    return [
      hsv,
      new Colors.hsv(hue2, hsv.s, hsv.v),
      new Colors.hsv(hue3, hsv.s, hsv.v),
      new Colors.hsv(hue4, hsv.s, hsv.v)
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
    return this.tetradic(hsv, 90);
  }
}

export = Harmony