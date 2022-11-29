/* esm.sh - esbuild bundle(estree-util-visit@1.2.0) es2022 development */
// esm-build-21c2d32f7a7f229de9d7342225b1ec9791c9b9e3-acf6bbcd/node_modules/estree-util-visit/color.browser.js
function color(d) {
  return d;
}

// esm-build-21c2d32f7a7f229de9d7342225b1ec9791c9b9e3-acf6bbcd/node_modules/estree-util-visit/index.js
var own = {}.hasOwnProperty;
var CONTINUE = Symbol('continue');
var SKIP = Symbol('skip');
var EXIT = Symbol('exit');
function visit(tree, visitor) {
  let enter;
  let leave;
  if (typeof visitor === 'function') {
    enter = visitor;
  } else if (visitor && typeof visitor === 'object') {
    enter = visitor.enter;
    leave = visitor.leave;
  }
  build(tree, null, null, [])();
  function build(node, key, index, parents) {
    if (nodelike(node)) {
      visit2.displayName = 'node (' + color(node.type) + ')';
    }
    return visit2;
    function visit2() {
      const result = enter ? toResult(enter(node, key, index, parents)) : [];
      if (result[0] === EXIT) {
        return result;
      }
      if (result[0] !== SKIP) {
        let cKey;
        for (cKey in node) {
          if (
            own.call(node, cKey) &&
            node[cKey] &&
            typeof node[cKey] === 'object' &&
            cKey !== 'data' &&
            cKey !== 'position'
          ) {
            const value = node[cKey];
            const grandparents = parents.concat(node);
            if (Array.isArray(value)) {
              let cIndex = 0;
              while (cIndex > -1 && cIndex < value.length) {
                const subvalue = value[cIndex];
                if (nodelike(subvalue)) {
                  const subresult = build(subvalue, cKey, cIndex, grandparents)();
                  if (subresult[0] === EXIT) return subresult;
                  cIndex = typeof subresult[1] === 'number' ? subresult[1] : cIndex + 1;
                } else {
                  cIndex++;
                }
              }
            } else if (nodelike(value)) {
              const subresult = build(value, cKey, null, grandparents)();
              if (subresult[0] === EXIT) return subresult;
            }
          }
        }
      }
      return leave ? toResult(leave(node, key, index, parents)) : result;
    }
  }
}
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === 'number') {
    return [CONTINUE, value];
  }
  return [value];
}
function nodelike(value) {
  return Boolean(value && typeof value === 'object' && typeof value.type === 'string' && value.type.length > 0);
}
export { CONTINUE, EXIT, SKIP, visit };
