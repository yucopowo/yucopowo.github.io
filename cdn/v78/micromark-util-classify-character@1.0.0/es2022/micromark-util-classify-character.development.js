/* esm.sh - esbuild bundle(micromark-util-classify-character@1.0.0) es2022 development */
// esm-build-40efcbfc2017871e3a11fd633346d83946f7e8f9-ba662394/node_modules/micromark-util-classify-character/dev/index.js
import {
  markdownLineEndingOrSpace,
  unicodePunctuation,
  unicodeWhitespace
} from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
function classifyCharacter(code) {
  if (code === codes.eof || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) {
    return constants.characterGroupWhitespace;
  }
  if (unicodePunctuation(code)) {
    return constants.characterGroupPunctuation;
  }
}
export { classifyCharacter };
