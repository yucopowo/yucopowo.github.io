/* esm.sh - esbuild bundle(@ampproject/remapping@2.2.0) es2022 development */
// esm-build-1f9c54ecca50c7e952504c4b1099c32df8568093-491d50e6/node_modules/@ampproject/remapping/dist/remapping.mjs
import {
  decodedMappings,
  traceSegment,
  TraceMap
} from '/cdn/v99/@jridgewell/trace-mapping@0.3.17/es2022/trace-mapping.development.js';
import {
  GenMapping,
  addSegment,
  setSourceContent,
  decodedMap,
  encodedMap
} from '/cdn/v99/@jridgewell/gen-mapping@0.1.1/es2022/gen-mapping.development.js';
var SOURCELESS_MAPPING = {
  source: null,
  column: null,
  line: null,
  name: null,
  content: null
};
var EMPTY_SOURCES = [];
function Source(map, sources, source, content) {
  return {
    map,
    sources,
    source,
    content
  };
}
function MapSource(map, sources) {
  return Source(map, sources, '', null);
}
function OriginalSource(source, content) {
  return Source(null, EMPTY_SOURCES, source, content);
}
function traceMappings(tree) {
  const gen = new GenMapping({
    file: tree.map.file
  });
  const { sources: rootSources, map } = tree;
  const rootNames = map.names;
  const rootMappings = decodedMappings(map);
  for (let i = 0; i < rootMappings.length; i++) {
    const segments = rootMappings[i];
    let lastSource = null;
    let lastSourceLine = null;
    let lastSourceColumn = null;
    for (let j = 0; j < segments.length; j++) {
      const segment = segments[j];
      const genCol = segment[0];
      let traced = SOURCELESS_MAPPING;
      if (segment.length !== 1) {
        const source2 = rootSources[segment[1]];
        traced = originalPositionFor(
          source2,
          segment[2],
          segment[3],
          segment.length === 5 ? rootNames[segment[4]] : ''
        );
        if (traced == null) continue;
      }
      const { column, line, name, content, source } = traced;
      if (line === lastSourceLine && column === lastSourceColumn && source === lastSource) {
        continue;
      }
      lastSourceLine = line;
      lastSourceColumn = column;
      lastSource = source;
      addSegment(gen, i, genCol, source, line, column, name);
      if (content != null) setSourceContent(gen, source, content);
    }
  }
  return gen;
}
function originalPositionFor(source, line, column, name) {
  if (!source.map) {
    return {
      column,
      line,
      name,
      source: source.source,
      content: source.content
    };
  }
  const segment = traceSegment(source.map, line, column);
  if (segment == null) return null;
  if (segment.length === 1) return SOURCELESS_MAPPING;
  return originalPositionFor(
    source.sources[segment[1]],
    segment[2],
    segment[3],
    segment.length === 5 ? source.map.names[segment[4]] : name
  );
}
function asArray(value) {
  if (Array.isArray(value)) return value;
  return [value];
}
function buildSourceMapTree(input, loader) {
  const maps = asArray(input).map(m => new TraceMap(m, ''));
  const map = maps.pop();
  for (let i = 0; i < maps.length; i++) {
    if (maps[i].sources.length > 1) {
      throw new Error(`Transformation map ${i} must have exactly one source file.
Did you specify these with the most recent transformation maps first?`);
    }
  }
  let tree = build(map, loader, '', 0);
  for (let i = maps.length - 1; i >= 0; i--) {
    tree = MapSource(maps[i], [tree]);
  }
  return tree;
}
function build(map, loader, importer, importerDepth) {
  const { resolvedSources, sourcesContent } = map;
  const depth = importerDepth + 1;
  const children = resolvedSources.map((sourceFile, i) => {
    const ctx = {
      importer,
      depth,
      source: sourceFile || '',
      content: void 0
    };
    const sourceMap = loader(ctx.source, ctx);
    const { source, content } = ctx;
    if (sourceMap) return build(new TraceMap(sourceMap, source), loader, source, depth);
    const sourceContent = content !== void 0 ? content : sourcesContent ? sourcesContent[i] : null;
    return OriginalSource(source, sourceContent);
  });
  return MapSource(map, children);
}
var SourceMap = class {
  constructor(map, options) {
    const out = options.decodedMappings ? decodedMap(map) : encodedMap(map);
    this.version = out.version;
    this.file = out.file;
    this.mappings = out.mappings;
    this.names = out.names;
    this.sourceRoot = out.sourceRoot;
    this.sources = out.sources;
    if (!options.excludeContent) {
      this.sourcesContent = out.sourcesContent;
    }
  }
  toString() {
    return JSON.stringify(this);
  }
};
function remapping(input, loader, options) {
  const opts =
    typeof options === 'object'
      ? options
      : {
          excludeContent: !!options,
          decodedMappings: false
        };
  const tree = buildSourceMapTree(input, loader);
  return new SourceMap(traceMappings(tree), opts);
}
export { remapping as default };
