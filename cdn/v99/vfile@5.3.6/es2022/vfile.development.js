/* esm.sh - esbuild bundle(vfile@5.3.6) es2022 development */
// esm-build-35778ed9eb24321429cec3cb40e0debd3870c94e-955bf17e/node_modules/vfile/lib/index.js
import buffer from '/cdn/v99/is-buffer@2.0.5/es2022/is-buffer.development.js';
import { VFileMessage } from '/cdn/v99/vfile-message@3.1.3/es2022/vfile-message.development.js';

// esm-build-35778ed9eb24321429cec3cb40e0debd3870c94e-955bf17e/node_modules/vfile/lib/minpath.browser.js
var path = {
  basename,
  dirname,
  extname,
  join,
  sep: '/'
};
function basename(path2, ext) {
  if (ext !== void 0 && typeof ext !== 'string') {
    throw new TypeError('"ext" argument must be a string');
  }
  assertPath(path2);
  let start = 0;
  let end = -1;
  let index = path2.length;
  let seenNonSlash;
  if (ext === void 0 || ext.length === 0 || ext.length > path2.length) {
    while (index--) {
      if (path2.charCodeAt(index) === 47) {
        if (seenNonSlash) {
          start = index + 1;
          break;
        }
      } else if (end < 0) {
        seenNonSlash = true;
        end = index + 1;
      }
    }
    return end < 0 ? '' : path2.slice(start, end);
  }
  if (ext === path2) {
    return '';
  }
  let firstNonSlashEnd = -1;
  let extIndex = ext.length - 1;
  while (index--) {
    if (path2.charCodeAt(index) === 47) {
      if (seenNonSlash) {
        start = index + 1;
        break;
      }
    } else {
      if (firstNonSlashEnd < 0) {
        seenNonSlash = true;
        firstNonSlashEnd = index + 1;
      }
      if (extIndex > -1) {
        if (path2.charCodeAt(index) === ext.charCodeAt(extIndex--)) {
          if (extIndex < 0) {
            end = index;
          }
        } else {
          extIndex = -1;
          end = firstNonSlashEnd;
        }
      }
    }
  }
  if (start === end) {
    end = firstNonSlashEnd;
  } else if (end < 0) {
    end = path2.length;
  }
  return path2.slice(start, end);
}
function dirname(path2) {
  assertPath(path2);
  if (path2.length === 0) {
    return '.';
  }
  let end = -1;
  let index = path2.length;
  let unmatchedSlash;
  while (--index) {
    if (path2.charCodeAt(index) === 47) {
      if (unmatchedSlash) {
        end = index;
        break;
      }
    } else if (!unmatchedSlash) {
      unmatchedSlash = true;
    }
  }
  return end < 0
    ? path2.charCodeAt(0) === 47
      ? '/'
      : '.'
    : end === 1 && path2.charCodeAt(0) === 47
    ? '//'
    : path2.slice(0, end);
}
function extname(path2) {
  assertPath(path2);
  let index = path2.length;
  let end = -1;
  let startPart = 0;
  let startDot = -1;
  let preDotState = 0;
  let unmatchedSlash;
  while (index--) {
    const code = path2.charCodeAt(index);
    if (code === 47) {
      if (unmatchedSlash) {
        startPart = index + 1;
        break;
      }
      continue;
    }
    if (end < 0) {
      unmatchedSlash = true;
      end = index + 1;
    }
    if (code === 46) {
      if (startDot < 0) {
        startDot = index;
      } else if (preDotState !== 1) {
        preDotState = 1;
      }
    } else if (startDot > -1) {
      preDotState = -1;
    }
  }
  if (
    startDot < 0 ||
    end < 0 ||
    preDotState === 0 ||
    (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)
  ) {
    return '';
  }
  return path2.slice(startDot, end);
}
function join(...segments) {
  let index = -1;
  let joined;
  while (++index < segments.length) {
    assertPath(segments[index]);
    if (segments[index]) {
      joined = joined === void 0 ? segments[index] : joined + '/' + segments[index];
    }
  }
  return joined === void 0 ? '.' : normalize(joined);
}
function normalize(path2) {
  assertPath(path2);
  const absolute = path2.charCodeAt(0) === 47;
  let value = normalizeString(path2, !absolute);
  if (value.length === 0 && !absolute) {
    value = '.';
  }
  if (value.length > 0 && path2.charCodeAt(path2.length - 1) === 47) {
    value += '/';
  }
  return absolute ? '/' + value : value;
}
function normalizeString(path2, allowAboveRoot) {
  let result = '';
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let index = -1;
  let code;
  let lastSlashIndex;
  while (++index <= path2.length) {
    if (index < path2.length) {
      code = path2.charCodeAt(index);
    } else if (code === 47) {
      break;
    } else {
      code = 47;
    }
    if (code === 47) {
      if (lastSlash === index - 1 || dots === 1) {
      } else if (lastSlash !== index - 1 && dots === 2) {
        if (
          result.length < 2 ||
          lastSegmentLength !== 2 ||
          result.charCodeAt(result.length - 1) !== 46 ||
          result.charCodeAt(result.length - 2) !== 46
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
              continue;
            }
          } else if (result.length > 0) {
            result = '';
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          result = result.length > 0 ? result + '/..' : '..';
          lastSegmentLength = 2;
        }
      } else {
        if (result.length > 0) {
          result += '/' + path2.slice(lastSlash + 1, index);
        } else {
          result = path2.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (code === 46 && dots > -1) {
      dots++;
    } else {
      dots = -1;
    }
  }
  return result;
}
function assertPath(path2) {
  if (typeof path2 !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path2));
  }
}

// esm-build-35778ed9eb24321429cec3cb40e0debd3870c94e-955bf17e/node_modules/vfile/lib/minproc.browser.js
var proc = {
  cwd
};
function cwd() {
  return '/';
}

// esm-build-35778ed9eb24321429cec3cb40e0debd3870c94e-955bf17e/node_modules/vfile/lib/minurl.shared.js
function isUrl(fileURLOrPath) {
  return fileURLOrPath !== null && typeof fileURLOrPath === 'object' && fileURLOrPath.href && fileURLOrPath.origin;
}

// esm-build-35778ed9eb24321429cec3cb40e0debd3870c94e-955bf17e/node_modules/vfile/lib/minurl.browser.js
function urlToPath(path2) {
  if (typeof path2 === 'string') {
    path2 = new URL(path2);
  } else if (!isUrl(path2)) {
    const error = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + path2 + '`'
    );
    error.code = 'ERR_INVALID_ARG_TYPE';
    throw error;
  }
  if (path2.protocol !== 'file:') {
    const error = new TypeError('The URL must be of scheme file');
    error.code = 'ERR_INVALID_URL_SCHEME';
    throw error;
  }
  return getPathFromURLPosix(path2);
}
function getPathFromURLPosix(url) {
  if (url.hostname !== '') {
    const error = new TypeError('File URL host must be "localhost" or empty on darwin');
    error.code = 'ERR_INVALID_FILE_URL_HOST';
    throw error;
  }
  const pathname = url.pathname;
  let index = -1;
  while (++index < pathname.length) {
    if (pathname.charCodeAt(index) === 37 && pathname.charCodeAt(index + 1) === 50) {
      const third = pathname.charCodeAt(index + 2);
      if (third === 70 || third === 102) {
        const error = new TypeError('File URL path must not include encoded / characters');
        error.code = 'ERR_INVALID_FILE_URL_PATH';
        throw error;
      }
    }
  }
  return decodeURIComponent(pathname);
}

// esm-build-35778ed9eb24321429cec3cb40e0debd3870c94e-955bf17e/node_modules/vfile/lib/index.js
var order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
var VFile = class {
  constructor(value) {
    let options;
    if (!value) {
      options = {};
    } else if (typeof value === 'string' || buffer(value)) {
      options = {
        value
      };
    } else if (isUrl(value)) {
      options = {
        path: value
      };
    } else {
      options = value;
    }
    this.data = {};
    this.messages = [];
    this.history = [];
    this.cwd = proc.cwd();
    this.value;
    this.stored;
    this.result;
    this.map;
    let index = -1;
    while (++index < order.length) {
      const prop2 = order[index];
      if (prop2 in options && options[prop2] !== void 0) {
        this[prop2] = prop2 === 'history' ? [...options[prop2]] : options[prop2];
      }
    }
    let prop;
    for (prop in options) {
      if (!order.includes(prop)) this[prop] = options[prop];
    }
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(path2) {
    if (isUrl(path2)) {
      path2 = urlToPath(path2);
    }
    assertNonEmpty(path2, 'path');
    if (this.path !== path2) {
      this.history.push(path2);
    }
  }
  get dirname() {
    return typeof this.path === 'string' ? path.dirname(this.path) : void 0;
  }
  set dirname(dirname2) {
    assertPath2(this.basename, 'dirname');
    this.path = path.join(dirname2 || '', this.basename);
  }
  get basename() {
    return typeof this.path === 'string' ? path.basename(this.path) : void 0;
  }
  set basename(basename2) {
    assertNonEmpty(basename2, 'basename');
    assertPart(basename2, 'basename');
    this.path = path.join(this.dirname || '', basename2);
  }
  get extname() {
    return typeof this.path === 'string' ? path.extname(this.path) : void 0;
  }
  set extname(extname2) {
    assertPart(extname2, 'extname');
    assertPath2(this.dirname, 'extname');
    if (extname2) {
      if (extname2.charCodeAt(0) !== 46) {
        throw new Error('`extname` must start with `.`');
      }
      if (extname2.includes('.', 1)) {
        throw new Error('`extname` cannot contain multiple dots');
      }
    }
    this.path = path.join(this.dirname, this.stem + (extname2 || ''));
  }
  get stem() {
    return typeof this.path === 'string' ? path.basename(this.path, this.extname) : void 0;
  }
  set stem(stem) {
    assertNonEmpty(stem, 'stem');
    assertPart(stem, 'stem');
    this.path = path.join(this.dirname || '', stem + (this.extname || ''));
  }
  toString(encoding) {
    return (this.value || '').toString(encoding);
  }
  message(reason, place, origin) {
    const message = new VFileMessage(reason, place, origin);
    if (this.path) {
      message.name = this.path + ':' + message.name;
      message.file = this.path;
    }
    message.fatal = false;
    this.messages.push(message);
    return message;
  }
  info(reason, place, origin) {
    const message = this.message(reason, place, origin);
    message.fatal = null;
    return message;
  }
  fail(reason, place, origin) {
    const message = this.message(reason, place, origin);
    message.fatal = true;
    throw message;
  }
};
function assertPart(part, name) {
  if (part && part.includes(path.sep)) {
    throw new Error('`' + name + '` cannot be a path: did not expect `' + path.sep + '`');
  }
}
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty');
  }
}
function assertPath2(path2, name) {
  if (!path2) {
    throw new Error('Setting `' + name + '` requires `path` to be set too');
  }
}
export { VFile };
