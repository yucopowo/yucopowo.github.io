import React, {createElement, useState, useEffect, memo, useRef} from 'react';
import codeRenderer from "./renderers/code-renderer.jsx";
import { parseStyle } from "../../utils/css.js";
import './index.less';

const h = React.createElement;


const unknownRenderer = (node, key) => {
    const style = {color: 'red'};
    return <span key={key} style={style}>unknown</span>;
};

function elementRenderer(node, key) {
    const props = {
        key
    };
    if(node.properties) {
        Object.assign(props, node.properties);
        if(node.properties.style) {
            props.style = parseStyle(node.properties.style);
        }
    }
    return h(node.tagName, props, nodesRenderer(node.children))
}

function leafDirectiveRenderer(node, key) {
    const attributes = node.attributes;
    const style = {
        width: '100%',
        maxHeight: 1000,
    };
    if(attributes.height) {
        style.height = attributes.height + 'px';
    }
    return (
        <iframe src={attributes.url} frameBorder={0} style={style} key={key} />
    );
}

function nodeRenderer(node, key) {

    switch (node.type) {
        case 'element': {
            return elementRenderer(node, key);
        }
        case 'text': {
            return node.value;
        }
        case 'code': {
            return codeRenderer(node, key);
        }
        case 'leafDirective': {
            return leafDirectiveRenderer(node, key);
        }
        default: {
            return unknownRenderer(node, key);
        }
    }

}

function nodesRenderer(nodes) {
    if(!nodes || nodes.length===0) return null;
    return nodes.map((node, i) => nodeRenderer(node, String(i+1)));
}

function rootRenderer(root) {
    return (
        <div className="markdown-body">
            {nodesRenderer(root.children)}
        </div>
    );
}

const PastRender = (props) => {
    const { past } = props;

    return (
        <div className="past-render">
            {rootRenderer(past)}
        </div>
    );
};

export default PastRender;
