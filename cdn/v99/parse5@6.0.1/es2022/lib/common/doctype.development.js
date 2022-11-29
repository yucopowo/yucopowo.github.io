/* esm.sh - esbuild bundle(parse5@6.0.1/lib/common/doctype) es2022 development */
import __parse5_lib_common_html$ from '/cdn/v99/parse5@6.0.1/es2022/lib/common/html.development.js';
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

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/common/doctype.js
var require_doctype = __commonJS({
  'esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/common/doctype.js'(exports) {
    'use strict';

    var { DOCUMENT_MODE } = __parse5_lib_common_html$;
    var VALID_DOCTYPE_NAME = 'html';
    var VALID_SYSTEM_ID = 'about:legacy-compat';
    var QUIRKS_MODE_SYSTEM_ID = 'http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd';
    var QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
      '+//silmaril//dtd html pro v0r11 19970101//',
      '-//as//dtd html 3.0 aswedit + extensions//',
      '-//advasoft ltd//dtd html 3.0 aswedit + extensions//',
      '-//ietf//dtd html 2.0 level 1//',
      '-//ietf//dtd html 2.0 level 2//',
      '-//ietf//dtd html 2.0 strict level 1//',
      '-//ietf//dtd html 2.0 strict level 2//',
      '-//ietf//dtd html 2.0 strict//',
      '-//ietf//dtd html 2.0//',
      '-//ietf//dtd html 2.1e//',
      '-//ietf//dtd html 3.0//',
      '-//ietf//dtd html 3.2 final//',
      '-//ietf//dtd html 3.2//',
      '-//ietf//dtd html 3//',
      '-//ietf//dtd html level 0//',
      '-//ietf//dtd html level 1//',
      '-//ietf//dtd html level 2//',
      '-//ietf//dtd html level 3//',
      '-//ietf//dtd html strict level 0//',
      '-//ietf//dtd html strict level 1//',
      '-//ietf//dtd html strict level 2//',
      '-//ietf//dtd html strict level 3//',
      '-//ietf//dtd html strict//',
      '-//ietf//dtd html//',
      '-//metrius//dtd metrius presentational//',
      '-//microsoft//dtd internet explorer 2.0 html strict//',
      '-//microsoft//dtd internet explorer 2.0 html//',
      '-//microsoft//dtd internet explorer 2.0 tables//',
      '-//microsoft//dtd internet explorer 3.0 html strict//',
      '-//microsoft//dtd internet explorer 3.0 html//',
      '-//microsoft//dtd internet explorer 3.0 tables//',
      '-//netscape comm. corp.//dtd html//',
      '-//netscape comm. corp.//dtd strict html//',
      "-//o'reilly and associates//dtd html 2.0//",
      "-//o'reilly and associates//dtd html extended 1.0//",
      "-//o'reilly and associates//dtd html extended relaxed 1.0//",
      '-//sq//dtd html 2.0 hotmetal + extensions//',
      '-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//',
      '-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//',
      '-//spyglass//dtd html 2.0 extended//',
      '-//sun microsystems corp.//dtd hotjava html//',
      '-//sun microsystems corp.//dtd hotjava strict html//',
      '-//w3c//dtd html 3 1995-03-24//',
      '-//w3c//dtd html 3.2 draft//',
      '-//w3c//dtd html 3.2 final//',
      '-//w3c//dtd html 3.2//',
      '-//w3c//dtd html 3.2s draft//',
      '-//w3c//dtd html 4.0 frameset//',
      '-//w3c//dtd html 4.0 transitional//',
      '-//w3c//dtd html experimental 19960712//',
      '-//w3c//dtd html experimental 970421//',
      '-//w3c//dtd w3 html//',
      '-//w3o//dtd w3 html 3.0//',
      '-//webtechs//dtd mozilla html 2.0//',
      '-//webtechs//dtd mozilla html//'
    ];
    var QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = QUIRKS_MODE_PUBLIC_ID_PREFIXES.concat([
      '-//w3c//dtd html 4.01 frameset//',
      '-//w3c//dtd html 4.01 transitional//'
    ]);
    var QUIRKS_MODE_PUBLIC_IDS = ['-//w3o//dtd w3 html strict 3.0//en//', '-/w3c/dtd html 4.0 transitional/en', 'html'];
    var LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = [
      '-//w3c//dtd xhtml 1.0 frameset//',
      '-//w3c//dtd xhtml 1.0 transitional//'
    ];
    var LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = LIMITED_QUIRKS_PUBLIC_ID_PREFIXES.concat([
      '-//w3c//dtd html 4.01 frameset//',
      '-//w3c//dtd html 4.01 transitional//'
    ]);
    function enquoteDoctypeId(id) {
      const quote = id.indexOf('"') !== -1 ? "'" : '"';
      return quote + id + quote;
    }
    function hasPrefix(publicId, prefixes) {
      for (let i = 0; i < prefixes.length; i++) {
        if (publicId.indexOf(prefixes[i]) === 0) {
          return true;
        }
      }
      return false;
    }
    exports.isConforming = function(token) {
      return (
        token.name === VALID_DOCTYPE_NAME &&
        token.publicId === null &&
        (token.systemId === null || token.systemId === VALID_SYSTEM_ID)
      );
    };
    exports.getDocumentMode = function(token) {
      if (token.name !== VALID_DOCTYPE_NAME) {
        return DOCUMENT_MODE.QUIRKS;
      }
      const systemId = token.systemId;
      if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) {
        return DOCUMENT_MODE.QUIRKS;
      }
      let publicId = token.publicId;
      if (publicId !== null) {
        publicId = publicId.toLowerCase();
        if (QUIRKS_MODE_PUBLIC_IDS.indexOf(publicId) > -1) {
          return DOCUMENT_MODE.QUIRKS;
        }
        let prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
        if (hasPrefix(publicId, prefixes)) {
          return DOCUMENT_MODE.QUIRKS;
        }
        prefixes =
          systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;
        if (hasPrefix(publicId, prefixes)) {
          return DOCUMENT_MODE.LIMITED_QUIRKS;
        }
      }
      return DOCUMENT_MODE.NO_QUIRKS;
    };
    exports.serializeContent = function(name, publicId, systemId) {
      let str = '!DOCTYPE ';
      if (name) {
        str += name;
      }
      if (publicId) {
        str += ' PUBLIC ' + enquoteDoctypeId(publicId);
      } else if (systemId) {
        str += ' SYSTEM';
      }
      if (systemId !== null) {
        str += ' ' + enquoteDoctypeId(systemId);
      }
      return str;
    };
  }
});

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/mod.js
var __module = __toESM(require_doctype());
var { isConforming, getDocumentMode, serializeContent } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default, getDocumentMode, isConforming, serializeContent };
