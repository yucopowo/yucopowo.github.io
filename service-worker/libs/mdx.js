import {compile as _compile} from '/cdn/@mdx-js/mdx.js';
import remarkGfm from '/cdn/remark-gfm.js';
import remarkBreaks from '/cdn/remark-breaks.js';
import remarkAttr from './plugins/remark-attr.js';
import { u } from '/cdn/unist-builder.js';
import rehypeAttr from './plugins/rehype-attr.js';
import merge from '../utils/merge.js';
import {removePosition} from "/cdn/unist-util-remove-position.js"
import code from './handlers/code.js';

export function compile(file, options = {}) {

    const compileOptions = {
        remarkPlugins: [
            [remarkBreaks],
            [remarkGfm],

            [() => {return (tree) => {
                console.log('remark tree start=============');
                const _tree = JSON.parse( JSON.stringify(tree) );
                console.log(
                    JSON.stringify(removePosition(_tree, true), null, 2)
                );
                console.log('remark tree end=============');
            };}]

        ],
        rehypePlugins: [
            // [rehypeAttr],
            [() => {return (tree) => {
                console.log('rehype tree start=============');
                const _tree = JSON.parse( JSON.stringify(tree) );
                console.log(
                    JSON.stringify(removePosition(_tree, true), null, 2)
                );
                console.log('rehype tree end=============');
            };}]
        ],
        remarkRehypeOptions: {
            // passThrough: ['code']
            handlers: {
                code
            }
        }
    };

    const mergedCompileOptions = merge(compileOptions, options);

    return _compile(file, mergedCompileOptions);
}
