/* esm.sh - esbuild bundle(remark-parse@8.0.3) es2022 development */
import __state_toggle$ from '/cdn/v99/state-toggle@1.0.3/es2022/state-toggle.development.js';
import __repeat_string$ from '/cdn/v99/repeat-string@1.6.1/es2022/repeat-string.development.js';
import __ccount$ from '/cdn/v99/ccount@1.1.0/es2022/ccount.development.js';
import __trim$ from '/cdn/v99/trim@0.0.1/es2022/trim.development.js';
import __is_decimal$ from '/cdn/v99/is-decimal@1.0.4/es2022/is-decimal.development.js';
import __xtend$ from '/cdn/v99/xtend@4.0.2/es2022/xtend.development.js';
import __collapse_white_space$ from '/cdn/v99/collapse-white-space@1.0.6/es2022/collapse-white-space.development.js';
import __is_alphabetical$ from '/cdn/v99/is-alphabetical@1.0.4/es2022/is-alphabetical.development.js';
import __trim_trailing_lines$ from '/cdn/v99/trim-trailing-lines@1.1.4/es2022/trim-trailing-lines.development.js';
import __markdown_escapes$ from '/cdn/v99/markdown-escapes@1.0.4/es2022/markdown-escapes.development.js';
import __parse_entities$ from '/cdn/v99/parse-entities@2.0.0/es2022/parse-entities.development.js';
import __vfile_location$ from '/cdn/v99/vfile-location@3.2.0/es2022/vfile-location.development.js';
import __unherit$ from '/cdn/v99/unherit@1.1.3/es2022/unherit.development.js';
import __is_word_character$ from '/cdn/v99/is-word-character@1.0.4/es2022/is-word-character.development.js';
import __unist_util_remove_position$ from '/cdn/v99/unist-util-remove-position@2.0.1/es2022/unist-util-remove-position.development.js';
import __is_whitespace_character$ from '/cdn/v99/is-whitespace-character@1.0.4/es2022/is-whitespace-character.development.js';
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

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/unescape.js
var require_unescape = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/unescape.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = factory;
    var backslash = '\\';
    function factory(ctx, key) {
      return unescape;
      function unescape(value) {
        var previous = 0;
        var index = value.indexOf(backslash);
        var escape = ctx[key];
        var queue = [];
        var character;
        while (index !== -1) {
          queue.push(value.slice(previous, index));
          previous = index + 1;
          character = value.charAt(previous);
          if (!character || escape.indexOf(character) === -1) {
            queue.push(backslash);
          }
          index = value.indexOf(backslash, previous + 1);
        }
        queue.push(value.slice(previous));
        return queue.join('');
      }
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/decode.js
var require_decode = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/decode.js'(
    exports,
    module
  ) {
    'use strict';

    var xtend = __xtend$;
    var entities = __parse_entities$;
    module.exports = factory;
    function factory(ctx) {
      decoder.raw = decodeRaw;
      return decoder;
      function normalize(position) {
        var offsets = ctx.offset;
        var line = position.line;
        var result = [];
        while (++line) {
          if (!(line in offsets)) {
            break;
          }
          result.push((offsets[line] || 0) + 1);
        }
        return {
          start: position,
          indent: result
        };
      }
      function decoder(value, position, handler) {
        entities(value, {
          position: normalize(position),
          warning: handleWarning,
          text: handler,
          reference: handler,
          textContext: ctx,
          referenceContext: ctx
        });
      }
      function decodeRaw(value, position, options) {
        return entities(
          value,
          xtend(options, {
            position: normalize(position),
            warning: handleWarning
          })
        );
      }
      function handleWarning(reason, position, code) {
        if (code !== 3) {
          ctx.file.message(reason, position);
        }
      }
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenizer.js
var require_tokenizer = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenizer.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = factory;
    function factory(type) {
      return tokenize;
      function tokenize(value, location) {
        var self = this;
        var offset = self.offset;
        var tokens = [];
        var methods = self[type + 'Methods'];
        var tokenizers = self[type + 'Tokenizers'];
        var line = location.line;
        var column = location.column;
        var index;
        var length;
        var method;
        var name;
        var matched;
        var valueLength;
        if (!value) {
          return tokens;
        }
        eat.now = now;
        eat.file = self.file;
        updatePosition('');
        while (value) {
          index = -1;
          length = methods.length;
          matched = false;
          while (++index < length) {
            name = methods[index];
            method = tokenizers[name];
            if (
              method &&
              (!method.onlyAtStart || self.atStart) &&
              (!method.notInList || !self.inList) &&
              (!method.notInBlock || !self.inBlock) &&
              (!method.notInLink || !self.inLink)
            ) {
              valueLength = value.length;
              method.apply(self, [eat, value]);
              matched = valueLength !== value.length;
              if (matched) {
                break;
              }
            }
          }
          if (!matched) {
            self.file.fail(new Error('Infinite loop'), eat.now());
          }
        }
        self.eof = now();
        return tokens;
        function updatePosition(subvalue) {
          var lastIndex = -1;
          var index2 = subvalue.indexOf('\n');
          while (index2 !== -1) {
            line++;
            lastIndex = index2;
            index2 = subvalue.indexOf('\n', index2 + 1);
          }
          if (lastIndex === -1) {
            column += subvalue.length;
          } else {
            column = subvalue.length - lastIndex;
          }
          if (line in offset) {
            if (lastIndex !== -1) {
              column += offset[line];
            } else if (column <= offset[line]) {
              column = offset[line] + 1;
            }
          }
        }
        function getOffset() {
          var indentation = [];
          var pos = line + 1;
          return function() {
            var last = line + 1;
            while (pos < last) {
              indentation.push((offset[pos] || 0) + 1);
              pos++;
            }
            return indentation;
          };
        }
        function now() {
          var pos = {
            line,
            column
          };
          pos.offset = self.toOffset(pos);
          return pos;
        }
        function Position(start) {
          this.start = start;
          this.end = now();
        }
        function validateEat(subvalue) {
          if (value.slice(0, subvalue.length) !== subvalue) {
            self.file.fail(
              new Error('Incorrectly eaten value: please report this warning on https://git.io/vg5Ft'),
              now()
            );
          }
        }
        function position() {
          var before = now();
          return update;
          function update(node, indent) {
            var previous = node.position;
            var start = previous ? previous.start : before;
            var combined = [];
            var n = previous && previous.end.line;
            var l = before.line;
            node.position = new Position(start);
            if (previous && indent && previous.indent) {
              combined = previous.indent;
              if (n < l) {
                while (++n < l) {
                  combined.push((offset[n] || 0) + 1);
                }
                combined.push(before.column);
              }
              indent = combined.concat(indent);
            }
            node.position.indent = indent || [];
            return node;
          }
        }
        function add(node, parent) {
          var children = parent ? parent.children : tokens;
          var previous = children[children.length - 1];
          var fn;
          if (
            previous &&
            node.type === previous.type &&
            (node.type === 'text' || node.type === 'blockquote') &&
            mergeable(previous) &&
            mergeable(node)
          ) {
            fn = node.type === 'text' ? mergeText : mergeBlockquote;
            node = fn.call(self, previous, node);
          }
          if (node !== previous) {
            children.push(node);
          }
          if (self.atStart && tokens.length !== 0) {
            self.exitStart();
          }
          return node;
        }
        function eat(subvalue) {
          var indent = getOffset();
          var pos = position();
          var current = now();
          validateEat(subvalue);
          apply.reset = reset;
          reset.test = test;
          apply.test = test;
          value = value.slice(subvalue.length);
          updatePosition(subvalue);
          indent = indent();
          return apply;
          function apply(node, parent) {
            return pos(add(pos(node), parent), indent);
          }
          function reset() {
            var node = apply.apply(null, arguments);
            line = current.line;
            column = current.column;
            value = subvalue + value;
            return node;
          }
          function test() {
            var result = pos({});
            line = current.line;
            column = current.column;
            value = subvalue + value;
            return result.position;
          }
        }
      }
    }
    function mergeable(node) {
      var start;
      var end;
      if (node.type !== 'text' || !node.position) {
        return true;
      }
      start = node.position.start;
      end = node.position.end;
      return start.line !== end.line || end.column - start.column === node.value.length;
    }
    function mergeText(previous, node) {
      previous.value += node.value;
      return previous;
    }
    function mergeBlockquote(previous, node) {
      if (this.options.commonmark || this.options.gfm) {
        return node;
      }
      previous.children = previous.children.concat(node.children);
      return previous;
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/block-elements.js
var require_block_elements = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/block-elements.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = [
      'address',
      'article',
      'aside',
      'base',
      'basefont',
      'blockquote',
      'body',
      'caption',
      'center',
      'col',
      'colgroup',
      'dd',
      'details',
      'dialog',
      'dir',
      'div',
      'dl',
      'dt',
      'fieldset',
      'figcaption',
      'figure',
      'footer',
      'form',
      'frame',
      'frameset',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'head',
      'header',
      'hgroup',
      'hr',
      'html',
      'iframe',
      'legend',
      'li',
      'link',
      'main',
      'menu',
      'menuitem',
      'meta',
      'nav',
      'noframes',
      'ol',
      'optgroup',
      'option',
      'p',
      'param',
      'pre',
      'section',
      'source',
      'title',
      'summary',
      'table',
      'tbody',
      'td',
      'tfoot',
      'th',
      'thead',
      'title',
      'tr',
      'track',
      'ul'
    ];
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/defaults.js
var require_defaults = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/defaults.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = {
      position: true,
      gfm: true,
      commonmark: false,
      pedantic: false,
      blocks: require_block_elements()
    };
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/set-options.js
var require_set_options = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/set-options.js'(
    exports,
    module
  ) {
    'use strict';

    var xtend = __xtend$;
    var escapes = __markdown_escapes$;
    var defaults = require_defaults();
    module.exports = setOptions;
    function setOptions(options) {
      var self = this;
      var current = self.options;
      var key;
      var value;
      if (options == null) {
        options = {};
      } else if (typeof options === 'object') {
        options = xtend(options);
      } else {
        throw new Error('Invalid value `' + options + '` for setting `options`');
      }
      for (key in defaults) {
        value = options[key];
        if (value == null) {
          value = current[key];
        }
        if ((key !== 'blocks' && typeof value !== 'boolean') || (key === 'blocks' && typeof value !== 'object')) {
          throw new Error('Invalid value `' + value + '` for setting `options.' + key + '`');
        }
        options[key] = value;
      }
      self.options = options;
      self.escape = escapes(options);
      return self;
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/parse.js
var require_parse = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/parse.js'(
    exports,
    module
  ) {
    'use strict';

    var xtend = __xtend$;
    var removePosition = __unist_util_remove_position$;
    module.exports = parse;
    var lineFeed = '\n';
    var lineBreaksExpression = /\r\n|\r/g;
    function parse() {
      var self = this;
      var value = String(self.file);
      var start = {
        line: 1,
        column: 1,
        offset: 0
      };
      var content = xtend(start);
      var node;
      value = value.replace(lineBreaksExpression, lineFeed);
      if (value.charCodeAt(0) === 65279) {
        value = value.slice(1);
        content.column++;
        content.offset++;
      }
      node = {
        type: 'root',
        children: self.tokenizeBlock(value, content),
        position: {
          start,
          end: self.eof || xtend(start)
        }
      };
      if (!self.options.position) {
        removePosition(node, true);
      }
      return node;
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/blank-line.js
var require_blank_line = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/blank-line.js'(
    exports,
    module
  ) {
    'use strict';

    var reBlankLine = /^[ \t]*(\n|$)/;
    module.exports = blankLine;
    function blankLine(eat, value, silent) {
      var match;
      var subvalue = '';
      var index = 0;
      var length = value.length;
      while (index < length) {
        match = reBlankLine.exec(value.slice(index));
        if (match == null) {
          break;
        }
        index += match[0].length;
        subvalue += match[0];
      }
      if (subvalue === '') {
        return;
      }
      if (silent) {
        return true;
      }
      eat(subvalue);
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/code-indented.js
var require_code_indented = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/code-indented.js'(
    exports,
    module
  ) {
    'use strict';

    var repeat = __repeat_string$;
    var trim = __trim_trailing_lines$;
    module.exports = indentedCode;
    var lineFeed = '\n';
    var tab = '	';
    var space = ' ';
    var tabSize = 4;
    var codeIndent = repeat(space, tabSize);
    function indentedCode(eat, value, silent) {
      var index = -1;
      var length = value.length;
      var subvalue = '';
      var content = '';
      var subvalueQueue = '';
      var contentQueue = '';
      var character;
      var blankQueue;
      var indent;
      while (++index < length) {
        character = value.charAt(index);
        if (indent) {
          indent = false;
          subvalue += subvalueQueue;
          content += contentQueue;
          subvalueQueue = '';
          contentQueue = '';
          if (character === lineFeed) {
            subvalueQueue = character;
            contentQueue = character;
          } else {
            subvalue += character;
            content += character;
            while (++index < length) {
              character = value.charAt(index);
              if (!character || character === lineFeed) {
                contentQueue = character;
                subvalueQueue = character;
                break;
              }
              subvalue += character;
              content += character;
            }
          }
        } else if (
          character === space &&
          value.charAt(index + 1) === character &&
          value.charAt(index + 2) === character &&
          value.charAt(index + 3) === character
        ) {
          subvalueQueue += codeIndent;
          index += 3;
          indent = true;
        } else if (character === tab) {
          subvalueQueue += character;
          indent = true;
        } else {
          blankQueue = '';
          while (character === tab || character === space) {
            blankQueue += character;
            character = value.charAt(++index);
          }
          if (character !== lineFeed) {
            break;
          }
          subvalueQueue += blankQueue + character;
          contentQueue += character;
        }
      }
      if (content) {
        if (silent) {
          return true;
        }
        return eat(subvalue)({
          type: 'code',
          lang: null,
          meta: null,
          value: trim(content)
        });
      }
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/code-fenced.js
var require_code_fenced = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/code-fenced.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = fencedCode;
    var lineFeed = '\n';
    var tab = '	';
    var space = ' ';
    var tilde = '~';
    var graveAccent = '`';
    var minFenceCount = 3;
    var tabSize = 4;
    function fencedCode(eat, value, silent) {
      var self = this;
      var gfm = self.options.gfm;
      var length = value.length + 1;
      var index = 0;
      var subvalue = '';
      var fenceCount;
      var marker;
      var character;
      var flag;
      var lang;
      var meta;
      var queue;
      var content;
      var exdentedContent;
      var closing;
      var exdentedClosing;
      var indent;
      var now;
      if (!gfm) {
        return;
      }
      while (index < length) {
        character = value.charAt(index);
        if (character !== space && character !== tab) {
          break;
        }
        subvalue += character;
        index++;
      }
      indent = index;
      character = value.charAt(index);
      if (character !== tilde && character !== graveAccent) {
        return;
      }
      index++;
      marker = character;
      fenceCount = 1;
      subvalue += character;
      while (index < length) {
        character = value.charAt(index);
        if (character !== marker) {
          break;
        }
        subvalue += character;
        fenceCount++;
        index++;
      }
      if (fenceCount < minFenceCount) {
        return;
      }
      while (index < length) {
        character = value.charAt(index);
        if (character !== space && character !== tab) {
          break;
        }
        subvalue += character;
        index++;
      }
      flag = '';
      queue = '';
      while (index < length) {
        character = value.charAt(index);
        if (character === lineFeed || (marker === graveAccent && character === marker)) {
          break;
        }
        if (character === space || character === tab) {
          queue += character;
        } else {
          flag += queue + character;
          queue = '';
        }
        index++;
      }
      character = value.charAt(index);
      if (character && character !== lineFeed) {
        return;
      }
      if (silent) {
        return true;
      }
      now = eat.now();
      now.column += subvalue.length;
      now.offset += subvalue.length;
      subvalue += flag;
      flag = self.decode.raw(self.unescape(flag), now);
      if (queue) {
        subvalue += queue;
      }
      queue = '';
      closing = '';
      exdentedClosing = '';
      content = '';
      exdentedContent = '';
      var skip = true;
      while (index < length) {
        character = value.charAt(index);
        content += closing;
        exdentedContent += exdentedClosing;
        closing = '';
        exdentedClosing = '';
        if (character !== lineFeed) {
          content += character;
          exdentedClosing += character;
          index++;
          continue;
        }
        if (skip) {
          subvalue += character;
          skip = false;
        } else {
          closing += character;
          exdentedClosing += character;
        }
        queue = '';
        index++;
        while (index < length) {
          character = value.charAt(index);
          if (character !== space) {
            break;
          }
          queue += character;
          index++;
        }
        closing += queue;
        exdentedClosing += queue.slice(indent);
        if (queue.length >= tabSize) {
          continue;
        }
        queue = '';
        while (index < length) {
          character = value.charAt(index);
          if (character !== marker) {
            break;
          }
          queue += character;
          index++;
        }
        closing += queue;
        exdentedClosing += queue;
        if (queue.length < fenceCount) {
          continue;
        }
        queue = '';
        while (index < length) {
          character = value.charAt(index);
          if (character !== space && character !== tab) {
            break;
          }
          closing += character;
          exdentedClosing += character;
          index++;
        }
        if (!character || character === lineFeed) {
          break;
        }
      }
      subvalue += content + closing;
      index = -1;
      length = flag.length;
      while (++index < length) {
        character = flag.charAt(index);
        if (character === space || character === tab) {
          if (!lang) {
            lang = flag.slice(0, index);
          }
        } else if (lang) {
          meta = flag.slice(index);
          break;
        }
      }
      return eat(subvalue)({
        type: 'code',
        lang: lang || flag || null,
        meta: meta || null,
        value: exdentedContent
      });
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/util/interrupt.js
var require_interrupt = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/util/interrupt.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = interrupt;
    function interrupt(interruptors, tokenizers, ctx, parameters) {
      var length = interruptors.length;
      var index = -1;
      var interruptor;
      var config;
      while (++index < length) {
        interruptor = interruptors[index];
        config = interruptor[1] || {};
        if (config.pedantic !== void 0 && config.pedantic !== ctx.options.pedantic) {
          continue;
        }
        if (config.commonmark !== void 0 && config.commonmark !== ctx.options.commonmark) {
          continue;
        }
        if (tokenizers[interruptor[0]].apply(ctx, parameters)) {
          return true;
        }
      }
      return false;
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/blockquote.js
var require_blockquote = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/blockquote.js'(
    exports,
    module
  ) {
    'use strict';

    var trim = __trim$;
    var interrupt = require_interrupt();
    module.exports = blockquote;
    var lineFeed = '\n';
    var tab = '	';
    var space = ' ';
    var greaterThan = '>';
    function blockquote(eat, value, silent) {
      var self = this;
      var offsets = self.offset;
      var tokenizers = self.blockTokenizers;
      var interruptors = self.interruptBlockquote;
      var now = eat.now();
      var currentLine = now.line;
      var length = value.length;
      var values = [];
      var contents = [];
      var indents = [];
      var add;
      var index = 0;
      var character;
      var rest;
      var nextIndex;
      var content;
      var line;
      var startIndex;
      var prefixed;
      var exit;
      while (index < length) {
        character = value.charAt(index);
        if (character !== space && character !== tab) {
          break;
        }
        index++;
      }
      if (value.charAt(index) !== greaterThan) {
        return;
      }
      if (silent) {
        return true;
      }
      index = 0;
      while (index < length) {
        nextIndex = value.indexOf(lineFeed, index);
        startIndex = index;
        prefixed = false;
        if (nextIndex === -1) {
          nextIndex = length;
        }
        while (index < length) {
          character = value.charAt(index);
          if (character !== space && character !== tab) {
            break;
          }
          index++;
        }
        if (value.charAt(index) === greaterThan) {
          index++;
          prefixed = true;
          if (value.charAt(index) === space) {
            index++;
          }
        } else {
          index = startIndex;
        }
        content = value.slice(index, nextIndex);
        if (!prefixed && !trim(content)) {
          index = startIndex;
          break;
        }
        if (!prefixed) {
          rest = value.slice(index);
          if (interrupt(interruptors, tokenizers, self, [eat, rest, true])) {
            break;
          }
        }
        line = startIndex === index ? content : value.slice(startIndex, nextIndex);
        indents.push(index - startIndex);
        values.push(line);
        contents.push(content);
        index = nextIndex + 1;
      }
      index = -1;
      length = indents.length;
      add = eat(values.join(lineFeed));
      while (++index < length) {
        offsets[currentLine] = (offsets[currentLine] || 0) + indents[index];
        currentLine++;
      }
      exit = self.enterBlock();
      contents = self.tokenizeBlock(contents.join(lineFeed), now);
      exit();
      return add({
        type: 'blockquote',
        children: contents
      });
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/heading-atx.js
var require_heading_atx = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/heading-atx.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = atxHeading;
    var lineFeed = '\n';
    var tab = '	';
    var space = ' ';
    var numberSign = '#';
    var maxFenceCount = 6;
    function atxHeading(eat, value, silent) {
      var self = this;
      var pedantic = self.options.pedantic;
      var length = value.length + 1;
      var index = -1;
      var now = eat.now();
      var subvalue = '';
      var content = '';
      var character;
      var queue;
      var depth;
      while (++index < length) {
        character = value.charAt(index);
        if (character !== space && character !== tab) {
          index--;
          break;
        }
        subvalue += character;
      }
      depth = 0;
      while (++index <= length) {
        character = value.charAt(index);
        if (character !== numberSign) {
          index--;
          break;
        }
        subvalue += character;
        depth++;
      }
      if (depth > maxFenceCount) {
        return;
      }
      if (!depth || (!pedantic && value.charAt(index + 1) === numberSign)) {
        return;
      }
      length = value.length + 1;
      queue = '';
      while (++index < length) {
        character = value.charAt(index);
        if (character !== space && character !== tab) {
          index--;
          break;
        }
        queue += character;
      }
      if (!pedantic && queue.length === 0 && character && character !== lineFeed) {
        return;
      }
      if (silent) {
        return true;
      }
      subvalue += queue;
      queue = '';
      content = '';
      while (++index < length) {
        character = value.charAt(index);
        if (!character || character === lineFeed) {
          break;
        }
        if (character !== space && character !== tab && character !== numberSign) {
          content += queue + character;
          queue = '';
          continue;
        }
        while (character === space || character === tab) {
          queue += character;
          character = value.charAt(++index);
        }
        if (!pedantic && content && !queue && character === numberSign) {
          content += character;
          continue;
        }
        while (character === numberSign) {
          queue += character;
          character = value.charAt(++index);
        }
        while (character === space || character === tab) {
          queue += character;
          character = value.charAt(++index);
        }
        index--;
      }
      now.column += subvalue.length;
      now.offset += subvalue.length;
      subvalue += content + queue;
      return eat(subvalue)({
        type: 'heading',
        depth,
        children: self.tokenizeInline(content, now)
      });
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/thematic-break.js
var require_thematic_break = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/thematic-break.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = thematicBreak;
    var tab = '	';
    var lineFeed = '\n';
    var space = ' ';
    var asterisk = '*';
    var dash = '-';
    var underscore = '_';
    var maxCount = 3;
    function thematicBreak(eat, value, silent) {
      var index = -1;
      var length = value.length + 1;
      var subvalue = '';
      var character;
      var marker;
      var markerCount;
      var queue;
      while (++index < length) {
        character = value.charAt(index);
        if (character !== tab && character !== space) {
          break;
        }
        subvalue += character;
      }
      if (character !== asterisk && character !== dash && character !== underscore) {
        return;
      }
      marker = character;
      subvalue += character;
      markerCount = 1;
      queue = '';
      while (++index < length) {
        character = value.charAt(index);
        if (character === marker) {
          markerCount++;
          subvalue += queue + marker;
          queue = '';
        } else if (character === space) {
          queue += character;
        } else if (markerCount >= maxCount && (!character || character === lineFeed)) {
          subvalue += queue;
          if (silent) {
            return true;
          }
          return eat(subvalue)({
            type: 'thematicBreak'
          });
        } else {
          return;
        }
      }
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/util/get-indentation.js
var require_get_indentation = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/util/get-indentation.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = indentation;
    var tab = '	';
    var space = ' ';
    var spaceSize = 1;
    var tabSize = 4;
    function indentation(value) {
      var index = 0;
      var indent = 0;
      var character = value.charAt(index);
      var stops = {};
      var size;
      var lastIndent = 0;
      while (character === tab || character === space) {
        size = character === tab ? tabSize : spaceSize;
        indent += size;
        if (size > 1) {
          indent = Math.floor(indent / size) * size;
        }
        while (lastIndent < indent) {
          stops[++lastIndent] = index;
        }
        character = value.charAt(++index);
      }
      return {
        indent,
        stops
      };
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/util/remove-indentation.js
var require_remove_indentation = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/util/remove-indentation.js'(
    exports,
    module
  ) {
    'use strict';

    var trim = __trim$;
    var repeat = __repeat_string$;
    var getIndent = require_get_indentation();
    module.exports = indentation;
    var lineFeed = '\n';
    var space = ' ';
    var exclamationMark = '!';
    function indentation(value, maximum) {
      var values = value.split(lineFeed);
      var position = values.length + 1;
      var minIndent = Infinity;
      var matrix = [];
      var index;
      var indentation2;
      var stops;
      values.unshift(repeat(space, maximum) + exclamationMark);
      while (position--) {
        indentation2 = getIndent(values[position]);
        matrix[position] = indentation2.stops;
        if (trim(values[position]).length === 0) {
          continue;
        }
        if (indentation2.indent) {
          if (indentation2.indent > 0 && indentation2.indent < minIndent) {
            minIndent = indentation2.indent;
          }
        } else {
          minIndent = Infinity;
          break;
        }
      }
      if (minIndent !== Infinity) {
        position = values.length;
        while (position--) {
          stops = matrix[position];
          index = minIndent;
          while (index && !(index in stops)) {
            index--;
          }
          values[position] = values[position].slice(stops[index] + 1);
        }
      }
      values.shift();
      return values.join(lineFeed);
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/list.js
var require_list = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/list.js'(
    exports,
    module
  ) {
    'use strict';

    var trim = __trim$;
    var repeat = __repeat_string$;
    var decimal = __is_decimal$;
    var getIndent = require_get_indentation();
    var removeIndent = require_remove_indentation();
    var interrupt = require_interrupt();
    module.exports = list;
    var asterisk = '*';
    var underscore = '_';
    var plusSign = '+';
    var dash = '-';
    var dot = '.';
    var space = ' ';
    var lineFeed = '\n';
    var tab = '	';
    var rightParenthesis = ')';
    var lowercaseX = 'x';
    var tabSize = 4;
    var looseListItemExpression = /\n\n(?!\s*$)/;
    var taskItemExpression = /^\[([ X\tx])][ \t]/;
    var bulletExpression = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/;
    var pedanticBulletExpression = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/;
    var initialIndentExpression = /^( {1,4}|\t)?/gm;
    function list(eat, value, silent) {
      var self = this;
      var commonmark = self.options.commonmark;
      var pedantic = self.options.pedantic;
      var tokenizers = self.blockTokenizers;
      var interuptors = self.interruptList;
      var index = 0;
      var length = value.length;
      var start = null;
      var size;
      var queue;
      var ordered;
      var character;
      var marker;
      var nextIndex;
      var startIndex;
      var prefixed;
      var currentMarker;
      var content;
      var line;
      var previousEmpty;
      var empty;
      var items;
      var allLines;
      var emptyLines;
      var item;
      var enterTop;
      var exitBlockquote;
      var spread = false;
      var node;
      var now;
      var end;
      var indented;
      while (index < length) {
        character = value.charAt(index);
        if (character !== tab && character !== space) {
          break;
        }
        index++;
      }
      character = value.charAt(index);
      if (character === asterisk || character === plusSign || character === dash) {
        marker = character;
        ordered = false;
      } else {
        ordered = true;
        queue = '';
        while (index < length) {
          character = value.charAt(index);
          if (!decimal(character)) {
            break;
          }
          queue += character;
          index++;
        }
        character = value.charAt(index);
        if (!queue || !(character === dot || (commonmark && character === rightParenthesis))) {
          return;
        }
        if (silent && queue !== '1') {
          return;
        }
        start = parseInt(queue, 10);
        marker = character;
      }
      character = value.charAt(++index);
      if (character !== space && character !== tab && (pedantic || (character !== lineFeed && character !== ''))) {
        return;
      }
      if (silent) {
        return true;
      }
      index = 0;
      items = [];
      allLines = [];
      emptyLines = [];
      while (index < length) {
        nextIndex = value.indexOf(lineFeed, index);
        startIndex = index;
        prefixed = false;
        indented = false;
        if (nextIndex === -1) {
          nextIndex = length;
        }
        size = 0;
        while (index < length) {
          character = value.charAt(index);
          if (character === tab) {
            size += tabSize - (size % tabSize);
          } else if (character === space) {
            size++;
          } else {
            break;
          }
          index++;
        }
        if (item && size >= item.indent) {
          indented = true;
        }
        character = value.charAt(index);
        currentMarker = null;
        if (!indented) {
          if (character === asterisk || character === plusSign || character === dash) {
            currentMarker = character;
            index++;
            size++;
          } else {
            queue = '';
            while (index < length) {
              character = value.charAt(index);
              if (!decimal(character)) {
                break;
              }
              queue += character;
              index++;
            }
            character = value.charAt(index);
            index++;
            if (queue && (character === dot || (commonmark && character === rightParenthesis))) {
              currentMarker = character;
              size += queue.length + 1;
            }
          }
          if (currentMarker) {
            character = value.charAt(index);
            if (character === tab) {
              size += tabSize - (size % tabSize);
              index++;
            } else if (character === space) {
              end = index + tabSize;
              while (index < end) {
                if (value.charAt(index) !== space) {
                  break;
                }
                index++;
                size++;
              }
              if (index === end && value.charAt(index) === space) {
                index -= tabSize - 1;
                size -= tabSize - 1;
              }
            } else if (character !== lineFeed && character !== '') {
              currentMarker = null;
            }
          }
        }
        if (currentMarker) {
          if (!pedantic && marker !== currentMarker) {
            break;
          }
          prefixed = true;
        } else {
          if (!commonmark && !indented && value.charAt(startIndex) === space) {
            indented = true;
          } else if (commonmark && item) {
            indented = size >= item.indent || size > tabSize;
          }
          prefixed = false;
          index = startIndex;
        }
        line = value.slice(startIndex, nextIndex);
        content = startIndex === index ? line : value.slice(index, nextIndex);
        if (currentMarker === asterisk || currentMarker === underscore || currentMarker === dash) {
          if (tokenizers.thematicBreak.call(self, eat, line, true)) {
            break;
          }
        }
        previousEmpty = empty;
        empty = !prefixed && !trim(content).length;
        if (indented && item) {
          item.value = item.value.concat(emptyLines, line);
          allLines = allLines.concat(emptyLines, line);
          emptyLines = [];
        } else if (prefixed) {
          if (emptyLines.length !== 0) {
            spread = true;
            item.value.push('');
            item.trail = emptyLines.concat();
          }
          item = {
            value: [line],
            indent: size,
            trail: []
          };
          items.push(item);
          allLines = allLines.concat(emptyLines, line);
          emptyLines = [];
        } else if (empty) {
          if (previousEmpty && !commonmark) {
            break;
          }
          emptyLines.push(line);
        } else {
          if (previousEmpty) {
            break;
          }
          if (interrupt(interuptors, tokenizers, self, [eat, line, true])) {
            break;
          }
          item.value = item.value.concat(emptyLines, line);
          allLines = allLines.concat(emptyLines, line);
          emptyLines = [];
        }
        index = nextIndex + 1;
      }
      node = eat(allLines.join(lineFeed)).reset({
        type: 'list',
        ordered,
        start,
        spread,
        children: []
      });
      enterTop = self.enterList();
      exitBlockquote = self.enterBlock();
      index = -1;
      length = items.length;
      while (++index < length) {
        item = items[index].value.join(lineFeed);
        now = eat.now();
        eat(item)(listItem(self, item, now), node);
        item = items[index].trail.join(lineFeed);
        if (index !== length - 1) {
          item += lineFeed;
        }
        eat(item);
      }
      enterTop();
      exitBlockquote();
      return node;
    }
    function listItem(ctx, value, position) {
      var offsets = ctx.offset;
      var fn = ctx.options.pedantic ? pedanticListItem : normalListItem;
      var checked = null;
      var task;
      var indent;
      value = fn.apply(null, arguments);
      if (ctx.options.gfm) {
        task = value.match(taskItemExpression);
        if (task) {
          indent = task[0].length;
          checked = task[1].toLowerCase() === lowercaseX;
          offsets[position.line] += indent;
          value = value.slice(indent);
        }
      }
      return {
        type: 'listItem',
        spread: looseListItemExpression.test(value),
        checked,
        children: ctx.tokenizeBlock(value, position)
      };
    }
    function pedanticListItem(ctx, value, position) {
      var offsets = ctx.offset;
      var line = position.line;
      value = value.replace(pedanticBulletExpression, replacer);
      line = position.line;
      return value.replace(initialIndentExpression, replacer);
      function replacer($0) {
        offsets[line] = (offsets[line] || 0) + $0.length;
        line++;
        return '';
      }
    }
    function normalListItem(ctx, value, position) {
      var offsets = ctx.offset;
      var line = position.line;
      var max;
      var bullet;
      var rest;
      var lines;
      var trimmedLines;
      var index;
      var length;
      value = value.replace(bulletExpression, replacer);
      lines = value.split(lineFeed);
      trimmedLines = removeIndent(value, getIndent(max).indent).split(lineFeed);
      trimmedLines[0] = rest;
      offsets[line] = (offsets[line] || 0) + bullet.length;
      line++;
      index = 0;
      length = lines.length;
      while (++index < length) {
        offsets[line] = (offsets[line] || 0) + lines[index].length - trimmedLines[index].length;
        line++;
      }
      return trimmedLines.join(lineFeed);
      function replacer($0, $1, $2, $3, $4) {
        bullet = $1 + $2 + $3;
        rest = $4;
        if (Number($2) < 10 && bullet.length % 2 === 1) {
          $2 = space + $2;
        }
        max = $1 + repeat(space, $2.length) + $3;
        return max + rest;
      }
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/heading-setext.js
var require_heading_setext = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/heading-setext.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = setextHeading;
    var lineFeed = '\n';
    var tab = '	';
    var space = ' ';
    var equalsTo = '=';
    var dash = '-';
    var maxIndent = 3;
    var equalsToDepth = 1;
    var dashDepth = 2;
    function setextHeading(eat, value, silent) {
      var self = this;
      var now = eat.now();
      var length = value.length;
      var index = -1;
      var subvalue = '';
      var content;
      var queue;
      var character;
      var marker;
      var depth;
      while (++index < length) {
        character = value.charAt(index);
        if (character !== space || index >= maxIndent) {
          index--;
          break;
        }
        subvalue += character;
      }
      content = '';
      queue = '';
      while (++index < length) {
        character = value.charAt(index);
        if (character === lineFeed) {
          index--;
          break;
        }
        if (character === space || character === tab) {
          queue += character;
        } else {
          content += queue + character;
          queue = '';
        }
      }
      now.column += subvalue.length;
      now.offset += subvalue.length;
      subvalue += content + queue;
      character = value.charAt(++index);
      marker = value.charAt(++index);
      if (character !== lineFeed || (marker !== equalsTo && marker !== dash)) {
        return;
      }
      subvalue += character;
      queue = marker;
      depth = marker === equalsTo ? equalsToDepth : dashDepth;
      while (++index < length) {
        character = value.charAt(index);
        if (character !== marker) {
          if (character !== lineFeed) {
            return;
          }
          index--;
          break;
        }
        queue += character;
      }
      if (silent) {
        return true;
      }
      return eat(subvalue + queue)({
        type: 'heading',
        depth,
        children: self.tokenizeInline(content, now)
      });
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/util/html.js
var require_html = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/util/html.js'(exports) {
    'use strict';

    var attributeName = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
    var unquoted = '[^"\'=<>`\\u0000-\\u0020]+';
    var singleQuoted = "'[^']*'";
    var doubleQuoted = '"[^"]*"';
    var attributeValue = '(?:' + unquoted + '|' + singleQuoted + '|' + doubleQuoted + ')';
    var attribute = '(?:\\s+' + attributeName + '(?:\\s*=\\s*' + attributeValue + ')?)';
    var openTag = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';
    var closeTag = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
    var comment = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
    var processing = '<[?].*?[?]>';
    var declaration = '<![A-Za-z]+\\s+[^>]*>';
    var cdata = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';
    exports.openCloseTag = new RegExp('^(?:' + openTag + '|' + closeTag + ')');
    exports.tag = new RegExp(
      '^(?:' + openTag + '|' + closeTag + '|' + comment + '|' + processing + '|' + declaration + '|' + cdata + ')'
    );
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/html-block.js
var require_html_block = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/html-block.js'(
    exports,
    module
  ) {
    'use strict';

    var openCloseTag = require_html().openCloseTag;
    module.exports = blockHtml;
    var tab = '	';
    var space = ' ';
    var lineFeed = '\n';
    var lessThan = '<';
    var rawOpenExpression = /^<(script|pre|style)(?=(\s|>|$))/i;
    var rawCloseExpression = /<\/(script|pre|style)>/i;
    var commentOpenExpression = /^<!--/;
    var commentCloseExpression = /-->/;
    var instructionOpenExpression = /^<\?/;
    var instructionCloseExpression = /\?>/;
    var directiveOpenExpression = /^<![A-Za-z]/;
    var directiveCloseExpression = />/;
    var cdataOpenExpression = /^<!\[CDATA\[/;
    var cdataCloseExpression = /]]>/;
    var elementCloseExpression = /^$/;
    var otherElementOpenExpression = new RegExp(openCloseTag.source + '\\s*$');
    function blockHtml(eat, value, silent) {
      var self = this;
      var blocks = self.options.blocks.join('|');
      var elementOpenExpression = new RegExp('^</?(' + blocks + ')(?=(\\s|/?>|$))', 'i');
      var length = value.length;
      var index = 0;
      var next;
      var line;
      var offset;
      var character;
      var count;
      var sequence;
      var subvalue;
      var sequences = [
        [rawOpenExpression, rawCloseExpression, true],
        [commentOpenExpression, commentCloseExpression, true],
        [instructionOpenExpression, instructionCloseExpression, true],
        [directiveOpenExpression, directiveCloseExpression, true],
        [cdataOpenExpression, cdataCloseExpression, true],
        [elementOpenExpression, elementCloseExpression, true],
        [otherElementOpenExpression, elementCloseExpression, false]
      ];
      while (index < length) {
        character = value.charAt(index);
        if (character !== tab && character !== space) {
          break;
        }
        index++;
      }
      if (value.charAt(index) !== lessThan) {
        return;
      }
      next = value.indexOf(lineFeed, index + 1);
      next = next === -1 ? length : next;
      line = value.slice(index, next);
      offset = -1;
      count = sequences.length;
      while (++offset < count) {
        if (sequences[offset][0].test(line)) {
          sequence = sequences[offset];
          break;
        }
      }
      if (!sequence) {
        return;
      }
      if (silent) {
        return sequence[2];
      }
      index = next;
      if (!sequence[1].test(line)) {
        while (index < length) {
          next = value.indexOf(lineFeed, index + 1);
          next = next === -1 ? length : next;
          line = value.slice(index + 1, next);
          if (sequence[1].test(line)) {
            if (line) {
              index = next;
            }
            break;
          }
          index = next;
        }
      }
      subvalue = value.slice(0, index);
      return eat(subvalue)({
        type: 'html',
        value: subvalue
      });
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/util/normalize.js
var require_normalize = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/util/normalize.js'(
    exports,
    module
  ) {
    'use strict';

    var collapseWhiteSpace = __collapse_white_space$;
    module.exports = normalize;
    function normalize(value) {
      return collapseWhiteSpace(value).toLowerCase();
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/definition.js
var require_definition = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/definition.js'(
    exports,
    module
  ) {
    'use strict';

    var whitespace = __is_whitespace_character$;
    var normalize = require_normalize();
    module.exports = definition;
    var quotationMark = '"';
    var apostrophe = "'";
    var backslash = '\\';
    var lineFeed = '\n';
    var tab = '	';
    var space = ' ';
    var leftSquareBracket = '[';
    var rightSquareBracket = ']';
    var leftParenthesis = '(';
    var rightParenthesis = ')';
    var colon = ':';
    var lessThan = '<';
    var greaterThan = '>';
    function definition(eat, value, silent) {
      var self = this;
      var commonmark = self.options.commonmark;
      var index = 0;
      var length = value.length;
      var subvalue = '';
      var beforeURL;
      var beforeTitle;
      var queue;
      var character;
      var test;
      var identifier;
      var url;
      var title;
      while (index < length) {
        character = value.charAt(index);
        if (character !== space && character !== tab) {
          break;
        }
        subvalue += character;
        index++;
      }
      character = value.charAt(index);
      if (character !== leftSquareBracket) {
        return;
      }
      index++;
      subvalue += character;
      queue = '';
      while (index < length) {
        character = value.charAt(index);
        if (character === rightSquareBracket) {
          break;
        } else if (character === backslash) {
          queue += character;
          index++;
          character = value.charAt(index);
        }
        queue += character;
        index++;
      }
      if (!queue || value.charAt(index) !== rightSquareBracket || value.charAt(index + 1) !== colon) {
        return;
      }
      identifier = queue;
      subvalue += queue + rightSquareBracket + colon;
      index = subvalue.length;
      queue = '';
      while (index < length) {
        character = value.charAt(index);
        if (character !== tab && character !== space && character !== lineFeed) {
          break;
        }
        subvalue += character;
        index++;
      }
      character = value.charAt(index);
      queue = '';
      beforeURL = subvalue;
      if (character === lessThan) {
        index++;
        while (index < length) {
          character = value.charAt(index);
          if (!isEnclosedURLCharacter(character)) {
            break;
          }
          queue += character;
          index++;
        }
        character = value.charAt(index);
        if (character === isEnclosedURLCharacter.delimiter) {
          subvalue += lessThan + queue + character;
          index++;
        } else {
          if (commonmark) {
            return;
          }
          index -= queue.length + 1;
          queue = '';
        }
      }
      if (!queue) {
        while (index < length) {
          character = value.charAt(index);
          if (!isUnclosedURLCharacter(character)) {
            break;
          }
          queue += character;
          index++;
        }
        subvalue += queue;
      }
      if (!queue) {
        return;
      }
      url = queue;
      queue = '';
      while (index < length) {
        character = value.charAt(index);
        if (character !== tab && character !== space && character !== lineFeed) {
          break;
        }
        queue += character;
        index++;
      }
      character = value.charAt(index);
      test = null;
      if (character === quotationMark) {
        test = quotationMark;
      } else if (character === apostrophe) {
        test = apostrophe;
      } else if (character === leftParenthesis) {
        test = rightParenthesis;
      }
      if (!test) {
        queue = '';
        index = subvalue.length;
      } else if (queue) {
        subvalue += queue + character;
        index = subvalue.length;
        queue = '';
        while (index < length) {
          character = value.charAt(index);
          if (character === test) {
            break;
          }
          if (character === lineFeed) {
            index++;
            character = value.charAt(index);
            if (character === lineFeed || character === test) {
              return;
            }
            queue += lineFeed;
          }
          queue += character;
          index++;
        }
        character = value.charAt(index);
        if (character !== test) {
          return;
        }
        beforeTitle = subvalue;
        subvalue += queue + character;
        index++;
        title = queue;
        queue = '';
      } else {
        return;
      }
      while (index < length) {
        character = value.charAt(index);
        if (character !== tab && character !== space) {
          break;
        }
        subvalue += character;
        index++;
      }
      character = value.charAt(index);
      if (!character || character === lineFeed) {
        if (silent) {
          return true;
        }
        beforeURL = eat(beforeURL).test().end;
        url = self.decode.raw(self.unescape(url), beforeURL, {
          nonTerminated: false
        });
        if (title) {
          beforeTitle = eat(beforeTitle).test().end;
          title = self.decode.raw(self.unescape(title), beforeTitle);
        }
        return eat(subvalue)({
          type: 'definition',
          identifier: normalize(identifier),
          label: identifier,
          title: title || null,
          url
        });
      }
    }
    function isEnclosedURLCharacter(character) {
      return character !== greaterThan && character !== leftSquareBracket && character !== rightSquareBracket;
    }
    isEnclosedURLCharacter.delimiter = greaterThan;
    function isUnclosedURLCharacter(character) {
      return character !== leftSquareBracket && character !== rightSquareBracket && !whitespace(character);
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/table.js
var require_table = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/table.js'(
    exports,
    module
  ) {
    'use strict';

    var whitespace = __is_whitespace_character$;
    module.exports = table;
    var tab = '	';
    var lineFeed = '\n';
    var space = ' ';
    var dash = '-';
    var colon = ':';
    var backslash = '\\';
    var verticalBar = '|';
    var minColumns = 1;
    var minRows = 2;
    var left = 'left';
    var center = 'center';
    var right = 'right';
    function table(eat, value, silent) {
      var self = this;
      var index;
      var alignments;
      var alignment;
      var subvalue;
      var row;
      var length;
      var lines;
      var queue;
      var character;
      var hasDash;
      var align;
      var cell;
      var preamble;
      var now;
      var position;
      var lineCount;
      var line;
      var rows;
      var table2;
      var lineIndex;
      var pipeIndex;
      var first;
      if (!self.options.gfm) {
        return;
      }
      index = 0;
      lineCount = 0;
      length = value.length + 1;
      lines = [];
      while (index < length) {
        lineIndex = value.indexOf(lineFeed, index);
        pipeIndex = value.indexOf(verticalBar, index + 1);
        if (lineIndex === -1) {
          lineIndex = value.length;
        }
        if (pipeIndex === -1 || pipeIndex > lineIndex) {
          if (lineCount < minRows) {
            return;
          }
          break;
        }
        lines.push(value.slice(index, lineIndex));
        lineCount++;
        index = lineIndex + 1;
      }
      subvalue = lines.join(lineFeed);
      alignments = lines.splice(1, 1)[0] || [];
      index = 0;
      length = alignments.length;
      lineCount--;
      alignment = false;
      align = [];
      while (index < length) {
        character = alignments.charAt(index);
        if (character === verticalBar) {
          hasDash = null;
          if (alignment === false) {
            if (first === false) {
              return;
            }
          } else {
            align.push(alignment);
            alignment = false;
          }
          first = false;
        } else if (character === dash) {
          hasDash = true;
          alignment = alignment || null;
        } else if (character === colon) {
          if (alignment === left) {
            alignment = center;
          } else if (hasDash && alignment === null) {
            alignment = right;
          } else {
            alignment = left;
          }
        } else if (!whitespace(character)) {
          return;
        }
        index++;
      }
      if (alignment !== false) {
        align.push(alignment);
      }
      if (align.length < minColumns) {
        return;
      }
      if (silent) {
        return true;
      }
      position = -1;
      rows = [];
      table2 = eat(subvalue).reset({
        type: 'table',
        align,
        children: rows
      });
      while (++position < lineCount) {
        line = lines[position];
        row = {
          type: 'tableRow',
          children: []
        };
        if (position) {
          eat(lineFeed);
        }
        eat(line).reset(row, table2);
        length = line.length + 1;
        index = 0;
        queue = '';
        cell = '';
        preamble = true;
        while (index < length) {
          character = line.charAt(index);
          if (character === tab || character === space) {
            if (cell) {
              queue += character;
            } else {
              eat(character);
            }
            index++;
            continue;
          }
          if (character === '' || character === verticalBar) {
            if (preamble) {
              eat(character);
            } else {
              if ((cell || character) && !preamble) {
                subvalue = cell;
                if (queue.length > 1) {
                  if (character) {
                    subvalue += queue.slice(0, -1);
                    queue = queue.charAt(queue.length - 1);
                  } else {
                    subvalue += queue;
                    queue = '';
                  }
                }
                now = eat.now();
                eat(subvalue)(
                  {
                    type: 'tableCell',
                    children: self.tokenizeInline(cell, now)
                  },
                  row
                );
              }
              eat(queue + character);
              queue = '';
              cell = '';
            }
          } else {
            if (queue) {
              cell += queue;
              queue = '';
            }
            cell += character;
            if (character === backslash && index !== length - 2) {
              cell += line.charAt(index + 1);
              index++;
            }
          }
          preamble = false;
          index++;
        }
        if (!position) {
          eat(lineFeed + alignments);
        }
      }
      return table2;
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/paragraph.js
var require_paragraph = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/paragraph.js'(
    exports,
    module
  ) {
    'use strict';

    var trim = __trim$;
    var trimTrailingLines = __trim_trailing_lines$;
    var interrupt = require_interrupt();
    module.exports = paragraph;
    var tab = '	';
    var lineFeed = '\n';
    var space = ' ';
    var tabSize = 4;
    function paragraph(eat, value, silent) {
      var self = this;
      var settings = self.options;
      var commonmark = settings.commonmark;
      var tokenizers = self.blockTokenizers;
      var interruptors = self.interruptParagraph;
      var index = value.indexOf(lineFeed);
      var length = value.length;
      var position;
      var subvalue;
      var character;
      var size;
      var now;
      while (index < length) {
        if (index === -1) {
          index = length;
          break;
        }
        if (value.charAt(index + 1) === lineFeed) {
          break;
        }
        if (commonmark) {
          size = 0;
          position = index + 1;
          while (position < length) {
            character = value.charAt(position);
            if (character === tab) {
              size = tabSize;
              break;
            } else if (character === space) {
              size++;
            } else {
              break;
            }
            position++;
          }
          if (size >= tabSize && character !== lineFeed) {
            index = value.indexOf(lineFeed, index + 1);
            continue;
          }
        }
        subvalue = value.slice(index + 1);
        if (interrupt(interruptors, tokenizers, self, [eat, subvalue, true])) {
          break;
        }
        position = index;
        index = value.indexOf(lineFeed, index + 1);
        if (index !== -1 && trim(value.slice(position, index)) === '') {
          index = position;
          break;
        }
      }
      subvalue = value.slice(0, index);
      if (silent) {
        return true;
      }
      now = eat.now();
      subvalue = trimTrailingLines(subvalue);
      return eat(subvalue)({
        type: 'paragraph',
        children: self.tokenizeInline(subvalue, now)
      });
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/locate/escape.js
var require_escape = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/locate/escape.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = locate;
    function locate(value, fromIndex) {
      return value.indexOf('\\', fromIndex);
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/escape.js
var require_escape2 = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/escape.js'(
    exports,
    module
  ) {
    'use strict';

    var locate = require_escape();
    module.exports = escape;
    escape.locator = locate;
    var lineFeed = '\n';
    var backslash = '\\';
    function escape(eat, value, silent) {
      var self = this;
      var character;
      var node;
      if (value.charAt(0) === backslash) {
        character = value.charAt(1);
        if (self.escape.indexOf(character) !== -1) {
          if (silent) {
            return true;
          }
          if (character === lineFeed) {
            node = {
              type: 'break'
            };
          } else {
            node = {
              type: 'text',
              value: character
            };
          }
          return eat(backslash + character)(node);
        }
      }
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/locate/tag.js
var require_tag = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/locate/tag.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = locate;
    function locate(value, fromIndex) {
      return value.indexOf('<', fromIndex);
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/auto-link.js
var require_auto_link = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/auto-link.js'(
    exports,
    module
  ) {
    'use strict';

    var whitespace = __is_whitespace_character$;
    var decode = __parse_entities$;
    var locate = require_tag();
    module.exports = autoLink;
    autoLink.locator = locate;
    autoLink.notInLink = true;
    var lessThan = '<';
    var greaterThan = '>';
    var atSign = '@';
    var slash = '/';
    var mailto = 'mailto:';
    var mailtoLength = mailto.length;
    function autoLink(eat, value, silent) {
      var self = this;
      var subvalue = '';
      var length = value.length;
      var index = 0;
      var queue = '';
      var hasAtCharacter = false;
      var link = '';
      var character;
      var now;
      var content;
      var tokenizers;
      var exit;
      if (value.charAt(0) !== lessThan) {
        return;
      }
      index++;
      subvalue = lessThan;
      while (index < length) {
        character = value.charAt(index);
        if (
          whitespace(character) ||
          character === greaterThan ||
          character === atSign ||
          (character === ':' && value.charAt(index + 1) === slash)
        ) {
          break;
        }
        queue += character;
        index++;
      }
      if (!queue) {
        return;
      }
      link += queue;
      queue = '';
      character = value.charAt(index);
      link += character;
      index++;
      if (character === atSign) {
        hasAtCharacter = true;
      } else {
        if (character !== ':' || value.charAt(index + 1) !== slash) {
          return;
        }
        link += slash;
        index++;
      }
      while (index < length) {
        character = value.charAt(index);
        if (whitespace(character) || character === greaterThan) {
          break;
        }
        queue += character;
        index++;
      }
      character = value.charAt(index);
      if (!queue || character !== greaterThan) {
        return;
      }
      if (silent) {
        return true;
      }
      link += queue;
      content = link;
      subvalue += link + character;
      now = eat.now();
      now.column++;
      now.offset++;
      if (hasAtCharacter) {
        if (link.slice(0, mailtoLength).toLowerCase() === mailto) {
          content = content.slice(mailtoLength);
          now.column += mailtoLength;
          now.offset += mailtoLength;
        } else {
          link = mailto + link;
        }
      }
      tokenizers = self.inlineTokenizers;
      self.inlineTokenizers = {
        text: tokenizers.text
      };
      exit = self.enterLink();
      content = self.tokenizeInline(content, now);
      self.inlineTokenizers = tokenizers;
      exit();
      return eat(subvalue)({
        type: 'link',
        title: null,
        url: decode(link, {
          nonTerminated: false
        }),
        children: content
      });
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/locate/url.js
var require_url = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/locate/url.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = locate;
    var values = ['www.', 'http://', 'https://'];
    function locate(value, fromIndex) {
      var min = -1;
      var index;
      var length;
      var position;
      if (!this.options.gfm) {
        return min;
      }
      length = values.length;
      index = -1;
      while (++index < length) {
        position = value.indexOf(values[index], fromIndex);
        if (position !== -1 && (min === -1 || position < min)) {
          min = position;
        }
      }
      return min;
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/url.js
var require_url2 = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/url.js'(
    exports,
    module
  ) {
    'use strict';

    var ccount = __ccount$;
    var decode = __parse_entities$;
    var decimal = __is_decimal$;
    var alphabetical = __is_alphabetical$;
    var whitespace = __is_whitespace_character$;
    var locate = require_url();
    module.exports = url;
    url.locator = locate;
    url.notInLink = true;
    var exclamationMark = 33;
    var ampersand = 38;
    var rightParenthesis = 41;
    var asterisk = 42;
    var comma = 44;
    var dash = 45;
    var dot = 46;
    var colon = 58;
    var semicolon = 59;
    var questionMark = 63;
    var lessThan = 60;
    var underscore = 95;
    var tilde = 126;
    var leftParenthesisCharacter = '(';
    var rightParenthesisCharacter = ')';
    function url(eat, value, silent) {
      var self = this;
      var gfm = self.options.gfm;
      var tokenizers = self.inlineTokenizers;
      var length = value.length;
      var previousDot = -1;
      var protocolless = false;
      var dots;
      var lastTwoPartsStart;
      var start;
      var index;
      var pathStart;
      var path;
      var code;
      var end;
      var leftCount;
      var rightCount;
      var content;
      var children;
      var url2;
      var exit;
      if (!gfm) {
        return;
      }
      if (value.slice(0, 4) === 'www.') {
        protocolless = true;
        index = 4;
      } else if (value.slice(0, 7).toLowerCase() === 'http://') {
        index = 7;
      } else if (value.slice(0, 8).toLowerCase() === 'https://') {
        index = 8;
      } else {
        return;
      }
      previousDot = index - 1;
      start = index;
      dots = [];
      while (index < length) {
        code = value.charCodeAt(index);
        if (code === dot) {
          if (previousDot === index - 1) {
            break;
          }
          dots.push(index);
          previousDot = index;
          index++;
          continue;
        }
        if (decimal(code) || alphabetical(code) || code === dash || code === underscore) {
          index++;
          continue;
        }
        break;
      }
      if (code === dot) {
        dots.pop();
        index--;
      }
      if (dots[0] === void 0) {
        return;
      }
      lastTwoPartsStart = dots.length < 2 ? start : dots[dots.length - 2] + 1;
      if (value.slice(lastTwoPartsStart, index).indexOf('_') !== -1) {
        return;
      }
      if (silent) {
        return true;
      }
      end = index;
      pathStart = index;
      while (index < length) {
        code = value.charCodeAt(index);
        if (whitespace(code) || code === lessThan) {
          break;
        }
        index++;
        if (
          code === exclamationMark ||
          code === asterisk ||
          code === comma ||
          code === dot ||
          code === colon ||
          code === questionMark ||
          code === underscore ||
          code === tilde
        ) {
        } else {
          end = index;
        }
      }
      index = end;
      if (value.charCodeAt(index - 1) === rightParenthesis) {
        path = value.slice(pathStart, index);
        leftCount = ccount(path, leftParenthesisCharacter);
        rightCount = ccount(path, rightParenthesisCharacter);
        while (rightCount > leftCount) {
          index = pathStart + path.lastIndexOf(rightParenthesisCharacter);
          path = value.slice(pathStart, index);
          rightCount--;
        }
      }
      if (value.charCodeAt(index - 1) === semicolon) {
        index--;
        if (alphabetical(value.charCodeAt(index - 1))) {
          end = index - 2;
          while (alphabetical(value.charCodeAt(end))) {
            end--;
          }
          if (value.charCodeAt(end) === ampersand) {
            index = end;
          }
        }
      }
      content = value.slice(0, index);
      url2 = decode(content, {
        nonTerminated: false
      });
      if (protocolless) {
        url2 = 'http://' + url2;
      }
      exit = self.enterLink();
      self.inlineTokenizers = {
        text: tokenizers.text
      };
      children = self.tokenizeInline(content, eat.now());
      self.inlineTokenizers = tokenizers;
      exit();
      return eat(content)({
        type: 'link',
        title: null,
        url: url2,
        children
      });
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/locate/email.js
var require_email = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/locate/email.js'(
    exports,
    module
  ) {
    'use strict';

    var decimal = __is_decimal$;
    var alphabetical = __is_alphabetical$;
    var plusSign = 43;
    var dash = 45;
    var dot = 46;
    var underscore = 95;
    module.exports = locate;
    function locate(value, fromIndex) {
      var self = this;
      var at;
      var position;
      if (!this.options.gfm) {
        return -1;
      }
      at = value.indexOf('@', fromIndex);
      if (at === -1) {
        return -1;
      }
      position = at;
      if (position === fromIndex || !isGfmAtext(value.charCodeAt(position - 1))) {
        return locate.call(self, value, at + 1);
      }
      while (position > fromIndex && isGfmAtext(value.charCodeAt(position - 1))) {
        position--;
      }
      return position;
    }
    function isGfmAtext(code) {
      return (
        decimal(code) || alphabetical(code) || code === plusSign || code === dash || code === dot || code === underscore
      );
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/email.js
var require_email2 = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/email.js'(
    exports,
    module
  ) {
    'use strict';

    var decode = __parse_entities$;
    var decimal = __is_decimal$;
    var alphabetical = __is_alphabetical$;
    var locate = require_email();
    module.exports = email;
    email.locator = locate;
    email.notInLink = true;
    var plusSign = 43;
    var dash = 45;
    var dot = 46;
    var atSign = 64;
    var underscore = 95;
    function email(eat, value, silent) {
      var self = this;
      var gfm = self.options.gfm;
      var tokenizers = self.inlineTokenizers;
      var index = 0;
      var length = value.length;
      var firstDot = -1;
      var code;
      var content;
      var children;
      var exit;
      if (!gfm) {
        return;
      }
      code = value.charCodeAt(index);
      while (
        decimal(code) ||
        alphabetical(code) ||
        code === plusSign ||
        code === dash ||
        code === dot ||
        code === underscore
      ) {
        code = value.charCodeAt(++index);
      }
      if (index === 0) {
        return;
      }
      if (code !== atSign) {
        return;
      }
      index++;
      while (index < length) {
        code = value.charCodeAt(index);
        if (decimal(code) || alphabetical(code) || code === dash || code === dot || code === underscore) {
          index++;
          if (firstDot === -1 && code === dot) {
            firstDot = index;
          }
          continue;
        }
        break;
      }
      if (firstDot === -1 || firstDot === index || code === dash || code === underscore) {
        return;
      }
      if (code === dot) {
        index--;
      }
      content = value.slice(0, index);
      if (silent) {
        return true;
      }
      exit = self.enterLink();
      self.inlineTokenizers = {
        text: tokenizers.text
      };
      children = self.tokenizeInline(content, eat.now());
      self.inlineTokenizers = tokenizers;
      exit();
      return eat(content)({
        type: 'link',
        title: null,
        url:
          'mailto:' +
          decode(content, {
            nonTerminated: false
          }),
        children
      });
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/html-inline.js
var require_html_inline = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/html-inline.js'(
    exports,
    module
  ) {
    'use strict';

    var alphabetical = __is_alphabetical$;
    var locate = require_tag();
    var tag = require_html().tag;
    module.exports = inlineHTML;
    inlineHTML.locator = locate;
    var lessThan = '<';
    var questionMark = '?';
    var exclamationMark = '!';
    var slash = '/';
    var htmlLinkOpenExpression = /^<a /i;
    var htmlLinkCloseExpression = /^<\/a>/i;
    function inlineHTML(eat, value, silent) {
      var self = this;
      var length = value.length;
      var character;
      var subvalue;
      if (value.charAt(0) !== lessThan || length < 3) {
        return;
      }
      character = value.charAt(1);
      if (
        !alphabetical(character) &&
        character !== questionMark &&
        character !== exclamationMark &&
        character !== slash
      ) {
        return;
      }
      subvalue = value.match(tag);
      if (!subvalue) {
        return;
      }
      if (silent) {
        return true;
      }
      subvalue = subvalue[0];
      if (!self.inLink && htmlLinkOpenExpression.test(subvalue)) {
        self.inLink = true;
      } else if (self.inLink && htmlLinkCloseExpression.test(subvalue)) {
        self.inLink = false;
      }
      return eat(subvalue)({
        type: 'html',
        value: subvalue
      });
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/locate/link.js
var require_link = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/locate/link.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = locate;
    function locate(value, fromIndex) {
      var link = value.indexOf('[', fromIndex);
      var image = value.indexOf('![', fromIndex);
      if (image === -1) {
        return link;
      }
      return link < image ? link : image;
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/link.js
var require_link2 = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/link.js'(
    exports,
    module
  ) {
    'use strict';

    var whitespace = __is_whitespace_character$;
    var locate = require_link();
    module.exports = link;
    link.locator = locate;
    var lineFeed = '\n';
    var exclamationMark = '!';
    var quotationMark = '"';
    var apostrophe = "'";
    var leftParenthesis = '(';
    var rightParenthesis = ')';
    var lessThan = '<';
    var greaterThan = '>';
    var leftSquareBracket = '[';
    var backslash = '\\';
    var rightSquareBracket = ']';
    var graveAccent = '`';
    function link(eat, value, silent) {
      var self = this;
      var subvalue = '';
      var index = 0;
      var character = value.charAt(0);
      var pedantic = self.options.pedantic;
      var commonmark = self.options.commonmark;
      var gfm = self.options.gfm;
      var closed;
      var count;
      var opening;
      var beforeURL;
      var beforeTitle;
      var subqueue;
      var hasMarker;
      var isImage;
      var content;
      var marker;
      var length;
      var title;
      var depth;
      var queue;
      var url;
      var now;
      var exit;
      var node;
      if (character === exclamationMark) {
        isImage = true;
        subvalue = character;
        character = value.charAt(++index);
      }
      if (character !== leftSquareBracket) {
        return;
      }
      if (!isImage && self.inLink) {
        return;
      }
      subvalue += character;
      queue = '';
      index++;
      length = value.length;
      now = eat.now();
      depth = 0;
      now.column += index;
      now.offset += index;
      while (index < length) {
        character = value.charAt(index);
        subqueue = character;
        if (character === graveAccent) {
          count = 1;
          while (value.charAt(index + 1) === graveAccent) {
            subqueue += character;
            index++;
            count++;
          }
          if (!opening) {
            opening = count;
          } else if (count >= opening) {
            opening = 0;
          }
        } else if (character === backslash) {
          index++;
          subqueue += value.charAt(index);
        } else if ((!opening || gfm) && character === leftSquareBracket) {
          depth++;
        } else if ((!opening || gfm) && character === rightSquareBracket) {
          if (depth) {
            depth--;
          } else {
            if (value.charAt(index + 1) !== leftParenthesis) {
              return;
            }
            subqueue += leftParenthesis;
            closed = true;
            index++;
            break;
          }
        }
        queue += subqueue;
        subqueue = '';
        index++;
      }
      if (!closed) {
        return;
      }
      content = queue;
      subvalue += queue + subqueue;
      index++;
      while (index < length) {
        character = value.charAt(index);
        if (!whitespace(character)) {
          break;
        }
        subvalue += character;
        index++;
      }
      character = value.charAt(index);
      queue = '';
      beforeURL = subvalue;
      if (character === lessThan) {
        index++;
        beforeURL += lessThan;
        while (index < length) {
          character = value.charAt(index);
          if (character === greaterThan) {
            break;
          }
          if (commonmark && character === lineFeed) {
            return;
          }
          queue += character;
          index++;
        }
        if (value.charAt(index) !== greaterThan) {
          return;
        }
        subvalue += lessThan + queue + greaterThan;
        url = queue;
        index++;
      } else {
        character = null;
        subqueue = '';
        while (index < length) {
          character = value.charAt(index);
          if (
            subqueue &&
            (character === quotationMark || character === apostrophe || (commonmark && character === leftParenthesis))
          ) {
            break;
          }
          if (whitespace(character)) {
            if (!pedantic) {
              break;
            }
            subqueue += character;
          } else {
            if (character === leftParenthesis) {
              depth++;
            } else if (character === rightParenthesis) {
              if (depth === 0) {
                break;
              }
              depth--;
            }
            queue += subqueue;
            subqueue = '';
            if (character === backslash) {
              queue += backslash;
              character = value.charAt(++index);
            }
            queue += character;
          }
          index++;
        }
        subvalue += queue;
        url = queue;
        index = subvalue.length;
      }
      queue = '';
      while (index < length) {
        character = value.charAt(index);
        if (!whitespace(character)) {
          break;
        }
        queue += character;
        index++;
      }
      character = value.charAt(index);
      subvalue += queue;
      if (
        queue &&
        (character === quotationMark || character === apostrophe || (commonmark && character === leftParenthesis))
      ) {
        index++;
        subvalue += character;
        queue = '';
        marker = character === leftParenthesis ? rightParenthesis : character;
        beforeTitle = subvalue;
        if (commonmark) {
          while (index < length) {
            character = value.charAt(index);
            if (character === marker) {
              break;
            }
            if (character === backslash) {
              queue += backslash;
              character = value.charAt(++index);
            }
            index++;
            queue += character;
          }
          character = value.charAt(index);
          if (character !== marker) {
            return;
          }
          title = queue;
          subvalue += queue + character;
          index++;
          while (index < length) {
            character = value.charAt(index);
            if (!whitespace(character)) {
              break;
            }
            subvalue += character;
            index++;
          }
        } else {
          subqueue = '';
          while (index < length) {
            character = value.charAt(index);
            if (character === marker) {
              if (hasMarker) {
                queue += marker + subqueue;
                subqueue = '';
              }
              hasMarker = true;
            } else if (!hasMarker) {
              queue += character;
            } else if (character === rightParenthesis) {
              subvalue += queue + marker + subqueue;
              title = queue;
              break;
            } else if (whitespace(character)) {
              subqueue += character;
            } else {
              queue += marker + subqueue + character;
              subqueue = '';
              hasMarker = false;
            }
            index++;
          }
        }
      }
      if (value.charAt(index) !== rightParenthesis) {
        return;
      }
      if (silent) {
        return true;
      }
      subvalue += rightParenthesis;
      url = self.decode.raw(self.unescape(url), eat(beforeURL).test().end, {
        nonTerminated: false
      });
      if (title) {
        beforeTitle = eat(beforeTitle).test().end;
        title = self.decode.raw(self.unescape(title), beforeTitle);
      }
      node = {
        type: isImage ? 'image' : 'link',
        title: title || null,
        url
      };
      if (isImage) {
        node.alt = self.decode.raw(self.unescape(content), now) || null;
      } else {
        exit = self.enterLink();
        node.children = self.tokenizeInline(content, now);
        exit();
      }
      return eat(subvalue)(node);
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/reference.js
var require_reference = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/reference.js'(
    exports,
    module
  ) {
    'use strict';

    var whitespace = __is_whitespace_character$;
    var locate = require_link();
    var normalize = require_normalize();
    module.exports = reference;
    reference.locator = locate;
    var link = 'link';
    var image = 'image';
    var shortcut = 'shortcut';
    var collapsed = 'collapsed';
    var full = 'full';
    var exclamationMark = '!';
    var leftSquareBracket = '[';
    var backslash = '\\';
    var rightSquareBracket = ']';
    function reference(eat, value, silent) {
      var self = this;
      var commonmark = self.options.commonmark;
      var character = value.charAt(0);
      var index = 0;
      var length = value.length;
      var subvalue = '';
      var intro = '';
      var type = link;
      var referenceType = shortcut;
      var content;
      var identifier;
      var now;
      var node;
      var exit;
      var queue;
      var bracketed;
      var depth;
      if (character === exclamationMark) {
        type = image;
        intro = character;
        character = value.charAt(++index);
      }
      if (character !== leftSquareBracket) {
        return;
      }
      index++;
      intro += character;
      queue = '';
      depth = 0;
      while (index < length) {
        character = value.charAt(index);
        if (character === leftSquareBracket) {
          bracketed = true;
          depth++;
        } else if (character === rightSquareBracket) {
          if (!depth) {
            break;
          }
          depth--;
        }
        if (character === backslash) {
          queue += backslash;
          character = value.charAt(++index);
        }
        queue += character;
        index++;
      }
      subvalue = queue;
      content = queue;
      character = value.charAt(index);
      if (character !== rightSquareBracket) {
        return;
      }
      index++;
      subvalue += character;
      queue = '';
      if (!commonmark) {
        while (index < length) {
          character = value.charAt(index);
          if (!whitespace(character)) {
            break;
          }
          queue += character;
          index++;
        }
      }
      character = value.charAt(index);
      if (character === leftSquareBracket) {
        identifier = '';
        queue += character;
        index++;
        while (index < length) {
          character = value.charAt(index);
          if (character === leftSquareBracket || character === rightSquareBracket) {
            break;
          }
          if (character === backslash) {
            identifier += backslash;
            character = value.charAt(++index);
          }
          identifier += character;
          index++;
        }
        character = value.charAt(index);
        if (character === rightSquareBracket) {
          referenceType = identifier ? full : collapsed;
          queue += identifier + character;
          index++;
        } else {
          identifier = '';
        }
        subvalue += queue;
        queue = '';
      } else {
        if (!content) {
          return;
        }
        identifier = content;
      }
      if (referenceType !== full && bracketed) {
        return;
      }
      subvalue = intro + subvalue;
      if (type === link && self.inLink) {
        return null;
      }
      if (silent) {
        return true;
      }
      now = eat.now();
      now.column += intro.length;
      now.offset += intro.length;
      identifier = referenceType === full ? identifier : content;
      node = {
        type: type + 'Reference',
        identifier: normalize(identifier),
        label: identifier,
        referenceType
      };
      if (type === link) {
        exit = self.enterLink();
        node.children = self.tokenizeInline(content, now);
        exit();
      } else {
        node.alt = self.decode.raw(self.unescape(content), now) || null;
      }
      return eat(subvalue)(node);
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/locate/strong.js
var require_strong = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/locate/strong.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = locate;
    function locate(value, fromIndex) {
      var asterisk = value.indexOf('**', fromIndex);
      var underscore = value.indexOf('__', fromIndex);
      if (underscore === -1) {
        return asterisk;
      }
      if (asterisk === -1) {
        return underscore;
      }
      return underscore < asterisk ? underscore : asterisk;
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/strong.js
var require_strong2 = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/strong.js'(
    exports,
    module
  ) {
    'use strict';

    var trim = __trim$;
    var whitespace = __is_whitespace_character$;
    var locate = require_strong();
    module.exports = strong;
    strong.locator = locate;
    var backslash = '\\';
    var asterisk = '*';
    var underscore = '_';
    function strong(eat, value, silent) {
      var self = this;
      var index = 0;
      var character = value.charAt(index);
      var now;
      var pedantic;
      var marker;
      var queue;
      var subvalue;
      var length;
      var previous;
      if ((character !== asterisk && character !== underscore) || value.charAt(++index) !== character) {
        return;
      }
      pedantic = self.options.pedantic;
      marker = character;
      subvalue = marker + marker;
      length = value.length;
      index++;
      queue = '';
      character = '';
      if (pedantic && whitespace(value.charAt(index))) {
        return;
      }
      while (index < length) {
        previous = character;
        character = value.charAt(index);
        if (character === marker && value.charAt(index + 1) === marker && (!pedantic || !whitespace(previous))) {
          character = value.charAt(index + 2);
          if (character !== marker) {
            if (!trim(queue)) {
              return;
            }
            if (silent) {
              return true;
            }
            now = eat.now();
            now.column += 2;
            now.offset += 2;
            return eat(subvalue + queue + subvalue)({
              type: 'strong',
              children: self.tokenizeInline(queue, now)
            });
          }
        }
        if (!pedantic && character === backslash) {
          queue += character;
          character = value.charAt(++index);
        }
        queue += character;
        index++;
      }
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/locate/emphasis.js
var require_emphasis = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/locate/emphasis.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = locate;
    function locate(value, fromIndex) {
      var asterisk = value.indexOf('*', fromIndex);
      var underscore = value.indexOf('_', fromIndex);
      if (underscore === -1) {
        return asterisk;
      }
      if (asterisk === -1) {
        return underscore;
      }
      return underscore < asterisk ? underscore : asterisk;
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/emphasis.js
var require_emphasis2 = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/emphasis.js'(
    exports,
    module
  ) {
    'use strict';

    var trim = __trim$;
    var word = __is_word_character$;
    var whitespace = __is_whitespace_character$;
    var locate = require_emphasis();
    module.exports = emphasis;
    emphasis.locator = locate;
    var asterisk = '*';
    var underscore = '_';
    var backslash = '\\';
    function emphasis(eat, value, silent) {
      var self = this;
      var index = 0;
      var character = value.charAt(index);
      var now;
      var pedantic;
      var marker;
      var queue;
      var subvalue;
      var length;
      var previous;
      if (character !== asterisk && character !== underscore) {
        return;
      }
      pedantic = self.options.pedantic;
      subvalue = character;
      marker = character;
      length = value.length;
      index++;
      queue = '';
      character = '';
      if (pedantic && whitespace(value.charAt(index))) {
        return;
      }
      while (index < length) {
        previous = character;
        character = value.charAt(index);
        if (character === marker && (!pedantic || !whitespace(previous))) {
          character = value.charAt(++index);
          if (character !== marker) {
            if (!trim(queue) || previous === marker) {
              return;
            }
            if (!pedantic && marker === underscore && word(character)) {
              queue += marker;
              continue;
            }
            if (silent) {
              return true;
            }
            now = eat.now();
            now.column++;
            now.offset++;
            return eat(subvalue + queue + marker)({
              type: 'emphasis',
              children: self.tokenizeInline(queue, now)
            });
          }
          queue += marker;
        }
        if (!pedantic && character === backslash) {
          queue += character;
          character = value.charAt(++index);
        }
        queue += character;
        index++;
      }
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/locate/delete.js
var require_delete = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/locate/delete.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = locate;
    function locate(value, fromIndex) {
      return value.indexOf('~~', fromIndex);
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/delete.js
var require_delete2 = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/delete.js'(
    exports,
    module
  ) {
    'use strict';

    var whitespace = __is_whitespace_character$;
    var locate = require_delete();
    module.exports = strikethrough;
    strikethrough.locator = locate;
    var tilde = '~';
    var fence = '~~';
    function strikethrough(eat, value, silent) {
      var self = this;
      var character = '';
      var previous = '';
      var preceding = '';
      var subvalue = '';
      var index;
      var length;
      var now;
      if (!self.options.gfm || value.charAt(0) !== tilde || value.charAt(1) !== tilde || whitespace(value.charAt(2))) {
        return;
      }
      index = 1;
      length = value.length;
      now = eat.now();
      now.column += 2;
      now.offset += 2;
      while (++index < length) {
        character = value.charAt(index);
        if (character === tilde && previous === tilde && (!preceding || !whitespace(preceding))) {
          if (silent) {
            return true;
          }
          return eat(fence + subvalue + fence)({
            type: 'delete',
            children: self.tokenizeInline(subvalue, now)
          });
        }
        subvalue += previous;
        preceding = previous;
        previous = character;
      }
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/locate/code-inline.js
var require_code_inline = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/locate/code-inline.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = locate;
    function locate(value, fromIndex) {
      return value.indexOf('`', fromIndex);
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/code-inline.js
var require_code_inline2 = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/code-inline.js'(
    exports,
    module
  ) {
    'use strict';

    var locate = require_code_inline();
    module.exports = inlineCode;
    inlineCode.locator = locate;
    var lineFeed = 10;
    var space = 32;
    var graveAccent = 96;
    function inlineCode(eat, value, silent) {
      var length = value.length;
      var index = 0;
      var openingFenceEnd;
      var closingFenceStart;
      var closingFenceEnd;
      var code;
      var next;
      var found;
      while (index < length) {
        if (value.charCodeAt(index) !== graveAccent) {
          break;
        }
        index++;
      }
      if (index === 0 || index === length) {
        return;
      }
      openingFenceEnd = index;
      next = value.charCodeAt(index);
      while (index < length) {
        code = next;
        next = value.charCodeAt(index + 1);
        if (code === graveAccent) {
          if (closingFenceStart === void 0) {
            closingFenceStart = index;
          }
          closingFenceEnd = index + 1;
          if (next !== graveAccent && closingFenceEnd - closingFenceStart === openingFenceEnd) {
            found = true;
            break;
          }
        } else if (closingFenceStart !== void 0) {
          closingFenceStart = void 0;
          closingFenceEnd = void 0;
        }
        index++;
      }
      if (!found) {
        return;
      }
      if (silent) {
        return true;
      }
      index = openingFenceEnd;
      length = closingFenceStart;
      code = value.charCodeAt(index);
      next = value.charCodeAt(length - 1);
      found = false;
      if (length - index > 2 && (code === space || code === lineFeed) && (next === space || next === lineFeed)) {
        index++;
        length--;
        while (index < length) {
          code = value.charCodeAt(index);
          if (code !== space && code !== lineFeed) {
            found = true;
            break;
          }
          index++;
        }
        if (found === true) {
          openingFenceEnd++;
          closingFenceStart--;
        }
      }
      return eat(value.slice(0, closingFenceEnd))({
        type: 'inlineCode',
        value: value.slice(openingFenceEnd, closingFenceStart)
      });
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/locate/break.js
var require_break = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/locate/break.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = locate;
    function locate(value, fromIndex) {
      var index = value.indexOf('\n', fromIndex);
      while (index > fromIndex) {
        if (value.charAt(index - 1) !== ' ') {
          break;
        }
        index--;
      }
      return index;
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/break.js
var require_break2 = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/break.js'(
    exports,
    module
  ) {
    'use strict';

    var locate = require_break();
    module.exports = hardBreak;
    hardBreak.locator = locate;
    var space = ' ';
    var lineFeed = '\n';
    var minBreakLength = 2;
    function hardBreak(eat, value, silent) {
      var length = value.length;
      var index = -1;
      var queue = '';
      var character;
      while (++index < length) {
        character = value.charAt(index);
        if (character === lineFeed) {
          if (index < minBreakLength) {
            return;
          }
          if (silent) {
            return true;
          }
          queue += character;
          return eat(queue)({
            type: 'break'
          });
        }
        if (character !== space) {
          return;
        }
        queue += character;
      }
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/text.js
var require_text = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/tokenize/text.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = text;
    function text(eat, value, silent) {
      var self = this;
      var methods;
      var tokenizers;
      var index;
      var length;
      var subvalue;
      var position;
      var tokenizer;
      var name;
      var min;
      var now;
      if (silent) {
        return true;
      }
      methods = self.inlineMethods;
      length = methods.length;
      tokenizers = self.inlineTokenizers;
      index = -1;
      min = value.length;
      while (++index < length) {
        name = methods[index];
        if (name === 'text' || !tokenizers[name]) {
          continue;
        }
        tokenizer = tokenizers[name].locator;
        if (!tokenizer) {
          eat.file.fail('Missing locator: `' + name + '`');
        }
        position = tokenizer.call(self, value, 1);
        if (position !== -1 && position < min) {
          min = position;
        }
      }
      subvalue = value.slice(0, min);
      now = eat.now();
      self.decode(subvalue, now, handler);
      function handler(content, position2, source) {
        eat(source || content)({
          type: 'text',
          value: content
        });
      }
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/parser.js
var require_parser = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/lib/parser.js'(
    exports,
    module
  ) {
    'use strict';

    var xtend = __xtend$;
    var toggle = __state_toggle$;
    var vfileLocation = __vfile_location$;
    var unescape = require_unescape();
    var decode = require_decode();
    var tokenizer = require_tokenizer();
    module.exports = Parser;
    function Parser(doc, file) {
      this.file = file;
      this.offset = {};
      this.options = xtend(this.options);
      this.setOptions({});
      this.inList = false;
      this.inBlock = false;
      this.inLink = false;
      this.atStart = true;
      this.toOffset = vfileLocation(file).toOffset;
      this.unescape = unescape(this, 'escape');
      this.decode = decode(this);
    }
    var proto = Parser.prototype;
    proto.setOptions = require_set_options();
    proto.parse = require_parse();
    proto.options = require_defaults();
    proto.exitStart = toggle('atStart', true);
    proto.enterList = toggle('inList', false);
    proto.enterLink = toggle('inLink', false);
    proto.enterBlock = toggle('inBlock', false);
    proto.interruptParagraph = [
      ['thematicBreak'],
      ['list'],
      ['atxHeading'],
      ['fencedCode'],
      ['blockquote'],
      ['html'],
      [
        'setextHeading',
        {
          commonmark: false
        }
      ],
      [
        'definition',
        {
          commonmark: false
        }
      ]
    ];
    proto.interruptList = [
      [
        'atxHeading',
        {
          pedantic: false
        }
      ],
      [
        'fencedCode',
        {
          pedantic: false
        }
      ],
      [
        'thematicBreak',
        {
          pedantic: false
        }
      ],
      [
        'definition',
        {
          commonmark: false
        }
      ]
    ];
    proto.interruptBlockquote = [
      [
        'indentedCode',
        {
          commonmark: true
        }
      ],
      [
        'fencedCode',
        {
          commonmark: true
        }
      ],
      [
        'atxHeading',
        {
          commonmark: true
        }
      ],
      [
        'setextHeading',
        {
          commonmark: true
        }
      ],
      [
        'thematicBreak',
        {
          commonmark: true
        }
      ],
      [
        'html',
        {
          commonmark: true
        }
      ],
      [
        'list',
        {
          commonmark: true
        }
      ],
      [
        'definition',
        {
          commonmark: false
        }
      ]
    ];
    proto.blockTokenizers = {
      blankLine: require_blank_line(),
      indentedCode: require_code_indented(),
      fencedCode: require_code_fenced(),
      blockquote: require_blockquote(),
      atxHeading: require_heading_atx(),
      thematicBreak: require_thematic_break(),
      list: require_list(),
      setextHeading: require_heading_setext(),
      html: require_html_block(),
      definition: require_definition(),
      table: require_table(),
      paragraph: require_paragraph()
    };
    proto.inlineTokenizers = {
      escape: require_escape2(),
      autoLink: require_auto_link(),
      url: require_url2(),
      email: require_email2(),
      html: require_html_inline(),
      link: require_link2(),
      reference: require_reference(),
      strong: require_strong2(),
      emphasis: require_emphasis2(),
      deletion: require_delete2(),
      code: require_code_inline2(),
      break: require_break2(),
      text: require_text()
    };
    proto.blockMethods = keys(proto.blockTokenizers);
    proto.inlineMethods = keys(proto.inlineTokenizers);
    proto.tokenizeBlock = tokenizer('block');
    proto.tokenizeInline = tokenizer('inline');
    proto.tokenizeFactory = tokenizer;
    function keys(value) {
      var result = [];
      var key;
      for (key in value) {
        result.push(key);
      }
      return result;
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/index.js
var require_remark_parse = __commonJS({
  'esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/node_modules/remark-parse/index.js'(exports, module) {
    'use strict';

    var unherit = __unherit$;
    var xtend = __xtend$;
    var Parser = require_parser();
    module.exports = parse;
    parse.Parser = Parser;
    function parse(options) {
      var settings = this.data('settings');
      var Local = unherit(Parser);
      Local.prototype.options = xtend(Local.prototype.options, settings, options);
      this.Parser = Local;
    }
  }
});

// esm-build-729614d52992eca1f727c328eb7df34bb89ff4f7-62ebe313/mod.js
var __module = __toESM(require_remark_parse());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
