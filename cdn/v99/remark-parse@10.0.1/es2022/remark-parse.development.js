/* esm.sh - esbuild bundle(remark-parse@10.0.1) es2022 development */ // esm-build-31ee3be8f97159e76c3b6ef69baef79115d6b913-5ef8a76a/node_modules/remark-parse/lib/index.js
import{fromMarkdown}from"/cdn/v99/mdast-util-from-markdown@1.2.0/es2022/mdast-util-from-markdown.development.js";function remarkParse(options){const parser=doc=>{const settings=this.data("settings");return fromMarkdown(doc,Object.assign({},settings,options,{extensions:this.data("micromarkExtensions")||[],mdastExtensions:this.data("fromMarkdownExtensions")||[]}))};Object.assign(this,{Parser:parser})}// esm-build-31ee3be8f97159e76c3b6ef69baef79115d6b913-5ef8a76a/node_modules/remark-parse/index.js
var remark_parse_default=remarkParse;export{remark_parse_default as default};