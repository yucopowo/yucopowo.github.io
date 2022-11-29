/* esm.sh - esbuild bundle(@jridgewell/set-array@1.1.2) es2022 development */
// esm-build-d81b245ac9f8f238a2b3c331e09ffbca1f47f3b8-cf766f33/node_modules/@jridgewell/set-array/dist/set-array.mjs
var get;
var put;
var pop;
var SetArray = class {
  constructor() {
    this._indexes = {
      __proto__: null
    };
    this.array = [];
  }
};
(() => {
  get = (strarr, key) => strarr._indexes[key];
  put = (strarr, key) => {
    const index = get(strarr, key);
    if (index !== void 0) return index;
    const { array, _indexes: indexes } = strarr;
    return (indexes[key] = array.push(key) - 1);
  };
  pop = strarr => {
    const { array, _indexes: indexes } = strarr;
    if (array.length === 0) return;
    const last = array.pop();
    indexes[last] = void 0;
  };
})();
export { SetArray, get, pop, put };
