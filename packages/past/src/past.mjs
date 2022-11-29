import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkBreaks from 'remark-breaks';
import remarkFrontmatter from 'remark-frontmatter';
// import remarkYamlExtract from 'remark-extract-frontmatter';
import YAML from 'yaml';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from './plugins/rehype-stringify.mjs';
import remarkAttr from "./plugins/remark-attr.mjs";
import remarkMdx from 'remark-mdx';
import { u } from 'unist-builder';
// import { parseAttrs } from './utils.mjs';

const DEFAULT_OPTIONS = {
    gfm: true,
    math: false,
    html: false,
    mdx: false,
    plugins: []
};

function past(markdown, options = DEFAULT_OPTIONS) {
    const o = {...DEFAULT_OPTIONS, ...options};
    const passThrough = [
        'leafDirective', 'textDirective', 'containerDirective'
    ];

    const plugins = [];

    // remark==================================
    plugins.push([remarkParse]);



    if (o.mdx) {
        plugins.push([remarkMdx, []]);
        const nodeTypes = [
            'mdxFlowExpression',
            'mdxJsxFlowElement',
            'mdxJsxTextElement',
            'mdxTextExpression',
            'mdxjsEsm'
        ];
        passThrough.push(...nodeTypes);
    }

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


    // plugins.push([() => {
    //     return (tree) => {
    //         console.log('tree1 start=============');
    //         console.log(JSON.stringify(tree, null, 2));
    //         console.log('tree1 end=============');
    //     };
    // }]);
    // remark==================================


    // rehype**********************************

    //             'leafDirective', 'textDirective', 'containerDirective'

    plugins.push([remarkRehype, {
        allowDangerousHtml: o.html,
        passThrough,
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
                ...passThrough
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
