/* esm.sh - esbuild bundle(estree-util-build-jsx@2.2.0) es2022 development */
// esm-build-8a12a56696d8f412bf19e2d12d61c04ef41bb616-6b4f3c47/node_modules/estree-util-build-jsx/lib/index.js
import { walk } from '/cdn/v99/estree-walker@3.0.1/es2022/estree-walker.development.js';
import { name as isIdentifierName } from '/cdn/v99/estree-util-is-identifier-name@2.0.1/es2022/estree-util-is-identifier-name.development.js';
var regex = /@(jsx|jsxFrag|jsxImportSource|jsxRuntime)\s+(\S+)/g;
function buildJsx(tree, options = {}) {
  let automatic = options.runtime === 'automatic';
  const annotations = {};
  const imports = {};
  walk(tree, {
    enter(node) {
      if (node.type === 'Program') {
        const comments = node.comments || [];
        let index = -1;
        while (++index < comments.length) {
          regex.lastIndex = 0;
          let match = regex.exec(comments[index].value);
          while (match) {
            annotations[match[1]] = match[2];
            match = regex.exec(comments[index].value);
          }
        }
        if (annotations.jsxRuntime) {
          if (annotations.jsxRuntime === 'automatic') {
            automatic = true;
            if (annotations.jsx) {
              throw new Error('Unexpected `@jsx` pragma w/ automatic runtime');
            }
            if (annotations.jsxFrag) {
              throw new Error('Unexpected `@jsxFrag` pragma w/ automatic runtime');
            }
          } else if (annotations.jsxRuntime === 'classic') {
            automatic = false;
            if (annotations.jsxImportSource) {
              throw new Error('Unexpected `@jsxImportSource` w/ classic runtime');
            }
          } else {
            throw new Error(
              'Unexpected `jsxRuntime` `' + annotations.jsxRuntime + '`, expected `automatic` or `classic`'
            );
          }
        }
      }
    },
    leave(node) {
      if (node.type === 'Program') {
        const specifiers = [];
        if (imports.fragment) {
          specifiers.push({
            type: 'ImportSpecifier',
            imported: {
              type: 'Identifier',
              name: 'Fragment'
            },
            local: {
              type: 'Identifier',
              name: '_Fragment'
            }
          });
        }
        if (imports.jsx) {
          specifiers.push({
            type: 'ImportSpecifier',
            imported: {
              type: 'Identifier',
              name: 'jsx'
            },
            local: {
              type: 'Identifier',
              name: '_jsx'
            }
          });
        }
        if (imports.jsxs) {
          specifiers.push({
            type: 'ImportSpecifier',
            imported: {
              type: 'Identifier',
              name: 'jsxs'
            },
            local: {
              type: 'Identifier',
              name: '_jsxs'
            }
          });
        }
        if (imports.jsxDEV) {
          specifiers.push({
            type: 'ImportSpecifier',
            imported: {
              type: 'Identifier',
              name: 'jsxDEV'
            },
            local: {
              type: 'Identifier',
              name: '_jsxDEV'
            }
          });
        }
        if (specifiers.length > 0) {
          node.body.unshift({
            type: 'ImportDeclaration',
            specifiers,
            source: {
              type: 'Literal',
              value:
                (annotations.jsxImportSource || options.importSource || 'react') +
                (options.development ? '/jsx-dev-runtime' : '/jsx-runtime')
            }
          });
        }
      }
      if (node.type !== 'JSXElement' && node.type !== 'JSXFragment') {
        return;
      }
      const children = [];
      let index = -1;
      while (++index < node.children.length) {
        const child = node.children[index];
        if (child.type === 'JSXExpressionContainer') {
          if (child.expression.type !== 'JSXEmptyExpression') {
            children.push(child.expression);
          }
        } else if (child.type === 'JSXText') {
          const value = child.value
            .replace(/\t/g, ' ')
            .replace(/ *(\r?\n|\r) */g, '\n')
            .replace(/\n+/g, '\n')
            .replace(/\n+$/, '')
            .replace(/\n/g, ' ');
          if (value) {
            children.push(
              create(child, {
                type: 'Literal',
                value
              })
            );
          }
        } else {
          children.push(child);
        }
      }
      let name;
      let fields = [];
      const objects = [];
      let parameters = [];
      let key;
      if (node.type === 'JSXElement') {
        name = toIdentifier(node.openingElement.name);
        if (name.type === 'Identifier' && /^[a-z]/.test(name.name)) {
          name = create(name, {
            type: 'Literal',
            value: name.name
          });
        }
        let spread;
        const attributes = node.openingElement.attributes;
        let index2 = -1;
        while (++index2 < attributes.length) {
          const attribute = attributes[index2];
          if (attribute.type === 'JSXSpreadAttribute') {
            if (fields.length > 0) {
              objects.push({
                type: 'ObjectExpression',
                properties: fields
              });
              fields = [];
            }
            objects.push(attribute.argument);
            spread = true;
          } else {
            const prop = toProperty(attribute);
            if (automatic && prop.key.type === 'Identifier' && prop.key.name === 'key') {
              if (spread) {
                throw new Error('Expected `key` to come before any spread expressions');
              }
              key = prop.value;
            } else {
              fields.push(prop);
            }
          }
        }
      } else if (automatic) {
        imports.fragment = true;
        name = {
          type: 'Identifier',
          name: '_Fragment'
        };
      } else {
        name = toMemberExpression(annotations.jsxFrag || options.pragmaFrag || 'React.Fragment');
      }
      if (automatic) {
        if (children.length > 0) {
          fields.push({
            type: 'Property',
            key: {
              type: 'Identifier',
              name: 'children'
            },
            value:
              children.length > 1
                ? {
                    type: 'ArrayExpression',
                    elements: children
                  }
                : children[0],
            kind: 'init',
            method: false,
            shorthand: false,
            computed: false
          });
        }
      } else {
        parameters = children;
      }
      if (fields.length > 0) {
        objects.push({
          type: 'ObjectExpression',
          properties: fields
        });
      }
      let props;
      let callee;
      if (objects.length > 1) {
        if (objects[0].type !== 'ObjectExpression') {
          objects.unshift({
            type: 'ObjectExpression',
            properties: []
          });
        }
        props = {
          type: 'CallExpression',
          callee: toMemberExpression('Object.assign'),
          arguments: objects,
          optional: false
        };
      } else if (objects.length > 0) {
        props = objects[0];
      }
      if (automatic) {
        parameters.push(
          props || {
            type: 'ObjectExpression',
            properties: []
          }
        );
        if (key) {
          parameters.push(key);
        } else if (options.development) {
          parameters.push({
            type: 'Identifier',
            name: 'undefined'
          });
        }
        const isStaticChildren = children.length > 1;
        if (options.development) {
          imports.jsxDEV = true;
          callee = {
            type: 'Identifier',
            name: '_jsxDEV'
          };
          parameters.push({
            type: 'Literal',
            value: isStaticChildren
          });
          const source = {
            type: 'ObjectExpression',
            properties: [
              {
                type: 'Property',
                method: false,
                shorthand: false,
                computed: false,
                kind: 'init',
                key: {
                  type: 'Identifier',
                  name: 'fileName'
                },
                value: {
                  type: 'Literal',
                  value: options.filePath || '<source.js>'
                }
              }
            ]
          };
          if (node.loc) {
            source.properties.push(
              {
                type: 'Property',
                method: false,
                shorthand: false,
                computed: false,
                kind: 'init',
                key: {
                  type: 'Identifier',
                  name: 'lineNumber'
                },
                value: {
                  type: 'Literal',
                  value: node.loc.start.line
                }
              },
              {
                type: 'Property',
                method: false,
                shorthand: false,
                computed: false,
                kind: 'init',
                key: {
                  type: 'Identifier',
                  name: 'columnNumber'
                },
                value: {
                  type: 'Literal',
                  value: node.loc.start.column + 1
                }
              }
            );
          }
          parameters.push(source, {
            type: 'ThisExpression'
          });
        } else if (isStaticChildren) {
          imports.jsxs = true;
          callee = {
            type: 'Identifier',
            name: '_jsxs'
          };
        } else {
          imports.jsx = true;
          callee = {
            type: 'Identifier',
            name: '_jsx'
          };
        }
      } else {
        if (props || parameters.length > 0) {
          parameters.unshift(
            props || {
              type: 'Literal',
              value: null
            }
          );
        }
        callee = toMemberExpression(annotations.jsx || options.pragma || 'React.createElement');
      }
      parameters.unshift(name);
      this.replace(
        create(node, {
          type: 'CallExpression',
          callee,
          arguments: parameters,
          optional: false
        })
      );
    }
  });
  return tree;
}
function toProperty(node) {
  let value;
  if (node.value) {
    if (node.value.type === 'JSXExpressionContainer') {
      value = node.value.expression;
    } else {
      value = node.value;
      delete value.raw;
    }
  } else {
    value = {
      type: 'Literal',
      value: true
    };
  }
  return create(node, {
    type: 'Property',
    key: toIdentifier(node.name),
    value,
    kind: 'init',
    method: false,
    shorthand: false,
    computed: false
  });
}
function toIdentifier(node) {
  let replace;
  if (node.type === 'JSXMemberExpression') {
    const id = toIdentifier(node.property);
    replace = {
      type: 'MemberExpression',
      object: toIdentifier(node.object),
      property: id,
      computed: id.type === 'Literal',
      optional: false
    };
  } else if (node.type === 'JSXNamespacedName') {
    replace = {
      type: 'Literal',
      value: node.namespace.name + ':' + node.name.name
    };
  } else {
    replace = isIdentifierName(node.name)
      ? {
          type: 'Identifier',
          name: node.name
        }
      : {
          type: 'Literal',
          value: node.name
        };
  }
  return create(node, replace);
}
function toMemberExpression(id) {
  const identifiers = id.split('.');
  let index = -1;
  let result;
  while (++index < identifiers.length) {
    const prop = isIdentifierName(identifiers[index])
      ? {
          type: 'Identifier',
          name: identifiers[index]
        }
      : {
          type: 'Literal',
          value: identifiers[index]
        };
    result = result
      ? {
          type: 'MemberExpression',
          object: result,
          property: prop,
          computed: Boolean(index && prop.type === 'Literal'),
          optional: false
        }
      : prop;
  }
  return result;
}
function create(from, node) {
  const fields = ['start', 'end', 'loc', 'range', 'comments'];
  let index = -1;
  while (++index < fields.length) {
    const field = fields[index];
    if (field in from) {
      node[field] = from[field];
    }
  }
  return node;
}
export { buildJsx };
