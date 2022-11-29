/* esm.sh - esbuild bundle(@babel/compat-data@7.20.1/plugins) es2022 development */
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

// esm-build-9ff51375144ab54ab1fa590c76e0862e43196c06-db564182/node_modules/@babel/compat-data/data/plugins.json
var require_plugins = __commonJS({
  'esm-build-9ff51375144ab54ab1fa590c76e0862e43196c06-db564182/node_modules/@babel/compat-data/data/plugins.json'(
    exports,
    module
  ) {
    module.exports = {
      'transform-class-static-block': {
        chrome: '94',
        opera: '80',
        edge: '94',
        firefox: '93',
        node: '16.11',
        deno: '1.14',
        electron: '15.0'
      },
      'proposal-class-static-block': {
        chrome: '94',
        opera: '80',
        edge: '94',
        firefox: '93',
        node: '16.11',
        deno: '1.14',
        electron: '15.0'
      },
      'transform-private-property-in-object': {
        chrome: '91',
        opera: '77',
        edge: '91',
        firefox: '90',
        safari: '15',
        node: '16.9',
        deno: '1.9',
        ios: '15',
        electron: '13.0'
      },
      'proposal-private-property-in-object': {
        chrome: '91',
        opera: '77',
        edge: '91',
        firefox: '90',
        safari: '15',
        node: '16.9',
        deno: '1.9',
        ios: '15',
        electron: '13.0'
      },
      'transform-class-properties': {
        chrome: '74',
        opera: '62',
        edge: '79',
        firefox: '90',
        safari: '14.1',
        node: '12',
        deno: '1',
        ios: '15',
        samsung: '11',
        electron: '6.0'
      },
      'proposal-class-properties': {
        chrome: '74',
        opera: '62',
        edge: '79',
        firefox: '90',
        safari: '14.1',
        node: '12',
        deno: '1',
        ios: '15',
        samsung: '11',
        electron: '6.0'
      },
      'transform-private-methods': {
        chrome: '84',
        opera: '70',
        edge: '84',
        firefox: '90',
        safari: '15',
        node: '14.6',
        deno: '1',
        ios: '15',
        samsung: '14',
        electron: '10.0'
      },
      'proposal-private-methods': {
        chrome: '84',
        opera: '70',
        edge: '84',
        firefox: '90',
        safari: '15',
        node: '14.6',
        deno: '1',
        ios: '15',
        samsung: '14',
        electron: '10.0'
      },
      'transform-numeric-separator': {
        chrome: '75',
        opera: '62',
        edge: '79',
        firefox: '70',
        safari: '13',
        node: '12.5',
        deno: '1',
        ios: '13',
        samsung: '11',
        rhino: '1.7.14',
        electron: '6.0'
      },
      'proposal-numeric-separator': {
        chrome: '75',
        opera: '62',
        edge: '79',
        firefox: '70',
        safari: '13',
        node: '12.5',
        deno: '1',
        ios: '13',
        samsung: '11',
        rhino: '1.7.14',
        electron: '6.0'
      },
      'transform-logical-assignment-operators': {
        chrome: '85',
        opera: '71',
        edge: '85',
        firefox: '79',
        safari: '14',
        node: '15',
        deno: '1.2',
        ios: '14',
        samsung: '14',
        electron: '10.0'
      },
      'proposal-logical-assignment-operators': {
        chrome: '85',
        opera: '71',
        edge: '85',
        firefox: '79',
        safari: '14',
        node: '15',
        deno: '1.2',
        ios: '14',
        samsung: '14',
        electron: '10.0'
      },
      'transform-nullish-coalescing-operator': {
        chrome: '80',
        opera: '67',
        edge: '80',
        firefox: '72',
        safari: '13.1',
        node: '14',
        deno: '1',
        ios: '13.4',
        samsung: '13',
        electron: '8.0'
      },
      'proposal-nullish-coalescing-operator': {
        chrome: '80',
        opera: '67',
        edge: '80',
        firefox: '72',
        safari: '13.1',
        node: '14',
        deno: '1',
        ios: '13.4',
        samsung: '13',
        electron: '8.0'
      },
      'transform-optional-chaining': {
        chrome: '91',
        opera: '77',
        edge: '91',
        firefox: '74',
        safari: '13.1',
        node: '16.9',
        deno: '1.9',
        ios: '13.4',
        electron: '13.0'
      },
      'proposal-optional-chaining': {
        chrome: '91',
        opera: '77',
        edge: '91',
        firefox: '74',
        safari: '13.1',
        node: '16.9',
        deno: '1.9',
        ios: '13.4',
        electron: '13.0'
      },
      'transform-json-strings': {
        chrome: '66',
        opera: '53',
        edge: '79',
        firefox: '62',
        safari: '12',
        node: '10',
        deno: '1',
        ios: '12',
        samsung: '9',
        rhino: '1.7.14',
        electron: '3.0'
      },
      'proposal-json-strings': {
        chrome: '66',
        opera: '53',
        edge: '79',
        firefox: '62',
        safari: '12',
        node: '10',
        deno: '1',
        ios: '12',
        samsung: '9',
        rhino: '1.7.14',
        electron: '3.0'
      },
      'transform-optional-catch-binding': {
        chrome: '66',
        opera: '53',
        edge: '79',
        firefox: '58',
        safari: '11.1',
        node: '10',
        deno: '1',
        ios: '11.3',
        samsung: '9',
        electron: '3.0'
      },
      'proposal-optional-catch-binding': {
        chrome: '66',
        opera: '53',
        edge: '79',
        firefox: '58',
        safari: '11.1',
        node: '10',
        deno: '1',
        ios: '11.3',
        samsung: '9',
        electron: '3.0'
      },
      'transform-parameters': {
        chrome: '49',
        opera: '36',
        edge: '18',
        firefox: '53',
        node: '6',
        deno: '1',
        samsung: '5',
        electron: '0.37'
      },
      'transform-async-generator-functions': {
        chrome: '63',
        opera: '50',
        edge: '79',
        firefox: '57',
        safari: '12',
        node: '10',
        deno: '1',
        ios: '12',
        samsung: '8',
        electron: '3.0'
      },
      'proposal-async-generator-functions': {
        chrome: '63',
        opera: '50',
        edge: '79',
        firefox: '57',
        safari: '12',
        node: '10',
        deno: '1',
        ios: '12',
        samsung: '8',
        electron: '3.0'
      },
      'transform-object-rest-spread': {
        chrome: '60',
        opera: '47',
        edge: '79',
        firefox: '55',
        safari: '11.1',
        node: '8.3',
        deno: '1',
        ios: '11.3',
        samsung: '8',
        electron: '2.0'
      },
      'proposal-object-rest-spread': {
        chrome: '60',
        opera: '47',
        edge: '79',
        firefox: '55',
        safari: '11.1',
        node: '8.3',
        deno: '1',
        ios: '11.3',
        samsung: '8',
        electron: '2.0'
      },
      'transform-dotall-regex': {
        chrome: '62',
        opera: '49',
        edge: '79',
        firefox: '78',
        safari: '11.1',
        node: '8.10',
        deno: '1',
        ios: '11.3',
        samsung: '8',
        electron: '3.0'
      },
      'transform-unicode-property-regex': {
        chrome: '64',
        opera: '51',
        edge: '79',
        firefox: '78',
        safari: '11.1',
        node: '10',
        deno: '1',
        ios: '11.3',
        samsung: '9',
        electron: '3.0'
      },
      'proposal-unicode-property-regex': {
        chrome: '64',
        opera: '51',
        edge: '79',
        firefox: '78',
        safari: '11.1',
        node: '10',
        deno: '1',
        ios: '11.3',
        samsung: '9',
        electron: '3.0'
      },
      'transform-named-capturing-groups-regex': {
        chrome: '64',
        opera: '51',
        edge: '79',
        firefox: '78',
        safari: '11.1',
        node: '10',
        deno: '1',
        ios: '11.3',
        samsung: '9',
        electron: '3.0'
      },
      'transform-async-to-generator': {
        chrome: '55',
        opera: '42',
        edge: '15',
        firefox: '52',
        safari: '11',
        node: '7.6',
        deno: '1',
        ios: '11',
        samsung: '6',
        electron: '1.6'
      },
      'transform-exponentiation-operator': {
        chrome: '52',
        opera: '39',
        edge: '14',
        firefox: '52',
        safari: '10.1',
        node: '7',
        deno: '1',
        ios: '10.3',
        samsung: '6',
        rhino: '1.7.14',
        electron: '1.3'
      },
      'transform-template-literals': {
        chrome: '41',
        opera: '28',
        edge: '13',
        firefox: '34',
        safari: '13',
        node: '4',
        deno: '1',
        ios: '13',
        samsung: '3.4',
        electron: '0.21'
      },
      'transform-literals': {
        chrome: '44',
        opera: '31',
        edge: '12',
        firefox: '53',
        safari: '9',
        node: '4',
        deno: '1',
        ios: '9',
        samsung: '4',
        electron: '0.30'
      },
      'transform-function-name': {
        chrome: '51',
        opera: '38',
        edge: '79',
        firefox: '53',
        safari: '10',
        node: '6.5',
        deno: '1',
        ios: '10',
        samsung: '5',
        electron: '1.2'
      },
      'transform-arrow-functions': {
        chrome: '47',
        opera: '34',
        edge: '13',
        firefox: '43',
        safari: '10',
        node: '6',
        deno: '1',
        ios: '10',
        samsung: '5',
        rhino: '1.7.13',
        electron: '0.36'
      },
      'transform-block-scoped-functions': {
        chrome: '41',
        opera: '28',
        edge: '12',
        firefox: '46',
        safari: '10',
        node: '4',
        deno: '1',
        ie: '11',
        ios: '10',
        samsung: '3.4',
        electron: '0.21'
      },
      'transform-classes': {
        chrome: '46',
        opera: '33',
        edge: '13',
        firefox: '45',
        safari: '10',
        node: '5',
        deno: '1',
        ios: '10',
        samsung: '5',
        electron: '0.36'
      },
      'transform-object-super': {
        chrome: '46',
        opera: '33',
        edge: '13',
        firefox: '45',
        safari: '10',
        node: '5',
        deno: '1',
        ios: '10',
        samsung: '5',
        electron: '0.36'
      },
      'transform-shorthand-properties': {
        chrome: '43',
        opera: '30',
        edge: '12',
        firefox: '33',
        safari: '9',
        node: '4',
        deno: '1',
        ios: '9',
        samsung: '4',
        rhino: '1.7.14',
        electron: '0.27'
      },
      'transform-duplicate-keys': {
        chrome: '42',
        opera: '29',
        edge: '12',
        firefox: '34',
        safari: '9',
        node: '4',
        deno: '1',
        ios: '9',
        samsung: '3.4',
        electron: '0.25'
      },
      'transform-computed-properties': {
        chrome: '44',
        opera: '31',
        edge: '12',
        firefox: '34',
        safari: '7.1',
        node: '4',
        deno: '1',
        ios: '8',
        samsung: '4',
        electron: '0.30'
      },
      'transform-for-of': {
        chrome: '51',
        opera: '38',
        edge: '15',
        firefox: '53',
        safari: '10',
        node: '6.5',
        deno: '1',
        ios: '10',
        samsung: '5',
        electron: '1.2'
      },
      'transform-sticky-regex': {
        chrome: '49',
        opera: '36',
        edge: '13',
        firefox: '3',
        safari: '10',
        node: '6',
        deno: '1',
        ios: '10',
        samsung: '5',
        electron: '0.37'
      },
      'transform-unicode-escapes': {
        chrome: '44',
        opera: '31',
        edge: '12',
        firefox: '53',
        safari: '9',
        node: '4',
        deno: '1',
        ios: '9',
        samsung: '4',
        electron: '0.30'
      },
      'transform-unicode-regex': {
        chrome: '50',
        opera: '37',
        edge: '13',
        firefox: '46',
        safari: '12',
        node: '6',
        deno: '1',
        ios: '12',
        samsung: '5',
        electron: '1.1'
      },
      'transform-spread': {
        chrome: '46',
        opera: '33',
        edge: '13',
        firefox: '45',
        safari: '10',
        node: '5',
        deno: '1',
        ios: '10',
        samsung: '5',
        electron: '0.36'
      },
      'transform-destructuring': {
        chrome: '51',
        opera: '38',
        edge: '15',
        firefox: '53',
        safari: '10',
        node: '6.5',
        deno: '1',
        ios: '10',
        samsung: '5',
        electron: '1.2'
      },
      'transform-block-scoping': {
        chrome: '49',
        opera: '36',
        edge: '14',
        firefox: '51',
        safari: '11',
        node: '6',
        deno: '1',
        ios: '11',
        samsung: '5',
        electron: '0.37'
      },
      'transform-typeof-symbol': {
        chrome: '38',
        opera: '25',
        edge: '12',
        firefox: '36',
        safari: '9',
        node: '0.12',
        deno: '1',
        ios: '9',
        samsung: '3',
        rhino: '1.7.13',
        electron: '0.20'
      },
      'transform-new-target': {
        chrome: '46',
        opera: '33',
        edge: '14',
        firefox: '41',
        safari: '10',
        node: '5',
        deno: '1',
        ios: '10',
        samsung: '5',
        electron: '0.36'
      },
      'transform-regenerator': {
        chrome: '50',
        opera: '37',
        edge: '13',
        firefox: '53',
        safari: '10',
        node: '6',
        deno: '1',
        ios: '10',
        samsung: '5',
        electron: '1.1'
      },
      'transform-member-expression-literals': {
        chrome: '7',
        opera: '12',
        edge: '12',
        firefox: '2',
        safari: '5.1',
        node: '0.4',
        deno: '1',
        ie: '9',
        android: '4',
        ios: '6',
        phantom: '1.9',
        samsung: '1',
        rhino: '1.7.13',
        electron: '0.20'
      },
      'transform-property-literals': {
        chrome: '7',
        opera: '12',
        edge: '12',
        firefox: '2',
        safari: '5.1',
        node: '0.4',
        deno: '1',
        ie: '9',
        android: '4',
        ios: '6',
        phantom: '1.9',
        samsung: '1',
        rhino: '1.7.13',
        electron: '0.20'
      },
      'transform-reserved-words': {
        chrome: '13',
        opera: '10.50',
        edge: '12',
        firefox: '2',
        safari: '3.1',
        node: '0.6',
        deno: '1',
        ie: '9',
        android: '4.4',
        ios: '6',
        phantom: '1.9',
        samsung: '1',
        rhino: '1.7.13',
        electron: '0.20'
      },
      'transform-export-namespace-from': {
        chrome: '72',
        and_chr: '72',
        edge: '79',
        firefox: '80',
        and_ff: '80',
        node: '13.2',
        opera: '60',
        op_mob: '51',
        samsung: '11.0',
        android: '72',
        electron: '5.0'
      },
      'proposal-export-namespace-from': {
        chrome: '72',
        and_chr: '72',
        edge: '79',
        firefox: '80',
        and_ff: '80',
        node: '13.2',
        opera: '60',
        op_mob: '51',
        samsung: '11.0',
        android: '72',
        electron: '5.0'
      }
    };
  }
});

// esm-build-9ff51375144ab54ab1fa590c76e0862e43196c06-db564182/node_modules/@babel/compat-data/plugins.js
var require_plugins2 = __commonJS({
  'esm-build-9ff51375144ab54ab1fa590c76e0862e43196c06-db564182/node_modules/@babel/compat-data/plugins.js'(
    exports,
    module
  ) {
    module.exports = require_plugins();
  }
});

// esm-build-9ff51375144ab54ab1fa590c76e0862e43196c06-db564182/mod.js
var __module = __toESM(require_plugins2());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };