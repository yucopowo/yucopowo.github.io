/* esm.sh - esbuild bundle(@babel/code-frame@7.18.6) es2022 development */
import __Process$ from '/cdn/v99/node_process.js';
import * as ___babel_highlight$ from '/cdn/v99/@babel/highlight@7.18.6/es2022/highlight.development.js';
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

// esm-build-12544cf5bbe733a224280d122c3d8a3a6f01f783-a52c9d0f/node_modules/@babel/code-frame/lib/index.js
var require_lib = __commonJS({
  'esm-build-12544cf5bbe733a224280d122c3d8a3a6f01f783-a52c9d0f/node_modules/@babel/code-frame/lib/index.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.codeFrameColumns = codeFrameColumns2;
    exports.default = _default;
    var _highlight = ___babel_highlight$;
    var deprecationWarningShown = false;
    function getDefs(chalk) {
      return {
        gutter: chalk.grey,
        marker: chalk.red.bold,
        message: chalk.red.bold
      };
    }
    var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
    function getMarkerLines(loc, source, opts) {
      const startLoc = Object.assign(
        {
          column: 0,
          line: -1
        },
        loc.start
      );
      const endLoc = Object.assign({}, startLoc, loc.end);
      const { linesAbove = 2, linesBelow = 3 } = opts || {};
      const startLine = startLoc.line;
      const startColumn = startLoc.column;
      const endLine = endLoc.line;
      const endColumn = endLoc.column;
      let start = Math.max(startLine - (linesAbove + 1), 0);
      let end = Math.min(source.length, endLine + linesBelow);
      if (startLine === -1) {
        start = 0;
      }
      if (endLine === -1) {
        end = source.length;
      }
      const lineDiff = endLine - startLine;
      const markerLines = {};
      if (lineDiff) {
        for (let i = 0; i <= lineDiff; i++) {
          const lineNumber = i + startLine;
          if (!startColumn) {
            markerLines[lineNumber] = true;
          } else if (i === 0) {
            const sourceLength = source[lineNumber - 1].length;
            markerLines[lineNumber] = [startColumn, sourceLength - startColumn + 1];
          } else if (i === lineDiff) {
            markerLines[lineNumber] = [0, endColumn];
          } else {
            const sourceLength = source[lineNumber - i].length;
            markerLines[lineNumber] = [0, sourceLength];
          }
        }
      } else {
        if (startColumn === endColumn) {
          if (startColumn) {
            markerLines[startLine] = [startColumn, 0];
          } else {
            markerLines[startLine] = true;
          }
        } else {
          markerLines[startLine] = [startColumn, endColumn - startColumn];
        }
      }
      return {
        start,
        end,
        markerLines
      };
    }
    function codeFrameColumns2(rawLines, loc, opts = {}) {
      const highlighted = (opts.highlightCode || opts.forceColor) && (0, _highlight.shouldHighlight)(opts);
      const chalk = (0, _highlight.getChalk)(opts);
      const defs = getDefs(chalk);
      const maybeHighlight = (chalkFn, string) => {
        return highlighted ? chalkFn(string) : string;
      };
      const lines = rawLines.split(NEWLINE);
      const { start, end, markerLines } = getMarkerLines(loc, lines, opts);
      const hasColumns = loc.start && typeof loc.start.column === 'number';
      const numberMaxWidth = String(end).length;
      const highlightedLines = highlighted ? (0, _highlight.default)(rawLines, opts) : rawLines;
      let frame = highlightedLines
        .split(NEWLINE, end)
        .slice(start, end)
        .map((line, index) => {
          const number = start + 1 + index;
          const paddedNumber = ` ${number}`.slice(-numberMaxWidth);
          const gutter = ` ${paddedNumber} |`;
          const hasMarker = markerLines[number];
          const lastMarkerLine = !markerLines[number + 1];
          if (hasMarker) {
            let markerLine = '';
            if (Array.isArray(hasMarker)) {
              const markerSpacing = line.slice(0, Math.max(hasMarker[0] - 1, 0)).replace(/[^\t]/g, ' ');
              const numberOfMarkers = hasMarker[1] || 1;
              markerLine = [
                '\n ',
                maybeHighlight(defs.gutter, gutter.replace(/\d/g, ' ')),
                ' ',
                markerSpacing,
                maybeHighlight(defs.marker, '^').repeat(numberOfMarkers)
              ].join('');
              if (lastMarkerLine && opts.message) {
                markerLine += ' ' + maybeHighlight(defs.message, opts.message);
              }
            }
            return [
              maybeHighlight(defs.marker, '>'),
              maybeHighlight(defs.gutter, gutter),
              line.length > 0 ? ` ${line}` : '',
              markerLine
            ].join('');
          } else {
            return ` ${maybeHighlight(defs.gutter, gutter)}${line.length > 0 ? ` ${line}` : ''}`;
          }
        })
        .join('\n');
      if (opts.message && !hasColumns) {
        frame = `${' '.repeat(numberMaxWidth + 1)}${opts.message}
${frame}`;
      }
      if (highlighted) {
        return chalk.reset(frame);
      } else {
        return frame;
      }
    }
    function _default(rawLines, lineNumber, colNumber, opts = {}) {
      if (!deprecationWarningShown) {
        deprecationWarningShown = true;
        const message =
          'Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.';
        if (__Process$.emitWarning) {
          __Process$.emitWarning(message, 'DeprecationWarning');
        } else {
          const deprecationError = new Error(message);
          deprecationError.name = 'DeprecationWarning';
          console.warn(new Error(message));
        }
      }
      colNumber = Math.max(colNumber, 0);
      const location = {
        start: {
          column: colNumber,
          line: lineNumber
        }
      };
      return codeFrameColumns2(rawLines, location, opts);
    }
  }
});

// esm-build-12544cf5bbe733a224280d122c3d8a3a6f01f783-a52c9d0f/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { codeFrameColumns } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, codeFrameColumns, mod_default as default };
