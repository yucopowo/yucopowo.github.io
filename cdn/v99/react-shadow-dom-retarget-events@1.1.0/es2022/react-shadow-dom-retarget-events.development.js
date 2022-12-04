/* esm.sh - esbuild bundle(react-shadow-dom-retarget-events@1.1.0) es2022 development */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
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

// esm-build-15197643bf86e10343ec7a375af88269ebe505d5-58e2d463/node_modules/react-shadow-dom-retarget-events/index.js
var require_react_shadow_dom_retarget_events = __commonJS({
  'esm-build-15197643bf86e10343ec7a375af88269ebe505d5-58e2d463/node_modules/react-shadow-dom-retarget-events/index.js'(
    exports,
    module
  ) {
    var reactEvents = [
      'onAbort',
      'onAnimationCancel',
      'onAnimationEnd',
      'onAnimationIteration',
      'onAuxClick',
      'onBlur',
      'onChange',
      'onClick',
      'onClose',
      'onContextMenu',
      'onDoubleClick',
      'onError',
      'onFocus',
      'onGotPointerCapture',
      'onInput',
      'onKeyDown',
      'onKeyPress',
      'onKeyUp',
      'onLoad',
      'onLoadEnd',
      'onLoadStart',
      'onLostPointerCapture',
      'onMouseDown',
      'onMouseMove',
      'onMouseOut',
      'onMouseOver',
      'onMouseUp',
      'onPointerCancel',
      'onPointerDown',
      'onPointerEnter',
      'onPointerLeave',
      'onPointerMove',
      'onPointerOut',
      'onPointerOver',
      'onPointerUp',
      'onReset',
      'onResize',
      'onScroll',
      'onSelect',
      'onSelectionChange',
      'onSelectStart',
      'onSubmit',
      'onTouchCancel',
      'onTouchMove',
      'onTouchStart',
      'onTouchEnd',
      'onTransitionCancel',
      'onTransitionEnd',
      'onDrag',
      'onDragEnd',
      'onDragEnter',
      'onDragExit',
      'onDragLeave',
      'onDragOver',
      'onDragStart',
      'onDrop',
      'onFocusOut'
    ];
    var divergentNativeEvents = {
      onDoubleClick: 'dblclick'
    };
    var mimickedReactEvents = {
      onInput: 'onChange',
      onFocusOut: 'onBlur',
      onSelectionChange: 'onSelect'
    };
    module.exports = function retargetEvents(shadowRoot) {
      var removeEventListeners = [];
      reactEvents.forEach(function(reactEventName) {
        var nativeEventName = getNativeEventName(reactEventName);
        function retargetEvent(event) {
          var path = event.path || (event.composedPath && event.composedPath()) || composedPath(event.target);
          for (var i = 0; i < path.length; i++) {
            var el = path[i];
            var props = null;
            var reactComponent = findReactComponent(el);
            var eventHandlers = findReactEventHandlers(el);
            if (!eventHandlers) {
              props = findReactProps(reactComponent);
            } else {
              props = eventHandlers;
            }
            if (reactComponent && props) {
              dispatchEvent(event, reactEventName, props);
            }
            if (reactComponent && props && mimickedReactEvents[reactEventName]) {
              dispatchEvent(event, mimickedReactEvents[reactEventName], props);
            }
            if (event.cancelBubble) {
              break;
            }
            if (el === shadowRoot) {
              break;
            }
          }
        }
        shadowRoot.addEventListener(nativeEventName, retargetEvent, false);
        removeEventListeners.push(function() {
          shadowRoot.removeEventListener(nativeEventName, retargetEvent, false);
        });
      });
      return function() {
        removeEventListeners.forEach(function(removeEventListener) {
          removeEventListener();
        });
      };
    };
    function findReactEventHandlers(item) {
      return findReactProperty(item, '__reactEventHandlers');
    }
    function findReactComponent(item) {
      return findReactProperty(item, '_reactInternal');
    }
    function findReactProperty(item, propertyPrefix) {
      for (var key in item) {
        if (item.hasOwnProperty(key) && key.indexOf(propertyPrefix) !== -1) {
          return item[key];
        }
      }
    }
    function findReactProps(component) {
      if (!component) return void 0;
      if (component.memoizedProps) return component.memoizedProps;
      if (component._currentElement && component._currentElement.props) return component._currentElement.props;
    }
    function dispatchEvent(event, eventType, componentProps) {
      event.persist = function() {
        event.isPersistent = function() {
          return true;
        };
      };
      if (componentProps[eventType]) {
        componentProps[eventType](event);
      }
    }
    function getNativeEventName(reactEventName) {
      if (divergentNativeEvents[reactEventName]) {
        return divergentNativeEvents[reactEventName];
      }
      return reactEventName.replace(/^on/, '').toLowerCase();
    }
    function composedPath(el) {
      var path = [];
      while (el) {
        path.push(el);
        if (el.tagName === 'HTML') {
          path.push(document);
          path.push(window);
          return path;
        }
        el = el.parentElement;
      }
    }
  }
});

// esm-build-15197643bf86e10343ec7a375af88269ebe505d5-58e2d463/mod.js
var __module = __toESM(require_react_shadow_dom_retarget_events());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
