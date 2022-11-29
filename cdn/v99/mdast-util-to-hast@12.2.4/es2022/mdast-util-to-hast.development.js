/* esm.sh - esbuild bundle(mdast-util-to-hast@12.2.4) es2022 development */
// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/traverse.js
import { u } from '/cdn/v99/unist-builder@3.0.0/es2022/unist-builder.development.js';
var own = {}.hasOwnProperty;
function unknown(h, node) {
  const data = node.data || {};
  if ('value' in node && !(own.call(data, 'hName') || own.call(data, 'hProperties') || own.call(data, 'hChildren'))) {
    return h.augment(node, u('text', node.value));
  }
  return h(node, 'div', all(h, node));
}
function one(h, node, parent) {
  const type = node && node.type;
  let fn;
  if (!type) {
    throw new Error('Expected node, got `' + node + '`');
  }
  if (own.call(h.handlers, type)) {
    fn = h.handlers[type];
  } else if (h.passThrough && h.passThrough.includes(type)) {
    fn = returnNode;
  } else {
    fn = h.unknownHandler;
  }
  return (typeof fn === 'function' ? fn : unknown)(h, node, parent);
}
function returnNode(h, node) {
  return 'children' in node
    ? {
        ...node,
        children: all(h, node)
      }
    : node;
}
function all(h, parent) {
  const values = [];
  if ('children' in parent) {
    const nodes = parent.children;
    let index = -1;
    while (++index < nodes.length) {
      const result = one(h, nodes[index], parent);
      if (result) {
        if (index && nodes[index - 1].type === 'break') {
          if (!Array.isArray(result) && result.type === 'text') {
            result.value = result.value.replace(/^\s+/, '');
          }
          if (!Array.isArray(result) && result.type === 'element') {
            const head = result.children[0];
            if (head && head.type === 'text') {
              head.value = head.value.replace(/^\s+/, '');
            }
          }
        }
        if (Array.isArray(result)) {
          values.push(...result);
        } else {
          values.push(result);
        }
      }
    }
  }
  return values;
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/index.js
import { u as u13 } from '/cdn/v99/unist-builder@3.0.0/es2022/unist-builder.development.js';
import { visit } from '/cdn/v99/unist-util-visit@4.1.1/es2022/unist-util-visit.development.js';
import {
  pointStart as pointStart2,
  pointEnd as pointEnd2
} from '/cdn/v99/unist-util-position@4.0.3/es2022/unist-util-position.development.js';
import { generated } from '/cdn/v99/unist-util-generated@2.0.0/es2022/unist-util-generated.development.js';
import { definitions } from '/cdn/v99/mdast-util-definitions@5.1.1/es2022/mdast-util-definitions.development.js';

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/footer.js
import { normalizeUri } from '/cdn/v99/micromark-util-sanitize-uri@1.1.0/es2022/micromark-util-sanitize-uri.development.js';
import { u as u3 } from '/cdn/v99/unist-builder@3.0.0/es2022/unist-builder.development.js';

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/wrap.js
import { u as u2 } from '/cdn/v99/unist-builder@3.0.0/es2022/unist-builder.development.js';
function wrap(nodes, loose) {
  const result = [];
  let index = -1;
  if (loose) {
    result.push(u2('text', '\n'));
  }
  while (++index < nodes.length) {
    if (index) result.push(u2('text', '\n'));
    result.push(nodes[index]);
  }
  if (loose && nodes.length > 0) {
    result.push(u2('text', '\n'));
  }
  return result;
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/footer.js
function footer(h) {
  let index = -1;
  const listItems = [];
  while (++index < h.footnoteOrder.length) {
    const def = h.footnoteById[h.footnoteOrder[index].toUpperCase()];
    if (!def) {
      continue;
    }
    const content = all(h, def);
    const id = String(def.identifier);
    const safeId = normalizeUri(id.toLowerCase());
    let referenceIndex = 0;
    const backReferences = [];
    while (++referenceIndex <= h.footnoteCounts[id]) {
      const backReference = {
        type: 'element',
        tagName: 'a',
        properties: {
          href: '#' + h.clobberPrefix + 'fnref-' + safeId + (referenceIndex > 1 ? '-' + referenceIndex : ''),
          dataFootnoteBackref: true,
          className: ['data-footnote-backref'],
          ariaLabel: h.footnoteBackLabel
        },
        children: [
          {
            type: 'text',
            value: '\u21A9'
          }
        ]
      };
      if (referenceIndex > 1) {
        backReference.children.push({
          type: 'element',
          tagName: 'sup',
          children: [
            {
              type: 'text',
              value: String(referenceIndex)
            }
          ]
        });
      }
      if (backReferences.length > 0) {
        backReferences.push({
          type: 'text',
          value: ' '
        });
      }
      backReferences.push(backReference);
    }
    const tail = content[content.length - 1];
    if (tail && tail.type === 'element' && tail.tagName === 'p') {
      const tailTail = tail.children[tail.children.length - 1];
      if (tailTail && tailTail.type === 'text') {
        tailTail.value += ' ';
      } else {
        tail.children.push({
          type: 'text',
          value: ' '
        });
      }
      tail.children.push(...backReferences);
    } else {
      content.push(...backReferences);
    }
    const listItem2 = {
      type: 'element',
      tagName: 'li',
      properties: {
        id: h.clobberPrefix + 'fn-' + safeId
      },
      children: wrap(content, true)
    };
    if (def.position) {
      listItem2.position = def.position;
    }
    listItems.push(listItem2);
  }
  if (listItems.length === 0) {
    return null;
  }
  return {
    type: 'element',
    tagName: 'section',
    properties: {
      dataFootnotes: true,
      className: ['footnotes']
    },
    children: [
      {
        type: 'element',
        tagName: h.footnoteLabelTagName,
        properties: {
          ...JSON.parse(JSON.stringify(h.footnoteLabelProperties)),
          id: 'footnote-label'
        },
        children: [u3('text', h.footnoteLabel)]
      },
      {
        type: 'text',
        value: '\n'
      },
      {
        type: 'element',
        tagName: 'ol',
        properties: {},
        children: wrap(listItems, true)
      },
      {
        type: 'text',
        value: '\n'
      }
    ]
  };
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function blockquote(h, node) {
  return h(node, 'blockquote', wrap(all(h, node), true));
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/break.js
import { u as u4 } from '/cdn/v99/unist-builder@3.0.0/es2022/unist-builder.development.js';
function hardBreak(h, node) {
  return [h(node, 'br'), u4('text', '\n')];
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/code.js
import { u as u5 } from '/cdn/v99/unist-builder@3.0.0/es2022/unist-builder.development.js';
function code(h, node) {
  const value = node.value ? node.value + '\n' : '';
  const lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/);
  const props = {};
  if (lang) {
    props.className = ['language-' + lang];
  }
  const code2 = h(node, 'code', props, [u5('text', value)]);
  if (node.meta) {
    code2.data = {
      meta: node.meta
    };
  }
  return h(node.position, 'pre', [code2]);
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/delete.js
function strikethrough(h, node) {
  return h(node, 'del', all(h, node));
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function emphasis(h, node) {
  return h(node, 'em', all(h, node));
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
import { normalizeUri as normalizeUri2 } from '/cdn/v99/micromark-util-sanitize-uri@1.1.0/es2022/micromark-util-sanitize-uri.development.js';
import { u as u6 } from '/cdn/v99/unist-builder@3.0.0/es2022/unist-builder.development.js';
function footnoteReference(h, node) {
  const id = String(node.identifier);
  const safeId = normalizeUri2(id.toLowerCase());
  const index = h.footnoteOrder.indexOf(id);
  let counter;
  if (index === -1) {
    h.footnoteOrder.push(id);
    h.footnoteCounts[id] = 1;
    counter = h.footnoteOrder.length;
  } else {
    h.footnoteCounts[id]++;
    counter = index + 1;
  }
  const reuseCounter = h.footnoteCounts[id];
  return h(node, 'sup', [
    h(
      node.position,
      'a',
      {
        href: '#' + h.clobberPrefix + 'fn-' + safeId,
        id: h.clobberPrefix + 'fnref-' + safeId + (reuseCounter > 1 ? '-' + reuseCounter : ''),
        dataFootnoteRef: true,
        ariaDescribedBy: 'footnote-label'
      },
      [u6('text', String(counter))]
    )
  ]);
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/footnote.js
function footnote(h, node) {
  const footnoteById = h.footnoteById;
  let no = 1;
  while (no in footnoteById) no++;
  const identifier = String(no);
  footnoteById[identifier] = {
    type: 'footnoteDefinition',
    identifier,
    children: [
      {
        type: 'paragraph',
        children: node.children
      }
    ],
    position: node.position
  };
  return footnoteReference(h, {
    type: 'footnoteReference',
    identifier,
    position: node.position
  });
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/heading.js
function heading(h, node) {
  return h(node, 'h' + node.depth, all(h, node));
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/html.js
import { u as u7 } from '/cdn/v99/unist-builder@3.0.0/es2022/unist-builder.development.js';
function html(h, node) {
  return h.dangerous ? h.augment(node, u7('raw', node.value)) : null;
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
import { normalizeUri as normalizeUri3 } from '/cdn/v99/micromark-util-sanitize-uri@1.1.0/es2022/micromark-util-sanitize-uri.development.js';

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/revert.js
import { u as u8 } from '/cdn/v99/unist-builder@3.0.0/es2022/unist-builder.development.js';
function revert(h, node) {
  const subtype = node.referenceType;
  let suffix = ']';
  if (subtype === 'collapsed') {
    suffix += '[]';
  } else if (subtype === 'full') {
    suffix += '[' + (node.label || node.identifier) + ']';
  }
  if (node.type === 'imageReference') {
    return u8('text', '![' + node.alt + suffix);
  }
  const contents = all(h, node);
  const head = contents[0];
  if (head && head.type === 'text') {
    head.value = '[' + head.value;
  } else {
    contents.unshift(u8('text', '['));
  }
  const tail = contents[contents.length - 1];
  if (tail && tail.type === 'text') {
    tail.value += suffix;
  } else {
    contents.push(u8('text', suffix));
  }
  return contents;
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function imageReference(h, node) {
  const def = h.definition(node.identifier);
  if (!def) {
    return revert(h, node);
  }
  const props = {
    src: normalizeUri3(def.url || ''),
    alt: node.alt
  };
  if (def.title !== null && def.title !== void 0) {
    props.title = def.title;
  }
  return h(node, 'img', props);
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/image.js
import { normalizeUri as normalizeUri4 } from '/cdn/v99/micromark-util-sanitize-uri@1.1.0/es2022/micromark-util-sanitize-uri.development.js';
function image(h, node) {
  const props = {
    src: normalizeUri4(node.url),
    alt: node.alt
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, 'img', props);
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
import { u as u9 } from '/cdn/v99/unist-builder@3.0.0/es2022/unist-builder.development.js';
function inlineCode(h, node) {
  return h(node, 'code', [u9('text', node.value.replace(/\r?\n|\r/g, ' '))]);
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
import { normalizeUri as normalizeUri5 } from '/cdn/v99/micromark-util-sanitize-uri@1.1.0/es2022/micromark-util-sanitize-uri.development.js';
function linkReference(h, node) {
  const def = h.definition(node.identifier);
  if (!def) {
    return revert(h, node);
  }
  const props = {
    href: normalizeUri5(def.url || '')
  };
  if (def.title !== null && def.title !== void 0) {
    props.title = def.title;
  }
  return h(node, 'a', props, all(h, node));
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/link.js
import { normalizeUri as normalizeUri6 } from '/cdn/v99/micromark-util-sanitize-uri@1.1.0/es2022/micromark-util-sanitize-uri.development.js';
function link(h, node) {
  const props = {
    href: normalizeUri6(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, 'a', props, all(h, node));
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/list-item.js
import { u as u10 } from '/cdn/v99/unist-builder@3.0.0/es2022/unist-builder.development.js';
function listItem(h, node, parent) {
  const result = all(h, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  const wrapped = [];
  if (typeof node.checked === 'boolean') {
    let paragraph2;
    if (result[0] && result[0].type === 'element' && result[0].tagName === 'p') {
      paragraph2 = result[0];
    } else {
      paragraph2 = h(null, 'p', []);
      result.unshift(paragraph2);
    }
    if (paragraph2.children.length > 0) {
      paragraph2.children.unshift(u10('text', ' '));
    }
    paragraph2.children.unshift(
      h(null, 'input', {
        type: 'checkbox',
        checked: node.checked,
        disabled: true
      })
    );
    props.className = ['task-list-item'];
  }
  let index = -1;
  while (++index < result.length) {
    const child = result[index];
    if (loose || index !== 0 || child.type !== 'element' || child.tagName !== 'p') {
      wrapped.push(u10('text', '\n'));
    }
    if (child.type === 'element' && child.tagName === 'p' && !loose) {
      wrapped.push(...child.children);
    } else {
      wrapped.push(child);
    }
  }
  const tail = result[result.length - 1];
  if (tail && (loose || !('tagName' in tail) || tail.tagName !== 'p')) {
    wrapped.push(u10('text', '\n'));
  }
  return h(node, 'li', props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  let index = -1;
  while (!loose && ++index < children.length) {
    loose = listItemLoose(children[index]);
  }
  return Boolean(loose);
}
function listItemLoose(node) {
  const spread = node.spread;
  return spread === void 0 || spread === null ? node.children.length > 1 : spread;
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/list.js
function list(h, node) {
  const props = {};
  const name = node.ordered ? 'ol' : 'ul';
  const items = all(h, node);
  let index = -1;
  if (typeof node.start === 'number' && node.start !== 1) {
    props.start = node.start;
  }
  while (++index < items.length) {
    const item = items[index];
    if (
      item.type === 'element' &&
      item.tagName === 'li' &&
      item.properties &&
      Array.isArray(item.properties.className) &&
      item.properties.className.includes('task-list-item')
    ) {
      props.className = ['contains-task-list'];
      break;
    }
  }
  return h(node, name, props, wrap(items, true));
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function paragraph(h, node) {
  return h(node, 'p', all(h, node));
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/root.js
import { u as u11 } from '/cdn/v99/unist-builder@3.0.0/es2022/unist-builder.development.js';
function root(h, node) {
  return h.augment(node, u11('root', wrap(all(h, node))));
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/strong.js
function strong(h, node) {
  return h(node, 'strong', all(h, node));
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/table.js
import { pointStart, pointEnd } from '/cdn/v99/unist-util-position@4.0.3/es2022/unist-util-position.development.js';
function table(h, node) {
  const rows = node.children;
  let index = -1;
  const align = node.align || [];
  const result = [];
  while (++index < rows.length) {
    const row = rows[index].children;
    const name = index === 0 ? 'th' : 'td';
    const out = [];
    let cellIndex = -1;
    const length = node.align ? align.length : row.length;
    while (++cellIndex < length) {
      const cell = row[cellIndex];
      out.push(
        h(
          cell,
          name,
          {
            align: align[cellIndex]
          },
          cell ? all(h, cell) : []
        )
      );
    }
    result[index] = h(rows[index], 'tr', wrap(out, true));
  }
  return h(
    node,
    'table',
    wrap(
      [h(result[0].position, 'thead', wrap([result[0]], true))].concat(
        result[1]
          ? h(
              {
                start: pointStart(result[1]),
                end: pointEnd(result[result.length - 1])
              },
              'tbody',
              wrap(result.slice(1), true)
            )
          : []
      ),
      true
    )
  );
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/text.js
import { trimLines } from '/cdn/v99/trim-lines@3.0.1/es2022/trim-lines.development.js';
import { u as u12 } from '/cdn/v99/unist-builder@3.0.0/es2022/unist-builder.development.js';
function text(h, node) {
  return h.augment(node, u12('text', trimLines(String(node.value))));
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function thematicBreak(h, node) {
  return h(node, 'hr');
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/handlers/index.js
var handlers = {
  blockquote,
  break: hardBreak,
  code,
  delete: strikethrough,
  emphasis,
  footnoteReference,
  footnote,
  heading,
  html,
  imageReference,
  image,
  inlineCode,
  linkReference,
  link,
  listItem,
  list,
  paragraph,
  root,
  strong,
  table,
  text,
  thematicBreak,
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
};
function ignore() {
  return null;
}

// esm-build-a800ac9f1b8eb3b54a8038930eeebeea36a602b6-8ec4fb1b/node_modules/mdast-util-to-hast/lib/index.js
var own2 = {}.hasOwnProperty;
function factory(tree, options) {
  const settings = options || {};
  const dangerous = settings.allowDangerousHtml || false;
  const footnoteById = {};
  h.dangerous = dangerous;
  h.clobberPrefix =
    settings.clobberPrefix === void 0 || settings.clobberPrefix === null ? 'user-content-' : settings.clobberPrefix;
  h.footnoteLabel = settings.footnoteLabel || 'Footnotes';
  h.footnoteLabelTagName = settings.footnoteLabelTagName || 'h2';
  h.footnoteLabelProperties = settings.footnoteLabelProperties || {
    className: ['sr-only']
  };
  h.footnoteBackLabel = settings.footnoteBackLabel || 'Back to content';
  h.definition = definitions(tree);
  h.footnoteById = footnoteById;
  h.footnoteOrder = [];
  h.footnoteCounts = {};
  h.augment = augment;
  h.handlers = {
    ...handlers,
    ...settings.handlers
  };
  h.unknownHandler = settings.unknownHandler;
  h.passThrough = settings.passThrough;
  visit(tree, 'footnoteDefinition', definition => {
    const id = String(definition.identifier).toUpperCase();
    if (!own2.call(footnoteById, id)) {
      footnoteById[id] = definition;
    }
  });
  return h;
  function augment(left, right) {
    if (left && 'data' in left && left.data) {
      const data = left.data;
      if (data.hName) {
        if (right.type !== 'element') {
          right = {
            type: 'element',
            tagName: '',
            properties: {},
            children: []
          };
        }
        right.tagName = data.hName;
      }
      if (right.type === 'element' && data.hProperties) {
        right.properties = {
          ...right.properties,
          ...data.hProperties
        };
      }
      if ('children' in right && right.children && data.hChildren) {
        right.children = data.hChildren;
      }
    }
    if (left) {
      const ctx =
        'type' in left
          ? left
          : {
              position: left
            };
      if (!generated(ctx)) {
        right.position = {
          start: pointStart2(ctx),
          end: pointEnd2(ctx)
        };
      }
    }
    return right;
  }
  function h(node, tagName, props, children) {
    if (Array.isArray(props)) {
      children = props;
      props = {};
    }
    return augment(node, {
      type: 'element',
      tagName,
      properties: props || {},
      children: children || []
    });
  }
}
function toHast(tree, options) {
  const h = factory(tree, options);
  const node = one(h, tree, null);
  const foot = footer(h);
  if (foot) {
    node.children.push(u13('text', '\n'), foot);
  }
  return Array.isArray(node)
    ? {
        type: 'root',
        children: node
      }
    : node;
}
export { all, handlers as defaultHandlers, one, toHast };