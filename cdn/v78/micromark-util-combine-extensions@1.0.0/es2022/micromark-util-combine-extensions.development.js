/* esm.sh - esbuild bundle(micromark-util-combine-extensions@1.0.0) es2022 development */
// esm-build-3adcc93f42d08eaff81b86b1fc11d05830837649-39e85969/node_modules/micromark-util-combine-extensions/index.js
import { splice } from '/cdn/v78/micromark-util-chunked@1.0.0/es2022/micromark-util-chunked.development.js';
var hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(extensions) {
  const all = {};
  let index = -1;
  while (++index < extensions.length) {
    syntaxExtension(all, extensions[index]);
  }
  return all;
}
function syntaxExtension(all, extension) {
  let hook;
  for (hook in extension) {
    const maybe = hasOwnProperty.call(all, hook) ? all[hook] : void 0;
    const left = maybe || (all[hook] = {});
    const right = extension[hook];
    let code;
    for (code in right) {
      if (!hasOwnProperty.call(left, code)) left[code] = [];
      const value = right[code];
      constructs(left[code], Array.isArray(value) ? value : value ? [value] : []);
    }
  }
}
function constructs(existing, list) {
  let index = -1;
  const before = [];
  while (++index < list.length) {
    (list[index].add === 'after' ? existing : before).push(list[index]);
  }
  splice(existing, 0, 0, before);
}
function combineHtmlExtensions(htmlExtensions) {
  const handlers = {};
  let index = -1;
  while (++index < htmlExtensions.length) {
    htmlExtension(handlers, htmlExtensions[index]);
  }
  return handlers;
}
function htmlExtension(all, extension) {
  let hook;
  for (hook in extension) {
    const maybe = hasOwnProperty.call(all, hook) ? all[hook] : void 0;
    const left = maybe || (all[hook] = {});
    const right = extension[hook];
    let type;
    if (right) {
      for (type in right) {
        left[type] = right[type];
      }
    }
  }
}
export { combineExtensions, combineHtmlExtensions };
