"use strict";
// This file does not run as a part of `npm run test`
// Using this file to validate typechecking
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var main_1 = __importDefault(require("../dist/main"));
var a = main_1["default"].from('rgb', [22, 33, 44]);
var b = a.to('hsv');
var c = b.to('hsl');
// expand here to include all types
var x = function (rgb) {
    var hsv = rgb.to('hsv');
    return hsv;
};
var y = x(a);
// README.md dummy check
var color1 = main_1["default"].from('rgb', [255, 128, 0]).to('hsv');
var scheme1 = main_1["default"].from('hex', 0x9a237f)
    .modify('desaturate', { amount: 0.2 })
    .to('lab', {
    colorSpace: 'AdobeRGB',
    referenceWhite: 'D50'
})
    .scheme('gradient', {
    "with": main_1["default"].from('hsl', [300, 50, 45]),
    colors: 5
});
var yourMethod = function (rgb) {
    // do things
    var hsv = rgb.to('hsv');
    // do things
    return hsv;
};
