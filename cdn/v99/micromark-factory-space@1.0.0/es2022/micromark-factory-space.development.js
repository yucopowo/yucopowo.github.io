/* esm.sh - esbuild bundle(micromark-factory-space@1.0.0) es2022 development */
// esm-build-e37855f158e56a78a68eee3f87ecf0a74d1de1d6-85b01236/node_modules/micromark-factory-space/dev/index.js
import { markdownSpace } from '/cdn/v99/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
function factorySpace(effects, ok, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start;
  function start(code) {
    if (markdownSpace(code)) {
      effects.enter(type);
      return prefix(code);
    }
    return ok(code);
  }
  function prefix(code) {
    if (markdownSpace(code) && size++ < limit) {
      effects.consume(code);
      return prefix;
    }
    effects.exit(type);
    return ok(code);
  }
}
export { factorySpace };
