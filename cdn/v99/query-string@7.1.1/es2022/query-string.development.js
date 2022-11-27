/* esm.sh - esbuild bundle(query-string@7.1.1) es2022 development */
import __filter_obj$ from '/cdn/v99/filter-obj@1.1.0/es2022/filter-obj.development.js';
import __split_on_first$ from '/cdn/v99/split-on-first@1.1.0/es2022/split-on-first.development.js';
import __decode_uri_component$ from '/cdn/v99/decode-uri-component@0.2.0/es2022/decode-uri-component.development.js';
import __strict_uri_encode$ from '/cdn/v99/strict-uri-encode@2.0.0/es2022/strict-uri-encode.development.js';
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

// esm-build-71ec6d40d735c878def0a1bedb8ecf25abcbed1e-68b74a33/node_modules/query-string/index.js
var require_query_string = __commonJS({
  'esm-build-71ec6d40d735c878def0a1bedb8ecf25abcbed1e-68b74a33/node_modules/query-string/index.js'(exports) {
    'use strict';

    var strictUriEncode = __strict_uri_encode$;
    var decodeComponent = __decode_uri_component$;
    var splitOnFirst = __split_on_first$;
    var filterObject = __filter_obj$;
    var isNullOrUndefined = value => value === null || value === void 0;
    var encodeFragmentIdentifier = Symbol('encodeFragmentIdentifier');
    function encoderForArrayFormat(options) {
      switch (options.arrayFormat) {
        case 'index':
          return key => (result, value) => {
            const index = result.length;
            if (value === void 0 || (options.skipNull && value === null) || (options.skipEmptyString && value === '')) {
              return result;
            }
            if (value === null) {
              return [...result, [encode(key, options), '[', index, ']'].join('')];
            }
            return [
              ...result,
              [encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
            ];
          };
        case 'bracket':
          return key => (result, value) => {
            if (value === void 0 || (options.skipNull && value === null) || (options.skipEmptyString && value === '')) {
              return result;
            }
            if (value === null) {
              return [...result, [encode(key, options), '[]'].join('')];
            }
            return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
          };
        case 'colon-list-separator':
          return key => (result, value) => {
            if (value === void 0 || (options.skipNull && value === null) || (options.skipEmptyString && value === '')) {
              return result;
            }
            if (value === null) {
              return [...result, [encode(key, options), ':list='].join('')];
            }
            return [...result, [encode(key, options), ':list=', encode(value, options)].join('')];
          };
        case 'comma':
        case 'separator':
        case 'bracket-separator': {
          const keyValueSep = options.arrayFormat === 'bracket-separator' ? '[]=' : '=';
          return key => (result, value) => {
            if (value === void 0 || (options.skipNull && value === null) || (options.skipEmptyString && value === '')) {
              return result;
            }
            value = value === null ? '' : value;
            if (result.length === 0) {
              return [[encode(key, options), keyValueSep, encode(value, options)].join('')];
            }
            return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
          };
        }
        default:
          return key => (result, value) => {
            if (value === void 0 || (options.skipNull && value === null) || (options.skipEmptyString && value === '')) {
              return result;
            }
            if (value === null) {
              return [...result, encode(key, options)];
            }
            return [...result, [encode(key, options), '=', encode(value, options)].join('')];
          };
      }
    }
    function parserForArrayFormat(options) {
      let result;
      switch (options.arrayFormat) {
        case 'index':
          return (key, value, accumulator) => {
            result = /\[(\d*)\]$/.exec(key);
            key = key.replace(/\[\d*\]$/, '');
            if (!result) {
              accumulator[key] = value;
              return;
            }
            if (accumulator[key] === void 0) {
              accumulator[key] = {};
            }
            accumulator[key][result[1]] = value;
          };
        case 'bracket':
          return (key, value, accumulator) => {
            result = /(\[\])$/.exec(key);
            key = key.replace(/\[\]$/, '');
            if (!result) {
              accumulator[key] = value;
              return;
            }
            if (accumulator[key] === void 0) {
              accumulator[key] = [value];
              return;
            }
            accumulator[key] = [].concat(accumulator[key], value);
          };
        case 'colon-list-separator':
          return (key, value, accumulator) => {
            result = /(:list)$/.exec(key);
            key = key.replace(/:list$/, '');
            if (!result) {
              accumulator[key] = value;
              return;
            }
            if (accumulator[key] === void 0) {
              accumulator[key] = [value];
              return;
            }
            accumulator[key] = [].concat(accumulator[key], value);
          };
        case 'comma':
        case 'separator':
          return (key, value, accumulator) => {
            const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
            const isEncodedArray =
              typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator);
            value = isEncodedArray ? decode(value, options) : value;
            const newValue =
              isArray || isEncodedArray
                ? value.split(options.arrayFormatSeparator).map(item => decode(item, options))
                : value === null
                ? value
                : decode(value, options);
            accumulator[key] = newValue;
          };
        case 'bracket-separator':
          return (key, value, accumulator) => {
            const isArray = /(\[\])$/.test(key);
            key = key.replace(/\[\]$/, '');
            if (!isArray) {
              accumulator[key] = value ? decode(value, options) : value;
              return;
            }
            const arrayValue =
              value === null ? [] : value.split(options.arrayFormatSeparator).map(item => decode(item, options));
            if (accumulator[key] === void 0) {
              accumulator[key] = arrayValue;
              return;
            }
            accumulator[key] = [].concat(accumulator[key], arrayValue);
          };
        default:
          return (key, value, accumulator) => {
            if (accumulator[key] === void 0) {
              accumulator[key] = value;
              return;
            }
            accumulator[key] = [].concat(accumulator[key], value);
          };
      }
    }
    function validateArrayFormatSeparator(value) {
      if (typeof value !== 'string' || value.length !== 1) {
        throw new TypeError('arrayFormatSeparator must be single character string');
      }
    }
    function encode(value, options) {
      if (options.encode) {
        return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
      }
      return value;
    }
    function decode(value, options) {
      if (options.decode) {
        return decodeComponent(value);
      }
      return value;
    }
    function keysSorter(input) {
      if (Array.isArray(input)) {
        return input.sort();
      }
      if (typeof input === 'object') {
        return keysSorter(Object.keys(input))
          .sort((a, b) => Number(a) - Number(b))
          .map(key => input[key]);
      }
      return input;
    }
    function removeHash(input) {
      const hashStart = input.indexOf('#');
      if (hashStart !== -1) {
        input = input.slice(0, hashStart);
      }
      return input;
    }
    function getHash(url) {
      let hash = '';
      const hashStart = url.indexOf('#');
      if (hashStart !== -1) {
        hash = url.slice(hashStart);
      }
      return hash;
    }
    function extract2(input) {
      input = removeHash(input);
      const queryStart = input.indexOf('?');
      if (queryStart === -1) {
        return '';
      }
      return input.slice(queryStart + 1);
    }
    function parseValue(value, options) {
      if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
        value = Number(value);
      } else if (
        options.parseBooleans &&
        value !== null &&
        (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')
      ) {
        value = value.toLowerCase() === 'true';
      }
      return value;
    }
    function parse2(query, options) {
      options = Object.assign(
        {
          decode: true,
          sort: true,
          arrayFormat: 'none',
          arrayFormatSeparator: ',',
          parseNumbers: false,
          parseBooleans: false
        },
        options
      );
      validateArrayFormatSeparator(options.arrayFormatSeparator);
      const formatter = parserForArrayFormat(options);
      const ret = /* @__PURE__ */ Object.create(null);
      if (typeof query !== 'string') {
        return ret;
      }
      query = query.trim().replace(/^[?#&]/, '');
      if (!query) {
        return ret;
      }
      for (const param of query.split('&')) {
        if (param === '') {
          continue;
        }
        let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');
        value =
          value === void 0
            ? null
            : ['comma', 'separator', 'bracket-separator'].includes(options.arrayFormat)
            ? value
            : decode(value, options);
        formatter(decode(key, options), value, ret);
      }
      for (const key of Object.keys(ret)) {
        const value = ret[key];
        if (typeof value === 'object' && value !== null) {
          for (const k of Object.keys(value)) {
            value[k] = parseValue(value[k], options);
          }
        } else {
          ret[key] = parseValue(value, options);
        }
      }
      if (options.sort === false) {
        return ret;
      }
      return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce(
        (result, key) => {
          const value = ret[key];
          if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
            result[key] = keysSorter(value);
          } else {
            result[key] = value;
          }
          return result;
        },
        /* @__PURE__ */ Object.create(null)
      );
    }
    exports.extract = extract2;
    exports.parse = parse2;
    exports.stringify = (object, options) => {
      if (!object) {
        return '';
      }
      options = Object.assign(
        {
          encode: true,
          strict: true,
          arrayFormat: 'none',
          arrayFormatSeparator: ','
        },
        options
      );
      validateArrayFormatSeparator(options.arrayFormatSeparator);
      const shouldFilter = key =>
        (options.skipNull && isNullOrUndefined(object[key])) || (options.skipEmptyString && object[key] === '');
      const formatter = encoderForArrayFormat(options);
      const objectCopy = {};
      for (const key of Object.keys(object)) {
        if (!shouldFilter(key)) {
          objectCopy[key] = object[key];
        }
      }
      const keys = Object.keys(objectCopy);
      if (options.sort !== false) {
        keys.sort(options.sort);
      }
      return keys
        .map(key => {
          const value = object[key];
          if (value === void 0) {
            return '';
          }
          if (value === null) {
            return encode(key, options);
          }
          if (Array.isArray(value)) {
            if (value.length === 0 && options.arrayFormat === 'bracket-separator') {
              return encode(key, options) + '[]';
            }
            return value.reduce(formatter(key), []).join('&');
          }
          return encode(key, options) + '=' + encode(value, options);
        })
        .filter(x => x.length > 0)
        .join('&');
    };
    exports.parseUrl = (url, options) => {
      options = Object.assign(
        {
          decode: true
        },
        options
      );
      const [url_, hash] = splitOnFirst(url, '#');
      return Object.assign(
        {
          url: url_.split('?')[0] || '',
          query: parse2(extract2(url), options)
        },
        options && options.parseFragmentIdentifier && hash
          ? {
              fragmentIdentifier: decode(hash, options)
            }
          : {}
      );
    };
    exports.stringifyUrl = (object, options) => {
      options = Object.assign(
        {
          encode: true,
          strict: true,
          [encodeFragmentIdentifier]: true
        },
        options
      );
      const url = removeHash(object.url).split('?')[0] || '';
      const queryFromUrl = exports.extract(object.url);
      const parsedQueryFromUrl = exports.parse(queryFromUrl, {
        sort: false
      });
      const query = Object.assign(parsedQueryFromUrl, object.query);
      let queryString = exports.stringify(query, options);
      if (queryString) {
        queryString = `?${queryString}`;
      }
      let hash = getHash(object.url);
      if (object.fragmentIdentifier) {
        hash = `#${
          options[encodeFragmentIdentifier] ? encode(object.fragmentIdentifier, options) : object.fragmentIdentifier
        }`;
      }
      return `${url}${queryString}${hash}`;
    };
    exports.pick = (input, filter, options) => {
      options = Object.assign(
        {
          parseFragmentIdentifier: true,
          [encodeFragmentIdentifier]: false
        },
        options
      );
      const { url, query, fragmentIdentifier } = exports.parseUrl(input, options);
      return exports.stringifyUrl(
        {
          url,
          query: filterObject(query, filter),
          fragmentIdentifier
        },
        options
      );
    };
    exports.exclude = (input, filter, options) => {
      const exclusionFilter = Array.isArray(filter)
        ? key => !filter.includes(key)
        : (key, value) => !filter(key, value);
      return exports.pick(input, exclusionFilter, options);
    };
  }
});

// esm-build-71ec6d40d735c878def0a1bedb8ecf25abcbed1e-68b74a33/mod.js
var __module = __toESM(require_query_string());
var { extract, parse, stringify, parseUrl, stringifyUrl, pick, exclude } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default, exclude, extract, parse, parseUrl, pick, stringify, stringifyUrl };
