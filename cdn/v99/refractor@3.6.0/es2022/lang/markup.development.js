/* esm.sh - esbuild bundle(refractor@3.6.0/lang/markup) es2022 development */
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

// esm-build-68f0b1bcb6f57be51d49c9e6aa21d7e51677896c-97879e04/node_modules/refractor/lang/markup.js
var require_markup = __commonJS({
  'esm-build-68f0b1bcb6f57be51d49c9e6aa21d7e51677896c-97879e04/node_modules/refractor/lang/markup.js'(exports, module) {
    'use strict';

    module.exports = markup;
    markup.displayName = 'markup';
    markup.aliases = ['html', 'mathml', 'svg', 'xml', 'ssml', 'atom', 'rss'];
    function markup(Prism) {
      Prism.languages.markup = {
        comment: {
          pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
          greedy: true
        },
        prolog: {
          pattern: /<\?[\s\S]+?\?>/,
          greedy: true
        },
        doctype: {
          pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: true,
          inside: {
            'internal-subset': {
              pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
              lookbehind: true,
              greedy: true,
              inside: null
            },
            string: {
              pattern: /"[^"]*"|'[^']*'/,
              greedy: true
            },
            punctuation: /^<!|>$|[[\]]/,
            'doctype-tag': /^DOCTYPE/i,
            name: /[^\s<>'"]+/
          }
        },
        cdata: {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          greedy: true
        },
        tag: {
          pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: true,
          inside: {
            tag: {
              pattern: /^<\/?[^\s>\/]+/,
              inside: {
                punctuation: /^<\/?/,
                namespace: /^[^\s>\/:]+:/
              }
            },
            'special-attr': [],
            'attr-value': {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                punctuation: [
                  {
                    pattern: /^=/,
                    alias: 'attr-equals'
                  },
                  /"|'/
                ]
              }
            },
            punctuation: /\/?>/,
            'attr-name': {
              pattern: /[^\s>\/]+/,
              inside: {
                namespace: /^[^\s>\/:]+:/
              }
            }
          }
        },
        entity: [
          {
            pattern: /&[\da-z]{1,8};/i,
            alias: 'named-entity'
          },
          /&#x?[\da-f]{1,8};/i
        ]
      };
      Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity'];
      Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;
      Prism.hooks.add('wrap', function(env) {
        if (env.type === 'entity') {
          env.attributes['title'] = env.content.value.replace(/&amp;/, '&');
        }
      });
      Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
        value: function addInlined(tagName, lang) {
          var includedCdataInside = {};
          includedCdataInside['language-' + lang] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: true,
            inside: Prism.languages[lang]
          };
          includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
          var inside = {
            'included-cdata': {
              pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
              inside: includedCdataInside
            }
          };
          inside['language-' + lang] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[lang]
          };
          var def = {};
          def[tagName] = {
            pattern: RegExp(
              /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                /__/g,
                function() {
                  return tagName;
                }
              ),
              'i'
            ),
            lookbehind: true,
            greedy: true,
            inside
          };
          Prism.languages.insertBefore('markup', 'cdata', def);
        }
      });
      Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
        value: function(attrName, lang) {
          Prism.languages.markup.tag.inside['special-attr'].push({
            pattern: RegExp(
              /(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
              'i'
            ),
            lookbehind: true,
            inside: {
              'attr-name': /^[^\s=]+/,
              'attr-value': {
                pattern: /=[\s\S]+/,
                inside: {
                  value: {
                    pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                    lookbehind: true,
                    alias: [lang, 'language-' + lang],
                    inside: Prism.languages[lang]
                  },
                  punctuation: [
                    {
                      pattern: /^=/,
                      alias: 'attr-equals'
                    },
                    /"|'/
                  ]
                }
              }
            }
          });
        }
      });
      Prism.languages.html = Prism.languages.markup;
      Prism.languages.mathml = Prism.languages.markup;
      Prism.languages.svg = Prism.languages.markup;
      Prism.languages.xml = Prism.languages.extend('markup', {});
      Prism.languages.ssml = Prism.languages.xml;
      Prism.languages.atom = Prism.languages.xml;
      Prism.languages.rss = Prism.languages.xml;
    }
  }
});

// esm-build-68f0b1bcb6f57be51d49c9e6aa21d7e51677896c-97879e04/mod.js
var __module = __toESM(require_markup());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
