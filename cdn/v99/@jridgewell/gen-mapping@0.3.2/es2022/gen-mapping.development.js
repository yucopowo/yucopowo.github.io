/* esm.sh - esbuild bundle(@jridgewell/gen-mapping@0.3.2) es2022 development */
// esm-build-bcf797c5648d17aa20cb304b23be6738df86068c-255cc235/node_modules/@jridgewell/gen-mapping/dist/gen-mapping.mjs
import { SetArray, put } from '/cdn/v99/@jridgewell/set-array@1.1.2/es2022/set-array.development.js';
import { encode } from '/cdn/v99/@jridgewell/sourcemap-codec@1.4.14/es2022/sourcemap-codec.development.js';
import {
  TraceMap,
  decodedMappings
} from '/cdn/v99/@jridgewell/trace-mapping@0.3.17/es2022/trace-mapping.development.js';
var COLUMN = 0;
var SOURCES_INDEX = 1;
var SOURCE_LINE = 2;
var SOURCE_COLUMN = 3;
var NAMES_INDEX = 4;
var NO_NAME = -1;
var addSegment;
var addMapping;
var maybeAddSegment;
var maybeAddMapping;
var setSourceContent;
var toDecodedMap;
var toEncodedMap;
var fromMap;
var allMappings;
var addSegmentInternal;
var GenMapping = class {
  constructor({ file, sourceRoot } = {}) {
    this._names = new SetArray();
    this._sources = new SetArray();
    this._sourcesContent = [];
    this._mappings = [];
    this.file = file;
    this.sourceRoot = sourceRoot;
  }
};
(() => {
  addSegment = (map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) => {
    return addSegmentInternal(false, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content);
  };
  maybeAddSegment = (map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) => {
    return addSegmentInternal(true, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content);
  };
  addMapping = (map, mapping) => {
    return addMappingInternal(false, map, mapping);
  };
  maybeAddMapping = (map, mapping) => {
    return addMappingInternal(true, map, mapping);
  };
  setSourceContent = (map, source, content) => {
    const { _sources: sources, _sourcesContent: sourcesContent } = map;
    sourcesContent[put(sources, source)] = content;
  };
  toDecodedMap = map => {
    const {
      file,
      sourceRoot,
      _mappings: mappings,
      _sources: sources,
      _sourcesContent: sourcesContent,
      _names: names
    } = map;
    removeEmptyFinalLines(mappings);
    return {
      version: 3,
      file: file || void 0,
      names: names.array,
      sourceRoot: sourceRoot || void 0,
      sources: sources.array,
      sourcesContent,
      mappings
    };
  };
  toEncodedMap = map => {
    const decoded = toDecodedMap(map);
    return Object.assign(Object.assign({}, decoded), {
      mappings: encode(decoded.mappings)
    });
  };
  allMappings = map => {
    const out = [];
    const { _mappings: mappings, _sources: sources, _names: names } = map;
    for (let i = 0; i < mappings.length; i++) {
      const line = mappings[i];
      for (let j = 0; j < line.length; j++) {
        const seg = line[j];
        const generated = {
          line: i + 1,
          column: seg[COLUMN]
        };
        let source = void 0;
        let original = void 0;
        let name = void 0;
        if (seg.length !== 1) {
          source = sources.array[seg[SOURCES_INDEX]];
          original = {
            line: seg[SOURCE_LINE] + 1,
            column: seg[SOURCE_COLUMN]
          };
          if (seg.length === 5) name = names.array[seg[NAMES_INDEX]];
        }
        out.push({
          generated,
          source,
          original,
          name
        });
      }
    }
    return out;
  };
  fromMap = input => {
    const map = new TraceMap(input);
    const gen = new GenMapping({
      file: map.file,
      sourceRoot: map.sourceRoot
    });
    putAll(gen._names, map.names);
    putAll(gen._sources, map.sources);
    gen._sourcesContent = map.sourcesContent || map.sources.map(() => null);
    gen._mappings = decodedMappings(map);
    return gen;
  };
  addSegmentInternal = (skipable, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) => {
    const { _mappings: mappings, _sources: sources, _sourcesContent: sourcesContent, _names: names } = map;
    const line = getLine(mappings, genLine);
    const index = getColumnIndex(line, genColumn);
    if (!source) {
      if (skipable && skipSourceless(line, index)) return;
      return insert(line, index, [genColumn]);
    }
    const sourcesIndex = put(sources, source);
    const namesIndex = name ? put(names, name) : NO_NAME;
    if (sourcesIndex === sourcesContent.length)
      sourcesContent[sourcesIndex] = content !== null && content !== void 0 ? content : null;
    if (skipable && skipSource(line, index, sourcesIndex, sourceLine, sourceColumn, namesIndex)) {
      return;
    }
    return insert(
      line,
      index,
      name
        ? [genColumn, sourcesIndex, sourceLine, sourceColumn, namesIndex]
        : [genColumn, sourcesIndex, sourceLine, sourceColumn]
    );
  };
})();
function getLine(mappings, index) {
  for (let i = mappings.length; i <= index; i++) {
    mappings[i] = [];
  }
  return mappings[index];
}
function getColumnIndex(line, genColumn) {
  let index = line.length;
  for (let i = index - 1; i >= 0; index = i--) {
    const current = line[i];
    if (genColumn >= current[COLUMN]) break;
  }
  return index;
}
function insert(array, index, value) {
  for (let i = array.length; i > index; i--) {
    array[i] = array[i - 1];
  }
  array[index] = value;
}
function removeEmptyFinalLines(mappings) {
  const { length } = mappings;
  let len = length;
  for (let i = len - 1; i >= 0; len = i, i--) {
    if (mappings[i].length > 0) break;
  }
  if (len < length) mappings.length = len;
}
function putAll(strarr, array) {
  for (let i = 0; i < array.length; i++) put(strarr, array[i]);
}
function skipSourceless(line, index) {
  if (index === 0) return true;
  const prev = line[index - 1];
  return prev.length === 1;
}
function skipSource(line, index, sourcesIndex, sourceLine, sourceColumn, namesIndex) {
  if (index === 0) return false;
  const prev = line[index - 1];
  if (prev.length === 1) return false;
  return (
    sourcesIndex === prev[SOURCES_INDEX] &&
    sourceLine === prev[SOURCE_LINE] &&
    sourceColumn === prev[SOURCE_COLUMN] &&
    namesIndex === (prev.length === 5 ? prev[NAMES_INDEX] : NO_NAME)
  );
}
function addMappingInternal(skipable, map, mapping) {
  const { generated, source, original, name, content } = mapping;
  if (!source) {
    return addSegmentInternal(skipable, map, generated.line - 1, generated.column, null, null, null, null, null);
  }
  const s = source;
  return addSegmentInternal(
    skipable,
    map,
    generated.line - 1,
    generated.column,
    s,
    original.line - 1,
    original.column,
    name,
    content
  );
}
export {
  GenMapping,
  addMapping,
  addSegment,
  allMappings,
  fromMap,
  maybeAddMapping,
  maybeAddSegment,
  setSourceContent,
  toDecodedMap,
  toEncodedMap
};
