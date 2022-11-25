import { visit } from 'unist-util-visit';
import { parseAttrs } from "../utils.mjs";

export default function () {
    return function transformer(tree, file) {
        // console.log('tree=====1');
        // console.log(tree);
        visit(tree, 'code', (node, index, parent) => {

            // console.log(node);
            const meta = node.meta;
            // const attrs = parseAttrs(meta);
            // console.log(attrs);
            // node.attrs = attrs;
            node.attributes = parseAttrs(meta);

        });
        // console.log('tree=====2');
    }
}
