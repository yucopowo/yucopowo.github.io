/* esm.sh - esbuild bundle(is-reference@3.0.0) es2022 development */
// esm-build-7b1fbb0e9164aef0a85fd826c4312cc03b9bfb70-a180d33c/node_modules/is-reference/src/index.js
function is_reference(node, parent) {
  if (node.type === 'MemberExpression') {
    return !node.computed && is_reference(node.object, node);
  }
  if (node.type === 'Identifier') {
    if (!parent) return true;
    switch (parent.type) {
      case 'MemberExpression':
        return parent.computed || node === parent.object;
      case 'MethodDefinition':
        return parent.computed;
      case 'PropertyDefinition':
        return parent.computed || node === parent.value;
      case 'Property':
        return parent.computed || node === parent.value;
      case 'ExportSpecifier':
      case 'ImportSpecifier':
        return node === parent.local;
      case 'LabeledStatement':
      case 'BreakStatement':
      case 'ContinueStatement':
        return false;
      default:
        return true;
    }
  }
  return false;
}
export { is_reference as default };
