/* esm.sh - esbuild bundle(@babel/runtime@7.20.1/helpers/esm/inheritsLoose) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-678b0fe1b68d78e161ca366943770ce86d972c81-984c7832/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose_exports = {};
__export(inheritsLoose_exports, {
  default: () => _inheritsLoose
});

// esm-build-678b0fe1b68d78e161ca366943770ce86d972c81-984c7832/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
  return _setPrototypeOf(o, p);
}

// esm-build-678b0fe1b68d78e161ca366943770ce86d972c81-984c7832/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// esm-build-678b0fe1b68d78e161ca366943770ce86d972c81-984c7832/mod.js
var { default: __default, ...__rest } = inheritsLoose_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
