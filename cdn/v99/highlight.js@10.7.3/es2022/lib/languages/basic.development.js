/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/basic) es2022 development */
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

// esm-build-9d5e1bb7b516b719c0d9705eb787c1f10b6d78a2-e2c22b7c/node_modules/highlight.js/lib/languages/basic.js
var require_basic = __commonJS({
  'esm-build-9d5e1bb7b516b719c0d9705eb787c1f10b6d78a2-e2c22b7c/node_modules/highlight.js/lib/languages/basic.js'(
    exports,
    module
  ) {
    function basic(hljs) {
      return {
        name: 'BASIC',
        case_insensitive: true,
        illegal: '^.',
        keywords: {
          $pattern: '[a-zA-Z][a-zA-Z0-9_$%!#]*',
          keyword:
            'ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO HEX$ IF THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE WEND WIDTH WINDOW WRITE XOR'
        },
        contains: [
          hljs.QUOTE_STRING_MODE,
          hljs.COMMENT('REM', '$', {
            relevance: 10
          }),
          hljs.COMMENT("'", '$', {
            relevance: 0
          }),
          {
            className: 'symbol',
            begin: '^[0-9]+ ',
            relevance: 10
          },
          {
            className: 'number',
            begin: '\\b\\d+(\\.\\d+)?([edED]\\d+)?[#!]?',
            relevance: 0
          },
          {
            className: 'number',
            begin: '(&[hH][0-9a-fA-F]{1,4})'
          },
          {
            className: 'number',
            begin: '(&[oO][0-7]{1,6})'
          }
        ]
      };
    }
    module.exports = basic;
  }
});

// esm-build-9d5e1bb7b516b719c0d9705eb787c1f10b6d78a2-e2c22b7c/mod.js
var __module = __toESM(require_basic());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };