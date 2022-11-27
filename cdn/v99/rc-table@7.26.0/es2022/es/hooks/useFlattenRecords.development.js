/* esm.sh - esbuild bundle(rc-table@7.26.0/es/hooks/useFlattenRecords) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/hooks/useFlattenRecords.js
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function flatRecord(record, indent, childrenColumnName, expandedKeys, getRowKey, index) {
  var arr = [];
  arr.push({
    record,
    indent,
    index
  });
  var key = getRowKey(record);
  var expanded = expandedKeys === null || expandedKeys === void 0 ? void 0 : expandedKeys.has(key);
  if (record && Array.isArray(record[childrenColumnName]) && expanded) {
    for (var i = 0; i < record[childrenColumnName].length; i += 1) {
      var tempArr = flatRecord(
        record[childrenColumnName][i],
        indent + 1,
        childrenColumnName,
        expandedKeys,
        getRowKey,
        i
      );
      arr.push.apply(arr, _toConsumableArray(tempArr));
    }
  }
  return arr;
}
function useFlattenRecords(data, childrenColumnName, expandedKeys, getRowKey) {
  var arr = React.useMemo(
    function() {
      if (expandedKeys === null || expandedKeys === void 0 ? void 0 : expandedKeys.size) {
        var temp = [];
        for (var i = 0; i < (data === null || data === void 0 ? void 0 : data.length); i += 1) {
          var record = data[i];
          temp.push.apply(
            temp,
            _toConsumableArray(flatRecord(record, 0, childrenColumnName, expandedKeys, getRowKey, i))
          );
        }
        return temp;
      }
      return data === null || data === void 0
        ? void 0
        : data.map(function(item, index) {
            return {
              record: item,
              indent: 0,
              index
            };
          });
    },
    [data, childrenColumnName, expandedKeys, getRowKey]
  );
  return arr;
}
export { useFlattenRecords as default };
