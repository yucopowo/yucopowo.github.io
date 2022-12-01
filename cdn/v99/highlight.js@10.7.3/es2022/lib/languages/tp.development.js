/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/tp) es2022 development */
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

// esm-build-f4c860e374843d6985273b95352524efe597eccd-4c46be88/node_modules/highlight.js/lib/languages/tp.js
var require_tp = __commonJS({
  'esm-build-f4c860e374843d6985273b95352524efe597eccd-4c46be88/node_modules/highlight.js/lib/languages/tp.js'(
    exports,
    module
  ) {
    function tp(hljs) {
      const TPID = {
        className: 'number',
        begin: '[1-9][0-9]*',
        relevance: 0
      };
      const TPLABEL = {
        className: 'symbol',
        begin: ':[^\\]]+'
      };
      const TPDATA = {
        className: 'built_in',
        begin:
          '(AR|P|PAYLOAD|PR|R|SR|RSR|LBL|VR|UALM|MESSAGE|UTOOL|UFRAME|TIMER|TIMER_OVERFLOW|JOINT_MAX_SPEED|RESUME_PROG|DIAG_REC)\\[',
        end: '\\]',
        contains: ['self', TPID, TPLABEL]
      };
      const TPIO = {
        className: 'built_in',
        begin: '(AI|AO|DI|DO|F|RI|RO|UI|UO|GI|GO|SI|SO)\\[',
        end: '\\]',
        contains: ['self', TPID, hljs.QUOTE_STRING_MODE, TPLABEL]
      };
      return {
        name: 'TP',
        keywords: {
          keyword:
            'ABORT ACC ADJUST AND AP_LD BREAK CALL CNT COL CONDITION CONFIG DA DB DIV DETECT ELSE END ENDFOR ERR_NUM ERROR_PROG FINE FOR GP GUARD INC IF JMP LINEAR_MAX_SPEED LOCK MOD MONITOR OFFSET Offset OR OVERRIDE PAUSE PREG PTH RT_LD RUN SELECT SKIP Skip TA TB TO TOOL_OFFSET Tool_Offset UF UT UFRAME_NUM UTOOL_NUM UNLOCK WAIT X Y Z W P R STRLEN SUBSTR FINDSTR VOFFSET PROG ATTR MN POS',
          literal: 'ON OFF max_speed LPOS JPOS ENABLE DISABLE START STOP RESET'
        },
        contains: [
          TPDATA,
          TPIO,
          {
            className: 'keyword',
            begin: '/(PROG|ATTR|MN|POS|END)\\b'
          },
          {
            className: 'keyword',
            begin: '(CALL|RUN|POINT_LOGIC|LBL)\\b'
          },
          {
            className: 'keyword',
            begin: '\\b(ACC|CNT|Skip|Offset|PSPD|RT_LD|AP_LD|Tool_Offset)'
          },
          {
            className: 'number',
            begin: '\\d+(sec|msec|mm/sec|cm/min|inch/min|deg/sec|mm|in|cm)?\\b',
            relevance: 0
          },
          hljs.COMMENT('//', '[;$]'),
          hljs.COMMENT('!', '[;$]'),
          hljs.COMMENT('--eg:', '$'),
          hljs.QUOTE_STRING_MODE,
          {
            className: 'string',
            begin: "'",
            end: "'"
          },
          hljs.C_NUMBER_MODE,
          {
            className: 'variable',
            begin: '\\$[A-Za-z0-9_]+'
          }
        ]
      };
    }
    module.exports = tp;
  }
});

// esm-build-f4c860e374843d6985273b95352524efe597eccd-4c46be88/mod.js
var __module = __toESM(require_tp());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
