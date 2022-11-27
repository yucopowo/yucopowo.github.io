/* esm.sh - esbuild bundle(rc-util@5.24.6/es/raf) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-b5dac281149cddd908ccc9438e16e37be290bc06-c4eabce9/node_modules/rc-util/es/raf.js
var raf_exports = {};
__export(raf_exports, {
  default: () => raf_default
});
var raf = function raf2(callback) {
  return +setTimeout(callback, 16);
};
var caf = function caf2(num) {
  return clearTimeout(num);
};
if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  raf = function raf3(callback) {
    return window.requestAnimationFrame(callback);
  };
  caf = function caf3(handle) {
    return window.cancelAnimationFrame(handle);
  };
}
var rafUUID = 0;
var rafIds = /* @__PURE__ */ new Map();
function cleanup(id) {
  rafIds.delete(id);
}
var wrapperRaf = function wrapperRaf2(callback) {
  var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      cleanup(id);
      callback();
    } else {
      var realId = raf(function() {
        callRef(leftTimes - 1);
      });
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
};
wrapperRaf.cancel = function(id) {
  var realId = rafIds.get(id);
  cleanup(realId);
  return caf(realId);
};
var raf_default = wrapperRaf;

// esm-build-b5dac281149cddd908ccc9438e16e37be290bc06-c4eabce9/mod.js
var { default: __default, ...__rest } = raf_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
