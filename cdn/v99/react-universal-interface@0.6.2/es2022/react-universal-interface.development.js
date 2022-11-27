/* esm.sh - esbuild bundle(react-universal-interface@0.6.2) es2022 development */
import * as __tslib$ from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import __react$ from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ (x =>
  typeof require !== 'undefined'
    ? require
    : typeof Proxy !== 'undefined'
    ? new Proxy(x, {
        get: (a, b) => (typeof require !== 'undefined' ? require : a)[b]
      })
    : x)(function(x) {
  if (typeof require !== 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) =>
  function __require2() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])(
          (mod = {
            exports: {}
          }).exports,
          mod
        ),
      mod.exports
    );
  };
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', {
          value: mod,
          enumerable: true
        })
      : target,
    mod
  )
);

// esm-build-6a645c2212cd266a9a63e48e243fc8b96bd7dd47-5f4a9ef8/node_modules/react-universal-interface/lib/render.js
var require_render = __commonJS({
  'esm-build-6a645c2212cd266a9a63e48e243fc8b96bd7dd47-5f4a9ef8/node_modules/react-universal-interface/lib/render.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    var tslib_1 = __tslib$;
    var react_1 = __react$;
    var isReact16Plus = parseInt(react_1.version.substr(0, react_1.version.indexOf('.'))) > 15;
    var isFn = function(fn) {
      return typeof fn === 'function';
    };
    var render2 = function(props, data) {
      var more = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        more[_i - 2] = arguments[_i];
      }
      if (true) {
        if (typeof props !== 'object') {
          throw new TypeError('renderChildren(props, data) first argument must be a props object.');
        }
        var children_1 = props.children,
          render_1 = props.render;
        if (isFn(children_1) && isFn(render_1)) {
          console.warn(
            'Both "render" and "children" are specified for in a universal interface component. Children will be used.'
          );
          console.trace();
        }
        if (typeof data !== 'object') {
          console.warn(
            'Universal component interface normally expects data to be an object, ' +
              ('"' + typeof data + '" received.')
          );
          console.trace();
        }
      }
      var render3 = props.render,
        _a = props.children,
        children = _a === void 0 ? render3 : _a,
        component = props.component,
        _b = props.comp,
        comp = _b === void 0 ? component : _b;
      if (isFn(children)) return children.apply(void 0, tslib_1.__spreadArrays([data], more));
      if (comp) {
        return react_1.createElement(comp, data);
      }
      if (children instanceof Array)
        return isReact16Plus
          ? children
          : react_1.createElement.apply(void 0, tslib_1.__spreadArrays(['div', null], children));
      if (children && children instanceof Object) {
        if (true) {
          if (
            !children.type ||
            (typeof children.type !== 'string' &&
              typeof children.type !== 'function' &&
              typeof children.type !== 'symbol')
          ) {
            console.warn(
              'Universal component interface received object as children, expected React element, but received unexpected React "type".'
            );
            console.trace();
          }
          if (typeof children.type === 'string') return children;
          return react_1.cloneElement(children, Object.assign({}, children.props, data));
        } else {
          if (typeof children.type === 'string') return children;
          return react_1.cloneElement(children, Object.assign({}, children.props, data));
        }
      }
      return children || null;
    };
    exports.default = render2;
  }
});

// esm-build-6a645c2212cd266a9a63e48e243fc8b96bd7dd47-5f4a9ef8/node_modules/react-universal-interface/lib/wrapInStatefulComponent.js
var require_wrapInStatefulComponent = __commonJS({
  'esm-build-6a645c2212cd266a9a63e48e243fc8b96bd7dd47-5f4a9ef8/node_modules/react-universal-interface/lib/wrapInStatefulComponent.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    var tslib_1 = __tslib$;
    var React = tslib_1.__importStar(__react$);
    var wrapInStatefulComponent = function(Comp) {
      var Decorated = (function(_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        class_1.prototype.render = function() {
          return Comp(this.props, this.context);
        };
        return class_1;
      })(React.Component);
      if (true) {
        Decorated.displayName = 'Decorated(' + (Comp.displayName || Comp.name) + ')';
      }
      return Decorated;
    };
    exports.default = wrapInStatefulComponent;
  }
});

// esm-build-6a645c2212cd266a9a63e48e243fc8b96bd7dd47-5f4a9ef8/node_modules/react-universal-interface/lib/addClassDecoratorSupport.js
var require_addClassDecoratorSupport = __commonJS({
  'esm-build-6a645c2212cd266a9a63e48e243fc8b96bd7dd47-5f4a9ef8/node_modules/react-universal-interface/lib/addClassDecoratorSupport.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    var tslib_1 = __tslib$;
    var wrapInStatefulComponent_1 = tslib_1.__importDefault(require_wrapInStatefulComponent());
    var addClassDecoratorSupport = function(Comp) {
      var isSFC = !Comp.prototype;
      return !isSFC ? Comp : wrapInStatefulComponent_1.default(Comp);
    };
    exports.default = addClassDecoratorSupport;
  }
});

// esm-build-6a645c2212cd266a9a63e48e243fc8b96bd7dd47-5f4a9ef8/node_modules/react-universal-interface/lib/createEnhancer.js
var require_createEnhancer = __commonJS({
  'esm-build-6a645c2212cd266a9a63e48e243fc8b96bd7dd47-5f4a9ef8/node_modules/react-universal-interface/lib/createEnhancer.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.divWrapper = void 0;
    var tslib_1 = __tslib$;
    var React = tslib_1.__importStar(__react$);
    var addClassDecoratorSupport_1 = tslib_1.__importDefault(require_addClassDecoratorSupport());
    var h = React.createElement;
    var noWrap = function(Comp, propName, props, state) {
      var _a;
      return h(
        Comp,
        propName
          ? tslib_1.__assign(((_a = {}), (_a[propName] = state), _a), props)
          : tslib_1.__assign(tslib_1.__assign({}, state), props)
      );
    };
    exports.divWrapper = function(Comp, propName, props, state) {
      return h('div', null, noWrap(Comp, propName, props, state));
    };
    var createEnhancer2 = function(Facc, prop, wrapper) {
      if (wrapper === void 0) {
        wrapper = noWrap;
      }
      var enhancer = function(Comp, propName, faccProps) {
        if (propName === void 0) {
          propName = prop;
        }
        if (faccProps === void 0) {
          faccProps = null;
        }
        var isClassDecoratorMethodCall = typeof Comp === 'string';
        if (isClassDecoratorMethodCall) {
          return function(Klass) {
            return enhancer(Klass, Comp || prop, propName);
          };
        }
        var Enhanced = function(props) {
          return h(Facc, faccProps, function(state) {
            return wrapper(Comp, propName, props, state);
          });
        };
        if (true) {
          Enhanced.displayName = (Facc.displayName || Facc.name) + '(' + (Comp.displayName || Comp.name) + ')';
        }
        return isClassDecoratorMethodCall ? addClassDecoratorSupport_1.default(Enhanced) : Enhanced;
      };
      return enhancer;
    };
    exports.default = createEnhancer2;
  }
});

// esm-build-6a645c2212cd266a9a63e48e243fc8b96bd7dd47-5f4a9ef8/node_modules/react-universal-interface/lib/hookToRenderProp.js
var require_hookToRenderProp = __commonJS({
  'esm-build-6a645c2212cd266a9a63e48e243fc8b96bd7dd47-5f4a9ef8/node_modules/react-universal-interface/lib/hookToRenderProp.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    var tslib_1 = __tslib$;
    var render_1 = tslib_1.__importDefault(require_render());
    var defaultMapPropsToArgs = function(props) {
      return [props];
    };
    var hookToRenderProp2 = function(hook, mapPropsToArgs) {
      if (mapPropsToArgs === void 0) {
        mapPropsToArgs = defaultMapPropsToArgs;
      }
      return function(props) {
        return render_1.default(props, hook.apply(void 0, mapPropsToArgs(props)));
      };
    };
    exports.default = hookToRenderProp2;
  }
});

// esm-build-6a645c2212cd266a9a63e48e243fc8b96bd7dd47-5f4a9ef8/node_modules/react-universal-interface/lib/index.js
var require_lib = __commonJS({
  'esm-build-6a645c2212cd266a9a63e48e243fc8b96bd7dd47-5f4a9ef8/node_modules/react-universal-interface/lib/index.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.hookToRenderProp = exports.createEnhancer = exports.render = void 0;
    var tslib_1 = __tslib$;
    var render_1 = tslib_1.__importDefault(require_render());
    exports.render = render_1.default;
    var createEnhancer_1 = tslib_1.__importDefault(require_createEnhancer());
    exports.createEnhancer = createEnhancer_1.default;
    var hookToRenderProp_1 = tslib_1.__importDefault(require_hookToRenderProp());
    exports.hookToRenderProp = hookToRenderProp_1.default;
  }
});

// esm-build-6a645c2212cd266a9a63e48e243fc8b96bd7dd47-5f4a9ef8/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { hookToRenderProp, createEnhancer, render } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, createEnhancer, mod_default as default, hookToRenderProp, render };
