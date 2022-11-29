/* esm.sh - esbuild bundle(hast-util-to-estree@2.1.0) es2022 development */
// esm-build-37f37829efa1e7a859d801ce752c425c5428dbf2-771ca58d/node_modules/hast-util-to-estree/lib/index.js
import { stringify as commas } from '/cdn/v99/comma-separated-tokens@2.0.3/es2022/comma-separated-tokens.development.js';
import { attachComments } from '/cdn/v99/estree-util-attach-comments@2.1.0/es2022/estree-util-attach-comments.development.js';
import {
  start as identifierStart,
  cont as identifierCont
} from '/cdn/v99/estree-util-is-identifier-name@2.0.1/es2022/estree-util-is-identifier-name.development.js';
import { whitespace } from '/cdn/v99/hast-util-whitespace@2.0.0/es2022/hast-util-whitespace.development.js';
import {
  html,
  svg,
  find,
  hastToReact
} from '/cdn/v99/property-information@6.2.0/es2022/property-information.development.js';
import { stringify as spaces } from '/cdn/v99/space-separated-tokens@2.0.2/es2022/space-separated-tokens.development.js';
import style from '/cdn/v99/style-to-object@0.3.0/es2022/style-to-object.development.js';
import { position } from '/cdn/v99/unist-util-position@4.0.3/es2022/unist-util-position.development.js';
import { zwitch } from '/cdn/v99/zwitch@2.0.4/es2022/zwitch.development.js';
var toReact = hastToReact;
var own = {}.hasOwnProperty;
var tableElements = /* @__PURE__ */ new Set(['table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td']);
function toEstree(tree, options = {}) {
  const context = {
    schema: options.space === 'svg' ? svg : html,
    comments: [],
    esm: [],
    handle: zwitch('type', {
      invalid,
      unknown,
      handlers: Object.assign(
        {},
        {
          comment,
          doctype: ignore,
          element,
          mdxjsEsm,
          mdxFlowExpression: mdxExpression,
          mdxJsxFlowElement: mdxJsxElement,
          mdxJsxTextElement: mdxJsxElement,
          mdxTextExpression: mdxExpression,
          root,
          text
        },
        options.handlers
      )
    })
  };
  let result = context.handle(tree, context);
  const body = context.esm;
  if (result) {
    if (result.type !== 'JSXFragment' && result.type !== 'JSXElement') {
      result = create(tree, {
        type: 'JSXFragment',
        openingFragment: {
          type: 'JSXOpeningFragment'
        },
        closingFragment: {
          type: 'JSXClosingFragment'
        },
        children: [result]
      });
    }
    body.push(
      create(tree, {
        type: 'ExpressionStatement',
        expression: result
      })
    );
  }
  return create(tree, {
    type: 'Program',
    body,
    sourceType: 'module',
    comments: context.comments
  });
}
function invalid(value) {
  throw new Error('Cannot handle value `' + value + '`, expected node');
}
function unknown(node) {
  throw new Error('Cannot handle unknown node `' + node.type + '`');
}
function ignore() {}
function comment(node, context) {
  const esnode = inherit(node, {
    type: 'Block',
    value: node.value
  });
  context.comments.push(esnode);
  return create(node, {
    type: 'JSXExpressionContainer',
    expression: create(node, {
      type: 'JSXEmptyExpression',
      comments: [
        Object.assign({}, esnode, {
          leading: false,
          trailing: true
        })
      ]
    })
  });
}
function element(node, context) {
  const parentSchema = context.schema;
  let schema = parentSchema;
  const props = node.properties || {};
  if (parentSchema.space === 'html' && node.tagName.toLowerCase() === 'svg') {
    schema = svg;
    context.schema = schema;
  }
  const children = all(node, context);
  const attributes = [];
  let prop;
  for (prop in props) {
    if (own.call(props, prop)) {
      let value = props[prop];
      const info = find(schema, prop);
      let attributeValue;
      if (
        value === void 0 ||
        value === null ||
        (typeof value === 'number' && Number.isNaN(value)) ||
        value === false ||
        (!value && info.boolean)
      ) {
        continue;
      }
      prop = info.space ? toReact[info.property] || info.property : info.attribute;
      if (Array.isArray(value)) {
        value = info.commaSeparated ? commas(value) : spaces(value);
      }
      if (prop === 'style') {
        const styleValue = typeof value === 'string' ? parseStyle(value, node.tagName) : value;
        const cssProperties = [];
        let cssProp;
        for (cssProp in styleValue) {
          if (own.call(styleValue, cssProp)) {
            cssProperties.push({
              type: 'Property',
              method: false,
              shorthand: false,
              computed: false,
              key: {
                type: 'Identifier',
                name: cssProp
              },
              value: {
                type: 'Literal',
                value: String(styleValue[cssProp])
              },
              kind: 'init'
            });
          }
        }
        attributeValue = {
          type: 'JSXExpressionContainer',
          expression: {
            type: 'ObjectExpression',
            properties: cssProperties
          }
        };
      } else if (value === true) {
        attributeValue = null;
      } else {
        attributeValue = {
          type: 'Literal',
          value: String(value)
        };
      }
      if (jsxIdentifierName(prop)) {
        attributes.push({
          type: 'JSXAttribute',
          name: {
            type: 'JSXIdentifier',
            name: prop
          },
          value: attributeValue
        });
      } else {
        attributes.push({
          type: 'JSXSpreadAttribute',
          argument: {
            type: 'ObjectExpression',
            properties: [
              {
                type: 'Property',
                method: false,
                shorthand: false,
                computed: false,
                key: {
                  type: 'Literal',
                  value: String(prop)
                },
                value: attributeValue || {
                  type: 'Literal',
                  value: true
                },
                kind: 'init'
              }
            ]
          }
        });
      }
    }
  }
  context.schema = parentSchema;
  return inherit(node, {
    type: 'JSXElement',
    openingElement: {
      type: 'JSXOpeningElement',
      attributes,
      name: createJsxName(node.tagName),
      selfClosing: children.length === 0
    },
    closingElement:
      children.length > 0
        ? {
            type: 'JSXClosingElement',
            name: createJsxName(node.tagName)
          }
        : null,
    children
  });
}
function mdxjsEsm(node, context) {
  const estree = node.data && node.data.estree;
  const comments = (estree && estree.comments) || [];
  if (estree) {
    context.comments.push(...comments);
    attachComments(estree, comments);
    context.esm.push(...estree.body);
  }
}
function mdxExpression(node, context) {
  const estree = node.data && node.data.estree;
  const comments = (estree && estree.comments) || [];
  let expression;
  if (estree) {
    context.comments.push(...comments);
    attachComments(estree, estree.comments);
    expression =
      (estree.body[0] && estree.body[0].type === 'ExpressionStatement' && estree.body[0].expression) || void 0;
  }
  return inherit(node, {
    type: 'JSXExpressionContainer',
    expression:
      expression ||
      create(node, {
        type: 'JSXEmptyExpression'
      })
  });
}
function mdxJsxElement(node, context) {
  const parentSchema = context.schema;
  let schema = parentSchema;
  const attrs = node.attributes || [];
  let index = -1;
  if (node.name && parentSchema.space === 'html' && node.name.toLowerCase() === 'svg') {
    schema = svg;
    context.schema = schema;
  }
  const children = all(node, context);
  const attributes = [];
  while (++index < attrs.length) {
    const attr = attrs[index];
    const value = attr.value;
    let attributeValue;
    if (attr.type === 'mdxJsxAttribute') {
      if (value === void 0 || value === null) {
        attributeValue = null;
      } else if (typeof value === 'object') {
        const estree = value.data && value.data.estree;
        const comments = (estree && estree.comments) || [];
        let expression;
        if (estree) {
          context.comments.push(...comments);
          attachComments(estree, estree.comments);
          expression =
            (estree.body[0] && estree.body[0].type === 'ExpressionStatement' && estree.body[0].expression) || void 0;
        }
        attributeValue = inherit(value, {
          type: 'JSXExpressionContainer',
          expression: expression || {
            type: 'JSXEmptyExpression'
          }
        });
      } else {
        attributeValue = {
          type: 'Literal',
          value: String(value)
        };
      }
      attributes.push(
        inherit(attr, {
          type: 'JSXAttribute',
          name: createJsxName(attr.name, true),
          value: attributeValue
        })
      );
    } else {
      const estree = attr.data && attr.data.estree;
      const comments = (estree && estree.comments) || [];
      let argumentValue;
      if (estree) {
        context.comments.push(...comments);
        attachComments(estree, estree.comments);
        argumentValue =
          (estree.body[0] &&
            estree.body[0].type === 'ExpressionStatement' &&
            estree.body[0].expression &&
            estree.body[0].expression.type === 'ObjectExpression' &&
            estree.body[0].expression.properties &&
            estree.body[0].expression.properties[0] &&
            estree.body[0].expression.properties[0].type === 'SpreadElement' &&
            estree.body[0].expression.properties[0].argument) ||
          void 0;
      }
      attributes.push(
        inherit(attr, {
          type: 'JSXSpreadAttribute',
          argument: argumentValue || {
            type: 'ObjectExpression',
            properties: []
          }
        })
      );
    }
  }
  context.schema = parentSchema;
  return inherit(
    node,
    node.name
      ? {
          type: 'JSXElement',
          openingElement: {
            type: 'JSXOpeningElement',
            attributes,
            name: createJsxName(node.name),
            selfClosing: children.length === 0
          },
          closingElement:
            children.length > 0
              ? {
                  type: 'JSXClosingElement',
                  name: createJsxName(node.name)
                }
              : null,
          children
        }
      : {
          type: 'JSXFragment',
          openingFragment: {
            type: 'JSXOpeningFragment'
          },
          closingFragment: {
            type: 'JSXClosingFragment'
          },
          children
        }
  );
}
function root(node, context) {
  const children = all(node, context);
  const cleanChildren = [];
  let index = -1;
  let queue;
  while (++index < children.length) {
    const child = children[index];
    if (
      child.type === 'JSXExpressionContainer' &&
      child.expression.type === 'Literal' &&
      whitespace(child.expression.value)
    ) {
      if (queue) queue.push(child);
    } else {
      if (queue) cleanChildren.push(...queue);
      cleanChildren.push(child);
      queue = [];
    }
  }
  return inherit(node, {
    type: 'JSXFragment',
    openingFragment: {
      type: 'JSXOpeningFragment'
    },
    closingFragment: {
      type: 'JSXClosingFragment'
    },
    children: cleanChildren
  });
}
function text(node) {
  const value = String(node.value || '');
  if (!value) return;
  return create(node, {
    type: 'JSXExpressionContainer',
    expression: inherit(node, {
      type: 'Literal',
      value
    })
  });
}
function all(parent, context) {
  const children = parent.children || [];
  let index = -1;
  const results = [];
  const ignoreLineBreak =
    context.schema.space === 'html' && parent.type === 'element' && tableElements.has(parent.tagName.toLowerCase());
  while (++index < children.length) {
    const child = children[index];
    if (ignoreLineBreak && child.type === 'text' && child.value === '\n') {
      continue;
    }
    const result = context.handle(child, context);
    if (Array.isArray(result)) {
      results.push(...result);
    } else if (result) {
      results.push(result);
    }
  }
  return results;
}
function inherit(hast, esnode) {
  const left = hast.data;
  let right;
  let key;
  create(hast, esnode);
  if (left) {
    for (key in left) {
      if (own.call(left, key) && key !== 'estree') {
        if (!right) right = {};
        right[key] = left[key];
      }
    }
    if (right) {
      esnode.data = right;
    }
  }
  return esnode;
}
function create(hast, esnode) {
  const p = position(hast);
  if (p.start.line && p.start.offset !== void 0 && p.end.offset !== void 0) {
    esnode.start = p.start.offset;
    esnode.end = p.end.offset;
    esnode.loc = {
      start: {
        line: p.start.line,
        column: p.start.column - 1
      },
      end: {
        line: p.end.line,
        column: p.end.column - 1
      }
    };
    esnode.range = [p.start.offset, p.end.offset];
  }
  return esnode;
}
var createJsxName = function(name, attribute) {
  if (!attribute && name.includes('.')) {
    const parts = name.split('.');
    let part = parts.shift();
    let node = {
      type: 'JSXIdentifier',
      name: part
    };
    while ((part = parts.shift())) {
      node = {
        type: 'JSXMemberExpression',
        object: node,
        property: {
          type: 'JSXIdentifier',
          name: part
        }
      };
    }
    return node;
  }
  if (name.includes(':')) {
    const parts = name.split(':');
    return {
      type: 'JSXNamespacedName',
      namespace: {
        type: 'JSXIdentifier',
        name: parts[0]
      },
      name: {
        type: 'JSXIdentifier',
        name: parts[1]
      }
    };
  }
  return {
    type: 'JSXIdentifier',
    name
  };
};
function parseStyle(value, tagName) {
  const result = {};
  try {
    style(value, iterator);
  } catch (error) {
    const exception = error;
    exception.message = tagName + '[style]' + exception.message.slice('undefined'.length);
    throw error;
  }
  return result;
  function iterator(name, value2) {
    if (name.slice(0, 4) === '-ms-') name = 'ms-' + name.slice(4);
    result[name.replace(/-([a-z])/g, styleReplacer)] = value2;
  }
}
function styleReplacer(_, $1) {
  return $1.toUpperCase();
}
function jsxIdentifierName(name) {
  let index = -1;
  while (++index < name.length) {
    if (!(index ? cont : identifierStart)(name.charCodeAt(index))) return false;
  }
  return index > 0;
  function cont(code) {
    return identifierCont(code) || code === 45;
  }
}
export { toEstree };
