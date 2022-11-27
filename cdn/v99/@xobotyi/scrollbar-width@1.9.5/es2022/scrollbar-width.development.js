/* esm.sh - esbuild bundle(@xobotyi/scrollbar-width@1.9.5) es2022 development */
// esm-build-13da20b7b57b608482ed4fd6eb4703ae450b7663-b713dc0d/node_modules/@xobotyi/scrollbar-width/dist/index.esm.js
var e = function(t) {
  if ('undefined' == typeof document) return 0;
  if (document.body && (!document.readyState || 'loading' !== document.readyState)) {
    if (true !== t && 'number' == typeof e.__cache) return e.__cache;
    var o = document.createElement('div'),
      d = o.style;
    (d.display = 'block'),
      (d.position = 'absolute'),
      (d.width = '100px'),
      (d.height = '100px'),
      (d.left = '-999px'),
      (d.top = '-999px'),
      (d.overflow = 'scroll'),
      document.body.insertBefore(o, null);
    var n = o.clientWidth;
    if (0 !== n) return (e.__cache = 100 - n), document.body.removeChild(o), e.__cache;
    document.body.removeChild(o);
  }
};
export { e as scrollbarWidth };
