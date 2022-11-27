/* esm.sh - esbuild bundle(@emotion/hash@0.8.0) es2022 development */
// esm-build-4e7bac3884b730853e8f725a38e334ca604f31dc-0c35af82/node_modules/@emotion/hash/dist/hash.esm.js
function murmur2(str) {
  var h = 0;
  var k,
    i = 0,
    len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k =
      (str.charCodeAt(i) & 255) |
      ((str.charCodeAt(++i) & 255) << 8) |
      ((str.charCodeAt(++i) & 255) << 16) |
      ((str.charCodeAt(++i) & 255) << 24);
    k = (k & 65535) * 1540483477 + (((k >>> 16) * 59797) << 16);
    k ^= k >>> 24;
    h =
      ((k & 65535) * 1540483477 + (((k >>> 16) * 59797) << 16)) ^
      ((h & 65535) * 1540483477 + (((h >>> 16) * 59797) << 16));
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = (h & 65535) * 1540483477 + (((h >>> 16) * 59797) << 16);
  }
  h ^= h >>> 13;
  h = (h & 65535) * 1540483477 + (((h >>> 16) * 59797) << 16);
  return ((h ^ (h >>> 15)) >>> 0).toString(36);
}
var hash_esm_default = murmur2;
export { hash_esm_default as default };