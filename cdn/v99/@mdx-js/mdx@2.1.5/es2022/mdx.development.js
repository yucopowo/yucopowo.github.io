/* esm.sh - esbuild bundle(@mdx-js/mdx@2.1.5) es2022 development */
// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/core.js
import { unified } from '/cdn/v99/unified@10.1.2/es2022/unified.development.js';
import remarkMdx from '/cdn/v99/remark-mdx@2.1.5/es2022/remark-mdx.development.js';
import remarkParse from '/cdn/v99/remark-parse@10.0.1/es2022/remark-parse.development.js';
import remarkRehype from '/cdn/v99/remark-rehype@10.1.0/es2022/remark-rehype.development.js';

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/plugin/recma-jsx-build.js
import { buildJsx } from '/cdn/v99/estree-util-build-jsx@2.2.0/es2022/estree-util-build-jsx.development.js';

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/util/estree-util-create.js
function create(template, node) {
  const fields = ['start', 'end', 'loc', 'range', 'comments'];
  let index = -1;
  while (++index < fields.length) {
    const field = fields[index];
    if (field in template) {
      node[field] = template[field];
    }
  }
  return node;
}

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/util/estree-util-specifiers-to-declarations.js
function specifiersToDeclarations(specifiers, init) {
  let index = -1;
  const declarations = [];
  const otherSpecifiers = [];
  let importNamespaceSpecifier;
  while (++index < specifiers.length) {
    const specifier = specifiers[index];
    if (specifier.type === 'ImportNamespaceSpecifier') {
      importNamespaceSpecifier = specifier;
    } else {
      otherSpecifiers.push(specifier);
    }
  }
  if (importNamespaceSpecifier) {
    declarations.push(
      create(importNamespaceSpecifier, {
        type: 'VariableDeclarator',
        id: importNamespaceSpecifier.local,
        init
      })
    );
  }
  declarations.push({
    type: 'VariableDeclarator',
    id: {
      type: 'ObjectPattern',
      properties: otherSpecifiers.map(specifier => {
        let key =
          specifier.type === 'ImportSpecifier'
            ? specifier.imported
            : specifier.type === 'ExportSpecifier'
            ? specifier.exported
            : {
                type: 'Identifier',
                name: 'default'
              };
        let value = specifier.local;
        if (specifier.type === 'ExportSpecifier') {
          value = key;
          key = specifier.local;
        }
        return create(specifier, {
          type: 'Property',
          kind: 'init',
          shorthand: key.name === value.name,
          method: false,
          computed: false,
          key,
          value
        });
      })
    },
    init: importNamespaceSpecifier
      ? {
          type: 'Identifier',
          name: importNamespaceSpecifier.local.name
        }
      : init
  });
  return declarations;
}

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/util/estree-util-to-id-or-member-expression.js
import {
  start as esStart,
  cont as esCont,
  name as isIdentifierName
} from '/cdn/v99/estree-util-is-identifier-name@2.0.1/es2022/estree-util-is-identifier-name.development.js';
var toIdOrMemberExpression = toIdOrMemberExpressionFactory('Identifier', 'MemberExpression', isIdentifierName);
var toJsxIdOrMemberExpression = toIdOrMemberExpressionFactory(
  'JSXIdentifier',
  'JSXMemberExpression',
  isJsxIdentifierName
);
function toIdOrMemberExpressionFactory(idType, memberType, isIdentifier) {
  return toIdOrMemberExpression2;
  function toIdOrMemberExpression2(ids) {
    let index = -1;
    let object;
    while (++index < ids.length) {
      const name = ids[index];
      const valid = typeof name === 'string' && isIdentifier(name);
      if (idType === 'JSXIdentifier' && !valid) {
        throw new Error('Cannot turn `' + name + '` into a JSX identifier');
      }
      const id = valid
        ? {
            type: idType,
            name
          }
        : {
            type: 'Literal',
            value: name
          };
      object = object
        ? {
            type: memberType,
            object,
            property: id,
            computed: id.type === 'Literal',
            optional: false
          }
        : id;
    }
    if (!object) throw new Error('Expected non-empty `ids` to be passed');
    if (object.type === 'Literal') throw new Error('Expected identifier as left-most value');
    return object;
  }
}
function isJsxIdentifierName(name) {
  let index = -1;
  while (++index < name.length) {
    if (!(index ? jsxCont : esStart)(name.charCodeAt(index))) return false;
  }
  return index > 0;
}
function jsxCont(code) {
  return code === 45 || esCont(code);
}

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/plugin/recma-jsx-build.js
function recmaJsxBuild(options = {}) {
  const { outputFormat } = options;
  return tree => {
    buildJsx(tree);
    if (
      outputFormat === 'function-body' &&
      tree.body[0] &&
      tree.body[0].type === 'ImportDeclaration' &&
      typeof tree.body[0].source.value === 'string' &&
      /\/jsx-runtime$/.test(tree.body[0].source.value)
    ) {
      tree.body[0] = {
        type: 'VariableDeclaration',
        kind: 'const',
        declarations: specifiersToDeclarations(tree.body[0].specifiers, toIdOrMemberExpression(['arguments', 0]))
      };
    }
  };
}

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/plugin/recma-document.js
import { analyze } from '/cdn/v99/periscopic@3.0.4/es2022/periscopic.development.js';
import { stringifyPosition } from '/cdn/v99/unist-util-stringify-position@3.0.2/es2022/unist-util-stringify-position.development.js';
import { positionFromEstree } from '/cdn/v99/unist-util-position-from-estree@1.1.1/es2022/unist-util-position-from-estree.development.js';
import { walk } from '/cdn/v99/estree-walker@3.0.1/es2022/estree-walker.development.js';

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/util/estree-util-declaration-to-expression.js
function declarationToExpression(declaration) {
  if (declaration.type === 'FunctionDeclaration') {
    return {
      ...declaration,
      type: 'FunctionExpression'
    };
  }
  if (declaration.type === 'ClassDeclaration') {
    return {
      ...declaration,
      type: 'ClassExpression'
    };
  }
  throw new Error('Cannot turn `' + declaration.type + '` into an expression');
}

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/util/estree-util-is-declaration.js
function isDeclaration(node) {
  const type = node && typeof node === 'object' && node.type;
  return Boolean(type === 'FunctionDeclaration' || type === 'ClassDeclaration' || type === 'VariableDeclaration');
}

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/plugin/recma-document.js
function recmaDocument(options = {}) {
  const {
    baseUrl,
    useDynamicImport,
    outputFormat = 'program',
    pragma = 'React.createElement',
    pragmaFrag = 'React.Fragment',
    pragmaImportSource = 'react',
    jsxImportSource = 'react',
    jsxRuntime = 'automatic'
  } = options;
  return (tree, file) => {
    const exportedIdentifiers = [];
    const replacement = [];
    const pragmas = [];
    let exportAllCount = 0;
    let layout;
    let content;
    let child;
    if (!tree.comments) tree.comments = [];
    if (jsxRuntime) {
      pragmas.push('@jsxRuntime ' + jsxRuntime);
    }
    if (jsxRuntime === 'automatic' && jsxImportSource) {
      pragmas.push('@jsxImportSource ' + jsxImportSource);
    }
    if (jsxRuntime === 'classic' && pragma) {
      pragmas.push('@jsx ' + pragma);
    }
    if (jsxRuntime === 'classic' && pragmaFrag) {
      pragmas.push('@jsxFrag ' + pragmaFrag);
    }
    if (pragmas.length > 0) {
      tree.comments.unshift({
        type: 'Block',
        value: pragmas.join(' ')
      });
    }
    if (jsxRuntime === 'classic' && pragmaImportSource) {
      if (!pragma) {
        throw new Error('Missing `pragma` in classic runtime with `pragmaImportSource`');
      }
      handleEsm({
        type: 'ImportDeclaration',
        specifiers: [
          {
            type: 'ImportDefaultSpecifier',
            local: {
              type: 'Identifier',
              name: pragma.split('.')[0]
            }
          }
        ],
        source: {
          type: 'Literal',
          value: pragmaImportSource
        }
      });
    }
    for (child of tree.body) {
      if (child.type === 'ExportDefaultDeclaration') {
        if (layout) {
          file.fail(
            'Cannot specify multiple layouts (previous: ' + stringifyPosition(positionFromEstree(layout)) + ')',
            positionFromEstree(child),
            'recma-document:duplicate-layout'
          );
        }
        layout = child;
        replacement.push({
          type: 'VariableDeclaration',
          kind: 'const',
          declarations: [
            {
              type: 'VariableDeclarator',
              id: {
                type: 'Identifier',
                name: 'MDXLayout'
              },
              init: isDeclaration(child.declaration) ? declarationToExpression(child.declaration) : child.declaration
            }
          ]
        });
      } else if (child.type === 'ExportNamedDeclaration' && child.source) {
        const source = child.source;
        child.specifiers = child.specifiers.filter(specifier => {
          if (specifier.exported.name === 'default') {
            if (layout) {
              file.fail(
                'Cannot specify multiple layouts (previous: ' + stringifyPosition(positionFromEstree(layout)) + ')',
                positionFromEstree(child),
                'recma-document:duplicate-layout'
              );
            }
            layout = specifier;
            handleEsm(
              create(specifier, {
                type: 'ImportDeclaration',
                specifiers: [
                  specifier.local.name === 'default'
                    ? {
                        type: 'ImportDefaultSpecifier',
                        local: {
                          type: 'Identifier',
                          name: 'MDXLayout'
                        }
                      }
                    : create(specifier.local, {
                        type: 'ImportSpecifier',
                        imported: specifier.local,
                        local: {
                          type: 'Identifier',
                          name: 'MDXLayout'
                        }
                      })
                ],
                source: create(source, {
                  type: 'Literal',
                  value: source.value
                })
              })
            );
            return false;
          }
          return true;
        });
        if (child.specifiers.length > 0) {
          handleExport(child);
        }
      } else if (child.type === 'ExportNamedDeclaration' || child.type === 'ExportAllDeclaration') {
        handleExport(child);
      } else if (child.type === 'ImportDeclaration') {
        handleEsm(child);
      } else if (
        child.type === 'ExpressionStatement' &&
        (child.expression.type === 'JSXFragment' || child.expression.type === 'JSXElement')
      ) {
        content = true;
        replacement.push(...createMdxContent(child.expression, Boolean(layout)));
      } else {
        replacement.push(child);
      }
    }
    if (!content) {
      replacement.push(...createMdxContent(void 0, Boolean(layout)));
    }
    exportedIdentifiers.push(['MDXContent', 'default']);
    if (outputFormat === 'function-body') {
      replacement.push({
        type: 'ReturnStatement',
        argument: {
          type: 'ObjectExpression',
          properties: [
            ...Array.from({
              length: exportAllCount
            }).map((_, index) => ({
              type: 'SpreadElement',
              argument: {
                type: 'Identifier',
                name: '_exportAll' + (index + 1)
              }
            })),
            ...exportedIdentifiers.map(d => {
              const prop = {
                type: 'Property',
                kind: 'init',
                method: false,
                computed: false,
                shorthand: typeof d === 'string',
                key: {
                  type: 'Identifier',
                  name: typeof d === 'string' ? d : d[1]
                },
                value: {
                  type: 'Identifier',
                  name: typeof d === 'string' ? d : d[0]
                }
              };
              return prop;
            })
          ]
        }
      });
    } else {
      replacement.push({
        type: 'ExportDefaultDeclaration',
        declaration: {
          type: 'Identifier',
          name: 'MDXContent'
        }
      });
    }
    tree.body = replacement;
    if (baseUrl) {
      walk(tree, {
        enter(_node) {
          const node = _node;
          if (
            node.type === 'MemberExpression' &&
            'object' in node &&
            node.object.type === 'MetaProperty' &&
            node.property.type === 'Identifier' &&
            node.object.meta.name === 'import' &&
            node.object.property.name === 'meta' &&
            node.property.name === 'url'
          ) {
            const replacement2 = {
              type: 'Literal',
              value: baseUrl
            };
            this.replace(replacement2);
          }
        }
      });
    }
    function handleExport(node) {
      if (node.type === 'ExportNamedDeclaration') {
        if (node.declaration) {
          exportedIdentifiers.push(...analyze(node.declaration).scope.declarations.keys());
        }
        for (child of node.specifiers) {
          exportedIdentifiers.push(child.exported.name);
        }
      }
      handleEsm(node);
    }
    function handleEsm(node) {
      if (baseUrl && node.source) {
        let value = String(node.source.value);
        try {
          value = String(new URL(value));
        } catch {
          if (/^\.{0,2}\//.test(value)) {
            value = String(new URL(value, baseUrl));
          }
        }
        node.source = create(node.source, {
          type: 'Literal',
          value
        });
      }
      let replace;
      let init;
      if (outputFormat === 'function-body') {
        if (
          node.type === 'ImportDeclaration' ||
          node.type === 'ExportAllDeclaration' ||
          (node.type === 'ExportNamedDeclaration' && node.source)
        ) {
          if (!useDynamicImport) {
            file.fail(
              'Cannot use `import` or `export \u2026 from` in `evaluate` (outputting a function body) by default: please set `useDynamicImport: true` (and probably specify a `baseUrl`)',
              positionFromEstree(node),
              'recma-document:invalid-esm-statement'
            );
          }
          if (!node.source) {
            throw new Error('Expected `node.source` to be defined');
          }
          init = {
            type: 'AwaitExpression',
            argument: create(node, {
              type: 'ImportExpression',
              source: node.source
            })
          };
          if (
            (node.type === 'ImportDeclaration' || node.type === 'ExportNamedDeclaration') &&
            node.specifiers.length === 0
          ) {
            replace = {
              type: 'ExpressionStatement',
              expression: init
            };
          } else {
            replace = {
              type: 'VariableDeclaration',
              kind: 'const',
              declarations:
                node.type === 'ExportAllDeclaration'
                  ? [
                      {
                        type: 'VariableDeclarator',
                        id: {
                          type: 'Identifier',
                          name: '_exportAll' + ++exportAllCount
                        },
                        init
                      }
                    ]
                  : specifiersToDeclarations(node.specifiers, init)
            };
          }
        } else if (node.declaration) {
          replace = node.declaration;
        } else {
          const declarators = node.specifiers
            .filter(specifier => specifier.local.name !== specifier.exported.name)
            .map(specifier => ({
              type: 'VariableDeclarator',
              id: specifier.exported,
              init: specifier.local
            }));
          if (declarators.length > 0) {
            replace = {
              type: 'VariableDeclaration',
              kind: 'const',
              declarations: declarators
            };
          }
        }
      } else {
        replace = node;
      }
      if (replace) {
        replacement.push(replace);
      }
    }
  };
  function createMdxContent(content, hasInternalLayout) {
    const element = {
      type: 'JSXElement',
      openingElement: {
        type: 'JSXOpeningElement',
        name: {
          type: 'JSXIdentifier',
          name: 'MDXLayout'
        },
        attributes: [
          {
            type: 'JSXSpreadAttribute',
            argument: {
              type: 'Identifier',
              name: 'props'
            }
          }
        ],
        selfClosing: false
      },
      closingElement: {
        type: 'JSXClosingElement',
        name: {
          type: 'JSXIdentifier',
          name: 'MDXLayout'
        }
      },
      children: [
        {
          type: 'JSXElement',
          openingElement: {
            type: 'JSXOpeningElement',
            name: {
              type: 'JSXIdentifier',
              name: '_createMdxContent'
            },
            attributes: [
              {
                type: 'JSXSpreadAttribute',
                argument: {
                  type: 'Identifier',
                  name: 'props'
                }
              }
            ],
            selfClosing: true
          },
          closingElement: null,
          children: []
        }
      ]
    };
    let result = element;
    if (!hasInternalLayout) {
      result = {
        type: 'ConditionalExpression',
        test: {
          type: 'Identifier',
          name: 'MDXLayout'
        },
        consequent: result,
        alternate: {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: '_createMdxContent'
          },
          arguments: [
            {
              type: 'Identifier',
              name: 'props'
            }
          ],
          optional: false
        }
      };
    }
    let argument = content || {
      type: 'Literal',
      value: null
    };
    if (
      argument &&
      argument.type === 'JSXFragment' &&
      argument.children.length === 1 &&
      argument.children[0].type === 'JSXElement'
    ) {
      argument = argument.children[0];
    }
    return [
      {
        type: 'FunctionDeclaration',
        id: {
          type: 'Identifier',
          name: '_createMdxContent'
        },
        params: [
          {
            type: 'Identifier',
            name: 'props'
          }
        ],
        body: {
          type: 'BlockStatement',
          body: [
            {
              type: 'ReturnStatement',
              argument
            }
          ]
        }
      },
      {
        type: 'FunctionDeclaration',
        id: {
          type: 'Identifier',
          name: 'MDXContent'
        },
        params: [
          {
            type: 'AssignmentPattern',
            left: {
              type: 'Identifier',
              name: 'props'
            },
            right: {
              type: 'ObjectExpression',
              properties: []
            }
          }
        ],
        body: {
          type: 'BlockStatement',
          body: [
            {
              type: 'ReturnStatement',
              argument: result
            }
          ]
        }
      }
    ];
  }
}

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/plugin/recma-jsx-rewrite.js
import { stringifyPosition as stringifyPosition2 } from '/cdn/v99/unist-util-stringify-position@3.0.2/es2022/unist-util-stringify-position.development.js';
import { positionFromEstree as positionFromEstree2 } from '/cdn/v99/unist-util-position-from-estree@1.1.1/es2022/unist-util-position-from-estree.development.js';
import { name as isIdentifierName2 } from '/cdn/v99/estree-util-is-identifier-name@2.0.1/es2022/estree-util-is-identifier-name.development.js';
import { walk as walk2 } from '/cdn/v99/estree-walker@3.0.1/es2022/estree-walker.development.js';
import { analyze as analyze2 } from '/cdn/v99/periscopic@3.0.4/es2022/periscopic.development.js';

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/util/estree-util-to-binary-addition.js
function toBinaryAddition(expressions) {
  let index = -1;
  let left;
  while (++index < expressions.length) {
    const right = expressions[index];
    left = left
      ? {
          type: 'BinaryExpression',
          left,
          operator: '+',
          right
        }
      : right;
  }
  if (!left) throw new Error('Expected non-empty `expressions` to be passed');
  return left;
}

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/plugin/recma-jsx-rewrite.js
var own = {}.hasOwnProperty;
function recmaJsxRewrite(options = {}) {
  const { development: development2, providerImportSource, outputFormat } = options;
  return (tree, file) => {
    const scopeInfo = analyze2(tree);
    const fnStack = [];
    let importProvider;
    let createErrorHelper;
    let currentScope;
    walk2(tree, {
      enter(_node) {
        const node = _node;
        const newScope = scopeInfo.map.get(node);
        if (
          node.type === 'FunctionDeclaration' ||
          node.type === 'FunctionExpression' ||
          node.type === 'ArrowFunctionExpression'
        ) {
          fnStack.push({
            objects: [],
            components: [],
            tags: [],
            references: {},
            idToInvalidComponentName: /* @__PURE__ */ new Map(),
            node
          });
          if (isNamedFunction(node, 'MDXContent') && newScope && !inScope(newScope, 'MDXLayout')) {
            fnStack[0].components.push('MDXLayout');
          }
        }
        const fnScope = fnStack[0];
        if (!fnScope || (!isNamedFunction(fnScope.node, '_createMdxContent') && !providerImportSource)) {
          return;
        }
        if (newScope) {
          newScope.node = node;
          currentScope = newScope;
        }
        if (currentScope && node.type === 'JSXElement') {
          let name = node.openingElement.name;
          if (name.type === 'JSXMemberExpression') {
            const ids = [];
            while (name.type === 'JSXMemberExpression') {
              ids.unshift(name.property.name);
              name = name.object;
            }
            ids.unshift(name.name);
            const fullId = ids.join('.');
            const id = name.name;
            const isInScope = inScope(currentScope, id);
            if (!own.call(fnScope.references, fullId)) {
              const parentScope = currentScope.parent;
              if (
                !isInScope ||
                (parentScope &&
                  parentScope.node.type === 'FunctionDeclaration' &&
                  isNamedFunction(parentScope.node, '_createMdxContent'))
              ) {
                fnScope.references[fullId] = {
                  node,
                  component: true
                };
              }
            }
            if (!fnScope.objects.includes(id) && !isInScope) {
              fnScope.objects.push(id);
            }
          } else if (name.type === 'JSXNamespacedName') {
          } else if (isIdentifierName2(name.name) && !/^[a-z]/.test(name.name)) {
            const id = name.name;
            if (!inScope(currentScope, id)) {
              if (id !== 'MDXLayout' && !own.call(fnScope.references, id)) {
                fnScope.references[id] = {
                  node,
                  component: true
                };
              }
              if (!fnScope.components.includes(id)) {
                fnScope.components.push(id);
              }
            }
          } else if (node.data && node.data._mdxExplicitJsx) {
          } else {
            const id = name.name;
            if (!fnScope.tags.includes(id)) {
              fnScope.tags.push(id);
            }
            let jsxIdExpression = ['_components', id];
            if (isIdentifierName2(id) === false) {
              let invalidComponentName = fnScope.idToInvalidComponentName.get(id);
              if (invalidComponentName === void 0) {
                invalidComponentName = `_component${fnScope.idToInvalidComponentName.size}`;
                fnScope.idToInvalidComponentName.set(id, invalidComponentName);
              }
              jsxIdExpression = [invalidComponentName];
            }
            node.openingElement.name = toJsxIdOrMemberExpression(jsxIdExpression);
            if (node.closingElement) {
              node.closingElement.name = toJsxIdOrMemberExpression(jsxIdExpression);
            }
          }
        }
      },
      leave(node) {
        const defaults = [];
        const actual = [];
        const parameters = [];
        const declarations = [];
        if (currentScope && currentScope.node === node) {
          currentScope = currentScope.parent;
        }
        if (
          node.type === 'FunctionDeclaration' ||
          node.type === 'FunctionExpression' ||
          node.type === 'ArrowFunctionExpression'
        ) {
          const fn = node;
          const scope = fnStack[fnStack.length - 1];
          let name;
          for (name of scope.tags) {
            defaults.push({
              type: 'Property',
              kind: 'init',
              key: isIdentifierName2(name)
                ? {
                    type: 'Identifier',
                    name
                  }
                : {
                    type: 'Literal',
                    value: name
                  },
              value: {
                type: 'Literal',
                value: name
              },
              method: false,
              shorthand: false,
              computed: false
            });
          }
          actual.push(...scope.components);
          for (name of scope.objects) {
            if (!actual.includes(name)) {
              actual.push(name);
            }
          }
          const statements = [];
          if (defaults.length > 0 || actual.length > 0 || scope.idToInvalidComponentName.size > 0) {
            if (providerImportSource) {
              importProvider = true;
              parameters.push({
                type: 'CallExpression',
                callee: {
                  type: 'Identifier',
                  name: '_provideComponents'
                },
                arguments: [],
                optional: false
              });
            }
            if (isNamedFunction(scope.node, 'MDXContent') || isNamedFunction(scope.node, '_createMdxContent')) {
              parameters.push(toIdOrMemberExpression(['props', 'components']));
            }
            if (defaults.length > 0 || parameters.length > 1) {
              parameters.unshift({
                type: 'ObjectExpression',
                properties: defaults
              });
            }
            let componentsInit =
              parameters.length > 1
                ? {
                    type: 'CallExpression',
                    callee: toIdOrMemberExpression(['Object', 'assign']),
                    arguments: parameters,
                    optional: false
                  }
                : parameters[0].type === 'MemberExpression'
                ? {
                    type: 'LogicalExpression',
                    operator: '||',
                    left: parameters[0],
                    right: {
                      type: 'ObjectExpression',
                      properties: []
                    }
                  }
                : parameters[0];
            let componentsPattern;
            if (actual.length > 0) {
              componentsPattern = {
                type: 'ObjectPattern',
                properties: actual.map(name2 => ({
                  type: 'Property',
                  kind: 'init',
                  key: {
                    type: 'Identifier',
                    name: name2 === 'MDXLayout' ? 'wrapper' : name2
                  },
                  value: {
                    type: 'Identifier',
                    name: name2
                  },
                  method: false,
                  shorthand: name2 !== 'MDXLayout',
                  computed: false
                }))
              };
            }
            if (scope.tags.length > 0) {
              declarations.push({
                type: 'VariableDeclarator',
                id: {
                  type: 'Identifier',
                  name: '_components'
                },
                init: componentsInit
              });
              componentsInit = {
                type: 'Identifier',
                name: '_components'
              };
            }
            if (isNamedFunction(scope.node, '_createMdxContent')) {
              for (const [id, componentName] of scope.idToInvalidComponentName) {
                declarations.push({
                  type: 'VariableDeclarator',
                  id: {
                    type: 'Identifier',
                    name: componentName
                  },
                  init: {
                    type: 'MemberExpression',
                    object: {
                      type: 'Identifier',
                      name: '_components'
                    },
                    property: {
                      type: 'Literal',
                      value: id
                    },
                    computed: true,
                    optional: false
                  }
                });
              }
            }
            if (componentsPattern) {
              declarations.push({
                type: 'VariableDeclarator',
                id: componentsPattern,
                init: componentsInit
              });
            }
            if (declarations.length > 0) {
              statements.push({
                type: 'VariableDeclaration',
                kind: 'const',
                declarations
              });
            }
          }
          let key;
          for (key in scope.references) {
            if (own.call(scope.references, key)) {
              const parts = key.split('.');
              let index2 = 0;
              while (++index2 < parts.length) {
                const partial = parts.slice(0, index2).join('.');
                if (!own.call(scope.references, partial)) {
                  scope.references[partial] = {
                    node: scope.references[key].node,
                    component: false
                  };
                }
              }
            }
          }
          const references = Object.keys(scope.references).sort();
          let index = -1;
          while (++index < references.length) {
            const id = references[index];
            const info = scope.references[id];
            const place = stringifyPosition2(positionFromEstree2(info.node));
            const parameters2 = [
              {
                type: 'Literal',
                value: id
              },
              {
                type: 'Literal',
                value: info.component
              }
            ];
            createErrorHelper = true;
            if (development2 && place !== '1:1-1:1') {
              parameters2.push({
                type: 'Literal',
                value: place
              });
            }
            statements.push({
              type: 'IfStatement',
              test: {
                type: 'UnaryExpression',
                operator: '!',
                prefix: true,
                argument: toIdOrMemberExpression(id.split('.'))
              },
              consequent: {
                type: 'ExpressionStatement',
                expression: {
                  type: 'CallExpression',
                  callee: {
                    type: 'Identifier',
                    name: '_missingMdxReference'
                  },
                  arguments: parameters2,
                  optional: false
                }
              },
              alternate: null
            });
          }
          if (statements.length > 0) {
            if (fn.body.type !== 'BlockStatement') {
              fn.body = {
                type: 'BlockStatement',
                body: [
                  {
                    type: 'ReturnStatement',
                    argument: fn.body
                  }
                ]
              };
            }
            fn.body.body.unshift(...statements);
          }
          fnStack.pop();
        }
      }
    });
    if (importProvider && providerImportSource) {
      tree.body.unshift(createImportProvider(providerImportSource, outputFormat));
    }
    if (createErrorHelper) {
      const message = [
        {
          type: 'Literal',
          value: 'Expected '
        },
        {
          type: 'ConditionalExpression',
          test: {
            type: 'Identifier',
            name: 'component'
          },
          consequent: {
            type: 'Literal',
            value: 'component'
          },
          alternate: {
            type: 'Literal',
            value: 'object'
          }
        },
        {
          type: 'Literal',
          value: ' `'
        },
        {
          type: 'Identifier',
          name: 'id'
        },
        {
          type: 'Literal',
          value: '` to be defined: you likely forgot to import, pass, or provide it.'
        }
      ];
      const parameters = [
        {
          type: 'Identifier',
          name: 'id'
        },
        {
          type: 'Identifier',
          name: 'component'
        }
      ];
      if (development2) {
        message.push({
          type: 'ConditionalExpression',
          test: {
            type: 'Identifier',
            name: 'place'
          },
          consequent: toBinaryAddition([
            {
              type: 'Literal',
              value: '\nIt\u2019s referenced in your code at `'
            },
            {
              type: 'Identifier',
              name: 'place'
            },
            {
              type: 'Literal',
              value: (file.path ? '` in `' + file.path : '') + '`'
            }
          ]),
          alternate: {
            type: 'Literal',
            value: ''
          }
        });
        parameters.push({
          type: 'Identifier',
          name: 'place'
        });
      }
      tree.body.push({
        type: 'FunctionDeclaration',
        id: {
          type: 'Identifier',
          name: '_missingMdxReference'
        },
        generator: false,
        async: false,
        params: parameters,
        body: {
          type: 'BlockStatement',
          body: [
            {
              type: 'ThrowStatement',
              argument: {
                type: 'NewExpression',
                callee: {
                  type: 'Identifier',
                  name: 'Error'
                },
                arguments: [toBinaryAddition(message)]
              }
            }
          ]
        }
      });
    }
  };
}
function createImportProvider(providerImportSource, outputFormat) {
  const specifiers = [
    {
      type: 'ImportSpecifier',
      imported: {
        type: 'Identifier',
        name: 'useMDXComponents'
      },
      local: {
        type: 'Identifier',
        name: '_provideComponents'
      }
    }
  ];
  return outputFormat === 'function-body'
    ? {
        type: 'VariableDeclaration',
        kind: 'const',
        declarations: specifiersToDeclarations(specifiers, toIdOrMemberExpression(['arguments', 0]))
      }
    : {
        type: 'ImportDeclaration',
        specifiers,
        source: {
          type: 'Literal',
          value: providerImportSource
        }
      };
}
function isNamedFunction(node, name) {
  return Boolean(node && 'id' in node && node.id && node.id.name === name);
}
function inScope(scope, id) {
  let currentScope = scope;
  while (currentScope) {
    if (currentScope.declarations.has(id)) {
      return true;
    }
    currentScope = currentScope.parent;
  }
  return false;
}

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/plugin/recma-stringify.js
import { toJs, jsx } from '/cdn/v99/estree-util-to-js@1.1.0/es2022/estree-util-to-js.development.js';
function recmaStringify(options = {}) {
  const { SourceMapGenerator } = options;
  Object.assign(this, {
    Compiler: compiler
  });
  function compiler(tree, file) {
    const result = SourceMapGenerator
      ? toJs(tree, {
          filePath: file.path || 'unknown.mdx',
          SourceMapGenerator,
          handlers: jsx
        })
      : toJs(tree, {
          handlers: jsx
        });
    file.map = result.map;
    return result.value;
  }
}

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/plugin/rehype-recma.js
import { toEstree } from '/cdn/v99/hast-util-to-estree@2.1.0/es2022/hast-util-to-estree.development.js';
function rehypeRecma() {
  return tree => toEstree(tree);
}

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/plugin/rehype-remove-raw.js
import { visit } from '/cdn/v99/unist-util-visit@4.1.1/es2022/unist-util-visit.development.js';
function rehypeRemoveRaw() {
  return tree => {
    visit(tree, 'raw', (_, index, parent) => {
      if (parent && typeof index === 'number') {
        parent.children.splice(index, 1);
        return index;
      }
    });
  };
}

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/plugin/remark-mark-and-unravel.js
import { visit as visit2 } from '/cdn/v99/unist-util-visit@4.1.1/es2022/unist-util-visit.development.js';
function remarkMarkAndUnravel() {
  return tree => {
    visit2(tree, (node, index, parent_) => {
      const parent = parent_;
      let offset = -1;
      let all = true;
      let oneOrMore;
      if (parent && typeof index === 'number' && node.type === 'paragraph') {
        const children = node.children;
        while (++offset < children.length) {
          const child = children[offset];
          if (child.type === 'mdxJsxTextElement' || child.type === 'mdxTextExpression') {
            oneOrMore = true;
          } else if (child.type === 'text' && /^[\t\r\n ]+$/.test(String(child.value))) {
          } else {
            all = false;
            break;
          }
        }
        if (all && oneOrMore) {
          offset = -1;
          while (++offset < children.length) {
            const child = children[offset];
            if (child.type === 'mdxJsxTextElement') {
              child.type = 'mdxJsxFlowElement';
            }
            if (child.type === 'mdxTextExpression') {
              child.type = 'mdxFlowExpression';
            }
          }
          parent.children.splice(index, 1, ...children);
          return index;
        }
      }
      if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
        const data = node.data || (node.data = {});
        data._mdxExplicitJsx = true;
      }
    });
  };
}

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/node-types.js
var nodeTypes = ['mdxFlowExpression', 'mdxJsxFlowElement', 'mdxJsxTextElement', 'mdxTextExpression', 'mdxjsEsm'];

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/condition.browser.js
var development = false;

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/core.js
var removedOptions = ['filepath', 'compilers', 'hastPlugins', 'mdPlugins', 'skipExport', 'wrapExport'];
function createProcessor(options = {}) {
  const {
    development: development2 = development,
    jsx: jsx2,
    format,
    outputFormat,
    providerImportSource,
    recmaPlugins,
    rehypePlugins,
    remarkPlugins,
    remarkRehypeOptions = {},
    SourceMapGenerator,
    ...rest
  } = options;
  let index = -1;
  while (++index < removedOptions.length) {
    const key = removedOptions[index];
    if (key in options) {
      throw new Error(
        '`options.' +
          key +
          '` is no longer supported. Please see <https://mdxjs.com/migrating/v2/> for more information'
      );
    }
  }
  if (format === 'detect') {
    throw new Error(
      "Incorrect `format: 'detect'`: `createProcessor` can support either `md` or `mdx`; it does not support detecting the format"
    );
  }
  const pipeline = unified().use(remarkParse);
  if (format !== 'md') {
    pipeline.use(remarkMdx);
  }
  pipeline
    .use(remarkMarkAndUnravel)
    .use(remarkPlugins || [])
    .use(remarkRehype, {
      ...remarkRehypeOptions,
      allowDangerousHtml: true,
      passThrough: [...(remarkRehypeOptions.passThrough || []), ...nodeTypes]
    })
    .use(rehypePlugins || []);
  if (format === 'md') {
    pipeline.use(rehypeRemoveRaw);
  }
  pipeline
    .use(rehypeRecma)
    .use(recmaDocument, {
      ...rest,
      outputFormat
    })
    .use(recmaJsxRewrite, {
      development: development2,
      providerImportSource,
      outputFormat
    });
  if (!jsx2) {
    pipeline.use(recmaJsxBuild, {
      outputFormat
    });
  }
  pipeline
    .use(recmaStringify, {
      SourceMapGenerator
    })
    .use(recmaPlugins || []);
  return pipeline;
}

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/util/resolve-file-and-options.js
import { VFile } from '/cdn/v99/vfile@5.3.6/es2022/vfile.development.js';

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/util/extnames.js
import markdownExtensions from '/cdn/v99/markdown-extensions@1.1.1/es2022/markdown-extensions.development.js';
var md = markdownExtensions.map(d => '.' + d);

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/util/resolve-file-and-options.js
function resolveFileAndOptions(vfileCompatible, options) {
  const file = looksLikeAVFile(vfileCompatible) ? vfileCompatible : new VFile(vfileCompatible);
  const { format, ...rest } = options || {};
  return {
    file,
    options: {
      format:
        format === 'md' || format === 'mdx'
          ? format
          : file.extname && (rest.mdExtensions || md).includes(file.extname)
          ? 'md'
          : 'mdx',
      ...rest
    }
  };
}
function looksLikeAVFile(value) {
  return Boolean(value && typeof value === 'object' && 'message' in value && 'messages' in value);
}

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/compile.js
function compile(vfileCompatible, compileOptions) {
  const { file, options } = resolveFileAndOptions(vfileCompatible, compileOptions);
  return createProcessor(options).process(file);
}
function compileSync(vfileCompatible, compileOptions) {
  const { file, options } = resolveFileAndOptions(vfileCompatible, compileOptions);
  return createProcessor(options).processSync(file);
}

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/run.js
var AsyncFunction = Object.getPrototypeOf(run).constructor;
async function run(file, options) {
  return new AsyncFunction(String(file))(options);
}
function runSync(file, options) {
  return new Function(String(file))(options);
}

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/util/resolve-evaluate-options.js
function resolveEvaluateOptions(options) {
  const { Fragment, jsx: jsx2, jsxs, useMDXComponents, ...rest } = options || {};
  if (!Fragment) throw new Error('Expected `Fragment` given to `evaluate`');
  if (!jsx2) throw new Error('Expected `jsx` given to `evaluate`');
  if (!jsxs) throw new Error('Expected `jsxs` given to `evaluate`');
  return {
    compiletime: {
      ...rest,
      outputFormat: 'function-body',
      providerImportSource: useMDXComponents ? '#' : void 0
    },
    runtime: {
      Fragment,
      jsx: jsx2,
      jsxs,
      useMDXComponents
    }
  };
}

// esm-build-d61353e6af63a6a1598e7a65b99f637f3bb7ef3a-2542ec20/node_modules/@mdx-js/mdx/lib/evaluate.js
async function evaluate(vfileCompatible, evaluateOptions) {
  const { compiletime, runtime } = resolveEvaluateOptions(evaluateOptions);
  return run(await compile(vfileCompatible, compiletime), runtime);
}
function evaluateSync(vfileCompatible, evaluateOptions) {
  const { compiletime, runtime } = resolveEvaluateOptions(evaluateOptions);
  return runSync(compileSync(vfileCompatible, compiletime), runtime);
}
export { compile, compileSync, createProcessor, evaluate, evaluateSync, nodeTypes, run, runSync };
