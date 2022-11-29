/* esm.sh - esbuild bundle(mdast-util-to-hast@10.0.1) es2022 development */
import __unist_util_visit$ from '/cdn/v99/unist-util-visit@2.0.3/es2022/unist-util-visit.development.js';
import __unist_builder$ from '/cdn/v99/unist-builder@2.0.3/es2022/unist-builder.development.js';
import __mdurl_encode$ from '/cdn/v99/mdurl@1.0.1/es2022/encode.development.js';
import __mdast_util_definitions$ from '/cdn/v99/mdast-util-definitions@4.0.0/es2022/mdast-util-definitions.development.js';
import __unist_util_generated$ from '/cdn/v99/unist-util-generated@1.1.6/es2022/unist-util-generated.development.js';
import __unist_util_position$ from '/cdn/v99/unist-util-position@3.1.0/es2022/unist-util-position.development.js';
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

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/all.js
var require_all = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/all.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = all;
    var one = require_one();
    function all(h, parent) {
      var nodes = parent.children || [];
      var length = nodes.length;
      var values = [];
      var index = -1;
      var result;
      var head;
      while (++index < length) {
        result = one(h, nodes[index], parent);
        if (result) {
          if (index && nodes[index - 1].type === 'break') {
            if (result.value) {
              result.value = result.value.replace(/^\s+/, '');
            }
            head = result.children && result.children[0];
            if (head && head.value) {
              head.value = head.value.replace(/^\s+/, '');
            }
          }
          values = values.concat(result);
        }
      }
      return values;
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/one.js
var require_one = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/one.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = one;
    var u = __unist_builder$;
    var all = require_all();
    var own = {}.hasOwnProperty;
    function unknown(h, node) {
      if (text(node)) {
        return h.augment(node, u('text', node.value));
      }
      return h(node, 'div', all(h, node));
    }
    function one(h, node, parent) {
      var type = node && node.type;
      var fn = own.call(h.handlers, type) ? h.handlers[type] : h.unknownHandler;
      if (!type) {
        throw new Error('Expected node, got `' + node + '`');
      }
      return (typeof fn === 'function' ? fn : unknown)(h, node, parent);
    }
    function text(node) {
      var data = node.data || {};
      if (own.call(data, 'hName') || own.call(data, 'hProperties') || own.call(data, 'hChildren')) {
        return false;
      }
      return 'value' in node;
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
var require_thematic_break = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = thematicBreak;
    function thematicBreak(h, node) {
      return h(node, 'hr');
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/wrap.js
var require_wrap = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/wrap.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = wrap;
    var u = __unist_builder$;
    function wrap(nodes, loose) {
      var result = [];
      var index = -1;
      var length = nodes.length;
      if (loose) {
        result.push(u('text', '\n'));
      }
      while (++index < length) {
        if (index) {
          result.push(u('text', '\n'));
        }
        result.push(nodes[index]);
      }
      if (loose && nodes.length > 0) {
        result.push(u('text', '\n'));
      }
      return result;
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/list.js
var require_list = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/list.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = list;
    var wrap = require_wrap();
    var all = require_all();
    function list(h, node) {
      var props = {};
      var name = node.ordered ? 'ol' : 'ul';
      var items;
      var index = -1;
      var length;
      if (typeof node.start === 'number' && node.start !== 1) {
        props.start = node.start;
      }
      items = all(h, node);
      length = items.length;
      while (++index < length) {
        if (items[index].properties.className && items[index].properties.className.indexOf('task-list-item') !== -1) {
          props.className = ['contains-task-list'];
          break;
        }
      }
      return h(node, name, props, wrap(items, true));
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/footer.js
var require_footer = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/footer.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = generateFootnotes;
    var thematicBreak = require_thematic_break();
    var list = require_list();
    var wrap = require_wrap();
    function generateFootnotes(h) {
      var footnoteById = h.footnoteById;
      var footnoteOrder = h.footnoteOrder;
      var length = footnoteOrder.length;
      var index = -1;
      var listItems = [];
      var def;
      var backReference;
      var content;
      var tail;
      while (++index < length) {
        def = footnoteById[footnoteOrder[index].toUpperCase()];
        if (!def) {
          continue;
        }
        content = def.children.concat();
        tail = content[content.length - 1];
        backReference = {
          type: 'link',
          url: '#fnref-' + def.identifier,
          data: {
            hProperties: {
              className: ['footnote-backref']
            }
          },
          children: [
            {
              type: 'text',
              value: '\u21A9'
            }
          ]
        };
        if (!tail || tail.type !== 'paragraph') {
          tail = {
            type: 'paragraph',
            children: []
          };
          content.push(tail);
        }
        tail.children.push(backReference);
        listItems.push({
          type: 'listItem',
          data: {
            hProperties: {
              id: 'fn-' + def.identifier
            }
          },
          children: content,
          position: def.position
        });
      }
      if (listItems.length === 0) {
        return null;
      }
      return h(
        null,
        'div',
        {
          className: ['footnotes']
        },
        wrap(
          [
            thematicBreak(h),
            list(h, {
              type: 'list',
              ordered: true,
              children: listItems
            })
          ],
          true
        )
      );
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
var require_blockquote = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/blockquote.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = blockquote;
    var wrap = require_wrap();
    var all = require_all();
    function blockquote(h, node) {
      return h(node, 'blockquote', wrap(all(h, node), true));
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/break.js
var require_break = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/break.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = hardBreak;
    var u = __unist_builder$;
    function hardBreak(h, node) {
      return [h(node, 'br'), u('text', '\n')];
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/code.js
var require_code = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/code.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = code;
    var u = __unist_builder$;
    function code(h, node) {
      var value = node.value ? node.value + '\n' : '';
      var lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/);
      var props = {};
      if (lang) {
        props.className = ['language-' + lang];
      }
      return h(node.position, 'pre', [h(node, 'code', props, [u('text', value)])]);
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/delete.js
var require_delete = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/delete.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = strikethrough;
    var all = require_all();
    function strikethrough(h, node) {
      return h(node, 'del', all(h, node));
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
var require_emphasis = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/emphasis.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = emphasis;
    var all = require_all();
    function emphasis(h, node) {
      return h(node, 'em', all(h, node));
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
var require_footnote_reference = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = footnoteReference;
    var u = __unist_builder$;
    function footnoteReference(h, node) {
      var footnoteOrder = h.footnoteOrder;
      var identifier = String(node.identifier);
      if (footnoteOrder.indexOf(identifier) === -1) {
        footnoteOrder.push(identifier);
      }
      return h(
        node.position,
        'sup',
        {
          id: 'fnref-' + identifier
        },
        [
          h(
            node,
            'a',
            {
              href: '#fn-' + identifier,
              className: ['footnote-ref']
            },
            [u('text', node.label || identifier)]
          )
        ]
      );
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/footnote.js
var require_footnote = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/footnote.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = footnote;
    var footnoteReference = require_footnote_reference();
    function footnote(h, node) {
      var footnoteById = h.footnoteById;
      var footnoteOrder = h.footnoteOrder;
      var identifier = 1;
      while (identifier in footnoteById) {
        identifier++;
      }
      identifier = String(identifier);
      footnoteOrder.push(identifier);
      footnoteById[identifier] = {
        type: 'footnoteDefinition',
        identifier,
        children: [
          {
            type: 'paragraph',
            children: node.children
          }
        ],
        position: node.position
      };
      return footnoteReference(h, {
        type: 'footnoteReference',
        identifier,
        position: node.position
      });
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/heading.js
var require_heading = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/heading.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = heading;
    var all = require_all();
    function heading(h, node) {
      return h(node, 'h' + node.depth, all(h, node));
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/html.js
var require_html = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/html.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = html;
    var u = __unist_builder$;
    function html(h, node) {
      return h.dangerous ? h.augment(node, u('raw', node.value)) : null;
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/revert.js
var require_revert = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/revert.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = revert;
    var u = __unist_builder$;
    var all = require_all();
    function revert(h, node) {
      var subtype = node.referenceType;
      var suffix = ']';
      var contents;
      var head;
      var tail;
      if (subtype === 'collapsed') {
        suffix += '[]';
      } else if (subtype === 'full') {
        suffix += '[' + (node.label || node.identifier) + ']';
      }
      if (node.type === 'imageReference') {
        return u('text', '![' + node.alt + suffix);
      }
      contents = all(h, node);
      head = contents[0];
      if (head && head.type === 'text') {
        head.value = '[' + head.value;
      } else {
        contents.unshift(u('text', '['));
      }
      tail = contents[contents.length - 1];
      if (tail && tail.type === 'text') {
        tail.value += suffix;
      } else {
        contents.push(u('text', suffix));
      }
      return contents;
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
var require_image_reference = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = imageReference;
    var normalize = __mdurl_encode$;
    var revert = require_revert();
    function imageReference(h, node) {
      var def = h.definition(node.identifier);
      var props;
      if (!def) {
        return revert(h, node);
      }
      props = {
        src: normalize(def.url || ''),
        alt: node.alt
      };
      if (def.title !== null && def.title !== void 0) {
        props.title = def.title;
      }
      return h(node, 'img', props);
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/image.js
var require_image = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/image.js'(
    exports,
    module
  ) {
    'use strict';

    var normalize = __mdurl_encode$;
    module.exports = image;
    function image(h, node) {
      var props = {
        src: normalize(node.url),
        alt: node.alt
      };
      if (node.title !== null && node.title !== void 0) {
        props.title = node.title;
      }
      return h(node, 'img', props);
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
var require_inline_code = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/inline-code.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = inlineCode;
    var u = __unist_builder$;
    function inlineCode(h, node) {
      var value = node.value.replace(/\r?\n|\r/g, ' ');
      return h(node, 'code', [u('text', value)]);
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
var require_link_reference = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/link-reference.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = linkReference;
    var normalize = __mdurl_encode$;
    var revert = require_revert();
    var all = require_all();
    function linkReference(h, node) {
      var def = h.definition(node.identifier);
      var props;
      if (!def) {
        return revert(h, node);
      }
      props = {
        href: normalize(def.url || '')
      };
      if (def.title !== null && def.title !== void 0) {
        props.title = def.title;
      }
      return h(node, 'a', props, all(h, node));
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/link.js
var require_link = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/link.js'(
    exports,
    module
  ) {
    'use strict';

    var normalize = __mdurl_encode$;
    var all = require_all();
    module.exports = link;
    function link(h, node) {
      var props = {
        href: normalize(node.url)
      };
      if (node.title !== null && node.title !== void 0) {
        props.title = node.title;
      }
      return h(node, 'a', props, all(h, node));
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/list-item.js
var require_list_item = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/list-item.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = listItem;
    var u = __unist_builder$;
    var all = require_all();
    function listItem(h, node, parent) {
      var result = all(h, node);
      var head = result[0];
      var loose = parent ? listLoose(parent) : listItemLoose(node);
      var props = {};
      var wrapped = [];
      var length;
      var index;
      var child;
      if (typeof node.checked === 'boolean') {
        if (!head || head.tagName !== 'p') {
          head = h(null, 'p', []);
          result.unshift(head);
        }
        if (head.children.length > 0) {
          head.children.unshift(u('text', ' '));
        }
        head.children.unshift(
          h(null, 'input', {
            type: 'checkbox',
            checked: node.checked,
            disabled: true
          })
        );
        props.className = ['task-list-item'];
      }
      length = result.length;
      index = -1;
      while (++index < length) {
        child = result[index];
        if (loose || index !== 0 || child.tagName !== 'p') {
          wrapped.push(u('text', '\n'));
        }
        if (child.tagName === 'p' && !loose) {
          wrapped = wrapped.concat(child.children);
        } else {
          wrapped.push(child);
        }
      }
      if (length && (loose || child.tagName !== 'p')) {
        wrapped.push(u('text', '\n'));
      }
      return h(node, 'li', props, wrapped);
    }
    function listLoose(node) {
      var loose = node.spread;
      var children = node.children;
      var length = children.length;
      var index = -1;
      while (!loose && ++index < length) {
        loose = listItemLoose(children[index]);
      }
      return loose;
    }
    function listItemLoose(node) {
      var spread = node.spread;
      return spread === void 0 || spread === null ? node.children.length > 1 : spread;
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
var require_paragraph = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/paragraph.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = paragraph;
    var all = require_all();
    function paragraph(h, node) {
      return h(node, 'p', all(h, node));
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/root.js
var require_root = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/root.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = root;
    var u = __unist_builder$;
    var wrap = require_wrap();
    var all = require_all();
    function root(h, node) {
      return h.augment(node, u('root', wrap(all(h, node))));
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/strong.js
var require_strong = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/strong.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = strong;
    var all = require_all();
    function strong(h, node) {
      return h(node, 'strong', all(h, node));
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/table.js
var require_table = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/table.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = table;
    var position = __unist_util_position$;
    var wrap = require_wrap();
    var all = require_all();
    function table(h, node) {
      var rows = node.children;
      var index = rows.length;
      var align = node.align || [];
      var alignLength = align.length;
      var result = [];
      var pos;
      var row;
      var out;
      var name;
      var cell;
      while (index--) {
        row = rows[index].children;
        name = index === 0 ? 'th' : 'td';
        pos = alignLength || row.length;
        out = [];
        while (pos--) {
          cell = row[pos];
          out[pos] = h(
            cell,
            name,
            {
              align: align[pos]
            },
            cell ? all(h, cell) : []
          );
        }
        result[index] = h(rows[index], 'tr', wrap(out, true));
      }
      return h(
        node,
        'table',
        wrap(
          [h(result[0].position, 'thead', wrap([result[0]], true))].concat(
            result[1]
              ? h(
                  {
                    start: position.start(result[1]),
                    end: position.end(result[result.length - 1])
                  },
                  'tbody',
                  wrap(result.slice(1), true)
                )
              : []
          ),
          true
        )
      );
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/text.js
var require_text = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/text.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = text;
    var u = __unist_builder$;
    function text(h, node) {
      return h.augment(node, u('text', String(node.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, '$1')));
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/index.js
var require_handlers = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/handlers/index.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = {
      blockquote: require_blockquote(),
      break: require_break(),
      code: require_code(),
      delete: require_delete(),
      emphasis: require_emphasis(),
      footnoteReference: require_footnote_reference(),
      footnote: require_footnote(),
      heading: require_heading(),
      html: require_html(),
      imageReference: require_image_reference(),
      image: require_image(),
      inlineCode: require_inline_code(),
      linkReference: require_link_reference(),
      link: require_link(),
      listItem: require_list_item(),
      list: require_list(),
      paragraph: require_paragraph(),
      root: require_root(),
      strong: require_strong(),
      table: require_table(),
      text: require_text(),
      thematicBreak: require_thematic_break(),
      toml: ignore,
      yaml: ignore,
      definition: ignore,
      footnoteDefinition: ignore
    };
    function ignore() {
      return null;
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/index.js
var require_lib = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/lib/index.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = toHast;
    var u = __unist_builder$;
    var visit = __unist_util_visit$;
    var position = __unist_util_position$;
    var generated = __unist_util_generated$;
    var definitions = __mdast_util_definitions$;
    var one = require_one();
    var footer = require_footer();
    var handlers = require_handlers();
    var own = {}.hasOwnProperty;
    var deprecationWarningIssued = false;
    function factory(tree, options) {
      var settings = options || {};
      if (settings.allowDangerousHTML !== void 0 && !deprecationWarningIssued) {
        deprecationWarningIssued = true;
        console.warn(
          'mdast-util-to-hast: deprecation: `allowDangerousHTML` is nonstandard, use `allowDangerousHtml` instead'
        );
      }
      var dangerous = settings.allowDangerousHtml || settings.allowDangerousHTML;
      var footnoteById = {};
      h.dangerous = dangerous;
      h.definition = definitions(tree);
      h.footnoteById = footnoteById;
      h.footnoteOrder = [];
      h.augment = augment;
      h.handlers = Object.assign({}, handlers, settings.handlers);
      h.unknownHandler = settings.unknownHandler;
      visit(tree, 'footnoteDefinition', onfootnotedefinition);
      return h;
      function augment(left, right) {
        var data;
        var ctx;
        if (left && 'data' in left) {
          data = left.data;
          if (data.hName) {
            if (right.type !== 'element') {
              right = {
                type: 'element',
                tagName: '',
                properties: {},
                children: []
              };
            }
            right.tagName = data.hName;
          }
          if (right.type === 'element' && data.hProperties) {
            right.properties = Object.assign({}, right.properties, data.hProperties);
          }
          if (right.children && data.hChildren) {
            right.children = data.hChildren;
          }
        }
        ctx =
          left && left.position
            ? left
            : {
                position: left
              };
        if (!generated(ctx)) {
          right.position = {
            start: position.start(ctx),
            end: position.end(ctx)
          };
        }
        return right;
      }
      function h(node, tagName, props, children) {
        if ((children === void 0 || children === null) && typeof props === 'object' && 'length' in props) {
          children = props;
          props = {};
        }
        return augment(node, {
          type: 'element',
          tagName,
          properties: props || {},
          children: children || []
        });
      }
      function onfootnotedefinition(definition) {
        var id = String(definition.identifier).toUpperCase();
        if (!own.call(footnoteById, id)) {
          footnoteById[id] = definition;
        }
      }
    }
    function toHast(tree, options) {
      var h = factory(tree, options);
      var node = one(h, tree);
      var foot = footer(h);
      if (foot) {
        node.children = node.children.concat(u('text', '\n'), foot);
      }
      return node;
    }
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/index.js
var require_mdast_util_to_hast = __commonJS({
  'esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/node_modules/mdast-util-to-hast/index.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = require_lib();
  }
});

// esm-build-793f0cfc8682bab40c82eb9c95a648474f82aad8-91eeecc1/mod.js
var __module = __toESM(require_mdast_util_to_hast());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
