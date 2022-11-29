/* esm.sh - esbuild bundle(micromark-factory-label@1.0.2) es2022 development */
// esm-build-45feb1312f5a6ea2f9d65f62bc391df318032f57-a2d139fb/node_modules/micromark-factory-label/dev/index.js
import { ok as assert } from '/cdn/v99/uvu@0.5.6/es2022/assert.development.js';
import {
  markdownLineEnding,
  markdownSpace
} from '/cdn/v99/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/types.development.js';
function factoryLabel(effects, ok, nok, type, markerType, stringType) {
  const self = this;
  let size = 0;
  let data;
  return start;
  function start(code) {
    assert(code === codes.leftSquareBracket, 'expected `[`');
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }
  function atBreak(code) {
    if (
      code === codes.eof ||
      code === codes.leftSquareBracket ||
      (code === codes.rightSquareBracket && !data) ||
      (code === codes.caret && !size && '_hiddenFootnoteSupport' in self.parser.constructs) ||
      size > constants.linkReferenceSizeMax
    ) {
      return nok(code);
    }
    if (code === codes.rightSquareBracket) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok;
    }
    if (markdownLineEnding(code)) {
      effects.enter(types.lineEnding);
      effects.consume(code);
      effects.exit(types.lineEnding);
      return atBreak;
    }
    effects.enter(types.chunkString, {
      contentType: constants.contentTypeString
    });
    return label(code);
  }
  function label(code) {
    if (
      code === codes.eof ||
      code === codes.leftSquareBracket ||
      code === codes.rightSquareBracket ||
      markdownLineEnding(code) ||
      size++ > constants.linkReferenceSizeMax
    ) {
      effects.exit(types.chunkString);
      return atBreak(code);
    }
    effects.consume(code);
    data = data || !markdownSpace(code);
    return code === codes.backslash ? labelEscape : label;
  }
  function labelEscape(code) {
    if (code === codes.leftSquareBracket || code === codes.backslash || code === codes.rightSquareBracket) {
      effects.consume(code);
      size++;
      return label;
    }
    return label(code);
  }
}
export { factoryLabel };