/* esm.sh - esbuild bundle(remark-footnotes@2.0.0) es2022 development */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
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

// esm-build-8745b1574b26b6d57d426d92de50363a9d1d6d7c-fc2864a3/node_modules/remark-footnotes/index.js
var require_remark_footnotes = __commonJS({
  'esm-build-8745b1574b26b6d57d426d92de50363a9d1d6d7c-fc2864a3/node_modules/remark-footnotes/index.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = footnotes;
    var tab = 9;
    var lineFeed = 10;
    var space = 32;
    var exclamationMark = 33;
    var colon = 58;
    var leftSquareBracket = 91;
    var backslash = 92;
    var rightSquareBracket = 93;
    var caret = 94;
    var graveAccent = 96;
    var tabSize = 4;
    var maxSlice = 1024;
    function footnotes(options) {
      var parser = this.Parser;
      var compiler = this.Compiler;
      if (isRemarkParser(parser)) {
        attachParser(parser, options);
      }
      if (isRemarkCompiler(compiler)) {
        attachCompiler(compiler);
      }
    }
    function isRemarkParser(parser) {
      return Boolean(parser && parser.prototype && parser.prototype.blockTokenizers);
    }
    function isRemarkCompiler(compiler) {
      return Boolean(compiler && compiler.prototype && compiler.prototype.visitors);
    }
    function attachParser(parser, options) {
      var settings = options || {};
      var proto = parser.prototype;
      var blocks = proto.blockTokenizers;
      var spans = proto.inlineTokenizers;
      var blockMethods = proto.blockMethods;
      var inlineMethods = proto.inlineMethods;
      var originalDefinition = blocks.definition;
      var originalReference = spans.reference;
      var interruptors = [];
      var index = -1;
      var length = blockMethods.length;
      var method;
      while (++index < length) {
        method = blockMethods[index];
        if (
          method === 'newline' ||
          method === 'indentedCode' ||
          method === 'paragraph' ||
          method === 'footnoteDefinition'
        ) {
          continue;
        }
        interruptors.push([method]);
      }
      interruptors.push(['footnoteDefinition']);
      if (settings.inlineNotes) {
        before(inlineMethods, 'reference', 'inlineNote');
        spans.inlineNote = footnote;
      }
      before(blockMethods, 'definition', 'footnoteDefinition');
      before(inlineMethods, 'reference', 'footnoteCall');
      blocks.definition = definition;
      blocks.footnoteDefinition = footnoteDefinition;
      spans.footnoteCall = footnoteCall;
      spans.reference = reference;
      proto.interruptFootnoteDefinition = interruptors;
      reference.locator = originalReference.locator;
      footnoteCall.locator = locateFootnoteCall;
      footnote.locator = locateFootnote;
      function footnoteDefinition(eat, value, silent) {
        var self = this;
        var interruptors2 = self.interruptFootnoteDefinition;
        var offsets = self.offset;
        var length2 = value.length + 1;
        var index2 = 0;
        var content = [];
        var label;
        var labelStart;
        var labelEnd;
        var code;
        var now;
        var add;
        var exit;
        var children;
        var start;
        var indent;
        var contentStart;
        var lines;
        var line;
        while (index2 < length2) {
          code = value.charCodeAt(index2);
          if (code !== tab && code !== space) break;
          index2++;
        }
        if (value.charCodeAt(index2++) !== leftSquareBracket) return;
        if (value.charCodeAt(index2++) !== caret) return;
        labelStart = index2;
        while (index2 < length2) {
          code = value.charCodeAt(index2);
          if (code !== code || code === lineFeed || code === tab || code === space) {
            return;
          }
          if (code === rightSquareBracket) {
            labelEnd = index2;
            index2++;
            break;
          }
          index2++;
        }
        if (labelEnd === void 0 || labelStart === labelEnd || value.charCodeAt(index2++) !== colon) {
          return;
        }
        if (silent) {
          return true;
        }
        label = value.slice(labelStart, labelEnd);
        now = eat.now();
        start = 0;
        indent = 0;
        contentStart = index2;
        lines = [];
        while (index2 < length2) {
          code = value.charCodeAt(index2);
          if (code !== code || code === lineFeed) {
            line = {
              start,
              contentStart: contentStart || index2,
              contentEnd: index2,
              end: index2
            };
            lines.push(line);
            if (code === lineFeed) {
              start = index2 + 1;
              indent = 0;
              contentStart = void 0;
              line.end = start;
            }
          } else if (indent !== void 0) {
            if (code === space || code === tab) {
              indent += code === space ? 1 : tabSize - (indent % tabSize);
              if (indent > tabSize) {
                indent = void 0;
                contentStart = index2;
              }
            } else {
              if (
                indent < tabSize &&
                line &&
                (line.contentStart === line.contentEnd ||
                  interrupt(interruptors2, blocks, self, [eat, value.slice(index2, maxSlice), true]))
              ) {
                break;
              }
              indent = void 0;
              contentStart = index2;
            }
          }
          index2++;
        }
        index2 = -1;
        length2 = lines.length;
        while (length2 > 0) {
          line = lines[length2 - 1];
          if (line.contentStart !== line.contentEnd) {
            break;
          }
          length2--;
        }
        add = eat(value.slice(0, line.contentEnd));
        while (++index2 < length2) {
          line = lines[index2];
          offsets[now.line + index2] = (offsets[now.line + index2] || 0) + (line.contentStart - line.start);
          content.push(value.slice(line.contentStart, line.end));
        }
        exit = self.enterBlock();
        children = self.tokenizeBlock(content.join(''), now);
        exit();
        return add({
          type: 'footnoteDefinition',
          identifier: label.toLowerCase(),
          label,
          children
        });
      }
      function footnoteCall(eat, value, silent) {
        var length2 = value.length + 1;
        var index2 = 0;
        var label;
        var labelStart;
        var labelEnd;
        var code;
        if (value.charCodeAt(index2++) !== leftSquareBracket) return;
        if (value.charCodeAt(index2++) !== caret) return;
        labelStart = index2;
        while (index2 < length2) {
          code = value.charCodeAt(index2);
          if (code !== code || code === lineFeed || code === tab || code === space) {
            return;
          }
          if (code === rightSquareBracket) {
            labelEnd = index2;
            index2++;
            break;
          }
          index2++;
        }
        if (labelEnd === void 0 || labelStart === labelEnd) {
          return;
        }
        if (silent) {
          return true;
        }
        label = value.slice(labelStart, labelEnd);
        return eat(value.slice(0, index2))({
          type: 'footnoteReference',
          identifier: label.toLowerCase(),
          label
        });
      }
      function footnote(eat, value, silent) {
        var self = this;
        var length2 = value.length + 1;
        var index2 = 0;
        var balance = 0;
        var now;
        var code;
        var contentStart;
        var contentEnd;
        var fenceStart;
        var fenceOpenSize;
        var fenceCloseSize;
        if (value.charCodeAt(index2++) !== caret) return;
        if (value.charCodeAt(index2++) !== leftSquareBracket) return;
        contentStart = index2;
        while (index2 < length2) {
          code = value.charCodeAt(index2);
          if (code !== code) {
            return;
          }
          if (fenceOpenSize === void 0) {
            if (code === backslash) {
              index2 += 2;
            } else if (code === leftSquareBracket) {
              balance++;
              index2++;
            } else if (code === rightSquareBracket) {
              if (balance === 0) {
                contentEnd = index2;
                index2++;
                break;
              } else {
                balance--;
                index2++;
              }
            } else if (code === graveAccent) {
              fenceStart = index2;
              fenceOpenSize = 1;
              while (value.charCodeAt(fenceStart + fenceOpenSize) === graveAccent) {
                fenceOpenSize++;
              }
              index2 += fenceOpenSize;
            } else {
              index2++;
            }
          } else {
            if (code === graveAccent) {
              fenceStart = index2;
              fenceCloseSize = 1;
              while (value.charCodeAt(fenceStart + fenceCloseSize) === graveAccent) {
                fenceCloseSize++;
              }
              index2 += fenceCloseSize;
              if (fenceOpenSize === fenceCloseSize) {
                fenceOpenSize = void 0;
              }
              fenceCloseSize = void 0;
            } else {
              index2++;
            }
          }
        }
        if (contentEnd === void 0) {
          return;
        }
        if (silent) {
          return true;
        }
        now = eat.now();
        now.column += 2;
        now.offset += 2;
        return eat(value.slice(0, index2))({
          type: 'footnote',
          children: self.tokenizeInline(value.slice(contentStart, contentEnd), now)
        });
      }
      function reference(eat, value, silent) {
        var index2 = 0;
        if (value.charCodeAt(index2) === exclamationMark) index2++;
        if (value.charCodeAt(index2) !== leftSquareBracket) return;
        if (value.charCodeAt(index2 + 1) === caret) return;
        return originalReference.call(this, eat, value, silent);
      }
      function definition(eat, value, silent) {
        var index2 = 0;
        var code = value.charCodeAt(index2);
        while (code === space || code === tab) code = value.charCodeAt(++index2);
        if (code !== leftSquareBracket) return;
        if (value.charCodeAt(index2 + 1) === caret) return;
        return originalDefinition.call(this, eat, value, silent);
      }
      function locateFootnoteCall(value, from) {
        return value.indexOf('[', from);
      }
      function locateFootnote(value, from) {
        return value.indexOf('^[', from);
      }
    }
    function attachCompiler(compiler) {
      var serializers = compiler.prototype.visitors;
      var indent = '    ';
      serializers.footnote = footnote;
      serializers.footnoteReference = footnoteReference;
      serializers.footnoteDefinition = footnoteDefinition;
      function footnote(node) {
        return '^[' + this.all(node).join('') + ']';
      }
      function footnoteReference(node) {
        return '[^' + (node.label || node.identifier) + ']';
      }
      function footnoteDefinition(node) {
        var lines = this.all(node)
          .join('\n\n')
          .split('\n');
        var index = 0;
        var length = lines.length;
        var line;
        while (++index < length) {
          line = lines[index];
          if (line === '') continue;
          lines[index] = indent + line;
        }
        return '[^' + (node.label || node.identifier) + ']: ' + lines.join('\n');
      }
    }
    function before(list, before2, value) {
      list.splice(list.indexOf(before2), 0, value);
    }
    function interrupt(list, tokenizers, ctx, parameters) {
      var length = list.length;
      var index = -1;
      while (++index < length) {
        if (tokenizers[list[index][0]].apply(ctx, parameters)) {
          return true;
        }
      }
      return false;
    }
  }
});

// esm-build-8745b1574b26b6d57d426d92de50363a9d1d6d7c-fc2864a3/mod.js
var __module = __toESM(require_remark_footnotes());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
