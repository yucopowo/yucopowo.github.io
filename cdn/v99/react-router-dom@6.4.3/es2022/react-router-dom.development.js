/* esm.sh - esbuild bundle(react-router-dom@6.4.3) es2022 development */
// esm-build-89bd50c532272147dc111963195b084ba7df675f-5ffbe6cb/node_modules/react-router-dom/dist/index.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import {
  UNSAFE_enhanceManualRouteObjects,
  Router,
  useHref,
  useResolvedPath,
  useLocation,
  UNSAFE_DataRouterStateContext,
  useNavigate,
  createPath,
  UNSAFE_NavigationContext,
  UNSAFE_RouteContext,
  useMatches,
  useNavigation,
  UNSAFE_DataRouterContext
} from '/cdn/v99/react-router@6.4.3/es2022/react-router.development.js';
import {
  AbortedDeferredError,
  Await,
  MemoryRouter,
  Navigate,
  NavigationType,
  Outlet,
  Route,
  Router as Router2,
  RouterProvider,
  Routes,
  UNSAFE_DataRouterContext as UNSAFE_DataRouterContext2,
  UNSAFE_DataRouterStateContext as UNSAFE_DataRouterStateContext2,
  UNSAFE_DataStaticRouterContext,
  UNSAFE_LocationContext,
  UNSAFE_NavigationContext as UNSAFE_NavigationContext2,
  UNSAFE_RouteContext as UNSAFE_RouteContext2,
  UNSAFE_enhanceManualRouteObjects as UNSAFE_enhanceManualRouteObjects2,
  createMemoryRouter,
  createPath as createPath2,
  createRoutesFromChildren,
  createRoutesFromElements,
  defer,
  generatePath,
  isRouteErrorResponse,
  json,
  matchPath,
  matchRoutes,
  parsePath,
  redirect,
  renderMatches,
  resolvePath,
  useActionData,
  useAsyncError,
  useAsyncValue,
  useHref as useHref2,
  useInRouterContext,
  useLoaderData,
  useLocation as useLocation2,
  useMatch,
  useMatches as useMatches2,
  useNavigate as useNavigate2,
  useNavigation as useNavigation2,
  useNavigationType,
  useOutlet,
  useOutletContext,
  useParams,
  useResolvedPath as useResolvedPath2,
  useRevalidator,
  useRouteError,
  useRouteLoaderData,
  useRoutes
} from '/cdn/v99/react-router@6.4.3/es2022/react-router.development.js';
import {
  createRouter,
  createBrowserHistory,
  createHashHistory,
  invariant,
  joinPaths
} from '/cdn/v99/@remix-run/router@1.0.3/es2022/router.development.js';
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
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var defaultMethod = 'get';
var defaultEncType = 'application/x-www-form-urlencoded';
function isHtmlElement(object) {
  return object != null && typeof object.tagName === 'string';
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === 'button';
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === 'form';
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === 'input';
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && (!target || target === '_self') && !isModifiedEvent(event);
}
function createSearchParams(init) {
  if (init === void 0) {
    init = '';
  }
  return new URLSearchParams(
    typeof init === 'string' || Array.isArray(init) || init instanceof URLSearchParams
      ? init
      : Object.keys(init).reduce((memo, key) => {
          let value = init[key];
          return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
        }, [])
  );
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  let searchParams = createSearchParams(locationSearch);
  for (let key of defaultSearchParams.keys()) {
    if (!searchParams.has(key)) {
      defaultSearchParams.getAll(key).forEach(value => {
        searchParams.append(key, value);
      });
    }
  }
  return searchParams;
}
function getFormSubmissionInfo(target, defaultAction, options) {
  let method;
  let action;
  let encType;
  let formData;
  if (isFormElement(target)) {
    let submissionTrigger = options.submissionTrigger;
    method = options.method || target.getAttribute('method') || defaultMethod;
    action = options.action || target.getAttribute('action') || defaultAction;
    encType = options.encType || target.getAttribute('enctype') || defaultEncType;
    formData = new FormData(target);
    if (submissionTrigger && submissionTrigger.name) {
      formData.append(submissionTrigger.name, submissionTrigger.value);
    }
  } else if (
    isButtonElement(target) ||
    (isInputElement(target) && (target.type === 'submit' || target.type === 'image'))
  ) {
    let form = target.form;
    if (form == null) {
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    }
    method = options.method || target.getAttribute('formmethod') || form.getAttribute('method') || defaultMethod;
    action = options.action || target.getAttribute('formaction') || form.getAttribute('action') || defaultAction;
    encType = options.encType || target.getAttribute('formenctype') || form.getAttribute('enctype') || defaultEncType;
    formData = new FormData(form);
    if (target.name) {
      formData.append(target.name, target.value);
    }
  } else if (isHtmlElement(target)) {
    throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
  } else {
    method = options.method || defaultMethod;
    action = options.action || defaultAction;
    encType = options.encType || defaultEncType;
    if (target instanceof FormData) {
      formData = target;
    } else {
      formData = new FormData();
      if (target instanceof URLSearchParams) {
        for (let [name, value] of target) {
          formData.append(name, value);
        }
      } else if (target != null) {
        for (let name of Object.keys(target)) {
          formData.append(name, target[name]);
        }
      }
    }
  }
  let { protocol, host } = window.location;
  let url = new URL(action, protocol + '//' + host);
  return {
    url,
    method,
    encType,
    formData
  };
}
var _excluded = ['onClick', 'relative', 'reloadDocument', 'replace', 'state', 'target', 'to', 'preventScrollReset'];
var _excluded2 = ['aria-current', 'caseSensitive', 'className', 'end', 'style', 'to', 'children'];
var _excluded3 = ['reloadDocument', 'replace', 'method', 'action', 'onSubmit', 'fetcherKey', 'routeId', 'relative'];
function createBrowserRouter(routes, opts) {
  var _window;
  return createRouter({
    basename: opts == null ? void 0 : opts.basename,
    history: createBrowserHistory({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData:
      (opts == null ? void 0 : opts.hydrationData) ||
      ((_window = window) == null ? void 0 : _window.__staticRouterHydrationData),
    routes: UNSAFE_enhanceManualRouteObjects(routes)
  }).initialize();
}
function createHashRouter(routes, opts) {
  var _window2;
  return createRouter({
    basename: opts == null ? void 0 : opts.basename,
    history: createHashHistory({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData:
      (opts == null ? void 0 : opts.hydrationData) ||
      ((_window2 = window) == null ? void 0 : _window2.__staticRouterHydrationData),
    routes: UNSAFE_enhanceManualRouteObjects(routes)
  }).initialize();
}
function BrowserRouter(_ref) {
  let { basename, children, window: window2 } = _ref;
  let historyRef = React.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window: window2,
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
function HashRouter(_ref2) {
  let { basename, children, window: window2 } = _ref2;
  let historyRef = React.useRef();
  if (historyRef.current == null) {
    historyRef.current = createHashHistory({
      window: window2,
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
function HistoryRouter(_ref3) {
  let { basename, children, history } = _ref3;
  const [state, setState] = React.useState({
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
if (true) {
  HistoryRouter.displayName = 'unstable_HistoryRouter';
}
var Link = /* @__PURE__ */ React.forwardRef(function LinkWithRef(_ref4, ref) {
  let { onClick, relative, reloadDocument, replace, state, target, to, preventScrollReset } = _ref4,
    rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return /* @__PURE__ */ React.createElement(
    'a',
    _extends({}, rest, {
      href,
      onClick: reloadDocument ? onClick : handleClick,
      ref,
      target
    })
  );
});
if (true) {
  Link.displayName = 'Link';
}
var NavLink = /* @__PURE__ */ React.forwardRef(function NavLinkWithRef(_ref5, ref) {
  let {
      'aria-current': ariaCurrentProp = 'page',
      caseSensitive = false,
      className: classNameProp = '',
      end = false,
      style: styleProp,
      to,
      children
    } = _ref5,
    rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
  let path = useResolvedPath(to, {
    relative: rest.relative
  });
  let location = useLocation();
  let routerState = React.useContext(UNSAFE_DataRouterStateContext);
  let toPathname = path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname =
    routerState && routerState.navigation && routerState.navigation.location
      ? routerState.navigation.location.pathname
      : null;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }
  let isActive =
    locationPathname === toPathname ||
    (!end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === '/');
  let isPending =
    nextLocationPathname != null &&
    (nextLocationPathname === toPathname ||
      (!end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === '/'));
  let ariaCurrent = isActive ? ariaCurrentProp : void 0;
  let className;
  if (typeof classNameProp === 'function') {
    className = classNameProp({
      isActive,
      isPending
    });
  } else {
    className = [classNameProp, isActive ? 'active' : null, isPending ? 'pending' : null].filter(Boolean).join(' ');
  }
  let style =
    typeof styleProp === 'function'
      ? styleProp({
          isActive,
          isPending
        })
      : styleProp;
  return /* @__PURE__ */ React.createElement(
    Link,
    _extends({}, rest, {
      'aria-current': ariaCurrent,
      className,
      ref,
      style,
      to
    }),
    typeof children === 'function'
      ? children({
          isActive,
          isPending
        })
      : children
  );
});
if (true) {
  NavLink.displayName = 'NavLink';
}
var Form = /* @__PURE__ */ React.forwardRef((props, ref) => {
  return /* @__PURE__ */ React.createElement(
    FormImpl,
    _extends({}, props, {
      ref
    })
  );
});
if (true) {
  Form.displayName = 'Form';
}
var FormImpl = /* @__PURE__ */ React.forwardRef((_ref6, forwardedRef) => {
  let { reloadDocument, replace, method = defaultMethod, action, onSubmit, fetcherKey, routeId, relative } = _ref6,
    props = _objectWithoutPropertiesLoose(_ref6, _excluded3);
  let submit = useSubmitImpl(fetcherKey, routeId);
  let formMethod = method.toLowerCase() === 'get' ? 'get' : 'post';
  let formAction = useFormAction(action, {
    relative
  });
  let submitHandler = event => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    submit(submitter || event.currentTarget, {
      method,
      replace,
      relative
    });
  };
  return /* @__PURE__ */ React.createElement(
    'form',
    _extends(
      {
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : submitHandler
      },
      props
    )
  );
});
if (true) {
  Form.displayName = 'Form';
}
function ScrollRestoration(_ref7) {
  let { getKey, storageKey } = _ref7;
  useScrollRestoration({
    getKey,
    storageKey
  });
  return null;
}
if (true) {
  ScrollRestoration.displayName = 'ScrollRestoration';
}
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2['UseScrollRestoration'] = 'useScrollRestoration';
  DataRouterHook2['UseSubmitImpl'] = 'useSubmitImpl';
  DataRouterHook2['UseFetcher'] = 'useFetcher';
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2['UseFetchers'] = 'useFetchers';
  DataRouterStateHook2['UseScrollRestoration'] = 'useScrollRestoration';
})(DataRouterStateHook || (DataRouterStateHook = {}));
function getDataRouterConsoleError(hookName) {
  return (
    hookName + ' must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.'
  );
}
function useDataRouterContext(hookName) {
  let ctx = React.useContext(UNSAFE_DataRouterContext);
  !ctx ? (true ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false)) : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = React.useContext(UNSAFE_DataRouterStateContext);
  !state ? (true ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false)) : void 0;
  return state;
}
function useLinkClickHandler(to, _temp) {
  let { target, replace: replaceProp, state, preventScrollReset, relative } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return React.useCallback(
    event => {
      if (shouldProcessLinkClick(event, target)) {
        event.preventDefault();
        let replace = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
        navigate(to, {
          replace,
          state,
          preventScrollReset,
          relative
        });
      }
    },
    [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]
  );
}
function useSearchParams(defaultInit) {
  true
    ? warning(
        typeof URLSearchParams !== 'undefined',
        "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user."
      )
    : void 0;
  let defaultSearchParamsRef = React.useRef(createSearchParams(defaultInit));
  let location = useLocation();
  let searchParams = React.useMemo(() => getSearchParamsForLocation(location.search, defaultSearchParamsRef.current), [
    location.search
  ]);
  let navigate = useNavigate();
  let setSearchParams = React.useCallback(
    (nextInit, navigateOptions) => {
      const newSearchParams = createSearchParams(typeof nextInit === 'function' ? nextInit(searchParams) : nextInit);
      navigate('?' + newSearchParams, navigateOptions);
    },
    [navigate, searchParams]
  );
  return [searchParams, setSearchParams];
}
function useSubmit() {
  return useSubmitImpl();
}
function useSubmitImpl(fetcherKey, routeId) {
  let { router } = useDataRouterContext(DataRouterHook.UseSubmitImpl);
  let defaultAction = useFormAction();
  return React.useCallback(
    function(target, options) {
      if (options === void 0) {
        options = {};
      }
      if (typeof document === 'undefined') {
        throw new Error(
          'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.'
        );
      }
      let { method, encType, formData, url } = getFormSubmissionInfo(target, defaultAction, options);
      let href = url.pathname + url.search;
      let opts = {
        replace: options.replace,
        formData,
        formMethod: method,
        formEncType: encType
      };
      if (fetcherKey) {
        !(routeId != null)
          ? true
            ? invariant(false, 'No routeId available for useFetcher()')
            : invariant(false)
          : void 0;
        router.fetch(fetcherKey, routeId, href, opts);
      } else {
        router.navigate(href, opts);
      }
    },
    [defaultAction, router, fetcherKey, routeId]
  );
}
function useFormAction(action, _temp2) {
  let { relative } = _temp2 === void 0 ? {} : _temp2;
  let { basename } = React.useContext(UNSAFE_NavigationContext);
  let routeContext = React.useContext(UNSAFE_RouteContext);
  !routeContext
    ? true
      ? invariant(false, 'useFormAction must be used inside a RouteContext')
      : invariant(false)
    : void 0;
  let [match] = routeContext.matches.slice(-1);
  let resolvedAction = action != null ? action : '.';
  let path = _extends(
    {},
    useResolvedPath(resolvedAction, {
      relative
    })
  );
  let location = useLocation();
  if (action == null) {
    path.search = location.search;
    path.hash = location.hash;
    if (match.route.index) {
      let params = new URLSearchParams(path.search);
      params.delete('index');
      path.search = params.toString() ? '?' + params.toString() : '';
    }
  }
  if ((!action || action === '.') && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, '?index&') : '?index';
  }
  if (basename !== '/') {
    path.pathname = path.pathname === '/' ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
function createFetcherForm(fetcherKey, routeId) {
  let FetcherForm = /* @__PURE__ */ React.forwardRef((props, ref) => {
    return /* @__PURE__ */ React.createElement(
      FormImpl,
      _extends({}, props, {
        ref,
        fetcherKey,
        routeId
      })
    );
  });
  if (true) {
    FetcherForm.displayName = 'fetcher.Form';
  }
  return FetcherForm;
}
var fetcherId = 0;
function useFetcher() {
  var _route$matches;
  let { router } = useDataRouterContext(DataRouterHook.UseFetcher);
  let route = React.useContext(UNSAFE_RouteContext);
  !route ? (true ? invariant(false, 'useFetcher must be used inside a RouteContext') : invariant(false)) : void 0;
  let routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
  !(routeId != null)
    ? true
      ? invariant(false, 'useFetcher can only be used on routes that contain a unique "id"')
      : invariant(false)
    : void 0;
  let [fetcherKey] = React.useState(() => String(++fetcherId));
  let [Form2] = React.useState(() => {
    !routeId ? (true ? invariant(false, 'No routeId available for fetcher.Form()') : invariant(false)) : void 0;
    return createFetcherForm(fetcherKey, routeId);
  });
  let [load] = React.useState(() => href => {
    !router ? (true ? invariant(false, 'No router available for fetcher.load()') : invariant(false)) : void 0;
    !routeId ? (true ? invariant(false, 'No routeId available for fetcher.load()') : invariant(false)) : void 0;
    router.fetch(fetcherKey, routeId, href);
  });
  let submit = useSubmitImpl(fetcherKey, routeId);
  let fetcher = router.getFetcher(fetcherKey);
  let fetcherWithComponents = React.useMemo(
    () =>
      _extends(
        {
          Form: Form2,
          submit,
          load
        },
        fetcher
      ),
    [fetcher, Form2, submit, load]
  );
  React.useEffect(() => {
    return () => {
      if (!router) {
        console.warn('No fetcher available to clean up from useFetcher()');
        return;
      }
      router.deleteFetcher(fetcherKey);
    };
  }, [router, fetcherKey]);
  return fetcherWithComponents;
}
function useFetchers() {
  let state = useDataRouterState(DataRouterStateHook.UseFetchers);
  return [...state.fetchers.values()];
}
var SCROLL_RESTORATION_STORAGE_KEY = 'react-router-scroll-positions';
var savedScrollPositions = {};
function useScrollRestoration(_temp3) {
  let { getKey, storageKey } = _temp3 === void 0 ? {} : _temp3;
  let { router } = useDataRouterContext(DataRouterHook.UseScrollRestoration);
  let { restoreScrollPosition, preventScrollReset } = useDataRouterState(DataRouterStateHook.UseScrollRestoration);
  let location = useLocation();
  let matches = useMatches();
  let navigation = useNavigation();
  React.useEffect(() => {
    window.history.scrollRestoration = 'manual';
    return () => {
      window.history.scrollRestoration = 'auto';
    };
  }, []);
  useBeforeUnload(
    React.useCallback(() => {
      if (navigation.state === 'idle') {
        let key = (getKey ? getKey(location, matches) : null) || location.key;
        savedScrollPositions[key] = window.scrollY;
      }
      sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
      window.history.scrollRestoration = 'auto';
    }, [storageKey, getKey, navigation.state, location, matches])
  );
  React.useLayoutEffect(() => {
    try {
      let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
      if (sessionPositions) {
        savedScrollPositions = JSON.parse(sessionPositions);
      }
    } catch (e) {}
  }, [storageKey]);
  React.useLayoutEffect(() => {
    let disableScrollRestoration =
      router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, () => window.scrollY, getKey);
    return () => disableScrollRestoration && disableScrollRestoration();
  }, [router, getKey]);
  React.useLayoutEffect(() => {
    if (restoreScrollPosition === false) {
      return;
    }
    if (typeof restoreScrollPosition === 'number') {
      window.scrollTo(0, restoreScrollPosition);
      return;
    }
    if (location.hash) {
      let el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    if (preventScrollReset === true) {
      return;
    }
    window.scrollTo(0, 0);
  }, [location, restoreScrollPosition, preventScrollReset]);
}
function useBeforeUnload(callback) {
  React.useEffect(() => {
    window.addEventListener('beforeunload', callback);
    return () => {
      window.removeEventListener('beforeunload', callback);
    };
  }, [callback]);
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== 'undefined') console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {}
  }
}
export {
  AbortedDeferredError,
  Await,
  BrowserRouter,
  Form,
  HashRouter,
  Link,
  MemoryRouter,
  NavLink,
  Navigate,
  NavigationType,
  Outlet,
  Route,
  Router2 as Router,
  RouterProvider,
  Routes,
  ScrollRestoration,
  UNSAFE_DataRouterContext2 as UNSAFE_DataRouterContext,
  UNSAFE_DataRouterStateContext2 as UNSAFE_DataRouterStateContext,
  UNSAFE_DataStaticRouterContext,
  UNSAFE_LocationContext,
  UNSAFE_NavigationContext2 as UNSAFE_NavigationContext,
  UNSAFE_RouteContext2 as UNSAFE_RouteContext,
  UNSAFE_enhanceManualRouteObjects2 as UNSAFE_enhanceManualRouteObjects,
  createBrowserRouter,
  createHashRouter,
  createMemoryRouter,
  createPath2 as createPath,
  createRoutesFromChildren,
  createRoutesFromElements,
  createSearchParams,
  defer,
  generatePath,
  isRouteErrorResponse,
  json,
  matchPath,
  matchRoutes,
  parsePath,
  redirect,
  renderMatches,
  resolvePath,
  HistoryRouter as unstable_HistoryRouter,
  useActionData,
  useAsyncError,
  useAsyncValue,
  useFetcher,
  useFetchers,
  useFormAction,
  useHref2 as useHref,
  useInRouterContext,
  useLinkClickHandler,
  useLoaderData,
  useLocation2 as useLocation,
  useMatch,
  useMatches2 as useMatches,
  useNavigate2 as useNavigate,
  useNavigation2 as useNavigation,
  useNavigationType,
  useOutlet,
  useOutletContext,
  useParams,
  useResolvedPath2 as useResolvedPath,
  useRevalidator,
  useRouteError,
  useRouteLoaderData,
  useRoutes,
  useSearchParams,
  useSubmit
};
/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */