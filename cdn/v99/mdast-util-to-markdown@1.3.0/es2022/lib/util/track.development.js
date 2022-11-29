/* esm.sh - esbuild bundle(mdast-util-to-markdown@1.3.0/lib/util/track.js) es2022 development */
// esm-build-5eeaac8132a360648c140de4236f8c05b11acfaf-d5fd2f18/node_modules/mdast-util-to-markdown/lib/util/track.js
function track(options_) {
  const options = options_ || {};
  const now = options.now || {};
  let lineShift = options.lineShift || 0;
  let line = now.line || 1;
  let column = now.column || 1;
  return {
    move,
    current,
    shift
  };
  function current() {
    return {
      now: {
        line,
        column
      },
      lineShift
    };
  }
  function shift(value) {
    lineShift += value;
  }
  function move(value = '') {
    const chunks = value.split(/\r?\n|\r/g);
    const tail = chunks[chunks.length - 1];
    line += chunks.length - 1;
    column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift;
    return value;
  }
}
export { track };
