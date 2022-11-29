/* esm.sh - esbuild bundle(micromark-extension-mdxjs-esm@1.0.3) es2022 development */
// esm-build-06b7fa17e9bddfe62f308db65452be14d6318ebb-00c6901d/node_modules/micromark-extension-mdxjs-esm/dev/lib/syntax.js
import { ok as assert } from '/cdn/v99/uvu@0.5.6/es2022/assert.development.js';
import { blankLine } from '/cdn/v99/micromark-core-commonmark@1.0.6/es2022/micromark-core-commonmark.development.js';
import {
  markdownLineEnding,
  unicodeWhitespace
} from '/cdn/v99/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { eventsToAcorn } from '/cdn/v99/micromark-util-events-to-acorn@1.2.0/es2022/micromark-util-events-to-acorn.development.js';
import { codes } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { types } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/types.development.js';
import { positionFromEstree } from '/cdn/v99/unist-util-position-from-estree@1.1.1/es2022/unist-util-position-from-estree.development.js';
import { VFileMessage } from '/cdn/v99/vfile-message@3.1.3/es2022/vfile-message.development.js';
var nextBlankConstruct = {
  tokenize: tokenizeNextBlank,
  partial: true
};
var allowedAcornTypes = /* @__PURE__ */ new Set([
  'ExportAllDeclaration',
  'ExportDefaultDeclaration',
  'ExportNamedDeclaration',
  'ImportDeclaration'
]);
function mdxjsEsm(options) {
  const exportImportConstruct = {
    tokenize: tokenizeExportImport,
    concrete: true
  };
  if (!options || !options.acorn || !options.acorn.parse) {
    throw new Error('Expected an `acorn` instance passed in as `options.acorn`');
  }
  const acorn = options.acorn;
  const acornOptions = Object.assign(
    {
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    options.acornOptions
  );
  return {
    flow: {
      [codes.lowercaseE]: exportImportConstruct,
      [codes.lowercaseI]: exportImportConstruct
    }
  };
  function tokenizeExportImport(effects, ok, nok) {
    const self = this;
    const definedModuleSpecifiers = self.parser.definedModuleSpecifiers || (self.parser.definedModuleSpecifiers = []);
    const eventStart = this.events.length + 1;
    let index = 0;
    let buffer;
    return self.interrupt ? nok : start;
    function start(code) {
      assert(code === codes.lowercaseE || code === codes.lowercaseI, 'expected `e` or `i`');
      if (self.now().column > 1) return nok(code);
      buffer = code === codes.lowercaseE ? 'export' : 'import';
      effects.enter('mdxjsEsm');
      effects.enter('mdxjsEsmData');
      return keyword(code);
    }
    function keyword(code) {
      if (code === buffer.charCodeAt(index++)) {
        effects.consume(code);
        return index === buffer.length ? after : keyword;
      }
      return nok(code);
    }
    function after(code) {
      if (unicodeWhitespace(code)) {
        effects.consume(code);
        return rest;
      }
      return nok(code);
    }
    function rest(code) {
      if (code === codes.eof) {
        return atEndOfData(code);
      }
      if (markdownLineEnding(code)) {
        return effects.check(nextBlankConstruct, atEndOfData, atEol)(code);
      }
      effects.consume(code);
      return rest;
    }
    function atEol(code) {
      effects.exit('mdxjsEsmData');
      return lineStart(code);
    }
    function lineStart(code) {
      if (markdownLineEnding(code)) {
        effects.enter(types.lineEnding);
        effects.consume(code);
        effects.exit(types.lineEnding);
        return lineStart;
      }
      if (code === codes.eof) {
        return atEnd(code);
      }
      effects.enter('mdxjsEsmData');
      return rest(code);
    }
    function atEndOfData(code) {
      effects.exit('mdxjsEsmData');
      return atEnd(code);
    }
    function atEnd(code) {
      let index2 = -1;
      const result = eventsToAcorn(self.events.slice(eventStart), {
        acorn,
        acornOptions,
        prefix: definedModuleSpecifiers.length > 0 ? 'var ' + definedModuleSpecifiers.join(',') + '\n' : ''
      });
      if (code !== codes.eof && result.swallow) {
        return lineStart(code);
      }
      if (result.error) {
        throw new VFileMessage(
          'Could not parse import/exports with acorn: ' + String(result.error),
          {
            line: result.error.loc.line,
            column: result.error.loc.column + 1,
            offset: result.error.pos
          },
          'micromark-extension-mdxjs-esm:acorn'
        );
      }
      assert(result.estree, 'expected `estree` to be defined');
      if (definedModuleSpecifiers.length > 0) {
        result.estree.body.shift();
      }
      while (++index2 < result.estree.body.length) {
        const node = result.estree.body[index2];
        if (!allowedAcornTypes.has(node.type)) {
          throw new VFileMessage(
            'Unexpected `' + node.type + '` in code: only import/exports are supported',
            positionFromEstree(node),
            'micromark-extension-mdxjs-esm:non-esm'
          );
        }
        if (node.type === 'ImportDeclaration' && !self.interrupt) {
          let index3 = -1;
          while (++index3 < node.specifiers.length) {
            definedModuleSpecifiers.push(node.specifiers[index3].local.name);
          }
        }
      }
      Object.assign(
        effects.exit('mdxjsEsm'),
        options.addResult
          ? {
              estree: result.estree
            }
          : void 0
      );
      return ok(code);
    }
  }
}
function tokenizeNextBlank(effects, ok, nok) {
  return start;
  function start(code) {
    effects.exit('mdxjsEsmData');
    effects.enter(types.lineEndingBlank);
    effects.consume(code);
    effects.exit(types.lineEndingBlank);
    return effects.attempt(blankLine, ok, nok);
  }
}
export { mdxjsEsm };
