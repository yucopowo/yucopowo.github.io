/* esm.sh - esbuild bundle(@ebay/nice-modal-react@1.2.8) es2022 development */
// esm-build-ea6904a6f72d16c9e2ff5f0f46e468018c965b9c-bb2d070e/node_modules/@ebay/nice-modal-react/lib/esm/index.js
import React, {
  useEffect,
  useCallback,
  useContext,
  useReducer
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var __assign = function() {
  __assign =
    Object.assign ||
    function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === 'function')
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
  return t;
};
var symModalId = Symbol('NiceModalId');
var initialState = {};
var NiceModalContext = React.createContext(initialState);
var NiceModalIdContext = React.createContext(null);
var MODAL_REGISTRY = {};
var ALREADY_MOUNTED = {};
var uidSeed = 0;
var dispatch = function() {
  throw new Error('No dispatch method detected, did you embed your app with NiceModal.Provider?');
};
var getUid = function() {
  return '_nice_modal_' + uidSeed++;
};
var reducer = function(state, action) {
  var _a, _b, _c;
  if (state === void 0) {
    state = initialState;
  }
  switch (action.type) {
    case 'nice-modal/show': {
      var _d = action.payload,
        modalId = _d.modalId,
        args = _d.args;
      return __assign(
        __assign({}, state),
        ((_a = {}),
        (_a[modalId] = __assign(__assign({}, state[modalId]), {
          id: modalId,
          args,
          visible: !!ALREADY_MOUNTED[modalId],
          delayVisible: !ALREADY_MOUNTED[modalId]
        })),
        _a)
      );
    }
    case 'nice-modal/hide': {
      var modalId = action.payload.modalId;
      if (!state[modalId]) return state;
      return __assign(
        __assign({}, state),
        ((_b = {}),
        (_b[modalId] = __assign(__assign({}, state[modalId]), {
          visible: false
        })),
        _b)
      );
    }
    case 'nice-modal/remove': {
      var modalId = action.payload.modalId;
      var newState = __assign({}, state);
      delete newState[modalId];
      return newState;
    }
    case 'nice-modal/set-flags': {
      var _e = action.payload,
        modalId = _e.modalId,
        flags = _e.flags;
      return __assign(
        __assign({}, state),
        ((_c = {}), (_c[modalId] = __assign(__assign({}, state[modalId]), flags)), _c)
      );
    }
    default:
      return state;
  }
};
function showModal(modalId, args) {
  return {
    type: 'nice-modal/show',
    payload: {
      modalId,
      args
    }
  };
}
function setModalFlags(modalId, flags) {
  return {
    type: 'nice-modal/set-flags',
    payload: {
      modalId,
      flags
    }
  };
}
function hideModal(modalId) {
  return {
    type: 'nice-modal/hide',
    payload: {
      modalId
    }
  };
}
function removeModal(modalId) {
  return {
    type: 'nice-modal/remove',
    payload: {
      modalId
    }
  };
}
var modalCallbacks = {};
var hideModalCallbacks = {};
var getModalId = function(modal) {
  if (typeof modal === 'string') return modal;
  if (!modal[symModalId]) {
    modal[symModalId] = getUid();
  }
  return modal[symModalId];
};
function show(modal, args) {
  var modalId = getModalId(modal);
  if (typeof modal !== 'string' && !MODAL_REGISTRY[modalId]) {
    register(modalId, modal);
  }
  dispatch(showModal(modalId, args));
  if (!modalCallbacks[modalId]) {
    var theResolve_1;
    var theReject_1;
    var promise = new Promise(function(resolve, reject) {
      theResolve_1 = resolve;
      theReject_1 = reject;
    });
    modalCallbacks[modalId] = {
      resolve: theResolve_1,
      reject: theReject_1,
      promise
    };
  }
  return modalCallbacks[modalId].promise;
}
function hide(modal) {
  var modalId = getModalId(modal);
  dispatch(hideModal(modalId));
  delete modalCallbacks[modalId];
  if (!hideModalCallbacks[modalId]) {
    var theResolve_2;
    var theReject_2;
    var promise = new Promise(function(resolve, reject) {
      theResolve_2 = resolve;
      theReject_2 = reject;
    });
    hideModalCallbacks[modalId] = {
      resolve: theResolve_2,
      reject: theReject_2,
      promise
    };
  }
  return hideModalCallbacks[modalId].promise;
}
var remove = function(modalId) {
  dispatch(removeModal(modalId));
  delete modalCallbacks[modalId];
  delete hideModalCallbacks[modalId];
};
var setFlags = function(modalId, flags) {
  dispatch(setModalFlags(modalId, flags));
};
function useModal(modal, args) {
  var modals = useContext(NiceModalContext);
  var contextModalId = useContext(NiceModalIdContext);
  var modalId = null;
  var isUseComponent = modal && typeof modal !== 'string';
  if (!modal) {
    modalId = contextModalId;
  } else {
    modalId = getModalId(modal);
  }
  if (!modalId) throw new Error('No modal id found in NiceModal.useModal.');
  var mid = modalId;
  useEffect(
    function() {
      if (isUseComponent && !MODAL_REGISTRY[mid]) {
        register(mid, modal, args);
      }
    },
    [isUseComponent, mid, modal, args]
  );
  var modalInfo = modals[mid];
  var showCallback = useCallback(
    function(args2) {
      return show(mid, args2);
    },
    [mid]
  );
  var hideCallback = useCallback(
    function() {
      return hide(mid);
    },
    [mid]
  );
  var removeCallback = useCallback(
    function() {
      return remove(mid);
    },
    [mid]
  );
  var resolveCallback = useCallback(
    function(args2) {
      var _a;
      (_a = modalCallbacks[mid]) === null || _a === void 0 ? void 0 : _a.resolve(args2);
      delete modalCallbacks[mid];
    },
    [mid]
  );
  var rejectCallback = useCallback(
    function(args2) {
      var _a;
      (_a = modalCallbacks[mid]) === null || _a === void 0 ? void 0 : _a.reject(args2);
      delete modalCallbacks[mid];
    },
    [mid]
  );
  var resolveHide = useCallback(
    function(args2) {
      var _a;
      (_a = hideModalCallbacks[mid]) === null || _a === void 0 ? void 0 : _a.resolve(args2);
      delete hideModalCallbacks[mid];
    },
    [mid]
  );
  return {
    id: mid,
    args: modalInfo === null || modalInfo === void 0 ? void 0 : modalInfo.args,
    visible: !!(modalInfo === null || modalInfo === void 0 ? void 0 : modalInfo.visible),
    keepMounted: !!(modalInfo === null || modalInfo === void 0 ? void 0 : modalInfo.keepMounted),
    show: showCallback,
    hide: hideCallback,
    remove: removeCallback,
    resolve: resolveCallback,
    reject: rejectCallback,
    resolveHide
  };
}
var create = function(Comp) {
  return function(_a) {
    var _b;
    var defaultVisible = _a.defaultVisible,
      keepMounted = _a.keepMounted,
      id = _a.id,
      props = __rest(_a, ['defaultVisible', 'keepMounted', 'id']);
    var _c = useModal(id),
      args = _c.args,
      show2 = _c.show;
    var modals = useContext(NiceModalContext);
    var shouldMount = !!modals[id];
    useEffect(
      function() {
        if (defaultVisible) {
          show2();
        }
        ALREADY_MOUNTED[id] = true;
        return function() {
          delete ALREADY_MOUNTED[id];
        };
      },
      [id, show2, defaultVisible]
    );
    useEffect(
      function() {
        if (keepMounted)
          setFlags(id, {
            keepMounted: true
          });
      },
      [id, keepMounted]
    );
    var delayVisible = (_b = modals[id]) === null || _b === void 0 ? void 0 : _b.delayVisible;
    useEffect(
      function() {
        if (delayVisible) {
          show2(args);
        }
      },
      [delayVisible, args, show2]
    );
    if (!shouldMount) return null;
    return React.createElement(
      NiceModalIdContext.Provider,
      {
        value: id
      },
      React.createElement(Comp, __assign({}, props, args))
    );
  };
};
var register = function(id, comp, props) {
  if (!MODAL_REGISTRY[id]) {
    MODAL_REGISTRY[id] = {
      comp,
      props
    };
  } else {
    MODAL_REGISTRY[id].props = props;
  }
};
var unregister = function(id) {
  delete MODAL_REGISTRY[id];
};
var NiceModalPlaceholder = function() {
  var modals = useContext(NiceModalContext);
  var visibleModalIds = Object.keys(modals).filter(function(id) {
    return !!modals[id];
  });
  visibleModalIds.forEach(function(id) {
    if (!MODAL_REGISTRY[id] && !ALREADY_MOUNTED[id]) {
      console.warn(
        'No modal found for id: ' + id + '. Please check the id or if it is registered or declared via JSX.'
      );
      return;
    }
  });
  var toRender = visibleModalIds
    .filter(function(id) {
      return MODAL_REGISTRY[id];
    })
    .map(function(id) {
      return __assign(
        {
          id
        },
        MODAL_REGISTRY[id]
      );
    });
  return React.createElement(
    React.Fragment,
    null,
    toRender.map(function(t) {
      return React.createElement(
        t.comp,
        __assign(
          {
            key: t.id,
            id: t.id
          },
          t.props
        )
      );
    })
  );
};
var InnerContextProvider = function(_a) {
  var children = _a.children;
  var arr = useReducer(reducer, initialState);
  var modals = arr[0];
  dispatch = arr[1];
  return React.createElement(
    NiceModalContext.Provider,
    {
      value: modals
    },
    children,
    React.createElement(NiceModalPlaceholder, null)
  );
};
var Provider = function(_a) {
  var children = _a.children,
    givenDispatch = _a.dispatch,
    givenModals = _a.modals;
  if (!givenDispatch || !givenModals) {
    return React.createElement(InnerContextProvider, null, children);
  }
  dispatch = givenDispatch;
  return React.createElement(
    NiceModalContext.Provider,
    {
      value: givenModals
    },
    children,
    React.createElement(NiceModalPlaceholder, null)
  );
};
var ModalDef = function(_a) {
  var id = _a.id,
    component = _a.component;
  useEffect(
    function() {
      register(id, component);
      return function() {
        unregister(id);
      };
    },
    [id, component]
  );
  return null;
};
var antdModal = function(modal) {
  return {
    visible: modal.visible,
    onOk: function() {
      return modal.hide();
    },
    onCancel: function() {
      return modal.hide();
    },
    afterClose: function() {
      modal.resolveHide();
      if (!modal.keepMounted) modal.remove();
    }
  };
};
var antdModalV5 = function(modal) {
  var _a = antdModal(modal),
    onOk = _a.onOk,
    onCancel = _a.onCancel,
    afterClose = _a.afterClose;
  return {
    open: modal.visible,
    onOk,
    onCancel,
    afterClose
  };
};
var antdDrawer = function(modal) {
  return {
    visible: modal.visible,
    onClose: function() {
      return modal.hide();
    },
    afterVisibleChange: function(v) {
      if (!v) {
        modal.resolveHide();
      }
      !v && !modal.keepMounted && modal.remove();
    }
  };
};
var antdDrawerV5 = function(modal) {
  var _a = antdDrawer(modal),
    onClose = _a.onClose,
    afterOpenChange = _a.afterVisibleChange;
  return {
    open: modal.visible,
    onClose,
    afterOpenChange
  };
};
var muiDialog = function(modal) {
  return {
    open: modal.visible,
    onClose: function() {
      return modal.hide();
    },
    onExited: function() {
      modal.resolveHide();
      !modal.keepMounted && modal.remove();
    }
  };
};
var muiDialogV5 = function(modal) {
  return {
    open: modal.visible,
    onClose: function() {
      return modal.hide();
    },
    TransitionProps: {
      onExited: function() {
        modal.resolveHide();
        !modal.keepMounted && modal.remove();
      }
    }
  };
};
var bootstrapDialog = function(modal) {
  return {
    show: modal.visible,
    onHide: function() {
      return modal.hide();
    },
    onExited: function() {
      modal.resolveHide();
      !modal.keepMounted && modal.remove();
    }
  };
};
var NiceModal = {
  Provider,
  ModalDef,
  NiceModalContext,
  create,
  register,
  show,
  hide,
  remove,
  useModal,
  reducer,
  antdModal,
  antdDrawer,
  muiDialog,
  bootstrapDialog
};
var esm_default = NiceModal;
export {
  ModalDef,
  Provider,
  antdDrawer,
  antdDrawerV5,
  antdModal,
  antdModalV5,
  bootstrapDialog,
  create,
  esm_default as default,
  hide,
  muiDialog,
  muiDialogV5,
  reducer,
  register,
  remove,
  show,
  unregister,
  useModal
};
