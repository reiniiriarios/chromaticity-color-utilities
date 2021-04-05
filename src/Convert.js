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
const Util      = require(path.join(__dirname, 'Util.js'));

class Convert {
  /////////// BIT DEPTH/RATE / RANGE ADJUSTMENTS ///////////

  /**
   * Change the bit-depth of a single value
   *
   * @param  {int|float} value
   * @param  {int}       fromBitDepth  bit depth of value (usually 8, 10, 12, etc)
   * @param  {int}       toBitDepth    bit depth of value (usually 8, 10, 12, etc)
   * @param  {bool}      [round=true]
   * @return {int|float}               scaled value
   */
  static changeValueBitDepth(value, fromBitDepth, toBitDepth, round = true) {
    Util.valueRangeCheck(fromBitDepth, 1, false);
    Util.valueRangeCheck(toBitDepth,   1, false);
    let maxFrom = (2 ** fromBitDepth) - 1;
    let maxTo =   (2 ** toBitDepth) -1;
    let valueTo = this.scaleValueRange(value, 0, maxFrom, 0, maxTo, round);
    return valueTo;
  }

  /**
   * Scale a value to a different range of values
   * e.g. Scale value from 16-235 to 64-940
   *
   * @param  {int|float} value
   * @param  {int}       minFrom      input lower range
   * @param  {int}       maxFrom      input upper range
   * @param  {int}       minTo        output lower range
   * @param  {int}       maxTo        output upper range
   * @param  {bool}      [round=true]
   * @return {int|float}              scaled value
   */
  static scaleValueRange(value, minFrom, maxFrom, minTo, maxTo, round = true) {
    Util.valueRangeCheck(value, minFrom, maxFrom);
    // = valueFrom * (rangeTo / RangeFrom) + (minTo - minFrom)
    let valueTo = (value * ((maxTo - minTo) / (maxFrom - minFrom))) + (minTo - minFrom);
    if (round) {
      valueTo = Math.round(valueTo);
    }
    return valueTo;
  }

  /**
   * Change the bit-depth of an RGB color
   *
   * @param  {int|float} red
   * @param  {int|float} green
   * @param  {int|float} blue
   * @param  {int}       bitDepthFrom bit depth of $value (usually 8, 10, 12, etc)
   * @param  {int}       bitDepthTo   bit depth of $value (usually 8, 10, 12, etc)
   * @param  {bool}      [round=true]
   * @return {int[]|float[]}         red, green, blue (scaled values)
   */
  static changeBitDepthRGB(red, green, blue, bitDepthFrom, bitDepthTo, round = true) {
    let rTo = this.changeValueBitDepth(red,   bitDepthFrom, bitDepthTo, round);
    let gTo = this.changeValueBitDepth(green, bitDepthFrom, bitDepthTo, round);
    let bTo = this.changeValueBitDepth(blue,  bitDepthFrom, bitDepthTo, round);
    return [rTo, gTo, bTo];
  }

  /////////// HUE, SATURATION, VALUE/LIGHTNESS/BRIGHTNESS ///////////  

  /**
   * Convert RGB to HSV
   * Saturation and Value are in percentages
   *
   * @param  {int|float} red
   * @param  {int|float} green
   * @param  {int|float} blue
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per channel
   * @return {{float[]|int[]}}            hue, saturation, value
   */
  static rgb2hsv(red, green, blue, round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(red,   0, bitDepth);
    Util.valueRangeCheck(green, 0, bitDepth);
    Util.valueRangeCheck(blue,  0, bitDepth);

    red   /= bitDepth;
    green /= bitDepth;
    blue  /= bitDepth;

    let max = Math.max(red, green, blue);
    let min = Math.min(red, green, blue);
    let range = max - min;

    let val = max / 1 * 100;
    let sat = max ? range / max : 0 * 100;

    let hue;
    if      (!range)       hue = 0;
    else if (red == max)   hue = (green - blue) / range;
    else if (green == max) hue = (blue  - red)  / range;
    else if (blue == max)  hue = (red - green)  / range;
    else                   hue = 0;
    hue *= 60;
    while (hue >= 360) hue -= 360;
    while (hue < 0) hue += 360;

    if (round) {
      hue = Math.round(hue);
      sat = Math.round(sat);
      val = Math.round(val);
    }

    return [hue, sat, val];
  }

  /**
   * Convert RGB to HSL
   * Saturation and Lightness are in percentages
   *
   * @param  {int|float} red
   * @param  {int|float} green
   * @param  {int|float} blue
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per channel
   * @return {{float[]|int[]}}            hue, saturation, lightness
   */
  static rgb2hsl(red, green, blue, round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(red,   0, bitDepth);
    Util.valueRangeCheck(green, 0, bitDepth);
    Util.valueRangeCheck(blue,  0, bitDepth);

    red   /= bitDepth;
    green /= bitDepth;
    blue  /= bitDepth;

    let val = Math.max(red, green, blue);
    let min = Math.min(red, green, blue);
    let chroma = val - min;

    let lit = val - min;
    let sat = (lit == 0 || lit == 1 ? 0 : (val - lit) / Math.min(lit, 1 - lit)) * 100;
    lit *= 100;

    let hue;
    if      (!chroma)      hue = 0;
    else if (val == red)   hue = (green - blue) / chroma;
    else if (val == green) hue = (blue  - red)  / chroma;
    else if (val == blue)  hue = (red - green)  / chroma;
    else                   hue = 0;
    hue *= 60;
    while (hue >= 360) hue -= 360;
    while (hue < 0) hue += 360;

    if (round) {
      hue = Math.round(hue);
      sat = Math.round(sat);
      lit = Math.round(lit);
    }

    return [hue, sat, lit];
  }

  /**
   * Convert RGB to HSI
   * Saturation and Intensity are in percentages
   *
   * @param  {int|float} red
   * @param  {int|float} green
   * @param  {int|float} blue
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per channel
   * @return {float[]|int[]}            hue, saturation, intensity
   */
  static rgb2hsi(red, green, blue, round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(red,   0, bitDepth);
    Util.valueRangeCheck(green, 0, bitDepth);
    Util.valueRangeCheck(blue,  0, bitDepth);

    red   /= bitDepth;
    green /= bitDepth;
    blue  /= bitDepth;

    let max = Math.max(red, green, blue);
    let min = Math.min(red, green, blue);

    let chroma = max - min;

    let int = (red + green + blue) * (1 / 3);

    let hue;
    let sat;
    if (!chroma) {
      hue = 0;
      sat = 0;
    }
    else {
      if      (max == red)   hue = Util.fmod((green - blue) / chroma, 6);
      else if (max == green) hue = ((blue - red)  / chroma) + 2;
      else                   hue = ((red - green) / chroma) + 4;
      hue *= 60;
      while (hue >= 360) hue -= 360;
      while (hue < 0) hue += 360;

      sat = chroma && int ? (1 - min / int) * 100 : 0;
    }
    int *= 100;

    if (round) {
      hue = Math.round(hue);
      sat = Math.round(sat);
      int = Math.round(int);
    }

    return [hue, sat, int];
  }

  /**
   * Convert HSV to RGB
   * Saturation and Value should be in percentages
   *
   * @param  {int|float} hue            degrees
   * @param  {int|float} saturation     percentage
   * @param  {int|float} value          percentage
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per channel
   * @return {float[]|int[]}            red, green, blue
   */
  static hsv2rgb(hue, saturation, value, round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(hue,        0, 360);
    Util.valueRangeCheck(saturation, 0, 100);
    Util.valueRangeCheck(value,      0, 100);

    let r;
    let g;
    let b;
    if (saturation == 0) {
      let all = value / 100 * bitDepth;
      r = all;
      g = all;
      b = all;
    }
    else {
      hue /= 60;
      saturation /= 100;
      value /= 100;
      let i = Math.floor(hue);
      let f = hue * i;
      let p = value * (1 - saturation);
      let q = value * (1 - saturation * f);
      let t = value * (1 - saturation * (1 - f));
      switch (i) {
        case 0:
          r = value;
          g = t;
          b = p;
          break;
        case 1:
          r = q;
          g = value;
          b = p;
          break;
        case 2:
          r = 1;
          g = value;
          b = t;
          break;
        case 3:
          r = p;
          g = q;
          b = value;
          break;
        case 4:
          r = t;
          g = p;
          b = value;
          break;
        default:
          r = value;
          g = p;
          b = q;
      }
      r *= bitDepth;
      g *= bitDepth;
      b *= bitDepth;
    }

    if (round) {
      r = Math.round(r);
      g = Math.round(g);
      b = Math.round(b);
    }

    return [r, g, b];
  }

  /**
   * Convert HSV to HSL
   * Saturation and Value should be in percentages
   * Saturation and Lightness are in percentages
   *
   * @param  {int|float} hue          degrees
   * @param  {int|float} saturation   percentage
   * @param  {int|float} value        percentage
   * @param  {bool}      [round=true]
   * @return {float[]|int[]}          hue, saturation, lightness
   */
  static hsv2hsl(hue, saturation, value, round = true) {
    Util.valueRangeCheck(hue,        0, 360);
    Util.valueRangeCheck(saturation, 0, 100);
    Util.valueRangeCheck(value,      0, 100);

    saturation /= 100;
    value /= 100;

    let lit = value * (1 - (satruation / 2));

    let sat;
    if (lit == 0 || lit == 1) {
      sat = 0;
    }
    else {
      sat = (value - lit) / (Math.min(lit, 1 - lit));
    }

    lit *= 100;
    sat *= 100;

    if (round) {
      lit = Math.round(lit);
      sat = Math.round(sat);
    }

    return [hue, sat, lit];
  }

  /**
   * Convert HSV to HSI
   * Saturation(V) and Value should be in percentages
   * Saturation(I) and Intensity will be in percentages
   *
   * @param  {int|float} hue          degrees
   * @param  {int|float} saturation   percentage
   * @param  {int|float} value        percentage
   * @param  {bool}      [round=true]
   * @return {float[]|int[]}          hue, saturation, intensity
   */
  static hsv2hsi(hue, saturation, value, round = true) {
    let [r, g, b] = this.hsv2rgb(hue, saturation, value, false);
    let hsi = this.rgb2hsi(r, g, b, round);
    return hsi;
  }

  /**
   * Convert HSL to HSV
   * Saturation and Lightness should be in percentages
   * Saturation and Value are in percentages
   *
   * @param  {int|float} hue          degrees
   * @param  {int|float} saturation   percentage
   * @param  {int|float} lightness    percentage
   * @param  {bool}      [round=true]
   * @return {float[]|int[]}          hue, saturation, value
   */
  static hsl2hsv(hue, saturation, lightness, round = true) {
    Util.valueRangeCheck(hue,        0, 360);
    Util.valueRangeCheck(saturation, 0, 100);
    Util.valueRangeCheck(lightness,  0, 100);

    saturation /= 100;
    value /= 100;

    let val = (lightness + saturation * Math.min(lightness, 1 - lightness)) * 100;
    let sat = val ? 2 * (1 - lightness / val) * 100 : 0;

    if (round) {
      val = Math.round(val);
      sat = Math.round(sat);
    }

    return [hue, sat, val];
  }

  /**
   * Convert HSL to RGB
   * Saturation and Lightness should be in percentages
   *
   * @param  {int|float} hue            degrees
   * @param  {int|float} saturation     percentage
   * @param  {int|float} lightness      percentage
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per channel
   * @return {float[]|int[]}            red, green, blue
   */
  static hsl2rgb(hue, saturation, lightness, round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(hue,        0, 360);
    Util.valueRangeCheck(saturation, 0, 100);
    Util.valueRangeCheck(lightness,  0, 100);

    hue /= 60;
    saturation /= 100;
    lightness /= 100;

    let r;
    let g;
    let b;
    if (!saturation) {
      r = lightness;
      g = lightness;
      b = lightness;
    }
    else {
      let chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
      let huef = Math.floor(hue);
      let x = chroma * (1 - Math.abs(Util.fmod(hue, 2) - 1));
      let m = lightness - (chroma / 2);

      switch (huef) {
        case 0:
          r = chroma + m;
          g = x + m;
          b = m;
          break;
        case 1:
          r = x + m;
          g = chroma + m;
          b = m;
          break;
        case 2:
          r = m;
          g = chroma + m;
          b = x + m;
          break;
        case 3:
          r = m;
          g = x + m;
          b = chroma + m;
          break;
        case 4:
          r = x + m;
          g = m;
          b = chroma + m;
          break;
        case 5:
          r = chroma + m;
          g = m;
          b = x + m;
          break;
        default:
          r = m;
          g = m;
          b = m;
      }
    }

    r *= bitDepth;
    g *= bitDepth;
    b *= bitDepth;

    if (round) {
      r = Math.round(r);
      g = Math.round(g);
      b = Math.round(b);
    }

    return [r, g, b];
  }

  /**
   * Convert HSL to HSI
   * Saturation(L) and Lightness should be in percentages
   * Saturation(I) and Intensity will be in percentages
   *
   * @param  {int|float} hue          degrees
   * @param  {int|float} saturation   percentage
   * @param  {int|float} lightness    percentage
   * @param  {bool}      [round=true]
   * @return {float[]|int[]}          hue, saturation, intensity
   */
  static hsl2hsi(hue, saturation, lightness, round = true) {
    let [r, g, b] = this.hsl2rgb(hue, saturation, lightness, false);
    let hsi = this.rgb2hsi(r, g, b, round);
    return hsi;
  }

  /**
   * Convert HSI to RGB
   * Saturation and Intensity should be in percentages
   *
   * @param  {int|float} hue            degrees
   * @param  {int|float} saturation     percentage
   * @param  {int|float} intensity      percentage
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per channel
   * @return {float[]|int[]}            red, green, blue
   */
  static hsi2rgb(hue, saturation, intensity, round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(hue,        0, 360);
    Util.valueRangeCheck(saturation, 0, 100);
    Util.valueRangeCheck(intensity,  0, 100);

    hue /= 60;
    saturation /= 100;
    intensity /= 100;

    let m = intensity * (1 - saturation);

    let r;
    let g;
    let b;
    if (!saturation) {
      r = m;
      g = m;
      b = m;
    }
    else {
      let z = 1 - Math.abs(Util.fmod(hue, 2) - 1);
      let chroma = (2 * intensity * saturation) / (1 + z);
      let x = chroma * z;
      let huef = floor(hue);
      switch (huef) {
        case 0:
          r = chroma + m;
          g = x + m;
          b = m;
          break;
        case 1:
          r = x + m;
          g = chroma + m;
          b = m;
          break;
        case 2:
          r = m;
          g = chroma + m;
          b = x + m;
          break;
        case 3:
          r = m;
          g = x + m;
          b = chroma + m;
          break;
        case 4:
          r = x + m;
          g = m;
          b = chroma + m;
          break;
        case 5:
          r = chroma + x;
          g = m;
          b = x + m;
          break;
        default:
          r = m;
          g = m;
          b = m;
      }
      r = Math.min(r, 1);
      g = Math.min(g, 1);
      b = Math.min(b, 1);
    }

    r *= bitDepth;
    g *= bitDepth;
    b *= bitDepth;

    if (round) {
      r = Math.round(r);
      g = Math.round(g);
      b = Math.round(b);
    }

    return [r, g, b];
  }

  /**
   * Convert HSI to HSV
   * Saturation(I) and Intensity should be in percentages
   * Saturation(V) and Value will be in percentages
   *
   * @param  {int|float} hue          degrees
   * @param  {int|float} saturation   percentage
   * @param  {int|float} intensity    percentage
   * @param  {bool}      [round=true]
   * @return {float[]|int[]}          hue, saturation, value
   */
  static hsi2hsv(hue, saturation, intensity, round = true) {
    let [r, g, b] = this.hsi2rgb(hue, saturation, intensity, false);
    let hsv = rgb2hsv(r, g, b, round);
    return hsv;
  }

  /**
   * Convert HSI to HSL
   * Saturation(I) and Intensity should be in percentages
   * Saturation(L) and Lightness will be in percentages
   *
   * @param  {int|float} hue          degrees
   * @param  {int|float} saturation   percentage
   * @param  {int|float} intensity    percentage
   * @param  {bool}      [round=true]
   * @return {float[]|int[]}          hue, saturation, lightness
   */
  static hsi2hsl(hue, saturation, intensity, round = true) {
    let [r, g, b] = this.hsi2rgb(hue, saturation, intensity, false);
    let hsl = this.rgb2hsl(r, g, b, round);
    return hsl;
  }

  /////////// CMYK ///////////

  /**
   * Convert RGB to CMYK
   * This conversion is mathematical and does not take pigment conversion into account
   *
   * @param  {int|float} red
   * @param  {int|float} green
   * @param  {int|float} blue
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per channel
   * @return {float[]|int[]}            cyan, magenta, yellow, black
   */
  static rgb2cmyk(red, green, blue, round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(red,   0, bitDepth);
    Util.valueRangeCheck(green, 0, bitDepth);
    Util.valueRangeCheck(blue,  0, bitDepth);

    red   /= bitDepth;
    green /= bitDepth;
    blue  /= bitDepth;

    let c;
    let m;
    let y;
    let k = 1 - Math.max(red, green, blue);
    if (k == 1) {
      c = 0;
      m = 0;
      y = 0;
    }
    else {
      c = (1 - red   - k) / (1 - k) * 100;
      m = (1 - green - k) / (1 - k) * 100;
      y = (1 - blue  - k) / (1 - k) * 100;
    }
    k *= 100;

    if (round) {
      c = Math.round(c);
      m = Math.round(m);
      y = Math.round(y);
      k = Math.round(k);
    }

    return [c, m, y, k];
  }

  /**
   * Convert CMYK to RGB
   * This conversion is mathematical and does not take pigment conversion into account
   *
   * @param  {int|float} cyan
   * @param  {int|float} magenta
   * @param  {int|float} yellow
   * @param  {int|float} black
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per channel
   * @return {float[]|int[]}            red, green, blue
   */
  static cmyk2rgb(cyan, magenta, yellow, black, round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(cyan,    0, 100);
    Util.valueRangeCheck(magenta, 0, 100);
    Util.valueRangeCheck(yellow,  0, 100);
    Util.valueRangeCheck(black,   0, 100);

    cyan    /= 100;
    magenta /= 100;
    yellow  /= 100;
    black   /= 100;

    let r = (1 - cyan)    * (1 - black) * bitDepth;
    let g = (1 - magenta) * (1 - black) * bitDepth;
    let b = (1 - yellow)  * (1 - black) * bitDepth;

    if (round) {
      r = Math.round(r);
      g = Math.round(g);
      b = Math.round(b);
    }

    return [r, g, b];
  }

  /////////// YIQ ///////////

  /**
   * Convert RGB to YIQ
   * TODO: Validate Algorithm
   *
   * @param  {int|float} red
   * @param  {int|float} green
   * @param  {int|float} blue
   * @param  {bool}      [normalize=true] true = Y[0,255], I&Q[-128,128]; false = Y[0,1], I[-0.5957,0.5957], Q[-0.5226,0.5226]
   * @param  {bool}      [round=true]     will not round if not normalized
   * @param  {int}       [bitDepth=255]   RGB max value per channel
   * @return {float[]|int[]}              Y, I, Q
   */
  static rgb2yiq(red, green, blue, normalize = true, round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(red,   0, bitDepth);
    Util.valueRangeCheck(green, 0, bitDepth);
    Util.valueRangeCheck(blue,  0, bitDepth);

    red   /= bitDepth;
    green /= bitDepth;
    blue  /= bitDepth;

    let y = 0.299  * red +  0.587  * green +  0.114  * blue;
    let i = 0.5959 * red + -0.2746 * green + -0.3213 * blue;
    let q = 0.2115 * red + -0.5227 * green +  0.3112 * blue;

    y = Math.min(Math.max(y,0),1);
    i = Math.min(Math.max(i,-0.5957),0.5957);
    q = Math.min(Math.max(q,-0.5226),0.5226);

    if (normalize) {
      y = Util.scaleValueRange(y, 0, 1, 0, 255, false);
      i = Util.scaleValueRange(i + 0.5957, 0, 1.1914, 0, 256, false) - 128;
      q = Util.scaleValueRange(i + 0.5226, 0, 1.0452, 0, 256, false) - 128;

      if (round) {
        y = Math.round(y);
        i = Math.round(i);
        q = Math.round(q);
      }
    }

    return [y, i, q];
  }

  /**
   * Convert YIQ to RGB
   *
   * @param  {int|float} y                 0 to 255 or 0 to 1
   * @param  {int|float} i                 -128 to 128 or -0.5957 to 0.5957
   * @param  {int|float} q                 -128 to 128 or -0.5226 to 0.5226
   * @param  {bool}      [normalized=true] true = Y[0,255], I&Q[-128,128]; false = Y[0,1], I[-0.5957,0.5957], Q[-0.5226,0.5226]
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255]    RGB max value per channel
   * @return {float[]|int[]}               red, green, blue
   */
  static yiq2rgb(y, i, q, normalized = true, round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    if (normalized) {
      Util.valueRangeCheck(y, 0, 255);
      Util.valueRangeCheck(i, -128, 128);
      Util.valueRangeCheck(q, -128, 128);

      y = Util.scaleValueRange(y, 0, 255, 0, 1, false);
      i = Util.scaleValueRange(i, -128, 128, -0.5957, 0.5957, false);
      q = Util.scaleValueRange(q, -128, 128, -0.5226, 0.5226, false);
    }
    else {
      Util.valueRangeCheck(y, 0, 1);
      Util.valueRangeCheck(i, -0.5957, 0.5957);
      Util.valueRangeCheck(q, -0.5226, 0.5226);
    }

    let r = (y +  0.956 * i +  0.621 * q) * bitDepth;
    let g = (y + -0.272 * i + -0.647 * q) * bitDepth;
    let b = (y + -1.106 * i +  1.703 * q) * bitDepth;

    if (round) {
      r = Math.round(r);
      g = Math.round(g);
      b = Math.round(b);
    }

    return [r, g, b];
  }

  /////////// XYZ, xyY ///////////

  /**
   * Convert RGB to XYZ
   * X, Y, and Z will be between 0 and the white point reference XYZ values
   * Formulae and matrices originally from:
   * http://www.brucelindbloom.com
   *
   * @param  {int|float} red
   * @param  {int|float} green
   * @param  {int|float} blue
   * @param  {string}    [colorSpace=srgb]    RGB color space (e.g. sRGB)
   * @param  {string}    [referenceWhite=d65] RGB reference white (e.g. D65)
   * @param  {int}       [bitDepth=255]       RGB max value per channel
   * @return {float[]}                        X, Y, Z
   */
  static rgb2xyz(red, green, blue, colorSpace = 'srgb', referenceWhite = 'd65', bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(red,   0, bitDepth);
    Util.valueRangeCheck(green, 0, bitDepth);
    Util.valueRangeCheck(blue,  0, bitDepth);

    red   /= bitDepth;
    green /= bitDepth;
    blue  /= bitDepth; 

    // make lowercase, include common nomenclature differences, ignore spaces, etc
    colorSpace = colorSpace.replace(/[^a-z0-9]/,'').toLowerCase();
    referenceWhite = referenceWhite.toLowerCase();
    let conform = {
        'adobergb':  'adobergb1998',
        'ntsc':      'ntscrgb',
        'pal':       'palsecamrgb',
        'palrgb':    'palsecamrgb',
        'secam':     'palsecamrgb',
        'secamrgb':  'palsecamrgb',
        'prophoto':  'prophotorgb',
        'smpte':     'smptecrgb',
        'smptec':    'smptecrgb',
        'widegamut': 'widegamutrgb'
    };
    if (typeof conform[colorSpace] == 'string') {
      colorSpace = conform[colorSpace];
    }

    if (typeof Reference.colorSpaces[colorSpace] == 'undefined' ||
        typeof Reference.colorSpaces[colorSpace]['rgb2xyz'] == 'undefined' ||
        typeof Reference.colorSpaces[colorSpace]['rgb2xyz'][referenceWhite] == 'undefined') {
          throw new Error('Transformation matrix unavailable for this color space and reference white');
    }
    let m = Reference.colorSpaces[colorSpace]['rgb2xyz'][referenceWhite];

    let r;
    let g;
    let b;
    if (colorSpace == 'srgb') {
      // sRGB
      r = red   <= 0.04045 ? red   / 12.92 : Math.pow((red   + 0.055) / 1.055, 2.4);
      g = green <= 0.04045 ? green / 12.92 : Math.pow((green + 0.055) / 1.055, 2.4);
      b = blue  <= 0.04045 ? blue  / 12.92 : Math.pow((blue  + 0.055) / 1.055, 2.4);
    }
    else if (colorSpace == 'ecirgb') {
      // L*
      r = red   <= 0.08 ? 100 * (red   / Reference.cieK) : Math.pow((red   + 0.16) / 1.16, 3);
      g = green <= 0.08 ? 100 * (green / Reference.cieK) : Math.pow((green + 0.16) / 1.16, 3);
      b = blue  <= 0.08 ? 100 * (blue  / Reference.cieK) : Math.pow((blue  + 0.16) / 1.16, 3);
    }
    else {
      // Gamma
      if (typeof Reference.colorSpaces[colorSpace]['gamma'] == 'undefined') {
        throw new Error('Gamma not defined for this color space');
      }
      r = Math.pow(red,   Reference.colorSpaces[colorSpace]['gamma']);
      g = Math.pow(green, Reference.colorSpaces[colorSpace]['gamma']);
      b = Math.pow(blue,  Reference.colorSpaces[colorSpace]['gamma']);
    }

    // [X]           [R]
    // [Y] = [M 3x3]*[G]
    // [Z]           [B]
    let x = m[0][0] * r + m[0][1] * g + m[0][2] * b;
    let y = m[1][0] * r + m[1][1] * g + m[1][2] * b;
    let z = m[2][0] * r + m[2][1] * g + m[2][2] * b;

    return [x, y, z];
  }

  /**
   * Convert XYZ to RGB
   * RGB values that fall outsize representable values will be clamped
   *
   * @param  {float}     x
   * @param  {float}     y
   * @param  {float}     z
   * @param  {string}    [colorSpace=srgb]    RGB color space (e.g. sRGB)
   * @param  {string}    [referenceWhite=d65] RGB reference white (e.g. D65)
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255]       RGB max value per channel
   * @return {float[]|int[]}                  red, green, blue
   */
  static xyz2rgb(x, y, z, colorSpace = 'srgb', referenceWhite = 'd65', round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);

    // make lowercase, include common nomenclature differences, ignore spaces, etc
    colorSpace = colorSpace.replace(/[^a-z0-9]/,'').toLowerCase();
    referenceWhite = referenceWhite.toLowerCase();
    let conform = {
        'adobergb':  'adobergb1998',
        'ntsc':      'ntscrgb',
        'pal':       'palsecamrgb',
        'palrgb':    'palsecamrgb',
        'secam':     'palsecamrgb',
        'secamrgb':  'palsecamrgb',
        'prophoto':  'prophotorgb',
        'smpte':     'smptecrgb',
        'smptec':    'smptecrgb',
        'widegamut': 'widegamutrgb'
    };
    if (typeof conform[colorSpace] == 'string') {
      colorSpace = conform[colorSpace];
    }

    if (typeof Reference.colorSpaces[colorSpace] == 'undefined' ||
        typeof Reference.colorSpaces[colorSpace]['xyz2rgb'] == 'undefined' ||
        typeof Reference.colorSpaces[colorSpace]['xyz2rgb'][referenceWhite] == 'undefined') {
          throw new Error('Transformation matrix unavailable for this color space and reference white');
    }
    let m = Reference.colorSpaces[colorSpace]['xyz2rgb'][referenceWhite];

    // [R]       [X]
    // [G] = [M]*[Y]  where [M] is [RGB to XYZ matrix]^-1
    // [B]       [Z]
    let r = m[0][0] * x + m[0][1] * y + m[0][2] * z;
    let g = m[1][1] * x + m[1][1] * y + m[1][2] * z;
    let b = m[2][1] * x + m[2][1] * y + m[2][2] * z;

    if (colorSpace == 'srgb') {
      // sRGB
      r = r <= 0.0031308 ? r * 12.92 : Math.pow((r * 1.055), 1/2.4) - 0.055;
      g = g <= 0.0031308 ? g * 12.92 : Math.pow((g * 1.055), 1/2.4) - 0.055;
      b = b <= 0.0031308 ? b * 12.92 : Math.pow((b * 1.055), 1/2.4) - 0.055;
    }
    else if (colorSpace == 'ecirgb') {
      // L*
      r = r <= Reference.cieE ? (r * Reference.cieK) / 100 : 1.16 * Math.pow(r, 1/3) - 0.16;
      r = g <= Reference.cieE ? (g * Reference.cieK) / 100 : 1.16 * Math.pow(g, 1/3) - 0.16;
      r = b <= Reference.cieE ? (b * Reference.cieK) / 100 : 1.16 * Math.pow(b, 1/3) - 0.16;
    }
    else {
      // Gamma
      if (typeof Reference.colorSpaces[colorSpace]['gamma'] == 'undefined') {
        throw new Error('Gamma not defined for this color space');
      }
      r = Math.pow(r, 1 / Reference.colorSpaces[colorSpace]['gamma']);
      g = Math.pow(g, 1 / Reference.colorSpaces[colorSpace]['gamma']);
      b = Math.pow(b, 1 / Reference.colorSpaces[colorSpace]['gamma']);
    }

    r = Math.min(Math.max(r,0),1) * bitDepth;
    g = Math.min(Math.max(g,0),1) * bitDepth;
    b = Math.min(Math.max(b,0),1) * bitDepth;

    if (round) {
      r = Math.round(r);
      g = Math.round(g);
      b = Math.round(b);
    }

    return [r, g, b];
  }

  /**
   * Convert XYZ to xyY
   *
   * @param  {float}     x
   * @param  {float}     y
   * @param  {float}     z
   * @return {float[]}       x, y, Y
   */
  static xyz2xyy(x, y, z) {
    let cx;
    let cy;
    let sum = x + y + z;
    if (!sum) {
      cx = 0;
      cy = 0;
    }
    else {
      cx = x / sum;
      cy = y / sum;
    }

    return [cx, cy, y];
  }

  /**
   * Convert xyY to XYZ
   *
   * @param  {float}     x  x
   * @param  {float}     y  y
   * @param  {float}     yy Y
   * @return {float[]}       X, Y, Z
   */
  static xyy2xyz(x, y, yy) {
    let cx;
    let cy;
    if (y) {
      cx = 0;
      cy = 0;
    }
    else {
      cx = (x * yy) / y;
      cz = ((1 - x - y) * yy) / y;
    }

    return [cx, y, cz];
  }

  /////////// Lab ///////////

  /**
   * Convert XYZ to Lab
   *
   * @param  {float}        x              0 to 1
   * @param  {float}        y              0 to 1
   * @param  {float}        z              0 to 1
   * @param  {string|array} referenceWhite string (one of listed standards) or 1x3 matrix
   * @return {float[]}                     L, a, b
   */
  static xyz2lab(x, y, z, referenceWhite = 'd65') {
    let w = Util.validReferenceWhite(referenceWhite);

    let xr = x / w[0];
    let yr = y / w[1];
    let zr = z / w[2];

    let fx = x > Reference.cieE ? Math.pow(xr, 1/3) : (Reference.cieK * xr + 16) / 116;
    let fy = y > Reference.cieE ? Math.pow(yr, 1/3) : (Reference.cieK * yr + 16) / 116;
    let fz = z > Reference.cieE ? Math.pow(zr, 1/3) : (Reference.cieK * zr + 16) / 116;

    let l = 116 * fy - 16;
    let a = 500 * (fx - fy);
    let b = 200 * (fy - fz);

    return [l, a, b];
  }

  /**
   * Convert Lab to XYZ
   *
   * @param  {float}        l
   * @param  {float}        a
   * @param  {float}        b
   * @param  {string|array} referenceWhite string (one of listed standards) or 1x3 matrix
   * @return {float[]}                     x, y, z
   */
  static lab2xyz(l, a, b, referenceWhite = 'd65') {
    let w = Util.validReferenceWhite(referenceWhite);

    let fy = (l + 16) / 116;
    let fx = a / 500 + fy;
    let fz = fy - b / 200;

    let xr = Math.pow(fx, 3) > Reference.cieE ? Math.pow(fx, 3) : (116 * fx - 16) / Reference.cieK;
    let yr = l > Reference.cieK * Reference.cieE ? Math.pow(fy, 3) : l * Reference.cieK;
    let zr = Math.pow(fz, 3) > Reference.cieE ? Math.pow(fz, 3) : (116 * fz - 16) / Reference.cieK;

    let x = xr * w[0];
    let y = yr * w[1];
    let z = zr * w[2];

    return [x, y, z];
  }

  /////////// Luv ///////////

  /**
   * Convert XYZ to Luv
   * L will range between 0% and 100%
   * u and v will range between -100% and 100%
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
   * @param  {float}        x              0 to 1
   * @param  {float}        y              0 to 1
   * @param  {float}        z              0 to 1
   * @param  {string|array} referenceWhite string (one of listed standards) or 1x3 matrix
   * @return {float[]}                     L, u, v
   */
  static xyz2luv(x, y, z, referenceWhite = 'd65') {
    let w = Util.validReferenceWhite(referenceWhite);

    let yr = y / w[1];

    let div = x + 15 * y + 3 * z;
    if (!div) {
      let up = 0;
      let vp = 0;
    }
    else {
      let up = (4 * x) / div;
      let vp = (9 * y) / div;
    }

    let upr = (4 * w[0]) / (w[0] + 15 * w[1] + 3 * w[2]);
    let vpr = (9 * w[1]) / (w[0] + 15 * w[1] + 3 * w[2]);

    let l = yr > Reference.cieE ? 116 * Math.pow(yr, 1/3) - 16 : Reference.cieK * yr;
    let u = 13 * l * (up - upr);
    let v = 13 * l * (vp - vpr);

    return [l, u, v];
  }

  /**
   * Convert Luv to XYZ
   * X, Y, and Z will be in range 0 to 1
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
   * @param  {float}        l                0 to 100
   * @param  {float}        u             -100 to 100
   * @param  {float}        v             -100 to 100
   * @param  {string|array} referenceWhite string (one of listed standards) or 1x3 matrix
   * @return {float[]}                     x, y, z
   */
  static luv2xyz(l, u, v, referenceWhite) {
    Util.valueRangeCheck(l, 0, 100);
    Util.valueRangeCheck(u, -100, 100);
    Util.valueRangeCheck(v, -100, 100);
    let w = Util.validReferenceWhite(referenceWhite);

    let u0 = (4 * w[0]) / (w[0] + 15 * w[1] + 3 * w[2]);
    let v0 = (9 * w[0]) / (w[0] + 15 * w[1] + 3 * w[2]);

    let y = l > Reference.cieK * Reference.cieE ? Math.pow((l + 16) / 116, 3) : l / Reference.cieK;

    let a = 1 / 3 * (((52 * l) / (u + 13 * l * u0)) - 1);
    let b = -5 * y;
    let c = -1 / 3;
    let d = y * (((39 * l) / (v + 13 * l * v0)) - 5);

    let x = (d - b) / (a - c);
    let z = x * a + b;

    return [x, y, z];
  }

  /////////// YCbCr and STANDARDS ///////////

  /**
   * Convert RGB to Rec709 RGB
   * Will output either 8-bit or 10-bit depending on input color space
   *
   * @param  {int|float} red
   * @param  {int|float} green
   * @param  {int|float} blue
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per INPUT channel
   * @return {float[]|int[]}            red, green, blue
   */
  static rgb2rec709rgb(red, green, blue, round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(red,   0, bitDepth);
    Util.valueRangeCheck(green, 0, bitDepth);
    Util.valueRangeCheck(blue,  0, bitDepth);

    // output must be 8-bit or 10-bit, pick whichever is closer to input depth
    let rgbLower;
    let rgbUpper;
    if (Math.abs(bitDepth - 256) < Math.abs(bitDepth - 1024)) {
      // 8-bit
      rgbLower = 16;
      rgbUpper = 235;
    }
    else {
      // 10-bit
      rgbLower = 64;
      rgbUpper = 940;
    }

    let r = this.scaleValueRange(red,   0, bitDepth, rgbLower, rgbUpper, round);
    let g = this.scaleValueRange(green, 0, bitDepth, rgbLower, rgbUpper, round);
    let b = this.scaleValueRange(blue,  0, bitDepth, rgbLower, rgbUpper, round);

    return [r, g, b];
  }

  /**
   * Convert Rec709 RGB to RGB
   * Converts 8-bit or 10-bit Rec709 RGB values to standard (0 - $color_depth) range
   * Input RGB values outside of legal black and white points will be clamped
   *
   * @param  {int|float} red
   * @param  {int|float} green
   * @param  {int|float} blue
   * @param  {int}       [bitRate=8]    8 or 10
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per OUTPUT channel
   * @return {float[]|int[]}            red, green, blue
   */
  static rec709rgb2rgb(red, green, blue, bitRate = 8, round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    if (bitRate == 8) {
      minFrom = 16;
      maxFrom = 235;
    }
    else if (bitRate == 10) {
      minFrom = 64;
      maxFrom = 876;
    }
    else {
      throw new Error('Invalid bitrate (must be 8 or 10)');
    }

    // Rather than require bounds, clamp values
    red   = Math.min(Math.max(red,   maxFrom, minFrom));
    green = Math.min(Math.max(green, maxFrom, minFrom));
    blue  = Math.min(Math.max(blue,  maxFrom, minFrom));

    let r = this.scaleValueRange(red,   minFrom, maxFrom, 0, bitDepth, round);
    let g = this.scaleValueRange(green, minFrom, maxFrom, 0, bitDepth, round);
    let b = this.scaleValueRange(blue,  minFrom, maxFrom, 0, bitDepth, round);

    return [r, g, b];
  }

  /**
   * Convert RGB to Rec2020 RGB
   * Will output either 10-bit or 12-bit depending on input color space
   *
   * @param  {int|float} red
   * @param  {int|float} green
   * @param  {int|float} blue
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per INPUT channel
   * @return {float[]|int[]}            red, green, blue
   */
  static rgb2rec2020rgb(red, green, blue, round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(red,   0, bitDepth);
    Util.valueRangeCheck(green, 0, bitDepth);
    Util.valueRangeCheck(blue,  0, bitDepth);

    // output must be 10-bit or 12-bit, pick whichever is closer to input depth
    let rgbLower;
    let rgbUpper;
    if (Math.abs(bitDepth - 1024) < Math.abs(bitDepth - 4096)) {
      // 10-bit
      rgbLower = 64;
      rgbUpper = 940;
    }
    else {
      // 12-bit
      rgbLower = 256;
      rgbUpper = 3760;
    }

    let r = this.scaleValueRange(red,   0, bitDepth, rgbLower, rgbUpper, round);
    let g = this.scaleValueRange(green, 0, bitDepth, rgbLower, rgbUpper, round);
    let b = this.scaleValueRange(blue,  0, bitDepth, rgbLower, rgbUpper, round);

    return [r, g, b];
  }

  /**
   * Convert Rec2020 RGB to RGB
   * Converts 10-bit or 12-bit Rec2020 RGB values to standard (0 - $color_depth) range
   * Input RGB values outside of legal black and white points will be clamped
   *
   * @param  {int|float} red
   * @param  {int|float} green
   * @param  {int|float} blue
   * @param  {int}       [bitRate=10]   10 or 12
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per OUTPUT channel
   * @return {float[]|int[]}            red, green, blue
   */
  static rec2020rgb2rgb(red, green, blue, bitRate = 10, round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    if (bitRate == 10) {
      minFrom = 64;
      maxFrom = 876;
    }
    else if (bitRate == 12) {
      minFrom = 256;
      maxFrom = 3760;
    }
    else {
      throw new Error('Invalid bitrate (must be 10 or 12)');
    }

    // Rather than require bounds, clamp values
    red   = Math.min(Math.max(red,   maxFrom, minFrom));
    green = Math.min(Math.max(green, maxFrom, minFrom));
    blue  = Math.min(Math.max(blue,  maxFrom, minFrom));

    let r = this.scaleValueRange(red,   minFrom, maxFrom, 0, bitDepth, round);
    let g = this.scaleValueRange(green, minFrom, maxFrom, 0, bitDepth, round);
    let b = this.scaleValueRange(blue,  minFrom, maxFrom, 0, bitDepth, round);

    return [r, g, b];
  }

  /**
   * Convert RGB to Rec709 YCbCr
   * Will output either 8-bit or 10-bit depending on input color space
   *
   * @param  {int|float} red
   * @param  {int|float} green
   * @param  {int|float} blue
   * @param  {int}       [bitRate=8]    8 or 10
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per INPUT channel
   * @return {float[]}                  Y, Cb, Cr
   */
  static rgb2rec709ycbcr(red, green, blue, bitRate = 8, round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(red,   0, bitDepth);
    Util.valueRangeCheck(green, 0, bitDepth);
    Util.valueRangeCheck(blue,  0, bitDepth);

    if (bitRate == 8) {
      yLower = 16;
      yUpper = 235;
      cLower = 16;
      cUpper = 240;
    }
    else if (bitRate == 10) {
      yLower = 64;
      yUpper = 940;
      cLower = 64;
      cUpper = 960;
    }
    else {
        throw new Error('Invalid bit depth, Rec709 bit depth must be 8 or 10');
    }

    let [yp, pb, pr] = this.rgb2ypbpr(red, green, blue, 0.0722, 0.2126, bitDepth);

    let ycbcr = this.ypbpr2ycbcr(yp, pb, pr, yLower, yUpper, cLower, cUpper, round);

    return ycbcr;
  }

  /**
   * Convert Rec709 YCbCr to RGB
   *
   * @param  {float}     y              16 to 235 OR 64 to 940
   * @param  {float}     cb             16 to 240 OR 64 to 960
   * @param  {float}     cr             16 to 240 OR 64 to 960
   * @param  {int}       [bitRate=8]    8 or 10
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per channel
   * @return {int[]|float[]}            red, green, blue
   */
  static rec709ycbcr2rgb(y, cb, cr, bitRate = 8, round = true, bitDepth = 255) {
    let yp, pb, pr;
    if (bitRate == 8) {
      [yp, pb, pr] = this.ycbcr2ypbpr(y, cb, cr, 16, 235, 16, 240);
    }
    else if (bitRate = 10) {
      [yp, pb, pr] = this.ycbcr2ypbpr(y, cb, cr, 64, 940, 64, 960);
    }
    else {
      throw new Error('Invalid bit depth, Rec709 bit depth must be 8 or 10');
    }

    let rgb = this.ypbpr2rgb(yp, pb, pr, 0.0722, 0.2126, round, bitDepth);

    return rgb;
  }

  /**
   * Convert RGB to Rec2020 YCbCr
   *
   * @param  {int|float} red
   * @param  {int|float} green
   * @param  {int|float} blue
   * @param  {int}       [bitRate=10]   10 or 12
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per INPUT channel
   * @return {float[]}                  Y, Cb, Cr
   */
  static rgb2rec709ycbcr(red, green, blue, bitRate = 10, round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(red,   0, bitDepth);
    Util.valueRangeCheck(green, 0, bitDepth);
    Util.valueRangeCheck(blue,  0, bitDepth);

    if (bitRate == 10) {
      yLower = 64;
      yUpper = 940;
      cLower = 64;
      cUpper = 960;
    }
    else if (bitRate == 12) {
      yLower = 256;
      yUpper = 3760;
      cLower = 256;
      cUpper = 3840;
    }
    else {
        throw new Error('Invalid bit depth, Rec2020 bit depth must be 10 or 12');
    }

    let [yp, pb, pr] = this.rgb2ypbpr(red, green, blue, 0.0593, 0.2627, bitDepth);

    let ycbcr = this.ypbpr2ycbcr(yp, pb, pr, yLower, yUpper, cLower, cUpper, round);

    return ycbcr;
  }

  /**
   * Convert Rec2020 YCbCr to RGB
   *
   * @param  {float}     y              64 to 940 OR 256 to 3760
   * @param  {float}     cb             64 to 960 OR 256 to 3840
   * @param  {float}     cr             64 to 960 OR 256 to 3840
   * @param  {int}       [bitDepth=10]  10 or 12
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per channel
   * @return {int[]|float[]}            red, green, blue
   */
  static rec2020ycbcr2rgb(y, cb, cr, bitRate = 10, round = true, bitDepth = 255) {
    let yp, pb, pr;
    if (bitRate == 10) {
      [yp, pb, pr] = this.ycbcr2ypbpr(y, cb, cr, 64, 940, 64, 960);
    }
    else if (bitRate = 12) {
      [yp, pb, pr] = this.ycbcr2ypbpr(y, cb, cr, 256, 3760, 256, 3840);
    }
    else {
      throw new Error('Invalid bit depth, Rec2020 bit depth must be 10 or 12');
    }

    let rgb = this.ypbpr2rgb(yp, pb, pr, 0.0593, 0.2627, round, bitDepth);

    return rgb;
  }

  /**
   * Convert Rec709 YCbCr to Rec2020 YCbCr
   *
   * @param  {float}     y               16 to 235 OR 64 to 940
   * @param  {float}     cb              16 to 240 OR 64 to 960
   * @param  {float}     cr              16 to 240 OR 64 to 960
   * @param  {int}       [bitRateIn=8]   8 or 10
   * @param  {int}       [bitRateOut=10] 10 or 12
   * @param  {bool}      [round=true]
   * @return {int[]|float[]}             Y, Cb, Cr
   */
  static rec709ycbcr2rec2020ycbcr(y, cb, cr, bitRateIn = 8, bitRateOut = 10, round = true) {
    let bitDepth = (2 ** bitRateOut) - 1;
    let [r, g, b] = this.rec709ycbcr2rgb(y, cb, cr, bitRateIn, false, bitDepth);
    let ycbcr = this.rgb2rec2020ycbcr(r, g, b, bitRateOut, round, bitDepth);

    return ycbcr;
  }

  /**
   * Convert Rec2020 YCbCr to Rec709 YCbCr
   *
   * @param  {float}     y               16 to 235 OR 64 to 940
   * @param  {float}     cb              16 to 240 OR 64 to 960
   * @param  {float}     cr              16 to 240 OR 64 to 960
   * @param  {int}       [bitRateIn=8]   8 or 10
   * @param  {int}       [bitRateOut=10] 10 or 12
   * @param  {bool}      [round=true]
   * @return {int[]|float[]}             Y, Cb, Cr
   */
  static rec2020ycbcr2rec709ycbcr(y, cb, cr, bitRateIn = 10, bitRateOut = 8, round = true) {
    let bitDepth = (2 ** bitRateOut) - 1;
    let [r, g, b] = this.rec2020ycbcr2rgb(y, cb, cr, bitRateIn, false, bitDepth);
    let ycbcr = this.rgb2rec709ycbcr(r, g, b, bitRateOut, round, bitDepth);

    return ycbcr;
  }

  /**
   * Convert RGB to YCbCr
   *
   * @param  {int|float} red
   * @param  {int|float} green
   * @param  {int|float} blue
   * @param  {float}     kb             Kb constant defined from target color space, such that Kb + Kr + Kg = 1
   * @param  {float}     kr             Kr constant defined from target color space, such that Kb + Kr + Kg = 1
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per channel
   * @return {float[]|int[]}            Y, Cb, Cr
   */
  static rgb2ycbcr(red, green, blue, kb, kr, round = true, bitDepth = 255) {
    let [yp, pb, pr] = this.rgb2ypbpr(red, green, blue, kb, kr, bitDepth);
    let ycbcr = this.ypbpr2ycbcr(yp, pb, pr, 0, bitDepth, 0, bitDepth, round);

    return ycbcr;
  }

  /**
   * Convert RGB to YPbPr
   * Y will range from 0 to 1; Pb and Pr will range from -0.5 to 0.5
   *
   * @param  {int|float} red
   * @param  {int|float} green
   * @param  {int|float} blue
   * @param  {float}     kb             Kb constant defined from target color space, such that Kb + Kr + Kg = 1
   * @param  {float}     kr             Kr constant defined from target color space, such that Kb + Kr + Kg = 1
   * @param  {int}       [bitDepth=255] RGB max value per channel
   * @return {float[]}                  Y, Cb, Cr
   */
  static rgb2ypbpr(red, green, blue, kb, kr, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(red,   0, bitDepth);
    Util.valueRangeCheck(green, 0, bitDepth);
    Util.valueRangeCheck(blue,  0, bitDepth);
    Util.valueRangeCheck(kb, 0, 1);
    Util.valueRangeCheck(kr, 0, 1);

    red   /= bitDepth;
    green /= bitDepth;
    blue  /= bitDepth;

    let kg = 1 - kb - kr;

    // Y' ranges from 0 to 1
    let yp = kr * red + kg * green + kb * blue;

    // Pb and Pr range from -0.5 to +0.5
    let pb = (-0.5 * (kr / (1 - kb))) * red + (-0.5 * (kg / (1 - kb))) * green + 0.5 * blue;
    let pr = 0.5 * red + (-0.5 * (kg / (1 - kr))) * green + (-0.5 * (kb / (1 - kr))) * blue;

    return [yp, pb, pr];
  }

  /**
   * Convert YPbPr to RGB
   * Y must range from 0 to 1; Pb and Pr must range from -0.5 to 0.5
   *
   * @param  {float}     y                 0 to 1
   * @param  {float}     pb             -0.5 to 0.5
   * @param  {float}     pr             -0.5 to 0.5
   * @param  {float}     kb             Kb constant defined from target color space, such that Kb + Kr + Kg = 1
   * @param  {float}     kr             Kr constant defined from target color space, such that Kb + Kr + Kg = 1
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per channel
   * @return {int[]|float[]}            red, green, blue
   */
  static ypbpr2rgb(y, pb, pr, kb, kr, round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(y, 0, 1);
    Util.valueRangeCheck(pb, -0.5, 0.5);
    Util.valueRangeCheck(pr, -0.5, 0.5);
    Util.valueRangeCheck(kb, 0, 1);
    Util.valueRangeCheck(kr, 0, 1);

    let kg = 1 - kb - kr;

    let r = y + (2 - 2 * kr) * pr;
    let g = y + (-1 * (kb / kg) * (2 - 2 * kb)) * pb + (-1 * (kr / kg) * (2 - 2 * kr)) * pr;
    let b = y + (2 - 2 * kr) * pb;

    r *= bitDepth;
    g *= bitDepth;
    b *= bitDepth;

    if (round) {
      r = Math.round(r);
      g = Math.round(g);
      b = Math.round(b);
    }

    return [r, g, b];
  }

  /**
   * Convert YPbPr to YCbCr
   * Y must be in range 0 to 1; Pb and Pr must be in range -0.5 to 0.5
   *
   * @param  {float}     y               0 to 1
   * @param  {float}     pb           -0.5 to 0.5
   * @param  {float}     pr           -0.5 to 0.5
   * @param  {int|float} yLower       Lower bounds of Y
   * @param  {int|float} yUpper       Upper bounds of Y
   * @param  {int|float} cLower       Lower bounds of Cb and Cr
   * @param  {int|float} cUpper       Upper bounds of Cb and Cr
   * @param  {bool}      [round=true]
   * @return {int[]|float[]}          Y, Cb, Cr
   */
  static ypbpr2ycbcr(y, pb, pr, yLower, yUpper, cLower, cUpper, round = true) {
    Util.valueRangeCheck(y, 0, 1);
    Util.valueRangeCheck(pb, -0.5, 0.5);
    Util.valueRangeCheck(pr, -0.5, 0.5);

    let y2 = this.scaleValueRange(y, 0, 1, yLower, yUpper, round);
    let cb = this.scaleValueRange(cb, -0.5, 0.5, cLower, cUpper, round);
    let cr = this.scaleValueRange(cr, -0.5, 0.5, cLower, cUpper, round);

    return [y2, cb, cr];
  }

  /**
   * Convert YCbCr to YPbPr
   * Y will be in range 0 to 1; Pb and Pr will be in range -0.5 to 0.5
   *
   * @param  {int|float} y
   * @param  {int|float} cb
   * @param  {int|float} cr
   * @param  {int|float} yLower       Lower bounds of Y
   * @param  {int|float} yUpper       Upper bounds of Y
   * @param  {int|float} cLower       Lower bounds of Cb and Cr
   * @param  {int|float} cUpper       Upper bounds of Cb and Cr
   * @return {float[]}                Y, Pb, Pr
   */
  static ycbcr2ypbpr(y, cb, cr, yLower, yUpper, cLower, cUpper) {
    Util.valueRangeCheck(y, yLower, yUpper);
    Util.valueRangeCheck(cb, cLower, cUpper);
    Util.valueRangeCheck(cr, cLower, cUpper);

    let y2 = this.scaleValueRange(y, yLower, yUpper, 0, 1, false);
    let pb = this.scaleValueRange(cb, cLower, cUpper, -0.5, 0.5, false);
    let pr = this.scaleValueRange(cr, cLower, cUpper, -0.5, 0.5, false);

    return [y2, pb, pr];
  }

  /**
   * Convert RGB to JPEG YCbCr
   * Output Y, Cb, and Cr range from 0 to 255
   *
   * @param  {int|float} red
   * @param  {int|float} green
   * @param  {int|float} blue
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per INPUT channel
   * @return {float[]|int[]}            Y, Cb, Cr
   */
  static rgb2jpegycbcr(red, green, blue, round = false, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(red,   0, bitDepth);
    Util.valueRangeCheck(green, 0, bitDepth);
    Util.valueRangeCheck(blue,  0, bitDepth);

    if (bitDepth != 255) {
      red   = red   / bitDepth * 255;
      green = green / bitDepth * 255;
      blue  = blue  / bitDepth * 255;
    }

    let y = 0.299 * red + 0.587 * green + 0.114 * blue;
    let cb = 128 - 0.168736 * red - 0.331264 * green + 0.5 * blue;
    let cr = 128 + 0.5 * red - 0.418688 * green - 0.081312 * blue;

    if (round) {
      y = Math.round(y);
      cb = Math.round(cb);
      cr = Math.round(cr);
    }

    return [y, cb, cr];
  }

  /**
   * Convert JPEG YCbCr to RGB
   * Y, Cb, and Cr should range from 0 to 255
   *
   * @param  {int|float} y              0 to 255
   * @param  {int|float} cb             0 to 255
   * @param  {int|float} cr             0 to 255
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per OUTPUT channel
   * @return {float[]|int[]}            red, green, blue
   */
  static jpegycbcr2rgb(y, cb, cr, round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(y,  0, 255);
    Util.valueRangeCheck(cb, 0, 255);
    Util.valueRangeCheck(cr, 0, 255);

    let r = y + 1.402 * (cr - 128);
    let g = y - 0.344136 * (cb - 128) - 0.714136 * (cr - 128);
    let b = y + 1.772 * (cb - 128);

    if (bitDepth != 255) {
      r = r / 255 * bitDepth;
      g = g / 255 * bitDepth;
      b = b / 255 * bitDepth;
    }

    if (round) {
      r = Math.round(r);
      g = Math.round(g);
      b = Math.round(b);
    }

    return [r, g, b];
  }
  
  /////////// ONE WAY APPROXIMATIONS to RGB ///////////

  /**
   * Convert a wavelength in nm to RGB
   * This is hugely perceptual and approximate
   * Original algorithm:
   * https://academo.org/demos/wavelength-to-colour-relationship/
   *
   * @param  {int|float} wavelength     Wavelength of light in nanometers (positive number)
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per channel
   * @return {float[]|int[]}            red, green, blue
   */
  static nm2rgb(wavelength, gamma = 0.8, round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(wavelength, 200, 800); // actual falloff ~380-781

    let r;
    let g;
    let b;

    if (wavelength >= 380 && wavelength < 440) {
      r = ((wavelength - 440) / (440 - 380)) * -1;
      g = 0;
      b = 1;
    }
    else if (wavelength >= 440 && wavelength < 490) {
      r = 0;
      g = (wavelength - 440) / (490 - 440);
      b = 1;
    }
    else if (wavelength >= 510 && wavelength < 580) {
      r = (wavelength - 510) / (580 - 510);
      g = 1;
      b = 0;
    }
    else if (wavelength >= 580 && wavelength < 645) {
      r = 1;
      g = ((wavelength - 645) / (645 - 580)) * -1;
      b = 0;
    }
    else if (wavelength >= 645 && wavelength < 781) {
      r = 1;
      g = 0;
      b = 0;
    }
    else {
      r = 0;
      g = 0;
      b = 0;
    }

    let factor;
    // Let the intensity fall off near the vision limits
    if (wavelength >= 380 && wavelength < 420) {
      factor = 0.3 + 0.7 * (wavelength - 380) / (420 - 380);
    }
    else if (wavelength >= 420 && wavelength < 701) {
      factor = 1;
    }
    else if (wavelength >= 701 && wavelength < 781) {
      factor = 0.3 + 0.7 * (780 - wavelength) / (780 - 700);
    }
    else {
      factor = 0;
    }
    
    if (r > 0) {
      r = color_depth * Math.pow(r * factor, gamma);
    }
    if (g > 0) {
      g = color_depth * Math.pow(g * factor, gamma);
    }
    if (b > 0) {
      b = color_depth * Math.pow(b * factor, gamma);
    }

    if (round) {
      r = Math.round(r);
      g = Math.round(g);
      b = Math.round(b);
    }

    return [r, g, b];
  }

  /**
   * Convert a color temperature in Kelvin to RGB
   * Not accurate for scientific purposes
   * Original algorithm from:
   * https://tannerhelland.com/2012/09/18/convert-temperature-rgb-algorithm-code.html
   *
   * @param  {int|float} temperature    Color temperature in degrees Kelvin; must fall between 1000 and 40000
   * @param  {bool}      [round=true]
   * @param  {int}       [bitDepth=255] RGB max value per channel
   * @return {float[]|int[]}            red, green, blue
   */
  static kelvin2rgb(temperature, round = true, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(temperature, 1000, 40000);

    temperature /= 100;
    let scalar = bitDepth / 255;

    let r;
    let g;
    let b;
    if (temperature <= 66) {
      r = bitDepth;
      g = 99.4708025861 * Math.log(temperature) - 161.1195681661;
    }
    else {
      r = 329.698727466 * Math.pow(temperature - 60, -0.1332047592);
      g = 288.1221695283 * Math.pow(temperature - 60, -0.0755148492);
    }

    if (temperature >= 66) {
      b = bitDepth;
    }
    else if (temperature <= 19) {
      b = 0;
    }
    else {
      b = 138.5177312231 * Math.log(temperature - 10) - 305.0447927307;
    }

    r *= scalar;
    g *= scalar;
    b *= scalar;

    r = Math.min(Math.max(r, 0), bitDepth);
    g = Math.min(Math.max(g, 0), bitDepth);
    b = Math.min(Math.max(b, 0), bitDepth);

    if (round) {
      r = Math.round(r);
      g = Math.round(g);
      b = Math.round(b);
    }

    return [r, g, b];
  }

  /////////// HEXIDECIMAL ///////////

  /**
   * Convert HEX to RGB
   *
   * @param  {string} hex
   * @return {int[]}      red, green, blue
   */
  static hex2rgb(hex, bitDepth = 255) {
    hex = Util.expandHex(hex);
    let r = parseInt(hex.substr(0,2), 16);
    let g = parseInt(hex.substr(2,2), 16);
    let b = parseInt(hex.substr(4,2), 16);

    if (bitDepth != 255) {
      r = r / 255 * bitDepth;
      g = g / 255 * bitDepth;
      b = b / 255 * bitDepth;
    }

    return [r, g, b];
  }

  /**
   * Convert RGB to HEX
   *
   * @param  {int} red
   * @param  {int} green
   * @param  {int} blue
   * @param  {int} [bitDepth=255] RGB max value per channel
   * @return {string}             RRGGBB hex
   */
  static rgb2hex(red, green, blue, bitDepth = 255) {
    Util.valueRangeCheck(bitDepth, 1, false);
    Util.valueRangeCheck(red,   0, bitDepth);
    Util.valueRangeCheck(green, 0, bitDepth);
    Util.valueRangeCheck(blue,  0, bitDepth);

    if (bitDepth != 255) {
      red   = red   / bitDepth * 255;
      green = green / bitDepth * 255;
      blue  = blue  / bitDepth * 255;
    }

    let hex = ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);

    return hex;
  }

  /**
   * Convert HEX to HSV
   * Saturation and Value are in percentages
   *
   * @param  {string} hex RGB or RRGGBB
   * @return {int[]}      hue, saturation, value
   */
  static hex2hsv(hex) {
    let [r, g, b] = this.hex2rgb(hex);
    return this.rgb2hsv(r, g, b);
  }
    
  /**
   * Convert HEX to HSL
   * Saturation and Lightness are in percentages
   *
   * @param  {string} hex RGB or RRGGBB
   * @return {int[]}      hue, saturation, lightness
   */
  static hex2hsl(hex) {
    let [r, g, b] = this.hex2rgb(hex);
    return this.rgb2hsl(r, g, b);
  }
    
  /**
   * Convert HEX to HSI
   * Saturation and Intensity are in percentages
   *
   * @param  {string} hex RGB or RRGGBB
   * @return {int[]}      hue, saturation, lightness
   */
  static hex2hsi(hex) {
    let [r, g, b] = this.hex2rgb(hex);
    return this.rgb2hsi(r, g, b);
  }

  /**
   * Convert HSV to HEX
   * Saturation and Value should be in percentages
   *
   * @param  {int} hue        degrees
   * @param  {int} saturation percentage
   * @param  {int} value      percentage
   * @return {string}         RRGGBB hex
   */
  static hsv2hex(hue, saturation, value) {
    let [r, g, b] = this.hsv2rgb(hue, saturation, value);
    return this.rgb2hex(r, g, b);
  }
    
  /**
   * Convert HSL to HEX
   * Saturation and Lightness should be in percentages
   *
   * @param  {int} hue        degrees
   * @param  {int} saturation percentage
   * @param  {int} lightness  percentage
   * @return {string}         RRGGBB hex
   */
  static hsl2hex(hue, saturation, lightness) {
    let [r, g, b] = this.hsl2rgb(hue, saturation, lightness);
    return this.rgb2hex(r, g, b);
  }

  /**
   * Convert HSI to HEX
   * Saturation and Intensity should be in percentages
   *
   * @param  {int} hue        degrees
   * @param  {int} saturation percentage
   * @param  {int} intensity  percentage
   * @return {string}         RRGGBB hex
   */
  static hsi2hex(hue, saturation, intensity) {
    let [r, g, b] = this.hsi2rgb(hue, saturation, intensity);
    return this.rgb2hex(r, g, b);
  }

  /**
   * Convert a wavelength in nm to HEX
   * This is hugely perceptual and approximate
   *
   * @param  {int|float} wavelength Wavelength of light in nanometers (positive number)
   * @return {string}               RRGGBB hex
   */
  static nm2hex(wavelength) {
    let [r, g, b] = this.nm2rgb(wavelength);
    return this.rgb2hex(r, g, b);
  }

  /**
   * Convert a color temperature in Kelvin to HEX
   * Not accurate for scientific purposes
   * 
   * @param  {int|float} temperature Color temperature in degrees Kelvin; must fall between 1000 and 40000
   * @return {string}                RRGGBB hex
   */
  static kelvin2hex(temperature) {
    let [r, g, b] = this.kelvin2rgb(temperature);
    return this.rgb2hex(r, g, b);
  }
}

module.exports = Convert;