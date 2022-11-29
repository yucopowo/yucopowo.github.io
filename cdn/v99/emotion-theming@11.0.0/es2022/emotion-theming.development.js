/* esm.sh - esbuild bundle(emotion-theming@11.0.0) es2022 development */
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

// esm-build-c684c47515c1b8828d9060c1c76960d39e63caeb-c0930c83/node_modules/emotion-theming/dist/emotion-theming.cjs.dev.js
var require_emotion_theming_cjs_dev = __commonJS({
  'esm-build-c684c47515c1b8828d9060c1c76960d39e63caeb-c0930c83/node_modules/emotion-theming/dist/emotion-theming.cjs.dev.js'() {
    'use strict';

    throw new Error(
      "`emotion-theming` has been removed and all its exports were moved to `@emotion/react` package. Please import them like this `import { useTheme, ThemeProvider, withTheme } from '@emotion/react'`."
    );
  }
});

// esm-build-c684c47515c1b8828d9060c1c76960d39e63caeb-c0930c83/node_modules/emotion-theming/dist/emotion-theming.cjs.js
var require_emotion_theming_cjs = __commonJS({
  'esm-build-c684c47515c1b8828d9060c1c76960d39e63caeb-c0930c83/node_modules/emotion-theming/dist/emotion-theming.cjs.js'(
    exports,
    module
  ) {
    'use strict';

    if (false) {
      module.exports = null;
    } else {
      module.exports = require_emotion_theming_cjs_dev();
    }
  }
});

// esm-build-c684c47515c1b8828d9060c1c76960d39e63caeb-c0930c83/mod.js
var __module = __toESM(require_emotion_theming_cjs());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
