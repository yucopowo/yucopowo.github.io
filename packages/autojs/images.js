import Image from './image.js';
import domtoimage from 'dom-to-image';

export function requestScreenCapture() {
    return true;
}

function loadImage(img) {
    return new Promise((resolve) => {
        img.onload = () => {
            resolve();
        };
    });

}
export async function captureScreen() {

    const node = document.getElementById('screen');
    const pixels = await domtoimage.toPixelData(node);
    const img = new Image(node.scrollWidth, node.scrollHeight, pixels);
    // img.src = dataUrl;
    // await load(img);
    return img;

    // domtoimage.toPng(node)
    //     .then(function (dataUrl) {
    //
    //         document.body.appendChild(img);
    //     })
    //     .catch(function (error) {
    //         console.error('oops, something went wrong!', error);
    //     });
    //
    // const img = new Image();
    // return img;
}

export function pixel(image, x, y) {
    return image.pixel(x, y);
}

export function findColor(image, color, options) {
    return image.findColor(color, options);
}


export function findColorInRegion(img, color, x, y, width, height, threshold) {

}

const images = {
    pixel,
    findColor,
    read(path) {

    }
};

export default images;
