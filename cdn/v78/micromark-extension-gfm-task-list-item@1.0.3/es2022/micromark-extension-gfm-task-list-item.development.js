/* esm.sh - esbuild bundle(micromark-extension-gfm-task-list-item@1.0.3) es2022 development */
// esm-build-b66426dd569ef9f62c15c8aed0be0ccdbaf42fb6-34aa2c3a/node_modules/micromark-extension-gfm-task-list-item/dev/lib/html.js
var gfmTaskListItemHtml = {
  enter: {
    taskListCheck() {
      this.tag('<input type="checkbox" disabled="" ');
    }
  },
  exit: {
    taskListCheck() {
      this.tag('/>');
    },
    taskListCheckValueChecked() {
      this.tag('checked="" ');
    }
  }
};

// esm-build-b66426dd569ef9f62c15c8aed0be0ccdbaf42fb6-34aa2c3a/node_modules/micromark-extension-gfm-task-list-item/dev/lib/syntax.js
import { ok as assert } from '/cdn/v78/uvu@0.5.3/es2022/assert.development.js';
import { factorySpace } from '/cdn/v78/micromark-factory-space@1.0.0/es2022/micromark-factory-space.development.js';
import {
  markdownLineEndingOrSpace,
  markdownLineEnding
} from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { codes } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { types } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/types.development.js';
var tasklistCheck = {
  tokenize: tokenizeTasklistCheck
};
var gfmTaskListItem = {
  text: {
    [codes.leftSquareBracket]: tasklistCheck
  }
};
function tokenizeTasklistCheck(effects, ok, nok) {
  const self = this;
  return open;
  function open(code) {
    assert(code === codes.leftSquareBracket, 'expected `[`');
    if (self.previous !== codes.eof || !self._gfmTasklistFirstContentOfListItem) {
      return nok(code);
    }
    effects.enter('taskListCheck');
    effects.enter('taskListCheckMarker');
    effects.consume(code);
    effects.exit('taskListCheckMarker');
    return inside;
  }
  function inside(code) {
    if (markdownLineEndingOrSpace(code)) {
      effects.enter('taskListCheckValueUnchecked');
      effects.consume(code);
      effects.exit('taskListCheckValueUnchecked');
      return close;
    }
    if (code === codes.uppercaseX || code === codes.lowercaseX) {
      effects.enter('taskListCheckValueChecked');
      effects.consume(code);
      effects.exit('taskListCheckValueChecked');
      return close;
    }
    return nok(code);
  }
  function close(code) {
    if (code === codes.rightSquareBracket) {
      effects.enter('taskListCheckMarker');
      effects.consume(code);
      effects.exit('taskListCheckMarker');
      effects.exit('taskListCheck');
      return effects.check(
        {
          tokenize: spaceThenNonSpace
        },
        ok,
        nok
      );
    }
    return nok(code);
  }
}
function spaceThenNonSpace(effects, ok, nok) {
  const self = this;
  return factorySpace(effects, after, types.whitespace);
  function after(code) {
    const tail = self.events[self.events.length - 1];
    return ((tail && tail[1].type === types.whitespace) || markdownLineEnding(code)) && code !== codes.eof
      ? ok(code)
      : nok(code);
  }
}
export { gfmTaskListItem, gfmTaskListItemHtml };
