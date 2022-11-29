/* esm.sh - esbuild bundle(vfile-message@3.1.3) es2022 development */
// esm-build-e48d6cc911cbdafeca6a8c86dcbdb3553f9b885b-68e18a5a/node_modules/vfile-message/index.js
import { stringifyPosition } from '/cdn/v99/unist-util-stringify-position@3.0.2/es2022/unist-util-stringify-position.development.js';
var VFileMessage = class extends Error {
  constructor(reason, place, origin) {
    const parts = [null, null];
    let position = {
      start: {
        line: null,
        column: null
      },
      end: {
        line: null,
        column: null
      }
    };
    super();
    if (typeof place === 'string') {
      origin = place;
      place = void 0;
    }
    if (typeof origin === 'string') {
      const index = origin.indexOf(':');
      if (index === -1) {
        parts[1] = origin;
      } else {
        parts[0] = origin.slice(0, index);
        parts[1] = origin.slice(index + 1);
      }
    }
    if (place) {
      if ('type' in place || 'position' in place) {
        if (place.position) {
          position = place.position;
        }
      } else if ('start' in place || 'end' in place) {
        position = place;
      } else if ('line' in place || 'column' in place) {
        position.start = place;
      }
    }
    this.name = stringifyPosition(place) || '1:1';
    this.message = typeof reason === 'object' ? reason.message : reason;
    this.stack = '';
    if (typeof reason === 'object' && reason.stack) {
      this.stack = reason.stack;
    }
    this.reason = this.message;
    this.fatal;
    this.line = position.start.line;
    this.column = position.start.column;
    this.position = position;
    this.source = parts[0];
    this.ruleId = parts[1];
    this.file;
    this.actual;
    this.expected;
    this.url;
    this.note;
  }
};
VFileMessage.prototype.file = '';
VFileMessage.prototype.name = '';
VFileMessage.prototype.reason = '';
VFileMessage.prototype.message = '';
VFileMessage.prototype.stack = '';
VFileMessage.prototype.fatal = null;
VFileMessage.prototype.column = null;
VFileMessage.prototype.line = null;
VFileMessage.prototype.source = null;
VFileMessage.prototype.ruleId = null;
VFileMessage.prototype.position = null;
export { VFileMessage };