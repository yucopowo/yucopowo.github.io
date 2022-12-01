/* esm.sh - esbuild bundle(mdast-util-gfm-autolink-literal@1.0.2) es2022 development */
// esm-build-8cc3bfb4242cef84cebc53b644c62c4204bec218-5e4735e0/node_modules/mdast-util-gfm-autolink-literal/index.js
import { ccount } from '/cdn/v78/ccount@2.0.1/es2022/ccount.development.js';
import { findAndReplace } from '/cdn/v78/mdast-util-find-and-replace@2.1.0/es2022/mdast-util-find-and-replace.development.js';
import {
  unicodePunctuation,
  unicodeWhitespace
} from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
var inConstruct = 'phrasing';
var notInConstruct = ['autolink', 'link', 'image', 'label'];
var gfmAutolinkLiteralFromMarkdown = {
  transforms: [transformGfmAutolinkLiterals],
  enter: {
    literalAutolink: enterLiteralAutolink,
    literalAutolinkEmail: enterLiteralAutolinkValue,
    literalAutolinkHttp: enterLiteralAutolinkValue,
    literalAutolinkWww: enterLiteralAutolinkValue
  },
  exit: {
    literalAutolink: exitLiteralAutolink,
    literalAutolinkEmail: exitLiteralAutolinkEmail,
    literalAutolinkHttp: exitLiteralAutolinkHttp,
    literalAutolinkWww: exitLiteralAutolinkWww
  }
};
var gfmAutolinkLiteralToMarkdown = {
  unsafe: [
    {
      character: '@',
      before: '[+\\-.\\w]',
      after: '[\\-.\\w]',
      inConstruct,
      notInConstruct
    },
    {
      character: '.',
      before: '[Ww]',
      after: '[\\-.\\w]',
      inConstruct,
      notInConstruct
    },
    {
      character: ':',
      before: '[ps]',
      after: '\\/',
      inConstruct,
      notInConstruct
    }
  ]
};
function enterLiteralAutolink(token) {
  this.enter(
    {
      type: 'link',
      title: null,
      url: '',
      children: []
    },
    token
  );
}
function enterLiteralAutolinkValue(token) {
  this.config.enter.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkHttp(token) {
  this.config.exit.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkWww(token) {
  this.config.exit.data.call(this, token);
  const node = this.stack[this.stack.length - 1];
  node.url = 'http://' + this.sliceSerialize(token);
}
function exitLiteralAutolinkEmail(token) {
  this.config.exit.autolinkEmail.call(this, token);
}
function exitLiteralAutolink(token) {
  this.exit(token);
}
function transformGfmAutolinkLiterals(tree) {
  findAndReplace(
    tree,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, findEmail]
    ],
    {
      ignore: ['link', 'linkReference']
    }
  );
}
function findUrl(_, protocol, domain, path, match) {
  let prefix = '';
  if (!previous(match)) {
    return false;
  }
  if (/^w/i.test(protocol)) {
    domain = protocol + domain;
    protocol = '';
    prefix = 'http://';
  }
  if (!isCorrectDomain(domain)) {
    return false;
  }
  const parts = splitUrl(domain + path);
  if (!parts[0]) return false;
  const result = {
    type: 'link',
    title: null,
    url: prefix + protocol + parts[0],
    children: [
      {
        type: 'text',
        value: protocol + parts[0]
      }
    ]
  };
  if (parts[1]) {
    return [
      result,
      {
        type: 'text',
        value: parts[1]
      }
    ];
  }
  return result;
}
function findEmail(_, atext, label, match) {
  if (!previous(match, true) || /[_-\d]$/.test(label)) {
    return false;
  }
  return {
    type: 'link',
    title: null,
    url: 'mailto:' + atext + '@' + label,
    children: [
      {
        type: 'text',
        value: atext + '@' + label
      }
    ]
  };
}
function isCorrectDomain(domain) {
  const parts = domain.split('.');
  if (
    parts.length < 2 ||
    (parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1]))) ||
    (parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2])))
  ) {
    return false;
  }
  return true;
}
function splitUrl(url) {
  const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url);
  let closingParenIndex;
  let openingParens;
  let closingParens;
  let trail;
  if (trailExec) {
    url = url.slice(0, trailExec.index);
    trail = trailExec[0];
    closingParenIndex = trail.indexOf(')');
    openingParens = ccount(url, '(');
    closingParens = ccount(url, ')');
    while (closingParenIndex !== -1 && openingParens > closingParens) {
      url += trail.slice(0, closingParenIndex + 1);
      trail = trail.slice(closingParenIndex + 1);
      closingParenIndex = trail.indexOf(')');
      closingParens++;
    }
  }
  return [url, trail];
}
function previous(match, email) {
  const code = match.input.charCodeAt(match.index - 1);
  return (match.index === 0 || unicodeWhitespace(code) || unicodePunctuation(code)) && (!email || code !== 47);
}
export { gfmAutolinkLiteralFromMarkdown, gfmAutolinkLiteralToMarkdown };
