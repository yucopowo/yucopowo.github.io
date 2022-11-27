/* esm.sh - esbuild bundle(react-use@17.4.0) es2022 development */
// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/factory/createMemo.js
import { useMemo } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var createMemo = function(fn) {
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return useMemo(function() {
      return fn.apply(void 0, args);
    }, args);
  };
};
var createMemo_default = createMemo;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/factory/createReducerContext.js
import {
  createContext,
  createElement,
  useContext,
  useReducer
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var createReducerContext = function(reducer, defaultInitialState) {
  var context = createContext(void 0);
  var providerFactory = function(props, children) {
    return createElement(context.Provider, props, children);
  };
  var ReducerProvider = function(_a) {
    var children = _a.children,
      initialState = _a.initialState;
    var state = useReducer(reducer, initialState !== void 0 ? initialState : defaultInitialState);
    return providerFactory(
      {
        value: state
      },
      children
    );
  };
  var useReducerContext = function() {
    var state = useContext(context);
    if (state == null) {
      throw new Error('useReducerContext must be used inside a ReducerProvider.');
    }
    return state;
  };
  return [useReducerContext, ReducerProvider, context];
};
var createReducerContext_default = createReducerContext;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/factory/createReducer.js
import { useCallback, useRef as useRef2, useState } from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useUpdateEffect.js
import { useEffect } from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useFirstMountState.js
import { useRef } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useFirstMountState() {
  var isFirst = useRef(true);
  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }
  return isFirst.current;
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useUpdateEffect.js
var useUpdateEffect = function(effect, deps) {
  var isFirstMount = useFirstMountState();
  useEffect(function() {
    if (!isFirstMount) {
      return effect();
    }
  }, deps);
};
var useUpdateEffect_default = useUpdateEffect;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/factory/createReducer.js
function composeMiddleware(chain) {
  return function(context, dispatch) {
    return chain.reduceRight(function(res, middleware) {
      return middleware(context)(res);
    }, dispatch);
  };
}
var createReducer = function() {
  var middlewares = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    middlewares[_i] = arguments[_i];
  }
  var composedMiddleware = composeMiddleware(middlewares);
  return function(reducer, initialState, initializer) {
    if (initializer === void 0) {
      initializer = function(value) {
        return value;
      };
    }
    var ref = useRef2(initializer(initialState));
    var _a = useState(ref.current),
      setState = _a[1];
    var dispatch = useCallback(
      function(action) {
        ref.current = reducer(ref.current, action);
        setState(ref.current);
        return action;
      },
      [reducer]
    );
    var dispatchRef = useRef2(
      composedMiddleware(
        {
          getState: function() {
            return ref.current;
          },
          dispatch: function() {
            var args = [];
            for (var _i2 = 0; _i2 < arguments.length; _i2++) {
              args[_i2] = arguments[_i2];
            }
            return dispatchRef.current.apply(dispatchRef, args);
          }
        },
        dispatch
      )
    );
    useUpdateEffect_default(
      function() {
        dispatchRef.current = composedMiddleware(
          {
            getState: function() {
              return ref.current;
            },
            dispatch: function() {
              var args = [];
              for (var _i2 = 0; _i2 < arguments.length; _i2++) {
                args[_i2] = arguments[_i2];
              }
              return dispatchRef.current.apply(dispatchRef, args);
            }
          },
          dispatch
        );
      },
      [dispatch]
    );
    return [ref.current, dispatchRef.current];
  };
};
var createReducer_default = createReducer;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/factory/createStateContext.js
import {
  createContext as createContext2,
  createElement as createElement2,
  useContext as useContext2,
  useState as useState2
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var createStateContext = function(defaultInitialValue) {
  var context = createContext2(void 0);
  var providerFactory = function(props, children) {
    return createElement2(context.Provider, props, children);
  };
  var StateProvider = function(_a) {
    var children = _a.children,
      initialValue = _a.initialValue;
    var state = useState2(initialValue !== void 0 ? initialValue : defaultInitialValue);
    return providerFactory(
      {
        value: state
      },
      children
    );
  };
  var useStateContext = function() {
    var state = useContext2(context);
    if (state == null) {
      throw new Error('useStateContext must be used inside a StateProvider.');
    }
    return state;
  };
  return [useStateContext, StateProvider, context];
};
var createStateContext_default = createStateContext;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useAsync.js
import { useEffect as useEffect3 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useAsyncFn.js
import { __assign } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  useCallback as useCallback3,
  useRef as useRef4,
  useState as useState3
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useMountedState.js
import {
  useCallback as useCallback2,
  useEffect as useEffect2,
  useRef as useRef3
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useMountedState() {
  var mountedRef = useRef3(false);
  var get = useCallback2(function() {
    return mountedRef.current;
  }, []);
  useEffect2(function() {
    mountedRef.current = true;
    return function() {
      mountedRef.current = false;
    };
  }, []);
  return get;
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useAsyncFn.js
function useAsyncFn(fn, deps, initialState) {
  if (deps === void 0) {
    deps = [];
  }
  if (initialState === void 0) {
    initialState = {
      loading: false
    };
  }
  var lastCallId = useRef4(0);
  var isMounted = useMountedState();
  var _a = useState3(initialState),
    state = _a[0],
    set = _a[1];
  var callback = useCallback3(function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var callId = ++lastCallId.current;
    if (!state.loading) {
      set(function(prevState) {
        return __assign(__assign({}, prevState), {
          loading: true
        });
      });
    }
    return fn.apply(void 0, args).then(
      function(value) {
        isMounted() &&
          callId === lastCallId.current &&
          set({
            value,
            loading: false
          });
        return value;
      },
      function(error) {
        isMounted() &&
          callId === lastCallId.current &&
          set({
            error,
            loading: false
          });
        return error;
      }
    );
  }, deps);
  return [state, callback];
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useAsync.js
function useAsync(fn, deps) {
  if (deps === void 0) {
    deps = [];
  }
  var _a = useAsyncFn(fn, deps, {
      loading: true
    }),
    state = _a[0],
    callback = _a[1];
  useEffect3(
    function() {
      callback();
    },
    [callback]
  );
  return state;
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useAsyncRetry.js
import { __assign as __assign2, __spreadArrays } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  useCallback as useCallback4,
  useState as useState4
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useAsyncRetry = function(fn, deps) {
  if (deps === void 0) {
    deps = [];
  }
  var _a = useState4(0),
    attempt = _a[0],
    setAttempt = _a[1];
  var state = useAsync(fn, __spreadArrays(deps, [attempt]));
  var stateLoading = state.loading;
  var retry = useCallback4(function() {
    if (stateLoading) {
      if (true) {
        console.log('You are calling useAsyncRetry hook retry() method while loading in progress, this is a no-op.');
      }
      return;
    }
    setAttempt(function(currentAttempt) {
      return currentAttempt + 1;
    });
  }, __spreadArrays(deps, [stateLoading]));
  return __assign2(__assign2({}, state), {
    retry
  });
};
var useAsyncRetry_default = useAsyncRetry;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/factory/createHTMLMediaHook.js
import { __assign as __assign3 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useEffect as useEffect4, useRef as useRef5 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useSetState.js
import {
  useCallback as useCallback5,
  useState as useState5
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useSetState = function(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }
  var _a = useState5(initialState),
    state = _a[0],
    set = _a[1];
  var setState = useCallback5(function(patch) {
    set(function(prevState) {
      return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch);
    });
  }, []);
  return [state, setState];
};
var useSetState_default = useSetState;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/misc/parseTimeRanges.js
function parseTimeRanges(ranges) {
  var result = [];
  for (var i = 0; i < ranges.length; i++) {
    result.push({
      start: ranges.start(i),
      end: ranges.end(i)
    });
  }
  return result;
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/factory/createHTMLMediaHook.js
function createHTMLMediaHook(tag) {
  return function(elOrProps) {
    var element;
    var props;
    if (React.isValidElement(elOrProps)) {
      element = elOrProps;
      props = element.props;
    } else {
      props = elOrProps;
    }
    var _a = useSetState_default({
        buffered: [],
        time: 0,
        duration: 0,
        paused: true,
        muted: false,
        volume: 1,
        playing: false
      }),
      state = _a[0],
      setState = _a[1];
    var ref = useRef5(null);
    var wrapEvent = function(userEvent, proxyEvent) {
      return function(event) {
        try {
          proxyEvent && proxyEvent(event);
        } finally {
          userEvent && userEvent(event);
        }
      };
    };
    var onPlay = function() {
      return setState({
        paused: false
      });
    };
    var onPlaying = function() {
      return setState({
        playing: true
      });
    };
    var onWaiting = function() {
      return setState({
        playing: false
      });
    };
    var onPause = function() {
      return setState({
        paused: true,
        playing: false
      });
    };
    var onVolumeChange = function() {
      var el = ref.current;
      if (!el) {
        return;
      }
      setState({
        muted: el.muted,
        volume: el.volume
      });
    };
    var onDurationChange = function() {
      var el = ref.current;
      if (!el) {
        return;
      }
      var duration = el.duration,
        buffered = el.buffered;
      setState({
        duration,
        buffered: parseTimeRanges(buffered)
      });
    };
    var onTimeUpdate = function() {
      var el = ref.current;
      if (!el) {
        return;
      }
      setState({
        time: el.currentTime
      });
    };
    var onProgress = function() {
      var el = ref.current;
      if (!el) {
        return;
      }
      setState({
        buffered: parseTimeRanges(el.buffered)
      });
    };
    if (element) {
      element = React.cloneElement(
        element,
        __assign3(
          __assign3(
            {
              controls: false
            },
            props
          ),
          {
            ref,
            onPlay: wrapEvent(props.onPlay, onPlay),
            onPlaying: wrapEvent(props.onPlaying, onPlaying),
            onWaiting: wrapEvent(props.onWaiting, onWaiting),
            onPause: wrapEvent(props.onPause, onPause),
            onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange),
            onDurationChange: wrapEvent(props.onDurationChange, onDurationChange),
            onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate),
            onProgress: wrapEvent(props.onProgress, onProgress)
          }
        )
      );
    } else {
      element = React.createElement(
        tag,
        __assign3(
          __assign3(
            {
              controls: false
            },
            props
          ),
          {
            ref,
            onPlay: wrapEvent(props.onPlay, onPlay),
            onPlaying: wrapEvent(props.onPlaying, onPlaying),
            onWaiting: wrapEvent(props.onWaiting, onWaiting),
            onPause: wrapEvent(props.onPause, onPause),
            onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange),
            onDurationChange: wrapEvent(props.onDurationChange, onDurationChange),
            onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate),
            onProgress: wrapEvent(props.onProgress, onProgress)
          }
        )
      );
    }
    var lockPlay = false;
    var controls = {
      play: function() {
        var el = ref.current;
        if (!el) {
          return void 0;
        }
        if (!lockPlay) {
          var promise = el.play();
          var isPromise = typeof promise === 'object';
          if (isPromise) {
            lockPlay = true;
            var resetLock = function() {
              lockPlay = false;
            };
            promise.then(resetLock, resetLock);
          }
          return promise;
        }
        return void 0;
      },
      pause: function() {
        var el = ref.current;
        if (el && !lockPlay) {
          return el.pause();
        }
      },
      seek: function(time) {
        var el = ref.current;
        if (!el || state.duration === void 0) {
          return;
        }
        time = Math.min(state.duration, Math.max(0, time));
        el.currentTime = time;
      },
      volume: function(volume) {
        var el = ref.current;
        if (!el) {
          return;
        }
        volume = Math.min(1, Math.max(0, volume));
        el.volume = volume;
        setState({
          volume
        });
      },
      mute: function() {
        var el = ref.current;
        if (!el) {
          return;
        }
        el.muted = true;
      },
      unmute: function() {
        var el = ref.current;
        if (!el) {
          return;
        }
        el.muted = false;
      }
    };
    useEffect4(
      function() {
        var el = ref.current;
        if (!el) {
          if (true) {
            if (tag === 'audio') {
              console.error(
                'useAudio() ref to <audio> element is empty at mount. It seem you have not rendered the audio element, which it returns as the first argument const [audio] = useAudio(...).'
              );
            } else if (tag === 'video') {
              console.error(
                'useVideo() ref to <video> element is empty at mount. It seem you have not rendered the video element, which it returns as the first argument const [video] = useVideo(...).'
              );
            }
          }
          return;
        }
        setState({
          volume: el.volume,
          muted: el.muted,
          paused: el.paused
        });
        if (props.autoPlay && el.paused) {
          controls.play();
        }
      },
      [props.src]
    );
    return [element, state, controls, ref];
  };
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useAudio.js
var useAudio = createHTMLMediaHook('audio');
var useAudio_default = useAudio;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useBattery.js
import { useEffect as useEffect5, useState as useState6 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/misc/util.js
var noop = function() {};
function on(obj) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  if (obj && obj.addEventListener) {
    obj.addEventListener.apply(obj, args);
  }
}
function off(obj) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  if (obj && obj.removeEventListener) {
    obj.removeEventListener.apply(obj, args);
  }
}
var isBrowser = typeof window !== 'undefined';
var isNavigator = typeof navigator !== 'undefined';

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/misc/isDeepEqual.js
import isDeepEqualReact from '/cdn/v99/fast-deep-equal@3.1.3/es2022/react.development.js';
var isDeepEqual_default = isDeepEqualReact;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useBattery.js
var nav = isNavigator ? navigator : void 0;
var isBatteryApiSupported = nav && typeof nav.getBattery === 'function';
function useBatteryMock() {
  return {
    isSupported: false
  };
}
function useBattery() {
  var _a = useState6({
      isSupported: true,
      fetched: false
    }),
    state = _a[0],
    setState = _a[1];
  useEffect5(function() {
    var isMounted = true;
    var battery = null;
    var handleChange = function() {
      if (!isMounted || !battery) {
        return;
      }
      var newState = {
        isSupported: true,
        fetched: true,
        level: battery.level,
        charging: battery.charging,
        dischargingTime: battery.dischargingTime,
        chargingTime: battery.chargingTime
      };
      !isDeepEqual_default(state, newState) && setState(newState);
    };
    nav.getBattery().then(function(bat) {
      if (!isMounted) {
        return;
      }
      battery = bat;
      on(battery, 'chargingchange', handleChange);
      on(battery, 'chargingtimechange', handleChange);
      on(battery, 'dischargingtimechange', handleChange);
      on(battery, 'levelchange', handleChange);
      handleChange();
    });
    return function() {
      isMounted = false;
      if (battery) {
        off(battery, 'chargingchange', handleChange);
        off(battery, 'chargingtimechange', handleChange);
        off(battery, 'dischargingtimechange', handleChange);
        off(battery, 'levelchange', handleChange);
      }
    };
  }, []);
  return state;
}
var useBattery_default = isBatteryApiSupported ? useBattery : useBatteryMock;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useBeforeUnload.js
import {
  useCallback as useCallback6,
  useEffect as useEffect6
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useBeforeUnload = function(enabled, message) {
  if (enabled === void 0) {
    enabled = true;
  }
  var handler = useCallback6(
    function(event) {
      var finalEnabled = typeof enabled === 'function' ? enabled() : true;
      if (!finalEnabled) {
        return;
      }
      event.preventDefault();
      if (message) {
        event.returnValue = message;
      }
      return message;
    },
    [enabled, message]
  );
  useEffect6(
    function() {
      if (!enabled) {
        return;
      }
      on(window, 'beforeunload', handler);
      return function() {
        return off(window, 'beforeunload', handler);
      };
    },
    [enabled, handler]
  );
};
var useBeforeUnload_default = useBeforeUnload;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useToggle.js
import { useReducer as useReducer2 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var toggleReducer = function(state, nextValue) {
  return typeof nextValue === 'boolean' ? nextValue : !state;
};
var useToggle = function(initialValue) {
  return useReducer2(toggleReducer, initialValue);
};
var useToggle_default = useToggle;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useBoolean.js
var useBoolean_default = useToggle_default;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useClickAway.js
import { useEffect as useEffect7, useRef as useRef6 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var defaultEvents = ['mousedown', 'touchstart'];
var useClickAway = function(ref, onClickAway, events) {
  if (events === void 0) {
    events = defaultEvents;
  }
  var savedCallback = useRef6(onClickAway);
  useEffect7(
    function() {
      savedCallback.current = onClickAway;
    },
    [onClickAway]
  );
  useEffect7(
    function() {
      var handler = function(event) {
        var el = ref.current;
        el && !el.contains(event.target) && savedCallback.current(event);
      };
      for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
        var eventName = events_1[_i];
        on(document, eventName, handler);
      }
      return function() {
        for (var _i2 = 0, events_2 = events; _i2 < events_2.length; _i2++) {
          var eventName2 = events_2[_i2];
          off(document, eventName2, handler);
        }
      };
    },
    [events, ref]
  );
};
var useClickAway_default = useClickAway;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useCookie.js
import {
  useCallback as useCallback7,
  useState as useState7
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import Cookies from '/cdn/v99/js-cookie@2.2.1/es2022/js-cookie.development.js';
var useCookie = function(cookieName) {
  var _a = useState7(function() {
      return Cookies.get(cookieName) || null;
    }),
    value = _a[0],
    setValue = _a[1];
  var updateCookie = useCallback7(
    function(newValue, options) {
      Cookies.set(cookieName, newValue, options);
      setValue(newValue);
    },
    [cookieName]
  );
  var deleteCookie = useCallback7(
    function() {
      Cookies.remove(cookieName);
      setValue(null);
    },
    [cookieName]
  );
  return [value, updateCookie, deleteCookie];
};
var useCookie_default = useCookie;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useCopyToClipboard.js
import writeText from '/cdn/v99/copy-to-clipboard@3.3.3/es2022/copy-to-clipboard.development.js';
import { useCallback as useCallback8 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useCopyToClipboard = function() {
  var isMounted = useMountedState();
  var _a = useSetState_default({
      value: void 0,
      error: void 0,
      noUserInteraction: true
    }),
    state = _a[0],
    setState = _a[1];
  var copyToClipboard = useCallback8(function(value) {
    if (!isMounted()) {
      return;
    }
    var noUserInteraction;
    var normalizedValue;
    try {
      if (typeof value !== 'string' && typeof value !== 'number') {
        var error = new Error('Cannot copy typeof ' + typeof value + ' to clipboard, must be a string');
        if (true) console.error(error);
        setState({
          value,
          error,
          noUserInteraction: true
        });
        return;
      } else if (value === '') {
        var error = new Error('Cannot copy empty string to clipboard.');
        if (true) console.error(error);
        setState({
          value,
          error,
          noUserInteraction: true
        });
        return;
      }
      normalizedValue = value.toString();
      noUserInteraction = writeText(normalizedValue);
      setState({
        value: normalizedValue,
        error: void 0,
        noUserInteraction
      });
    } catch (error2) {
      setState({
        value: normalizedValue,
        error: error2,
        noUserInteraction
      });
    }
  }, []);
  return [state, copyToClipboard];
};
var useCopyToClipboard_default = useCopyToClipboard;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useCounter.js
import { useMemo as useMemo3 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useGetSet.js
import { useMemo as useMemo2, useRef as useRef7 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useUpdate.js
import { useReducer as useReducer3 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var updateReducer = function(num) {
  return (num + 1) % 1e6;
};
function useUpdate() {
  var _a = useReducer3(updateReducer, 0),
    update = _a[1];
  return update;
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/misc/hookState.js
function resolveHookState(nextState, currentState) {
  if (typeof nextState === 'function') {
    return nextState.length ? nextState(currentState) : nextState();
  }
  return nextState;
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useGetSet.js
function useGetSet(initialState) {
  var state = useRef7(resolveHookState(initialState));
  var update = useUpdate();
  return useMemo2(function() {
    return [
      function() {
        return state.current;
      },
      function(newState) {
        state.current = resolveHookState(newState, state.current);
        update();
      }
    ];
  }, []);
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useCounter.js
function useCounter(initialValue, max, min) {
  if (initialValue === void 0) {
    initialValue = 0;
  }
  if (max === void 0) {
    max = null;
  }
  if (min === void 0) {
    min = null;
  }
  var init = resolveHookState(initialValue);
  typeof init !== 'number' && console.error('initialValue has to be a number, got ' + typeof initialValue);
  if (typeof min === 'number') {
    init = Math.max(init, min);
  } else if (min !== null) {
    console.error('min has to be a number, got ' + typeof min);
  }
  if (typeof max === 'number') {
    init = Math.min(init, max);
  } else if (max !== null) {
    console.error('max has to be a number, got ' + typeof max);
  }
  var _a = useGetSet(init),
    get = _a[0],
    setInternal = _a[1];
  return [
    get(),
    useMemo3(
      function() {
        var set = function(newState) {
          var prevState = get();
          var rState = resolveHookState(newState, prevState);
          if (prevState !== rState) {
            if (typeof min === 'number') {
              rState = Math.max(rState, min);
            }
            if (typeof max === 'number') {
              rState = Math.min(rState, max);
            }
            prevState !== rState && setInternal(rState);
          }
        };
        return {
          get,
          set,
          inc: function(delta) {
            if (delta === void 0) {
              delta = 1;
            }
            var rDelta = resolveHookState(delta, get());
            if (typeof rDelta !== 'number') {
              console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
            }
            set(function(num) {
              return num + rDelta;
            });
          },
          dec: function(delta) {
            if (delta === void 0) {
              delta = 1;
            }
            var rDelta = resolveHookState(delta, get());
            if (typeof rDelta !== 'number') {
              console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
            }
            set(function(num) {
              return num - rDelta;
            });
          },
          reset: function(value) {
            if (value === void 0) {
              value = init;
            }
            var rValue = resolveHookState(value, get());
            if (typeof rValue !== 'number') {
              console.error('value has to be a number or function returning a number, got ' + typeof rValue);
            }
            init = rValue;
            set(rValue);
          }
        };
      },
      [init, min, max]
    )
  ];
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useCss.js
import { create } from '/cdn/v99/nano-css@5.3.5/es2022/nano-css.development.js';
import { addon as addonCSSOM } from '/cdn/v99/nano-css@5.3.5/es2022/addon/cssom.development.js';
import { addon as addonVCSSOM } from '/cdn/v99/nano-css@5.3.5/es2022/addon/vcssom.development.js';
import { cssToTree } from '/cdn/v99/nano-css@5.3.5/es2022/addon/vcssom/cssToTree.development.js';
import { useMemo as useMemo4 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useIsomorphicLayoutEffect.js
import { useEffect as useEffect8, useLayoutEffect } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect8;
var useIsomorphicLayoutEffect_default = useIsomorphicLayoutEffect;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useCss.js
var nano = create();
addonCSSOM(nano);
addonVCSSOM(nano);
var counter = 0;
var useCss = function(css) {
  var className = useMemo4(function() {
    return 'react-use-css-' + (counter++).toString(36);
  }, []);
  var sheet = useMemo4(function() {
    return new nano.VSheet();
  }, []);
  useIsomorphicLayoutEffect_default(function() {
    var tree = {};
    cssToTree(tree, css, '.' + className, '');
    sheet.diff(tree);
    return function() {
      sheet.diff({});
    };
  });
  return className;
};
var useCss_default = useCss;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useCustomCompareEffect.js
import { useEffect as useEffect9, useRef as useRef8 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var isPrimitive = function(val) {
  return val !== Object(val);
};
var useCustomCompareEffect = function(effect, deps, depsEqual) {
  if (true) {
    if (!(deps instanceof Array) || !deps.length) {
      console.warn('`useCustomCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
    }
    if (deps.every(isPrimitive)) {
      console.warn(
        '`useCustomCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.'
      );
    }
    if (typeof depsEqual !== 'function') {
      console.warn('`useCustomCompareEffect` should be used with depsEqual callback for comparing deps list');
    }
  }
  var ref = useRef8(void 0);
  if (!ref.current || !depsEqual(deps, ref.current)) {
    ref.current = deps;
  }
  useEffect9(effect, ref.current);
};
var useCustomCompareEffect_default = useCustomCompareEffect;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useDebounce.js
import { useEffect as useEffect11 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useTimeoutFn.js
import {
  useCallback as useCallback9,
  useEffect as useEffect10,
  useRef as useRef9
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useTimeoutFn(fn, ms) {
  if (ms === void 0) {
    ms = 0;
  }
  var ready = useRef9(false);
  var timeout = useRef9();
  var callback = useRef9(fn);
  var isReady = useCallback9(function() {
    return ready.current;
  }, []);
  var set = useCallback9(
    function() {
      ready.current = false;
      timeout.current && clearTimeout(timeout.current);
      timeout.current = setTimeout(function() {
        ready.current = true;
        callback.current();
      }, ms);
    },
    [ms]
  );
  var clear = useCallback9(function() {
    ready.current = null;
    timeout.current && clearTimeout(timeout.current);
  }, []);
  useEffect10(
    function() {
      callback.current = fn;
    },
    [fn]
  );
  useEffect10(
    function() {
      set();
      return clear;
    },
    [ms]
  );
  return [isReady, clear, set];
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useDebounce.js
function useDebounce(fn, ms, deps) {
  if (ms === void 0) {
    ms = 0;
  }
  if (deps === void 0) {
    deps = [];
  }
  var _a = useTimeoutFn(fn, ms),
    isReady = _a[0],
    cancel = _a[1],
    reset = _a[2];
  useEffect11(reset, deps);
  return [isReady, cancel];
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useDeepCompareEffect.js
var isPrimitive2 = function(val) {
  return val !== Object(val);
};
var useDeepCompareEffect = function(effect, deps) {
  if (true) {
    if (!(deps instanceof Array) || !deps.length) {
      console.warn('`useDeepCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
    }
    if (deps.every(isPrimitive2)) {
      console.warn(
        '`useDeepCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.'
      );
    }
  }
  useCustomCompareEffect_default(effect, deps, isDeepEqual_default);
};
var useDeepCompareEffect_default = useDeepCompareEffect;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useDefault.js
import { useState as useState8 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useDefault = function(defaultValue, initialValue) {
  var _a = useState8(initialValue),
    value = _a[0],
    setValue = _a[1];
  if (value === void 0 || value === null) {
    return [defaultValue, setValue];
  }
  return [value, setValue];
};
var useDefault_default = useDefault;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useDrop.js
import { __spreadArrays as __spreadArrays2 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  useCallback as useCallback10,
  useEffect as useEffect12,
  useMemo as useMemo5,
  useState as useState9
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var createProcess = function(options) {
  return function(dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
      (options.onUri || noop)(uri, event);
      return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
      (options.onFiles || noop)(Array.from(dataTransfer.files), event);
      return;
    }
    if (event.clipboardData) {
      var text = event.clipboardData.getData('text');
      (options.onText || noop)(text, event);
      return;
    }
  };
};
var useDrop = function(options, args) {
  if (options === void 0) {
    options = {};
  }
  if (args === void 0) {
    args = [];
  }
  var onFiles = options.onFiles,
    onText = options.onText,
    onUri = options.onUri;
  var _a = useState9(false),
    over = _a[0],
    setOverRaw = _a[1];
  var setOver = useCallback10(setOverRaw, []);
  var process2 = useMemo5(
    function() {
      return createProcess(options);
    },
    [onFiles, onText, onUri]
  );
  useEffect12(function() {
    var onDragOver = function(event) {
      event.preventDefault();
      setOver(true);
    };
    var onDragEnter = function(event) {
      event.preventDefault();
      setOver(true);
    };
    var onDragLeave = function() {
      setOver(false);
    };
    var onDragExit = function() {
      setOver(false);
    };
    var onDrop = function(event) {
      event.preventDefault();
      setOver(false);
      process2(event.dataTransfer, event);
    };
    var onPaste = function(event) {
      process2(event.clipboardData, event);
    };
    on(document, 'dragover', onDragOver);
    on(document, 'dragenter', onDragEnter);
    on(document, 'dragleave', onDragLeave);
    on(document, 'dragexit', onDragExit);
    on(document, 'drop', onDrop);
    if (onText) {
      on(document, 'paste', onPaste);
    }
    return function() {
      off(document, 'dragover', onDragOver);
      off(document, 'dragenter', onDragEnter);
      off(document, 'dragleave', onDragLeave);
      off(document, 'dragexit', onDragExit);
      off(document, 'drop', onDrop);
      off(document, 'paste', onPaste);
    };
  }, __spreadArrays2([process2], args));
  return {
    over
  };
};
var useDrop_default = useDrop;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useDropArea.js
import { useMemo as useMemo6, useState as useState10 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var createProcess2 = function(options, mounted) {
  return function(dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
      (options.onUri || noop)(uri, event);
      return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
      (options.onFiles || noop)(Array.from(dataTransfer.files), event);
      return;
    }
    if (dataTransfer.items && dataTransfer.items.length) {
      dataTransfer.items[0].getAsString(function(text) {
        if (mounted) {
          (options.onText || noop)(text, event);
        }
      });
    }
  };
};
var createBond = function(process2, setOver) {
  return {
    onDragOver: function(event) {
      event.preventDefault();
    },
    onDragEnter: function(event) {
      event.preventDefault();
      setOver(true);
    },
    onDragLeave: function() {
      setOver(false);
    },
    onDrop: function(event) {
      event.preventDefault();
      event.persist();
      setOver(false);
      process2(event.dataTransfer, event);
    },
    onPaste: function(event) {
      event.persist();
      process2(event.clipboardData, event);
    }
  };
};
var useDropArea = function(options) {
  if (options === void 0) {
    options = {};
  }
  var onFiles = options.onFiles,
    onText = options.onText,
    onUri = options.onUri;
  var isMounted = useMountedState();
  var _a = useState10(false),
    over = _a[0],
    setOver = _a[1];
  var process2 = useMemo6(
    function() {
      return createProcess2(options, isMounted());
    },
    [onFiles, onText, onUri]
  );
  var bond = useMemo6(
    function() {
      return createBond(process2, setOver);
    },
    [process2, setOver]
  );
  return [
    bond,
    {
      over
    }
  ];
};
var useDropArea_default = useDropArea;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useEffectOnce.js
import { useEffect as useEffect13 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useEffectOnce = function(effect) {
  useEffect13(effect, []);
};
var useEffectOnce_default = useEffectOnce;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useEnsuredForwardedRef.js
import {
  forwardRef,
  useEffect as useEffect14,
  useRef as useRef10
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useEnsuredForwardedRef(forwardedRef) {
  var ensuredRef = useRef10(forwardedRef && forwardedRef.current);
  useEffect14(
    function() {
      if (!forwardedRef) {
        return;
      }
      forwardedRef.current = ensuredRef.current;
    },
    [forwardedRef]
  );
  return ensuredRef;
}
function ensuredForwardRef(Component) {
  return forwardRef(function(props, ref) {
    var ensuredRef = useEnsuredForwardedRef(ref);
    return Component(props, ensuredRef);
  });
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useEvent.js
import { useEffect as useEffect15 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var defaultTarget = isBrowser ? window : null;
var isListenerType1 = function(target) {
  return !!target.addEventListener;
};
var isListenerType2 = function(target) {
  return !!target.on;
};
var useEvent = function(name, handler, target, options) {
  if (target === void 0) {
    target = defaultTarget;
  }
  useEffect15(
    function() {
      if (!handler) {
        return;
      }
      if (!target) {
        return;
      }
      if (isListenerType1(target)) {
        on(target, name, handler, options);
      } else if (isListenerType2(target)) {
        target.on(name, handler, options);
      }
      return function() {
        if (isListenerType1(target)) {
          off(target, name, handler, options);
        } else if (isListenerType2(target)) {
          target.off(name, handler, options);
        }
      };
    },
    [name, handler, target, JSON.stringify(options)]
  );
};
var useEvent_default = useEvent;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useError.js
import {
  useCallback as useCallback11,
  useEffect as useEffect16,
  useState as useState11
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useError = function() {
  var _a = useState11(null),
    error = _a[0],
    setError = _a[1];
  useEffect16(
    function() {
      if (error) {
        throw error;
      }
    },
    [error]
  );
  var dispatchError = useCallback11(function(err) {
    setError(err);
  }, []);
  return dispatchError;
};
var useError_default = useError;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useFavicon.js
import { useEffect as useEffect17 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useFavicon = function(href) {
  useEffect17(
    function() {
      var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = href;
      document.getElementsByTagName('head')[0].appendChild(link);
    },
    [href]
  );
};
var useFavicon_default = useFavicon;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useFullscreen.js
import { useState as useState12 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import screenfull from '/cdn/v99/screenfull@5.2.0/es2022/screenfull.development.js';
var useFullscreen = function(ref, enabled, options) {
  if (options === void 0) {
    options = {};
  }
  var video = options.video,
    _a = options.onClose,
    onClose = _a === void 0 ? noop : _a;
  var _b = useState12(enabled),
    isFullscreen = _b[0],
    setIsFullscreen = _b[1];
  useIsomorphicLayoutEffect_default(
    function() {
      if (!enabled) {
        return;
      }
      if (!ref.current) {
        return;
      }
      var onWebkitEndFullscreen = function() {
        if (video === null || video === void 0 ? void 0 : video.current) {
          off(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
        }
        onClose();
      };
      var onChange = function() {
        if (screenfull.isEnabled) {
          var isScreenfullFullscreen = screenfull.isFullscreen;
          setIsFullscreen(isScreenfullFullscreen);
          if (!isScreenfullFullscreen) {
            onClose();
          }
        }
      };
      if (screenfull.isEnabled) {
        try {
          screenfull.request(ref.current);
          setIsFullscreen(true);
        } catch (error) {
          onClose(error);
          setIsFullscreen(false);
        }
        screenfull.on('change', onChange);
      } else if (video && video.current && video.current.webkitEnterFullscreen) {
        video.current.webkitEnterFullscreen();
        on(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
        setIsFullscreen(true);
      } else {
        onClose();
        setIsFullscreen(false);
      }
      return function() {
        setIsFullscreen(false);
        if (screenfull.isEnabled) {
          try {
            screenfull.off('change', onChange);
            screenfull.exit();
          } catch (_a2) {}
        } else if (video && video.current && video.current.webkitExitFullscreen) {
          off(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
          video.current.webkitExitFullscreen();
        }
      };
    },
    [enabled, video, ref]
  );
  return isFullscreen;
};
var useFullscreen_default = useFullscreen;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useGeolocation.js
import { __assign as __assign4 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { useEffect as useEffect18, useState as useState13 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useGeolocation = function(options) {
  var _a = useState13({
      loading: true,
      accuracy: null,
      altitude: null,
      altitudeAccuracy: null,
      heading: null,
      latitude: null,
      longitude: null,
      speed: null,
      timestamp: Date.now()
    }),
    state = _a[0],
    setState = _a[1];
  var mounted = true;
  var watchId;
  var onEvent = function(event) {
    if (mounted) {
      setState({
        loading: false,
        accuracy: event.coords.accuracy,
        altitude: event.coords.altitude,
        altitudeAccuracy: event.coords.altitudeAccuracy,
        heading: event.coords.heading,
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed,
        timestamp: event.timestamp
      });
    }
  };
  var onEventError = function(error) {
    return (
      mounted &&
      setState(function(oldState) {
        return __assign4(__assign4({}, oldState), {
          loading: false,
          error
        });
      })
    );
  };
  useEffect18(function() {
    navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);
    watchId = navigator.geolocation.watchPosition(onEvent, onEventError, options);
    return function() {
      mounted = false;
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);
  return state;
};
var useGeolocation_default = useGeolocation;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useGetSetState.js
import { __assign as __assign5 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { useCallback as useCallback12, useRef as useRef11 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useGetSetState = function(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }
  if (true) {
    if (typeof initialState !== 'object') {
      console.error('useGetSetState initial state must be an object.');
    }
  }
  var update = useUpdate();
  var state = useRef11(__assign5({}, initialState));
  var get = useCallback12(function() {
    return state.current;
  }, []);
  var set = useCallback12(function(patch) {
    if (!patch) {
      return;
    }
    if (true) {
      if (typeof patch !== 'object') {
        console.error('useGetSetState setter patch must be an object.');
      }
    }
    Object.assign(state.current, patch);
    update();
  }, []);
  return [get, set];
};
var useGetSetState_default = useGetSetState;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useHarmonicIntervalFn.js
import { useEffect as useEffect19, useRef as useRef12 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import {
  clearHarmonicInterval,
  setHarmonicInterval
} from '/cdn/v99/set-harmonic-interval@1.0.1/es2022/set-harmonic-interval.development.js';
var useHarmonicIntervalFn = function(fn, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  var latestCallback = useRef12(function() {});
  useEffect19(function() {
    latestCallback.current = fn;
  });
  useEffect19(
    function() {
      if (delay !== null) {
        var interval_1 = setHarmonicInterval(function() {
          return latestCallback.current();
        }, delay);
        return function() {
          return clearHarmonicInterval(interval_1);
        };
      }
      return void 0;
    },
    [delay]
  );
};
var useHarmonicIntervalFn_default = useHarmonicIntervalFn;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useHover.js
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useState15 = React2.useState;
var useHover = function(element) {
  var _a = useState15(false),
    state = _a[0],
    setState = _a[1];
  var onMouseEnter = function(originalOnMouseEnter) {
    return function(event) {
      (originalOnMouseEnter || noop)(event);
      setState(true);
    };
  };
  var onMouseLeave = function(originalOnMouseLeave) {
    return function(event) {
      (originalOnMouseLeave || noop)(event);
      setState(false);
    };
  };
  if (typeof element === 'function') {
    element = element(state);
  }
  var el = React2.cloneElement(element, {
    onMouseEnter: onMouseEnter(element.props.onMouseEnter),
    onMouseLeave: onMouseLeave(element.props.onMouseLeave)
  });
  return [el, state];
};
var useHover_default = useHover;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useHoverDirty.js
import { useEffect as useEffect20, useState as useState16 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useHoverDirty = function(ref, enabled) {
  if (enabled === void 0) {
    enabled = true;
  }
  if (true) {
    if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
      console.error('useHoverDirty expects a single ref argument.');
    }
  }
  var _a = useState16(false),
    value = _a[0],
    setValue = _a[1];
  useEffect20(
    function() {
      var onMouseOver = function() {
        return setValue(true);
      };
      var onMouseOut = function() {
        return setValue(false);
      };
      if (enabled && ref && ref.current) {
        on(ref.current, 'mouseover', onMouseOver);
        on(ref.current, 'mouseout', onMouseOut);
      }
      var current = ref.current;
      return function() {
        if (enabled && current) {
          off(current, 'mouseover', onMouseOver);
          off(current, 'mouseout', onMouseOut);
        }
      };
    },
    [enabled, ref]
  );
  return value;
};
var useHoverDirty_default = useHoverDirty;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useIdle.js
import { useEffect as useEffect21, useState as useState17 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { throttle } from '/cdn/v99/throttle-debounce@3.0.1/es2022/throttle-debounce.development.js';
var defaultEvents2 = ['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel'];
var oneMinute = 6e4;
var useIdle = function(ms, initialState, events) {
  if (ms === void 0) {
    ms = oneMinute;
  }
  if (initialState === void 0) {
    initialState = false;
  }
  if (events === void 0) {
    events = defaultEvents2;
  }
  var _a = useState17(initialState),
    state = _a[0],
    setState = _a[1];
  useEffect21(
    function() {
      var mounted = true;
      var timeout;
      var localState = state;
      var set = function(newState) {
        if (mounted) {
          localState = newState;
          setState(newState);
        }
      };
      var onEvent = throttle(50, function() {
        if (localState) {
          set(false);
        }
        clearTimeout(timeout);
        timeout = setTimeout(function() {
          return set(true);
        }, ms);
      });
      var onVisibility = function() {
        if (!document.hidden) {
          onEvent();
        }
      };
      for (var i = 0; i < events.length; i++) {
        on(window, events[i], onEvent);
      }
      on(document, 'visibilitychange', onVisibility);
      timeout = setTimeout(function() {
        return set(true);
      }, ms);
      return function() {
        mounted = false;
        for (var i2 = 0; i2 < events.length; i2++) {
          off(window, events[i2], onEvent);
        }
        off(document, 'visibilitychange', onVisibility);
      };
    },
    [ms, events]
  );
  return state;
};
var useIdle_default = useIdle;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useIntersection.js
import { useEffect as useEffect22, useState as useState18 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useIntersection = function(ref, options) {
  var _a = useState18(null),
    intersectionObserverEntry = _a[0],
    setIntersectionObserverEntry = _a[1];
  useEffect22(
    function() {
      if (ref.current && typeof IntersectionObserver === 'function') {
        var handler = function(entries) {
          setIntersectionObserverEntry(entries[0]);
        };
        var observer_1 = new IntersectionObserver(handler, options);
        observer_1.observe(ref.current);
        return function() {
          setIntersectionObserverEntry(null);
          observer_1.disconnect();
        };
      }
      return function() {};
    },
    [ref.current, options.threshold, options.root, options.rootMargin]
  );
  return intersectionObserverEntry;
};
var useIntersection_default = useIntersection;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useInterval.js
import { useEffect as useEffect23, useRef as useRef13 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useInterval = function(callback, delay) {
  var savedCallback = useRef13(function() {});
  useEffect23(function() {
    savedCallback.current = callback;
  });
  useEffect23(
    function() {
      if (delay !== null) {
        var interval_1 = setInterval(function() {
          return savedCallback.current();
        }, delay || 0);
        return function() {
          return clearInterval(interval_1);
        };
      }
      return void 0;
    },
    [delay]
  );
};
var useInterval_default = useInterval;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useKey.js
import { useMemo as useMemo7 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var createKeyPredicate = function(keyFilter) {
  return typeof keyFilter === 'function'
    ? keyFilter
    : typeof keyFilter === 'string'
    ? function(event) {
        return event.key === keyFilter;
      }
    : keyFilter
    ? function() {
        return true;
      }
    : function() {
        return false;
      };
};
var useKey = function(key, fn, opts, deps) {
  if (fn === void 0) {
    fn = noop;
  }
  if (opts === void 0) {
    opts = {};
  }
  if (deps === void 0) {
    deps = [key];
  }
  var _a = opts.event,
    event = _a === void 0 ? 'keydown' : _a,
    target = opts.target,
    options = opts.options;
  var useMemoHandler = useMemo7(function() {
    var predicate = createKeyPredicate(key);
    var handler = function(handlerEvent) {
      if (predicate(handlerEvent)) {
        return fn(handlerEvent);
      }
    };
    return handler;
  }, deps);
  useEvent_default(event, useMemoHandler, target, options);
};
var useKey_default = useKey;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/factory/createBreakpoint.js
import {
  useEffect as useEffect24,
  useMemo as useMemo8,
  useState as useState19
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var createBreakpoint = function(breakpoints) {
  if (breakpoints === void 0) {
    breakpoints = {
      laptopL: 1440,
      laptop: 1024,
      tablet: 768
    };
  }
  return function() {
    var _a = useState19(isBrowser ? window.innerWidth : 0),
      screen = _a[0],
      setScreen = _a[1];
    useEffect24(function() {
      var setSideScreen = function() {
        setScreen(window.innerWidth);
      };
      setSideScreen();
      on(window, 'resize', setSideScreen);
      return function() {
        off(window, 'resize', setSideScreen);
      };
    });
    var sortedBreakpoints = useMemo8(
      function() {
        return Object.entries(breakpoints).sort(function(a, b) {
          return a[1] >= b[1] ? 1 : -1;
        });
      },
      [breakpoints]
    );
    var result = sortedBreakpoints.reduce(function(acc, _a2) {
      var name = _a2[0],
        width = _a2[1];
      if (screen >= width) {
        return name;
      } else {
        return acc;
      }
    }, sortedBreakpoints[0][0]);
    return result;
  };
};
var createBreakpoint_default = createBreakpoint;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useKeyPress.js
import { useState as useState20 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useKeyPress = function(keyFilter) {
  var _a = useState20([false, null]),
    state = _a[0],
    set = _a[1];
  useKey_default(
    keyFilter,
    function(event) {
      return set([true, event]);
    },
    {
      event: 'keydown'
    },
    [state]
  );
  useKey_default(
    keyFilter,
    function(event) {
      return set([false, event]);
    },
    {
      event: 'keyup'
    },
    [state]
  );
  return state;
};
var useKeyPress_default = useKeyPress;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useKeyPressEvent.js
var useKeyPressEvent = function(key, keydown, keyup, useKeyPress2) {
  if (useKeyPress2 === void 0) {
    useKeyPress2 = useKeyPress_default;
  }
  var _a = useKeyPress2(key),
    pressed = _a[0],
    event = _a[1];
  useUpdateEffect_default(
    function() {
      if (!pressed && keyup) {
        keyup(event);
      } else if (pressed && keydown) {
        keydown(event);
      }
    },
    [pressed]
  );
};
var useKeyPressEvent_default = useKeyPressEvent;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useLatest.js
import { useRef as useRef14 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useLatest = function(value) {
  var ref = useRef14(value);
  ref.current = value;
  return ref;
};
var useLatest_default = useLatest;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useLifecycles.js
import { useEffect as useEffect25 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useLifecycles = function(mount, unmount) {
  useEffect25(function() {
    if (mount) {
      mount();
    }
    return function() {
      if (unmount) {
        unmount();
      }
    };
  }, []);
};
var useLifecycles_default = useLifecycles;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useList.js
import { useMemo as useMemo9, useRef as useRef15 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useList(initialList) {
  if (initialList === void 0) {
    initialList = [];
  }
  var list = useRef15(resolveHookState(initialList));
  var update = useUpdate();
  var actions = useMemo9(function() {
    var a = {
      set: function(newList) {
        list.current = resolveHookState(newList, list.current);
        update();
      },
      push: function() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          items[_i] = arguments[_i];
        }
        items.length &&
          actions.set(function(curr) {
            return curr.concat(items);
          });
      },
      updateAt: function(index, item) {
        actions.set(function(curr) {
          var arr = curr.slice();
          arr[index] = item;
          return arr;
        });
      },
      insertAt: function(index, item) {
        actions.set(function(curr) {
          var arr = curr.slice();
          index > arr.length ? (arr[index] = item) : arr.splice(index, 0, item);
          return arr;
        });
      },
      update: function(predicate, newItem) {
        actions.set(function(curr) {
          return curr.map(function(item) {
            return predicate(item, newItem) ? newItem : item;
          });
        });
      },
      updateFirst: function(predicate, newItem) {
        var index = list.current.findIndex(function(item) {
          return predicate(item, newItem);
        });
        index >= 0 && actions.updateAt(index, newItem);
      },
      upsert: function(predicate, newItem) {
        var index = list.current.findIndex(function(item) {
          return predicate(item, newItem);
        });
        index >= 0 ? actions.updateAt(index, newItem) : actions.push(newItem);
      },
      sort: function(compareFn) {
        actions.set(function(curr) {
          return curr.slice().sort(compareFn);
        });
      },
      filter: function(callbackFn, thisArg) {
        actions.set(function(curr) {
          return curr.slice().filter(callbackFn, thisArg);
        });
      },
      removeAt: function(index) {
        actions.set(function(curr) {
          var arr = curr.slice();
          arr.splice(index, 1);
          return arr;
        });
      },
      clear: function() {
        actions.set([]);
      },
      reset: function() {
        actions.set(resolveHookState(initialList).slice());
      }
    };
    a.remove = a.removeAt;
    return a;
  }, []);
  return [list.current, actions];
}
var useList_default = useList;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useLocalStorage.js
import {
  useCallback as useCallback13,
  useState as useState21,
  useRef as useRef16,
  useLayoutEffect as useLayoutEffect2
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useLocalStorage = function(key, initialValue, options) {
  if (!isBrowser) {
    return [initialValue, noop, noop];
  }
  if (!key) {
    throw new Error('useLocalStorage key may not be falsy');
  }
  var deserializer = options
    ? options.raw
      ? function(value) {
          return value;
        }
      : options.deserializer
    : JSON.parse;
  var initializer = useRef16(function(key2) {
    try {
      var serializer = options ? (options.raw ? String : options.serializer) : JSON.stringify;
      var localStorageValue = localStorage.getItem(key2);
      if (localStorageValue !== null) {
        return deserializer(localStorageValue);
      } else {
        initialValue && localStorage.setItem(key2, serializer(initialValue));
        return initialValue;
      }
    } catch (_a2) {
      return initialValue;
    }
  });
  var _a = useState21(function() {
      return initializer.current(key);
    }),
    state = _a[0],
    setState = _a[1];
  useLayoutEffect2(
    function() {
      return setState(initializer.current(key));
    },
    [key]
  );
  var set = useCallback13(
    function(valOrFunc) {
      try {
        var newState = typeof valOrFunc === 'function' ? valOrFunc(state) : valOrFunc;
        if (typeof newState === 'undefined') return;
        var value = void 0;
        if (options) {
          if (options.raw) {
            if (typeof newState === 'string') value = newState;
            else value = JSON.stringify(newState);
          } else if (options.serializer) value = options.serializer(newState);
          else value = JSON.stringify(newState);
        } else value = JSON.stringify(newState);
        localStorage.setItem(key, value);
        setState(deserializer(value));
      } catch (_a2) {}
    },
    [key, setState]
  );
  var remove = useCallback13(
    function() {
      try {
        localStorage.removeItem(key);
        setState(void 0);
      } catch (_a2) {}
    },
    [key, setState]
  );
  return [state, set, remove];
};
var useLocalStorage_default = useLocalStorage;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useLocation.js
import { useEffect as useEffect26, useState as useState22 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var patchHistoryMethod = function(method) {
  var history = window.history;
  var original = history[method];
  history[method] = function(state) {
    var result = original.apply(this, arguments);
    var event = new Event(method.toLowerCase());
    event.state = state;
    window.dispatchEvent(event);
    return result;
  };
};
if (isBrowser) {
  patchHistoryMethod('pushState');
  patchHistoryMethod('replaceState');
}
var useLocationServer = function() {
  return {
    trigger: 'load',
    length: 1
  };
};
var buildState = function(trigger) {
  var _a = window.history,
    state = _a.state,
    length = _a.length;
  var _b = window.location,
    hash = _b.hash,
    host = _b.host,
    hostname = _b.hostname,
    href = _b.href,
    origin = _b.origin,
    pathname = _b.pathname,
    port = _b.port,
    protocol = _b.protocol,
    search = _b.search;
  return {
    trigger,
    state,
    length,
    hash,
    host,
    hostname,
    href,
    origin,
    pathname,
    port,
    protocol,
    search
  };
};
var useLocationBrowser = function() {
  var _a = useState22(buildState('load')),
    state = _a[0],
    setState = _a[1];
  useEffect26(function() {
    var onPopstate = function() {
      return setState(buildState('popstate'));
    };
    var onPushstate = function() {
      return setState(buildState('pushstate'));
    };
    var onReplacestate = function() {
      return setState(buildState('replacestate'));
    };
    on(window, 'popstate', onPopstate);
    on(window, 'pushstate', onPushstate);
    on(window, 'replacestate', onReplacestate);
    return function() {
      off(window, 'popstate', onPopstate);
      off(window, 'pushstate', onPushstate);
      off(window, 'replacestate', onReplacestate);
    };
  }, []);
  return state;
};
var hasEventConstructor = typeof Event === 'function';
var useLocation_default = isBrowser && hasEventConstructor ? useLocationBrowser : useLocationServer;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useLockBodyScroll.js
import { useEffect as useEffect27, useRef as useRef17 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function getClosestBody(el) {
  if (!el) {
    return null;
  } else if (el.tagName === 'BODY') {
    return el;
  } else if (el.tagName === 'IFRAME') {
    var document_1 = el.contentDocument;
    return document_1 ? document_1.body : null;
  } else if (!el.offsetParent) {
    return null;
  }
  return getClosestBody(el.offsetParent);
}
function preventDefault(rawEvent) {
  var e = rawEvent || window.event;
  if (e.touches.length > 1) return true;
  if (e.preventDefault) e.preventDefault();
  return false;
}
var isIosDevice =
  isBrowser && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform);
var bodies = /* @__PURE__ */ new Map();
var doc = typeof document === 'object' ? document : void 0;
var documentListenerAdded = false;
var useLockBodyScroll_default = !doc
  ? function useLockBodyMock(_locked, _elementRef) {
      if (_locked === void 0) {
        _locked = true;
      }
    }
  : function useLockBody(locked, elementRef) {
      if (locked === void 0) {
        locked = true;
      }
      var bodyRef = useRef17(doc.body);
      elementRef = elementRef || bodyRef;
      var lock = function(body) {
        var bodyInfo = bodies.get(body);
        if (!bodyInfo) {
          bodies.set(body, {
            counter: 1,
            initialOverflow: body.style.overflow
          });
          if (isIosDevice) {
            if (!documentListenerAdded) {
              on(document, 'touchmove', preventDefault, {
                passive: false
              });
              documentListenerAdded = true;
            }
          } else {
            body.style.overflow = 'hidden';
          }
        } else {
          bodies.set(body, {
            counter: bodyInfo.counter + 1,
            initialOverflow: bodyInfo.initialOverflow
          });
        }
      };
      var unlock = function(body) {
        var bodyInfo = bodies.get(body);
        if (bodyInfo) {
          if (bodyInfo.counter === 1) {
            bodies.delete(body);
            if (isIosDevice) {
              body.ontouchmove = null;
              if (documentListenerAdded) {
                off(document, 'touchmove', preventDefault);
                documentListenerAdded = false;
              }
            } else {
              body.style.overflow = bodyInfo.initialOverflow;
            }
          } else {
            bodies.set(body, {
              counter: bodyInfo.counter - 1,
              initialOverflow: bodyInfo.initialOverflow
            });
          }
        }
      };
      useEffect27(
        function() {
          var body = getClosestBody(elementRef.current);
          if (!body) {
            return;
          }
          if (locked) {
            lock(body);
          } else {
            unlock(body);
          }
        },
        [locked, elementRef.current]
      );
      useEffect27(function() {
        var body = getClosestBody(elementRef.current);
        if (!body) {
          return;
        }
        return function() {
          unlock(body);
        };
      }, []);
    };

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useLogger.js
import { __spreadArrays as __spreadArrays3 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var useLogger = function(componentName) {
  var rest = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    rest[_i - 1] = arguments[_i];
  }
  useEffectOnce_default(function() {
    console.log.apply(console, __spreadArrays3([componentName + ' mounted'], rest));
    return function() {
      return console.log(componentName + ' unmounted');
    };
  });
  useUpdateEffect_default(function() {
    console.log.apply(console, __spreadArrays3([componentName + ' updated'], rest));
  });
};
var useLogger_default = useLogger;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useLongPress.js
import { useCallback as useCallback14, useRef as useRef18 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var isTouchEvent = function(ev) {
  return 'touches' in ev;
};
var preventDefault2 = function(ev) {
  if (!isTouchEvent(ev)) return;
  if (ev.touches.length < 2 && ev.preventDefault) {
    ev.preventDefault();
  }
};
var useLongPress = function(callback, _a) {
  var _b = _a === void 0 ? {} : _a,
    _c = _b.isPreventDefault,
    isPreventDefault = _c === void 0 ? true : _c,
    _d = _b.delay,
    delay = _d === void 0 ? 300 : _d;
  var timeout = useRef18();
  var target = useRef18();
  var start = useCallback14(
    function(event) {
      if (isPreventDefault && event.target) {
        on(event.target, 'touchend', preventDefault2, {
          passive: false
        });
        target.current = event.target;
      }
      timeout.current = setTimeout(function() {
        return callback(event);
      }, delay);
    },
    [callback, delay, isPreventDefault]
  );
  var clear = useCallback14(
    function() {
      timeout.current && clearTimeout(timeout.current);
      if (isPreventDefault && target.current) {
        off(target.current, 'touchend', preventDefault2);
      }
    },
    [isPreventDefault]
  );
  return {
    onMouseDown: function(e) {
      return start(e);
    },
    onTouchStart: function(e) {
      return start(e);
    },
    onMouseUp: clear,
    onMouseLeave: clear,
    onTouchEnd: clear
  };
};
var useLongPress_default = useLongPress;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useMap.js
import { __assign as __assign6, __rest } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  useCallback as useCallback15,
  useMemo as useMemo10,
  useState as useState23
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useMap = function(initialMap) {
  if (initialMap === void 0) {
    initialMap = {};
  }
  var _a = useState23(initialMap),
    map = _a[0],
    set = _a[1];
  var stableActions = useMemo10(
    function() {
      return {
        set: function(key, entry) {
          set(function(prevMap) {
            var _a2;
            return __assign6(__assign6({}, prevMap), ((_a2 = {}), (_a2[key] = entry), _a2));
          });
        },
        setAll: function(newMap) {
          set(newMap);
        },
        remove: function(key) {
          set(function(prevMap) {
            var _a2 = prevMap,
              _b = key,
              omit = _a2[_b],
              rest = __rest(_a2, [typeof _b === 'symbol' ? _b : _b + '']);
            return rest;
          });
        },
        reset: function() {
          return set(initialMap);
        }
      };
    },
    [set]
  );
  var utils = __assign6(
    {
      get: useCallback15(
        function(key) {
          return map[key];
        },
        [map]
      )
    },
    stableActions
  );
  return [map, utils];
};
var useMap_default = useMap;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useMedia.js
import { useEffect as useEffect28, useState as useState24 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var getInitialState = function(query, defaultState4) {
  if (defaultState4 !== void 0) {
    return defaultState4;
  }
  if (isBrowser) {
    return window.matchMedia(query).matches;
  }
  if (true) {
    console.warn(
      '`useMedia` When server side rendering, defaultState should be defined to prevent a hydration mismatches.'
    );
  }
  return false;
};
var useMedia = function(query, defaultState4) {
  var _a = useState24(getInitialState(query, defaultState4)),
    state = _a[0],
    setState = _a[1];
  useEffect28(
    function() {
      var mounted = true;
      var mql = window.matchMedia(query);
      var onChange = function() {
        if (!mounted) {
          return;
        }
        setState(!!mql.matches);
      };
      mql.addListener(onChange);
      setState(mql.matches);
      return function() {
        mounted = false;
        mql.removeListener(onChange);
      };
    },
    [query]
  );
  return state;
};
var useMedia_default = useMedia;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useMediaDevices.js
import { useEffect as useEffect29, useState as useState25 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useMediaDevices = function() {
  var _a = useState25({}),
    state = _a[0],
    setState = _a[1];
  useEffect29(function() {
    var mounted = true;
    var onChange = function() {
      navigator.mediaDevices
        .enumerateDevices()
        .then(function(devices) {
          if (mounted) {
            setState({
              devices: devices.map(function(_a2) {
                var deviceId = _a2.deviceId,
                  groupId = _a2.groupId,
                  kind = _a2.kind,
                  label = _a2.label;
                return {
                  deviceId,
                  groupId,
                  kind,
                  label
                };
              })
            });
          }
        })
        .catch(noop);
    };
    on(navigator.mediaDevices, 'devicechange', onChange);
    onChange();
    return function() {
      mounted = false;
      off(navigator.mediaDevices, 'devicechange', onChange);
    };
  }, []);
  return state;
};
var useMediaDevicesMock = function() {
  return {};
};
var useMediaDevices_default = isNavigator && !!navigator.mediaDevices ? useMediaDevices : useMediaDevicesMock;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useMediatedState.js
import {
  useCallback as useCallback16,
  useRef as useRef19,
  useState as useState26
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useMediatedState(mediator, initialState) {
  var mediatorFn = useRef19(mediator);
  var _a = useState26(initialState),
    state = _a[0],
    setMediatedState = _a[1];
  var setState = useCallback16(
    function(newState) {
      if (mediatorFn.current.length === 2) {
        mediatorFn.current(newState, setMediatedState);
      } else {
        setMediatedState(mediatorFn.current(newState));
      }
    },
    [state]
  );
  return [state, setState];
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useMethods.js
import { useMemo as useMemo11, useReducer as useReducer4 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useMethods = function(createMethods, initialState) {
  var reducer = useMemo11(
    function() {
      return function(reducerState, action) {
        var _a2;
        return (_a2 = createMethods(reducerState))[action.type].apply(_a2, action.payload);
      };
    },
    [createMethods]
  );
  var _a = useReducer4(reducer, initialState),
    state = _a[0],
    dispatch = _a[1];
  var wrappedMethods = useMemo11(
    function() {
      var actionTypes = Object.keys(createMethods(initialState));
      return actionTypes.reduce(function(acc, type) {
        acc[type] = function() {
          var payload = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            payload[_i] = arguments[_i];
          }
          return dispatch({
            type,
            payload
          });
        };
        return acc;
      }, {});
    },
    [createMethods, initialState]
  );
  return [state, wrappedMethods];
};
var useMethods_default = useMethods;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useMotion.js
import { useEffect as useEffect30, useState as useState27 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var defaultState = {
  acceleration: {
    x: null,
    y: null,
    z: null
  },
  accelerationIncludingGravity: {
    x: null,
    y: null,
    z: null
  },
  rotationRate: {
    alpha: null,
    beta: null,
    gamma: null
  },
  interval: 16
};
var useMotion = function(initialState) {
  if (initialState === void 0) {
    initialState = defaultState;
  }
  var _a = useState27(initialState),
    state = _a[0],
    setState = _a[1];
  useEffect30(function() {
    var handler = function(event) {
      var acceleration = event.acceleration,
        accelerationIncludingGravity = event.accelerationIncludingGravity,
        rotationRate = event.rotationRate,
        interval = event.interval;
      setState({
        acceleration: {
          x: acceleration.x,
          y: acceleration.y,
          z: acceleration.z
        },
        accelerationIncludingGravity: {
          x: accelerationIncludingGravity.x,
          y: accelerationIncludingGravity.y,
          z: accelerationIncludingGravity.z
        },
        rotationRate: {
          alpha: rotationRate.alpha,
          beta: rotationRate.beta,
          gamma: rotationRate.gamma
        },
        interval
      });
    };
    on(window, 'devicemotion', handler);
    return function() {
      off(window, 'devicemotion', handler);
    };
  }, []);
  return state;
};
var useMotion_default = useMotion;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useMount.js
var useMount = function(fn) {
  useEffectOnce_default(function() {
    fn();
  });
};
var useMount_default = useMount;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useMouse.js
import { useEffect as useEffect31 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useRafState.js
import {
  useCallback as useCallback17,
  useRef as useRef21,
  useState as useState28
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useUnmount.js
import { useRef as useRef20 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useUnmount = function(fn) {
  var fnRef = useRef20(fn);
  fnRef.current = fn;
  useEffectOnce_default(function() {
    return function() {
      return fnRef.current();
    };
  });
};
var useUnmount_default = useUnmount;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useRafState.js
var useRafState = function(initialState) {
  var frame = useRef21(0);
  var _a = useState28(initialState),
    state = _a[0],
    setState = _a[1];
  var setRafState = useCallback17(function(value) {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(function() {
      setState(value);
    });
  }, []);
  useUnmount_default(function() {
    cancelAnimationFrame(frame.current);
  });
  return [state, setRafState];
};
var useRafState_default = useRafState;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useMouse.js
var useMouse = function(ref) {
  if (true) {
    if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
      console.error('useMouse expects a single ref argument.');
    }
  }
  var _a = useRafState_default({
      docX: 0,
      docY: 0,
      posX: 0,
      posY: 0,
      elX: 0,
      elY: 0,
      elH: 0,
      elW: 0
    }),
    state = _a[0],
    setState = _a[1];
  useEffect31(
    function() {
      var moveHandler = function(event) {
        if (ref && ref.current) {
          var _a2 = ref.current.getBoundingClientRect(),
            left = _a2.left,
            top_1 = _a2.top,
            elW = _a2.width,
            elH = _a2.height;
          var posX = left + window.pageXOffset;
          var posY = top_1 + window.pageYOffset;
          var elX = event.pageX - posX;
          var elY = event.pageY - posY;
          setState({
            docX: event.pageX,
            docY: event.pageY,
            posX,
            posY,
            elX,
            elY,
            elH,
            elW
          });
        }
      };
      on(document, 'mousemove', moveHandler);
      return function() {
        off(document, 'mousemove', moveHandler);
      };
    },
    [ref]
  );
  return state;
};
var useMouse_default = useMouse;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useMouseHovered.js
var nullRef = {
  current: null
};
var useMouseHovered = function(ref, options) {
  if (options === void 0) {
    options = {};
  }
  var whenHovered = !!options.whenHovered;
  var bound = !!options.bound;
  var isHovered = useHoverDirty_default(ref, whenHovered);
  var state = useMouse_default(whenHovered && !isHovered ? nullRef : ref);
  if (bound) {
    state.elX = Math.max(0, Math.min(state.elX, state.elW));
    state.elY = Math.max(0, Math.min(state.elY, state.elH));
  }
  return state;
};
var useMouseHovered_default = useMouseHovered;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useMouseWheel.js
import { useEffect as useEffect32, useState as useState29 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useMouseWheel_default = function() {
  var _a = useState29(0),
    mouseWheelScrolled = _a[0],
    setMouseWheelScrolled = _a[1];
  useEffect32(function() {
    var updateScroll = function(e) {
      setMouseWheelScrolled(e.deltaY + mouseWheelScrolled);
    };
    on(window, 'wheel', updateScroll, false);
    return function() {
      return off(window, 'wheel', updateScroll);
    };
  });
  return mouseWheelScrolled;
};

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useNetworkState.js
import { useEffect as useEffect33, useState as useState30 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var nav2 = isNavigator ? navigator : void 0;
var conn = nav2 && (nav2.connection || nav2.mozConnection || nav2.webkitConnection);
function getConnectionState(previousState) {
  var online = nav2 === null || nav2 === void 0 ? void 0 : nav2.onLine;
  var previousOnline = previousState === null || previousState === void 0 ? void 0 : previousState.online;
  return {
    online,
    previous: previousOnline,
    since:
      online !== previousOnline
        ? new Date()
        : previousState === null || previousState === void 0
        ? void 0
        : previousState.since,
    downlink: conn === null || conn === void 0 ? void 0 : conn.downlink,
    downlinkMax: conn === null || conn === void 0 ? void 0 : conn.downlinkMax,
    effectiveType: conn === null || conn === void 0 ? void 0 : conn.effectiveType,
    rtt: conn === null || conn === void 0 ? void 0 : conn.rtt,
    saveData: conn === null || conn === void 0 ? void 0 : conn.saveData,
    type: conn === null || conn === void 0 ? void 0 : conn.type
  };
}
function useNetworkState(initialState) {
  var _a = useState30(initialState !== null && initialState !== void 0 ? initialState : getConnectionState),
    state = _a[0],
    setState = _a[1];
  useEffect33(function() {
    var handleStateChange = function() {
      setState(getConnectionState);
    };
    on(window, 'online', handleStateChange, {
      passive: true
    });
    on(window, 'offline', handleStateChange, {
      passive: true
    });
    if (conn) {
      on(conn, 'change', handleStateChange, {
        passive: true
      });
    }
    return function() {
      off(window, 'online', handleStateChange);
      off(window, 'offline', handleStateChange);
      if (conn) {
        off(conn, 'change', handleStateChange);
      }
    };
  }, []);
  return state;
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useNumber.js
var useNumber_default = useCounter;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useObservable.js
import { useState as useState31 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useObservable(observable$, initialValue) {
  var _a = useState31(initialValue),
    value = _a[0],
    update = _a[1];
  useIsomorphicLayoutEffect_default(
    function() {
      var s = observable$.subscribe(update);
      return function() {
        return s.unsubscribe();
      };
    },
    [observable$]
  );
  return value;
}
var useObservable_default = useObservable;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useOrientation.js
import { useEffect as useEffect34, useState as useState32 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var defaultState2 = {
  angle: 0,
  type: 'landscape-primary'
};
var useOrientation = function(initialState) {
  if (initialState === void 0) {
    initialState = defaultState2;
  }
  var _a = useState32(initialState),
    state = _a[0],
    setState = _a[1];
  useEffect34(function() {
    var screen = window.screen;
    var mounted = true;
    var onChange = function() {
      if (mounted) {
        var orientation_1 = screen.orientation;
        if (orientation_1) {
          var angle = orientation_1.angle,
            type = orientation_1.type;
          setState({
            angle,
            type
          });
        } else if (window.orientation !== void 0) {
          setState({
            angle: typeof window.orientation === 'number' ? window.orientation : 0,
            type: ''
          });
        } else {
          setState(initialState);
        }
      }
    };
    on(window, 'orientationchange', onChange);
    onChange();
    return function() {
      mounted = false;
      off(window, 'orientationchange', onChange);
    };
  }, []);
  return state;
};
var useOrientation_default = useOrientation;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/usePageLeave.js
import { useEffect as useEffect35 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var usePageLeave = function(onPageLeave, args) {
  if (args === void 0) {
    args = [];
  }
  useEffect35(function() {
    if (!onPageLeave) {
      return;
    }
    var handler = function(event) {
      event = event ? event : window.event;
      var from = event.relatedTarget || event.toElement;
      if (!from || from.nodeName === 'HTML') {
        onPageLeave();
      }
    };
    on(document, 'mouseout', handler);
    return function() {
      off(document, 'mouseout', handler);
    };
  }, args);
};
var usePageLeave_default = usePageLeave;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/usePermission.js
import { useEffect as useEffect36, useState as useState33 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var usePermission = function(permissionDesc) {
  var _a = useState33(''),
    state = _a[0],
    setState = _a[1];
  useEffect36(
    function() {
      var mounted = true;
      var permissionStatus = null;
      var onChange = function() {
        if (!mounted) {
          return;
        }
        setState(function() {
          var _a2;
          return (_a2 = permissionStatus === null || permissionStatus === void 0 ? void 0 : permissionStatus.state) !==
            null && _a2 !== void 0
            ? _a2
            : '';
        });
      };
      navigator.permissions
        .query(permissionDesc)
        .then(function(status) {
          permissionStatus = status;
          on(permissionStatus, 'change', onChange);
          onChange();
        })
        .catch(noop);
      return function() {
        permissionStatus && off(permissionStatus, 'change', onChange);
        mounted = false;
        permissionStatus = null;
      };
    },
    [permissionDesc]
  );
  return state;
};
var usePermission_default = usePermission;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/usePrevious.js
import { useEffect as useEffect37, useRef as useRef22 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function usePrevious(state) {
  var ref = useRef22();
  useEffect37(function() {
    ref.current = state;
  });
  return ref.current;
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/usePreviousDistinct.js
import { useRef as useRef23 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var strictEquals = function(prev, next) {
  return prev === next;
};
function usePreviousDistinct(value, compare) {
  if (compare === void 0) {
    compare = strictEquals;
  }
  var prevRef = useRef23();
  var curRef = useRef23(value);
  var isFirstMount = useFirstMountState();
  if (!isFirstMount && !compare(curRef.current, value)) {
    prevRef.current = curRef.current;
    curRef.current = value;
  }
  return prevRef.current;
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/usePromise.js
import { useCallback as useCallback18 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var usePromise = function() {
  var isMounted = useMountedState();
  return useCallback18(function(promise) {
    return new Promise(function(resolve, reject) {
      var onValue = function(value) {
        isMounted() && resolve(value);
      };
      var onError = function(error) {
        isMounted() && reject(error);
      };
      promise.then(onValue, onError);
    });
  }, []);
};
var usePromise_default = usePromise;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useQueue.js
import { __spreadArrays as __spreadArrays4 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { useState as useState34 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useQueue = function(initialValue) {
  if (initialValue === void 0) {
    initialValue = [];
  }
  var _a = useState34(initialValue),
    state = _a[0],
    set = _a[1];
  return {
    add: function(value) {
      set(function(queue) {
        return __spreadArrays4(queue, [value]);
      });
    },
    remove: function() {
      var result;
      set(function(_a2) {
        var first = _a2[0],
          rest = _a2.slice(1);
        result = first;
        return rest;
      });
      return result;
    },
    get first() {
      return state[0];
    },
    get last() {
      return state[state.length - 1];
    },
    get size() {
      return state.length;
    }
  };
};
var useQueue_default = useQueue;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useRaf.js
import { useState as useState35 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useRaf = function(ms, delay) {
  if (ms === void 0) {
    ms = 1e12;
  }
  if (delay === void 0) {
    delay = 0;
  }
  var _a = useState35(0),
    elapsed = _a[0],
    set = _a[1];
  useIsomorphicLayoutEffect_default(
    function() {
      var raf;
      var timerStop;
      var start;
      var onFrame = function() {
        var time = Math.min(1, (Date.now() - start) / ms);
        set(time);
        loop();
      };
      var loop = function() {
        raf = requestAnimationFrame(onFrame);
      };
      var onStart = function() {
        timerStop = setTimeout(function() {
          cancelAnimationFrame(raf);
          set(1);
        }, ms);
        start = Date.now();
        loop();
      };
      var timerDelay = setTimeout(onStart, delay);
      return function() {
        clearTimeout(timerStop);
        clearTimeout(timerDelay);
        cancelAnimationFrame(raf);
      };
    },
    [ms, delay]
  );
  return elapsed;
};
var useRaf_default = useRaf;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useRafLoop.js
import {
  useCallback as useCallback19,
  useEffect as useEffect38,
  useMemo as useMemo12,
  useRef as useRef24
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useRafLoop(callback, initiallyActive) {
  if (initiallyActive === void 0) {
    initiallyActive = true;
  }
  var raf = useRef24(null);
  var rafActivity = useRef24(false);
  var rafCallback = useRef24(callback);
  rafCallback.current = callback;
  var step = useCallback19(function(time) {
    if (rafActivity.current) {
      rafCallback.current(time);
      raf.current = requestAnimationFrame(step);
    }
  }, []);
  var result = useMemo12(function() {
    return [
      function() {
        if (rafActivity.current) {
          rafActivity.current = false;
          raf.current && cancelAnimationFrame(raf.current);
        }
      },
      function() {
        if (!rafActivity.current) {
          rafActivity.current = true;
          raf.current = requestAnimationFrame(step);
        }
      },
      function() {
        return rafActivity.current;
      }
    ];
  }, []);
  useEffect38(function() {
    if (initiallyActive) {
      result[1]();
    }
    return result[0];
  }, []);
  return result;
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useSearchParam.js
import { useEffect as useEffect39, useState as useState36 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var getValue = function(search, param) {
  return new URLSearchParams(search).get(param);
};
var useSearchParam = function(param) {
  var location = window.location;
  var _a = useState36(function() {
      return getValue(location.search, param);
    }),
    value = _a[0],
    setValue = _a[1];
  useEffect39(function() {
    var onChange = function() {
      setValue(getValue(location.search, param));
    };
    on(window, 'popstate', onChange);
    on(window, 'pushstate', onChange);
    on(window, 'replacestate', onChange);
    return function() {
      off(window, 'popstate', onChange);
      off(window, 'pushstate', onChange);
      off(window, 'replacestate', onChange);
    };
  }, []);
  return value;
};
var useSearchParamServer = function() {
  return null;
};
var useSearchParam_default = isBrowser ? useSearchParam : useSearchParamServer;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useScratch.js
import { __assign as __assign7, __rest as __rest2 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  cloneElement as cloneElement3,
  useEffect as useEffect40,
  useRef as useRef25,
  useState as useState37
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { render } from '/cdn/v99/react-universal-interface@0.6.2/es2022/react-universal-interface.development.js';
var useScratch = function(params) {
  if (params === void 0) {
    params = {};
  }
  var disabled = params.disabled;
  var paramsRef = useLatest_default(params);
  var _a = useState37({
      isScratching: false
    }),
    state = _a[0],
    setState = _a[1];
  var refState = useRef25(state);
  var refScratching = useRef25(false);
  var refAnimationFrame = useRef25(null);
  var _b = useState37(null),
    el = _b[0],
    setEl = _b[1];
  useEffect40(
    function() {
      if (disabled) return;
      if (!el) return;
      var onMoveEvent = function(docX, docY) {
        cancelAnimationFrame(refAnimationFrame.current);
        refAnimationFrame.current = requestAnimationFrame(function() {
          var _a2 = el.getBoundingClientRect(),
            left = _a2.left,
            top = _a2.top;
          var elX = left + window.scrollX;
          var elY = top + window.scrollY;
          var x = docX - elX;
          var y = docY - elY;
          setState(function(oldState) {
            var newState = __assign7(__assign7({}, oldState), {
              dx: x - (oldState.x || 0),
              dy: y - (oldState.y || 0),
              end: Date.now(),
              isScratching: true
            });
            refState.current = newState;
            (paramsRef.current.onScratch || noop)(newState);
            return newState;
          });
        });
      };
      var onMouseMove = function(event) {
        onMoveEvent(event.pageX, event.pageY);
      };
      var onTouchMove = function(event) {
        onMoveEvent(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
      };
      var onMouseUp;
      var onTouchEnd;
      var stopScratching = function() {
        if (!refScratching.current) return;
        refScratching.current = false;
        refState.current = __assign7(__assign7({}, refState.current), {
          isScratching: false
        });
        (paramsRef.current.onScratchEnd || noop)(refState.current);
        setState({
          isScratching: false
        });
        off(window, 'mousemove', onMouseMove);
        off(window, 'touchmove', onTouchMove);
        off(window, 'mouseup', onMouseUp);
        off(window, 'touchend', onTouchEnd);
      };
      onMouseUp = stopScratching;
      onTouchEnd = stopScratching;
      var startScratching = function(docX, docY) {
        if (!refScratching.current) return;
        var _a2 = el.getBoundingClientRect(),
          left = _a2.left,
          top = _a2.top;
        var elX = left + window.scrollX;
        var elY = top + window.scrollY;
        var x = docX - elX;
        var y = docY - elY;
        var time = Date.now();
        var newState = {
          isScratching: true,
          start: time,
          end: time,
          docX,
          docY,
          x,
          y,
          dx: 0,
          dy: 0,
          elH: el.offsetHeight,
          elW: el.offsetWidth,
          elX,
          elY
        };
        refState.current = newState;
        (paramsRef.current.onScratchStart || noop)(newState);
        setState(newState);
        on(window, 'mousemove', onMouseMove);
        on(window, 'touchmove', onTouchMove);
        on(window, 'mouseup', onMouseUp);
        on(window, 'touchend', onTouchEnd);
      };
      var onMouseDown = function(event) {
        refScratching.current = true;
        startScratching(event.pageX, event.pageY);
      };
      var onTouchStart = function(event) {
        refScratching.current = true;
        startScratching(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
      };
      on(el, 'mousedown', onMouseDown);
      on(el, 'touchstart', onTouchStart);
      return function() {
        off(el, 'mousedown', onMouseDown);
        off(el, 'touchstart', onTouchStart);
        off(window, 'mousemove', onMouseMove);
        off(window, 'touchmove', onTouchMove);
        off(window, 'mouseup', onMouseUp);
        off(window, 'touchend', onTouchEnd);
        if (refAnimationFrame.current) cancelAnimationFrame(refAnimationFrame.current);
        refAnimationFrame.current = null;
        refScratching.current = false;
        refState.current = {
          isScratching: false
        };
        setState(refState.current);
      };
    },
    [el, disabled, paramsRef]
  );
  return [setEl, state];
};
var useScratch_default = useScratch;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useScroll.js
import { useEffect as useEffect41 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useScroll = function(ref) {
  if (true) {
    if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
      console.error('`useScroll` expects a single ref argument.');
    }
  }
  var _a = useRafState_default({
      x: 0,
      y: 0
    }),
    state = _a[0],
    setState = _a[1];
  useEffect41(
    function() {
      var handler = function() {
        if (ref.current) {
          setState({
            x: ref.current.scrollLeft,
            y: ref.current.scrollTop
          });
        }
      };
      if (ref.current) {
        on(ref.current, 'scroll', handler, {
          capture: false,
          passive: true
        });
      }
      return function() {
        if (ref.current) {
          off(ref.current, 'scroll', handler);
        }
      };
    },
    [ref]
  );
  return state;
};
var useScroll_default = useScroll;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useScrolling.js
import { useEffect as useEffect42, useState as useState38 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useScrolling = function(ref) {
  var _a = useState38(false),
    scrolling = _a[0],
    setScrolling = _a[1];
  useEffect42(
    function() {
      if (ref.current) {
        var scrollingTimeout_1;
        var handleScrollEnd_1 = function() {
          setScrolling(false);
        };
        var handleScroll_1 = function() {
          setScrolling(true);
          clearTimeout(scrollingTimeout_1);
          scrollingTimeout_1 = setTimeout(function() {
            return handleScrollEnd_1();
          }, 150);
        };
        on(ref.current, 'scroll', handleScroll_1, false);
        return function() {
          if (ref.current) {
            off(ref.current, 'scroll', handleScroll_1, false);
          }
        };
      }
      return function() {};
    },
    [ref]
  );
  return scrolling;
};
var useScrolling_default = useScrolling;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useSessionStorage.js
import { useEffect as useEffect43, useState as useState39 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useSessionStorage = function(key, initialValue, raw) {
  if (!isBrowser) {
    return [initialValue, function() {}];
  }
  var _a = useState39(function() {
      try {
        var sessionStorageValue = sessionStorage.getItem(key);
        if (typeof sessionStorageValue !== 'string') {
          sessionStorage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
          return initialValue;
        } else {
          return raw ? sessionStorageValue : JSON.parse(sessionStorageValue || 'null');
        }
      } catch (_a2) {
        return initialValue;
      }
    }),
    state = _a[0],
    setState = _a[1];
  useEffect43(function() {
    try {
      var serializedState = raw ? String(state) : JSON.stringify(state);
      sessionStorage.setItem(key, serializedState);
    } catch (_a2) {}
  });
  return [state, setState];
};
var useSessionStorage_default = useSessionStorage;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useShallowCompareEffect.js
import { equal as isShallowEqual } from '/cdn/v99/fast-shallow-equal@1.0.0/es2022/fast-shallow-equal.development.js';
var isPrimitive3 = function(val) {
  return val !== Object(val);
};
var shallowEqualDepsList = function(prevDeps, nextDeps) {
  return prevDeps.every(function(dep, index) {
    return isShallowEqual(dep, nextDeps[index]);
  });
};
var useShallowCompareEffect = function(effect, deps) {
  if (true) {
    if (!(deps instanceof Array) || !deps.length) {
      console.warn('`useShallowCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
    }
    if (deps.every(isPrimitive3)) {
      console.warn(
        '`useShallowCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.'
      );
    }
  }
  useCustomCompareEffect_default(effect, deps, shallowEqualDepsList);
};
var useShallowCompareEffect_default = useShallowCompareEffect;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useSize.js
import { __spreadArrays as __spreadArrays5 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useState41 = React3.useState;
var useEffect45 = React3.useEffect;
var useRef27 = React3.useRef;
var DRAF = function(callback) {
  return setTimeout(callback, 35);
};
var useSize = function(element, _a) {
  var _b = _a === void 0 ? {} : _a,
    _c = _b.width,
    width = _c === void 0 ? Infinity : _c,
    _d = _b.height,
    height = _d === void 0 ? Infinity : _d;
  if (!isBrowser) {
    return [
      typeof element === 'function'
        ? element({
            width,
            height
          })
        : element,
      {
        width,
        height
      }
    ];
  }
  var _e = useState41({
      width,
      height
    }),
    state = _e[0],
    setState = _e[1];
  if (typeof element === 'function') {
    element = element(state);
  }
  var style = element.props.style || {};
  var ref = useRef27(null);
  var window2 = null;
  var setSize = function() {
    var iframe = ref.current;
    var size = iframe
      ? {
          width: iframe.offsetWidth,
          height: iframe.offsetHeight
        }
      : {
          width,
          height
        };
    setState(size);
  };
  var onWindow = function(windowToListenOn) {
    on(windowToListenOn, 'resize', setSize);
    DRAF(setSize);
  };
  useEffect45(function() {
    var iframe = ref.current;
    if (!iframe) {
      return;
    }
    if (iframe.contentWindow) {
      window2 = iframe.contentWindow;
      onWindow(window2);
    } else {
      var onLoad_1 = function() {
        on(iframe, 'load', onLoad_1);
        window2 = iframe.contentWindow;
        onWindow(window2);
      };
      off(iframe, 'load', onLoad_1);
    }
    return function() {
      if (window2 && window2.removeEventListener) {
        off(window2, 'resize', setSize);
      }
    };
  }, []);
  style.position = 'relative';
  var sized = React3.cloneElement.apply(
    React3,
    __spreadArrays5(
      [
        element,
        {
          style
        }
      ],
      __spreadArrays5(
        [
          React3.createElement('iframe', {
            ref,
            style: {
              background: 'transparent',
              border: 'none',
              height: '100%',
              left: 0,
              position: 'absolute',
              top: 0,
              width: '100%',
              zIndex: -1
            }
          })
        ],
        React3.Children.toArray(element.props.children)
      )
    )
  );
  return [sized, state];
};
var useSize_default = useSize;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useSlider.js
import { useEffect as useEffect46, useRef as useRef28 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useSlider = function(ref, options) {
  if (options === void 0) {
    options = {};
  }
  var isMounted = useMountedState();
  var isSliding = useRef28(false);
  var valueRef = useRef28(0);
  var frame = useRef28(0);
  var _a = useSetState_default({
      isSliding: false,
      value: 0
    }),
    state = _a[0],
    setState = _a[1];
  valueRef.current = state.value;
  useEffect46(
    function() {
      if (isBrowser) {
        var styles = options.styles === void 0 ? true : options.styles;
        var reverse_1 = options.reverse === void 0 ? false : options.reverse;
        if (ref.current && styles) {
          ref.current.style.userSelect = 'none';
        }
        var startScrubbing_1 = function() {
          if (!isSliding.current && isMounted()) {
            (options.onScrubStart || noop)();
            isSliding.current = true;
            setState({
              isSliding: true
            });
            bindEvents_1();
          }
        };
        var stopScrubbing_1 = function() {
          if (isSliding.current && isMounted()) {
            (options.onScrubStop || noop)(valueRef.current);
            isSliding.current = false;
            setState({
              isSliding: false
            });
            unbindEvents_1();
          }
        };
        var onMouseDown_1 = function(event) {
          startScrubbing_1();
          onMouseMove_1(event);
        };
        var onMouseMove_1 = options.vertical
          ? function(event) {
              return onScrub_1(event.clientY);
            }
          : function(event) {
              return onScrub_1(event.clientX);
            };
        var onTouchStart_1 = function(event) {
          startScrubbing_1();
          onTouchMove_1(event);
        };
        var onTouchMove_1 = options.vertical
          ? function(event) {
              return onScrub_1(event.changedTouches[0].clientY);
            }
          : function(event) {
              return onScrub_1(event.changedTouches[0].clientX);
            };
        var bindEvents_1 = function() {
          on(document, 'mousemove', onMouseMove_1);
          on(document, 'mouseup', stopScrubbing_1);
          on(document, 'touchmove', onTouchMove_1);
          on(document, 'touchend', stopScrubbing_1);
        };
        var unbindEvents_1 = function() {
          off(document, 'mousemove', onMouseMove_1);
          off(document, 'mouseup', stopScrubbing_1);
          off(document, 'touchmove', onTouchMove_1);
          off(document, 'touchend', stopScrubbing_1);
        };
        var onScrub_1 = function(clientXY) {
          cancelAnimationFrame(frame.current);
          frame.current = requestAnimationFrame(function() {
            if (isMounted() && ref.current) {
              var rect = ref.current.getBoundingClientRect();
              var pos = options.vertical ? rect.top : rect.left;
              var length_1 = options.vertical ? rect.height : rect.width;
              if (!length_1) {
                return;
              }
              var value = (clientXY - pos) / length_1;
              if (value > 1) {
                value = 1;
              } else if (value < 0) {
                value = 0;
              }
              if (reverse_1) {
                value = 1 - value;
              }
              setState({
                value
              });
              (options.onScrub || noop)(value);
            }
          });
        };
        on(ref.current, 'mousedown', onMouseDown_1);
        on(ref.current, 'touchstart', onTouchStart_1);
        return function() {
          off(ref.current, 'mousedown', onMouseDown_1);
          off(ref.current, 'touchstart', onTouchStart_1);
        };
      } else {
        return void 0;
      }
    },
    [ref, options.vertical]
  );
  return state;
};
var useSlider_default = useSlider;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useSpeech.js
import { __assign as __assign8 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  useCallback as useCallback20,
  useEffect as useEffect47,
  useRef as useRef29,
  useState as useState42
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var Status;
(function(Status2) {
  Status2[(Status2['init'] = 0)] = 'init';
  Status2[(Status2['play'] = 1)] = 'play';
  Status2[(Status2['pause'] = 2)] = 'pause';
  Status2[(Status2['end'] = 3)] = 'end';
})(Status || (Status = {}));
var useSpeech = function(text, options) {
  var mounted = useRef29(false);
  var _a = useState42(function() {
      var _a2 = options.voice || {},
        _b = _a2.lang,
        lang = _b === void 0 ? 'default' : _b,
        _c = _a2.name,
        name = _c === void 0 ? '' : _c;
      return {
        isPlaying: false,
        status: Status[Status.init],
        lang: options.lang || 'default',
        voiceInfo: {
          lang,
          name
        },
        rate: options.rate || 1,
        pitch: options.pitch || 1,
        volume: options.volume || 1
      };
    }),
    state = _a[0],
    setState = _a[1];
  var handlePlay = useCallback20(function() {
    if (!mounted.current) {
      return;
    }
    setState(function(preState) {
      return __assign8(__assign8({}, preState), {
        isPlaying: true,
        status: Status[Status.play]
      });
    });
  }, []);
  var handlePause = useCallback20(function() {
    if (!mounted.current) {
      return;
    }
    setState(function(preState) {
      return __assign8(__assign8({}, preState), {
        isPlaying: false,
        status: Status[Status.pause]
      });
    });
  }, []);
  var handleEnd = useCallback20(function() {
    if (!mounted.current) {
      return;
    }
    setState(function(preState) {
      return __assign8(__assign8({}, preState), {
        isPlaying: false,
        status: Status[Status.end]
      });
    });
  }, []);
  useEffect47(function() {
    mounted.current = true;
    var utterance = new SpeechSynthesisUtterance(text);
    options.lang && (utterance.lang = options.lang);
    options.voice && (utterance.voice = options.voice);
    utterance.rate = options.rate || 1;
    utterance.pitch = options.pitch || 1;
    utterance.volume = options.volume || 1;
    utterance.onstart = handlePlay;
    utterance.onpause = handlePause;
    utterance.onresume = handlePlay;
    utterance.onend = handleEnd;
    window.speechSynthesis.speak(utterance);
    return function() {
      mounted.current = false;
    };
  }, []);
  return state;
};
var useSpeech_default = useSpeech;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useStartTyping.js
var isFocusedElementEditable = function() {
  var activeElement = document.activeElement,
    body = document.body;
  if (!activeElement) {
    return false;
  }
  if (activeElement === body) {
    return false;
  }
  switch (activeElement.tagName) {
    case 'INPUT':
    case 'TEXTAREA':
      return true;
  }
  return activeElement.hasAttribute('contenteditable');
};
var isTypedCharGood = function(_a) {
  var keyCode = _a.keyCode,
    metaKey = _a.metaKey,
    ctrlKey = _a.ctrlKey,
    altKey = _a.altKey;
  if (metaKey || ctrlKey || altKey) {
    return false;
  }
  if (keyCode >= 48 && keyCode <= 57) {
    return true;
  }
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  }
  return false;
};
var useStartTyping = function(onStartTyping) {
  useIsomorphicLayoutEffect_default(function() {
    var keydown = function(event) {
      !isFocusedElementEditable() && isTypedCharGood(event) && onStartTyping(event);
    };
    on(document, 'keydown', keydown);
    return function() {
      off(document, 'keydown', keydown);
    };
  }, []);
};
var useStartTyping_default = useStartTyping;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useStateWithHistory.js
import {
  useCallback as useCallback21,
  useMemo as useMemo13,
  useRef as useRef30,
  useState as useState43
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useStateWithHistory(initialState, capacity, initialHistory) {
  if (capacity === void 0) {
    capacity = 10;
  }
  if (capacity < 1) {
    throw new Error("Capacity has to be greater than 1, got '" + capacity + "'");
  }
  var isFirstMount = useFirstMountState();
  var _a = useState43(initialState),
    state = _a[0],
    innerSetState = _a[1];
  var history = useRef30(initialHistory !== null && initialHistory !== void 0 ? initialHistory : []);
  var historyPosition = useRef30(0);
  if (isFirstMount) {
    if (history.current.length) {
      if (history.current[history.current.length - 1] !== initialState) {
        history.current.push(initialState);
      }
      if (history.current.length > capacity) {
        history.current = history.current.slice(history.current.length - capacity);
      }
    } else {
      history.current.push(initialState);
    }
    historyPosition.current = history.current.length && history.current.length - 1;
  }
  var setState = useCallback21(
    function(newState) {
      innerSetState(function(currentState) {
        newState = resolveHookState(newState, currentState);
        if (newState !== currentState) {
          if (historyPosition.current < history.current.length - 1) {
            history.current = history.current.slice(0, historyPosition.current + 1);
          }
          historyPosition.current = history.current.push(newState) - 1;
          if (history.current.length > capacity) {
            history.current = history.current.slice(history.current.length - capacity);
          }
        }
        return newState;
      });
    },
    [state, capacity]
  );
  var historyState = useMemo13(
    function() {
      return {
        history: history.current,
        position: historyPosition.current,
        capacity,
        back: function(amount) {
          if (amount === void 0) {
            amount = 1;
          }
          if (!historyPosition.current) {
            return;
          }
          innerSetState(function() {
            historyPosition.current -= Math.min(amount, historyPosition.current);
            return history.current[historyPosition.current];
          });
        },
        forward: function(amount) {
          if (amount === void 0) {
            amount = 1;
          }
          if (historyPosition.current === history.current.length - 1) {
            return;
          }
          innerSetState(function() {
            historyPosition.current = Math.min(historyPosition.current + amount, history.current.length - 1);
            return history.current[historyPosition.current];
          });
        },
        go: function(position) {
          if (position === historyPosition.current) {
            return;
          }
          innerSetState(function() {
            historyPosition.current =
              position < 0
                ? Math.max(history.current.length + position, 0)
                : Math.min(history.current.length - 1, position);
            return history.current[historyPosition.current];
          });
        }
      };
    },
    [state]
  );
  return [state, setState, historyState];
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useStateList.js
import { __assign as __assign9 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { useMemo as useMemo14, useRef as useRef31 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useStateList(stateSet) {
  if (stateSet === void 0) {
    stateSet = [];
  }
  var isMounted = useMountedState();
  var update = useUpdate();
  var index = useRef31(0);
  useUpdateEffect_default(
    function() {
      if (stateSet.length <= index.current) {
        index.current = stateSet.length - 1;
        update();
      }
    },
    [stateSet.length]
  );
  var actions = useMemo14(
    function() {
      return {
        next: function() {
          return actions.setStateAt(index.current + 1);
        },
        prev: function() {
          return actions.setStateAt(index.current - 1);
        },
        setStateAt: function(newIndex) {
          if (!isMounted()) return;
          if (!stateSet.length) return;
          if (newIndex === index.current) return;
          index.current = newIndex >= 0 ? newIndex % stateSet.length : stateSet.length + (newIndex % stateSet.length);
          update();
        },
        setState: function(state) {
          if (!isMounted()) return;
          var newIndex = stateSet.length ? stateSet.indexOf(state) : -1;
          if (newIndex === -1) {
            throw new Error("State '" + state + "' is not a valid state (does not exist in state list)");
          }
          index.current = newIndex;
          update();
        }
      };
    },
    [stateSet]
  );
  return __assign9(
    {
      state: stateSet[index.current],
      currentIndex: index.current
    },
    actions
  );
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useThrottle.js
import {
  useEffect as useEffect48,
  useRef as useRef32,
  useState as useState44
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useThrottle = function(value, ms) {
  if (ms === void 0) {
    ms = 200;
  }
  var _a = useState44(value),
    state = _a[0],
    setState = _a[1];
  var timeout = useRef32();
  var nextValue = useRef32(null);
  var hasNextValue = useRef32(0);
  useEffect48(
    function() {
      if (!timeout.current) {
        setState(value);
        var timeoutCallback_1 = function() {
          if (hasNextValue.current) {
            hasNextValue.current = false;
            setState(nextValue.current);
            timeout.current = setTimeout(timeoutCallback_1, ms);
          } else {
            timeout.current = void 0;
          }
        };
        timeout.current = setTimeout(timeoutCallback_1, ms);
      } else {
        nextValue.current = value;
        hasNextValue.current = true;
      }
    },
    [value]
  );
  useUnmount_default(function() {
    timeout.current && clearTimeout(timeout.current);
  });
  return state;
};
var useThrottle_default = useThrottle;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useThrottleFn.js
import {
  useEffect as useEffect49,
  useRef as useRef33,
  useState as useState45
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useThrottleFn = function(fn, ms, args) {
  if (ms === void 0) {
    ms = 200;
  }
  var _a = useState45(null),
    state = _a[0],
    setState = _a[1];
  var timeout = useRef33();
  var nextArgs = useRef33();
  useEffect49(function() {
    if (!timeout.current) {
      setState(fn.apply(void 0, args));
      var timeoutCallback_1 = function() {
        if (nextArgs.current) {
          setState(fn.apply(void 0, nextArgs.current));
          nextArgs.current = void 0;
          timeout.current = setTimeout(timeoutCallback_1, ms);
        } else {
          timeout.current = void 0;
        }
      };
      timeout.current = setTimeout(timeoutCallback_1, ms);
    } else {
      nextArgs.current = args;
    }
  }, args);
  useUnmount_default(function() {
    timeout.current && clearTimeout(timeout.current);
  });
  return state;
};
var useThrottleFn_default = useThrottleFn;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useTimeout.js
function useTimeout(ms) {
  if (ms === void 0) {
    ms = 0;
  }
  var update = useUpdate();
  return useTimeoutFn(update, ms);
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useTitle.js
import { useEffect as useEffect50, useRef as useRef34 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var DEFAULT_USE_TITLE_OPTIONS = {
  restoreOnUnmount: false
};
function useTitle(title, options) {
  if (options === void 0) {
    options = DEFAULT_USE_TITLE_OPTIONS;
  }
  var prevTitleRef = useRef34(document.title);
  if (document.title !== title) document.title = title;
  useEffect50(function() {
    if (options && options.restoreOnUnmount) {
      return function() {
        document.title = prevTitleRef.current;
      };
    } else {
      return;
    }
  }, []);
}
var useTitle_default = typeof document !== 'undefined' ? useTitle : function(_title) {};

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useTween.js
import { easing } from '/cdn/v99/ts-easing@0.2.0/es2022/ts-easing.development.js';
var useTween = function(easingName, ms, delay) {
  if (easingName === void 0) {
    easingName = 'inCirc';
  }
  if (ms === void 0) {
    ms = 200;
  }
  if (delay === void 0) {
    delay = 0;
  }
  var fn = easing[easingName];
  var t = useRaf_default(ms, delay);
  if (true) {
    if (typeof fn !== 'function') {
      console.error(
        'useTween() expected "easingName" property to be a valid easing function name, like:"' +
          Object.keys(easing).join('", "') +
          '".'
      );
      console.trace();
      return 0;
    }
  }
  return fn(t);
};
var useTween_default = useTween;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useUnmountPromise.js
import { useMemo as useMemo15, useRef as useRef35 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useUnmountPromise = function() {
  var refUnmounted = useRef35(false);
  useEffectOnce_default(function() {
    return function() {
      refUnmounted.current = true;
    };
  });
  var wrapper = useMemo15(function() {
    var race = function(promise, onError) {
      var newPromise = new Promise(function(resolve, reject) {
        promise.then(
          function(result) {
            if (!refUnmounted.current) resolve(result);
          },
          function(error) {
            if (!refUnmounted.current) reject(error);
            else if (onError) onError(error);
            else console.error('useUnmountPromise', error);
          }
        );
      });
      return newPromise;
    };
    return race;
  }, []);
  return wrapper;
};
var useUnmountPromise_default = useUnmountPromise;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useUpsert.js
import { __assign as __assign10 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
function useUpsert(predicate, initialList) {
  if (initialList === void 0) {
    initialList = [];
  }
  var _a = useList_default(initialList),
    list = _a[0],
    listActions = _a[1];
  return [
    list,
    __assign10(__assign10({}, listActions), {
      upsert: function(newItem) {
        listActions.upsert(predicate, newItem);
      }
    })
  ];
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useVibrate.js
import { useEffect as useEffect51 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var isVibrationApiSupported = isNavigator && 'vibrate' in navigator;
function useVibrate(enabled, pattern, loop) {
  if (enabled === void 0) {
    enabled = true;
  }
  if (pattern === void 0) {
    pattern = [1e3, 1e3];
  }
  if (loop === void 0) {
    loop = true;
  }
  useEffect51(
    function() {
      var interval;
      if (enabled) {
        navigator.vibrate(pattern);
        if (loop) {
          var duration =
            pattern instanceof Array
              ? pattern.reduce(function(a, b) {
                  return a + b;
                })
              : pattern;
          interval = setInterval(function() {
            navigator.vibrate(pattern);
          }, duration);
        }
      }
      return function() {
        if (enabled) {
          navigator.vibrate(0);
          if (loop) {
            clearInterval(interval);
          }
        }
      };
    },
    [enabled]
  );
}
var useVibrate_default = isVibrationApiSupported ? useVibrate : noop;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useVideo.js
var useVideo = createHTMLMediaHook('video');
var useVideo_default = useVideo;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useStateValidator.js
import {
  useCallback as useCallback22,
  useEffect as useEffect52,
  useRef as useRef36,
  useState as useState46
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useStateValidator(state, validator, initialState) {
  if (initialState === void 0) {
    initialState = [void 0];
  }
  var validatorInner = useRef36(validator);
  var stateInner = useRef36(state);
  validatorInner.current = validator;
  stateInner.current = state;
  var _a = useState46(initialState),
    validity = _a[0],
    setValidity = _a[1];
  var validate = useCallback22(
    function() {
      if (validatorInner.current.length >= 2) {
        validatorInner.current(stateInner.current, setValidity);
      } else {
        setValidity(validatorInner.current(stateInner.current));
      }
    },
    [setValidity]
  );
  useEffect52(
    function() {
      validate();
    },
    [state]
  );
  return [validity, validate];
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useScrollbarWidth.js
import { scrollbarWidth } from '/cdn/v99/@xobotyi/scrollbar-width@1.9.5/es2022/scrollbar-width.development.js';
import { useEffect as useEffect53, useState as useState47 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useScrollbarWidth() {
  var _a = useState47(scrollbarWidth()),
    sbw = _a[0],
    setSbw = _a[1];
  useEffect53(function() {
    if (typeof sbw !== 'undefined') {
      return;
    }
    var raf = requestAnimationFrame(function() {
      setSbw(scrollbarWidth());
    });
    return function() {
      return cancelAnimationFrame(raf);
    };
  }, []);
  return sbw;
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useMultiStateValidator.js
import {
  useCallback as useCallback23,
  useEffect as useEffect54,
  useRef as useRef37,
  useState as useState48
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useMultiStateValidator(states, validator, initialValidity) {
  if (initialValidity === void 0) {
    initialValidity = [void 0];
  }
  if (typeof states !== 'object') {
    throw new Error('states expected to be an object or array, got ' + typeof states);
  }
  var validatorInner = useRef37(validator);
  var statesInner = useRef37(states);
  validatorInner.current = validator;
  statesInner.current = states;
  var _a = useState48(initialValidity),
    validity = _a[0],
    setValidity = _a[1];
  var validate = useCallback23(
    function() {
      if (validatorInner.current.length >= 2) {
        validatorInner.current(statesInner.current, setValidity);
      } else {
        setValidity(validatorInner.current(statesInner.current));
      }
    },
    [setValidity]
  );
  useEffect54(function() {
    validate();
  }, Object.values(states));
  return [validity, validate];
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useWindowScroll.js
import { useEffect as useEffect55 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useWindowScroll = function() {
  var _a = useRafState_default(function() {
      return {
        x: isBrowser ? window.pageXOffset : 0,
        y: isBrowser ? window.pageYOffset : 0
      };
    }),
    state = _a[0],
    setState = _a[1];
  useEffect55(function() {
    var handler = function() {
      setState(function(state2) {
        var pageXOffset = window.pageXOffset,
          pageYOffset = window.pageYOffset;
        return state2.x !== pageXOffset || state2.y !== pageYOffset
          ? {
              x: pageXOffset,
              y: pageYOffset
            }
          : state2;
      });
    };
    handler();
    on(window, 'scroll', handler, {
      capture: false,
      passive: true
    });
    return function() {
      off(window, 'scroll', handler);
    };
  }, []);
  return state;
};
var useWindowScroll_default = useWindowScroll;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useWindowSize.js
import { useEffect as useEffect56 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useWindowSize = function(initialWidth, initialHeight) {
  if (initialWidth === void 0) {
    initialWidth = Infinity;
  }
  if (initialHeight === void 0) {
    initialHeight = Infinity;
  }
  var _a = useRafState_default({
      width: isBrowser ? window.innerWidth : initialWidth,
      height: isBrowser ? window.innerHeight : initialHeight
    }),
    state = _a[0],
    setState = _a[1];
  useEffect56(function() {
    if (isBrowser) {
      var handler_1 = function() {
        setState({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      on(window, 'resize', handler_1);
      return function() {
        off(window, 'resize', handler_1);
      };
    }
  }, []);
  return state;
};
var useWindowSize_default = useWindowSize;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useMeasure.js
import { useMemo as useMemo16, useState as useState49 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var defaultState3 = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};
function useMeasure() {
  var _a = useState49(null),
    element = _a[0],
    ref = _a[1];
  var _b = useState49(defaultState3),
    rect = _b[0],
    setRect = _b[1];
  var observer = useMemo16(function() {
    return new window.ResizeObserver(function(entries) {
      if (entries[0]) {
        var _a2 = entries[0].contentRect,
          x = _a2.x,
          y = _a2.y,
          width = _a2.width,
          height = _a2.height,
          top_1 = _a2.top,
          left = _a2.left,
          bottom = _a2.bottom,
          right = _a2.right;
        setRect({
          x,
          y,
          width,
          height,
          top: top_1,
          left,
          bottom,
          right
        });
      }
    });
  }, []);
  useIsomorphicLayoutEffect_default(
    function() {
      if (!element) return;
      observer.observe(element);
      return function() {
        observer.disconnect();
      };
    },
    [element]
  );
  return [ref, rect];
}
var useMeasure_default =
  isBrowser && typeof window.ResizeObserver !== 'undefined'
    ? useMeasure
    : function() {
        return [noop, defaultState3];
      };

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/usePinchZoom.js
import {
  useEffect as useEffect57,
  useMemo as useMemo17,
  useState as useState50
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var ZoomState;
(function(ZoomState2) {
  ZoomState2['ZOOMING_IN'] = 'ZOOMING_IN';
  ZoomState2['ZOOMING_OUT'] = 'ZOOMING_OUT';
})(ZoomState || (ZoomState = {}));
var usePinchZoom = function(ref) {
  var cacheRef = useMemo17(
    function() {
      return {
        evCache: [],
        prevDiff: -1
      };
    },
    [ref.current]
  );
  var _a = useState50(),
    zoomingState = _a[0],
    setZoomingState = _a[1];
  var pointermove_handler = function(ev) {
    for (var i = 0; i < cacheRef.evCache.length; i++) {
      if (ev.pointerId == cacheRef.evCache[i].pointerId) {
        cacheRef.evCache[i] = ev;
        break;
      }
    }
    if (cacheRef.evCache.length == 2) {
      var curDiff = Math.abs(cacheRef.evCache[0].clientX - cacheRef.evCache[1].clientX);
      if (cacheRef.prevDiff > 0) {
        if (curDiff > cacheRef.prevDiff) {
          setZoomingState([ZoomState.ZOOMING_IN, curDiff]);
        }
        if (curDiff < cacheRef.prevDiff) {
          setZoomingState([ZoomState.ZOOMING_OUT, curDiff]);
        }
      }
      cacheRef.prevDiff = curDiff;
    }
  };
  var pointerdown_handler = function(ev) {
    cacheRef.evCache.push(ev);
  };
  var pointerup_handler = function(ev) {
    remove_event(ev);
    if (cacheRef.evCache.length < 2) {
      cacheRef.prevDiff = -1;
    }
  };
  var remove_event = function(ev) {
    for (var i = 0; i < cacheRef.evCache.length; i++) {
      if (cacheRef.evCache[i].pointerId == ev.pointerId) {
        cacheRef.evCache.splice(i, 1);
        break;
      }
    }
  };
  useEffect57(
    function() {
      if (ref === null || ref === void 0 ? void 0 : ref.current) {
        ref.current.onpointerdown = pointerdown_handler;
        ref.current.onpointermove = pointermove_handler;
        ref.current.onpointerup = pointerup_handler;
        ref.current.onpointercancel = pointerup_handler;
        ref.current.onpointerout = pointerup_handler;
        ref.current.onpointerleave = pointerup_handler;
      }
    },
    [ref === null || ref === void 0 ? void 0 : ref.current]
  );
  return zoomingState
    ? {
        zoomingState: zoomingState[0],
        pinchState: zoomingState[1]
      }
    : {
        zoomingState: null,
        pinchState: 0
      };
};
var usePinchZoom_default = usePinchZoom;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useRendersCount.js
import { useRef as useRef38 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useRendersCount() {
  return ++useRef38(0).current;
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useSet.js
import {
  __assign as __assign11,
  __spreadArrays as __spreadArrays6
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  useCallback as useCallback24,
  useMemo as useMemo18,
  useState as useState51
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useSet = function(initialSet) {
  if (initialSet === void 0) {
    initialSet = /* @__PURE__ */ new Set();
  }
  var _a = useState51(initialSet),
    set = _a[0],
    setSet = _a[1];
  var stableActions = useMemo18(
    function() {
      var add = function(item) {
        return setSet(function(prevSet) {
          return new Set(__spreadArrays6(Array.from(prevSet), [item]));
        });
      };
      var remove = function(item) {
        return setSet(function(prevSet) {
          return new Set(
            Array.from(prevSet).filter(function(i) {
              return i !== item;
            })
          );
        });
      };
      var toggle = function(item) {
        return setSet(function(prevSet) {
          return prevSet.has(item)
            ? new Set(
                Array.from(prevSet).filter(function(i) {
                  return i !== item;
                })
              )
            : new Set(__spreadArrays6(Array.from(prevSet), [item]));
        });
      };
      return {
        add,
        remove,
        toggle,
        reset: function() {
          return setSet(initialSet);
        }
      };
    },
    [setSet]
  );
  var utils = __assign11(
    {
      has: useCallback24(
        function(item) {
          return set.has(item);
        },
        [set]
      )
    },
    stableActions
  );
  return [set, utils];
};
var useSet_default = useSet;

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/factory/createGlobalState.js
import { useState as useState52 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function createGlobalState(initialState) {
  var store = {
    state: initialState instanceof Function ? initialState() : initialState,
    setState: function(nextState) {
      store.state = resolveHookState(nextState, store.state);
      store.setters.forEach(function(setter) {
        return setter(store.state);
      });
    },
    setters: []
  };
  return function() {
    var _a = useState52(store.state),
      globalState = _a[0],
      stateSetter = _a[1];
    useEffectOnce_default(function() {
      return function() {
        store.setters = store.setters.filter(function(setter) {
          return setter !== stateSetter;
        });
      };
    });
    useIsomorphicLayoutEffect_default(function() {
      if (!store.setters.includes(stateSetter)) {
        store.setters.push(stateSetter);
      }
    });
    return [globalState, store.setState];
  };
}

// esm-build-3efcc4f321d4ef4baa0569237c9b810f3aa5a4e8-fc90a8da/node_modules/react-use/esm/useHash.js
import {
  useCallback as useCallback25,
  useState as useState53
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useHash = function() {
  var _a = useState53(function() {
      return window.location.hash;
    }),
    hash = _a[0],
    setHash = _a[1];
  var onHashChange = useCallback25(function() {
    setHash(window.location.hash);
  }, []);
  useLifecycles_default(
    function() {
      on(window, 'hashchange', onHashChange);
    },
    function() {
      off(window, 'hashchange', onHashChange);
    }
  );
  var _setHash = useCallback25(
    function(newHash) {
      if (newHash !== hash) {
        window.location.hash = newHash;
      }
    },
    [hash]
  );
  return [hash, _setHash];
};
export {
  createBreakpoint_default as createBreakpoint,
  createGlobalState,
  createMemo_default as createMemo,
  createReducer_default as createReducer,
  createReducerContext_default as createReducerContext,
  createStateContext_default as createStateContext,
  ensuredForwardRef,
  useAsync,
  useAsyncFn,
  useAsyncRetry_default as useAsyncRetry,
  useAudio_default as useAudio,
  useBattery_default as useBattery,
  useBeforeUnload_default as useBeforeUnload,
  useBoolean_default as useBoolean,
  useClickAway_default as useClickAway,
  useCookie_default as useCookie,
  useCopyToClipboard_default as useCopyToClipboard,
  useCounter,
  useCss_default as useCss,
  useCustomCompareEffect_default as useCustomCompareEffect,
  useDebounce,
  useDeepCompareEffect_default as useDeepCompareEffect,
  useDefault_default as useDefault,
  useDrop_default as useDrop,
  useDropArea_default as useDropArea,
  useEffectOnce_default as useEffectOnce,
  useEnsuredForwardedRef,
  useError_default as useError,
  useEvent_default as useEvent,
  useFavicon_default as useFavicon,
  useFirstMountState,
  useFullscreen_default as useFullscreen,
  useGeolocation_default as useGeolocation,
  useGetSet,
  useGetSetState_default as useGetSetState,
  useHarmonicIntervalFn_default as useHarmonicIntervalFn,
  useHash,
  useHover_default as useHover,
  useHoverDirty_default as useHoverDirty,
  useIdle_default as useIdle,
  useIntersection_default as useIntersection,
  useInterval_default as useInterval,
  useIsomorphicLayoutEffect_default as useIsomorphicLayoutEffect,
  useKey_default as useKey,
  useKeyPress_default as useKeyPress,
  useKeyPressEvent_default as useKeyPressEvent,
  useLatest_default as useLatest,
  useLifecycles_default as useLifecycles,
  useList_default as useList,
  useLocalStorage_default as useLocalStorage,
  useLocation_default as useLocation,
  useLockBodyScroll_default as useLockBodyScroll,
  useLogger_default as useLogger,
  useLongPress_default as useLongPress,
  useMap_default as useMap,
  useMeasure_default as useMeasure,
  useMedia_default as useMedia,
  useMediaDevices_default as useMediaDevices,
  useMediatedState,
  useMethods_default as useMethods,
  useMotion_default as useMotion,
  useMount_default as useMount,
  useMountedState,
  useMouse_default as useMouse,
  useMouseHovered_default as useMouseHovered,
  useMouseWheel_default as useMouseWheel,
  useMultiStateValidator,
  useNetworkState,
  useNumber_default as useNumber,
  useObservable_default as useObservable,
  useOrientation_default as useOrientation,
  usePageLeave_default as usePageLeave,
  usePermission_default as usePermission,
  usePinchZoom_default as usePinchZoom,
  usePrevious,
  usePreviousDistinct,
  usePromise_default as usePromise,
  useQueue_default as useQueue,
  useRaf_default as useRaf,
  useRafLoop,
  useRafState_default as useRafState,
  useRendersCount,
  useScratch_default as useScratch,
  useScroll_default as useScroll,
  useScrollbarWidth,
  useScrolling_default as useScrolling,
  useSearchParam_default as useSearchParam,
  useSessionStorage_default as useSessionStorage,
  useSet_default as useSet,
  useSetState_default as useSetState,
  useShallowCompareEffect_default as useShallowCompareEffect,
  useSize_default as useSize,
  useSlider_default as useSlider,
  useSpeech_default as useSpeech,
  useStartTyping_default as useStartTyping,
  useStateList,
  useStateValidator,
  useStateWithHistory,
  useThrottle_default as useThrottle,
  useThrottleFn_default as useThrottleFn,
  useTimeout,
  useTimeoutFn,
  useTitle_default as useTitle,
  useToggle_default as useToggle,
  useTween_default as useTween,
  useUnmount_default as useUnmount,
  useUnmountPromise_default as useUnmountPromise,
  useUpdate,
  useUpdateEffect_default as useUpdateEffect,
  useUpsert,
  useVibrate_default as useVibrate,
  useVideo_default as useVideo,
  useWindowScroll_default as useWindowScroll,
  useWindowSize_default as useWindowSize
};
