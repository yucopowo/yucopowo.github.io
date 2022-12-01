/* esm.sh - esbuild bundle(micromark-factory-title@1.0.2) es2022 development */
// esm-build-ce3ceb9b7c6792e51d7b82835ee0137b8ef2e19a-5dce684b/node_modules/micromark-factory-title/dev/index.js
import { ok as assert } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { factorySpace } from '/cdn/v78/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import { markdownLineEnding } from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
function factoryTitle(effects, ok, nok, type, markerType, stringType) {
  let marker;
  return start;
  function start(code) {
    assert(
      code === codes.quotationMark || code === codes.apostrophe || code === codes.leftParenthesis,
      'expected `"`, `\'`, or `(`'
    );
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    marker = code === codes.leftParenthesis ? codes.rightParenthesis : code;
    return atFirstTitleBreak;
  }
  function atFirstTitleBreak(code) {
    if (code === marker) {
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok;
    }
    effects.enter(stringType);
    return atTitleBreak(code);
  }
  function atTitleBreak(code) {
    if (code === marker) {
      effects.exit(stringType);
      return atFirstTitleBreak(marker);
    }
    if (code === codes.eof) {
      return nok(code);
    }
    if (markdownLineEnding(code)) {
      effects.enter(types.lineEnding);
      effects.consume(code);
      effects.exit(types.lineEnding);
      return factorySpace(effects, atTitleBreak, types.linePrefix);
    }
    effects.enter(types.chunkString, {
      contentType: constants.contentTypeString
    });
    return title(code);
  }
  function title(code) {
    if (code === marker || code === codes.eof || markdownLineEnding(code)) {
      effects.exit(types.chunkString);
      return atTitleBreak(code);
    }
    effects.consume(code);
    return code === codes.backslash ? titleEscape : title;
  }
  function titleEscape(code) {
    if (code === marker || code === codes.backslash) {
      effects.consume(code);
      return title;
    }
    return title(code);
  }
}
export { factoryTitle };
