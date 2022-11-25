import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkBreaks from 'remark-breaks';
import remarkFrontmatter from 'remark-frontmatter';
import remarkYamlExtract from 'remark-extract-frontmatter';
import YAML from 'yaml';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from './plugins/rehype-stringify.mjs';
import remarkAttr from "./plugins/remark-attr.mjs";
import {u} from 'unist-builder';
import { parseAttrs } from './utils.mjs';

const DEFAULT_OPTIONS = {
    gfm: true,
    math: false,
    html: false,
    plugins: []
};

function past(markdown, options = DEFAULT_OPTIONS) {
    const o = {...DEFAULT_OPTIONS, ...options};

    const plugins = [];

    // remark==================================
    plugins.push([remarkParse]);

    // plugins.push([() => {
    //     return (tree) => {
    //         console.log('tree1 start=============');
    //         console.log(JSON.stringify(tree, null, 2));
    //         console.log('tree1 end=============');
    //     };
    // }]);

    plugins.push([remarkFrontmatter, ['yaml']]);
    plugins.push([remarkBreaks]);
    plugins.push([remarkAttr]);
    if(o.gfm) {
        plugins.push([remarkGfm]);
    }

    if(o.math) {
        plugins.push([remarkMath]);
    }

    plugins.push([remarkDirective]);
    // plugins.push([remarkYamlExtract, { yaml: yamlParse }]);

    if(o.plugins && o.plugins.length > 0) {
        plugins.push(o.plugins);
    }



    // remark==================================


    // rehype**********************************

    //             'leafDirective', 'textDirective', 'containerDirective'
    plugins.push([remarkRehype, {
        allowDangerousHtml: o.html,
        passThrough: [
            'leafDirective', 'textDirective', 'containerDirective'
        ],
        // unknownHandler(h, node) {
        //     console.log('node============================================================');
        //     console.log(node);
        //     return h(node.position, 'unknown');
        // },
        handlers: {
            yaml(h, node) {
                // return h.augment(node.position, 'pre');
                // return h(node, 'yaml', [node.value]);
                const value = YAML.parse(node.value);
                return u('yaml', {...node, value});
            },
            code(h, node) {
                return u('code', {...node});
            },
            // leafDirective(h, node) {
            //     return u('leafDirective', {...node});
            // },
            // textDirective(h, node) {
            //     return u('textDirective', {...node});
            // },
            // containerDirective(h, node) {
            //     return u('containerDirective', {...node});
            // }
            // code(h, node) {
            //     const value = node.value ? node.value + '\n' : '';
            //     const lang = node.lang;
            //     const props = {};
            //     props.lang = lang;
            //     props.attributes = parseAttrs(node.meta);
            //
            //
            //     const code = h(node.position, 'code');
            //     // code.type = 'code';
            //     code.value = value;
            //     code.props = props;
            //     return code;
            //     // const value = node.value ? node.value + '\n' : ''
            //     // // To do: next major, use `node.lang` w/o regex, the splitting’s been going
            //     // // on for years in remark now.
            //     // const lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/)
            //     /** @type {Properties} */
            //     // const props = {
            //     //     lang,
            //     //     meta: node.meta
            //     // };
            //     //
            //     // if (lang) {
            //     //     props.className = ['language-' + lang]
            //     // }
            //     //
            //     // const code = h(node, 'code', props, [u('text', value)])
            //     //
            //     // if (node.meta) {
            //     //     code.data = {meta: node.meta}
            //     // }
            //     //
            //     // return h(node.position, 'pre', [code])
            // }
        }
    }]);

    // plugins.push([() => {
    //     return (tree) => {
    //         console.log('tree2 start=============');
    //         console.log(JSON.stringify(tree, null, 2));
    //         console.log('tree2 end=============');
    //     };
    // }]);

    if(o.html) {
        plugins.push([rehypeRaw, {
            passThrough: [
                'code',
                'leafDirective', 'textDirective', 'containerDirective'
            ]
        }]);
    }
    plugins.push([rehypeStringify]);
    // rehype**********************************

    const file = unified()
        .use(plugins)
        .processSync(markdown)

    return file.result;
}

export default past;
