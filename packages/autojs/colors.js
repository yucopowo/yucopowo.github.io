import Color from './color.js';

const colors = {
    BLACK: parseColor('#FF000000'),
    RED: parseColor('#FFFF0000'),

    red(color) {
        return new Color(color).red();
    },
    parseColor,
    isSimilar,
    equals,
    toString(color) {
        const c = new Color(color);
        return c.argbHex();
    },
    argb(alpha, red, green, blue) {
        return new Color({
            a: alpha,
            r: red,
            g: green,
            b: blue
        }).parseColor();
    },
    rgb(red, green, blue) {
        return new Color({
            r: red,
            g: green,
            b: blue
        }).parseColor();
    }
};

function parseColor(colorStr) {
    return new Color(colorStr).parseColor();
}

function isSimilar(color1, color2, threshold = 4, algorithm = 'diff') {
    const c1 = new Color(color1);
    const c2 = new Color(color2);

    return c1.isSimilar(c2);
    // if(algorithm === 'rgb') {
    //     const mThreshold = threshold * threshold * 3;
    //     const dR = c1.r - c2.r;
    //     const dG = c1.g - c2.g;
    //     const dB = c1.b - c2.b;
    //     const d = dR * dR + dG * dG + dB * dB;
    //     return d <= mThreshold;
    // }
    //
    // if(algorithm === 'rgb+') {
    //     const mThreshold = threshold * threshold * 8;
    //     const color = c1.parseColor();
    //     const mR = (color & 0xff0000) >> 16;
    //     const mG = (color & 0x00ff00) >> 8;
    //     const mB = color & 0xff;
    //
    //     const dR = c2.r - mR;
    //     const dG = c2.g - mG;
    //     const dB = c2.b - mB;
    //
    //     const meanR = (mR + c2.r) / 2;
    //     const weightR = 2 + meanR / 256;
    //     const weightG = 4.0;
    //     const weightB = 2 + (255 - meanR) / 256;
    //     return weightR * dR * dR + weightG * dG * dG + weightB * dB * dB <= mThreshold;
    // }
    //
    // const mThreshold = threshold * 3;
    // const c_threshold = Math.abs(c1.r - c2.r) + Math.abs(c1.g - c2.g) + Math.abs(c1.b - c2.b);
    // return c_threshold <= mThreshold;
}

function equals(color1, color2) {
    const c1 = new Color(color1);
    const c2 = new Color(color2);
    return c1.r === c2.r && c1.g === c2.g && c1.b === c2.b;
}


export default colors;
