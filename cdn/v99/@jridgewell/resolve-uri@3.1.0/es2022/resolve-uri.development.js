/* esm.sh - esbuild bundle(@jridgewell/resolve-uri@3.1.0) es2022 development */
// esm-build-3b6debf5ae24d7ab62d937adb6a9af16023a6b4a-202311ad/node_modules/@jridgewell/resolve-uri/dist/resolve-uri.mjs
var schemeRegex = /^[\w+.-]+:\/\//;
var urlRegex = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/;
var fileRegex = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
var UrlType;
(function(UrlType2) {
  UrlType2[(UrlType2['Empty'] = 1)] = 'Empty';
  UrlType2[(UrlType2['Hash'] = 2)] = 'Hash';
  UrlType2[(UrlType2['Query'] = 3)] = 'Query';
  UrlType2[(UrlType2['RelativePath'] = 4)] = 'RelativePath';
  UrlType2[(UrlType2['AbsolutePath'] = 5)] = 'AbsolutePath';
  UrlType2[(UrlType2['SchemeRelative'] = 6)] = 'SchemeRelative';
  UrlType2[(UrlType2['Absolute'] = 7)] = 'Absolute';
})(UrlType || (UrlType = {}));
function isAbsoluteUrl(input) {
  return schemeRegex.test(input);
}
function isSchemeRelativeUrl(input) {
  return input.startsWith('//');
}
function isAbsolutePath(input) {
  return input.startsWith('/');
}
function isFileUrl(input) {
  return input.startsWith('file:');
}
function isRelative(input) {
  return /^[.?#]/.test(input);
}
function parseAbsoluteUrl(input) {
  const match = urlRegex.exec(input);
  return makeUrl(match[1], match[2] || '', match[3], match[4] || '', match[5] || '/', match[6] || '', match[7] || '');
}
function parseFileUrl(input) {
  const match = fileRegex.exec(input);
  const path = match[2];
  return makeUrl(
    'file:',
    '',
    match[1] || '',
    '',
    isAbsolutePath(path) ? path : '/' + path,
    match[3] || '',
    match[4] || ''
  );
}
function makeUrl(scheme, user, host, port, path, query, hash) {
  return {
    scheme,
    user,
    host,
    port,
    path,
    query,
    hash,
    type: UrlType.Absolute
  };
}
function parseUrl(input) {
  if (isSchemeRelativeUrl(input)) {
    const url2 = parseAbsoluteUrl('http:' + input);
    url2.scheme = '';
    url2.type = UrlType.SchemeRelative;
    return url2;
  }
  if (isAbsolutePath(input)) {
    const url2 = parseAbsoluteUrl('http://foo.com' + input);
    url2.scheme = '';
    url2.host = '';
    url2.type = UrlType.AbsolutePath;
    return url2;
  }
  if (isFileUrl(input)) return parseFileUrl(input);
  if (isAbsoluteUrl(input)) return parseAbsoluteUrl(input);
  const url = parseAbsoluteUrl('http://foo.com/' + input);
  url.scheme = '';
  url.host = '';
  url.type = input
    ? input.startsWith('?')
      ? UrlType.Query
      : input.startsWith('#')
      ? UrlType.Hash
      : UrlType.RelativePath
    : UrlType.Empty;
  return url;
}
function stripPathFilename(path) {
  if (path.endsWith('/..')) return path;
  const index = path.lastIndexOf('/');
  return path.slice(0, index + 1);
}
function mergePaths(url, base) {
  normalizePath(base, base.type);
  if (url.path === '/') {
    url.path = base.path;
  } else {
    url.path = stripPathFilename(base.path) + url.path;
  }
}
function normalizePath(url, type) {
  const rel = type <= UrlType.RelativePath;
  const pieces = url.path.split('/');
  let pointer = 1;
  let positive = 0;
  let addTrailingSlash = false;
  for (let i = 1; i < pieces.length; i++) {
    const piece = pieces[i];
    if (!piece) {
      addTrailingSlash = true;
      continue;
    }
    addTrailingSlash = false;
    if (piece === '.') continue;
    if (piece === '..') {
      if (positive) {
        addTrailingSlash = true;
        positive--;
        pointer--;
      } else if (rel) {
        pieces[pointer++] = piece;
      }
      continue;
    }
    pieces[pointer++] = piece;
    positive++;
  }
  let path = '';
  for (let i = 1; i < pointer; i++) {
    path += '/' + pieces[i];
  }
  if (!path || (addTrailingSlash && !path.endsWith('/..'))) {
    path += '/';
  }
  url.path = path;
}
function resolve(input, base) {
  if (!input && !base) return '';
  const url = parseUrl(input);
  let inputType = url.type;
  if (base && inputType !== UrlType.Absolute) {
    const baseUrl = parseUrl(base);
    const baseType = baseUrl.type;
    switch (inputType) {
      case UrlType.Empty:
        url.hash = baseUrl.hash;
      case UrlType.Hash:
        url.query = baseUrl.query;
      case UrlType.Query:
      case UrlType.RelativePath:
        mergePaths(url, baseUrl);
      case UrlType.AbsolutePath:
        url.user = baseUrl.user;
        url.host = baseUrl.host;
        url.port = baseUrl.port;
      case UrlType.SchemeRelative:
        url.scheme = baseUrl.scheme;
    }
    if (baseType > inputType) inputType = baseType;
  }
  normalizePath(url, inputType);
  const queryHash = url.query + url.hash;
  switch (inputType) {
    case UrlType.Hash:
    case UrlType.Query:
      return queryHash;
    case UrlType.RelativePath: {
      const path = url.path.slice(1);
      if (!path) return queryHash || '.';
      if (isRelative(base || input) && !isRelative(path)) {
        return './' + path + queryHash;
      }
      return path + queryHash;
    }
    case UrlType.AbsolutePath:
      return url.path + queryHash;
    default:
      return url.scheme + '//' + url.user + url.host + url.port + url.path + queryHash;
  }
}
export { resolve as default };
