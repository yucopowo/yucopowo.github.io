import Babel from '/cdn/babel-standalone.js';
import { isRelative } from "../util.js";

function reactDemoBabelPlugin() {
    return {
        visitor: {
            // ImportDeclaration(path){
            //     const { node } = path;
            //     const value = node.source.value;
            //     // if(value === 'antd') {
            //     //     node.source.value = `/public/assets/libs/antd/antd.min.js`;
            //     // } else if(isRelative(value)) {
            //     //     // node.source.value = `https://esm.sh/${value}`;
            //     //     node.source.value = `https://esm.run/${value}`;
            //     // }
            //     if(isRelative(value)) {
            //         node.source.value = `https://esm.run/${value}`;
            //     }
            // },
            ExportDefaultDeclaration(path){
                const { node, parent } = path;

                if(!parent) {
                    return;
                }

                const index = parent.body.findIndex((x)=>x.type==="ExportDefaultDeclaration");

                if(index===-1) return;

                const name = node.declaration.name;

                // const ast = {
                //     "type": "AssignmentExpression",
                //     "operator": "=",
                //     "left": {
                //         "type": "MemberExpression",
                //         "object": {
                //             "type": "Identifier",
                //             "name": "window"
                //         },
                //         "property": {
                //             "type": "Identifier",
                //             "name": "__MODULE__"
                //         }
                //     },
                //     "right": {
                //         "type": "Identifier",
                //         "name": name
                //     }
                // };
                const ast = {
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "Identifier",
                            "name": "render"
                        },
                        "arguments": [
                            {
                                "type": "Identifier",
                                "name": name
                            }
                        ]
                    }
                }
                // parent.body.push(ast);
                parent.body[index] = ast;
            },
        }
    }
}

Babel.registerPreset("react-demo", {
    presets: [
        Babel.availablePresets["react"]
    ],
    plugins: [
        [
            reactDemoBabelPlugin, { env: 'dev' },
        ],
    ],
});

export default Babel;

// function reactDemoBabelPlugin() {
//     return {
//         visitor: {
//             ImportDeclaration(path){
//                 const { node } = path;
//                 const value = node.source.value;
//                 if(value === 'antd') {
//                     node.source.value = `/public/assets/libs/antd/antd.min.js`;
//                 } else if(isRelative(value)) {
//                     node.source.value = `https://esm.sh/${value}`;
//                 }
//             },
//             ExportDefaultDeclaration(path){
//                 const { node, parent } = path;
//
//                 if(!parent) {
//                     return;
//                 }
//
//                 const index = parent.body.findIndex((x)=>x.type==="ExportDefaultDeclaration");
//
//                 if(index===-1) return;
//
//                 const name = node.declaration.name;
//
//                 const ast = {
//                     "type": "AssignmentExpression",
//                     "operator": "=",
//                     "left": {
//                         "type": "MemberExpression",
//                         "object": {
//                             "type": "Identifier",
//                             "name": "window"
//                         },
//                         "property": {
//                             "type": "Identifier",
//                             "name": "__MODULE__"
//                         }
//                     },
//                     "right": {
//                         "type": "Identifier",
//                         "name": name
//                     }
//                 };
//                 // parent.body.push(ast);
//                 parent.body[index] = ast;
//             },
//         }
//     }
// }
//
// export function transformReactDemo(source) {
//
//     const { code } = Babel.transform(source, {
//         presets: ['react'],
//         plugins: [
//             [reactDemoBabelPlugin, {env: 'dev'}]
//         ],
//     });
//
//     return code;
// }
