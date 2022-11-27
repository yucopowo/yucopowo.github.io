/* esm.sh - esbuild bundle(@remix-run/router@1.0.3) es2022 development */
// esm-build-4d77cd314e2387ee96d3fc3fcd6276a2d30ec646-924f3c80/node_modules/@remix-run/router/dist/router.js
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2['Pop'] = 'POP';
  Action2['Push'] = 'PUSH';
  Action2['Replace'] = 'REPLACE';
})(Action || (Action = {}));
var PopStateEventType = 'popstate';
function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }
  let { initialEntries = ['/'], initialIndex, v5Compat = false } = options;
  let entries;
  entries = initialEntries.map((entry, index2) =>
    createMemoryLocation(entry, typeof entry === 'string' ? null : entry.state, index2 === 0 ? 'default' : void 0)
  );
  let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
  let action = Action.Pop;
  let listener = null;
  function clampIndex(n) {
    return Math.min(Math.max(n, 0), entries.length - 1);
  }
  function getCurrentLocation() {
    return entries[index];
  }
  function createMemoryLocation(to, state, key) {
    if (state === void 0) {
      state = null;
    }
    let location = createLocation(entries ? getCurrentLocation().pathname : '/', to, state, key);
    warning$1(
      location.pathname.charAt(0) === '/',
      'relative pathnames are not supported in memory history: ' + JSON.stringify(to)
    );
    return location;
  }
  let history = {
    get index() {
      return index;
    },
    get action() {
      return action;
    },
    get location() {
      return getCurrentLocation();
    },
    createHref(to) {
      return typeof to === 'string' ? to : createPath(to);
    },
    encodeLocation(location) {
      return location;
    },
    push(to, state) {
      action = Action.Push;
      let nextLocation = createMemoryLocation(to, state);
      index += 1;
      entries.splice(index, entries.length, nextLocation);
      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation
        });
      }
    },
    replace(to, state) {
      action = Action.Replace;
      let nextLocation = createMemoryLocation(to, state);
      entries[index] = nextLocation;
      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation
        });
      }
    },
    go(delta) {
      action = Action.Pop;
      index = clampIndex(index + delta);
      if (listener) {
        listener({
          action,
          location: getCurrentLocation()
        });
      }
    },
    listen(fn) {
      listener = fn;
      return () => {
        listener = null;
      };
    }
  };
  return history;
}
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window2, globalHistory) {
    let { pathname, search, hash } = window2.location;
    return createLocation(
      '',
      {
        pathname,
        search,
        hash
      },
      (globalHistory.state && globalHistory.state.usr) || null,
      (globalHistory.state && globalHistory.state.key) || 'default'
    );
  }
  function createBrowserHref(window2, to) {
    return typeof to === 'string' ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createHashLocation(window2, globalHistory) {
    let { pathname = '/', search = '', hash = '' } = parsePath(window2.location.hash.substr(1));
    return createLocation(
      '',
      {
        pathname,
        search,
        hash
      },
      (globalHistory.state && globalHistory.state.usr) || null,
      (globalHistory.state && globalHistory.state.key) || 'default'
    );
  }
  function createHashHref(window2, to) {
    let base = window2.document.querySelector('base');
    let href = '';
    if (base && base.getAttribute('href')) {
      let url = window2.location.href;
      let hashIndex = url.indexOf('#');
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }
    return href + '#' + (typeof to === 'string' ? to : createPath(to));
  }
  function validateHashLocation(location, to) {
    warning$1(
      location.pathname.charAt(0) === '/',
      'relative pathnames are not supported in hash history.push(' + JSON.stringify(to) + ')'
    );
  }
  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function warning$1(cond, message) {
  if (!cond) {
    if (typeof console !== 'undefined') console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {}
  }
}
function createKey() {
  return Math.random()
    .toString(36)
    .substr(2, 8);
}
function getHistoryState(location) {
  return {
    usr: location.state,
    key: location.key
  };
}
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends(
    {
      pathname: typeof current === 'string' ? current : current.pathname,
      search: '',
      hash: ''
    },
    typeof to === 'string' ? parsePath(to) : to,
    {
      state,
      key: (to && to.key) || key || createKey()
    }
  );
  return location;
}
function createPath(_ref) {
  let { pathname = '/', search = '', hash = '' } = _ref;
  if (search && search !== '?') pathname += search.charAt(0) === '?' ? search : '?' + search;
  if (hash && hash !== '#') pathname += hash.charAt(0) === '#' ? hash : '#' + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf('#');
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf('?');
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function createURL(location) {
  let base =
    typeof window !== 'undefined' && typeof window.location !== 'undefined' && window.location.origin !== 'null'
      ? window.location.origin
      : 'unknown://unknown';
  let href = typeof location === 'string' ? location : createPath(location);
  return new URL(href, base);
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let { window: window2 = document.defaultView, v5Compat = false } = options;
  let globalHistory = window2.history;
  let action = Action.Pop;
  let listener = null;
  function handlePop() {
    action = Action.Pop;
    if (listener) {
      listener({
        action,
        location: history.location
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    let historyState = getHistoryState(location);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, '', url);
    } catch (error) {
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    let historyState = getHistoryState(location);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, '', url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location
      });
    }
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error('A history only accepts one active listener');
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window2, to);
    },
    encodeLocation(location) {
      let url = createURL(createPath(location));
      return _extends({}, location, {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      });
    },
    push,
    replace,
    go(n) {
      return globalHistory.go(n);
    }
  };
  return history;
}
var ResultType;
(function(ResultType2) {
  ResultType2['data'] = 'data';
  ResultType2['deferred'] = 'deferred';
  ResultType2['redirect'] = 'redirect';
  ResultType2['error'] = 'error';
})(ResultType || (ResultType = {}));
function isIndexRoute(route) {
  return route.index === true;
}
function convertRoutesToDataRoutes(routes, parentPath, allIds) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  if (allIds === void 0) {
    allIds = /* @__PURE__ */ new Set();
  }
  return routes.map((route, index) => {
    let treePath = [...parentPath, index];
    let id = typeof route.id === 'string' ? route.id : treePath.join('-');
    invariant(route.index !== true || !route.children, 'Cannot specify children on an index route');
    invariant(
      !allIds.has(id),
      'Found a route id collision on id "' + id + `".  Route id's must be globally unique within Data Router usages`
    );
    allIds.add(id);
    if (isIndexRoute(route)) {
      let indexRoute = _extends({}, route, {
        id
      });
      return indexRoute;
    } else {
      let pathOrLayoutRoute = _extends({}, route, {
        id,
        children: route.children ? convertRoutesToDataRoutes(route.children, treePath, allIds) : void 0
      });
      return pathOrLayoutRoute;
    }
  });
}
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = '/';
  }
  let location = typeof locationArg === 'string' ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || '/', basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], safelyDecodeURI(pathname));
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = '';
  }
  routes.forEach((route, index) => {
    let meta = {
      relativePath: route.path || '',
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith('/')) {
      invariant(
        meta.relativePath.startsWith(parentPath),
        'Absolute route path "' +
          meta.relativePath +
          '" nested under path ' +
          ('"' + parentPath + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      );
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        route.index !== true,
        'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + path + '".')
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}
function rankRouteBranches(branches) {
  branches.sort((a, b) =>
    a.score !== b.score
      ? b.score - a.score
      : compareIndexes(
          a.routesMeta.map(meta => meta.childrenIndex),
          b.routesMeta.map(meta => meta.childrenIndex)
        )
  );
}
var paramRe = /^:\w+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = s => s === '*';
function computeScore(path, index) {
  let segments = path.split('/');
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments
    .filter(s => !isSplat(s))
    .reduce(
      (score, segment) =>
        score + (paramRe.test(segment) ? dynamicSegmentValue : segment === '' ? emptySegmentValue : staticSegmentValue),
      initialScore
    );
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? a[a.length - 1] - b[b.length - 1] : 0;
}
function matchRouteBranch(branch, pathname) {
  let { routesMeta } = branch;
  let matchedParams = {};
  let matchedPathname = '/';
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === '/' ? pathname : pathname.slice(matchedPathname.length) || '/';
    let match = matchPath(
      {
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end
      },
      remainingPathname
    );
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== '/') {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function generatePath(path, params) {
  if (params === void 0) {
    params = {};
  }
  return path
    .replace(/:(\w+)/g, (_, key) => {
      invariant(params[key] != null, 'Missing ":' + key + '" param');
      return params[key];
    })
    .replace(/(\/?)\*/, (_, prefix, __, str) => {
      const star = '*';
      if (params[star] == null) {
        return str === '/*' ? '/' : '';
      }
      return '' + prefix + params[star];
    });
}
function matchPath(pattern, pathname) {
  if (typeof pattern === 'string') {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, '$1');
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    if (paramName === '*') {
      let splatValue = captureGroups[index] || '';
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, '$1');
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || '', paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(
    path === '*' || !path.endsWith('*') || path.endsWith('/*'),
    'Route path "' +
      path +
      '" will be treated as if it were ' +
      ('"' + path.replace(/\*$/, '/*') + '" because the `*` character must ') +
      'always follow a `/` in the pattern. To get rid of this warning, ' +
      ('please change the route path to "' + path.replace(/\*$/, '/*') + '".')
  );
  let paramNames = [];
  let regexpSource =
    '^' +
    path
      .replace(/\/*\*?$/, '')
      .replace(/^\/*/, '/')
      .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
      .replace(/:(\w+)/g, (_, paramName) => {
        paramNames.push(paramName);
        return '([^\\/]+)';
      });
  if (path.endsWith('*')) {
    paramNames.push('*');
    regexpSource += path === '*' || path === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$';
  } else if (end) {
    regexpSource += '\\/*$';
  } else if (path !== '' && path !== '/') {
    regexpSource += '(?:(?=\\/|$))';
  } else;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : 'i');
  return [matcher, paramNames];
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(
      false,
      'The URL path "' +
        value +
        '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
        ('encoding (' + error + ').')
    );
    return value;
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(
      false,
      'The value for the URL param "' +
        paramName +
        '" will not be decoded because' +
        (' the string "' + value + '" is a malformed URL segment. This is probably') +
        (' due to a bad percent encoding (' + error + ').')
    );
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === '/') return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith('/') ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== '/') {
    return null;
  }
  return pathname.slice(startIndex) || '/';
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === 'undefined') {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== 'undefined') console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {}
  }
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = '/';
  }
  let { pathname: toPathname, search = '', hash = '' } = typeof to === 'string' ? parsePath(to) : to;
  let pathname = toPathname
    ? toPathname.startsWith('/')
      ? toPathname
      : resolvePathname(toPathname, fromPathname)
    : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, '').split('/');
  let relativeSegments = relativePath.split('/');
  relativeSegments.forEach(segment => {
    if (segment === '..') {
      if (segments.length > 1) segments.pop();
    } else if (segment !== '.') {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join('/') : '/';
}
function getInvalidPathError(char, field, dest, path) {
  return (
    "Cannot include a '" +
    char +
    "' character in a manually specified " +
    ('`to.' + field + '` field [' + JSON.stringify(path) + '].  Please separate it out to the ') +
    ('`to.' + dest + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || (match.route.path && match.route.path.length > 0));
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === 'string') {
    to = parsePath(toArg);
  } else {
    to = _extends({}, toArg);
    invariant(!to.pathname || !to.pathname.includes('?'), getInvalidPathError('?', 'pathname', 'search', to));
    invariant(!to.pathname || !to.pathname.includes('#'), getInvalidPathError('#', 'pathname', 'hash', to));
    invariant(!to.search || !to.search.includes('#'), getInvalidPathError('#', 'search', 'hash', to));
  }
  let isEmptyPath = toArg === '' || to.pathname === '';
  let toPathname = isEmptyPath ? '/' : to.pathname;
  let from;
  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith('..')) {
      let toSegments = toPathname.split('/');
      while (toSegments[0] === '..') {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join('/');
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : '/';
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== '/' && toPathname.endsWith('/');
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === '.') && locationPathname.endsWith('/');
  if (!path.pathname.endsWith('/') && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += '/';
  }
  return path;
}
function getToPathname(to) {
  return to === '' || to.pathname === '' ? '/' : typeof to === 'string' ? parsePath(to).pathname : to.pathname;
}
var joinPaths = paths => paths.join('/').replace(/\/\/+/g, '/');
var normalizePathname = pathname => pathname.replace(/\/+$/, '').replace(/^\/*/, '/');
var normalizeSearch = search => (!search || search === '?' ? '' : search.startsWith('?') ? search : '?' + search);
var normalizeHash = hash => (!hash || hash === '#' ? '' : hash.startsWith('#') ? hash : '#' + hash);
var json = function json2(data, init) {
  if (init === void 0) {
    init = {};
  }
  let responseInit =
    typeof init === 'number'
      ? {
          status: init
        }
      : init;
  let headers = new Headers(responseInit.headers);
  if (!headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json; charset=utf-8');
  }
  return new Response(
    JSON.stringify(data),
    _extends({}, responseInit, {
      headers
    })
  );
};
var AbortedDeferredError = class extends Error {};
var DeferredData = class {
  constructor(data) {
    this.pendingKeys = /* @__PURE__ */ new Set();
    this.subscriber = void 0;
    invariant(data && typeof data === 'object' && !Array.isArray(data), 'defer() only accepts plain objects');
    let reject;
    this.abortPromise = new Promise((_, r) => (reject = r));
    this.controller = new AbortController();
    let onAbort = () => reject(new AbortedDeferredError('Deferred data aborted'));
    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener('abort', onAbort);
    this.controller.signal.addEventListener('abort', onAbort);
    this.data = Object.entries(data).reduce((acc, _ref) => {
      let [key, value] = _ref;
      return Object.assign(acc, {
        [key]: this.trackPromise(key, value)
      });
    }, {});
  }
  trackPromise(key, value) {
    if (!(value instanceof Promise)) {
      return value;
    }
    this.pendingKeys.add(key);
    let promise = Promise.race([value, this.abortPromise]).then(
      data => this.onSettle(promise, key, null, data),
      error => this.onSettle(promise, key, error)
    );
    promise.catch(() => {});
    Object.defineProperty(promise, '_tracked', {
      get: () => true
    });
    return promise;
  }
  onSettle(promise, key, error, data) {
    if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
      this.unlistenAbortSignal();
      Object.defineProperty(promise, '_error', {
        get: () => error
      });
      return Promise.reject(error);
    }
    this.pendingKeys.delete(key);
    if (this.done) {
      this.unlistenAbortSignal();
    }
    const subscriber = this.subscriber;
    if (error) {
      Object.defineProperty(promise, '_error', {
        get: () => error
      });
      subscriber && subscriber(false);
      return Promise.reject(error);
    }
    Object.defineProperty(promise, '_data', {
      get: () => data
    });
    subscriber && subscriber(false);
    return data;
  }
  subscribe(fn) {
    this.subscriber = fn;
  }
  cancel() {
    this.controller.abort();
    this.pendingKeys.forEach((v, k) => this.pendingKeys.delete(k));
    let subscriber = this.subscriber;
    subscriber && subscriber(true);
  }
  async resolveData(signal) {
    let aborted = false;
    if (!this.done) {
      let onAbort = () => this.cancel();
      signal.addEventListener('abort', onAbort);
      aborted = await new Promise(resolve => {
        this.subscribe(aborted2 => {
          signal.removeEventListener('abort', onAbort);
          if (aborted2 || this.done) {
            resolve(aborted2);
          }
        });
      });
    }
    return aborted;
  }
  get done() {
    return this.pendingKeys.size === 0;
  }
  get unwrappedData() {
    invariant(this.data !== null && this.done, 'Can only unwrap data on initialized and settled deferreds');
    return Object.entries(this.data).reduce((acc, _ref2) => {
      let [key, value] = _ref2;
      return Object.assign(acc, {
        [key]: unwrapTrackedPromise(value)
      });
    }, {});
  }
};
function isTrackedPromise(value) {
  return value instanceof Promise && value._tracked === true;
}
function unwrapTrackedPromise(value) {
  if (!isTrackedPromise(value)) {
    return value;
  }
  if (value._error) {
    throw value._error;
  }
  return value._data;
}
function defer(data) {
  return new DeferredData(data);
}
var redirect = function redirect2(url, init) {
  if (init === void 0) {
    init = 302;
  }
  let responseInit = init;
  if (typeof responseInit === 'number') {
    responseInit = {
      status: responseInit
    };
  } else if (typeof responseInit.status === 'undefined') {
    responseInit.status = 302;
  }
  let headers = new Headers(responseInit.headers);
  headers.set('Location', url);
  return new Response(
    null,
    _extends({}, responseInit, {
      headers
    })
  );
};
var ErrorResponse = class {
  constructor(status, statusText, data) {
    this.status = status;
    this.statusText = statusText || '';
    this.data = data;
  }
};
function isRouteErrorResponse(e) {
  return e instanceof ErrorResponse;
}
var IDLE_NAVIGATION = {
  state: 'idle',
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0
};
var IDLE_FETCHER = {
  state: 'idle',
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0
};
var isBrowser =
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined';
var isServer = !isBrowser;
function createRouter(init) {
  invariant(init.routes.length > 0, 'You must provide a non-empty routes array to createRouter');
  let dataRoutes = convertRoutesToDataRoutes(init.routes);
  let unlistenHistory = null;
  let subscribers = /* @__PURE__ */ new Set();
  let savedScrollPositions = null;
  let getScrollRestorationKey = null;
  let getScrollPosition = null;
  let initialScrollRestored = false;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, init.basename);
  let initialErrors = null;
  if (initialMatches == null) {
    let { matches, route, error } = getNotFoundMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = {
      [route.id]: error
    };
  }
  let initialized = !initialMatches.some(m => m.route.loader) || init.hydrationData != null;
  let router;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    restoreScrollPosition: null,
    preventScrollReset: false,
    revalidation: 'idle',
    loaderData: (init.hydrationData && init.hydrationData.loaderData) || {},
    actionData: (init.hydrationData && init.hydrationData.actionData) || null,
    errors: (init.hydrationData && init.hydrationData.errors) || initialErrors,
    fetchers: /* @__PURE__ */ new Map()
  };
  let pendingAction = Action.Pop;
  let pendingPreventScrollReset = false;
  let pendingNavigationController;
  let isUninterruptedRevalidation = false;
  let isRevalidationRequired = false;
  let cancelledDeferredRoutes = [];
  let cancelledFetcherLoads = [];
  let fetchControllers = /* @__PURE__ */ new Map();
  let incrementingLoadId = 0;
  let pendingNavigationLoadId = -1;
  let fetchReloadIds = /* @__PURE__ */ new Map();
  let fetchRedirectIds = /* @__PURE__ */ new Set();
  let fetchLoadMatches = /* @__PURE__ */ new Map();
  let activeDeferreds = /* @__PURE__ */ new Map();
  function initialize() {
    unlistenHistory = init.history.listen(_ref => {
      let { action: historyAction, location } = _ref;
      return startNavigation(historyAction, location);
    });
    if (!state.initialized) {
      startNavigation(Action.Pop, state.location);
    }
    return router;
  }
  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }
    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
  }
  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  }
  function updateState(newState) {
    state = _extends({}, state, newState);
    subscribers.forEach(subscriber => subscriber(state));
  }
  function completeNavigation(location, newState) {
    var _state$navigation$for;
    let isActionReload =
      state.actionData != null &&
      state.navigation.formMethod != null &&
      state.navigation.state === 'loading' &&
      ((_state$navigation$for = state.navigation.formAction) == null ? void 0 : _state$navigation$for.split('?')[0]) ===
        location.pathname;
    let newLoaderData = newState.loaderData
      ? {
          loaderData: mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [])
        }
      : {};
    updateState(
      _extends(
        {},
        isActionReload
          ? {}
          : {
              actionData: null
            },
        newState,
        newLoaderData,
        {
          historyAction: pendingAction,
          location,
          initialized: true,
          navigation: IDLE_NAVIGATION,
          revalidation: 'idle',
          restoreScrollPosition: state.navigation.formData
            ? false
            : getSavedScrollPosition(location, newState.matches || state.matches),
          preventScrollReset: pendingPreventScrollReset
        }
      )
    );
    if (isUninterruptedRevalidation);
    else if (pendingAction === Action.Pop);
    else if (pendingAction === Action.Push) {
      init.history.push(location, location.state);
    } else if (pendingAction === Action.Replace) {
      init.history.replace(location, location.state);
    }
    pendingAction = Action.Pop;
    pendingPreventScrollReset = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    cancelledDeferredRoutes = [];
    cancelledFetcherLoads = [];
  }
  async function navigate(to, opts) {
    if (typeof to === 'number') {
      init.history.go(to);
      return;
    }
    let { path, submission, error } = normalizeNavigateOptions(to, opts);
    let location = createLocation(state.location, path, opts && opts.state);
    location = init.history.encodeLocation(location);
    let historyAction = (opts && opts.replace) === true || submission != null ? Action.Replace : Action.Push;
    let preventScrollReset = opts && 'preventScrollReset' in opts ? opts.preventScrollReset === true : void 0;
    return await startNavigation(historyAction, location, {
      submission,
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace
    });
  }
  function revalidate() {
    interruptActiveLoads();
    updateState({
      revalidation: 'loading'
    });
    if (state.navigation.state === 'submitting') {
      return;
    }
    if (state.navigation.state === 'idle') {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return;
    }
    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
      overrideNavigation: state.navigation
    });
  }
  async function startNavigation(historyAction, location, opts) {
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = matchRoutes(dataRoutes, location, init.basename);
    if (!matches) {
      let { matches: notFoundMatches, route, error } = getNotFoundMatches(dataRoutes);
      cancelActiveDeferreds();
      completeNavigation(location, {
        matches: notFoundMatches,
        loaderData: {},
        errors: {
          [route.id]: error
        }
      });
      return;
    }
    if (isHashChangeOnly(state.location, location)) {
      completeNavigation(location, {
        matches
      });
      return;
    }
    pendingNavigationController = new AbortController();
    let request = createRequest(location, pendingNavigationController.signal, opts && opts.submission);
    let pendingActionData;
    let pendingError;
    if (opts && opts.pendingError) {
      pendingError = {
        [findNearestBoundary(matches).route.id]: opts.pendingError
      };
    } else if (opts && opts.submission) {
      let actionOutput = await handleAction(request, location, opts.submission, matches, {
        replace: opts.replace
      });
      if (actionOutput.shortCircuited) {
        return;
      }
      pendingActionData = actionOutput.pendingActionData;
      pendingError = actionOutput.pendingActionError;
      let navigation = _extends(
        {
          state: 'loading',
          location
        },
        opts.submission
      );
      loadingNavigation = navigation;
    }
    let { shortCircuited, loaderData, errors } = await handleLoaders(
      request,
      location,
      matches,
      loadingNavigation,
      opts && opts.submission,
      opts && opts.replace,
      pendingActionData,
      pendingError
    );
    if (shortCircuited) {
      return;
    }
    pendingNavigationController = null;
    completeNavigation(location, {
      matches,
      loaderData,
      errors
    });
  }
  async function handleAction(request, location, submission, matches, opts) {
    interruptActiveLoads();
    let navigation = _extends(
      {
        state: 'submitting',
        location
      },
      submission
    );
    updateState({
      navigation
    });
    let result;
    let actionMatch = getTargetMatch(matches, location);
    if (!actionMatch.route.action) {
      result = getMethodNotAllowedResult(location);
    } else {
      result = await callLoaderOrAction('action', request, actionMatch, matches, router.basename);
      if (request.signal.aborted) {
        return {
          shortCircuited: true
        };
      }
    }
    if (isRedirectResult(result)) {
      let redirectNavigation = _extends(
        {
          state: 'loading',
          location: createLocation(state.location, result.location)
        },
        submission
      );
      await startRedirectNavigation(result, redirectNavigation, opts && opts.replace);
      return {
        shortCircuited: true
      };
    }
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      if ((opts && opts.replace) !== true) {
        pendingAction = Action.Push;
      }
      return {
        pendingActionError: {
          [boundaryMatch.route.id]: result.error
        }
      };
    }
    if (isDeferredResult(result)) {
      throw new Error('defer() is not supported in actions');
    }
    return {
      pendingActionData: {
        [actionMatch.route.id]: result.data
      }
    };
  }
  async function handleLoaders(
    request,
    location,
    matches,
    overrideNavigation,
    submission,
    replace,
    pendingActionData,
    pendingError
  ) {
    let loadingNavigation = overrideNavigation;
    if (!loadingNavigation) {
      let navigation = {
        state: 'loading',
        location,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0
      };
      loadingNavigation = navigation;
    }
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(
      state,
      matches,
      submission,
      location,
      isRevalidationRequired,
      cancelledDeferredRoutes,
      cancelledFetcherLoads,
      pendingActionData,
      pendingError,
      fetchLoadMatches
    );
    cancelActiveDeferreds(
      routeId =>
        !(matches && matches.some(m => m.route.id === routeId)) ||
        (matchesToLoad && matchesToLoad.some(m => m.route.id === routeId))
    );
    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      completeNavigation(location, {
        matches,
        loaderData: mergeLoaderData(state.loaderData, {}, matches),
        errors: pendingError || null,
        actionData: pendingActionData || null
      });
      return {
        shortCircuited: true
      };
    }
    if (!isUninterruptedRevalidation) {
      revalidatingFetchers.forEach(_ref2 => {
        let [key] = _ref2;
        let fetcher = state.fetchers.get(key);
        let revalidatingFetcher = {
          state: 'loading',
          data: fetcher && fetcher.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0
        };
        state.fetchers.set(key, revalidatingFetcher);
      });
      updateState(
        _extends(
          {
            navigation: loadingNavigation,
            actionData: pendingActionData || state.actionData || null
          },
          revalidatingFetchers.length > 0
            ? {
                fetchers: new Map(state.fetchers)
              }
            : {}
        )
      );
    }
    pendingNavigationLoadId = ++incrementingLoadId;
    revalidatingFetchers.forEach(_ref3 => {
      let [key] = _ref3;
      return fetchControllers.set(key, pendingNavigationController);
    });
    let { results, loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(
      state.matches,
      matches,
      matchesToLoad,
      revalidatingFetchers,
      request
    );
    if (request.signal.aborted) {
      return {
        shortCircuited: true
      };
    }
    revalidatingFetchers.forEach(_ref4 => {
      let [key] = _ref4;
      return fetchControllers.delete(key);
    });
    let redirect3 = findRedirect(results);
    if (redirect3) {
      let redirectNavigation = getLoaderRedirect(state, redirect3);
      await startRedirectNavigation(redirect3, redirectNavigation, replace);
      return {
        shortCircuited: true
      };
    }
    let { loaderData, errors } = processLoaderData(
      state,
      matches,
      matchesToLoad,
      loaderResults,
      pendingError,
      revalidatingFetchers,
      fetcherResults,
      activeDeferreds
    );
    activeDeferreds.forEach((deferredData, routeId) => {
      deferredData.subscribe(aborted => {
        if (aborted || deferredData.done) {
          activeDeferreds.delete(routeId);
        }
      });
    });
    markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    return _extends(
      {
        loaderData,
        errors
      },
      didAbortFetchLoads || revalidatingFetchers.length > 0
        ? {
            fetchers: new Map(state.fetchers)
          }
        : {}
    );
  }
  function getFetcher(key) {
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  function fetch(key, routeId, href, opts) {
    if (isServer) {
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    }
    if (fetchControllers.has(key)) abortFetcher(key);
    let matches = matchRoutes(dataRoutes, href, init.basename);
    if (!matches) {
      setFetcherError(key, routeId, new ErrorResponse(404, 'Not Found', null));
      return;
    }
    let { path, submission } = normalizeNavigateOptions(href, opts, true);
    let match = getTargetMatch(matches, path);
    if (submission) {
      handleFetcherAction(key, routeId, path, match, matches, submission);
      return;
    }
    fetchLoadMatches.set(key, [path, match, matches]);
    handleFetcherLoader(key, routeId, path, match, matches);
  }
  async function handleFetcherAction(key, routeId, path, match, requestMatches, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);
    if (!match.route.action) {
      let { error } = getMethodNotAllowedResult(path);
      setFetcherError(key, routeId, error);
      return;
    }
    let existingFetcher = state.fetchers.get(key);
    let fetcher = _extends(
      {
        state: 'submitting'
      },
      submission,
      {
        data: existingFetcher && existingFetcher.data
      }
    );
    state.fetchers.set(key, fetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let abortController = new AbortController();
    let fetchRequest = createRequest(path, abortController.signal, submission);
    fetchControllers.set(key, abortController);
    let actionResult = await callLoaderOrAction('action', fetchRequest, match, requestMatches, router.basename);
    if (fetchRequest.signal.aborted) {
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }
      return;
    }
    if (isRedirectResult(actionResult)) {
      fetchControllers.delete(key);
      fetchRedirectIds.add(key);
      let loadingFetcher = _extends(
        {
          state: 'loading'
        },
        submission,
        {
          data: void 0
        }
      );
      state.fetchers.set(key, loadingFetcher);
      updateState({
        fetchers: new Map(state.fetchers)
      });
      let redirectNavigation = _extends(
        {
          state: 'loading',
          location: createLocation(state.location, actionResult.location)
        },
        submission
      );
      await startRedirectNavigation(actionResult, redirectNavigation);
      return;
    }
    if (isErrorResult(actionResult)) {
      setFetcherError(key, routeId, actionResult.error);
      return;
    }
    if (isDeferredResult(actionResult)) {
      invariant(false, 'defer() is not supported in actions');
    }
    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createRequest(nextLocation, abortController.signal);
    let matches =
      state.navigation.state !== 'idle'
        ? matchRoutes(dataRoutes, state.navigation.location, init.basename)
        : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let loadFetcher = _extends(
      {
        state: 'loading',
        data: actionResult.data
      },
      submission
    );
    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(
      state,
      matches,
      submission,
      nextLocation,
      isRevalidationRequired,
      cancelledDeferredRoutes,
      cancelledFetcherLoads,
      {
        [match.route.id]: actionResult.data
      },
      void 0,
      fetchLoadMatches
    );
    revalidatingFetchers
      .filter(_ref5 => {
        let [staleKey] = _ref5;
        return staleKey !== key;
      })
      .forEach(_ref6 => {
        let [staleKey] = _ref6;
        let existingFetcher2 = state.fetchers.get(staleKey);
        let revalidatingFetcher = {
          state: 'loading',
          data: existingFetcher2 && existingFetcher2.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0
        };
        state.fetchers.set(staleKey, revalidatingFetcher);
        fetchControllers.set(staleKey, abortController);
      });
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let { results, loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(
      state.matches,
      matches,
      matchesToLoad,
      revalidatingFetchers,
      revalidationRequest
    );
    if (abortController.signal.aborted) {
      return;
    }
    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach(_ref7 => {
      let [staleKey] = _ref7;
      return fetchControllers.delete(staleKey);
    });
    let redirect3 = findRedirect(results);
    if (redirect3) {
      let redirectNavigation = getLoaderRedirect(state, redirect3);
      await startRedirectNavigation(redirect3, redirectNavigation);
      return;
    }
    let { loaderData, errors } = processLoaderData(
      state,
      state.matches,
      matchesToLoad,
      loaderResults,
      void 0,
      revalidatingFetchers,
      fetcherResults,
      activeDeferreds
    );
    let doneFetcher = {
      state: 'idle',
      data: actionResult.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0
    };
    state.fetchers.set(key, doneFetcher);
    let didAbortFetchLoads = abortStaleFetchLoads(loadId);
    if (state.navigation.state === 'loading' && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, 'Expected pending action');
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      updateState(
        _extends(
          {
            errors,
            loaderData: mergeLoaderData(state.loaderData, loaderData, matches)
          },
          didAbortFetchLoads
            ? {
                fetchers: new Map(state.fetchers)
              }
            : {}
        )
      );
      isRevalidationRequired = false;
    }
  }
  async function handleFetcherLoader(key, routeId, path, match, matches) {
    let existingFetcher = state.fetchers.get(key);
    let loadingFetcher = {
      state: 'loading',
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      data: existingFetcher && existingFetcher.data
    };
    state.fetchers.set(key, loadingFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let abortController = new AbortController();
    let fetchRequest = createRequest(path, abortController.signal);
    fetchControllers.set(key, abortController);
    let result = await callLoaderOrAction('loader', fetchRequest, match, matches, router.basename);
    if (isDeferredResult(result)) {
      result = (await resolveDeferredData(result, fetchRequest.signal, true)) || result;
    }
    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }
    if (fetchRequest.signal.aborted) {
      return;
    }
    if (isRedirectResult(result)) {
      let redirectNavigation = getLoaderRedirect(state, result);
      await startRedirectNavigation(result, redirectNavigation);
      return;
    }
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, routeId);
      state.fetchers.delete(key);
      updateState({
        fetchers: new Map(state.fetchers),
        errors: {
          [boundaryMatch.route.id]: result.error
        }
      });
      return;
    }
    invariant(!isDeferredResult(result), 'Unhandled fetcher deferred data');
    let doneFetcher = {
      state: 'idle',
      data: result.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0
    };
    state.fetchers.set(key, doneFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
  }
  async function startRedirectNavigation(redirect3, navigation, replace) {
    if (redirect3.revalidate) {
      isRevalidationRequired = true;
    }
    invariant(navigation.location, 'Expected a location on the redirect navigation');
    pendingNavigationController = null;
    let redirectHistoryAction = replace === true ? Action.Replace : Action.Push;
    await startNavigation(redirectHistoryAction, navigation.location, {
      overrideNavigation: navigation
    });
  }
  async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
    let results = await Promise.all([
      ...matchesToLoad.map(match => callLoaderOrAction('loader', request, match, matches, router.basename)),
      ...fetchersToLoad.map(_ref8 => {
        let [, href, match, fetchMatches] = _ref8;
        return callLoaderOrAction('loader', createRequest(href, request.signal), match, fetchMatches, router.basename);
      })
    ]);
    let loaderResults = results.slice(0, matchesToLoad.length);
    let fetcherResults = results.slice(matchesToLoad.length);
    await Promise.all([
      resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, request.signal, false, state.loaderData),
      resolveDeferredResults(
        currentMatches,
        fetchersToLoad.map(_ref9 => {
          let [, , match] = _ref9;
          return match;
        }),
        fetcherResults,
        request.signal,
        true
      )
    ]);
    return {
      results,
      loaderResults,
      fetcherResults
    };
  }
  function interruptActiveLoads() {
    isRevalidationRequired = true;
    cancelledDeferredRoutes.push(...cancelActiveDeferreds());
    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.push(key);
        abortFetcher(key);
      }
    });
  }
  function setFetcherError(key, routeId, error) {
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState({
      errors: {
        [boundaryMatch.route.id]: error
      },
      fetchers: new Map(state.fetchers)
    });
  }
  function deleteFetcher(key) {
    if (fetchControllers.has(key)) abortFetcher(key);
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    state.fetchers.delete(key);
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant(controller, 'Expected fetch controller: ' + key);
    controller.abort();
    fetchControllers.delete(key);
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = {
        state: 'idle',
        data: fetcher.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0
      };
      state.fetchers.set(key, doneFetcher);
    }
  }
  function markFetchRedirectsDone() {
    let doneKeys = [];
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, 'Expected fetcher: ' + key);
      if (fetcher.state === 'loading') {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
      }
    }
    markFetchersDone(doneKeys);
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, 'Expected fetcher: ' + key);
        if (fetcher.state === 'loading') {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }
    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }
  function cancelActiveDeferreds(predicate) {
    let cancelledRouteIds = [];
    activeDeferreds.forEach((dfd, routeId) => {
      if (!predicate || predicate(routeId)) {
        dfd.cancel();
        cancelledRouteIds.push(routeId);
        activeDeferreds.delete(routeId);
      }
    });
    return cancelledRouteIds;
  }
  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions = positions;
    getScrollPosition = getPosition;
    getScrollRestorationKey = getKey || (location => location.key);
    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);
      if (y != null) {
        updateState({
          restoreScrollPosition: y
        });
      }
    }
    return () => {
      savedScrollPositions = null;
      getScrollPosition = null;
      getScrollRestorationKey = null;
    };
  }
  function saveScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
      let userMatches = matches.map(m => createUseMatchesMatch(m, state.loaderData));
      let key = getScrollRestorationKey(location, userMatches) || location.key;
      savedScrollPositions[key] = getScrollPosition();
    }
  }
  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
      let userMatches = matches.map(m => createUseMatchesMatch(m, state.loaderData));
      let key = getScrollRestorationKey(location, userMatches) || location.key;
      let y = savedScrollPositions[key];
      if (typeof y === 'number') {
        return y;
      }
    }
    return null;
  }
  router = {
    get basename() {
      return init.basename;
    },
    get state() {
      return state;
    },
    get routes() {
      return dataRoutes;
    },
    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch,
    revalidate,
    createHref: to => init.history.createHref(to),
    getFetcher,
    deleteFetcher,
    dispose,
    _internalFetchControllers: fetchControllers,
    _internalActiveDeferreds: activeDeferreds
  };
  return router;
}
var validActionMethods = /* @__PURE__ */ new Set(['POST', 'PUT', 'PATCH', 'DELETE']);
var validRequestMethods = /* @__PURE__ */ new Set(['GET', 'HEAD', ...validActionMethods]);
function unstable_createStaticHandler(routes) {
  invariant(routes.length > 0, 'You must provide a non-empty routes array to unstable_createStaticHandler');
  let dataRoutes = convertRoutesToDataRoutes(routes);
  async function query(request) {
    let url = new URL(request.url);
    let location = createLocation('', createPath(url), null, 'default');
    let matches = matchRoutes(dataRoutes, location);
    if (!validRequestMethods.has(request.method)) {
      let { matches: methodNotAllowedMatches, route, error } = getMethodNotAllowedMatches(dataRoutes);
      return {
        location,
        matches: methodNotAllowedMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {}
      };
    } else if (!matches) {
      let { matches: notFoundMatches, route, error } = getNotFoundMatches(dataRoutes);
      return {
        location,
        matches: notFoundMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {}
      };
    }
    let result = await queryImpl(request, location, matches);
    if (result instanceof Response) {
      return result;
    }
    return _extends(
      {
        location
      },
      result
    );
  }
  async function queryRoute(request, routeId) {
    let url = new URL(request.url);
    let location = createLocation('', createPath(url), null, 'default');
    let matches = matchRoutes(dataRoutes, location);
    if (!validRequestMethods.has(request.method)) {
      throw createRouterErrorResponse(null, {
        status: 405,
        statusText: 'Method Not Allowed'
      });
    } else if (!matches) {
      throw createRouterErrorResponse(null, {
        status: 404,
        statusText: 'Not Found'
      });
    }
    let match = routeId ? matches.find(m => m.route.id === routeId) : getTargetMatch(matches, location);
    if (!match) {
      throw createRouterErrorResponse(null, {
        status: 404,
        statusText: 'Not Found'
      });
    }
    let result = await queryImpl(request, location, matches, match);
    if (result instanceof Response) {
      return result;
    }
    let error = result.errors ? Object.values(result.errors)[0] : void 0;
    if (error !== void 0) {
      throw error;
    }
    let routeData = [result.actionData, result.loaderData].find(v => v);
    return Object.values(routeData || {})[0];
  }
  async function queryImpl(request, location, matches, routeMatch) {
    invariant(request.signal, 'query()/queryRoute() requests must contain an AbortController signal');
    try {
      if (validActionMethods.has(request.method)) {
        let result2 = await submit(
          request,
          matches,
          routeMatch || getTargetMatch(matches, location),
          routeMatch != null
        );
        return result2;
      }
      let result = await loadRouteData(request, matches, routeMatch);
      return result instanceof Response
        ? result
        : _extends({}, result, {
            actionData: null,
            actionHeaders: {}
          });
    } catch (e) {
      if (isQueryRouteResponse(e)) {
        if (e.type === ResultType.error && !isRedirectResponse(e.response)) {
          throw e.response;
        }
        return e.response;
      }
      if (isRedirectResponse(e)) {
        return e;
      }
      throw e;
    }
  }
  async function submit(request, matches, actionMatch, isRouteRequest) {
    let result;
    if (!actionMatch.route.action) {
      if (isRouteRequest) {
        throw createRouterErrorResponse(null, {
          status: 405,
          statusText: 'Method Not Allowed'
        });
      }
      result = getMethodNotAllowedResult(request.url);
    } else {
      result = await callLoaderOrAction('action', request, actionMatch, matches, void 0, true, isRouteRequest);
      if (request.signal.aborted) {
        let method = isRouteRequest ? 'queryRoute' : 'query';
        throw new Error(method + '() call aborted');
      }
    }
    if (isRedirectResult(result)) {
      throw new Response(null, {
        status: result.status,
        headers: {
          Location: result.location
        }
      });
    }
    if (isDeferredResult(result)) {
      throw new Error('defer() is not supported in actions');
    }
    if (isRouteRequest) {
      if (isErrorResult(result)) {
        let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
        return {
          matches: [actionMatch],
          loaderData: {},
          actionData: null,
          errors: {
            [boundaryMatch.route.id]: result.error
          },
          statusCode: 500,
          loaderHeaders: {},
          actionHeaders: {}
        };
      }
      return {
        matches: [actionMatch],
        loaderData: {},
        actionData: {
          [actionMatch.route.id]: result.data
        },
        errors: null,
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {}
      };
    }
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      let context2 = await loadRouteData(request, matches, void 0, {
        [boundaryMatch.route.id]: result.error
      });
      return _extends({}, context2, {
        statusCode: isRouteErrorResponse(result.error) ? result.error.status : 500,
        actionData: null,
        actionHeaders: _extends(
          {},
          result.headers
            ? {
                [actionMatch.route.id]: result.headers
              }
            : {}
        )
      });
    }
    let context = await loadRouteData(request, matches);
    return _extends(
      {},
      context,
      result.statusCode
        ? {
            statusCode: result.statusCode
          }
        : {},
      {
        actionData: {
          [actionMatch.route.id]: result.data
        },
        actionHeaders: _extends(
          {},
          result.headers
            ? {
                [actionMatch.route.id]: result.headers
              }
            : {}
        )
      }
    );
  }
  async function loadRouteData(request, matches, routeMatch, pendingActionError) {
    let isRouteRequest = routeMatch != null;
    let requestMatches = routeMatch
      ? [routeMatch]
      : getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0]);
    let matchesToLoad = requestMatches.filter(m => m.route.loader);
    if (matchesToLoad.length === 0) {
      return {
        matches,
        loaderData: {},
        errors: pendingActionError || null,
        statusCode: 200,
        loaderHeaders: {}
      };
    }
    let results = await Promise.all([
      ...matchesToLoad.map(match => callLoaderOrAction('loader', request, match, matches, void 0, true, isRouteRequest))
    ]);
    if (request.signal.aborted) {
      let method = isRouteRequest ? 'queryRoute' : 'query';
      throw new Error(method + '() call aborted');
    }
    results.forEach(result => {
      if (isDeferredResult(result)) {
        result.deferredData.cancel();
      }
    });
    let context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionError);
    return _extends({}, context, {
      matches
    });
  }
  function createRouterErrorResponse(body, init) {
    return new Response(
      body,
      _extends({}, init, {
        headers: _extends({}, init.headers, {
          'X-Remix-Router-Error': 'yes'
        })
      })
    );
  }
  return {
    dataRoutes,
    query,
    queryRoute
  };
}
function getStaticContextFromError(routes, context, error) {
  let newContext = _extends({}, context, {
    statusCode: 500,
    errors: {
      [context._deepestRenderedBoundaryId || routes[0].id]: error
    }
  });
  return newContext;
}
function normalizeNavigateOptions(to, opts, isFetcher) {
  if (isFetcher === void 0) {
    isFetcher = false;
  }
  let path = typeof to === 'string' ? to : createPath(to);
  if (!opts || (!('formMethod' in opts) && !('formData' in opts))) {
    return {
      path
    };
  }
  if (opts.formMethod != null && opts.formMethod !== 'get') {
    return {
      path,
      submission: {
        formMethod: opts.formMethod,
        formAction: stripHashFromPath(path),
        formEncType: (opts && opts.formEncType) || 'application/x-www-form-urlencoded',
        formData: opts.formData
      }
    };
  }
  if (!opts.formData) {
    return {
      path
    };
  }
  let parsedPath = parsePath(path);
  try {
    let searchParams = convertFormDataToSearchParams(opts.formData);
    if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
      searchParams.append('index', '');
    }
    parsedPath.search = '?' + searchParams;
  } catch (e) {
    return {
      path,
      error: new ErrorResponse(400, 'Bad Request', 'Cannot submit binary form data using GET')
    };
  }
  return {
    path: createPath(parsedPath)
  };
}
function getLoaderRedirect(state, redirect3) {
  let { formMethod, formAction, formEncType, formData } = state.navigation;
  let navigation = {
    state: 'loading',
    location: createLocation(state.location, redirect3.location),
    formMethod: formMethod || void 0,
    formAction: formAction || void 0,
    formEncType: formEncType || void 0,
    formData: formData || void 0
  };
  return navigation;
}
function getLoaderMatchesUntilBoundary(matches, boundaryId) {
  let boundaryMatches = matches;
  if (boundaryId) {
    let index = matches.findIndex(m => m.route.id === boundaryId);
    if (index >= 0) {
      boundaryMatches = matches.slice(0, index);
    }
  }
  return boundaryMatches;
}
function getMatchesToLoad(
  state,
  matches,
  submission,
  location,
  isRevalidationRequired,
  cancelledDeferredRoutes,
  cancelledFetcherLoads,
  pendingActionData,
  pendingError,
  fetchLoadMatches
) {
  let actionResult = pendingError
    ? Object.values(pendingError)[0]
    : pendingActionData
    ? Object.values(pendingActionData)[0]
    : null;
  let boundaryId = pendingError ? Object.keys(pendingError)[0] : void 0;
  let boundaryMatches = getLoaderMatchesUntilBoundary(matches, boundaryId);
  let navigationMatches = boundaryMatches.filter(
    (match, index) =>
      match.route.loader != null &&
      (isNewLoader(state.loaderData, state.matches[index], match) ||
        cancelledDeferredRoutes.some(id => id === match.route.id) ||
        shouldRevalidateLoader(
          state.location,
          state.matches[index],
          submission,
          location,
          match,
          isRevalidationRequired,
          actionResult
        ))
  );
  let revalidatingFetchers = [];
  fetchLoadMatches &&
    fetchLoadMatches.forEach((_ref10, key) => {
      let [href, match, fetchMatches] = _ref10;
      if (cancelledFetcherLoads.includes(key)) {
        revalidatingFetchers.push([key, href, match, fetchMatches]);
      } else if (isRevalidationRequired) {
        let shouldRevalidate = shouldRevalidateLoader(
          href,
          match,
          submission,
          href,
          match,
          isRevalidationRequired,
          actionResult
        );
        if (shouldRevalidate) {
          revalidatingFetchers.push([key, href, match, fetchMatches]);
        }
      }
    });
  return [navigationMatches, revalidatingFetchers];
}
function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew = !currentMatch || match.route.id !== currentMatch.route.id;
  let isMissingData = currentLoaderData[match.route.id] === void 0;
  return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (
    currentMatch.pathname !== match.pathname ||
    (currentPath && currentPath.endsWith('*') && currentMatch.params['*'] !== match.params['*'])
  );
}
function shouldRevalidateLoader(
  currentLocation,
  currentMatch,
  submission,
  location,
  match,
  isRevalidationRequired,
  actionResult
) {
  let currentUrl = createURL(currentLocation);
  let currentParams = currentMatch.params;
  let nextUrl = createURL(location);
  let nextParams = match.params;
  let defaultShouldRevalidate =
    isNewRouteInstance(currentMatch, match) ||
    currentUrl.toString() === nextUrl.toString() ||
    currentUrl.search !== nextUrl.search ||
    isRevalidationRequired;
  if (match.route.shouldRevalidate) {
    let routeChoice = match.route.shouldRevalidate(
      _extends(
        {
          currentUrl,
          currentParams,
          nextUrl,
          nextParams
        },
        submission,
        {
          actionResult,
          defaultShouldRevalidate
        }
      )
    );
    if (typeof routeChoice === 'boolean') {
      return routeChoice;
    }
  }
  return defaultShouldRevalidate;
}
async function callLoaderOrAction(type, request, match, matches, basename, isStaticRequest, isRouteRequest) {
  if (isStaticRequest === void 0) {
    isStaticRequest = false;
  }
  if (isRouteRequest === void 0) {
    isRouteRequest = false;
  }
  let resultType;
  let result;
  let reject;
  let abortPromise = new Promise((_, r) => (reject = r));
  let onReject = () => reject();
  request.signal.addEventListener('abort', onReject);
  try {
    let handler = match.route[type];
    invariant(handler, 'Could not find the ' + type + ' to run on the "' + match.route.id + '" route');
    result = await Promise.race([
      handler({
        request,
        params: match.params
      }),
      abortPromise
    ]);
  } catch (e) {
    resultType = ResultType.error;
    result = e;
  } finally {
    request.signal.removeEventListener('abort', onReject);
  }
  if (result instanceof Response) {
    let status = result.status;
    if (status >= 300 && status <= 399) {
      let location = result.headers.get('Location');
      invariant(location, 'Redirects returned/thrown from loaders/actions must have a Location header');
      let activeMatches = matches.slice(0, matches.indexOf(match) + 1);
      let routePathnames = getPathContributingMatches(activeMatches).map(match2 => match2.pathnameBase);
      let requestPath = createURL(request.url).pathname;
      let resolvedLocation = resolveTo(location, routePathnames, requestPath);
      invariant(createPath(resolvedLocation), 'Unable to resolve redirect location: ' + result.headers.get('Location'));
      if (basename) {
        let path = resolvedLocation.pathname;
        resolvedLocation.pathname = path === '/' ? basename : joinPaths([basename, path]);
      }
      location = createPath(resolvedLocation);
      if (isStaticRequest) {
        result.headers.set('Location', location);
        throw result;
      }
      return {
        type: ResultType.redirect,
        status,
        location,
        revalidate: result.headers.get('X-Remix-Revalidate') !== null
      };
    }
    if (isRouteRequest) {
      throw {
        type: resultType || ResultType.data,
        response: result
      };
    }
    let data;
    let contentType = result.headers.get('Content-Type');
    if (contentType && contentType.startsWith('application/json')) {
      data = await result.json();
    } else {
      data = await result.text();
    }
    if (resultType === ResultType.error) {
      return {
        type: resultType,
        error: new ErrorResponse(status, result.statusText, data),
        headers: result.headers
      };
    }
    return {
      type: ResultType.data,
      data,
      statusCode: result.status,
      headers: result.headers
    };
  }
  if (resultType === ResultType.error) {
    return {
      type: resultType,
      error: result
    };
  }
  if (result instanceof DeferredData) {
    return {
      type: ResultType.deferred,
      deferredData: result
    };
  }
  return {
    type: ResultType.data,
    data: result
  };
}
function createRequest(location, signal, submission) {
  let url = createURL(stripHashFromPath(location)).toString();
  let init = {
    signal
  };
  if (submission) {
    let { formMethod, formEncType, formData } = submission;
    init.method = formMethod.toUpperCase();
    init.body =
      formEncType === 'application/x-www-form-urlencoded' ? convertFormDataToSearchParams(formData) : formData;
  }
  return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();
  for (let [key, value] of formData.entries()) {
    invariant(
      typeof value === 'string',
      'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'
    );
    searchParams.append(key, value);
  }
  return searchParams;
}
function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {};
  results.forEach((result, index) => {
    let id = matchesToLoad[index].route.id;
    invariant(!isRedirectResult(result), 'Cannot handle redirect results in processLoaderData');
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(matches, id);
      let error = result.error;
      if (pendingError) {
        error = Object.values(pendingError)[0];
        pendingError = void 0;
      }
      errors = Object.assign(errors || {}, {
        [boundaryMatch.route.id]: error
      });
      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else if (isDeferredResult(result)) {
      activeDeferreds && activeDeferreds.set(id, result.deferredData);
      loaderData[id] = result.deferredData.data;
    } else {
      loaderData[id] = result.data;
      if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
        statusCode = result.statusCode;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    }
  });
  if (pendingError) {
    errors = pendingError;
  }
  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}
function processLoaderData(
  state,
  matches,
  matchesToLoad,
  results,
  pendingError,
  revalidatingFetchers,
  fetcherResults,
  activeDeferreds
) {
  let { loaderData, errors } = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds);
  for (let index = 0; index < revalidatingFetchers.length; index++) {
    let [key, , match] = revalidatingFetchers[index];
    invariant(
      fetcherResults !== void 0 && fetcherResults[index] !== void 0,
      'Did not find corresponding fetcher result'
    );
    let result = fetcherResults[index];
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match.route.id);
      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = _extends({}, errors, {
          [boundaryMatch.route.id]: result.error
        });
      }
      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      throw new Error('Unhandled fetcher revalidation redirect');
    } else if (isDeferredResult(result)) {
      throw new Error('Unhandled fetcher deferred data');
    } else {
      let doneFetcher = {
        state: 'idle',
        data: result.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0
      };
      state.fetchers.set(key, doneFetcher);
    }
  }
  return {
    loaderData,
    errors
  };
}
function mergeLoaderData(loaderData, newLoaderData, matches) {
  let mergedLoaderData = _extends({}, newLoaderData);
  matches.forEach(match => {
    let id = match.route.id;
    if (newLoaderData[id] === void 0 && loaderData[id] !== void 0) {
      mergedLoaderData[id] = loaderData[id];
    }
  });
  return mergedLoaderData;
}
function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex(m => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find(m => m.route.hasErrorBoundary === true) || matches[0];
}
function getShortCircuitMatches(routes, status, statusText) {
  let route = routes.find(r => r.index || !r.path || r.path === '/') || {
    id: '__shim-' + status + '-route__'
  };
  return {
    matches: [
      {
        params: {},
        pathname: '',
        pathnameBase: '',
        route
      }
    ],
    route,
    error: new ErrorResponse(status, statusText, null)
  };
}
function getNotFoundMatches(routes) {
  return getShortCircuitMatches(routes, 404, 'Not Found');
}
function getMethodNotAllowedMatches(routes) {
  return getShortCircuitMatches(routes, 405, 'Method Not Allowed');
}
function getMethodNotAllowedResult(path) {
  let href = typeof path === 'string' ? path : createPath(path);
  console.warn(
    "You're trying to submit to a route that does not have an action.  To fix this, please add an `action` function to the route for " +
      ('[' + href + ']')
  );
  return {
    type: ResultType.error,
    error: new ErrorResponse(405, 'Method Not Allowed', '')
  };
}
function findRedirect(results) {
  for (let i = results.length - 1; i >= 0; i--) {
    let result = results[i];
    if (isRedirectResult(result)) {
      return result;
    }
  }
}
function stripHashFromPath(path) {
  let parsedPath = typeof path === 'string' ? parsePath(path) : path;
  return createPath(
    _extends({}, parsedPath, {
      hash: ''
    })
  );
}
function isHashChangeOnly(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash !== b.hash;
}
function isDeferredResult(result) {
  return result.type === ResultType.deferred;
}
function isErrorResult(result) {
  return result.type === ResultType.error;
}
function isRedirectResult(result) {
  return (result && result.type) === ResultType.redirect;
}
function isRedirectResponse(result) {
  if (!(result instanceof Response)) {
    return false;
  }
  let status = result.status;
  let location = result.headers.get('Location');
  return status >= 300 && status <= 399 && location != null;
}
function isQueryRouteResponse(obj) {
  return obj && obj.response instanceof Response && (obj.type === ResultType.data || ResultType.error);
}
async function resolveDeferredResults(currentMatches, matchesToLoad, results, signal, isFetcher, currentLoaderData) {
  for (let index = 0; index < results.length; index++) {
    let result = results[index];
    let match = matchesToLoad[index];
    let currentMatch = currentMatches.find(m => m.route.id === match.route.id);
    let isRevalidatingLoader =
      currentMatch != null &&
      !isNewRouteInstance(currentMatch, match) &&
      (currentLoaderData && currentLoaderData[match.route.id]) !== void 0;
    if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
      await resolveDeferredData(result, signal, isFetcher).then(result2 => {
        if (result2) {
          results[index] = result2 || results[index];
        }
      });
    }
  }
}
async function resolveDeferredData(result, signal, unwrap) {
  if (unwrap === void 0) {
    unwrap = false;
  }
  let aborted = await result.deferredData.resolveData(signal);
  if (aborted) {
    return;
  }
  if (unwrap) {
    try {
      return {
        type: ResultType.data,
        data: result.deferredData.unwrappedData
      };
    } catch (e) {
      return {
        type: ResultType.error,
        error: e
      };
    }
  }
  return {
    type: ResultType.data,
    data: result.deferredData.data
  };
}
function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll('index').some(v => v === '');
}
function createUseMatchesMatch(match, loaderData) {
  let { route, pathname, params } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}
function getTargetMatch(matches, location) {
  let search = typeof location === 'string' ? parsePath(location).search : location.search;
  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || '')) {
    return matches[matches.length - 1];
  }
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
}
export {
  AbortedDeferredError,
  Action,
  ErrorResponse,
  IDLE_FETCHER,
  IDLE_NAVIGATION,
  convertRoutesToDataRoutes as UNSAFE_convertRoutesToDataRoutes,
  getPathContributingMatches as UNSAFE_getPathContributingMatches,
  createBrowserHistory,
  createHashHistory,
  createMemoryHistory,
  createPath,
  createRouter,
  defer,
  generatePath,
  getStaticContextFromError,
  getToPathname,
  invariant,
  isRouteErrorResponse,
  joinPaths,
  json,
  matchPath,
  matchRoutes,
  normalizePathname,
  parsePath,
  redirect,
  resolvePath,
  resolveTo,
  stripBasename,
  unstable_createStaticHandler,
  warning
};
/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
