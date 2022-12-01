/* esm.sh - esbuild bundle(micromark-factory-destination@1.0.0) es2022 development */
// esm-build-5db7477b317263bb1cada90b8f447e40df51dd67-53df245f/node_modules/micromark-factory-destination/dev/index.js
import {
  asciiControl,
  markdownLineEndingOrSpace,
  markdownLineEnding
} from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
function factoryDestination(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  const limit = max || Number.POSITIVE_INFINITY;
  let balance = 0;
  return start;
  function start(code) {
    if (code === codes.lessThan) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code);
      effects.exit(literalMarkerType);
      return destinationEnclosedBefore;
    }
    if (code === codes.eof || code === codes.rightParenthesis || asciiControl(code)) {
      return nok(code);
    }
    effects.enter(type);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter(types.chunkString, {
      contentType: constants.contentTypeString
    });
    return destinationRaw(code);
  }
  function destinationEnclosedBefore(code) {
    if (code === codes.greaterThan) {
      effects.enter(literalMarkerType);
      effects.consume(code);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type);
      return ok;
    }
    effects.enter(stringType);
    effects.enter(types.chunkString, {
      contentType: constants.contentTypeString
    });
    return destinationEnclosed(code);
  }
  function destinationEnclosed(code) {
    if (code === codes.greaterThan) {
      effects.exit(types.chunkString);
      effects.exit(stringType);
      return destinationEnclosedBefore(code);
    }
    if (code === codes.eof || code === codes.lessThan || markdownLineEnding(code)) {
      return nok(code);
    }
    effects.consume(code);
    return code === codes.backslash ? destinationEnclosedEscape : destinationEnclosed;
  }
  function destinationEnclosedEscape(code) {
    if (code === codes.lessThan || code === codes.greaterThan || code === codes.backslash) {
      effects.consume(code);
      return destinationEnclosed;
    }
    return destinationEnclosed(code);
  }
  function destinationRaw(code) {
    if (code === codes.leftParenthesis) {
      if (++balance > limit) return nok(code);
      effects.consume(code);
      return destinationRaw;
    }
    if (code === codes.rightParenthesis) {
      if (!balance--) {
        effects.exit(types.chunkString);
        effects.exit(stringType);
        effects.exit(rawType);
        effects.exit(type);
        return ok(code);
      }
      effects.consume(code);
      return destinationRaw;
    }
    if (code === codes.eof || markdownLineEndingOrSpace(code)) {
      if (balance) return nok(code);
      effects.exit(types.chunkString);
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok(code);
    }
    if (asciiControl(code)) return nok(code);
    effects.consume(code);
    return code === codes.backslash ? destinationRawEscape : destinationRaw;
  }
  function destinationRawEscape(code) {
    if (code === codes.leftParenthesis || code === codes.rightParenthesis || code === codes.backslash) {
      effects.consume(code);
      return destinationRaw;
    }
    return destinationRaw(code);
  }
}
export { factoryDestination };
