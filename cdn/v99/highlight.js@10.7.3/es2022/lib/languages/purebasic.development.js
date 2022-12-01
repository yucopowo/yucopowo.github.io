/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/purebasic) es2022 development */
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

// esm-build-2c9e18e53d093b79bd43145c7a9fb7e5e6e78285-956b1f4a/node_modules/highlight.js/lib/languages/purebasic.js
var require_purebasic = __commonJS({
  'esm-build-2c9e18e53d093b79bd43145c7a9fb7e5e6e78285-956b1f4a/node_modules/highlight.js/lib/languages/purebasic.js'(
    exports,
    module
  ) {
    function purebasic(hljs) {
      const STRINGS = {
        className: 'string',
        begin: '(~)?"',
        end: '"',
        illegal: '\\n'
      };
      const CONSTANTS = {
        className: 'symbol',
        begin: '#[a-zA-Z_]\\w*\\$?'
      };
      return {
        name: 'PureBASIC',
        aliases: ['pb', 'pbi'],
        keywords:
          'Align And Array As Break CallDebugger Case CompilerCase CompilerDefault CompilerElse CompilerElseIf CompilerEndIf CompilerEndSelect CompilerError CompilerIf CompilerSelect CompilerWarning Continue Data DataSection Debug DebugLevel Declare DeclareC DeclareCDLL DeclareDLL DeclareModule Default Define Dim DisableASM DisableDebugger DisableExplicit Else ElseIf EnableASM EnableDebugger EnableExplicit End EndDataSection EndDeclareModule EndEnumeration EndIf EndImport EndInterface EndMacro EndModule EndProcedure EndSelect EndStructure EndStructureUnion EndWith Enumeration EnumerationBinary Extends FakeReturn For ForEach ForEver Global Gosub Goto If Import ImportC IncludeBinary IncludeFile IncludePath Interface List Macro MacroExpandedCount Map Module NewList NewMap Next Not Or Procedure ProcedureC ProcedureCDLL ProcedureDLL ProcedureReturn Protected Prototype PrototypeC ReDim Read Repeat Restore Return Runtime Select Shared Static Step Structure StructureUnion Swap Threaded To UndefineMacro Until Until  UnuseModule UseModule Wend While With XIncludeFile XOr',
        contains: [
          hljs.COMMENT(';', '$', {
            relevance: 0
          }),
          {
            className: 'function',
            begin: '\\b(Procedure|Declare)(C|CDLL|DLL)?\\b',
            end: '\\(',
            excludeEnd: true,
            returnBegin: true,
            contains: [
              {
                className: 'keyword',
                begin: '(Procedure|Declare)(C|CDLL|DLL)?',
                excludeEnd: true
              },
              {
                className: 'type',
                begin: '\\.\\w*'
              },
              hljs.UNDERSCORE_TITLE_MODE
            ]
          },
          STRINGS,
          CONSTANTS
        ]
      };
    }
    module.exports = purebasic;
  }
});

// esm-build-2c9e18e53d093b79bd43145c7a9fb7e5e6e78285-956b1f4a/mod.js
var __module = __toESM(require_purebasic());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
