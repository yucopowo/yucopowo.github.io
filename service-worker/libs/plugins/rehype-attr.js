import { visitChildren } from '/cdn/unist-util-visit-children.js';

import { parseAttrs } from "./util.js";

export default function () {
    // {
    //     // tagName: "code",
    //     tagName: "pre",
    //         type: "element"
    // }
    return function transformer(tree, file) {
        const nodes = visitChildren(tree, (node) => {
            // if(node.tagName)
            // console.log('node====================', index);
            // console.log(node);

            const dataAttrs = {};
            if(node.data && node.data.meta) {
                const meta = node.data.meta;
                const attrs = parseAttrs(meta)
                Object.assign(dataAttrs, attrs);
            }

            if(node.properties.className) {
                const className = node.properties.className;
                const match = /language-(\w+)/.exec(className || '')
                dataAttrs.lang = match[1];
            }

            if(Object.keys(dataAttrs).length>0) {
                node.properties.dataAttrs = JSON.stringify(dataAttrs);
            }

        });
        // console.log('nodes====================', nodes);

        nodes.forEach();


    }
}
