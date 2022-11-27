/* esm.sh - esbuild bundle(copy-to-clipboard@3.3.3) es2022 development */
import __toggle_selection$ from '/cdn/v99/toggle-selection@1.0.6/es2022/toggle-selection.development.js';
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

// esm-build-4926eaba970374830a84caef30eb41e8e44a0e5f-634733a7/node_modules/copy-to-clipboard/index.js
var require_copy_to_clipboard = __commonJS({
  'esm-build-4926eaba970374830a84caef30eb41e8e44a0e5f-634733a7/node_modules/copy-to-clipboard/index.js'(
    exports,
    module
  ) {
    'use strict';

    var deselectCurrent = __toggle_selection$;
    var clipboardToIE11Formatting = {
      'text/plain': 'Text',
      'text/html': 'Url',
      default: 'Text'
    };
    var defaultMessage = 'Copy to clipboard: #{key}, Enter';
    function format(message) {
      var copyKey = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
      return message.replace(/#{\s*key\s*}/g, copyKey);
    }
    function copy(text, options) {
      var debug,
        message,
        reselectPrevious,
        range,
        selection,
        mark,
        success = false;
      if (!options) {
        options = {};
      }
      debug = options.debug || false;
      try {
        reselectPrevious = deselectCurrent();
        range = document.createRange();
        selection = document.getSelection();
        mark = document.createElement('span');
        mark.textContent = text;
        mark.ariaHidden = 'true';
        mark.style.all = 'unset';
        mark.style.position = 'fixed';
        mark.style.top = 0;
        mark.style.clip = 'rect(0, 0, 0, 0)';
        mark.style.whiteSpace = 'pre';
        mark.style.webkitUserSelect = 'text';
        mark.style.MozUserSelect = 'text';
        mark.style.msUserSelect = 'text';
        mark.style.userSelect = 'text';
        mark.addEventListener('copy', function(e) {
          e.stopPropagation();
          if (options.format) {
            e.preventDefault();
            if (typeof e.clipboardData === 'undefined') {
              debug && console.warn('unable to use e.clipboardData');
              debug && console.warn('trying IE specific stuff');
              window.clipboardData.clearData();
              var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting['default'];
              window.clipboardData.setData(format2, text);
            } else {
              e.clipboardData.clearData();
              e.clipboardData.setData(options.format, text);
            }
          }
          if (options.onCopy) {
            e.preventDefault();
            options.onCopy(e.clipboardData);
          }
        });
        document.body.appendChild(mark);
        range.selectNodeContents(mark);
        selection.addRange(range);
        var successful = document.execCommand('copy');
        if (!successful) {
          throw new Error('copy command was unsuccessful');
        }
        success = true;
      } catch (err) {
        debug && console.error('unable to copy using execCommand: ', err);
        debug && console.warn('trying IE specific stuff');
        try {
          window.clipboardData.setData(options.format || 'text', text);
          options.onCopy && options.onCopy(window.clipboardData);
          success = true;
        } catch (err2) {
          debug && console.error('unable to copy using clipboardData: ', err2);
          debug && console.error('falling back to prompt');
          message = format('message' in options ? options.message : defaultMessage);
          window.prompt(message, text);
        }
      } finally {
        if (selection) {
          if (typeof selection.removeRange == 'function') {
            selection.removeRange(range);
          } else {
            selection.removeAllRanges();
          }
        }
        if (mark) {
          document.body.removeChild(mark);
        }
        reselectPrevious();
      }
      return success;
    }
    module.exports = copy;
  }
});

// esm-build-4926eaba970374830a84caef30eb41e8e44a0e5f-634733a7/mod.js
var __module = __toESM(require_copy_to_clipboard());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
