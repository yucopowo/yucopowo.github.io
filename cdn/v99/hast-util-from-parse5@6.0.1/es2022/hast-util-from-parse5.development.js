/* esm.sh - esbuild bundle(hast-util-from-parse5@6.0.1) es2022 development */
import __web_namespaces$ from '/cdn/v99/web-namespaces@1.1.4/es2022/web-namespaces.development.js';
import __vfile_location$ from '/cdn/v99/vfile-location@3.2.0/es2022/vfile-location.development.js';
import __property_information_svg$ from '/cdn/v99/property-information@5.6.0/es2022/svg.development.js';
import __property_information_html$ from '/cdn/v99/property-information@5.6.0/es2022/html.development.js';
import __property_information_find$ from '/cdn/v99/property-information@5.6.0/es2022/find.development.js';
import __hastscript$ from '/cdn/v99/hastscript@6.0.0/es2022/hastscript.development.js';
import __hastscript_svg$ from '/cdn/v99/hastscript@6.0.0/es2022/svg.development.js';
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

// esm-build-8beae8e705b95b959021c0a8c52f2937dc2f6b3e-fa91f415/node_modules/hast-util-from-parse5/index.js
var require_hast_util_from_parse5 = __commonJS({
  'esm-build-8beae8e705b95b959021c0a8c52f2937dc2f6b3e-fa91f415/node_modules/hast-util-from-parse5/index.js'(
    exports,
    module
  ) {
    'use strict';

    var s = __hastscript_svg$;
    var h = __hastscript$;
    var find = __property_information_find$;
    var html = __property_information_html$;
    var svg = __property_information_svg$;
    var vfileLocation = __vfile_location$;
    var ns = __web_namespaces$;
    module.exports = wrapper;
    var own = {}.hasOwnProperty;
    var map = {
      '#document': root,
      '#document-fragment': root,
      '#text': text,
      '#comment': comment,
      '#documentType': doctype
    };
    function wrapper(ast, options) {
      var settings = options || {};
      var file;
      if (settings.messages) {
        file = settings;
        settings = {};
      } else {
        file = settings.file;
      }
      return transform(ast, {
        schema: settings.space === 'svg' ? svg : html,
        file,
        verbose: settings.verbose
      });
    }
    function transform(ast, config) {
      var schema = config.schema;
      var fn = own.call(map, ast.nodeName) ? map[ast.nodeName] : element;
      var children;
      var result;
      var position2;
      if (fn === element) {
        config.schema = ast.namespaceURI === ns.svg ? svg : html;
      }
      if (ast.childNodes) {
        children = nodes(ast.childNodes, config);
      }
      result = fn(ast, children, config);
      if (ast.sourceCodeLocation && config.file) {
        position2 = location(result, ast.sourceCodeLocation, config);
        if (position2) {
          config.location = true;
          result.position = position2;
        }
      }
      config.schema = schema;
      return result;
    }
    function nodes(children, config) {
      var index = -1;
      var result = [];
      while (++index < children.length) {
        result[index] = transform(children[index], config);
      }
      return result;
    }
    function root(ast, children, config) {
      var result = {
        type: 'root',
        children,
        data: {
          quirksMode: ast.mode === 'quirks' || ast.mode === 'limited-quirks'
        }
      };
      var doc;
      var location2;
      if (config.file && config.location) {
        doc = String(config.file);
        location2 = vfileLocation(doc);
        result.position = {
          start: location2.toPoint(0),
          end: location2.toPoint(doc.length)
        };
      }
      return result;
    }
    function doctype(ast) {
      return {
        type: 'doctype',
        name: ast.name || '',
        public: ast.publicId || null,
        system: ast.systemId || null
      };
    }
    function text(ast) {
      return {
        type: 'text',
        value: ast.value
      };
    }
    function comment(ast) {
      return {
        type: 'comment',
        value: ast.data
      };
    }
    function element(ast, children, config) {
      var fn = config.schema.space === 'svg' ? s : h;
      var props = {};
      var index = -1;
      var result;
      var attribute;
      var pos;
      var start;
      var end;
      while (++index < ast.attrs.length) {
        attribute = ast.attrs[index];
        props[(attribute.prefix ? attribute.prefix + ':' : '') + attribute.name] = attribute.value;
      }
      result = fn(ast.tagName, props, children);
      if (result.tagName === 'template' && 'content' in ast) {
        pos = ast.sourceCodeLocation;
        start = pos && pos.startTag && position(pos.startTag).end;
        end = pos && pos.endTag && position(pos.endTag).start;
        result.content = transform(ast.content, config);
        if ((start || end) && config.file) {
          result.content.position = {
            start,
            end
          };
        }
      }
      return result;
    }
    function location(node, location2, config) {
      var result = position(location2);
      var tail;
      var key;
      var props;
      if (node.type === 'element') {
        tail = node.children[node.children.length - 1];
        if (!location2.endTag && tail && tail.position && tail.position.end) {
          result.end = Object.assign({}, tail.position.end);
        }
        if (config.verbose) {
          props = {};
          for (key in location2.attrs) {
            props[find(config.schema, key).property] = position(location2.attrs[key]);
          }
          node.data = {
            position: {
              opening: position(location2.startTag),
              closing: location2.endTag ? position(location2.endTag) : null,
              properties: props
            }
          };
        }
      }
      return result;
    }
    function position(loc) {
      var start = point({
        line: loc.startLine,
        column: loc.startCol,
        offset: loc.startOffset
      });
      var end = point({
        line: loc.endLine,
        column: loc.endCol,
        offset: loc.endOffset
      });
      return start || end
        ? {
            start,
            end
          }
        : null;
    }
    function point(point2) {
      return point2.line && point2.column ? point2 : null;
    }
  }
});

// esm-build-8beae8e705b95b959021c0a8c52f2937dc2f6b3e-fa91f415/mod.js
var __module = __toESM(require_hast_util_from_parse5());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
