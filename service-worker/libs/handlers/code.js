import { u } from '/cdn/unist-builder.js';
import { parseAttrs } from "../plugins/util.js";

export default function code(h, node) {
    const value = node.value ? node.value + '\n' : ''
    // To do: next major, use `node.lang` w/o regex, the splitting’s been going
    // on for years in remark now.
    const _lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/);
    const lang = (_lang && _lang[0]) ? _lang[0] : 'text';

    /** @type {Properties} */
    const props = {}

    if (lang) {
        props.className = ['language-' + lang]
    }

    const data = {
        attributes: {
            lang
        }
    };

    if (node.meta) {
        const attributes = parseAttrs(node.meta);
        Object.assign(data.attributes, attributes)
    }

    props.dataType = node.type;
    props.dataProperties = JSON.stringify(data);

    const code = h(node, 'code', props, [u('text', value)])

    if (node.meta) {
        code.data = {meta: node.meta}
    }

    return h(node.position, 'pre', [code])
}


// export default function code(h, node) {
//     const value = node.value ? node.value + '\n' : ''
//     // To do: next major, use `node.lang` w/o regex, the splitting’s been going
//     // on for years in remark now.
//     const _lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/);
//     const lang = (_lang && _lang[0]) ? _lang[0] : 'text';
//
//     /** @type {Properties} */
//     const props = {}
//
//     if (lang) {
//         props.className = ['language-' + lang]
//     }
//
//     const data = {
//         attributes: {
//             lang
//         }
//     };
//
//     if (node.meta) {
//         const attributes = parseAttrs(node.meta);
//         Object.assign(data.attributes, attributes)
//     }
//
//     props.dataType = node.type;
//     props.dataProperties = JSON.stringify(data);
//
//     return h(node, 'code', props, [u('text', value)])
// }

// export default function code(h, node) {
//     const value = node.value ? node.value + '\n' : ''
//     // To do: next major, use `node.lang` w/o regex, the splitting’s been going
//     // on for years in remark now.
//     const lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/)
//     /** @type {Properties} */
//     const props = {}
//
//     if (lang) {
//         props.className = ['language-' + lang]
//     }
//
//     const code = h(node, 'code', props, [u('text', value)])
//
//     if (node.meta) {
//         code.data = {meta: node.meta}
//     }
//
//     return h(node.position, 'pre', [code])
// }
