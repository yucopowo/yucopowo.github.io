/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/llvm) es2022 development */
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

// esm-build-e51210bc3492b5c94cc8c839dd7bad85c5fafb7b-a7475526/node_modules/highlight.js/lib/languages/llvm.js
var require_llvm = __commonJS({
  'esm-build-e51210bc3492b5c94cc8c839dd7bad85c5fafb7b-a7475526/node_modules/highlight.js/lib/languages/llvm.js'(
    exports,
    module
  ) {
    function source(re) {
      if (!re) return null;
      if (typeof re === 'string') return re;
      return re.source;
    }
    function concat(...args) {
      const joined = args.map(x => source(x)).join('');
      return joined;
    }
    function llvm(hljs) {
      const IDENT_RE = /([-a-zA-Z$._][\w$.-]*)/;
      const TYPE = {
        className: 'type',
        begin: /\bi\d+(?=\s|\b)/
      };
      const OPERATOR = {
        className: 'operator',
        relevance: 0,
        begin: /=/
      };
      const PUNCTUATION = {
        className: 'punctuation',
        relevance: 0,
        begin: /,/
      };
      const NUMBER = {
        className: 'number',
        variants: [
          {
            begin: /0[xX][a-fA-F0-9]+/
          },
          {
            begin: /-?\d+(?:[.]\d+)?(?:[eE][-+]?\d+(?:[.]\d+)?)?/
          }
        ],
        relevance: 0
      };
      const LABEL = {
        className: 'symbol',
        variants: [
          {
            begin: /^\s*[a-z]+:/
          }
        ],
        relevance: 0
      };
      const VARIABLE = {
        className: 'variable',
        variants: [
          {
            begin: concat(/%/, IDENT_RE)
          },
          {
            begin: /%\d+/
          },
          {
            begin: /#\d+/
          }
        ]
      };
      const FUNCTION = {
        className: 'title',
        variants: [
          {
            begin: concat(/@/, IDENT_RE)
          },
          {
            begin: /@\d+/
          },
          {
            begin: concat(/!/, IDENT_RE)
          },
          {
            begin: concat(/!\d+/, IDENT_RE)
          },
          {
            begin: /!\d+/
          }
        ]
      };
      return {
        name: 'LLVM IR',
        keywords:
          'begin end true false declare define global constant private linker_private internal available_externally linkonce linkonce_odr weak weak_odr appending dllimport dllexport common default hidden protected extern_weak external thread_local zeroinitializer undef null to tail target triple datalayout volatile nuw nsw nnan ninf nsz arcp fast exact inbounds align addrspace section alias module asm sideeffect gc dbg linker_private_weak attributes blockaddress initialexec localdynamic localexec prefix unnamed_addr ccc fastcc coldcc x86_stdcallcc x86_fastcallcc arm_apcscc arm_aapcscc arm_aapcs_vfpcc ptx_device ptx_kernel intel_ocl_bicc msp430_intrcc spir_func spir_kernel x86_64_sysvcc x86_64_win64cc x86_thiscallcc cc c signext zeroext inreg sret nounwind noreturn noalias nocapture byval nest readnone readonly inlinehint noinline alwaysinline optsize ssp sspreq noredzone noimplicitfloat naked builtin cold nobuiltin noduplicate nonlazybind optnone returns_twice sanitize_address sanitize_memory sanitize_thread sspstrong uwtable returned type opaque eq ne slt sgt sle sge ult ugt ule uge oeq one olt ogt ole oge ord uno ueq une x acq_rel acquire alignstack atomic catch cleanup filter inteldialect max min monotonic nand personality release seq_cst singlethread umax umin unordered xchg add fadd sub fsub mul fmul udiv sdiv fdiv urem srem frem shl lshr ashr and or xor icmp fcmp phi call trunc zext sext fptrunc fpext uitofp sitofp fptoui fptosi inttoptr ptrtoint bitcast addrspacecast select va_arg ret br switch invoke unwind unreachable indirectbr landingpad resume malloc alloca free load store getelementptr extractelement insertelement shufflevector getresult extractvalue insertvalue atomicrmw cmpxchg fence argmemonly double',
        contains: [
          TYPE,
          hljs.COMMENT(/;\s*$/, null, {
            relevance: 0
          }),
          hljs.COMMENT(/;/, /$/),
          hljs.QUOTE_STRING_MODE,
          {
            className: 'string',
            variants: [
              {
                begin: /"/,
                end: /[^\\]"/
              }
            ]
          },
          FUNCTION,
          PUNCTUATION,
          OPERATOR,
          VARIABLE,
          LABEL,
          NUMBER
        ]
      };
    }
    module.exports = llvm;
  }
});

// esm-build-e51210bc3492b5c94cc8c839dd7bad85c5fafb7b-a7475526/mod.js
var __module = __toESM(require_llvm());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
