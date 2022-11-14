(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.mdast = factory());
})(this, (function () { 'use strict';

  /**
   * Throw a given error.
   *
   * @param {Error|null|undefined} [error]
   *   Maybe error.
   * @returns {asserts error is null|undefined}
   */
  function bail(error) {
    if (error) {
      throw error
    }
  }

  /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */

  var isBuffer = function isBuffer (obj) {
    return obj != null && obj.constructor != null &&
      typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
  };

  var hasOwn = Object.prototype.hasOwnProperty;
  var toStr = Object.prototype.toString;
  var defineProperty = Object.defineProperty;
  var gOPD = Object.getOwnPropertyDescriptor;

  var isArray = function isArray(arr) {
  	if (typeof Array.isArray === 'function') {
  		return Array.isArray(arr);
  	}

  	return toStr.call(arr) === '[object Array]';
  };

  var isPlainObject$1 = function isPlainObject(obj) {
  	if (!obj || toStr.call(obj) !== '[object Object]') {
  		return false;
  	}

  	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
  	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
  	// Not own constructor property must be Object
  	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
  		return false;
  	}

  	// Own properties are enumerated firstly, so to speed up,
  	// if last one is own, then all properties are own.
  	var key;
  	for (key in obj) { /**/ }

  	return typeof key === 'undefined' || hasOwn.call(obj, key);
  };

  // If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
  var setProperty = function setProperty(target, options) {
  	if (defineProperty && options.name === '__proto__') {
  		defineProperty(target, options.name, {
  			enumerable: true,
  			configurable: true,
  			value: options.newValue,
  			writable: true
  		});
  	} else {
  		target[options.name] = options.newValue;
  	}
  };

  // Return undefined instead of __proto__ if '__proto__' is not an own property
  var getProperty = function getProperty(obj, name) {
  	if (name === '__proto__') {
  		if (!hasOwn.call(obj, name)) {
  			return void 0;
  		} else if (gOPD) {
  			// In early versions of node, obj['__proto__'] is buggy when obj has
  			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
  			return gOPD(obj, name).value;
  		}
  	}

  	return obj[name];
  };

  var extend = function extend() {
  	var options, name, src, copy, copyIsArray, clone;
  	var target = arguments[0];
  	var i = 1;
  	var length = arguments.length;
  	var deep = false;

  	// Handle a deep copy situation
  	if (typeof target === 'boolean') {
  		deep = target;
  		target = arguments[1] || {};
  		// skip the boolean and the target
  		i = 2;
  	}
  	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
  		target = {};
  	}

  	for (; i < length; ++i) {
  		options = arguments[i];
  		// Only deal with non-null/undefined values
  		if (options != null) {
  			// Extend the base object
  			for (name in options) {
  				src = getProperty(target, name);
  				copy = getProperty(options, name);

  				// Prevent never-ending loop
  				if (target !== copy) {
  					// Recurse if we're merging plain objects or arrays
  					if (deep && copy && (isPlainObject$1(copy) || (copyIsArray = isArray(copy)))) {
  						if (copyIsArray) {
  							copyIsArray = false;
  							clone = src && isArray(src) ? src : [];
  						} else {
  							clone = src && isPlainObject$1(src) ? src : {};
  						}

  						// Never move original objects, clone them
  						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

  					// Don't bring in undefined values
  					} else if (typeof copy !== 'undefined') {
  						setProperty(target, { name: name, newValue: copy });
  					}
  				}
  			}
  		}
  	}

  	// Return the modified object
  	return target;
  };

  function isPlainObject(value) {
  	if (typeof value !== 'object' || value === null) {
  		return false;
  	}

  	const prototype = Object.getPrototypeOf(value);
  	return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
  }

  /**
   * @typedef {(error?: Error|null|undefined, ...output: Array<any>) => void} Callback
   * @typedef {(...input: Array<any>) => any} Middleware
   *
   * @typedef {(...input: Array<any>) => void} Run
   *   Call all middleware.
   * @typedef {(fn: Middleware) => Pipeline} Use
   *   Add `fn` (middleware) to the list.
   * @typedef {{run: Run, use: Use}} Pipeline
   *   Middleware.
   */

  /**
   * Create new middleware.
   *
   * @returns {Pipeline}
   */
  function trough() {
    /** @type {Array<Middleware>} */
    const fns = [];
    /** @type {Pipeline} */
    const pipeline = {run, use};

    return pipeline

    /** @type {Run} */
    function run(...values) {
      let middlewareIndex = -1;
      /** @type {Callback} */
      const callback = values.pop();

      if (typeof callback !== 'function') {
        throw new TypeError('Expected function as last argument, not ' + callback)
      }

      next(null, ...values);

      /**
       * Run the next `fn`, or we’re done.
       *
       * @param {Error|null|undefined} error
       * @param {Array<any>} output
       */
      function next(error, ...output) {
        const fn = fns[++middlewareIndex];
        let index = -1;

        if (error) {
          callback(error);
          return
        }

        // Copy non-nullish input into values.
        while (++index < values.length) {
          if (output[index] === null || output[index] === undefined) {
            output[index] = values[index];
          }
        }

        // Save the newly created `output` for the next call.
        values = output;

        // Next or done.
        if (fn) {
          wrap(fn, next)(...output);
        } else {
          callback(null, ...output);
        }
      }
    }

    /** @type {Use} */
    function use(middelware) {
      if (typeof middelware !== 'function') {
        throw new TypeError(
          'Expected `middelware` to be a function, not ' + middelware
        )
      }

      fns.push(middelware);
      return pipeline
    }
  }

  /**
   * Wrap `middleware`.
   * Can be sync or async; return a promise, receive a callback, or return new
   * values and errors.
   *
   * @param {Middleware} middleware
   * @param {Callback} callback
   */
  function wrap(middleware, callback) {
    /** @type {boolean} */
    let called;

    return wrapped

    /**
     * Call `middleware`.
     * @this {any}
     * @param {Array<any>} parameters
     * @returns {void}
     */
    function wrapped(...parameters) {
      const fnExpectsCallback = middleware.length > parameters.length;
      /** @type {any} */
      let result;

      if (fnExpectsCallback) {
        parameters.push(done);
      }

      try {
        result = middleware.apply(this, parameters);
      } catch (error) {
        const exception = /** @type {Error} */ (error);

        // Well, this is quite the pickle.
        // `middleware` received a callback and called it synchronously, but that
        // threw an error.
        // The only thing left to do is to throw the thing instead.
        if (fnExpectsCallback && called) {
          throw exception
        }

        return done(exception)
      }

      if (!fnExpectsCallback) {
        if (result instanceof Promise) {
          result.then(then, done);
        } else if (result instanceof Error) {
          done(result);
        } else {
          then(result);
        }
      }
    }

    /**
     * Call `callback`, only once.
     * @type {Callback}
     */
    function done(error, ...output) {
      if (!called) {
        called = true;
        callback(error, ...output);
      }
    }

    /**
     * Call `done` with one value.
     *
     * @param {any} [value]
     */
    function then(value) {
      done(null, value);
    }
  }

  /**
   * @typedef {import('unist').Point} Point
   * @typedef {import('unist').Node} Node
   * @typedef {import('unist').Position} Position
   * @typedef {object & {type: string, position?: Position|undefined}} NodeLike
   */

  /**
   * Stringify one point, a position (start and end points), or a node’s
   * positional information.
   *
   * @param {Node|NodeLike|Position|Point|null} [value]
   * @returns {string}
   */
  function stringifyPosition(value) {
    // Nothing.
    if (!value || typeof value !== 'object') {
      return ''
    }

    // Node.
    if ('position' in value || 'type' in value) {
      return position(value.position)
    }

    // Position.
    if ('start' in value || 'end' in value) {
      return position(value)
    }

    // Point.
    if ('line' in value || 'column' in value) {
      return point(value)
    }

    // ?
    return ''
  }

  /**
   * @param {Point|undefined} point
   * @returns {string}
   */
  function point(point) {
    return index(point && point.line) + ':' + index(point && point.column)
  }

  /**
   * @param {Position|undefined} pos
   * @returns {string}
   */
  function position(pos) {
    return point(pos && pos.start) + '-' + point(pos && pos.end)
  }

  /**
   * @param {number|undefined} value
   * @returns {number}
   */
  function index(value) {
    return value && typeof value === 'number' ? value : 1
  }

  /**
   * @typedef {import('unist').Node} Node
   * @typedef {import('unist').Position} Position
   * @typedef {import('unist').Point} Point
   * @typedef {object & {type: string, position?: Position|undefined}} NodeLike
   */

  class VFileMessage extends Error {
    /**
     * Constructor of a message for `reason` at `place` from `origin`.
     * When an error is passed in as `reason`, copies the `stack`.
     *
     * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
     * @param {Node|NodeLike|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
     * @param {string} [origin] Place in code the message originates from (`string`, optional).
     */
    constructor(reason, place, origin) {
      /** @type {[string|null, string|null]} */
      const parts = [null, null];
      /** @type {Position} */
      let position = {
        // @ts-expect-error: we always follows the structure of `position`.
        start: {line: null, column: null},
        // @ts-expect-error: "
        end: {line: null, column: null}
      };

      super();

      if (typeof place === 'string') {
        origin = place;
        place = undefined;
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
        // Node.
        if ('type' in place || 'position' in place) {
          if (place.position) {
            position = place.position;
          }
        }
        // Position.
        else if ('start' in place || 'end' in place) {
          position = place;
        }
        // Point.
        else if ('line' in place || 'column' in place) {
          position.start = place;
        }
      }

      // Fields from `Error`
      this.name = stringifyPosition(place) || '1:1';
      this.message = typeof reason === 'object' ? reason.message : reason;
      this.stack = typeof reason === 'object' ? reason.stack : '';

      /**
       * Reason for message.
       * @type {string}
       */
      this.reason = this.message;
      /**
       * If true, marks associated file as no longer processable.
       * @type {boolean?}
       */
      // eslint-disable-next-line no-unused-expressions
      this.fatal;
      /**
       * Starting line of error.
       * @type {number?}
       */
      this.line = position.start.line;
      /**
       * Starting column of error.
       * @type {number?}
       */
      this.column = position.start.column;
      /**
       * Namespace of warning.
       * @type {string?}
       */
      this.source = parts[0];
      /**
       * Category of message.
       * @type {string?}
       */
      this.ruleId = parts[1];
      /**
       * Full range information, when available.
       * Has start and end properties, both set to an object with line and column, set to number?.
       * @type {Position?}
       */
      this.position = position;

      // The following fields are “well known”.
      // Not standard.
      // Feel free to add other non-standard fields to your messages.

      /* eslint-disable no-unused-expressions */
      /**
       * You can use this to specify the source value that’s being reported, which
       * is deemed incorrect.
       * @type {string?}
       */
      this.actual;
      /**
       * You can use this to suggest values that should be used instead of
       * `actual`, one or more values that are deemed as acceptable.
       * @type {Array<string>?}
       */
      this.expected;
      /**
       * You may add a file property with a path of a file (used throughout the VFile ecosystem).
       * @type {string?}
       */
      this.file;
      /**
       * You may add a url property with a link to documentation for the message.
       * @type {string?}
       */
      this.url;
      /**
       * You may add a note property with a long form description of the message (supported by vfile-reporter).
       * @type {string?}
       */
      this.note;
      /* eslint-enable no-unused-expressions */
    }
  }

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

  // A derivative work based on:
  // <https://github.com/browserify/path-browserify>.
  // Which is licensed:
  //
  // MIT License
  //
  // Copyright (c) 2013 James Halliday
  //
  // Permission is hereby granted, free of charge, to any person obtaining a copy of
  // this software and associated documentation files (the "Software"), to deal in
  // the Software without restriction, including without limitation the rights to
  // use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
  // the Software, and to permit persons to whom the Software is furnished to do so,
  // subject to the following conditions:
  //
  // The above copyright notice and this permission notice shall be included in all
  // copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
  // FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
  // COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
  // IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  // CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  // A derivative work based on:
  //
  // Parts of that are extracted from Node’s internal `path` module:
  // <https://github.com/nodejs/node/blob/master/lib/path.js>.
  // Which is licensed:
  //
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  const path$1 = {basename, dirname, extname, join, sep: '/'};

  /* eslint-disable max-depth, complexity */

  /**
   * @param {string} path
   * @param {string} [ext]
   * @returns {string}
   */
  function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string') {
      throw new TypeError('"ext" argument must be a string')
    }

    assertPath$1(path);
    let start = 0;
    let end = -1;
    let index = path.length;
    /** @type {boolean|undefined} */
    let seenNonSlash;

    if (ext === undefined || ext.length === 0 || ext.length > path.length) {
      while (index--) {
        if (path.charCodeAt(index) === 47 /* `/` */) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now.
          if (seenNonSlash) {
            start = index + 1;
            break
          }
        } else if (end < 0) {
          // We saw the first non-path separator, mark this as the end of our
          // path component.
          seenNonSlash = true;
          end = index + 1;
        }
      }

      return end < 0 ? '' : path.slice(start, end)
    }

    if (ext === path) {
      return ''
    }

    let firstNonSlashEnd = -1;
    let extIndex = ext.length - 1;

    while (index--) {
      if (path.charCodeAt(index) === 47 /* `/` */) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now.
        if (seenNonSlash) {
          start = index + 1;
          break
        }
      } else {
        if (firstNonSlashEnd < 0) {
          // We saw the first non-path separator, remember this index in case
          // we need it if the extension ends up not matching.
          seenNonSlash = true;
          firstNonSlashEnd = index + 1;
        }

        if (extIndex > -1) {
          // Try to match the explicit extension.
          if (path.charCodeAt(index) === ext.charCodeAt(extIndex--)) {
            if (extIndex < 0) {
              // We matched the extension, so mark this as the end of our path
              // component
              end = index;
            }
          } else {
            // Extension does not match, so our result is the entire path
            // component
            extIndex = -1;
            end = firstNonSlashEnd;
          }
        }
      }
    }

    if (start === end) {
      end = firstNonSlashEnd;
    } else if (end < 0) {
      end = path.length;
    }

    return path.slice(start, end)
  }

  /**
   * @param {string} path
   * @returns {string}
   */
  function dirname(path) {
    assertPath$1(path);

    if (path.length === 0) {
      return '.'
    }

    let end = -1;
    let index = path.length;
    /** @type {boolean|undefined} */
    let unmatchedSlash;

    // Prefix `--` is important to not run on `0`.
    while (--index) {
      if (path.charCodeAt(index) === 47 /* `/` */) {
        if (unmatchedSlash) {
          end = index;
          break
        }
      } else if (!unmatchedSlash) {
        // We saw the first non-path separator
        unmatchedSlash = true;
      }
    }

    return end < 0
      ? path.charCodeAt(0) === 47 /* `/` */
        ? '/'
        : '.'
      : end === 1 && path.charCodeAt(0) === 47 /* `/` */
      ? '//'
      : path.slice(0, end)
  }

  /**
   * @param {string} path
   * @returns {string}
   */
  function extname(path) {
    assertPath$1(path);

    let index = path.length;

    let end = -1;
    let startPart = 0;
    let startDot = -1;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find.
    let preDotState = 0;
    /** @type {boolean|undefined} */
    let unmatchedSlash;

    while (index--) {
      const code = path.charCodeAt(index);

      if (code === 47 /* `/` */) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now.
        if (unmatchedSlash) {
          startPart = index + 1;
          break
        }

        continue
      }

      if (end < 0) {
        // We saw the first non-path separator, mark this as the end of our
        // extension.
        unmatchedSlash = true;
        end = index + 1;
      }

      if (code === 46 /* `.` */) {
        // If this is our first dot, mark it as the start of our extension.
        if (startDot < 0) {
          startDot = index;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot > -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension.
        preDotState = -1;
      }
    }

    if (
      startDot < 0 ||
      end < 0 ||
      // We saw a non-dot character immediately before the dot.
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly `..`.
      (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)
    ) {
      return ''
    }

    return path.slice(startDot, end)
  }

  /**
   * @param {Array<string>} segments
   * @returns {string}
   */
  function join(...segments) {
    let index = -1;
    /** @type {string|undefined} */
    let joined;

    while (++index < segments.length) {
      assertPath$1(segments[index]);

      if (segments[index]) {
        joined =
          joined === undefined ? segments[index] : joined + '/' + segments[index];
      }
    }

    return joined === undefined ? '.' : normalize(joined)
  }

  /**
   * Note: `normalize` is not exposed as `path.normalize`, so some code is
   * manually removed from it.
   *
   * @param {string} path
   * @returns {string}
   */
  function normalize(path) {
    assertPath$1(path);

    const absolute = path.charCodeAt(0) === 47; /* `/` */

    // Normalize the path according to POSIX rules.
    let value = normalizeString(path, !absolute);

    if (value.length === 0 && !absolute) {
      value = '.';
    }

    if (value.length > 0 && path.charCodeAt(path.length - 1) === 47 /* / */) {
      value += '/';
    }

    return absolute ? '/' + value : value
  }

  /**
   * Resolve `.` and `..` elements in a path with directory names.
   *
   * @param {string} path
   * @param {boolean} allowAboveRoot
   * @returns {string}
   */
  function normalizeString(path, allowAboveRoot) {
    let result = '';
    let lastSegmentLength = 0;
    let lastSlash = -1;
    let dots = 0;
    let index = -1;
    /** @type {number|undefined} */
    let code;
    /** @type {number} */
    let lastSlashIndex;

    while (++index <= path.length) {
      if (index < path.length) {
        code = path.charCodeAt(index);
      } else if (code === 47 /* `/` */) {
        break
      } else {
        code = 47; /* `/` */
      }

      if (code === 47 /* `/` */) {
        if (lastSlash === index - 1 || dots === 1) ; else if (lastSlash !== index - 1 && dots === 2) {
          if (
            result.length < 2 ||
            lastSegmentLength !== 2 ||
            result.charCodeAt(result.length - 1) !== 46 /* `.` */ ||
            result.charCodeAt(result.length - 2) !== 46 /* `.` */
          ) {
            if (result.length > 2) {
              lastSlashIndex = result.lastIndexOf('/');

              if (lastSlashIndex !== result.length - 1) {
                if (lastSlashIndex < 0) {
                  result = '';
                  lastSegmentLength = 0;
                } else {
                  result = result.slice(0, lastSlashIndex);
                  lastSegmentLength = result.length - 1 - result.lastIndexOf('/');
                }

                lastSlash = index;
                dots = 0;
                continue
              }
            } else if (result.length > 0) {
              result = '';
              lastSegmentLength = 0;
              lastSlash = index;
              dots = 0;
              continue
            }
          }

          if (allowAboveRoot) {
            result = result.length > 0 ? result + '/..' : '..';
            lastSegmentLength = 2;
          }
        } else {
          if (result.length > 0) {
            result += '/' + path.slice(lastSlash + 1, index);
          } else {
            result = path.slice(lastSlash + 1, index);
          }

          lastSegmentLength = index - lastSlash - 1;
        }

        lastSlash = index;
        dots = 0;
      } else if (code === 46 /* `.` */ && dots > -1) {
        dots++;
      } else {
        dots = -1;
      }
    }

    return result
  }

  /**
   * @param {string} path
   */
  function assertPath$1(path) {
    if (typeof path !== 'string') {
      throw new TypeError(
        'Path must be a string. Received ' + JSON.stringify(path)
      )
    }
  }

  /* eslint-enable max-depth, complexity */

  // Somewhat based on:
  // <https://github.com/defunctzombie/node-process/blob/master/browser.js>.
  // But I don’t think one tiny line of code can be copyrighted. 😅
  const proc = {cwd};

  function cwd() {
    return '/'
  }

  /**
   * @typedef URL
   * @property {string} hash
   * @property {string} host
   * @property {string} hostname
   * @property {string} href
   * @property {string} origin
   * @property {string} password
   * @property {string} pathname
   * @property {string} port
   * @property {string} protocol
   * @property {string} search
   * @property {any} searchParams
   * @property {string} username
   * @property {() => string} toString
   * @property {() => string} toJSON
   */

  /**
   * @param {unknown} fileURLOrPath
   * @returns {fileURLOrPath is URL}
   */
  // From: <https://github.com/nodejs/node/blob/fcf8ba4/lib/internal/url.js#L1501>
  function isUrl(fileURLOrPath) {
    return (
      fileURLOrPath !== null &&
      typeof fileURLOrPath === 'object' &&
      // @ts-expect-error: indexable.
      fileURLOrPath.href &&
      // @ts-expect-error: indexable.
      fileURLOrPath.origin
    )
  }

  /// <reference lib="dom" />

  // See: <https://github.com/nodejs/node/blob/fcf8ba4/lib/internal/url.js>

  /**
   * @param {string|URL} path
   */
  function urlToPath(path) {
    if (typeof path === 'string') {
      path = new URL(path);
    } else if (!isUrl(path)) {
      /** @type {NodeJS.ErrnoException} */
      const error = new TypeError(
        'The "path" argument must be of type string or an instance of URL. Received `' +
          path +
          '`'
      );
      error.code = 'ERR_INVALID_ARG_TYPE';
      throw error
    }

    if (path.protocol !== 'file:') {
      /** @type {NodeJS.ErrnoException} */
      const error = new TypeError('The URL must be of scheme file');
      error.code = 'ERR_INVALID_URL_SCHEME';
      throw error
    }

    return getPathFromURLPosix(path)
  }

  /**
   * @param {URL} url
   */
  function getPathFromURLPosix(url) {
    if (url.hostname !== '') {
      /** @type {NodeJS.ErrnoException} */
      const error = new TypeError(
        'File URL host must be "localhost" or empty on darwin'
      );
      error.code = 'ERR_INVALID_FILE_URL_HOST';
      throw error
    }

    const pathname = url.pathname;
    let index = -1;

    while (++index < pathname.length) {
      if (
        pathname.charCodeAt(index) === 37 /* `%` */ &&
        pathname.charCodeAt(index + 1) === 50 /* `2` */
      ) {
        const third = pathname.charCodeAt(index + 2);
        if (third === 70 /* `F` */ || third === 102 /* `f` */) {
          /** @type {NodeJS.ErrnoException} */
          const error = new TypeError(
            'File URL path must not include encoded / characters'
          );
          error.code = 'ERR_INVALID_FILE_URL_PATH';
          throw error
        }
      }
    }

    return decodeURIComponent(pathname)
  }

  /**
   * @typedef {import('unist').Node} Node
   * @typedef {import('unist').Position} Position
   * @typedef {import('unist').Point} Point
   * @typedef {Record<string, unknown> & {type: string, position?: Position|undefined}} NodeLike
   * @typedef {import('./minurl.shared.js').URL} URL
   * @typedef {import('../index.js').Data} Data
   * @typedef {import('../index.js').Value} Value
   *
   * @typedef {'ascii'|'utf8'|'utf-8'|'utf16le'|'ucs2'|'ucs-2'|'base64'|'base64url'|'latin1'|'binary'|'hex'} BufferEncoding
   *   Encodings supported by the buffer class.
   *   This is a copy of the typing from Node, copied to prevent Node globals from
   *   being needed.
   *   Copied from: <https://github.com/DefinitelyTyped/DefinitelyTyped/blob/90a4ec8/types/node/buffer.d.ts#L170>
   *
   * @typedef {Value|Options|VFile|URL} Compatible
   *   Things that can be passed to the constructor.
   *
   * @typedef VFileCoreOptions
   * @property {Value} [value]
   * @property {string} [cwd]
   * @property {Array<string>} [history]
   * @property {string|URL} [path]
   * @property {string} [basename]
   * @property {string} [stem]
   * @property {string} [extname]
   * @property {string} [dirname]
   * @property {Data} [data]
   *
   * @typedef Map
   *   Raw source map, see:
   *   <https://github.com/mozilla/source-map/blob/58819f0/source-map.d.ts#L15-L23>.
   * @property {number} version
   * @property {Array<string>} sources
   * @property {Array<string>} names
   * @property {string|undefined} [sourceRoot]
   * @property {Array<string>|undefined} [sourcesContent]
   * @property {string} mappings
   * @property {string} file
   *
   * @typedef {{[key: string]: unknown} & VFileCoreOptions} Options
   *   Configuration: a bunch of keys that will be shallow copied over to the new
   *   file.
   *
   * @typedef {Record<string, unknown>} ReporterSettings
   * @typedef {<T = ReporterSettings>(files: Array<VFile>, options: T) => string} Reporter
   */

  // Order of setting (least specific to most), we need this because otherwise
  // `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
  // stem can be set.
  const order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];

  class VFile {
    /**
     * Create a new virtual file.
     *
     * If `options` is `string` or `Buffer`, it’s treated as `{value: options}`.
     * If `options` is a `URL`, it’s treated as `{path: options}`.
     * If `options` is a `VFile`, shallow copies its data over to the new file.
     * All fields in `options` are set on the newly created `VFile`.
     *
     * Path related fields are set in the following order (least specific to
     * most specific): `history`, `path`, `basename`, `stem`, `extname`,
     * `dirname`.
     *
     * It’s not possible to set either `dirname` or `extname` without setting
     * either `history`, `path`, `basename`, or `stem` as well.
     *
     * @param {Compatible} [value]
     */
    constructor(value) {
      /** @type {Options} */
      let options;

      if (!value) {
        options = {};
      } else if (typeof value === 'string' || isBuffer(value)) {
        // @ts-expect-error Looks like a buffer.
        options = {value};
      } else if (isUrl(value)) {
        options = {path: value};
      } else {
        // @ts-expect-error Looks like file or options.
        options = value;
      }

      /**
       * Place to store custom information (default: `{}`).
       * It’s OK to store custom data directly on the file but moving it to
       * `data` is recommended.
       * @type {Data}
       */
      this.data = {};

      /**
       * List of messages associated with the file.
       * @type {Array<VFileMessage>}
       */
      this.messages = [];

      /**
       * List of filepaths the file moved between.
       * The first is the original path and the last is the current path.
       * @type {Array<string>}
       */
      this.history = [];

      /**
       * Base of `path` (default: `process.cwd()` or `'/'` in browsers).
       * @type {string}
       */
      this.cwd = proc.cwd();

      /* eslint-disable no-unused-expressions */
      /**
       * Raw value.
       * @type {Value}
       */
      this.value;

      // The below are non-standard, they are “well-known”.
      // As in, used in several tools.

      /**
       * Whether a file was saved to disk.
       * This is used by vfile reporters.
       * @type {boolean}
       */
      this.stored;

      /**
       * Sometimes files have a non-string, compiled, representation.
       * This can be stored in the `result` field.
       * One example is when turning markdown into React nodes.
       * This is used by unified to store non-string results.
       * @type {unknown}
       */
      this.result;

      /**
       * Sometimes files have a source map associated with them.
       * This can be stored in the `map` field.
       * This should be a `Map` type, which is equivalent to the `RawSourceMap`
       * type from the `source-map` module.
       * @type {Map|undefined}
       */
      this.map;
      /* eslint-enable no-unused-expressions */

      // Set path related properties in the correct order.
      let index = -1;

      while (++index < order.length) {
        const prop = order[index];

        // Note: we specifically use `in` instead of `hasOwnProperty` to accept
        // `vfile`s too.
        if (prop in options && options[prop] !== undefined) {
          // @ts-expect-error: TS is confused by the different types for `history`.
          this[prop] = prop === 'history' ? [...options[prop]] : options[prop];
        }
      }

      /** @type {string} */
      let prop;

      // Set non-path related properties.
      for (prop in options) {
        // @ts-expect-error: fine to set other things.
        if (!order.includes(prop)) this[prop] = options[prop];
      }
    }

    /**
     * Get the full path (example: `'~/index.min.js'`).
     * @returns {string}
     */
    get path() {
      return this.history[this.history.length - 1]
    }

    /**
     * Set the full path (example: `'~/index.min.js'`).
     * Cannot be nullified.
     * You can set a file URL (a `URL` object with a `file:` protocol) which will
     * be turned into a path with `url.fileURLToPath`.
     * @param {string|URL} path
     */
    set path(path) {
      if (isUrl(path)) {
        path = urlToPath(path);
      }

      assertNonEmpty(path, 'path');

      if (this.path !== path) {
        this.history.push(path);
      }
    }

    /**
     * Get the parent path (example: `'~'`).
     */
    get dirname() {
      return typeof this.path === 'string' ? path$1.dirname(this.path) : undefined
    }

    /**
     * Set the parent path (example: `'~'`).
     * Cannot be set if there’s no `path` yet.
     */
    set dirname(dirname) {
      assertPath(this.basename, 'dirname');
      this.path = path$1.join(dirname || '', this.basename);
    }

    /**
     * Get the basename (including extname) (example: `'index.min.js'`).
     */
    get basename() {
      return typeof this.path === 'string' ? path$1.basename(this.path) : undefined
    }

    /**
     * Set basename (including extname) (`'index.min.js'`).
     * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
     * on windows).
     * Cannot be nullified (use `file.path = file.dirname` instead).
     */
    set basename(basename) {
      assertNonEmpty(basename, 'basename');
      assertPart(basename, 'basename');
      this.path = path$1.join(this.dirname || '', basename);
    }

    /**
     * Get the extname (including dot) (example: `'.js'`).
     */
    get extname() {
      return typeof this.path === 'string' ? path$1.extname(this.path) : undefined
    }

    /**
     * Set the extname (including dot) (example: `'.js'`).
     * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
     * on windows).
     * Cannot be set if there’s no `path` yet.
     */
    set extname(extname) {
      assertPart(extname, 'extname');
      assertPath(this.dirname, 'extname');

      if (extname) {
        if (extname.charCodeAt(0) !== 46 /* `.` */) {
          throw new Error('`extname` must start with `.`')
        }

        if (extname.includes('.', 1)) {
          throw new Error('`extname` cannot contain multiple dots')
        }
      }

      this.path = path$1.join(this.dirname, this.stem + (extname || ''));
    }

    /**
     * Get the stem (basename w/o extname) (example: `'index.min'`).
     */
    get stem() {
      return typeof this.path === 'string'
        ? path$1.basename(this.path, this.extname)
        : undefined
    }

    /**
     * Set the stem (basename w/o extname) (example: `'index.min'`).
     * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
     * on windows).
     * Cannot be nullified (use `file.path = file.dirname` instead).
     */
    set stem(stem) {
      assertNonEmpty(stem, 'stem');
      assertPart(stem, 'stem');
      this.path = path$1.join(this.dirname || '', stem + (this.extname || ''));
    }

    /**
     * Serialize the file.
     *
     * @param {BufferEncoding} [encoding='utf8']
     *   When `value` is a `Buffer`, `encoding` is a character encoding to
     *   understand it as (default: `'utf8'`).
     * @returns {string}
     *   Serialized file.
     */
    toString(encoding) {
      return (this.value || '').toString(encoding)
    }

    /**
     * Constructs a new `VFileMessage`, where `fatal` is set to `false`, and
     * associates it with the file by adding it to `vfile.messages` and setting
     * `message.file` to the current filepath.
     *
     * @param {string|Error} reason
     *   Human readable reason for the message, uses the stack and message of the error if given.
     * @param {Node|NodeLike|Position|Point} [place]
     *   Place where the message occurred in the file.
     * @param {string} [origin]
     *   Computer readable reason for the message
     * @returns {VFileMessage}
     *   Message.
     */
    message(reason, place, origin) {
      const message = new VFileMessage(reason, place, origin);

      if (this.path) {
        message.name = this.path + ':' + message.name;
        message.file = this.path;
      }

      message.fatal = false;

      this.messages.push(message);

      return message
    }

    /**
     * Like `VFile#message()`, but associates an informational message where
     * `fatal` is set to `null`.
     *
     * @param {string|Error} reason
     *   Human readable reason for the message, uses the stack and message of the error if given.
     * @param {Node|NodeLike|Position|Point} [place]
     *   Place where the message occurred in the file.
     * @param {string} [origin]
     *   Computer readable reason for the message
     * @returns {VFileMessage}
     *   Message.
     */
    info(reason, place, origin) {
      const message = this.message(reason, place, origin);

      message.fatal = null;

      return message
    }

    /**
     * Like `VFile#message()`, but associates a fatal message where `fatal` is
     * set to `true`, and then immediately throws it.
     *
     * > 👉 **Note**: a fatal error means that a file is no longer processable.
     *
     * @param {string|Error} reason
     *   Human readable reason for the message, uses the stack and message of the error if given.
     * @param {Node|NodeLike|Position|Point} [place]
     *   Place where the message occurred in the file.
     * @param {string} [origin]
     *   Computer readable reason for the message
     * @returns {never}
     *   Message.
     */
    fail(reason, place, origin) {
      const message = this.message(reason, place, origin);

      message.fatal = true;

      throw message
    }
  }

  /**
   * Assert that `part` is not a path (as in, does not contain `path.sep`).
   *
   * @param {string|undefined} part
   * @param {string} name
   * @returns {void}
   */
  function assertPart(part, name) {
    if (part && part.includes(path$1.sep)) {
      throw new Error(
        '`' + name + '` cannot be a path: did not expect `' + path$1.sep + '`'
      )
    }
  }

  /**
   * Assert that `part` is not empty.
   *
   * @param {string|undefined} part
   * @param {string} name
   * @returns {asserts part is string}
   */
  function assertNonEmpty(part, name) {
    if (!part) {
      throw new Error('`' + name + '` cannot be empty')
    }
  }

  /**
   * Assert `path` exists.
   *
   * @param {string|undefined} path
   * @param {string} name
   * @returns {asserts path is string}
   */
  function assertPath(path, name) {
    if (!path) {
      throw new Error('Setting `' + name + '` requires `path` to be set too')
    }
  }

  /**
   * @typedef {import('unist').Node} Node
   * @typedef {import('vfile').VFileCompatible} VFileCompatible
   * @typedef {import('vfile').VFileValue} VFileValue
   * @typedef {import('..').Processor} Processor
   * @typedef {import('..').Plugin} Plugin
   * @typedef {import('..').Preset} Preset
   * @typedef {import('..').Pluggable} Pluggable
   * @typedef {import('..').PluggableList} PluggableList
   * @typedef {import('..').Transformer} Transformer
   * @typedef {import('..').Parser} Parser
   * @typedef {import('..').Compiler} Compiler
   * @typedef {import('..').RunCallback} RunCallback
   * @typedef {import('..').ProcessCallback} ProcessCallback
   *
   * @typedef Context
   * @property {Node} tree
   * @property {VFile} file
   */

  // Expose a frozen processor.
  const unified = base().freeze();

  const own$4 = {}.hasOwnProperty;

  // Function to create the first processor.
  /**
   * @returns {Processor}
   */
  function base() {
    const transformers = trough();
    /** @type {Processor['attachers']} */
    const attachers = [];
    /** @type {Record<string, unknown>} */
    let namespace = {};
    /** @type {boolean|undefined} */
    let frozen;
    let freezeIndex = -1;

    // Data management.
    // @ts-expect-error: overloads are handled.
    processor.data = data;
    processor.Parser = undefined;
    processor.Compiler = undefined;

    // Lock.
    processor.freeze = freeze;

    // Plugins.
    processor.attachers = attachers;
    // @ts-expect-error: overloads are handled.
    processor.use = use;

    // API.
    processor.parse = parse;
    processor.stringify = stringify;
    // @ts-expect-error: overloads are handled.
    processor.run = run;
    processor.runSync = runSync;
    // @ts-expect-error: overloads are handled.
    processor.process = process;
    processor.processSync = processSync;

    // Expose.
    return processor

    // Create a new processor based on the processor in the current scope.
    /** @type {Processor} */
    function processor() {
      const destination = base();
      let index = -1;

      while (++index < attachers.length) {
        destination.use(...attachers[index]);
      }

      destination.data(extend(true, {}, namespace));

      return destination
    }

    /**
     * @param {string|Record<string, unknown>} [key]
     * @param {unknown} [value]
     * @returns {unknown}
     */
    function data(key, value) {
      if (typeof key === 'string') {
        // Set `key`.
        if (arguments.length === 2) {
          assertUnfrozen('data', frozen);
          namespace[key] = value;
          return processor
        }

        // Get `key`.
        return (own$4.call(namespace, key) && namespace[key]) || null
      }

      // Set space.
      if (key) {
        assertUnfrozen('data', frozen);
        namespace = key;
        return processor
      }

      // Get space.
      return namespace
    }

    /** @type {Processor['freeze']} */
    function freeze() {
      if (frozen) {
        return processor
      }

      while (++freezeIndex < attachers.length) {
        const [attacher, ...options] = attachers[freezeIndex];

        if (options[0] === false) {
          continue
        }

        if (options[0] === true) {
          options[0] = undefined;
        }

        /** @type {Transformer|void} */
        const transformer = attacher.call(processor, ...options);

        if (typeof transformer === 'function') {
          transformers.use(transformer);
        }
      }

      frozen = true;
      freezeIndex = Number.POSITIVE_INFINITY;

      return processor
    }

    /**
     * @param {Pluggable|null|undefined} [value]
     * @param {...unknown} options
     * @returns {Processor}
     */
    function use(value, ...options) {
      /** @type {Record<string, unknown>|undefined} */
      let settings;

      assertUnfrozen('use', frozen);

      if (value === null || value === undefined) ; else if (typeof value === 'function') {
        addPlugin(value, ...options);
      } else if (typeof value === 'object') {
        if (Array.isArray(value)) {
          addList(value);
        } else {
          addPreset(value);
        }
      } else {
        throw new TypeError('Expected usable value, not `' + value + '`')
      }

      if (settings) {
        namespace.settings = Object.assign(namespace.settings || {}, settings);
      }

      return processor

      /**
       * @param {import('..').Pluggable<unknown[]>} value
       * @returns {void}
       */
      function add(value) {
        if (typeof value === 'function') {
          addPlugin(value);
        } else if (typeof value === 'object') {
          if (Array.isArray(value)) {
            const [plugin, ...options] = value;
            addPlugin(plugin, ...options);
          } else {
            addPreset(value);
          }
        } else {
          throw new TypeError('Expected usable value, not `' + value + '`')
        }
      }

      /**
       * @param {Preset} result
       * @returns {void}
       */
      function addPreset(result) {
        addList(result.plugins);

        if (result.settings) {
          settings = Object.assign(settings || {}, result.settings);
        }
      }

      /**
       * @param {PluggableList|null|undefined} [plugins]
       * @returns {void}
       */
      function addList(plugins) {
        let index = -1;

        if (plugins === null || plugins === undefined) ; else if (Array.isArray(plugins)) {
          while (++index < plugins.length) {
            const thing = plugins[index];
            add(thing);
          }
        } else {
          throw new TypeError('Expected a list of plugins, not `' + plugins + '`')
        }
      }

      /**
       * @param {Plugin} plugin
       * @param {...unknown} [value]
       * @returns {void}
       */
      function addPlugin(plugin, value) {
        let index = -1;
        /** @type {Processor['attachers'][number]|undefined} */
        let entry;

        while (++index < attachers.length) {
          if (attachers[index][0] === plugin) {
            entry = attachers[index];
            break
          }
        }

        if (entry) {
          if (isPlainObject(entry[1]) && isPlainObject(value)) {
            value = extend(true, entry[1], value);
          }

          entry[1] = value;
        } else {
          // @ts-expect-error: fine.
          attachers.push([...arguments]);
        }
      }
    }

    /** @type {Processor['parse']} */
    function parse(doc) {
      processor.freeze();
      const file = vfile(doc);
      const Parser = processor.Parser;
      assertParser('parse', Parser);

      if (newable(Parser, 'parse')) {
        // @ts-expect-error: `newable` checks this.
        return new Parser(String(file), file).parse()
      }

      // @ts-expect-error: `newable` checks this.
      return Parser(String(file), file) // eslint-disable-line new-cap
    }

    /** @type {Processor['stringify']} */
    function stringify(node, doc) {
      processor.freeze();
      const file = vfile(doc);
      const Compiler = processor.Compiler;
      assertCompiler('stringify', Compiler);
      assertNode(node);

      if (newable(Compiler, 'compile')) {
        // @ts-expect-error: `newable` checks this.
        return new Compiler(node, file).compile()
      }

      // @ts-expect-error: `newable` checks this.
      return Compiler(node, file) // eslint-disable-line new-cap
    }

    /**
     * @param {Node} node
     * @param {VFileCompatible|RunCallback} [doc]
     * @param {RunCallback} [callback]
     * @returns {Promise<Node>|void}
     */
    function run(node, doc, callback) {
      assertNode(node);
      processor.freeze();

      if (!callback && typeof doc === 'function') {
        callback = doc;
        doc = undefined;
      }

      if (!callback) {
        return new Promise(executor)
      }

      executor(null, callback);

      /**
       * @param {null|((node: Node) => void)} resolve
       * @param {(error: Error) => void} reject
       * @returns {void}
       */
      function executor(resolve, reject) {
        // @ts-expect-error: `doc` can’t be a callback anymore, we checked.
        transformers.run(node, vfile(doc), done);

        /**
         * @param {Error|null} error
         * @param {Node} tree
         * @param {VFile} file
         * @returns {void}
         */
        function done(error, tree, file) {
          tree = tree || node;
          if (error) {
            reject(error);
          } else if (resolve) {
            resolve(tree);
          } else {
            // @ts-expect-error: `callback` is defined if `resolve` is not.
            callback(null, tree, file);
          }
        }
      }
    }

    /** @type {Processor['runSync']} */
    function runSync(node, file) {
      /** @type {Node|undefined} */
      let result;
      /** @type {boolean|undefined} */
      let complete;

      processor.run(node, file, done);

      assertDone('runSync', 'run', complete);

      // @ts-expect-error: we either bailed on an error or have a tree.
      return result

      /**
       * @param {Error|null} [error]
       * @param {Node} [tree]
       * @returns {void}
       */
      function done(error, tree) {
        bail(error);
        result = tree;
        complete = true;
      }
    }

    /**
     * @param {VFileCompatible} doc
     * @param {ProcessCallback} [callback]
     * @returns {Promise<VFile>|undefined}
     */
    function process(doc, callback) {
      processor.freeze();
      assertParser('process', processor.Parser);
      assertCompiler('process', processor.Compiler);

      if (!callback) {
        return new Promise(executor)
      }

      executor(null, callback);

      /**
       * @param {null|((file: VFile) => void)} resolve
       * @param {(error?: Error|null|undefined) => void} reject
       * @returns {void}
       */
      function executor(resolve, reject) {
        const file = vfile(doc);

        processor.run(processor.parse(file), file, (error, tree, file) => {
          if (error || !tree || !file) {
            done(error);
          } else {
            /** @type {unknown} */
            const result = processor.stringify(tree, file);

            if (result === undefined || result === null) ; else if (looksLikeAVFileValue(result)) {
              file.value = result;
            } else {
              file.result = result;
            }

            done(error, file);
          }
        });

        /**
         * @param {Error|null|undefined} [error]
         * @param {VFile|undefined} [file]
         * @returns {void}
         */
        function done(error, file) {
          if (error || !file) {
            reject(error);
          } else if (resolve) {
            resolve(file);
          } else {
            // @ts-expect-error: `callback` is defined if `resolve` is not.
            callback(null, file);
          }
        }
      }
    }

    /** @type {Processor['processSync']} */
    function processSync(doc) {
      /** @type {boolean|undefined} */
      let complete;

      processor.freeze();
      assertParser('processSync', processor.Parser);
      assertCompiler('processSync', processor.Compiler);

      const file = vfile(doc);

      processor.process(file, done);

      assertDone('processSync', 'process', complete);

      return file

      /**
       * @param {Error|null|undefined} [error]
       * @returns {void}
       */
      function done(error) {
        complete = true;
        bail(error);
      }
    }
  }

  /**
   * Check if `value` is a constructor.
   *
   * @param {unknown} value
   * @param {string} name
   * @returns {boolean}
   */
  function newable(value, name) {
    return (
      typeof value === 'function' &&
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      value.prototype &&
      // A function with keys in its prototype is probably a constructor.
      // Classes’ prototype methods are not enumerable, so we check if some value
      // exists in the prototype.
      // type-coverage:ignore-next-line
      (keys(value.prototype) || name in value.prototype)
    )
  }

  /**
   * Check if `value` is an object with keys.
   *
   * @param {Record<string, unknown>} value
   * @returns {boolean}
   */
  function keys(value) {
    /** @type {string} */
    let key;

    for (key in value) {
      if (own$4.call(value, key)) {
        return true
      }
    }

    return false
  }

  /**
   * Assert a parser is available.
   *
   * @param {string} name
   * @param {unknown} value
   * @returns {asserts value is Parser}
   */
  function assertParser(name, value) {
    if (typeof value !== 'function') {
      throw new TypeError('Cannot `' + name + '` without `Parser`')
    }
  }

  /**
   * Assert a compiler is available.
   *
   * @param {string} name
   * @param {unknown} value
   * @returns {asserts value is Compiler}
   */
  function assertCompiler(name, value) {
    if (typeof value !== 'function') {
      throw new TypeError('Cannot `' + name + '` without `Compiler`')
    }
  }

  /**
   * Assert the processor is not frozen.
   *
   * @param {string} name
   * @param {unknown} frozen
   * @returns {asserts frozen is false}
   */
  function assertUnfrozen(name, frozen) {
    if (frozen) {
      throw new Error(
        'Cannot call `' +
          name +
          '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.'
      )
    }
  }

  /**
   * Assert `node` is a unist node.
   *
   * @param {unknown} node
   * @returns {asserts node is Node}
   */
  function assertNode(node) {
    // `isPlainObj` unfortunately uses `any` instead of `unknown`.
    // type-coverage:ignore-next-line
    if (!isPlainObject(node) || typeof node.type !== 'string') {
      throw new TypeError('Expected node, got `' + node + '`')
      // Fine.
    }
  }

  /**
   * Assert that `complete` is `true`.
   *
   * @param {string} name
   * @param {string} asyncName
   * @param {unknown} complete
   * @returns {asserts complete is true}
   */
  function assertDone(name, asyncName, complete) {
    if (!complete) {
      throw new Error(
        '`' + name + '` finished async. Use `' + asyncName + '` instead'
      )
    }
  }

  /**
   * @param {VFileCompatible} [value]
   * @returns {VFile}
   */
  function vfile(value) {
    return looksLikeAVFile(value) ? value : new VFile(value)
  }

  /**
   * @param {VFileCompatible} [value]
   * @returns {value is VFile}
   */
  function looksLikeAVFile(value) {
    return Boolean(
      value &&
        typeof value === 'object' &&
        'message' in value &&
        'messages' in value
    )
  }

  /**
   * @param {unknown} [value]
   * @returns {value is VFileValue}
   */
  function looksLikeAVFileValue(value) {
    return typeof value === 'string' || isBuffer(value)
  }

  /**
   * @typedef Options
   * @property {boolean} [includeImageAlt=true]
   */

  /**
   * Get the text content of a node.
   * Prefer the node’s plain-text fields, otherwise serialize its children,
   * and if the given value is an array, serialize the nodes in it.
   *
   * @param {unknown} node
   * @param {Options} [options]
   * @returns {string}
   */
  function toString(node, options) {
    var {includeImageAlt = true} = options || {};
    return one(node, includeImageAlt)
  }

  /**
   * @param {unknown} node
   * @param {boolean} includeImageAlt
   * @returns {string}
   */
  function one(node, includeImageAlt) {
    return (
      (node &&
        typeof node === 'object' &&
        // @ts-ignore looks like a literal.
        (node.value ||
          // @ts-ignore looks like an image.
          (includeImageAlt ? node.alt : '') ||
          // @ts-ignore looks like a parent.
          ('children' in node && all(node.children, includeImageAlt)) ||
          (Array.isArray(node) && all(node, includeImageAlt)))) ||
      ''
    )
  }

  /**
   * @param {Array.<unknown>} values
   * @param {boolean} includeImageAlt
   * @returns {string}
   */
  function all(values, includeImageAlt) {
    /** @type {Array.<string>} */
    var result = [];
    var index = -1;

    while (++index < values.length) {
      result[index] = one(values[index], includeImageAlt);
    }

    return result.join('')
  }

  /**
   * Like `Array#splice`, but smarter for giant arrays.
   *
   * `Array#splice` takes all items to be inserted as individual argument which
   * causes a stack overflow in V8 when trying to insert 100k items for instance.
   *
   * Otherwise, this does not return the removed items, and takes `items` as an
   * array instead of rest parameters.
   *
   * @template {unknown} T
   * @param {T[]} list
   * @param {number} start
   * @param {number} remove
   * @param {T[]} items
   * @returns {void}
   */
  function splice(list, start, remove, items) {
    const end = list.length;
    let chunkStart = 0;
    /** @type {unknown[]} */

    let parameters; // Make start between zero and `end` (included).

    if (start < 0) {
      start = -start > end ? 0 : end + start;
    } else {
      start = start > end ? end : start;
    }

    remove = remove > 0 ? remove : 0; // No need to chunk the items if there’s only a couple (10k) items.

    if (items.length < 10000) {
      parameters = Array.from(items);
      parameters.unshift(start, remove) // @ts-expect-error Hush, it’s fine.
      ;[].splice.apply(list, parameters);
    } else {
      // Delete `remove` items starting from `start`
      if (remove) [].splice.apply(list, [start, remove]); // Insert the items in chunks to not cause stack overflows.

      while (chunkStart < items.length) {
        parameters = items.slice(chunkStart, chunkStart + 10000);
        parameters.unshift(start, 0) // @ts-expect-error Hush, it’s fine.
        ;[].splice.apply(list, parameters);
        chunkStart += 10000;
        start += 10000;
      }
    }
  }
  /**
   * Append `items` (an array) at the end of `list` (another array).
   * When `list` was empty, returns `items` instead.
   *
   * This prevents a potentially expensive operation when `list` is empty,
   * and adds items in batches to prevent V8 from hanging.
   *
   * @template {unknown} T
   * @param {T[]} list
   * @param {T[]} items
   * @returns {T[]}
   */

  function push(list, items) {
    if (list.length > 0) {
      splice(list, list.length, 0, items);
      return list
    }

    return items
  }

  /**
   * @typedef {import('micromark-util-types').NormalizedExtension} NormalizedExtension
   * @typedef {import('micromark-util-types').Extension} Extension
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
   */

  const hasOwnProperty = {}.hasOwnProperty;

  /**
   * Combine several syntax extensions into one.
   *
   * @param {Extension[]} extensions List of syntax extensions.
   * @returns {NormalizedExtension} A single combined extension.
   */
  function combineExtensions(extensions) {
    /** @type {NormalizedExtension} */
    const all = {};
    let index = -1;

    while (++index < extensions.length) {
      syntaxExtension(all, extensions[index]);
    }

    return all
  }

  /**
   * Merge `extension` into `all`.
   *
   * @param {NormalizedExtension} all Extension to merge into.
   * @param {Extension} extension Extension to merge.
   * @returns {void}
   */
  function syntaxExtension(all, extension) {
    /** @type {string} */
    let hook;

    for (hook in extension) {
      const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;
      const left = maybe || (all[hook] = {});
      const right = extension[hook];
      /** @type {string} */
      let code;

      for (code in right) {
        if (!hasOwnProperty.call(left, code)) left[code] = [];
        const value = right[code];
        constructs(
          // @ts-expect-error Looks like a list.
          left[code],
          Array.isArray(value) ? value : value ? [value] : []
        );
      }
    }
  }

  /**
   * Merge `list` into `existing` (both lists of constructs).
   * Mutates `existing`.
   *
   * @param {unknown[]} existing
   * @param {unknown[]} list
   * @returns {void}
   */
  function constructs(existing, list) {
    let index = -1;
    /** @type {unknown[]} */
    const before = [];

    while (++index < list.length) {
  (list[index].add === 'after' ? existing : before).push(list[index]);
    }

    splice(existing, 0, 0, before);
  }

  // This module is generated by `script/`.
  //
  // CommonMark handles attention (emphasis, strong) markers based on what comes
  // before or after them.
  // One such difference is if those characters are Unicode punctuation.
  // This script is generated from the Unicode data.
  const unicodePunctuationRegex =
    /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

  /**
   * @typedef {import('micromark-util-types').Code} Code
   */
  /**
   * Check whether the character code represents an ASCII alpha (`a` through `z`,
   * case insensitive).
   *
   * An **ASCII alpha** is an ASCII upper alpha or ASCII lower alpha.
   *
   * An **ASCII upper alpha** is a character in the inclusive range U+0041 (`A`)
   * to U+005A (`Z`).
   *
   * An **ASCII lower alpha** is a character in the inclusive range U+0061 (`a`)
   * to U+007A (`z`).
   */

  const asciiAlpha = regexCheck(/[A-Za-z]/);
  /**
   * Check whether the character code represents an ASCII digit (`0` through `9`).
   *
   * An **ASCII digit** is a character in the inclusive range U+0030 (`0`) to
   * U+0039 (`9`).
   */

  const asciiDigit = regexCheck(/\d/);
  /**
   * Check whether the character code represents an ASCII hex digit (`a` through
   * `f`, case insensitive, or `0` through `9`).
   *
   * An **ASCII hex digit** is an ASCII digit (see `asciiDigit`), ASCII upper hex
   * digit, or an ASCII lower hex digit.
   *
   * An **ASCII upper hex digit** is a character in the inclusive range U+0041
   * (`A`) to U+0046 (`F`).
   *
   * An **ASCII lower hex digit** is a character in the inclusive range U+0061
   * (`a`) to U+0066 (`f`).
   */

  const asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
  /**
   * Check whether the character code represents an ASCII alphanumeric (`a`
   * through `z`, case insensitive, or `0` through `9`).
   *
   * An **ASCII alphanumeric** is an ASCII digit (see `asciiDigit`) or ASCII alpha
   * (see `asciiAlpha`).
   */

  const asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
  /**
   * Check whether the character code represents ASCII punctuation.
   *
   * An **ASCII punctuation** is a character in the inclusive ranges U+0021
   * EXCLAMATION MARK (`!`) to U+002F SLASH (`/`), U+003A COLON (`:`) to U+0040 AT
   * SIGN (`@`), U+005B LEFT SQUARE BRACKET (`[`) to U+0060 GRAVE ACCENT
   * (`` ` ``), or U+007B LEFT CURLY BRACE (`{`) to U+007E TILDE (`~`).
   */

  const asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
  /**
   * Check whether the character code represents an ASCII atext.
   *
   * atext is an ASCII alphanumeric (see `asciiAlphanumeric`), or a character in
   * the inclusive ranges U+0023 NUMBER SIGN (`#`) to U+0027 APOSTROPHE (`'`),
   * U+002A ASTERISK (`*`), U+002B PLUS SIGN (`+`), U+002D DASH (`-`), U+002F
   * SLASH (`/`), U+003D EQUALS TO (`=`), U+003F QUESTION MARK (`?`), U+005E
   * CARET (`^`) to U+0060 GRAVE ACCENT (`` ` ``), or U+007B LEFT CURLY BRACE
   * (`{`) to U+007E TILDE (`~`).
   *
   * See:
   * **\[RFC5322]**:
   * [Internet Message Format](https://tools.ietf.org/html/rfc5322).
   * P. Resnick.
   * IETF.
   */

  const asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
  /**
   * Check whether a character code is an ASCII control character.
   *
   * An **ASCII control** is a character in the inclusive range U+0000 NULL (NUL)
   * to U+001F (US), or U+007F (DEL).
   *
   * @param {Code} code
   * @returns {code is number}
   */

  function asciiControl(code) {
    return (
      // Special whitespace codes (which have negative values), C0 and Control
      // character DEL
      code !== null && (code < 32 || code === 127)
    )
  }
  /**
   * Check whether a character code is a markdown line ending (see
   * `markdownLineEnding`) or markdown space (see `markdownSpace`).
   *
   * @param {Code} code
   * @returns {code is number}
   */

  function markdownLineEndingOrSpace(code) {
    return code !== null && (code < 0 || code === 32)
  }
  /**
   * Check whether a character code is a markdown line ending.
   *
   * A **markdown line ending** is the virtual characters M-0003 CARRIAGE RETURN
   * LINE FEED (CRLF), M-0004 LINE FEED (LF) and M-0005 CARRIAGE RETURN (CR).
   *
   * In micromark, the actual character U+000A LINE FEED (LF) and U+000D CARRIAGE
   * RETURN (CR) are replaced by these virtual characters depending on whether
   * they occurred together.
   *
   * @param {Code} code
   * @returns {code is number}
   */

  function markdownLineEnding(code) {
    return code !== null && code < -2
  }
  /**
   * Check whether a character code is a markdown space.
   *
   * A **markdown space** is the concrete character U+0020 SPACE (SP) and the
   * virtual characters M-0001 VIRTUAL SPACE (VS) and M-0002 HORIZONTAL TAB (HT).
   *
   * In micromark, the actual character U+0009 CHARACTER TABULATION (HT) is
   * replaced by one M-0002 HORIZONTAL TAB (HT) and between 0 and 3 M-0001 VIRTUAL
   * SPACE (VS) characters, depending on the column at which the tab occurred.
   *
   * @param {Code} code
   * @returns {code is number}
   */

  function markdownSpace(code) {
    return code === -2 || code === -1 || code === 32
  }
  /**
   * Check whether the character code represents Unicode whitespace.
   *
   * Note that this does handle micromark specific markdown whitespace characters.
   * See `markdownLineEndingOrSpace` to check that.
   *
   * A **Unicode whitespace** is a character in the Unicode `Zs` (Separator,
   * Space) category, or U+0009 CHARACTER TABULATION (HT), U+000A LINE FEED (LF),
   * U+000C (FF), or U+000D CARRIAGE RETURN (CR) (**\[UNICODE]**).
   *
   * See:
   * **\[UNICODE]**:
   * [The Unicode Standard](https://www.unicode.org/versions/).
   * Unicode Consortium.
   */

  const unicodeWhitespace = regexCheck(/\s/);
  /**
   * Check whether the character code represents Unicode punctuation.
   *
   * A **Unicode punctuation** is a character in the Unicode `Pc` (Punctuation,
   * Connector), `Pd` (Punctuation, Dash), `Pe` (Punctuation, Close), `Pf`
   * (Punctuation, Final quote), `Pi` (Punctuation, Initial quote), `Po`
   * (Punctuation, Other), or `Ps` (Punctuation, Open) categories, or an ASCII
   * punctuation (see `asciiPunctuation`).
   *
   * See:
   * **\[UNICODE]**:
   * [The Unicode Standard](https://www.unicode.org/versions/).
   * Unicode Consortium.
   */
  // Size note: removing ASCII from the regex and using `asciiPunctuation` here
  // In fact adds to the bundle size.

  const unicodePunctuation = regexCheck(unicodePunctuationRegex);
  /**
   * Create a code check from a regex.
   *
   * @param {RegExp} regex
   * @returns {(code: Code) => code is number}
   */

  function regexCheck(regex) {
    return check
    /**
     * Check whether a code matches the bound regex.
     *
     * @param {Code} code Character code
     * @returns {code is number} Whether the character code matches the bound regex
     */

    function check(code) {
      return code !== null && regex.test(String.fromCharCode(code))
    }
  }

  /**
   * @typedef {import('micromark-util-types').Effects} Effects
   * @typedef {import('micromark-util-types').State} State
   */
  /**
   * @param {Effects} effects
   * @param {State} ok
   * @param {string} type
   * @param {number} [max=Infinity]
   * @returns {State}
   */

  function factorySpace(effects, ok, type, max) {
    const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
    let size = 0;
    return start
    /** @type {State} */

    function start(code) {
      if (markdownSpace(code)) {
        effects.enter(type);
        return prefix(code)
      }

      return ok(code)
    }
    /** @type {State} */

    function prefix(code) {
      if (markdownSpace(code) && size++ < limit) {
        effects.consume(code);
        return prefix
      }

      effects.exit(type);
      return ok(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
   * @typedef {import('micromark-util-types').Initializer} Initializer
   * @typedef {import('micromark-util-types').Token} Token
   * @typedef {import('micromark-util-types').State} State
   */

  /** @type {InitialConstruct} */
  const content$1 = {
    tokenize: initializeContent
  };
  /** @type {Initializer} */

  function initializeContent(effects) {
    const contentStart = effects.attempt(
      this.parser.constructs.contentInitial,
      afterContentStartConstruct,
      paragraphInitial
    );
    /** @type {Token} */

    let previous;
    return contentStart
    /** @type {State} */

    function afterContentStartConstruct(code) {
      if (code === null) {
        effects.consume(code);
        return
      }

      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return factorySpace(effects, contentStart, 'linePrefix')
    }
    /** @type {State} */

    function paragraphInitial(code) {
      effects.enter('paragraph');
      return lineStart(code)
    }
    /** @type {State} */

    function lineStart(code) {
      const token = effects.enter('chunkText', {
        contentType: 'text',
        previous
      });

      if (previous) {
        previous.next = token;
      }

      previous = token;
      return data(code)
    }
    /** @type {State} */

    function data(code) {
      if (code === null) {
        effects.exit('chunkText');
        effects.exit('paragraph');
        effects.consume(code);
        return
      }

      if (markdownLineEnding(code)) {
        effects.consume(code);
        effects.exit('chunkText');
        return lineStart
      } // Data.

      effects.consume(code);
      return data
    }
  }

  /**
   * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
   * @typedef {import('micromark-util-types').Initializer} Initializer
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').Token} Token
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Point} Point
   */
  /** @type {InitialConstruct} */

  const document$1 = {
    tokenize: initializeDocument
  };
  /** @type {Construct} */

  const containerConstruct = {
    tokenize: tokenizeContainer
  };
  /** @type {Initializer} */

  function initializeDocument(effects) {
    const self = this;
    /** @type {Array<StackItem>} */

    const stack = [];
    let continued = 0;
    /** @type {TokenizeContext|undefined} */

    let childFlow;
    /** @type {Token|undefined} */

    let childToken;
    /** @type {number} */

    let lineStartOffset;
    return start
    /** @type {State} */

    function start(code) {
      // First we iterate through the open blocks, starting with the root
      // document, and descending through last children down to the last open
      // block.
      // Each block imposes a condition that the line must satisfy if the block is
      // to remain open.
      // For example, a block quote requires a `>` character.
      // A paragraph requires a non-blank line.
      // In this phase we may match all or just some of the open blocks.
      // But we cannot close unmatched blocks yet, because we may have a lazy
      // continuation line.
      if (continued < stack.length) {
        const item = stack[continued];
        self.containerState = item[1];
        return effects.attempt(
          item[0].continuation,
          documentContinue,
          checkNewContainers
        )(code)
      } // Done.

      return checkNewContainers(code)
    }
    /** @type {State} */

    function documentContinue(code) {
      continued++; // Note: this field is called `_closeFlow` but it also closes containers.
      // Perhaps a good idea to rename it but it’s already used in the wild by
      // extensions.

      if (self.containerState._closeFlow) {
        self.containerState._closeFlow = undefined;

        if (childFlow) {
          closeFlow();
        } // Note: this algorithm for moving events around is similar to the
        // algorithm when dealing with lazy lines in `writeToChild`.

        const indexBeforeExits = self.events.length;
        let indexBeforeFlow = indexBeforeExits;
        /** @type {Point|undefined} */

        let point; // Find the flow chunk.

        while (indexBeforeFlow--) {
          if (
            self.events[indexBeforeFlow][0] === 'exit' &&
            self.events[indexBeforeFlow][1].type === 'chunkFlow'
          ) {
            point = self.events[indexBeforeFlow][1].end;
            break
          }
        }

        exitContainers(continued); // Fix positions.

        let index = indexBeforeExits;

        while (index < self.events.length) {
          self.events[index][1].end = Object.assign({}, point);
          index++;
        } // Inject the exits earlier (they’re still also at the end).

        splice(
          self.events,
          indexBeforeFlow + 1,
          0,
          self.events.slice(indexBeforeExits)
        ); // Discard the duplicate exits.

        self.events.length = index;
        return checkNewContainers(code)
      }

      return start(code)
    }
    /** @type {State} */

    function checkNewContainers(code) {
      // Next, after consuming the continuation markers for existing blocks, we
      // look for new block starts (e.g. `>` for a block quote).
      // If we encounter a new block start, we close any blocks unmatched in
      // step 1 before creating the new block as a child of the last matched
      // block.
      if (continued === stack.length) {
        // No need to `check` whether there’s a container, of `exitContainers`
        // would be moot.
        // We can instead immediately `attempt` to parse one.
        if (!childFlow) {
          return documentContinued(code)
        } // If we have concrete content, such as block HTML or fenced code,
        // we can’t have containers “pierce” into them, so we can immediately
        // start.

        if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
          return flowStart(code)
        } // If we do have flow, it could still be a blank line,
        // but we’d be interrupting it w/ a new container if there’s a current
        // construct.

        self.interrupt = Boolean(
          childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack
        );
      } // Check if there is a new container.

      self.containerState = {};
      return effects.check(
        containerConstruct,
        thereIsANewContainer,
        thereIsNoNewContainer
      )(code)
    }
    /** @type {State} */

    function thereIsANewContainer(code) {
      if (childFlow) closeFlow();
      exitContainers(continued);
      return documentContinued(code)
    }
    /** @type {State} */

    function thereIsNoNewContainer(code) {
      self.parser.lazy[self.now().line] = continued !== stack.length;
      lineStartOffset = self.now().offset;
      return flowStart(code)
    }
    /** @type {State} */

    function documentContinued(code) {
      // Try new containers.
      self.containerState = {};
      return effects.attempt(
        containerConstruct,
        containerContinue,
        flowStart
      )(code)
    }
    /** @type {State} */

    function containerContinue(code) {
      continued++;
      stack.push([self.currentConstruct, self.containerState]); // Try another.

      return documentContinued(code)
    }
    /** @type {State} */

    function flowStart(code) {
      if (code === null) {
        if (childFlow) closeFlow();
        exitContainers(0);
        effects.consume(code);
        return
      }

      childFlow = childFlow || self.parser.flow(self.now());
      effects.enter('chunkFlow', {
        contentType: 'flow',
        previous: childToken,
        _tokenizer: childFlow
      });
      return flowContinue(code)
    }
    /** @type {State} */

    function flowContinue(code) {
      if (code === null) {
        writeToChild(effects.exit('chunkFlow'), true);
        exitContainers(0);
        effects.consume(code);
        return
      }

      if (markdownLineEnding(code)) {
        effects.consume(code);
        writeToChild(effects.exit('chunkFlow')); // Get ready for the next line.

        continued = 0;
        self.interrupt = undefined;
        return start
      }

      effects.consume(code);
      return flowContinue
    }
    /**
     * @param {Token} token
     * @param {boolean} [eof]
     * @returns {void}
     */

    function writeToChild(token, eof) {
      const stream = self.sliceStream(token);
      if (eof) stream.push(null);
      token.previous = childToken;
      if (childToken) childToken.next = token;
      childToken = token;
      childFlow.defineSkip(token.start);
      childFlow.write(stream); // Alright, so we just added a lazy line:
      //
      // ```markdown
      // > a
      // b.
      //
      // Or:
      //
      // > ~~~c
      // d
      //
      // Or:
      //
      // > | e |
      // f
      // ```
      //
      // The construct in the second example (fenced code) does not accept lazy
      // lines, so it marked itself as done at the end of its first line, and
      // then the content construct parses `d`.
      // Most constructs in markdown match on the first line: if the first line
      // forms a construct, a non-lazy line can’t “unmake” it.
      //
      // The construct in the third example is potentially a GFM table, and
      // those are *weird*.
      // It *could* be a table, from the first line, if the following line
      // matches a condition.
      // In this case, that second line is lazy, which “unmakes” the first line
      // and turns the whole into one content block.
      //
      // We’ve now parsed the non-lazy and the lazy line, and can figure out
      // whether the lazy line started a new flow block.
      // If it did, we exit the current containers between the two flow blocks.

      if (self.parser.lazy[token.start.line]) {
        let index = childFlow.events.length;

        while (index--) {
          if (
            // The token starts before the line ending…
            childFlow.events[index][1].start.offset < lineStartOffset && // …and either is not ended yet…
            (!childFlow.events[index][1].end || // …or ends after it.
              childFlow.events[index][1].end.offset > lineStartOffset)
          ) {
            // Exit: there’s still something open, which means it’s a lazy line
            // part of something.
            return
          }
        } // Note: this algorithm for moving events around is similar to the
        // algorithm when closing flow in `documentContinue`.

        const indexBeforeExits = self.events.length;
        let indexBeforeFlow = indexBeforeExits;
        /** @type {boolean|undefined} */

        let seen;
        /** @type {Point|undefined} */

        let point; // Find the previous chunk (the one before the lazy line).

        while (indexBeforeFlow--) {
          if (
            self.events[indexBeforeFlow][0] === 'exit' &&
            self.events[indexBeforeFlow][1].type === 'chunkFlow'
          ) {
            if (seen) {
              point = self.events[indexBeforeFlow][1].end;
              break
            }

            seen = true;
          }
        }

        exitContainers(continued); // Fix positions.

        index = indexBeforeExits;

        while (index < self.events.length) {
          self.events[index][1].end = Object.assign({}, point);
          index++;
        } // Inject the exits earlier (they’re still also at the end).

        splice(
          self.events,
          indexBeforeFlow + 1,
          0,
          self.events.slice(indexBeforeExits)
        ); // Discard the duplicate exits.

        self.events.length = index;
      }
    }
    /**
     * @param {number} size
     * @returns {void}
     */

    function exitContainers(size) {
      let index = stack.length; // Exit open containers.

      while (index-- > size) {
        const entry = stack[index];
        self.containerState = entry[1];
        entry[0].exit.call(self, effects);
      }

      stack.length = size;
    }

    function closeFlow() {
      childFlow.write([null]);
      childToken = undefined;
      childFlow = undefined;
      self.containerState._closeFlow = undefined;
    }
  }
  /** @type {Tokenizer} */

  function tokenizeContainer(effects, ok, nok) {
    return factorySpace(
      effects,
      effects.attempt(this.parser.constructs.document, ok, nok),
      'linePrefix',
      this.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4
    )
  }

  /**
   * @typedef {import('micromark-util-types').Code} Code
   */

  /**
   * Classify whether a character code represents whitespace, punctuation, or
   * something else.
   *
   * Used for attention (emphasis, strong), whose sequences can open or close
   * based on the class of surrounding characters.
   *
   * Note that eof (`null`) is seen as whitespace.
   *
   * @param {Code} code
   * @returns {number|undefined}
   */
  function classifyCharacter(code) {
    if (
      code === null ||
      markdownLineEndingOrSpace(code) ||
      unicodeWhitespace(code)
    ) {
      return 1
    }

    if (unicodePunctuation(code)) {
      return 2
    }
  }

  /**
   * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
   * @typedef {import('micromark-util-types').Event} Event
   * @typedef {import('micromark-util-types').Resolver} Resolver
   */

  /**
   * Call all `resolveAll`s.
   *
   * @param {{resolveAll?: Resolver}[]} constructs
   * @param {Event[]} events
   * @param {TokenizeContext} context
   * @returns {Event[]}
   */
  function resolveAll(constructs, events, context) {
    /** @type {Resolver[]} */
    const called = [];
    let index = -1;

    while (++index < constructs.length) {
      const resolve = constructs[index].resolveAll;

      if (resolve && !called.includes(resolve)) {
        events = resolve(events, context);
        called.push(resolve);
      }
    }

    return events
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').Resolver} Resolver
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Token} Token
   * @typedef {import('micromark-util-types').Event} Event
   * @typedef {import('micromark-util-types').Code} Code
   * @typedef {import('micromark-util-types').Point} Point
   */

  /** @type {Construct} */
  const attention = {
    name: 'attention',
    tokenize: tokenizeAttention,
    resolveAll: resolveAllAttention
  };
  /**
   * Take all events and resolve attention to emphasis or strong.
   *
   * @type {Resolver}
   */

  function resolveAllAttention(events, context) {
    let index = -1;
    /** @type {number} */

    let open;
    /** @type {Token} */

    let group;
    /** @type {Token} */

    let text;
    /** @type {Token} */

    let openingSequence;
    /** @type {Token} */

    let closingSequence;
    /** @type {number} */

    let use;
    /** @type {Event[]} */

    let nextEvents;
    /** @type {number} */

    let offset; // Walk through all events.
    //
    // Note: performance of this is fine on an mb of normal markdown, but it’s
    // a bottleneck for malicious stuff.

    while (++index < events.length) {
      // Find a token that can close.
      if (
        events[index][0] === 'enter' &&
        events[index][1].type === 'attentionSequence' &&
        events[index][1]._close
      ) {
        open = index; // Now walk back to find an opener.

        while (open--) {
          // Find a token that can open the closer.
          if (
            events[open][0] === 'exit' &&
            events[open][1].type === 'attentionSequence' &&
            events[open][1]._open && // If the markers are the same:
            context.sliceSerialize(events[open][1]).charCodeAt(0) ===
              context.sliceSerialize(events[index][1]).charCodeAt(0)
          ) {
            // If the opening can close or the closing can open,
            // and the close size *is not* a multiple of three,
            // but the sum of the opening and closing size *is* multiple of three,
            // then don’t match.
            if (
              (events[open][1]._close || events[index][1]._open) &&
              (events[index][1].end.offset - events[index][1].start.offset) % 3 &&
              !(
                (events[open][1].end.offset -
                  events[open][1].start.offset +
                  events[index][1].end.offset -
                  events[index][1].start.offset) %
                3
              )
            ) {
              continue
            } // Number of markers to use from the sequence.

            use =
              events[open][1].end.offset - events[open][1].start.offset > 1 &&
              events[index][1].end.offset - events[index][1].start.offset > 1
                ? 2
                : 1;
            const start = Object.assign({}, events[open][1].end);
            const end = Object.assign({}, events[index][1].start);
            movePoint(start, -use);
            movePoint(end, use);
            openingSequence = {
              type: use > 1 ? 'strongSequence' : 'emphasisSequence',
              start,
              end: Object.assign({}, events[open][1].end)
            };
            closingSequence = {
              type: use > 1 ? 'strongSequence' : 'emphasisSequence',
              start: Object.assign({}, events[index][1].start),
              end
            };
            text = {
              type: use > 1 ? 'strongText' : 'emphasisText',
              start: Object.assign({}, events[open][1].end),
              end: Object.assign({}, events[index][1].start)
            };
            group = {
              type: use > 1 ? 'strong' : 'emphasis',
              start: Object.assign({}, openingSequence.start),
              end: Object.assign({}, closingSequence.end)
            };
            events[open][1].end = Object.assign({}, openingSequence.start);
            events[index][1].start = Object.assign({}, closingSequence.end);
            nextEvents = []; // If there are more markers in the opening, add them before.

            if (events[open][1].end.offset - events[open][1].start.offset) {
              nextEvents = push(nextEvents, [
                ['enter', events[open][1], context],
                ['exit', events[open][1], context]
              ]);
            } // Opening.

            nextEvents = push(nextEvents, [
              ['enter', group, context],
              ['enter', openingSequence, context],
              ['exit', openingSequence, context],
              ['enter', text, context]
            ]); // Between.

            nextEvents = push(
              nextEvents,
              resolveAll(
                context.parser.constructs.insideSpan.null,
                events.slice(open + 1, index),
                context
              )
            ); // Closing.

            nextEvents = push(nextEvents, [
              ['exit', text, context],
              ['enter', closingSequence, context],
              ['exit', closingSequence, context],
              ['exit', group, context]
            ]); // If there are more markers in the closing, add them after.

            if (events[index][1].end.offset - events[index][1].start.offset) {
              offset = 2;
              nextEvents = push(nextEvents, [
                ['enter', events[index][1], context],
                ['exit', events[index][1], context]
              ]);
            } else {
              offset = 0;
            }

            splice(events, open - 1, index - open + 3, nextEvents);
            index = open + nextEvents.length - offset - 2;
            break
          }
        }
      }
    } // Remove remaining sequences.

    index = -1;

    while (++index < events.length) {
      if (events[index][1].type === 'attentionSequence') {
        events[index][1].type = 'data';
      }
    }

    return events
  }
  /** @type {Tokenizer} */

  function tokenizeAttention(effects, ok) {
    const attentionMarkers = this.parser.constructs.attentionMarkers.null;
    const previous = this.previous;
    const before = classifyCharacter(previous);
    /** @type {NonNullable<Code>} */

    let marker;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('attentionSequence');
      marker = code;
      return sequence(code)
    }
    /** @type {State} */

    function sequence(code) {
      if (code === marker) {
        effects.consume(code);
        return sequence
      }

      const token = effects.exit('attentionSequence');
      const after = classifyCharacter(code);
      const open =
        !after || (after === 2 && before) || attentionMarkers.includes(code);
      const close =
        !before || (before === 2 && after) || attentionMarkers.includes(previous);
      token._open = Boolean(marker === 42 ? open : open && (before || !close));
      token._close = Boolean(marker === 42 ? close : close && (after || !open));
      return ok(code)
    }
  }
  /**
   * Move a point a bit.
   *
   * Note: `move` only works inside lines! It’s not possible to move past other
   * chunks (replacement characters, tabs, or line endings).
   *
   * @param {Point} point
   * @param {number} offset
   * @returns {void}
   */

  function movePoint(point, offset) {
    point.column += offset;
    point.offset += offset;
    point._bufferIndex += offset;
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').State} State
   */

  /** @type {Construct} */
  const autolink = {
    name: 'autolink',
    tokenize: tokenizeAutolink
  };
  /** @type {Tokenizer} */

  function tokenizeAutolink(effects, ok, nok) {
    let size = 1;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('autolink');
      effects.enter('autolinkMarker');
      effects.consume(code);
      effects.exit('autolinkMarker');
      effects.enter('autolinkProtocol');
      return open
    }
    /** @type {State} */

    function open(code) {
      if (asciiAlpha(code)) {
        effects.consume(code);
        return schemeOrEmailAtext
      }

      return asciiAtext(code) ? emailAtext(code) : nok(code)
    }
    /** @type {State} */

    function schemeOrEmailAtext(code) {
      return code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)
        ? schemeInsideOrEmailAtext(code)
        : emailAtext(code)
    }
    /** @type {State} */

    function schemeInsideOrEmailAtext(code) {
      if (code === 58) {
        effects.consume(code);
        return urlInside
      }

      if (
        (code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) &&
        size++ < 32
      ) {
        effects.consume(code);
        return schemeInsideOrEmailAtext
      }

      return emailAtext(code)
    }
    /** @type {State} */

    function urlInside(code) {
      if (code === 62) {
        effects.exit('autolinkProtocol');
        return end(code)
      }

      if (code === null || code === 32 || code === 60 || asciiControl(code)) {
        return nok(code)
      }

      effects.consume(code);
      return urlInside
    }
    /** @type {State} */

    function emailAtext(code) {
      if (code === 64) {
        effects.consume(code);
        size = 0;
        return emailAtSignOrDot
      }

      if (asciiAtext(code)) {
        effects.consume(code);
        return emailAtext
      }

      return nok(code)
    }
    /** @type {State} */

    function emailAtSignOrDot(code) {
      return asciiAlphanumeric(code) ? emailLabel(code) : nok(code)
    }
    /** @type {State} */

    function emailLabel(code) {
      if (code === 46) {
        effects.consume(code);
        size = 0;
        return emailAtSignOrDot
      }

      if (code === 62) {
        // Exit, then change the type.
        effects.exit('autolinkProtocol').type = 'autolinkEmail';
        return end(code)
      }

      return emailValue(code)
    }
    /** @type {State} */

    function emailValue(code) {
      if ((code === 45 || asciiAlphanumeric(code)) && size++ < 63) {
        effects.consume(code);
        return code === 45 ? emailValue : emailLabel
      }

      return nok(code)
    }
    /** @type {State} */

    function end(code) {
      effects.enter('autolinkMarker');
      effects.consume(code);
      effects.exit('autolinkMarker');
      effects.exit('autolink');
      return ok
    }
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').State} State
   */

  /** @type {Construct} */
  const blankLine = {
    tokenize: tokenizeBlankLine,
    partial: true
  };
  /** @type {Tokenizer} */

  function tokenizeBlankLine(effects, ok, nok) {
    return factorySpace(effects, afterWhitespace, 'linePrefix')
    /** @type {State} */

    function afterWhitespace(code) {
      return code === null || markdownLineEnding(code) ? ok(code) : nok(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').Exiter} Exiter
   * @typedef {import('micromark-util-types').State} State
   */

  /** @type {Construct} */
  const blockQuote = {
    name: 'blockQuote',
    tokenize: tokenizeBlockQuoteStart,
    continuation: {
      tokenize: tokenizeBlockQuoteContinuation
    },
    exit: exit$2
  };
  /** @type {Tokenizer} */

  function tokenizeBlockQuoteStart(effects, ok, nok) {
    const self = this;
    return start
    /** @type {State} */

    function start(code) {
      if (code === 62) {
        const state = self.containerState;

        if (!state.open) {
          effects.enter('blockQuote', {
            _container: true
          });
          state.open = true;
        }

        effects.enter('blockQuotePrefix');
        effects.enter('blockQuoteMarker');
        effects.consume(code);
        effects.exit('blockQuoteMarker');
        return after
      }

      return nok(code)
    }
    /** @type {State} */

    function after(code) {
      if (markdownSpace(code)) {
        effects.enter('blockQuotePrefixWhitespace');
        effects.consume(code);
        effects.exit('blockQuotePrefixWhitespace');
        effects.exit('blockQuotePrefix');
        return ok
      }

      effects.exit('blockQuotePrefix');
      return ok(code)
    }
  }
  /** @type {Tokenizer} */

  function tokenizeBlockQuoteContinuation(effects, ok, nok) {
    return factorySpace(
      effects,
      effects.attempt(blockQuote, ok, nok),
      'linePrefix',
      this.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4
    )
  }
  /** @type {Exiter} */

  function exit$2(effects) {
    effects.exit('blockQuote');
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').State} State
   */

  /** @type {Construct} */
  const characterEscape = {
    name: 'characterEscape',
    tokenize: tokenizeCharacterEscape
  };
  /** @type {Tokenizer} */

  function tokenizeCharacterEscape(effects, ok, nok) {
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('characterEscape');
      effects.enter('escapeMarker');
      effects.consume(code);
      effects.exit('escapeMarker');
      return open
    }
    /** @type {State} */

    function open(code) {
      if (asciiPunctuation(code)) {
        effects.enter('characterEscapeValue');
        effects.consume(code);
        effects.exit('characterEscapeValue');
        effects.exit('characterEscape');
        return ok
      }

      return nok(code)
    }
  }

  /// <reference lib="dom" />

  /* eslint-env browser */

  const element = (()=>({innerHTML:'',textContent:''}))();

  /**
   * @param {string} value
   * @returns {string|false}
   */
  function decodeNamedCharacterReference(value) {
    const characterReference = '&' + value + ';';
    element.innerHTML = characterReference;
    const char = element.textContent;

    // Some named character references do not require the closing semicolon
    // (`&not`, for instance), which leads to situations where parsing the assumed
    // named reference of `&notit;` will result in the string `¬it;`.
    // When we encounter a trailing semicolon after parsing, and the character
    // reference to decode was not a semicolon (`&semi;`), we can assume that the
    // matching was not complete.
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    if (char.charCodeAt(char.length - 1) === 59 /* `;` */ && value !== 'semi') {
      return false
    }

    // If the decoded string is equal to the input, the character reference was
    // not valid.
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    return char === characterReference ? false : char
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').Token} Token
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Code} Code
   */

  /** @type {Construct} */
  const characterReference = {
    name: 'characterReference',
    tokenize: tokenizeCharacterReference
  };
  /** @type {Tokenizer} */

  function tokenizeCharacterReference(effects, ok, nok) {
    const self = this;
    let size = 0;
    /** @type {number} */

    let max;
    /** @type {(code: Code) => code is number} */

    let test;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('characterReference');
      effects.enter('characterReferenceMarker');
      effects.consume(code);
      effects.exit('characterReferenceMarker');
      return open
    }
    /** @type {State} */

    function open(code) {
      if (code === 35) {
        effects.enter('characterReferenceMarkerNumeric');
        effects.consume(code);
        effects.exit('characterReferenceMarkerNumeric');
        return numeric
      }

      effects.enter('characterReferenceValue');
      max = 31;
      test = asciiAlphanumeric;
      return value(code)
    }
    /** @type {State} */

    function numeric(code) {
      if (code === 88 || code === 120) {
        effects.enter('characterReferenceMarkerHexadecimal');
        effects.consume(code);
        effects.exit('characterReferenceMarkerHexadecimal');
        effects.enter('characterReferenceValue');
        max = 6;
        test = asciiHexDigit;
        return value
      }

      effects.enter('characterReferenceValue');
      max = 7;
      test = asciiDigit;
      return value(code)
    }
    /** @type {State} */

    function value(code) {
      /** @type {Token} */
      let token;

      if (code === 59 && size) {
        token = effects.exit('characterReferenceValue');

        if (
          test === asciiAlphanumeric &&
          !decodeNamedCharacterReference(self.sliceSerialize(token))
        ) {
          return nok(code)
        }

        effects.enter('characterReferenceMarker');
        effects.consume(code);
        effects.exit('characterReferenceMarker');
        effects.exit('characterReference');
        return ok
      }

      if (test(code) && size++ < max) {
        effects.consume(code);
        return value
      }

      return nok(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Code} Code
   */

  /** @type {Construct} */
  const codeFenced = {
    name: 'codeFenced',
    tokenize: tokenizeCodeFenced,
    concrete: true
  };
  /** @type {Tokenizer} */

  function tokenizeCodeFenced(effects, ok, nok) {
    const self = this;
    /** @type {Construct} */

    const closingFenceConstruct = {
      tokenize: tokenizeClosingFence,
      partial: true
    };
    /** @type {Construct} */

    const nonLazyLine = {
      tokenize: tokenizeNonLazyLine,
      partial: true
    };
    const tail = this.events[this.events.length - 1];
    const initialPrefix =
      tail && tail[1].type === 'linePrefix'
        ? tail[2].sliceSerialize(tail[1], true).length
        : 0;
    let sizeOpen = 0;
    /** @type {NonNullable<Code>} */

    let marker;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('codeFenced');
      effects.enter('codeFencedFence');
      effects.enter('codeFencedFenceSequence');
      marker = code;
      return sequenceOpen(code)
    }
    /** @type {State} */

    function sequenceOpen(code) {
      if (code === marker) {
        effects.consume(code);
        sizeOpen++;
        return sequenceOpen
      }

      effects.exit('codeFencedFenceSequence');
      return sizeOpen < 3
        ? nok(code)
        : factorySpace(effects, infoOpen, 'whitespace')(code)
    }
    /** @type {State} */

    function infoOpen(code) {
      if (code === null || markdownLineEnding(code)) {
        return openAfter(code)
      }

      effects.enter('codeFencedFenceInfo');
      effects.enter('chunkString', {
        contentType: 'string'
      });
      return info(code)
    }
    /** @type {State} */

    function info(code) {
      if (code === null || markdownLineEndingOrSpace(code)) {
        effects.exit('chunkString');
        effects.exit('codeFencedFenceInfo');
        return factorySpace(effects, infoAfter, 'whitespace')(code)
      }

      if (code === 96 && code === marker) return nok(code)
      effects.consume(code);
      return info
    }
    /** @type {State} */

    function infoAfter(code) {
      if (code === null || markdownLineEnding(code)) {
        return openAfter(code)
      }

      effects.enter('codeFencedFenceMeta');
      effects.enter('chunkString', {
        contentType: 'string'
      });
      return meta(code)
    }
    /** @type {State} */

    function meta(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit('chunkString');
        effects.exit('codeFencedFenceMeta');
        return openAfter(code)
      }

      if (code === 96 && code === marker) return nok(code)
      effects.consume(code);
      return meta
    }
    /** @type {State} */

    function openAfter(code) {
      effects.exit('codeFencedFence');
      return self.interrupt ? ok(code) : contentStart(code)
    }
    /** @type {State} */

    function contentStart(code) {
      if (code === null) {
        return after(code)
      }

      if (markdownLineEnding(code)) {
        return effects.attempt(
          nonLazyLine,
          effects.attempt(
            closingFenceConstruct,
            after,
            initialPrefix
              ? factorySpace(
                  effects,
                  contentStart,
                  'linePrefix',
                  initialPrefix + 1
                )
              : contentStart
          ),
          after
        )(code)
      }

      effects.enter('codeFlowValue');
      return contentContinue(code)
    }
    /** @type {State} */

    function contentContinue(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit('codeFlowValue');
        return contentStart(code)
      }

      effects.consume(code);
      return contentContinue
    }
    /** @type {State} */

    function after(code) {
      effects.exit('codeFenced');
      return ok(code)
    }
    /** @type {Tokenizer} */

    function tokenizeNonLazyLine(effects, ok, nok) {
      const self = this;
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('lineEnding');
        effects.consume(code);
        effects.exit('lineEnding');
        return lineStart
      }
      /** @type {State} */

      function lineStart(code) {
        return self.parser.lazy[self.now().line] ? nok(code) : ok(code)
      }
    }
    /** @type {Tokenizer} */

    function tokenizeClosingFence(effects, ok, nok) {
      let size = 0;
      return factorySpace(
        effects,
        closingSequenceStart,
        'linePrefix',
        this.parser.constructs.disable.null.includes('codeIndented')
          ? undefined
          : 4
      )
      /** @type {State} */

      function closingSequenceStart(code) {
        effects.enter('codeFencedFence');
        effects.enter('codeFencedFenceSequence');
        return closingSequence(code)
      }
      /** @type {State} */

      function closingSequence(code) {
        if (code === marker) {
          effects.consume(code);
          size++;
          return closingSequence
        }

        if (size < sizeOpen) return nok(code)
        effects.exit('codeFencedFenceSequence');
        return factorySpace(effects, closingSequenceEnd, 'whitespace')(code)
      }
      /** @type {State} */

      function closingSequenceEnd(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit('codeFencedFence');
          return ok(code)
        }

        return nok(code)
      }
    }
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').Resolver} Resolver
   * @typedef {import('micromark-util-types').Token} Token
   * @typedef {import('micromark-util-types').State} State
   */

  /** @type {Construct} */
  const codeIndented = {
    name: 'codeIndented',
    tokenize: tokenizeCodeIndented
  };
  /** @type {Construct} */

  const indentedContent = {
    tokenize: tokenizeIndentedContent,
    partial: true
  };
  /** @type {Tokenizer} */

  function tokenizeCodeIndented(effects, ok, nok) {
    const self = this;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('codeIndented');
      return factorySpace(effects, afterStartPrefix, 'linePrefix', 4 + 1)(code)
    }
    /** @type {State} */

    function afterStartPrefix(code) {
      const tail = self.events[self.events.length - 1];
      return tail &&
        tail[1].type === 'linePrefix' &&
        tail[2].sliceSerialize(tail[1], true).length >= 4
        ? afterPrefix(code)
        : nok(code)
    }
    /** @type {State} */

    function afterPrefix(code) {
      if (code === null) {
        return after(code)
      }

      if (markdownLineEnding(code)) {
        return effects.attempt(indentedContent, afterPrefix, after)(code)
      }

      effects.enter('codeFlowValue');
      return content(code)
    }
    /** @type {State} */

    function content(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit('codeFlowValue');
        return afterPrefix(code)
      }

      effects.consume(code);
      return content
    }
    /** @type {State} */

    function after(code) {
      effects.exit('codeIndented');
      return ok(code)
    }
  }
  /** @type {Tokenizer} */

  function tokenizeIndentedContent(effects, ok, nok) {
    const self = this;
    return start
    /** @type {State} */

    function start(code) {
      // If this is a lazy line, it can’t be code.
      if (self.parser.lazy[self.now().line]) {
        return nok(code)
      }

      if (markdownLineEnding(code)) {
        effects.enter('lineEnding');
        effects.consume(code);
        effects.exit('lineEnding');
        return start
      }

      return factorySpace(effects, afterPrefix, 'linePrefix', 4 + 1)(code)
    }
    /** @type {State} */

    function afterPrefix(code) {
      const tail = self.events[self.events.length - 1];
      return tail &&
        tail[1].type === 'linePrefix' &&
        tail[2].sliceSerialize(tail[1], true).length >= 4
        ? ok(code)
        : markdownLineEnding(code)
        ? start(code)
        : nok(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Resolver} Resolver
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').Previous} Previous
   * @typedef {import('micromark-util-types').Token} Token
   * @typedef {import('micromark-util-types').State} State
   */

  /** @type {Construct} */
  const codeText = {
    name: 'codeText',
    tokenize: tokenizeCodeText,
    resolve: resolveCodeText,
    previous: previous$3
  };
  /** @type {Resolver} */

  function resolveCodeText(events) {
    let tailExitIndex = events.length - 4;
    let headEnterIndex = 3;
    /** @type {number} */

    let index;
    /** @type {number|undefined} */

    let enter; // If we start and end with an EOL or a space.

    if (
      (events[headEnterIndex][1].type === 'lineEnding' ||
        events[headEnterIndex][1].type === 'space') &&
      (events[tailExitIndex][1].type === 'lineEnding' ||
        events[tailExitIndex][1].type === 'space')
    ) {
      index = headEnterIndex; // And we have data.

      while (++index < tailExitIndex) {
        if (events[index][1].type === 'codeTextData') {
          // Then we have padding.
          events[headEnterIndex][1].type = 'codeTextPadding';
          events[tailExitIndex][1].type = 'codeTextPadding';
          headEnterIndex += 2;
          tailExitIndex -= 2;
          break
        }
      }
    } // Merge adjacent spaces and data.

    index = headEnterIndex - 1;
    tailExitIndex++;

    while (++index <= tailExitIndex) {
      if (enter === undefined) {
        if (index !== tailExitIndex && events[index][1].type !== 'lineEnding') {
          enter = index;
        }
      } else if (
        index === tailExitIndex ||
        events[index][1].type === 'lineEnding'
      ) {
        events[enter][1].type = 'codeTextData';

        if (index !== enter + 2) {
          events[enter][1].end = events[index - 1][1].end;
          events.splice(enter + 2, index - enter - 2);
          tailExitIndex -= index - enter - 2;
          index = enter + 2;
        }

        enter = undefined;
      }
    }

    return events
  }
  /** @type {Previous} */

  function previous$3(code) {
    // If there is a previous code, there will always be a tail.
    return (
      code !== 96 ||
      this.events[this.events.length - 1][1].type === 'characterEscape'
    )
  }
  /** @type {Tokenizer} */

  function tokenizeCodeText(effects, ok, nok) {
    let sizeOpen = 0;
    /** @type {number} */

    let size;
    /** @type {Token} */

    let token;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('codeText');
      effects.enter('codeTextSequence');
      return openingSequence(code)
    }
    /** @type {State} */

    function openingSequence(code) {
      if (code === 96) {
        effects.consume(code);
        sizeOpen++;
        return openingSequence
      }

      effects.exit('codeTextSequence');
      return gap(code)
    }
    /** @type {State} */

    function gap(code) {
      // EOF.
      if (code === null) {
        return nok(code)
      } // Closing fence?
      // Could also be data.

      if (code === 96) {
        token = effects.enter('codeTextSequence');
        size = 0;
        return closingSequence(code)
      } // Tabs don’t work, and virtual spaces don’t make sense.

      if (code === 32) {
        effects.enter('space');
        effects.consume(code);
        effects.exit('space');
        return gap
      }

      if (markdownLineEnding(code)) {
        effects.enter('lineEnding');
        effects.consume(code);
        effects.exit('lineEnding');
        return gap
      } // Data.

      effects.enter('codeTextData');
      return data(code)
    } // In code.

    /** @type {State} */

    function data(code) {
      if (
        code === null ||
        code === 32 ||
        code === 96 ||
        markdownLineEnding(code)
      ) {
        effects.exit('codeTextData');
        return gap(code)
      }

      effects.consume(code);
      return data
    } // Closing fence.

    /** @type {State} */

    function closingSequence(code) {
      // More.
      if (code === 96) {
        effects.consume(code);
        size++;
        return closingSequence
      } // Done!

      if (size === sizeOpen) {
        effects.exit('codeTextSequence');
        effects.exit('codeText');
        return ok(code)
      } // More or less accents: mark as data.

      token.type = 'codeTextData';
      return data(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Token} Token
   * @typedef {import('micromark-util-types').Chunk} Chunk
   * @typedef {import('micromark-util-types').Event} Event
   */

  /**
   * Tokenize subcontent.
   *
   * @param {Event[]} events
   * @returns {boolean}
   */
  function subtokenize(events) {
    /** @type {Record<string, number>} */
    const jumps = {};
    let index = -1;
    /** @type {Event} */

    let event;
    /** @type {number|undefined} */

    let lineIndex;
    /** @type {number} */

    let otherIndex;
    /** @type {Event} */

    let otherEvent;
    /** @type {Event[]} */

    let parameters;
    /** @type {Event[]} */

    let subevents;
    /** @type {boolean|undefined} */

    let more;

    while (++index < events.length) {
      while (index in jumps) {
        index = jumps[index];
      }

      event = events[index]; // Add a hook for the GFM tasklist extension, which needs to know if text
      // is in the first content of a list item.

      if (
        index &&
        event[1].type === 'chunkFlow' &&
        events[index - 1][1].type === 'listItemPrefix'
      ) {
        subevents = event[1]._tokenizer.events;
        otherIndex = 0;

        if (
          otherIndex < subevents.length &&
          subevents[otherIndex][1].type === 'lineEndingBlank'
        ) {
          otherIndex += 2;
        }

        if (
          otherIndex < subevents.length &&
          subevents[otherIndex][1].type === 'content'
        ) {
          while (++otherIndex < subevents.length) {
            if (subevents[otherIndex][1].type === 'content') {
              break
            }

            if (subevents[otherIndex][1].type === 'chunkText') {
              subevents[otherIndex][1]._isInFirstContentOfListItem = true;
              otherIndex++;
            }
          }
        }
      } // Enter.

      if (event[0] === 'enter') {
        if (event[1].contentType) {
          Object.assign(jumps, subcontent(events, index));
          index = jumps[index];
          more = true;
        }
      } // Exit.
      else if (event[1]._container) {
        otherIndex = index;
        lineIndex = undefined;

        while (otherIndex--) {
          otherEvent = events[otherIndex];

          if (
            otherEvent[1].type === 'lineEnding' ||
            otherEvent[1].type === 'lineEndingBlank'
          ) {
            if (otherEvent[0] === 'enter') {
              if (lineIndex) {
                events[lineIndex][1].type = 'lineEndingBlank';
              }

              otherEvent[1].type = 'lineEnding';
              lineIndex = otherIndex;
            }
          } else {
            break
          }
        }

        if (lineIndex) {
          // Fix position.
          event[1].end = Object.assign({}, events[lineIndex][1].start); // Switch container exit w/ line endings.

          parameters = events.slice(lineIndex, index);
          parameters.unshift(event);
          splice(events, lineIndex, index - lineIndex + 1, parameters);
        }
      }
    }

    return !more
  }
  /**
   * Tokenize embedded tokens.
   *
   * @param {Event[]} events
   * @param {number} eventIndex
   * @returns {Record<string, number>}
   */

  function subcontent(events, eventIndex) {
    const token = events[eventIndex][1];
    const context = events[eventIndex][2];
    let startPosition = eventIndex - 1;
    /** @type {number[]} */

    const startPositions = [];
    const tokenizer =
      token._tokenizer || context.parser[token.contentType](token.start);
    const childEvents = tokenizer.events;
    /** @type {[number, number][]} */

    const jumps = [];
    /** @type {Record<string, number>} */

    const gaps = {};
    /** @type {Chunk[]} */

    let stream;
    /** @type {Token|undefined} */

    let previous;
    let index = -1;
    /** @type {Token|undefined} */

    let current = token;
    let adjust = 0;
    let start = 0;
    const breaks = [start]; // Loop forward through the linked tokens to pass them in order to the
    // subtokenizer.

    while (current) {
      // Find the position of the event for this token.
      while (events[++startPosition][1] !== current) {
        // Empty.
      }

      startPositions.push(startPosition);

      if (!current._tokenizer) {
        stream = context.sliceStream(current);

        if (!current.next) {
          stream.push(null);
        }

        if (previous) {
          tokenizer.defineSkip(current.start);
        }

        if (current._isInFirstContentOfListItem) {
          tokenizer._gfmTasklistFirstContentOfListItem = true;
        }

        tokenizer.write(stream);

        if (current._isInFirstContentOfListItem) {
          tokenizer._gfmTasklistFirstContentOfListItem = undefined;
        }
      } // Unravel the next token.

      previous = current;
      current = current.next;
    } // Now, loop back through all events (and linked tokens), to figure out which
    // parts belong where.

    current = token;

    while (++index < childEvents.length) {
      if (
        // Find a void token that includes a break.
        childEvents[index][0] === 'exit' &&
        childEvents[index - 1][0] === 'enter' &&
        childEvents[index][1].type === childEvents[index - 1][1].type &&
        childEvents[index][1].start.line !== childEvents[index][1].end.line
      ) {
        start = index + 1;
        breaks.push(start); // Help GC.

        current._tokenizer = undefined;
        current.previous = undefined;
        current = current.next;
      }
    } // Help GC.

    tokenizer.events = []; // If there’s one more token (which is the cases for lines that end in an
    // EOF), that’s perfect: the last point we found starts it.
    // If there isn’t then make sure any remaining content is added to it.

    if (current) {
      // Help GC.
      current._tokenizer = undefined;
      current.previous = undefined;
    } else {
      breaks.pop();
    } // Now splice the events from the subtokenizer into the current events,
    // moving back to front so that splice indices aren’t affected.

    index = breaks.length;

    while (index--) {
      const slice = childEvents.slice(breaks[index], breaks[index + 1]);
      const start = startPositions.pop();
      jumps.unshift([start, start + slice.length - 1]);
      splice(events, start, 2, slice);
    }

    index = -1;

    while (++index < jumps.length) {
      gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
      adjust += jumps[index][1] - jumps[index][0] - 1;
    }

    return gaps
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Resolver} Resolver
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').Token} Token
   * @typedef {import('micromark-util-types').State} State
   */

  /**
   * No name because it must not be turned off.
   * @type {Construct}
   */
  const content = {
    tokenize: tokenizeContent,
    resolve: resolveContent
  };
  /** @type {Construct} */

  const continuationConstruct = {
    tokenize: tokenizeContinuation,
    partial: true
  };
  /**
   * Content is transparent: it’s parsed right now. That way, definitions are also
   * parsed right now: before text in paragraphs (specifically, media) are parsed.
   *
   * @type {Resolver}
   */

  function resolveContent(events) {
    subtokenize(events);
    return events
  }
  /** @type {Tokenizer} */

  function tokenizeContent(effects, ok) {
    /** @type {Token} */
    let previous;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('content');
      previous = effects.enter('chunkContent', {
        contentType: 'content'
      });
      return data(code)
    }
    /** @type {State} */

    function data(code) {
      if (code === null) {
        return contentEnd(code)
      }

      if (markdownLineEnding(code)) {
        return effects.check(
          continuationConstruct,
          contentContinue,
          contentEnd
        )(code)
      } // Data.

      effects.consume(code);
      return data
    }
    /** @type {State} */

    function contentEnd(code) {
      effects.exit('chunkContent');
      effects.exit('content');
      return ok(code)
    }
    /** @type {State} */

    function contentContinue(code) {
      effects.consume(code);
      effects.exit('chunkContent');
      previous.next = effects.enter('chunkContent', {
        contentType: 'content',
        previous
      });
      previous = previous.next;
      return data
    }
  }
  /** @type {Tokenizer} */

  function tokenizeContinuation(effects, ok, nok) {
    const self = this;
    return startLookahead
    /** @type {State} */

    function startLookahead(code) {
      effects.exit('chunkContent');
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return factorySpace(effects, prefixed, 'linePrefix')
    }
    /** @type {State} */

    function prefixed(code) {
      if (code === null || markdownLineEnding(code)) {
        return nok(code)
      }

      const tail = self.events[self.events.length - 1];

      if (
        !self.parser.constructs.disable.null.includes('codeIndented') &&
        tail &&
        tail[1].type === 'linePrefix' &&
        tail[2].sliceSerialize(tail[1], true).length >= 4
      ) {
        return ok(code)
      }

      return effects.interrupt(self.parser.constructs.flow, nok, ok)(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Effects} Effects
   * @typedef {import('micromark-util-types').State} State
   */

  /**
   * @param {Effects} effects
   * @param {State} ok
   * @param {State} nok
   * @param {string} type
   * @param {string} literalType
   * @param {string} literalMarkerType
   * @param {string} rawType
   * @param {string} stringType
   * @param {number} [max=Infinity]
   * @returns {State}
   */
  // eslint-disable-next-line max-params
  function factoryDestination(
    effects,
    ok,
    nok,
    type,
    literalType,
    literalMarkerType,
    rawType,
    stringType,
    max
  ) {
    const limit = max || Number.POSITIVE_INFINITY;
    let balance = 0;
    return start
    /** @type {State} */

    function start(code) {
      if (code === 60) {
        effects.enter(type);
        effects.enter(literalType);
        effects.enter(literalMarkerType);
        effects.consume(code);
        effects.exit(literalMarkerType);
        return destinationEnclosedBefore
      }

      if (code === null || code === 41 || asciiControl(code)) {
        return nok(code)
      }

      effects.enter(type);
      effects.enter(rawType);
      effects.enter(stringType);
      effects.enter('chunkString', {
        contentType: 'string'
      });
      return destinationRaw(code)
    }
    /** @type {State} */

    function destinationEnclosedBefore(code) {
      if (code === 62) {
        effects.enter(literalMarkerType);
        effects.consume(code);
        effects.exit(literalMarkerType);
        effects.exit(literalType);
        effects.exit(type);
        return ok
      }

      effects.enter(stringType);
      effects.enter('chunkString', {
        contentType: 'string'
      });
      return destinationEnclosed(code)
    }
    /** @type {State} */

    function destinationEnclosed(code) {
      if (code === 62) {
        effects.exit('chunkString');
        effects.exit(stringType);
        return destinationEnclosedBefore(code)
      }

      if (code === null || code === 60 || markdownLineEnding(code)) {
        return nok(code)
      }

      effects.consume(code);
      return code === 92 ? destinationEnclosedEscape : destinationEnclosed
    }
    /** @type {State} */

    function destinationEnclosedEscape(code) {
      if (code === 60 || code === 62 || code === 92) {
        effects.consume(code);
        return destinationEnclosed
      }

      return destinationEnclosed(code)
    }
    /** @type {State} */

    function destinationRaw(code) {
      if (code === 40) {
        if (++balance > limit) return nok(code)
        effects.consume(code);
        return destinationRaw
      }

      if (code === 41) {
        if (!balance--) {
          effects.exit('chunkString');
          effects.exit(stringType);
          effects.exit(rawType);
          effects.exit(type);
          return ok(code)
        }

        effects.consume(code);
        return destinationRaw
      }

      if (code === null || markdownLineEndingOrSpace(code)) {
        if (balance) return nok(code)
        effects.exit('chunkString');
        effects.exit(stringType);
        effects.exit(rawType);
        effects.exit(type);
        return ok(code)
      }

      if (asciiControl(code)) return nok(code)
      effects.consume(code);
      return code === 92 ? destinationRawEscape : destinationRaw
    }
    /** @type {State} */

    function destinationRawEscape(code) {
      if (code === 40 || code === 41 || code === 92) {
        effects.consume(code);
        return destinationRaw
      }

      return destinationRaw(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Effects} Effects
   * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
   * @typedef {import('micromark-util-types').State} State
   */

  /**
   * @this {TokenizeContext}
   * @param {Effects} effects
   * @param {State} ok
   * @param {State} nok
   * @param {string} type
   * @param {string} markerType
   * @param {string} stringType
   * @returns {State}
   */
  // eslint-disable-next-line max-params
  function factoryLabel$1(effects, ok, nok, type, markerType, stringType) {
    const self = this;
    let size = 0;
    /** @type {boolean} */

    let data;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter(type);
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.enter(stringType);
      return atBreak
    }
    /** @type {State} */

    function atBreak(code) {
      if (
        code === null ||
        code === 91 ||
        (code === 93 && !data) ||
        /* To do: remove in the future once we’ve switched from
         * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
         * which doesn’t need this */

        /* Hidden footnotes hook */

        /* c8 ignore next 3 */
        (code === 94 &&
          !size &&
          '_hiddenFootnoteSupport' in self.parser.constructs) ||
        size > 999
      ) {
        return nok(code)
      }

      if (code === 93) {
        effects.exit(stringType);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        effects.exit(type);
        return ok
      }

      if (markdownLineEnding(code)) {
        effects.enter('lineEnding');
        effects.consume(code);
        effects.exit('lineEnding');
        return atBreak
      }

      effects.enter('chunkString', {
        contentType: 'string'
      });
      return label(code)
    }
    /** @type {State} */

    function label(code) {
      if (
        code === null ||
        code === 91 ||
        code === 93 ||
        markdownLineEnding(code) ||
        size++ > 999
      ) {
        effects.exit('chunkString');
        return atBreak(code)
      }

      effects.consume(code);
      data = data || !markdownSpace(code);
      return code === 92 ? labelEscape : label
    }
    /** @type {State} */

    function labelEscape(code) {
      if (code === 91 || code === 92 || code === 93) {
        effects.consume(code);
        size++;
        return label
      }

      return label(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Effects} Effects
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Code} Code
   */

  /**
   * @param {Effects} effects
   * @param {State} ok
   * @param {State} nok
   * @param {string} type
   * @param {string} markerType
   * @param {string} stringType
   * @returns {State}
   */
  // eslint-disable-next-line max-params
  function factoryTitle(effects, ok, nok, type, markerType, stringType) {
    /** @type {NonNullable<Code>} */
    let marker;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter(type);
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      marker = code === 40 ? 41 : code;
      return atFirstTitleBreak
    }
    /** @type {State} */

    function atFirstTitleBreak(code) {
      if (code === marker) {
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        effects.exit(type);
        return ok
      }

      effects.enter(stringType);
      return atTitleBreak(code)
    }
    /** @type {State} */

    function atTitleBreak(code) {
      if (code === marker) {
        effects.exit(stringType);
        return atFirstTitleBreak(marker)
      }

      if (code === null) {
        return nok(code)
      } // Note: blank lines can’t exist in content.

      if (markdownLineEnding(code)) {
        effects.enter('lineEnding');
        effects.consume(code);
        effects.exit('lineEnding');
        return factorySpace(effects, atTitleBreak, 'linePrefix')
      }

      effects.enter('chunkString', {
        contentType: 'string'
      });
      return title(code)
    }
    /** @type {State} */

    function title(code) {
      if (code === marker || code === null || markdownLineEnding(code)) {
        effects.exit('chunkString');
        return atTitleBreak(code)
      }

      effects.consume(code);
      return code === 92 ? titleEscape : title
    }
    /** @type {State} */

    function titleEscape(code) {
      if (code === marker || code === 92) {
        effects.consume(code);
        return title
      }

      return title(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Effects} Effects
   * @typedef {import('micromark-util-types').State} State
   */

  /**
   * @param {Effects} effects
   * @param {State} ok
   */
  function factoryWhitespace(effects, ok) {
    /** @type {boolean} */
    let seen;
    return start
    /** @type {State} */

    function start(code) {
      if (markdownLineEnding(code)) {
        effects.enter('lineEnding');
        effects.consume(code);
        effects.exit('lineEnding');
        seen = true;
        return start
      }

      if (markdownSpace(code)) {
        return factorySpace(
          effects,
          start,
          seen ? 'linePrefix' : 'lineSuffix'
        )(code)
      }

      return ok(code)
    }
  }

  /**
   * Normalize an identifier (such as used in definitions).
   *
   * @param {string} value
   * @returns {string}
   */
  function normalizeIdentifier(value) {
    return (
      value // Collapse Markdown whitespace.
        .replace(/[\t\n\r ]+/g, ' ') // Trim.
        .replace(/^ | $/g, '') // Some characters are considered “uppercase”, but if their lowercase
        // counterpart is uppercased will result in a different uppercase
        // character.
        // Hence, to get that form, we perform both lower- and uppercase.
        // Upper case makes sure keys will not interact with default prototypal
        // methods: no method is uppercase.
        .toLowerCase()
        .toUpperCase()
    )
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').State} State
   */

  /** @type {Construct} */
  const definition = {
    name: 'definition',
    tokenize: tokenizeDefinition
  };
  /** @type {Construct} */

  const titleConstruct = {
    tokenize: tokenizeTitle,
    partial: true
  };
  /** @type {Tokenizer} */

  function tokenizeDefinition(effects, ok, nok) {
    const self = this;
    /** @type {string} */

    let identifier;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('definition');
      return factoryLabel$1.call(
        self,
        effects,
        labelAfter,
        nok,
        'definitionLabel',
        'definitionLabelMarker',
        'definitionLabelString'
      )(code)
    }
    /** @type {State} */

    function labelAfter(code) {
      identifier = normalizeIdentifier(
        self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
      );

      if (code === 58) {
        effects.enter('definitionMarker');
        effects.consume(code);
        effects.exit('definitionMarker'); // Note: blank lines can’t exist in content.

        return factoryWhitespace(
          effects,
          factoryDestination(
            effects,
            effects.attempt(
              titleConstruct,
              factorySpace(effects, after, 'whitespace'),
              factorySpace(effects, after, 'whitespace')
            ),
            nok,
            'definitionDestination',
            'definitionDestinationLiteral',
            'definitionDestinationLiteralMarker',
            'definitionDestinationRaw',
            'definitionDestinationString'
          )
        )
      }

      return nok(code)
    }
    /** @type {State} */

    function after(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit('definition');

        if (!self.parser.defined.includes(identifier)) {
          self.parser.defined.push(identifier);
        }

        return ok(code)
      }

      return nok(code)
    }
  }
  /** @type {Tokenizer} */

  function tokenizeTitle(effects, ok, nok) {
    return start
    /** @type {State} */

    function start(code) {
      return markdownLineEndingOrSpace(code)
        ? factoryWhitespace(effects, before)(code)
        : nok(code)
    }
    /** @type {State} */

    function before(code) {
      if (code === 34 || code === 39 || code === 40) {
        return factoryTitle(
          effects,
          factorySpace(effects, after, 'whitespace'),
          nok,
          'definitionTitle',
          'definitionTitleMarker',
          'definitionTitleString'
        )(code)
      }

      return nok(code)
    }
    /** @type {State} */

    function after(code) {
      return code === null || markdownLineEnding(code) ? ok(code) : nok(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').State} State
   */

  /** @type {Construct} */
  const hardBreakEscape = {
    name: 'hardBreakEscape',
    tokenize: tokenizeHardBreakEscape
  };
  /** @type {Tokenizer} */

  function tokenizeHardBreakEscape(effects, ok, nok) {
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('hardBreakEscape');
      effects.enter('escapeMarker');
      effects.consume(code);
      return open
    }
    /** @type {State} */

    function open(code) {
      if (markdownLineEnding(code)) {
        effects.exit('escapeMarker');
        effects.exit('hardBreakEscape');
        return ok(code)
      }

      return nok(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Resolver} Resolver
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').Token} Token
   * @typedef {import('micromark-util-types').State} State
   */

  /** @type {Construct} */
  const headingAtx = {
    name: 'headingAtx',
    tokenize: tokenizeHeadingAtx,
    resolve: resolveHeadingAtx
  };
  /** @type {Resolver} */

  function resolveHeadingAtx(events, context) {
    let contentEnd = events.length - 2;
    let contentStart = 3;
    /** @type {Token} */

    let content;
    /** @type {Token} */

    let text; // Prefix whitespace, part of the opening.

    if (events[contentStart][1].type === 'whitespace') {
      contentStart += 2;
    } // Suffix whitespace, part of the closing.

    if (
      contentEnd - 2 > contentStart &&
      events[contentEnd][1].type === 'whitespace'
    ) {
      contentEnd -= 2;
    }

    if (
      events[contentEnd][1].type === 'atxHeadingSequence' &&
      (contentStart === contentEnd - 1 ||
        (contentEnd - 4 > contentStart &&
          events[contentEnd - 2][1].type === 'whitespace'))
    ) {
      contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
    }

    if (contentEnd > contentStart) {
      content = {
        type: 'atxHeadingText',
        start: events[contentStart][1].start,
        end: events[contentEnd][1].end
      };
      text = {
        type: 'chunkText',
        start: events[contentStart][1].start,
        end: events[contentEnd][1].end,
        // @ts-expect-error Constants are fine to assign.
        contentType: 'text'
      };
      splice(events, contentStart, contentEnd - contentStart + 1, [
        ['enter', content, context],
        ['enter', text, context],
        ['exit', text, context],
        ['exit', content, context]
      ]);
    }

    return events
  }
  /** @type {Tokenizer} */

  function tokenizeHeadingAtx(effects, ok, nok) {
    const self = this;
    let size = 0;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('atxHeading');
      effects.enter('atxHeadingSequence');
      return fenceOpenInside(code)
    }
    /** @type {State} */

    function fenceOpenInside(code) {
      if (code === 35 && size++ < 6) {
        effects.consume(code);
        return fenceOpenInside
      }

      if (code === null || markdownLineEndingOrSpace(code)) {
        effects.exit('atxHeadingSequence');
        return self.interrupt ? ok(code) : headingBreak(code)
      }

      return nok(code)
    }
    /** @type {State} */

    function headingBreak(code) {
      if (code === 35) {
        effects.enter('atxHeadingSequence');
        return sequence(code)
      }

      if (code === null || markdownLineEnding(code)) {
        effects.exit('atxHeading');
        return ok(code)
      }

      if (markdownSpace(code)) {
        return factorySpace(effects, headingBreak, 'whitespace')(code)
      }

      effects.enter('atxHeadingText');
      return data(code)
    }
    /** @type {State} */

    function sequence(code) {
      if (code === 35) {
        effects.consume(code);
        return sequence
      }

      effects.exit('atxHeadingSequence');
      return headingBreak(code)
    }
    /** @type {State} */

    function data(code) {
      if (code === null || code === 35 || markdownLineEndingOrSpace(code)) {
        effects.exit('atxHeadingText');
        return headingBreak(code)
      }

      effects.consume(code);
      return data
    }
  }

  /**
   * List of lowercase HTML tag names which when parsing HTML (flow), result
   * in more relaxed rules (condition 6): because they are known blocks, the
   * HTML-like syntax doesn’t have to be strictly parsed.
   * For tag names not in this list, a more strict algorithm (condition 7) is used
   * to detect whether the HTML-like syntax is seen as HTML (flow) or not.
   *
   * This is copied from:
   * <https://spec.commonmark.org/0.30/#html-blocks>.
   */
  const htmlBlockNames = [
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
    'hr',
    'html',
    'iframe',
    'legend',
    'li',
    'link',
    'main',
    'menu',
    'menuitem',
    'nav',
    'noframes',
    'ol',
    'optgroup',
    'option',
    'p',
    'param',
    'section',
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

  /**
   * List of lowercase HTML tag names which when parsing HTML (flow), result in
   * HTML that can include lines w/o exiting, until a closing tag also in this
   * list is found (condition 1).
   *
   * This module is copied from:
   * <https://spec.commonmark.org/0.30/#html-blocks>.
   *
   * Note that `textarea` was added in `CommonMark@0.30`.
   */
  const htmlRawNames = ['pre', 'script', 'style', 'textarea'];

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Resolver} Resolver
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Code} Code
   */
  /** @type {Construct} */

  const htmlFlow = {
    name: 'htmlFlow',
    tokenize: tokenizeHtmlFlow,
    resolveTo: resolveToHtmlFlow,
    concrete: true
  };
  /** @type {Construct} */

  const nextBlankConstruct = {
    tokenize: tokenizeNextBlank,
    partial: true
  };
  /** @type {Resolver} */

  function resolveToHtmlFlow(events) {
    let index = events.length;

    while (index--) {
      if (events[index][0] === 'enter' && events[index][1].type === 'htmlFlow') {
        break
      }
    }

    if (index > 1 && events[index - 2][1].type === 'linePrefix') {
      // Add the prefix start to the HTML token.
      events[index][1].start = events[index - 2][1].start; // Add the prefix start to the HTML line token.

      events[index + 1][1].start = events[index - 2][1].start; // Remove the line prefix.

      events.splice(index - 2, 2);
    }

    return events
  }
  /** @type {Tokenizer} */

  function tokenizeHtmlFlow(effects, ok, nok) {
    const self = this;
    /** @type {number} */

    let kind;
    /** @type {boolean} */

    let startTag;
    /** @type {string} */

    let buffer;
    /** @type {number} */

    let index;
    /** @type {Code} */

    let marker;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('htmlFlow');
      effects.enter('htmlFlowData');
      effects.consume(code);
      return open
    }
    /** @type {State} */

    function open(code) {
      if (code === 33) {
        effects.consume(code);
        return declarationStart
      }

      if (code === 47) {
        effects.consume(code);
        return tagCloseStart
      }

      if (code === 63) {
        effects.consume(code);
        kind = 3; // While we’re in an instruction instead of a declaration, we’re on a `?`
        // right now, so we do need to search for `>`, similar to declarations.

        return self.interrupt ? ok : continuationDeclarationInside
      }

      if (asciiAlpha(code)) {
        effects.consume(code);
        buffer = String.fromCharCode(code);
        startTag = true;
        return tagName
      }

      return nok(code)
    }
    /** @type {State} */

    function declarationStart(code) {
      if (code === 45) {
        effects.consume(code);
        kind = 2;
        return commentOpenInside
      }

      if (code === 91) {
        effects.consume(code);
        kind = 5;
        buffer = 'CDATA[';
        index = 0;
        return cdataOpenInside
      }

      if (asciiAlpha(code)) {
        effects.consume(code);
        kind = 4;
        return self.interrupt ? ok : continuationDeclarationInside
      }

      return nok(code)
    }
    /** @type {State} */

    function commentOpenInside(code) {
      if (code === 45) {
        effects.consume(code);
        return self.interrupt ? ok : continuationDeclarationInside
      }

      return nok(code)
    }
    /** @type {State} */

    function cdataOpenInside(code) {
      if (code === buffer.charCodeAt(index++)) {
        effects.consume(code);
        return index === buffer.length
          ? self.interrupt
            ? ok
            : continuation
          : cdataOpenInside
      }

      return nok(code)
    }
    /** @type {State} */

    function tagCloseStart(code) {
      if (asciiAlpha(code)) {
        effects.consume(code);
        buffer = String.fromCharCode(code);
        return tagName
      }

      return nok(code)
    }
    /** @type {State} */

    function tagName(code) {
      if (
        code === null ||
        code === 47 ||
        code === 62 ||
        markdownLineEndingOrSpace(code)
      ) {
        if (
          code !== 47 &&
          startTag &&
          htmlRawNames.includes(buffer.toLowerCase())
        ) {
          kind = 1;
          return self.interrupt ? ok(code) : continuation(code)
        }

        if (htmlBlockNames.includes(buffer.toLowerCase())) {
          kind = 6;

          if (code === 47) {
            effects.consume(code);
            return basicSelfClosing
          }

          return self.interrupt ? ok(code) : continuation(code)
        }

        kind = 7; // Do not support complete HTML when interrupting

        return self.interrupt && !self.parser.lazy[self.now().line]
          ? nok(code)
          : startTag
          ? completeAttributeNameBefore(code)
          : completeClosingTagAfter(code)
      }

      if (code === 45 || asciiAlphanumeric(code)) {
        effects.consume(code);
        buffer += String.fromCharCode(code);
        return tagName
      }

      return nok(code)
    }
    /** @type {State} */

    function basicSelfClosing(code) {
      if (code === 62) {
        effects.consume(code);
        return self.interrupt ? ok : continuation
      }

      return nok(code)
    }
    /** @type {State} */

    function completeClosingTagAfter(code) {
      if (markdownSpace(code)) {
        effects.consume(code);
        return completeClosingTagAfter
      }

      return completeEnd(code)
    }
    /** @type {State} */

    function completeAttributeNameBefore(code) {
      if (code === 47) {
        effects.consume(code);
        return completeEnd
      }

      if (code === 58 || code === 95 || asciiAlpha(code)) {
        effects.consume(code);
        return completeAttributeName
      }

      if (markdownSpace(code)) {
        effects.consume(code);
        return completeAttributeNameBefore
      }

      return completeEnd(code)
    }
    /** @type {State} */

    function completeAttributeName(code) {
      if (
        code === 45 ||
        code === 46 ||
        code === 58 ||
        code === 95 ||
        asciiAlphanumeric(code)
      ) {
        effects.consume(code);
        return completeAttributeName
      }

      return completeAttributeNameAfter(code)
    }
    /** @type {State} */

    function completeAttributeNameAfter(code) {
      if (code === 61) {
        effects.consume(code);
        return completeAttributeValueBefore
      }

      if (markdownSpace(code)) {
        effects.consume(code);
        return completeAttributeNameAfter
      }

      return completeAttributeNameBefore(code)
    }
    /** @type {State} */

    function completeAttributeValueBefore(code) {
      if (
        code === null ||
        code === 60 ||
        code === 61 ||
        code === 62 ||
        code === 96
      ) {
        return nok(code)
      }

      if (code === 34 || code === 39) {
        effects.consume(code);
        marker = code;
        return completeAttributeValueQuoted
      }

      if (markdownSpace(code)) {
        effects.consume(code);
        return completeAttributeValueBefore
      }

      marker = null;
      return completeAttributeValueUnquoted(code)
    }
    /** @type {State} */

    function completeAttributeValueQuoted(code) {
      if (code === null || markdownLineEnding(code)) {
        return nok(code)
      }

      if (code === marker) {
        effects.consume(code);
        return completeAttributeValueQuotedAfter
      }

      effects.consume(code);
      return completeAttributeValueQuoted
    }
    /** @type {State} */

    function completeAttributeValueUnquoted(code) {
      if (
        code === null ||
        code === 34 ||
        code === 39 ||
        code === 60 ||
        code === 61 ||
        code === 62 ||
        code === 96 ||
        markdownLineEndingOrSpace(code)
      ) {
        return completeAttributeNameAfter(code)
      }

      effects.consume(code);
      return completeAttributeValueUnquoted
    }
    /** @type {State} */

    function completeAttributeValueQuotedAfter(code) {
      if (code === 47 || code === 62 || markdownSpace(code)) {
        return completeAttributeNameBefore(code)
      }

      return nok(code)
    }
    /** @type {State} */

    function completeEnd(code) {
      if (code === 62) {
        effects.consume(code);
        return completeAfter
      }

      return nok(code)
    }
    /** @type {State} */

    function completeAfter(code) {
      if (markdownSpace(code)) {
        effects.consume(code);
        return completeAfter
      }

      return code === null || markdownLineEnding(code)
        ? continuation(code)
        : nok(code)
    }
    /** @type {State} */

    function continuation(code) {
      if (code === 45 && kind === 2) {
        effects.consume(code);
        return continuationCommentInside
      }

      if (code === 60 && kind === 1) {
        effects.consume(code);
        return continuationRawTagOpen
      }

      if (code === 62 && kind === 4) {
        effects.consume(code);
        return continuationClose
      }

      if (code === 63 && kind === 3) {
        effects.consume(code);
        return continuationDeclarationInside
      }

      if (code === 93 && kind === 5) {
        effects.consume(code);
        return continuationCharacterDataInside
      }

      if (markdownLineEnding(code) && (kind === 6 || kind === 7)) {
        return effects.check(
          nextBlankConstruct,
          continuationClose,
          continuationAtLineEnding
        )(code)
      }

      if (code === null || markdownLineEnding(code)) {
        return continuationAtLineEnding(code)
      }

      effects.consume(code);
      return continuation
    }
    /** @type {State} */

    function continuationAtLineEnding(code) {
      effects.exit('htmlFlowData');
      return htmlContinueStart(code)
    }
    /** @type {State} */

    function htmlContinueStart(code) {
      if (code === null) {
        return done(code)
      }

      if (markdownLineEnding(code)) {
        return effects.attempt(
          {
            tokenize: htmlLineEnd,
            partial: true
          },
          htmlContinueStart,
          done
        )(code)
      }

      effects.enter('htmlFlowData');
      return continuation(code)
    }
    /** @type {Tokenizer} */

    function htmlLineEnd(effects, ok, nok) {
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('lineEnding');
        effects.consume(code);
        effects.exit('lineEnding');
        return lineStart
      }
      /** @type {State} */

      function lineStart(code) {
        return self.parser.lazy[self.now().line] ? nok(code) : ok(code)
      }
    }
    /** @type {State} */

    function continuationCommentInside(code) {
      if (code === 45) {
        effects.consume(code);
        return continuationDeclarationInside
      }

      return continuation(code)
    }
    /** @type {State} */

    function continuationRawTagOpen(code) {
      if (code === 47) {
        effects.consume(code);
        buffer = '';
        return continuationRawEndTag
      }

      return continuation(code)
    }
    /** @type {State} */

    function continuationRawEndTag(code) {
      if (code === 62 && htmlRawNames.includes(buffer.toLowerCase())) {
        effects.consume(code);
        return continuationClose
      }

      if (asciiAlpha(code) && buffer.length < 8) {
        effects.consume(code);
        buffer += String.fromCharCode(code);
        return continuationRawEndTag
      }

      return continuation(code)
    }
    /** @type {State} */

    function continuationCharacterDataInside(code) {
      if (code === 93) {
        effects.consume(code);
        return continuationDeclarationInside
      }

      return continuation(code)
    }
    /** @type {State} */

    function continuationDeclarationInside(code) {
      if (code === 62) {
        effects.consume(code);
        return continuationClose
      } // More dashes.

      if (code === 45 && kind === 2) {
        effects.consume(code);
        return continuationDeclarationInside
      }

      return continuation(code)
    }
    /** @type {State} */

    function continuationClose(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit('htmlFlowData');
        return done(code)
      }

      effects.consume(code);
      return continuationClose
    }
    /** @type {State} */

    function done(code) {
      effects.exit('htmlFlow');
      return ok(code)
    }
  }
  /** @type {Tokenizer} */

  function tokenizeNextBlank(effects, ok, nok) {
    return start
    /** @type {State} */

    function start(code) {
      effects.exit('htmlFlowData');
      effects.enter('lineEndingBlank');
      effects.consume(code);
      effects.exit('lineEndingBlank');
      return effects.attempt(blankLine, ok, nok)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Code} Code
   */

  /** @type {Construct} */
  const htmlText = {
    name: 'htmlText',
    tokenize: tokenizeHtmlText
  };
  /** @type {Tokenizer} */

  function tokenizeHtmlText(effects, ok, nok) {
    const self = this;
    /** @type {NonNullable<Code>|undefined} */

    let marker;
    /** @type {string} */

    let buffer;
    /** @type {number} */

    let index;
    /** @type {State} */

    let returnState;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('htmlText');
      effects.enter('htmlTextData');
      effects.consume(code);
      return open
    }
    /** @type {State} */

    function open(code) {
      if (code === 33) {
        effects.consume(code);
        return declarationOpen
      }

      if (code === 47) {
        effects.consume(code);
        return tagCloseStart
      }

      if (code === 63) {
        effects.consume(code);
        return instruction
      }

      if (asciiAlpha(code)) {
        effects.consume(code);
        return tagOpen
      }

      return nok(code)
    }
    /** @type {State} */

    function declarationOpen(code) {
      if (code === 45) {
        effects.consume(code);
        return commentOpen
      }

      if (code === 91) {
        effects.consume(code);
        buffer = 'CDATA[';
        index = 0;
        return cdataOpen
      }

      if (asciiAlpha(code)) {
        effects.consume(code);
        return declaration
      }

      return nok(code)
    }
    /** @type {State} */

    function commentOpen(code) {
      if (code === 45) {
        effects.consume(code);
        return commentStart
      }

      return nok(code)
    }
    /** @type {State} */

    function commentStart(code) {
      if (code === null || code === 62) {
        return nok(code)
      }

      if (code === 45) {
        effects.consume(code);
        return commentStartDash
      }

      return comment(code)
    }
    /** @type {State} */

    function commentStartDash(code) {
      if (code === null || code === 62) {
        return nok(code)
      }

      return comment(code)
    }
    /** @type {State} */

    function comment(code) {
      if (code === null) {
        return nok(code)
      }

      if (code === 45) {
        effects.consume(code);
        return commentClose
      }

      if (markdownLineEnding(code)) {
        returnState = comment;
        return atLineEnding(code)
      }

      effects.consume(code);
      return comment
    }
    /** @type {State} */

    function commentClose(code) {
      if (code === 45) {
        effects.consume(code);
        return end
      }

      return comment(code)
    }
    /** @type {State} */

    function cdataOpen(code) {
      if (code === buffer.charCodeAt(index++)) {
        effects.consume(code);
        return index === buffer.length ? cdata : cdataOpen
      }

      return nok(code)
    }
    /** @type {State} */

    function cdata(code) {
      if (code === null) {
        return nok(code)
      }

      if (code === 93) {
        effects.consume(code);
        return cdataClose
      }

      if (markdownLineEnding(code)) {
        returnState = cdata;
        return atLineEnding(code)
      }

      effects.consume(code);
      return cdata
    }
    /** @type {State} */

    function cdataClose(code) {
      if (code === 93) {
        effects.consume(code);
        return cdataEnd
      }

      return cdata(code)
    }
    /** @type {State} */

    function cdataEnd(code) {
      if (code === 62) {
        return end(code)
      }

      if (code === 93) {
        effects.consume(code);
        return cdataEnd
      }

      return cdata(code)
    }
    /** @type {State} */

    function declaration(code) {
      if (code === null || code === 62) {
        return end(code)
      }

      if (markdownLineEnding(code)) {
        returnState = declaration;
        return atLineEnding(code)
      }

      effects.consume(code);
      return declaration
    }
    /** @type {State} */

    function instruction(code) {
      if (code === null) {
        return nok(code)
      }

      if (code === 63) {
        effects.consume(code);
        return instructionClose
      }

      if (markdownLineEnding(code)) {
        returnState = instruction;
        return atLineEnding(code)
      }

      effects.consume(code);
      return instruction
    }
    /** @type {State} */

    function instructionClose(code) {
      return code === 62 ? end(code) : instruction(code)
    }
    /** @type {State} */

    function tagCloseStart(code) {
      if (asciiAlpha(code)) {
        effects.consume(code);
        return tagClose
      }

      return nok(code)
    }
    /** @type {State} */

    function tagClose(code) {
      if (code === 45 || asciiAlphanumeric(code)) {
        effects.consume(code);
        return tagClose
      }

      return tagCloseBetween(code)
    }
    /** @type {State} */

    function tagCloseBetween(code) {
      if (markdownLineEnding(code)) {
        returnState = tagCloseBetween;
        return atLineEnding(code)
      }

      if (markdownSpace(code)) {
        effects.consume(code);
        return tagCloseBetween
      }

      return end(code)
    }
    /** @type {State} */

    function tagOpen(code) {
      if (code === 45 || asciiAlphanumeric(code)) {
        effects.consume(code);
        return tagOpen
      }

      if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
        return tagOpenBetween(code)
      }

      return nok(code)
    }
    /** @type {State} */

    function tagOpenBetween(code) {
      if (code === 47) {
        effects.consume(code);
        return end
      }

      if (code === 58 || code === 95 || asciiAlpha(code)) {
        effects.consume(code);
        return tagOpenAttributeName
      }

      if (markdownLineEnding(code)) {
        returnState = tagOpenBetween;
        return atLineEnding(code)
      }

      if (markdownSpace(code)) {
        effects.consume(code);
        return tagOpenBetween
      }

      return end(code)
    }
    /** @type {State} */

    function tagOpenAttributeName(code) {
      if (
        code === 45 ||
        code === 46 ||
        code === 58 ||
        code === 95 ||
        asciiAlphanumeric(code)
      ) {
        effects.consume(code);
        return tagOpenAttributeName
      }

      return tagOpenAttributeNameAfter(code)
    }
    /** @type {State} */

    function tagOpenAttributeNameAfter(code) {
      if (code === 61) {
        effects.consume(code);
        return tagOpenAttributeValueBefore
      }

      if (markdownLineEnding(code)) {
        returnState = tagOpenAttributeNameAfter;
        return atLineEnding(code)
      }

      if (markdownSpace(code)) {
        effects.consume(code);
        return tagOpenAttributeNameAfter
      }

      return tagOpenBetween(code)
    }
    /** @type {State} */

    function tagOpenAttributeValueBefore(code) {
      if (
        code === null ||
        code === 60 ||
        code === 61 ||
        code === 62 ||
        code === 96
      ) {
        return nok(code)
      }

      if (code === 34 || code === 39) {
        effects.consume(code);
        marker = code;
        return tagOpenAttributeValueQuoted
      }

      if (markdownLineEnding(code)) {
        returnState = tagOpenAttributeValueBefore;
        return atLineEnding(code)
      }

      if (markdownSpace(code)) {
        effects.consume(code);
        return tagOpenAttributeValueBefore
      }

      effects.consume(code);
      marker = undefined;
      return tagOpenAttributeValueUnquoted
    }
    /** @type {State} */

    function tagOpenAttributeValueQuoted(code) {
      if (code === marker) {
        effects.consume(code);
        return tagOpenAttributeValueQuotedAfter
      }

      if (code === null) {
        return nok(code)
      }

      if (markdownLineEnding(code)) {
        returnState = tagOpenAttributeValueQuoted;
        return atLineEnding(code)
      }

      effects.consume(code);
      return tagOpenAttributeValueQuoted
    }
    /** @type {State} */

    function tagOpenAttributeValueQuotedAfter(code) {
      if (code === 62 || code === 47 || markdownLineEndingOrSpace(code)) {
        return tagOpenBetween(code)
      }

      return nok(code)
    }
    /** @type {State} */

    function tagOpenAttributeValueUnquoted(code) {
      if (
        code === null ||
        code === 34 ||
        code === 39 ||
        code === 60 ||
        code === 61 ||
        code === 96
      ) {
        return nok(code)
      }

      if (code === 62 || markdownLineEndingOrSpace(code)) {
        return tagOpenBetween(code)
      }

      effects.consume(code);
      return tagOpenAttributeValueUnquoted
    } // We can’t have blank lines in content, so no need to worry about empty
    // tokens.

    /** @type {State} */

    function atLineEnding(code) {
      effects.exit('htmlTextData');
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return factorySpace(
        effects,
        afterPrefix,
        'linePrefix',
        self.parser.constructs.disable.null.includes('codeIndented')
          ? undefined
          : 4
      )
    }
    /** @type {State} */

    function afterPrefix(code) {
      effects.enter('htmlTextData');
      return returnState(code)
    }
    /** @type {State} */

    function end(code) {
      if (code === 62) {
        effects.consume(code);
        effects.exit('htmlTextData');
        effects.exit('htmlText');
        return ok
      }

      return nok(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Resolver} Resolver
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').Event} Event
   * @typedef {import('micromark-util-types').Token} Token
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Code} Code
   */

  /** @type {Construct} */
  const labelEnd = {
    name: 'labelEnd',
    tokenize: tokenizeLabelEnd,
    resolveTo: resolveToLabelEnd,
    resolveAll: resolveAllLabelEnd
  };
  /** @type {Construct} */

  const resourceConstruct = {
    tokenize: tokenizeResource
  };
  /** @type {Construct} */

  const fullReferenceConstruct = {
    tokenize: tokenizeFullReference
  };
  /** @type {Construct} */

  const collapsedReferenceConstruct = {
    tokenize: tokenizeCollapsedReference
  };
  /** @type {Resolver} */

  function resolveAllLabelEnd(events) {
    let index = -1;
    /** @type {Token} */

    let token;

    while (++index < events.length) {
      token = events[index][1];

      if (
        token.type === 'labelImage' ||
        token.type === 'labelLink' ||
        token.type === 'labelEnd'
      ) {
        // Remove the marker.
        events.splice(index + 1, token.type === 'labelImage' ? 4 : 2);
        token.type = 'data';
        index++;
      }
    }

    return events
  }
  /** @type {Resolver} */

  function resolveToLabelEnd(events, context) {
    let index = events.length;
    let offset = 0;
    /** @type {Token} */

    let token;
    /** @type {number|undefined} */

    let open;
    /** @type {number|undefined} */

    let close;
    /** @type {Event[]} */

    let media; // Find an opening.

    while (index--) {
      token = events[index][1];

      if (open) {
        // If we see another link, or inactive link label, we’ve been here before.
        if (
          token.type === 'link' ||
          (token.type === 'labelLink' && token._inactive)
        ) {
          break
        } // Mark other link openings as inactive, as we can’t have links in
        // links.

        if (events[index][0] === 'enter' && token.type === 'labelLink') {
          token._inactive = true;
        }
      } else if (close) {
        if (
          events[index][0] === 'enter' &&
          (token.type === 'labelImage' || token.type === 'labelLink') &&
          !token._balanced
        ) {
          open = index;

          if (token.type !== 'labelLink') {
            offset = 2;
            break
          }
        }
      } else if (token.type === 'labelEnd') {
        close = index;
      }
    }

    const group = {
      type: events[open][1].type === 'labelLink' ? 'link' : 'image',
      start: Object.assign({}, events[open][1].start),
      end: Object.assign({}, events[events.length - 1][1].end)
    };
    const label = {
      type: 'label',
      start: Object.assign({}, events[open][1].start),
      end: Object.assign({}, events[close][1].end)
    };
    const text = {
      type: 'labelText',
      start: Object.assign({}, events[open + offset + 2][1].end),
      end: Object.assign({}, events[close - 2][1].start)
    };
    media = [
      ['enter', group, context],
      ['enter', label, context]
    ]; // Opening marker.

    media = push(media, events.slice(open + 1, open + offset + 3)); // Text open.

    media = push(media, [['enter', text, context]]); // Between.

    media = push(
      media,
      resolveAll(
        context.parser.constructs.insideSpan.null,
        events.slice(open + offset + 4, close - 3),
        context
      )
    ); // Text close, marker close, label close.

    media = push(media, [
      ['exit', text, context],
      events[close - 2],
      events[close - 1],
      ['exit', label, context]
    ]); // Reference, resource, or so.

    media = push(media, events.slice(close + 1)); // Media close.

    media = push(media, [['exit', group, context]]);
    splice(events, open, events.length, media);
    return events
  }
  /** @type {Tokenizer} */

  function tokenizeLabelEnd(effects, ok, nok) {
    const self = this;
    let index = self.events.length;
    /** @type {Token} */

    let labelStart;
    /** @type {boolean} */

    let defined; // Find an opening.

    while (index--) {
      if (
        (self.events[index][1].type === 'labelImage' ||
          self.events[index][1].type === 'labelLink') &&
        !self.events[index][1]._balanced
      ) {
        labelStart = self.events[index][1];
        break
      }
    }

    return start
    /** @type {State} */

    function start(code) {
      if (!labelStart) {
        return nok(code)
      } // It’s a balanced bracket, but contains a link.

      if (labelStart._inactive) return balanced(code)
      defined = self.parser.defined.includes(
        normalizeIdentifier(
          self.sliceSerialize({
            start: labelStart.end,
            end: self.now()
          })
        )
      );
      effects.enter('labelEnd');
      effects.enter('labelMarker');
      effects.consume(code);
      effects.exit('labelMarker');
      effects.exit('labelEnd');
      return afterLabelEnd
    }
    /** @type {State} */

    function afterLabelEnd(code) {
      // Resource: `[asd](fgh)`.
      if (code === 40) {
        return effects.attempt(
          resourceConstruct,
          ok,
          defined ? ok : balanced
        )(code)
      } // Collapsed (`[asd][]`) or full (`[asd][fgh]`) reference?

      if (code === 91) {
        return effects.attempt(
          fullReferenceConstruct,
          ok,
          defined
            ? effects.attempt(collapsedReferenceConstruct, ok, balanced)
            : balanced
        )(code)
      } // Shortcut reference: `[asd]`?

      return defined ? ok(code) : balanced(code)
    }
    /** @type {State} */

    function balanced(code) {
      labelStart._balanced = true;
      return nok(code)
    }
  }
  /** @type {Tokenizer} */

  function tokenizeResource(effects, ok, nok) {
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('resource');
      effects.enter('resourceMarker');
      effects.consume(code);
      effects.exit('resourceMarker');
      return factoryWhitespace(effects, open)
    }
    /** @type {State} */

    function open(code) {
      if (code === 41) {
        return end(code)
      }

      return factoryDestination(
        effects,
        destinationAfter,
        nok,
        'resourceDestination',
        'resourceDestinationLiteral',
        'resourceDestinationLiteralMarker',
        'resourceDestinationRaw',
        'resourceDestinationString',
        32
      )(code)
    }
    /** @type {State} */

    function destinationAfter(code) {
      return markdownLineEndingOrSpace(code)
        ? factoryWhitespace(effects, between)(code)
        : end(code)
    }
    /** @type {State} */

    function between(code) {
      if (code === 34 || code === 39 || code === 40) {
        return factoryTitle(
          effects,
          factoryWhitespace(effects, end),
          nok,
          'resourceTitle',
          'resourceTitleMarker',
          'resourceTitleString'
        )(code)
      }

      return end(code)
    }
    /** @type {State} */

    function end(code) {
      if (code === 41) {
        effects.enter('resourceMarker');
        effects.consume(code);
        effects.exit('resourceMarker');
        effects.exit('resource');
        return ok
      }

      return nok(code)
    }
  }
  /** @type {Tokenizer} */

  function tokenizeFullReference(effects, ok, nok) {
    const self = this;
    return start
    /** @type {State} */

    function start(code) {
      return factoryLabel$1.call(
        self,
        effects,
        afterLabel,
        nok,
        'reference',
        'referenceMarker',
        'referenceString'
      )(code)
    }
    /** @type {State} */

    function afterLabel(code) {
      return self.parser.defined.includes(
        normalizeIdentifier(
          self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
        )
      )
        ? ok(code)
        : nok(code)
    }
  }
  /** @type {Tokenizer} */

  function tokenizeCollapsedReference(effects, ok, nok) {
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('reference');
      effects.enter('referenceMarker');
      effects.consume(code);
      effects.exit('referenceMarker');
      return open
    }
    /** @type {State} */

    function open(code) {
      if (code === 93) {
        effects.enter('referenceMarker');
        effects.consume(code);
        effects.exit('referenceMarker');
        effects.exit('reference');
        return ok
      }

      return nok(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').State} State
   */
  /** @type {Construct} */

  const labelStartImage = {
    name: 'labelStartImage',
    tokenize: tokenizeLabelStartImage,
    resolveAll: labelEnd.resolveAll
  };
  /** @type {Tokenizer} */

  function tokenizeLabelStartImage(effects, ok, nok) {
    const self = this;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('labelImage');
      effects.enter('labelImageMarker');
      effects.consume(code);
      effects.exit('labelImageMarker');
      return open
    }
    /** @type {State} */

    function open(code) {
      if (code === 91) {
        effects.enter('labelMarker');
        effects.consume(code);
        effects.exit('labelMarker');
        effects.exit('labelImage');
        return after
      }

      return nok(code)
    }
    /** @type {State} */

    function after(code) {
      /* To do: remove in the future once we’ve switched from
       * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
       * which doesn’t need this */

      /* Hidden footnotes hook */

      /* c8 ignore next 3 */
      return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs
        ? nok(code)
        : ok(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').State} State
   */
  /** @type {Construct} */

  const labelStartLink = {
    name: 'labelStartLink',
    tokenize: tokenizeLabelStartLink,
    resolveAll: labelEnd.resolveAll
  };
  /** @type {Tokenizer} */

  function tokenizeLabelStartLink(effects, ok, nok) {
    const self = this;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('labelLink');
      effects.enter('labelMarker');
      effects.consume(code);
      effects.exit('labelMarker');
      effects.exit('labelLink');
      return after
    }
    /** @type {State} */

    function after(code) {
      /* To do: remove in the future once we’ve switched from
       * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
       * which doesn’t need this */

      /* Hidden footnotes hook. */

      /* c8 ignore next 3 */
      return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs
        ? nok(code)
        : ok(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').State} State
   */

  /** @type {Construct} */
  const lineEnding = {
    name: 'lineEnding',
    tokenize: tokenizeLineEnding
  };
  /** @type {Tokenizer} */

  function tokenizeLineEnding(effects, ok) {
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return factorySpace(effects, ok, 'linePrefix')
    }
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Code} Code
   */

  /** @type {Construct} */
  const thematicBreak = {
    name: 'thematicBreak',
    tokenize: tokenizeThematicBreak
  };
  /** @type {Tokenizer} */

  function tokenizeThematicBreak(effects, ok, nok) {
    let size = 0;
    /** @type {NonNullable<Code>} */

    let marker;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('thematicBreak');
      marker = code;
      return atBreak(code)
    }
    /** @type {State} */

    function atBreak(code) {
      if (code === marker) {
        effects.enter('thematicBreakSequence');
        return sequence(code)
      }

      if (markdownSpace(code)) {
        return factorySpace(effects, atBreak, 'whitespace')(code)
      }

      if (size < 3 || (code !== null && !markdownLineEnding(code))) {
        return nok(code)
      }

      effects.exit('thematicBreak');
      return ok(code)
    }
    /** @type {State} */

    function sequence(code) {
      if (code === marker) {
        effects.consume(code);
        size++;
        return sequence
      }

      effects.exit('thematicBreakSequence');
      return atBreak(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
   * @typedef {import('micromark-util-types').Exiter} Exiter
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Code} Code
   */
  /** @type {Construct} */

  const list = {
    name: 'list',
    tokenize: tokenizeListStart,
    continuation: {
      tokenize: tokenizeListContinuation
    },
    exit: tokenizeListEnd
  };
  /** @type {Construct} */

  const listItemPrefixWhitespaceConstruct = {
    tokenize: tokenizeListItemPrefixWhitespace,
    partial: true
  };
  /** @type {Construct} */

  const indentConstruct = {
    tokenize: tokenizeIndent$1,
    partial: true
  };
  /**
   * @type {Tokenizer}
   * @this {TokenizeContextWithState}
   */

  function tokenizeListStart(effects, ok, nok) {
    const self = this;
    const tail = self.events[self.events.length - 1];
    let initialSize =
      tail && tail[1].type === 'linePrefix'
        ? tail[2].sliceSerialize(tail[1], true).length
        : 0;
    let size = 0;
    return start
    /** @type {State} */

    function start(code) {
      const kind =
        self.containerState.type ||
        (code === 42 || code === 43 || code === 45
          ? 'listUnordered'
          : 'listOrdered');

      if (
        kind === 'listUnordered'
          ? !self.containerState.marker || code === self.containerState.marker
          : asciiDigit(code)
      ) {
        if (!self.containerState.type) {
          self.containerState.type = kind;
          effects.enter(kind, {
            _container: true
          });
        }

        if (kind === 'listUnordered') {
          effects.enter('listItemPrefix');
          return code === 42 || code === 45
            ? effects.check(thematicBreak, nok, atMarker)(code)
            : atMarker(code)
        }

        if (!self.interrupt || code === 49) {
          effects.enter('listItemPrefix');
          effects.enter('listItemValue');
          return inside(code)
        }
      }

      return nok(code)
    }
    /** @type {State} */

    function inside(code) {
      if (asciiDigit(code) && ++size < 10) {
        effects.consume(code);
        return inside
      }

      if (
        (!self.interrupt || size < 2) &&
        (self.containerState.marker
          ? code === self.containerState.marker
          : code === 41 || code === 46)
      ) {
        effects.exit('listItemValue');
        return atMarker(code)
      }

      return nok(code)
    }
    /**
     * @type {State}
     **/

    function atMarker(code) {
      effects.enter('listItemMarker');
      effects.consume(code);
      effects.exit('listItemMarker');
      self.containerState.marker = self.containerState.marker || code;
      return effects.check(
        blankLine, // Can’t be empty when interrupting.
        self.interrupt ? nok : onBlank,
        effects.attempt(
          listItemPrefixWhitespaceConstruct,
          endOfPrefix,
          otherPrefix
        )
      )
    }
    /** @type {State} */

    function onBlank(code) {
      self.containerState.initialBlankLine = true;
      initialSize++;
      return endOfPrefix(code)
    }
    /** @type {State} */

    function otherPrefix(code) {
      if (markdownSpace(code)) {
        effects.enter('listItemPrefixWhitespace');
        effects.consume(code);
        effects.exit('listItemPrefixWhitespace');
        return endOfPrefix
      }

      return nok(code)
    }
    /** @type {State} */

    function endOfPrefix(code) {
      self.containerState.size =
        initialSize +
        self.sliceSerialize(effects.exit('listItemPrefix'), true).length;
      return ok(code)
    }
  }
  /**
   * @type {Tokenizer}
   * @this {TokenizeContextWithState}
   */

  function tokenizeListContinuation(effects, ok, nok) {
    const self = this;
    self.containerState._closeFlow = undefined;
    return effects.check(blankLine, onBlank, notBlank)
    /** @type {State} */

    function onBlank(code) {
      self.containerState.furtherBlankLines =
        self.containerState.furtherBlankLines ||
        self.containerState.initialBlankLine; // We have a blank line.
      // Still, try to consume at most the items size.

      return factorySpace(
        effects,
        ok,
        'listItemIndent',
        self.containerState.size + 1
      )(code)
    }
    /** @type {State} */

    function notBlank(code) {
      if (self.containerState.furtherBlankLines || !markdownSpace(code)) {
        self.containerState.furtherBlankLines = undefined;
        self.containerState.initialBlankLine = undefined;
        return notInCurrentItem(code)
      }

      self.containerState.furtherBlankLines = undefined;
      self.containerState.initialBlankLine = undefined;
      return effects.attempt(indentConstruct, ok, notInCurrentItem)(code)
    }
    /** @type {State} */

    function notInCurrentItem(code) {
      // While we do continue, we signal that the flow should be closed.
      self.containerState._closeFlow = true; // As we’re closing flow, we’re no longer interrupting.

      self.interrupt = undefined;
      return factorySpace(
        effects,
        effects.attempt(list, ok, nok),
        'linePrefix',
        self.parser.constructs.disable.null.includes('codeIndented')
          ? undefined
          : 4
      )(code)
    }
  }
  /**
   * @type {Tokenizer}
   * @this {TokenizeContextWithState}
   */

  function tokenizeIndent$1(effects, ok, nok) {
    const self = this;
    return factorySpace(
      effects,
      afterPrefix,
      'listItemIndent',
      self.containerState.size + 1
    )
    /** @type {State} */

    function afterPrefix(code) {
      const tail = self.events[self.events.length - 1];
      return tail &&
        tail[1].type === 'listItemIndent' &&
        tail[2].sliceSerialize(tail[1], true).length === self.containerState.size
        ? ok(code)
        : nok(code)
    }
  }
  /**
   * @type {Exiter}
   * @this {TokenizeContextWithState}
   */

  function tokenizeListEnd(effects) {
    effects.exit(this.containerState.type);
  }
  /**
   * @type {Tokenizer}
   * @this {TokenizeContextWithState}
   */

  function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
    const self = this;
    return factorySpace(
      effects,
      afterPrefix,
      'listItemPrefixWhitespace',
      self.parser.constructs.disable.null.includes('codeIndented')
        ? undefined
        : 4 + 1
    )
    /** @type {State} */

    function afterPrefix(code) {
      const tail = self.events[self.events.length - 1];
      return !markdownSpace(code) &&
        tail &&
        tail[1].type === 'listItemPrefixWhitespace'
        ? ok(code)
        : nok(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Resolver} Resolver
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Code} Code
   */

  /** @type {Construct} */
  const setextUnderline = {
    name: 'setextUnderline',
    tokenize: tokenizeSetextUnderline,
    resolveTo: resolveToSetextUnderline
  };
  /** @type {Resolver} */

  function resolveToSetextUnderline(events, context) {
    let index = events.length;
    /** @type {number|undefined} */

    let content;
    /** @type {number|undefined} */

    let text;
    /** @type {number|undefined} */

    let definition; // Find the opening of the content.
    // It’ll always exist: we don’t tokenize if it isn’t there.

    while (index--) {
      if (events[index][0] === 'enter') {
        if (events[index][1].type === 'content') {
          content = index;
          break
        }

        if (events[index][1].type === 'paragraph') {
          text = index;
        }
      } // Exit
      else {
        if (events[index][1].type === 'content') {
          // Remove the content end (if needed we’ll add it later)
          events.splice(index, 1);
        }

        if (!definition && events[index][1].type === 'definition') {
          definition = index;
        }
      }
    }

    const heading = {
      type: 'setextHeading',
      start: Object.assign({}, events[text][1].start),
      end: Object.assign({}, events[events.length - 1][1].end)
    }; // Change the paragraph to setext heading text.

    events[text][1].type = 'setextHeadingText'; // If we have definitions in the content, we’ll keep on having content,
    // but we need move it.

    if (definition) {
      events.splice(text, 0, ['enter', heading, context]);
      events.splice(definition + 1, 0, ['exit', events[content][1], context]);
      events[content][1].end = Object.assign({}, events[definition][1].end);
    } else {
      events[content][1] = heading;
    } // Add the heading exit at the end.

    events.push(['exit', heading, context]);
    return events
  }
  /** @type {Tokenizer} */

  function tokenizeSetextUnderline(effects, ok, nok) {
    const self = this;
    let index = self.events.length;
    /** @type {NonNullable<Code>} */

    let marker;
    /** @type {boolean} */

    let paragraph; // Find an opening.

    while (index--) {
      // Skip enter/exit of line ending, line prefix, and content.
      // We can now either have a definition or a paragraph.
      if (
        self.events[index][1].type !== 'lineEnding' &&
        self.events[index][1].type !== 'linePrefix' &&
        self.events[index][1].type !== 'content'
      ) {
        paragraph = self.events[index][1].type === 'paragraph';
        break
      }
    }

    return start
    /** @type {State} */

    function start(code) {
      if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
        effects.enter('setextHeadingLine');
        effects.enter('setextHeadingLineSequence');
        marker = code;
        return closingSequence(code)
      }

      return nok(code)
    }
    /** @type {State} */

    function closingSequence(code) {
      if (code === marker) {
        effects.consume(code);
        return closingSequence
      }

      effects.exit('setextHeadingLineSequence');
      return factorySpace(effects, closingSequenceEnd, 'lineSuffix')(code)
    }
    /** @type {State} */

    function closingSequenceEnd(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit('setextHeadingLine');
        return ok(code)
      }

      return nok(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
   * @typedef {import('micromark-util-types').Initializer} Initializer
   * @typedef {import('micromark-util-types').State} State
   */

  /** @type {InitialConstruct} */
  const flow$1 = {
    tokenize: initializeFlow
  };
  /** @type {Initializer} */

  function initializeFlow(effects) {
    const self = this;
    const initial = effects.attempt(
      // Try to parse a blank line.
      blankLine,
      atBlankEnding, // Try to parse initial flow (essentially, only code).
      effects.attempt(
        this.parser.constructs.flowInitial,
        afterConstruct,
        factorySpace(
          effects,
          effects.attempt(
            this.parser.constructs.flow,
            afterConstruct,
            effects.attempt(content, afterConstruct)
          ),
          'linePrefix'
        )
      )
    );
    return initial
    /** @type {State} */

    function atBlankEnding(code) {
      if (code === null) {
        effects.consume(code);
        return
      }

      effects.enter('lineEndingBlank');
      effects.consume(code);
      effects.exit('lineEndingBlank');
      self.currentConstruct = undefined;
      return initial
    }
    /** @type {State} */

    function afterConstruct(code) {
      if (code === null) {
        effects.consume(code);
        return
      }

      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      self.currentConstruct = undefined;
      return initial
    }
  }

  /**
   * @typedef {import('micromark-util-types').Resolver} Resolver
   * @typedef {import('micromark-util-types').Initializer} Initializer
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Code} Code
   */
  const resolver = {
    resolveAll: createResolver()
  };
  const string$2 = initializeFactory('string');
  const text$2 = initializeFactory('text');
  /**
   * @param {'string'|'text'} field
   * @returns {InitialConstruct}
   */

  function initializeFactory(field) {
    return {
      tokenize: initializeText,
      resolveAll: createResolver(
        field === 'text' ? resolveAllLineSuffixes : undefined
      )
    }
    /** @type {Initializer} */

    function initializeText(effects) {
      const self = this;
      const constructs = this.parser.constructs[field];
      const text = effects.attempt(constructs, start, notText);
      return start
      /** @type {State} */

      function start(code) {
        return atBreak(code) ? text(code) : notText(code)
      }
      /** @type {State} */

      function notText(code) {
        if (code === null) {
          effects.consume(code);
          return
        }

        effects.enter('data');
        effects.consume(code);
        return data
      }
      /** @type {State} */

      function data(code) {
        if (atBreak(code)) {
          effects.exit('data');
          return text(code)
        } // Data.

        effects.consume(code);
        return data
      }
      /**
       * @param {Code} code
       * @returns {boolean}
       */

      function atBreak(code) {
        if (code === null) {
          return true
        }

        const list = constructs[code];
        let index = -1;

        if (list) {
          while (++index < list.length) {
            const item = list[index];

            if (!item.previous || item.previous.call(self, self.previous)) {
              return true
            }
          }
        }

        return false
      }
    }
  }
  /**
   * @param {Resolver} [extraResolver]
   * @returns {Resolver}
   */

  function createResolver(extraResolver) {
    return resolveAllText
    /** @type {Resolver} */

    function resolveAllText(events, context) {
      let index = -1;
      /** @type {number|undefined} */

      let enter; // A rather boring computation (to merge adjacent `data` events) which
      // improves mm performance by 29%.

      while (++index <= events.length) {
        if (enter === undefined) {
          if (events[index] && events[index][1].type === 'data') {
            enter = index;
            index++;
          }
        } else if (!events[index] || events[index][1].type !== 'data') {
          // Don’t do anything if there is one data token.
          if (index !== enter + 2) {
            events[enter][1].end = events[index - 1][1].end;
            events.splice(enter + 2, index - enter - 2);
            index = enter + 2;
          }

          enter = undefined;
        }
      }

      return extraResolver ? extraResolver(events, context) : events
    }
  }
  /**
   * A rather ugly set of instructions which again looks at chunks in the input
   * stream.
   * The reason to do this here is that it is *much* faster to parse in reverse.
   * And that we can’t hook into `null` to split the line suffix before an EOF.
   * To do: figure out if we can make this into a clean utility, or even in core.
   * As it will be useful for GFMs literal autolink extension (and maybe even
   * tables?)
   *
   * @type {Resolver}
   */

  function resolveAllLineSuffixes(events, context) {
    let eventIndex = 0; // Skip first.

    while (++eventIndex <= events.length) {
      if (
        (eventIndex === events.length ||
          events[eventIndex][1].type === 'lineEnding') &&
        events[eventIndex - 1][1].type === 'data'
      ) {
        const data = events[eventIndex - 1][1];
        const chunks = context.sliceStream(data);
        let index = chunks.length;
        let bufferIndex = -1;
        let size = 0;
        /** @type {boolean|undefined} */

        let tabs;

        while (index--) {
          const chunk = chunks[index];

          if (typeof chunk === 'string') {
            bufferIndex = chunk.length;

            while (chunk.charCodeAt(bufferIndex - 1) === 32) {
              size++;
              bufferIndex--;
            }

            if (bufferIndex) break
            bufferIndex = -1;
          } // Number
          else if (chunk === -2) {
            tabs = true;
            size++;
          } else if (chunk === -1) ; else {
            // Replacement character, exit.
            index++;
            break
          }
        }

        if (size) {
          const token = {
            type:
              eventIndex === events.length || tabs || size < 2
                ? 'lineSuffix'
                : 'hardBreakTrailing',
            start: {
              line: data.end.line,
              column: data.end.column - size,
              offset: data.end.offset - size,
              _index: data.start._index + index,
              _bufferIndex: index
                ? bufferIndex
                : data.start._bufferIndex + bufferIndex
            },
            end: Object.assign({}, data.end)
          };
          data.end = Object.assign({}, token.start);

          if (data.start.offset === data.end.offset) {
            Object.assign(data, token);
          } else {
            events.splice(
              eventIndex,
              0,
              ['enter', token, context],
              ['exit', token, context]
            );
            eventIndex += 2;
          }
        }

        eventIndex++;
      }
    }

    return events
  }

  /**
   * @typedef {import('micromark-util-types').Code} Code
   * @typedef {import('micromark-util-types').Chunk} Chunk
   * @typedef {import('micromark-util-types').Point} Point
   * @typedef {import('micromark-util-types').Token} Token
   * @typedef {import('micromark-util-types').Effects} Effects
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
   * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
   * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
   * @typedef {import('micromark-util-types').ParseContext} ParseContext
   */

  /**
   * Create a tokenizer.
   * Tokenizers deal with one type of data (e.g., containers, flow, text).
   * The parser is the object dealing with it all.
   * `initialize` works like other constructs, except that only its `tokenize`
   * function is used, in which case it doesn’t receive an `ok` or `nok`.
   * `from` can be given to set the point before the first character, although
   * when further lines are indented, they must be set with `defineSkip`.
   *
   * @param {ParseContext} parser
   * @param {InitialConstruct} initialize
   * @param {Omit<Point, '_index'|'_bufferIndex'>} [from]
   * @returns {TokenizeContext}
   */
  function createTokenizer(parser, initialize, from) {
    /** @type {Point} */
    let point = Object.assign(
      from
        ? Object.assign({}, from)
        : {
            line: 1,
            column: 1,
            offset: 0
          },
      {
        _index: 0,
        _bufferIndex: -1
      }
    );
    /** @type {Record<string, number>} */

    const columnStart = {};
    /** @type {Array<Construct>} */

    const resolveAllConstructs = [];
    /** @type {Array<Chunk>} */

    let chunks = [];
    /** @type {Array<Token>} */

    let stack = [];
    /**
     * Tools used for tokenizing.
     *
     * @type {Effects}
     */

    const effects = {
      consume,
      enter,
      exit,
      attempt: constructFactory(onsuccessfulconstruct),
      check: constructFactory(onsuccessfulcheck),
      interrupt: constructFactory(onsuccessfulcheck, {
        interrupt: true
      })
    };
    /**
     * State and tools for resolving and serializing.
     *
     * @type {TokenizeContext}
     */

    const context = {
      previous: null,
      code: null,
      containerState: {},
      events: [],
      parser,
      sliceStream,
      sliceSerialize,
      now,
      defineSkip,
      write
    };
    /**
     * The state function.
     *
     * @type {State|void}
     */

    let state = initialize.tokenize.call(context, effects);

    if (initialize.resolveAll) {
      resolveAllConstructs.push(initialize);
    }

    return context
    /** @type {TokenizeContext['write']} */

    function write(slice) {
      chunks = push(chunks, slice);
      main(); // Exit if we’re not done, resolve might change stuff.

      if (chunks[chunks.length - 1] !== null) {
        return []
      }

      addResult(initialize, 0); // Otherwise, resolve, and exit.

      context.events = resolveAll(resolveAllConstructs, context.events, context);
      return context.events
    } //
    // Tools.
    //

    /** @type {TokenizeContext['sliceSerialize']} */

    function sliceSerialize(token, expandTabs) {
      return serializeChunks(sliceStream(token), expandTabs)
    }
    /** @type {TokenizeContext['sliceStream']} */

    function sliceStream(token) {
      return sliceChunks(chunks, token)
    }
    /** @type {TokenizeContext['now']} */

    function now() {
      return Object.assign({}, point)
    }
    /** @type {TokenizeContext['defineSkip']} */

    function defineSkip(value) {
      columnStart[value.line] = value.column;
      accountForPotentialSkip();
    } //
    // State management.
    //

    /**
     * Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
     * `consume`).
     * Here is where we walk through the chunks, which either include strings of
     * several characters, or numerical character codes.
     * The reason to do this in a loop instead of a call is so the stack can
     * drain.
     *
     * @returns {void}
     */

    function main() {
      /** @type {number} */
      let chunkIndex;

      while (point._index < chunks.length) {
        const chunk = chunks[point._index]; // If we’re in a buffer chunk, loop through it.

        if (typeof chunk === 'string') {
          chunkIndex = point._index;

          if (point._bufferIndex < 0) {
            point._bufferIndex = 0;
          }

          while (
            point._index === chunkIndex &&
            point._bufferIndex < chunk.length
          ) {
            go(chunk.charCodeAt(point._bufferIndex));
          }
        } else {
          go(chunk);
        }
      }
    }
    /**
     * Deal with one code.
     *
     * @param {Code} code
     * @returns {void}
     */

    function go(code) {
      state = state(code);
    }
    /** @type {Effects['consume']} */

    function consume(code) {
      if (markdownLineEnding(code)) {
        point.line++;
        point.column = 1;
        point.offset += code === -3 ? 2 : 1;
        accountForPotentialSkip();
      } else if (code !== -1) {
        point.column++;
        point.offset++;
      } // Not in a string chunk.

      if (point._bufferIndex < 0) {
        point._index++;
      } else {
        point._bufferIndex++; // At end of string chunk.
        // @ts-expect-error Points w/ non-negative `_bufferIndex` reference
        // strings.

        if (point._bufferIndex === chunks[point._index].length) {
          point._bufferIndex = -1;
          point._index++;
        }
      } // Expose the previous character.

      context.previous = code; // Mark as consumed.
    }
    /** @type {Effects['enter']} */

    function enter(type, fields) {
      /** @type {Token} */
      // @ts-expect-error Patch instead of assign required fields to help GC.
      const token = fields || {};
      token.type = type;
      token.start = now();
      context.events.push(['enter', token, context]);
      stack.push(token);
      return token
    }
    /** @type {Effects['exit']} */

    function exit(type) {
      const token = stack.pop();
      token.end = now();
      context.events.push(['exit', token, context]);
      return token
    }
    /**
     * Use results.
     *
     * @type {ReturnHandle}
     */

    function onsuccessfulconstruct(construct, info) {
      addResult(construct, info.from);
    }
    /**
     * Discard results.
     *
     * @type {ReturnHandle}
     */

    function onsuccessfulcheck(_, info) {
      info.restore();
    }
    /**
     * Factory to attempt/check/interrupt.
     *
     * @param {ReturnHandle} onreturn
     * @param {Record<string, unknown>} [fields]
     */

    function constructFactory(onreturn, fields) {
      return hook
      /**
       * Handle either an object mapping codes to constructs, a list of
       * constructs, or a single construct.
       *
       * @param {Construct|Array<Construct>|ConstructRecord} constructs
       * @param {State} returnState
       * @param {State} [bogusState]
       * @returns {State}
       */

      function hook(constructs, returnState, bogusState) {
        /** @type {Array<Construct>} */
        let listOfConstructs;
        /** @type {number} */

        let constructIndex;
        /** @type {Construct} */

        let currentConstruct;
        /** @type {Info} */

        let info;
        return Array.isArray(constructs)
          ? /* c8 ignore next 1 */
            handleListOfConstructs(constructs)
          : 'tokenize' in constructs // @ts-expect-error Looks like a construct.
          ? handleListOfConstructs([constructs])
          : handleMapOfConstructs(constructs)
        /**
         * Handle a list of construct.
         *
         * @param {ConstructRecord} map
         * @returns {State}
         */

        function handleMapOfConstructs(map) {
          return start
          /** @type {State} */

          function start(code) {
            const def = code !== null && map[code];
            const all = code !== null && map.null;
            const list = [
              // To do: add more extension tests.

              /* c8 ignore next 2 */
              ...(Array.isArray(def) ? def : def ? [def] : []),
              ...(Array.isArray(all) ? all : all ? [all] : [])
            ];
            return handleListOfConstructs(list)(code)
          }
        }
        /**
         * Handle a list of construct.
         *
         * @param {Array<Construct>} list
         * @returns {State}
         */

        function handleListOfConstructs(list) {
          listOfConstructs = list;
          constructIndex = 0;

          if (list.length === 0) {
            return bogusState
          }

          return handleConstruct(list[constructIndex])
        }
        /**
         * Handle a single construct.
         *
         * @param {Construct} construct
         * @returns {State}
         */

        function handleConstruct(construct) {
          return start
          /** @type {State} */

          function start(code) {
            // To do: not needed to store if there is no bogus state, probably?
            // Currently doesn’t work because `inspect` in document does a check
            // w/o a bogus, which doesn’t make sense. But it does seem to help perf
            // by not storing.
            info = store();
            currentConstruct = construct;

            if (!construct.partial) {
              context.currentConstruct = construct;
            }

            if (
              construct.name &&
              context.parser.constructs.disable.null.includes(construct.name)
            ) {
              return nok()
            }

            return construct.tokenize.call(
              // If we do have fields, create an object w/ `context` as its
              // prototype.
              // This allows a “live binding”, which is needed for `interrupt`.
              fields ? Object.assign(Object.create(context), fields) : context,
              effects,
              ok,
              nok
            )(code)
          }
        }
        /** @type {State} */

        function ok(code) {
          onreturn(currentConstruct, info);
          return returnState
        }
        /** @type {State} */

        function nok(code) {
          info.restore();

          if (++constructIndex < listOfConstructs.length) {
            return handleConstruct(listOfConstructs[constructIndex])
          }

          return bogusState
        }
      }
    }
    /**
     * @param {Construct} construct
     * @param {number} from
     * @returns {void}
     */

    function addResult(construct, from) {
      if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
        resolveAllConstructs.push(construct);
      }

      if (construct.resolve) {
        splice(
          context.events,
          from,
          context.events.length - from,
          construct.resolve(context.events.slice(from), context)
        );
      }

      if (construct.resolveTo) {
        context.events = construct.resolveTo(context.events, context);
      }
    }
    /**
     * Store state.
     *
     * @returns {Info}
     */

    function store() {
      const startPoint = now();
      const startPrevious = context.previous;
      const startCurrentConstruct = context.currentConstruct;
      const startEventsIndex = context.events.length;
      const startStack = Array.from(stack);
      return {
        restore,
        from: startEventsIndex
      }
      /**
       * Restore state.
       *
       * @returns {void}
       */

      function restore() {
        point = startPoint;
        context.previous = startPrevious;
        context.currentConstruct = startCurrentConstruct;
        context.events.length = startEventsIndex;
        stack = startStack;
        accountForPotentialSkip();
      }
    }
    /**
     * Move the current point a bit forward in the line when it’s on a column
     * skip.
     *
     * @returns {void}
     */

    function accountForPotentialSkip() {
      if (point.line in columnStart && point.column < 2) {
        point.column = columnStart[point.line];
        point.offset += columnStart[point.line] - 1;
      }
    }
  }
  /**
   * Get the chunks from a slice of chunks in the range of a token.
   *
   * @param {Array<Chunk>} chunks
   * @param {Pick<Token, 'start'|'end'>} token
   * @returns {Array<Chunk>}
   */

  function sliceChunks(chunks, token) {
    const startIndex = token.start._index;
    const startBufferIndex = token.start._bufferIndex;
    const endIndex = token.end._index;
    const endBufferIndex = token.end._bufferIndex;
    /** @type {Array<Chunk>} */

    let view;

    if (startIndex === endIndex) {
      // @ts-expect-error `_bufferIndex` is used on string chunks.
      view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
    } else {
      view = chunks.slice(startIndex, endIndex);

      if (startBufferIndex > -1) {
        // @ts-expect-error `_bufferIndex` is used on string chunks.
        view[0] = view[0].slice(startBufferIndex);
      }

      if (endBufferIndex > 0) {
        // @ts-expect-error `_bufferIndex` is used on string chunks.
        view.push(chunks[endIndex].slice(0, endBufferIndex));
      }
    }

    return view
  }
  /**
   * Get the string value of a slice of chunks.
   *
   * @param {Array<Chunk>} chunks
   * @param {boolean} [expandTabs=false]
   * @returns {string}
   */

  function serializeChunks(chunks, expandTabs) {
    let index = -1;
    /** @type {Array<string>} */

    const result = [];
    /** @type {boolean|undefined} */

    let atTab;

    while (++index < chunks.length) {
      const chunk = chunks[index];
      /** @type {string} */

      let value;

      if (typeof chunk === 'string') {
        value = chunk;
      } else
        switch (chunk) {
          case -5: {
            value = '\r';
            break
          }

          case -4: {
            value = '\n';
            break
          }

          case -3: {
            value = '\r' + '\n';
            break
          }

          case -2: {
            value = expandTabs ? ' ' : '\t';
            break
          }

          case -1: {
            if (!expandTabs && atTab) continue
            value = ' ';
            break
          }

          default: {
            // Currently only replacement character.
            value = String.fromCharCode(chunk);
          }
        }

      atTab = chunk === -2;
      result.push(value);
    }

    return result.join('')
  }

  /**
   * @typedef {import('micromark-util-types').Extension} Extension
   */
  /** @type {Extension['document']} */

  const document = {
    [42]: list,
    [43]: list,
    [45]: list,
    [48]: list,
    [49]: list,
    [50]: list,
    [51]: list,
    [52]: list,
    [53]: list,
    [54]: list,
    [55]: list,
    [56]: list,
    [57]: list,
    [62]: blockQuote
  };
  /** @type {Extension['contentInitial']} */

  const contentInitial = {
    [91]: definition
  };
  /** @type {Extension['flowInitial']} */

  const flowInitial = {
    [-2]: codeIndented,
    [-1]: codeIndented,
    [32]: codeIndented
  };
  /** @type {Extension['flow']} */

  const flow = {
    [35]: headingAtx,
    [42]: thematicBreak,
    [45]: [setextUnderline, thematicBreak],
    [60]: htmlFlow,
    [61]: setextUnderline,
    [95]: thematicBreak,
    [96]: codeFenced,
    [126]: codeFenced
  };
  /** @type {Extension['string']} */

  const string$1 = {
    [38]: characterReference,
    [92]: characterEscape
  };
  /** @type {Extension['text']} */

  const text$1 = {
    [-5]: lineEnding,
    [-4]: lineEnding,
    [-3]: lineEnding,
    [33]: labelStartImage,
    [38]: characterReference,
    [42]: attention,
    [60]: [autolink, htmlText],
    [91]: labelStartLink,
    [92]: [hardBreakEscape, characterEscape],
    [93]: labelEnd,
    [95]: attention,
    [96]: codeText
  };
  /** @type {Extension['insideSpan']} */

  const insideSpan = {
    null: [attention, resolver]
  };
  /** @type {Extension['attentionMarkers']} */

  const attentionMarkers = {
    null: [42, 95]
  };
  /** @type {Extension['disable']} */

  const disable = {
    null: []
  };

  var defaultConstructs = /*#__PURE__*/Object.freeze({
    __proto__: null,
    document: document,
    contentInitial: contentInitial,
    flowInitial: flowInitial,
    flow: flow,
    string: string$1,
    text: text$1,
    insideSpan: insideSpan,
    attentionMarkers: attentionMarkers,
    disable: disable
  });

  /**
   * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
   * @typedef {import('micromark-util-types').FullNormalizedExtension} FullNormalizedExtension
   * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
   * @typedef {import('micromark-util-types').ParseContext} ParseContext
   * @typedef {import('micromark-util-types').Create} Create
   */
  /**
   * @param {ParseOptions} [options]
   * @returns {ParseContext}
   */

  function parse$2(options = {}) {
    /** @type {FullNormalizedExtension} */
    // @ts-expect-error `defaultConstructs` is full, so the result will be too.
    const constructs = combineExtensions(
      // @ts-expect-error Same as above.
      [defaultConstructs].concat(options.extensions || [])
    );
    /** @type {ParseContext} */

    const parser = {
      defined: [],
      lazy: {},
      constructs,
      content: create(content$1),
      document: create(document$1),
      flow: create(flow$1),
      string: create(string$2),
      text: create(text$2)
    };
    return parser
    /**
     * @param {InitialConstruct} initial
     */

    function create(initial) {
      return creator
      /** @type {Create} */

      function creator(from) {
        return createTokenizer(parser, initial, from)
      }
    }
  }

  /**
   * @typedef {import('micromark-util-types').Encoding} Encoding
   * @typedef {import('micromark-util-types').Value} Value
   * @typedef {import('micromark-util-types').Chunk} Chunk
   * @typedef {import('micromark-util-types').Code} Code
   */

  /**
   * @callback Preprocessor
   * @param {Value} value
   * @param {Encoding} [encoding]
   * @param {boolean} [end=false]
   * @returns {Array<Chunk>}
   */
  const search = /[\0\t\n\r]/g;
  /**
   * @returns {Preprocessor}
   */

  function preprocess() {
    let column = 1;
    let buffer = '';
    /** @type {boolean|undefined} */

    let start = true;
    /** @type {boolean|undefined} */

    let atCarriageReturn;
    return preprocessor
    /** @type {Preprocessor} */

    function preprocessor(value, encoding, end) {
      /** @type {Array<Chunk>} */
      const chunks = [];
      /** @type {RegExpMatchArray|null} */

      let match;
      /** @type {number} */

      let next;
      /** @type {number} */

      let startPosition;
      /** @type {number} */

      let endPosition;
      /** @type {Code} */

      let code; // @ts-expect-error `Buffer` does allow an encoding.

      value = buffer + value.toString(encoding);
      startPosition = 0;
      buffer = '';

      if (start) {
        if (value.charCodeAt(0) === 65279) {
          startPosition++;
        }

        start = undefined;
      }

      while (startPosition < value.length) {
        search.lastIndex = startPosition;
        match = search.exec(value);
        endPosition =
          match && match.index !== undefined ? match.index : value.length;
        code = value.charCodeAt(endPosition);

        if (!match) {
          buffer = value.slice(startPosition);
          break
        }

        if (code === 10 && startPosition === endPosition && atCarriageReturn) {
          chunks.push(-3);
          atCarriageReturn = undefined;
        } else {
          if (atCarriageReturn) {
            chunks.push(-5);
            atCarriageReturn = undefined;
          }

          if (startPosition < endPosition) {
            chunks.push(value.slice(startPosition, endPosition));
            column += endPosition - startPosition;
          }

          switch (code) {
            case 0: {
              chunks.push(65533);
              column++;
              break
            }

            case 9: {
              next = Math.ceil(column / 4) * 4;
              chunks.push(-2);

              while (column++ < next) chunks.push(-1);

              break
            }

            case 10: {
              chunks.push(-4);
              column = 1;
              break
            }

            default: {
              atCarriageReturn = true;
              column = 1;
            }
          }
        }

        startPosition = endPosition + 1;
      }

      if (end) {
        if (atCarriageReturn) chunks.push(-5);
        if (buffer) chunks.push(buffer);
        chunks.push(null);
      }

      return chunks
    }
  }

  /**
   * @typedef {import('micromark-util-types').Event} Event
   */
  /**
   * @param {Array<Event>} events
   * @returns {Array<Event>}
   */

  function postprocess(events) {
    while (!subtokenize(events)) {
      // Empty
    }

    return events
  }

  /**
   * Turn the number (in string form as either hexa- or plain decimal) coming from
   * a numeric character reference into a character.
   *
   * @param {string} value
   *   Value to decode.
   * @param {number} base
   *   Numeric base.
   * @returns {string}
   */
  function decodeNumericCharacterReference(value, base) {
    const code = Number.parseInt(value, base);

    if (
      // C0 except for HT, LF, FF, CR, space
      code < 9 ||
      code === 11 ||
      (code > 13 && code < 32) || // Control character (DEL) of the basic block and C1 controls.
      (code > 126 && code < 160) || // Lone high surrogates and low surrogates.
      (code > 55295 && code < 57344) || // Noncharacters.
      (code > 64975 && code < 65008) ||
      (code & 65535) === 65535 ||
      (code & 65535) === 65534 || // Out of range
      code > 1114111
    ) {
      return '\uFFFD'
    }

    return String.fromCharCode(code)
  }

  const characterEscapeOrReference =
    /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  /**
   * Utility to decode markdown strings (which occur in places such as fenced
   * code info strings, destinations, labels, and titles).
   * The “string” content type allows character escapes and -references.
   * This decodes those.
   *
   * @param {string} value
   * @returns {string}
   */

  function decodeString(value) {
    return value.replace(characterEscapeOrReference, decode)
  }
  /**
   * @param {string} $0
   * @param {string} $1
   * @param {string} $2
   * @returns {string}
   */

  function decode($0, $1, $2) {
    if ($1) {
      // Escape.
      return $1
    } // Reference.

    const head = $2.charCodeAt(0);

    if (head === 35) {
      const head = $2.charCodeAt(1);
      const hex = head === 120 || head === 88;
      return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10)
    }

    return decodeNamedCharacterReference($2) || $0
  }

  /**
   * @typedef {import('micromark-util-types').Encoding} Encoding
   * @typedef {import('micromark-util-types').Event} Event
   * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
   * @typedef {import('micromark-util-types').Token} Token
   * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
   * @typedef {import('micromark-util-types').Value} Value
   * @typedef {import('unist').Parent} UnistParent
   * @typedef {import('unist').Point} Point
   * @typedef {import('mdast').PhrasingContent} PhrasingContent
   * @typedef {import('mdast').Content} Content
   * @typedef {Root|Content} Node
   * @typedef {Extract<Node, UnistParent>} Parent
   * @typedef {import('mdast').Break} Break
   * @typedef {import('mdast').Blockquote} Blockquote
   * @typedef {import('mdast').Code} Code
   * @typedef {import('mdast').Definition} Definition
   * @typedef {import('mdast').Emphasis} Emphasis
   * @typedef {import('mdast').Heading} Heading
   * @typedef {import('mdast').HTML} HTML
   * @typedef {import('mdast').Image} Image
   * @typedef {import('mdast').ImageReference} ImageReference
   * @typedef {import('mdast').InlineCode} InlineCode
   * @typedef {import('mdast').Link} Link
   * @typedef {import('mdast').LinkReference} LinkReference
   * @typedef {import('mdast').List} List
   * @typedef {import('mdast').ListItem} ListItem
   * @typedef {import('mdast').Paragraph} Paragraph
   * @typedef {import('mdast').Root} Root
   * @typedef {import('mdast').Strong} Strong
   * @typedef {import('mdast').Text} Text
   * @typedef {import('mdast').ThematicBreak} ThematicBreak
   *
   * @typedef {UnistParent & {type: 'fragment', children: Array<PhrasingContent>}} Fragment
   */
  const own$3 = {}.hasOwnProperty;
  /**
   * @param value Markdown to parse (`string` or `Buffer`).
   * @param [encoding] Character encoding to understand `value` as when it’s a `Buffer` (`string`, default: `'utf8'`).
   * @param [options] Configuration
   */

  const fromMarkdown =
    /**
     * @type {(
     *   ((value: Value, encoding: Encoding, options?: Options) => Root) &
     *   ((value: Value, options?: Options) => Root)
     * )}
     */

    /**
     * @param {Value} value
     * @param {Encoding} [encoding]
     * @param {Options} [options]
     * @returns {Root}
     */
    function (value, encoding, options) {
      if (typeof encoding !== 'string') {
        options = encoding;
        encoding = undefined;
      }

      return compiler(options)(
        postprocess(
          parse$2(options).document().write(preprocess()(value, encoding, true))
        )
      )
    };
  /**
   * Note this compiler only understand complete buffering, not streaming.
   *
   * @param {Options} [options]
   */

  function compiler(options = {}) {
    /** @type {NormalizedExtension} */
    // @ts-expect-error: our base has all required fields, so the result will too.
    const config = configure(
      {
        transforms: [],
        canContainEols: [
          'emphasis',
          'fragment',
          'heading',
          'paragraph',
          'strong'
        ],
        enter: {
          autolink: opener(link),
          autolinkProtocol: onenterdata,
          autolinkEmail: onenterdata,
          atxHeading: opener(heading),
          blockQuote: opener(blockQuote),
          characterEscape: onenterdata,
          characterReference: onenterdata,
          codeFenced: opener(codeFlow),
          codeFencedFenceInfo: buffer,
          codeFencedFenceMeta: buffer,
          codeIndented: opener(codeFlow, buffer),
          codeText: opener(codeText, buffer),
          codeTextData: onenterdata,
          data: onenterdata,
          codeFlowValue: onenterdata,
          definition: opener(definition),
          definitionDestinationString: buffer,
          definitionLabelString: buffer,
          definitionTitleString: buffer,
          emphasis: opener(emphasis),
          hardBreakEscape: opener(hardBreak),
          hardBreakTrailing: opener(hardBreak),
          htmlFlow: opener(html, buffer),
          htmlFlowData: onenterdata,
          htmlText: opener(html, buffer),
          htmlTextData: onenterdata,
          image: opener(image),
          label: buffer,
          link: opener(link),
          listItem: opener(listItem),
          listItemValue: onenterlistitemvalue,
          listOrdered: opener(list, onenterlistordered),
          listUnordered: opener(list),
          paragraph: opener(paragraph),
          reference: onenterreference,
          referenceString: buffer,
          resourceDestinationString: buffer,
          resourceTitleString: buffer,
          setextHeading: opener(heading),
          strong: opener(strong),
          thematicBreak: opener(thematicBreak)
        },
        exit: {
          atxHeading: closer(),
          atxHeadingSequence: onexitatxheadingsequence,
          autolink: closer(),
          autolinkEmail: onexitautolinkemail,
          autolinkProtocol: onexitautolinkprotocol,
          blockQuote: closer(),
          characterEscapeValue: onexitdata,
          characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
          characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
          characterReferenceValue: onexitcharacterreferencevalue,
          codeFenced: closer(onexitcodefenced),
          codeFencedFence: onexitcodefencedfence,
          codeFencedFenceInfo: onexitcodefencedfenceinfo,
          codeFencedFenceMeta: onexitcodefencedfencemeta,
          codeFlowValue: onexitdata,
          codeIndented: closer(onexitcodeindented),
          codeText: closer(onexitcodetext),
          codeTextData: onexitdata,
          data: onexitdata,
          definition: closer(),
          definitionDestinationString: onexitdefinitiondestinationstring,
          definitionLabelString: onexitdefinitionlabelstring,
          definitionTitleString: onexitdefinitiontitlestring,
          emphasis: closer(),
          hardBreakEscape: closer(onexithardbreak),
          hardBreakTrailing: closer(onexithardbreak),
          htmlFlow: closer(onexithtmlflow),
          htmlFlowData: onexitdata,
          htmlText: closer(onexithtmltext),
          htmlTextData: onexitdata,
          image: closer(onexitimage),
          label: onexitlabel,
          labelText: onexitlabeltext,
          lineEnding: onexitlineending,
          link: closer(onexitlink),
          listItem: closer(),
          listOrdered: closer(),
          listUnordered: closer(),
          paragraph: closer(),
          referenceString: onexitreferencestring,
          resourceDestinationString: onexitresourcedestinationstring,
          resourceTitleString: onexitresourcetitlestring,
          resource: onexitresource,
          setextHeading: closer(onexitsetextheading),
          setextHeadingLineSequence: onexitsetextheadinglinesequence,
          setextHeadingText: onexitsetextheadingtext,
          strong: closer(),
          thematicBreak: closer()
        }
      },
      options.mdastExtensions || []
    );
    /** @type {CompileData} */

    const data = {};
    return compile
    /**
     * @param {Array<Event>} events
     * @returns {Root}
     */

    function compile(events) {
      /** @type {Root} */
      let tree = {
        type: 'root',
        children: []
      };
      /** @type {CompileContext['stack']} */

      const stack = [tree];
      /** @type {CompileContext['tokenStack']} */

      const tokenStack = [];
      /** @type {Array<number>} */

      const listStack = [];
      /** @type {Omit<CompileContext, 'sliceSerialize'>} */

      const context = {
        stack,
        tokenStack,
        config,
        enter,
        exit,
        buffer,
        resume,
        setData,
        getData
      };
      let index = -1;

      while (++index < events.length) {
        // We preprocess lists to add `listItem` tokens, and to infer whether
        // items the list itself are spread out.
        if (
          events[index][1].type === 'listOrdered' ||
          events[index][1].type === 'listUnordered'
        ) {
          if (events[index][0] === 'enter') {
            listStack.push(index);
          } else {
            const tail = listStack.pop();
            index = prepareList(events, tail, index);
          }
        }
      }

      index = -1;

      while (++index < events.length) {
        const handler = config[events[index][0]];

        if (own$3.call(handler, events[index][1].type)) {
          handler[events[index][1].type].call(
            Object.assign(
              {
                sliceSerialize: events[index][2].sliceSerialize
              },
              context
            ),
            events[index][1]
          );
        }
      }

      if (tokenStack.length > 0) {
        const tail = tokenStack[tokenStack.length - 1];
        const handler = tail[1] || defaultOnError;
        handler.call(context, undefined, tail[0]);
      } // Figure out `root` position.

      tree.position = {
        start: point(
          events.length > 0
            ? events[0][1].start
            : {
                line: 1,
                column: 1,
                offset: 0
              }
        ),
        end: point(
          events.length > 0
            ? events[events.length - 2][1].end
            : {
                line: 1,
                column: 1,
                offset: 0
              }
        )
      };
      index = -1;

      while (++index < config.transforms.length) {
        tree = config.transforms[index](tree) || tree;
      }

      return tree
    }
    /**
     * @param {Array<Event>} events
     * @param {number} start
     * @param {number} length
     * @returns {number}
     */

    function prepareList(events, start, length) {
      let index = start - 1;
      let containerBalance = -1;
      let listSpread = false;
      /** @type {Token|undefined} */

      let listItem;
      /** @type {number|undefined} */

      let lineIndex;
      /** @type {number|undefined} */

      let firstBlankLineIndex;
      /** @type {boolean|undefined} */

      let atMarker;

      while (++index <= length) {
        const event = events[index];

        if (
          event[1].type === 'listUnordered' ||
          event[1].type === 'listOrdered' ||
          event[1].type === 'blockQuote'
        ) {
          if (event[0] === 'enter') {
            containerBalance++;
          } else {
            containerBalance--;
          }

          atMarker = undefined;
        } else if (event[1].type === 'lineEndingBlank') {
          if (event[0] === 'enter') {
            if (
              listItem &&
              !atMarker &&
              !containerBalance &&
              !firstBlankLineIndex
            ) {
              firstBlankLineIndex = index;
            }

            atMarker = undefined;
          }
        } else if (
          event[1].type === 'linePrefix' ||
          event[1].type === 'listItemValue' ||
          event[1].type === 'listItemMarker' ||
          event[1].type === 'listItemPrefix' ||
          event[1].type === 'listItemPrefixWhitespace'
        ) ; else {
          atMarker = undefined;
        }

        if (
          (!containerBalance &&
            event[0] === 'enter' &&
            event[1].type === 'listItemPrefix') ||
          (containerBalance === -1 &&
            event[0] === 'exit' &&
            (event[1].type === 'listUnordered' ||
              event[1].type === 'listOrdered'))
        ) {
          if (listItem) {
            let tailIndex = index;
            lineIndex = undefined;

            while (tailIndex--) {
              const tailEvent = events[tailIndex];

              if (
                tailEvent[1].type === 'lineEnding' ||
                tailEvent[1].type === 'lineEndingBlank'
              ) {
                if (tailEvent[0] === 'exit') continue

                if (lineIndex) {
                  events[lineIndex][1].type = 'lineEndingBlank';
                  listSpread = true;
                }

                tailEvent[1].type = 'lineEnding';
                lineIndex = tailIndex;
              } else if (
                tailEvent[1].type === 'linePrefix' ||
                tailEvent[1].type === 'blockQuotePrefix' ||
                tailEvent[1].type === 'blockQuotePrefixWhitespace' ||
                tailEvent[1].type === 'blockQuoteMarker' ||
                tailEvent[1].type === 'listItemIndent'
              ) ; else {
                break
              }
            }

            if (
              firstBlankLineIndex &&
              (!lineIndex || firstBlankLineIndex < lineIndex)
            ) {
              // @ts-expect-error Patched.
              listItem._spread = true;
            } // Fix position.

            listItem.end = Object.assign(
              {},
              lineIndex ? events[lineIndex][1].start : event[1].end
            );
            events.splice(lineIndex || index, 0, ['exit', listItem, event[2]]);
            index++;
            length++;
          } // Create a new list item.

          if (event[1].type === 'listItemPrefix') {
            listItem = {
              type: 'listItem',
              // @ts-expect-error Patched
              _spread: false,
              start: Object.assign({}, event[1].start)
            }; // @ts-expect-error: `listItem` is most definitely defined, TS...

            events.splice(index, 0, ['enter', listItem, event[2]]);
            index++;
            length++;
            firstBlankLineIndex = undefined;
            atMarker = true;
          }
        }
      } // @ts-expect-error Patched.

      events[start][1]._spread = listSpread;
      return length
    }
    /**
     * @type {CompileContext['setData']}
     * @param [value]
     */

    function setData(key, value) {
      data[key] = value;
    }
    /**
     * @type {CompileContext['getData']}
     * @template {string} K
     * @param {K} key
     * @returns {CompileData[K]}
     */

    function getData(key) {
      return data[key]
    }
    /**
     * @param {Point} d
     * @returns {Point}
     */

    function point(d) {
      return {
        line: d.line,
        column: d.column,
        offset: d.offset
      }
    }
    /**
     * @param {(token: Token) => Node} create
     * @param {Handle} [and]
     * @returns {Handle}
     */

    function opener(create, and) {
      return open
      /**
       * @this {CompileContext}
       * @param {Token} token
       * @returns {void}
       */

      function open(token) {
        enter.call(this, create(token), token);
        if (and) and.call(this, token);
      }
    }
    /** @type {CompileContext['buffer']} */

    function buffer() {
      this.stack.push({
        type: 'fragment',
        children: []
      });
    }
    /**
     * @type {CompileContext['enter']}
     * @template {Node} N
     * @this {CompileContext}
     * @param {N} node
     * @param {Token} token
     * @param {OnEnterError} [errorHandler]
     * @returns {N}
     */

    function enter(node, token, errorHandler) {
      const parent = this.stack[this.stack.length - 1];
      // @ts-expect-error: Assume `Node` can exist as a child of `parent`.
      parent.children.push(node);
      this.stack.push(node);
      this.tokenStack.push([token, errorHandler]); // @ts-expect-error: `end` will be patched later.

      node.position = {
        start: point(token.start)
      };
      return node
    }
    /**
     * @param {Handle} [and]
     * @returns {Handle}
     */

    function closer(and) {
      return close
      /**
       * @this {CompileContext}
       * @param {Token} token
       * @returns {void}
       */

      function close(token) {
        if (and) and.call(this, token);
        exit.call(this, token);
      }
    }
    /**
     * @type {CompileContext['exit']}
     * @this {CompileContext}
     * @param {Token} token
     * @param {OnExitError} [onExitError]
     * @returns {Node}
     */

    function exit(token, onExitError) {
      const node = this.stack.pop();
      const open = this.tokenStack.pop();

      if (!open) {
        throw new Error(
          'Cannot close `' +
            token.type +
            '` (' +
            stringifyPosition({
              start: token.start,
              end: token.end
            }) +
            '): it’s not open'
        )
      } else if (open[0].type !== token.type) {
        if (onExitError) {
          onExitError.call(this, token, open[0]);
        } else {
          const handler = open[1] || defaultOnError;
          handler.call(this, token, open[0]);
        }
      }

      node.position.end = point(token.end);
      return node
    }
    /**
     * @this {CompileContext}
     * @returns {string}
     */

    function resume() {
      return toString(this.stack.pop())
    } //
    // Handlers.
    //

    /** @type {Handle} */

    function onenterlistordered() {
      setData('expectingFirstListItemValue', true);
    }
    /** @type {Handle} */

    function onenterlistitemvalue(token) {
      if (getData('expectingFirstListItemValue')) {
        const ancestor =
          /** @type {List} */
          this.stack[this.stack.length - 2];
        ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
        setData('expectingFirstListItemValue');
      }
    }
    /** @type {Handle} */

    function onexitcodefencedfenceinfo() {
      const data = this.resume();
      const node =
        /** @type {Code} */
        this.stack[this.stack.length - 1];
      node.lang = data;
    }
    /** @type {Handle} */

    function onexitcodefencedfencemeta() {
      const data = this.resume();
      const node =
        /** @type {Code} */
        this.stack[this.stack.length - 1];
      node.meta = data;
    }
    /** @type {Handle} */

    function onexitcodefencedfence() {
      // Exit if this is the closing fence.
      if (getData('flowCodeInside')) return
      this.buffer();
      setData('flowCodeInside', true);
    }
    /** @type {Handle} */

    function onexitcodefenced() {
      const data = this.resume();
      const node =
        /** @type {Code} */
        this.stack[this.stack.length - 1];
      node.value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '');
      setData('flowCodeInside');
    }
    /** @type {Handle} */

    function onexitcodeindented() {
      const data = this.resume();
      const node =
        /** @type {Code} */
        this.stack[this.stack.length - 1];
      node.value = data.replace(/(\r?\n|\r)$/g, '');
    }
    /** @type {Handle} */

    function onexitdefinitionlabelstring(token) {
      // Discard label, use the source content instead.
      const label = this.resume();
      const node =
        /** @type {Definition} */
        this.stack[this.stack.length - 1];
      node.label = label;
      node.identifier = normalizeIdentifier(
        this.sliceSerialize(token)
      ).toLowerCase();
    }
    /** @type {Handle} */

    function onexitdefinitiontitlestring() {
      const data = this.resume();
      const node =
        /** @type {Definition} */
        this.stack[this.stack.length - 1];
      node.title = data;
    }
    /** @type {Handle} */

    function onexitdefinitiondestinationstring() {
      const data = this.resume();
      const node =
        /** @type {Definition} */
        this.stack[this.stack.length - 1];
      node.url = data;
    }
    /** @type {Handle} */

    function onexitatxheadingsequence(token) {
      const node =
        /** @type {Heading} */
        this.stack[this.stack.length - 1];

      if (!node.depth) {
        const depth = this.sliceSerialize(token).length;
        node.depth = depth;
      }
    }
    /** @type {Handle} */

    function onexitsetextheadingtext() {
      setData('setextHeadingSlurpLineEnding', true);
    }
    /** @type {Handle} */

    function onexitsetextheadinglinesequence(token) {
      const node =
        /** @type {Heading} */
        this.stack[this.stack.length - 1];
      node.depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
    }
    /** @type {Handle} */

    function onexitsetextheading() {
      setData('setextHeadingSlurpLineEnding');
    }
    /** @type {Handle} */

    function onenterdata(token) {
      const parent =
        /** @type {Parent} */
        this.stack[this.stack.length - 1];
      /** @type {Node} */

      let tail = parent.children[parent.children.length - 1];

      if (!tail || tail.type !== 'text') {
        // Add a new text node.
        tail = text(); // @ts-expect-error: we’ll add `end` later.

        tail.position = {
          start: point(token.start)
        }; // @ts-expect-error: Assume `parent` accepts `text`.

        parent.children.push(tail);
      }

      this.stack.push(tail);
    }
    /** @type {Handle} */

    function onexitdata(token) {
      const tail = this.stack.pop();
      tail.value += this.sliceSerialize(token);
      tail.position.end = point(token.end);
    }
    /** @type {Handle} */

    function onexitlineending(token) {
      const context = this.stack[this.stack.length - 1];

      // If we’re at a hard break, include the line ending in there.
      if (getData('atHardBreak')) {
        const tail = context.children[context.children.length - 1];
        tail.position.end = point(token.end);
        setData('atHardBreak');
        return
      }

      if (
        !getData('setextHeadingSlurpLineEnding') &&
        config.canContainEols.includes(context.type)
      ) {
        onenterdata.call(this, token);
        onexitdata.call(this, token);
      }
    }
    /** @type {Handle} */

    function onexithardbreak() {
      setData('atHardBreak', true);
    }
    /** @type {Handle} */

    function onexithtmlflow() {
      const data = this.resume();
      const node =
        /** @type {HTML} */
        this.stack[this.stack.length - 1];
      node.value = data;
    }
    /** @type {Handle} */

    function onexithtmltext() {
      const data = this.resume();
      const node =
        /** @type {HTML} */
        this.stack[this.stack.length - 1];
      node.value = data;
    }
    /** @type {Handle} */

    function onexitcodetext() {
      const data = this.resume();
      const node =
        /** @type {InlineCode} */
        this.stack[this.stack.length - 1];
      node.value = data;
    }
    /** @type {Handle} */

    function onexitlink() {
      const context =
        /** @type {Link & {identifier: string, label: string}} */
        this.stack[this.stack.length - 1]; // To do: clean.

      if (getData('inReference')) {
        context.type += 'Reference'; // @ts-expect-error: mutate.

        context.referenceType = getData('referenceType') || 'shortcut'; // @ts-expect-error: mutate.

        delete context.url;
        delete context.title;
      } else {
        // @ts-expect-error: mutate.
        delete context.identifier; // @ts-expect-error: mutate.

        delete context.label;
      }

      setData('referenceType');
    }
    /** @type {Handle} */

    function onexitimage() {
      const context =
        /** @type {Image & {identifier: string, label: string}} */
        this.stack[this.stack.length - 1]; // To do: clean.

      if (getData('inReference')) {
        context.type += 'Reference'; // @ts-expect-error: mutate.

        context.referenceType = getData('referenceType') || 'shortcut'; // @ts-expect-error: mutate.

        delete context.url;
        delete context.title;
      } else {
        // @ts-expect-error: mutate.
        delete context.identifier; // @ts-expect-error: mutate.

        delete context.label;
      }

      setData('referenceType');
    }
    /** @type {Handle} */

    function onexitlabeltext(token) {
      const ancestor =
        /** @type {(Link|Image) & {identifier: string, label: string}} */
        this.stack[this.stack.length - 2];
      const string = this.sliceSerialize(token);
      ancestor.label = decodeString(string);
      ancestor.identifier = normalizeIdentifier(string).toLowerCase();
    }
    /** @type {Handle} */

    function onexitlabel() {
      const fragment =
        /** @type {Fragment} */
        this.stack[this.stack.length - 1];
      const value = this.resume();
      const node =
        /** @type {(Link|Image) & {identifier: string, label: string}} */
        this.stack[this.stack.length - 1]; // Assume a reference.

      setData('inReference', true);

      if (node.type === 'link') {
        // @ts-expect-error: Assume static phrasing content.
        node.children = fragment.children;
      } else {
        node.alt = value;
      }
    }
    /** @type {Handle} */

    function onexitresourcedestinationstring() {
      const data = this.resume();
      const node =
        /** @type {Link|Image} */
        this.stack[this.stack.length - 1];
      node.url = data;
    }
    /** @type {Handle} */

    function onexitresourcetitlestring() {
      const data = this.resume();
      const node =
        /** @type {Link|Image} */
        this.stack[this.stack.length - 1];
      node.title = data;
    }
    /** @type {Handle} */

    function onexitresource() {
      setData('inReference');
    }
    /** @type {Handle} */

    function onenterreference() {
      setData('referenceType', 'collapsed');
    }
    /** @type {Handle} */

    function onexitreferencestring(token) {
      const label = this.resume();
      const node =
        /** @type {LinkReference|ImageReference} */
        this.stack[this.stack.length - 1];
      node.label = label;
      node.identifier = normalizeIdentifier(
        this.sliceSerialize(token)
      ).toLowerCase();
      setData('referenceType', 'full');
    }
    /** @type {Handle} */

    function onexitcharacterreferencemarker(token) {
      setData('characterReferenceType', token.type);
    }
    /** @type {Handle} */

    function onexitcharacterreferencevalue(token) {
      const data = this.sliceSerialize(token);
      const type = getData('characterReferenceType');
      /** @type {string} */

      let value;

      if (type) {
        value = decodeNumericCharacterReference(
          data,
          type === 'characterReferenceMarkerNumeric' ? 10 : 16
        );
        setData('characterReferenceType');
      } else {
        // @ts-expect-error `decodeNamedCharacterReference` can return false for
        // invalid named character references, but everything we’ve tokenized is
        // valid.
        value = decodeNamedCharacterReference(data);
      }

      const tail = this.stack.pop();
      tail.value += value;
      tail.position.end = point(token.end);
    }
    /** @type {Handle} */

    function onexitautolinkprotocol(token) {
      onexitdata.call(this, token);
      const node =
        /** @type {Link} */
        this.stack[this.stack.length - 1];
      node.url = this.sliceSerialize(token);
    }
    /** @type {Handle} */

    function onexitautolinkemail(token) {
      onexitdata.call(this, token);
      const node =
        /** @type {Link} */
        this.stack[this.stack.length - 1];
      node.url = 'mailto:' + this.sliceSerialize(token);
    } //
    // Creaters.
    //

    /** @returns {Blockquote} */

    function blockQuote() {
      return {
        type: 'blockquote',
        children: []
      }
    }
    /** @returns {Code} */

    function codeFlow() {
      return {
        type: 'code',
        lang: null,
        meta: null,
        value: ''
      }
    }
    /** @returns {InlineCode} */

    function codeText() {
      return {
        type: 'inlineCode',
        value: ''
      }
    }
    /** @returns {Definition} */

    function definition() {
      return {
        type: 'definition',
        identifier: '',
        label: null,
        title: null,
        url: ''
      }
    }
    /** @returns {Emphasis} */

    function emphasis() {
      return {
        type: 'emphasis',
        children: []
      }
    }
    /** @returns {Heading} */

    function heading() {
      // @ts-expect-error `depth` will be set later.
      return {
        type: 'heading',
        depth: undefined,
        children: []
      }
    }
    /** @returns {Break} */

    function hardBreak() {
      return {
        type: 'break'
      }
    }
    /** @returns {HTML} */

    function html() {
      return {
        type: 'html',
        value: ''
      }
    }
    /** @returns {Image} */

    function image() {
      return {
        type: 'image',
        title: null,
        url: '',
        alt: null
      }
    }
    /** @returns {Link} */

    function link() {
      return {
        type: 'link',
        title: null,
        url: '',
        children: []
      }
    }
    /**
     * @param {Token} token
     * @returns {List}
     */

    function list(token) {
      return {
        type: 'list',
        ordered: token.type === 'listOrdered',
        start: null,
        // @ts-expect-error Patched.
        spread: token._spread,
        children: []
      }
    }
    /**
     * @param {Token} token
     * @returns {ListItem}
     */

    function listItem(token) {
      return {
        type: 'listItem',
        // @ts-expect-error Patched.
        spread: token._spread,
        checked: null,
        children: []
      }
    }
    /** @returns {Paragraph} */

    function paragraph() {
      return {
        type: 'paragraph',
        children: []
      }
    }
    /** @returns {Strong} */

    function strong() {
      return {
        type: 'strong',
        children: []
      }
    }
    /** @returns {Text} */

    function text() {
      return {
        type: 'text',
        value: ''
      }
    }
    /** @returns {ThematicBreak} */

    function thematicBreak() {
      return {
        type: 'thematicBreak'
      }
    }
  }
  /**
   * @param {Extension} combined
   * @param {Array<Extension|Array<Extension>>} extensions
   * @returns {Extension}
   */

  function configure(combined, extensions) {
    let index = -1;

    while (++index < extensions.length) {
      const value = extensions[index];

      if (Array.isArray(value)) {
        configure(combined, value);
      } else {
        extension(combined, value);
      }
    }

    return combined
  }
  /**
   * @param {Extension} combined
   * @param {Extension} extension
   * @returns {void}
   */

  function extension(combined, extension) {
    /** @type {string} */
    let key;

    for (key in extension) {
      if (own$3.call(extension, key)) {
        const list = key === 'canContainEols' || key === 'transforms';
        const maybe = own$3.call(combined, key) ? combined[key] : undefined;
        /* c8 ignore next */

        const left = maybe || (combined[key] = list ? [] : {});
        const right = extension[key];

        if (right) {
          if (list) {
            // @ts-expect-error: `left` is an array.
            combined[key] = [...left, ...right];
          } else {
            Object.assign(left, right);
          }
        }
      }
    }
  }
  /** @type {OnEnterError} */

  function defaultOnError(left, right) {
    if (left) {
      throw new Error(
        'Cannot close `' +
          left.type +
          '` (' +
          stringifyPosition({
            start: left.start,
            end: left.end
          }) +
          '): a different token (`' +
          right.type +
          '`, ' +
          stringifyPosition({
            start: right.start,
            end: right.end
          }) +
          ') is open'
      )
    } else {
      throw new Error(
        'Cannot close document, a token (`' +
          right.type +
          '`, ' +
          stringifyPosition({
            start: right.start,
            end: right.end
          }) +
          ') is still open'
      )
    }
  }

  /**
   * @typedef {import('mdast').Root} Root
   * @typedef {import('mdast-util-from-markdown').Options} Options
   */

  /** @type {import('unified').Plugin<[Options?] | void[], string, Root>} */
  function remarkParse(options) {
    /** @type {import('unified').ParserFunction<Root>} */
    const parser = (doc) => {
      // Assume options.
      const settings = /** @type {Options} */ (this.data('settings'));

      return fromMarkdown(
        doc,
        Object.assign({}, settings, options, {
          // Note: these options are not in the readme.
          // The goal is for them to be set by plugins on `data` instead of being
          // passed by users.
          extensions: this.data('micromarkExtensions') || [],
          mdastExtensions: this.data('fromMarkdownExtensions') || []
        })
      )
    };

    Object.assign(this, {Parser: parser});
  }

  /**
   * @typedef {import('micromark-util-types').Effects} Effects
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Code} Code
   */
  /**
   * @param {Effects} effects
   * @param {State} ok
   * @param {State} nok
   * @param {string} attributesType
   * @param {string} attributesMarkerType
   * @param {string} attributeType
   * @param {string} attributeIdType
   * @param {string} attributeClassType
   * @param {string} attributeNameType
   * @param {string} attributeInitializerType
   * @param {string} attributeValueLiteralType
   * @param {string} attributeValueType
   * @param {string} attributeValueMarker
   * @param {string} attributeValueData
   * @param {boolean} [disallowEol=false]
   */
  /* eslint-disable-next-line max-params */
  function factoryAttributes(
    effects,
    ok,
    nok,
    attributesType,
    attributesMarkerType,
    attributeType,
    attributeIdType,
    attributeClassType,
    attributeNameType,
    attributeInitializerType,
    attributeValueLiteralType,
    attributeValueType,
    attributeValueMarker,
    attributeValueData,
    disallowEol
  ) {
    /** @type {string} */
    let type;
    /** @type {Code|undefined} */
    let marker;
    return start

    /** @type {State} */
    function start(code) {
      effects.enter(attributesType);
      effects.enter(attributesMarkerType);
      effects.consume(code);
      effects.exit(attributesMarkerType);
      return between
    }

    /** @type {State} */
    function between(code) {
      if (code === 35) {
        type = attributeIdType;
        return shortcutStart(code)
      }
      if (code === 46) {
        type = attributeClassType;
        return shortcutStart(code)
      }
      if (code === 58 || code === 95 || asciiAlpha(code)) {
        effects.enter(attributeType);
        effects.enter(attributeNameType);
        effects.consume(code);
        return name
      }
      if (disallowEol && markdownSpace(code)) {
        return factorySpace(effects, between, 'whitespace')(code)
      }
      if (!disallowEol && markdownLineEndingOrSpace(code)) {
        return factoryWhitespace(effects, between)(code)
      }
      return end(code)
    }

    /** @type {State} */
    function shortcutStart(code) {
      effects.enter(attributeType);
      effects.enter(type);
      effects.enter(type + 'Marker');
      effects.consume(code);
      effects.exit(type + 'Marker');
      return shortcutStartAfter
    }

    /** @type {State} */
    function shortcutStartAfter(code) {
      if (
        code === null ||
        code === 34 ||
        code === 35 ||
        code === 39 ||
        code === 46 ||
        code === 60 ||
        code === 61 ||
        code === 62 ||
        code === 96 ||
        code === 125 ||
        markdownLineEndingOrSpace(code)
      ) {
        return nok(code)
      }
      effects.enter(type + 'Value');
      effects.consume(code);
      return shortcut
    }

    /** @type {State} */
    function shortcut(code) {
      if (
        code === null ||
        code === 34 ||
        code === 39 ||
        code === 60 ||
        code === 61 ||
        code === 62 ||
        code === 96
      ) {
        return nok(code)
      }
      if (
        code === 35 ||
        code === 46 ||
        code === 125 ||
        markdownLineEndingOrSpace(code)
      ) {
        effects.exit(type + 'Value');
        effects.exit(type);
        effects.exit(attributeType);
        return between(code)
      }
      effects.consume(code);
      return shortcut
    }

    /** @type {State} */
    function name(code) {
      if (
        code === 45 ||
        code === 46 ||
        code === 58 ||
        code === 95 ||
        asciiAlphanumeric(code)
      ) {
        effects.consume(code);
        return name
      }
      effects.exit(attributeNameType);
      if (disallowEol && markdownSpace(code)) {
        return factorySpace(effects, nameAfter, 'whitespace')(code)
      }
      if (!disallowEol && markdownLineEndingOrSpace(code)) {
        return factoryWhitespace(effects, nameAfter)(code)
      }
      return nameAfter(code)
    }

    /** @type {State} */
    function nameAfter(code) {
      if (code === 61) {
        effects.enter(attributeInitializerType);
        effects.consume(code);
        effects.exit(attributeInitializerType);
        return valueBefore
      }

      // Attribute w/o value.
      effects.exit(attributeType);
      return between(code)
    }

    /** @type {State} */
    function valueBefore(code) {
      if (
        code === null ||
        code === 60 ||
        code === 61 ||
        code === 62 ||
        code === 96 ||
        code === 125 ||
        (disallowEol && markdownLineEnding(code))
      ) {
        return nok(code)
      }
      if (code === 34 || code === 39) {
        effects.enter(attributeValueLiteralType);
        effects.enter(attributeValueMarker);
        effects.consume(code);
        effects.exit(attributeValueMarker);
        marker = code;
        return valueQuotedStart
      }
      if (disallowEol && markdownSpace(code)) {
        return factorySpace(effects, valueBefore, 'whitespace')(code)
      }
      if (!disallowEol && markdownLineEndingOrSpace(code)) {
        return factoryWhitespace(effects, valueBefore)(code)
      }
      effects.enter(attributeValueType);
      effects.enter(attributeValueData);
      effects.consume(code);
      marker = undefined;
      return valueUnquoted
    }

    /** @type {State} */
    function valueUnquoted(code) {
      if (
        code === null ||
        code === 34 ||
        code === 39 ||
        code === 60 ||
        code === 61 ||
        code === 62 ||
        code === 96
      ) {
        return nok(code)
      }
      if (code === 125 || markdownLineEndingOrSpace(code)) {
        effects.exit(attributeValueData);
        effects.exit(attributeValueType);
        effects.exit(attributeType);
        return between(code)
      }
      effects.consume(code);
      return valueUnquoted
    }

    /** @type {State} */
    function valueQuotedStart(code) {
      if (code === marker) {
        effects.enter(attributeValueMarker);
        effects.consume(code);
        effects.exit(attributeValueMarker);
        effects.exit(attributeValueLiteralType);
        effects.exit(attributeType);
        return valueQuotedAfter
      }
      effects.enter(attributeValueType);
      return valueQuotedBetween(code)
    }

    /** @type {State} */
    function valueQuotedBetween(code) {
      if (code === marker) {
        effects.exit(attributeValueType);
        return valueQuotedStart(code)
      }
      if (code === null) {
        return nok(code)
      }

      // Note: blank lines can’t exist in content.
      if (markdownLineEnding(code)) {
        return disallowEol
          ? nok(code)
          : factoryWhitespace(effects, valueQuotedBetween)(code)
      }
      effects.enter(attributeValueData);
      effects.consume(code);
      return valueQuoted
    }

    /** @type {State} */
    function valueQuoted(code) {
      if (code === marker || code === null || markdownLineEnding(code)) {
        effects.exit(attributeValueData);
        return valueQuotedBetween(code)
      }
      effects.consume(code);
      return valueQuoted
    }

    /** @type {State} */
    function valueQuotedAfter(code) {
      return code === 125 || markdownLineEndingOrSpace(code)
        ? between(code)
        : end(code)
    }

    /** @type {State} */
    function end(code) {
      if (code === 125) {
        effects.enter(attributesMarkerType);
        effects.consume(code);
        effects.exit(attributesMarkerType);
        effects.exit(attributesType);
        return ok
      }
      return nok(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Effects} Effects
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Token} Token
   */
  // This is a fork of:
  // <https://github.com/micromark/micromark/tree/main/packages/micromark-factory-label>
  // to allow empty labels, balanced brackets (such as for nested directives),
  // text instead of strings, and optionally disallows EOLs.

  /**
   * @param {Effects} effects
   * @param {State} ok
   * @param {State} nok
   * @param {string} type
   * @param {string} markerType
   * @param {string} stringType
   * @param {boolean} [disallowEol=false]
   */
  // eslint-disable-next-line max-params
  function factoryLabel(
    effects,
    ok,
    nok,
    type,
    markerType,
    stringType,
    disallowEol
  ) {
    let size = 0;
    let balance = 0;
    /** @type {Token|undefined} */
    let previous;
    return start

    /** @type {State} */
    function start(code) {
      effects.enter(type);
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      return afterStart
    }

    /** @type {State} */
    function afterStart(code) {
      if (code === 93) {
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        effects.exit(type);
        return ok
      }
      effects.enter(stringType);
      return lineStart(code)
    }

    /** @type {State} */
    function lineStart(code) {
      if (code === 93 && !balance) {
        return atClosingBrace(code)
      }
      const token = effects.enter('chunkText', {
        contentType: 'text',
        previous
      });
      if (previous) previous.next = token;
      previous = token;
      return data(code)
    }

    /** @type {State} */
    function data(code) {
      if (code === null || size > 999) {
        return nok(code)
      }
      if (code === 91 && ++balance > 32) {
        return nok(code)
      }
      if (code === 93 && !balance--) {
        effects.exit('chunkText');
        return atClosingBrace(code)
      }
      if (markdownLineEnding(code)) {
        if (disallowEol) {
          return nok(code)
        }
        effects.consume(code);
        effects.exit('chunkText');
        return lineStart
      }
      effects.consume(code);
      return code === 92 ? dataEscape : data
    }

    /** @type {State} */
    function dataEscape(code) {
      if (code === 91 || code === 92 || code === 93) {
        effects.consume(code);
        size++;
        return data
      }
      return data(code)
    }

    /** @type {State} */
    function atClosingBrace(code) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok
    }
  }

  /**
   * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
   * @typedef {import('micromark-util-types').Effects} Effects
   * @typedef {import('micromark-util-types').State} State
   */
  /**
   * @this {TokenizeContext}
   * @param {Effects} effects
   * @param {State} ok
   * @param {State} nok
   * @param {string} type
   */
  function factoryName(effects, ok, nok, type) {
    const self = this;
    return start

    /** @type {State} */
    function start(code) {
      if (asciiAlpha(code)) {
        effects.enter(type);
        effects.consume(code);
        return name
      }
      return nok(code)
    }

    /** @type {State} */
    function name(code) {
      if (code === 45 || code === 95 || asciiAlphanumeric(code)) {
        effects.consume(code);
        return name
      }
      effects.exit(type);
      return self.previous === 45 || self.previous === 95 ? nok(code) : ok(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Token} Token
   */

  /** @type {Construct} */
  const directiveContainer = {
    tokenize: tokenizeDirectiveContainer,
    concrete: true
  };
  const label$2 = {
    tokenize: tokenizeLabel$2,
    partial: true
  };
  const attributes$3 = {
    tokenize: tokenizeAttributes$2,
    partial: true
  };
  const nonLazyLine$1 = {
    tokenize: tokenizeNonLazyLine$1,
    partial: true
  };

  /** @type {Tokenizer} */
  function tokenizeDirectiveContainer(effects, ok, nok) {
    const self = this;
    const tail = self.events[self.events.length - 1];
    const initialSize =
      tail && tail[1].type === 'linePrefix'
        ? tail[2].sliceSerialize(tail[1], true).length
        : 0;
    let sizeOpen = 0;
    /** @type {Token} */
    let previous;
    return start

    /** @type {State} */
    function start(code) {
      effects.enter('directiveContainer');
      effects.enter('directiveContainerFence');
      effects.enter('directiveContainerSequence');
      return sequenceOpen(code)
    }

    /** @type {State} */
    function sequenceOpen(code) {
      if (code === 58) {
        effects.consume(code);
        sizeOpen++;
        return sequenceOpen
      }
      if (sizeOpen < 3) {
        return nok(code)
      }
      effects.exit('directiveContainerSequence');
      return factoryName.call(
        self,
        effects,
        afterName,
        nok,
        'directiveContainerName'
      )(code)
    }

    /** @type {State} */
    function afterName(code) {
      return code === 91
        ? effects.attempt(label$2, afterLabel, afterLabel)(code)
        : afterLabel(code)
    }

    /** @type {State} */
    function afterLabel(code) {
      return code === 123
        ? effects.attempt(attributes$3, afterAttributes, afterAttributes)(code)
        : afterAttributes(code)
    }

    /** @type {State} */
    function afterAttributes(code) {
      return factorySpace(effects, openAfter, 'whitespace')(code)
    }

    /** @type {State} */
    function openAfter(code) {
      effects.exit('directiveContainerFence');
      if (code === null) {
        return afterOpening(code)
      }
      if (markdownLineEnding(code)) {
        if (self.interrupt) {
          return ok(code)
        }
        return effects.attempt(nonLazyLine$1, contentStart, afterOpening)(code)
      }
      return nok(code)
    }

    /** @type {State} */
    function afterOpening(code) {
      effects.exit('directiveContainer');
      return ok(code)
    }

    /** @type {State} */
    function contentStart(code) {
      if (code === null) {
        effects.exit('directiveContainer');
        return ok(code)
      }
      effects.enter('directiveContainerContent');
      return lineStart(code)
    }

    /** @type {State} */
    function lineStart(code) {
      if (code === null) {
        return after(code)
      }
      return effects.attempt(
        {
          tokenize: tokenizeClosingFence,
          partial: true
        },
        after,
        initialSize
          ? factorySpace(effects, chunkStart, 'linePrefix', initialSize + 1)
          : chunkStart
      )(code)
    }

    /** @type {State} */
    function chunkStart(code) {
      if (code === null) {
        return after(code)
      }
      const token = effects.enter('chunkDocument', {
        contentType: 'document',
        previous
      });
      if (previous) previous.next = token;
      previous = token;
      return contentContinue(code)
    }

    /** @type {State} */
    function contentContinue(code) {
      if (code === null) {
        const t = effects.exit('chunkDocument');
        self.parser.lazy[t.start.line] = false;
        return after(code)
      }
      if (markdownLineEnding(code)) {
        return effects.check(nonLazyLine$1, nonLazyLineAfter, lineAfter)(code)
      }
      effects.consume(code);
      return contentContinue
    }

    /** @type {State} */
    function nonLazyLineAfter(code) {
      effects.consume(code);
      const t = effects.exit('chunkDocument');
      self.parser.lazy[t.start.line] = false;
      return lineStart
    }

    /** @type {State} */
    function lineAfter(code) {
      const t = effects.exit('chunkDocument');
      self.parser.lazy[t.start.line] = false;
      return after(code)
    }

    /** @type {State} */
    function after(code) {
      effects.exit('directiveContainerContent');
      effects.exit('directiveContainer');
      return ok(code)
    }

    /** @type {Tokenizer} */
    function tokenizeClosingFence(effects, ok, nok) {
      let size = 0;
      return factorySpace(effects, closingPrefixAfter, 'linePrefix', 4)

      /** @type {State} */
      function closingPrefixAfter(code) {
        effects.enter('directiveContainerFence');
        effects.enter('directiveContainerSequence');
        return closingSequence(code)
      }

      /** @type {State} */
      function closingSequence(code) {
        if (code === 58) {
          effects.consume(code);
          size++;
          return closingSequence
        }
        if (size < sizeOpen) return nok(code)
        effects.exit('directiveContainerSequence');
        return factorySpace(effects, closingSequenceEnd, 'whitespace')(code)
      }

      /** @type {State} */
      function closingSequenceEnd(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit('directiveContainerFence');
          return ok(code)
        }
        return nok(code)
      }
    }
  }

  /** @type {Tokenizer} */
  function tokenizeLabel$2(effects, ok, nok) {
    // Always a `[`
    return factoryLabel(
      effects,
      ok,
      nok,
      'directiveContainerLabel',
      'directiveContainerLabelMarker',
      'directiveContainerLabelString',
      true
    )
  }

  /** @type {Tokenizer} */
  function tokenizeAttributes$2(effects, ok, nok) {
    // Always a `{`
    return factoryAttributes(
      effects,
      ok,
      nok,
      'directiveContainerAttributes',
      'directiveContainerAttributesMarker',
      'directiveContainerAttribute',
      'directiveContainerAttributeId',
      'directiveContainerAttributeClass',
      'directiveContainerAttributeName',
      'directiveContainerAttributeInitializerMarker',
      'directiveContainerAttributeValueLiteral',
      'directiveContainerAttributeValue',
      'directiveContainerAttributeValueMarker',
      'directiveContainerAttributeValueData',
      true
    )
  }

  /** @type {Tokenizer} */
  function tokenizeNonLazyLine$1(effects, ok, nok) {
    const self = this;
    return start

    /** @type {State} */
    function start(code) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return lineStart
    }

    /** @type {State} */
    function lineStart(code) {
      return self.parser.lazy[self.now().line] ? nok(code) : ok(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').State} State
   */

  /** @type {Construct} */
  const directiveLeaf = {
    tokenize: tokenizeDirectiveLeaf
  };
  const label$1 = {
    tokenize: tokenizeLabel$1,
    partial: true
  };
  const attributes$2 = {
    tokenize: tokenizeAttributes$1,
    partial: true
  };

  /** @type {Tokenizer} */
  function tokenizeDirectiveLeaf(effects, ok, nok) {
    const self = this;
    return start

    /** @type {State} */
    function start(code) {
      effects.enter('directiveLeaf');
      effects.enter('directiveLeafSequence');
      effects.consume(code);
      return inStart
    }

    /** @type {State} */
    function inStart(code) {
      if (code === 58) {
        effects.consume(code);
        effects.exit('directiveLeafSequence');
        return factoryName.call(
          self,
          effects,
          afterName,
          nok,
          'directiveLeafName'
        )
      }
      return nok(code)
    }

    /** @type {State} */
    function afterName(code) {
      return code === 91
        ? effects.attempt(label$1, afterLabel, afterLabel)(code)
        : afterLabel(code)
    }

    /** @type {State} */
    function afterLabel(code) {
      return code === 123
        ? effects.attempt(attributes$2, afterAttributes, afterAttributes)(code)
        : afterAttributes(code)
    }

    /** @type {State} */
    function afterAttributes(code) {
      return factorySpace(effects, end, 'whitespace')(code)
    }

    /** @type {State} */
    function end(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit('directiveLeaf');
        return ok(code)
      }
      return nok(code)
    }
  }

  /** @type {Tokenizer} */
  function tokenizeLabel$1(effects, ok, nok) {
    // Always a `[`
    return factoryLabel(
      effects,
      ok,
      nok,
      'directiveLeafLabel',
      'directiveLeafLabelMarker',
      'directiveLeafLabelString',
      true
    )
  }

  /** @type {Tokenizer} */
  function tokenizeAttributes$1(effects, ok, nok) {
    // Always a `{`
    return factoryAttributes(
      effects,
      ok,
      nok,
      'directiveLeafAttributes',
      'directiveLeafAttributesMarker',
      'directiveLeafAttribute',
      'directiveLeafAttributeId',
      'directiveLeafAttributeClass',
      'directiveLeafAttributeName',
      'directiveLeafAttributeInitializerMarker',
      'directiveLeafAttributeValueLiteral',
      'directiveLeafAttributeValue',
      'directiveLeafAttributeValueMarker',
      'directiveLeafAttributeValueData',
      true
    )
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').Previous} Previous
   * @typedef {import('micromark-util-types').State} State
   */

  /** @type {Construct} */
  const directiveText = {
    tokenize: tokenizeDirectiveText,
    previous: previous$2
  };
  const label = {
    tokenize: tokenizeLabel,
    partial: true
  };
  const attributes$1 = {
    tokenize: tokenizeAttributes,
    partial: true
  };

  /** @type {Previous} */
  function previous$2(code) {
    // If there is a previous code, there will always be a tail.
    return (
      code !== 58 ||
      this.events[this.events.length - 1][1].type === 'characterEscape'
    )
  }

  /** @type {Tokenizer} */
  function tokenizeDirectiveText(effects, ok, nok) {
    const self = this;
    return start

    /** @type {State} */
    function start(code) {
      effects.enter('directiveText');
      effects.enter('directiveTextMarker');
      effects.consume(code);
      effects.exit('directiveTextMarker');
      return factoryName.call(self, effects, afterName, nok, 'directiveTextName')
    }

    /** @type {State} */
    function afterName(code) {
      return code === 58
        ? nok(code)
        : code === 91
        ? effects.attempt(label, afterLabel, afterLabel)(code)
        : afterLabel(code)
    }

    /** @type {State} */
    function afterLabel(code) {
      return code === 123
        ? effects.attempt(attributes$1, afterAttributes, afterAttributes)(code)
        : afterAttributes(code)
    }

    /** @type {State} */
    function afterAttributes(code) {
      effects.exit('directiveText');
      return ok(code)
    }
  }

  /** @type {Tokenizer} */
  function tokenizeLabel(effects, ok, nok) {
    // Always a `[`
    return factoryLabel(
      effects,
      ok,
      nok,
      'directiveTextLabel',
      'directiveTextLabelMarker',
      'directiveTextLabelString'
    )
  }

  /** @type {Tokenizer} */
  function tokenizeAttributes(effects, ok, nok) {
    // Always a `{`
    return factoryAttributes(
      effects,
      ok,
      nok,
      'directiveTextAttributes',
      'directiveTextAttributesMarker',
      'directiveTextAttribute',
      'directiveTextAttributeId',
      'directiveTextAttributeClass',
      'directiveTextAttributeName',
      'directiveTextAttributeInitializerMarker',
      'directiveTextAttributeValueLiteral',
      'directiveTextAttributeValue',
      'directiveTextAttributeValueMarker',
      'directiveTextAttributeValueData'
    )
  }

  /**
   * @typedef {import('micromark-util-types').Extension} Extension
   */

  /**
   * @returns {Extension}
   */
  function directive() {
    return {
      text: {
        [58]: directiveText
      },
      flow: {
        [58]: [directiveContainer, directiveLeaf]
      }
    }
  }

  /**
   * List of legacy HTML named character references that don’t need a trailing semicolon.
   *
   * @type {Array<string>}
   */
  const characterEntitiesLegacy = [
    'AElig',
    'AMP',
    'Aacute',
    'Acirc',
    'Agrave',
    'Aring',
    'Atilde',
    'Auml',
    'COPY',
    'Ccedil',
    'ETH',
    'Eacute',
    'Ecirc',
    'Egrave',
    'Euml',
    'GT',
    'Iacute',
    'Icirc',
    'Igrave',
    'Iuml',
    'LT',
    'Ntilde',
    'Oacute',
    'Ocirc',
    'Ograve',
    'Oslash',
    'Otilde',
    'Ouml',
    'QUOT',
    'REG',
    'THORN',
    'Uacute',
    'Ucirc',
    'Ugrave',
    'Uuml',
    'Yacute',
    'aacute',
    'acirc',
    'acute',
    'aelig',
    'agrave',
    'amp',
    'aring',
    'atilde',
    'auml',
    'brvbar',
    'ccedil',
    'cedil',
    'cent',
    'copy',
    'curren',
    'deg',
    'divide',
    'eacute',
    'ecirc',
    'egrave',
    'eth',
    'euml',
    'frac12',
    'frac14',
    'frac34',
    'gt',
    'iacute',
    'icirc',
    'iexcl',
    'igrave',
    'iquest',
    'iuml',
    'laquo',
    'lt',
    'macr',
    'micro',
    'middot',
    'nbsp',
    'not',
    'ntilde',
    'oacute',
    'ocirc',
    'ograve',
    'ordf',
    'ordm',
    'oslash',
    'otilde',
    'ouml',
    'para',
    'plusmn',
    'pound',
    'quot',
    'raquo',
    'reg',
    'sect',
    'shy',
    'sup1',
    'sup2',
    'sup3',
    'szlig',
    'thorn',
    'times',
    'uacute',
    'ucirc',
    'ugrave',
    'uml',
    'uuml',
    'yacute',
    'yen',
    'yuml'
  ];

  /**
   * Map of invalid numeric character references to their replacements, according to HTML.
   *
   * @type {Record<number, string>}
   */
  const characterReferenceInvalid = {
    0: '�',
    128: '€',
    130: '‚',
    131: 'ƒ',
    132: '„',
    133: '…',
    134: '†',
    135: '‡',
    136: 'ˆ',
    137: '‰',
    138: 'Š',
    139: '‹',
    140: 'Œ',
    142: 'Ž',
    145: '‘',
    146: '’',
    147: '“',
    148: '”',
    149: '•',
    150: '–',
    151: '—',
    152: '˜',
    153: '™',
    154: 'š',
    155: '›',
    156: 'œ',
    158: 'ž',
    159: 'Ÿ'
  };

  /**
   * Check if the given character code, or the character code at the first
   * character, is decimal.
   *
   * @param {string|number} character
   * @returns {boolean} Whether `character` is a decimal
   */
  function isDecimal(character) {
    const code =
      typeof character === 'string' ? character.charCodeAt(0) : character;

    return code >= 48 && code <= 57 /* 0-9 */
  }

  /**
   * Check if the given character code, or the character code at the first
   * character, is hexadecimal.
   *
   * @param {string|number} character
   * @returns {boolean} Whether `character` is hexadecimal
   */
  function isHexadecimal(character) {
    const code =
      typeof character === 'string' ? character.charCodeAt(0) : character;

    return (
      (code >= 97 /* a */ && code <= 102) /* z */ ||
      (code >= 65 /* A */ && code <= 70) /* Z */ ||
      (code >= 48 /* A */ && code <= 57) /* Z */
    )
  }

  /**
   * Check if the given character code, or the character code at the first
   * character, is alphabetical.
   *
   * @param {string|number} character
   * @returns {boolean} Whether `character` is alphabetical.
   */
  function isAlphabetical(character) {
    const code =
      typeof character === 'string' ? character.charCodeAt(0) : character;

    return (
      (code >= 97 && code <= 122) /* a-z */ ||
      (code >= 65 && code <= 90) /* A-Z */
    )
  }

  /**
   * Check if the given character code, or the character code at the first
   * character, is alphanumerical.
   *
   * @param {string|number} character
   * @returns {boolean} Whether `character` is alphanumerical.
   */
  function isAlphanumerical(character) {
    return isAlphabetical(character) || isDecimal(character)
  }

  /**
   * @typedef {import('unist').Point} Point
   * @typedef {import('unist').Position} Position
   */

  const fromCharCode = String.fromCharCode;

  // Warning messages.
  const messages = [
    '',
    /* 1: Non terminated (named) */
    'Named character references must be terminated by a semicolon',
    /* 2: Non terminated (numeric) */
    'Numeric character references must be terminated by a semicolon',
    /* 3: Empty (named) */
    'Named character references cannot be empty',
    /* 4: Empty (numeric) */
    'Numeric character references cannot be empty',
    /* 5: Unknown (named) */
    'Named character references must be known',
    /* 6: Disallowed (numeric) */
    'Numeric character references cannot be disallowed',
    /* 7: Prohibited (numeric) */
    'Numeric character references cannot be outside the permissible Unicode range'
  ];

  /**
   * Parse HTML character references.
   *
   * @param {string} value
   * @param {import('../index.js').Options} [options={}]
   */
  function parseEntities(value, options = {}) {
    const additional =
      typeof options.additional === 'string'
        ? options.additional.charCodeAt(0)
        : options.additional;
    /** @type {string[]} */
    const result = [];
    let index = 0;
    let lines = -1;
    let queue = '';
    /** @type {Point|undefined} */
    let point;
    /** @type {number[]|undefined} */
    let indent;

    if (options.position) {
      if ('start' in options.position || 'indent' in options.position) {
        indent = options.position.indent;
        point = options.position.start;
      } else {
        point = options.position;
      }
    }

    let line = (point ? point.line : 0) || 1;
    let column = (point ? point.column : 0) || 1;

    // Cache the current point.
    let previous = now();
    /** @type {number|undefined} */
    let character;

    // Ensure the algorithm walks over the first character (inclusive).
    index--;

    while (++index <= value.length) {
      // If the previous character was a newline.
      if (character === 10 /* `\n` */) {
        column = (indent ? indent[lines] : 0) || 1;
      }

      character = value.charCodeAt(index);

      if (character === 38 /* `&` */) {
        const following = value.charCodeAt(index + 1);

        // The behavior depends on the identity of the next character.
        if (
          following === 9 /* `\t` */ ||
          following === 10 /* `\n` */ ||
          following === 12 /* `\f` */ ||
          following === 32 /* ` ` */ ||
          following === 38 /* `&` */ ||
          following === 60 /* `<` */ ||
          Number.isNaN(following) ||
          (additional && following === additional)
        ) {
          // Not a character reference.
          // No characters are consumed, and nothing is returned.
          // This is not an error, either.
          queue += fromCharCode(character);
          column++;
          continue
        }

        const start = index + 1;
        let begin = start;
        let end = start;
        /** @type {string} */
        let type;

        if (following === 35 /* `#` */) {
          // Numerical reference.
          end = ++begin;

          // The behavior further depends on the next character.
          const following = value.charCodeAt(end);

          if (following === 88 /* `X` */ || following === 120 /* `x` */) {
            // ASCII hexadecimal digits.
            type = 'hexadecimal';
            end = ++begin;
          } else {
            // ASCII decimal digits.
            type = 'decimal';
          }
        } else {
          // Named reference.
          type = 'named';
        }

        let characterReferenceCharacters = '';
        let characterReference = '';
        let characters = '';
        // Each type of character reference accepts different characters.
        // This test is used to detect whether a reference has ended (as the semicolon
        // is not strictly needed).
        const test =
          type === 'named'
            ? isAlphanumerical
            : type === 'decimal'
            ? isDecimal
            : isHexadecimal;

        end--;

        while (++end <= value.length) {
          const following = value.charCodeAt(end);

          if (!test(following)) {
            break
          }

          characters += fromCharCode(following);

          // Check if we can match a legacy named reference.
          // If so, we cache that as the last viable named reference.
          // This ensures we do not need to walk backwards later.
          if (type === 'named' && characterEntitiesLegacy.includes(characters)) {
            characterReferenceCharacters = characters;
            // @ts-expect-error: always able to decode.
            characterReference = decodeNamedCharacterReference(characters);
          }
        }

        let terminated = value.charCodeAt(end) === 59; /* `;` */

        if (terminated) {
          end++;

          const namedReference =
            type === 'named' ? decodeNamedCharacterReference(characters) : false;

          if (namedReference) {
            characterReferenceCharacters = characters;
            characterReference = namedReference;
          }
        }

        let diff = 1 + end - start;
        let reference = '';

        if (!terminated && options.nonTerminated === false) ; else if (!characters) {
          // An empty (possible) reference is valid, unless it’s numeric (thus an
          // ampersand followed by an octothorp).
          if (type !== 'named') {
            warning(4 /* Empty (numeric) */, diff);
          }
        } else if (type === 'named') {
          // An ampersand followed by anything unknown, and not terminated, is
          // invalid.
          if (terminated && !characterReference) {
            warning(5 /* Unknown (named) */, 1);
          } else {
            // If there’s something after an named reference which is not known,
            // cap the reference.
            if (characterReferenceCharacters !== characters) {
              end = begin + characterReferenceCharacters.length;
              diff = 1 + end - begin;
              terminated = false;
            }

            // If the reference is not terminated, warn.
            if (!terminated) {
              const reason = characterReferenceCharacters
                ? 1 /* Non terminated (named) */
                : 3; /* Empty (named) */

              if (options.attribute) {
                const following = value.charCodeAt(end);

                if (following === 61 /* `=` */) {
                  warning(reason, diff);
                  characterReference = '';
                } else if (isAlphanumerical(following)) {
                  characterReference = '';
                } else {
                  warning(reason, diff);
                }
              } else {
                warning(reason, diff);
              }
            }
          }

          reference = characterReference;
        } else {
          if (!terminated) {
            // All nonterminated numeric references are not rendered, and emit a
            // warning.
            warning(2 /* Non terminated (numeric) */, diff);
          }

          // When terminated and numerical, parse as either hexadecimal or
          // decimal.
          let referenceCode = Number.parseInt(
            characters,
            type === 'hexadecimal' ? 16 : 10
          );

          // Emit a warning when the parsed number is prohibited, and replace with
          // replacement character.
          if (prohibited(referenceCode)) {
            warning(7 /* Prohibited (numeric) */, diff);
            reference = fromCharCode(65533 /* `�` */);
          } else if (referenceCode in characterReferenceInvalid) {
            // Emit a warning when the parsed number is disallowed, and replace by
            // an alternative.
            warning(6 /* Disallowed (numeric) */, diff);
            reference = characterReferenceInvalid[referenceCode];
          } else {
            // Parse the number.
            let output = '';

            // Emit a warning when the parsed number should not be used.
            if (disallowed(referenceCode)) {
              warning(6 /* Disallowed (numeric) */, diff);
            }

            // Serialize the number.
            if (referenceCode > 0xffff) {
              referenceCode -= 0x10000;
              output += fromCharCode((referenceCode >>> (10 & 0x3ff)) | 0xd800);
              referenceCode = 0xdc00 | (referenceCode & 0x3ff);
            }

            reference = output + fromCharCode(referenceCode);
          }
        }

        // Found it!
        // First eat the queued characters as normal text, then eat a reference.
        if (reference) {
          flush();

          previous = now();
          index = end - 1;
          column += end - start + 1;
          result.push(reference);
          const next = now();
          next.offset++;

          if (options.reference) {
            options.reference.call(
              options.referenceContext,
              reference,
              {start: previous, end: next},
              value.slice(start - 1, end)
            );
          }

          previous = next;
        } else {
          // If we could not find a reference, queue the checked characters (as
          // normal characters), and move the pointer to their end.
          // This is possible because we can be certain neither newlines nor
          // ampersands are included.
          characters = value.slice(start - 1, end);
          queue += characters;
          column += characters.length;
          index = end - 1;
        }
      } else {
        // Handle anything other than an ampersand, including newlines and EOF.
        if (character === 10 /* `\n` */) {
          line++;
          lines++;
          column = 0;
        }

        if (Number.isNaN(character)) {
          flush();
        } else {
          queue += fromCharCode(character);
          column++;
        }
      }
    }

    // Return the reduced nodes.
    return result.join('')

    // Get current position.
    function now() {
      return {
        line,
        column,
        offset: index + ((point ? point.offset : 0) || 0)
      }
    }

    /**
     * Handle the warning.
     *
     * @param {1|2|3|4|5|6|7} code
     * @param {number} offset
     */
    function warning(code, offset) {
      /** @type {ReturnType<now>} */
      let position;

      if (options.warning) {
        position = now();
        position.column += offset;
        position.offset += offset;

        options.warning.call(
          options.warningContext,
          messages[code],
          position,
          code
        );
      }
    }

    /**
     * Flush `queue` (normal text).
     * Macro invoked before each reference and at the end of `value`.
     * Does nothing when `queue` is empty.
     */
    function flush() {
      if (queue) {
        result.push(queue);

        if (options.text) {
          options.text.call(options.textContext, queue, {
            start: previous,
            end: now()
          });
        }

        queue = '';
      }
    }
  }

  /**
   * Check if `character` is outside the permissible unicode range.
   *
   * @param {number} code
   * @returns {boolean}
   */
  function prohibited(code) {
    return (code >= 0xd800 && code <= 0xdfff) || code > 0x10ffff
  }

  /**
   * Check if `character` is disallowed.
   *
   * @param {number} code
   * @returns {boolean}
   */
  function disallowed(code) {
    return (
      (code >= 0x0001 && code <= 0x0008) ||
      code === 0x000b ||
      (code >= 0x000d && code <= 0x001f) ||
      (code >= 0x007f && code <= 0x009f) ||
      (code >= 0xfdd0 && code <= 0xfdef) ||
      (code & 0xffff) === 0xffff ||
      (code & 0xffff) === 0xfffe
    )
  }

  /**
   * @typedef CoreOptions
   * @property {Array<string>} [subset=[]]
   *   Whether to only escape the given subset of characters.
   * @property {boolean} [escapeOnly=false]
   *   Whether to only escape possibly dangerous characters.
   *   Those characters are `"`, `&`, `'`, `<`, `>`, and `` ` ``.
   *
   * @typedef FormatOptions
   * @property {(code: number, next: number, options: CoreWithFormatOptions) => string} format
   *   Format strategy.
   *
   * @typedef {CoreOptions & FormatOptions & import('./util/format-smart.js').FormatSmartOptions} CoreWithFormatOptions
   */

  /**
   * Encode certain characters in `value`.
   *
   * @param {string} value
   * @param {CoreWithFormatOptions} options
   * @returns {string}
   */
  function core(value, options) {
    value = value.replace(
      options.subset ? charactersToExpression(options.subset) : /["&'<>`]/g,
      basic
    );

    if (options.subset || options.escapeOnly) {
      return value
    }

    return (
      value
        // Surrogate pairs.
        .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, surrogate)
        // BMP control characters (C0 except for LF, CR, SP; DEL; and some more
        // non-ASCII ones).
        .replace(
          // eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
          /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
          basic
        )
    )

    /**
     * @param {string} pair
     * @param {number} index
     * @param {string} all
     */
    function surrogate(pair, index, all) {
      return options.format(
        (pair.charCodeAt(0) - 0xd800) * 0x400 +
          pair.charCodeAt(1) -
          0xdc00 +
          0x10000,
        all.charCodeAt(index + 2),
        options
      )
    }

    /**
     * @param {string} character
     * @param {number} index
     * @param {string} all
     */
    function basic(character, index, all) {
      return options.format(
        character.charCodeAt(0),
        all.charCodeAt(index + 1),
        options
      )
    }
  }

  /**
   * @param {Array<string>} subset
   * @returns {RegExp}
   */
  function charactersToExpression(subset) {
    /** @type {Array<string>} */
    const groups = [];
    let index = -1;

    while (++index < subset.length) {
      groups.push(subset[index].replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'));
    }

    return new RegExp('(?:' + groups.join('|') + ')', 'g')
  }

  /**
   * The smallest way to encode a character.
   *
   * @param {number} code
   * @returns {string}
   */
  function formatBasic(code) {
    return '&#x' + code.toString(16).toUpperCase() + ';'
  }

  /**
   * @typedef {import('./core.js').CoreOptions & import('./util/format-smart.js').FormatSmartOptions} Options
   * @typedef {import('./core.js').CoreOptions} LightOptions
   */

  /**
   * Encode special characters in `value` as hexadecimals.
   *
   * @param {string} value
   *   Value to encode.
   * @param {LightOptions} [options]
   *   Configuration.
   * @returns {string}
   *   Encoded value.
   */
  function stringifyEntitiesLight(value, options) {
    return core(value, Object.assign({format: formatBasic}, options))
  }

  /**
   * @typedef {import('unist').Node} Node
   * @typedef {import('unist').Parent} Parent
   *
   * @typedef {string} Type
   * @typedef {Object<string, unknown>} Props
   *
   * @typedef {null|undefined|Type|Props|TestFunctionAnything|Array.<Type|Props|TestFunctionAnything>} Test
   */

  const convert =
    /**
     * @type {(
     *   (<T extends Node>(test: T['type']|Partial<T>|TestFunctionPredicate<T>) => AssertPredicate<T>) &
     *   ((test?: Test) => AssertAnything)
     * )}
     */
    (
      /**
       * Generate an assertion from a check.
       * @param {Test} [test]
       * When nullish, checks if `node` is a `Node`.
       * When `string`, works like passing `function (node) {return node.type === test}`.
       * When `function` checks if function passed the node is true.
       * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
       * When `array`, checks any one of the subtests pass.
       * @returns {AssertAnything}
       */
      function (test) {
        if (test === undefined || test === null) {
          return ok
        }

        if (typeof test === 'string') {
          return typeFactory(test)
        }

        if (typeof test === 'object') {
          return Array.isArray(test) ? anyFactory(test) : propsFactory(test)
        }

        if (typeof test === 'function') {
          return castFactory(test)
        }

        throw new Error('Expected function, string, or object as test')
      }
    );
  /**
   * @param {Array.<Type|Props|TestFunctionAnything>} tests
   * @returns {AssertAnything}
   */
  function anyFactory(tests) {
    /** @type {Array.<AssertAnything>} */
    const checks = [];
    let index = -1;

    while (++index < tests.length) {
      checks[index] = convert(tests[index]);
    }

    return castFactory(any)

    /**
     * @this {unknown}
     * @param {unknown[]} parameters
     * @returns {boolean}
     */
    function any(...parameters) {
      let index = -1;

      while (++index < checks.length) {
        if (checks[index].call(this, ...parameters)) return true
      }

      return false
    }
  }

  /**
   * Utility to assert each property in `test` is represented in `node`, and each
   * values are strictly equal.
   *
   * @param {Props} check
   * @returns {AssertAnything}
   */
  function propsFactory(check) {
    return castFactory(all)

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    function all(node) {
      /** @type {string} */
      let key;

      for (key in check) {
        // @ts-expect-error: hush, it sure works as an index.
        if (node[key] !== check[key]) return false
      }

      return true
    }
  }

  /**
   * Utility to convert a string into a function which checks a given node’s type
   * for said string.
   *
   * @param {Type} check
   * @returns {AssertAnything}
   */
  function typeFactory(check) {
    return castFactory(type)

    /**
     * @param {Node} node
     */
    function type(node) {
      return node && node.type === check
    }
  }

  /**
   * Utility to convert a string into a function which checks a given node’s type
   * for said string.
   * @param {TestFunctionAnything} check
   * @returns {AssertAnything}
   */
  function castFactory(check) {
    return assertion

    /**
     * @this {unknown}
     * @param {Array.<unknown>} parameters
     * @returns {boolean}
     */
    function assertion(...parameters) {
      // @ts-expect-error: spreading is fine.
      return Boolean(check.call(this, ...parameters))
    }
  }

  // Utility to return true.
  function ok() {
    return true
  }

  /**
   * @param {string} d
   * @returns {string}
   */
  function color(d) {
    return d
  }

  /**
   * @typedef {import('unist').Node} Node
   * @typedef {import('unist').Parent} Parent
   * @typedef {import('unist-util-is').Test} Test
   * @typedef {import('./complex-types.js').Action} Action
   * @typedef {import('./complex-types.js').Index} Index
   * @typedef {import('./complex-types.js').ActionTuple} ActionTuple
   * @typedef {import('./complex-types.js').VisitorResult} VisitorResult
   * @typedef {import('./complex-types.js').Visitor} Visitor
   */

  /**
   * Continue traversing as normal
   */
  const CONTINUE = true;
  /**
   * Do not traverse this node’s children
   */
  const SKIP$1 = 'skip';
  /**
   * Stop traversing immediately
   */
  const EXIT = false;

  /**
   * Visit children of tree which pass test.
   *
   * @param tree
   *   Tree to walk
   * @param [test]
   *   `unist-util-is`-compatible test
   * @param visitor
   *   Function called for nodes that pass `test`.
   * @param [reverse=false]
   *   Traverse in reverse preorder (NRL) instead of preorder (NLR) (default).
   */
  const visitParents =
    /**
     * @type {(
     *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: import('./complex-types.js').BuildVisitor<Tree, Check>, reverse?: boolean) => void) &
     *   (<Tree extends Node>(tree: Tree, visitor: import('./complex-types.js').BuildVisitor<Tree>, reverse?: boolean) => void)
     * )}
     */
    (
      /**
       * @param {Node} tree
       * @param {Test} test
       * @param {import('./complex-types.js').Visitor<Node>} visitor
       * @param {boolean} [reverse=false]
       */
      function (tree, test, visitor, reverse) {
        if (typeof test === 'function' && typeof visitor !== 'function') {
          reverse = visitor;
          // @ts-expect-error no visitor given, so `visitor` is test.
          visitor = test;
          test = null;
        }

        const is = convert(test);
        const step = reverse ? -1 : 1;

        factory(tree, null, [])();

        /**
         * @param {Node} node
         * @param {number?} index
         * @param {Array<Parent>} parents
         */
        function factory(node, index, parents) {
          /** @type {Record<string, unknown>} */
          // @ts-expect-error: hush
          const value = typeof node === 'object' && node !== null ? node : {};
          /** @type {string|undefined} */
          let name;

          if (typeof value.type === 'string') {
            name =
              typeof value.tagName === 'string'
                ? value.tagName
                : typeof value.name === 'string'
                ? value.name
                : undefined;

            Object.defineProperty(visit, 'name', {
              value:
                'node (' +
                color(value.type + (name ? '<' + name + '>' : '')) +
                ')'
            });
          }

          return visit

          function visit() {
            /** @type {ActionTuple} */
            let result = [];
            /** @type {ActionTuple} */
            let subresult;
            /** @type {number} */
            let offset;
            /** @type {Array<Parent>} */
            let grandparents;

            if (!test || is(node, index, parents[parents.length - 1] || null)) {
              result = toResult(visitor(node, parents));

              if (result[0] === EXIT) {
                return result
              }
            }

            // @ts-expect-error looks like a parent.
            if (node.children && result[0] !== SKIP$1) {
              // @ts-expect-error looks like a parent.
              offset = (reverse ? node.children.length : -1) + step;
              // @ts-expect-error looks like a parent.
              grandparents = parents.concat(node);

              // @ts-expect-error looks like a parent.
              while (offset > -1 && offset < node.children.length) {
                // @ts-expect-error looks like a parent.
                subresult = factory(node.children[offset], offset, grandparents)();

                if (subresult[0] === EXIT) {
                  return subresult
                }

                offset =
                  typeof subresult[1] === 'number' ? subresult[1] : offset + step;
              }
            }

            return result
          }
        }
      }
    );

  /**
   * @param {VisitorResult} value
   * @returns {ActionTuple}
   */
  function toResult(value) {
    if (Array.isArray(value)) {
      return value
    }

    if (typeof value === 'number') {
      return [CONTINUE, value]
    }

    return [value]
  }

  /**
   * @typedef {import('unist').Point} Point
   * @typedef {import('../types.js').TrackFields} TrackFields
   */

  /**
   * Functions to track output positions.
   * This info isn’t used yet but suchs functionality allows line wrapping,
   * and theoretically source maps (though, is there practical use in that?).
   *
   * @param {TrackFields} options_
   */
  function track(options_) {
    // Defaults are used to prevent crashes when older utilities somehow activate
    // this code.
    /* c8 ignore next 5 */
    const options = options_ || {};
    const now = options.now || {};
    let lineShift = options.lineShift || 0;
    let line = now.line || 1;
    let column = now.column || 1;

    return {move, current, shift}

    /**
     * Get the current tracked info.
     *
     * @returns {{now: Point, lineShift: number}}
     */
    function current() {
      return {now: {line, column}, lineShift}
    }

    /**
     * Define an increased line shift (the typical indent for lines).
     *
     * @param {number} value
     */
    function shift(value) {
      lineShift += value;
    }

    /**
     * Move past a string.
     *
     * @param {string} value
     * @returns {string}
     */
    function move(value = '') {
      const chunks = value.split(/\r?\n|\r/g);
      const tail = chunks[chunks.length - 1];
      line += chunks.length - 1;
      column =
        chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift;
      return value
    }
  }

  /**
   * @typedef {import('../types.js').Node} Node
   * @typedef {import('../types.js').Parent} Parent
   * @typedef {import('../types.js').Join} Join
   * @typedef {import('../types.js').Context} Context
   * @typedef {import('../types.js').TrackFields} TrackFields
   */

  /**
   * @param {Parent} parent
   * @param {Context} context
   * @param {TrackFields} safeOptions
   * @returns {string}
   */
  function containerFlow(parent, context, safeOptions) {
    const indexStack = context.indexStack;
    const children = parent.children || [];
    const tracker = track(safeOptions);
    /** @type {Array<string>} */
    const results = [];
    let index = -1;

    indexStack.push(-1);

    while (++index < children.length) {
      const child = children[index];

      indexStack[indexStack.length - 1] = index;

      results.push(
        tracker.move(
          context.handle(child, parent, context, {
            before: '\n',
            after: '\n',
            ...tracker.current()
          })
        )
      );

      if (child.type !== 'list') {
        context.bulletLastUsed = undefined;
      }

      if (index < children.length - 1) {
        results.push(tracker.move(between(child, children[index + 1])));
      }
    }

    indexStack.pop();

    return results.join('')

    /**
     * @param {Node} left
     * @param {Node} right
     * @returns {string}
     */
    function between(left, right) {
      let index = context.join.length;

      while (index--) {
        const result = context.join[index](left, right, parent, context);

        if (result === true || result === 1) {
          break
        }

        if (typeof result === 'number') {
          return '\n'.repeat(1 + result)
        }

        if (result === false) {
          return '\n\n<!---->\n\n'
        }
      }

      return '\n\n'
    }
  }

  /**
   * @typedef {import('../types.js').Node} Node
   * @typedef {import('../types.js').Parent} Parent
   * @typedef {import('../types.js').SafeOptions} SafeOptions
   * @typedef {import('../types.js').Context} Context
   */

  /**
   * @param {Parent} parent
   * @param {Context} context
   * @param {SafeOptions} safeOptions
   * @returns {string}
   */
  function containerPhrasing(parent, context, safeOptions) {
    const indexStack = context.indexStack;
    const children = parent.children || [];
    /** @type {Array<string>} */
    const results = [];
    let index = -1;
    let before = safeOptions.before;

    indexStack.push(-1);
    let tracker = track(safeOptions);

    while (++index < children.length) {
      const child = children[index];
      /** @type {string} */
      let after;

      indexStack[indexStack.length - 1] = index;

      if (index + 1 < children.length) {
        // @ts-expect-error: hush, it’s actually a `zwitch`.
        let handle = context.handle.handlers[children[index + 1].type];
        if (handle && handle.peek) handle = handle.peek;
        after = handle
          ? handle(children[index + 1], parent, context, {
              before: '',
              after: '',
              ...tracker.current()
            }).charAt(0)
          : '';
      } else {
        after = safeOptions.after;
      }

      // In some cases, html (text) can be found in phrasing right after an eol.
      // When we’d serialize that, in most cases that would be seen as html
      // (flow).
      // As we can’t escape or so to prevent it from happening, we take a somewhat
      // reasonable approach: replace that eol with a space.
      // See: <https://github.com/syntax-tree/mdast-util-to-markdown/issues/15>
      if (
        results.length > 0 &&
        (before === '\r' || before === '\n') &&
        child.type === 'html'
      ) {
        results[results.length - 1] = results[results.length - 1].replace(
          /(\r?\n|\r)$/,
          ' '
        );
        before = ' ';

        // To do: does this work to reset tracker?
        tracker = track(safeOptions);
        tracker.move(results.join(''));
      }

      results.push(
        tracker.move(
          context.handle(child, parent, context, {
            ...tracker.current(),
            before,
            after
          })
        )
      );

      before = results[results.length - 1].slice(-1);
    }

    indexStack.pop();

    return results.join('')
  }

  /**
   * @typedef {import('../types.js').Context} Context
   * @typedef {import('../types.js').Options} Options
   */

  /**
   * @param {Context} context
   * @returns {Exclude<Options['quote'], undefined>}
   */
  function checkQuote(context) {
    const marker = context.options.quote || '"';

    if (marker !== '"' && marker !== "'") {
      throw new Error(
        'Cannot serialize title with `' +
          marker +
          '` for `options.quote`, expected `"`, or `\'`'
      )
    }

    return marker
  }

  /**
   * @typedef {import('mdast').BlockContent} BlockContent
   * @typedef {import('mdast').Root} Root
   * @typedef {import('mdast').Paragraph} Paragraph
   * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
   * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
   * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext
   * @typedef {import('mdast-util-from-markdown').Token} Token
   * @typedef {import('mdast-util-to-markdown/lib/types.js').Handle} ToMarkdownHandle
   * @typedef {import('mdast-util-to-markdown/lib/types.js').Context} Context
   * @typedef {import('mdast-util-to-markdown/lib/types.js').Options} ToMarkdownExtension
   * @typedef {import('./complex-types').ContainerDirective} ContainerDirective
   * @typedef {import('./complex-types').LeafDirective} LeafDirective
   * @typedef {import('./complex-types').TextDirective} TextDirective
   * @typedef {ContainerDirective|LeafDirective|TextDirective} Directive
   */

  const own$2 = {}.hasOwnProperty;

  const shortcut = /^[^\t\n\r "#'.<=>`}]+$/;

  handleDirective.peek = peekDirective;

  /** @type {FromMarkdownExtension} */
  const directiveFromMarkdown = {
    canContainEols: ['textDirective'],
    enter: {
      directiveContainer: enterContainer,
      directiveContainerAttributes: enterAttributes,
      directiveContainerLabel: enterContainerLabel,

      directiveLeaf: enterLeaf,
      directiveLeafAttributes: enterAttributes,

      directiveText: enterText,
      directiveTextAttributes: enterAttributes
    },
    exit: {
      directiveContainer: exit$1,
      directiveContainerAttributeClassValue: exitAttributeClassValue,
      directiveContainerAttributeIdValue: exitAttributeIdValue,
      directiveContainerAttributeName: exitAttributeName,
      directiveContainerAttributeValue: exitAttributeValue,
      directiveContainerAttributes: exitAttributes,
      directiveContainerLabel: exitContainerLabel,
      directiveContainerName: exitName,

      directiveLeaf: exit$1,
      directiveLeafAttributeClassValue: exitAttributeClassValue,
      directiveLeafAttributeIdValue: exitAttributeIdValue,
      directiveLeafAttributeName: exitAttributeName,
      directiveLeafAttributeValue: exitAttributeValue,
      directiveLeafAttributes: exitAttributes,
      directiveLeafName: exitName,

      directiveText: exit$1,
      directiveTextAttributeClassValue: exitAttributeClassValue,
      directiveTextAttributeIdValue: exitAttributeIdValue,
      directiveTextAttributeName: exitAttributeName,
      directiveTextAttributeValue: exitAttributeValue,
      directiveTextAttributes: exitAttributes,
      directiveTextName: exitName
    }
  };

  /** @type {ToMarkdownExtension} */
  const directiveToMarkdown = {
    unsafe: [
      {
        character: '\r',
        inConstruct: ['leafDirectiveLabel', 'containerDirectiveLabel']
      },
      {
        character: '\n',
        inConstruct: ['leafDirectiveLabel', 'containerDirectiveLabel']
      },
      {
        before: '[^:]',
        character: ':',
        after: '[A-Za-z]',
        inConstruct: ['phrasing']
      },
      {atBreak: true, character: ':', after: ':'}
    ],
    handlers: {
      containerDirective: handleDirective,
      leafDirective: handleDirective,
      textDirective: handleDirective
    }
  };

  /** @type {FromMarkdownHandle} */
  function enterContainer(token) {
    enter.call(this, 'containerDirective', token);
  }

  /** @type {FromMarkdownHandle} */
  function enterLeaf(token) {
    enter.call(this, 'leafDirective', token);
  }

  /** @type {FromMarkdownHandle} */
  function enterText(token) {
    enter.call(this, 'textDirective', token);
  }

  /**
   * @this {CompileContext}
   * @param {Directive['type']} type
   * @param {Token} token
   */
  function enter(type, token) {
    this.enter({type, name: '', attributes: {}, children: []}, token);
  }

  /**
   * @this {CompileContext}
   * @param {Token} token
   */
  function exitName(token) {
    const node = /** @type {Directive} */ (this.stack[this.stack.length - 1]);
    node.name = this.sliceSerialize(token);
  }

  /** @type {FromMarkdownHandle} */
  function enterContainerLabel(token) {
    this.enter(
      {type: 'paragraph', data: {directiveLabel: true}, children: []},
      token
    );
  }

  /** @type {FromMarkdownHandle} */
  function exitContainerLabel(token) {
    this.exit(token);
  }

  /** @type {FromMarkdownHandle} */
  function enterAttributes() {
    this.setData('directiveAttributes', []);
    this.buffer(); // Capture EOLs
  }

  /** @type {FromMarkdownHandle} */
  function exitAttributeIdValue(token) {
    const list = /** @type {Array.<[string, string]>} */ (
      this.getData('directiveAttributes')
    );
    list.push([
      'id',
      parseEntities(this.sliceSerialize(token), {
        attribute: true
      })
    ]);
  }

  /** @type {FromMarkdownHandle} */
  function exitAttributeClassValue(token) {
    const list = /** @type {Array.<[string, string]>} */ (
      this.getData('directiveAttributes')
    );
    list.push([
      'class',
      parseEntities(this.sliceSerialize(token), {
        attribute: true
      })
    ]);
  }

  /** @type {FromMarkdownHandle} */
  function exitAttributeValue(token) {
    const list = /** @type {Array.<[string, string]>} */ (
      this.getData('directiveAttributes')
    );
    list[list.length - 1][1] = parseEntities(this.sliceSerialize(token), {
      attribute: true
    });
  }

  /** @type {FromMarkdownHandle} */
  function exitAttributeName(token) {
    const list = /** @type {Array.<[string, string]>} */ (
      this.getData('directiveAttributes')
    );

    // Attribute names in CommonMark are significantly limited, so character
    // references can’t exist.
    list.push([this.sliceSerialize(token), '']);
  }

  /** @type {FromMarkdownHandle} */
  function exitAttributes() {
    const list = /** @type {Array.<[string, string]>} */ (
      this.getData('directiveAttributes')
    );
    /** @type {Record.<string, string>} */
    const cleaned = {};
    let index = -1;

    while (++index < list.length) {
      const attribute = list[index];

      if (attribute[0] === 'class' && cleaned.class) {
        cleaned.class += ' ' + attribute[1];
      } else {
        cleaned[attribute[0]] = attribute[1];
      }
    }

    this.setData('directiveAttributes');
    this.resume(); // Drop EOLs
    const node = /** @type {Directive} */ (this.stack[this.stack.length - 1]);
    node.attributes = cleaned;
  }

  /** @type {FromMarkdownHandle} */
  function exit$1(token) {
    this.exit(token);
  }

  /**
   * @type {ToMarkdownHandle}
   * @param {Directive} node
   */
  function handleDirective(node, _, context, safeOptions) {
    const tracker = track(safeOptions);
    const sequence = fence$2(node);
    const exit = context.enter(node.type);
    let value = tracker.move(sequence + (node.name || ''));
    /** @type {Directive|Paragraph|undefined} */
    let label = node;

    if (node.type === 'containerDirective') {
      const head = (node.children || [])[0];
      label = inlineDirectiveLabel(head) ? head : undefined;
    }

    if (label && label.children && label.children.length > 0) {
      const exit = context.enter('label');
      const subexit = context.enter(node.type + 'Label');
      value += tracker.move('[');
      value += tracker.move(
        containerPhrasing(label, context, {
          ...tracker.current(),
          before: value,
          after: ']'
        })
      );
      value += tracker.move(']');
      subexit();
      exit();
    }

    value += tracker.move(attributes(node, context));

    if (node.type === 'containerDirective') {
      const head = (node.children || [])[0];
      let shallow = node;

      if (inlineDirectiveLabel(head)) {
        shallow = Object.assign({}, node, {children: node.children.slice(1)});
      }

      if (shallow && shallow.children && shallow.children.length > 0) {
        value += tracker.move('\n');
        value += tracker.move(containerFlow(shallow, context, tracker.current()));
      }

      value += tracker.move('\n' + sequence);
    }

    exit();
    return value
  }

  /** @type {ToMarkdownHandle} */
  function peekDirective() {
    return ':'
  }

  /**
   * @param {Directive} node
   * @param {Context} context
   * @returns {string}
   */
  function attributes(node, context) {
    const quote = checkQuote(context);
    const subset = node.type === 'textDirective' ? [quote] : [quote, '\n', '\r'];
    const attrs = node.attributes || {};
    /** @type {Array.<string>} */
    const values = [];
    /** @type {string|undefined} */
    let classesFull;
    /** @type {string|undefined} */
    let classes;
    /** @type {string|undefined} */
    let id;
    /** @type {string} */
    let key;

    for (key in attrs) {
      if (
        own$2.call(attrs, key) &&
        attrs[key] !== undefined &&
        attrs[key] !== null
      ) {
        const value = String(attrs[key]);

        if (key === 'id') {
          id = shortcut.test(value) ? '#' + value : quoted('id', value);
        } else if (key === 'class') {
          const list = value.split(/[\t\n\r ]+/g);
          /** @type {Array.<string>} */
          const classesFullList = [];
          /** @type {Array.<string>} */
          const classesList = [];
          let index = -1;

          while (++index < list.length) {
  (shortcut.test(list[index]) ? classesList : classesFullList).push(
              list[index]
            );
          }

          classesFull =
            classesFullList.length > 0
              ? quoted('class', classesFullList.join(' '))
              : '';
          classes = classesList.length > 0 ? '.' + classesList.join('.') : '';
        } else {
          values.push(quoted(key, value));
        }
      }
    }

    if (classesFull) {
      values.unshift(classesFull);
    }

    if (classes) {
      values.unshift(classes);
    }

    if (id) {
      values.unshift(id);
    }

    return values.length > 0 ? '{' + values.join(' ') + '}' : ''

    /**
     * @param {string} key
     * @param {string} value
     * @returns {string}
     */
    function quoted(key, value) {
      return (
        key +
        (value
          ? '=' + quote + stringifyEntitiesLight(value, {subset}) + quote
          : '')
      )
    }
  }

  /**
   * @param {BlockContent} node
   * @returns {node is Paragraph & {data: {directiveLabel: boolean}}}
   */
  function inlineDirectiveLabel(node) {
    return Boolean(
      node && node.type === 'paragraph' && node.data && node.data.directiveLabel
    )
  }

  /**
   * @param {Directive} node
   * @returns {string}
   */
  function fence$2(node) {
    let size = 0;

    if (node.type === 'containerDirective') {
      visitParents(node, 'containerDirective', onvisit);
      size += 3;
    } else if (node.type === 'leafDirective') {
      size = 2;
    } else {
      size = 1;
    }

    return ':'.repeat(size)

    /** @type {import('unist-util-visit-parents/complex-types').BuildVisitor<Root, Directive>} */
    function onvisit(_, parents) {
      let index = parents.length;
      let nesting = 0;

      while (index--) {
        if (parents[index].type === 'containerDirective') {
          nesting++;
        }
      }

      if (nesting > size) size = nesting;
    }
  }

  /**
   * @typedef {import('mdast').Root} Root
   *
   * @typedef {import('mdast-util-directive')} DoNotTouchAsThisImportIncludesDirectivesInTree
   */

  /**
   * Plugin to support the generic directives proposal (`:cite[smith04]`,
   * `::youtube[Video of a cat in a box]{v=01ab2cd3efg}`, and such).
   *
   * @type {import('unified').Plugin<void[], Root>}
   */
  function remarkDirective() {
    const data = this.data();

    add('micromarkExtensions', directive());
    add('fromMarkdownExtensions', directiveFromMarkdown);
    add('toMarkdownExtensions', directiveToMarkdown);

    /**
     * @param {string} field
     * @param {unknown} value
     */
    function add(field, value) {
      const list = /** @type {unknown[]} */ (
        // Other extensions
        /* c8 ignore next 2 */
        data[field] ? data[field] : (data[field] = [])
      );

      list.push(value);
    }
  }

  /**
   * @typedef {import('micromark-util-types').Extension} Extension
   * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').Previous} Previous
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Event} Event
   * @typedef {import('micromark-util-types').Code} Code
   */
  const www = {
    tokenize: tokenizeWww,
    partial: true
  };
  const domain = {
    tokenize: tokenizeDomain,
    partial: true
  };
  const path = {
    tokenize: tokenizePath,
    partial: true
  };
  const punctuation = {
    tokenize: tokenizePunctuation,
    partial: true
  };
  const namedCharacterReference = {
    tokenize: tokenizeNamedCharacterReference,
    partial: true
  };
  const wwwAutolink = {
    tokenize: tokenizeWwwAutolink,
    previous: previousWww
  };
  const httpAutolink = {
    tokenize: tokenizeHttpAutolink,
    previous: previousHttp
  };
  const emailAutolink = {
    tokenize: tokenizeEmailAutolink,
    previous: previousEmail
  };
  /** @type {ConstructRecord} */

  const text = {};
  /** @type {Extension} */

  const gfmAutolinkLiteral = {
    text
  };
  let code = 48; // Add alphanumerics.

  while (code < 123) {
    text[code] = emailAutolink;
    code++;
    if (code === 58) code = 65;
    else if (code === 91) code = 97;
  }

  text[43] = emailAutolink;
  text[45] = emailAutolink;
  text[46] = emailAutolink;
  text[95] = emailAutolink;
  text[72] = [emailAutolink, httpAutolink];
  text[104] = [emailAutolink, httpAutolink];
  text[87] = [emailAutolink, wwwAutolink];
  text[119] = [emailAutolink, wwwAutolink];
  /** @type {Tokenizer} */

  function tokenizeEmailAutolink(effects, ok, nok) {
    const self = this;
    /** @type {boolean} */

    let hasDot;
    /** @type {boolean|undefined} */

    let hasDigitInLastSegment;
    return start
    /** @type {State} */

    function start(code) {
      if (
        !gfmAtext(code) ||
        !previousEmail(self.previous) ||
        previousUnbalanced(self.events)
      ) {
        return nok(code)
      }

      effects.enter('literalAutolink');
      effects.enter('literalAutolinkEmail');
      return atext(code)
    }
    /** @type {State} */

    function atext(code) {
      if (gfmAtext(code)) {
        effects.consume(code);
        return atext
      }

      if (code === 64) {
        effects.consume(code);
        return label
      }

      return nok(code)
    }
    /** @type {State} */

    function label(code) {
      if (code === 46) {
        return effects.check(punctuation, done, dotContinuation)(code)
      }

      if (code === 45 || code === 95) {
        return effects.check(punctuation, nok, dashOrUnderscoreContinuation)(code)
      }

      if (asciiAlphanumeric(code)) {
        if (!hasDigitInLastSegment && asciiDigit(code)) {
          hasDigitInLastSegment = true;
        }

        effects.consume(code);
        return label
      }

      return done(code)
    }
    /** @type {State} */

    function dotContinuation(code) {
      effects.consume(code);
      hasDot = true;
      hasDigitInLastSegment = undefined;
      return label
    }
    /** @type {State} */

    function dashOrUnderscoreContinuation(code) {
      effects.consume(code);
      return afterDashOrUnderscore
    }
    /** @type {State} */

    function afterDashOrUnderscore(code) {
      if (code === 46) {
        return effects.check(punctuation, nok, dotContinuation)(code)
      }

      return label(code)
    }
    /** @type {State} */

    function done(code) {
      if (hasDot && !hasDigitInLastSegment) {
        effects.exit('literalAutolinkEmail');
        effects.exit('literalAutolink');
        return ok(code)
      }

      return nok(code)
    }
  }
  /** @type {Tokenizer} */

  function tokenizeWwwAutolink(effects, ok, nok) {
    const self = this;
    return start
    /** @type {State} */

    function start(code) {
      if (
        (code !== 87 && code !== 119) ||
        !previousWww(self.previous) ||
        previousUnbalanced(self.events)
      ) {
        return nok(code)
      }

      effects.enter('literalAutolink');
      effects.enter('literalAutolinkWww'); // For `www.` we check instead of attempt, because when it matches, GH
      // treats it as part of a domain (yes, it says a valid domain must come
      // after `www.`, but that’s not how it’s implemented by them).

      return effects.check(
        www,
        effects.attempt(domain, effects.attempt(path, done), nok),
        nok
      )(code)
    }
    /** @type {State} */

    function done(code) {
      effects.exit('literalAutolinkWww');
      effects.exit('literalAutolink');
      return ok(code)
    }
  }
  /** @type {Tokenizer} */

  function tokenizeHttpAutolink(effects, ok, nok) {
    const self = this;
    return start
    /** @type {State} */

    function start(code) {
      if (
        (code !== 72 && code !== 104) ||
        !previousHttp(self.previous) ||
        previousUnbalanced(self.events)
      ) {
        return nok(code)
      }

      effects.enter('literalAutolink');
      effects.enter('literalAutolinkHttp');
      effects.consume(code);
      return t1
    }
    /** @type {State} */

    function t1(code) {
      if (code === 84 || code === 116) {
        effects.consume(code);
        return t2
      }

      return nok(code)
    }
    /** @type {State} */

    function t2(code) {
      if (code === 84 || code === 116) {
        effects.consume(code);
        return p
      }

      return nok(code)
    }
    /** @type {State} */

    function p(code) {
      if (code === 80 || code === 112) {
        effects.consume(code);
        return s
      }

      return nok(code)
    }
    /** @type {State} */

    function s(code) {
      if (code === 83 || code === 115) {
        effects.consume(code);
        return colon
      }

      return colon(code)
    }
    /** @type {State} */

    function colon(code) {
      if (code === 58) {
        effects.consume(code);
        return slash1
      }

      return nok(code)
    }
    /** @type {State} */

    function slash1(code) {
      if (code === 47) {
        effects.consume(code);
        return slash2
      }

      return nok(code)
    }
    /** @type {State} */

    function slash2(code) {
      if (code === 47) {
        effects.consume(code);
        return after
      }

      return nok(code)
    }
    /** @type {State} */

    function after(code) {
      return code === null ||
        asciiControl(code) ||
        unicodeWhitespace(code) ||
        unicodePunctuation(code)
        ? nok(code)
        : effects.attempt(domain, effects.attempt(path, done), nok)(code)
    }
    /** @type {State} */

    function done(code) {
      effects.exit('literalAutolinkHttp');
      effects.exit('literalAutolink');
      return ok(code)
    }
  }
  /** @type {Tokenizer} */

  function tokenizeWww(effects, ok, nok) {
    return start
    /** @type {State} */

    function start(code) {
      effects.consume(code);
      return w2
    }
    /** @type {State} */

    function w2(code) {
      if (code === 87 || code === 119) {
        effects.consume(code);
        return w3
      }

      return nok(code)
    }
    /** @type {State} */

    function w3(code) {
      if (code === 87 || code === 119) {
        effects.consume(code);
        return dot
      }

      return nok(code)
    }
    /** @type {State} */

    function dot(code) {
      if (code === 46) {
        effects.consume(code);
        return after
      }

      return nok(code)
    }
    /** @type {State} */

    function after(code) {
      return code === null || markdownLineEnding(code) ? nok(code) : ok(code)
    }
  }
  /** @type {Tokenizer} */

  function tokenizeDomain(effects, ok, nok) {
    /** @type {boolean|undefined} */
    let hasUnderscoreInLastSegment;
    /** @type {boolean|undefined} */

    let hasUnderscoreInLastLastSegment;
    return domain
    /** @type {State} */

    function domain(code) {
      if (code === 38) {
        return effects.check(
          namedCharacterReference,
          done,
          punctuationContinuation
        )(code)
      }

      if (code === 46 || code === 95) {
        return effects.check(punctuation, done, punctuationContinuation)(code)
      } // GH documents that only alphanumerics (other than `-`, `.`, and `_`) can
      // occur, which sounds like ASCII only, but they also support `www.點看.com`,
      // so that’s Unicode.
      // Instead of some new production for Unicode alphanumerics, markdown
      // already has that for Unicode punctuation and whitespace, so use those.

      if (
        code === null ||
        asciiControl(code) ||
        unicodeWhitespace(code) ||
        (code !== 45 && unicodePunctuation(code))
      ) {
        return done(code)
      }

      effects.consume(code);
      return domain
    }
    /** @type {State} */

    function punctuationContinuation(code) {
      if (code === 46) {
        hasUnderscoreInLastLastSegment = hasUnderscoreInLastSegment;
        hasUnderscoreInLastSegment = undefined;
        effects.consume(code);
        return domain
      }

      if (code === 95) hasUnderscoreInLastSegment = true;
      effects.consume(code);
      return domain
    }
    /** @type {State} */

    function done(code) {
      if (!hasUnderscoreInLastLastSegment && !hasUnderscoreInLastSegment) {
        return ok(code)
      }

      return nok(code)
    }
  }
  /** @type {Tokenizer} */

  function tokenizePath(effects, ok) {
    let balance = 0;
    return inPath
    /** @type {State} */

    function inPath(code) {
      if (code === 38) {
        return effects.check(
          namedCharacterReference,
          ok,
          continuedPunctuation
        )(code)
      }

      if (code === 40) {
        balance++;
      }

      if (code === 41) {
        return effects.check(
          punctuation,
          parenAtPathEnd,
          continuedPunctuation
        )(code)
      }

      if (pathEnd(code)) {
        return ok(code)
      }

      if (trailingPunctuation(code)) {
        return effects.check(punctuation, ok, continuedPunctuation)(code)
      }

      effects.consume(code);
      return inPath
    }
    /** @type {State} */

    function continuedPunctuation(code) {
      effects.consume(code);
      return inPath
    }
    /** @type {State} */

    function parenAtPathEnd(code) {
      balance--;
      return balance < 0 ? ok(code) : continuedPunctuation(code)
    }
  }
  /** @type {Tokenizer} */

  function tokenizeNamedCharacterReference(effects, ok, nok) {
    return start
    /** @type {State} */

    function start(code) {
      effects.consume(code);
      return inside
    }
    /** @type {State} */

    function inside(code) {
      if (asciiAlpha(code)) {
        effects.consume(code);
        return inside
      }

      if (code === 59) {
        effects.consume(code);
        return after
      }

      return nok(code)
    }
    /** @type {State} */

    function after(code) {
      // If the named character reference is followed by the end of the path, it’s
      // not continued punctuation.
      return pathEnd(code) ? ok(code) : nok(code)
    }
  }
  /** @type {Tokenizer} */

  function tokenizePunctuation(effects, ok, nok) {
    return start
    /** @type {State} */

    function start(code) {
      effects.consume(code);
      return after
    }
    /** @type {State} */

    function after(code) {
      // Check the next.
      if (trailingPunctuation(code)) {
        effects.consume(code);
        return after
      } // If the punctuation marker is followed by the end of the path, it’s not
      // continued punctuation.

      return pathEnd(code) ? ok(code) : nok(code)
    }
  }
  /**
   * @param {Code} code
   * @returns {boolean}
   */

  function trailingPunctuation(code) {
    return (
      code === 33 ||
      code === 34 ||
      code === 39 ||
      code === 41 ||
      code === 42 ||
      code === 44 ||
      code === 46 ||
      code === 58 ||
      code === 59 ||
      code === 60 ||
      code === 63 ||
      code === 95 ||
      code === 126
    )
  }
  /**
   * @param {Code} code
   * @returns {boolean}
   */

  function pathEnd(code) {
    return code === null || code === 60 || markdownLineEndingOrSpace(code)
  }
  /**
   * @param {Code} code
   * @returns {boolean}
   */

  function gfmAtext(code) {
    return (
      code === 43 ||
      code === 45 ||
      code === 46 ||
      code === 95 ||
      asciiAlphanumeric(code)
    )
  }
  /** @type {Previous} */

  function previousWww(code) {
    return (
      code === null ||
      code === 40 ||
      code === 42 ||
      code === 95 ||
      code === 126 ||
      markdownLineEndingOrSpace(code)
    )
  }
  /** @type {Previous} */

  function previousHttp(code) {
    return code === null || !asciiAlpha(code)
  }
  /** @type {Previous} */

  function previousEmail(code) {
    return code !== 47 && previousHttp(code)
  }
  /**
   * @param {Array<Event>} events
   * @returns {boolean}
   */

  function previousUnbalanced(events) {
    let index = events.length;
    let result = false;

    while (index--) {
      const token = events[index][1];

      if (
        (token.type === 'labelLink' || token.type === 'labelImage') &&
        !token._balanced
      ) {
        result = true;
        break
      } // @ts-expect-error If we’ve seen this token, and it was marked as not
      // having any unbalanced bracket before it, we can exit.

      if (token._gfmAutolinkLiteralWalkedInto) {
        result = false;
        break
      }
    }

    if (events.length > 0 && !result) {
      // @ts-expect-error Mark the last token as “walked into” w/o finding
      // anything.
      events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
    }

    return result
  }

  /**
   * @typedef {import('micromark-util-types').Extension} Extension
   * @typedef {import('micromark-util-types').Resolver} Resolver
   * @typedef {import('micromark-util-types').Token} Token
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').Exiter} Exiter
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Event} Event
   */
  const indent = {
    tokenize: tokenizeIndent,
    partial: true
  };
  /**
   * @returns {Extension}
   */

  function gfmFootnote() {
    /** @type {Extension} */
    return {
      document: {
        [91]: {
          tokenize: tokenizeDefinitionStart,
          continuation: {
            tokenize: tokenizeDefinitionContinuation
          },
          exit: gfmFootnoteDefinitionEnd
        }
      },
      text: {
        [91]: {
          tokenize: tokenizeGfmFootnoteCall
        },
        [93]: {
          add: 'after',
          tokenize: tokenizePotentialGfmFootnoteCall,
          resolveTo: resolveToPotentialGfmFootnoteCall
        }
      }
    }
  }
  /** @type {Tokenizer} */

  function tokenizePotentialGfmFootnoteCall(effects, ok, nok) {
    const self = this;
    let index = self.events.length;
    /** @type {Array<string>} */
    // @ts-expect-error It’s fine!

    const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
    /** @type {Token} */

    let labelStart; // Find an opening.

    while (index--) {
      const token = self.events[index][1];

      if (token.type === 'labelImage') {
        labelStart = token;
        break
      } // Exit if we’ve walked far enough.

      if (
        token.type === 'gfmFootnoteCall' ||
        token.type === 'labelLink' ||
        token.type === 'label' ||
        token.type === 'image' ||
        token.type === 'link'
      ) {
        break
      }
    }

    return start
    /** @type {State} */

    function start(code) {
      if (!labelStart || !labelStart._balanced) {
        return nok(code)
      }

      const id = normalizeIdentifier(
        self.sliceSerialize({
          start: labelStart.end,
          end: self.now()
        })
      );

      if (id.charCodeAt(0) !== 94 || !defined.includes(id.slice(1))) {
        return nok(code)
      }

      effects.enter('gfmFootnoteCallLabelMarker');
      effects.consume(code);
      effects.exit('gfmFootnoteCallLabelMarker');
      return ok(code)
    }
  }
  /** @type {Resolver} */

  function resolveToPotentialGfmFootnoteCall(events, context) {
    let index = events.length;

    while (index--) {
      if (
        events[index][1].type === 'labelImage' &&
        events[index][0] === 'enter'
      ) {
        events[index][1];
        break
      }
    }

    // Change the `labelImageMarker` to a `data`.
    events[index + 1][1].type = 'data';
    events[index + 3][1].type = 'gfmFootnoteCallLabelMarker'; // The whole (without `!`):

    const call = {
      type: 'gfmFootnoteCall',
      start: Object.assign({}, events[index + 3][1].start),
      end: Object.assign({}, events[events.length - 1][1].end)
    }; // The `^` marker

    const marker = {
      type: 'gfmFootnoteCallMarker',
      start: Object.assign({}, events[index + 3][1].end),
      end: Object.assign({}, events[index + 3][1].end)
    }; // Increment the end 1 character.

    marker.end.column++;
    marker.end.offset++;
    marker.end._bufferIndex++;
    const string = {
      type: 'gfmFootnoteCallString',
      start: Object.assign({}, marker.end),
      end: Object.assign({}, events[events.length - 1][1].start)
    };
    const chunk = {
      type: 'chunkString',
      contentType: 'string',
      start: Object.assign({}, string.start),
      end: Object.assign({}, string.end)
    };
    /** @type {Array<Event>} */

    const replacement = [
      // Take the `labelImageMarker` (now `data`, the `!`)
      events[index + 1],
      events[index + 2],
      ['enter', call, context], // The `[`
      events[index + 3],
      events[index + 4], // The `^`.
      ['enter', marker, context],
      ['exit', marker, context], // Everything in between.
      ['enter', string, context],
      ['enter', chunk, context],
      ['exit', chunk, context],
      ['exit', string, context], // The ending (`]`, properly parsed and labelled).
      events[events.length - 2],
      events[events.length - 1],
      ['exit', call, context]
    ];
    events.splice(index, events.length - index + 1, ...replacement);
    return events
  }
  /** @type {Tokenizer} */

  function tokenizeGfmFootnoteCall(effects, ok, nok) {
    const self = this;
    /** @type {Array<string>} */
    // @ts-expect-error It’s fine!

    const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
    let size = 0;
    /** @type {boolean} */

    let data;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('gfmFootnoteCall');
      effects.enter('gfmFootnoteCallLabelMarker');
      effects.consume(code);
      effects.exit('gfmFootnoteCallLabelMarker');
      return callStart
    }
    /** @type {State} */

    function callStart(code) {
      if (code !== 94) return nok(code)
      effects.enter('gfmFootnoteCallMarker');
      effects.consume(code);
      effects.exit('gfmFootnoteCallMarker');
      effects.enter('gfmFootnoteCallString');
      effects.enter('chunkString').contentType = 'string';
      return callData
    }
    /** @type {State} */

    function callData(code) {
      /** @type {Token} */
      let token;

      if (code === null || code === 91 || size++ > 999) {
        return nok(code)
      }

      if (code === 93) {
        if (!data) {
          return nok(code)
        }

        effects.exit('chunkString');
        token = effects.exit('gfmFootnoteCallString');
        return defined.includes(normalizeIdentifier(self.sliceSerialize(token)))
          ? end(code)
          : nok(code)
      }

      effects.consume(code);

      if (!markdownLineEndingOrSpace(code)) {
        data = true;
      }

      return code === 92 ? callEscape : callData
    }
    /** @type {State} */

    function callEscape(code) {
      if (code === 91 || code === 92 || code === 93) {
        effects.consume(code);
        size++;
        return callData
      }

      return callData(code)
    }
    /** @type {State} */

    function end(code) {
      effects.enter('gfmFootnoteCallLabelMarker');
      effects.consume(code);
      effects.exit('gfmFootnoteCallLabelMarker');
      effects.exit('gfmFootnoteCall');
      return ok
    }
  }
  /** @type {Tokenizer} */

  function tokenizeDefinitionStart(effects, ok, nok) {
    const self = this;
    /** @type {Array<string>} */
    // @ts-expect-error It’s fine!

    const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
    /** @type {string} */

    let identifier;
    let size = 0;
    /** @type {boolean|undefined} */

    let data;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('gfmFootnoteDefinition')._container = true;
      effects.enter('gfmFootnoteDefinitionLabel');
      effects.enter('gfmFootnoteDefinitionLabelMarker');
      effects.consume(code);
      effects.exit('gfmFootnoteDefinitionLabelMarker');
      return labelStart
    }
    /** @type {State} */

    function labelStart(code) {
      if (code === 94) {
        effects.enter('gfmFootnoteDefinitionMarker');
        effects.consume(code);
        effects.exit('gfmFootnoteDefinitionMarker');
        effects.enter('gfmFootnoteDefinitionLabelString');
        return atBreak
      }

      return nok(code)
    }
    /** @type {State} */

    function atBreak(code) {
      /** @type {Token} */
      let token;

      if (code === null || code === 91 || size > 999) {
        return nok(code)
      }

      if (code === 93) {
        if (!data) {
          return nok(code)
        }

        token = effects.exit('gfmFootnoteDefinitionLabelString');
        identifier = normalizeIdentifier(self.sliceSerialize(token));
        effects.enter('gfmFootnoteDefinitionLabelMarker');
        effects.consume(code);
        effects.exit('gfmFootnoteDefinitionLabelMarker');
        effects.exit('gfmFootnoteDefinitionLabel');
        return labelAfter
      }

      if (markdownLineEnding(code)) {
        effects.enter('lineEnding');
        effects.consume(code);
        effects.exit('lineEnding');
        size++;
        return atBreak
      }

      effects.enter('chunkString').contentType = 'string';
      return label(code)
    }
    /** @type {State} */

    function label(code) {
      if (
        code === null ||
        markdownLineEnding(code) ||
        code === 91 ||
        code === 93 ||
        size > 999
      ) {
        effects.exit('chunkString');
        return atBreak(code)
      }

      if (!markdownLineEndingOrSpace(code)) {
        data = true;
      }

      size++;
      effects.consume(code);
      return code === 92 ? labelEscape : label
    }
    /** @type {State} */

    function labelEscape(code) {
      if (code === 91 || code === 92 || code === 93) {
        effects.consume(code);
        size++;
        return label
      }

      return label(code)
    }
    /** @type {State} */

    function labelAfter(code) {
      if (code === 58) {
        effects.enter('definitionMarker');
        effects.consume(code);
        effects.exit('definitionMarker'); // Any whitespace after the marker is eaten, forming indented code
        // is not possible.
        // No space is also fine, just like a block quote marker.

        return factorySpace(effects, done, 'gfmFootnoteDefinitionWhitespace')
      }

      return nok(code)
    }
    /** @type {State} */

    function done(code) {
      if (!defined.includes(identifier)) {
        defined.push(identifier);
      }

      return ok(code)
    }
  }
  /** @type {Tokenizer} */

  function tokenizeDefinitionContinuation(effects, ok, nok) {
    // Either a blank line, which is okay, or an indented thing.
    return effects.check(blankLine, ok, effects.attempt(indent, ok, nok))
  }
  /** @type {Exiter} */

  function gfmFootnoteDefinitionEnd(effects) {
    effects.exit('gfmFootnoteDefinition');
  }
  /** @type {Tokenizer} */

  function tokenizeIndent(effects, ok, nok) {
    const self = this;
    return factorySpace(
      effects,
      afterPrefix,
      'gfmFootnoteDefinitionIndent',
      4 + 1
    )
    /** @type {State} */

    function afterPrefix(code) {
      const tail = self.events[self.events.length - 1];
      return tail &&
        tail[1].type === 'gfmFootnoteDefinitionIndent' &&
        tail[2].sliceSerialize(tail[1], true).length === 4
        ? ok(code)
        : nok(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Extension} Extension
   * @typedef {import('micromark-util-types').Resolver} Resolver
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Token} Token
   * @typedef {import('micromark-util-types').Event} Event
   */

  /**
   * @param {Options} [options]
   * @returns {Extension}
   */
  function gfmStrikethrough(options = {}) {
    let single = options.singleTilde;
    const tokenizer = {
      tokenize: tokenizeStrikethrough,
      resolveAll: resolveAllStrikethrough
    };

    if (single === null || single === undefined) {
      single = true;
    }

    return {
      text: {
        [126]: tokenizer
      },
      insideSpan: {
        null: [tokenizer]
      },
      attentionMarkers: {
        null: [126]
      }
    }
    /**
     * Take events and resolve strikethrough.
     *
     * @type {Resolver}
     */

    function resolveAllStrikethrough(events, context) {
      let index = -1; // Walk through all events.

      while (++index < events.length) {
        // Find a token that can close.
        if (
          events[index][0] === 'enter' &&
          events[index][1].type === 'strikethroughSequenceTemporary' &&
          events[index][1]._close
        ) {
          let open = index; // Now walk back to find an opener.

          while (open--) {
            // Find a token that can open the closer.
            if (
              events[open][0] === 'exit' &&
              events[open][1].type === 'strikethroughSequenceTemporary' &&
              events[open][1]._open && // If the sizes are the same:
              events[index][1].end.offset - events[index][1].start.offset ===
                events[open][1].end.offset - events[open][1].start.offset
            ) {
              events[index][1].type = 'strikethroughSequence';
              events[open][1].type = 'strikethroughSequence';
              const strikethrough = {
                type: 'strikethrough',
                start: Object.assign({}, events[open][1].start),
                end: Object.assign({}, events[index][1].end)
              };
              const text = {
                type: 'strikethroughText',
                start: Object.assign({}, events[open][1].end),
                end: Object.assign({}, events[index][1].start)
              }; // Opening.

              const nextEvents = [
                ['enter', strikethrough, context],
                ['enter', events[open][1], context],
                ['exit', events[open][1], context],
                ['enter', text, context]
              ]; // Between.

              splice(
                nextEvents,
                nextEvents.length,
                0,
                resolveAll(
                  context.parser.constructs.insideSpan.null,
                  events.slice(open + 1, index),
                  context
                )
              ); // Closing.

              splice(nextEvents, nextEvents.length, 0, [
                ['exit', text, context],
                ['enter', events[index][1], context],
                ['exit', events[index][1], context],
                ['exit', strikethrough, context]
              ]);
              splice(events, open - 1, index - open + 3, nextEvents);
              index = open + nextEvents.length - 2;
              break
            }
          }
        }
      }

      index = -1;

      while (++index < events.length) {
        if (events[index][1].type === 'strikethroughSequenceTemporary') {
          events[index][1].type = 'data';
        }
      }

      return events
    }
    /** @type {Tokenizer} */

    function tokenizeStrikethrough(effects, ok, nok) {
      const previous = this.previous;
      const events = this.events;
      let size = 0;
      return start
      /** @type {State} */

      function start(code) {
        if (
          previous === 126 &&
          events[events.length - 1][1].type !== 'characterEscape'
        ) {
          return nok(code)
        }

        effects.enter('strikethroughSequenceTemporary');
        return more(code)
      }
      /** @type {State} */

      function more(code) {
        const before = classifyCharacter(previous);

        if (code === 126) {
          // If this is the third marker, exit.
          if (size > 1) return nok(code)
          effects.consume(code);
          size++;
          return more
        }

        if (size < 2 && !single) return nok(code)
        const token = effects.exit('strikethroughSequenceTemporary');
        const after = classifyCharacter(code);
        token._open = !after || (after === 2 && Boolean(before));
        token._close = !before || (before === 2 && Boolean(after));
        return ok(code)
      }
    }
  }

  /**
   * @typedef {import('micromark-util-types').Extension} Extension
   * @typedef {import('micromark-util-types').Resolver} Resolver
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Token} Token
   */

  /** @type {Extension} */
  const gfmTable = {
    flow: {
      null: {
        tokenize: tokenizeTable,
        resolve: resolveTable
      }
    }
  };
  const nextPrefixedOrBlank = {
    tokenize: tokenizeNextPrefixedOrBlank,
    partial: true
  };
  /** @type {Resolver} */

  function resolveTable(events, context) {
    let index = -1;
    /** @type {boolean|undefined} */

    let inHead;
    /** @type {boolean|undefined} */

    let inDelimiterRow;
    /** @type {boolean|undefined} */

    let inRow;
    /** @type {number|undefined} */

    let contentStart;
    /** @type {number|undefined} */

    let contentEnd;
    /** @type {number|undefined} */

    let cellStart;
    /** @type {boolean|undefined} */

    let seenCellInRow;

    while (++index < events.length) {
      const token = events[index][1];

      if (inRow) {
        if (token.type === 'temporaryTableCellContent') {
          contentStart = contentStart || index;
          contentEnd = index;
        }

        if (
          // Combine separate content parts into one.
          (token.type === 'tableCellDivider' || token.type === 'tableRow') &&
          contentEnd
        ) {
          const content = {
            type: 'tableContent',
            start: events[contentStart][1].start,
            end: events[contentEnd][1].end
          };
          /** @type {Token} */

          const text = {
            type: 'chunkText',
            start: content.start,
            end: content.end,
            // @ts-expect-error It’s fine.
            contentType: 'text'
          };
          events.splice(
            contentStart,
            contentEnd - contentStart + 1,
            ['enter', content, context],
            ['enter', text, context],
            ['exit', text, context],
            ['exit', content, context]
          );
          index -= contentEnd - contentStart - 3;
          contentStart = undefined;
          contentEnd = undefined;
        }
      }

      if (
        events[index][0] === 'exit' &&
        cellStart !== undefined &&
        cellStart + (seenCellInRow ? 0 : 1) < index &&
        (token.type === 'tableCellDivider' ||
          (token.type === 'tableRow' &&
            (cellStart + 3 < index ||
              events[cellStart][1].type !== 'whitespace')))
      ) {
        const cell = {
          type: inDelimiterRow
            ? 'tableDelimiter'
            : inHead
            ? 'tableHeader'
            : 'tableData',
          start: events[cellStart][1].start,
          end: events[index][1].end
        };
        events.splice(index + (token.type === 'tableCellDivider' ? 1 : 0), 0, [
          'exit',
          cell,
          context
        ]);
        events.splice(cellStart, 0, ['enter', cell, context]);
        index += 2;
        cellStart = index + 1;
        seenCellInRow = true;
      }

      if (token.type === 'tableRow') {
        inRow = events[index][0] === 'enter';

        if (inRow) {
          cellStart = index + 1;
          seenCellInRow = false;
        }
      }

      if (token.type === 'tableDelimiterRow') {
        inDelimiterRow = events[index][0] === 'enter';

        if (inDelimiterRow) {
          cellStart = index + 1;
          seenCellInRow = false;
        }
      }

      if (token.type === 'tableHead') {
        inHead = events[index][0] === 'enter';
      }
    }

    return events
  }
  /** @type {Tokenizer} */

  function tokenizeTable(effects, ok, nok) {
    const self = this;
    /** @type {Array<Align>} */

    const align = [];
    let tableHeaderCount = 0;
    /** @type {boolean|undefined} */

    let seenDelimiter;
    /** @type {boolean|undefined} */

    let hasDash;
    return start
    /** @type {State} */

    function start(code) {
      // @ts-expect-error Custom.
      effects.enter('table')._align = align;
      effects.enter('tableHead');
      effects.enter('tableRow'); // If we start with a pipe, we open a cell marker.

      if (code === 124) {
        return cellDividerHead(code)
      }

      tableHeaderCount++;
      effects.enter('temporaryTableCellContent'); // Can’t be space or eols at the start of a construct, so we’re in a cell.

      return inCellContentHead(code)
    }
    /** @type {State} */

    function cellDividerHead(code) {
      effects.enter('tableCellDivider');
      effects.consume(code);
      effects.exit('tableCellDivider');
      seenDelimiter = true;
      return cellBreakHead
    }
    /** @type {State} */

    function cellBreakHead(code) {
      if (code === null || markdownLineEnding(code)) {
        return atRowEndHead(code)
      }

      if (markdownSpace(code)) {
        effects.enter('whitespace');
        effects.consume(code);
        return inWhitespaceHead
      }

      if (seenDelimiter) {
        seenDelimiter = undefined;
        tableHeaderCount++;
      }

      if (code === 124) {
        return cellDividerHead(code)
      } // Anything else is cell content.

      effects.enter('temporaryTableCellContent');
      return inCellContentHead(code)
    }
    /** @type {State} */

    function inWhitespaceHead(code) {
      if (markdownSpace(code)) {
        effects.consume(code);
        return inWhitespaceHead
      }

      effects.exit('whitespace');
      return cellBreakHead(code)
    }
    /** @type {State} */

    function inCellContentHead(code) {
      // EOF, whitespace, pipe
      if (code === null || code === 124 || markdownLineEndingOrSpace(code)) {
        effects.exit('temporaryTableCellContent');
        return cellBreakHead(code)
      }

      effects.consume(code);
      return code === 92 ? inCellContentEscapeHead : inCellContentHead
    }
    /** @type {State} */

    function inCellContentEscapeHead(code) {
      if (code === 92 || code === 124) {
        effects.consume(code);
        return inCellContentHead
      } // Anything else.

      return inCellContentHead(code)
    }
    /** @type {State} */

    function atRowEndHead(code) {
      if (code === null) {
        return nok(code)
      }

      effects.exit('tableRow');
      effects.exit('tableHead');
      const originalInterrupt = self.interrupt;
      self.interrupt = true;
      return effects.attempt(
        {
          tokenize: tokenizeRowEnd,
          partial: true
        },
        function (code) {
          self.interrupt = originalInterrupt;
          effects.enter('tableDelimiterRow');
          return atDelimiterRowBreak(code)
        },
        function (code) {
          self.interrupt = originalInterrupt;
          return nok(code)
        }
      )(code)
    }
    /** @type {State} */

    function atDelimiterRowBreak(code) {
      if (code === null || markdownLineEnding(code)) {
        return rowEndDelimiter(code)
      }

      if (markdownSpace(code)) {
        effects.enter('whitespace');
        effects.consume(code);
        return inWhitespaceDelimiter
      }

      if (code === 45) {
        effects.enter('tableDelimiterFiller');
        effects.consume(code);
        hasDash = true;
        align.push('none');
        return inFillerDelimiter
      }

      if (code === 58) {
        effects.enter('tableDelimiterAlignment');
        effects.consume(code);
        effects.exit('tableDelimiterAlignment');
        align.push('left');
        return afterLeftAlignment
      } // If we start with a pipe, we open a cell marker.

      if (code === 124) {
        effects.enter('tableCellDivider');
        effects.consume(code);
        effects.exit('tableCellDivider');
        return atDelimiterRowBreak
      }

      return nok(code)
    }
    /** @type {State} */

    function inWhitespaceDelimiter(code) {
      if (markdownSpace(code)) {
        effects.consume(code);
        return inWhitespaceDelimiter
      }

      effects.exit('whitespace');
      return atDelimiterRowBreak(code)
    }
    /** @type {State} */

    function inFillerDelimiter(code) {
      if (code === 45) {
        effects.consume(code);
        return inFillerDelimiter
      }

      effects.exit('tableDelimiterFiller');

      if (code === 58) {
        effects.enter('tableDelimiterAlignment');
        effects.consume(code);
        effects.exit('tableDelimiterAlignment');
        align[align.length - 1] =
          align[align.length - 1] === 'left' ? 'center' : 'right';
        return afterRightAlignment
      }

      return atDelimiterRowBreak(code)
    }
    /** @type {State} */

    function afterLeftAlignment(code) {
      if (code === 45) {
        effects.enter('tableDelimiterFiller');
        effects.consume(code);
        hasDash = true;
        return inFillerDelimiter
      } // Anything else is not ok.

      return nok(code)
    }
    /** @type {State} */

    function afterRightAlignment(code) {
      if (code === null || markdownLineEnding(code)) {
        return rowEndDelimiter(code)
      }

      if (markdownSpace(code)) {
        effects.enter('whitespace');
        effects.consume(code);
        return inWhitespaceDelimiter
      } // `|`

      if (code === 124) {
        effects.enter('tableCellDivider');
        effects.consume(code);
        effects.exit('tableCellDivider');
        return atDelimiterRowBreak
      }

      return nok(code)
    }
    /** @type {State} */

    function rowEndDelimiter(code) {
      effects.exit('tableDelimiterRow'); // Exit if there was no dash at all, or if the header cell count is not the
      // delimiter cell count.

      if (!hasDash || tableHeaderCount !== align.length) {
        return nok(code)
      }

      if (code === null) {
        return tableClose(code)
      }

      return effects.check(
        nextPrefixedOrBlank,
        tableClose,
        effects.attempt(
          {
            tokenize: tokenizeRowEnd,
            partial: true
          },
          factorySpace(effects, bodyStart, 'linePrefix', 4),
          tableClose
        )
      )(code)
    }
    /** @type {State} */

    function tableClose(code) {
      effects.exit('table');
      return ok(code)
    }
    /** @type {State} */

    function bodyStart(code) {
      effects.enter('tableBody');
      return rowStartBody(code)
    }
    /** @type {State} */

    function rowStartBody(code) {
      effects.enter('tableRow'); // If we start with a pipe, we open a cell marker.

      if (code === 124) {
        return cellDividerBody(code)
      }

      effects.enter('temporaryTableCellContent'); // Can’t be space or eols at the start of a construct, so we’re in a cell.

      return inCellContentBody(code)
    }
    /** @type {State} */

    function cellDividerBody(code) {
      effects.enter('tableCellDivider');
      effects.consume(code);
      effects.exit('tableCellDivider');
      return cellBreakBody
    }
    /** @type {State} */

    function cellBreakBody(code) {
      if (code === null || markdownLineEnding(code)) {
        return atRowEndBody(code)
      }

      if (markdownSpace(code)) {
        effects.enter('whitespace');
        effects.consume(code);
        return inWhitespaceBody
      } // `|`

      if (code === 124) {
        return cellDividerBody(code)
      } // Anything else is cell content.

      effects.enter('temporaryTableCellContent');
      return inCellContentBody(code)
    }
    /** @type {State} */

    function inWhitespaceBody(code) {
      if (markdownSpace(code)) {
        effects.consume(code);
        return inWhitespaceBody
      }

      effects.exit('whitespace');
      return cellBreakBody(code)
    }
    /** @type {State} */

    function inCellContentBody(code) {
      // EOF, whitespace, pipe
      if (code === null || code === 124 || markdownLineEndingOrSpace(code)) {
        effects.exit('temporaryTableCellContent');
        return cellBreakBody(code)
      }

      effects.consume(code);
      return code === 92 ? inCellContentEscapeBody : inCellContentBody
    }
    /** @type {State} */

    function inCellContentEscapeBody(code) {
      if (code === 92 || code === 124) {
        effects.consume(code);
        return inCellContentBody
      } // Anything else.

      return inCellContentBody(code)
    }
    /** @type {State} */

    function atRowEndBody(code) {
      effects.exit('tableRow');

      if (code === null) {
        return tableBodyClose(code)
      }

      return effects.check(
        nextPrefixedOrBlank,
        tableBodyClose,
        effects.attempt(
          {
            tokenize: tokenizeRowEnd,
            partial: true
          },
          factorySpace(effects, rowStartBody, 'linePrefix', 4),
          tableBodyClose
        )
      )(code)
    }
    /** @type {State} */

    function tableBodyClose(code) {
      effects.exit('tableBody');
      return tableClose(code)
    }
    /** @type {Tokenizer} */

    function tokenizeRowEnd(effects, ok, nok) {
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('lineEnding');
        effects.consume(code);
        effects.exit('lineEnding');
        return factorySpace(effects, prefixed, 'linePrefix')
      }
      /** @type {State} */

      function prefixed(code) {
        // Blank or interrupting line.
        if (
          self.parser.lazy[self.now().line] ||
          code === null ||
          markdownLineEnding(code)
        ) {
          return nok(code)
        }

        const tail = self.events[self.events.length - 1]; // Indented code can interrupt delimiter and body rows.

        if (
          !self.parser.constructs.disable.null.includes('codeIndented') &&
          tail &&
          tail[1].type === 'linePrefix' &&
          tail[2].sliceSerialize(tail[1], true).length >= 4
        ) {
          return nok(code)
        }

        self._gfmTableDynamicInterruptHack = true;
        return effects.check(
          self.parser.constructs.flow,
          function (code) {
            self._gfmTableDynamicInterruptHack = false;
            return nok(code)
          },
          function (code) {
            self._gfmTableDynamicInterruptHack = false;
            return ok(code)
          }
        )(code)
      }
    }
  }
  /** @type {Tokenizer} */

  function tokenizeNextPrefixedOrBlank(effects, ok, nok) {
    let size = 0;
    return start
    /** @type {State} */

    function start(code) {
      // This is a check, so we don’t care about tokens, but we open a bogus one
      // so we’re valid.
      effects.enter('check'); // EOL.

      effects.consume(code);
      return whitespace
    }
    /** @type {State} */

    function whitespace(code) {
      if (code === -1 || code === 32) {
        effects.consume(code);
        size++;
        return size === 4 ? ok : whitespace
      } // EOF or whitespace

      if (code === null || markdownLineEndingOrSpace(code)) {
        return ok(code)
      } // Anything else.

      return nok(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Extension} Extension
   * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').Previous} Previous
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Event} Event
   * @typedef {import('micromark-util-types').Code} Code
   */
  const tasklistCheck = {
    tokenize: tokenizeTasklistCheck
  };
  const gfmTaskListItem = {
    text: {
      [91]: tasklistCheck
    }
  };
  /** @type {Tokenizer} */

  function tokenizeTasklistCheck(effects, ok, nok) {
    const self = this;
    return open
    /** @type {State} */

    function open(code) {
      if (
        // Exit if there’s stuff before.
        self.previous !== null || // Exit if not in the first content that is the first child of a list
        // item.
        !self._gfmTasklistFirstContentOfListItem
      ) {
        return nok(code)
      }

      effects.enter('taskListCheck');
      effects.enter('taskListCheckMarker');
      effects.consume(code);
      effects.exit('taskListCheckMarker');
      return inside
    }
    /** @type {State} */

    function inside(code) {
      // To match how GH works in comments, use `markdownSpace` (`[ \t]`) instead
      // of `markdownLineEndingOrSpace` (`[ \t\r\n]`).
      if (markdownLineEndingOrSpace(code)) {
        effects.enter('taskListCheckValueUnchecked');
        effects.consume(code);
        effects.exit('taskListCheckValueUnchecked');
        return close
      }

      if (code === 88 || code === 120) {
        effects.enter('taskListCheckValueChecked');
        effects.consume(code);
        effects.exit('taskListCheckValueChecked');
        return close
      }

      return nok(code)
    }
    /** @type {State} */

    function close(code) {
      if (code === 93) {
        effects.enter('taskListCheckMarker');
        effects.consume(code);
        effects.exit('taskListCheckMarker');
        effects.exit('taskListCheck');
        return effects.check(
          {
            tokenize: spaceThenNonSpace
          },
          ok,
          nok
        )
      }

      return nok(code)
    }
  }
  /** @type {Tokenizer} */

  function spaceThenNonSpace(effects, ok, nok) {
    const self = this;
    return factorySpace(effects, after, 'whitespace')
    /** @type {State} */

    function after(code) {
      const tail = self.events[self.events.length - 1];
      return (
        // We either found spaces…
        ((tail && tail[1].type === 'whitespace') || // …or it was followed by a line ending, in which case, there has to be
          // non-whitespace after that line ending, because otherwise we’d get an
          // EOF as the content is closed with blank lines.
          markdownLineEnding(code)) &&
          code !== null
          ? ok(code)
          : nok(code)
      )
    }
  }

  /**
   * @typedef {import('micromark-util-types').Extension} Extension
   * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
   * @typedef {import('micromark-extension-gfm-strikethrough').Options} Options
   * @typedef {import('micromark-extension-gfm-footnote').HtmlOptions} HtmlOptions
   */

  /**
   * Support GFM or markdown on github.com.
   *
   * @param {Options} [options]
   * @returns {Extension}
   */
  function gfm(options) {
    return combineExtensions([
      gfmAutolinkLiteral,
      gfmFootnote(),
      gfmStrikethrough(options),
      gfmTable,
      gfmTaskListItem
    ])
  }

  /**
   * Count how often a character (or substring) is used in a string.
   *
   * @param {string} value
   *   Value to search in.
   * @param {string} character
   *   Character (or substring) to look for.
   * @return {number}
   *   Number of times `character` occurred in `value`.
   */
  function ccount(value, character) {
    const source = String(value);

    if (typeof character !== 'string') {
      throw new TypeError('Expected character')
    }

    let count = 0;
    let index = source.indexOf(character);

    while (index !== -1) {
      count++;
      index = source.indexOf(character, index + character.length);
    }

    return count
  }

  function escapeStringRegexp(string) {
  	if (typeof string !== 'string') {
  		throw new TypeError('Expected a string');
  	}

  	// Escape characters with special meaning either inside or outside character sets.
  	// Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
  	return string
  		.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
  		.replace(/-/g, '\\x2d');
  }

  /**
   * @typedef Options
   *   Configuration (optional).
   * @property {Test} [ignore]
   *   `unist-util-is` test used to assert parents
   *
   * @typedef {import('mdast').Root} Root
   * @typedef {import('mdast').Content} Content
   * @typedef {import('mdast').PhrasingContent} PhrasingContent
   * @typedef {import('mdast').Text} Text
   * @typedef {Content|Root} Node
   * @typedef {Exclude<Extract<Node, import('mdast').Parent>, Root>} Parent
   *
   * @typedef {import('unist-util-visit-parents').Test} Test
   * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
   *
   * @typedef RegExpMatchObject
   * @property {number} index
   * @property {string} input
   * @property {[Root, ...Array<Parent>, Text]} stack
   *
   * @typedef {string|RegExp} Find
   * @typedef {string|ReplaceFunction} Replace
   *
   * @typedef {[Find, Replace]} FindAndReplaceTuple
   * @typedef {Record<string, Replace>} FindAndReplaceSchema
   * @typedef {Array<FindAndReplaceTuple>} FindAndReplaceList
   *
   * @typedef {[RegExp, ReplaceFunction]} Pair
   * @typedef {Array<Pair>} Pairs
   */

  const own$1 = {}.hasOwnProperty;

  /**
   * @param tree mdast tree
   * @param find Value to find and remove. When `string`, escaped and made into a global `RegExp`
   * @param [replace] Value to insert.
   *   * When `string`, turned into a Text node.
   *   * When `Function`, called with the results of calling `RegExp.exec` as
   *     arguments, in which case it can return a single or a list of `Node`,
   *     a `string` (which is wrapped in a `Text` node), or `false` to not replace
   * @param [options] Configuration.
   */
  const findAndReplace =
    /**
     * @type {(
     *   ((tree: Node, find: Find, replace?: Replace, options?: Options) => Node) &
     *   ((tree: Node, schema: FindAndReplaceSchema|FindAndReplaceList, options?: Options) => Node)
     * )}
     **/
    (
      /**
       * @param {Node} tree
       * @param {Find|FindAndReplaceSchema|FindAndReplaceList} find
       * @param {Replace|Options} [replace]
       * @param {Options} [options]
       */
      function (tree, find, replace, options) {
        /** @type {Options|undefined} */
        let settings;
        /** @type {FindAndReplaceSchema|FindAndReplaceList} */
        let schema;

        if (typeof find === 'string' || find instanceof RegExp) {
          // @ts-expect-error don’t expect options twice.
          schema = [[find, replace]];
          settings = options;
        } else {
          schema = find;
          // @ts-expect-error don’t expect replace twice.
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

        return tree

        /** @type {import('unist-util-visit-parents/complex-types').BuildVisitor<Root, 'text'>} */
        function visitor(node, parents) {
          let index = -1;
          /** @type {Parent|undefined} */
          let grandparent;

          while (++index < parents.length) {
            const parent = /** @type {Parent} */ (parents[index]);

            if (
              ignored(
                parent,
                // @ts-expect-error mdast vs. unist parent.
                grandparent ? grandparent.children.indexOf(parent) : undefined,
                grandparent
              )
            ) {
              return
            }

            grandparent = parent;
          }

          if (grandparent) {
            // @ts-expect-error: stack is fine.
            return handler(node, parents)
          }
        }

        /**
         * @param {Text} node
         * @param {[Root, ...Array<Parent>]} parents
         * @returns {VisitorResult}
         */
        function handler(node, parents) {
          const parent = parents[parents.length - 1];
          const find = pairs[pairIndex][0];
          const replace = pairs[pairIndex][1];
          let start = 0;
          // @ts-expect-error: TS is wrong, some of these children can be text.
          const index = parent.children.indexOf(node);
          let change = false;
          /** @type {Array<PhrasingContent>} */
          let nodes = [];
          /** @type {number|undefined} */
          let position;

          find.lastIndex = 0;

          let match = find.exec(node.value);

          while (match) {
            position = match.index;
            /** @type {RegExpMatchObject} */
            const matchObject = {
              index: match.index,
              input: match.input,
              stack: [...parents, node]
            };
            let value = replace(...match, matchObject);

            if (typeof value === 'string') {
              value = value.length > 0 ? {type: 'text', value} : undefined;
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
              change = true;
            }

            if (!find.global) {
              break
            }

            match = find.exec(node.value);
          }

          if (change) {
            if (start < node.value.length) {
              nodes.push({type: 'text', value: node.value.slice(start)});
            }

            parent.children.splice(index, 1, ...nodes);
          } else {
            nodes = [node];
          }

          return index + nodes.length
        }
      }
    );

  /**
   * @param {FindAndReplaceSchema|FindAndReplaceList} schema
   * @returns {Pairs}
   */
  function toPairs(schema) {
    /** @type {Pairs} */
    const result = [];

    if (typeof schema !== 'object') {
      throw new TypeError('Expected array or object as schema')
    }

    if (Array.isArray(schema)) {
      let index = -1;

      while (++index < schema.length) {
        result.push([
          toExpression(schema[index][0]),
          toFunction(schema[index][1])
        ]);
      }
    } else {
      /** @type {string} */
      let key;

      for (key in schema) {
        if (own$1.call(schema, key)) {
          result.push([toExpression(key), toFunction(schema[key])]);
        }
      }
    }

    return result
  }

  /**
   * @param {Find} find
   * @returns {RegExp}
   */
  function toExpression(find) {
    return typeof find === 'string' ? new RegExp(escapeStringRegexp(find), 'g') : find
  }

  /**
   * @param {Replace} replace
   * @returns {ReplaceFunction}
   */
  function toFunction(replace) {
    return typeof replace === 'function' ? replace : () => replace
  }

  /**
   * @typedef {import('mdast').Link} Link
   * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
   * @typedef {import('mdast-util-from-markdown').Transform} FromMarkdownTransform
   * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
   * @typedef {import('mdast-util-to-markdown/lib/types.js').Options} ToMarkdownExtension
   * @typedef {import('mdast-util-find-and-replace').ReplaceFunction} ReplaceFunction
   * @typedef {import('mdast-util-find-and-replace').RegExpMatchObject} RegExpMatchObject
   * @typedef {import('mdast-util-find-and-replace').PhrasingContent} PhrasingContent
   */

  const inConstruct = 'phrasing';
  const notInConstruct = ['autolink', 'link', 'image', 'label'];

  /** @type {FromMarkdownExtension} */
  const gfmAutolinkLiteralFromMarkdown = {
    transforms: [transformGfmAutolinkLiterals],
    enter: {
      literalAutolink: enterLiteralAutolink,
      literalAutolinkEmail: enterLiteralAutolinkValue,
      literalAutolinkHttp: enterLiteralAutolinkValue,
      literalAutolinkWww: enterLiteralAutolinkValue
    },
    exit: {
      literalAutolink: exitLiteralAutolink,
      literalAutolinkEmail: exitLiteralAutolinkEmail,
      literalAutolinkHttp: exitLiteralAutolinkHttp,
      literalAutolinkWww: exitLiteralAutolinkWww
    }
  };

  /** @type {ToMarkdownExtension} */
  const gfmAutolinkLiteralToMarkdown = {
    unsafe: [
      {
        character: '@',
        before: '[+\\-.\\w]',
        after: '[\\-.\\w]',
        inConstruct,
        notInConstruct
      },
      {
        character: '.',
        before: '[Ww]',
        after: '[\\-.\\w]',
        inConstruct,
        notInConstruct
      },
      {character: ':', before: '[ps]', after: '\\/', inConstruct, notInConstruct}
    ]
  };

  /** @type {FromMarkdownHandle} */
  function enterLiteralAutolink(token) {
    this.enter({type: 'link', title: null, url: '', children: []}, token);
  }

  /** @type {FromMarkdownHandle} */
  function enterLiteralAutolinkValue(token) {
    this.config.enter.autolinkProtocol.call(this, token);
  }

  /** @type {FromMarkdownHandle} */
  function exitLiteralAutolinkHttp(token) {
    this.config.exit.autolinkProtocol.call(this, token);
  }

  /** @type {FromMarkdownHandle} */
  function exitLiteralAutolinkWww(token) {
    this.config.exit.data.call(this, token);
    const node = /** @type {Link} */ (this.stack[this.stack.length - 1]);
    node.url = 'http://' + this.sliceSerialize(token);
  }

  /** @type {FromMarkdownHandle} */
  function exitLiteralAutolinkEmail(token) {
    this.config.exit.autolinkEmail.call(this, token);
  }

  /** @type {FromMarkdownHandle} */
  function exitLiteralAutolink(token) {
    this.exit(token);
  }

  /** @type {FromMarkdownTransform} */
  function transformGfmAutolinkLiterals(tree) {
    findAndReplace(
      tree,
      [
        [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl],
        [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, findEmail]
      ],
      {ignore: ['link', 'linkReference']}
    );
  }

  /**
   * @type {ReplaceFunction}
   * @param {string} _
   * @param {string} protocol
   * @param {string} domain
   * @param {string} path
   * @param {RegExpMatchObject} match
   */
  // eslint-disable-next-line max-params
  function findUrl(_, protocol, domain, path, match) {
    let prefix = '';

    // Not an expected previous character.
    if (!previous$1(match)) {
      return false
    }

    // Treat `www` as part of the domain.
    if (/^w/i.test(protocol)) {
      domain = protocol + domain;
      protocol = '';
      prefix = 'http://';
    }

    if (!isCorrectDomain(domain)) {
      return false
    }

    const parts = splitUrl(domain + path);

    if (!parts[0]) return false

    /** @type {PhrasingContent} */
    const result = {
      type: 'link',
      title: null,
      url: prefix + protocol + parts[0],
      children: [{type: 'text', value: protocol + parts[0]}]
    };

    if (parts[1]) {
      return [result, {type: 'text', value: parts[1]}]
    }

    return result
  }

  /**
   * @type {ReplaceFunction}
   * @param {string} _
   * @param {string} atext
   * @param {string} label
   * @param {RegExpMatchObject} match
   */
  function findEmail(_, atext, label, match) {
    if (
      // Not an expected previous character.
      !previous$1(match, true) ||
      // Label ends in not allowed character.
      /[_-\d]$/.test(label)
    ) {
      return false
    }

    return {
      type: 'link',
      title: null,
      url: 'mailto:' + atext + '@' + label,
      children: [{type: 'text', value: atext + '@' + label}]
    }
  }

  /**
   * @param {string} domain
   * @returns {boolean}
   */
  function isCorrectDomain(domain) {
    const parts = domain.split('.');

    if (
      parts.length < 2 ||
      (parts[parts.length - 1] &&
        (/_/.test(parts[parts.length - 1]) ||
          !/[a-zA-Z\d]/.test(parts[parts.length - 1]))) ||
      (parts[parts.length - 2] &&
        (/_/.test(parts[parts.length - 2]) ||
          !/[a-zA-Z\d]/.test(parts[parts.length - 2])))
    ) {
      return false
    }

    return true
  }

  /**
   * @param {string} url
   * @returns {[string, string|undefined]}
   */
  function splitUrl(url) {
    const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url);
    /** @type {number} */
    let closingParenIndex;
    /** @type {number} */
    let openingParens;
    /** @type {number} */
    let closingParens;
    /** @type {string|undefined} */
    let trail;

    if (trailExec) {
      url = url.slice(0, trailExec.index);
      trail = trailExec[0];
      closingParenIndex = trail.indexOf(')');
      openingParens = ccount(url, '(');
      closingParens = ccount(url, ')');

      while (closingParenIndex !== -1 && openingParens > closingParens) {
        url += trail.slice(0, closingParenIndex + 1);
        trail = trail.slice(closingParenIndex + 1);
        closingParenIndex = trail.indexOf(')');
        closingParens++;
      }
    }

    return [url, trail]
  }

  /**
   * @param {RegExpMatchObject} match
   * @param {boolean} [email=false]
   * @returns {boolean}
   */
  function previous$1(match, email) {
    const code = match.input.charCodeAt(match.index - 1);

    return (
      (match.index === 0 ||
        unicodeWhitespace(code) ||
        unicodePunctuation(code)) &&
      (!email || code !== 47)
    )
  }

  /**
   * @typedef {import('mdast').Association} Association
   */

  /**
   * The `label` of an association is the string value: character escapes and
   * references work, and casing is intact.
   * The `identifier` is used to match one association to another: controversially,
   * character escapes and references don’t work in this matching: `&copy;` does
   * not match `©`, and `\+` does not match `+`.
   * But casing is ignored (and whitespace) is trimmed and collapsed: ` A\nb`
   * matches `a b`.
   * So, we do prefer the label when figuring out how we’re going to serialize:
   * it has whitespace, casing, and we can ignore most useless character escapes
   * and all character references.
   *
   * @param {Association} node
   * @returns {string}
   */
  function association(node) {
    if (node.label || !node.identifier) {
      return node.label || ''
    }

    return decodeString(node.identifier)
  }

  /**
   * @callback Map
   * @param {string} value
   * @param {number} line
   * @param {boolean} blank
   * @returns {string}
   */

  const eol = /\r?\n|\r/g;

  /**
   * @param {string} value
   * @param {Map} map
   * @returns {string}
   */
  function indentLines(value, map) {
    /** @type {Array<string>} */
    const result = [];
    let start = 0;
    let line = 0;
    /** @type {RegExpExecArray|null} */
    let match;

    while ((match = eol.exec(value))) {
      one(value.slice(start, match.index));
      result.push(match[0]);
      start = match.index + match[0].length;
      line++;
    }

    one(value.slice(start));

    return result.join('')

    /**
     * @param {string} value
     */
    function one(value) {
      result.push(map(value, line, !value));
    }
  }

  /**
   * @typedef {import('../types.js').Unsafe} Unsafe
   */

  /**
   * @param {Unsafe} pattern
   * @returns {RegExp}
   */
  function patternCompile(pattern) {
    if (!pattern._compiled) {
      const before =
        (pattern.atBreak ? '[\\r\\n][\\t ]*' : '') +
        (pattern.before ? '(?:' + pattern.before + ')' : '');

      pattern._compiled = new RegExp(
        (before ? '(' + before + ')' : '') +
          (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? '\\' : '') +
          pattern.character +
          (pattern.after ? '(?:' + pattern.after + ')' : ''),
        'g'
      );
    }

    return pattern._compiled
  }

  /**
   * @typedef {import('../types.js').Unsafe} Unsafe
   */

  /**
   * @param {Array<string>} stack
   * @param {Unsafe} pattern
   * @returns {boolean}
   */
  function patternInScope(stack, pattern) {
    return (
      listInScope(stack, pattern.inConstruct, true) &&
      !listInScope(stack, pattern.notInConstruct, false)
    )
  }

  /**
   * @param {Array<string>} stack
   * @param {Unsafe['inConstruct']} list
   * @param {boolean} none
   * @returns {boolean}
   */
  function listInScope(stack, list, none) {
    if (!list) {
      return none
    }

    if (typeof list === 'string') {
      list = [list];
    }

    let index = -1;

    while (++index < list.length) {
      if (stack.includes(list[index])) {
        return true
      }
    }

    return false
  }

  /**
   * @typedef {import('../types.js').Context} Context
   * @typedef {import('../types.js').SafeOptions} SafeOptions
   */

  /**
   * @param {Context} context
   * @param {string|null|undefined} input
   * @param {SafeOptions & {encode?: Array<string>}} config
   * @returns {string}
   */
  function safe(context, input, config) {
    const value = (config.before || '') + (input || '') + (config.after || '');
    /** @type {Array<number>} */
    const positions = [];
    /** @type {Array<string>} */
    const result = [];
    /** @type {Record<number, {before: boolean, after: boolean}>} */
    const infos = {};
    let index = -1;

    while (++index < context.unsafe.length) {
      const pattern = context.unsafe[index];

      if (!patternInScope(context.stack, pattern)) {
        continue
      }

      const expression = patternCompile(pattern);
      /** @type {RegExpExecArray|null} */
      let match;

      while ((match = expression.exec(value))) {
        const before = 'before' in pattern || Boolean(pattern.atBreak);
        const after = 'after' in pattern;
        const position = match.index + (before ? match[1].length : 0);

        if (positions.includes(position)) {
          if (infos[position].before && !before) {
            infos[position].before = false;
          }

          if (infos[position].after && !after) {
            infos[position].after = false;
          }
        } else {
          positions.push(position);
          infos[position] = {before, after};
        }
      }
    }

    positions.sort(numerical);

    let start = config.before ? config.before.length : 0;
    const end = value.length - (config.after ? config.after.length : 0);
    index = -1;

    while (++index < positions.length) {
      const position = positions[index];

      // Character before or after matched:
      if (position < start || position >= end) {
        continue
      }

      // If this character is supposed to be escaped because it has a condition on
      // the next character, and the next character is definitly being escaped,
      // then skip this escape.
      if (
        (position + 1 < end &&
          positions[index + 1] === position + 1 &&
          infos[position].after &&
          !infos[position + 1].before &&
          !infos[position + 1].after) ||
        (positions[index - 1] === position - 1 &&
          infos[position].before &&
          !infos[position - 1].before &&
          !infos[position - 1].after)
      ) {
        continue
      }

      if (start !== position) {
        // If we have to use a character reference, an ampersand would be more
        // correct, but as backslashes only care about punctuation, either will
        // do the trick
        result.push(escapeBackslashes(value.slice(start, position), '\\'));
      }

      start = position;

      if (
        /[!-/:-@[-`{-~]/.test(value.charAt(position)) &&
        (!config.encode || !config.encode.includes(value.charAt(position)))
      ) {
        // Character escape.
        result.push('\\');
      } else {
        // Character reference.
        result.push(
          '&#x' + value.charCodeAt(position).toString(16).toUpperCase() + ';'
        );
        start++;
      }
    }

    result.push(escapeBackslashes(value.slice(start, end), config.after));

    return result.join('')
  }

  /**
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  function numerical(a, b) {
    return a - b
  }

  /**
   * @param {string} value
   * @param {string} after
   * @returns {string}
   */
  function escapeBackslashes(value, after) {
    const expression = /\\(?=[!-/:-@[-`{-~])/g;
    /** @type {Array<number>} */
    const positions = [];
    /** @type {Array<string>} */
    const results = [];
    const whole = value + after;
    let index = -1;
    let start = 0;
    /** @type {RegExpExecArray|null} */
    let match;

    while ((match = expression.exec(whole))) {
      positions.push(match.index);
    }

    while (++index < positions.length) {
      if (start !== positions[index]) {
        results.push(value.slice(start, positions[index]));
      }

      results.push('\\');
      start = positions[index];
    }

    results.push(value.slice(start));

    return results.join('')
  }

  /**
   * @typedef {import('mdast').FootnoteReference} FootnoteReference
   * @typedef {import('mdast').FootnoteDefinition} FootnoteDefinition
   * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
   * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
   * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
   * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle
   * @typedef {import('mdast-util-to-markdown').Map} Map
   */

  /**
   * @returns {FromMarkdownExtension}
   */
  function gfmFootnoteFromMarkdown() {
    return {
      enter: {
        gfmFootnoteDefinition: enterFootnoteDefinition,
        gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
        gfmFootnoteCall: enterFootnoteCall,
        gfmFootnoteCallString: enterFootnoteCallString
      },
      exit: {
        gfmFootnoteDefinition: exitFootnoteDefinition,
        gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
        gfmFootnoteCall: exitFootnoteCall,
        gfmFootnoteCallString: exitFootnoteCallString
      }
    }

    /** @type {FromMarkdownHandle} */
    function enterFootnoteDefinition(token) {
      this.enter(
        {type: 'footnoteDefinition', identifier: '', label: '', children: []},
        token
      );
    }

    /** @type {FromMarkdownHandle} */
    function enterFootnoteDefinitionLabelString() {
      this.buffer();
    }

    /** @type {FromMarkdownHandle} */
    function exitFootnoteDefinitionLabelString(token) {
      const label = this.resume();
      const node = /** @type {FootnoteDefinition} */ (
        this.stack[this.stack.length - 1]
      );
      node.label = label;
      node.identifier = normalizeIdentifier(
        this.sliceSerialize(token)
      ).toLowerCase();
    }

    /** @type {FromMarkdownHandle} */
    function exitFootnoteDefinition(token) {
      this.exit(token);
    }

    /** @type {FromMarkdownHandle} */
    function enterFootnoteCall(token) {
      this.enter({type: 'footnoteReference', identifier: '', label: ''}, token);
    }

    /** @type {FromMarkdownHandle} */
    function enterFootnoteCallString() {
      this.buffer();
    }

    /** @type {FromMarkdownHandle} */
    function exitFootnoteCallString(token) {
      const label = this.resume();
      const node = /** @type {FootnoteDefinition} */ (
        this.stack[this.stack.length - 1]
      );
      node.label = label;
      node.identifier = normalizeIdentifier(
        this.sliceSerialize(token)
      ).toLowerCase();
    }

    /** @type {FromMarkdownHandle} */
    function exitFootnoteCall(token) {
      this.exit(token);
    }
  }

  /**
   * @returns {ToMarkdownExtension}
   */
  function gfmFootnoteToMarkdown() {
    footnoteReference.peek = footnoteReferencePeek;

    return {
      // This is on by default already.
      unsafe: [{character: '[', inConstruct: ['phrasing', 'label', 'reference']}],
      handlers: {footnoteDefinition, footnoteReference}
    }

    /**
     * @type {ToMarkdownHandle}
     * @param {FootnoteReference} node
     */
    function footnoteReference(node, _, context, safeOptions) {
      const tracker = track(safeOptions);
      let value = tracker.move('[^');
      const exit = context.enter('footnoteReference');
      const subexit = context.enter('reference');
      value += tracker.move(
        safe(context, association(node), {
          ...tracker.current(),
          before: value,
          after: ']'
        })
      );
      subexit();
      exit();
      value += tracker.move(']');
      return value
    }

    /** @type {ToMarkdownHandle} */
    function footnoteReferencePeek() {
      return '['
    }

    /**
     * @type {ToMarkdownHandle}
     * @param {FootnoteDefinition} node
     */
    function footnoteDefinition(node, _, context, safeOptions) {
      const tracker = track(safeOptions);
      let value = tracker.move('[^');
      const exit = context.enter('footnoteDefinition');
      const subexit = context.enter('label');
      value += tracker.move(
        safe(context, association(node), {
          ...tracker.current(),
          before: value,
          after: ']'
        })
      );
      subexit();
      value += tracker.move(
        ']:' + (node.children && node.children.length > 0 ? ' ' : '')
      );
      tracker.shift(4);
      value += tracker.move(
        indentLines(containerFlow(node, context, tracker.current()), map)
      );
      exit();

      return value

      /** @type {Map} */
      function map(line, index, blank) {
        if (index) {
          return (blank ? '' : '    ') + line
        }

        return line
      }
    }
  }

  /**
   * @typedef {import('mdast').Delete} Delete
   * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
   * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
   * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
   * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle
   */

  /** @type {FromMarkdownExtension} */
  const gfmStrikethroughFromMarkdown = {
    canContainEols: ['delete'],
    enter: {strikethrough: enterStrikethrough},
    exit: {strikethrough: exitStrikethrough}
  };

  /**
   * List of constructs that occur in phrasing (paragraphs, headings), but cannot
   * contain strikethroughs. So they sort of cancel each other out.
   *
   * Note: keep in sync with: <https://github.com/syntax-tree/mdast-util-to-markdown/blob/c47743b/lib/unsafe.js#L11>
   */
  const constructsWithoutStrikethrough = [
    'autolink',
    'destinationLiteral',
    'destinationRaw',
    'reference',
    'titleQuote',
    'titleApostrophe'
  ];

  /** @type {ToMarkdownExtension} */
  const gfmStrikethroughToMarkdown = {
    unsafe: [
      {
        character: '~',
        inConstruct: 'phrasing',
        notInConstruct: constructsWithoutStrikethrough
      }
    ],
    handlers: {delete: handleDelete}
  };

  handleDelete.peek = peekDelete;

  /** @type {FromMarkdownHandle} */
  function enterStrikethrough(token) {
    this.enter({type: 'delete', children: []}, token);
  }

  /** @type {FromMarkdownHandle} */
  function exitStrikethrough(token) {
    this.exit(token);
  }

  /**
   * @type {ToMarkdownHandle}
   * @param {Delete} node
   */
  function handleDelete(node, _, context, safeOptions) {
    const tracker = track(safeOptions);
    const exit = context.enter('emphasis');
    let value = tracker.move('~~');
    value += containerPhrasing(node, context, {
      ...tracker.current(),
      before: value,
      after: '~'
    });
    value += tracker.move('~~');
    exit();
    return value
  }

  /** @type {ToMarkdownHandle} */
  function peekDelete() {
    return '~'
  }

  /**
   * @typedef {import('mdast').InlineCode} InlineCode
   * @typedef {import('../types.js').Handle} Handle
   */

  inlineCode.peek = inlineCodePeek;

  /**
   * @type {Handle}
   * @param {InlineCode} node
   */
  function inlineCode(node, _, context) {
    let value = node.value || '';
    let sequence = '`';
    let index = -1;

    // If there is a single grave accent on its own in the code, use a fence of
    // two.
    // If there are two in a row, use one.
    while (new RegExp('(^|[^`])' + sequence + '([^`]|$)').test(value)) {
      sequence += '`';
    }

    // If this is not just spaces or eols (tabs don’t count), and either the
    // first or last character are a space, eol, or tick, then pad with spaces.
    if (
      /[^ \r\n]/.test(value) &&
      ((/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value)) || /^`|`$/.test(value))
    ) {
      value = ' ' + value + ' ';
    }

    // We have a potential problem: certain characters after eols could result in
    // blocks being seen.
    // For example, if someone injected the string `'\n# b'`, then that would
    // result in an ATX heading.
    // We can’t escape characters in `inlineCode`, but because eols are
    // transformed to spaces when going from markdown to HTML anyway, we can swap
    // them out.
    while (++index < context.unsafe.length) {
      const pattern = context.unsafe[index];
      const expression = patternCompile(pattern);
      /** @type {RegExpExecArray|null} */
      let match;

      // Only look for `atBreak`s.
      // Btw: note that `atBreak` patterns will always start the regex at LF or
      // CR.
      if (!pattern.atBreak) continue

      while ((match = expression.exec(value))) {
        let position = match.index;

        // Support CRLF (patterns only look for one of the characters).
        if (
          value.charCodeAt(position) === 10 /* `\n` */ &&
          value.charCodeAt(position - 1) === 13 /* `\r` */
        ) {
          position--;
        }

        value = value.slice(0, position) + ' ' + value.slice(match.index + 1);
      }
    }

    return sequence + value + sequence
  }

  /**
   * @type {Handle}
   */
  function inlineCodePeek() {
    return '`'
  }

  /**
   * @typedef Options
   *   Configuration (optional).
   * @property {string|null|Array<string|null|undefined>} [align]
   *   One style for all columns, or styles for their respective columns.
   *   Each style is either `'l'` (left), `'r'` (right), or `'c'` (center).
   *   Other values are treated as `''`, which doesn’t place the colon in the
   *   alignment row but does align left.
   *   *Only the lowercased first character is used, so `Right` is fine.*
   * @property {boolean} [padding=true]
   *   Whether to add a space of padding between delimiters and cells.
   *
   *   When `true`, there is padding:
   *
   *   ```markdown
   *   | Alpha | B     |
   *   | ----- | ----- |
   *   | C     | Delta |
   *   ```
   *
   *   When `false`, there is no padding:
   *
   *   ```markdown
   *   |Alpha|B    |
   *   |-----|-----|
   *   |C    |Delta|
   *   ```
   * @property {boolean} [delimiterStart=true]
   *   Whether to begin each row with the delimiter.
   *
   *   > 👉 **Note**: please don’t use this: it could create fragile structures
   *   > that aren’t understandable to some markdown parsers.
   *
   *   When `true`, there are starting delimiters:
   *
   *   ```markdown
   *   | Alpha | B     |
   *   | ----- | ----- |
   *   | C     | Delta |
   *   ```
   *
   *   When `false`, there are no starting delimiters:
   *
   *   ```markdown
   *   Alpha | B     |
   *   ----- | ----- |
   *   C     | Delta |
   *   ```
   * @property {boolean} [delimiterEnd=true]
   *   Whether to end each row with the delimiter.
   *
   *   > 👉 **Note**: please don’t use this: it could create fragile structures
   *   > that aren’t understandable to some markdown parsers.
   *
   *   When `true`, there are ending delimiters:
   *
   *   ```markdown
   *   | Alpha | B     |
   *   | ----- | ----- |
   *   | C     | Delta |
   *   ```
   *
   *   When `false`, there are no ending delimiters:
   *
   *   ```markdown
   *   | Alpha | B
   *   | ----- | -----
   *   | C     | Delta
   *   ```
   * @property {boolean} [alignDelimiters=true]
   *   Whether to align the delimiters.
   *   By default, they are aligned:
   *
   *   ```markdown
   *   | Alpha | B     |
   *   | ----- | ----- |
   *   | C     | Delta |
   *   ```
   *
   *   Pass `false` to make them staggered:
   *
   *   ```markdown
   *   | Alpha | B |
   *   | - | - |
   *   | C | Delta |
   *   ```
   * @property {(value: string) => number} [stringLength]
   *   Function to detect the length of table cell content.
   *   This is used when aligning the delimiters (`|`) between table cells.
   *   Full-width characters and emoji mess up delimiter alignment when viewing
   *   the markdown source.
   *   To fix this, you can pass this function, which receives the cell content
   *   and returns its “visible” size.
   *   Note that what is and isn’t visible depends on where the text is displayed.
   *
   *   Without such a function, the following:
   *
   *   ```js
   *   markdownTable([
   *     ['Alpha', 'Bravo'],
   *     ['中文', 'Charlie'],
   *     ['👩‍❤️‍👩', 'Delta']
   *   ])
   *   ```
   *
   *   Yields:
   *
   *   ```markdown
   *   | Alpha | Bravo |
   *   | - | - |
   *   | 中文 | Charlie |
   *   | 👩‍❤️‍👩 | Delta |
   *   ```
   *
   *   With [`string-width`](https://github.com/sindresorhus/string-width):
   *
   *   ```js
   *   import stringWidth from 'string-width'
   *
   *   markdownTable(
   *     [
   *       ['Alpha', 'Bravo'],
   *       ['中文', 'Charlie'],
   *       ['👩‍❤️‍👩', 'Delta']
   *     ],
   *     {stringLength: stringWidth}
   *   )
   *   ```
   *
   *   Yields:
   *
   *   ```markdown
   *   | Alpha | Bravo   |
   *   | ----- | ------- |
   *   | 中文  | Charlie |
   *   | 👩‍❤️‍👩    | Delta   |
   *   ```
   */

  /**
   * @typedef {Options} MarkdownTableOptions
   * @todo
   *   Remove next major.
   */

  /**
   * Generate a markdown ([GFM](https://docs.github.com/en/github/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables)) table..
   *
   * @param {Array<Array<string|null|undefined>>} table
   *   Table data (matrix of strings).
   * @param {Options} [options]
   *   Configuration (optional).
   * @returns {string}
   */
  function markdownTable(table, options = {}) {
    const align = (options.align || []).concat();
    const stringLength = options.stringLength || defaultStringLength;
    /** @type {Array<number>} Character codes as symbols for alignment per column. */
    const alignments = [];
    /** @type {Array<Array<string>>} Cells per row. */
    const cellMatrix = [];
    /** @type {Array<Array<number>>} Sizes of each cell per row. */
    const sizeMatrix = [];
    /** @type {Array<number>} */
    const longestCellByColumn = [];
    let mostCellsPerRow = 0;
    let rowIndex = -1;

    // This is a superfluous loop if we don’t align delimiters, but otherwise we’d
    // do superfluous work when aligning, so optimize for aligning.
    while (++rowIndex < table.length) {
      /** @type {Array<string>} */
      const row = [];
      /** @type {Array<number>} */
      const sizes = [];
      let columnIndex = -1;

      if (table[rowIndex].length > mostCellsPerRow) {
        mostCellsPerRow = table[rowIndex].length;
      }

      while (++columnIndex < table[rowIndex].length) {
        const cell = serialize(table[rowIndex][columnIndex]);

        if (options.alignDelimiters !== false) {
          const size = stringLength(cell);
          sizes[columnIndex] = size;

          if (
            longestCellByColumn[columnIndex] === undefined ||
            size > longestCellByColumn[columnIndex]
          ) {
            longestCellByColumn[columnIndex] = size;
          }
        }

        row.push(cell);
      }

      cellMatrix[rowIndex] = row;
      sizeMatrix[rowIndex] = sizes;
    }

    // Figure out which alignments to use.
    let columnIndex = -1;

    if (typeof align === 'object' && 'length' in align) {
      while (++columnIndex < mostCellsPerRow) {
        alignments[columnIndex] = toAlignment(align[columnIndex]);
      }
    } else {
      const code = toAlignment(align);

      while (++columnIndex < mostCellsPerRow) {
        alignments[columnIndex] = code;
      }
    }

    // Inject the alignment row.
    columnIndex = -1;
    /** @type {Array<string>} */
    const row = [];
    /** @type {Array<number>} */
    const sizes = [];

    while (++columnIndex < mostCellsPerRow) {
      const code = alignments[columnIndex];
      let before = '';
      let after = '';

      if (code === 99 /* `c` */) {
        before = ':';
        after = ':';
      } else if (code === 108 /* `l` */) {
        before = ':';
      } else if (code === 114 /* `r` */) {
        after = ':';
      }

      // There *must* be at least one hyphen-minus in each alignment cell.
      let size =
        options.alignDelimiters === false
          ? 1
          : Math.max(
              1,
              longestCellByColumn[columnIndex] - before.length - after.length
            );

      const cell = before + '-'.repeat(size) + after;

      if (options.alignDelimiters !== false) {
        size = before.length + size + after.length;

        if (size > longestCellByColumn[columnIndex]) {
          longestCellByColumn[columnIndex] = size;
        }

        sizes[columnIndex] = size;
      }

      row[columnIndex] = cell;
    }

    // Inject the alignment row.
    cellMatrix.splice(1, 0, row);
    sizeMatrix.splice(1, 0, sizes);

    rowIndex = -1;
    /** @type {Array<string>} */
    const lines = [];

    while (++rowIndex < cellMatrix.length) {
      const row = cellMatrix[rowIndex];
      const sizes = sizeMatrix[rowIndex];
      columnIndex = -1;
      /** @type {Array<string>} */
      const line = [];

      while (++columnIndex < mostCellsPerRow) {
        const cell = row[columnIndex] || '';
        let before = '';
        let after = '';

        if (options.alignDelimiters !== false) {
          const size =
            longestCellByColumn[columnIndex] - (sizes[columnIndex] || 0);
          const code = alignments[columnIndex];

          if (code === 114 /* `r` */) {
            before = ' '.repeat(size);
          } else if (code === 99 /* `c` */) {
            if (size % 2) {
              before = ' '.repeat(size / 2 + 0.5);
              after = ' '.repeat(size / 2 - 0.5);
            } else {
              before = ' '.repeat(size / 2);
              after = before;
            }
          } else {
            after = ' '.repeat(size);
          }
        }

        if (options.delimiterStart !== false && !columnIndex) {
          line.push('|');
        }

        if (
          options.padding !== false &&
          // Don’t add the opening space if we’re not aligning and the cell is
          // empty: there will be a closing space.
          !(options.alignDelimiters === false && cell === '') &&
          (options.delimiterStart !== false || columnIndex)
        ) {
          line.push(' ');
        }

        if (options.alignDelimiters !== false) {
          line.push(before);
        }

        line.push(cell);

        if (options.alignDelimiters !== false) {
          line.push(after);
        }

        if (options.padding !== false) {
          line.push(' ');
        }

        if (
          options.delimiterEnd !== false ||
          columnIndex !== mostCellsPerRow - 1
        ) {
          line.push('|');
        }
      }

      lines.push(
        options.delimiterEnd === false
          ? line.join('').replace(/ +$/, '')
          : line.join('')
      );
    }

    return lines.join('\n')
  }

  /**
   * @param {string|null|undefined} [value]
   * @returns {string}
   */
  function serialize(value) {
    return value === null || value === undefined ? '' : String(value)
  }

  /**
   * @param {string} value
   * @returns {number}
   */
  function defaultStringLength(value) {
    return value.length
  }

  /**
   * @param {string|null|undefined} value
   * @returns {number}
   */
  function toAlignment(value) {
    const code = typeof value === 'string' ? value.codePointAt(0) : 0;

    return code === 67 /* `C` */ || code === 99 /* `c` */
      ? 99 /* `c` */
      : code === 76 /* `L` */ || code === 108 /* `l` */
      ? 108 /* `l` */
      : code === 82 /* `R` */ || code === 114 /* `r` */
      ? 114 /* `r` */
      : 0
  }

  /**
   * @typedef {import('mdast').AlignType} AlignType
   * @typedef {import('mdast').Table} Table
   * @typedef {import('mdast').TableRow} TableRow
   * @typedef {import('mdast').TableCell} TableCell
   * @typedef {import('mdast').InlineCode} InlineCode
   * @typedef {import('markdown-table').MarkdownTableOptions} MarkdownTableOptions
   * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
   * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
   * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
   * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle
   * @typedef {import('mdast-util-to-markdown').Context} ToMarkdownContext
   * @typedef {import('mdast-util-to-markdown').SafeOptions} SafeOptions
   *
   * @typedef Options
   * @property {boolean} [tableCellPadding=true]
   * @property {boolean} [tablePipeAlign=true]
   * @property {MarkdownTableOptions['stringLength']} [stringLength]
   */

  /** @type {FromMarkdownExtension} */
  const gfmTableFromMarkdown = {
    enter: {
      table: enterTable,
      tableData: enterCell,
      tableHeader: enterCell,
      tableRow: enterRow
    },
    exit: {
      codeText: exitCodeText,
      table: exitTable,
      tableData: exit,
      tableHeader: exit,
      tableRow: exit
    }
  };

  /** @type {FromMarkdownHandle} */
  function enterTable(token) {
    /** @type {Array<'left'|'right'|'center'|'none'>} */
    // @ts-expect-error: `align` is custom.
    const align = token._align;
    this.enter(
      {
        type: 'table',
        align: align.map((d) => (d === 'none' ? null : d)),
        children: []
      },
      token
    );
    this.setData('inTable', true);
  }

  /** @type {FromMarkdownHandle} */
  function exitTable(token) {
    this.exit(token);
    this.setData('inTable');
  }

  /** @type {FromMarkdownHandle} */
  function enterRow(token) {
    this.enter({type: 'tableRow', children: []}, token);
  }

  /** @type {FromMarkdownHandle} */
  function exit(token) {
    this.exit(token);
  }

  /** @type {FromMarkdownHandle} */
  function enterCell(token) {
    this.enter({type: 'tableCell', children: []}, token);
  }

  // Overwrite the default code text data handler to unescape escaped pipes when
  // they are in tables.
  /** @type {FromMarkdownHandle} */
  function exitCodeText(token) {
    let value = this.resume();

    if (this.getData('inTable')) {
      value = value.replace(/\\([\\|])/g, replace);
    }

    const node = /** @type {InlineCode} */ (this.stack[this.stack.length - 1]);
    node.value = value;
    this.exit(token);
  }

  /**
   * @param {string} $0
   * @param {string} $1
   * @returns {string}
   */
  function replace($0, $1) {
    // Pipes work, backslashes don’t (but can’t escape pipes).
    return $1 === '|' ? $1 : $0
  }

  /**
   * @param {Options} [options]
   * @returns {ToMarkdownExtension}
   */
  function gfmTableToMarkdown(options) {
    const settings = options || {};
    const padding = settings.tableCellPadding;
    const alignDelimiters = settings.tablePipeAlign;
    const stringLength = settings.stringLength;
    const around = padding ? ' ' : '|';

    return {
      unsafe: [
        {character: '\r', inConstruct: 'tableCell'},
        {character: '\n', inConstruct: 'tableCell'},
        // A pipe, when followed by a tab or space (padding), or a dash or colon
        // (unpadded delimiter row), could result in a table.
        {atBreak: true, character: '|', after: '[\t :-]'},
        // A pipe in a cell must be encoded.
        {character: '|', inConstruct: 'tableCell'},
        // A colon must be followed by a dash, in which case it could start a
        // delimiter row.
        {atBreak: true, character: ':', after: '-'},
        // A delimiter row can also start with a dash, when followed by more
        // dashes, a colon, or a pipe.
        // This is a stricter version than the built in check for lists, thematic
        // breaks, and setex heading underlines though:
        // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
        {atBreak: true, character: '-', after: '[:|-]'}
      ],
      handlers: {
        table: handleTable,
        tableRow: handleTableRow,
        tableCell: handleTableCell,
        inlineCode: inlineCodeWithTable
      }
    }

    /**
     * @type {ToMarkdownHandle}
     * @param {Table} node
     */
    function handleTable(node, _, context, safeOptions) {
      return serializeData(
        handleTableAsData(node, context, safeOptions),
        // @ts-expect-error: fixed in `markdown-table@3.0.1`.
        node.align
      )
    }

    /**
     * This function isn’t really used normally, because we handle rows at the
     * table level.
     * But, if someone passes in a table row, this ensures we make somewhat sense.
     *
     * @type {ToMarkdownHandle}
     * @param {TableRow} node
     */
    function handleTableRow(node, _, context, safeOptions) {
      const row = handleTableRowAsData(node, context, safeOptions);
      // `markdown-table` will always add an align row
      const value = serializeData([row]);
      return value.slice(0, value.indexOf('\n'))
    }

    /**
     * @type {ToMarkdownHandle}
     * @param {TableCell} node
     */
    function handleTableCell(node, _, context, safeOptions) {
      const exit = context.enter('tableCell');
      const subexit = context.enter('phrasing');
      const value = containerPhrasing(node, context, {
        ...safeOptions,
        before: around,
        after: around
      });
      subexit();
      exit();
      return value
    }

    /**
     * @param {Array<Array<string>>} matrix
     * @param {Array<string>} [align]
     */
    function serializeData(matrix, align) {
      return markdownTable(matrix, {
        align,
        alignDelimiters,
        padding,
        stringLength
      })
    }

    /**
     * @param {Table} node
     * @param {ToMarkdownContext} context
     * @param {SafeOptions} safeOptions
     */
    function handleTableAsData(node, context, safeOptions) {
      const children = node.children;
      let index = -1;
      /** @type {Array<Array<string>>} */
      const result = [];
      const subexit = context.enter('table');

      while (++index < children.length) {
        result[index] = handleTableRowAsData(
          children[index],
          context,
          safeOptions
        );
      }

      subexit();

      return result
    }

    /**
     * @param {TableRow} node
     * @param {ToMarkdownContext} context
     * @param {SafeOptions} safeOptions
     */
    function handleTableRowAsData(node, context, safeOptions) {
      const children = node.children;
      let index = -1;
      /** @type {Array<string>} */
      const result = [];
      const subexit = context.enter('tableRow');

      while (++index < children.length) {
        // Note: the positional info as used here is incorrect.
        // Making it correct would be impossible due to aligning cells?
        // And it would need copy/pasting `markdown-table` into this project.
        result[index] = handleTableCell(
          children[index],
          node,
          context,
          safeOptions
        );
      }

      subexit();

      return result
    }

    /**
     * @type {ToMarkdownHandle}
     * @param {InlineCode} node
     */
    function inlineCodeWithTable(node, parent, context) {
      let value = inlineCode(node, parent, context);

      if (context.stack.includes('tableCell')) {
        value = value.replace(/\|/g, '\\$&');
      }

      return value
    }
  }

  /**
   * @typedef {import('../types.js').Context} Context
   * @typedef {import('../types.js').Options} Options
   */

  /**
   * @param {Context} context
   * @returns {Exclude<Options['bullet'], undefined>}
   */
  function checkBullet(context) {
    const marker = context.options.bullet || '*';

    if (marker !== '*' && marker !== '+' && marker !== '-') {
      throw new Error(
        'Cannot serialize items with `' +
          marker +
          '` for `options.bullet`, expected `*`, `+`, or `-`'
      )
    }

    return marker
  }

  /**
   * @typedef {import('../types.js').Context} Context
   * @typedef {import('../types.js').Options} Options
   */

  /**
   * @param {Context} context
   * @returns {Exclude<Options['listItemIndent'], undefined>}
   */
  function checkListItemIndent(context) {
    const style = context.options.listItemIndent || 'tab';

    // To do: remove in a major.
    // @ts-expect-error: deprecated.
    if (style === 1 || style === '1') {
      return 'one'
    }

    if (style !== 'tab' && style !== 'one' && style !== 'mixed') {
      throw new Error(
        'Cannot serialize items with `' +
          style +
          '` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`'
      )
    }

    return style
  }

  /**
   * @typedef {import('mdast').ListItem} ListItem
   * @typedef {import('mdast').List} List
   * @typedef {import('../util/indent-lines.js').Map} Map
   * @typedef {import('../types.js').Options} Options
   * @typedef {import('../types.js').Handle} Handle
   */

  /**
   * @type {Handle}
   * @param {ListItem} node
   */
  function listItem(node, parent, context, safeOptions) {
    const listItemIndent = checkListItemIndent(context);
    let bullet = context.bulletCurrent || checkBullet(context);

    // Add the marker value for ordered lists.
    if (parent && parent.type === 'list' && parent.ordered) {
      bullet =
        (typeof parent.start === 'number' && parent.start > -1
          ? parent.start
          : 1) +
        (context.options.incrementListMarker === false
          ? 0
          : parent.children.indexOf(node)) +
        bullet;
    }

    let size = bullet.length + 1;

    if (
      listItemIndent === 'tab' ||
      (listItemIndent === 'mixed' &&
        ((parent && parent.type === 'list' && parent.spread) || node.spread))
    ) {
      size = Math.ceil(size / 4) * 4;
    }

    const tracker = track(safeOptions);
    tracker.move(bullet + ' '.repeat(size - bullet.length));
    tracker.shift(size);
    const exit = context.enter('listItem');
    const value = indentLines(
      containerFlow(node, context, tracker.current()),
      map
    );
    exit();

    return value

    /** @type {Map} */
    function map(line, index, blank) {
      if (index) {
        return (blank ? '' : ' '.repeat(size)) + line
      }

      return (blank ? bullet : bullet + ' '.repeat(size - bullet.length)) + line
    }
  }

  /**
   * @typedef {Extract<import('mdast').Root|import('mdast').Content, import('unist').Parent>} Parent
   * @typedef {import('mdast').ListItem} ListItem
   * @typedef {import('mdast').Paragraph} Paragraph
   * @typedef {import('mdast').BlockContent} BlockContent
   * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
   * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
   * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
   * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle
   */

  /** @type {FromMarkdownExtension} */
  const gfmTaskListItemFromMarkdown = {
    exit: {
      taskListCheckValueChecked: exitCheck,
      taskListCheckValueUnchecked: exitCheck,
      paragraph: exitParagraphWithTaskListItem
    }
  };

  /** @type {ToMarkdownExtension} */
  const gfmTaskListItemToMarkdown = {
    unsafe: [{atBreak: true, character: '-', after: '[:|-]'}],
    handlers: {listItem: listItemWithTaskListItem}
  };

  /** @type {FromMarkdownHandle} */
  function exitCheck(token) {
    const node = /** @type {ListItem} */ (this.stack[this.stack.length - 2]);
    // We’re always in a paragraph, in a list item.
    node.checked = token.type === 'taskListCheckValueChecked';
  }

  /** @type {FromMarkdownHandle} */
  function exitParagraphWithTaskListItem(token) {
    const parent = /** @type {Parent} */ (this.stack[this.stack.length - 2]);
    const node = /** @type {Paragraph} */ (this.stack[this.stack.length - 1]);
    const siblings = parent.children;
    const head = node.children[0];
    let index = -1;
    /** @type {Paragraph|undefined} */
    let firstParaghraph;

    if (
      parent &&
      parent.type === 'listItem' &&
      typeof parent.checked === 'boolean' &&
      head &&
      head.type === 'text'
    ) {
      while (++index < siblings.length) {
        const sibling = siblings[index];
        if (sibling.type === 'paragraph') {
          firstParaghraph = sibling;
          break
        }
      }

      if (firstParaghraph === node) {
        // Must start with a space or a tab.
        head.value = head.value.slice(1);

        if (head.value.length === 0) {
          node.children.shift();
        } else if (
          node.position &&
          head.position &&
          typeof head.position.start.offset === 'number'
        ) {
          head.position.start.column++;
          head.position.start.offset++;
          node.position.start = Object.assign({}, head.position.start);
        }
      }
    }

    this.exit(token);
  }

  /**
   * @type {ToMarkdownHandle}
   * @param {ListItem} node
   */
  function listItemWithTaskListItem(node, parent, context, safeOptions) {
    const head = node.children[0];
    const checkable =
      typeof node.checked === 'boolean' && head && head.type === 'paragraph';
    const checkbox = '[' + (node.checked ? 'x' : ' ') + '] ';
    const tracker = track(safeOptions);

    if (checkable) {
      tracker.move(checkbox);
    }

    let value = listItem(node, parent, context, {
      ...safeOptions,
      ...tracker.current()
    });

    if (checkable) {
      value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
    }

    return value

    /**
     * @param {string} $0
     * @returns {string}
     */
    function check($0) {
      return $0 + checkbox
    }
  }

  /**
   * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
   * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
   *
   * @typedef {import('mdast-util-gfm-table').Options} Options
   */

  /**
   * @returns {Array<FromMarkdownExtension>}
   */
  function gfmFromMarkdown() {
    return [
      gfmAutolinkLiteralFromMarkdown,
      gfmFootnoteFromMarkdown(),
      gfmStrikethroughFromMarkdown,
      gfmTableFromMarkdown,
      gfmTaskListItemFromMarkdown
    ]
  }

  /**
   * @param {Options} [options]
   * @returns {ToMarkdownExtension}
   */
  function gfmToMarkdown(options) {
    return {
      extensions: [
        gfmAutolinkLiteralToMarkdown,
        gfmFootnoteToMarkdown(),
        gfmStrikethroughToMarkdown,
        gfmTableToMarkdown(options),
        gfmTaskListItemToMarkdown
      ]
    }
  }

  /**
   * @typedef {import('mdast').Root} Root
   * @typedef {import('micromark-extension-gfm').Options & import('mdast-util-gfm').Options} Options
   */

  /**
   * Plugin to support GFM (autolink literals, footnotes, strikethrough, tables, tasklists).
   *
   * @type {import('unified').Plugin<[Options?]|void[], Root>}
   */
  function remarkGfm(options = {}) {
    const data = this.data();

    add('micromarkExtensions', gfm(options));
    add('fromMarkdownExtensions', gfmFromMarkdown());
    add('toMarkdownExtensions', gfmToMarkdown(options));

    /**
     * @param {string} field
     * @param {unknown} value
     */
    function add(field, value) {
      const list = /** @type {unknown[]} */ (
        // Other extensions
        /* c8 ignore next 2 */
        data[field] ? data[field] : (data[field] = [])
      );

      list.push(value);
    }
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').State} State
   */

  /** @type {Construct} */
  const mathFlow = {
    tokenize: tokenizeMathFenced,
    concrete: true
  };
  /** @type {Construct} */

  const nonLazyLine = {
    tokenize: tokenizeNonLazyLine,
    partial: true
  };
  /** @type {Tokenizer} */

  function tokenizeMathFenced(effects, ok, nok) {
    const self = this;
    const tail = self.events[self.events.length - 1];
    const initialSize =
      tail && tail[1].type === 'linePrefix'
        ? tail[2].sliceSerialize(tail[1], true).length
        : 0;
    let sizeOpen = 0;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('mathFlow');
      effects.enter('mathFlowFence');
      effects.enter('mathFlowFenceSequence');
      return sequenceOpen(code)
    }
    /** @type {State} */

    function sequenceOpen(code) {
      if (code === 36) {
        effects.consume(code);
        sizeOpen++;
        return sequenceOpen
      }

      effects.exit('mathFlowFenceSequence');
      return sizeOpen < 2
        ? nok(code)
        : factorySpace(effects, metaOpen, 'whitespace')(code)
    }
    /** @type {State} */

    function metaOpen(code) {
      if (code === null || markdownLineEnding(code)) {
        return openAfter(code)
      }

      effects.enter('mathFlowFenceMeta');
      effects.enter('chunkString', {
        contentType: 'string'
      });
      return meta(code)
    }
    /** @type {State} */

    function meta(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit('chunkString');
        effects.exit('mathFlowFenceMeta');
        return openAfter(code)
      }

      if (code === 36) return nok(code)
      effects.consume(code);
      return meta
    }
    /** @type {State} */

    function openAfter(code) {
      effects.exit('mathFlowFence');
      return self.interrupt ? ok(code) : contentStart(code)
    }
    /** @type {State} */

    function contentStart(code) {
      if (code === null) {
        return after(code)
      }

      if (markdownLineEnding(code)) {
        return effects.attempt(
          nonLazyLine,
          effects.attempt(
            {
              tokenize: tokenizeClosingFence,
              partial: true
            },
            after,
            initialSize
              ? factorySpace(effects, contentStart, 'linePrefix', initialSize + 1)
              : contentStart
          ),
          after
        )(code)
      }

      effects.enter('mathFlowValue');
      return contentContinue(code)
    }
    /** @type {State} */

    function contentContinue(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit('mathFlowValue');
        return contentStart(code)
      }

      effects.consume(code);
      return contentContinue
    }
    /** @type {State} */

    function after(code) {
      effects.exit('mathFlow');
      return ok(code)
    }
    /** @type {Tokenizer} */

    function tokenizeClosingFence(effects, ok, nok) {
      let size = 0;
      return factorySpace(effects, closingPrefixAfter, 'linePrefix', 4)
      /** @type {State} */

      function closingPrefixAfter(code) {
        effects.enter('mathFlowFence');
        effects.enter('mathFlowFenceSequence');
        return closingSequence(code)
      }
      /** @type {State} */

      function closingSequence(code) {
        if (code === 36) {
          effects.consume(code);
          size++;
          return closingSequence
        }

        if (size < sizeOpen) return nok(code)
        effects.exit('mathFlowFenceSequence');
        return factorySpace(effects, closingSequenceEnd, 'whitespace')(code)
      }
      /** @type {State} */

      function closingSequenceEnd(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit('mathFlowFence');
          return ok(code)
        }

        return nok(code)
      }
    }
  }
  /** @type {Tokenizer} */

  function tokenizeNonLazyLine(effects, ok, nok) {
    const self = this;
    return start
    /** @type {State} */

    function start(code) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return lineStart
    }
    /** @type {State} */

    function lineStart(code) {
      return self.parser.lazy[self.now().line] ? nok(code) : ok(code)
    }
  }

  /**
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Resolver} Resolver
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').Previous} Previous
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('micromark-util-types').Token} Token
   *
   * @typedef Options
   * @property {boolean} [singleDollarTextMath=true]
   *   Whether to support math (text) with a single dollar (`boolean`, default:
   *   `true`).
   *   Single dollars work in Pandoc and many other places, but often interfere
   *   with “normal” dollars in text.
   */

  /**
   * @param {Options} [options]
   * @returns {Construct}
   */
  function mathText(options = {}) {
    let single = options.singleDollarTextMath;

    if (single === null || single === undefined) {
      single = true;
    }

    return {
      tokenize: tokenizeMathText,
      resolve: resolveMathText,
      previous
    }
    /** @type {Tokenizer} */

    function tokenizeMathText(effects, ok, nok) {
      let sizeOpen = 0;
      /** @type {number} */

      let size;
      /** @type {Token} */

      let token;
      return start
      /** @type {State} */

      function start(code) {
        effects.enter('mathText');
        effects.enter('mathTextSequence');
        return openingSequence(code)
      }
      /** @type {State} */

      function openingSequence(code) {
        if (code === 36) {
          effects.consume(code);
          sizeOpen++;
          return openingSequence
        }

        if (sizeOpen < 2 && !single) return nok(code)
        effects.exit('mathTextSequence');
        return gap(code)
      }
      /** @type {State} */

      function gap(code) {
        if (code === null) {
          return nok(code)
        } // Closing fence?
        // Could also be data.

        if (code === 36) {
          token = effects.enter('mathTextSequence');
          size = 0;
          return closingSequence(code)
        } // Tabs don’t work, and virtual spaces don’t make sense.

        if (code === 32) {
          effects.enter('space');
          effects.consume(code);
          effects.exit('space');
          return gap
        }

        if (markdownLineEnding(code)) {
          effects.enter('lineEnding');
          effects.consume(code);
          effects.exit('lineEnding');
          return gap
        } // Data.

        effects.enter('mathTextData');
        return data(code)
      } // In math.

      /** @type {State} */

      function data(code) {
        if (
          code === null ||
          code === 32 ||
          code === 36 ||
          markdownLineEnding(code)
        ) {
          effects.exit('mathTextData');
          return gap(code)
        }

        effects.consume(code);
        return data
      } // Closing fence.

      /** @type {State} */

      function closingSequence(code) {
        // More.
        if (code === 36) {
          effects.consume(code);
          size++;
          return closingSequence
        } // Done!

        if (size === sizeOpen) {
          effects.exit('mathTextSequence');
          effects.exit('mathText');
          return ok(code)
        } // More or less accents: mark as data.

        token.type = 'mathTextData';
        return data(code)
      }
    }
  }
  /** @type {Resolver} */

  function resolveMathText(events) {
    let tailExitIndex = events.length - 4;
    let headEnterIndex = 3;
    /** @type {number} */

    let index;
    /** @type {number|undefined} */

    let enter; // If we start and end with an EOL or a space.

    if (
      (events[headEnterIndex][1].type === 'lineEnding' ||
        events[headEnterIndex][1].type === 'space') &&
      (events[tailExitIndex][1].type === 'lineEnding' ||
        events[tailExitIndex][1].type === 'space')
    ) {
      index = headEnterIndex; // And we have data.

      while (++index < tailExitIndex) {
        if (events[index][1].type === 'mathTextData') {
          // Then we have padding.
          events[tailExitIndex][1].type = 'mathTextPadding';
          events[headEnterIndex][1].type = 'mathTextPadding';
          headEnterIndex += 2;
          tailExitIndex -= 2;
          break
        }
      }
    } // Merge adjacent spaces and data.

    index = headEnterIndex - 1;
    tailExitIndex++;

    while (++index <= tailExitIndex) {
      if (enter === undefined) {
        if (index !== tailExitIndex && events[index][1].type !== 'lineEnding') {
          enter = index;
        }
      } else if (
        index === tailExitIndex ||
        events[index][1].type === 'lineEnding'
      ) {
        events[enter][1].type = 'mathTextData';

        if (index !== enter + 2) {
          events[enter][1].end = events[index - 1][1].end;
          events.splice(enter + 2, index - enter - 2);
          tailExitIndex -= index - enter - 2;
          index = enter + 2;
        }

        enter = undefined;
      }
    }

    return events
  }
  /** @type {Previous} */

  function previous(code) {
    // If there is a previous code, there will always be a tail.
    return (
      code !== 36 ||
      this.events[this.events.length - 1][1].type === 'characterEscape'
    )
  }

  /**
   * @typedef {import('micromark-util-types').Extension} Extension
   * @typedef {import('./math-text').Options} Options
   */
  /**
   * @param {Options} [options]
   * @returns {Extension}
   */

  function math(options) {
    return {
      flow: {
        [36]: mathFlow
      },
      text: {
        [36]: mathText(options)
      }
    }
  }

  /**
   * Get the count of the longest repeating streak of `character` in `value`.
   *
   * @param {string} value
   *   Content to search in.
   * @param {string} character
   *   Single character to look for.
   * @returns {number}
   *   Count of most frequent adjacent `character`s in `value`.
   */
  function longestStreak(value, character) {
    const source = String(value);
    let index = source.indexOf(character);
    let expected = index;
    let count = 0;
    let max = 0;

    if (typeof character !== 'string' || character.length !== 1) {
      throw new Error('Expected character')
    }

    while (index !== -1) {
      if (index === expected) {
        if (++count > max) {
          max = count;
        }
      } else {
        count = 1;
      }

      expected = index + 1;
      index = source.indexOf(character, expected);
    }

    return max
  }

  /**
   * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
   * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
   * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
   * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle
   * @typedef {import('./complex-types').Math} Math
   * @typedef {import('./complex-types').InlineMath} InlineMath
   *
   * @typedef ToOptions
   * @property {boolean} [singleDollarTextMath=true]
   *   Whether to support math (text) with a single dollar (`boolean`, default:
   *   `true`).
   *   Single dollars work in Pandoc and many other places, but often interfere
   *   with “normal” dollars in text.
   */

  /**
   * @returns {FromMarkdownExtension}
   */
  function mathFromMarkdown() {
    return {
      enter: {
        mathFlow: enterMathFlow,
        mathFlowFenceMeta: enterMathFlowMeta,
        mathText: enterMathText
      },
      exit: {
        mathFlow: exitMathFlow,
        mathFlowFence: exitMathFlowFence,
        mathFlowFenceMeta: exitMathFlowMeta,
        mathFlowValue: exitMathData,
        mathText: exitMathText,
        mathTextData: exitMathData
      }
    }

    /** @type {FromMarkdownHandle} */
    function enterMathFlow(token) {
      this.enter(
        {
          type: 'math',
          meta: null,
          value: '',
          data: {
            hName: 'div',
            hProperties: {className: ['math', 'math-display']},
            hChildren: [{type: 'text', value: ''}]
          }
        },
        token
      );
    }

    /** @type {FromMarkdownHandle} */
    function enterMathFlowMeta() {
      this.buffer();
    }

    /** @type {FromMarkdownHandle} */
    function exitMathFlowMeta() {
      const data = this.resume();
      const node = /** @type {Math} */ (this.stack[this.stack.length - 1]);
      node.meta = data;
    }

    /** @type {FromMarkdownHandle} */
    function exitMathFlowFence() {
      // Exit if this is the closing fence.
      if (this.getData('mathFlowInside')) return
      this.buffer();
      this.setData('mathFlowInside', true);
    }

    /** @type {FromMarkdownHandle} */
    function exitMathFlow(token) {
      const data = this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '');
      const node = /** @type {Math} */ (this.exit(token));
      node.value = data;
      // @ts-expect-error: we defined it.
      node.data.hChildren[0].value = data;
      this.setData('mathFlowInside');
    }

    /** @type {FromMarkdownHandle} */
    function enterMathText(token) {
      this.enter(
        {
          type: 'inlineMath',
          value: '',
          data: {
            hName: 'span',
            hProperties: {className: ['math', 'math-inline']},
            hChildren: [{type: 'text', value: ''}]
          }
        },
        token
      );
      this.buffer();
    }

    /** @type {FromMarkdownHandle} */
    function exitMathText(token) {
      const data = this.resume();
      const node = /** @type {Math} */ (this.exit(token));
      node.value = data;
      // @ts-expect-error: we defined it.
      node.data.hChildren[0].value = data;
    }

    /** @type {FromMarkdownHandle} */
    function exitMathData(token) {
      this.config.enter.data.call(this, token);
      this.config.exit.data.call(this, token);
    }
  }

  /**
   * @param {ToOptions} [options]
   * @returns {ToMarkdownExtension}
   */
  function mathToMarkdown(options = {}) {
    let single = options.singleDollarTextMath;

    if (single === null || single === undefined) {
      single = true;
    }

    inlineMath.peek = inlineMathPeek;

    return {
      unsafe: [
        {character: '\r', inConstruct: ['mathFlowMeta']},
        {character: '\r', inConstruct: ['mathFlowMeta']},
        single
          ? {character: '$', inConstruct: ['mathFlowMeta', 'phrasing']}
          : {
              character: '$',
              after: '\\$',
              inConstruct: ['mathFlowMeta', 'phrasing']
            },
        {atBreak: true, character: '$', after: '\\$'}
      ],
      handlers: {math, inlineMath}
    }

    /**
     * @type {ToMarkdownHandle}
     * @param {Math} node
     */
    function math(node, _, context, safeOptions) {
      const raw = node.value || '';
      const sequence = '$'.repeat(Math.max(longestStreak(raw, '$') + 1, 2));
      const exit = context.enter('mathFlow');
      const tracker = track(safeOptions);
      let value = tracker.move(sequence);

      if (node.meta) {
        const subexit = context.enter('mathFlowMeta');
        value += tracker.move(
          safe(context, node.meta, {
            ...tracker.current(),
            before: value,
            after: ' ',
            encode: ['$']
          })
        );
        subexit();
      }

      value += tracker.move('\n');

      if (raw) {
        value += tracker.move(raw + '\n');
      }

      value += tracker.move(sequence);
      exit();
      return value
    }

    /**
     * @type {ToMarkdownHandle}
     * @param {InlineMath} node
     */
    function inlineMath(node) {
      const value = node.value || '';
      let size = 1;
      let pad = '';

      if (!single) size++;

      // If there is a single dollar sign on its own in the math, use a fence of
      // two.
      // If there are two in a row, use one.
      while (
        new RegExp('(^|[^$])' + '\\$'.repeat(size) + '([^$]|$)').test(value)
      ) {
        size++;
      }

      // If this is not just spaces or eols (tabs don’t count), and either the first
      // or last character are a space, eol, or dollar sign, then pad with spaces.
      if (
        /[^ \r\n]/.test(value) &&
        (/[ \r\n$]/.test(value.charAt(0)) ||
          /[ \r\n$]/.test(value.charAt(value.length - 1)))
      ) {
        pad = ' ';
      }

      const sequence = '$'.repeat(size);
      return sequence + pad + value + pad + sequence
    }

    /** @type {ToMarkdownHandle} */
    function inlineMathPeek() {
      return '$'
    }
  }

  /**
   * @typedef {import('mdast').Root} Root
   * @typedef {import('mdast-util-math').ToOptions} Options
   *
   * @typedef {import('mdast-util-math')} DoNotTouchAsThisImportIncludesMathInTree
   */

  /**
   * Plugin to support math.
   *
   * @type {import('unified').Plugin<[Options?] | void[], Root, Root>}
   */
  function remarkMath(options = {}) {
    const data = this.data();

    add('micromarkExtensions', math(options));
    add('fromMarkdownExtensions', mathFromMarkdown());
    add('toMarkdownExtensions', mathToMarkdown(options));

    /**
     * @param {string} field
     * @param {unknown} value
     */
    function add(field, value) {
      const list = /** @type {unknown[]} */ (
        // Other extensions
        /* c8 ignore next 2 */
        data[field] ? data[field] : (data[field] = [])
      );

      list.push(value);
    }
  }

  /**
   * @typedef {import('unist').Node} Node
   * @typedef {import('unist').Parent} Parent
   * @typedef {import('unist-util-is').Test} Test
   * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
   * @typedef {import('./complex-types.js').Visitor} Visitor
   */

  /**
   * Visit children of tree which pass test.
   *
   * @param tree
   *   Tree to walk
   * @param [test]
   *   `unist-util-is`-compatible test
   * @param visitor
   *   Function called for nodes that pass `test`.
   * @param reverse
   *   Traverse in reverse preorder (NRL) instead of preorder (NLR) (default).
   */
  const visit$1 =
    /**
     * @type {(
     *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: import('./complex-types.js').BuildVisitor<Tree, Check>, reverse?: boolean) => void) &
     *   (<Tree extends Node>(tree: Tree, visitor: import('./complex-types.js').BuildVisitor<Tree>, reverse?: boolean) => void)
     * )}
     */
    (
      /**
       * @param {Node} tree
       * @param {Test} test
       * @param {import('./complex-types.js').Visitor} visitor
       * @param {boolean} [reverse]
       */
      function (tree, test, visitor, reverse) {
        if (typeof test === 'function' && typeof visitor !== 'function') {
          reverse = visitor;
          visitor = test;
          test = null;
        }

        visitParents(tree, test, overload, reverse);

        /**
         * @param {Node} node
         * @param {Array<Parent>} parents
         */
        function overload(node, parents) {
          const parent = parents[parents.length - 1];
          return visitor(
            node,
            parent ? parent.children.indexOf(node) : null,
            parent
          )
        }
      }
    );

  /**
   * @typedef {import('mdast').Root} Root
   * @typedef {import('mdast').PhrasingContent} PhrasingContent
   */

  const find = /[\t ]*(?:\r?\n|\r)/g;

  /**
   * Plugin to support hard breaks without needing spaces or escapes (turns enters
   * into `<br>`s).
   *
   * @type {import('unified').Plugin<void[], Root>}
   */
  function remarkBreaks() {
    return (tree) => {
      visit$1(tree, 'text', (node, index, parent) => {
        /** @type {PhrasingContent[]} */
        const result = [];
        let start = 0;

        find.lastIndex = 0;

        let match = find.exec(node.value);

        while (match) {
          const position = match.index;

          if (start !== position) {
            result.push({type: 'text', value: node.value.slice(start, position)});
          }

          result.push({type: 'break'});
          start = position + match[0].length;
          match = find.exec(node.value);
        }

        if (result.length > 0 && parent && typeof index === 'number') {
          if (start < node.value.length) {
            result.push({type: 'text', value: node.value.slice(start)});
          }

          parent.children.splice(index, 1, ...result);
          return index + result.length
        }
      });
    }
  }

  var format = {exports: {}};

  (function (module) {
  (function() {

  	  //// Export the API
  	  var namespace;

  	  // CommonJS / Node module
  	  {
  	    namespace = module.exports = format;
  	  }

  	  namespace.format = format;
  	  namespace.vsprintf = vsprintf;

  	  if (typeof console !== 'undefined' && typeof console.log === 'function') {
  	    namespace.printf = printf;
  	  }

  	  function printf(/* ... */) {
  	    console.log(format.apply(null, arguments));
  	  }

  	  function vsprintf(fmt, replacements) {
  	    return format.apply(null, [fmt].concat(replacements));
  	  }

  	  function format(fmt) {
  	    var argIndex = 1 // skip initial format argument
  	      , args = [].slice.call(arguments)
  	      , i = 0
  	      , n = fmt.length
  	      , result = ''
  	      , c
  	      , escaped = false
  	      , arg
  	      , tmp
  	      , leadingZero = false
  	      , precision
  	      , nextArg = function() { return args[argIndex++]; }
  	      , slurpNumber = function() {
  	          var digits = '';
  	          while (/\d/.test(fmt[i])) {
  	            digits += fmt[i++];
  	            c = fmt[i];
  	          }
  	          return digits.length > 0 ? parseInt(digits) : null;
  	        }
  	      ;
  	    for (; i < n; ++i) {
  	      c = fmt[i];
  	      if (escaped) {
  	        escaped = false;
  	        if (c == '.') {
  	          leadingZero = false;
  	          c = fmt[++i];
  	        }
  	        else if (c == '0' && fmt[i + 1] == '.') {
  	          leadingZero = true;
  	          i += 2;
  	          c = fmt[i];
  	        }
  	        else {
  	          leadingZero = true;
  	        }
  	        precision = slurpNumber();
  	        switch (c) {
  	        case 'b': // number in binary
  	          result += parseInt(nextArg(), 10).toString(2);
  	          break;
  	        case 'c': // character
  	          arg = nextArg();
  	          if (typeof arg === 'string' || arg instanceof String)
  	            result += arg;
  	          else
  	            result += String.fromCharCode(parseInt(arg, 10));
  	          break;
  	        case 'd': // number in decimal
  	          result += parseInt(nextArg(), 10);
  	          break;
  	        case 'f': // floating point number
  	          tmp = String(parseFloat(nextArg()).toFixed(precision || 6));
  	          result += leadingZero ? tmp : tmp.replace(/^0/, '');
  	          break;
  	        case 'j': // JSON
  	          result += JSON.stringify(nextArg());
  	          break;
  	        case 'o': // number in octal
  	          result += '0' + parseInt(nextArg(), 10).toString(8);
  	          break;
  	        case 's': // string
  	          result += nextArg();
  	          break;
  	        case 'x': // lowercase hexadecimal
  	          result += '0x' + parseInt(nextArg(), 10).toString(16);
  	          break;
  	        case 'X': // uppercase hexadecimal
  	          result += '0x' + parseInt(nextArg(), 10).toString(16).toUpperCase();
  	          break;
  	        default:
  	          result += c;
  	          break;
  	        }
  	      } else if (c === '%') {
  	        escaped = true;
  	      } else {
  	        result += c;
  	      }
  	    }
  	    return result;
  	  }

  	}());
  } (format));

  var formatter = format.exports;

  // @ts-expect-error

  const fault = Object.assign(create(Error), {
    eval: create(EvalError),
    range: create(RangeError),
    reference: create(ReferenceError),
    syntax: create(SyntaxError),
    type: create(TypeError),
    uri: create(URIError)
  });

  /**
   * Create a new `EConstructor`, with the formatted `format` as a first argument.
   *
   * @template {Error} Fault
   * @template {new (reason: string) => Fault} Class
   * @param {Class} Constructor
   */
  function create(Constructor) {
    /** @type {string} */
    // @ts-expect-error
    FormattedError.displayName = Constructor.displayName || Constructor.name;

    return FormattedError

    /**
     * Create an error with a printf-like formatted message.
     *
     * @param {string|null} [format]
     *   Template string.
     * @param {...unknown} values
     *   Values to render in `format`.
     * @returns {Fault}
     */
    function FormattedError(format, ...values) {
      /** @type {string} */
      const reason = format ? formatter(format, ...values) : format;
      return new Constructor(reason)
    }
  }

  /**
   * @typedef {'yaml'|'toml'} Preset
   *   Either `'yaml'` or `'toml'`
   *
   * @typedef Info
   * @property {string} open
   * @property {string} close
   *
   * @typedef MatterProps
   * @property {string} type
   *   Type to tokenize as
   * @property {boolean} [anywhere=false]
   *   If `true`, matter can be found anywhere in the document.
   *   If `false` (default), only matter at the start of the document is
   *   recognized.
   *
   * @typedef MarkerProps
   * @property {string|Info} marker
   *   Character used to construct fences.
   *   By providing an object with `open` and `close` different characters can be
   *   used for opening and closing fences.
   *   For example the character `'-'` will result in `'---'` being used as the
   *   fence
   * @property {never} [fence]
   *
   * @typedef FenceProps
   * @property {string|Info} fence
   *   String used as the complete fence.
   *   By providing an object with `open` and `close` different values can be used
   *   for opening and closing fences.
   *   This can be used too if fences contain different characters or lengths
   *   other than 3.
   * @property {never} [marker]
   *
   * @typedef {(MatterProps & FenceProps)|(MatterProps & MarkerProps)} Matter
   *
   * @typedef {Preset|Matter|Array.<Preset|Matter>} Options
   */
  const own = {}.hasOwnProperty;
  const markers = {
    yaml: '-',
    toml: '+'
  };
  /**
   * @param {Options} [options='yaml']
   * @returns {Array<Matter>}
   */

  function matters(options = 'yaml') {
    /** @type {Array<Matter>} */
    const results = [];
    let index = -1; // One preset or matter.

    if (!Array.isArray(options)) {
      options = [options];
    }

    while (++index < options.length) {
      results[index] = matter(options[index]);
    }

    return results
  }
  /**
   * @param {Preset|Matter} option
   * @returns {Matter}
   */

  function matter(option) {
    let result = option;

    if (typeof result === 'string') {
      if (!own.call(markers, result)) {
        throw fault('Missing matter definition for `%s`', result)
      }

      result = {
        type: result,
        marker: markers[result]
      };
    } else if (typeof result !== 'object') {
      throw fault('Expected matter to be an object, not `%j`', result)
    }

    if (!own.call(result, 'type')) {
      throw fault('Missing `type` in matter `%j`', result)
    }

    if (!own.call(result, 'fence') && !own.call(result, 'marker')) {
      throw fault('Missing `marker` or `fence` in matter `%j`', result)
    }

    return result
  }

  /**
   * @typedef {import('micromark-util-types').Extension} Extension
   * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
   * @typedef {import('micromark-util-types').Construct} Construct
   * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
   * @typedef {import('micromark-util-types').State} State
   * @typedef {import('../matters.js').Options} Options
   * @typedef {import('../matters.js').Matter} Matter
   * @typedef {import('../matters.js').Info} Info
   */
  /**
   * Create an extension to support frontmatter (YAML, TOML, and more).
   *
   * @param {Options} [options='yaml'] One preset or matter, or an array of them.
   * @returns {Extension}
   */

  function frontmatter(options) {
    const settings = matters(options);
    /** @type {ConstructRecord} */

    const flow = {};
    let index = -1;
    /** @type {Matter} */

    let matter;
    /** @type {number} */

    let code;

    while (++index < settings.length) {
      matter = settings[index];
      code = fence$1(matter, 'open').charCodeAt(0);

      if (code in flow) {
        // @ts-expect-error it clearly does exist.
        flow[code].push(parse$1(matter));
      } else {
        flow[code] = [parse$1(matter)];
      }
    }

    return {
      flow
    }
  }
  /**
   * @param {Matter} matter
   * @returns {Construct}
   */

  function parse$1(matter) {
    const name = matter.type;
    const anywhere = matter.anywhere;
    const valueType = name + 'Value';
    const fenceType = name + 'Fence';
    const sequenceType = fenceType + 'Sequence';
    const fenceConstruct = {
      tokenize: tokenizeFence,
      partial: true
    };
    /** @type {string} */

    let buffer;
    return {
      tokenize: tokenizeFrontmatter,
      concrete: true
    }
    /** @type {Tokenizer} */

    function tokenizeFrontmatter(effects, ok, nok) {
      const self = this;
      return start
      /** @type {State} */

      function start(code) {
        const position = self.now();

        if (position.column !== 1 || (!anywhere && position.line !== 1)) {
          return nok(code)
        }

        effects.enter(name);
        buffer = fence$1(matter, 'open');
        return effects.attempt(fenceConstruct, afterOpeningFence, nok)(code)
      }
      /** @type {State} */

      function afterOpeningFence(code) {
        buffer = fence$1(matter, 'close');
        return lineEnd(code)
      }
      /** @type {State} */

      function lineStart(code) {
        if (code === null || markdownLineEnding(code)) {
          return lineEnd(code)
        }

        effects.enter(valueType);
        return lineData(code)
      }
      /** @type {State} */

      function lineData(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit(valueType);
          return lineEnd(code)
        }

        effects.consume(code);
        return lineData
      }
      /** @type {State} */

      function lineEnd(code) {
        // Require a closing fence.
        if (code === null) {
          return nok(code)
        } // Can only be an eol.

        effects.enter('lineEnding');
        effects.consume(code);
        effects.exit('lineEnding');
        return effects.attempt(fenceConstruct, after, lineStart)
      }
      /** @type {State} */

      function after(code) {
        effects.exit(name);
        return ok(code)
      }
    }
    /** @type {Tokenizer} */

    function tokenizeFence(effects, ok, nok) {
      let bufferIndex = 0;
      return start
      /** @type {State} */

      function start(code) {
        if (code === buffer.charCodeAt(bufferIndex)) {
          effects.enter(fenceType);
          effects.enter(sequenceType);
          return insideSequence(code)
        }

        return nok(code)
      }
      /** @type {State} */

      function insideSequence(code) {
        if (bufferIndex === buffer.length) {
          effects.exit(sequenceType);

          if (markdownSpace(code)) {
            effects.enter('whitespace');
            return insideWhitespace(code)
          }

          return fenceEnd(code)
        }

        if (code === buffer.charCodeAt(bufferIndex++)) {
          effects.consume(code);
          return insideSequence
        }

        return nok(code)
      }
      /** @type {State} */

      function insideWhitespace(code) {
        if (markdownSpace(code)) {
          effects.consume(code);
          return insideWhitespace
        }

        effects.exit('whitespace');
        return fenceEnd(code)
      }
      /** @type {State} */

      function fenceEnd(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit(fenceType);
          return ok(code)
        }

        return nok(code)
      }
    }
  }
  /**
   * @param {Matter} matter
   * @param {'open'|'close'} prop
   * @returns {string}
   */

  function fence$1(matter, prop) {
    return matter.marker
      ? pick$1(matter.marker, prop).repeat(3) // @ts-expect-error: They’re mutually exclusive.
      : pick$1(matter.fence, prop)
  }
  /**
   * @param {Info|string} schema
   * @param {'open'|'close'} prop
   * @returns {string}
   */

  function pick$1(schema, prop) {
    return typeof schema === 'string' ? schema : schema[prop]
  }

  /**
   * @typedef {import('mdast').Literal} Literal
   * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
   * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
   * @typedef {import('mdast-util-to-markdown/lib/types.js').Options} ToMarkdownExtension
   * @typedef {import('mdast-util-to-markdown/lib/types.js').Handle} ToMarkdownHandle
   * @typedef {import('mdast-util-to-markdown/lib/util/indent-lines.js').Map} Map
   *
   * @typedef {import('micromark-extension-frontmatter/matters.js').Options} Options
   * @typedef {import('micromark-extension-frontmatter/matters.js').Matter} Matter
   * @typedef {import('micromark-extension-frontmatter/matters.js').Info} Info
   */

  /**
   * @param {Options} [options]
   * @returns {FromMarkdownExtension}
   */
  function frontmatterFromMarkdown(options) {
    const settings = matters(options);
    /** @type {FromMarkdownExtension['enter']} */
    const enter = {};
    /** @type {FromMarkdownExtension['exit']} */
    const exit = {};
    let index = -1;

    while (++index < settings.length) {
      const matter = settings[index];
      enter[matter.type] = opener(matter);
      exit[matter.type] = close;
      exit[matter.type + 'Value'] = value;
    }

    return {enter, exit}
  }

  /**
   * @param {Matter} matter
   * @returns {FromMarkdownHandle} enter
   */
  function opener(matter) {
    return open
    /** @type {FromMarkdownHandle} */
    function open(token) {
      // @ts-expect-error: custom.
      this.enter({type: matter.type, value: ''}, token);
      this.buffer();
    }
  }

  /** @type {FromMarkdownHandle} */
  function close(token) {
    const data = this.resume();
    // Remove the initial and final eol.
    this.exit(token).value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '');
  }

  /** @type {FromMarkdownHandle} */
  function value(token) {
    this.config.enter.data.call(this, token);
    this.config.exit.data.call(this, token);
  }

  /**
   * @param {Options} [options]
   * @returns {ToMarkdownExtension}
   */
  function frontmatterToMarkdown(options) {
    /** @type {ToMarkdownExtension['unsafe']} */
    const unsafe = [];
    /** @type {ToMarkdownExtension['handlers']} */
    const handlers = {};
    const settings = matters(options);
    let index = -1;

    while (++index < settings.length) {
      const matter = settings[index];
      handlers[matter.type] = handler(matter);
      unsafe.push({atBreak: true, character: fence(matter, 'open').charAt(0)});
    }

    return {unsafe, handlers}
  }

  /**
   * @param {Matter} matter
   * @returns {(node: Literal) => string} enter
   */
  function handler(matter) {
    const open = fence(matter, 'open');
    const close = fence(matter, 'close');

    return handle

    /**
     * @type {ToMarkdownHandle}
     * @param {Literal} node
     */
    function handle(node) {
      return open + (node.value ? '\n' + node.value : '') + '\n' + close
    }
  }

  /**
   * @param {Matter} matter
   * @param {'open'|'close'} prop
   * @returns {string}
   */
  function fence(matter, prop) {
    return matter.marker
      ? pick(matter.marker, prop).repeat(3)
      : // @ts-expect-error: They’re mutually exclusive.
        pick(matter.fence, prop)
  }

  /**
   * @param {Info|string} schema
   * @param {'open'|'close'} prop
   * @returns {string}
   */
  function pick(schema, prop) {
    return typeof schema === 'string' ? schema : schema[prop]
  }

  /**
   * @typedef {import('mdast').Root} Root
   * @typedef {import('micromark-extension-frontmatter').Options} Options
   */

  /**
   * Plugin to add support for frontmatter.
   *
   * @type {import('unified').Plugin<[Options?]|void[], Root>}
   */
  function remarkFrontmatter(options = 'yaml') {
    const data = this.data();

    add('micromarkExtensions', frontmatter(options));
    add('fromMarkdownExtensions', frontmatterFromMarkdown(options));
    add('toMarkdownExtensions', frontmatterToMarkdown(options));

    /**
     * @param {string} field
     * @param {unknown} value
     */
    function add(field, value) {
      const list = /** @type {unknown[]} */ (
        // Other extensions
        /* c8 ignore next 2 */
        data[field] ? data[field] : (data[field] = [])
      );

      list.push(value);
    }
  }

  var remarkExtractFrontmatter = function extract(options = {}) {
      return function (tree, file) {
          let name;

          if (typeof options === 'function') {
              options.yaml = options;
          }

          if (typeof options !== 'function' && options.name) {
              name = options.name;
          }

          each(tree);

          function each(node) {
              if (extract(node)) {
                  return 1
              }

              return every(node)
          }

          function every({ children }) {
              if (!children) {
                  return
              }

              for (let c = 0; c < children.length; c++) {
                  const child = children[c];
                  if (each(child)) {
                      if (options.remove) {
                          children.splice(c, 1);
                          c--;
                      }
                      return 1
                  }
              }

              return
          }

          function extract({ type, value }) {
              const check = options[type];

              if (!check || typeof check !== 'function') {
                  return
              }

              try {
                  const result = check(value);

                  if (!result) {
                      return
                  }

                  if (name) {
                      file.data[name] = file.data[name] || {};

                      Object.assign(file.data[name], result);
                  } else {
                      Object.assign(file.data, result);
                  }

                  return 1
              } catch (error) {
                  return maybeThrow(error, type)
              }
          }

          function maybeThrow({ message, column, line, name: type }, name) {
              let method = options.throws
                  ? "fail"
                  : "message";

              file[method](message, { line, column }, `parseFrontMatter:${name}:${type}`);

              return
          }
      }
  };

  const ALIAS = Symbol.for('yaml.alias');
  const DOC = Symbol.for('yaml.document');
  const MAP = Symbol.for('yaml.map');
  const PAIR = Symbol.for('yaml.pair');
  const SCALAR$1 = Symbol.for('yaml.scalar');
  const SEQ = Symbol.for('yaml.seq');
  const NODE_TYPE = Symbol.for('yaml.node.type');
  const isAlias = (node) => !!node && typeof node === 'object' && node[NODE_TYPE] === ALIAS;
  const isDocument = (node) => !!node && typeof node === 'object' && node[NODE_TYPE] === DOC;
  const isMap = (node) => !!node && typeof node === 'object' && node[NODE_TYPE] === MAP;
  const isPair = (node) => !!node && typeof node === 'object' && node[NODE_TYPE] === PAIR;
  const isScalar = (node) => !!node && typeof node === 'object' && node[NODE_TYPE] === SCALAR$1;
  const isSeq = (node) => !!node && typeof node === 'object' && node[NODE_TYPE] === SEQ;
  function isCollection(node) {
      if (node && typeof node === 'object')
          switch (node[NODE_TYPE]) {
              case MAP:
              case SEQ:
                  return true;
          }
      return false;
  }
  function isNode(node) {
      if (node && typeof node === 'object')
          switch (node[NODE_TYPE]) {
              case ALIAS:
              case MAP:
              case SCALAR$1:
              case SEQ:
                  return true;
          }
      return false;
  }
  const hasAnchor = (node) => (isScalar(node) || isCollection(node)) && !!node.anchor;
  class NodeBase {
      constructor(type) {
          Object.defineProperty(this, NODE_TYPE, { value: type });
      }
      /** Create a copy of this node.  */
      clone() {
          const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
          if (this.range)
              copy.range = this.range.slice();
          return copy;
      }
  }

  const BREAK = Symbol('break visit');
  const SKIP = Symbol('skip children');
  const REMOVE = Symbol('remove node');
  /**
   * Apply a visitor to an AST node or document.
   *
   * Walks through the tree (depth-first) starting from `node`, calling a
   * `visitor` function with three arguments:
   *   - `key`: For sequence values and map `Pair`, the node's index in the
   *     collection. Within a `Pair`, `'key'` or `'value'`, correspondingly.
   *     `null` for the root node.
   *   - `node`: The current node.
   *   - `path`: The ancestry of the current node.
   *
   * The return value of the visitor may be used to control the traversal:
   *   - `undefined` (default): Do nothing and continue
   *   - `visit.SKIP`: Do not visit the children of this node, continue with next
   *     sibling
   *   - `visit.BREAK`: Terminate traversal completely
   *   - `visit.REMOVE`: Remove the current node, then continue with the next one
   *   - `Node`: Replace the current node, then continue by visiting it
   *   - `number`: While iterating the items of a sequence or map, set the index
   *     of the next step. This is useful especially if the index of the current
   *     node has changed.
   *
   * If `visitor` is a single function, it will be called with all values
   * encountered in the tree, including e.g. `null` values. Alternatively,
   * separate visitor functions may be defined for each `Map`, `Pair`, `Seq`,
   * `Alias` and `Scalar` node. To define the same visitor function for more than
   * one node type, use the `Collection` (map and seq), `Value` (map, seq & scalar)
   * and `Node` (alias, map, seq & scalar) targets. Of all these, only the most
   * specific defined one will be used for each node.
   */
  function visit(node, visitor) {
      const visitor_ = initVisitor(visitor);
      if (isDocument(node)) {
          const cd = visit_(null, node.contents, visitor_, Object.freeze([node]));
          if (cd === REMOVE)
              node.contents = null;
      }
      else
          visit_(null, node, visitor_, Object.freeze([]));
  }
  // Without the `as symbol` casts, TS declares these in the `visit`
  // namespace using `var`, but then complains about that because
  // `unique symbol` must be `const`.
  /** Terminate visit traversal completely */
  visit.BREAK = BREAK;
  /** Do not visit the children of the current node */
  visit.SKIP = SKIP;
  /** Remove the current node */
  visit.REMOVE = REMOVE;
  function visit_(key, node, visitor, path) {
      const ctrl = callVisitor(key, node, visitor, path);
      if (isNode(ctrl) || isPair(ctrl)) {
          replaceNode(key, path, ctrl);
          return visit_(key, ctrl, visitor, path);
      }
      if (typeof ctrl !== 'symbol') {
          if (isCollection(node)) {
              path = Object.freeze(path.concat(node));
              for (let i = 0; i < node.items.length; ++i) {
                  const ci = visit_(i, node.items[i], visitor, path);
                  if (typeof ci === 'number')
                      i = ci - 1;
                  else if (ci === BREAK)
                      return BREAK;
                  else if (ci === REMOVE) {
                      node.items.splice(i, 1);
                      i -= 1;
                  }
              }
          }
          else if (isPair(node)) {
              path = Object.freeze(path.concat(node));
              const ck = visit_('key', node.key, visitor, path);
              if (ck === BREAK)
                  return BREAK;
              else if (ck === REMOVE)
                  node.key = null;
              const cv = visit_('value', node.value, visitor, path);
              if (cv === BREAK)
                  return BREAK;
              else if (cv === REMOVE)
                  node.value = null;
          }
      }
      return ctrl;
  }
  function initVisitor(visitor) {
      if (typeof visitor === 'object' &&
          (visitor.Collection || visitor.Node || visitor.Value)) {
          return Object.assign({
              Alias: visitor.Node,
              Map: visitor.Node,
              Scalar: visitor.Node,
              Seq: visitor.Node
          }, visitor.Value && {
              Map: visitor.Value,
              Scalar: visitor.Value,
              Seq: visitor.Value
          }, visitor.Collection && {
              Map: visitor.Collection,
              Seq: visitor.Collection
          }, visitor);
      }
      return visitor;
  }
  function callVisitor(key, node, visitor, path) {
      if (typeof visitor === 'function')
          return visitor(key, node, path);
      if (isMap(node))
          return visitor.Map?.(key, node, path);
      if (isSeq(node))
          return visitor.Seq?.(key, node, path);
      if (isPair(node))
          return visitor.Pair?.(key, node, path);
      if (isScalar(node))
          return visitor.Scalar?.(key, node, path);
      if (isAlias(node))
          return visitor.Alias?.(key, node, path);
      return undefined;
  }
  function replaceNode(key, path, node) {
      const parent = path[path.length - 1];
      if (isCollection(parent)) {
          parent.items[key] = node;
      }
      else if (isPair(parent)) {
          if (key === 'key')
              parent.key = node;
          else
              parent.value = node;
      }
      else if (isDocument(parent)) {
          parent.contents = node;
      }
      else {
          const pt = isAlias(parent) ? 'alias' : 'scalar';
          throw new Error(`Cannot replace node with ${pt} parent`);
      }
  }

  const escapeChars = {
      '!': '%21',
      ',': '%2C',
      '[': '%5B',
      ']': '%5D',
      '{': '%7B',
      '}': '%7D'
  };
  const escapeTagName = (tn) => tn.replace(/[!,[\]{}]/g, ch => escapeChars[ch]);
  class Directives {
      constructor(yaml, tags) {
          /**
           * The directives-end/doc-start marker `---`. If `null`, a marker may still be
           * included in the document's stringified representation.
           */
          this.docStart = null;
          /** The doc-end marker `...`.  */
          this.docEnd = false;
          this.yaml = Object.assign({}, Directives.defaultYaml, yaml);
          this.tags = Object.assign({}, Directives.defaultTags, tags);
      }
      clone() {
          const copy = new Directives(this.yaml, this.tags);
          copy.docStart = this.docStart;
          return copy;
      }
      /**
       * During parsing, get a Directives instance for the current document and
       * update the stream state according to the current version's spec.
       */
      atDocument() {
          const res = new Directives(this.yaml, this.tags);
          switch (this.yaml.version) {
              case '1.1':
                  this.atNextDocument = true;
                  break;
              case '1.2':
                  this.atNextDocument = false;
                  this.yaml = {
                      explicit: Directives.defaultYaml.explicit,
                      version: '1.2'
                  };
                  this.tags = Object.assign({}, Directives.defaultTags);
                  break;
          }
          return res;
      }
      /**
       * @param onError - May be called even if the action was successful
       * @returns `true` on success
       */
      add(line, onError) {
          if (this.atNextDocument) {
              this.yaml = { explicit: Directives.defaultYaml.explicit, version: '1.1' };
              this.tags = Object.assign({}, Directives.defaultTags);
              this.atNextDocument = false;
          }
          const parts = line.trim().split(/[ \t]+/);
          const name = parts.shift();
          switch (name) {
              case '%TAG': {
                  if (parts.length !== 2) {
                      onError(0, '%TAG directive should contain exactly two parts');
                      if (parts.length < 2)
                          return false;
                  }
                  const [handle, prefix] = parts;
                  this.tags[handle] = prefix;
                  return true;
              }
              case '%YAML': {
                  this.yaml.explicit = true;
                  if (parts.length !== 1) {
                      onError(0, '%YAML directive should contain exactly one part');
                      return false;
                  }
                  const [version] = parts;
                  if (version === '1.1' || version === '1.2') {
                      this.yaml.version = version;
                      return true;
                  }
                  else {
                      const isValid = /^\d+\.\d+$/.test(version);
                      onError(6, `Unsupported YAML version ${version}`, isValid);
                      return false;
                  }
              }
              default:
                  onError(0, `Unknown directive ${name}`, true);
                  return false;
          }
      }
      /**
       * Resolves a tag, matching handles to those defined in %TAG directives.
       *
       * @returns Resolved tag, which may also be the non-specific tag `'!'` or a
       *   `'!local'` tag, or `null` if unresolvable.
       */
      tagName(source, onError) {
          if (source === '!')
              return '!'; // non-specific tag
          if (source[0] !== '!') {
              onError(`Not a valid tag: ${source}`);
              return null;
          }
          if (source[1] === '<') {
              const verbatim = source.slice(2, -1);
              if (verbatim === '!' || verbatim === '!!') {
                  onError(`Verbatim tags aren't resolved, so ${source} is invalid.`);
                  return null;
              }
              if (source[source.length - 1] !== '>')
                  onError('Verbatim tags must end with a >');
              return verbatim;
          }
          const [, handle, suffix] = source.match(/^(.*!)([^!]*)$/);
          if (!suffix)
              onError(`The ${source} tag has no suffix`);
          const prefix = this.tags[handle];
          if (prefix)
              return prefix + decodeURIComponent(suffix);
          if (handle === '!')
              return source; // local tag
          onError(`Could not resolve tag: ${source}`);
          return null;
      }
      /**
       * Given a fully resolved tag, returns its printable string form,
       * taking into account current tag prefixes and defaults.
       */
      tagString(tag) {
          for (const [handle, prefix] of Object.entries(this.tags)) {
              if (tag.startsWith(prefix))
                  return handle + escapeTagName(tag.substring(prefix.length));
          }
          return tag[0] === '!' ? tag : `!<${tag}>`;
      }
      toString(doc) {
          const lines = this.yaml.explicit
              ? [`%YAML ${this.yaml.version || '1.2'}`]
              : [];
          const tagEntries = Object.entries(this.tags);
          let tagNames;
          if (doc && tagEntries.length > 0 && isNode(doc.contents)) {
              const tags = {};
              visit(doc.contents, (_key, node) => {
                  if (isNode(node) && node.tag)
                      tags[node.tag] = true;
              });
              tagNames = Object.keys(tags);
          }
          else
              tagNames = [];
          for (const [handle, prefix] of tagEntries) {
              if (handle === '!!' && prefix === 'tag:yaml.org,2002:')
                  continue;
              if (!doc || tagNames.some(tn => tn.startsWith(prefix)))
                  lines.push(`%TAG ${handle} ${prefix}`);
          }
          return lines.join('\n');
      }
  }
  Directives.defaultYaml = { explicit: false, version: '1.2' };
  Directives.defaultTags = { '!!': 'tag:yaml.org,2002:' };

  /**
   * Verify that the input string is a valid anchor.
   *
   * Will throw on errors.
   */
  function anchorIsValid(anchor) {
      if (/[\x00-\x19\s,[\]{}]/.test(anchor)) {
          const sa = JSON.stringify(anchor);
          const msg = `Anchor must not contain whitespace or control characters: ${sa}`;
          throw new Error(msg);
      }
      return true;
  }
  function anchorNames(root) {
      const anchors = new Set();
      visit(root, {
          Value(_key, node) {
              if (node.anchor)
                  anchors.add(node.anchor);
          }
      });
      return anchors;
  }
  /** Find a new anchor name with the given `prefix` and a one-indexed suffix. */
  function findNewAnchor(prefix, exclude) {
      for (let i = 1; true; ++i) {
          const name = `${prefix}${i}`;
          if (!exclude.has(name))
              return name;
      }
  }
  function createNodeAnchors(doc, prefix) {
      const aliasObjects = [];
      const sourceObjects = new Map();
      let prevAnchors = null;
      return {
          onAnchor: (source) => {
              aliasObjects.push(source);
              if (!prevAnchors)
                  prevAnchors = anchorNames(doc);
              const anchor = findNewAnchor(prefix, prevAnchors);
              prevAnchors.add(anchor);
              return anchor;
          },
          /**
           * With circular references, the source node is only resolved after all
           * of its child nodes are. This is why anchors are set only after all of
           * the nodes have been created.
           */
          setAnchors: () => {
              for (const source of aliasObjects) {
                  const ref = sourceObjects.get(source);
                  if (typeof ref === 'object' &&
                      ref.anchor &&
                      (isScalar(ref.node) || isCollection(ref.node))) {
                      ref.node.anchor = ref.anchor;
                  }
                  else {
                      const error = new Error('Failed to resolve repeated object (this should not happen)');
                      error.source = source;
                      throw error;
                  }
              }
          },
          sourceObjects
      };
  }

  class Alias extends NodeBase {
      constructor(source) {
          super(ALIAS);
          this.source = source;
          Object.defineProperty(this, 'tag', {
              set() {
                  throw new Error('Alias nodes cannot have tags');
              }
          });
      }
      /**
       * Resolve the value of this alias within `doc`, finding the last
       * instance of the `source` anchor before this node.
       */
      resolve(doc) {
          let found = undefined;
          visit(doc, {
              Node: (_key, node) => {
                  if (node === this)
                      return visit.BREAK;
                  if (node.anchor === this.source)
                      found = node;
              }
          });
          return found;
      }
      toJSON(_arg, ctx) {
          if (!ctx)
              return { source: this.source };
          const { anchors, doc, maxAliasCount } = ctx;
          const source = this.resolve(doc);
          if (!source) {
              const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
              throw new ReferenceError(msg);
          }
          const data = anchors.get(source);
          /* istanbul ignore if */
          if (!data || data.res === undefined) {
              const msg = 'This should not happen: Alias anchor was not resolved?';
              throw new ReferenceError(msg);
          }
          if (maxAliasCount >= 0) {
              data.count += 1;
              if (data.aliasCount === 0)
                  data.aliasCount = getAliasCount(doc, source, anchors);
              if (data.count * data.aliasCount > maxAliasCount) {
                  const msg = 'Excessive alias count indicates a resource exhaustion attack';
                  throw new ReferenceError(msg);
              }
          }
          return data.res;
      }
      toString(ctx, _onComment, _onChompKeep) {
          const src = `*${this.source}`;
          if (ctx) {
              anchorIsValid(this.source);
              if (ctx.options.verifyAliasOrder && !ctx.anchors.has(this.source)) {
                  const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
                  throw new Error(msg);
              }
              if (ctx.implicitKey)
                  return `${src} `;
          }
          return src;
      }
  }
  function getAliasCount(doc, node, anchors) {
      if (isAlias(node)) {
          const source = node.resolve(doc);
          const anchor = anchors && source && anchors.get(source);
          return anchor ? anchor.count * anchor.aliasCount : 0;
      }
      else if (isCollection(node)) {
          let count = 0;
          for (const item of node.items) {
              const c = getAliasCount(doc, item, anchors);
              if (c > count)
                  count = c;
          }
          return count;
      }
      else if (isPair(node)) {
          const kc = getAliasCount(doc, node.key, anchors);
          const vc = getAliasCount(doc, node.value, anchors);
          return Math.max(kc, vc);
      }
      return 1;
  }

  /**
   * Recursively convert any node or its contents to native JavaScript
   *
   * @param value - The input value
   * @param arg - If `value` defines a `toJSON()` method, use this
   *   as its first argument
   * @param ctx - Conversion context, originally set in Document#toJS(). If
   *   `{ keep: true }` is not set, output should be suitable for JSON
   *   stringification.
   */
  function toJS(value, arg, ctx) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      if (Array.isArray(value))
          return value.map((v, i) => toJS(v, String(i), ctx));
      if (value && typeof value.toJSON === 'function') {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          if (!ctx || !hasAnchor(value))
              return value.toJSON(arg, ctx);
          const data = { aliasCount: 0, count: 1, res: undefined };
          ctx.anchors.set(value, data);
          ctx.onCreate = res => {
              data.res = res;
              delete ctx.onCreate;
          };
          const res = value.toJSON(arg, ctx);
          if (ctx.onCreate)
              ctx.onCreate(res);
          return res;
      }
      if (typeof value === 'bigint' && !ctx?.keep)
          return Number(value);
      return value;
  }

  const isScalarValue = (value) => !value || (typeof value !== 'function' && typeof value !== 'object');
  class Scalar extends NodeBase {
      constructor(value) {
          super(SCALAR$1);
          this.value = value;
      }
      toJSON(arg, ctx) {
          return ctx?.keep ? this.value : toJS(this.value, arg, ctx);
      }
      toString() {
          return String(this.value);
      }
  }
  Scalar.BLOCK_FOLDED = 'BLOCK_FOLDED';
  Scalar.BLOCK_LITERAL = 'BLOCK_LITERAL';
  Scalar.PLAIN = 'PLAIN';
  Scalar.QUOTE_DOUBLE = 'QUOTE_DOUBLE';
  Scalar.QUOTE_SINGLE = 'QUOTE_SINGLE';

  const defaultTagPrefix = 'tag:yaml.org,2002:';
  function findTagObject(value, tagName, tags) {
      if (tagName) {
          const match = tags.filter(t => t.tag === tagName);
          const tagObj = match.find(t => !t.format) ?? match[0];
          if (!tagObj)
              throw new Error(`Tag ${tagName} not found`);
          return tagObj;
      }
      return tags.find(t => t.identify?.(value) && !t.format);
  }
  function createNode(value, tagName, ctx) {
      if (isDocument(value))
          value = value.contents;
      if (isNode(value))
          return value;
      if (isPair(value)) {
          const map = ctx.schema[MAP].createNode?.(ctx.schema, null, ctx);
          map.items.push(value);
          return map;
      }
      if (value instanceof String ||
          value instanceof Number ||
          value instanceof Boolean ||
          (typeof BigInt !== 'undefined' && value instanceof BigInt) // not supported everywhere
      ) {
          // https://tc39.es/ecma262/#sec-serializejsonproperty
          value = value.valueOf();
      }
      const { aliasDuplicateObjects, onAnchor, onTagObj, schema, sourceObjects } = ctx;
      // Detect duplicate references to the same object & use Alias nodes for all
      // after first. The `ref` wrapper allows for circular references to resolve.
      let ref = undefined;
      if (aliasDuplicateObjects && value && typeof value === 'object') {
          ref = sourceObjects.get(value);
          if (ref) {
              if (!ref.anchor)
                  ref.anchor = onAnchor(value);
              return new Alias(ref.anchor);
          }
          else {
              ref = { anchor: null, node: null };
              sourceObjects.set(value, ref);
          }
      }
      if (tagName?.startsWith('!!'))
          tagName = defaultTagPrefix + tagName.slice(2);
      let tagObj = findTagObject(value, tagName, schema.tags);
      if (!tagObj) {
          if (value && typeof value.toJSON === 'function') {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call
              value = value.toJSON();
          }
          if (!value || typeof value !== 'object') {
              const node = new Scalar(value);
              if (ref)
                  ref.node = node;
              return node;
          }
          tagObj =
              value instanceof Map
                  ? schema[MAP]
                  : Symbol.iterator in Object(value)
                      ? schema[SEQ]
                      : schema[MAP];
      }
      if (onTagObj) {
          onTagObj(tagObj);
          delete ctx.onTagObj;
      }
      const node = tagObj?.createNode
          ? tagObj.createNode(ctx.schema, value, ctx)
          : new Scalar(value);
      if (tagName)
          node.tag = tagName;
      if (ref)
          ref.node = node;
      return node;
  }

  function collectionFromPath(schema, path, value) {
      let v = value;
      for (let i = path.length - 1; i >= 0; --i) {
          const k = path[i];
          if (typeof k === 'number' && Number.isInteger(k) && k >= 0) {
              const a = [];
              a[k] = v;
              v = a;
          }
          else {
              v = new Map([[k, v]]);
          }
      }
      return createNode(v, undefined, {
          aliasDuplicateObjects: false,
          keepUndefined: false,
          onAnchor: () => {
              throw new Error('This should not happen, please report a bug.');
          },
          schema,
          sourceObjects: new Map()
      });
  }
  // Type guard is intentionally a little wrong so as to be more useful,
  // as it does not cover untypable empty non-string iterables (e.g. []).
  const isEmptyPath = (path) => path == null ||
      (typeof path === 'object' && !!path[Symbol.iterator]().next().done);
  class Collection extends NodeBase {
      constructor(type, schema) {
          super(type);
          Object.defineProperty(this, 'schema', {
              value: schema,
              configurable: true,
              enumerable: false,
              writable: true
          });
      }
      /**
       * Create a copy of this collection.
       *
       * @param schema - If defined, overwrites the original's schema
       */
      clone(schema) {
          const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
          if (schema)
              copy.schema = schema;
          copy.items = copy.items.map(it => isNode(it) || isPair(it) ? it.clone(schema) : it);
          if (this.range)
              copy.range = this.range.slice();
          return copy;
      }
      /**
       * Adds a value to the collection. For `!!map` and `!!omap` the value must
       * be a Pair instance or a `{ key, value }` object, which may not have a key
       * that already exists in the map.
       */
      addIn(path, value) {
          if (isEmptyPath(path))
              this.add(value);
          else {
              const [key, ...rest] = path;
              const node = this.get(key, true);
              if (isCollection(node))
                  node.addIn(rest, value);
              else if (node === undefined && this.schema)
                  this.set(key, collectionFromPath(this.schema, rest, value));
              else
                  throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
          }
      }
      /**
       * Removes a value from the collection.
       * @returns `true` if the item was found and removed.
       */
      deleteIn(path) {
          const [key, ...rest] = path;
          if (rest.length === 0)
              return this.delete(key);
          const node = this.get(key, true);
          if (isCollection(node))
              return node.deleteIn(rest);
          else
              throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
      }
      /**
       * Returns item at `key`, or `undefined` if not found. By default unwraps
       * scalar values from their surrounding node; to disable set `keepScalar` to
       * `true` (collections are always returned intact).
       */
      getIn(path, keepScalar) {
          const [key, ...rest] = path;
          const node = this.get(key, true);
          if (rest.length === 0)
              return !keepScalar && isScalar(node) ? node.value : node;
          else
              return isCollection(node) ? node.getIn(rest, keepScalar) : undefined;
      }
      hasAllNullValues(allowScalar) {
          return this.items.every(node => {
              if (!isPair(node))
                  return false;
              const n = node.value;
              return (n == null ||
                  (allowScalar &&
                      isScalar(n) &&
                      n.value == null &&
                      !n.commentBefore &&
                      !n.comment &&
                      !n.tag));
          });
      }
      /**
       * Checks if the collection includes a value with the key `key`.
       */
      hasIn(path) {
          const [key, ...rest] = path;
          if (rest.length === 0)
              return this.has(key);
          const node = this.get(key, true);
          return isCollection(node) ? node.hasIn(rest) : false;
      }
      /**
       * Sets a value in this collection. For `!!set`, `value` needs to be a
       * boolean to add/remove the item from the set.
       */
      setIn(path, value) {
          const [key, ...rest] = path;
          if (rest.length === 0) {
              this.set(key, value);
          }
          else {
              const node = this.get(key, true);
              if (isCollection(node))
                  node.setIn(rest, value);
              else if (node === undefined && this.schema)
                  this.set(key, collectionFromPath(this.schema, rest, value));
              else
                  throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
          }
      }
  }
  Collection.maxFlowStringSingleLineLength = 60;

  /**
   * Stringifies a comment.
   *
   * Empty comment lines are left empty,
   * lines consisting of a single space are replaced by `#`,
   * and all other lines are prefixed with a `#`.
   */
  const stringifyComment = (str) => str.replace(/^(?!$)(?: $)?/gm, '#');
  function indentComment(comment, indent) {
      if (/^\n+$/.test(comment))
          return comment.substring(1);
      return indent ? comment.replace(/^(?! *$)/gm, indent) : comment;
  }
  const lineComment = (str, indent, comment) => str.endsWith('\n')
      ? indentComment(comment, indent)
      : comment.includes('\n')
          ? '\n' + indentComment(comment, indent)
          : (str.endsWith(' ') ? '' : ' ') + comment;

  const FOLD_FLOW = 'flow';
  const FOLD_BLOCK = 'block';
  const FOLD_QUOTED = 'quoted';
  /**
   * Tries to keep input at up to `lineWidth` characters, splitting only on spaces
   * not followed by newlines or spaces unless `mode` is `'quoted'`. Lines are
   * terminated with `\n` and started with `indent`.
   */
  function foldFlowLines(text, indent, mode = 'flow', { indentAtStart, lineWidth = 80, minContentWidth = 20, onFold, onOverflow } = {}) {
      if (!lineWidth || lineWidth < 0)
          return text;
      const endStep = Math.max(1 + minContentWidth, 1 + lineWidth - indent.length);
      if (text.length <= endStep)
          return text;
      const folds = [];
      const escapedFolds = {};
      let end = lineWidth - indent.length;
      if (typeof indentAtStart === 'number') {
          if (indentAtStart > lineWidth - Math.max(2, minContentWidth))
              folds.push(0);
          else
              end = lineWidth - indentAtStart;
      }
      let split = undefined;
      let prev = undefined;
      let overflow = false;
      let i = -1;
      let escStart = -1;
      let escEnd = -1;
      if (mode === FOLD_BLOCK) {
          i = consumeMoreIndentedLines(text, i);
          if (i !== -1)
              end = i + endStep;
      }
      for (let ch; (ch = text[(i += 1)]);) {
          if (mode === FOLD_QUOTED && ch === '\\') {
              escStart = i;
              switch (text[i + 1]) {
                  case 'x':
                      i += 3;
                      break;
                  case 'u':
                      i += 5;
                      break;
                  case 'U':
                      i += 9;
                      break;
                  default:
                      i += 1;
              }
              escEnd = i;
          }
          if (ch === '\n') {
              if (mode === FOLD_BLOCK)
                  i = consumeMoreIndentedLines(text, i);
              end = i + endStep;
              split = undefined;
          }
          else {
              if (ch === ' ' &&
                  prev &&
                  prev !== ' ' &&
                  prev !== '\n' &&
                  prev !== '\t') {
                  // space surrounded by non-space can be replaced with newline + indent
                  const next = text[i + 1];
                  if (next && next !== ' ' && next !== '\n' && next !== '\t')
                      split = i;
              }
              if (i >= end) {
                  if (split) {
                      folds.push(split);
                      end = split + endStep;
                      split = undefined;
                  }
                  else if (mode === FOLD_QUOTED) {
                      // white-space collected at end may stretch past lineWidth
                      while (prev === ' ' || prev === '\t') {
                          prev = ch;
                          ch = text[(i += 1)];
                          overflow = true;
                      }
                      // Account for newline escape, but don't break preceding escape
                      const j = i > escEnd + 1 ? i - 2 : escStart - 1;
                      // Bail out if lineWidth & minContentWidth are shorter than an escape string
                      if (escapedFolds[j])
                          return text;
                      folds.push(j);
                      escapedFolds[j] = true;
                      end = j + endStep;
                      split = undefined;
                  }
                  else {
                      overflow = true;
                  }
              }
          }
          prev = ch;
      }
      if (overflow && onOverflow)
          onOverflow();
      if (folds.length === 0)
          return text;
      if (onFold)
          onFold();
      let res = text.slice(0, folds[0]);
      for (let i = 0; i < folds.length; ++i) {
          const fold = folds[i];
          const end = folds[i + 1] || text.length;
          if (fold === 0)
              res = `\n${indent}${text.slice(0, end)}`;
          else {
              if (mode === FOLD_QUOTED && escapedFolds[fold])
                  res += `${text[fold]}\\`;
              res += `\n${indent}${text.slice(fold + 1, end)}`;
          }
      }
      return res;
  }
  /**
   * Presumes `i + 1` is at the start of a line
   * @returns index of last newline in more-indented block
   */
  function consumeMoreIndentedLines(text, i) {
      let ch = text[i + 1];
      while (ch === ' ' || ch === '\t') {
          do {
              ch = text[(i += 1)];
          } while (ch && ch !== '\n');
          ch = text[i + 1];
      }
      return i;
  }

  const getFoldOptions = (ctx) => ({
      indentAtStart: ctx.indentAtStart,
      lineWidth: ctx.options.lineWidth,
      minContentWidth: ctx.options.minContentWidth
  });
  // Also checks for lines starting with %, as parsing the output as YAML 1.1 will
  // presume that's starting a new document.
  const containsDocumentMarker = (str) => /^(%|---|\.\.\.)/m.test(str);
  function lineLengthOverLimit(str, lineWidth, indentLength) {
      if (!lineWidth || lineWidth < 0)
          return false;
      const limit = lineWidth - indentLength;
      const strLen = str.length;
      if (strLen <= limit)
          return false;
      for (let i = 0, start = 0; i < strLen; ++i) {
          if (str[i] === '\n') {
              if (i - start > limit)
                  return true;
              start = i + 1;
              if (strLen - start <= limit)
                  return false;
          }
      }
      return true;
  }
  function doubleQuotedString(value, ctx) {
      const json = JSON.stringify(value);
      if (ctx.options.doubleQuotedAsJSON)
          return json;
      const { implicitKey } = ctx;
      const minMultiLineLength = ctx.options.doubleQuotedMinMultiLineLength;
      const indent = ctx.indent || (containsDocumentMarker(value) ? '  ' : '');
      let str = '';
      let start = 0;
      for (let i = 0, ch = json[i]; ch; ch = json[++i]) {
          if (ch === ' ' && json[i + 1] === '\\' && json[i + 2] === 'n') {
              // space before newline needs to be escaped to not be folded
              str += json.slice(start, i) + '\\ ';
              i += 1;
              start = i;
              ch = '\\';
          }
          if (ch === '\\')
              switch (json[i + 1]) {
                  case 'u':
                      {
                          str += json.slice(start, i);
                          const code = json.substr(i + 2, 4);
                          switch (code) {
                              case '0000':
                                  str += '\\0';
                                  break;
                              case '0007':
                                  str += '\\a';
                                  break;
                              case '000b':
                                  str += '\\v';
                                  break;
                              case '001b':
                                  str += '\\e';
                                  break;
                              case '0085':
                                  str += '\\N';
                                  break;
                              case '00a0':
                                  str += '\\_';
                                  break;
                              case '2028':
                                  str += '\\L';
                                  break;
                              case '2029':
                                  str += '\\P';
                                  break;
                              default:
                                  if (code.substr(0, 2) === '00')
                                      str += '\\x' + code.substr(2);
                                  else
                                      str += json.substr(i, 6);
                          }
                          i += 5;
                          start = i + 1;
                      }
                      break;
                  case 'n':
                      if (implicitKey ||
                          json[i + 2] === '"' ||
                          json.length < minMultiLineLength) {
                          i += 1;
                      }
                      else {
                          // folding will eat first newline
                          str += json.slice(start, i) + '\n\n';
                          while (json[i + 2] === '\\' &&
                              json[i + 3] === 'n' &&
                              json[i + 4] !== '"') {
                              str += '\n';
                              i += 2;
                          }
                          str += indent;
                          // space after newline needs to be escaped to not be folded
                          if (json[i + 2] === ' ')
                              str += '\\';
                          i += 1;
                          start = i + 1;
                      }
                      break;
                  default:
                      i += 1;
              }
      }
      str = start ? str + json.slice(start) : json;
      return implicitKey
          ? str
          : foldFlowLines(str, indent, FOLD_QUOTED, getFoldOptions(ctx));
  }
  function singleQuotedString(value, ctx) {
      if (ctx.options.singleQuote === false ||
          (ctx.implicitKey && value.includes('\n')) ||
          /[ \t]\n|\n[ \t]/.test(value) // single quoted string can't have leading or trailing whitespace around newline
      )
          return doubleQuotedString(value, ctx);
      const indent = ctx.indent || (containsDocumentMarker(value) ? '  ' : '');
      const res = "'" + value.replace(/'/g, "''").replace(/\n+/g, `$&\n${indent}`) + "'";
      return ctx.implicitKey
          ? res
          : foldFlowLines(res, indent, FOLD_FLOW, getFoldOptions(ctx));
  }
  function quotedString(value, ctx) {
      const { singleQuote } = ctx.options;
      let qs;
      if (singleQuote === false)
          qs = doubleQuotedString;
      else {
          const hasDouble = value.includes('"');
          const hasSingle = value.includes("'");
          if (hasDouble && !hasSingle)
              qs = singleQuotedString;
          else if (hasSingle && !hasDouble)
              qs = doubleQuotedString;
          else
              qs = singleQuote ? singleQuotedString : doubleQuotedString;
      }
      return qs(value, ctx);
  }
  function blockString({ comment, type, value }, ctx, onComment, onChompKeep) {
      const { blockQuote, commentString, lineWidth } = ctx.options;
      // 1. Block can't end in whitespace unless the last line is non-empty.
      // 2. Strings consisting of only whitespace are best rendered explicitly.
      if (!blockQuote || /\n[\t ]+$/.test(value) || /^\s*$/.test(value)) {
          return quotedString(value, ctx);
      }
      const indent = ctx.indent ||
          (ctx.forceBlockIndent || containsDocumentMarker(value) ? '  ' : '');
      const literal = blockQuote === 'literal'
          ? true
          : blockQuote === 'folded' || type === Scalar.BLOCK_FOLDED
              ? false
              : type === Scalar.BLOCK_LITERAL
                  ? true
                  : !lineLengthOverLimit(value, lineWidth, indent.length);
      if (!value)
          return literal ? '|\n' : '>\n';
      // determine chomping from whitespace at value end
      let chomp;
      let endStart;
      for (endStart = value.length; endStart > 0; --endStart) {
          const ch = value[endStart - 1];
          if (ch !== '\n' && ch !== '\t' && ch !== ' ')
              break;
      }
      let end = value.substring(endStart);
      const endNlPos = end.indexOf('\n');
      if (endNlPos === -1) {
          chomp = '-'; // strip
      }
      else if (value === end || endNlPos !== end.length - 1) {
          chomp = '+'; // keep
          if (onChompKeep)
              onChompKeep();
      }
      else {
          chomp = ''; // clip
      }
      if (end) {
          value = value.slice(0, -end.length);
          if (end[end.length - 1] === '\n')
              end = end.slice(0, -1);
          end = end.replace(/\n+(?!\n|$)/g, `$&${indent}`);
      }
      // determine indent indicator from whitespace at value start
      let startWithSpace = false;
      let startEnd;
      let startNlPos = -1;
      for (startEnd = 0; startEnd < value.length; ++startEnd) {
          const ch = value[startEnd];
          if (ch === ' ')
              startWithSpace = true;
          else if (ch === '\n')
              startNlPos = startEnd;
          else
              break;
      }
      let start = value.substring(0, startNlPos < startEnd ? startNlPos + 1 : startEnd);
      if (start) {
          value = value.substring(start.length);
          start = start.replace(/\n+/g, `$&${indent}`);
      }
      const indentSize = indent ? '2' : '1'; // root is at -1
      let header = (literal ? '|' : '>') + (startWithSpace ? indentSize : '') + chomp;
      if (comment) {
          header += ' ' + commentString(comment.replace(/ ?[\r\n]+/g, ' '));
          if (onComment)
              onComment();
      }
      if (literal) {
          value = value.replace(/\n+/g, `$&${indent}`);
          return `${header}\n${indent}${start}${value}${end}`;
      }
      value = value
          .replace(/\n+/g, '\n$&')
          .replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, '$1$2') // more-indented lines aren't folded
          //                ^ more-ind. ^ empty     ^ capture next empty lines only at end of indent
          .replace(/\n+/g, `$&${indent}`);
      const body = foldFlowLines(`${start}${value}${end}`, indent, FOLD_BLOCK, getFoldOptions(ctx));
      return `${header}\n${indent}${body}`;
  }
  function plainString(item, ctx, onComment, onChompKeep) {
      const { type, value } = item;
      const { actualString, implicitKey, indent, inFlow } = ctx;
      if ((implicitKey && /[\n[\]{},]/.test(value)) ||
          (inFlow && /[[\]{},]/.test(value))) {
          return quotedString(value, ctx);
      }
      if (!value ||
          /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(value)) {
          // not allowed:
          // - empty string, '-' or '?'
          // - start with an indicator character (except [?:-]) or /[?-] /
          // - '\n ', ': ' or ' \n' anywhere
          // - '#' not preceded by a non-space char
          // - end with ' ' or ':'
          return implicitKey || inFlow || !value.includes('\n')
              ? quotedString(value, ctx)
              : blockString(item, ctx, onComment, onChompKeep);
      }
      if (!implicitKey &&
          !inFlow &&
          type !== Scalar.PLAIN &&
          value.includes('\n')) {
          // Where allowed & type not set explicitly, prefer block style for multiline strings
          return blockString(item, ctx, onComment, onChompKeep);
      }
      if (indent === '' && containsDocumentMarker(value)) {
          ctx.forceBlockIndent = true;
          return blockString(item, ctx, onComment, onChompKeep);
      }
      const str = value.replace(/\n+/g, `$&\n${indent}`);
      // Verify that output will be parsed as a string, as e.g. plain numbers and
      // booleans get parsed with those types in v1.2 (e.g. '42', 'true' & '0.9e-3'),
      // and others in v1.1.
      if (actualString) {
          const test = (tag) => tag.default && tag.tag !== 'tag:yaml.org,2002:str' && tag.test?.test(str);
          const { compat, tags } = ctx.doc.schema;
          if (tags.some(test) || compat?.some(test))
              return quotedString(value, ctx);
      }
      return implicitKey
          ? str
          : foldFlowLines(str, indent, FOLD_FLOW, getFoldOptions(ctx));
  }
  function stringifyString(item, ctx, onComment, onChompKeep) {
      const { implicitKey, inFlow } = ctx;
      const ss = typeof item.value === 'string'
          ? item
          : Object.assign({}, item, { value: String(item.value) });
      let { type } = item;
      if (type !== Scalar.QUOTE_DOUBLE) {
          // force double quotes on control characters & unpaired surrogates
          if (/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(ss.value))
              type = Scalar.QUOTE_DOUBLE;
      }
      const _stringify = (_type) => {
          switch (_type) {
              case Scalar.BLOCK_FOLDED:
              case Scalar.BLOCK_LITERAL:
                  return implicitKey || inFlow
                      ? quotedString(ss.value, ctx) // blocks are not valid inside flow containers
                      : blockString(ss, ctx, onComment, onChompKeep);
              case Scalar.QUOTE_DOUBLE:
                  return doubleQuotedString(ss.value, ctx);
              case Scalar.QUOTE_SINGLE:
                  return singleQuotedString(ss.value, ctx);
              case Scalar.PLAIN:
                  return plainString(ss, ctx, onComment, onChompKeep);
              default:
                  return null;
          }
      };
      let res = _stringify(type);
      if (res === null) {
          const { defaultKeyType, defaultStringType } = ctx.options;
          const t = (implicitKey && defaultKeyType) || defaultStringType;
          res = _stringify(t);
          if (res === null)
              throw new Error(`Unsupported default string type ${t}`);
      }
      return res;
  }

  function createStringifyContext(doc, options) {
      const opt = Object.assign({
          blockQuote: true,
          commentString: stringifyComment,
          defaultKeyType: null,
          defaultStringType: 'PLAIN',
          directives: null,
          doubleQuotedAsJSON: false,
          doubleQuotedMinMultiLineLength: 40,
          falseStr: 'false',
          indentSeq: true,
          lineWidth: 80,
          minContentWidth: 20,
          nullStr: 'null',
          simpleKeys: false,
          singleQuote: null,
          trueStr: 'true',
          verifyAliasOrder: true
      }, doc.schema.toStringOptions, options);
      let inFlow;
      switch (opt.collectionStyle) {
          case 'block':
              inFlow = false;
              break;
          case 'flow':
              inFlow = true;
              break;
          default:
              inFlow = null;
      }
      return {
          anchors: new Set(),
          doc,
          indent: '',
          indentStep: typeof opt.indent === 'number' ? ' '.repeat(opt.indent) : '  ',
          inFlow,
          options: opt
      };
  }
  function getTagObject(tags, item) {
      if (item.tag) {
          const match = tags.filter(t => t.tag === item.tag);
          if (match.length > 0)
              return match.find(t => t.format === item.format) ?? match[0];
      }
      let tagObj = undefined;
      let obj;
      if (isScalar(item)) {
          obj = item.value;
          const match = tags.filter(t => t.identify?.(obj));
          tagObj =
              match.find(t => t.format === item.format) ?? match.find(t => !t.format);
      }
      else {
          obj = item;
          tagObj = tags.find(t => t.nodeClass && obj instanceof t.nodeClass);
      }
      if (!tagObj) {
          const name = obj?.constructor?.name ?? typeof obj;
          throw new Error(`Tag not resolved for ${name} value`);
      }
      return tagObj;
  }
  // needs to be called before value stringifier to allow for circular anchor refs
  function stringifyProps(node, tagObj, { anchors, doc }) {
      if (!doc.directives)
          return '';
      const props = [];
      const anchor = (isScalar(node) || isCollection(node)) && node.anchor;
      if (anchor && anchorIsValid(anchor)) {
          anchors.add(anchor);
          props.push(`&${anchor}`);
      }
      const tag = node.tag ? node.tag : tagObj.default ? null : tagObj.tag;
      if (tag)
          props.push(doc.directives.tagString(tag));
      return props.join(' ');
  }
  function stringify$1(item, ctx, onComment, onChompKeep) {
      if (isPair(item))
          return item.toString(ctx, onComment, onChompKeep);
      if (isAlias(item)) {
          if (ctx.doc.directives)
              return item.toString(ctx);
          if (ctx.resolvedAliases?.has(item)) {
              throw new TypeError(`Cannot stringify circular structure without alias nodes`);
          }
          else {
              if (ctx.resolvedAliases)
                  ctx.resolvedAliases.add(item);
              else
                  ctx.resolvedAliases = new Set([item]);
              item = item.resolve(ctx.doc);
          }
      }
      let tagObj = undefined;
      const node = isNode(item)
          ? item
          : ctx.doc.createNode(item, { onTagObj: o => (tagObj = o) });
      if (!tagObj)
          tagObj = getTagObject(ctx.doc.schema.tags, node);
      const props = stringifyProps(node, tagObj, ctx);
      if (props.length > 0)
          ctx.indentAtStart = (ctx.indentAtStart ?? 0) + props.length + 1;
      const str = typeof tagObj.stringify === 'function'
          ? tagObj.stringify(node, ctx, onComment, onChompKeep)
          : isScalar(node)
              ? stringifyString(node, ctx, onComment, onChompKeep)
              : node.toString(ctx, onComment, onChompKeep);
      if (!props)
          return str;
      return isScalar(node) || str[0] === '{' || str[0] === '['
          ? `${props} ${str}`
          : `${props}\n${ctx.indent}${str}`;
  }

  function stringifyPair({ key, value }, ctx, onComment, onChompKeep) {
      const { allNullValues, doc, indent, indentStep, options: { commentString, indentSeq, simpleKeys } } = ctx;
      let keyComment = (isNode(key) && key.comment) || null;
      if (simpleKeys) {
          if (keyComment) {
              throw new Error('With simple keys, key nodes cannot have comments');
          }
          if (isCollection(key)) {
              const msg = 'With simple keys, collection cannot be used as a key value';
              throw new Error(msg);
          }
      }
      let explicitKey = !simpleKeys &&
          (!key ||
              (keyComment && value == null && !ctx.inFlow) ||
              isCollection(key) ||
              (isScalar(key)
                  ? key.type === Scalar.BLOCK_FOLDED || key.type === Scalar.BLOCK_LITERAL
                  : typeof key === 'object'));
      ctx = Object.assign({}, ctx, {
          allNullValues: false,
          implicitKey: !explicitKey && (simpleKeys || !allNullValues),
          indent: indent + indentStep
      });
      let keyCommentDone = false;
      let chompKeep = false;
      let str = stringify$1(key, ctx, () => (keyCommentDone = true), () => (chompKeep = true));
      if (!explicitKey && !ctx.inFlow && str.length > 1024) {
          if (simpleKeys)
              throw new Error('With simple keys, single line scalar must not span more than 1024 characters');
          explicitKey = true;
      }
      if (ctx.inFlow) {
          if (allNullValues || value == null) {
              if (keyCommentDone && onComment)
                  onComment();
              return str === '' ? '?' : explicitKey ? `? ${str}` : str;
          }
      }
      else if ((allNullValues && !simpleKeys) || (value == null && explicitKey)) {
          str = `? ${str}`;
          if (keyComment && !keyCommentDone) {
              str += lineComment(str, ctx.indent, commentString(keyComment));
          }
          else if (chompKeep && onChompKeep)
              onChompKeep();
          return str;
      }
      if (keyCommentDone)
          keyComment = null;
      if (explicitKey) {
          if (keyComment)
              str += lineComment(str, ctx.indent, commentString(keyComment));
          str = `? ${str}\n${indent}:`;
      }
      else {
          str = `${str}:`;
          if (keyComment)
              str += lineComment(str, ctx.indent, commentString(keyComment));
      }
      let vcb = '';
      let valueComment = null;
      if (isNode(value)) {
          if (value.spaceBefore)
              vcb = '\n';
          if (value.commentBefore) {
              const cs = commentString(value.commentBefore);
              vcb += `\n${indentComment(cs, ctx.indent)}`;
          }
          valueComment = value.comment;
      }
      else if (value && typeof value === 'object') {
          value = doc.createNode(value);
      }
      ctx.implicitKey = false;
      if (!explicitKey && !keyComment && isScalar(value))
          ctx.indentAtStart = str.length + 1;
      chompKeep = false;
      if (!indentSeq &&
          indentStep.length >= 2 &&
          !ctx.inFlow &&
          !explicitKey &&
          isSeq(value) &&
          !value.flow &&
          !value.tag &&
          !value.anchor) {
          // If indentSeq === false, consider '- ' as part of indentation where possible
          ctx.indent = ctx.indent.substr(2);
      }
      let valueCommentDone = false;
      const valueStr = stringify$1(value, ctx, () => (valueCommentDone = true), () => (chompKeep = true));
      let ws = ' ';
      if (vcb || keyComment) {
          if (valueStr === '' && !ctx.inFlow)
              ws = vcb === '\n' ? '\n\n' : vcb;
          else
              ws = `${vcb}\n${ctx.indent}`;
      }
      else if (!explicitKey && isCollection(value)) {
          const flow = valueStr[0] === '[' || valueStr[0] === '{';
          if (!flow || valueStr.includes('\n'))
              ws = `\n${ctx.indent}`;
      }
      else if (valueStr === '' || valueStr[0] === '\n')
          ws = '';
      str += ws + valueStr;
      if (ctx.inFlow) {
          if (valueCommentDone && onComment)
              onComment();
      }
      else if (valueComment && !valueCommentDone) {
          str += lineComment(str, ctx.indent, commentString(valueComment));
      }
      else if (chompKeep && onChompKeep) {
          onChompKeep();
      }
      return str;
  }

  function warn(logLevel, warning) {
      if (logLevel === 'debug' || logLevel === 'warn') {
          if (typeof process !== 'undefined' && process.emitWarning)
              process.emitWarning(warning);
          else
              console.warn(warning);
      }
  }

  const MERGE_KEY = '<<';
  function addPairToJSMap(ctx, map, { key, value }) {
      if (ctx?.doc.schema.merge && isMergeKey(key)) {
          value = isAlias(value) ? value.resolve(ctx.doc) : value;
          if (isSeq(value))
              for (const it of value.items)
                  mergeToJSMap(ctx, map, it);
          else if (Array.isArray(value))
              for (const it of value)
                  mergeToJSMap(ctx, map, it);
          else
              mergeToJSMap(ctx, map, value);
      }
      else {
          const jsKey = toJS(key, '', ctx);
          if (map instanceof Map) {
              map.set(jsKey, toJS(value, jsKey, ctx));
          }
          else if (map instanceof Set) {
              map.add(jsKey);
          }
          else {
              const stringKey = stringifyKey(key, jsKey, ctx);
              const jsValue = toJS(value, stringKey, ctx);
              if (stringKey in map)
                  Object.defineProperty(map, stringKey, {
                      value: jsValue,
                      writable: true,
                      enumerable: true,
                      configurable: true
                  });
              else
                  map[stringKey] = jsValue;
          }
      }
      return map;
  }
  const isMergeKey = (key) => key === MERGE_KEY ||
      (isScalar(key) &&
          key.value === MERGE_KEY &&
          (!key.type || key.type === Scalar.PLAIN));
  // If the value associated with a merge key is a single mapping node, each of
  // its key/value pairs is inserted into the current mapping, unless the key
  // already exists in it. If the value associated with the merge key is a
  // sequence, then this sequence is expected to contain mapping nodes and each
  // of these nodes is merged in turn according to its order in the sequence.
  // Keys in mapping nodes earlier in the sequence override keys specified in
  // later mapping nodes. -- http://yaml.org/type/merge.html
  function mergeToJSMap(ctx, map, value) {
      const source = ctx && isAlias(value) ? value.resolve(ctx.doc) : value;
      if (!isMap(source))
          throw new Error('Merge sources must be maps or map aliases');
      const srcMap = source.toJSON(null, ctx, Map);
      for (const [key, value] of srcMap) {
          if (map instanceof Map) {
              if (!map.has(key))
                  map.set(key, value);
          }
          else if (map instanceof Set) {
              map.add(key);
          }
          else if (!Object.prototype.hasOwnProperty.call(map, key)) {
              Object.defineProperty(map, key, {
                  value,
                  writable: true,
                  enumerable: true,
                  configurable: true
              });
          }
      }
      return map;
  }
  function stringifyKey(key, jsKey, ctx) {
      if (jsKey === null)
          return '';
      if (typeof jsKey !== 'object')
          return String(jsKey);
      if (isNode(key) && ctx && ctx.doc) {
          const strCtx = createStringifyContext(ctx.doc, {});
          strCtx.anchors = new Set();
          for (const node of ctx.anchors.keys())
              strCtx.anchors.add(node.anchor);
          strCtx.inFlow = true;
          strCtx.inStringifyKey = true;
          const strKey = key.toString(strCtx);
          if (!ctx.mapKeyWarned) {
              let jsonStr = JSON.stringify(strKey);
              if (jsonStr.length > 40)
                  jsonStr = jsonStr.substring(0, 36) + '..."';
              warn(ctx.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${jsonStr}. Set mapAsMap: true to use object keys.`);
              ctx.mapKeyWarned = true;
          }
          return strKey;
      }
      return JSON.stringify(jsKey);
  }

  function createPair(key, value, ctx) {
      const k = createNode(key, undefined, ctx);
      const v = createNode(value, undefined, ctx);
      return new Pair(k, v);
  }
  class Pair {
      constructor(key, value = null) {
          Object.defineProperty(this, NODE_TYPE, { value: PAIR });
          this.key = key;
          this.value = value;
      }
      clone(schema) {
          let { key, value } = this;
          if (isNode(key))
              key = key.clone(schema);
          if (isNode(value))
              value = value.clone(schema);
          return new Pair(key, value);
      }
      toJSON(_, ctx) {
          const pair = ctx?.mapAsMap ? new Map() : {};
          return addPairToJSMap(ctx, pair, this);
      }
      toString(ctx, onComment, onChompKeep) {
          return ctx?.doc
              ? stringifyPair(this, ctx, onComment, onChompKeep)
              : JSON.stringify(this);
      }
  }

  function stringifyCollection(collection, ctx, options) {
      const flow = ctx.inFlow ?? collection.flow;
      const stringify = flow ? stringifyFlowCollection : stringifyBlockCollection;
      return stringify(collection, ctx, options);
  }
  function stringifyBlockCollection({ comment, items }, ctx, { blockItemPrefix, flowChars, itemIndent, onChompKeep, onComment }) {
      const { indent, options: { commentString } } = ctx;
      const itemCtx = Object.assign({}, ctx, { indent: itemIndent, type: null });
      let chompKeep = false; // flag for the preceding node's status
      const lines = [];
      for (let i = 0; i < items.length; ++i) {
          const item = items[i];
          let comment = null;
          if (isNode(item)) {
              if (!chompKeep && item.spaceBefore)
                  lines.push('');
              addCommentBefore(ctx, lines, item.commentBefore, chompKeep);
              if (item.comment)
                  comment = item.comment;
          }
          else if (isPair(item)) {
              const ik = isNode(item.key) ? item.key : null;
              if (ik) {
                  if (!chompKeep && ik.spaceBefore)
                      lines.push('');
                  addCommentBefore(ctx, lines, ik.commentBefore, chompKeep);
              }
          }
          chompKeep = false;
          let str = stringify$1(item, itemCtx, () => (comment = null), () => (chompKeep = true));
          if (comment)
              str += lineComment(str, itemIndent, commentString(comment));
          if (chompKeep && comment)
              chompKeep = false;
          lines.push(blockItemPrefix + str);
      }
      let str;
      if (lines.length === 0) {
          str = flowChars.start + flowChars.end;
      }
      else {
          str = lines[0];
          for (let i = 1; i < lines.length; ++i) {
              const line = lines[i];
              str += line ? `\n${indent}${line}` : '\n';
          }
      }
      if (comment) {
          str += '\n' + indentComment(commentString(comment), indent);
          if (onComment)
              onComment();
      }
      else if (chompKeep && onChompKeep)
          onChompKeep();
      return str;
  }
  function stringifyFlowCollection({ comment, items }, ctx, { flowChars, itemIndent, onComment }) {
      const { indent, indentStep, options: { commentString } } = ctx;
      itemIndent += indentStep;
      const itemCtx = Object.assign({}, ctx, {
          indent: itemIndent,
          inFlow: true,
          type: null
      });
      let reqNewline = false;
      let linesAtValue = 0;
      const lines = [];
      for (let i = 0; i < items.length; ++i) {
          const item = items[i];
          let comment = null;
          if (isNode(item)) {
              if (item.spaceBefore)
                  lines.push('');
              addCommentBefore(ctx, lines, item.commentBefore, false);
              if (item.comment)
                  comment = item.comment;
          }
          else if (isPair(item)) {
              const ik = isNode(item.key) ? item.key : null;
              if (ik) {
                  if (ik.spaceBefore)
                      lines.push('');
                  addCommentBefore(ctx, lines, ik.commentBefore, false);
                  if (ik.comment)
                      reqNewline = true;
              }
              const iv = isNode(item.value) ? item.value : null;
              if (iv) {
                  if (iv.comment)
                      comment = iv.comment;
                  if (iv.commentBefore)
                      reqNewline = true;
              }
              else if (item.value == null && ik && ik.comment) {
                  comment = ik.comment;
              }
          }
          if (comment)
              reqNewline = true;
          let str = stringify$1(item, itemCtx, () => (comment = null));
          if (i < items.length - 1)
              str += ',';
          if (comment)
              str += lineComment(str, itemIndent, commentString(comment));
          if (!reqNewline && (lines.length > linesAtValue || str.includes('\n')))
              reqNewline = true;
          lines.push(str);
          linesAtValue = lines.length;
      }
      let str;
      const { start, end } = flowChars;
      if (lines.length === 0) {
          str = start + end;
      }
      else {
          if (!reqNewline) {
              const len = lines.reduce((sum, line) => sum + line.length + 2, 2);
              reqNewline = len > Collection.maxFlowStringSingleLineLength;
          }
          if (reqNewline) {
              str = start;
              for (const line of lines)
                  str += line ? `\n${indentStep}${indent}${line}` : '\n';
              str += `\n${indent}${end}`;
          }
          else {
              str = `${start} ${lines.join(' ')} ${end}`;
          }
      }
      if (comment) {
          str += lineComment(str, commentString(comment), indent);
          if (onComment)
              onComment();
      }
      return str;
  }
  function addCommentBefore({ indent, options: { commentString } }, lines, comment, chompKeep) {
      if (comment && chompKeep)
          comment = comment.replace(/^\n+/, '');
      if (comment) {
          const ic = indentComment(commentString(comment), indent);
          lines.push(ic.trimStart()); // Avoid double indent on first line
      }
  }

  function findPair(items, key) {
      const k = isScalar(key) ? key.value : key;
      for (const it of items) {
          if (isPair(it)) {
              if (it.key === key || it.key === k)
                  return it;
              if (isScalar(it.key) && it.key.value === k)
                  return it;
          }
      }
      return undefined;
  }
  class YAMLMap extends Collection {
      constructor(schema) {
          super(MAP, schema);
          this.items = [];
      }
      static get tagName() {
          return 'tag:yaml.org,2002:map';
      }
      /**
       * Adds a value to the collection.
       *
       * @param overwrite - If not set `true`, using a key that is already in the
       *   collection will throw. Otherwise, overwrites the previous value.
       */
      add(pair, overwrite) {
          let _pair;
          if (isPair(pair))
              _pair = pair;
          else if (!pair || typeof pair !== 'object' || !('key' in pair)) {
              // In TypeScript, this never happens.
              _pair = new Pair(pair, pair?.value);
          }
          else
              _pair = new Pair(pair.key, pair.value);
          const prev = findPair(this.items, _pair.key);
          const sortEntries = this.schema?.sortMapEntries;
          if (prev) {
              if (!overwrite)
                  throw new Error(`Key ${_pair.key} already set`);
              // For scalars, keep the old node & its comments and anchors
              if (isScalar(prev.value) && isScalarValue(_pair.value))
                  prev.value.value = _pair.value;
              else
                  prev.value = _pair.value;
          }
          else if (sortEntries) {
              const i = this.items.findIndex(item => sortEntries(_pair, item) < 0);
              if (i === -1)
                  this.items.push(_pair);
              else
                  this.items.splice(i, 0, _pair);
          }
          else {
              this.items.push(_pair);
          }
      }
      delete(key) {
          const it = findPair(this.items, key);
          if (!it)
              return false;
          const del = this.items.splice(this.items.indexOf(it), 1);
          return del.length > 0;
      }
      get(key, keepScalar) {
          const it = findPair(this.items, key);
          const node = it?.value;
          return (!keepScalar && isScalar(node) ? node.value : node) ?? undefined;
      }
      has(key) {
          return !!findPair(this.items, key);
      }
      set(key, value) {
          this.add(new Pair(key, value), true);
      }
      /**
       * @param ctx - Conversion context, originally set in Document#toJS()
       * @param {Class} Type - If set, forces the returned collection type
       * @returns Instance of Type, Map, or Object
       */
      toJSON(_, ctx, Type) {
          const map = Type ? new Type() : ctx?.mapAsMap ? new Map() : {};
          if (ctx?.onCreate)
              ctx.onCreate(map);
          for (const item of this.items)
              addPairToJSMap(ctx, map, item);
          return map;
      }
      toString(ctx, onComment, onChompKeep) {
          if (!ctx)
              return JSON.stringify(this);
          for (const item of this.items) {
              if (!isPair(item))
                  throw new Error(`Map items must all be pairs; found ${JSON.stringify(item)} instead`);
          }
          if (!ctx.allNullValues && this.hasAllNullValues(false))
              ctx = Object.assign({}, ctx, { allNullValues: true });
          return stringifyCollection(this, ctx, {
              blockItemPrefix: '',
              flowChars: { start: '{', end: '}' },
              itemIndent: ctx.indent || '',
              onChompKeep,
              onComment
          });
      }
  }

  function createMap(schema, obj, ctx) {
      const { keepUndefined, replacer } = ctx;
      const map = new YAMLMap(schema);
      const add = (key, value) => {
          if (typeof replacer === 'function')
              value = replacer.call(obj, key, value);
          else if (Array.isArray(replacer) && !replacer.includes(key))
              return;
          if (value !== undefined || keepUndefined)
              map.items.push(createPair(key, value, ctx));
      };
      if (obj instanceof Map) {
          for (const [key, value] of obj)
              add(key, value);
      }
      else if (obj && typeof obj === 'object') {
          for (const key of Object.keys(obj))
              add(key, obj[key]);
      }
      if (typeof schema.sortMapEntries === 'function') {
          map.items.sort(schema.sortMapEntries);
      }
      return map;
  }
  const map = {
      collection: 'map',
      createNode: createMap,
      default: true,
      nodeClass: YAMLMap,
      tag: 'tag:yaml.org,2002:map',
      resolve(map, onError) {
          if (!isMap(map))
              onError('Expected a mapping for this tag');
          return map;
      }
  };

  class YAMLSeq extends Collection {
      constructor(schema) {
          super(SEQ, schema);
          this.items = [];
      }
      static get tagName() {
          return 'tag:yaml.org,2002:seq';
      }
      add(value) {
          this.items.push(value);
      }
      /**
       * Removes a value from the collection.
       *
       * `key` must contain a representation of an integer for this to succeed.
       * It may be wrapped in a `Scalar`.
       *
       * @returns `true` if the item was found and removed.
       */
      delete(key) {
          const idx = asItemIndex(key);
          if (typeof idx !== 'number')
              return false;
          const del = this.items.splice(idx, 1);
          return del.length > 0;
      }
      get(key, keepScalar) {
          const idx = asItemIndex(key);
          if (typeof idx !== 'number')
              return undefined;
          const it = this.items[idx];
          return !keepScalar && isScalar(it) ? it.value : it;
      }
      /**
       * Checks if the collection includes a value with the key `key`.
       *
       * `key` must contain a representation of an integer for this to succeed.
       * It may be wrapped in a `Scalar`.
       */
      has(key) {
          const idx = asItemIndex(key);
          return typeof idx === 'number' && idx < this.items.length;
      }
      /**
       * Sets a value in this collection. For `!!set`, `value` needs to be a
       * boolean to add/remove the item from the set.
       *
       * If `key` does not contain a representation of an integer, this will throw.
       * It may be wrapped in a `Scalar`.
       */
      set(key, value) {
          const idx = asItemIndex(key);
          if (typeof idx !== 'number')
              throw new Error(`Expected a valid index, not ${key}.`);
          const prev = this.items[idx];
          if (isScalar(prev) && isScalarValue(value))
              prev.value = value;
          else
              this.items[idx] = value;
      }
      toJSON(_, ctx) {
          const seq = [];
          if (ctx?.onCreate)
              ctx.onCreate(seq);
          let i = 0;
          for (const item of this.items)
              seq.push(toJS(item, String(i++), ctx));
          return seq;
      }
      toString(ctx, onComment, onChompKeep) {
          if (!ctx)
              return JSON.stringify(this);
          return stringifyCollection(this, ctx, {
              blockItemPrefix: '- ',
              flowChars: { start: '[', end: ']' },
              itemIndent: (ctx.indent || '') + '  ',
              onChompKeep,
              onComment
          });
      }
  }
  function asItemIndex(key) {
      let idx = isScalar(key) ? key.value : key;
      if (idx && typeof idx === 'string')
          idx = Number(idx);
      return typeof idx === 'number' && Number.isInteger(idx) && idx >= 0
          ? idx
          : null;
  }

  function createSeq(schema, obj, ctx) {
      const { replacer } = ctx;
      const seq = new YAMLSeq(schema);
      if (obj && Symbol.iterator in Object(obj)) {
          let i = 0;
          for (let it of obj) {
              if (typeof replacer === 'function') {
                  const key = obj instanceof Set ? it : String(i++);
                  it = replacer.call(obj, key, it);
              }
              seq.items.push(createNode(it, undefined, ctx));
          }
      }
      return seq;
  }
  const seq = {
      collection: 'seq',
      createNode: createSeq,
      default: true,
      nodeClass: YAMLSeq,
      tag: 'tag:yaml.org,2002:seq',
      resolve(seq, onError) {
          if (!isSeq(seq))
              onError('Expected a sequence for this tag');
          return seq;
      }
  };

  const string = {
      identify: value => typeof value === 'string',
      default: true,
      tag: 'tag:yaml.org,2002:str',
      resolve: str => str,
      stringify(item, ctx, onComment, onChompKeep) {
          ctx = Object.assign({ actualString: true }, ctx);
          return stringifyString(item, ctx, onComment, onChompKeep);
      }
  };

  const nullTag = {
      identify: value => value == null,
      createNode: () => new Scalar(null),
      default: true,
      tag: 'tag:yaml.org,2002:null',
      test: /^(?:~|[Nn]ull|NULL)?$/,
      resolve: () => new Scalar(null),
      stringify: ({ source }, ctx) => typeof source === 'string' && nullTag.test.test(source)
          ? source
          : ctx.options.nullStr
  };

  const boolTag = {
      identify: value => typeof value === 'boolean',
      default: true,
      tag: 'tag:yaml.org,2002:bool',
      test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
      resolve: str => new Scalar(str[0] === 't' || str[0] === 'T'),
      stringify({ source, value }, ctx) {
          if (source && boolTag.test.test(source)) {
              const sv = source[0] === 't' || source[0] === 'T';
              if (value === sv)
                  return source;
          }
          return value ? ctx.options.trueStr : ctx.options.falseStr;
      }
  };

  function stringifyNumber({ format, minFractionDigits, tag, value }) {
      if (typeof value === 'bigint')
          return String(value);
      const num = typeof value === 'number' ? value : Number(value);
      if (!isFinite(num))
          return isNaN(num) ? '.nan' : num < 0 ? '-.inf' : '.inf';
      let n = JSON.stringify(value);
      if (!format &&
          minFractionDigits &&
          (!tag || tag === 'tag:yaml.org,2002:float') &&
          /^\d/.test(n)) {
          let i = n.indexOf('.');
          if (i < 0) {
              i = n.length;
              n += '.';
          }
          let d = minFractionDigits - (n.length - i - 1);
          while (d-- > 0)
              n += '0';
      }
      return n;
  }

  const floatNaN$1 = {
      identify: value => typeof value === 'number',
      default: true,
      tag: 'tag:yaml.org,2002:float',
      test: /^(?:[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN))$/,
      resolve: str => str.slice(-3).toLowerCase() === 'nan'
          ? NaN
          : str[0] === '-'
              ? Number.NEGATIVE_INFINITY
              : Number.POSITIVE_INFINITY,
      stringify: stringifyNumber
  };
  const floatExp$1 = {
      identify: value => typeof value === 'number',
      default: true,
      tag: 'tag:yaml.org,2002:float',
      format: 'EXP',
      test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
      resolve: str => parseFloat(str),
      stringify(node) {
          const num = Number(node.value);
          return isFinite(num) ? num.toExponential() : stringifyNumber(node);
      }
  };
  const float$1 = {
      identify: value => typeof value === 'number',
      default: true,
      tag: 'tag:yaml.org,2002:float',
      test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
      resolve(str) {
          const node = new Scalar(parseFloat(str));
          const dot = str.indexOf('.');
          if (dot !== -1 && str[str.length - 1] === '0')
              node.minFractionDigits = str.length - dot - 1;
          return node;
      },
      stringify: stringifyNumber
  };

  const intIdentify$2 = (value) => typeof value === 'bigint' || Number.isInteger(value);
  const intResolve$1 = (str, offset, radix, { intAsBigInt }) => (intAsBigInt ? BigInt(str) : parseInt(str.substring(offset), radix));
  function intStringify$1(node, radix, prefix) {
      const { value } = node;
      if (intIdentify$2(value) && value >= 0)
          return prefix + value.toString(radix);
      return stringifyNumber(node);
  }
  const intOct$1 = {
      identify: value => intIdentify$2(value) && value >= 0,
      default: true,
      tag: 'tag:yaml.org,2002:int',
      format: 'OCT',
      test: /^0o[0-7]+$/,
      resolve: (str, _onError, opt) => intResolve$1(str, 2, 8, opt),
      stringify: node => intStringify$1(node, 8, '0o')
  };
  const int$1 = {
      identify: intIdentify$2,
      default: true,
      tag: 'tag:yaml.org,2002:int',
      test: /^[-+]?[0-9]+$/,
      resolve: (str, _onError, opt) => intResolve$1(str, 0, 10, opt),
      stringify: stringifyNumber
  };
  const intHex$1 = {
      identify: value => intIdentify$2(value) && value >= 0,
      default: true,
      tag: 'tag:yaml.org,2002:int',
      format: 'HEX',
      test: /^0x[0-9a-fA-F]+$/,
      resolve: (str, _onError, opt) => intResolve$1(str, 2, 16, opt),
      stringify: node => intStringify$1(node, 16, '0x')
  };

  const schema$2 = [
      map,
      seq,
      string,
      nullTag,
      boolTag,
      intOct$1,
      int$1,
      intHex$1,
      floatNaN$1,
      floatExp$1,
      float$1
  ];

  function intIdentify$1(value) {
      return typeof value === 'bigint' || Number.isInteger(value);
  }
  const stringifyJSON = ({ value }) => JSON.stringify(value);
  const jsonScalars = [
      {
          identify: value => typeof value === 'string',
          default: true,
          tag: 'tag:yaml.org,2002:str',
          resolve: str => str,
          stringify: stringifyJSON
      },
      {
          identify: value => value == null,
          createNode: () => new Scalar(null),
          default: true,
          tag: 'tag:yaml.org,2002:null',
          test: /^null$/,
          resolve: () => null,
          stringify: stringifyJSON
      },
      {
          identify: value => typeof value === 'boolean',
          default: true,
          tag: 'tag:yaml.org,2002:bool',
          test: /^true|false$/,
          resolve: str => str === 'true',
          stringify: stringifyJSON
      },
      {
          identify: intIdentify$1,
          default: true,
          tag: 'tag:yaml.org,2002:int',
          test: /^-?(?:0|[1-9][0-9]*)$/,
          resolve: (str, _onError, { intAsBigInt }) => intAsBigInt ? BigInt(str) : parseInt(str, 10),
          stringify: ({ value }) => intIdentify$1(value) ? value.toString() : JSON.stringify(value)
      },
      {
          identify: value => typeof value === 'number',
          default: true,
          tag: 'tag:yaml.org,2002:float',
          test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
          resolve: str => parseFloat(str),
          stringify: stringifyJSON
      }
  ];
  const jsonError = {
      default: true,
      tag: '',
      test: /^/,
      resolve(str, onError) {
          onError(`Unresolved plain scalar ${JSON.stringify(str)}`);
          return str;
      }
  };
  const schema$1 = [map, seq].concat(jsonScalars, jsonError);

  const binary = {
      identify: value => value instanceof Uint8Array,
      default: false,
      tag: 'tag:yaml.org,2002:binary',
      /**
       * Returns a Buffer in node and an Uint8Array in browsers
       *
       * To use the resulting buffer as an image, you'll want to do something like:
       *
       *   const blob = new Blob([buffer], { type: 'image/jpeg' })
       *   document.querySelector('#photo').src = URL.createObjectURL(blob)
       */
      resolve(src, onError) {
          if (typeof Buffer === 'function') {
              return Buffer.from(src, 'base64');
          }
          else if (typeof atob === 'function') {
              // On IE 11, atob() can't handle newlines
              const str = atob(src.replace(/[\n\r]/g, ''));
              const buffer = new Uint8Array(str.length);
              for (let i = 0; i < str.length; ++i)
                  buffer[i] = str.charCodeAt(i);
              return buffer;
          }
          else {
              onError('This environment does not support reading binary tags; either Buffer or atob is required');
              return src;
          }
      },
      stringify({ comment, type, value }, ctx, onComment, onChompKeep) {
          const buf = value; // checked earlier by binary.identify()
          let str;
          if (typeof Buffer === 'function') {
              str =
                  buf instanceof Buffer
                      ? buf.toString('base64')
                      : Buffer.from(buf.buffer).toString('base64');
          }
          else if (typeof btoa === 'function') {
              let s = '';
              for (let i = 0; i < buf.length; ++i)
                  s += String.fromCharCode(buf[i]);
              str = btoa(s);
          }
          else {
              throw new Error('This environment does not support writing binary tags; either Buffer or btoa is required');
          }
          if (!type)
              type = Scalar.BLOCK_LITERAL;
          if (type !== Scalar.QUOTE_DOUBLE) {
              const lineWidth = Math.max(ctx.options.lineWidth - ctx.indent.length, ctx.options.minContentWidth);
              const n = Math.ceil(str.length / lineWidth);
              const lines = new Array(n);
              for (let i = 0, o = 0; i < n; ++i, o += lineWidth) {
                  lines[i] = str.substr(o, lineWidth);
              }
              str = lines.join(type === Scalar.BLOCK_LITERAL ? '\n' : ' ');
          }
          return stringifyString({ comment, type, value: str }, ctx, onComment, onChompKeep);
      }
  };

  function resolvePairs(seq, onError) {
      if (isSeq(seq)) {
          for (let i = 0; i < seq.items.length; ++i) {
              let item = seq.items[i];
              if (isPair(item))
                  continue;
              else if (isMap(item)) {
                  if (item.items.length > 1)
                      onError('Each pair must have its own sequence indicator');
                  const pair = item.items[0] || new Pair(new Scalar(null));
                  if (item.commentBefore)
                      pair.key.commentBefore = pair.key.commentBefore
                          ? `${item.commentBefore}\n${pair.key.commentBefore}`
                          : item.commentBefore;
                  if (item.comment) {
                      const cn = pair.value ?? pair.key;
                      cn.comment = cn.comment
                          ? `${item.comment}\n${cn.comment}`
                          : item.comment;
                  }
                  item = pair;
              }
              seq.items[i] = isPair(item) ? item : new Pair(item);
          }
      }
      else
          onError('Expected a sequence for this tag');
      return seq;
  }
  function createPairs(schema, iterable, ctx) {
      const { replacer } = ctx;
      const pairs = new YAMLSeq(schema);
      pairs.tag = 'tag:yaml.org,2002:pairs';
      let i = 0;
      if (iterable && Symbol.iterator in Object(iterable))
          for (let it of iterable) {
              if (typeof replacer === 'function')
                  it = replacer.call(iterable, String(i++), it);
              let key, value;
              if (Array.isArray(it)) {
                  if (it.length === 2) {
                      key = it[0];
                      value = it[1];
                  }
                  else
                      throw new TypeError(`Expected [key, value] tuple: ${it}`);
              }
              else if (it && it instanceof Object) {
                  const keys = Object.keys(it);
                  if (keys.length === 1) {
                      key = keys[0];
                      value = it[key];
                  }
                  else
                      throw new TypeError(`Expected { key: value } tuple: ${it}`);
              }
              else {
                  key = it;
              }
              pairs.items.push(createPair(key, value, ctx));
          }
      return pairs;
  }
  const pairs = {
      collection: 'seq',
      default: false,
      tag: 'tag:yaml.org,2002:pairs',
      resolve: resolvePairs,
      createNode: createPairs
  };

  class YAMLOMap extends YAMLSeq {
      constructor() {
          super();
          this.add = YAMLMap.prototype.add.bind(this);
          this.delete = YAMLMap.prototype.delete.bind(this);
          this.get = YAMLMap.prototype.get.bind(this);
          this.has = YAMLMap.prototype.has.bind(this);
          this.set = YAMLMap.prototype.set.bind(this);
          this.tag = YAMLOMap.tag;
      }
      /**
       * If `ctx` is given, the return type is actually `Map<unknown, unknown>`,
       * but TypeScript won't allow widening the signature of a child method.
       */
      toJSON(_, ctx) {
          if (!ctx)
              return super.toJSON(_);
          const map = new Map();
          if (ctx?.onCreate)
              ctx.onCreate(map);
          for (const pair of this.items) {
              let key, value;
              if (isPair(pair)) {
                  key = toJS(pair.key, '', ctx);
                  value = toJS(pair.value, key, ctx);
              }
              else {
                  key = toJS(pair, '', ctx);
              }
              if (map.has(key))
                  throw new Error('Ordered maps must not include duplicate keys');
              map.set(key, value);
          }
          return map;
      }
  }
  YAMLOMap.tag = 'tag:yaml.org,2002:omap';
  const omap = {
      collection: 'seq',
      identify: value => value instanceof Map,
      nodeClass: YAMLOMap,
      default: false,
      tag: 'tag:yaml.org,2002:omap',
      resolve(seq, onError) {
          const pairs = resolvePairs(seq, onError);
          const seenKeys = [];
          for (const { key } of pairs.items) {
              if (isScalar(key)) {
                  if (seenKeys.includes(key.value)) {
                      onError(`Ordered maps must not include duplicate keys: ${key.value}`);
                  }
                  else {
                      seenKeys.push(key.value);
                  }
              }
          }
          return Object.assign(new YAMLOMap(), pairs);
      },
      createNode(schema, iterable, ctx) {
          const pairs = createPairs(schema, iterable, ctx);
          const omap = new YAMLOMap();
          omap.items = pairs.items;
          return omap;
      }
  };

  function boolStringify({ value, source }, ctx) {
      const boolObj = value ? trueTag : falseTag;
      if (source && boolObj.test.test(source))
          return source;
      return value ? ctx.options.trueStr : ctx.options.falseStr;
  }
  const trueTag = {
      identify: value => value === true,
      default: true,
      tag: 'tag:yaml.org,2002:bool',
      test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
      resolve: () => new Scalar(true),
      stringify: boolStringify
  };
  const falseTag = {
      identify: value => value === false,
      default: true,
      tag: 'tag:yaml.org,2002:bool',
      test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,
      resolve: () => new Scalar(false),
      stringify: boolStringify
  };

  const floatNaN = {
      identify: value => typeof value === 'number',
      default: true,
      tag: 'tag:yaml.org,2002:float',
      test: /^[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN)$/,
      resolve: (str) => str.slice(-3).toLowerCase() === 'nan'
          ? NaN
          : str[0] === '-'
              ? Number.NEGATIVE_INFINITY
              : Number.POSITIVE_INFINITY,
      stringify: stringifyNumber
  };
  const floatExp = {
      identify: value => typeof value === 'number',
      default: true,
      tag: 'tag:yaml.org,2002:float',
      format: 'EXP',
      test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
      resolve: (str) => parseFloat(str.replace(/_/g, '')),
      stringify(node) {
          const num = Number(node.value);
          return isFinite(num) ? num.toExponential() : stringifyNumber(node);
      }
  };
  const float = {
      identify: value => typeof value === 'number',
      default: true,
      tag: 'tag:yaml.org,2002:float',
      test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
      resolve(str) {
          const node = new Scalar(parseFloat(str.replace(/_/g, '')));
          const dot = str.indexOf('.');
          if (dot !== -1) {
              const f = str.substring(dot + 1).replace(/_/g, '');
              if (f[f.length - 1] === '0')
                  node.minFractionDigits = f.length;
          }
          return node;
      },
      stringify: stringifyNumber
  };

  const intIdentify = (value) => typeof value === 'bigint' || Number.isInteger(value);
  function intResolve(str, offset, radix, { intAsBigInt }) {
      const sign = str[0];
      if (sign === '-' || sign === '+')
          offset += 1;
      str = str.substring(offset).replace(/_/g, '');
      if (intAsBigInt) {
          switch (radix) {
              case 2:
                  str = `0b${str}`;
                  break;
              case 8:
                  str = `0o${str}`;
                  break;
              case 16:
                  str = `0x${str}`;
                  break;
          }
          const n = BigInt(str);
          return sign === '-' ? BigInt(-1) * n : n;
      }
      const n = parseInt(str, radix);
      return sign === '-' ? -1 * n : n;
  }
  function intStringify(node, radix, prefix) {
      const { value } = node;
      if (intIdentify(value)) {
          const str = value.toString(radix);
          return value < 0 ? '-' + prefix + str.substr(1) : prefix + str;
      }
      return stringifyNumber(node);
  }
  const intBin = {
      identify: intIdentify,
      default: true,
      tag: 'tag:yaml.org,2002:int',
      format: 'BIN',
      test: /^[-+]?0b[0-1_]+$/,
      resolve: (str, _onError, opt) => intResolve(str, 2, 2, opt),
      stringify: node => intStringify(node, 2, '0b')
  };
  const intOct = {
      identify: intIdentify,
      default: true,
      tag: 'tag:yaml.org,2002:int',
      format: 'OCT',
      test: /^[-+]?0[0-7_]+$/,
      resolve: (str, _onError, opt) => intResolve(str, 1, 8, opt),
      stringify: node => intStringify(node, 8, '0')
  };
  const int = {
      identify: intIdentify,
      default: true,
      tag: 'tag:yaml.org,2002:int',
      test: /^[-+]?[0-9][0-9_]*$/,
      resolve: (str, _onError, opt) => intResolve(str, 0, 10, opt),
      stringify: stringifyNumber
  };
  const intHex = {
      identify: intIdentify,
      default: true,
      tag: 'tag:yaml.org,2002:int',
      format: 'HEX',
      test: /^[-+]?0x[0-9a-fA-F_]+$/,
      resolve: (str, _onError, opt) => intResolve(str, 2, 16, opt),
      stringify: node => intStringify(node, 16, '0x')
  };

  class YAMLSet extends YAMLMap {
      constructor(schema) {
          super(schema);
          this.tag = YAMLSet.tag;
      }
      add(key) {
          let pair;
          if (isPair(key))
              pair = key;
          else if (key &&
              typeof key === 'object' &&
              'key' in key &&
              'value' in key &&
              key.value === null)
              pair = new Pair(key.key, null);
          else
              pair = new Pair(key, null);
          const prev = findPair(this.items, pair.key);
          if (!prev)
              this.items.push(pair);
      }
      /**
       * If `keepPair` is `true`, returns the Pair matching `key`.
       * Otherwise, returns the value of that Pair's key.
       */
      get(key, keepPair) {
          const pair = findPair(this.items, key);
          return !keepPair && isPair(pair)
              ? isScalar(pair.key)
                  ? pair.key.value
                  : pair.key
              : pair;
      }
      set(key, value) {
          if (typeof value !== 'boolean')
              throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof value}`);
          const prev = findPair(this.items, key);
          if (prev && !value) {
              this.items.splice(this.items.indexOf(prev), 1);
          }
          else if (!prev && value) {
              this.items.push(new Pair(key));
          }
      }
      toJSON(_, ctx) {
          return super.toJSON(_, ctx, Set);
      }
      toString(ctx, onComment, onChompKeep) {
          if (!ctx)
              return JSON.stringify(this);
          if (this.hasAllNullValues(true))
              return super.toString(Object.assign({}, ctx, { allNullValues: true }), onComment, onChompKeep);
          else
              throw new Error('Set items must all have null values');
      }
  }
  YAMLSet.tag = 'tag:yaml.org,2002:set';
  const set = {
      collection: 'map',
      identify: value => value instanceof Set,
      nodeClass: YAMLSet,
      default: false,
      tag: 'tag:yaml.org,2002:set',
      resolve(map, onError) {
          if (isMap(map)) {
              if (map.hasAllNullValues(true))
                  return Object.assign(new YAMLSet(), map);
              else
                  onError('Set items must all have null values');
          }
          else
              onError('Expected a mapping for this tag');
          return map;
      },
      createNode(schema, iterable, ctx) {
          const { replacer } = ctx;
          const set = new YAMLSet(schema);
          if (iterable && Symbol.iterator in Object(iterable))
              for (let value of iterable) {
                  if (typeof replacer === 'function')
                      value = replacer.call(iterable, value, value);
                  set.items.push(createPair(value, null, ctx));
              }
          return set;
      }
  };

  /** Internal types handle bigint as number, because TS can't figure it out. */
  function parseSexagesimal(str, asBigInt) {
      const sign = str[0];
      const parts = sign === '-' || sign === '+' ? str.substring(1) : str;
      const num = (n) => asBigInt ? BigInt(n) : Number(n);
      const res = parts
          .replace(/_/g, '')
          .split(':')
          .reduce((res, p) => res * num(60) + num(p), num(0));
      return (sign === '-' ? num(-1) * res : res);
  }
  /**
   * hhhh:mm:ss.sss
   *
   * Internal types handle bigint as number, because TS can't figure it out.
   */
  function stringifySexagesimal(node) {
      let { value } = node;
      let num = (n) => n;
      if (typeof value === 'bigint')
          num = n => BigInt(n);
      else if (isNaN(value) || !isFinite(value))
          return stringifyNumber(node);
      let sign = '';
      if (value < 0) {
          sign = '-';
          value *= num(-1);
      }
      const _60 = num(60);
      const parts = [value % _60]; // seconds, including ms
      if (value < 60) {
          parts.unshift(0); // at least one : is required
      }
      else {
          value = (value - parts[0]) / _60;
          parts.unshift(value % _60); // minutes
          if (value >= 60) {
              value = (value - parts[0]) / _60;
              parts.unshift(value); // hours
          }
      }
      return (sign +
          parts
              .map(n => (n < 10 ? '0' + String(n) : String(n)))
              .join(':')
              .replace(/000000\d*$/, '') // % 60 may introduce error
      );
  }
  const intTime = {
      identify: value => typeof value === 'bigint' || Number.isInteger(value),
      default: true,
      tag: 'tag:yaml.org,2002:int',
      format: 'TIME',
      test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
      resolve: (str, _onError, { intAsBigInt }) => parseSexagesimal(str, intAsBigInt),
      stringify: stringifySexagesimal
  };
  const floatTime = {
      identify: value => typeof value === 'number',
      default: true,
      tag: 'tag:yaml.org,2002:float',
      format: 'TIME',
      test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
      resolve: str => parseSexagesimal(str, false),
      stringify: stringifySexagesimal
  };
  const timestamp = {
      identify: value => value instanceof Date,
      default: true,
      tag: 'tag:yaml.org,2002:timestamp',
      // If the time zone is omitted, the timestamp is assumed to be specified in UTC. The time part
      // may be omitted altogether, resulting in a date format. In such a case, the time part is
      // assumed to be 00:00:00Z (start of day, UTC).
      test: RegExp('^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})' + // YYYY-Mm-Dd
          '(?:' + // time is optional
          '(?:t|T|[ \\t]+)' + // t | T | whitespace
          '([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)' + // Hh:Mm:Ss(.ss)?
          '(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?' + // Z | +5 | -03:30
          ')?$'),
      resolve(str) {
          const match = str.match(timestamp.test);
          if (!match)
              throw new Error('!!timestamp expects a date, starting with yyyy-mm-dd');
          const [, year, month, day, hour, minute, second] = match.map(Number);
          const millisec = match[7] ? Number((match[7] + '00').substr(1, 3)) : 0;
          let date = Date.UTC(year, month - 1, day, hour || 0, minute || 0, second || 0, millisec);
          const tz = match[8];
          if (tz && tz !== 'Z') {
              let d = parseSexagesimal(tz, false);
              if (Math.abs(d) < 30)
                  d *= 60;
              date -= 60000 * d;
          }
          return new Date(date);
      },
      stringify: ({ value }) => value.toISOString().replace(/((T00:00)?:00)?\.000Z$/, '')
  };

  const schema = [
      map,
      seq,
      string,
      nullTag,
      trueTag,
      falseTag,
      intBin,
      intOct,
      int,
      intHex,
      floatNaN,
      floatExp,
      float,
      binary,
      omap,
      pairs,
      set,
      intTime,
      floatTime,
      timestamp
  ];

  const schemas = new Map([
      ['core', schema$2],
      ['failsafe', [map, seq, string]],
      ['json', schema$1],
      ['yaml11', schema],
      ['yaml-1.1', schema]
  ]);
  const tagsByName = {
      binary,
      bool: boolTag,
      float: float$1,
      floatExp: floatExp$1,
      floatNaN: floatNaN$1,
      floatTime,
      int: int$1,
      intHex: intHex$1,
      intOct: intOct$1,
      intTime,
      map,
      null: nullTag,
      omap,
      pairs,
      seq,
      set,
      timestamp
  };
  const coreKnownTags = {
      'tag:yaml.org,2002:binary': binary,
      'tag:yaml.org,2002:omap': omap,
      'tag:yaml.org,2002:pairs': pairs,
      'tag:yaml.org,2002:set': set,
      'tag:yaml.org,2002:timestamp': timestamp
  };
  function getTags(customTags, schemaName) {
      let tags = schemas.get(schemaName);
      if (!tags) {
          if (Array.isArray(customTags))
              tags = [];
          else {
              const keys = Array.from(schemas.keys())
                  .filter(key => key !== 'yaml11')
                  .map(key => JSON.stringify(key))
                  .join(', ');
              throw new Error(`Unknown schema "${schemaName}"; use one of ${keys} or define customTags array`);
          }
      }
      if (Array.isArray(customTags)) {
          for (const tag of customTags)
              tags = tags.concat(tag);
      }
      else if (typeof customTags === 'function') {
          tags = customTags(tags.slice());
      }
      return tags.map(tag => {
          if (typeof tag !== 'string')
              return tag;
          const tagObj = tagsByName[tag];
          if (tagObj)
              return tagObj;
          const keys = Object.keys(tagsByName)
              .map(key => JSON.stringify(key))
              .join(', ');
          throw new Error(`Unknown custom tag "${tag}"; use one of ${keys}`);
      });
  }

  const sortMapEntriesByKey = (a, b) => a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
  class Schema {
      constructor({ compat, customTags, merge, resolveKnownTags, schema, sortMapEntries, toStringDefaults }) {
          this.compat = Array.isArray(compat)
              ? getTags(compat, 'compat')
              : compat
                  ? getTags(null, compat)
                  : null;
          this.merge = !!merge;
          this.name = (typeof schema === 'string' && schema) || 'core';
          this.knownTags = resolveKnownTags ? coreKnownTags : {};
          this.tags = getTags(customTags, this.name);
          this.toStringOptions = toStringDefaults ?? null;
          Object.defineProperty(this, MAP, { value: map });
          Object.defineProperty(this, SCALAR$1, { value: string });
          Object.defineProperty(this, SEQ, { value: seq });
          // Used by createMap()
          this.sortMapEntries =
              typeof sortMapEntries === 'function'
                  ? sortMapEntries
                  : sortMapEntries === true
                      ? sortMapEntriesByKey
                      : null;
      }
      clone() {
          const copy = Object.create(Schema.prototype, Object.getOwnPropertyDescriptors(this));
          copy.tags = this.tags.slice();
          return copy;
      }
  }

  function stringifyDocument(doc, options) {
      const lines = [];
      let hasDirectives = options.directives === true;
      if (options.directives !== false && doc.directives) {
          const dir = doc.directives.toString(doc);
          if (dir) {
              lines.push(dir);
              hasDirectives = true;
          }
          else if (doc.directives.docStart)
              hasDirectives = true;
      }
      if (hasDirectives)
          lines.push('---');
      const ctx = createStringifyContext(doc, options);
      const { commentString } = ctx.options;
      if (doc.commentBefore) {
          if (lines.length !== 1)
              lines.unshift('');
          const cs = commentString(doc.commentBefore);
          lines.unshift(indentComment(cs, ''));
      }
      let chompKeep = false;
      let contentComment = null;
      if (doc.contents) {
          if (isNode(doc.contents)) {
              if (doc.contents.spaceBefore && hasDirectives)
                  lines.push('');
              if (doc.contents.commentBefore) {
                  const cs = commentString(doc.contents.commentBefore);
                  lines.push(indentComment(cs, ''));
              }
              // top-level block scalars need to be indented if followed by a comment
              ctx.forceBlockIndent = !!doc.comment;
              contentComment = doc.contents.comment;
          }
          const onChompKeep = contentComment ? undefined : () => (chompKeep = true);
          let body = stringify$1(doc.contents, ctx, () => (contentComment = null), onChompKeep);
          if (contentComment)
              body += lineComment(body, '', commentString(contentComment));
          if ((body[0] === '|' || body[0] === '>') &&
              lines[lines.length - 1] === '---') {
              // Top-level block scalars with a preceding doc marker ought to use the
              // same line for their header.
              lines[lines.length - 1] = `--- ${body}`;
          }
          else
              lines.push(body);
      }
      else {
          lines.push(stringify$1(doc.contents, ctx));
      }
      if (doc.directives?.docEnd) {
          if (doc.comment) {
              const cs = commentString(doc.comment);
              if (cs.includes('\n')) {
                  lines.push('...');
                  lines.push(indentComment(cs, ''));
              }
              else {
                  lines.push(`... ${cs}`);
              }
          }
          else {
              lines.push('...');
          }
      }
      else {
          let dc = doc.comment;
          if (dc && chompKeep)
              dc = dc.replace(/^\n+/, '');
          if (dc) {
              if ((!chompKeep || contentComment) && lines[lines.length - 1] !== '')
                  lines.push('');
              lines.push(indentComment(commentString(dc), ''));
          }
      }
      return lines.join('\n') + '\n';
  }

  /**
   * Applies the JSON.parse reviver algorithm as defined in the ECMA-262 spec,
   * in section 24.5.1.1 "Runtime Semantics: InternalizeJSONProperty" of the
   * 2021 edition: https://tc39.es/ecma262/#sec-json.parse
   *
   * Includes extensions for handling Map and Set objects.
   */
  function applyReviver(reviver, obj, key, val) {
      if (val && typeof val === 'object') {
          if (Array.isArray(val)) {
              for (let i = 0, len = val.length; i < len; ++i) {
                  const v0 = val[i];
                  const v1 = applyReviver(reviver, val, String(i), v0);
                  if (v1 === undefined)
                      delete val[i];
                  else if (v1 !== v0)
                      val[i] = v1;
              }
          }
          else if (val instanceof Map) {
              for (const k of Array.from(val.keys())) {
                  const v0 = val.get(k);
                  const v1 = applyReviver(reviver, val, k, v0);
                  if (v1 === undefined)
                      val.delete(k);
                  else if (v1 !== v0)
                      val.set(k, v1);
              }
          }
          else if (val instanceof Set) {
              for (const v0 of Array.from(val)) {
                  const v1 = applyReviver(reviver, val, v0, v0);
                  if (v1 === undefined)
                      val.delete(v0);
                  else if (v1 !== v0) {
                      val.delete(v0);
                      val.add(v1);
                  }
              }
          }
          else {
              for (const [k, v0] of Object.entries(val)) {
                  const v1 = applyReviver(reviver, val, k, v0);
                  if (v1 === undefined)
                      delete val[k];
                  else if (v1 !== v0)
                      val[k] = v1;
              }
          }
      }
      return reviver.call(obj, key, val);
  }

  class Document {
      constructor(value, replacer, options) {
          /** A comment before this Document */
          this.commentBefore = null;
          /** A comment immediately after this Document */
          this.comment = null;
          /** Errors encountered during parsing. */
          this.errors = [];
          /** Warnings encountered during parsing. */
          this.warnings = [];
          Object.defineProperty(this, NODE_TYPE, { value: DOC });
          let _replacer = null;
          if (typeof replacer === 'function' || Array.isArray(replacer)) {
              _replacer = replacer;
          }
          else if (options === undefined && replacer) {
              options = replacer;
              replacer = undefined;
          }
          const opt = Object.assign({
              intAsBigInt: false,
              keepSourceTokens: false,
              logLevel: 'warn',
              prettyErrors: true,
              strict: true,
              uniqueKeys: true,
              version: '1.2'
          }, options);
          this.options = opt;
          let { version } = opt;
          if (options?._directives) {
              this.directives = options._directives.atDocument();
              if (this.directives.yaml.explicit)
                  version = this.directives.yaml.version;
          }
          else
              this.directives = new Directives({ version });
          this.setSchema(version, options);
          if (value === undefined)
              this.contents = null;
          else {
              this.contents = this.createNode(value, _replacer, options);
          }
      }
      /**
       * Create a deep copy of this Document and its contents.
       *
       * Custom Node values that inherit from `Object` still refer to their original instances.
       */
      clone() {
          const copy = Object.create(Document.prototype, {
              [NODE_TYPE]: { value: DOC }
          });
          copy.commentBefore = this.commentBefore;
          copy.comment = this.comment;
          copy.errors = this.errors.slice();
          copy.warnings = this.warnings.slice();
          copy.options = Object.assign({}, this.options);
          if (this.directives)
              copy.directives = this.directives.clone();
          copy.schema = this.schema.clone();
          copy.contents = isNode(this.contents)
              ? this.contents.clone(copy.schema)
              : this.contents;
          if (this.range)
              copy.range = this.range.slice();
          return copy;
      }
      /** Adds a value to the document. */
      add(value) {
          if (assertCollection(this.contents))
              this.contents.add(value);
      }
      /** Adds a value to the document. */
      addIn(path, value) {
          if (assertCollection(this.contents))
              this.contents.addIn(path, value);
      }
      /**
       * Create a new `Alias` node, ensuring that the target `node` has the required anchor.
       *
       * If `node` already has an anchor, `name` is ignored.
       * Otherwise, the `node.anchor` value will be set to `name`,
       * or if an anchor with that name is already present in the document,
       * `name` will be used as a prefix for a new unique anchor.
       * If `name` is undefined, the generated anchor will use 'a' as a prefix.
       */
      createAlias(node, name) {
          if (!node.anchor) {
              const prev = anchorNames(this);
              node.anchor =
                  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
                  !name || prev.has(name) ? findNewAnchor(name || 'a', prev) : name;
          }
          return new Alias(node.anchor);
      }
      createNode(value, replacer, options) {
          let _replacer = undefined;
          if (typeof replacer === 'function') {
              value = replacer.call({ '': value }, '', value);
              _replacer = replacer;
          }
          else if (Array.isArray(replacer)) {
              const keyToStr = (v) => typeof v === 'number' || v instanceof String || v instanceof Number;
              const asStr = replacer.filter(keyToStr).map(String);
              if (asStr.length > 0)
                  replacer = replacer.concat(asStr);
              _replacer = replacer;
          }
          else if (options === undefined && replacer) {
              options = replacer;
              replacer = undefined;
          }
          const { aliasDuplicateObjects, anchorPrefix, flow, keepUndefined, onTagObj, tag } = options ?? {};
          const { onAnchor, setAnchors, sourceObjects } = createNodeAnchors(this, 
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          anchorPrefix || 'a');
          const ctx = {
              aliasDuplicateObjects: aliasDuplicateObjects ?? true,
              keepUndefined: keepUndefined ?? false,
              onAnchor,
              onTagObj,
              replacer: _replacer,
              schema: this.schema,
              sourceObjects
          };
          const node = createNode(value, tag, ctx);
          if (flow && isCollection(node))
              node.flow = true;
          setAnchors();
          return node;
      }
      /**
       * Convert a key and a value into a `Pair` using the current schema,
       * recursively wrapping all values as `Scalar` or `Collection` nodes.
       */
      createPair(key, value, options = {}) {
          const k = this.createNode(key, null, options);
          const v = this.createNode(value, null, options);
          return new Pair(k, v);
      }
      /**
       * Removes a value from the document.
       * @returns `true` if the item was found and removed.
       */
      delete(key) {
          return assertCollection(this.contents) ? this.contents.delete(key) : false;
      }
      /**
       * Removes a value from the document.
       * @returns `true` if the item was found and removed.
       */
      deleteIn(path) {
          if (isEmptyPath(path)) {
              if (this.contents == null)
                  return false;
              this.contents = null;
              return true;
          }
          return assertCollection(this.contents)
              ? this.contents.deleteIn(path)
              : false;
      }
      /**
       * Returns item at `key`, or `undefined` if not found. By default unwraps
       * scalar values from their surrounding node; to disable set `keepScalar` to
       * `true` (collections are always returned intact).
       */
      get(key, keepScalar) {
          return isCollection(this.contents)
              ? this.contents.get(key, keepScalar)
              : undefined;
      }
      /**
       * Returns item at `path`, or `undefined` if not found. By default unwraps
       * scalar values from their surrounding node; to disable set `keepScalar` to
       * `true` (collections are always returned intact).
       */
      getIn(path, keepScalar) {
          if (isEmptyPath(path))
              return !keepScalar && isScalar(this.contents)
                  ? this.contents.value
                  : this.contents;
          return isCollection(this.contents)
              ? this.contents.getIn(path, keepScalar)
              : undefined;
      }
      /**
       * Checks if the document includes a value with the key `key`.
       */
      has(key) {
          return isCollection(this.contents) ? this.contents.has(key) : false;
      }
      /**
       * Checks if the document includes a value at `path`.
       */
      hasIn(path) {
          if (isEmptyPath(path))
              return this.contents !== undefined;
          return isCollection(this.contents) ? this.contents.hasIn(path) : false;
      }
      /**
       * Sets a value in this document. For `!!set`, `value` needs to be a
       * boolean to add/remove the item from the set.
       */
      set(key, value) {
          if (this.contents == null) {
              this.contents = collectionFromPath(this.schema, [key], value);
          }
          else if (assertCollection(this.contents)) {
              this.contents.set(key, value);
          }
      }
      /**
       * Sets a value in this document. For `!!set`, `value` needs to be a
       * boolean to add/remove the item from the set.
       */
      setIn(path, value) {
          if (isEmptyPath(path))
              this.contents = value;
          else if (this.contents == null) {
              this.contents = collectionFromPath(this.schema, Array.from(path), value);
          }
          else if (assertCollection(this.contents)) {
              this.contents.setIn(path, value);
          }
      }
      /**
       * Change the YAML version and schema used by the document.
       * A `null` version disables support for directives, explicit tags, anchors, and aliases.
       * It also requires the `schema` option to be given as a `Schema` instance value.
       *
       * Overrides all previously set schema options.
       */
      setSchema(version, options = {}) {
          if (typeof version === 'number')
              version = String(version);
          let opt;
          switch (version) {
              case '1.1':
                  if (this.directives)
                      this.directives.yaml.version = '1.1';
                  else
                      this.directives = new Directives({ version: '1.1' });
                  opt = { merge: true, resolveKnownTags: false, schema: 'yaml-1.1' };
                  break;
              case '1.2':
              case 'next':
                  if (this.directives)
                      this.directives.yaml.version = version;
                  else
                      this.directives = new Directives({ version });
                  opt = { merge: false, resolveKnownTags: true, schema: 'core' };
                  break;
              case null:
                  if (this.directives)
                      delete this.directives;
                  opt = null;
                  break;
              default: {
                  const sv = JSON.stringify(version);
                  throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${sv}`);
              }
          }
          // Not using `instanceof Schema` to allow for duck typing
          if (options.schema instanceof Object)
              this.schema = options.schema;
          else if (opt)
              this.schema = new Schema(Object.assign(opt, options));
          else
              throw new Error(`With a null YAML version, the { schema: Schema } option is required`);
      }
      // json & jsonArg are only used from toJSON()
      toJS({ json, jsonArg, mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
          const ctx = {
              anchors: new Map(),
              doc: this,
              keep: !json,
              mapAsMap: mapAsMap === true,
              mapKeyWarned: false,
              maxAliasCount: typeof maxAliasCount === 'number' ? maxAliasCount : 100,
              stringify: stringify$1
          };
          const res = toJS(this.contents, jsonArg ?? '', ctx);
          if (typeof onAnchor === 'function')
              for (const { count, res } of ctx.anchors.values())
                  onAnchor(res, count);
          return typeof reviver === 'function'
              ? applyReviver(reviver, { '': res }, '', res)
              : res;
      }
      /**
       * A JSON representation of the document `contents`.
       *
       * @param jsonArg Used by `JSON.stringify` to indicate the array index or
       *   property name.
       */
      toJSON(jsonArg, onAnchor) {
          return this.toJS({ json: true, jsonArg, mapAsMap: false, onAnchor });
      }
      /** A YAML representation of the document. */
      toString(options = {}) {
          if (this.errors.length > 0)
              throw new Error('Document with errors cannot be stringified');
          if ('indent' in options &&
              (!Number.isInteger(options.indent) || Number(options.indent) <= 0)) {
              const s = JSON.stringify(options.indent);
              throw new Error(`"indent" option must be a positive integer, not ${s}`);
          }
          return stringifyDocument(this, options);
      }
  }
  function assertCollection(contents) {
      if (isCollection(contents))
          return true;
      throw new Error('Expected a YAML collection as document contents');
  }

  class YAMLError extends Error {
      constructor(name, pos, code, message) {
          super();
          this.name = name;
          this.code = code;
          this.message = message;
          this.pos = pos;
      }
  }
  class YAMLParseError extends YAMLError {
      constructor(pos, code, message) {
          super('YAMLParseError', pos, code, message);
      }
  }
  class YAMLWarning extends YAMLError {
      constructor(pos, code, message) {
          super('YAMLWarning', pos, code, message);
      }
  }
  const prettifyError = (src, lc) => (error) => {
      if (error.pos[0] === -1)
          return;
      error.linePos = error.pos.map(pos => lc.linePos(pos));
      const { line, col } = error.linePos[0];
      error.message += ` at line ${line}, column ${col}`;
      let ci = col - 1;
      let lineStr = src
          .substring(lc.lineStarts[line - 1], lc.lineStarts[line])
          .replace(/[\n\r]+$/, '');
      // Trim to max 80 chars, keeping col position near the middle
      if (ci >= 60 && lineStr.length > 80) {
          const trimStart = Math.min(ci - 39, lineStr.length - 79);
          lineStr = '…' + lineStr.substring(trimStart);
          ci -= trimStart - 1;
      }
      if (lineStr.length > 80)
          lineStr = lineStr.substring(0, 79) + '…';
      // Include previous line in context if pointing at line start
      if (line > 1 && /^ *$/.test(lineStr.substring(0, ci))) {
          // Regexp won't match if start is trimmed
          let prev = src.substring(lc.lineStarts[line - 2], lc.lineStarts[line - 1]);
          if (prev.length > 80)
              prev = prev.substring(0, 79) + '…\n';
          lineStr = prev + lineStr;
      }
      if (/[^ ]/.test(lineStr)) {
          let count = 1;
          const end = error.linePos[1];
          if (end && end.line === line && end.col > col) {
              count = Math.min(end.col - col, 80 - ci);
          }
          const pointer = ' '.repeat(ci) + '^'.repeat(count);
          error.message += `:\n\n${lineStr}\n${pointer}\n`;
      }
  };

  function resolveProps(tokens, { flow, indicator, next, offset, onError, startOnNewline }) {
      let spaceBefore = false;
      let atNewline = startOnNewline;
      let hasSpace = startOnNewline;
      let comment = '';
      let commentSep = '';
      let hasNewline = false;
      let hasNewlineAfterProp = false;
      let reqSpace = false;
      let anchor = null;
      let tag = null;
      let comma = null;
      let found = null;
      let start = null;
      for (const token of tokens) {
          if (reqSpace) {
              if (token.type !== 'space' &&
                  token.type !== 'newline' &&
                  token.type !== 'comma')
                  onError(token.offset, 'MISSING_CHAR', 'Tags and anchors must be separated from the next token by white space');
              reqSpace = false;
          }
          switch (token.type) {
              case 'space':
                  // At the doc level, tabs at line start may be parsed
                  // as leading white space rather than indentation.
                  // In a flow collection, only the parser handles indent.
                  if (!flow &&
                      atNewline &&
                      indicator !== 'doc-start' &&
                      token.source[0] === '\t')
                      onError(token, 'TAB_AS_INDENT', 'Tabs are not allowed as indentation');
                  hasSpace = true;
                  break;
              case 'comment': {
                  if (!hasSpace)
                      onError(token, 'MISSING_CHAR', 'Comments must be separated from other tokens by white space characters');
                  const cb = token.source.substring(1) || ' ';
                  if (!comment)
                      comment = cb;
                  else
                      comment += commentSep + cb;
                  commentSep = '';
                  atNewline = false;
                  break;
              }
              case 'newline':
                  if (atNewline) {
                      if (comment)
                          comment += token.source;
                      else
                          spaceBefore = true;
                  }
                  else
                      commentSep += token.source;
                  atNewline = true;
                  hasNewline = true;
                  if (anchor || tag)
                      hasNewlineAfterProp = true;
                  hasSpace = true;
                  break;
              case 'anchor':
                  if (anchor)
                      onError(token, 'MULTIPLE_ANCHORS', 'A node can have at most one anchor');
                  if (token.source.endsWith(':'))
                      onError(token.offset + token.source.length - 1, 'BAD_ALIAS', 'Anchor ending in : is ambiguous', true);
                  anchor = token;
                  if (start === null)
                      start = token.offset;
                  atNewline = false;
                  hasSpace = false;
                  reqSpace = true;
                  break;
              case 'tag': {
                  if (tag)
                      onError(token, 'MULTIPLE_TAGS', 'A node can have at most one tag');
                  tag = token;
                  if (start === null)
                      start = token.offset;
                  atNewline = false;
                  hasSpace = false;
                  reqSpace = true;
                  break;
              }
              case indicator:
                  // Could here handle preceding comments differently
                  if (anchor || tag)
                      onError(token, 'BAD_PROP_ORDER', `Anchors and tags must be after the ${token.source} indicator`);
                  if (found)
                      onError(token, 'UNEXPECTED_TOKEN', `Unexpected ${token.source} in ${flow ?? 'collection'}`);
                  found = token;
                  atNewline = false;
                  hasSpace = false;
                  break;
              case 'comma':
                  if (flow) {
                      if (comma)
                          onError(token, 'UNEXPECTED_TOKEN', `Unexpected , in ${flow}`);
                      comma = token;
                      atNewline = false;
                      hasSpace = false;
                      break;
                  }
              // else fallthrough
              default:
                  onError(token, 'UNEXPECTED_TOKEN', `Unexpected ${token.type} token`);
                  atNewline = false;
                  hasSpace = false;
          }
      }
      const last = tokens[tokens.length - 1];
      const end = last ? last.offset + last.source.length : offset;
      if (reqSpace &&
          next &&
          next.type !== 'space' &&
          next.type !== 'newline' &&
          next.type !== 'comma' &&
          (next.type !== 'scalar' || next.source !== ''))
          onError(next.offset, 'MISSING_CHAR', 'Tags and anchors must be separated from the next token by white space');
      return {
          comma,
          found,
          spaceBefore,
          comment,
          hasNewline,
          hasNewlineAfterProp,
          anchor,
          tag,
          end,
          start: start ?? end
      };
  }

  function containsNewline(key) {
      if (!key)
          return null;
      switch (key.type) {
          case 'alias':
          case 'scalar':
          case 'double-quoted-scalar':
          case 'single-quoted-scalar':
              if (key.source.includes('\n'))
                  return true;
              if (key.end)
                  for (const st of key.end)
                      if (st.type === 'newline')
                          return true;
              return false;
          case 'flow-collection':
              for (const it of key.items) {
                  for (const st of it.start)
                      if (st.type === 'newline')
                          return true;
                  if (it.sep)
                      for (const st of it.sep)
                          if (st.type === 'newline')
                              return true;
                  if (containsNewline(it.key) || containsNewline(it.value))
                      return true;
              }
              return false;
          default:
              return true;
      }
  }

  function flowIndentCheck(indent, fc, onError) {
      if (fc?.type === 'flow-collection') {
          const end = fc.end[0];
          if (end.indent === indent &&
              (end.source === ']' || end.source === '}') &&
              containsNewline(fc)) {
              const msg = 'Flow end indicator should be more indented than parent';
              onError(end, 'BAD_INDENT', msg, true);
          }
      }
  }

  function mapIncludes(ctx, items, search) {
      const { uniqueKeys } = ctx.options;
      if (uniqueKeys === false)
          return false;
      const isEqual = typeof uniqueKeys === 'function'
          ? uniqueKeys
          : (a, b) => a === b ||
              (isScalar(a) &&
                  isScalar(b) &&
                  a.value === b.value &&
                  !(a.value === '<<' && ctx.schema.merge));
      return items.some(pair => isEqual(pair.key, search));
  }

  const startColMsg = 'All mapping items must start at the same column';
  function resolveBlockMap({ composeNode, composeEmptyNode }, ctx, bm, onError) {
      const map = new YAMLMap(ctx.schema);
      if (ctx.atRoot)
          ctx.atRoot = false;
      let offset = bm.offset;
      let commentEnd = null;
      for (const collItem of bm.items) {
          const { start, key, sep, value } = collItem;
          // key properties
          const keyProps = resolveProps(start, {
              indicator: 'explicit-key-ind',
              next: key ?? sep?.[0],
              offset,
              onError,
              startOnNewline: true
          });
          const implicitKey = !keyProps.found;
          if (implicitKey) {
              if (key) {
                  if (key.type === 'block-seq')
                      onError(offset, 'BLOCK_AS_IMPLICIT_KEY', 'A block sequence may not be used as an implicit map key');
                  else if ('indent' in key && key.indent !== bm.indent)
                      onError(offset, 'BAD_INDENT', startColMsg);
              }
              if (!keyProps.anchor && !keyProps.tag && !sep) {
                  commentEnd = keyProps.end;
                  if (keyProps.comment) {
                      if (map.comment)
                          map.comment += '\n' + keyProps.comment;
                      else
                          map.comment = keyProps.comment;
                  }
                  continue;
              }
              if (keyProps.hasNewlineAfterProp || containsNewline(key)) {
                  onError(key ?? start[start.length - 1], 'MULTILINE_IMPLICIT_KEY', 'Implicit keys need to be on a single line');
              }
          }
          else if (keyProps.found?.indent !== bm.indent) {
              onError(offset, 'BAD_INDENT', startColMsg);
          }
          // key value
          const keyStart = keyProps.end;
          const keyNode = key
              ? composeNode(ctx, key, keyProps, onError)
              : composeEmptyNode(ctx, keyStart, start, null, keyProps, onError);
          if (ctx.schema.compat)
              flowIndentCheck(bm.indent, key, onError);
          if (mapIncludes(ctx, map.items, keyNode))
              onError(keyStart, 'DUPLICATE_KEY', 'Map keys must be unique');
          // value properties
          const valueProps = resolveProps(sep ?? [], {
              indicator: 'map-value-ind',
              next: value,
              offset: keyNode.range[2],
              onError,
              startOnNewline: !key || key.type === 'block-scalar'
          });
          offset = valueProps.end;
          if (valueProps.found) {
              if (implicitKey) {
                  if (value?.type === 'block-map' && !valueProps.hasNewline)
                      onError(offset, 'BLOCK_AS_IMPLICIT_KEY', 'Nested mappings are not allowed in compact mappings');
                  if (ctx.options.strict &&
                      keyProps.start < valueProps.found.offset - 1024)
                      onError(keyNode.range, 'KEY_OVER_1024_CHARS', 'The : indicator must be at most 1024 chars after the start of an implicit block mapping key');
              }
              // value value
              const valueNode = value
                  ? composeNode(ctx, value, valueProps, onError)
                  : composeEmptyNode(ctx, offset, sep, null, valueProps, onError);
              if (ctx.schema.compat)
                  flowIndentCheck(bm.indent, value, onError);
              offset = valueNode.range[2];
              const pair = new Pair(keyNode, valueNode);
              if (ctx.options.keepSourceTokens)
                  pair.srcToken = collItem;
              map.items.push(pair);
          }
          else {
              // key with no value
              if (implicitKey)
                  onError(keyNode.range, 'MISSING_CHAR', 'Implicit map keys need to be followed by map values');
              if (valueProps.comment) {
                  if (keyNode.comment)
                      keyNode.comment += '\n' + valueProps.comment;
                  else
                      keyNode.comment = valueProps.comment;
              }
              const pair = new Pair(keyNode);
              if (ctx.options.keepSourceTokens)
                  pair.srcToken = collItem;
              map.items.push(pair);
          }
      }
      if (commentEnd && commentEnd < offset)
          onError(commentEnd, 'IMPOSSIBLE', 'Map comment with trailing content');
      map.range = [bm.offset, offset, commentEnd ?? offset];
      return map;
  }

  function resolveBlockSeq({ composeNode, composeEmptyNode }, ctx, bs, onError) {
      const seq = new YAMLSeq(ctx.schema);
      if (ctx.atRoot)
          ctx.atRoot = false;
      let offset = bs.offset;
      let commentEnd = null;
      for (const { start, value } of bs.items) {
          const props = resolveProps(start, {
              indicator: 'seq-item-ind',
              next: value,
              offset,
              onError,
              startOnNewline: true
          });
          if (!props.found) {
              if (props.anchor || props.tag || value) {
                  if (value && value.type === 'block-seq')
                      onError(props.end, 'BAD_INDENT', 'All sequence items must start at the same column');
                  else
                      onError(offset, 'MISSING_CHAR', 'Sequence item without - indicator');
              }
              else {
                  commentEnd = props.end;
                  if (props.comment)
                      seq.comment = props.comment;
                  continue;
              }
          }
          const node = value
              ? composeNode(ctx, value, props, onError)
              : composeEmptyNode(ctx, props.end, start, null, props, onError);
          if (ctx.schema.compat)
              flowIndentCheck(bs.indent, value, onError);
          offset = node.range[2];
          seq.items.push(node);
      }
      seq.range = [bs.offset, offset, commentEnd ?? offset];
      return seq;
  }

  function resolveEnd(end, offset, reqSpace, onError) {
      let comment = '';
      if (end) {
          let hasSpace = false;
          let sep = '';
          for (const token of end) {
              const { source, type } = token;
              switch (type) {
                  case 'space':
                      hasSpace = true;
                      break;
                  case 'comment': {
                      if (reqSpace && !hasSpace)
                          onError(token, 'MISSING_CHAR', 'Comments must be separated from other tokens by white space characters');
                      const cb = source.substring(1) || ' ';
                      if (!comment)
                          comment = cb;
                      else
                          comment += sep + cb;
                      sep = '';
                      break;
                  }
                  case 'newline':
                      if (comment)
                          sep += source;
                      hasSpace = true;
                      break;
                  default:
                      onError(token, 'UNEXPECTED_TOKEN', `Unexpected ${type} at node end`);
              }
              offset += source.length;
          }
      }
      return { comment, offset };
  }

  const blockMsg = 'Block collections are not allowed within flow collections';
  const isBlock = (token) => token && (token.type === 'block-map' || token.type === 'block-seq');
  function resolveFlowCollection({ composeNode, composeEmptyNode }, ctx, fc, onError) {
      const isMap = fc.start.source === '{';
      const fcName = isMap ? 'flow map' : 'flow sequence';
      const coll = isMap
          ? new YAMLMap(ctx.schema)
          : new YAMLSeq(ctx.schema);
      coll.flow = true;
      const atRoot = ctx.atRoot;
      if (atRoot)
          ctx.atRoot = false;
      let offset = fc.offset + fc.start.source.length;
      for (let i = 0; i < fc.items.length; ++i) {
          const collItem = fc.items[i];
          const { start, key, sep, value } = collItem;
          const props = resolveProps(start, {
              flow: fcName,
              indicator: 'explicit-key-ind',
              next: key ?? sep?.[0],
              offset,
              onError,
              startOnNewline: false
          });
          if (!props.found) {
              if (!props.anchor && !props.tag && !sep && !value) {
                  if (i === 0 && props.comma)
                      onError(props.comma, 'UNEXPECTED_TOKEN', `Unexpected , in ${fcName}`);
                  else if (i < fc.items.length - 1)
                      onError(props.start, 'UNEXPECTED_TOKEN', `Unexpected empty item in ${fcName}`);
                  if (props.comment) {
                      if (coll.comment)
                          coll.comment += '\n' + props.comment;
                      else
                          coll.comment = props.comment;
                  }
                  offset = props.end;
                  continue;
              }
              if (!isMap && ctx.options.strict && containsNewline(key))
                  onError(key, // checked by containsNewline()
                  'MULTILINE_IMPLICIT_KEY', 'Implicit keys of flow sequence pairs need to be on a single line');
          }
          if (i === 0) {
              if (props.comma)
                  onError(props.comma, 'UNEXPECTED_TOKEN', `Unexpected , in ${fcName}`);
          }
          else {
              if (!props.comma)
                  onError(props.start, 'MISSING_CHAR', `Missing , between ${fcName} items`);
              if (props.comment) {
                  let prevItemComment = '';
                  loop: for (const st of start) {
                      switch (st.type) {
                          case 'comma':
                          case 'space':
                              break;
                          case 'comment':
                              prevItemComment = st.source.substring(1);
                              break loop;
                          default:
                              break loop;
                      }
                  }
                  if (prevItemComment) {
                      let prev = coll.items[coll.items.length - 1];
                      if (isPair(prev))
                          prev = prev.value ?? prev.key;
                      if (prev.comment)
                          prev.comment += '\n' + prevItemComment;
                      else
                          prev.comment = prevItemComment;
                      props.comment = props.comment.substring(prevItemComment.length + 1);
                  }
              }
          }
          if (!isMap && !sep && !props.found) {
              // item is a value in a seq
              // → key & sep are empty, start does not include ? or :
              const valueNode = value
                  ? composeNode(ctx, value, props, onError)
                  : composeEmptyNode(ctx, props.end, sep, null, props, onError);
              coll.items.push(valueNode);
              offset = valueNode.range[2];
              if (isBlock(value))
                  onError(valueNode.range, 'BLOCK_IN_FLOW', blockMsg);
          }
          else {
              // item is a key+value pair
              // key value
              const keyStart = props.end;
              const keyNode = key
                  ? composeNode(ctx, key, props, onError)
                  : composeEmptyNode(ctx, keyStart, start, null, props, onError);
              if (isBlock(key))
                  onError(keyNode.range, 'BLOCK_IN_FLOW', blockMsg);
              // value properties
              const valueProps = resolveProps(sep ?? [], {
                  flow: fcName,
                  indicator: 'map-value-ind',
                  next: value,
                  offset: keyNode.range[2],
                  onError,
                  startOnNewline: false
              });
              if (valueProps.found) {
                  if (!isMap && !props.found && ctx.options.strict) {
                      if (sep)
                          for (const st of sep) {
                              if (st === valueProps.found)
                                  break;
                              if (st.type === 'newline') {
                                  onError(st, 'MULTILINE_IMPLICIT_KEY', 'Implicit keys of flow sequence pairs need to be on a single line');
                                  break;
                              }
                          }
                      if (props.start < valueProps.found.offset - 1024)
                          onError(valueProps.found, 'KEY_OVER_1024_CHARS', 'The : indicator must be at most 1024 chars after the start of an implicit flow sequence key');
                  }
              }
              else if (value) {
                  if ('source' in value && value.source && value.source[0] === ':')
                      onError(value, 'MISSING_CHAR', `Missing space after : in ${fcName}`);
                  else
                      onError(valueProps.start, 'MISSING_CHAR', `Missing , or : between ${fcName} items`);
              }
              // value value
              const valueNode = value
                  ? composeNode(ctx, value, valueProps, onError)
                  : valueProps.found
                      ? composeEmptyNode(ctx, valueProps.end, sep, null, valueProps, onError)
                      : null;
              if (valueNode) {
                  if (isBlock(value))
                      onError(valueNode.range, 'BLOCK_IN_FLOW', blockMsg);
              }
              else if (valueProps.comment) {
                  if (keyNode.comment)
                      keyNode.comment += '\n' + valueProps.comment;
                  else
                      keyNode.comment = valueProps.comment;
              }
              const pair = new Pair(keyNode, valueNode);
              if (ctx.options.keepSourceTokens)
                  pair.srcToken = collItem;
              if (isMap) {
                  const map = coll;
                  if (mapIncludes(ctx, map.items, keyNode))
                      onError(keyStart, 'DUPLICATE_KEY', 'Map keys must be unique');
                  map.items.push(pair);
              }
              else {
                  const map = new YAMLMap(ctx.schema);
                  map.flow = true;
                  map.items.push(pair);
                  coll.items.push(map);
              }
              offset = valueNode ? valueNode.range[2] : valueProps.end;
          }
      }
      const expectedEnd = isMap ? '}' : ']';
      const [ce, ...ee] = fc.end;
      let cePos = offset;
      if (ce && ce.source === expectedEnd)
          cePos = ce.offset + ce.source.length;
      else {
          const name = fcName[0].toUpperCase() + fcName.substring(1);
          const msg = atRoot
              ? `${name} must end with a ${expectedEnd}`
              : `${name} in block collection must be sufficiently indented and end with a ${expectedEnd}`;
          onError(offset, atRoot ? 'MISSING_CHAR' : 'BAD_INDENT', msg);
          if (ce && ce.source.length !== 1)
              ee.unshift(ce);
      }
      if (ee.length > 0) {
          const end = resolveEnd(ee, cePos, ctx.options.strict, onError);
          if (end.comment) {
              if (coll.comment)
                  coll.comment += '\n' + end.comment;
              else
                  coll.comment = end.comment;
          }
          coll.range = [fc.offset, cePos, end.offset];
      }
      else {
          coll.range = [fc.offset, cePos, cePos];
      }
      return coll;
  }

  function composeCollection(CN, ctx, token, tagToken, onError) {
      let coll;
      switch (token.type) {
          case 'block-map': {
              coll = resolveBlockMap(CN, ctx, token, onError);
              break;
          }
          case 'block-seq': {
              coll = resolveBlockSeq(CN, ctx, token, onError);
              break;
          }
          case 'flow-collection': {
              coll = resolveFlowCollection(CN, ctx, token, onError);
              break;
          }
      }
      if (!tagToken)
          return coll;
      const tagName = ctx.directives.tagName(tagToken.source, msg => onError(tagToken, 'TAG_RESOLVE_FAILED', msg));
      if (!tagName)
          return coll;
      // Cast needed due to: https://github.com/Microsoft/TypeScript/issues/3841
      const Coll = coll.constructor;
      if (tagName === '!' || tagName === Coll.tagName) {
          coll.tag = Coll.tagName;
          return coll;
      }
      const expType = isMap(coll) ? 'map' : 'seq';
      let tag = ctx.schema.tags.find(t => t.collection === expType && t.tag === tagName);
      if (!tag) {
          const kt = ctx.schema.knownTags[tagName];
          if (kt && kt.collection === expType) {
              ctx.schema.tags.push(Object.assign({}, kt, { default: false }));
              tag = kt;
          }
          else {
              onError(tagToken, 'TAG_RESOLVE_FAILED', `Unresolved tag: ${tagName}`, true);
              coll.tag = tagName;
              return coll;
          }
      }
      const res = tag.resolve(coll, msg => onError(tagToken, 'TAG_RESOLVE_FAILED', msg), ctx.options);
      const node = isNode(res)
          ? res
          : new Scalar(res);
      node.range = coll.range;
      node.tag = tagName;
      if (tag?.format)
          node.format = tag.format;
      return node;
  }

  function resolveBlockScalar(scalar, strict, onError) {
      const start = scalar.offset;
      const header = parseBlockScalarHeader(scalar, strict, onError);
      if (!header)
          return { value: '', type: null, comment: '', range: [start, start, start] };
      const type = header.mode === '>' ? Scalar.BLOCK_FOLDED : Scalar.BLOCK_LITERAL;
      const lines = scalar.source ? splitLines(scalar.source) : [];
      // determine the end of content & start of chomping
      let chompStart = lines.length;
      for (let i = lines.length - 1; i >= 0; --i) {
          const content = lines[i][1];
          if (content === '' || content === '\r')
              chompStart = i;
          else
              break;
      }
      // shortcut for empty contents
      if (chompStart === 0) {
          const value = header.chomp === '+' && lines.length > 0
              ? '\n'.repeat(Math.max(1, lines.length - 1))
              : '';
          let end = start + header.length;
          if (scalar.source)
              end += scalar.source.length;
          return { value, type, comment: header.comment, range: [start, end, end] };
      }
      // find the indentation level to trim from start
      let trimIndent = scalar.indent + header.indent;
      let offset = scalar.offset + header.length;
      let contentStart = 0;
      for (let i = 0; i < chompStart; ++i) {
          const [indent, content] = lines[i];
          if (content === '' || content === '\r') {
              if (header.indent === 0 && indent.length > trimIndent)
                  trimIndent = indent.length;
          }
          else {
              if (indent.length < trimIndent) {
                  const message = 'Block scalars with more-indented leading empty lines must use an explicit indentation indicator';
                  onError(offset + indent.length, 'MISSING_CHAR', message);
              }
              if (header.indent === 0)
                  trimIndent = indent.length;
              contentStart = i;
              break;
          }
          offset += indent.length + content.length + 1;
      }
      // include trailing more-indented empty lines in content
      for (let i = lines.length - 1; i >= chompStart; --i) {
          if (lines[i][0].length > trimIndent)
              chompStart = i + 1;
      }
      let value = '';
      let sep = '';
      let prevMoreIndented = false;
      // leading whitespace is kept intact
      for (let i = 0; i < contentStart; ++i)
          value += lines[i][0].slice(trimIndent) + '\n';
      for (let i = contentStart; i < chompStart; ++i) {
          let [indent, content] = lines[i];
          offset += indent.length + content.length + 1;
          const crlf = content[content.length - 1] === '\r';
          if (crlf)
              content = content.slice(0, -1);
          /* istanbul ignore if already caught in lexer */
          if (content && indent.length < trimIndent) {
              const src = header.indent
                  ? 'explicit indentation indicator'
                  : 'first line';
              const message = `Block scalar lines must not be less indented than their ${src}`;
              onError(offset - content.length - (crlf ? 2 : 1), 'BAD_INDENT', message);
              indent = '';
          }
          if (type === Scalar.BLOCK_LITERAL) {
              value += sep + indent.slice(trimIndent) + content;
              sep = '\n';
          }
          else if (indent.length > trimIndent || content[0] === '\t') {
              // more-indented content within a folded block
              if (sep === ' ')
                  sep = '\n';
              else if (!prevMoreIndented && sep === '\n')
                  sep = '\n\n';
              value += sep + indent.slice(trimIndent) + content;
              sep = '\n';
              prevMoreIndented = true;
          }
          else if (content === '') {
              // empty line
              if (sep === '\n')
                  value += '\n';
              else
                  sep = '\n';
          }
          else {
              value += sep + content;
              sep = ' ';
              prevMoreIndented = false;
          }
      }
      switch (header.chomp) {
          case '-':
              break;
          case '+':
              for (let i = chompStart; i < lines.length; ++i)
                  value += '\n' + lines[i][0].slice(trimIndent);
              if (value[value.length - 1] !== '\n')
                  value += '\n';
              break;
          default:
              value += '\n';
      }
      const end = start + header.length + scalar.source.length;
      return { value, type, comment: header.comment, range: [start, end, end] };
  }
  function parseBlockScalarHeader({ offset, props }, strict, onError) {
      /* istanbul ignore if should not happen */
      if (props[0].type !== 'block-scalar-header') {
          onError(props[0], 'IMPOSSIBLE', 'Block scalar header not found');
          return null;
      }
      const { source } = props[0];
      const mode = source[0];
      let indent = 0;
      let chomp = '';
      let error = -1;
      for (let i = 1; i < source.length; ++i) {
          const ch = source[i];
          if (!chomp && (ch === '-' || ch === '+'))
              chomp = ch;
          else {
              const n = Number(ch);
              if (!indent && n)
                  indent = n;
              else if (error === -1)
                  error = offset + i;
          }
      }
      if (error !== -1)
          onError(error, 'UNEXPECTED_TOKEN', `Block scalar header includes extra characters: ${source}`);
      let hasSpace = false;
      let comment = '';
      let length = source.length;
      for (let i = 1; i < props.length; ++i) {
          const token = props[i];
          switch (token.type) {
              case 'space':
                  hasSpace = true;
              // fallthrough
              case 'newline':
                  length += token.source.length;
                  break;
              case 'comment':
                  if (strict && !hasSpace) {
                      const message = 'Comments must be separated from other tokens by white space characters';
                      onError(token, 'MISSING_CHAR', message);
                  }
                  length += token.source.length;
                  comment = token.source.substring(1);
                  break;
              case 'error':
                  onError(token, 'UNEXPECTED_TOKEN', token.message);
                  length += token.source.length;
                  break;
              /* istanbul ignore next should not happen */
              default: {
                  const message = `Unexpected token in block scalar header: ${token.type}`;
                  onError(token, 'UNEXPECTED_TOKEN', message);
                  const ts = token.source;
                  if (ts && typeof ts === 'string')
                      length += ts.length;
              }
          }
      }
      return { mode, indent, chomp, comment, length };
  }
  /** @returns Array of lines split up as `[indent, content]` */
  function splitLines(source) {
      const split = source.split(/\n( *)/);
      const first = split[0];
      const m = first.match(/^( *)/);
      const line0 = m?.[1]
          ? [m[1], first.slice(m[1].length)]
          : ['', first];
      const lines = [line0];
      for (let i = 1; i < split.length; i += 2)
          lines.push([split[i], split[i + 1]]);
      return lines;
  }

  function resolveFlowScalar(scalar, strict, onError) {
      const { offset, type, source, end } = scalar;
      let _type;
      let value;
      const _onError = (rel, code, msg) => onError(offset + rel, code, msg);
      switch (type) {
          case 'scalar':
              _type = Scalar.PLAIN;
              value = plainValue(source, _onError);
              break;
          case 'single-quoted-scalar':
              _type = Scalar.QUOTE_SINGLE;
              value = singleQuotedValue(source, _onError);
              break;
          case 'double-quoted-scalar':
              _type = Scalar.QUOTE_DOUBLE;
              value = doubleQuotedValue(source, _onError);
              break;
          /* istanbul ignore next should not happen */
          default:
              onError(scalar, 'UNEXPECTED_TOKEN', `Expected a flow scalar value, but found: ${type}`);
              return {
                  value: '',
                  type: null,
                  comment: '',
                  range: [offset, offset + source.length, offset + source.length]
              };
      }
      const valueEnd = offset + source.length;
      const re = resolveEnd(end, valueEnd, strict, onError);
      return {
          value,
          type: _type,
          comment: re.comment,
          range: [offset, valueEnd, re.offset]
      };
  }
  function plainValue(source, onError) {
      let badChar = '';
      switch (source[0]) {
          /* istanbul ignore next should not happen */
          case '\t':
              badChar = 'a tab character';
              break;
          case ',':
              badChar = 'flow indicator character ,';
              break;
          case '%':
              badChar = 'directive indicator character %';
              break;
          case '|':
          case '>': {
              badChar = `block scalar indicator ${source[0]}`;
              break;
          }
          case '@':
          case '`': {
              badChar = `reserved character ${source[0]}`;
              break;
          }
      }
      if (badChar)
          onError(0, 'BAD_SCALAR_START', `Plain value cannot start with ${badChar}`);
      return foldLines(source);
  }
  function singleQuotedValue(source, onError) {
      if (source[source.length - 1] !== "'" || source.length === 1)
          onError(source.length, 'MISSING_CHAR', "Missing closing 'quote");
      return foldLines(source.slice(1, -1)).replace(/''/g, "'");
  }
  function foldLines(source) {
      /**
       * The negative lookbehind here and in the `re` RegExp is to
       * prevent causing a polynomial search time in certain cases.
       *
       * The try-catch is for Safari, which doesn't support this yet:
       * https://caniuse.com/js-regexp-lookbehind
       */
      let first, line;
      try {
          first = new RegExp('(.*?)(?<![ \t])[ \t]*\r?\n', 'sy');
          line = new RegExp('[ \t]*(.*?)(?:(?<![ \t])[ \t]*)?\r?\n', 'sy');
      }
      catch (_) {
          first = /(.*?)[ \t]*\r?\n/sy;
          line = /[ \t]*(.*?)[ \t]*\r?\n/sy;
      }
      let match = first.exec(source);
      if (!match)
          return source;
      let res = match[1];
      let sep = ' ';
      let pos = first.lastIndex;
      line.lastIndex = pos;
      while ((match = line.exec(source))) {
          if (match[1] === '') {
              if (sep === '\n')
                  res += sep;
              else
                  sep = '\n';
          }
          else {
              res += sep + match[1];
              sep = ' ';
          }
          pos = line.lastIndex;
      }
      const last = /[ \t]*(.*)/sy;
      last.lastIndex = pos;
      match = last.exec(source);
      return res + sep + (match?.[1] ?? '');
  }
  function doubleQuotedValue(source, onError) {
      let res = '';
      for (let i = 1; i < source.length - 1; ++i) {
          const ch = source[i];
          if (ch === '\r' && source[i + 1] === '\n')
              continue;
          if (ch === '\n') {
              const { fold, offset } = foldNewline(source, i);
              res += fold;
              i = offset;
          }
          else if (ch === '\\') {
              let next = source[++i];
              const cc = escapeCodes[next];
              if (cc)
                  res += cc;
              else if (next === '\n') {
                  // skip escaped newlines, but still trim the following line
                  next = source[i + 1];
                  while (next === ' ' || next === '\t')
                      next = source[++i + 1];
              }
              else if (next === '\r' && source[i + 1] === '\n') {
                  // skip escaped CRLF newlines, but still trim the following line
                  next = source[++i + 1];
                  while (next === ' ' || next === '\t')
                      next = source[++i + 1];
              }
              else if (next === 'x' || next === 'u' || next === 'U') {
                  const length = { x: 2, u: 4, U: 8 }[next];
                  res += parseCharCode(source, i + 1, length, onError);
                  i += length;
              }
              else {
                  const raw = source.substr(i - 1, 2);
                  onError(i - 1, 'BAD_DQ_ESCAPE', `Invalid escape sequence ${raw}`);
                  res += raw;
              }
          }
          else if (ch === ' ' || ch === '\t') {
              // trim trailing whitespace
              const wsStart = i;
              let next = source[i + 1];
              while (next === ' ' || next === '\t')
                  next = source[++i + 1];
              if (next !== '\n' && !(next === '\r' && source[i + 2] === '\n'))
                  res += i > wsStart ? source.slice(wsStart, i + 1) : ch;
          }
          else {
              res += ch;
          }
      }
      if (source[source.length - 1] !== '"' || source.length === 1)
          onError(source.length, 'MISSING_CHAR', 'Missing closing "quote');
      return res;
  }
  /**
   * Fold a single newline into a space, multiple newlines to N - 1 newlines.
   * Presumes `source[offset] === '\n'`
   */
  function foldNewline(source, offset) {
      let fold = '';
      let ch = source[offset + 1];
      while (ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r') {
          if (ch === '\r' && source[offset + 2] !== '\n')
              break;
          if (ch === '\n')
              fold += '\n';
          offset += 1;
          ch = source[offset + 1];
      }
      if (!fold)
          fold = ' ';
      return { fold, offset };
  }
  const escapeCodes = {
      '0': '\0',
      a: '\x07',
      b: '\b',
      e: '\x1b',
      f: '\f',
      n: '\n',
      r: '\r',
      t: '\t',
      v: '\v',
      N: '\u0085',
      _: '\u00a0',
      L: '\u2028',
      P: '\u2029',
      ' ': ' ',
      '"': '"',
      '/': '/',
      '\\': '\\',
      '\t': '\t'
  };
  function parseCharCode(source, offset, length, onError) {
      const cc = source.substr(offset, length);
      const ok = cc.length === length && /^[0-9a-fA-F]+$/.test(cc);
      const code = ok ? parseInt(cc, 16) : NaN;
      if (isNaN(code)) {
          const raw = source.substr(offset - 2, length + 2);
          onError(offset - 2, 'BAD_DQ_ESCAPE', `Invalid escape sequence ${raw}`);
          return raw;
      }
      return String.fromCodePoint(code);
  }

  function composeScalar(ctx, token, tagToken, onError) {
      const { value, type, comment, range } = token.type === 'block-scalar'
          ? resolveBlockScalar(token, ctx.options.strict, onError)
          : resolveFlowScalar(token, ctx.options.strict, onError);
      const tagName = tagToken
          ? ctx.directives.tagName(tagToken.source, msg => onError(tagToken, 'TAG_RESOLVE_FAILED', msg))
          : null;
      const tag = tagToken && tagName
          ? findScalarTagByName(ctx.schema, value, tagName, tagToken, onError)
          : token.type === 'scalar'
              ? findScalarTagByTest(ctx, value, token, onError)
              : ctx.schema[SCALAR$1];
      let scalar;
      try {
          const res = tag.resolve(value, msg => onError(tagToken ?? token, 'TAG_RESOLVE_FAILED', msg), ctx.options);
          scalar = isScalar(res) ? res : new Scalar(res);
      }
      catch (error) {
          const msg = error instanceof Error ? error.message : String(error);
          onError(tagToken ?? token, 'TAG_RESOLVE_FAILED', msg);
          scalar = new Scalar(value);
      }
      scalar.range = range;
      scalar.source = value;
      if (type)
          scalar.type = type;
      if (tagName)
          scalar.tag = tagName;
      if (tag.format)
          scalar.format = tag.format;
      if (comment)
          scalar.comment = comment;
      return scalar;
  }
  function findScalarTagByName(schema, value, tagName, tagToken, onError) {
      if (tagName === '!')
          return schema[SCALAR$1]; // non-specific tag
      const matchWithTest = [];
      for (const tag of schema.tags) {
          if (!tag.collection && tag.tag === tagName) {
              if (tag.default && tag.test)
                  matchWithTest.push(tag);
              else
                  return tag;
          }
      }
      for (const tag of matchWithTest)
          if (tag.test?.test(value))
              return tag;
      const kt = schema.knownTags[tagName];
      if (kt && !kt.collection) {
          // Ensure that the known tag is available for stringifying,
          // but does not get used by default.
          schema.tags.push(Object.assign({}, kt, { default: false, test: undefined }));
          return kt;
      }
      onError(tagToken, 'TAG_RESOLVE_FAILED', `Unresolved tag: ${tagName}`, tagName !== 'tag:yaml.org,2002:str');
      return schema[SCALAR$1];
  }
  function findScalarTagByTest({ directives, schema }, value, token, onError) {
      const tag = schema.tags.find(tag => tag.default && tag.test?.test(value)) || schema[SCALAR$1];
      if (schema.compat) {
          const compat = schema.compat.find(tag => tag.default && tag.test?.test(value)) ??
              schema[SCALAR$1];
          if (tag.tag !== compat.tag) {
              const ts = directives.tagString(tag.tag);
              const cs = directives.tagString(compat.tag);
              const msg = `Value may be parsed as either ${ts} or ${cs}`;
              onError(token, 'TAG_RESOLVE_FAILED', msg, true);
          }
      }
      return tag;
  }

  function emptyScalarPosition(offset, before, pos) {
      if (before) {
          if (pos === null)
              pos = before.length;
          for (let i = pos - 1; i >= 0; --i) {
              let st = before[i];
              switch (st.type) {
                  case 'space':
                  case 'comment':
                  case 'newline':
                      offset -= st.source.length;
                      continue;
              }
              // Technically, an empty scalar is immediately after the last non-empty
              // node, but it's more useful to place it after any whitespace.
              st = before[++i];
              while (st?.type === 'space') {
                  offset += st.source.length;
                  st = before[++i];
              }
              break;
          }
      }
      return offset;
  }

  const CN = { composeNode, composeEmptyNode };
  function composeNode(ctx, token, props, onError) {
      const { spaceBefore, comment, anchor, tag } = props;
      let node;
      let isSrcToken = true;
      switch (token.type) {
          case 'alias':
              node = composeAlias(ctx, token, onError);
              if (anchor || tag)
                  onError(token, 'ALIAS_PROPS', 'An alias node must not specify any properties');
              break;
          case 'scalar':
          case 'single-quoted-scalar':
          case 'double-quoted-scalar':
          case 'block-scalar':
              node = composeScalar(ctx, token, tag, onError);
              if (anchor)
                  node.anchor = anchor.source.substring(1);
              break;
          case 'block-map':
          case 'block-seq':
          case 'flow-collection':
              node = composeCollection(CN, ctx, token, tag, onError);
              if (anchor)
                  node.anchor = anchor.source.substring(1);
              break;
          default: {
              const message = token.type === 'error'
                  ? token.message
                  : `Unsupported token (type: ${token.type})`;
              onError(token, 'UNEXPECTED_TOKEN', message);
              node = composeEmptyNode(ctx, token.offset, undefined, null, props, onError);
              isSrcToken = false;
          }
      }
      if (anchor && node.anchor === '')
          onError(anchor, 'BAD_ALIAS', 'Anchor cannot be an empty string');
      if (spaceBefore)
          node.spaceBefore = true;
      if (comment) {
          if (token.type === 'scalar' && token.source === '')
              node.comment = comment;
          else
              node.commentBefore = comment;
      }
      // @ts-expect-error Type checking misses meaning of isSrcToken
      if (ctx.options.keepSourceTokens && isSrcToken)
          node.srcToken = token;
      return node;
  }
  function composeEmptyNode(ctx, offset, before, pos, { spaceBefore, comment, anchor, tag, end }, onError) {
      const token = {
          type: 'scalar',
          offset: emptyScalarPosition(offset, before, pos),
          indent: -1,
          source: ''
      };
      const node = composeScalar(ctx, token, tag, onError);
      if (anchor) {
          node.anchor = anchor.source.substring(1);
          if (node.anchor === '')
              onError(anchor, 'BAD_ALIAS', 'Anchor cannot be an empty string');
      }
      if (spaceBefore)
          node.spaceBefore = true;
      if (comment) {
          node.comment = comment;
          node.range[2] = end;
      }
      return node;
  }
  function composeAlias({ options }, { offset, source, end }, onError) {
      const alias = new Alias(source.substring(1));
      if (alias.source === '')
          onError(offset, 'BAD_ALIAS', 'Alias cannot be an empty string');
      if (alias.source.endsWith(':'))
          onError(offset + source.length - 1, 'BAD_ALIAS', 'Alias ending in : is ambiguous', true);
      const valueEnd = offset + source.length;
      const re = resolveEnd(end, valueEnd, options.strict, onError);
      alias.range = [offset, valueEnd, re.offset];
      if (re.comment)
          alias.comment = re.comment;
      return alias;
  }

  function composeDoc(options, directives, { offset, start, value, end }, onError) {
      const opts = Object.assign({ _directives: directives }, options);
      const doc = new Document(undefined, opts);
      const ctx = {
          atRoot: true,
          directives: doc.directives,
          options: doc.options,
          schema: doc.schema
      };
      const props = resolveProps(start, {
          indicator: 'doc-start',
          next: value ?? end?.[0],
          offset,
          onError,
          startOnNewline: true
      });
      if (props.found) {
          doc.directives.docStart = true;
          if (value &&
              (value.type === 'block-map' || value.type === 'block-seq') &&
              !props.hasNewline)
              onError(props.end, 'MISSING_CHAR', 'Block collection cannot start on same line with directives-end marker');
      }
      doc.contents = value
          ? composeNode(ctx, value, props, onError)
          : composeEmptyNode(ctx, props.end, start, null, props, onError);
      const contentEnd = doc.contents.range[2];
      const re = resolveEnd(end, contentEnd, false, onError);
      if (re.comment)
          doc.comment = re.comment;
      doc.range = [offset, contentEnd, re.offset];
      return doc;
  }

  function getErrorPos(src) {
      if (typeof src === 'number')
          return [src, src + 1];
      if (Array.isArray(src))
          return src.length === 2 ? src : [src[0], src[1]];
      const { offset, source } = src;
      return [offset, offset + (typeof source === 'string' ? source.length : 1)];
  }
  function parsePrelude(prelude) {
      let comment = '';
      let atComment = false;
      let afterEmptyLine = false;
      for (let i = 0; i < prelude.length; ++i) {
          const source = prelude[i];
          switch (source[0]) {
              case '#':
                  comment +=
                      (comment === '' ? '' : afterEmptyLine ? '\n\n' : '\n') +
                          (source.substring(1) || ' ');
                  atComment = true;
                  afterEmptyLine = false;
                  break;
              case '%':
                  if (prelude[i + 1]?.[0] !== '#')
                      i += 1;
                  atComment = false;
                  break;
              default:
                  // This may be wrong after doc-end, but in that case it doesn't matter
                  if (!atComment)
                      afterEmptyLine = true;
                  atComment = false;
          }
      }
      return { comment, afterEmptyLine };
  }
  /**
   * Compose a stream of CST nodes into a stream of YAML Documents.
   *
   * ```ts
   * import { Composer, Parser } from 'yaml'
   *
   * const src: string = ...
   * const tokens = new Parser().parse(src)
   * const docs = new Composer().compose(tokens)
   * ```
   */
  class Composer {
      constructor(options = {}) {
          this.doc = null;
          this.atDirectives = false;
          this.prelude = [];
          this.errors = [];
          this.warnings = [];
          this.onError = (source, code, message, warning) => {
              const pos = getErrorPos(source);
              if (warning)
                  this.warnings.push(new YAMLWarning(pos, code, message));
              else
                  this.errors.push(new YAMLParseError(pos, code, message));
          };
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          this.directives = new Directives({ version: options.version || '1.2' });
          this.options = options;
      }
      decorate(doc, afterDoc) {
          const { comment, afterEmptyLine } = parsePrelude(this.prelude);
          //console.log({ dc: doc.comment, prelude, comment })
          if (comment) {
              const dc = doc.contents;
              if (afterDoc) {
                  doc.comment = doc.comment ? `${doc.comment}\n${comment}` : comment;
              }
              else if (afterEmptyLine || doc.directives.docStart || !dc) {
                  doc.commentBefore = comment;
              }
              else if (isCollection(dc) && !dc.flow && dc.items.length > 0) {
                  let it = dc.items[0];
                  if (isPair(it))
                      it = it.key;
                  const cb = it.commentBefore;
                  it.commentBefore = cb ? `${comment}\n${cb}` : comment;
              }
              else {
                  const cb = dc.commentBefore;
                  dc.commentBefore = cb ? `${comment}\n${cb}` : comment;
              }
          }
          if (afterDoc) {
              Array.prototype.push.apply(doc.errors, this.errors);
              Array.prototype.push.apply(doc.warnings, this.warnings);
          }
          else {
              doc.errors = this.errors;
              doc.warnings = this.warnings;
          }
          this.prelude = [];
          this.errors = [];
          this.warnings = [];
      }
      /**
       * Current stream status information.
       *
       * Mostly useful at the end of input for an empty stream.
       */
      streamInfo() {
          return {
              comment: parsePrelude(this.prelude).comment,
              directives: this.directives,
              errors: this.errors,
              warnings: this.warnings
          };
      }
      /**
       * Compose tokens into documents.
       *
       * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
       * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
       */
      *compose(tokens, forceDoc = false, endOffset = -1) {
          for (const token of tokens)
              yield* this.next(token);
          yield* this.end(forceDoc, endOffset);
      }
      /** Advance the composer by one CST token. */
      *next(token) {
          switch (token.type) {
              case 'directive':
                  this.directives.add(token.source, (offset, message, warning) => {
                      const pos = getErrorPos(token);
                      pos[0] += offset;
                      this.onError(pos, 'BAD_DIRECTIVE', message, warning);
                  });
                  this.prelude.push(token.source);
                  this.atDirectives = true;
                  break;
              case 'document': {
                  const doc = composeDoc(this.options, this.directives, token, this.onError);
                  if (this.atDirectives && !doc.directives.docStart)
                      this.onError(token, 'MISSING_CHAR', 'Missing directives-end/doc-start indicator line');
                  this.decorate(doc, false);
                  if (this.doc)
                      yield this.doc;
                  this.doc = doc;
                  this.atDirectives = false;
                  break;
              }
              case 'byte-order-mark':
              case 'space':
                  break;
              case 'comment':
              case 'newline':
                  this.prelude.push(token.source);
                  break;
              case 'error': {
                  const msg = token.source
                      ? `${token.message}: ${JSON.stringify(token.source)}`
                      : token.message;
                  const error = new YAMLParseError(getErrorPos(token), 'UNEXPECTED_TOKEN', msg);
                  if (this.atDirectives || !this.doc)
                      this.errors.push(error);
                  else
                      this.doc.errors.push(error);
                  break;
              }
              case 'doc-end': {
                  if (!this.doc) {
                      const msg = 'Unexpected doc-end without preceding document';
                      this.errors.push(new YAMLParseError(getErrorPos(token), 'UNEXPECTED_TOKEN', msg));
                      break;
                  }
                  this.doc.directives.docEnd = true;
                  const end = resolveEnd(token.end, token.offset + token.source.length, this.doc.options.strict, this.onError);
                  this.decorate(this.doc, true);
                  if (end.comment) {
                      const dc = this.doc.comment;
                      this.doc.comment = dc ? `${dc}\n${end.comment}` : end.comment;
                  }
                  this.doc.range[2] = end.offset;
                  break;
              }
              default:
                  this.errors.push(new YAMLParseError(getErrorPos(token), 'UNEXPECTED_TOKEN', `Unsupported token ${token.type}`));
          }
      }
      /**
       * Call at end of input to yield any remaining document.
       *
       * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
       * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
       */
      *end(forceDoc = false, endOffset = -1) {
          if (this.doc) {
              this.decorate(this.doc, true);
              yield this.doc;
              this.doc = null;
          }
          else if (forceDoc) {
              const opts = Object.assign({ _directives: this.directives }, this.options);
              const doc = new Document(undefined, opts);
              if (this.atDirectives)
                  this.onError(endOffset, 'MISSING_CHAR', 'Missing directives-end indicator line');
              doc.range = [0, endOffset, endOffset];
              this.decorate(doc, false);
              yield doc;
          }
      }
  }

  /** The byte order mark */
  const BOM = '\u{FEFF}';
  /** Start of doc-mode */
  const DOCUMENT = '\x02'; // C0: Start of Text
  /** Unexpected end of flow-mode */
  const FLOW_END = '\x18'; // C0: Cancel
  /** Next token is a scalar value */
  const SCALAR = '\x1f'; // C0: Unit Separator
  /** Identify the type of a lexer token. May return `null` for unknown tokens. */
  function tokenType(source) {
      switch (source) {
          case BOM:
              return 'byte-order-mark';
          case DOCUMENT:
              return 'doc-mode';
          case FLOW_END:
              return 'flow-error-end';
          case SCALAR:
              return 'scalar';
          case '---':
              return 'doc-start';
          case '...':
              return 'doc-end';
          case '':
          case '\n':
          case '\r\n':
              return 'newline';
          case '-':
              return 'seq-item-ind';
          case '?':
              return 'explicit-key-ind';
          case ':':
              return 'map-value-ind';
          case '{':
              return 'flow-map-start';
          case '}':
              return 'flow-map-end';
          case '[':
              return 'flow-seq-start';
          case ']':
              return 'flow-seq-end';
          case ',':
              return 'comma';
      }
      switch (source[0]) {
          case ' ':
          case '\t':
              return 'space';
          case '#':
              return 'comment';
          case '%':
              return 'directive-line';
          case '*':
              return 'alias';
          case '&':
              return 'anchor';
          case '!':
              return 'tag';
          case "'":
              return 'single-quoted-scalar';
          case '"':
              return 'double-quoted-scalar';
          case '|':
          case '>':
              return 'block-scalar-header';
      }
      return null;
  }

  /*
  START -> stream

  stream
    directive -> line-end -> stream
    indent + line-end -> stream
    [else] -> line-start

  line-end
    comment -> line-end
    newline -> .
    input-end -> END

  line-start
    doc-start -> doc
    doc-end -> stream
    [else] -> indent -> block-start

  block-start
    seq-item-start -> block-start
    explicit-key-start -> block-start
    map-value-start -> block-start
    [else] -> doc

  doc
    line-end -> line-start
    spaces -> doc
    anchor -> doc
    tag -> doc
    flow-start -> flow -> doc
    flow-end -> error -> doc
    seq-item-start -> error -> doc
    explicit-key-start -> error -> doc
    map-value-start -> doc
    alias -> doc
    quote-start -> quoted-scalar -> doc
    block-scalar-header -> line-end -> block-scalar(min) -> line-start
    [else] -> plain-scalar(false, min) -> doc

  flow
    line-end -> flow
    spaces -> flow
    anchor -> flow
    tag -> flow
    flow-start -> flow -> flow
    flow-end -> .
    seq-item-start -> error -> flow
    explicit-key-start -> flow
    map-value-start -> flow
    alias -> flow
    quote-start -> quoted-scalar -> flow
    comma -> flow
    [else] -> plain-scalar(true, 0) -> flow

  quoted-scalar
    quote-end -> .
    [else] -> quoted-scalar

  block-scalar(min)
    newline + peek(indent < min) -> .
    [else] -> block-scalar(min)

  plain-scalar(is-flow, min)
    scalar-end(is-flow) -> .
    peek(newline + (indent < min)) -> .
    [else] -> plain-scalar(min)
  */
  function isEmpty(ch) {
      switch (ch) {
          case undefined:
          case ' ':
          case '\n':
          case '\r':
          case '\t':
              return true;
          default:
              return false;
      }
  }
  const hexDigits = '0123456789ABCDEFabcdef'.split('');
  const tagChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()".split('');
  const invalidFlowScalarChars = ',[]{}'.split('');
  const invalidAnchorChars = ' ,[]{}\n\r\t'.split('');
  const isNotAnchorChar = (ch) => !ch || invalidAnchorChars.includes(ch);
  /**
   * Splits an input string into lexical tokens, i.e. smaller strings that are
   * easily identifiable by `tokens.tokenType()`.
   *
   * Lexing starts always in a "stream" context. Incomplete input may be buffered
   * until a complete token can be emitted.
   *
   * In addition to slices of the original input, the following control characters
   * may also be emitted:
   *
   * - `\x02` (Start of Text): A document starts with the next token
   * - `\x18` (Cancel): Unexpected end of flow-mode (indicates an error)
   * - `\x1f` (Unit Separator): Next token is a scalar value
   * - `\u{FEFF}` (Byte order mark): Emitted separately outside documents
   */
  class Lexer {
      constructor() {
          /**
           * Flag indicating whether the end of the current buffer marks the end of
           * all input
           */
          this.atEnd = false;
          /**
           * Explicit indent set in block scalar header, as an offset from the current
           * minimum indent, so e.g. set to 1 from a header `|2+`. Set to -1 if not
           * explicitly set.
           */
          this.blockScalarIndent = -1;
          /**
           * Block scalars that include a + (keep) chomping indicator in their header
           * include trailing empty lines, which are otherwise excluded from the
           * scalar's contents.
           */
          this.blockScalarKeep = false;
          /** Current input */
          this.buffer = '';
          /**
           * Flag noting whether the map value indicator : can immediately follow this
           * node within a flow context.
           */
          this.flowKey = false;
          /** Count of surrounding flow collection levels. */
          this.flowLevel = 0;
          /**
           * Minimum level of indentation required for next lines to be parsed as a
           * part of the current scalar value.
           */
          this.indentNext = 0;
          /** Indentation level of the current line. */
          this.indentValue = 0;
          /** Position of the next \n character. */
          this.lineEndPos = null;
          /** Stores the state of the lexer if reaching the end of incpomplete input */
          this.next = null;
          /** A pointer to `buffer`; the current position of the lexer. */
          this.pos = 0;
      }
      /**
       * Generate YAML tokens from the `source` string. If `incomplete`,
       * a part of the last line may be left as a buffer for the next call.
       *
       * @returns A generator of lexical tokens
       */
      *lex(source, incomplete = false) {
          if (source) {
              this.buffer = this.buffer ? this.buffer + source : source;
              this.lineEndPos = null;
          }
          this.atEnd = !incomplete;
          let next = this.next ?? 'stream';
          while (next && (incomplete || this.hasChars(1)))
              next = yield* this.parseNext(next);
      }
      atLineEnd() {
          let i = this.pos;
          let ch = this.buffer[i];
          while (ch === ' ' || ch === '\t')
              ch = this.buffer[++i];
          if (!ch || ch === '#' || ch === '\n')
              return true;
          if (ch === '\r')
              return this.buffer[i + 1] === '\n';
          return false;
      }
      charAt(n) {
          return this.buffer[this.pos + n];
      }
      continueScalar(offset) {
          let ch = this.buffer[offset];
          if (this.indentNext > 0) {
              let indent = 0;
              while (ch === ' ')
                  ch = this.buffer[++indent + offset];
              if (ch === '\r') {
                  const next = this.buffer[indent + offset + 1];
                  if (next === '\n' || (!next && !this.atEnd))
                      return offset + indent + 1;
              }
              return ch === '\n' || indent >= this.indentNext || (!ch && !this.atEnd)
                  ? offset + indent
                  : -1;
          }
          if (ch === '-' || ch === '.') {
              const dt = this.buffer.substr(offset, 3);
              if ((dt === '---' || dt === '...') && isEmpty(this.buffer[offset + 3]))
                  return -1;
          }
          return offset;
      }
      getLine() {
          let end = this.lineEndPos;
          if (typeof end !== 'number' || (end !== -1 && end < this.pos)) {
              end = this.buffer.indexOf('\n', this.pos);
              this.lineEndPos = end;
          }
          if (end === -1)
              return this.atEnd ? this.buffer.substring(this.pos) : null;
          if (this.buffer[end - 1] === '\r')
              end -= 1;
          return this.buffer.substring(this.pos, end);
      }
      hasChars(n) {
          return this.pos + n <= this.buffer.length;
      }
      setNext(state) {
          this.buffer = this.buffer.substring(this.pos);
          this.pos = 0;
          this.lineEndPos = null;
          this.next = state;
          return null;
      }
      peek(n) {
          return this.buffer.substr(this.pos, n);
      }
      *parseNext(next) {
          switch (next) {
              case 'stream':
                  return yield* this.parseStream();
              case 'line-start':
                  return yield* this.parseLineStart();
              case 'block-start':
                  return yield* this.parseBlockStart();
              case 'doc':
                  return yield* this.parseDocument();
              case 'flow':
                  return yield* this.parseFlowCollection();
              case 'quoted-scalar':
                  return yield* this.parseQuotedScalar();
              case 'block-scalar':
                  return yield* this.parseBlockScalar();
              case 'plain-scalar':
                  return yield* this.parsePlainScalar();
          }
      }
      *parseStream() {
          let line = this.getLine();
          if (line === null)
              return this.setNext('stream');
          if (line[0] === BOM) {
              yield* this.pushCount(1);
              line = line.substring(1);
          }
          if (line[0] === '%') {
              let dirEnd = line.length;
              const cs = line.indexOf('#');
              if (cs !== -1) {
                  const ch = line[cs - 1];
                  if (ch === ' ' || ch === '\t')
                      dirEnd = cs - 1;
              }
              while (true) {
                  const ch = line[dirEnd - 1];
                  if (ch === ' ' || ch === '\t')
                      dirEnd -= 1;
                  else
                      break;
              }
              const n = (yield* this.pushCount(dirEnd)) + (yield* this.pushSpaces(true));
              yield* this.pushCount(line.length - n); // possible comment
              this.pushNewline();
              return 'stream';
          }
          if (this.atLineEnd()) {
              const sp = yield* this.pushSpaces(true);
              yield* this.pushCount(line.length - sp);
              yield* this.pushNewline();
              return 'stream';
          }
          yield DOCUMENT;
          return yield* this.parseLineStart();
      }
      *parseLineStart() {
          const ch = this.charAt(0);
          if (!ch && !this.atEnd)
              return this.setNext('line-start');
          if (ch === '-' || ch === '.') {
              if (!this.atEnd && !this.hasChars(4))
                  return this.setNext('line-start');
              const s = this.peek(3);
              if (s === '---' && isEmpty(this.charAt(3))) {
                  yield* this.pushCount(3);
                  this.indentValue = 0;
                  this.indentNext = 0;
                  return 'doc';
              }
              else if (s === '...' && isEmpty(this.charAt(3))) {
                  yield* this.pushCount(3);
                  return 'stream';
              }
          }
          this.indentValue = yield* this.pushSpaces(false);
          if (this.indentNext > this.indentValue && !isEmpty(this.charAt(1)))
              this.indentNext = this.indentValue;
          return yield* this.parseBlockStart();
      }
      *parseBlockStart() {
          const [ch0, ch1] = this.peek(2);
          if (!ch1 && !this.atEnd)
              return this.setNext('block-start');
          if ((ch0 === '-' || ch0 === '?' || ch0 === ':') && isEmpty(ch1)) {
              const n = (yield* this.pushCount(1)) + (yield* this.pushSpaces(true));
              this.indentNext = this.indentValue + 1;
              this.indentValue += n;
              return yield* this.parseBlockStart();
          }
          return 'doc';
      }
      *parseDocument() {
          yield* this.pushSpaces(true);
          const line = this.getLine();
          if (line === null)
              return this.setNext('doc');
          let n = yield* this.pushIndicators();
          switch (line[n]) {
              case '#':
                  yield* this.pushCount(line.length - n);
              // fallthrough
              case undefined:
                  yield* this.pushNewline();
                  return yield* this.parseLineStart();
              case '{':
              case '[':
                  yield* this.pushCount(1);
                  this.flowKey = false;
                  this.flowLevel = 1;
                  return 'flow';
              case '}':
              case ']':
                  // this is an error
                  yield* this.pushCount(1);
                  return 'doc';
              case '*':
                  yield* this.pushUntil(isNotAnchorChar);
                  return 'doc';
              case '"':
              case "'":
                  return yield* this.parseQuotedScalar();
              case '|':
              case '>':
                  n += yield* this.parseBlockScalarHeader();
                  n += yield* this.pushSpaces(true);
                  yield* this.pushCount(line.length - n);
                  yield* this.pushNewline();
                  return yield* this.parseBlockScalar();
              default:
                  return yield* this.parsePlainScalar();
          }
      }
      *parseFlowCollection() {
          let nl, sp;
          let indent = -1;
          do {
              nl = yield* this.pushNewline();
              if (nl > 0) {
                  sp = yield* this.pushSpaces(false);
                  this.indentValue = indent = sp;
              }
              else {
                  sp = 0;
              }
              sp += yield* this.pushSpaces(true);
          } while (nl + sp > 0);
          const line = this.getLine();
          if (line === null)
              return this.setNext('flow');
          if ((indent !== -1 && indent < this.indentNext && line[0] !== '#') ||
              (indent === 0 &&
                  (line.startsWith('---') || line.startsWith('...')) &&
                  isEmpty(line[3]))) {
              // Allowing for the terminal ] or } at the same (rather than greater)
              // indent level as the initial [ or { is technically invalid, but
              // failing here would be surprising to users.
              const atFlowEndMarker = indent === this.indentNext - 1 &&
                  this.flowLevel === 1 &&
                  (line[0] === ']' || line[0] === '}');
              if (!atFlowEndMarker) {
                  // this is an error
                  this.flowLevel = 0;
                  yield FLOW_END;
                  return yield* this.parseLineStart();
              }
          }
          let n = 0;
          while (line[n] === ',') {
              n += yield* this.pushCount(1);
              n += yield* this.pushSpaces(true);
              this.flowKey = false;
          }
          n += yield* this.pushIndicators();
          switch (line[n]) {
              case undefined:
                  return 'flow';
              case '#':
                  yield* this.pushCount(line.length - n);
                  return 'flow';
              case '{':
              case '[':
                  yield* this.pushCount(1);
                  this.flowKey = false;
                  this.flowLevel += 1;
                  return 'flow';
              case '}':
              case ']':
                  yield* this.pushCount(1);
                  this.flowKey = true;
                  this.flowLevel -= 1;
                  return this.flowLevel ? 'flow' : 'doc';
              case '*':
                  yield* this.pushUntil(isNotAnchorChar);
                  return 'flow';
              case '"':
              case "'":
                  this.flowKey = true;
                  return yield* this.parseQuotedScalar();
              case ':': {
                  const next = this.charAt(1);
                  if (this.flowKey || isEmpty(next) || next === ',') {
                      this.flowKey = false;
                      yield* this.pushCount(1);
                      yield* this.pushSpaces(true);
                      return 'flow';
                  }
              }
              // fallthrough
              default:
                  this.flowKey = false;
                  return yield* this.parsePlainScalar();
          }
      }
      *parseQuotedScalar() {
          const quote = this.charAt(0);
          let end = this.buffer.indexOf(quote, this.pos + 1);
          if (quote === "'") {
              while (end !== -1 && this.buffer[end + 1] === "'")
                  end = this.buffer.indexOf("'", end + 2);
          }
          else {
              // double-quote
              while (end !== -1) {
                  let n = 0;
                  while (this.buffer[end - 1 - n] === '\\')
                      n += 1;
                  if (n % 2 === 0)
                      break;
                  end = this.buffer.indexOf('"', end + 1);
              }
          }
          // Only looking for newlines within the quotes
          const qb = this.buffer.substring(0, end);
          let nl = qb.indexOf('\n', this.pos);
          if (nl !== -1) {
              while (nl !== -1) {
                  const cs = this.continueScalar(nl + 1);
                  if (cs === -1)
                      break;
                  nl = qb.indexOf('\n', cs);
              }
              if (nl !== -1) {
                  // this is an error caused by an unexpected unindent
                  end = nl - (qb[nl - 1] === '\r' ? 2 : 1);
              }
          }
          if (end === -1) {
              if (!this.atEnd)
                  return this.setNext('quoted-scalar');
              end = this.buffer.length;
          }
          yield* this.pushToIndex(end + 1, false);
          return this.flowLevel ? 'flow' : 'doc';
      }
      *parseBlockScalarHeader() {
          this.blockScalarIndent = -1;
          this.blockScalarKeep = false;
          let i = this.pos;
          while (true) {
              const ch = this.buffer[++i];
              if (ch === '+')
                  this.blockScalarKeep = true;
              else if (ch > '0' && ch <= '9')
                  this.blockScalarIndent = Number(ch) - 1;
              else if (ch !== '-')
                  break;
          }
          return yield* this.pushUntil(ch => isEmpty(ch) || ch === '#');
      }
      *parseBlockScalar() {
          let nl = this.pos - 1; // may be -1 if this.pos === 0
          let indent = 0;
          let ch;
          loop: for (let i = this.pos; (ch = this.buffer[i]); ++i) {
              switch (ch) {
                  case ' ':
                      indent += 1;
                      break;
                  case '\n':
                      nl = i;
                      indent = 0;
                      break;
                  case '\r': {
                      const next = this.buffer[i + 1];
                      if (!next && !this.atEnd)
                          return this.setNext('block-scalar');
                      if (next === '\n')
                          break;
                  } // fallthrough
                  default:
                      break loop;
              }
          }
          if (!ch && !this.atEnd)
              return this.setNext('block-scalar');
          if (indent >= this.indentNext) {
              if (this.blockScalarIndent === -1)
                  this.indentNext = indent;
              else
                  this.indentNext += this.blockScalarIndent;
              do {
                  const cs = this.continueScalar(nl + 1);
                  if (cs === -1)
                      break;
                  nl = this.buffer.indexOf('\n', cs);
              } while (nl !== -1);
              if (nl === -1) {
                  if (!this.atEnd)
                      return this.setNext('block-scalar');
                  nl = this.buffer.length;
              }
          }
          if (!this.blockScalarKeep) {
              do {
                  let i = nl - 1;
                  let ch = this.buffer[i];
                  if (ch === '\r')
                      ch = this.buffer[--i];
                  const lastChar = i; // Drop the line if last char not more indented
                  while (ch === ' ' || ch === '\t')
                      ch = this.buffer[--i];
                  if (ch === '\n' && i >= this.pos && i + 1 + indent > lastChar)
                      nl = i;
                  else
                      break;
              } while (true);
          }
          yield SCALAR;
          yield* this.pushToIndex(nl + 1, true);
          return yield* this.parseLineStart();
      }
      *parsePlainScalar() {
          const inFlow = this.flowLevel > 0;
          let end = this.pos - 1;
          let i = this.pos - 1;
          let ch;
          while ((ch = this.buffer[++i])) {
              if (ch === ':') {
                  const next = this.buffer[i + 1];
                  if (isEmpty(next) || (inFlow && next === ','))
                      break;
                  end = i;
              }
              else if (isEmpty(ch)) {
                  let next = this.buffer[i + 1];
                  if (ch === '\r') {
                      if (next === '\n') {
                          i += 1;
                          ch = '\n';
                          next = this.buffer[i + 1];
                      }
                      else
                          end = i;
                  }
                  if (next === '#' || (inFlow && invalidFlowScalarChars.includes(next)))
                      break;
                  if (ch === '\n') {
                      const cs = this.continueScalar(i + 1);
                      if (cs === -1)
                          break;
                      i = Math.max(i, cs - 2); // to advance, but still account for ' #'
                  }
              }
              else {
                  if (inFlow && invalidFlowScalarChars.includes(ch))
                      break;
                  end = i;
              }
          }
          if (!ch && !this.atEnd)
              return this.setNext('plain-scalar');
          yield SCALAR;
          yield* this.pushToIndex(end + 1, true);
          return inFlow ? 'flow' : 'doc';
      }
      *pushCount(n) {
          if (n > 0) {
              yield this.buffer.substr(this.pos, n);
              this.pos += n;
              return n;
          }
          return 0;
      }
      *pushToIndex(i, allowEmpty) {
          const s = this.buffer.slice(this.pos, i);
          if (s) {
              yield s;
              this.pos += s.length;
              return s.length;
          }
          else if (allowEmpty)
              yield '';
          return 0;
      }
      *pushIndicators() {
          switch (this.charAt(0)) {
              case '!':
                  return ((yield* this.pushTag()) +
                      (yield* this.pushSpaces(true)) +
                      (yield* this.pushIndicators()));
              case '&':
                  return ((yield* this.pushUntil(isNotAnchorChar)) +
                      (yield* this.pushSpaces(true)) +
                      (yield* this.pushIndicators()));
              case '-': // this is an error
              case '?': // this is an error outside flow collections
              case ':': {
                  const inFlow = this.flowLevel > 0;
                  const ch1 = this.charAt(1);
                  if (isEmpty(ch1) || (inFlow && invalidFlowScalarChars.includes(ch1))) {
                      if (!inFlow)
                          this.indentNext = this.indentValue + 1;
                      else if (this.flowKey)
                          this.flowKey = false;
                      return ((yield* this.pushCount(1)) +
                          (yield* this.pushSpaces(true)) +
                          (yield* this.pushIndicators()));
                  }
              }
          }
          return 0;
      }
      *pushTag() {
          if (this.charAt(1) === '<') {
              let i = this.pos + 2;
              let ch = this.buffer[i];
              while (!isEmpty(ch) && ch !== '>')
                  ch = this.buffer[++i];
              return yield* this.pushToIndex(ch === '>' ? i + 1 : i, false);
          }
          else {
              let i = this.pos + 1;
              let ch = this.buffer[i];
              while (ch) {
                  if (tagChars.includes(ch))
                      ch = this.buffer[++i];
                  else if (ch === '%' &&
                      hexDigits.includes(this.buffer[i + 1]) &&
                      hexDigits.includes(this.buffer[i + 2])) {
                      ch = this.buffer[(i += 3)];
                  }
                  else
                      break;
              }
              return yield* this.pushToIndex(i, false);
          }
      }
      *pushNewline() {
          const ch = this.buffer[this.pos];
          if (ch === '\n')
              return yield* this.pushCount(1);
          else if (ch === '\r' && this.charAt(1) === '\n')
              return yield* this.pushCount(2);
          else
              return 0;
      }
      *pushSpaces(allowTabs) {
          let i = this.pos - 1;
          let ch;
          do {
              ch = this.buffer[++i];
          } while (ch === ' ' || (allowTabs && ch === '\t'));
          const n = i - this.pos;
          if (n > 0) {
              yield this.buffer.substr(this.pos, n);
              this.pos = i;
          }
          return n;
      }
      *pushUntil(test) {
          let i = this.pos;
          let ch = this.buffer[i];
          while (!test(ch))
              ch = this.buffer[++i];
          return yield* this.pushToIndex(i, false);
      }
  }

  /**
   * Tracks newlines during parsing in order to provide an efficient API for
   * determining the one-indexed `{ line, col }` position for any offset
   * within the input.
   */
  class LineCounter {
      constructor() {
          this.lineStarts = [];
          /**
           * Should be called in ascending order. Otherwise, call
           * `lineCounter.lineStarts.sort()` before calling `linePos()`.
           */
          this.addNewLine = (offset) => this.lineStarts.push(offset);
          /**
           * Performs a binary search and returns the 1-indexed { line, col }
           * position of `offset`. If `line === 0`, `addNewLine` has never been
           * called or `offset` is before the first known newline.
           */
          this.linePos = (offset) => {
              let low = 0;
              let high = this.lineStarts.length;
              while (low < high) {
                  const mid = (low + high) >> 1; // Math.floor((low + high) / 2)
                  if (this.lineStarts[mid] < offset)
                      low = mid + 1;
                  else
                      high = mid;
              }
              if (this.lineStarts[low] === offset)
                  return { line: low + 1, col: 1 };
              if (low === 0)
                  return { line: 0, col: offset };
              const start = this.lineStarts[low - 1];
              return { line: low, col: offset - start + 1 };
          };
      }
  }

  function includesToken(list, type) {
      for (let i = 0; i < list.length; ++i)
          if (list[i].type === type)
              return true;
      return false;
  }
  function findNonEmptyIndex(list) {
      for (let i = 0; i < list.length; ++i) {
          switch (list[i].type) {
              case 'space':
              case 'comment':
              case 'newline':
                  break;
              default:
                  return i;
          }
      }
      return -1;
  }
  function isFlowToken(token) {
      switch (token?.type) {
          case 'alias':
          case 'scalar':
          case 'single-quoted-scalar':
          case 'double-quoted-scalar':
          case 'flow-collection':
              return true;
          default:
              return false;
      }
  }
  function getPrevProps(parent) {
      switch (parent.type) {
          case 'document':
              return parent.start;
          case 'block-map': {
              const it = parent.items[parent.items.length - 1];
              return it.sep ?? it.start;
          }
          case 'block-seq':
              return parent.items[parent.items.length - 1].start;
          /* istanbul ignore next should not happen */
          default:
              return [];
      }
  }
  /** Note: May modify input array */
  function getFirstKeyStartProps(prev) {
      if (prev.length === 0)
          return [];
      let i = prev.length;
      loop: while (--i >= 0) {
          switch (prev[i].type) {
              case 'doc-start':
              case 'explicit-key-ind':
              case 'map-value-ind':
              case 'seq-item-ind':
              case 'newline':
                  break loop;
          }
      }
      while (prev[++i]?.type === 'space') {
          /* loop */
      }
      return prev.splice(i, prev.length);
  }
  function fixFlowSeqItems(fc) {
      if (fc.start.type === 'flow-seq-start') {
          for (const it of fc.items) {
              if (it.sep &&
                  !it.value &&
                  !includesToken(it.start, 'explicit-key-ind') &&
                  !includesToken(it.sep, 'map-value-ind')) {
                  if (it.key)
                      it.value = it.key;
                  delete it.key;
                  if (isFlowToken(it.value)) {
                      if (it.value.end)
                          Array.prototype.push.apply(it.value.end, it.sep);
                      else
                          it.value.end = it.sep;
                  }
                  else
                      Array.prototype.push.apply(it.start, it.sep);
                  delete it.sep;
              }
          }
      }
  }
  /**
   * A YAML concrete syntax tree (CST) parser
   *
   * ```ts
   * const src: string = ...
   * for (const token of new Parser().parse(src)) {
   *   // token: Token
   * }
   * ```
   *
   * To use the parser with a user-provided lexer:
   *
   * ```ts
   * function* parse(source: string, lexer: Lexer) {
   *   const parser = new Parser()
   *   for (const lexeme of lexer.lex(source))
   *     yield* parser.next(lexeme)
   *   yield* parser.end()
   * }
   *
   * const src: string = ...
   * const lexer = new Lexer()
   * for (const token of parse(src, lexer)) {
   *   // token: Token
   * }
   * ```
   */
  class Parser {
      /**
       * @param onNewLine - If defined, called separately with the start position of
       *   each new line (in `parse()`, including the start of input).
       */
      constructor(onNewLine) {
          /** If true, space and sequence indicators count as indentation */
          this.atNewLine = true;
          /** If true, next token is a scalar value */
          this.atScalar = false;
          /** Current indentation level */
          this.indent = 0;
          /** Current offset since the start of parsing */
          this.offset = 0;
          /** On the same line with a block map key */
          this.onKeyLine = false;
          /** Top indicates the node that's currently being built */
          this.stack = [];
          /** The source of the current token, set in parse() */
          this.source = '';
          /** The type of the current token, set in parse() */
          this.type = '';
          // Must be defined after `next()`
          this.lexer = new Lexer();
          this.onNewLine = onNewLine;
      }
      /**
       * Parse `source` as a YAML stream.
       * If `incomplete`, a part of the last line may be left as a buffer for the next call.
       *
       * Errors are not thrown, but yielded as `{ type: 'error', message }` tokens.
       *
       * @returns A generator of tokens representing each directive, document, and other structure.
       */
      *parse(source, incomplete = false) {
          if (this.onNewLine && this.offset === 0)
              this.onNewLine(0);
          for (const lexeme of this.lexer.lex(source, incomplete))
              yield* this.next(lexeme);
          if (!incomplete)
              yield* this.end();
      }
      /**
       * Advance the parser by the `source` of one lexical token.
       */
      *next(source) {
          this.source = source;
          if (this.atScalar) {
              this.atScalar = false;
              yield* this.step();
              this.offset += source.length;
              return;
          }
          const type = tokenType(source);
          if (!type) {
              const message = `Not a YAML token: ${source}`;
              yield* this.pop({ type: 'error', offset: this.offset, message, source });
              this.offset += source.length;
          }
          else if (type === 'scalar') {
              this.atNewLine = false;
              this.atScalar = true;
              this.type = 'scalar';
          }
          else {
              this.type = type;
              yield* this.step();
              switch (type) {
                  case 'newline':
                      this.atNewLine = true;
                      this.indent = 0;
                      if (this.onNewLine)
                          this.onNewLine(this.offset + source.length);
                      break;
                  case 'space':
                      if (this.atNewLine && source[0] === ' ')
                          this.indent += source.length;
                      break;
                  case 'explicit-key-ind':
                  case 'map-value-ind':
                  case 'seq-item-ind':
                      if (this.atNewLine)
                          this.indent += source.length;
                      break;
                  case 'doc-mode':
                  case 'flow-error-end':
                      return;
                  default:
                      this.atNewLine = false;
              }
              this.offset += source.length;
          }
      }
      /** Call at end of input to push out any remaining constructions */
      *end() {
          while (this.stack.length > 0)
              yield* this.pop();
      }
      get sourceToken() {
          const st = {
              type: this.type,
              offset: this.offset,
              indent: this.indent,
              source: this.source
          };
          return st;
      }
      *step() {
          const top = this.peek(1);
          if (this.type === 'doc-end' && (!top || top.type !== 'doc-end')) {
              while (this.stack.length > 0)
                  yield* this.pop();
              this.stack.push({
                  type: 'doc-end',
                  offset: this.offset,
                  source: this.source
              });
              return;
          }
          if (!top)
              return yield* this.stream();
          switch (top.type) {
              case 'document':
                  return yield* this.document(top);
              case 'alias':
              case 'scalar':
              case 'single-quoted-scalar':
              case 'double-quoted-scalar':
                  return yield* this.scalar(top);
              case 'block-scalar':
                  return yield* this.blockScalar(top);
              case 'block-map':
                  return yield* this.blockMap(top);
              case 'block-seq':
                  return yield* this.blockSequence(top);
              case 'flow-collection':
                  return yield* this.flowCollection(top);
              case 'doc-end':
                  return yield* this.documentEnd(top);
          }
          /* istanbul ignore next should not happen */
          yield* this.pop();
      }
      peek(n) {
          return this.stack[this.stack.length - n];
      }
      *pop(error) {
          const token = error ?? this.stack.pop();
          /* istanbul ignore if should not happen */
          if (!token) {
              const message = 'Tried to pop an empty stack';
              yield { type: 'error', offset: this.offset, source: '', message };
          }
          else if (this.stack.length === 0) {
              yield token;
          }
          else {
              const top = this.peek(1);
              if (token.type === 'block-scalar') {
                  // Block scalars use their parent rather than header indent
                  token.indent = 'indent' in top ? top.indent : 0;
              }
              else if (token.type === 'flow-collection' && top.type === 'document') {
                  // Ignore all indent for top-level flow collections
                  token.indent = 0;
              }
              if (token.type === 'flow-collection')
                  fixFlowSeqItems(token);
              switch (top.type) {
                  case 'document':
                      top.value = token;
                      break;
                  case 'block-scalar':
                      top.props.push(token); // error
                      break;
                  case 'block-map': {
                      const it = top.items[top.items.length - 1];
                      if (it.value) {
                          top.items.push({ start: [], key: token, sep: [] });
                          this.onKeyLine = true;
                          return;
                      }
                      else if (it.sep) {
                          it.value = token;
                      }
                      else {
                          Object.assign(it, { key: token, sep: [] });
                          this.onKeyLine = !includesToken(it.start, 'explicit-key-ind');
                          return;
                      }
                      break;
                  }
                  case 'block-seq': {
                      const it = top.items[top.items.length - 1];
                      if (it.value)
                          top.items.push({ start: [], value: token });
                      else
                          it.value = token;
                      break;
                  }
                  case 'flow-collection': {
                      const it = top.items[top.items.length - 1];
                      if (!it || it.value)
                          top.items.push({ start: [], key: token, sep: [] });
                      else if (it.sep)
                          it.value = token;
                      else
                          Object.assign(it, { key: token, sep: [] });
                      return;
                  }
                  /* istanbul ignore next should not happen */
                  default:
                      yield* this.pop();
                      yield* this.pop(token);
              }
              if ((top.type === 'document' ||
                  top.type === 'block-map' ||
                  top.type === 'block-seq') &&
                  (token.type === 'block-map' || token.type === 'block-seq')) {
                  const last = token.items[token.items.length - 1];
                  if (last &&
                      !last.sep &&
                      !last.value &&
                      last.start.length > 0 &&
                      findNonEmptyIndex(last.start) === -1 &&
                      (token.indent === 0 ||
                          last.start.every(st => st.type !== 'comment' || st.indent < token.indent))) {
                      if (top.type === 'document')
                          top.end = last.start;
                      else
                          top.items.push({ start: last.start });
                      token.items.splice(-1, 1);
                  }
              }
          }
      }
      *stream() {
          switch (this.type) {
              case 'directive-line':
                  yield { type: 'directive', offset: this.offset, source: this.source };
                  return;
              case 'byte-order-mark':
              case 'space':
              case 'comment':
              case 'newline':
                  yield this.sourceToken;
                  return;
              case 'doc-mode':
              case 'doc-start': {
                  const doc = {
                      type: 'document',
                      offset: this.offset,
                      start: []
                  };
                  if (this.type === 'doc-start')
                      doc.start.push(this.sourceToken);
                  this.stack.push(doc);
                  return;
              }
          }
          yield {
              type: 'error',
              offset: this.offset,
              message: `Unexpected ${this.type} token in YAML stream`,
              source: this.source
          };
      }
      *document(doc) {
          if (doc.value)
              return yield* this.lineEnd(doc);
          switch (this.type) {
              case 'doc-start': {
                  if (findNonEmptyIndex(doc.start) !== -1) {
                      yield* this.pop();
                      yield* this.step();
                  }
                  else
                      doc.start.push(this.sourceToken);
                  return;
              }
              case 'anchor':
              case 'tag':
              case 'space':
              case 'comment':
              case 'newline':
                  doc.start.push(this.sourceToken);
                  return;
          }
          const bv = this.startBlockValue(doc);
          if (bv)
              this.stack.push(bv);
          else {
              yield {
                  type: 'error',
                  offset: this.offset,
                  message: `Unexpected ${this.type} token in YAML document`,
                  source: this.source
              };
          }
      }
      *scalar(scalar) {
          if (this.type === 'map-value-ind') {
              const prev = getPrevProps(this.peek(2));
              const start = getFirstKeyStartProps(prev);
              let sep;
              if (scalar.end) {
                  sep = scalar.end;
                  sep.push(this.sourceToken);
                  delete scalar.end;
              }
              else
                  sep = [this.sourceToken];
              const map = {
                  type: 'block-map',
                  offset: scalar.offset,
                  indent: scalar.indent,
                  items: [{ start, key: scalar, sep }]
              };
              this.onKeyLine = true;
              this.stack[this.stack.length - 1] = map;
          }
          else
              yield* this.lineEnd(scalar);
      }
      *blockScalar(scalar) {
          switch (this.type) {
              case 'space':
              case 'comment':
              case 'newline':
                  scalar.props.push(this.sourceToken);
                  return;
              case 'scalar':
                  scalar.source = this.source;
                  // block-scalar source includes trailing newline
                  this.atNewLine = true;
                  this.indent = 0;
                  if (this.onNewLine) {
                      let nl = this.source.indexOf('\n') + 1;
                      while (nl !== 0) {
                          this.onNewLine(this.offset + nl);
                          nl = this.source.indexOf('\n', nl) + 1;
                      }
                  }
                  yield* this.pop();
                  break;
              /* istanbul ignore next should not happen */
              default:
                  yield* this.pop();
                  yield* this.step();
          }
      }
      *blockMap(map) {
          const it = map.items[map.items.length - 1];
          // it.sep is true-ish if pair already has key or : separator
          switch (this.type) {
              case 'newline':
                  this.onKeyLine = false;
                  if (it.value) {
                      const end = 'end' in it.value ? it.value.end : undefined;
                      const last = Array.isArray(end) ? end[end.length - 1] : undefined;
                      if (last?.type === 'comment')
                          end?.push(this.sourceToken);
                      else
                          map.items.push({ start: [this.sourceToken] });
                  }
                  else if (it.sep) {
                      it.sep.push(this.sourceToken);
                  }
                  else {
                      it.start.push(this.sourceToken);
                  }
                  return;
              case 'space':
              case 'comment':
                  if (it.value) {
                      map.items.push({ start: [this.sourceToken] });
                  }
                  else if (it.sep) {
                      it.sep.push(this.sourceToken);
                  }
                  else {
                      if (this.atIndentedComment(it.start, map.indent)) {
                          const prev = map.items[map.items.length - 2];
                          const end = prev?.value?.end;
                          if (Array.isArray(end)) {
                              Array.prototype.push.apply(end, it.start);
                              end.push(this.sourceToken);
                              map.items.pop();
                              return;
                          }
                      }
                      it.start.push(this.sourceToken);
                  }
                  return;
          }
          if (this.indent >= map.indent) {
              const atNextItem = !this.onKeyLine && this.indent === map.indent && it.sep;
              // For empty nodes, assign newline-separated not indented empty tokens to following node
              let start = [];
              if (atNextItem && it.sep && !it.value) {
                  const nl = [];
                  for (let i = 0; i < it.sep.length; ++i) {
                      const st = it.sep[i];
                      switch (st.type) {
                          case 'newline':
                              nl.push(i);
                              break;
                          case 'space':
                              break;
                          case 'comment':
                              if (st.indent > map.indent)
                                  nl.length = 0;
                              break;
                          default:
                              nl.length = 0;
                      }
                  }
                  if (nl.length >= 2)
                      start = it.sep.splice(nl[1]);
              }
              switch (this.type) {
                  case 'anchor':
                  case 'tag':
                      if (atNextItem || it.value) {
                          start.push(this.sourceToken);
                          map.items.push({ start });
                          this.onKeyLine = true;
                      }
                      else if (it.sep) {
                          it.sep.push(this.sourceToken);
                      }
                      else {
                          it.start.push(this.sourceToken);
                      }
                      return;
                  case 'explicit-key-ind':
                      if (!it.sep && !includesToken(it.start, 'explicit-key-ind')) {
                          it.start.push(this.sourceToken);
                      }
                      else if (atNextItem || it.value) {
                          start.push(this.sourceToken);
                          map.items.push({ start });
                      }
                      else {
                          this.stack.push({
                              type: 'block-map',
                              offset: this.offset,
                              indent: this.indent,
                              items: [{ start: [this.sourceToken] }]
                          });
                      }
                      this.onKeyLine = true;
                      return;
                  case 'map-value-ind':
                      if (includesToken(it.start, 'explicit-key-ind')) {
                          if (!it.sep) {
                              if (includesToken(it.start, 'newline')) {
                                  Object.assign(it, { key: null, sep: [this.sourceToken] });
                              }
                              else {
                                  const start = getFirstKeyStartProps(it.start);
                                  this.stack.push({
                                      type: 'block-map',
                                      offset: this.offset,
                                      indent: this.indent,
                                      items: [{ start, key: null, sep: [this.sourceToken] }]
                                  });
                              }
                          }
                          else if (it.value) {
                              map.items.push({ start: [], key: null, sep: [this.sourceToken] });
                          }
                          else if (includesToken(it.sep, 'map-value-ind')) {
                              this.stack.push({
                                  type: 'block-map',
                                  offset: this.offset,
                                  indent: this.indent,
                                  items: [{ start, key: null, sep: [this.sourceToken] }]
                              });
                          }
                          else if (isFlowToken(it.key) &&
                              !includesToken(it.sep, 'newline')) {
                              const start = getFirstKeyStartProps(it.start);
                              const key = it.key;
                              const sep = it.sep;
                              sep.push(this.sourceToken);
                              // @ts-expect-error type guard is wrong here
                              delete it.key, delete it.sep;
                              this.stack.push({
                                  type: 'block-map',
                                  offset: this.offset,
                                  indent: this.indent,
                                  items: [{ start, key, sep }]
                              });
                          }
                          else if (start.length > 0) {
                              // Not actually at next item
                              it.sep = it.sep.concat(start, this.sourceToken);
                          }
                          else {
                              it.sep.push(this.sourceToken);
                          }
                      }
                      else {
                          if (!it.sep) {
                              Object.assign(it, { key: null, sep: [this.sourceToken] });
                          }
                          else if (it.value || atNextItem) {
                              map.items.push({ start, key: null, sep: [this.sourceToken] });
                          }
                          else if (includesToken(it.sep, 'map-value-ind')) {
                              this.stack.push({
                                  type: 'block-map',
                                  offset: this.offset,
                                  indent: this.indent,
                                  items: [{ start: [], key: null, sep: [this.sourceToken] }]
                              });
                          }
                          else {
                              it.sep.push(this.sourceToken);
                          }
                      }
                      this.onKeyLine = true;
                      return;
                  case 'alias':
                  case 'scalar':
                  case 'single-quoted-scalar':
                  case 'double-quoted-scalar': {
                      const fs = this.flowScalar(this.type);
                      if (atNextItem || it.value) {
                          map.items.push({ start, key: fs, sep: [] });
                          this.onKeyLine = true;
                      }
                      else if (it.sep) {
                          this.stack.push(fs);
                      }
                      else {
                          Object.assign(it, { key: fs, sep: [] });
                          this.onKeyLine = true;
                      }
                      return;
                  }
                  default: {
                      const bv = this.startBlockValue(map);
                      if (bv) {
                          if (atNextItem &&
                              bv.type !== 'block-seq' &&
                              includesToken(it.start, 'explicit-key-ind')) {
                              map.items.push({ start });
                          }
                          this.stack.push(bv);
                          return;
                      }
                  }
              }
          }
          yield* this.pop();
          yield* this.step();
      }
      *blockSequence(seq) {
          const it = seq.items[seq.items.length - 1];
          switch (this.type) {
              case 'newline':
                  if (it.value) {
                      const end = 'end' in it.value ? it.value.end : undefined;
                      const last = Array.isArray(end) ? end[end.length - 1] : undefined;
                      if (last?.type === 'comment')
                          end?.push(this.sourceToken);
                      else
                          seq.items.push({ start: [this.sourceToken] });
                  }
                  else
                      it.start.push(this.sourceToken);
                  return;
              case 'space':
              case 'comment':
                  if (it.value)
                      seq.items.push({ start: [this.sourceToken] });
                  else {
                      if (this.atIndentedComment(it.start, seq.indent)) {
                          const prev = seq.items[seq.items.length - 2];
                          const end = prev?.value?.end;
                          if (Array.isArray(end)) {
                              Array.prototype.push.apply(end, it.start);
                              end.push(this.sourceToken);
                              seq.items.pop();
                              return;
                          }
                      }
                      it.start.push(this.sourceToken);
                  }
                  return;
              case 'anchor':
              case 'tag':
                  if (it.value || this.indent <= seq.indent)
                      break;
                  it.start.push(this.sourceToken);
                  return;
              case 'seq-item-ind':
                  if (this.indent !== seq.indent)
                      break;
                  if (it.value || includesToken(it.start, 'seq-item-ind'))
                      seq.items.push({ start: [this.sourceToken] });
                  else
                      it.start.push(this.sourceToken);
                  return;
          }
          if (this.indent > seq.indent) {
              const bv = this.startBlockValue(seq);
              if (bv) {
                  this.stack.push(bv);
                  return;
              }
          }
          yield* this.pop();
          yield* this.step();
      }
      *flowCollection(fc) {
          const it = fc.items[fc.items.length - 1];
          if (this.type === 'flow-error-end') {
              let top;
              do {
                  yield* this.pop();
                  top = this.peek(1);
              } while (top && top.type === 'flow-collection');
          }
          else if (fc.end.length === 0) {
              switch (this.type) {
                  case 'comma':
                  case 'explicit-key-ind':
                      if (!it || it.sep)
                          fc.items.push({ start: [this.sourceToken] });
                      else
                          it.start.push(this.sourceToken);
                      return;
                  case 'map-value-ind':
                      if (!it || it.value)
                          fc.items.push({ start: [], key: null, sep: [this.sourceToken] });
                      else if (it.sep)
                          it.sep.push(this.sourceToken);
                      else
                          Object.assign(it, { key: null, sep: [this.sourceToken] });
                      return;
                  case 'space':
                  case 'comment':
                  case 'newline':
                  case 'anchor':
                  case 'tag':
                      if (!it || it.value)
                          fc.items.push({ start: [this.sourceToken] });
                      else if (it.sep)
                          it.sep.push(this.sourceToken);
                      else
                          it.start.push(this.sourceToken);
                      return;
                  case 'alias':
                  case 'scalar':
                  case 'single-quoted-scalar':
                  case 'double-quoted-scalar': {
                      const fs = this.flowScalar(this.type);
                      if (!it || it.value)
                          fc.items.push({ start: [], key: fs, sep: [] });
                      else if (it.sep)
                          this.stack.push(fs);
                      else
                          Object.assign(it, { key: fs, sep: [] });
                      return;
                  }
                  case 'flow-map-end':
                  case 'flow-seq-end':
                      fc.end.push(this.sourceToken);
                      return;
              }
              const bv = this.startBlockValue(fc);
              /* istanbul ignore else should not happen */
              if (bv)
                  this.stack.push(bv);
              else {
                  yield* this.pop();
                  yield* this.step();
              }
          }
          else {
              const parent = this.peek(2);
              if (parent.type === 'block-map' &&
                  ((this.type === 'map-value-ind' && parent.indent === fc.indent) ||
                      (this.type === 'newline' &&
                          !parent.items[parent.items.length - 1].sep))) {
                  yield* this.pop();
                  yield* this.step();
              }
              else if (this.type === 'map-value-ind' &&
                  parent.type !== 'flow-collection') {
                  const prev = getPrevProps(parent);
                  const start = getFirstKeyStartProps(prev);
                  fixFlowSeqItems(fc);
                  const sep = fc.end.splice(1, fc.end.length);
                  sep.push(this.sourceToken);
                  const map = {
                      type: 'block-map',
                      offset: fc.offset,
                      indent: fc.indent,
                      items: [{ start, key: fc, sep }]
                  };
                  this.onKeyLine = true;
                  this.stack[this.stack.length - 1] = map;
              }
              else {
                  yield* this.lineEnd(fc);
              }
          }
      }
      flowScalar(type) {
          if (this.onNewLine) {
              let nl = this.source.indexOf('\n') + 1;
              while (nl !== 0) {
                  this.onNewLine(this.offset + nl);
                  nl = this.source.indexOf('\n', nl) + 1;
              }
          }
          return {
              type,
              offset: this.offset,
              indent: this.indent,
              source: this.source
          };
      }
      startBlockValue(parent) {
          switch (this.type) {
              case 'alias':
              case 'scalar':
              case 'single-quoted-scalar':
              case 'double-quoted-scalar':
                  return this.flowScalar(this.type);
              case 'block-scalar-header':
                  return {
                      type: 'block-scalar',
                      offset: this.offset,
                      indent: this.indent,
                      props: [this.sourceToken],
                      source: ''
                  };
              case 'flow-map-start':
              case 'flow-seq-start':
                  return {
                      type: 'flow-collection',
                      offset: this.offset,
                      indent: this.indent,
                      start: this.sourceToken,
                      items: [],
                      end: []
                  };
              case 'seq-item-ind':
                  return {
                      type: 'block-seq',
                      offset: this.offset,
                      indent: this.indent,
                      items: [{ start: [this.sourceToken] }]
                  };
              case 'explicit-key-ind': {
                  this.onKeyLine = true;
                  const prev = getPrevProps(parent);
                  const start = getFirstKeyStartProps(prev);
                  start.push(this.sourceToken);
                  return {
                      type: 'block-map',
                      offset: this.offset,
                      indent: this.indent,
                      items: [{ start }]
                  };
              }
              case 'map-value-ind': {
                  this.onKeyLine = true;
                  const prev = getPrevProps(parent);
                  const start = getFirstKeyStartProps(prev);
                  return {
                      type: 'block-map',
                      offset: this.offset,
                      indent: this.indent,
                      items: [{ start, key: null, sep: [this.sourceToken] }]
                  };
              }
          }
          return null;
      }
      atIndentedComment(start, indent) {
          if (this.type !== 'comment')
              return false;
          if (this.indent <= indent)
              return false;
          return start.every(st => st.type === 'newline' || st.type === 'space');
      }
      *documentEnd(docEnd) {
          if (this.type !== 'doc-mode') {
              if (docEnd.end)
                  docEnd.end.push(this.sourceToken);
              else
                  docEnd.end = [this.sourceToken];
              if (this.type === 'newline')
                  yield* this.pop();
          }
      }
      *lineEnd(token) {
          switch (this.type) {
              case 'comma':
              case 'doc-start':
              case 'doc-end':
              case 'flow-seq-end':
              case 'flow-map-end':
              case 'map-value-ind':
                  yield* this.pop();
                  yield* this.step();
                  break;
              case 'newline':
                  this.onKeyLine = false;
              // fallthrough
              case 'space':
              case 'comment':
              default:
                  // all other values are errors
                  if (token.end)
                      token.end.push(this.sourceToken);
                  else
                      token.end = [this.sourceToken];
                  if (this.type === 'newline')
                      yield* this.pop();
          }
      }
  }

  function parseOptions(options) {
      const prettyErrors = options.prettyErrors !== false;
      const lineCounter = options.lineCounter || (prettyErrors && new LineCounter()) || null;
      return { lineCounter, prettyErrors };
  }
  /** Parse an input string into a single YAML.Document */
  function parseDocument(source, options = {}) {
      const { lineCounter, prettyErrors } = parseOptions(options);
      const parser = new Parser(lineCounter?.addNewLine);
      const composer = new Composer(options);
      // `doc` is always set by compose.end(true) at the very latest
      let doc = null;
      for (const _doc of composer.compose(parser.parse(source), true, source.length)) {
          if (!doc)
              doc = _doc;
          else if (doc.options.logLevel !== 'silent') {
              doc.errors.push(new YAMLParseError(_doc.range.slice(0, 2), 'MULTIPLE_DOCS', 'Source contains multiple documents; please use YAML.parseAllDocuments()'));
              break;
          }
      }
      if (prettyErrors && lineCounter) {
          doc.errors.forEach(prettifyError(source, lineCounter));
          doc.warnings.forEach(prettifyError(source, lineCounter));
      }
      return doc;
  }
  function parse(src, reviver, options) {
      let _reviver = undefined;
      if (typeof reviver === 'function') {
          _reviver = reviver;
      }
      else if (options === undefined && reviver && typeof reviver === 'object') {
          options = reviver;
      }
      const doc = parseDocument(src, options);
      if (!doc)
          return null;
      doc.warnings.forEach(warning => warn(doc.options.logLevel, warning));
      if (doc.errors.length > 0) {
          if (doc.options.logLevel !== 'silent')
              throw doc.errors[0];
          else
              doc.errors = [];
      }
      return doc.toJS(Object.assign({ reviver: _reviver }, options));
  }

  function Compiler (tree, file) {

      return tree
  }

  function stringify( options ) {
      this.Compiler = Compiler;
  }

  stringify.Compiler = Compiler;

  function getAttrs (str, start, options) {
      // not tab, line feed, form feed, space, solidus, greater than sign, quotation mark, apostrophe and equals sign
      const allowedKeyChars = /[^\t\n\f />"'=]/;
      const pairSeparator = ' ';
      const keySeparator = '=';
      const classChar = '.';
      const idChar = '#';

      const attrs = [];
      let key = '';
      let value = '';
      let parsingKey = true;
      let valueInsideQuotes = false;

      // read inside {}
      // start + left delimiter length to avoid beginning {
      // breaks when } is found or end of string
      for (let i = start + options.leftDelimiter.length; i < str.length; i++) {
          if (str.slice(i, i + options.rightDelimiter.length) === options.rightDelimiter) {
              if (key !== '') { attrs.push([key, value]); }
              break;
          }
          const char_ = str.charAt(i);

          // switch to reading value if equal sign
          if (char_ === keySeparator && parsingKey) {
              parsingKey = false;
              continue;
          }

          // {.class} {..css-module}
          if (char_ === classChar && key === '') {
              if (str.charAt(i + 1) === classChar) {
                  key = 'css-module';
                  i += 1;
              } else {
                  key = 'class';
              }
              parsingKey = false;
              continue;
          }

          // {#id}
          if (char_ === idChar && key === '') {
              key = 'id';
              parsingKey = false;
              continue;
          }

          // {value="inside quotes"}
          if (char_ === '"' && value === '') {
              valueInsideQuotes = true;
              continue;
          }
          if (char_ === '"' && valueInsideQuotes) {
              valueInsideQuotes = false;
              continue;
          }

          // read next key/value pair
          if ((char_ === pairSeparator && !valueInsideQuotes)) {
              if (key === '') {
                  // beginning or ending space: { .red } vs {.red}
                  continue;
              }
              attrs.push([key, value]);
              key = '';
              value = '';
              parsingKey = true;
              continue;
          }

          // continue if character not allowed
          if (parsingKey && char_.search(allowedKeyChars) === -1) {
              continue;
          }

          // no other conditions met; append to key/value
          if (parsingKey) {
              key += char_;
              continue;
          }
          value += char_;
      }

      if (options.allowedAttributes && options.allowedAttributes.length) {
          const allowedAttributes = options.allowedAttributes;

          return attrs.filter(function (attrPair) {
              const attr = attrPair[0];

              function isAllowedAttribute (allowedAttribute) {
                  return (attr === allowedAttribute
                      || (allowedAttribute instanceof RegExp && allowedAttribute.test(attr))
                  );
              }

              return allowedAttributes.some(isAllowedAttribute);
          });

      }
      return attrs;

  }


  function parseAttrs(infoString) {
      const config = {
          // lang: 'plaintext'
      };
      if(!infoString) return config;
      const defaultOptions = {
          leftDelimiter: '{',
          rightDelimiter: '}',
          allowedAttributes: []
      };
      const start = infoString.lastIndexOf(defaultOptions.leftDelimiter);
      const attrs = getAttrs(infoString, start, defaultOptions );
      attrs.forEach((attr) => {
          config[attr[0]] = attr[1];
      });
      // console.log(attrs);
      // config['lang'] = removeDelimiter(infoString, defaultOptions);
      return config;
  }

  // module.exports = { hashCode, parseAttrs };

  function remarkAttr () {
      return function transformer(tree, file) {
          // console.log('tree=====1');
          // console.log(tree);
          visit$1(tree, 'code', (node, index, parent) => {

              // console.log(node);
              const meta = node.meta;
              // const attrs = parseAttrs(meta);
              // console.log(attrs);
              // node.attrs = attrs;
              node.attributes = parseAttrs(meta);

          });
          // console.log('tree=====2');
      }
  }

  const DEFAULT_OPTIONS = {
      gfm: true,
      math: false,
      plugins: []
  };
  // const _self = self || {};
  // _self.document = {
  //     createElement(){
  //         return {
  //             innerHTML: '',
  //             textContent: ''
  //         }
  //     }
  // };

  function mdast(markdown, options = DEFAULT_OPTIONS) {
      const o = {DEFAULT_OPTIONS, ...options};

      const plugins = [];
      plugins.push([remarkParse]);

      if(o.math) {
          plugins.push([remarkMath]);
      }

      plugins.push([remarkDirective]);
      plugins.push([remarkBreaks]);
      plugins.push([remarkFrontmatter, ['yaml']]);
      plugins.push([remarkExtractFrontmatter, { yaml: parse }]);
      plugins.push([remarkAttr]);
      if(o.gfm) {
          plugins.push([remarkGfm]);
      }

      if(o.plugins && o.plugins.length > 0) {
          plugins.push(o.plugins);
      }

      const file = unified()
          .use(plugins)
          .use(stringify)
          .processSync(markdown);

      const ast = file.result;

      if(ast && ast.children && ast.children[0] && ast.children[0].type === 'yaml') {
          ast.children[0].data = file.data;
      }

      return file.result;
      // console.log(String(file))
      // const file = unified()
      //     .use(remarkParse)
      //     .use(remarkStringify)
      //     .use(remarkFrontmatter, ['yaml', 'toml'])
      //     .parse(markdown);
      //
      // return unified()
      //     // .use(remarkBreaks)
      //     .use(remarkFrontmatter, ['yaml', 'toml'])
      //     // .use(remarkYamlExtract, { yaml: yamlParse })
      //     // .use(remarkGfm)
      //     // .use(() => (tree) => {
      //     //     console.dir('tree==============================')
      //     //     console.dir(tree);
      //     // })
      //     // .use(remarkYamlConfig)
      //     .runSync(file)
  }

  return mdast;

}));
