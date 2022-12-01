/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/julia) es2022 development */
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

// esm-build-66642fd83379b19e4f20dbf5815a64a955ebde3e-f315c21b/node_modules/highlight.js/lib/languages/julia.js
var require_julia = __commonJS({
  'esm-build-66642fd83379b19e4f20dbf5815a64a955ebde3e-f315c21b/node_modules/highlight.js/lib/languages/julia.js'(
    exports,
    module
  ) {
    function julia(hljs) {
      var VARIABLE_NAME_RE = '[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*';
      var KEYWORD_LIST = [
        'baremodule',
        'begin',
        'break',
        'catch',
        'ccall',
        'const',
        'continue',
        'do',
        'else',
        'elseif',
        'end',
        'export',
        'false',
        'finally',
        'for',
        'function',
        'global',
        'if',
        'import',
        'in',
        'isa',
        'let',
        'local',
        'macro',
        'module',
        'quote',
        'return',
        'true',
        'try',
        'using',
        'where',
        'while'
      ];
      var LITERAL_LIST = [
        'ARGS',
        'C_NULL',
        'DEPOT_PATH',
        'ENDIAN_BOM',
        'ENV',
        'Inf',
        'Inf16',
        'Inf32',
        'Inf64',
        'InsertionSort',
        'LOAD_PATH',
        'MergeSort',
        'NaN',
        'NaN16',
        'NaN32',
        'NaN64',
        'PROGRAM_FILE',
        'QuickSort',
        'RoundDown',
        'RoundFromZero',
        'RoundNearest',
        'RoundNearestTiesAway',
        'RoundNearestTiesUp',
        'RoundToZero',
        'RoundUp',
        'VERSION|0',
        'devnull',
        'false',
        'im',
        'missing',
        'nothing',
        'pi',
        'stderr',
        'stdin',
        'stdout',
        'true',
        'undef',
        '\u03C0',
        '\u212F'
      ];
      var BUILT_IN_LIST = [
        'AbstractArray',
        'AbstractChannel',
        'AbstractChar',
        'AbstractDict',
        'AbstractDisplay',
        'AbstractFloat',
        'AbstractIrrational',
        'AbstractMatrix',
        'AbstractRange',
        'AbstractSet',
        'AbstractString',
        'AbstractUnitRange',
        'AbstractVecOrMat',
        'AbstractVector',
        'Any',
        'ArgumentError',
        'Array',
        'AssertionError',
        'BigFloat',
        'BigInt',
        'BitArray',
        'BitMatrix',
        'BitSet',
        'BitVector',
        'Bool',
        'BoundsError',
        'CapturedException',
        'CartesianIndex',
        'CartesianIndices',
        'Cchar',
        'Cdouble',
        'Cfloat',
        'Channel',
        'Char',
        'Cint',
        'Cintmax_t',
        'Clong',
        'Clonglong',
        'Cmd',
        'Colon',
        'Complex',
        'ComplexF16',
        'ComplexF32',
        'ComplexF64',
        'CompositeException',
        'Condition',
        'Cptrdiff_t',
        'Cshort',
        'Csize_t',
        'Cssize_t',
        'Cstring',
        'Cuchar',
        'Cuint',
        'Cuintmax_t',
        'Culong',
        'Culonglong',
        'Cushort',
        'Cvoid',
        'Cwchar_t',
        'Cwstring',
        'DataType',
        'DenseArray',
        'DenseMatrix',
        'DenseVecOrMat',
        'DenseVector',
        'Dict',
        'DimensionMismatch',
        'Dims',
        'DivideError',
        'DomainError',
        'EOFError',
        'Enum',
        'ErrorException',
        'Exception',
        'ExponentialBackOff',
        'Expr',
        'Float16',
        'Float32',
        'Float64',
        'Function',
        'GlobalRef',
        'HTML',
        'IO',
        'IOBuffer',
        'IOContext',
        'IOStream',
        'IdDict',
        'IndexCartesian',
        'IndexLinear',
        'IndexStyle',
        'InexactError',
        'InitError',
        'Int',
        'Int128',
        'Int16',
        'Int32',
        'Int64',
        'Int8',
        'Integer',
        'InterruptException',
        'InvalidStateException',
        'Irrational',
        'KeyError',
        'LinRange',
        'LineNumberNode',
        'LinearIndices',
        'LoadError',
        'MIME',
        'Matrix',
        'Method',
        'MethodError',
        'Missing',
        'MissingException',
        'Module',
        'NTuple',
        'NamedTuple',
        'Nothing',
        'Number',
        'OrdinalRange',
        'OutOfMemoryError',
        'OverflowError',
        'Pair',
        'PartialQuickSort',
        'PermutedDimsArray',
        'Pipe',
        'ProcessFailedException',
        'Ptr',
        'QuoteNode',
        'Rational',
        'RawFD',
        'ReadOnlyMemoryError',
        'Real',
        'ReentrantLock',
        'Ref',
        'Regex',
        'RegexMatch',
        'RoundingMode',
        'SegmentationFault',
        'Set',
        'Signed',
        'Some',
        'StackOverflowError',
        'StepRange',
        'StepRangeLen',
        'StridedArray',
        'StridedMatrix',
        'StridedVecOrMat',
        'StridedVector',
        'String',
        'StringIndexError',
        'SubArray',
        'SubString',
        'SubstitutionString',
        'Symbol',
        'SystemError',
        'Task',
        'TaskFailedException',
        'Text',
        'TextDisplay',
        'Timer',
        'Tuple',
        'Type',
        'TypeError',
        'TypeVar',
        'UInt',
        'UInt128',
        'UInt16',
        'UInt32',
        'UInt64',
        'UInt8',
        'UndefInitializer',
        'UndefKeywordError',
        'UndefRefError',
        'UndefVarError',
        'Union',
        'UnionAll',
        'UnitRange',
        'Unsigned',
        'Val',
        'Vararg',
        'VecElement',
        'VecOrMat',
        'Vector',
        'VersionNumber',
        'WeakKeyDict',
        'WeakRef'
      ];
      var KEYWORDS = {
        $pattern: VARIABLE_NAME_RE,
        keyword: KEYWORD_LIST,
        literal: LITERAL_LIST,
        built_in: BUILT_IN_LIST
      };
      var DEFAULT = {
        keywords: KEYWORDS,
        illegal: /<\//
      };
      var NUMBER = {
        className: 'number',
        begin: /(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,
        relevance: 0
      };
      var CHAR = {
        className: 'string',
        begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
      };
      var INTERPOLATION = {
        className: 'subst',
        begin: /\$\(/,
        end: /\)/,
        keywords: KEYWORDS
      };
      var INTERPOLATED_VARIABLE = {
        className: 'variable',
        begin: '\\$' + VARIABLE_NAME_RE
      };
      var STRING = {
        className: 'string',
        contains: [hljs.BACKSLASH_ESCAPE, INTERPOLATION, INTERPOLATED_VARIABLE],
        variants: [
          {
            begin: /\w*"""/,
            end: /"""\w*/,
            relevance: 10
          },
          {
            begin: /\w*"/,
            end: /"\w*/
          }
        ]
      };
      var COMMAND = {
        className: 'string',
        contains: [hljs.BACKSLASH_ESCAPE, INTERPOLATION, INTERPOLATED_VARIABLE],
        begin: '`',
        end: '`'
      };
      var MACROCALL = {
        className: 'meta',
        begin: '@' + VARIABLE_NAME_RE
      };
      var COMMENT = {
        className: 'comment',
        variants: [
          {
            begin: '#=',
            end: '=#',
            relevance: 10
          },
          {
            begin: '#',
            end: '$'
          }
        ]
      };
      DEFAULT.name = 'Julia';
      DEFAULT.contains = [
        NUMBER,
        CHAR,
        STRING,
        COMMAND,
        MACROCALL,
        COMMENT,
        hljs.HASH_COMMENT_MODE,
        {
          className: 'keyword',
          begin: '\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b'
        },
        {
          begin: /<:/
        }
      ];
      INTERPOLATION.contains = DEFAULT.contains;
      return DEFAULT;
    }
    module.exports = julia;
  }
});

// esm-build-66642fd83379b19e4f20dbf5815a64a955ebde3e-f315c21b/mod.js
var __module = __toESM(require_julia());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
