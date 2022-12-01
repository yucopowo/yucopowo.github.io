/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/arcade) es2022 development */
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

// esm-build-b61668aa46ee5f5f65c0514af42b40377a1d00a4-eca12677/node_modules/highlight.js/lib/languages/arcade.js
var require_arcade = __commonJS({
  'esm-build-b61668aa46ee5f5f65c0514af42b40377a1d00a4-eca12677/node_modules/highlight.js/lib/languages/arcade.js'(
    exports,
    module
  ) {
    function arcade(hljs) {
      const IDENT_RE = '[A-Za-z_][0-9A-Za-z_]*';
      const KEYWORDS = {
        keyword: 'if for while var new function do return void else break',
        literal:
          'BackSlash DoubleQuote false ForwardSlash Infinity NaN NewLine null PI SingleQuote Tab TextFormatting true undefined',
        built_in:
          'Abs Acos Angle Attachments Area AreaGeodetic Asin Atan Atan2 Average Bearing Boolean Buffer BufferGeodetic Ceil Centroid Clip Console Constrain Contains Cos Count Crosses Cut Date DateAdd DateDiff Day Decode DefaultValue Dictionary Difference Disjoint Distance DistanceGeodetic Distinct DomainCode DomainName Equals Exp Extent Feature FeatureSet FeatureSetByAssociation FeatureSetById FeatureSetByPortalItem FeatureSetByRelationshipName FeatureSetByTitle FeatureSetByUrl Filter First Floor Geometry GroupBy Guid HasKey Hour IIf IndexOf Intersection Intersects IsEmpty IsNan IsSelfIntersecting Length LengthGeodetic Log Max Mean Millisecond Min Minute Month MultiPartToSinglePart Multipoint NextSequenceValue Now Number OrderBy Overlaps Point Polygon Polyline Portal Pow Random Relate Reverse RingIsClockWise Round Second SetGeometry Sin Sort Sqrt Stdev Sum SymmetricDifference Tan Text Timestamp Today ToLocal Top Touches ToUTC TrackCurrentTime TrackGeometryWindow TrackIndex TrackStartTime TrackWindow TypeOf Union UrlEncode Variance Weekday When Within Year '
      };
      const SYMBOL = {
        className: 'symbol',
        begin:
          '\\$[datastore|feature|layer|map|measure|sourcefeature|sourcelayer|targetfeature|targetlayer|value|view]+'
      };
      const NUMBER = {
        className: 'number',
        variants: [
          {
            begin: '\\b(0[bB][01]+)'
          },
          {
            begin: '\\b(0[oO][0-7]+)'
          },
          {
            begin: hljs.C_NUMBER_RE
          }
        ],
        relevance: 0
      };
      const SUBST = {
        className: 'subst',
        begin: '\\$\\{',
        end: '\\}',
        keywords: KEYWORDS,
        contains: []
      };
      const TEMPLATE_STRING = {
        className: 'string',
        begin: '`',
        end: '`',
        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
      };
      SUBST.contains = [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, TEMPLATE_STRING, NUMBER, hljs.REGEXP_MODE];
      const PARAMS_CONTAINS = SUBST.contains.concat([hljs.C_BLOCK_COMMENT_MODE, hljs.C_LINE_COMMENT_MODE]);
      return {
        name: 'ArcGIS Arcade',
        keywords: KEYWORDS,
        contains: [
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          TEMPLATE_STRING,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          SYMBOL,
          NUMBER,
          {
            begin: /[{,]\s*/,
            relevance: 0,
            contains: [
              {
                begin: IDENT_RE + '\\s*:',
                returnBegin: true,
                relevance: 0,
                contains: [
                  {
                    className: 'attr',
                    begin: IDENT_RE,
                    relevance: 0
                  }
                ]
              }
            ]
          },
          {
            begin: '(' + hljs.RE_STARTERS_RE + '|\\b(return)\\b)\\s*',
            keywords: 'return',
            contains: [
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              hljs.REGEXP_MODE,
              {
                className: 'function',
                begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>',
                returnBegin: true,
                end: '\\s*=>',
                contains: [
                  {
                    className: 'params',
                    variants: [
                      {
                        begin: IDENT_RE
                      },
                      {
                        begin: /\(\s*\)/
                      },
                      {
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: true,
                        excludeEnd: true,
                        keywords: KEYWORDS,
                        contains: PARAMS_CONTAINS
                      }
                    ]
                  }
                ]
              }
            ],
            relevance: 0
          },
          {
            className: 'function',
            beginKeywords: 'function',
            end: /\{/,
            excludeEnd: true,
            contains: [
              hljs.inherit(hljs.TITLE_MODE, {
                begin: IDENT_RE
              }),
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                excludeBegin: true,
                excludeEnd: true,
                contains: PARAMS_CONTAINS
              }
            ],
            illegal: /\[|%/
          },
          {
            begin: /\$[(.]/
          }
        ],
        illegal: /#(?!!)/
      };
    }
    module.exports = arcade;
  }
});

// esm-build-b61668aa46ee5f5f65c0514af42b40377a1d00a4-eca12677/mod.js
var __module = __toESM(require_arcade());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
