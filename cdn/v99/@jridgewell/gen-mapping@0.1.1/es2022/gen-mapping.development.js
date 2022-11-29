/* esm.sh - esbuild bundle(@jridgewell/gen-mapping@0.1.1) es2022 development */
// esm-build-bf02e8387f65608788c3ac7e91c2cf3fc11e240c-4a402e6f/node_modules/@jridgewell/gen-mapping/dist/gen-mapping.mjs
import { SetArray, put } from '/cdn/v99/@jridgewell/set-array@1.1.2/es2022/set-array.development.js';
import { encode } from '/cdn/v99/@jridgewell/sourcemap-codec@1.4.14/es2022/sourcemap-codec.development.js';
var addSegment;
var addMapping;
var setSourceContent;
var decodedMap;
var encodedMap;
var allMappings;
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
  addSegment = (map, genLine, genColumn, source, sourceLine, sourceColumn, name) => {
    const { _mappings: mappings, _sources: sources, _sourcesContent: sourcesContent, _names: names } = map;
    const line = getLine(mappings, genLine);
    if (source == null) {
      const seg2 = [genColumn];
      const index2 = getColumnIndex(line, genColumn, seg2);
      return insert(line, index2, seg2);
    }
    const sourcesIndex = put(sources, source);
    const seg = name
      ? [genColumn, sourcesIndex, sourceLine, sourceColumn, put(names, name)]
      : [genColumn, sourcesIndex, sourceLine, sourceColumn];
    const index = getColumnIndex(line, genColumn, seg);
    if (sourcesIndex === sourcesContent.length) sourcesContent[sourcesIndex] = null;
    insert(line, index, seg);
  };
  addMapping = (map, mapping) => {
    const { generated, source, original, name } = mapping;
    return addSegment(
      map,
      generated.line - 1,
      generated.column,
      source,
      original == null ? void 0 : original.line - 1,
      original === null || original === void 0 ? void 0 : original.column,
      name
    );
  };
  setSourceContent = (map, source, content) => {
    const { _sources: sources, _sourcesContent: sourcesContent } = map;
    sourcesContent[put(sources, source)] = content;
  };
  decodedMap = map => {
    const {
      file,
      sourceRoot,
      _mappings: mappings,
      _sources: sources,
      _sourcesContent: sourcesContent,
      _names: names
    } = map;
    return {
      version: 3,
      file,
      names: names.array,
      sourceRoot: sourceRoot || void 0,
      sources: sources.array,
      sourcesContent,
      mappings
    };
  };
  encodedMap = map => {
    const decoded = decodedMap(map);
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
          column: seg[0]
        };
        let source = void 0;
        let original = void 0;
        let name = void 0;
        if (seg.length !== 1) {
          source = sources.array[seg[1]];
          original = {
            line: seg[2] + 1,
            column: seg[3]
          };
          if (seg.length === 5) name = names.array[seg[4]];
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
})();
function getLine(mappings, index) {
  for (let i = mappings.length; i <= index; i++) {
    mappings[i] = [];
  }
  return mappings[index];
}
function getColumnIndex(line, column, seg) {
  let index = line.length;
  for (let i = index - 1; i >= 0; i--, index--) {
    const current = line[i];
    const col = current[0];
    if (col > column) continue;
    if (col < column) break;
    const cmp = compare(current, seg);
    if (cmp === 0) return index;
    if (cmp < 0) break;
  }
  return index;
}
function compare(a, b) {
  let cmp = compareNum(a.length, b.length);
  if (cmp !== 0) return cmp;
  if (a.length === 1) return 0;
  cmp = compareNum(a[1], b[1]);
  if (cmp !== 0) return cmp;
  cmp = compareNum(a[2], b[2]);
  if (cmp !== 0) return cmp;
  cmp = compareNum(a[3], b[3]);
  if (cmp !== 0) return cmp;
  if (a.length === 4) return 0;
  return compareNum(a[4], b[4]);
}
function compareNum(a, b) {
  return a - b;
}
function insert(array, index, value) {
  if (index === -1) return;
  for (let i = array.length; i > index; i--) {
    array[i] = array[i - 1];
  }
  array[index] = value;
}
export { GenMapping, addMapping, addSegment, allMappings, decodedMap, encodedMap, setSourceContent };
