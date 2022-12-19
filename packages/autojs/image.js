import Color from './color.js';
import Point from "./point.js";

export default class Image {

    constructor(width, height, pixels) {
        this.width = width;
        this.height = height;
        this.pixels = pixels;
    }
    pixelColor(x, y) {
        const width = this.width;
        const pixelAtXYOffset = (4 * y * width) + (4 * x);

        const [r,g,b,a] = [
            this.pixels[pixelAtXYOffset],
            this.pixels[pixelAtXYOffset+1],
            this.pixels[pixelAtXYOffset+2],
            this.pixels[pixelAtXYOffset+3]
        ];

        return new Color({a,r,g,b});

    }
    pixel(x, y) {
        // console.log(this.pixels);
        // const width = this.width;
        // const height = this.height;
        //
        // // const p = 4 * x + 4 * height * y;
        // const pixelAtXYOffset = (4 * y * width) + (4 * x);
        // const [r,g,b,a] = this.pixels.slice(pixelAtXYOffset, pixelAtXYOffset + 4);
        //
        // // console.log(r,g,b,a);
        // // const r = this.pixels[p];
        // // const g = this.pixels[p+1];
        // // const b = this.pixels[p+2];
        // // const a = this.pixels[p+3];
        // const color = new Color({a,r,g,b});
        // return color.parseColor();
        return this.pixelColor(x, y).parseColor();
    }
    findColor(color, options) {
        const width = this.width;
        const height = this.height;
        const region = [0, 0, width-1, height-1];

        if(options.region ) {
            if(options.region.length === 2) {
                region[0] = options.region[0];
                region[1] = options.region[1];
            }
            else if(options.region.length === 4) {
                region[0] = options.region[0];
                region[1] = options.region[1];
                region[2] = options.region[0] + options.region[2];
                region[3] = options.region[1] + options.region[3];
            }
        }

        for (let y=region[1];y<=region[3];y++) {
            for (let x=region[0];x<=region[2];x++) {
                const c = this.pixelColor(x, y);
                if(c.isSimilar(color)) {
                    return new Point(x, y);
                }
            }
        }

        return null;
    }

}


// function getPixel(url, x, y) {
//     var img = new Image();
//     img.src = url;
//     var canvas = document.createElement('canvas');
//     var context = canvas.getContext('2d');
//     context.drawImage(img, 0, 0);
//     return context.getImageData(x, y, 1, 1).data;
// }
//
//
// getPixel('./bg.png', 10, 10); // [255, 255, 255, 0];
