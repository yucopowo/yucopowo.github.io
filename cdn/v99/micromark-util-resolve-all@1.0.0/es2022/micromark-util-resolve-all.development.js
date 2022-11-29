/* esm.sh - esbuild bundle(micromark-util-resolve-all@1.0.0) es2022 development */
// esm-build-5c954f7d6053d5ae47dcc8e5ea2fdf9fef1cfb34-9a0214e1/node_modules/micromark-util-resolve-all/index.js
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
