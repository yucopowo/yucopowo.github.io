/* esm.sh - esbuild bundle(micromark@3.1.0/lib/preprocess.js) es2022 development */
// esm-build-97e11e203a3da9af24025ed8a182407d0e5bed0a-52c229e6/node_modules/micromark/dev/lib/preprocess.js
import { codes } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/constants.development.js';
var search = /[\0\t\n\r]/g;
function preprocess() {
  let column = 1;
  let buffer = '';
  let start = true;
  let atCarriageReturn;
  return preprocessor;
  function preprocessor(value, encoding, end) {
    const chunks = [];
    let match;
    let next;
    let startPosition;
    let endPosition;
    let code;
    value = buffer + value.toString(encoding);
    startPosition = 0;
    buffer = '';
    if (start) {
      if (value.charCodeAt(0) === codes.byteOrderMarker) {
        startPosition++;
      }
      start = void 0;
    }
    while (startPosition < value.length) {
      search.lastIndex = startPosition;
      match = search.exec(value);
      endPosition = match && match.index !== void 0 ? match.index : value.length;
      code = value.charCodeAt(endPosition);
      if (!match) {
        buffer = value.slice(startPosition);
        break;
      }
      if (code === codes.lf && startPosition === endPosition && atCarriageReturn) {
        chunks.push(codes.carriageReturnLineFeed);
        atCarriageReturn = void 0;
      } else {
        if (atCarriageReturn) {
          chunks.push(codes.carriageReturn);
          atCarriageReturn = void 0;
        }
        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition));
          column += endPosition - startPosition;
        }
        switch (code) {
          case codes.nul: {
            chunks.push(codes.replacementCharacter);
            column++;
            break;
          }
          case codes.ht: {
            next = Math.ceil(column / constants.tabSize) * constants.tabSize;
            chunks.push(codes.horizontalTab);
            while (column++ < next) chunks.push(codes.virtualSpace);
            break;
          }
          case codes.lf: {
            chunks.push(codes.lineFeed);
            column = 1;
            break;
          }
          default: {
            atCarriageReturn = true;
            column = 1;
          }
        }
      }
      startPosition = endPosition + 1;
    }
    if (end) {
      if (atCarriageReturn) chunks.push(codes.carriageReturn);
      if (buffer) chunks.push(buffer);
      chunks.push(codes.eof);
    }
    return chunks;
  }
}
export { preprocess };
