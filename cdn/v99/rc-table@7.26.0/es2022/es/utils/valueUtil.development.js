/* esm.sh - esbuild bundle(rc-table@7.26.0/es/utils/valueUtil) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/utils/valueUtil.js
var INTERNAL_KEY_PREFIX = 'RC_TABLE_KEY';
function toArray(arr) {
  if (arr === void 0 || arr === null) {
    return [];
  }
  return Array.isArray(arr) ? arr : [arr];
}
function getPathValue(record, path) {
  if (!path && typeof path !== 'number') {
    return record;
  }
  var pathList = toArray(path);
  var current = record;
  for (var i = 0; i < pathList.length; i += 1) {
    if (!current) {
      return null;
    }
    var prop = pathList[i];
    current = current[prop];
  }
  return current;
}
function getColumnsKey(columns) {
  var columnKeys = [];
  var keys = {};
  columns.forEach(function(column) {
    var _ref = column || {},
      key = _ref.key,
      dataIndex = _ref.dataIndex;
    var mergedKey = key || toArray(dataIndex).join('-') || INTERNAL_KEY_PREFIX;
    while (keys[mergedKey]) {
      mergedKey = ''.concat(mergedKey, '_next');
    }
    keys[mergedKey] = true;
    columnKeys.push(mergedKey);
  });
  return columnKeys;
}
function validateValue(val) {
  return val !== null && val !== void 0;
}
export { getColumnsKey, getPathValue, validateValue };
