/* esm.sh - esbuild bundle(screenfull@5.2.0) es2022 development */
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

// esm-build-ce741180973f175b1af7d3d5abfa9dc0a0f5fc4b-65ad1b99/node_modules/screenfull/dist/screenfull.js
var require_screenfull = __commonJS({
  'esm-build-ce741180973f175b1af7d3d5abfa9dc0a0f5fc4b-65ad1b99/node_modules/screenfull/dist/screenfull.js'(
    exports,
    module
  ) {
    (function() {
      'use strict';

      var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
      var isCommonjs = typeof module !== 'undefined' && module.exports;
      var fn = (function() {
        var val;
        var fnMap = [
          [
            'requestFullscreen',
            'exitFullscreen',
            'fullscreenElement',
            'fullscreenEnabled',
            'fullscreenchange',
            'fullscreenerror'
          ],
          [
            'webkitRequestFullscreen',
            'webkitExitFullscreen',
            'webkitFullscreenElement',
            'webkitFullscreenEnabled',
            'webkitfullscreenchange',
            'webkitfullscreenerror'
          ],
          [
            'webkitRequestFullScreen',
            'webkitCancelFullScreen',
            'webkitCurrentFullScreenElement',
            'webkitCancelFullScreen',
            'webkitfullscreenchange',
            'webkitfullscreenerror'
          ],
          [
            'mozRequestFullScreen',
            'mozCancelFullScreen',
            'mozFullScreenElement',
            'mozFullScreenEnabled',
            'mozfullscreenchange',
            'mozfullscreenerror'
          ],
          [
            'msRequestFullscreen',
            'msExitFullscreen',
            'msFullscreenElement',
            'msFullscreenEnabled',
            'MSFullscreenChange',
            'MSFullscreenError'
          ]
        ];
        var i = 0;
        var l = fnMap.length;
        var ret = {};
        for (; i < l; i++) {
          val = fnMap[i];
          if (val && val[1] in document) {
            for (i = 0; i < val.length; i++) {
              ret[fnMap[0][i]] = val[i];
            }
            return ret;
          }
        }
        return false;
      })();
      var eventNameMap = {
        change: fn.fullscreenchange,
        error: fn.fullscreenerror
      };
      var screenfull = {
        request: function(element, options) {
          return new Promise(
            function(resolve, reject) {
              var onFullScreenEntered = function() {
                this.off('change', onFullScreenEntered);
                resolve();
              }.bind(this);
              this.on('change', onFullScreenEntered);
              element = element || document.documentElement;
              var returnPromise = element[fn.requestFullscreen](options);
              if (returnPromise instanceof Promise) {
                returnPromise.then(onFullScreenEntered).catch(reject);
              }
            }.bind(this)
          );
        },
        exit: function() {
          return new Promise(
            function(resolve, reject) {
              if (!this.isFullscreen) {
                resolve();
                return;
              }
              var onFullScreenExit = function() {
                this.off('change', onFullScreenExit);
                resolve();
              }.bind(this);
              this.on('change', onFullScreenExit);
              var returnPromise = document[fn.exitFullscreen]();
              if (returnPromise instanceof Promise) {
                returnPromise.then(onFullScreenExit).catch(reject);
              }
            }.bind(this)
          );
        },
        toggle: function(element, options) {
          return this.isFullscreen ? this.exit() : this.request(element, options);
        },
        onchange: function(callback) {
          this.on('change', callback);
        },
        onerror: function(callback) {
          this.on('error', callback);
        },
        on: function(event, callback) {
          var eventName = eventNameMap[event];
          if (eventName) {
            document.addEventListener(eventName, callback, false);
          }
        },
        off: function(event, callback) {
          var eventName = eventNameMap[event];
          if (eventName) {
            document.removeEventListener(eventName, callback, false);
          }
        },
        raw: fn
      };
      if (!fn) {
        if (isCommonjs) {
          module.exports = {
            isEnabled: false
          };
        } else {
          window.screenfull = {
            isEnabled: false
          };
        }
        return;
      }
      Object.defineProperties(screenfull, {
        isFullscreen: {
          get: function() {
            return Boolean(document[fn.fullscreenElement]);
          }
        },
        element: {
          enumerable: true,
          get: function() {
            return document[fn.fullscreenElement];
          }
        },
        isEnabled: {
          enumerable: true,
          get: function() {
            return Boolean(document[fn.fullscreenEnabled]);
          }
        }
      });
      if (isCommonjs) {
        module.exports = screenfull;
      } else {
        window.screenfull = screenfull;
      }
    })();
  }
});

// esm-build-ce741180973f175b1af7d3d5abfa9dc0a0f5fc4b-65ad1b99/mod.js
var __module = __toESM(require_screenfull());
var { request, exit, toggle, onchange, onerror, on, off, raw } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default, exit, off, on, onchange, onerror, raw, request, toggle };
/*!
 * screenfull
 * v5.2.0 - 2021-11-03
 * (c) Sindre Sorhus; MIT License
 */
