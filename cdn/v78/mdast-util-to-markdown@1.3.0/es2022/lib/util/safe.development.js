/* esm.sh - esbuild bundle(mdast-util-to-markdown@1.3.0/lib/util/safe.js) es2022 development */
// esm-build-610fc4fae6adc0a84a17f7da6c045db1b6b1a17d-2e81dc7f/node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js
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

// esm-build-610fc4fae6adc0a84a17f7da6c045db1b6b1a17d-2e81dc7f/node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
function patternInScope(stack, pattern) {
  return listInScope(stack, pattern.inConstruct, true) && !listInScope(stack, pattern.notInConstruct, false);
}
function listInScope(stack, list, none) {
  if (!list) {
    return none;
  }
  if (typeof list === 'string') {
    list = [list];
  }
  let index = -1;
  while (++index < list.length) {
    if (stack.includes(list[index])) {
      return true;
    }
  }
  return false;
}

// esm-build-610fc4fae6adc0a84a17f7da6c045db1b6b1a17d-2e81dc7f/node_modules/mdast-util-to-markdown/lib/util/safe.js
function safe(context, input, config) {
  const value = (config.before || '') + (input || '') + (config.after || '');
  const positions = [];
  const result = [];
  const infos = {};
  let index = -1;
  while (++index < context.unsafe.length) {
    const pattern = context.unsafe[index];
    if (!patternInScope(context.stack, pattern)) {
      continue;
    }
    const expression = patternCompile(pattern);
    let match;
    while ((match = expression.exec(value))) {
      const before = 'before' in pattern || Boolean(pattern.atBreak);
      const after = 'after' in pattern;
      const position = match.index + (before ? match[1].length : 0);
      if (positions.includes(position)) {
        if (infos[position].before && !before) {
          infos[position].before = false;
        }
        if (infos[position].after && !after) {
          infos[position].after = false;
        }
      } else {
        positions.push(position);
        infos[position] = {
          before,
          after
        };
      }
    }
  }
  positions.sort(numerical);
  let start = config.before ? config.before.length : 0;
  const end = value.length - (config.after ? config.after.length : 0);
  index = -1;
  while (++index < positions.length) {
    const position = positions[index];
    if (position < start || position >= end) {
      continue;
    }
    if (
      (position + 1 < end &&
        positions[index + 1] === position + 1 &&
        infos[position].after &&
        !infos[position + 1].before &&
        !infos[position + 1].after) ||
      (positions[index - 1] === position - 1 &&
        infos[position].before &&
        !infos[position - 1].before &&
        !infos[position - 1].after)
    ) {
      continue;
    }
    if (start !== position) {
      result.push(escapeBackslashes(value.slice(start, position), '\\'));
    }
    start = position;
    if (
      /[!-/:-@[-`{-~]/.test(value.charAt(position)) &&
      (!config.encode || !config.encode.includes(value.charAt(position)))
    ) {
      result.push('\\');
    } else {
      result.push(
        '&#x' +
          value
            .charCodeAt(position)
            .toString(16)
            .toUpperCase() +
          ';'
      );
      start++;
    }
  }
  result.push(escapeBackslashes(value.slice(start, end), config.after));
  return result.join('');
}
function numerical(a, b) {
  return a - b;
}
function escapeBackslashes(value, after) {
  const expression = /\\(?=[!-/:-@[-`{-~])/g;
  const positions = [];
  const results = [];
  const whole = value + after;
  let index = -1;
  let start = 0;
  let match;
  while ((match = expression.exec(whole))) {
    positions.push(match.index);
  }
  while (++index < positions.length) {
    if (start !== positions[index]) {
      results.push(value.slice(start, positions[index]));
    }
    results.push('\\');
    start = positions[index];
  }
  results.push(value.slice(start));
  return results.join('');
}
export { safe };
