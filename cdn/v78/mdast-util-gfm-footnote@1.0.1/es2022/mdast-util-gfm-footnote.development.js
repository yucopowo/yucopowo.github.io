/* esm.sh - esbuild bundle(mdast-util-gfm-footnote@1.0.1) es2022 development */
// esm-build-d6a9b688a0cd9374d9d275ece8afcb8a2ada0bde-70f838e4/node_modules/mdast-util-gfm-footnote/index.js
import { normalizeIdentifier } from '/cdn/v78/micromark-util-normalize-identifier@1.0.0/es2022/micromark-util-normalize-identifier.development.js';
import { association } from '/cdn/v78/mdast-util-to-markdown@1.3.0/es2022/lib/util/association.development.js';
import { containerFlow } from '/cdn/v78/mdast-util-to-markdown@1.3.0/es2022/lib/util/container-flow.development.js';
import { indentLines } from '/cdn/v78/mdast-util-to-markdown@1.3.0/es2022/lib/util/indent-lines.development.js';
import { safe } from '/cdn/v78/mdast-util-to-markdown@1.3.0/es2022/lib/util/safe.development.js';
import { track } from '/cdn/v78/mdast-util-to-markdown@1.3.0/es2022/lib/util/track.development.js';
function gfmFootnoteFromMarkdown() {
  return {
    enter: {
      gfmFootnoteDefinition: enterFootnoteDefinition,
      gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
      gfmFootnoteCall: enterFootnoteCall,
      gfmFootnoteCallString: enterFootnoteCallString
    },
    exit: {
      gfmFootnoteDefinition: exitFootnoteDefinition,
      gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
      gfmFootnoteCall: exitFootnoteCall,
      gfmFootnoteCallString: exitFootnoteCallString
    }
  };
  function enterFootnoteDefinition(token) {
    this.enter(
      {
        type: 'footnoteDefinition',
        identifier: '',
        label: '',
        children: []
      },
      token
    );
  }
  function enterFootnoteDefinitionLabelString() {
    this.buffer();
  }
  function exitFootnoteDefinitionLabelString(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function exitFootnoteDefinition(token) {
    this.exit(token);
  }
  function enterFootnoteCall(token) {
    this.enter(
      {
        type: 'footnoteReference',
        identifier: '',
        label: ''
      },
      token
    );
  }
  function enterFootnoteCallString() {
    this.buffer();
  }
  function exitFootnoteCallString(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function exitFootnoteCall(token) {
    this.exit(token);
  }
}
function gfmFootnoteToMarkdown() {
  footnoteReference.peek = footnoteReferencePeek;
  return {
    unsafe: [
      {
        character: '[',
        inConstruct: ['phrasing', 'label', 'reference']
      }
    ],
    handlers: {
      footnoteDefinition,
      footnoteReference
    }
  };
  function footnoteReference(node, _, context, safeOptions) {
    const tracker = track(safeOptions);
    let value = tracker.move('[^');
    const exit = context.enter('footnoteReference');
    const subexit = context.enter('reference');
    value += tracker.move(
      safe(context, association(node), {
        ...tracker.current(),
        before: value,
        after: ']'
      })
    );
    subexit();
    exit();
    value += tracker.move(']');
    return value;
  }
  function footnoteReferencePeek() {
    return '[';
  }
  function footnoteDefinition(node, _, context, safeOptions) {
    const tracker = track(safeOptions);
    let value = tracker.move('[^');
    const exit = context.enter('footnoteDefinition');
    const subexit = context.enter('label');
    value += tracker.move(
      safe(context, association(node), {
        ...tracker.current(),
        before: value,
        after: ']'
      })
    );
    subexit();
    value += tracker.move(']:' + (node.children && node.children.length > 0 ? ' ' : ''));
    tracker.shift(4);
    value += tracker.move(indentLines(containerFlow(node, context, tracker.current()), map));
    exit();
    return value;
    function map(line, index, blank) {
      if (index) {
        return (blank ? '' : '    ') + line;
      }
      return line;
    }
  }
}
export { gfmFootnoteFromMarkdown, gfmFootnoteToMarkdown };
