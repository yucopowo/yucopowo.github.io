/* esm.sh - esbuild bundle(rc-util@5.24.6/es/React/render) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-619c4e63ba0cf0067ec00568f79afd5f63e42837-02a653db/node_modules/rc-util/es/React/render.js
var render_exports = {};
__export(render_exports, {
  _r: () => _r,
  _u: () => _u,
  render: () => render,
  unmount: () => unmount
});
import _regeneratorRuntime from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/regeneratorRuntime.development.js';
import _asyncToGenerator from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/asyncToGenerator.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as ReactDOM from '/cdn/v99/react-dom@18.2.0/es2022/react-dom.development.js';
var fullClone = _objectSpread({}, ReactDOM);
var version = fullClone.version;
var reactRender = fullClone.render;
var unmountComponentAtNode = fullClone.unmountComponentAtNode;
var createRoot;
try {
  mainVersion = Number((version || '').split('.')[0]);
  if (mainVersion >= 18) {
    createRoot = fullClone.createRoot;
  }
} catch (e) {}
var mainVersion;
function toggleWarning(skip) {
  var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  if (
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED &&
    _typeof(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === 'object'
  ) {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
  }
}
var MARK = '__rc_react_root__';
function modernRender(node, container) {
  toggleWarning(true);
  var root = container[MARK] || createRoot(container);
  toggleWarning(false);
  root.render(node);
  container[MARK] = root;
}
function legacyRender(node, container) {
  reactRender(node, container);
}
function _r(node, container) {
  if (true) {
    return legacyRender(node, container);
  }
}
export function render(node, container) {
  if (createRoot) {
    modernRender(node, container);
    return;
  }
  legacyRender(node, container);
}
function modernUnmount(_x) {
  return _modernUnmount.apply(this, arguments);
}
function _modernUnmount() {
  _modernUnmount = _asyncToGenerator(
    /* @__PURE__ */ _regeneratorRuntime().mark(function _callee(container) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              return _context.abrupt(
                'return',
                Promise.resolve().then(function() {
                  var _container$MARK;
                  (_container$MARK = container[MARK]) === null || _container$MARK === void 0
                    ? void 0
                    : _container$MARK.unmount();
                  delete container[MARK];
                })
              );
            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _modernUnmount.apply(this, arguments);
}
function legacyUnmount(container) {
  unmountComponentAtNode(container);
}
function _u(container) {
  if (true) {
    return legacyUnmount(container);
  }
}
export function unmount(_x2) {
  return _unmount.apply(this, arguments);
}
function _unmount() {
  _unmount = _asyncToGenerator(
    /* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(container) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch ((_context2.prev = _context2.next)) {
            case 0:
              if (!(createRoot !== void 0)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt('return', modernUnmount(container));
            case 2:
              legacyUnmount(container);
            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2);
    })
  );
  return _unmount.apply(this, arguments);
}

// esm-build-619c4e63ba0cf0067ec00568f79afd5f63e42837-02a653db/mod.js
var { default: __default, ...__rest } = render_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
