/* esm.sh - esbuild bundle(micromark-extension-gfm-autolink-literal@1.0.3) es2022 development */
// esm-build-7c4e15bdc147835504afd4cd336abee80c066295-ce44af67/node_modules/micromark-extension-gfm-autolink-literal/dev/lib/syntax.js
import { ok as assert } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import {
  asciiAlpha,
  asciiAlphanumeric,
  asciiControl,
  asciiDigit,
  markdownLineEndingOrSpace,
  markdownLineEnding,
  unicodePunctuation,
  unicodeWhitespace
} from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
var www = {
  tokenize: tokenizeWww,
  partial: true
};
var domain = {
  tokenize: tokenizeDomain,
  partial: true
};
var path = {
  tokenize: tokenizePath,
  partial: true
};
var punctuation = {
  tokenize: tokenizePunctuation,
  partial: true
};
var namedCharacterReference = {
  tokenize: tokenizeNamedCharacterReference,
  partial: true
};
var wwwAutolink = {
  tokenize: tokenizeWwwAutolink,
  previous: previousWww
};
var httpAutolink = {
  tokenize: tokenizeHttpAutolink,
  previous: previousHttp
};
var emailAutolink = {
  tokenize: tokenizeEmailAutolink,
  previous: previousEmail
};
var text = {};
var gfmAutolinkLiteral = {
  text
};
var code = codes.digit0;
while (code < codes.leftCurlyBrace) {
  text[code] = emailAutolink;
  code++;
  if (code === codes.colon) code = codes.uppercaseA;
  else if (code === codes.leftSquareBracket) code = codes.lowercaseA;
}
text[codes.plusSign] = emailAutolink;
text[codes.dash] = emailAutolink;
text[codes.dot] = emailAutolink;
text[codes.underscore] = emailAutolink;
text[codes.uppercaseH] = [emailAutolink, httpAutolink];
text[codes.lowercaseH] = [emailAutolink, httpAutolink];
text[codes.uppercaseW] = [emailAutolink, wwwAutolink];
text[codes.lowercaseW] = [emailAutolink, wwwAutolink];
function tokenizeEmailAutolink(effects, ok, nok) {
  const self = this;
  let hasDot;
  let hasDigitInLastSegment;
  return start;
  function start(code2) {
    if (!gfmAtext(code2) || !previousEmail(self.previous) || previousUnbalanced(self.events)) {
      return nok(code2);
    }
    effects.enter('literalAutolink');
    effects.enter('literalAutolinkEmail');
    return atext(code2);
  }
  function atext(code2) {
    if (gfmAtext(code2)) {
      effects.consume(code2);
      return atext;
    }
    if (code2 === codes.atSign) {
      effects.consume(code2);
      return label;
    }
    return nok(code2);
  }
  function label(code2) {
    if (code2 === codes.dot) {
      return effects.check(punctuation, done, dotContinuation)(code2);
    }
    if (code2 === codes.dash || code2 === codes.underscore) {
      return effects.check(punctuation, nok, dashOrUnderscoreContinuation)(code2);
    }
    if (asciiAlphanumeric(code2)) {
      if (!hasDigitInLastSegment && asciiDigit(code2)) {
        hasDigitInLastSegment = true;
      }
      effects.consume(code2);
      return label;
    }
    return done(code2);
  }
  function dotContinuation(code2) {
    effects.consume(code2);
    hasDot = true;
    hasDigitInLastSegment = void 0;
    return label;
  }
  function dashOrUnderscoreContinuation(code2) {
    effects.consume(code2);
    return afterDashOrUnderscore;
  }
  function afterDashOrUnderscore(code2) {
    if (code2 === codes.dot) {
      return effects.check(punctuation, nok, dotContinuation)(code2);
    }
    return label(code2);
  }
  function done(code2) {
    if (hasDot && !hasDigitInLastSegment) {
      effects.exit('literalAutolinkEmail');
      effects.exit('literalAutolink');
      return ok(code2);
    }
    return nok(code2);
  }
}
function tokenizeWwwAutolink(effects, ok, nok) {
  const self = this;
  return start;
  function start(code2) {
    if (
      (code2 !== codes.uppercaseW && code2 !== codes.lowercaseW) ||
      !previousWww(self.previous) ||
      previousUnbalanced(self.events)
    ) {
      return nok(code2);
    }
    effects.enter('literalAutolink');
    effects.enter('literalAutolinkWww');
    return effects.check(www, effects.attempt(domain, effects.attempt(path, done), nok), nok)(code2);
  }
  function done(code2) {
    effects.exit('literalAutolinkWww');
    effects.exit('literalAutolink');
    return ok(code2);
  }
}
function tokenizeHttpAutolink(effects, ok, nok) {
  const self = this;
  return start;
  function start(code2) {
    if (
      (code2 !== codes.uppercaseH && code2 !== codes.lowercaseH) ||
      !previousHttp(self.previous) ||
      previousUnbalanced(self.events)
    ) {
      return nok(code2);
    }
    effects.enter('literalAutolink');
    effects.enter('literalAutolinkHttp');
    effects.consume(code2);
    return t1;
  }
  function t1(code2) {
    if (code2 === codes.uppercaseT || code2 === codes.lowercaseT) {
      effects.consume(code2);
      return t2;
    }
    return nok(code2);
  }
  function t2(code2) {
    if (code2 === codes.uppercaseT || code2 === codes.lowercaseT) {
      effects.consume(code2);
      return p;
    }
    return nok(code2);
  }
  function p(code2) {
    if (code2 === codes.uppercaseP || code2 === codes.lowercaseP) {
      effects.consume(code2);
      return s;
    }
    return nok(code2);
  }
  function s(code2) {
    if (code2 === codes.uppercaseS || code2 === codes.lowercaseS) {
      effects.consume(code2);
      return colon;
    }
    return colon(code2);
  }
  function colon(code2) {
    if (code2 === codes.colon) {
      effects.consume(code2);
      return slash1;
    }
    return nok(code2);
  }
  function slash1(code2) {
    if (code2 === codes.slash) {
      effects.consume(code2);
      return slash2;
    }
    return nok(code2);
  }
  function slash2(code2) {
    if (code2 === codes.slash) {
      effects.consume(code2);
      return after;
    }
    return nok(code2);
  }
  function after(code2) {
    return code2 === codes.eof || asciiControl(code2) || unicodeWhitespace(code2) || unicodePunctuation(code2)
      ? nok(code2)
      : effects.attempt(domain, effects.attempt(path, done), nok)(code2);
  }
  function done(code2) {
    effects.exit('literalAutolinkHttp');
    effects.exit('literalAutolink');
    return ok(code2);
  }
}
function tokenizeWww(effects, ok, nok) {
  return start;
  function start(code2) {
    assert(code2 === codes.uppercaseW || code2 === codes.lowercaseW, 'expected `w`');
    effects.consume(code2);
    return w2;
  }
  function w2(code2) {
    if (code2 === codes.uppercaseW || code2 === codes.lowercaseW) {
      effects.consume(code2);
      return w3;
    }
    return nok(code2);
  }
  function w3(code2) {
    if (code2 === codes.uppercaseW || code2 === codes.lowercaseW) {
      effects.consume(code2);
      return dot;
    }
    return nok(code2);
  }
  function dot(code2) {
    if (code2 === codes.dot) {
      effects.consume(code2);
      return after;
    }
    return nok(code2);
  }
  function after(code2) {
    return code2 === codes.eof || markdownLineEnding(code2) ? nok(code2) : ok(code2);
  }
}
function tokenizeDomain(effects, ok, nok) {
  let hasUnderscoreInLastSegment;
  let hasUnderscoreInLastLastSegment;
  return domain2;
  function domain2(code2) {
    if (code2 === codes.ampersand) {
      return effects.check(namedCharacterReference, done, punctuationContinuation)(code2);
    }
    if (code2 === codes.dot || code2 === codes.underscore) {
      return effects.check(punctuation, done, punctuationContinuation)(code2);
    }
    if (
      code2 === codes.eof ||
      asciiControl(code2) ||
      unicodeWhitespace(code2) ||
      (code2 !== codes.dash && unicodePunctuation(code2))
    ) {
      return done(code2);
    }
    effects.consume(code2);
    return domain2;
  }
  function punctuationContinuation(code2) {
    if (code2 === codes.dot) {
      hasUnderscoreInLastLastSegment = hasUnderscoreInLastSegment;
      hasUnderscoreInLastSegment = void 0;
      effects.consume(code2);
      return domain2;
    }
    if (code2 === codes.underscore) hasUnderscoreInLastSegment = true;
    effects.consume(code2);
    return domain2;
  }
  function done(code2) {
    if (!hasUnderscoreInLastLastSegment && !hasUnderscoreInLastSegment) {
      return ok(code2);
    }
    return nok(code2);
  }
}
function tokenizePath(effects, ok) {
  let balance = 0;
  return inPath;
  function inPath(code2) {
    if (code2 === codes.ampersand) {
      return effects.check(namedCharacterReference, ok, continuedPunctuation)(code2);
    }
    if (code2 === codes.leftParenthesis) {
      balance++;
    }
    if (code2 === codes.rightParenthesis) {
      return effects.check(punctuation, parenAtPathEnd, continuedPunctuation)(code2);
    }
    if (pathEnd(code2)) {
      return ok(code2);
    }
    if (trailingPunctuation(code2)) {
      return effects.check(punctuation, ok, continuedPunctuation)(code2);
    }
    effects.consume(code2);
    return inPath;
  }
  function continuedPunctuation(code2) {
    effects.consume(code2);
    return inPath;
  }
  function parenAtPathEnd(code2) {
    balance--;
    return balance < 0 ? ok(code2) : continuedPunctuation(code2);
  }
}
function tokenizeNamedCharacterReference(effects, ok, nok) {
  return start;
  function start(code2) {
    assert(code2 === codes.ampersand, 'expected `&`');
    effects.consume(code2);
    return inside;
  }
  function inside(code2) {
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return inside;
    }
    if (code2 === codes.semicolon) {
      effects.consume(code2);
      return after;
    }
    return nok(code2);
  }
  function after(code2) {
    return pathEnd(code2) ? ok(code2) : nok(code2);
  }
}
function tokenizePunctuation(effects, ok, nok) {
  return start;
  function start(code2) {
    assert(code2 === codes.dash || trailingPunctuation(code2), 'expected punctuation');
    effects.consume(code2);
    return after;
  }
  function after(code2) {
    if (trailingPunctuation(code2)) {
      effects.consume(code2);
      return after;
    }
    return pathEnd(code2) ? ok(code2) : nok(code2);
  }
}
function trailingPunctuation(code2) {
  return (
    code2 === codes.exclamationMark ||
    code2 === codes.quotationMark ||
    code2 === codes.apostrophe ||
    code2 === codes.rightParenthesis ||
    code2 === codes.asterisk ||
    code2 === codes.comma ||
    code2 === codes.dot ||
    code2 === codes.colon ||
    code2 === codes.semicolon ||
    code2 === codes.lessThan ||
    code2 === codes.questionMark ||
    code2 === codes.underscore ||
    code2 === codes.tilde
  );
}
function pathEnd(code2) {
  return code2 === codes.eof || code2 === codes.lessThan || markdownLineEndingOrSpace(code2);
}
function gfmAtext(code2) {
  return (
    code2 === codes.plusSign ||
    code2 === codes.dash ||
    code2 === codes.dot ||
    code2 === codes.underscore ||
    asciiAlphanumeric(code2)
  );
}
function previousWww(code2) {
  return (
    code2 === codes.eof ||
    code2 === codes.leftParenthesis ||
    code2 === codes.asterisk ||
    code2 === codes.underscore ||
    code2 === codes.tilde ||
    markdownLineEndingOrSpace(code2)
  );
}
function previousHttp(code2) {
  return code2 === codes.eof || !asciiAlpha(code2);
}
function previousEmail(code2) {
  return code2 !== codes.slash && previousHttp(code2);
}
function previousUnbalanced(events) {
  let index = events.length;
  let result = false;
  while (index--) {
    const token = events[index][1];
    if ((token.type === 'labelLink' || token.type === 'labelImage') && !token._balanced) {
      result = true;
      break;
    }
    if (token._gfmAutolinkLiteralWalkedInto) {
      result = false;
      break;
    }
  }
  if (events.length > 0 && !result) {
    events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
  }
  return result;
}

// esm-build-7c4e15bdc147835504afd4cd336abee80c066295-ce44af67/node_modules/micromark-extension-gfm-autolink-literal/dev/lib/html.js
import { sanitizeUri } from '/cdn/v78/micromark-util-sanitize-uri@1.0.0/es2022/micromark-util-sanitize-uri.development.js';
var gfmAutolinkLiteralHtml = {
  exit: {
    literalAutolinkEmail,
    literalAutolinkHttp,
    literalAutolinkWww
  }
};
function literalAutolinkWww(token) {
  anchorFromToken.call(this, token, 'http://');
}
function literalAutolinkEmail(token) {
  anchorFromToken.call(this, token, 'mailto:');
}
function literalAutolinkHttp(token) {
  anchorFromToken.call(this, token);
}
function anchorFromToken(token, protocol) {
  const url = this.sliceSerialize(token);
  this.tag('<a href="' + sanitizeUri((protocol || '') + url) + '">');
  this.raw(this.encode(url));
  this.tag('</a>');
}
export { gfmAutolinkLiteral, gfmAutolinkLiteralHtml };
