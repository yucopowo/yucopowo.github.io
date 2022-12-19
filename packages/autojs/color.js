import { isString, isNumber, isObject } from './util.js';
import _Color1 from 'color';


// import _Color from "https://colorjs.io/dist/color.js";

// import _Color from 'color';
// export const COLOR_BASE = -16777216;

// const alfa = 255;
// const red = 116;
// const green = 195;
// const blue = 101;
// const color = ((alfa & 0xff) << 24) | ((red & 0xff) << 16) | ((green & 0xff) << 8) | (blue & 0xff);

// function rgba(str) {
//     if(isNumber(str)) {
//         str = '#'+(Number(str - COLOR_BASE).toString(16));
//         // str = str + '0'.repeat(8 - str.length + 1);
//     } else if(str.length === 7){
//         str = '#FF' + str.slice(1);
//     }
//     let a = Number('0x'+str.length>=8?str.slice(-8, -6):'FF');
//     let r = Number('0x'+str.length>=6?str.slice(-6, -4):'00');
//     let g = Number('0x'+str.length>=4?str.slice(-4, -2):'00');
//     let b = Number('0x'+str.length>=2?str.slice(-2):'00');
//     a = isNaN(a)?1:a;
//     return {
//         r,
//         g,
//         b,
//         a
//     }
// }


function _hex(n) {
    const s = Number(n).toString(16);
    if(s.length === 2) return s;
    return '0'+s;
}


export default class Color {
    a = 255;
    r = 0;
    g = 0;
    b = 0;

    constructor(color) {
        if(Color.isColor(color)) {
            Object.assign(this, {
                a: color.a,
                r: color.r,
                g: color.g,
                b: color.b,
            });
        }
        else if(isObject(color)) {
            Object.assign(this, color);
        } else if(isNumber(color)) {
            const a = (color >> 24) & 0xFF;
            const r = (color >> 16) & 0xFF;
            const g = (color >> 8) & 0xFF;
            const b = (color) & 0xFF;
            this.a = a;
            this.r = r;
            this.g = g;
            this.b = b;
        } else {
            const c = parse(color);
            Object.assign(this, c);
        }
    }
    static isColor(c) {
        return c instanceof Color;
    }
    _color1() {
        // return new _Color(`rgb(61 88 114 / 50%)`);
        return _Color1.rgb(this.r,this.g,this.b).alpha(this.a/255);
    }
    hex() {
        // const color = _Color1({a: this.a,r: this.r,g: this.g,b: this.b});
        return this._color1().hex();
    }
    red() {
        // return this._color().red();
        return this.r;
    }
    parseColor() {
        const {a, r, g, b } = this;
        return ((a & 0xff) << 24) | ((r & 0xff) << 16) | ((g & 0xff) << 8) | (b & 0xff);
    }
    rgba() {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a/255})`;
    }
    argbHex() {
        return '#' + _hex(this.a) + _hex(this.r) + _hex(this.g) + _hex(this.b);
    }
    isSimilar(color, threshold = 4, algorithm = 'diff') {
        const c1 = this;
        const c2 = new Color(color);

        if(algorithm === 'rgb') {
            const mThreshold = threshold * threshold * 3;
            const dR = c1.r - c2.r;
            const dG = c1.g - c2.g;
            const dB = c1.b - c2.b;
            const d = dR * dR + dG * dG + dB * dB;
            return d <= mThreshold;
        }

        if(algorithm === 'rgb+') {
            const mThreshold = threshold * threshold * 8;
            const color = c1.parseColor();
            const mR = (color & 0xff0000) >> 16;
            const mG = (color & 0x00ff00) >> 8;
            const mB = color & 0xff;

            const dR = c2.r - mR;
            const dG = c2.g - mG;
            const dB = c2.b - mB;

            const meanR = (mR + c2.r) / 2;
            const weightR = 2 + meanR / 256;
            const weightG = 4.0;
            const weightB = 2 + (255 - meanR) / 256;
            return weightR * dR * dR + weightG * dG * dG + weightB * dB * dB <= mThreshold;
        }

        const mThreshold = threshold * 3;
        const c_threshold = Math.abs(c1.r - c2.r) + Math.abs(c1.g - c2.g) + Math.abs(c1.b - c2.b);
        return c_threshold <= mThreshold;
    }
}


function parse(color) {
    const colors = {
        aliceblue: [240, 248, 255]
        , antiquewhite: [250, 235, 215]
        , aqua: [0, 255, 255]
        , aquamarine: [127, 255, 212]
        , azure: [240, 255, 255]
        , beige: [245, 245, 220]
        , bisque: [255, 228, 196]
        , black: [0, 0, 0]
        , blanchedalmond: [255, 235, 205]
        , blue: [0, 0, 255]
        , blueviolet: [138, 43, 226]
        , brown: [165, 42, 42]
        , burlywood: [222, 184, 135]
        , cadetblue: [95, 158, 160]
        , chartreuse: [127, 255, 0]
        , chocolate: [210, 105, 30]
        , coral: [255, 127, 80]
        , cornflowerblue: [100, 149, 237]
        , cornsilk: [255, 248, 220]
        , crimson: [220, 20, 60]
        , cyan: [0, 255, 255]
        , darkblue: [0, 0, 139]
        , darkcyan: [0, 139, 139]
        , darkgoldenrod: [184, 132, 11]
        , darkgray: [169, 169, 169]
        , darkgreen: [0, 100, 0]
        , darkgrey: [169, 169, 169]
        , darkkhaki: [189, 183, 107]
        , darkmagenta: [139, 0, 139]
        , darkolivegreen: [85, 107, 47]
        , darkorange: [255, 140, 0]
        , darkorchid: [153, 50, 204]
        , darkred: [139, 0, 0]
        , darksalmon: [233, 150, 122]
        , darkseagreen: [143, 188, 143]
        , darkslateblue: [72, 61, 139]
        , darkslategray: [47, 79, 79]
        , darkslategrey: [47, 79, 79]
        , darkturquoise: [0, 206, 209]
        , darkviolet: [148, 0, 211]
        , deeppink: [255, 20, 147]
        , deepskyblue: [0, 191, 255]
        , dimgray: [105, 105, 105]
        , dimgrey: [105, 105, 105]
        , dodgerblue: [30, 144, 255]
        , firebrick: [178, 34, 34]
        , floralwhite: [255, 255, 240]
        , forestgreen: [34, 139, 34]
        , fuchsia: [255, 0, 255]
        , gainsboro: [220, 220, 220]
        , ghostwhite: [248, 248, 255]
        , gold: [255, 215, 0]
        , goldenrod: [218, 165, 32]
        , gray: [128, 128, 128]
        , green: [0, 128, 0]
        , greenyellow: [173, 255, 47]
        , grey: [128, 128, 128]
        , honeydew: [240, 255, 240]
        , hotpink: [255, 105, 180]
        , indianred: [205, 92, 92]
        , indigo: [75, 0, 130]
        , ivory: [255, 255, 240]
        , khaki: [240, 230, 140]
        , lavender: [230, 230, 250]
        , lavenderblush: [255, 240, 245]
        , lawngreen: [124, 252, 0]
        , lemonchiffon: [255, 250, 205]
        , lightblue: [173, 216, 230]
        , lightcoral: [240, 128, 128]
        , lightcyan: [224, 255, 255]
        , lightgoldenrodyellow: [250, 250, 210]
        , lightgray: [211, 211, 211]
        , lightgreen: [144, 238, 144]
        , lightgrey: [211, 211, 211]
        , lightpink: [255, 182, 193]
        , lightsalmon: [255, 160, 122]
        , lightseagreen: [32, 178, 170]
        , lightskyblue: [135, 206, 250]
        , lightslategray: [119, 136, 153]
        , lightslategrey: [119, 136, 153]
        , lightsteelblue: [176, 196, 222]
        , lightyellow: [255, 255, 224]
        , lime: [0, 255, 0]
        , limegreen: [50, 205, 50]
        , linen: [250, 240, 230]
        , magenta: [255, 0, 255]
        , maroon: [128, 0, 0]
        , mediumaquamarine: [102, 205, 170]
        , mediumblue: [0, 0, 205]
        , mediumorchid: [186, 85, 211]
        , mediumpurple: [147, 112, 219]
        , mediumseagreen: [60, 179, 113]
        , mediumslateblue: [123, 104, 238]
        , mediumspringgreen: [0, 250, 154]
        , mediumturquoise: [72, 209, 204]
        , mediumvioletred: [199, 21, 133]
        , midnightblue: [25, 25, 112]
        , mintcream: [245, 255, 250]
        , mistyrose: [255, 228, 225]
        , moccasin: [255, 228, 181]
        , navajowhite: [255, 222, 173]
        , navy: [0, 0, 128]
        , oldlace: [253, 245, 230]
        , olive: [128, 128, 0]
        , olivedrab: [107, 142, 35]
        , orange: [255, 165, 0]
        , orangered: [255, 69, 0]
        , orchid: [218, 112, 214]
        , palegoldenrod: [238, 232, 170]
        , palegreen: [152, 251, 152]
        , paleturquoise: [175, 238, 238]
        , palevioletred: [219, 112, 147]
        , papayawhip: [255, 239, 213]
        , peachpuff: [255, 218, 185]
        , peru: [205, 133, 63]
        , pink: [255, 192, 203]
        , plum: [221, 160, 203]
        , powderblue: [176, 224, 230]
        , purple: [128, 0, 128]
        , rebeccapurple: [102, 51, 153]
        , red: [255, 0, 0]
        , rosybrown: [188, 143, 143]
        , royalblue: [65, 105, 225]
        , saddlebrown: [139, 69, 19]
        , salmon: [250, 128, 114]
        , sandybrown: [244, 164, 96]
        , seagreen: [46, 139, 87]
        , seashell: [255, 245, 238]
        , sienna: [160, 82, 45]
        , silver: [192, 192, 192]
        , skyblue: [135, 206, 235]
        , slateblue: [106, 90, 205]
        , slategray: [119, 128, 144]
        , slategrey: [119, 128, 144]
        , snow: [255, 255, 250]
        , springgreen: [0, 255, 127]
        , steelblue: [70, 130, 180]
        , tan: [210, 180, 140]
        , teal: [0, 128, 128]
        , thistle: [216, 191, 216]
        , tomato: [255, 99, 71]
        , turquoise: [64, 224, 208]
        , violet: [238, 130, 238]
        , wheat: [245, 222, 179]
        , white: [255, 255, 255]
        , whitesmoke: [245, 245, 245]
        , yellow: [255, 255, 0]
        , yellowgreen: [154, 205, 5]
    };

    function _parse(str) {
        return named(str)
            || hex3(str)
            || hex6(str)
            || hex8(str)
            || rgb(str)
            || rgba(str);
    }

    /**
     * Parse named css color `str`.
     *
     * @param {String} str
     * @return {Object}
     * @api private
     */

    function named(str) {
        var c = colors[str.toLowerCase()];
        if (!c) return;
        return {
            r: c[0],
            g: c[1],
            b: c[2],
            a: 1
        }
    }

    /**
     * Parse rgb(n, n, n)
     *
     * @param {String} str
     * @return {Object}
     * @api private
     */

    function rgb(str) {
        if (0 == str.indexOf('rgb(')) {
            str = str.match(/rgb\(([^)]+)\)/)[1];
            var parts = str.split(/ *, */).map(Number);
            return {
                r: parts[0],
                g: parts[1],
                b: parts[2],
                a: 1
            }
        }
    }

    /**
     * Parse rgba(n, n, n, n)
     *
     * @param {String} str
     * @return {Object}
     * @api private
     */

    function rgba(str) {
        if (0 == str.indexOf('rgba(')) {
            str = str.match(/rgba\(([^)]+)\)/)[1];
            var parts = str.split(/ *, */).map(Number);
            return {
                r: parts[0],
                g: parts[1],
                b: parts[2],
                a: parts[3]
            }
        }
    }

    /**
     * Parse #aarrggbb
     *
     * @param {String} str
     * @return {Object}
     * @api private
     */

    function hex8(str) {
        if ('#' == str[0] && 9 == str.length) {
            return {
                a: parseInt(str.slice(1, 3), 16),
                r: parseInt(str.slice(3, 5), 16),
                g: parseInt(str.slice(5, 7), 16),
                b: parseInt(str.slice(7, 9), 16),
            }
        }
    }

    /**
     * Parse #nnnnnn
     *
     * @param {String} str
     * @return {Object}
     * @api private
     */

    function hex6(str) {
        if ('#' == str[0] && 7 == str.length) {
            return {
                r: parseInt(str.slice(1, 3), 16),
                g: parseInt(str.slice(3, 5), 16),
                b: parseInt(str.slice(5, 7), 16),
                a: 255
            }
        }
    }

    /**
     * Parse #nnn
     *
     * @param {String} str
     * @return {Object}
     * @api private
     */

    function hex3(str) {
        if ('#' == str[0] && 4 == str.length) {
            return {
                r: parseInt(str[1] + str[1], 16),
                g: parseInt(str[2] + str[2], 16),
                b: parseInt(str[3] + str[3], 16),
                a: 255
            }
        }
    }

    return _parse(color);
}
