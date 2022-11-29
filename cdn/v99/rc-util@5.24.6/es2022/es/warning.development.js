/* esm.sh - esbuild bundle(rc-util@5.24.6/es/warning) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-2c527beec563cd928b9b2fa80ff0fb0517b6849a-2aa8b938/node_modules/rc-util/es/warning.js
var warning_exports = {};
__export(warning_exports, {
  call: () => call,
  default: () => warning_default,
  note: () => note,
  noteOnce: () => noteOnce,
  resetWarned: () => resetWarned,
  warning: () => warning,
  warningOnce: () => warningOnce
});
var warned = {};
function warning(valid, message) {
  if (!valid && console !== void 0) {
    console.error('Warning: '.concat(message));
  }
}
function note(valid, message) {
  if (!valid && console !== void 0) {
    console.warn('Note: '.concat(message));
  }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
var warning_default = warningOnce;

// esm-build-2c527beec563cd928b9b2fa80ff0fb0517b6849a-2aa8b938/mod.js
var { default: __default, ...__rest } = warning_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };


export {warning, resetWarned, noteOnce};
