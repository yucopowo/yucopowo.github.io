import Color from './color.js';
import colors from './colors.js';
import { isNumber } from './util.js';

export default class Paint {
    static Style = {
        FILL: 1,
        FILL_AND_STROKE: 2,
        STROKE: 3,

    }
    // color = new Color();
    color = -1;
    strokeWidth = 1;
    setStyle() {

    }
    setARGB(a, r, g, b) {
        const color = new Color({
            a,r,g,b
        });
        this.color = color.parseColor();
    }
    setColor(color) {
        this.color = color;
    }
    setStrokeWidth(strokeWidth) {
        this.strokeWidth = strokeWidth;
    }
    getColor() {
        const color = new Color(this.color);
        return color.rgba();
    }
}

