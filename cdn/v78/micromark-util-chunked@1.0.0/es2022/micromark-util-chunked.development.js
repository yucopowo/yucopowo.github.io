/* esm.sh - esbuild bundle(micromark-util-chunked@1.0.0) es2022 development */
// esm-build-7e30620974bc0fed3d68140c67c580625b2c2900-c36d44fb/node_modules/micromark-util-chunked/dev/index.js
import { constants } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
function splice(list, start, remove, items) {
  const end = list.length;
  let chunkStart = 0;
  let parameters;
  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }
  remove = remove > 0 ? remove : 0;
  if (items.length < constants.v8MaxSafeChunkSize) {
    parameters = Array.from(items);
    parameters.unshift(start, remove);
    [].splice.apply(list, parameters);
  } else {
    if (remove) [].splice.apply(list, [start, remove]);
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + constants.v8MaxSafeChunkSize);
      parameters.unshift(start, 0);
      [].splice.apply(list, parameters);
      chunkStart += constants.v8MaxSafeChunkSize;
      start += constants.v8MaxSafeChunkSize;
    }
  }
}
function push(list, items) {
  if (list.length > 0) {
    splice(list, list.length, 0, items);
    return list;
  }
  return items;
}
export { push, splice };
