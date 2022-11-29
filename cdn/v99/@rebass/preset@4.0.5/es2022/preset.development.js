/* esm.sh - esbuild bundle(@rebass/preset@4.0.5) es2022 development */
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

// esm-build-39f5eec6a715c617a21c9a6e00a681290b41d031-0c87b7fc/node_modules/@rebass/preset/dist/index.js
var require_dist = __commonJS({
  'esm-build-39f5eec6a715c617a21c9a6e00a681290b41d031-0c87b7fc/node_modules/@rebass/preset/dist/index.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports['default'] = exports.preset = void 0;
    var preset2 = {
      colors: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
        secondary: '#30c',
        muted: '#f6f6f9',
        gray: '#dddddf',
        highlight: 'hsla(205, 100%, 40%, 0.125)'
      },
      fonts: {
        body: 'system-ui, sans-serif',
        heading: 'inherit',
        monospace: 'Menlo, monospace'
      },
      fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
      fontWeights: {
        body: 400,
        heading: 700,
        bold: 700
      },
      lineHeights: {
        body: 1.5,
        heading: 1.25
      },
      space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
      sizes: {
        avatar: 48
      },
      radii: {
        default: 4,
        circle: 99999
      },
      shadows: {
        card: '0 0 4px rgba(0, 0, 0, .125)'
      },
      text: {
        heading: {
          fontFamily: 'heading',
          lineHeight: 'heading',
          fontWeight: 'heading'
        },
        display: {
          fontFamily: 'heading',
          fontWeight: 'heading',
          lineHeight: 'heading',
          fontSize: [5, 6, 7]
        },
        caps: {
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }
      },
      variants: {
        avatar: {
          width: 'avatar',
          height: 'avatar',
          borderRadius: 'circle'
        },
        card: {
          p: 2,
          bg: 'background',
          boxShadow: 'card'
        },
        link: {
          color: 'primary'
        },
        nav: {
          fontSize: 1,
          fontWeight: 'bold',
          display: 'inline-block',
          p: 2,
          color: 'inherit',
          textDecoration: 'none',
          ':hover,:focus,.active': {
            color: 'primary'
          }
        }
      },
      buttons: {
        primary: {
          fontSize: 2,
          fontWeight: 'bold',
          color: 'background',
          bg: 'primary',
          borderRadius: 'default'
        },
        outline: {
          variant: 'buttons.primary',
          color: 'primary',
          bg: 'transparent',
          boxShadow: 'inset 0 0 2px'
        },
        secondary: {
          variant: 'buttons.primary',
          color: 'background',
          bg: 'secondary'
        }
      },
      styles: {
        root: {
          fontFamily: 'body',
          fontWeight: 'body',
          lineHeight: 'body'
        }
      }
    };
    exports.preset = preset2;
    var _default = preset2;
    exports['default'] = _default;
  }
});

// esm-build-39f5eec6a715c617a21c9a6e00a681290b41d031-0c87b7fc/mod.js
var __module = __toESM(require_dist());
var __esModule = true;
var { preset } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, mod_default as default, preset };
