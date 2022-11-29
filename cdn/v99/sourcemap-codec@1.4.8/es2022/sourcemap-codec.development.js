/* esm.sh - esbuild bundle(sourcemap-codec@1.4.8) es2022 development */
// esm-build-4d3d58a4a3a8ad16ef7e0fc82514f7b6daf4b3d1-01c2afb1/node_modules/sourcemap-codec/dist/sourcemap-codec.es.js
var charToInteger = {};
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
for (i = 0; i < chars.length; i++) {
  charToInteger[chars.charCodeAt(i)] = i;
}
var i;
function decode(mappings) {
  var decoded = [];
  var line = [];
  var segment = [0, 0, 0, 0, 0];
  var j = 0;
  for (var i = 0, shift = 0, value = 0; i < mappings.length; i++) {
    var c = mappings.charCodeAt(i);
    if (c === 44) {
      segmentify(line, segment, j);
      j = 0;
    } else if (c === 59) {
      segmentify(line, segment, j);
      j = 0;
      decoded.push(line);
      line = [];
      segment[0] = 0;
    } else {
      var integer = charToInteger[c];
      if (integer === void 0) {
        throw new Error('Invalid character (' + String.fromCharCode(c) + ')');
      }
      var hasContinuationBit = integer & 32;
      integer &= 31;
      value += integer << shift;
      if (hasContinuationBit) {
        shift += 5;
      } else {
        var shouldNegate = value & 1;
        value >>>= 1;
        if (shouldNegate) {
          value = value === 0 ? -2147483648 : -value;
        }
        segment[j] += value;
        j++;
        value = shift = 0;
      }
    }
  }
  segmentify(line, segment, j);
  decoded.push(line);
  return decoded;
}
function segmentify(line, segment, j) {
  if (j === 4) line.push([segment[0], segment[1], segment[2], segment[3]]);
  else if (j === 5) line.push([segment[0], segment[1], segment[2], segment[3], segment[4]]);
  else if (j === 1) line.push([segment[0]]);
}
function encode(decoded) {
  var sourceFileIndex = 0;
  var sourceCodeLine = 0;
  var sourceCodeColumn = 0;
  var nameIndex = 0;
  var mappings = '';
  for (var i = 0; i < decoded.length; i++) {
    var line = decoded[i];
    if (i > 0) mappings += ';';
    if (line.length === 0) continue;
    var generatedCodeColumn = 0;
    var lineMappings = [];
    for (var _i = 0, line_1 = line; _i < line_1.length; _i++) {
      var segment = line_1[_i];
      var segmentMappings = encodeInteger(segment[0] - generatedCodeColumn);
      generatedCodeColumn = segment[0];
      if (segment.length > 1) {
        segmentMappings +=
          encodeInteger(segment[1] - sourceFileIndex) +
          encodeInteger(segment[2] - sourceCodeLine) +
          encodeInteger(segment[3] - sourceCodeColumn);
        sourceFileIndex = segment[1];
        sourceCodeLine = segment[2];
        sourceCodeColumn = segment[3];
      }
      if (segment.length === 5) {
        segmentMappings += encodeInteger(segment[4] - nameIndex);
        nameIndex = segment[4];
      }
      lineMappings.push(segmentMappings);
    }
    mappings += lineMappings.join(',');
  }
  return mappings;
}
function encodeInteger(num) {
  var result = '';
  num = num < 0 ? (-num << 1) | 1 : num << 1;
  do {
    var clamped = num & 31;
    num >>>= 5;
    if (num > 0) {
      clamped |= 32;
    }
    result += chars[clamped];
  } while (num > 0);
  return result;
}
export { decode, encode };
