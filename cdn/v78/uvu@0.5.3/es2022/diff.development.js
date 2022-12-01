/* esm.sh - esbuild bundle(uvu@0.5.3/diff) es2022 development */
// esm-build-95c4415290c9708f0a7545b79bdf53d7cba15075-3385c6e0/node_modules/uvu/diff/index.mjs
import kleur from '/cdn/v78/kleur@4.1.4/es2022/kleur.development.js';
import * as diff from '/cdn/v78/diff@5.0.0/es2022/diff.development.js';
var colors = {
  '--': kleur.red,
  '\xB7\xB7': kleur.grey,
  '++': kleur.green
};
var TITLE = kleur.dim().italic;
var TAB = kleur.dim('\u2192');
var SPACE = kleur.dim('\xB7');
var NL = kleur.dim('\u21B5');
var LOG = (sym, str) => colors[sym](sym + PRETTY(str)) + '\n';
var LINE = (num, x) => kleur.dim('L' + String(num).padStart(x, '0') + ' ');
var PRETTY = str =>
  str
    .replace(/[ ]/g, SPACE)
    .replace(/\t/g, TAB)
    .replace(/(\r?\n)/g, NL);
function line(obj, prev, pad) {
  let char = obj.removed ? '--' : obj.added ? '++' : '\xB7\xB7';
  let arr = obj.value.replace(/\r?\n$/, '').split('\n');
  let i = 0,
    tmp,
    out = '';
  if (obj.added) out += colors[char]().underline(TITLE('Expected:')) + '\n';
  else if (obj.removed) out += colors[char]().underline(TITLE('Actual:')) + '\n';
  for (; i < arr.length; i++) {
    tmp = arr[i];
    if (tmp != null) {
      if (prev) out += LINE(prev + i, pad);
      out += LOG(char, tmp || '\n');
    }
  }
  return out;
}
function arrays(input, expect) {
  let arr = diff.diffArrays(input, expect);
  let i = 0,
    j = 0,
    k = 0,
    tmp,
    val,
    char,
    isObj,
    str;
  let out = LOG('\xB7\xB7', '[');
  for (; i < arr.length; i++) {
    char = (tmp = arr[i]).removed ? '--' : tmp.added ? '++' : '\xB7\xB7';
    if (tmp.added) {
      out += colors[char]().underline(TITLE('Expected:')) + '\n';
    } else if (tmp.removed) {
      out += colors[char]().underline(TITLE('Actual:')) + '\n';
    }
    for (j = 0; j < tmp.value.length; j++) {
      isObj = tmp.value[j] && typeof tmp.value[j] === 'object';
      val = stringify(tmp.value[j]).split(/\r?\n/g);
      for (k = 0; k < val.length; ) {
        str = '  ' + val[k++] + (isObj ? '' : ',');
        if (isObj && k === val.length && j + 1 < tmp.value.length) str += ',';
        out += LOG(char, str);
      }
    }
  }
  return out + LOG('\xB7\xB7', ']');
}
function lines(input, expect, linenum = 0) {
  let i = 0,
    tmp,
    output = '';
  let arr = diff.diffLines(input, expect);
  let pad = String(expect.split(/\r?\n/g).length - linenum).length;
  for (; i < arr.length; i++) {
    output += line((tmp = arr[i]), linenum, pad);
    if (linenum && !tmp.removed) linenum += tmp.count;
  }
  return output;
}
function chars(input, expect) {
  let arr = diff.diffChars(input, expect);
  let i = 0,
    output = '',
    tmp;
  let l1 = input.length;
  let l2 = expect.length;
  let p1 = PRETTY(input);
  let p2 = PRETTY(expect);
  tmp = arr[i];
  if (l1 === l2) {
  } else if (tmp.removed && arr[i + 1]) {
    let del = tmp.count - arr[i + 1].count;
    if (del == 0) {
    } else if (del > 0) {
      expect = ' '.repeat(del) + expect;
      p2 = ' '.repeat(del) + p2;
      l2 += del;
    } else if (del < 0) {
      input = ' '.repeat(-del) + input;
      p1 = ' '.repeat(-del) + p1;
      l1 += -del;
    }
  }
  output += direct(p1, p2, l1, l2);
  if (l1 === l2) {
    for (tmp = '  '; i < l1; i++) {
      tmp += input[i] === expect[i] ? ' ' : '^';
    }
  } else {
    for (tmp = '  '; i < arr.length; i++) {
      tmp += (arr[i].added || arr[i].removed ? '^' : ' ').repeat(Math.max(arr[i].count, 0));
      if (i + 1 < arr.length && ((arr[i].added && arr[i + 1].removed) || (arr[i].removed && arr[i + 1].added))) {
        arr[i + 1].count -= arr[i].count;
      }
    }
  }
  return output + kleur.red(tmp);
}
function direct(input, expect, lenA = String(input).length, lenB = String(expect).length) {
  let gutter = 4;
  let lenC = Math.max(lenA, lenB);
  let typeA = typeof input,
    typeB = typeof expect;
  if (typeA !== typeB) {
    gutter = 2;
    let delA = gutter + lenC - lenA;
    let delB = gutter + lenC - lenB;
    input += ' '.repeat(delA) + kleur.dim(`[${typeA}]`);
    expect += ' '.repeat(delB) + kleur.dim(`[${typeB}]`);
    lenA += delA + typeA.length + 2;
    lenB += delB + typeB.length + 2;
    lenC = Math.max(lenA, lenB);
  }
  let output = colors['++']('++' + expect + ' '.repeat(gutter + lenC - lenB) + TITLE('(Expected)')) + '\n';
  return output + colors['--']('--' + input + ' '.repeat(gutter + lenC - lenA) + TITLE('(Actual)')) + '\n';
}
function sort(input, expect) {
  var k,
    i = 0,
    tmp,
    isArr = Array.isArray(input);
  var keys = [],
    out = isArr ? Array(input.length) : {};
  if (isArr) {
    for (i = 0; i < out.length; i++) {
      tmp = input[i];
      if (!tmp || typeof tmp !== 'object') out[i] = tmp;
      else out[i] = sort(tmp, expect[i]);
    }
  } else {
    for (k in expect) keys.push(k);
    for (; i < keys.length; i++) {
      if (Object.prototype.hasOwnProperty.call(input, (k = keys[i]))) {
        if (!(tmp = input[k]) || typeof tmp !== 'object') out[k] = tmp;
        else out[k] = sort(tmp, expect[k]);
      }
    }
    for (k in input) {
      if (!out.hasOwnProperty(k)) {
        out[k] = input[k];
      }
    }
  }
  return out;
}
function circular() {
  var cache = /* @__PURE__ */ new Set();
  return function print(key, val) {
    if (val === void 0) return '[__VOID__]';
    if (typeof val === 'number' && val !== val) return '[__NAN__]';
    if (!val || typeof val !== 'object') return val;
    if (cache.has(val)) return '[Circular]';
    cache.add(val);
    return val;
  };
}
function stringify(input) {
  return JSON.stringify(input, circular(), 2)
    .replace(/"\[__NAN__\]"/g, 'NaN')
    .replace(/"\[__VOID__\]"/g, 'undefined');
}
function compare(input, expect) {
  if (Array.isArray(expect) && Array.isArray(input)) return arrays(input, expect);
  if (expect instanceof RegExp) return chars('' + input, '' + expect);
  let isA = input && typeof input == 'object';
  let isB = expect && typeof expect == 'object';
  if (isA && isB) input = sort(input, expect);
  if (isB) expect = stringify(expect);
  if (isA) input = stringify(input);
  if (expect && typeof expect == 'object') {
    input = stringify(sort(input, expect));
    expect = stringify(expect);
  }
  isA = typeof input == 'string';
  isB = typeof expect == 'string';
  if (isA && /\r?\n/.test(input)) return lines(input, '' + expect);
  if (isB && /\r?\n/.test(expect)) return lines('' + input, expect);
  if (isA && isB) return chars(input, expect);
  return direct(input, expect);
}
export { arrays, chars, circular, compare, direct, lines, sort, stringify };
