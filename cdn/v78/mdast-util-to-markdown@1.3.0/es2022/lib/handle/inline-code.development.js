/* esm.sh - esbuild bundle(mdast-util-to-markdown@1.3.0/lib/handle/inline-code.js) es2022 development */
// esm-build-26a8be4836f65e0a96a5b52bdb6d0aa7c6394719-add5ff70/node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js
function patternCompile(pattern) {
  if (!pattern._compiled) {
    const before = (pattern.atBreak ? '[\\r\\n][\\t ]*' : '') + (pattern.before ? '(?:' + pattern.before + ')' : '');
    pattern._compiled = new RegExp(
      (before ? '(' + before + ')' : '') +
        (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? '\\' : '') +
        pattern.character +
        (pattern.after ? '(?:' + pattern.after + ')' : ''),
      'g'
    );
  }
  return pattern._compiled;
}

// esm-build-26a8be4836f65e0a96a5b52bdb6d0aa7c6394719-add5ff70/node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
inlineCode.peek = inlineCodePeek;
function inlineCode(node, _, context) {
  let value = node.value || '';
  let sequence = '`';
  let index = -1;
  while (new RegExp('(^|[^`])' + sequence + '([^`]|$)').test(value)) {
    sequence += '`';
  }
  if (/[^ \r\n]/.test(value) && ((/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value)) || /^`|`$/.test(value))) {
    value = ' ' + value + ' ';
  }
  while (++index < context.unsafe.length) {
    const pattern = context.unsafe[index];
    const expression = patternCompile(pattern);
    let match;
    if (!pattern.atBreak) continue;
    while ((match = expression.exec(value))) {
      let position = match.index;
      if (value.charCodeAt(position) === 10 && value.charCodeAt(position - 1) === 13) {
        position--;
      }
      value = value.slice(0, position) + ' ' + value.slice(match.index + 1);
    }
  }
  return sequence + value + sequence;
}
function inlineCodePeek() {
  return '`';
}
export { inlineCode };
