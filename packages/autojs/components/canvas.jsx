import EventEmitter from 'events';
import React, {useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
// import colors from "./colors.js";
import device from "../device.js";
import UIContext from '../context.js';

class Canvas extends EventEmitter {
    constructor(canvas) {
        super();
        this.canvas = canvas;
    }
    getWidth() {
        return this.canvas.clientWidth;
    }
    getHeight() {
        return this.canvas.clientHeight;
    }
    drawPoint(x, y, paint){
        const ctx = this.canvas.getContext('2d');
        const color = paint.getColor();

        ctx.strokeStyle = color;
        ctx.fillStyle = color

        ctx.lineWidth = paint.strokeWidth;

        ctx.beginPath();
        ctx.arc(x, y, 1, 0, 2 * Math.PI, true);
        ctx.fill();


    }
    drawLine(startX, startY, stopX, stopY, paint) {

        const ctx = this.canvas.getContext('2d');

        ctx.strokeStyle = paint.getColor();
        ctx.lineWidth = paint.strokeWidth;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(stopX, stopY);
        ctx.stroke();

    }
    drawRect(left, top, right, bottom, paint){
        const ctx = this.canvas.getContext('2d');
        const color = paint.getColor();

        ctx.fillStyle = color
        ctx.strokeStyle = color;
        ctx.lineWidth = paint.strokeWidth;
        // ctx.strokeStyle = 'red';

        // ctx.beginPath();
        //   console.log("5555555555");
        // strokeRect参数：（左上角x坐标，y:左上角y坐标，绘画矩形的宽度，绘画矩形的高度）
        const x = left;
        const y = top;
        const width = right - left;
        const height = bottom - top;

        ctx.beginPath();
        ctx.fillRect(x, y, width, height);
    }
    drawCircle(cx, cy, radius, paint) {
        const ctx = this.canvas.getContext('2d');
        const color = paint.getColor();

        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.lineWidth = paint.strokeWidth;
        ctx.strokeStyle = color;
        ctx.stroke();
    }
}



const StyledCanvas = styled.canvas`
  //width: 1080px;
  //height: 2160px;
  //zoom: 4;
`;
const CanvasComponent = (props) => {

    console.log('CanvasComponent render');
    const ref = useRef();
    const { ui } = useContext(UIContext);
    useEffect(() => {
        const widget = ui[props.id];
        if(widget) {
            const canvas = new Canvas(ref.current);
            widget.emit('draw', canvas);
        }
    });

    // , [props.id]
    const onClick = () => {
        const widget = ui[props.id];
        if(widget) {
            widget.emit('click');
        }
    };

    return (
        <StyledCanvas
            className="canvas"
            width={device.width}
            height={device.height}
            id={props.id} ref={ref}
            onClick={onClick}
            {...props}
        />
    );
};
export default CanvasComponent;
