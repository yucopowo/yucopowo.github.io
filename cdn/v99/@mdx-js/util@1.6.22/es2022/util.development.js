/* esm.sh - esbuild bundle(@mdx-js/util@1.6.22) es2022 development */
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

// esm-build-46290dec9501ebf3d299712e2665f723c3b80a9f-41b9dc8d/node_modules/@mdx-js/util/index.js
var require_util = __commonJS({
  'esm-build-46290dec9501ebf3d299712e2665f723c3b80a9f-41b9dc8d/node_modules/@mdx-js/util/index.js'(exports, module) {
    var IMPORT_REGEX = /^import\s/;
    var EXPORT_REGEX = /^export\s/;
    var EXPORT_DEFAULT_REGEX = /^export default\s/;
    var STARTS_WITH_CAPITAL_LETTER_REGEX = /^[A-Z]/;
    var EMPTY_NEWLINE2 = '\n\n';
    var COMMENT_OPEN = '<!--';
    var COMMENT_CLOSE = '-->';
    var isImport2 = text => IMPORT_REGEX.test(text);
    var isExport2 = text => EXPORT_REGEX.test(text);
    var isExportDefault2 = text => EXPORT_DEFAULT_REGEX.test(text);
    var isImportOrExport2 = text => isImport2(text) || isExport2(text);
    var isComment2 = str => str.startsWith(COMMENT_OPEN) && str.endsWith(COMMENT_CLOSE);
    var getCommentContents2 = str => str.slice(COMMENT_OPEN.length, -COMMENT_CLOSE.length);
    var startsWithCapitalLetter2 = str => STARTS_WITH_CAPITAL_LETTER_REGEX.test(str);
    var paramCase2 = string =>
      string
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/([a-z])([0-9])/g, '$1-$2')
        .toLowerCase();
    var toTemplateLiteral2 = text => {
      const escaped = text
        .replace(/\\(?!\$)/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/(\\\$)/g, '\\$1')
        .replace(/(\\\$)(\{)/g, '\\$1\\$2')
        .replace(/\$\{/g, '\\${');
      return '{`' + escaped + '`}';
    };
    module.exports.EMPTY_NEWLINE = EMPTY_NEWLINE2;
    module.exports.isImport = isImport2;
    module.exports.isExport = isExport2;
    module.exports.isExportDefault = isExportDefault2;
    module.exports.isImportOrExport = isImportOrExport2;
    module.exports.startsWithCapitalLetter = startsWithCapitalLetter2;
    module.exports.isComment = isComment2;
    module.exports.getCommentContents = getCommentContents2;
    module.exports.paramCase = paramCase2;
    module.exports.toTemplateLiteral = toTemplateLiteral2;
  }
});

// esm-build-46290dec9501ebf3d299712e2665f723c3b80a9f-41b9dc8d/mod.js
var __module = __toESM(require_util());
var {
  EMPTY_NEWLINE,
  isImport,
  isExport,
  isExportDefault,
  isImportOrExport,
  startsWithCapitalLetter,
  isComment,
  getCommentContents,
  paramCase,
  toTemplateLiteral
} = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export {
  EMPTY_NEWLINE,
  mod_default as default,
  getCommentContents,
  isComment,
  isExport,
  isExportDefault,
  isImport,
  isImportOrExport,
  paramCase,
  startsWithCapitalLetter,
  toTemplateLiteral
};
