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

abstract class colorType {
    constructor() : colorType
    to(type:string, args: object) : colorType
    valueRangeCheck(value: number, lowerLimit: number | boolean, upperLimit: number | boolean) : void
}

interface hex extends colorType {
    hex: string
    constructor(hex: string) : hex
}

interface rgb extends colorType {
    r: number
    g: number
    b: number
    a: number
    bitDepth: number
    max: number

    constructor(r: number, g: number, b: number, a?: number, bitDepth: number) : rgb

    to(type:string, args?: {
        round?: boolean
        bitRate?: number
        bitRateOut?: number
        normalize?: boolean
        colorSpace?: string
        referenceWhite?: string
    }) : colorType
}

interface rec709rgb extends colorType {
    r: number
    g: number
    b: number
    a: number
    bitDepth: number
    max: number

    constructor(r: number, g: number, b: number, a?: number, bitDepth: number) : rec709rgb

    to(type:string, args?: {
        round?: boolean
        bitRate?: number
        bitRateOut?: number
        normalize?: boolean
        colorSpace?: string
        referenceWhite?: string
    }) : colorType
}

interface rec2020rgb extends colorType {
    r: number
    g: number
    b: number
    a: number
    bitDepth: number
    max: number

    constructor(r: number, g: number, b: number, a?: number, bitDepth: number) : rec2020rgb

    to(type:string, args?: {
        round?: boolean
        bitRate?: number
        bitRateOut?: number
        normalize?: boolean
        colorSpace?: string
        referenceWhite?: string
    }) : colorType
}

interface hsv extends colorType {
    h: number
    s: number
    v: number
    a: number
    constructor(h: number, s: number, v: number) : hsv
}

interface hsl extends colorType {
    h: number
    s: number
    l: number
    a: number
    constructor(h: number, s: number, l: number, a: number) : hsl
}

interface hsi extends colorType {
    h: number
    s: number
    i: number
    a: number
    constructor(h: number, s: number, i: number, a: number) : hsi
}

interface cmyk extends colorType {
    c: number
    m: number
    y: number
    k: number
    constructor(c: number, m: number, y: number, k:number) : cmyk
}

interface yiq extends colorType {
    y: number
    i: number
    q: number
    normalized: boolean
    constructor(y: number, i: number, q: number, normalized: boolean) : yiq
}

interface xyz extends colorType {
    x: number
    y: number
    z: number
    colorSpace: string
    referenceWhite: string
    constructor(x: number, y:number, z:number, colorSpace: string, referenceWhite: string) : xyz
}

interface xyy extends colorType {
    x: number
    y: number
    yy: number
    colorSpace: string
    referenceWhite: string
    constructor(x: number, y:number, yy:number, colorSpace: string, referenceWhite: string) : xyy
}

interface lab extends colorType {
    l: number
    a: number
    b: number
    colorSpace: string
    referenceWhite: string
    constructor(l: number, a:number, b:number, colorSpace: string, referenceWhite: string) : lab
}

interface luv extends colorType {
    l: number
    u: number
    v: number
    colorSpace: string
    referenceWhite: string
    constructor(l: number, u:number, v:number, colorSpace: string, referenceWhite: string) : luv
}

interface ypbpr extends colorType {
    y: number
    pb: number
    pr: number

    constructor(y: number, pb:number, pr:number) : ypbpr
}

interface ycbcr extends colorType {
    y: number
    cb: number
    cr: number
    constructor(y: number, cb:number, cr:number) : ycbcr
}

interface nm extends colorType {
    wavelength: number
    constructor(wavelength: number) : nm
}

interface kelvin extends colorType {
    k: number
    constructor(k: number) : kelvin
}