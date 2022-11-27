/* esm.sh - esbuild bundle(react-router@6.4.3) es2022 development */
// esm-build-494e20236a93f74f7524589d86405817a2815794-37c3d17d/node_modules/react-router/dist/index.js
import {
  invariant,
  joinPaths,
  matchPath,
  UNSAFE_getPathContributingMatches,
  warning,
  resolveTo,
  parsePath,
  matchRoutes,
  Action,
  isRouteErrorResponse,
  createMemoryHistory,
  stripBasename,
  AbortedDeferredError,
  createRouter
} from '/cdn/v99/@remix-run/router@1.0.3/es2022/router.development.js';
import {
  AbortedDeferredError as AbortedDeferredError2,
  Action as Action2,
  createPath,
  defer,
  generatePath,
  isRouteErrorResponse as isRouteErrorResponse2,
  json,
  matchPath as matchPath2,
  matchRoutes as matchRoutes2,
  parsePath as parsePath2,
  redirect,
  resolvePath
} from '/cdn/v99/@remix-run/router@1.0.3/es2022/router.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
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
function isPolyfill(x, y) {
  return (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y);
}
var is = typeof Object.is === 'function' ? Object.is : isPolyfill;
var { useState: useState2, useEffect: useEffect2, useLayoutEffect: useLayoutEffect2, useDebugValue } = React;
var didWarnOld18Alpha = false;
var didWarnUncachedGetSnapshot = false;
function useSyncExternalStore$2(subscribe, getSnapshot, getServerSnapshot) {
  if (true) {
    if (!didWarnOld18Alpha) {
      if ('startTransition' in React) {
        didWarnOld18Alpha = true;
        console.error(
          'You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.'
        );
      }
    }
  }
  const value = getSnapshot();
  if (true) {
    if (!didWarnUncachedGetSnapshot) {
      const cachedValue = getSnapshot();
      if (!is(value, cachedValue)) {
        console.error('The result of getSnapshot should be cached to avoid an infinite loop');
        didWarnUncachedGetSnapshot = true;
      }
    }
  }
  const [{ inst }, forceUpdate] = useState2({
    inst: {
      value,
      getSnapshot
    }
  });
  useLayoutEffect2(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot;
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect2(() => {
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
    const handleStoreChange = () => {
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({
          inst
        });
      }
    };
    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;
  try {
    const nextValue = latestGetSnapshot();
    return !is(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  return getSnapshot();
}
var canUseDOM = !!(
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'
);
var isServerEnvironment = !canUseDOM;
var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
var useSyncExternalStore = 'useSyncExternalStore' in React ? (module => module.useSyncExternalStore)(React) : shim;
var DataStaticRouterContext = /* @__PURE__ */ React.createContext(null);
if (true) {
  DataStaticRouterContext.displayName = 'DataStaticRouterContext';
}
var DataRouterContext = /* @__PURE__ */ React.createContext(null);
if (true) {
  DataRouterContext.displayName = 'DataRouter';
}
var DataRouterStateContext = /* @__PURE__ */ React.createContext(null);
if (true) {
  DataRouterStateContext.displayName = 'DataRouterState';
}
var AwaitContext = /* @__PURE__ */ React.createContext(null);
if (true) {
  AwaitContext.displayName = 'Await';
}
var NavigationContext = /* @__PURE__ */ React.createContext(null);
if (true) {
  NavigationContext.displayName = 'Navigation';
}
var LocationContext = /* @__PURE__ */ React.createContext(null);
if (true) {
  LocationContext.displayName = 'Location';
}
var RouteContext = /* @__PURE__ */ React.createContext({
  outlet: null,
  matches: []
});
if (true) {
  RouteContext.displayName = 'Route';
}
var RouteErrorContext = /* @__PURE__ */ React.createContext(null);
if (true) {
  RouteErrorContext.displayName = 'RouteError';
}
function useHref(to, _temp) {
  let { relative } = _temp === void 0 ? {} : _temp;
  !useInRouterContext()
    ? true
      ? invariant(false, 'useHref() may be used only in the context of a <Router> component.')
      : invariant(false)
    : void 0;
  let { basename, navigator } = React.useContext(NavigationContext);
  let { hash, pathname, search } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;
  if (basename !== '/') {
    joinedPathname = pathname === '/' ? basename : joinPaths([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return React.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext()
    ? true
      ? invariant(false, 'useLocation() may be used only in the context of a <Router> component.')
      : invariant(false)
    : void 0;
  return React.useContext(LocationContext).location;
}
function useNavigationType() {
  return React.useContext(LocationContext).navigationType;
}
function useMatch(pattern) {
  !useInRouterContext()
    ? true
      ? invariant(false, 'useMatch() may be used only in the context of a <Router> component.')
      : invariant(false)
    : void 0;
  let { pathname } = useLocation();
  return React.useMemo(() => matchPath(pattern, pathname), [pathname, pattern]);
}
function useNavigate() {
  !useInRouterContext()
    ? true
      ? invariant(false, 'useNavigate() may be used only in the context of a <Router> component.')
      : invariant(false)
    : void 0;
  let { basename, navigator } = React.useContext(NavigationContext);
  let { matches } = React.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(UNSAFE_getPathContributingMatches(matches).map(match => match.pathnameBase));
  let activeRef = React.useRef(false);
  React.useEffect(() => {
    activeRef.current = true;
  });
  let navigate = React.useCallback(
    function(to, options) {
      if (options === void 0) {
        options = {};
      }
      true
        ? warning(
            activeRef.current,
            'You should call navigate() in a React.useEffect(), not when your component is first rendered.'
          )
        : void 0;
      if (!activeRef.current) return;
      if (typeof to === 'number') {
        navigator.go(to);
        return;
      }
      let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === 'path');
      if (basename !== '/') {
        path.pathname = path.pathname === '/' ? basename : joinPaths([basename, path.pathname]);
      }
      (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
    },
    [basename, navigator, routePathnamesJson, locationPathname]
  );
  return navigate;
}
var OutletContext = /* @__PURE__ */ React.createContext(null);
function useOutletContext() {
  return React.useContext(OutletContext);
}
function useOutlet(context) {
  let outlet = React.useContext(RouteContext).outlet;
  if (outlet) {
    return /* @__PURE__ */ React.createElement(
      OutletContext.Provider,
      {
        value: context
      },
      outlet
    );
  }
  return outlet;
}
function useParams() {
  let { matches } = React.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
function useResolvedPath(to, _temp2) {
  let { relative } = _temp2 === void 0 ? {} : _temp2;
  let { matches } = React.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(UNSAFE_getPathContributingMatches(matches).map(match => match.pathnameBase));
  return React.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === 'path'), [
    to,
    routePathnamesJson,
    locationPathname,
    relative
  ]);
}
function useRoutes(routes, locationArg) {
  !useInRouterContext()
    ? true
      ? invariant(false, 'useRoutes() may be used only in the context of a <Router> component.')
      : invariant(false)
    : void 0;
  let dataRouterStateContext = React.useContext(DataRouterStateContext);
  let { matches: parentMatches } = React.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : '/';
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : '/';
  let parentRoute = routeMatch && routeMatch.route;
  if (true) {
    let parentPath = (parentRoute && parentRoute.path) || '';
    warningOnce(
      parentPathname,
      !parentRoute || parentPath.endsWith('*'),
      'You rendered descendant <Routes> (or called `useRoutes()`) at ' +
        ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') +
        `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` +
        ('Please change the parent <Route path="' + parentPath + '"> to <Route ') +
        ('path="' + (parentPath === '/' ? '*' : parentPath + '/*') + '">.')
    );
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === 'string' ? parsePath(locationArg) : locationArg;
    !(
      parentPathnameBase === '/' ||
      ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null
        ? void 0
        : _parsedLocationArg$pa.startsWith(parentPathnameBase))
    )
      ? true
        ? invariant(
            false,
            'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was ' +
              ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') +
              ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')
          )
        : invariant(false)
      : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || '/';
  let remainingPathname = parentPathnameBase === '/' ? pathname : pathname.slice(parentPathnameBase.length) || '/';
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });
  if (true) {
    true
      ? warning(
          parentRoute || matches != null,
          'No routes matched location "' + location.pathname + location.search + location.hash + '" '
        )
      : void 0;
    true
      ? warning(
          matches == null || matches[matches.length - 1].route.element !== void 0,
          'Matched leaf route at location "' +
            location.pathname +
            location.search +
            location.hash +
            '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'
        )
      : void 0;
  }
  let renderedMatches = _renderMatches(
    matches &&
      matches.map(match =>
        Object.assign({}, match, {
          params: Object.assign({}, parentParams, match.params),
          pathname: joinPaths([parentPathnameBase, match.pathname]),
          pathnameBase:
            match.pathnameBase === '/' ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
        })
      ),
    parentMatches,
    dataRouterStateContext || void 0
  );
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ React.createElement(
      LocationContext.Provider,
      {
        value: {
          location: _extends(
            {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default'
            },
            location
          ),
          navigationType: Action.Pop
        }
      },
      renderedMatches
    );
  }
  return renderedMatches;
}
function DefaultErrorElement() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error)
    ? error.status + ' ' + error.statusText
    : error instanceof Error
    ? error.message
    : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = 'rgba(200,200,200, 0.5)';
  let preStyles = {
    padding: '0.5rem',
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: '2px 4px',
    backgroundColor: lightgrey
  };
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement('h2', null, 'Unhandled Thrown Error!'),
    /* @__PURE__ */ React.createElement(
      'h3',
      {
        style: {
          fontStyle: 'italic'
        }
      },
      message
    ),
    stack
      ? /* @__PURE__ */ React.createElement(
          'pre',
          {
            style: preStyles
          },
          stack
        )
      : null,
    /* @__PURE__ */ React.createElement('p', null, '\u{1F4BF} Hey developer \u{1F44B}'),
    /* @__PURE__ */ React.createElement(
      'p',
      null,
      'You can provide a way better UX than this when your app throws errors by providing your own\xA0',
      /* @__PURE__ */ React.createElement(
        'code',
        {
          style: codeStyles
        },
        'errorElement'
      ),
      ' props on\xA0',
      /* @__PURE__ */ React.createElement(
        'code',
        {
          style: codeStyles
        },
        '<Route>'
      )
    )
  );
}
var RenderErrorBoundary = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location) {
      return {
        error: props.error,
        location: props.location
      };
    }
    return {
      error: props.error || state.error,
      location: state.location
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error('React Router caught the following error during render', error, errorInfo);
  }
  render() {
    return this.state.error
      ? /* @__PURE__ */ React.createElement(RouteErrorContext.Provider, {
          value: this.state.error,
          children: this.props.component
        })
      : this.props.children;
  }
};
function RenderedRoute(_ref) {
  let { routeContext, match, children } = _ref;
  let dataStaticRouterContext = React.useContext(DataStaticRouterContext);
  if (dataStaticRouterContext && match.route.errorElement) {
    dataStaticRouterContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ React.createElement(
    RouteContext.Provider,
    {
      value: routeContext
    },
    children
  );
}
function _renderMatches(matches, parentMatches, dataRouterState) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (matches == null) {
    if (dataRouterState != null && dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(m => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
    !(errorIndex >= 0)
      ? true
        ? invariant(false, 'Could not find a matching route for the current errors: ' + errors)
        : invariant(false)
      : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error = match.route.id ? (errors == null ? void 0 : errors[match.route.id]) : null;
    let errorElement = dataRouterState
      ? match.route.errorElement || /* @__PURE__ */ React.createElement(DefaultErrorElement, null)
      : null;
    let getChildren = () =>
      /* @__PURE__ */ React.createElement(
        RenderedRoute,
        {
          match,
          routeContext: {
            outlet,
            matches: parentMatches.concat(renderedMatches.slice(0, index + 1))
          }
        },
        error ? errorElement : match.route.element !== void 0 ? match.route.element : outlet
      );
    return dataRouterState && (match.route.errorElement || index === 0)
      ? /* @__PURE__ */ React.createElement(RenderErrorBoundary, {
          location: dataRouterState.location,
          component: errorElement,
          error,
          children: getChildren()
        })
      : getChildren();
  }, null);
}
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2['UseRevalidator'] = 'useRevalidator';
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2['UseLoaderData'] = 'useLoaderData';
  DataRouterStateHook2['UseActionData'] = 'useActionData';
  DataRouterStateHook2['UseRouteError'] = 'useRouteError';
  DataRouterStateHook2['UseNavigation'] = 'useNavigation';
  DataRouterStateHook2['UseRouteLoaderData'] = 'useRouteLoaderData';
  DataRouterStateHook2['UseMatches'] = 'useMatches';
  DataRouterStateHook2['UseRevalidator'] = 'useRevalidator';
})(DataRouterStateHook || (DataRouterStateHook = {}));
function getDataRouterConsoleError(hookName) {
  return (
    hookName + ' must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.'
  );
}
function useDataRouterContext(hookName) {
  let ctx = React.useContext(DataRouterContext);
  !ctx ? (true ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false)) : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = React.useContext(DataRouterStateContext);
  !state ? (true ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false)) : void 0;
  return state;
}
function useNavigation() {
  let state = useDataRouterState(DataRouterStateHook.UseNavigation);
  return state.navigation;
}
function useRevalidator() {
  let dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
  let state = useDataRouterState(DataRouterStateHook.UseRevalidator);
  return {
    revalidate: dataRouterContext.router.revalidate,
    state: state.revalidation
  };
}
function useMatches() {
  let { matches, loaderData } = useDataRouterState(DataRouterStateHook.UseMatches);
  return React.useMemo(
    () =>
      matches.map(match => {
        let { pathname, params } = match;
        return {
          id: match.route.id,
          pathname,
          params,
          data: loaderData[match.route.id],
          handle: match.route.handle
        };
      }),
    [matches, loaderData]
  );
}
function useLoaderData() {
  let state = useDataRouterState(DataRouterStateHook.UseLoaderData);
  let route = React.useContext(RouteContext);
  !route ? (true ? invariant(false, 'useLoaderData must be used inside a RouteContext') : invariant(false)) : void 0;
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id
    ? true
      ? invariant(false, 'useLoaderData can only be used on routes that contain a unique "id"')
      : invariant(false)
    : void 0;
  return state.loaderData[thisRoute.route.id];
}
function useRouteLoaderData(routeId) {
  let state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
  return state.loaderData[routeId];
}
function useActionData() {
  let state = useDataRouterState(DataRouterStateHook.UseActionData);
  let route = React.useContext(RouteContext);
  !route ? (true ? invariant(false, 'useActionData must be used inside a RouteContext') : invariant(false)) : void 0;
  return Object.values((state == null ? void 0 : state.actionData) || {})[0];
}
function useRouteError() {
  var _state$errors;
  let error = React.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook.UseRouteError);
  let route = React.useContext(RouteContext);
  let thisRoute = route.matches[route.matches.length - 1];
  if (error) {
    return error;
  }
  !route ? (true ? invariant(false, 'useRouteError must be used inside a RouteContext') : invariant(false)) : void 0;
  !thisRoute.route.id
    ? true
      ? invariant(false, 'useRouteError can only be used on routes that contain a unique "id"')
      : invariant(false)
    : void 0;
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[thisRoute.route.id];
}
function useAsyncValue() {
  let value = React.useContext(AwaitContext);
  return value == null ? void 0 : value._data;
}
function useAsyncError() {
  let value = React.useContext(AwaitContext);
  return value == null ? void 0 : value._error;
}
var alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    true ? warning(false, message) : void 0;
  }
}
function RouterProvider(_ref) {
  let { fallbackElement, router } = _ref;
  let state = useSyncExternalStore(
    router.subscribe,
    () => router.state,
    () => router.state
  );
  let navigator = React.useMemo(() => {
    return {
      createHref: router.createHref,
      go: n => router.navigate(n),
      push: (to, state2, opts) =>
        router.navigate(to, {
          state: state2,
          preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
        }),
      replace: (to, state2, opts) =>
        router.navigate(to, {
          replace: true,
          state: state2,
          preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
        })
    };
  }, [router]);
  let basename = router.basename || '/';
  return /* @__PURE__ */ React.createElement(
    DataRouterContext.Provider,
    {
      value: {
        router,
        navigator,
        static: false,
        basename
      }
    },
    /* @__PURE__ */ React.createElement(
      DataRouterStateContext.Provider,
      {
        value: state
      },
      /* @__PURE__ */ React.createElement(
        Router,
        {
          basename: router.basename,
          location: router.state.location,
          navigationType: router.state.historyAction,
          navigator
        },
        router.state.initialized ? /* @__PURE__ */ React.createElement(Routes, null) : fallbackElement
      )
    )
  );
}
function MemoryRouter(_ref2) {
  let { basename, children, initialEntries, initialIndex } = _ref2;
  let historyRef = React.useRef();
  if (historyRef.current == null) {
    historyRef.current = createMemoryHistory({
      initialEntries,
      initialIndex,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setState] = React.useState({
    action: history.action,
    location: history.location
  });
  React.useLayoutEffect(() => history.listen(setState), [history]);
  return /* @__PURE__ */ React.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
function Navigate(_ref3) {
  let { to, replace, state, relative } = _ref3;
  !useInRouterContext()
    ? true
      ? invariant(false, '<Navigate> may be used only in the context of a <Router> component.')
      : invariant(false)
    : void 0;
  true
    ? warning(
        !React.useContext(NavigationContext).static,
        '<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.'
      )
    : void 0;
  let dataRouterState = React.useContext(DataRouterStateContext);
  let navigate = useNavigate();
  React.useEffect(() => {
    if (dataRouterState && dataRouterState.navigation.state !== 'idle') {
      return;
    }
    navigate(to, {
      replace,
      state,
      relative
    });
  });
  return null;
}
function Outlet(props) {
  return useOutlet(props.context);
}
function Route(_props) {
  true
    ? invariant(
        false,
        'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
      )
    : invariant(false);
}
function Router(_ref4) {
  let {
    basename: basenameProp = '/',
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref4;
  !!useInRouterContext()
    ? true
      ? invariant(
          false,
          'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
        )
      : invariant(false)
    : void 0;
  let basename = basenameProp.replace(/^\/*/, '/');
  let navigationContext = React.useMemo(
    () => ({
      basename,
      navigator,
      static: staticProp
    }),
    [basename, navigator, staticProp]
  );
  if (typeof locationProp === 'string') {
    locationProp = parsePath(locationProp);
  }
  let { pathname = '/', search = '', hash = '', state = null, key = 'default' } = locationProp;
  let location = React.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  true
    ? warning(
        location != null,
        '<Router basename="' +
          basename +
          '"> is not able to match the URL ' +
          ('"' + pathname + search + hash + '" because it does not start with the ') +
          "basename, so the <Router> won't render anything."
      )
    : void 0;
  if (location == null) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(
    NavigationContext.Provider,
    {
      value: navigationContext
    },
    /* @__PURE__ */ React.createElement(LocationContext.Provider, {
      children,
      value: {
        location,
        navigationType
      }
    })
  );
}
function Routes(_ref5) {
  let { children, location } = _ref5;
  let dataRouterContext = React.useContext(DataRouterContext);
  let routes = dataRouterContext && !children ? dataRouterContext.router.routes : createRoutesFromChildren(children);
  return useRoutes(routes, location);
}
function Await(_ref6) {
  let { children, errorElement, resolve } = _ref6;
  return /* @__PURE__ */ React.createElement(
    AwaitErrorBoundary,
    {
      resolve,
      errorElement
    },
    /* @__PURE__ */ React.createElement(ResolveAwait, null, children)
  );
}
var AwaitRenderStatus;
(function(AwaitRenderStatus2) {
  AwaitRenderStatus2[(AwaitRenderStatus2['pending'] = 0)] = 'pending';
  AwaitRenderStatus2[(AwaitRenderStatus2['success'] = 1)] = 'success';
  AwaitRenderStatus2[(AwaitRenderStatus2['error'] = 2)] = 'error';
})(AwaitRenderStatus || (AwaitRenderStatus = {}));
var neverSettledPromise = new Promise(() => {});
var AwaitErrorBoundary = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error('<Await> caught the following error during render', error, errorInfo);
  }
  render() {
    let { children, errorElement, resolve } = this.props;
    let promise = null;
    let status = AwaitRenderStatus.pending;
    if (!(resolve instanceof Promise)) {
      status = AwaitRenderStatus.success;
      promise = Promise.resolve();
      Object.defineProperty(promise, '_tracked', {
        get: () => true
      });
      Object.defineProperty(promise, '_data', {
        get: () => resolve
      });
    } else if (this.state.error) {
      status = AwaitRenderStatus.error;
      let renderError = this.state.error;
      promise = Promise.reject().catch(() => {});
      Object.defineProperty(promise, '_tracked', {
        get: () => true
      });
      Object.defineProperty(promise, '_error', {
        get: () => renderError
      });
    } else if (resolve._tracked) {
      promise = resolve;
      status =
        promise._error !== void 0
          ? AwaitRenderStatus.error
          : promise._data !== void 0
          ? AwaitRenderStatus.success
          : AwaitRenderStatus.pending;
    } else {
      status = AwaitRenderStatus.pending;
      Object.defineProperty(resolve, '_tracked', {
        get: () => true
      });
      promise = resolve.then(
        data =>
          Object.defineProperty(resolve, '_data', {
            get: () => data
          }),
        error =>
          Object.defineProperty(resolve, '_error', {
            get: () => error
          })
      );
    }
    if (status === AwaitRenderStatus.error && promise._error instanceof AbortedDeferredError) {
      throw neverSettledPromise;
    }
    if (status === AwaitRenderStatus.error && !errorElement) {
      throw promise._error;
    }
    if (status === AwaitRenderStatus.error) {
      return /* @__PURE__ */ React.createElement(AwaitContext.Provider, {
        value: promise,
        children: errorElement
      });
    }
    if (status === AwaitRenderStatus.success) {
      return /* @__PURE__ */ React.createElement(AwaitContext.Provider, {
        value: promise,
        children
      });
    }
    throw promise;
  }
};
function ResolveAwait(_ref7) {
  let { children } = _ref7;
  let data = useAsyncValue();
  if (typeof children === 'function') {
    return children(data);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
}
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes = [];
  React.Children.forEach(children, (element, index) => {
    if (!(/* @__PURE__ */ React.isValidElement(element))) {
      return;
    }
    if (element.type === React.Fragment) {
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, parentPath));
      return;
    }
    !(element.type === Route)
      ? true
        ? invariant(
            false,
            '[' +
              (typeof element.type === 'string' ? element.type : element.type.name) +
              '] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>'
          )
        : invariant(false)
      : void 0;
    !(!element.props.index || !element.props.children)
      ? true
        ? invariant(false, 'An index route cannot have child routes.')
        : invariant(false)
      : void 0;
    let treePath = [...parentPath, index];
    let route = {
      id: element.props.id || treePath.join('-'),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      hasErrorBoundary: element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}
function renderMatches(matches) {
  return _renderMatches(matches);
}
function enhanceManualRouteObjects(routes) {
  return routes.map(route => {
    let routeClone = _extends({}, route);
    if (routeClone.hasErrorBoundary == null) {
      routeClone.hasErrorBoundary = routeClone.errorElement != null;
    }
    if (routeClone.children) {
      routeClone.children = enhanceManualRouteObjects(routeClone.children);
    }
    return routeClone;
  });
}
function createMemoryRouter(routes, opts) {
  return createRouter({
    basename: opts == null ? void 0 : opts.basename,
    history: createMemoryHistory({
      initialEntries: opts == null ? void 0 : opts.initialEntries,
      initialIndex: opts == null ? void 0 : opts.initialIndex
    }),
    hydrationData: opts == null ? void 0 : opts.hydrationData,
    routes: enhanceManualRouteObjects(routes)
  }).initialize();
}
export {
  AbortedDeferredError2 as AbortedDeferredError,
  Await,
  MemoryRouter,
  Navigate,
  Action2 as NavigationType,
  Outlet,
  Route,
  Router,
  RouterProvider,
  Routes,
  DataRouterContext as UNSAFE_DataRouterContext,
  DataRouterStateContext as UNSAFE_DataRouterStateContext,
  DataStaticRouterContext as UNSAFE_DataStaticRouterContext,
  LocationContext as UNSAFE_LocationContext,
  NavigationContext as UNSAFE_NavigationContext,
  RouteContext as UNSAFE_RouteContext,
  enhanceManualRouteObjects as UNSAFE_enhanceManualRouteObjects,
  createMemoryRouter,
  createPath,
  createRoutesFromChildren,
  createRoutesFromChildren as createRoutesFromElements,
  defer,
  generatePath,
  isRouteErrorResponse2 as isRouteErrorResponse,
  json,
  matchPath2 as matchPath,
  matchRoutes2 as matchRoutes,
  parsePath2 as parsePath,
  redirect,
  renderMatches,
  resolvePath,
  useActionData,
  useAsyncError,
  useAsyncValue,
  useHref,
  useInRouterContext,
  useLoaderData,
  useLocation,
  useMatch,
  useMatches,
  useNavigate,
  useNavigation,
  useNavigationType,
  useOutlet,
  useOutletContext,
  useParams,
  useResolvedPath,
  useRevalidator,
  useRouteError,
  useRouteLoaderData,
  useRoutes
};
/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
