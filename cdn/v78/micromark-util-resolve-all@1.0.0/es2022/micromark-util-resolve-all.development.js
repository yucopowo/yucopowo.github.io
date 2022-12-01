/* esm.sh - esbuild bundle(micromark-util-resolve-all@1.0.0) es2022 development */
// esm-build-8ff9cadc112f07ce3fc79ef591232334763a2e36-f4463622/node_modules/micromark-util-resolve-all/index.js
function resolveAll(constructs, events, context) {
  const called = [];
  let index = -1;
  while (++index < constructs.length) {
    const resolve = constructs[index].resolveAll;
    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }
  return events;
}
export { resolveAll };
