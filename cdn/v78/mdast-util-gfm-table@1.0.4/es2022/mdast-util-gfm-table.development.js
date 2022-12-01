/* esm.sh - esbuild bundle(mdast-util-gfm-table@1.0.4) es2022 development */
// esm-build-1954a5b07a35d6136760a2612731250d5cdd4303-95423fb7/node_modules/mdast-util-gfm-table/lib/index.js
import { containerPhrasing } from '/cdn/v78/mdast-util-to-markdown@1.3.0/es2022/lib/util/container-phrasing.development.js';
import { inlineCode } from '/cdn/v78/mdast-util-to-markdown@1.3.0/es2022/lib/handle/inline-code.development.js';
import { markdownTable } from '/cdn/v78/markdown-table@3.0.2/es2022/markdown-table.development.js';
var gfmTableFromMarkdown = {
  enter: {
    table: enterTable,
    tableData: enterCell,
    tableHeader: enterCell,
    tableRow: enterRow
  },
  exit: {
    codeText: exitCodeText,
    table: exitTable,
    tableData: exit,
    tableHeader: exit,
    tableRow: exit
  }
};
function enterTable(token) {
  const align = token._align;
  this.enter(
    {
      type: 'table',
      align: align.map(d => (d === 'none' ? null : d)),
      children: []
    },
    token
  );
  this.setData('inTable', true);
}
function exitTable(token) {
  this.exit(token);
  this.setData('inTable');
}
function enterRow(token) {
  this.enter(
    {
      type: 'tableRow',
      children: []
    },
    token
  );
}
function exit(token) {
  this.exit(token);
}
function enterCell(token) {
  this.enter(
    {
      type: 'tableCell',
      children: []
    },
    token
  );
}
function exitCodeText(token) {
  let value = this.resume();
  if (this.getData('inTable')) {
    value = value.replace(/\\([\\|])/g, replace);
  }
  const node = this.stack[this.stack.length - 1];
  node.value = value;
  this.exit(token);
}
function replace($0, $1) {
  return $1 === '|' ? $1 : $0;
}
function gfmTableToMarkdown(options) {
  const settings = options || {};
  const padding = settings.tableCellPadding;
  const alignDelimiters = settings.tablePipeAlign;
  const stringLength = settings.stringLength;
  const around = padding ? ' ' : '|';
  return {
    unsafe: [
      {
        character: '\r',
        inConstruct: 'tableCell'
      },
      {
        character: '\n',
        inConstruct: 'tableCell'
      },
      {
        atBreak: true,
        character: '|',
        after: '[	 :-]'
      },
      {
        character: '|',
        inConstruct: 'tableCell'
      },
      {
        atBreak: true,
        character: ':',
        after: '-'
      },
      {
        atBreak: true,
        character: '-',
        after: '[:|-]'
      }
    ],
    handlers: {
      table: handleTable,
      tableRow: handleTableRow,
      tableCell: handleTableCell,
      inlineCode: inlineCodeWithTable
    }
  };
  function handleTable(node, _, context, safeOptions) {
    return serializeData(handleTableAsData(node, context, safeOptions), node.align);
  }
  function handleTableRow(node, _, context, safeOptions) {
    const row = handleTableRowAsData(node, context, safeOptions);
    const value = serializeData([row]);
    return value.slice(0, value.indexOf('\n'));
  }
  function handleTableCell(node, _, context, safeOptions) {
    const exit2 = context.enter('tableCell');
    const subexit = context.enter('phrasing');
    const value = containerPhrasing(node, context, {
      ...safeOptions,
      before: around,
      after: around
    });
    subexit();
    exit2();
    return value;
  }
  function serializeData(matrix, align) {
    return markdownTable(matrix, {
      align,
      alignDelimiters,
      padding,
      stringLength
    });
  }
  function handleTableAsData(node, context, safeOptions) {
    const children = node.children;
    let index = -1;
    const result = [];
    const subexit = context.enter('table');
    while (++index < children.length) {
      result[index] = handleTableRowAsData(children[index], context, safeOptions);
    }
    subexit();
    return result;
  }
  function handleTableRowAsData(node, context, safeOptions) {
    const children = node.children;
    let index = -1;
    const result = [];
    const subexit = context.enter('tableRow');
    while (++index < children.length) {
      result[index] = handleTableCell(children[index], node, context, safeOptions);
    }
    subexit();
    return result;
  }
  function inlineCodeWithTable(node, parent, context) {
    let value = inlineCode(node, parent, context);
    if (context.stack.includes('tableCell')) {
      value = value.replace(/\|/g, '\\$&');
    }
    return value;
  }
}
export { gfmTableFromMarkdown, gfmTableToMarkdown };
