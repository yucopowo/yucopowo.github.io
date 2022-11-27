/* esm.sh - esbuild bundle(rc-util@5.24.6/es/Portal) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-27f82ceb57fe1fd59df413e4c77a113621e4b260-a575d347/node_modules/rc-util/es/Portal.js
var Portal_exports = {};
__export(Portal_exports, {
  default: () => Portal_default
});
import {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import ReactDOM from '/cdn/v99/react-dom@18.2.0/es2022/react-dom.development.js';
import canUseDom from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/canUseDom.development.js';
var Portal = /* @__PURE__ */ forwardRef(function(props, ref) {
  var didUpdate = props.didUpdate,
    getContainer = props.getContainer,
    children = props.children;
  var parentRef = useRef();
  var containerRef = useRef();
  useImperativeHandle(ref, function() {
    return {};
  });
  var initRef = useRef(false);
  if (!initRef.current && canUseDom()) {
    containerRef.current = getContainer();
    parentRef.current = containerRef.current.parentNode;
    initRef.current = true;
  }
  useEffect(function() {
    didUpdate === null || didUpdate === void 0 ? void 0 : didUpdate(props);
  });
  useEffect(function() {
    if (containerRef.current.parentNode === null && parentRef.current !== null) {
      parentRef.current.appendChild(containerRef.current);
    }
    return function() {
      var _containerRef$current, _containerRef$current2;
      (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0
        ? void 0
        : (_containerRef$current2 = _containerRef$current.parentNode) === null || _containerRef$current2 === void 0
        ? void 0
        : _containerRef$current2.removeChild(containerRef.current);
    };
  }, []);
  return containerRef.current ? /* @__PURE__ */ ReactDOM.createPortal(children, containerRef.current) : null;
});
var Portal_default = Portal;

// esm-build-27f82ceb57fe1fd59df413e4c77a113621e4b260-a575d347/mod.js
var { default: __default, ...__rest } = Portal_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
