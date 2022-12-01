/* esm.sh - esbuild bundle(mdast-util-find-and-replace@2.1.0) es2022 development */
// esm-build-6cc7d3b1d264e4c12a2906200b89103be5ed09a7-d7859f1b/node_modules/mdast-util-find-and-replace/index.js
import escape from '/cdn/v78/escape-string-regexp@5.0.0/es2022/escape-string-regexp.development.js';
import { visitParents } from '/cdn/v78/unist-util-visit-parents@4.1.1/es2022/unist-util-visit-parents.development.js';
import { convert } from '/cdn/v78/unist-util-is@5.1.1/es2022/unist-util-is.development.js';
var own = {}.hasOwnProperty;
var findAndReplace = function(tree, find, replace, options) {
  let settings;
  let schema;
  if (typeof find === 'string' || find instanceof RegExp) {
    schema = [[find, replace]];
    settings = options;
  } else {
    schema = find;
    settings = replace;
  }
  if (!settings) {
    settings = {};
  }
  const ignored = convert(settings.ignore || []);
  const pairs = toPairs(schema);
  let pairIndex = -1;
  while (++pairIndex < pairs.length) {
    visitParents(tree, 'text', visitor);
  }
  return tree;
  function visitor(node, parents) {
    let index = -1;
    let grandparent;
    while (++index < parents.length) {
      const parent = parents[index];
      if (ignored(parent, grandparent ? grandparent.children.indexOf(parent) : void 0, grandparent)) {
        return;
      }
      grandparent = parent;
    }
    if (grandparent) {
      return handler(node, grandparent);
    }
  }
  function handler(node, parent) {
    const find2 = pairs[pairIndex][0];
    const replace2 = pairs[pairIndex][1];
    let start = 0;
    let index = parent.children.indexOf(node);
    let nodes = [];
    let position;
    find2.lastIndex = 0;
    let match = find2.exec(node.value);
    while (match) {
      position = match.index;
      let value = replace2(...match, {
        index: match.index,
        input: match.input
      });
      if (typeof value === 'string') {
        value =
          value.length > 0
            ? {
                type: 'text',
                value
              }
            : void 0;
      }
      if (value !== false) {
        if (start !== position) {
          nodes.push({
            type: 'text',
            value: node.value.slice(start, position)
          });
        }
        if (Array.isArray(value)) {
          nodes.push(...value);
        } else if (value) {
          nodes.push(value);
        }
        start = position + match[0].length;
      }
      if (!find2.global) {
        break;
      }
      match = find2.exec(node.value);
    }
    if (position === void 0) {
      nodes = [node];
      index--;
    } else {
      if (start < node.value.length) {
        nodes.push({
          type: 'text',
          value: node.value.slice(start)
        });
      }
      parent.children.splice(index, 1, ...nodes);
    }
    return index + nodes.length + 1;
  }
};
function toPairs(schema) {
  const result = [];
  if (typeof schema !== 'object') {
    throw new TypeError('Expected array or object as schema');
  }
  if (Array.isArray(schema)) {
    let index = -1;
    while (++index < schema.length) {
      result.push([toExpression(schema[index][0]), toFunction(schema[index][1])]);
    }
  } else {
    let key;
    for (key in schema) {
      if (own.call(schema, key)) {
        result.push([toExpression(key), toFunction(schema[key])]);
      }
    }
  }
  return result;
}
function toExpression(find) {
  return typeof find === 'string' ? new RegExp(escape(find), 'g') : find;
}
function toFunction(replace) {
  return typeof replace === 'function' ? replace : () => replace;
}
export { findAndReplace };
