/* esm.sh - esbuild bundle(micromark-extension-gfm-table@1.0.5) es2022 development */
// esm-build-d3ff1d2761fab30d2efd258b8879d8492e5c1cdf-8b72a98e/node_modules/micromark-extension-gfm-table/dev/lib/html.js
var alignment = {
  none: '',
  left: ' align="left"',
  right: ' align="right"',
  center: ' align="center"'
};
var gfmTableHtml = {
  enter: {
    table(token) {
      const tableAlign = token._align;
      this.lineEndingIfNeeded();
      this.tag('<table>');
      this.setData('tableAlign', tableAlign);
    },
    tableBody() {
      this.setData('slurpOneLineEnding');
      this.tag('<tbody>');
    },
    tableData() {
      const tableAlign = this.getData('tableAlign');
      const tableColumn = this.getData('tableColumn');
      const align = alignment[tableAlign[tableColumn]];
      if (align === void 0) {
        this.buffer();
      } else {
        this.lineEndingIfNeeded();
        this.tag('<td' + align + '>');
      }
    },
    tableHead() {
      this.lineEndingIfNeeded();
      this.tag('<thead>');
    },
    tableHeader() {
      const tableAlign = this.getData('tableAlign');
      const tableColumn = this.getData('tableColumn');
      const align = alignment[tableAlign[tableColumn]];
      this.lineEndingIfNeeded();
      this.tag('<th' + align + '>');
    },
    tableRow() {
      this.setData('tableColumn', 0);
      this.lineEndingIfNeeded();
      this.tag('<tr>');
    }
  },
  exit: {
    codeTextData(token) {
      let value = this.sliceSerialize(token);
      if (this.getData('tableAlign')) {
        value = value.replace(/\\([\\|])/g, replace);
      }
      this.raw(this.encode(value));
    },
    table() {
      this.setData('tableAlign');
      this.setData('slurpAllLineEndings');
      this.lineEndingIfNeeded();
      this.tag('</table>');
    },
    tableBody() {
      this.lineEndingIfNeeded();
      this.tag('</tbody>');
    },
    tableData() {
      const tableAlign = this.getData('tableAlign');
      const tableColumn = this.getData('tableColumn');
      if (tableColumn in tableAlign) {
        this.tag('</td>');
        this.setData('tableColumn', tableColumn + 1);
      } else {
        this.resume();
      }
    },
    tableHead() {
      this.lineEndingIfNeeded();
      this.tag('</thead>');
      this.setData('slurpOneLineEnding', true);
    },
    tableHeader() {
      const tableColumn = this.getData('tableColumn');
      this.tag('</th>');
      this.setData('tableColumn', tableColumn + 1);
    },
    tableRow() {
      const tableAlign = this.getData('tableAlign');
      let tableColumn = this.getData('tableColumn');
      while (tableColumn < tableAlign.length) {
        this.lineEndingIfNeeded();
        this.tag('<td' + alignment[tableAlign[tableColumn]] + '></td>');
        tableColumn++;
      }
      this.setData('tableColumn', tableColumn);
      this.lineEndingIfNeeded();
      this.tag('</tr>');
    }
  }
};
function replace($0, $1) {
  return $1 === '|' ? $1 : $0;
}

// esm-build-d3ff1d2761fab30d2efd258b8879d8492e5c1cdf-8b72a98e/node_modules/micromark-extension-gfm-table/dev/lib/syntax.js
import { ok as assert } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { factorySpace } from '/cdn/v78/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import {
  markdownLineEnding,
  markdownLineEndingOrSpace,
  markdownSpace
} from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
import { types } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var gfmTable = {
  flow: {
    null: {
      tokenize: tokenizeTable,
      resolve: resolveTable
    }
  }
};
var nextPrefixedOrBlank = {
  tokenize: tokenizeNextPrefixedOrBlank,
  partial: true
};
function resolveTable(events, context) {
  let index = -1;
  let inHead;
  let inDelimiterRow;
  let inRow;
  let contentStart;
  let contentEnd;
  let cellStart;
  let seenCellInRow;
  while (++index < events.length) {
    const token = events[index][1];
    if (inRow) {
      if (token.type === 'temporaryTableCellContent') {
        contentStart = contentStart || index;
        contentEnd = index;
      }
      if ((token.type === 'tableCellDivider' || token.type === 'tableRow') && contentEnd) {
        assert(contentStart, 'expected `contentStart` to be defined if `contentEnd` is');
        const content = {
          type: 'tableContent',
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end
        };
        const text = {
          type: types.chunkText,
          start: content.start,
          end: content.end,
          contentType: constants.contentTypeText
        };
        assert(contentStart, 'expected `contentStart` to be defined if `contentEnd` is');
        events.splice(
          contentStart,
          contentEnd - contentStart + 1,
          ['enter', content, context],
          ['enter', text, context],
          ['exit', text, context],
          ['exit', content, context]
        );
        index -= contentEnd - contentStart - 3;
        contentStart = void 0;
        contentEnd = void 0;
      }
    }
    if (
      events[index][0] === 'exit' &&
      cellStart !== void 0 &&
      cellStart + (seenCellInRow ? 0 : 1) < index &&
      (token.type === 'tableCellDivider' ||
        (token.type === 'tableRow' && (cellStart + 3 < index || events[cellStart][1].type !== types.whitespace)))
    ) {
      const cell = {
        type: inDelimiterRow ? 'tableDelimiter' : inHead ? 'tableHeader' : 'tableData',
        start: events[cellStart][1].start,
        end: events[index][1].end
      };
      events.splice(index + (token.type === 'tableCellDivider' ? 1 : 0), 0, ['exit', cell, context]);
      events.splice(cellStart, 0, ['enter', cell, context]);
      index += 2;
      cellStart = index + 1;
      seenCellInRow = true;
    }
    if (token.type === 'tableRow') {
      inRow = events[index][0] === 'enter';
      if (inRow) {
        cellStart = index + 1;
        seenCellInRow = false;
      }
    }
    if (token.type === 'tableDelimiterRow') {
      inDelimiterRow = events[index][0] === 'enter';
      if (inDelimiterRow) {
        cellStart = index + 1;
        seenCellInRow = false;
      }
    }
    if (token.type === 'tableHead') {
      inHead = events[index][0] === 'enter';
    }
  }
  return events;
}
function tokenizeTable(effects, ok, nok) {
  const self = this;
  const align = [];
  let tableHeaderCount = 0;
  let seenDelimiter;
  let hasDash;
  return start;
  function start(code) {
    effects.enter('table')._align = align;
    effects.enter('tableHead');
    effects.enter('tableRow');
    if (code === codes.verticalBar) {
      return cellDividerHead(code);
    }
    tableHeaderCount++;
    effects.enter('temporaryTableCellContent');
    assert(!markdownLineEndingOrSpace(code), 'expected non-space');
    return inCellContentHead(code);
  }
  function cellDividerHead(code) {
    assert(code === codes.verticalBar, 'expected `|`');
    effects.enter('tableCellDivider');
    effects.consume(code);
    effects.exit('tableCellDivider');
    seenDelimiter = true;
    return cellBreakHead;
  }
  function cellBreakHead(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      return atRowEndHead(code);
    }
    if (markdownSpace(code)) {
      effects.enter(types.whitespace);
      effects.consume(code);
      return inWhitespaceHead;
    }
    if (seenDelimiter) {
      seenDelimiter = void 0;
      tableHeaderCount++;
    }
    if (code === codes.verticalBar) {
      return cellDividerHead(code);
    }
    effects.enter('temporaryTableCellContent');
    return inCellContentHead(code);
  }
  function inWhitespaceHead(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return inWhitespaceHead;
    }
    effects.exit(types.whitespace);
    return cellBreakHead(code);
  }
  function inCellContentHead(code) {
    if (code === codes.eof || code === codes.verticalBar || markdownLineEndingOrSpace(code)) {
      effects.exit('temporaryTableCellContent');
      return cellBreakHead(code);
    }
    effects.consume(code);
    return code === codes.backslash ? inCellContentEscapeHead : inCellContentHead;
  }
  function inCellContentEscapeHead(code) {
    if (code === codes.backslash || code === codes.verticalBar) {
      effects.consume(code);
      return inCellContentHead;
    }
    return inCellContentHead(code);
  }
  function atRowEndHead(code) {
    if (code === codes.eof) {
      return nok(code);
    }
    assert(markdownLineEnding(code), 'expected eol');
    effects.exit('tableRow');
    effects.exit('tableHead');
    const originalInterrupt = self.interrupt;
    self.interrupt = true;
    return effects.attempt(
      {
        tokenize: tokenizeRowEnd,
        partial: true
      },
      function(code2) {
        self.interrupt = originalInterrupt;
        effects.enter('tableDelimiterRow');
        return atDelimiterRowBreak(code2);
      },
      function(code2) {
        self.interrupt = originalInterrupt;
        return nok(code2);
      }
    )(code);
  }
  function atDelimiterRowBreak(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      return rowEndDelimiter(code);
    }
    if (markdownSpace(code)) {
      effects.enter(types.whitespace);
      effects.consume(code);
      return inWhitespaceDelimiter;
    }
    if (code === codes.dash) {
      effects.enter('tableDelimiterFiller');
      effects.consume(code);
      hasDash = true;
      align.push('none');
      return inFillerDelimiter;
    }
    if (code === codes.colon) {
      effects.enter('tableDelimiterAlignment');
      effects.consume(code);
      effects.exit('tableDelimiterAlignment');
      align.push('left');
      return afterLeftAlignment;
    }
    if (code === codes.verticalBar) {
      effects.enter('tableCellDivider');
      effects.consume(code);
      effects.exit('tableCellDivider');
      return atDelimiterRowBreak;
    }
    return nok(code);
  }
  function inWhitespaceDelimiter(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return inWhitespaceDelimiter;
    }
    effects.exit(types.whitespace);
    return atDelimiterRowBreak(code);
  }
  function inFillerDelimiter(code) {
    if (code === codes.dash) {
      effects.consume(code);
      return inFillerDelimiter;
    }
    effects.exit('tableDelimiterFiller');
    if (code === codes.colon) {
      effects.enter('tableDelimiterAlignment');
      effects.consume(code);
      effects.exit('tableDelimiterAlignment');
      align[align.length - 1] = align[align.length - 1] === 'left' ? 'center' : 'right';
      return afterRightAlignment;
    }
    return atDelimiterRowBreak(code);
  }
  function afterLeftAlignment(code) {
    if (code === codes.dash) {
      effects.enter('tableDelimiterFiller');
      effects.consume(code);
      hasDash = true;
      return inFillerDelimiter;
    }
    return nok(code);
  }
  function afterRightAlignment(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      return rowEndDelimiter(code);
    }
    if (markdownSpace(code)) {
      effects.enter(types.whitespace);
      effects.consume(code);
      return inWhitespaceDelimiter;
    }
    if (code === codes.verticalBar) {
      effects.enter('tableCellDivider');
      effects.consume(code);
      effects.exit('tableCellDivider');
      return atDelimiterRowBreak;
    }
    return nok(code);
  }
  function rowEndDelimiter(code) {
    effects.exit('tableDelimiterRow');
    if (!hasDash || tableHeaderCount !== align.length) {
      return nok(code);
    }
    if (code === codes.eof) {
      return tableClose(code);
    }
    assert(markdownLineEnding(code), 'expected eol');
    return effects.check(
      nextPrefixedOrBlank,
      tableClose,
      effects.attempt(
        {
          tokenize: tokenizeRowEnd,
          partial: true
        },
        factorySpace(effects, bodyStart, types.linePrefix, constants.tabSize),
        tableClose
      )
    )(code);
  }
  function tableClose(code) {
    effects.exit('table');
    return ok(code);
  }
  function bodyStart(code) {
    effects.enter('tableBody');
    return rowStartBody(code);
  }
  function rowStartBody(code) {
    effects.enter('tableRow');
    if (code === codes.verticalBar) {
      return cellDividerBody(code);
    }
    effects.enter('temporaryTableCellContent');
    return inCellContentBody(code);
  }
  function cellDividerBody(code) {
    assert(code === codes.verticalBar, 'expected `|`');
    effects.enter('tableCellDivider');
    effects.consume(code);
    effects.exit('tableCellDivider');
    return cellBreakBody;
  }
  function cellBreakBody(code) {
    if (code === codes.eof || markdownLineEnding(code)) {
      return atRowEndBody(code);
    }
    if (markdownSpace(code)) {
      effects.enter(types.whitespace);
      effects.consume(code);
      return inWhitespaceBody;
    }
    if (code === codes.verticalBar) {
      return cellDividerBody(code);
    }
    effects.enter('temporaryTableCellContent');
    return inCellContentBody(code);
  }
  function inWhitespaceBody(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return inWhitespaceBody;
    }
    effects.exit(types.whitespace);
    return cellBreakBody(code);
  }
  function inCellContentBody(code) {
    if (code === codes.eof || code === codes.verticalBar || markdownLineEndingOrSpace(code)) {
      effects.exit('temporaryTableCellContent');
      return cellBreakBody(code);
    }
    effects.consume(code);
    return code === codes.backslash ? inCellContentEscapeBody : inCellContentBody;
  }
  function inCellContentEscapeBody(code) {
    if (code === codes.backslash || code === codes.verticalBar) {
      effects.consume(code);
      return inCellContentBody;
    }
    return inCellContentBody(code);
  }
  function atRowEndBody(code) {
    effects.exit('tableRow');
    if (code === codes.eof) {
      return tableBodyClose(code);
    }
    return effects.check(
      nextPrefixedOrBlank,
      tableBodyClose,
      effects.attempt(
        {
          tokenize: tokenizeRowEnd,
          partial: true
        },
        factorySpace(effects, rowStartBody, types.linePrefix, constants.tabSize),
        tableBodyClose
      )
    )(code);
  }
  function tableBodyClose(code) {
    effects.exit('tableBody');
    return tableClose(code);
  }
  function tokenizeRowEnd(effects2, ok2, nok2) {
    return start2;
    function start2(code) {
      assert(markdownLineEnding(code), 'expected eol');
      effects2.enter(types.lineEnding);
      effects2.consume(code);
      effects2.exit(types.lineEnding);
      return factorySpace(effects2, prefixed, types.linePrefix);
    }
    function prefixed(code) {
      if (self.parser.lazy[self.now().line] || code === codes.eof || markdownLineEnding(code)) {
        return nok2(code);
      }
      const tail = self.events[self.events.length - 1];
      if (
        !self.parser.constructs.disable.null.includes('codeIndented') &&
        tail &&
        tail[1].type === types.linePrefix &&
        tail[2].sliceSerialize(tail[1], true).length >= constants.tabSize
      ) {
        return nok2(code);
      }
      self._gfmTableDynamicInterruptHack = true;
      return effects2.check(
        self.parser.constructs.flow,
        function(code2) {
          self._gfmTableDynamicInterruptHack = false;
          return nok2(code2);
        },
        function(code2) {
          self._gfmTableDynamicInterruptHack = false;
          return ok2(code2);
        }
      )(code);
    }
  }
}
function tokenizeNextPrefixedOrBlank(effects, ok, nok) {
  let size = 0;
  return start;
  function start(code) {
    effects.enter('check');
    effects.consume(code);
    return whitespace;
  }
  function whitespace(code) {
    if (code === codes.virtualSpace || code === codes.space) {
      effects.consume(code);
      size++;
      return size === constants.tabSize ? ok : whitespace;
    }
    if (code === codes.eof || markdownLineEndingOrSpace(code)) {
      return ok(code);
    }
    return nok(code);
  }
}
export { gfmTable, gfmTableHtml };
