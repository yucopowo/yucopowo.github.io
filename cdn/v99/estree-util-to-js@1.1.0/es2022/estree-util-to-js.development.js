/* esm.sh - esbuild bundle(estree-util-to-js@1.1.0) es2022 development */
// esm-build-7d67dae28f8d0bca92eb797ae0f7bfa3ad27953c-d67d055c/node_modules/estree-util-to-js/lib/index.js
import { GENERATOR, generate } from '/cdn/v99/astring@1.8.3/es2022/astring.development.js';
var toJs = function(tree, options = {}) {
  const { SourceMapGenerator, filePath, handlers } = options;
  const sourceMap = SourceMapGenerator
    ? new SourceMapGenerator({
        file: filePath || '<unknown>.js'
      })
    : void 0;
  const value = generate(tree, {
    comments: true,
    generator: {
      ...GENERATOR,
      ...handlers
    },
    sourceMap
  });
  const map = sourceMap ? sourceMap.toJSON() : void 0;
  return {
    value,
    map
  };
};

// esm-build-7d67dae28f8d0bca92eb797ae0f7bfa3ad27953c-d67d055c/node_modules/estree-util-to-js/lib/jsx.js
var jsx = {
  JSXAttribute,
  JSXClosingElement,
  JSXClosingFragment,
  JSXElement,
  JSXEmptyExpression,
  JSXExpressionContainer,
  JSXFragment,
  JSXIdentifier,
  JSXMemberExpression,
  JSXNamespacedName,
  JSXOpeningElement,
  JSXOpeningFragment,
  JSXSpreadAttribute,
  JSXText
};
function JSXAttribute(node, state) {
  this[node.name.type](node.name, state);
  if (node.value !== void 0 && node.value !== null) {
    state.write('=');
    if (node.value.type === 'Literal') {
      state.write('"' + encodeJsx(String(node.value.value)).replace(/"/g, '&quot;') + '"', node);
    } else {
      this[node.value.type](node.value, state);
    }
  }
}
function JSXClosingElement(node, state) {
  state.write('</');
  this[node.name.type](node.name, state);
  state.write('>');
}
function JSXClosingFragment(node, state) {
  state.write('</>', node);
}
function JSXElement(node, state) {
  let index = -1;
  this[node.openingElement.type](node.openingElement, state);
  if (node.children) {
    while (++index < node.children.length) {
      const child = node.children[index];
      if (child.type === 'JSXSpreadChild') {
        throw new Error('JSX spread children are not supported');
      }
      this[child.type](child, state);
    }
  }
  if (node.closingElement) {
    this[node.closingElement.type](node.closingElement, state);
  }
}
function JSXEmptyExpression() {}
function JSXExpressionContainer(node, state) {
  state.write('{');
  this[node.expression.type](node.expression, state);
  state.write('}');
}
function JSXFragment(node, state) {
  let index = -1;
  this[node.openingFragment.type](node.openingFragment, state);
  if (node.children) {
    while (++index < node.children.length) {
      const child = node.children[index];
      if (child.type === 'JSXSpreadChild') {
        throw new Error('JSX spread children are not supported');
      }
      this[child.type](child, state);
    }
  }
  this[node.closingFragment.type](node.closingFragment, state);
}
function JSXIdentifier(node, state) {
  state.write(node.name, node);
}
function JSXMemberExpression(node, state) {
  this[node.object.type](node.object, state);
  state.write('.');
  this[node.property.type](node.property, state);
}
function JSXNamespacedName(node, state) {
  this[node.namespace.type](node.namespace, state);
  state.write(':');
  this[node.name.type](node.name, state);
}
function JSXOpeningElement(node, state) {
  let index = -1;
  state.write('<');
  this[node.name.type](node.name, state);
  if (node.attributes) {
    while (++index < node.attributes.length) {
      state.write(' ');
      this[node.attributes[index].type](node.attributes[index], state);
    }
  }
  state.write(node.selfClosing ? ' />' : '>');
}
function JSXOpeningFragment(node, state) {
  state.write('<>', node);
}
function JSXSpreadAttribute(node, state) {
  state.write('{');
  this.SpreadElement(node, state);
  state.write('}');
}
function JSXText(node, state) {
  state.write(
    encodeJsx(node.value).replace(/[<>{}]/g, $0 =>
      $0 === '<' ? '&lt;' : $0 === '>' ? '&gt;' : $0 === '{' ? '&#123;' : '&#125;'
    ),
    node
  );
}
function encodeJsx(value) {
  return value.replace(/&(?=[#a-z])/gi, '&amp;');
}
export { jsx, toJs };