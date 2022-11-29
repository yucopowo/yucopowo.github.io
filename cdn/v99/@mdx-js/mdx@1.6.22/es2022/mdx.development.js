/* esm.sh - esbuild bundle(@mdx-js/mdx@1.6.22) es2022 development */
import __babel_plugin_extract_import_names$ from '/cdn/v99/babel-plugin-extract-import-names@1.6.22/es2022/babel-plugin-extract-import-names.development.js';
import __style_to_object$ from '/cdn/v99/style-to-object@0.3.0/es2022/style-to-object.development.js';
import __detab$ from '/cdn/v99/detab@2.0.4/es2022/detab.development.js';
import ___mdx_js_util$ from '/cdn/v99/@mdx-js/util@1.6.22/es2022/util.development.js';
import __unist_util_visit$ from '/cdn/v99/unist-util-visit@2.0.3/es2022/unist-util-visit.development.js';
import __remark_parse$ from '/cdn/v99/remark-parse@8.0.3/es2022/remark-parse.development.js';
import __unified$ from '/cdn/v99/unified@9.2.0/es2022/unified.development.js';
import * as ___babel_plugin_syntax_object_rest_spread$ from '/cdn/v99/@babel/plugin-syntax-object-rest-spread@7.8.3/es2022/plugin-syntax-object-rest-spread.development.js';
import * as ___babel_plugin_syntax_jsx$ from '/cdn/v99/@babel/plugin-syntax-jsx@7.12.1/es2022/plugin-syntax-jsx.development.js';
import __camelcase_css$ from '/cdn/v99/camelcase-css@2.0.1/es2022/camelcase-css.development.js';
import ___babel_core$ from '/cdn/v99/@babel/core@7.12.9/es2022/core.development.js';
import __mdast_util_to_hast$ from '/cdn/v99/mdast-util-to-hast@10.0.1/es2022/mdast-util-to-hast.development.js';
import __remark_squeeze_paragraphs$ from '/cdn/v99/remark-squeeze-paragraphs@4.0.0/es2022/remark-squeeze-paragraphs.development.js';
import __remark_mdx$ from '/cdn/v99/remark-mdx@1.6.22/es2022/remark-mdx.development.js';
import __unist_builder$ from '/cdn/v99/unist-builder@2.0.3/es2022/unist-builder.development.js';
import __hast_util_raw$ from '/cdn/v99/hast-util-raw@6.0.1/es2022/hast-util-raw.development.js';
import __babel_plugin_apply_mdx_type_prop$ from '/cdn/v99/babel-plugin-apply-mdx-type-prop@1.6.22/es2022/babel-plugin-apply-mdx-type-prop.development.js';
import __lodash_uniq$ from '/cdn/v99/lodash.uniq@4.5.0/es2022/lodash.uniq.development.js';
import __remark_footnotes$ from '/cdn/v99/remark-footnotes@2.0.0/es2022/remark-footnotes.development.js';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ (x =>
  typeof require !== 'undefined'
    ? require
    : typeof Proxy !== 'undefined'
    ? new Proxy(x, {
        get: (a, b) => (typeof require !== 'undefined' ? require : a)[b]
      })
    : x)(function(x) {
  if (typeof require !== 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) =>
  function __require2() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])(
          (mod = {
            exports: {}
          }).exports,
          mod
        ),
      mod.exports
    );
  };
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', {
          value: mod,
          enumerable: true
        })
      : target,
    mod
  )
);

// esm-build-2e138e2816eb63f23490d13a79e45fa01c3dadfb-3e970151/node_modules/@mdx-js/mdx/md-ast-to-mdx-ast.js
var require_md_ast_to_mdx_ast = __commonJS({
  'esm-build-2e138e2816eb63f23490d13a79e45fa01c3dadfb-3e970151/node_modules/@mdx-js/mdx/md-ast-to-mdx-ast.js'(
    exports,
    module
  ) {
    var visit = __unist_util_visit$;
    var { isComment, getCommentContents } = ___mdx_js_util$;
    module.exports = _options => tree => {
      visit(tree, 'jsx', node => {
        if (isComment(node.value)) {
          node.type = 'comment';
          node.value = getCommentContents(node.value);
        }
      });
      return tree;
    };
  }
});

// esm-build-2e138e2816eb63f23490d13a79e45fa01c3dadfb-3e970151/node_modules/@mdx-js/mdx/mdx-ast-to-mdx-hast.js
var require_mdx_ast_to_mdx_hast = __commonJS({
  'esm-build-2e138e2816eb63f23490d13a79e45fa01c3dadfb-3e970151/node_modules/@mdx-js/mdx/mdx-ast-to-mdx-hast.js'(
    exports,
    module
  ) {
    var toHAST = __mdast_util_to_hast$;
    var detab = __detab$;
    var u = __unist_builder$;
    function mdxAstToMdxHast() {
      return (tree, _file) => {
        const handlers = {
          inlineCode(h, node) {
            return Object.assign({}, node, {
              type: 'element',
              tagName: 'inlineCode',
              properties: {},
              children: [
                {
                  type: 'text',
                  value: node.value
                }
              ]
            });
          },
          code(h, node) {
            const value = node.value ? detab(node.value + '\n') : '';
            const lang = node.lang;
            const props = {};
            if (lang) {
              props.className = ['language-' + lang];
            }
            props.metastring = node.meta || void 0;
            const meta =
              node.meta &&
              node.meta.split(' ').reduce((acc, cur) => {
                if (cur.split('=').length > 1) {
                  const t = cur.split('=');
                  acc[t[0]] = t[1];
                  return acc;
                }
                acc[cur] = true;
                return acc;
              }, {});
            if (meta) {
              Object.keys(meta).forEach(key => {
                const isClassKey = key === 'class' || key === 'className';
                if (props.className && isClassKey) {
                  props.className.push(meta[key]);
                } else {
                  props[key] = meta[key];
                }
              });
            }
            return h(node.position, 'pre', [h(node, 'code', props, [u('text', value)])]);
          },
          import(h, node) {
            return Object.assign({}, node, {
              type: 'import'
            });
          },
          export(h, node) {
            return Object.assign({}, node, {
              type: 'export'
            });
          },
          comment(h, node) {
            return Object.assign({}, node, {
              type: 'comment'
            });
          },
          jsx(h, node) {
            return Object.assign({}, node, {
              type: 'jsx'
            });
          }
        };
        const hast = toHAST(tree, {
          handlers,
          allowDangerousHtml: true
        });
        return hast;
      };
    }
    module.exports = mdxAstToMdxHast;
  }
});

// esm-build-2e138e2816eb63f23490d13a79e45fa01c3dadfb-3e970151/node_modules/@mdx-js/mdx/mdx-hast-to-jsx.js
var require_mdx_hast_to_jsx = __commonJS({
  'esm-build-2e138e2816eb63f23490d13a79e45fa01c3dadfb-3e970151/node_modules/@mdx-js/mdx/mdx-hast-to-jsx.js'(
    exports,
    module
  ) {
    var { transformSync } = ___babel_core$;
    var styleToObject = __style_to_object$;
    var camelCaseCSS = __camelcase_css$;
    var uniq = __lodash_uniq$;
    var { paramCase, toTemplateLiteral } = ___mdx_js_util$;
    var BabelPluginApplyMdxProp = __babel_plugin_apply_mdx_type_prop$;
    var BabelPluginExtractImportNames = __babel_plugin_extract_import_names$;
    var spaceSeparatedProperties = [
      'acceptCharset',
      'accessKey',
      'autoComplete',
      'className',
      'controlsList',
      'headers',
      'htmlFor',
      'httpEquiv',
      'itemProp',
      'itemRef',
      'itemType',
      'ping',
      'rel',
      'sandbox'
    ];
    function toJSX(node, parentNode = {}, options = {}) {
      const { skipExport = false, preserveNewlines = false, wrapExport } = options;
      let children = '';
      if (node.properties != null) {
        if (typeof node.properties.style === 'string') {
          let styleObject = {};
          styleToObject(node.properties.style, function(name, value) {
            styleObject[camelCaseCSS(name)] = value;
          });
          node.properties.style = styleObject;
        }
        if (node.properties.class) {
          node.properties.className = node.properties.class;
          delete node.properties.class;
        }
        const paramCaseRe = /^(aria[A-Z])|(data[A-Z])/;
        node.properties = Object.entries(node.properties).reduce(
          (properties, [key, value]) =>
            Object.assign({}, properties, {
              [paramCaseRe.test(key) ? paramCase(key) : key]: value
            }),
          {}
        );
      }
      if (node.type === 'root') {
        const importNodes = [];
        const exportNodes = [];
        const jsxNodes = [];
        let layout;
        for (const childNode of node.children) {
          if (childNode.type === 'import') {
            importNodes.push(childNode);
            continue;
          }
          if (childNode.type === 'export') {
            if (childNode.default) {
              layout = childNode.value.replace(/^export\s+default\s+/, '').replace(/;\s*$/, '');
              continue;
            }
            exportNodes.push(childNode);
            continue;
          }
          jsxNodes.push(childNode);
        }
        const exportNames = exportNodes
          .map(node2 => node2.value.match(/^export\s*(var|const|let|class|function)?\s*(\w+)/))
          .map(match => (Array.isArray(match) ? match[2] : null))
          .filter(Boolean);
        const importStatements = importNodes.map(childNode => toJSX(childNode, node)).join('\n');
        const exportStatements = exportNodes.map(childNode => toJSX(childNode, node)).join('\n');
        const layoutProps = `const layoutProps = {
  ${exportNames.join(',\n')}
};`;
        const mdxLayout = `const MDXLayout = ${layout ? layout : '"wrapper"'}`;
        const fn = `function MDXContent({ components, ...props }) {
  return (
    <MDXLayout
      {...layoutProps}
      {...props}
      components={components}>
${jsxNodes.map(childNode => toJSX(childNode, node)).join('')}
    </MDXLayout>
  )
};
MDXContent.isMDXComponent = true`;
        const babelPluginExtractImportNamesInstance = new BabelPluginExtractImportNames();
        const filename = options.file && options.file.path;
        transformSync(importStatements, {
          filename,
          configFile: false,
          babelrc: false,
          plugins: [
            ___babel_plugin_syntax_jsx$,
            ___babel_plugin_syntax_object_rest_spread$,
            babelPluginExtractImportNamesInstance.plugin
          ]
        });
        const importNames = babelPluginExtractImportNamesInstance.state.names;
        const babelPluginApplyMdxPropInstance = new BabelPluginApplyMdxProp();
        const babelPluginApplyMdxPropToExportsInstance = new BabelPluginApplyMdxProp();
        const fnPostMdxTypeProp = transformSync(fn, {
          filename,
          configFile: false,
          babelrc: false,
          plugins: [
            ___babel_plugin_syntax_jsx$,
            ___babel_plugin_syntax_object_rest_spread$,
            babelPluginApplyMdxPropInstance.plugin
          ]
        }).code;
        const exportStatementsPostMdxTypeProps = transformSync(exportStatements, {
          filename,
          configFile: false,
          babelrc: false,
          plugins: [
            ___babel_plugin_syntax_jsx$,
            ___babel_plugin_syntax_object_rest_spread$,
            babelPluginApplyMdxPropToExportsInstance.plugin
          ]
        }).code;
        const allJsxNames = [
          ...babelPluginApplyMdxPropInstance.state.names,
          ...babelPluginApplyMdxPropToExportsInstance.state.names
        ];
        const jsxNames = allJsxNames.filter(name => name !== 'MDXLayout');
        const importExportNames = importNames.concat(exportNames);
        const shortCodeDef = `const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
`;
        const fakedModulesForGlobalScope = uniq(jsxNames)
          .filter(name => !importExportNames.includes(name))
          .map(name => `const ${name} = makeShortcode("${name}");`)
          .join('\n');
        const fakedModules = (fakedModulesForGlobalScope && [shortCodeDef, fakedModulesForGlobalScope].join('')) || '';
        const moduleBase = `${importStatements}
${exportStatementsPostMdxTypeProps}
${fakedModules}
${layoutProps}
${mdxLayout}`;
        if (skipExport) {
          return `${moduleBase}
${fnPostMdxTypeProp}`;
        }
        if (wrapExport) {
          return `${moduleBase}
${fnPostMdxTypeProp}
export default ${wrapExport}(MDXContent)`;
        }
        return `${moduleBase}
export default ${fnPostMdxTypeProp}`;
      }
      if (node.children) {
        children = node.children
          .map(childNode => {
            const childOptions = Object.assign({}, options, {
              preserveNewlines: preserveNewlines || node.tagName === 'pre'
            });
            return toJSX(childNode, node, childOptions);
          })
          .join('');
      }
      if (node.type === 'element') {
        let props = '';
        if (node.properties) {
          spaceSeparatedProperties.forEach(prop => {
            if (Array.isArray(node.properties[prop])) {
              node.properties[prop] = node.properties[prop].join(' ');
            }
          });
          if (Object.keys(node.properties).length > 0) {
            props = JSON.stringify(node.properties);
          }
        }
        return `<${node.tagName}${parentNode.tagName ? ` parentName="${parentNode.tagName}"` : ''}${
          props ? ` {...${props}}` : ''
        }>${children}</${node.tagName}>`;
      }
      if (node.type === 'text') {
        const shouldPreserveNewlines = preserveNewlines || parentNode.tagName === 'p';
        if (node.value === '\n' && !shouldPreserveNewlines) {
          return node.value;
        }
        return toTemplateLiteral(node.value);
      }
      if (node.type === 'comment') {
        return `{/*${node.value}*/}`;
      }
      if (node.type === 'import' || node.type === 'export' || node.type === 'jsx') {
        return node.value;
      }
    }
    function compile(options = {}) {
      this.Compiler = function(tree, file) {
        return toJSX(
          tree,
          {},
          {
            file: file || {},
            ...options
          }
        );
      };
    }
    module.exports = compile;
    exports = compile;
    exports.toJSX = toJSX;
    exports.default = compile;
  }
});

// esm-build-2e138e2816eb63f23490d13a79e45fa01c3dadfb-3e970151/node_modules/@mdx-js/mdx/index.js
var require_mdx = __commonJS({
  'esm-build-2e138e2816eb63f23490d13a79e45fa01c3dadfb-3e970151/node_modules/@mdx-js/mdx/index.js'(exports, module) {
    var unified = __unified$;
    var toMDAST = __remark_parse$;
    var remarkMdx = __remark_mdx$;
    var footnotes = __remark_footnotes$;
    var squeeze = __remark_squeeze_paragraphs$;
    var visit = __unist_util_visit$;
    var raw = __hast_util_raw$;
    var toMDXAST = require_md_ast_to_mdx_ast();
    var mdxAstToMdxHast = require_mdx_ast_to_mdx_hast();
    var mdxHastToJsx = require_mdx_hast_to_jsx();
    var DEFAULT_OPTIONS = {
      remarkPlugins: [],
      rehypePlugins: [],
      compilers: []
    };
    function createMdxAstCompiler2(options) {
      const mdPlugins = options.mdPlugins;
      const remarkPlugins = options.remarkPlugins;
      const plugins = mdPlugins || remarkPlugins;
      if (mdPlugins) {
        console.error(`
      @mdx-js/mdx: The mdPlugins option has been deprecated in favor of remarkPlugins
                   Support for mdPlugins will be removed in MDX v2
    `);
      }
      const fn = unified()
        .use(toMDAST, options)
        .use(remarkMdx, options)
        .use(footnotes, options)
        .use(squeeze, options)
        .use(toMDXAST, options);
      plugins.forEach(plugin => {
        if (Array.isArray(plugin) && plugin.length > 1) {
          fn.use(plugin[0], plugin[1]);
        } else {
          fn.use(plugin);
        }
      });
      fn.use(mdxAstToMdxHast, options);
      return fn;
    }
    function applyHastPluginsAndCompilers(compiler, options) {
      const hastPlugins = options.hastPlugins;
      const rehypePlugins = options.rehypePlugins;
      const plugins = hastPlugins || rehypePlugins;
      if (hastPlugins) {
        console.error(`
      @mdx-js/mdx: The hastPlugins option has been deprecated in favor of rehypePlugins
                   Support for hastPlugins will be removed in MDX v2
    `);
      }
      const compilers = options.compilers;
      compiler.use(() => ast => {
        visit(ast, 'raw', node => {
          const { children, tagName, properties } = raw(node);
          node.type = 'element';
          node.children = children;
          node.tagName = tagName;
          node.properties = properties;
        });
      });
      plugins.forEach(plugin => {
        if (Array.isArray(plugin) && plugin.length > 1) {
          compiler.use(plugin[0], plugin[1]);
        } else {
          compiler.use(plugin);
        }
      });
      compiler.use(mdxHastToJsx, options);
      for (const compilerPlugin of compilers) {
        compiler.use(compilerPlugin, options);
      }
      return compiler;
    }
    function createCompiler2(options = {}) {
      const opts = Object.assign({}, DEFAULT_OPTIONS, options);
      const compiler = createMdxAstCompiler2(opts);
      const compilerWithPlugins = applyHastPluginsAndCompilers(compiler, opts);
      return compilerWithPlugins;
    }
    function sync2(mdx, options = {}) {
      const compiler = createCompiler2(options);
      const fileOpts = {
        contents: mdx
      };
      if (options.filepath) {
        fileOpts.path = options.filepath;
      }
      const { contents } = compiler.processSync(fileOpts);
      return `/* @jsxRuntime classic */
/* @jsx mdx */
${contents}`;
    }
    async function compile(mdx, options = {}) {
      const compiler = createCompiler2(options);
      const fileOpts = {
        contents: mdx
      };
      if (options.filepath) {
        fileOpts.path = options.filepath;
      }
      const { contents } = await compiler.process(fileOpts);
      return `/* @jsxRuntime classic */
/* @jsx mdx */
${contents}`;
    }
    compile.sync = sync2;
    module.exports = compile;
    exports = compile;
    exports.sync = sync2;
    exports.createMdxAstCompiler = createMdxAstCompiler2;
    exports.createCompiler = createCompiler2;
    exports.default = compile;
  }
});

// esm-build-2e138e2816eb63f23490d13a79e45fa01c3dadfb-3e970151/mod.js
var __module = __toESM(require_mdx());
var { sync, createMdxAstCompiler, createCompiler } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { createCompiler, createMdxAstCompiler, mod_default as default, sync };
