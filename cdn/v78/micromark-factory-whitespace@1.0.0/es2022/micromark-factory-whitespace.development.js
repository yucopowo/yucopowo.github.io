/* esm.sh - esbuild bundle(micromark-factory-whitespace@1.0.0) es2022 development */
// esm-build-8337257dddc387615e5f09a90e6baa1648858d20-77df5dd3/node_modules/micromark-factory-whitespace/dev/index.js
import { factorySpace } from '/cdn/v78/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import {
  markdownLineEnding,
  markdownSpace
} from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { types } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
function factoryWhitespace(effects, ok) {
  let seen;
  return start;
  function start(code) {
    if (markdownLineEnding(code)) {
      effects.enter(types.lineEnding);
      effects.consume(code);
      effects.exit(types.lineEnding);
      seen = true;
      return start;
    }
    if (markdownSpace(code)) {
      return factorySpace(effects, start, seen ? types.linePrefix : types.lineSuffix)(code);
    }
    return ok(code);
  }
}
export { factoryWhitespace };
