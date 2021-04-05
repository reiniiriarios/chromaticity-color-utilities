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
const Util      = require(path.join(__dirname, 'Util.js'));
const Convert   = require(path.join(__dirname, 'Convert.js'));
const Modify    = require(path.join(__dirname, 'Modify.js'));

class Harmony {
  /**
   * Return 180deg complement of color
   * 
   * @param  {int} red 
   * @param  {int} green 
   * @param  {int} blue 
   * @return {int[]}     r,g,b 
   */
  static complement(red, green, blue) {
    let [h, s, v] = Convert.rgb2hsv(red, green, blue);
    let hueComplement = Modify.hueShift(h, 180);
    let rgb = Convert.hsv2rgb(hueComplement, s, v);
    return rgb;
  }

  /**
   * Return an analogous color scheme based on input color and angle
   * 
   * @param  {int}       red 
   * @param  {int}       green 
   * @param  {int}       blue 
   * @param  {int|float} [angle=30] degrees
   * @return {array}                [[r,g,b],[r,g,b],[r,g,b]]
   */
  static analogous(red, green, blue, angle = 30) {
    Util.valueRangeCheck(angle, 0, 360);

    let [h,s,v] = Convert.rgb2hsv(red, green, blue);
    let aHue1 = Modify.hueShift(h, angle);
    let aHue2 = Modify.hueShift(h, angle * -1);
    console.log(h + ' ' + s + ' ' + v);
    console.log(aHue1);
    console.log(aHue2);

    let aColor1 = Convert.hsv2rgb(aHue1, s, v);
    let aColor2 = Convert.hsv2rgb(aHue2, s, v);

    return [[red, green, blue], aColor1, aColor2];
  }

  /**
   * Return a triadic color scheme based on input color
   * Alias of analogous() with 120deg angle
   * 
   * @param  {int}       red 
   * @param  {int}       green 
   * @param  {int}       blue 
   * @return {array}            [[r,g,b],[r,g,b],[r,g,b]]
   */
  static triadic(red, green, blue) {
    return this.analogous(red, green, blue, 120);
  }

  /**
   * Return a split complement color scheme based on input color and angle
   * Alias of analogous() but with different default angle
   * 
   * @param  {int}       red 
   * @param  {int}       green 
   * @param  {int}       blue 
   * @param  {int|float} [angle=120] degrees
   * @return {array}                 [[r,g,b],[r,g,b],[r,g,b]]
   */
  static splitComplement(red, green, blue, angle = 150) {
    return this.analogous(red, green, blue, angle);
  }

  /**
   * Return a tetradic color scheme based on input color and angle
   * 
   * @param  {int}       red 
   * @param  {int}       green 
   * @param  {int}       blue 
   * @param  {int|float} [angle=45] degrees
   * @return {array}                [[r,g,b],[r,g,b],[r,g,b],[r,g,b]]
   */
  static tetradic(red, green, blue, angle = 45) {
    Util.valueRangeCheck(angle, 0, 360);

    let [h,s,v] = Convert.rgb2hsv(red, green, blue);
    let hue2 = Modify.hueShift(h, angle);
    let hue3 = Modify.hueShift(h, angle + 180);
    let hue4 = Modify.hueShift(h, 180);

    let color2 = Convert.hsv2rgb(hue2,s,v);
    let color3 = Convert.hsv2rgb(hue3,s,v);
    let color4 = Convert.hsv2rgb(hue4,s,v);

    return [[red, green, blue], color2, color3, color4];
  }

  /**
   * Return a square color scheme based on input color
   * Alias of tetradic() with 90deg angle
   * 
   * @param  {int}       red 
   * @param  {int}       green 
   * @param  {int}       blue 
   * @param  {int|float} [angle=45] degrees
   * @return {array}                [[r,g,b],[r,g,b],[r,g,b],[r,g,b]]
   */
  static square(red, green, blue) {
    return this.tetradic(red, green, blue, 90);
  }
}

module.exports = Harmony;