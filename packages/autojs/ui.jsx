import React, {useEffect, useRef, createContext, useContext, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import styled from 'styled-components';
// import device from "./device.js";
import EventEmitter from 'events';
import CanvasComponent from './components/canvas.jsx';
import UIContext from './context.js';
import Widget from './widget.js';
import Linear from './components/linear.jsx';
import Input from './components/input.jsx';
import Button from './components/button.jsx';
import Vertical from './components/vertical.jsx';
import Horizontal from './components/horizontal.jsx';
import Frame from './components/frame.jsx';




const renderNodes = (nodes) => {
    if(!nodes) return [];
    let children = nodes;
    if(!Array.isArray(nodes)){
        children = [nodes];
    }
    return children.map((node, i) => {
        return renderNode(node, String(i));
    });
};

const renderNode = (node, key) => {
    switch(node.type) {
        case 'input':
            return <Input key={key} {...node.props} />;
        case 'linear':
            return <Linear key={key} {...node.props}>{renderNodes(node.props.children)}</Linear>;
        case 'vertical':
            return <Vertical key={key} {...node.props}>{renderNodes(node.props.children)}</Vertical>;
        case 'horizontal':
            return <Horizontal key={key} {...node.props}>{renderNodes(node.props.children)}</Horizontal>;
        case 'frame':
            return <Frame key={key} {...node.props}>{renderNodes(node.props.children)}</Frame>;
        case 'canvas':
            return <CanvasComponent key={key} {...node.props} />;
        case 'button':
            return <Button key={key} {...node.props} />;
        default:
            const style = {color: 'red'};
            return <div style={style}>unknown</div>;
    }
};

class UI extends EventEmitter {
    // constructor() {
    //     this.events = new EventEmitter();
    // }
    layout(vnode) {
        const container = document.getElementById('screen');
        const root = createRoot(container);
        const App = () => {
            const value = {ui: this};
            return (
                <UIContext.Provider value={value}>
                    {renderNode(vnode)}
                </UIContext.Provider>
            );
        };

        function render() {
            root.render(React.createElement(App, {}));
        }
        render();

        this.on('redraw', () => {
            render();
        });

    }
}

const ui = new UI();

const proxy = new Proxy(ui, {
    get(target, p) {
        if(target[p]) return target[p];
        const widget = new Widget();
        target[p] = widget;
        return widget;
    }
});

export default proxy;
