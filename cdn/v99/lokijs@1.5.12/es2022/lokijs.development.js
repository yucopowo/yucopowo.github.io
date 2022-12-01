/* esm.sh - esbuild bundle(lokijs@1.5.12) es2022 development */
import __Process$ from '/cdn/v99/node_process.js';
var __global$ = globalThis || (typeof window !== 'undefined' ? window : self);
import __fs$ from '/cdn/v99/node_fs.js';
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

// esm-build-b2151dc180cd55994c3090a3a3076e2296e6b90f-922e429d/node_modules/lokijs/src/loki-indexed-adapter.js
var require_loki_indexed_adapter = __commonJS({
  'esm-build-b2151dc180cd55994c3090a3a3076e2296e6b90f-922e429d/node_modules/lokijs/src/loki-indexed-adapter.js'(
    exports,
    module
  ) {
    (function(root, factory) {
      if (typeof define === 'function' && define.amd) {
        define([], factory);
      } else if (typeof exports === 'object') {
        module.exports = factory();
      } else {
        root.LokiIndexedAdapter = factory();
      }
    })(exports, function() {
      return (function() {
        function LokiIndexedAdapter(appname, options) {
          this.app = 'loki';
          this.options = options || {};
          if (typeof appname !== 'undefined') {
            this.app = appname;
          }
          this.catalog = null;
          if (!this.checkAvailability()) {
            throw new Error('indexedDB does not seem to be supported for your environment');
          }
        }
        LokiIndexedAdapter.prototype.closeDatabase = function() {
          if (this.catalog && this.catalog.db) {
            this.catalog.db.close();
            this.catalog.db = null;
          }
        };
        LokiIndexedAdapter.prototype.checkAvailability = function() {
          if (typeof indexedDB !== 'undefined' && indexedDB) return true;
          return false;
        };
        LokiIndexedAdapter.prototype.loadDatabase = function(dbname, callback) {
          var appName = this.app;
          var adapter = this;
          if (this.catalog === null || this.catalog.db === null) {
            this.catalog = new LokiCatalog(function(cat) {
              adapter.catalog = cat;
              adapter.loadDatabase(dbname, callback);
            });
            return;
          }
          this.catalog.getAppKey(appName, dbname, function(result) {
            if (typeof callback === 'function') {
              if (result.id === 0) {
                callback(null);
                return;
              }
              callback(result.val);
            } else {
              console.log(result.val);
            }
          });
        };
        LokiIndexedAdapter.prototype.loadKey = LokiIndexedAdapter.prototype.loadDatabase;
        LokiIndexedAdapter.prototype.saveDatabase = function(dbname, dbstring, callback) {
          var appName = this.app;
          var adapter = this;
          function saveCallback(result) {
            if (result && result.success === true) {
              callback(null);
            } else {
              callback(new Error('Error saving database'));
            }
            if (adapter.options.closeAfterSave) {
              adapter.closeDatabase();
            }
          }
          if (this.catalog === null || this.catalog.db === null) {
            this.catalog = new LokiCatalog(function(cat) {
              adapter.saveDatabase(dbname, dbstring, saveCallback);
            });
            return;
          }
          this.catalog.setAppKey(appName, dbname, dbstring, saveCallback);
        };
        LokiIndexedAdapter.prototype.saveKey = LokiIndexedAdapter.prototype.saveDatabase;
        LokiIndexedAdapter.prototype.deleteDatabase = function(dbname, callback) {
          var appName = this.app;
          var adapter = this;
          if (this.catalog === null || this.catalog.db === null) {
            this.catalog = new LokiCatalog(function(cat) {
              adapter.catalog = cat;
              adapter.deleteDatabase(dbname, callback);
            });
            return;
          }
          this.catalog.getAppKey(appName, dbname, function(result) {
            var id = result.id;
            if (id !== 0) {
              adapter.catalog.deleteAppKey(id, callback);
            } else if (typeof callback === 'function') {
              callback({
                success: true
              });
            }
          });
        };
        LokiIndexedAdapter.prototype.deleteKey = LokiIndexedAdapter.prototype.deleteDatabase;
        LokiIndexedAdapter.prototype.deleteDatabasePartitions = function(dbname) {
          var self = this;
          this.getDatabaseList(function(result) {
            result.forEach(function(str) {
              if (str.startsWith(dbname)) {
                self.deleteDatabase(str);
              }
            });
          });
        };
        LokiIndexedAdapter.prototype.getDatabaseList = function(callback) {
          var appName = this.app;
          var adapter = this;
          if (this.catalog === null || this.catalog.db === null) {
            this.catalog = new LokiCatalog(function(cat) {
              adapter.catalog = cat;
              adapter.getDatabaseList(callback);
            });
            return;
          }
          this.catalog.getAppKeys(appName, function(results) {
            var names = [];
            for (var idx = 0; idx < results.length; idx++) {
              names.push(results[idx].key);
            }
            if (typeof callback === 'function') {
              callback(names);
            } else {
              names.forEach(function(obj) {
                console.log(obj);
              });
            }
          });
        };
        LokiIndexedAdapter.prototype.getKeyList = LokiIndexedAdapter.prototype.getDatabaseList;
        LokiIndexedAdapter.prototype.getCatalogSummary = function(callback) {
          var appName = this.app;
          var adapter = this;
          if (this.catalog === null || this.catalog.db === null) {
            this.catalog = new LokiCatalog(function(cat) {
              adapter.catalog = cat;
              adapter.getCatalogSummary(callback);
            });
            return;
          }
          this.catalog.getAllKeys(function(results) {
            var entries = [];
            var obj, size, oapp, okey, oval;
            for (var idx = 0; idx < results.length; idx++) {
              obj = results[idx];
              oapp = obj.app || '';
              okey = obj.key || '';
              oval = obj.val || '';
              size = oapp.length * 2 + okey.length * 2 + oval.length + 1;
              entries.push({
                app: obj.app,
                key: obj.key,
                size: size
              });
            }
            if (typeof callback === 'function') {
              callback(entries);
            } else {
              entries.forEach(function(obj2) {
                console.log(obj2);
              });
            }
          });
        };
        function LokiCatalog(callback) {
          this.db = null;
          this.initializeLokiCatalog(callback);
        }
        LokiCatalog.prototype.initializeLokiCatalog = function(callback) {
          var openRequest = indexedDB.open('LokiCatalog', 1);
          var cat = this;
          openRequest.onupgradeneeded = function(e) {
            var thisDB = e.target.result;
            if (thisDB.objectStoreNames.contains('LokiAKV')) {
              thisDB.deleteObjectStore('LokiAKV');
            }
            if (!thisDB.objectStoreNames.contains('LokiAKV')) {
              var objectStore = thisDB.createObjectStore('LokiAKV', {
                keyPath: 'id',
                autoIncrement: true
              });
              objectStore.createIndex('app', 'app', {
                unique: false
              });
              objectStore.createIndex('key', 'key', {
                unique: false
              });
              objectStore.createIndex('appkey', 'appkey', {
                unique: true
              });
            }
          };
          openRequest.onsuccess = function(e) {
            cat.db = e.target.result;
            if (typeof callback === 'function') callback(cat);
          };
          openRequest.onerror = function(e) {
            throw e;
          };
        };
        LokiCatalog.prototype.getAppKey = function(app, key, callback) {
          var transaction = this.db.transaction(['LokiAKV'], 'readonly');
          var store = transaction.objectStore('LokiAKV');
          var index = store.index('appkey');
          var appkey = app + ',' + key;
          var request = index.get(appkey);
          request.onsuccess = (function(usercallback) {
            return function(e) {
              var lres = e.target.result;
              if (lres === null || typeof lres === 'undefined') {
                lres = {
                  id: 0,
                  success: false
                };
              }
              if (typeof usercallback === 'function') {
                usercallback(lres);
              } else {
                console.log(lres);
              }
            };
          })(callback);
          request.onerror = (function(usercallback) {
            return function(e) {
              if (typeof usercallback === 'function') {
                usercallback({
                  id: 0,
                  success: false
                });
              } else {
                throw e;
              }
            };
          })(callback);
        };
        LokiCatalog.prototype.getAppKeyById = function(id, callback, data) {
          var transaction = this.db.transaction(['LokiAKV'], 'readonly');
          var store = transaction.objectStore('LokiAKV');
          var request = store.get(id);
          request.onsuccess = (function(data2, usercallback) {
            return function(e) {
              if (typeof usercallback === 'function') {
                usercallback(e.target.result, data2);
              } else {
                console.log(e.target.result);
              }
            };
          })(data, callback);
        };
        LokiCatalog.prototype.setAppKey = function(app, key, val, callback) {
          var transaction = this.db.transaction(['LokiAKV'], 'readwrite');
          var store = transaction.objectStore('LokiAKV');
          var index = store.index('appkey');
          var appkey = app + ',' + key;
          var request = index.get(appkey);
          request.onsuccess = function(e) {
            var res = e.target.result;
            if (res === null || res === void 0) {
              res = {
                app,
                key,
                appkey: app + ',' + key,
                val
              };
            } else {
              res.val = val;
            }
            var requestPut = store.put(res);
            requestPut.onerror = (function(usercallback) {
              return function(e2) {
                if (typeof usercallback === 'function') {
                  usercallback({
                    success: false
                  });
                } else {
                  console.error('LokiCatalog.setAppKey (set) onerror');
                  console.error(request.error);
                }
              };
            })(callback);
            requestPut.onsuccess = (function(usercallback) {
              return function(e2) {
                if (typeof usercallback === 'function') {
                  usercallback({
                    success: true
                  });
                }
              };
            })(callback);
          };
          request.onerror = (function(usercallback) {
            return function(e) {
              if (typeof usercallback === 'function') {
                usercallback({
                  success: false
                });
              } else {
                console.error('LokiCatalog.setAppKey (get) onerror');
                console.error(request.error);
              }
            };
          })(callback);
        };
        LokiCatalog.prototype.deleteAppKey = function(id, callback) {
          var transaction = this.db.transaction(['LokiAKV'], 'readwrite');
          var store = transaction.objectStore('LokiAKV');
          var request = store.delete(id);
          request.onsuccess = (function(usercallback) {
            return function(evt) {
              if (typeof usercallback === 'function')
                usercallback({
                  success: true
                });
            };
          })(callback);
          request.onerror = (function(usercallback) {
            return function(evt) {
              if (typeof usercallback === 'function') {
                usercallback({
                  success: false
                });
              } else {
                console.error('LokiCatalog.deleteAppKey raised onerror');
                console.error(request.error);
              }
            };
          })(callback);
        };
        LokiCatalog.prototype.getAppKeys = function(app, callback) {
          var transaction = this.db.transaction(['LokiAKV'], 'readonly');
          var store = transaction.objectStore('LokiAKV');
          var index = store.index('app');
          var singleKeyRange = IDBKeyRange.only(app);
          var cursor = index.openCursor(singleKeyRange);
          var localdata = [];
          cursor.onsuccess = (function(data, callback2) {
            return function(e) {
              var cursor2 = e.target.result;
              if (cursor2) {
                var currObject = cursor2.value;
                data.push(currObject);
                cursor2.continue();
              } else {
                if (typeof callback2 === 'function') {
                  callback2(data);
                } else {
                  console.log(data);
                }
              }
            };
          })(localdata, callback);
          cursor.onerror = (function(usercallback) {
            return function(e) {
              if (typeof usercallback === 'function') {
                usercallback(null);
              } else {
                console.error('LokiCatalog.getAppKeys raised onerror');
                console.error(e);
              }
            };
          })(callback);
        };
        LokiCatalog.prototype.getAllKeys = function(callback) {
          var transaction = this.db.transaction(['LokiAKV'], 'readonly');
          var store = transaction.objectStore('LokiAKV');
          var cursor = store.openCursor();
          var localdata = [];
          cursor.onsuccess = (function(data, callback2) {
            return function(e) {
              var cursor2 = e.target.result;
              if (cursor2) {
                var currObject = cursor2.value;
                data.push(currObject);
                cursor2.continue();
              } else {
                if (typeof callback2 === 'function') {
                  callback2(data);
                } else {
                  console.log(data);
                }
              }
            };
          })(localdata, callback);
          cursor.onerror = (function(usercallback) {
            return function(e) {
              if (typeof usercallback === 'function') usercallback(null);
            };
          })(callback);
        };
        return LokiIndexedAdapter;
      })();
    });
  }
});

// esm-build-b2151dc180cd55994c3090a3a3076e2296e6b90f-922e429d/node_modules/lokijs/src/lokijs.js
var require_lokijs = __commonJS({
  'esm-build-b2151dc180cd55994c3090a3a3076e2296e6b90f-922e429d/node_modules/lokijs/src/lokijs.js'(exports, module) {
    (function(root, factory) {
      if (typeof define === 'function' && define.amd) {
        define([], factory);
      } else if (typeof exports === 'object') {
        module.exports = factory();
      } else {
        root.loki = factory();
      }
    })(exports, function() {
      return (function() {
        'use strict';

        var hasOwnProperty = Object.prototype.hasOwnProperty;
        function deepFreeze(obj) {
          var prop, i;
          if (Array.isArray(obj)) {
            for (i = 0; i < obj.length; i++) {
              deepFreeze(obj[i]);
            }
            freeze(obj);
          } else if (obj !== null && typeof obj === 'object') {
            for (prop in obj) {
              if (obj.hasOwnProperty(prop)) {
                deepFreeze(obj[prop]);
              }
            }
            freeze(obj);
          }
        }
        function freeze(obj) {
          if (!Object.isFrozen(obj)) {
            Object.freeze(obj);
          }
        }
        function unFreeze(obj) {
          if (!Object.isFrozen(obj)) {
            return obj;
          }
          return clone(obj, 'shallow');
        }
        var Utils = {
          copyProperties: function(src, dest) {
            var prop;
            for (prop in src) {
              dest[prop] = src[prop];
            }
          },
          resolveTransformObject: function(subObj, params, depth) {
            var prop, pname;
            if (typeof depth !== 'number') {
              depth = 0;
            }
            if (++depth >= 10) return subObj;
            for (prop in subObj) {
              if (typeof subObj[prop] === 'string' && subObj[prop].indexOf('[%lktxp]') === 0) {
                pname = subObj[prop].substring(8);
                if (params.hasOwnProperty(pname)) {
                  subObj[prop] = params[pname];
                }
              } else if (typeof subObj[prop] === 'object') {
                subObj[prop] = Utils.resolveTransformObject(subObj[prop], params, depth);
              }
            }
            return subObj;
          },
          resolveTransformParams: function(transform, params) {
            var idx,
              clonedStep,
              resolvedTransform = [];
            if (typeof params === 'undefined') return transform;
            for (idx = 0; idx < transform.length; idx++) {
              clonedStep = clone(transform[idx], 'shallow-recurse-objects');
              resolvedTransform.push(Utils.resolveTransformObject(clonedStep, params));
            }
            return resolvedTransform;
          },
          getIn: function(object, path, usingDotNotation) {
            if (object == null) {
              return void 0;
            }
            if (!usingDotNotation) {
              return object[path];
            }
            if (typeof path === 'string') {
              path = path.split('.');
            }
            if (!Array.isArray(path)) {
              throw new Error('path must be a string or array. Found ' + typeof path);
            }
            var index = 0,
              length = path.length;
            while (object != null && index < length) {
              object = object[path[index++]];
            }
            return index && index == length ? object : void 0;
          }
        };
        var Comparators = {
          aeq: aeqHelper,
          lt: ltHelper,
          gt: gtHelper
        };
        function aeqHelper(prop1, prop2) {
          var cv1, cv2, t1, t2;
          if (prop1 === prop2) return true;
          if (!prop1 || !prop2 || prop1 === true || prop2 === true || prop1 !== prop1 || prop2 !== prop2) {
            switch (prop1) {
              case void 0:
                t1 = 1;
                break;
              case null:
                t1 = 1;
                break;
              case false:
                t1 = 3;
                break;
              case true:
                t1 = 4;
                break;
              case '':
                t1 = 5;
                break;
              default:
                t1 = prop1 === prop1 ? 9 : 0;
                break;
            }
            switch (prop2) {
              case void 0:
                t2 = 1;
                break;
              case null:
                t2 = 1;
                break;
              case false:
                t2 = 3;
                break;
              case true:
                t2 = 4;
                break;
              case '':
                t2 = 5;
                break;
              default:
                t2 = prop2 === prop2 ? 9 : 0;
                break;
            }
            if (t1 !== 9 || t2 !== 9) {
              return t1 === t2;
            }
          }
          cv1 = Number(prop1);
          cv2 = Number(prop2);
          if (cv1 === cv1 || cv2 === cv2) {
            return cv1 === cv2;
          }
          cv1 = prop1.toString();
          cv2 = prop2.toString();
          return cv1 == cv2;
        }
        function ltHelper(prop1, prop2, equal) {
          var cv1, cv2, t1, t2;
          if (!prop1 || !prop2 || prop1 === true || prop2 === true || prop1 !== prop1 || prop2 !== prop2) {
            switch (prop1) {
              case void 0:
                t1 = 1;
                break;
              case null:
                t1 = 1;
                break;
              case false:
                t1 = 3;
                break;
              case true:
                t1 = 4;
                break;
              case '':
                t1 = 5;
                break;
              default:
                t1 = prop1 === prop1 ? 9 : 0;
                break;
            }
            switch (prop2) {
              case void 0:
                t2 = 1;
                break;
              case null:
                t2 = 1;
                break;
              case false:
                t2 = 3;
                break;
              case true:
                t2 = 4;
                break;
              case '':
                t2 = 5;
                break;
              default:
                t2 = prop2 === prop2 ? 9 : 0;
                break;
            }
            if (t1 !== 9 || t2 !== 9) {
              return t1 === t2 ? equal : t1 < t2;
            }
          }
          cv1 = Number(prop1);
          cv2 = Number(prop2);
          if (cv1 === cv1 && cv2 === cv2) {
            if (cv1 < cv2) return true;
            if (cv1 > cv2) return false;
            return equal;
          }
          if (cv1 === cv1 && cv2 !== cv2) {
            return true;
          }
          if (cv2 === cv2 && cv1 !== cv1) {
            return false;
          }
          if (prop1 < prop2) return true;
          if (prop1 > prop2) return false;
          if (prop1 == prop2) return equal;
          cv1 = prop1.toString();
          cv2 = prop2.toString();
          if (cv1 < cv2) {
            return true;
          }
          if (cv1 == cv2) {
            return equal;
          }
          return false;
        }
        function gtHelper(prop1, prop2, equal) {
          var cv1, cv2, t1, t2;
          if (!prop1 || !prop2 || prop1 === true || prop2 === true || prop1 !== prop1 || prop2 !== prop2) {
            switch (prop1) {
              case void 0:
                t1 = 1;
                break;
              case null:
                t1 = 1;
                break;
              case false:
                t1 = 3;
                break;
              case true:
                t1 = 4;
                break;
              case '':
                t1 = 5;
                break;
              default:
                t1 = prop1 === prop1 ? 9 : 0;
                break;
            }
            switch (prop2) {
              case void 0:
                t2 = 1;
                break;
              case null:
                t2 = 1;
                break;
              case false:
                t2 = 3;
                break;
              case true:
                t2 = 4;
                break;
              case '':
                t2 = 5;
                break;
              default:
                t2 = prop2 === prop2 ? 9 : 0;
                break;
            }
            if (t1 !== 9 || t2 !== 9) {
              return t1 === t2 ? equal : t1 > t2;
            }
          }
          cv1 = Number(prop1);
          cv2 = Number(prop2);
          if (cv1 === cv1 && cv2 === cv2) {
            if (cv1 > cv2) return true;
            if (cv1 < cv2) return false;
            return equal;
          }
          if (cv1 === cv1 && cv2 !== cv2) {
            return false;
          }
          if (cv2 === cv2 && cv1 !== cv1) {
            return true;
          }
          if (prop1 > prop2) return true;
          if (prop1 < prop2) return false;
          if (prop1 == prop2) return equal;
          cv1 = prop1.toString();
          cv2 = prop2.toString();
          if (cv1 > cv2) {
            return true;
          }
          if (cv1 == cv2) {
            return equal;
          }
          return false;
        }
        function sortHelper(prop1, prop2, desc) {
          if (Comparators.aeq(prop1, prop2)) return 0;
          if (Comparators.lt(prop1, prop2, false)) {
            return desc ? 1 : -1;
          }
          if (Comparators.gt(prop1, prop2, false)) {
            return desc ? -1 : 1;
          }
          return 0;
        }
        function compoundeval(properties, obj1, obj2) {
          var res = 0;
          var prop, field, val1, val2, arr, path;
          for (var i = 0, len = properties.length; i < len; i++) {
            prop = properties[i];
            field = prop[0];
            if (~field.indexOf('.')) {
              arr = field.split('.');
              val1 = Utils.getIn(obj1, arr, true);
              val2 = Utils.getIn(obj2, arr, true);
            } else {
              val1 = obj1[field];
              val2 = obj2[field];
            }
            res = sortHelper(val1, val2, prop[1]);
            if (res !== 0) {
              return res;
            }
          }
          return 0;
        }
        function dotSubScan(root, paths, fun, value, extra, poffset) {
          var pathOffset = poffset || 0;
          var path = paths[pathOffset];
          var valueFound = false;
          var element;
          if (typeof root === 'object' && path in root) {
            element = root[path];
          }
          if (pathOffset + 1 >= paths.length) {
            valueFound = fun(element, value, extra);
          } else if (Array.isArray(element)) {
            for (var index = 0, len = element.length; index < len; index += 1) {
              valueFound = dotSubScan(element[index], paths, fun, value, extra, pathOffset + 1);
              if (valueFound === true) {
                break;
              }
            }
          } else {
            valueFound = dotSubScan(element, paths, fun, value, extra, pathOffset + 1);
          }
          return valueFound;
        }
        function containsCheckFn(a) {
          if (typeof a === 'string' || Array.isArray(a)) {
            return function(b) {
              return a.indexOf(b) !== -1;
            };
          } else if (typeof a === 'object' && a !== null) {
            return function(b) {
              return hasOwnProperty.call(a, b);
            };
          }
          return null;
        }
        function doQueryOp(val, op, record) {
          for (var p in op) {
            if (hasOwnProperty.call(op, p)) {
              return LokiOps[p](val, op[p], record);
            }
          }
          return false;
        }
        var LokiOps = {
          $eq: function(a, b) {
            return a === b;
          },
          $aeq: function(a, b) {
            return a == b;
          },
          $ne: function(a, b) {
            if (b !== b) {
              return a === a;
            }
            return a !== b;
          },
          $dteq: function(a, b) {
            return Comparators.aeq(a, b);
          },
          $gt: function(a, b) {
            return Comparators.gt(a, b, false);
          },
          $gte: function(a, b) {
            return Comparators.gt(a, b, true);
          },
          $lt: function(a, b) {
            return Comparators.lt(a, b, false);
          },
          $lte: function(a, b) {
            return Comparators.lt(a, b, true);
          },
          $jgt: function(a, b) {
            return a > b;
          },
          $jgte: function(a, b) {
            return a >= b;
          },
          $jlt: function(a, b) {
            return a < b;
          },
          $jlte: function(a, b) {
            return a <= b;
          },
          $between: function(a, vals) {
            if (a === void 0 || a === null) return false;
            return Comparators.gt(a, vals[0], true) && Comparators.lt(a, vals[1], true);
          },
          $jbetween: function(a, vals) {
            if (a === void 0 || a === null) return false;
            return a >= vals[0] && a <= vals[1];
          },
          $in: function(a, b) {
            return b.indexOf(a) !== -1;
          },
          $inSet: function(a, b) {
            return b.has(a);
          },
          $nin: function(a, b) {
            return b.indexOf(a) === -1;
          },
          $keyin: function(a, b) {
            return a in b;
          },
          $nkeyin: function(a, b) {
            return !(a in b);
          },
          $definedin: function(a, b) {
            return b[a] !== void 0;
          },
          $undefinedin: function(a, b) {
            return b[a] === void 0;
          },
          $regex: function(a, b) {
            return b.test(a);
          },
          $containsString: function(a, b) {
            return typeof a === 'string' && a.indexOf(b) !== -1;
          },
          $containsNone: function(a, b) {
            return !LokiOps.$containsAny(a, b);
          },
          $containsAny: function(a, b) {
            var checkFn = containsCheckFn(a);
            if (checkFn !== null) {
              return Array.isArray(b) ? b.some(checkFn) : checkFn(b);
            }
            return false;
          },
          $contains: function(a, b) {
            var checkFn = containsCheckFn(a);
            if (checkFn !== null) {
              return Array.isArray(b) ? b.every(checkFn) : checkFn(b);
            }
            return false;
          },
          $elemMatch: function(a, b) {
            if (Array.isArray(a)) {
              return a.some(function(item) {
                return Object.keys(b).every(function(property) {
                  var filter = b[property];
                  if (!(typeof filter === 'object' && filter)) {
                    filter = {
                      $eq: filter
                    };
                  }
                  if (property.indexOf('.') !== -1) {
                    return dotSubScan(item, property.split('.'), doQueryOp, b[property], item);
                  }
                  return doQueryOp(item[property], filter, item);
                });
              });
            }
            return false;
          },
          $type: function(a, b, record) {
            var type = typeof a;
            if (type === 'object') {
              if (Array.isArray(a)) {
                type = 'array';
              } else if (a instanceof Date) {
                type = 'date';
              }
            }
            return typeof b !== 'object' ? type === b : doQueryOp(type, b, record);
          },
          $finite: function(a, b) {
            return b === isFinite(a);
          },
          $size: function(a, b, record) {
            if (Array.isArray(a)) {
              return typeof b !== 'object' ? a.length === b : doQueryOp(a.length, b, record);
            }
            return false;
          },
          $len: function(a, b, record) {
            if (typeof a === 'string') {
              return typeof b !== 'object' ? a.length === b : doQueryOp(a.length, b, record);
            }
            return false;
          },
          $where: function(a, b) {
            return b(a) === true;
          },
          $not: function(a, b, record) {
            return !doQueryOp(a, b, record);
          },
          $and: function(a, b, record) {
            for (var idx = 0, len = b.length; idx < len; idx += 1) {
              if (!doQueryOp(a, b[idx], record)) {
                return false;
              }
            }
            return true;
          },
          $or: function(a, b, record) {
            for (var idx = 0, len = b.length; idx < len; idx += 1) {
              if (doQueryOp(a, b[idx], record)) {
                return true;
              }
            }
            return false;
          },
          $exists: function(a, b) {
            if (b) {
              return a !== void 0;
            } else {
              return a === void 0;
            }
          }
        };
        var valueLevelOps = [
          '$eq',
          '$aeq',
          '$ne',
          '$dteq',
          '$gt',
          '$gte',
          '$lt',
          '$lte',
          '$jgt',
          '$jgte',
          '$jlt',
          '$jlte',
          '$type'
        ];
        valueLevelOps.forEach(function(op) {
          var fun = LokiOps[op];
          LokiOps['$' + op] = function(a, spec, record) {
            if (typeof spec === 'string') {
              return fun(a, record[spec]);
            } else if (typeof spec === 'function') {
              return fun(a, spec(record));
            } else {
              throw new Error('Invalid argument to $$ matcher');
            }
          };
        });
        var indexedOps = {
          $eq: LokiOps.$eq,
          $aeq: true,
          $dteq: true,
          $gt: true,
          $gte: true,
          $lt: true,
          $lte: true,
          $in: true,
          $between: true
        };
        function clone(data, method) {
          if (data === null || data === void 0) {
            return null;
          }
          var cloneMethod = method || 'parse-stringify',
            cloned;
          switch (cloneMethod) {
            case 'parse-stringify':
              cloned = JSON.parse(JSON.stringify(data));
              break;
            case 'jquery-extend-deep':
              cloned = jQuery.extend(true, {}, data);
              break;
            case 'shallow':
              cloned = Object.create(data.constructor.prototype);
              Object.keys(data).map(function(i) {
                cloned[i] = data[i];
              });
              break;
            case 'shallow-assign':
              cloned = Object.create(data.constructor.prototype);
              Object.assign(cloned, data);
              break;
            case 'shallow-recurse-objects':
              cloned = clone(data, 'shallow');
              var keys = Object.keys(data);
              keys.forEach(function(key) {
                if (typeof data[key] === 'object' && data[key].constructor.name === 'Object') {
                  cloned[key] = clone(data[key], 'shallow-recurse-objects');
                } else if (Array.isArray(data[key])) {
                  cloned[key] = cloneObjectArray(data[key], 'shallow-recurse-objects');
                }
              });
              break;
            default:
              break;
          }
          return cloned;
        }
        function cloneObjectArray(objarray, method) {
          if (method == 'parse-stringify') {
            return clone(objarray, method);
          }
          var result = [];
          for (var i = 0, len = objarray.length; i < len; i++) {
            result[i] = clone(objarray[i], method);
          }
          return result;
        }
        function localStorageAvailable() {
          try {
            return window && window.localStorage !== void 0 && window.localStorage !== null;
          } catch (e) {
            return false;
          }
        }
        function LokiEventEmitter() {}
        LokiEventEmitter.prototype.events = {};
        LokiEventEmitter.prototype.asyncListeners = false;
        LokiEventEmitter.prototype.on = function(eventName, listener) {
          var event;
          var self = this;
          if (Array.isArray(eventName)) {
            eventName.forEach(function(currentEventName) {
              self.on(currentEventName, listener);
            });
            return listener;
          }
          event = this.events[eventName];
          if (!event) {
            event = this.events[eventName] = [];
          }
          event.push(listener);
          return listener;
        };
        LokiEventEmitter.prototype.emit = function(eventName) {
          var self = this;
          var selfArgs;
          if (eventName && this.events[eventName]) {
            if (this.events[eventName].length) {
              selfArgs = Array.prototype.slice.call(arguments, 1);
              this.events[eventName].forEach(function(listener) {
                if (self.asyncListeners) {
                  setTimeout(function() {
                    listener.apply(self, selfArgs);
                  }, 1);
                } else {
                  listener.apply(self, selfArgs);
                }
              });
            }
          } else {
            throw new Error('No event ' + eventName + ' defined');
          }
        };
        LokiEventEmitter.prototype.addListener = LokiEventEmitter.prototype.on;
        LokiEventEmitter.prototype.removeListener = function(eventName, listener) {
          var self = this;
          if (Array.isArray(eventName)) {
            eventName.forEach(function(currentEventName) {
              self.removeListener(currentEventName, listener);
            });
            return;
          }
          if (this.events[eventName]) {
            var listeners = this.events[eventName];
            listeners.splice(listeners.indexOf(listener), 1);
          }
        };
        function Loki(filename, options) {
          this.filename = filename || 'loki.db';
          this.collections = [];
          this.databaseVersion = 1.5;
          this.engineVersion = 1.5;
          this.autosave = false;
          this.autosaveInterval = 5e3;
          this.autosaveHandle = null;
          this.throttledSaves = true;
          this.options = {};
          this.persistenceMethod = null;
          this.persistenceAdapter = null;
          this.throttledSavePending = false;
          this.throttledCallbacks = [];
          this.verbose = options && options.hasOwnProperty('verbose') ? options.verbose : false;
          this.events = {
            init: [],
            loaded: [],
            flushChanges: [],
            close: [],
            changes: [],
            warning: []
          };
          var getENV = function() {
            if (typeof __global$ !== 'undefined' && (__global$.android || __global$.NSObject)) {
              return 'NATIVESCRIPT';
            }
            if (typeof window === 'undefined') {
              return 'NODEJS';
            }
            if (typeof __global$ !== 'undefined' && __global$.window && typeof __Process$ !== 'undefined') {
              return 'NODEJS';
            }
            if (typeof document !== 'undefined') {
              if (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1) {
                return 'CORDOVA';
              }
              return 'BROWSER';
            }
            return 'CORDOVA';
          };
          if (options && options.hasOwnProperty('env')) {
            this.ENV = options.env;
          } else {
            this.ENV = getENV();
          }
          if (this.ENV === 'undefined') {
            this.ENV = 'NODEJS';
          }
          this.configureOptions(options, true);
          this.on('init', this.clearChanges);
        }
        Loki.prototype = new LokiEventEmitter();
        Loki.prototype.constructor = Loki;
        Loki.prototype.getIndexedAdapter = function() {
          var adapter;
          if (typeof __require === 'function') {
            adapter = require_loki_indexed_adapter();
          }
          return adapter;
        };
        Loki.prototype.configureOptions = function(options, initialConfig) {
          var defaultPersistence = {
              NODEJS: 'fs',
              BROWSER: 'localStorage',
              CORDOVA: 'localStorage',
              MEMORY: 'memory'
            },
            persistenceMethods = {
              fs: LokiFsAdapter,
              localStorage: LokiLocalStorageAdapter,
              memory: LokiMemoryAdapter
            };
          this.options = {};
          this.persistenceMethod = null;
          this.persistenceAdapter = null;
          if (typeof options !== 'undefined') {
            this.options = options;
            if (this.options.hasOwnProperty('persistenceMethod')) {
              if (typeof persistenceMethods[options.persistenceMethod] == 'function') {
                this.persistenceMethod = options.persistenceMethod;
                this.persistenceAdapter = new persistenceMethods[options.persistenceMethod]();
              }
            }
            if (this.options.hasOwnProperty('adapter')) {
              this.persistenceMethod = 'adapter';
              this.persistenceAdapter = options.adapter;
              this.options.adapter = null;
              this.isIncremental = this.persistenceAdapter.mode === 'incremental';
            }
            if (options.autoload && initialConfig) {
              var self = this;
              setTimeout(function() {
                self.loadDatabase(options, options.autoloadCallback);
              }, 1);
            }
            if (this.options.hasOwnProperty('autosaveInterval')) {
              this.autosaveDisable();
              this.autosaveInterval = parseInt(this.options.autosaveInterval, 10);
            }
            if (this.options.hasOwnProperty('autosave') && this.options.autosave) {
              this.autosaveDisable();
              this.autosave = true;
              if (this.options.hasOwnProperty('autosaveCallback')) {
                this.autosaveEnable(options, options.autosaveCallback);
              } else {
                this.autosaveEnable();
              }
            }
            if (this.options.hasOwnProperty('throttledSaves')) {
              this.throttledSaves = this.options.throttledSaves;
            }
          }
          if (!this.options.hasOwnProperty('serializationMethod')) {
            this.options.serializationMethod = 'normal';
          }
          if (!this.options.hasOwnProperty('destructureDelimiter')) {
            this.options.destructureDelimiter = '$<\n';
          }
          if (this.persistenceAdapter === null) {
            this.persistenceMethod = defaultPersistence[this.ENV];
            if (this.persistenceMethod) {
              this.persistenceAdapter = new persistenceMethods[this.persistenceMethod]();
            }
          }
        };
        Loki.prototype.copy = function(options) {
          var databaseCopy = new Loki(this.filename, {
            env: 'NA'
          });
          var clen, idx;
          options = options || {};
          databaseCopy.loadJSONObject(this, {
            retainDirtyFlags: true
          });
          if (options.hasOwnProperty('removeNonSerializable') && options.removeNonSerializable === true) {
            databaseCopy.autosaveHandle = null;
            databaseCopy.persistenceAdapter = null;
            clen = databaseCopy.collections.length;
            for (idx = 0; idx < clen; idx++) {
              databaseCopy.collections[idx].constraints = null;
              databaseCopy.collections[idx].ttl = null;
            }
          }
          return databaseCopy;
        };
        Loki.prototype.addCollection = function(name, options) {
          var i,
            len = this.collections.length;
          if (options && options.disableMeta === true) {
            if (options.disableChangesApi === false) {
              throw new Error('disableMeta option cannot be passed as true when disableChangesApi is passed as false');
            }
            if (options.disableDeltaChangesApi === false) {
              throw new Error(
                'disableMeta option cannot be passed as true when disableDeltaChangesApi is passed as false'
              );
            }
            if (typeof options.ttl === 'number' && options.ttl > 0) {
              throw new Error('disableMeta option cannot be passed as true when ttl is enabled');
            }
          }
          for (i = 0; i < len; i += 1) {
            if (this.collections[i].name === name) {
              return this.collections[i];
            }
          }
          var collection = new Collection(name, options);
          collection.isIncremental = this.isIncremental;
          this.collections.push(collection);
          if (this.verbose) collection.lokiConsoleWrapper = console;
          return collection;
        };
        Loki.prototype.loadCollection = function(collection) {
          if (!collection.name) {
            throw new Error('Collection must have a name property to be loaded');
          }
          this.collections.push(collection);
        };
        Loki.prototype.getCollection = function(collectionName) {
          var i,
            len = this.collections.length;
          for (i = 0; i < len; i += 1) {
            if (this.collections[i].name === collectionName) {
              return this.collections[i];
            }
          }
          this.emit('warning', 'collection ' + collectionName + ' not found');
          return null;
        };
        Loki.prototype.renameCollection = function(oldName, newName) {
          var c = this.getCollection(oldName);
          if (c) {
            c.name = newName;
          }
          return c;
        };
        Loki.prototype.listCollections = function() {
          var i = this.collections.length,
            colls = [];
          while (i--) {
            colls.push({
              name: this.collections[i].name,
              type: this.collections[i].objType,
              count: this.collections[i].data.length
            });
          }
          return colls;
        };
        Loki.prototype.removeCollection = function(collectionName) {
          var i,
            len = this.collections.length;
          for (i = 0; i < len; i += 1) {
            if (this.collections[i].name === collectionName) {
              var tmpcol = new Collection(collectionName, {});
              var curcol = this.collections[i];
              for (var prop in curcol) {
                if (curcol.hasOwnProperty(prop) && tmpcol.hasOwnProperty(prop)) {
                  curcol[prop] = tmpcol[prop];
                }
              }
              this.collections.splice(i, 1);
              return;
            }
          }
        };
        Loki.prototype.getName = function() {
          return this.name;
        };
        Loki.prototype.serializeReplacer = function(key, value) {
          switch (key) {
            case 'autosaveHandle':
            case 'persistenceAdapter':
            case 'constraints':
            case 'ttl':
              return null;
            case 'throttledSavePending':
            case 'throttledCallbacks':
              return void 0;
            case 'lokiConsoleWrapper':
              return null;
            default:
              return value;
          }
        };
        Loki.prototype.serialize = function(options) {
          options = options || {};
          if (!options.hasOwnProperty('serializationMethod')) {
            options.serializationMethod = this.options.serializationMethod;
          }
          switch (options.serializationMethod) {
            case 'normal':
              return JSON.stringify(this, this.serializeReplacer);
            case 'pretty':
              return JSON.stringify(this, this.serializeReplacer, 2);
            case 'destructured':
              return this.serializeDestructured();
            default:
              return JSON.stringify(this, this.serializeReplacer);
          }
        };
        Loki.prototype.toJson = Loki.prototype.serialize;
        Loki.prototype.serializeDestructured = function(options) {
          var idx, sidx, result, resultlen;
          var reconstruct = [];
          var dbcopy;
          options = options || {};
          if (!options.hasOwnProperty('partitioned')) {
            options.partitioned = false;
          }
          if (!options.hasOwnProperty('delimited')) {
            options.delimited = true;
          }
          if (!options.hasOwnProperty('delimiter')) {
            options.delimiter = this.options.destructureDelimiter;
          }
          if (options.partitioned === true && options.hasOwnProperty('partition') && options.partition >= 0) {
            return this.serializeCollection({
              delimited: options.delimited,
              delimiter: options.delimiter,
              collectionIndex: options.partition
            });
          }
          dbcopy = new Loki(this.filename);
          dbcopy.loadJSONObject(this);
          for (idx = 0; idx < dbcopy.collections.length; idx++) {
            dbcopy.collections[idx].data = [];
          }
          if (options.partitioned === true && options.partition === -1) {
            return dbcopy.serialize({
              serializationMethod: 'normal'
            });
          }
          reconstruct.push(
            dbcopy.serialize({
              serializationMethod: 'normal'
            })
          );
          dbcopy = null;
          for (idx = 0; idx < this.collections.length; idx++) {
            result = this.serializeCollection({
              delimited: options.delimited,
              delimiter: options.delimiter,
              collectionIndex: idx
            });
            if (options.partitioned === false && options.delimited === false) {
              if (!Array.isArray(result)) {
                throw new Error(
                  'a nondelimited, non partitioned collection serialization did not return an expected array'
                );
              }
              resultlen = result.length;
              for (sidx = 0; sidx < resultlen; sidx++) {
                reconstruct.push(result[sidx]);
                result[sidx] = null;
              }
              reconstruct.push('');
            } else {
              reconstruct.push(result);
            }
          }
          if (options.partitioned) {
            if (options.delimited) {
              return reconstruct;
            } else {
              return reconstruct;
            }
          } else {
            if (options.delimited) {
              reconstruct.push('');
              return reconstruct.join(options.delimiter);
            } else {
              reconstruct.push('');
              return reconstruct;
            }
          }
          reconstruct.push('');
          return reconstruct.join(delim);
        };
        Loki.prototype.serializeCollection = function(options) {
          var doccount,
            docidx,
            resultlines = [];
          options = options || {};
          if (!options.hasOwnProperty('delimited')) {
            options.delimited = true;
          }
          if (!options.hasOwnProperty('collectionIndex')) {
            throw new Error("serializeCollection called without 'collectionIndex' option");
          }
          doccount = this.collections[options.collectionIndex].data.length;
          resultlines = [];
          for (docidx = 0; docidx < doccount; docidx++) {
            resultlines.push(JSON.stringify(this.collections[options.collectionIndex].data[docidx]));
          }
          if (options.delimited) {
            resultlines.push('');
            return resultlines.join(options.delimiter);
          } else {
            return resultlines;
          }
        };
        Loki.prototype.deserializeDestructured = function(destructuredSource, options) {
          var workarray = [];
          var len, cdb;
          var idx,
            collIndex = 0,
            collCount,
            lineIndex = 1,
            done = false;
          var currLine, currObject;
          options = options || {};
          if (!options.hasOwnProperty('partitioned')) {
            options.partitioned = false;
          }
          if (!options.hasOwnProperty('delimited')) {
            options.delimited = true;
          }
          if (!options.hasOwnProperty('delimiter')) {
            options.delimiter = this.options.destructureDelimiter;
          }
          if (options.partitioned) {
            if (options.hasOwnProperty('partition')) {
              if (options.partition === -1) {
                cdb = JSON.parse(destructuredSource[0]);
                return cdb;
              }
              return this.deserializeCollection(destructuredSource[options.partition + 1], options);
            }
            cdb = JSON.parse(destructuredSource[0]);
            collCount = cdb.collections.length;
            for (collIndex = 0; collIndex < collCount; collIndex++) {
              cdb.collections[collIndex].data = this.deserializeCollection(destructuredSource[collIndex + 1], options);
            }
            return cdb;
          }
          if (options.delimited) {
            workarray = destructuredSource.split(options.delimiter);
            destructuredSource = null;
            len = workarray.length;
            if (len === 0) {
              return null;
            }
          } else {
            workarray = destructuredSource;
          }
          cdb = JSON.parse(workarray[0]);
          collCount = cdb.collections.length;
          workarray[0] = null;
          while (!done) {
            currLine = workarray[lineIndex];
            if (workarray[lineIndex] === '') {
              if (++collIndex > collCount) {
                done = true;
              }
            } else {
              currObject = JSON.parse(workarray[lineIndex]);
              cdb.collections[collIndex].data.push(currObject);
            }
            workarray[lineIndex++] = null;
          }
          return cdb;
        };
        Loki.prototype.deserializeCollection = function(destructuredSource, options) {
          var workarray = [];
          var idx, len;
          options = options || {};
          if (!options.hasOwnProperty('partitioned')) {
            options.partitioned = false;
          }
          if (!options.hasOwnProperty('delimited')) {
            options.delimited = true;
          }
          if (!options.hasOwnProperty('delimiter')) {
            options.delimiter = this.options.destructureDelimiter;
          }
          if (options.delimited) {
            workarray = destructuredSource.split(options.delimiter);
            workarray.pop();
          } else {
            workarray = destructuredSource;
          }
          len = workarray.length;
          for (idx = 0; idx < len; idx++) {
            workarray[idx] = JSON.parse(workarray[idx]);
          }
          return workarray;
        };
        Loki.prototype.loadJSON = function(serializedDb, options) {
          var dbObject;
          if (serializedDb.length === 0) {
            dbObject = {};
          } else {
            switch (this.options.serializationMethod) {
              case 'normal':
              case 'pretty':
                dbObject = JSON.parse(serializedDb);
                break;
              case 'destructured':
                dbObject = this.deserializeDestructured(serializedDb);
                break;
              default:
                dbObject = JSON.parse(serializedDb);
                break;
            }
          }
          this.loadJSONObject(dbObject, options);
        };
        Loki.prototype.loadJSONObject = function(dbObject, options) {
          var i = 0,
            len = dbObject.collections ? dbObject.collections.length : 0,
            coll,
            copyColl,
            clen,
            j,
            loader,
            collObj;
          this.name = dbObject.name;
          if (dbObject.hasOwnProperty('throttledSaves') && options && !options.hasOwnProperty('throttledSaves')) {
            this.throttledSaves = dbObject.throttledSaves;
          }
          this.collections = [];
          function makeLoader(coll2) {
            var collOptions = options[coll2.name];
            var inflater;
            if (collOptions.proto) {
              inflater = collOptions.inflate || Utils.copyProperties;
              return function(data) {
                var collObj2 = new collOptions.proto();
                inflater(data, collObj2);
                return collObj2;
              };
            }
            return collOptions.inflate;
          }
          for (i; i < len; i += 1) {
            coll = dbObject.collections[i];
            copyColl = this.addCollection(coll.name, {
              disableChangesApi: coll.disableChangesApi,
              disableDeltaChangesApi: coll.disableDeltaChangesApi,
              disableMeta: coll.disableMeta,
              disableFreeze: coll.hasOwnProperty('disableFreeze') ? coll.disableFreeze : true
            });
            copyColl.adaptiveBinaryIndices = coll.hasOwnProperty('adaptiveBinaryIndices')
              ? coll.adaptiveBinaryIndices === true
              : false;
            copyColl.transactional = coll.transactional;
            copyColl.asyncListeners = coll.asyncListeners;
            copyColl.cloneObjects = coll.cloneObjects;
            copyColl.cloneMethod = coll.cloneMethod || 'parse-stringify';
            copyColl.autoupdate = coll.autoupdate;
            copyColl.changes = coll.changes;
            copyColl.dirtyIds = coll.dirtyIds || [];
            if (options && options.retainDirtyFlags === true) {
              copyColl.dirty = coll.dirty;
            } else {
              copyColl.dirty = false;
            }
            clen = coll.data.length;
            j = 0;
            if (options && options.hasOwnProperty(coll.name)) {
              loader = makeLoader(coll);
              for (j; j < clen; j++) {
                collObj = loader(coll.data[j]);
                copyColl.data[j] = collObj;
                copyColl.addAutoUpdateObserver(collObj);
                if (!copyColl.disableFreeze) {
                  deepFreeze(copyColl.data[j]);
                }
              }
            } else {
              for (j; j < clen; j++) {
                copyColl.data[j] = coll.data[j];
                copyColl.addAutoUpdateObserver(copyColl.data[j]);
                if (!copyColl.disableFreeze) {
                  deepFreeze(copyColl.data[j]);
                }
              }
            }
            copyColl.maxId = typeof coll.maxId === 'undefined' ? 0 : coll.maxId;
            if (typeof coll.binaryIndices !== 'undefined') {
              copyColl.binaryIndices = coll.binaryIndices;
            }
            if (typeof coll.transforms !== 'undefined') {
              copyColl.transforms = coll.transforms;
            }
            copyColl.uniqueNames = [];
            if (coll.hasOwnProperty('uniqueNames')) {
              copyColl.uniqueNames = coll.uniqueNames;
            }
            if (typeof coll.DynamicViews === 'undefined') continue;
            for (var idx = 0; idx < coll.DynamicViews.length; idx++) {
              var colldv = coll.DynamicViews[idx];
              var dv = copyColl.addDynamicView(colldv.name, colldv.options);
              dv.resultdata = colldv.resultdata;
              dv.resultsdirty = colldv.resultsdirty;
              dv.filterPipeline = colldv.filterPipeline;
              dv.sortCriteriaSimple = colldv.sortCriteriaSimple;
              dv.sortCriteria = colldv.sortCriteria;
              dv.sortFunction = null;
              dv.sortDirty = colldv.sortDirty;
              if (!copyColl.disableFreeze) {
                deepFreeze(dv.filterPipeline);
                if (dv.sortCriteriaSimple) {
                  deepFreeze(dv.sortCriteriaSimple);
                } else if (dv.sortCriteria) {
                  deepFreeze(dv.sortCriteria);
                }
              }
              dv.resultset.filteredrows = colldv.resultset.filteredrows;
              dv.resultset.filterInitialized = colldv.resultset.filterInitialized;
              dv.rematerialize({
                removeWhereFilters: true
              });
            }
            if (dbObject.databaseVersion < 1.5) {
              copyColl.ensureAllIndexes(true);
              copyColl.dirty = true;
            }
          }
        };
        Loki.prototype.close = function(callback) {
          if (this.autosave) {
            this.autosaveDisable();
            if (this.autosaveDirty()) {
              this.saveDatabase(callback);
              callback = void 0;
            }
          }
          if (callback) {
            this.on('close', callback);
          }
          this.emit('close');
        };
        Loki.prototype.generateChangesNotification = function(arrayOfCollectionNames) {
          function getCollName(coll) {
            return coll.name;
          }
          var changes = [],
            selectedCollections = arrayOfCollectionNames || this.collections.map(getCollName);
          this.collections.forEach(function(coll) {
            if (selectedCollections.indexOf(getCollName(coll)) !== -1) {
              changes = changes.concat(coll.getChanges());
            }
          });
          return changes;
        };
        Loki.prototype.serializeChanges = function(collectionNamesArray) {
          return JSON.stringify(this.generateChangesNotification(collectionNamesArray));
        };
        Loki.prototype.clearChanges = function() {
          this.collections.forEach(function(coll) {
            if (coll.flushChanges) {
              coll.flushChanges();
            }
          });
        };
        function LokiMemoryAdapter(options) {
          this.hashStore = {};
          this.options = options || {};
          if (!this.options.hasOwnProperty('asyncResponses')) {
            this.options.asyncResponses = false;
          }
          if (!this.options.hasOwnProperty('asyncTimeout')) {
            this.options.asyncTimeout = 50;
          }
        }
        LokiMemoryAdapter.prototype.loadDatabase = function(dbname, callback) {
          var self = this;
          if (this.options.asyncResponses) {
            setTimeout(function() {
              if (self.hashStore.hasOwnProperty(dbname)) {
                callback(self.hashStore[dbname].value);
              } else {
                callback(null);
              }
            }, this.options.asyncTimeout);
          } else {
            if (this.hashStore.hasOwnProperty(dbname)) {
              callback(this.hashStore[dbname].value);
            } else {
              callback(null);
            }
          }
        };
        LokiMemoryAdapter.prototype.saveDatabase = function(dbname, dbstring, callback) {
          var self = this;
          var saveCount;
          if (this.options.asyncResponses) {
            setTimeout(function() {
              saveCount = self.hashStore.hasOwnProperty(dbname) ? self.hashStore[dbname].savecount : 0;
              self.hashStore[dbname] = {
                savecount: saveCount + 1,
                lastsave: new Date(),
                value: dbstring
              };
              callback();
            }, this.options.asyncTimeout);
          } else {
            saveCount = this.hashStore.hasOwnProperty(dbname) ? this.hashStore[dbname].savecount : 0;
            this.hashStore[dbname] = {
              savecount: saveCount + 1,
              lastsave: new Date(),
              value: dbstring
            };
            callback();
          }
        };
        LokiMemoryAdapter.prototype.deleteDatabase = function(dbname, callback) {
          if (this.hashStore.hasOwnProperty(dbname)) {
            delete this.hashStore[dbname];
          }
          if (typeof callback === 'function') {
            callback();
          }
        };
        function LokiPartitioningAdapter(adapter, options) {
          this.mode = 'reference';
          this.adapter = null;
          this.options = options || {};
          this.dbref = null;
          this.dbname = '';
          this.pageIterator = {};
          if (adapter) {
            if (adapter.mode === 'reference') {
              throw new Error('LokiPartitioningAdapter cannot be instantiated with a reference mode adapter');
            } else {
              this.adapter = adapter;
            }
          } else {
            throw new Error('LokiPartitioningAdapter requires a (non-reference mode) adapter on construction');
          }
          if (!this.options.hasOwnProperty('paging')) {
            this.options.paging = false;
          }
          if (!this.options.hasOwnProperty('pageSize')) {
            this.options.pageSize = 25 * 1024 * 1024;
          }
          if (!this.options.hasOwnProperty('delimiter')) {
            this.options.delimiter = '$<\n';
          }
        }
        LokiPartitioningAdapter.prototype.loadDatabase = function(dbname, callback) {
          var self = this;
          this.dbname = dbname;
          this.dbref = new Loki(dbname);
          this.adapter.loadDatabase(dbname, function(result) {
            if (!result) {
              callback(result);
              return;
            }
            if (typeof result !== 'string') {
              callback(
                new Error('LokiPartitioningAdapter received an unexpected response from inner adapter loadDatabase()')
              );
            }
            var db = JSON.parse(result);
            self.dbref.loadJSONObject(db);
            db = null;
            var clen = self.dbref.collections.length;
            if (self.dbref.collections.length === 0) {
              callback(self.dbref);
              return;
            }
            self.pageIterator = {
              collection: 0,
              pageIndex: 0
            };
            self.loadNextPartition(0, function() {
              callback(self.dbref);
            });
          });
        };
        LokiPartitioningAdapter.prototype.loadNextPartition = function(partition, callback) {
          var keyname = this.dbname + '.' + partition;
          var self = this;
          if (this.options.paging === true) {
            this.pageIterator.pageIndex = 0;
            this.loadNextPage(callback);
            return;
          }
          this.adapter.loadDatabase(keyname, function(result) {
            var data = self.dbref.deserializeCollection(result, {
              delimited: true,
              collectionIndex: partition
            });
            self.dbref.collections[partition].data = data;
            if (++partition < self.dbref.collections.length) {
              self.loadNextPartition(partition, callback);
            } else {
              callback();
            }
          });
        };
        LokiPartitioningAdapter.prototype.loadNextPage = function(callback) {
          var keyname = this.dbname + '.' + this.pageIterator.collection + '.' + this.pageIterator.pageIndex;
          var self = this;
          this.adapter.loadDatabase(keyname, function(result) {
            var data = result.split(self.options.delimiter);
            result = '';
            var dlen = data.length;
            var idx;
            var isLastPage = data[dlen - 1] === '';
            if (isLastPage) {
              data.pop();
              dlen = data.length;
              if (data[dlen - 1] === '' && dlen === 1) {
                data.pop();
                dlen = data.length;
              }
            }
            for (idx = 0; idx < dlen; idx++) {
              self.dbref.collections[self.pageIterator.collection].data.push(JSON.parse(data[idx]));
              data[idx] = null;
            }
            data = [];
            if (isLastPage) {
              if (++self.pageIterator.collection < self.dbref.collections.length) {
                self.loadNextPartition(self.pageIterator.collection, callback);
              } else {
                callback();
              }
            } else {
              self.pageIterator.pageIndex++;
              self.loadNextPage(callback);
            }
          });
        };
        LokiPartitioningAdapter.prototype.exportDatabase = function(dbname, dbref, callback) {
          var self = this;
          var idx,
            clen = dbref.collections.length;
          this.dbref = dbref;
          this.dbname = dbname;
          this.dirtyPartitions = [-1];
          for (idx = 0; idx < clen; idx++) {
            if (dbref.collections[idx].dirty) {
              this.dirtyPartitions.push(idx);
            }
          }
          this.saveNextPartition(function(err) {
            callback(err);
          });
        };
        LokiPartitioningAdapter.prototype.saveNextPartition = function(callback) {
          var self = this;
          var partition = this.dirtyPartitions.shift();
          var keyname = this.dbname + (partition === -1 ? '' : '.' + partition);
          if (this.options.paging && partition !== -1) {
            this.pageIterator = {
              collection: partition,
              docIndex: 0,
              pageIndex: 0
            };
            this.saveNextPage(function(err) {
              if (self.dirtyPartitions.length === 0) {
                callback(err);
              } else {
                self.saveNextPartition(callback);
              }
            });
            return;
          }
          var result = this.dbref.serializeDestructured({
            partitioned: true,
            delimited: true,
            partition
          });
          this.adapter.saveDatabase(keyname, result, function(err) {
            if (err) {
              callback(err);
              return;
            }
            if (self.dirtyPartitions.length === 0) {
              callback(null);
            } else {
              self.saveNextPartition(callback);
            }
          });
        };
        LokiPartitioningAdapter.prototype.saveNextPage = function(callback) {
          var self = this;
          var coll = this.dbref.collections[this.pageIterator.collection];
          var keyname = this.dbname + '.' + this.pageIterator.collection + '.' + this.pageIterator.pageIndex;
          var pageLen = 0,
            cdlen = coll.data.length,
            delimlen = this.options.delimiter.length;
          var serializedObject = '',
            pageBuilder = '';
          var doneWithPartition = false,
            doneWithPage = false;
          var pageSaveCallback = function(err) {
            pageBuilder = '';
            if (err) {
              callback(err);
            }
            if (doneWithPartition) {
              callback(null);
            } else {
              self.pageIterator.pageIndex++;
              self.saveNextPage(callback);
            }
          };
          if (coll.data.length === 0) {
            doneWithPartition = true;
          }
          while (true) {
            if (!doneWithPartition) {
              serializedObject = JSON.stringify(coll.data[this.pageIterator.docIndex]);
              pageBuilder += serializedObject;
              pageLen += serializedObject.length;
              if (++this.pageIterator.docIndex >= cdlen) doneWithPartition = true;
            }
            if (pageLen >= this.options.pageSize) doneWithPage = true;
            if (!doneWithPage || doneWithPartition) {
              pageBuilder += this.options.delimiter;
              pageLen += delimlen;
            }
            if (doneWithPartition || doneWithPage) {
              this.adapter.saveDatabase(keyname, pageBuilder, pageSaveCallback);
              return;
            }
          }
        };
        function LokiFsAdapter() {
          try {
            this.fs = __fs$;
          } catch (e) {
            this.fs = null;
          }
        }
        LokiFsAdapter.prototype.loadDatabase = function loadDatabase(dbname, callback) {
          var self = this;
          this.fs.stat(dbname, function(err, stats) {
            if (!err && stats.isFile()) {
              self.fs.readFile(
                dbname,
                {
                  encoding: 'utf8'
                },
                function readFileCallback(err2, data) {
                  if (err2) {
                    callback(new Error(err2));
                  } else {
                    callback(data);
                  }
                }
              );
            } else {
              callback(null);
            }
          });
        };
        LokiFsAdapter.prototype.saveDatabase = function saveDatabase(dbname, dbstring, callback) {
          var self = this;
          var tmpdbname = dbname + '~';
          this.fs.writeFile(tmpdbname, dbstring, function writeFileCallback(err) {
            if (err) {
              callback(new Error(err));
            } else {
              self.fs.rename(tmpdbname, dbname, callback);
            }
          });
        };
        LokiFsAdapter.prototype.deleteDatabase = function deleteDatabase(dbname, callback) {
          this.fs.unlink(dbname, function deleteDatabaseCallback(err) {
            if (err) {
              callback(new Error(err));
            } else {
              callback();
            }
          });
        };
        function LokiLocalStorageAdapter() {}
        LokiLocalStorageAdapter.prototype.loadDatabase = function loadDatabase(dbname, callback) {
          if (localStorageAvailable()) {
            callback(localStorage.getItem(dbname));
          } else {
            callback(new Error('localStorage is not available'));
          }
        };
        LokiLocalStorageAdapter.prototype.saveDatabase = function saveDatabase(dbname, dbstring, callback) {
          if (localStorageAvailable()) {
            localStorage.setItem(dbname, dbstring);
            callback(null);
          } else {
            callback(new Error('localStorage is not available'));
          }
        };
        LokiLocalStorageAdapter.prototype.deleteDatabase = function deleteDatabase(dbname, callback) {
          if (localStorageAvailable()) {
            localStorage.removeItem(dbname);
            callback(null);
          } else {
            callback(new Error('localStorage is not available'));
          }
        };
        Loki.prototype.throttledSaveDrain = function(callback, options) {
          var self = this;
          var now = new Date().getTime();
          if (!this.throttledSaves) {
            callback(true);
          }
          options = options || {};
          if (!options.hasOwnProperty('recursiveWait')) {
            options.recursiveWait = true;
          }
          if (!options.hasOwnProperty('recursiveWaitLimit')) {
            options.recursiveWaitLimit = false;
          }
          if (!options.hasOwnProperty('recursiveWaitLimitDuration')) {
            options.recursiveWaitLimitDuration = 2e3;
          }
          if (!options.hasOwnProperty('started')) {
            options.started = new Date().getTime();
          }
          if (this.throttledSaves && this.throttledSavePending) {
            if (options.recursiveWait) {
              this.throttledCallbacks.push(function() {
                if (self.throttledSavePending) {
                  if (options.recursiveWaitLimit && now - options.started > options.recursiveWaitLimitDuration) {
                    callback(false);
                    return;
                  }
                  self.throttledSaveDrain(callback, options);
                  return;
                } else {
                  callback(true);
                  return;
                }
              });
            } else {
              this.throttledCallbacks.push(callback);
              return;
            }
          } else {
            callback(true);
          }
        };
        Loki.prototype.loadDatabaseInternal = function(options, callback) {
          var cFun =
              callback ||
              function(err, data) {
                if (err) {
                  throw err;
                }
              },
            self = this;
          if (this.persistenceAdapter !== null) {
            this.persistenceAdapter.loadDatabase(this.filename, function loadDatabaseCallback(dbString) {
              if (typeof dbString === 'string') {
                var parseSuccess = false;
                try {
                  self.loadJSON(dbString, options || {});
                  parseSuccess = true;
                } catch (err) {
                  cFun(err);
                }
                if (parseSuccess) {
                  cFun(null);
                  self.emit('loaded', 'database ' + self.filename + ' loaded');
                }
              } else {
                if (!dbString) {
                  cFun(null);
                  self.emit('loaded', 'empty database ' + self.filename + ' loaded');
                  return;
                }
                if (dbString instanceof Error) {
                  cFun(dbString);
                  return;
                }
                if (typeof dbString === 'object') {
                  self.loadJSONObject(dbString, options || {});
                  cFun(null);
                  self.emit('loaded', 'database ' + self.filename + ' loaded');
                  return;
                }
                cFun('unexpected adapter response : ' + dbString);
              }
            });
          } else {
            cFun(new Error('persistenceAdapter not configured'));
          }
        };
        Loki.prototype.loadDatabase = function(options, callback) {
          var self = this;
          if (!this.throttledSaves) {
            this.loadDatabaseInternal(options, callback);
            return;
          }
          this.throttledSaveDrain(function(success) {
            if (success) {
              self.throttledSavePending = true;
              self.loadDatabaseInternal(options, function(err) {
                if (self.throttledCallbacks.length === 0) {
                  self.throttledSavePending = false;
                } else {
                  self.saveDatabase();
                }
                if (typeof callback === 'function') {
                  callback(err);
                }
              });
              return;
            } else {
              if (typeof callback === 'function') {
                callback(new Error('Unable to pause save throttling long enough to read database'));
              }
            }
          }, options);
        };
        Loki.prototype.saveDatabaseInternal = function(callback) {
          var cFun =
            callback ||
            function(err) {
              if (err) {
                throw err;
              }
              return;
            };
          var self = this;
          if (!this.persistenceAdapter) {
            cFun(new Error('persistenceAdapter not configured'));
            return;
          }
          if (this.persistenceAdapter.mode === 'incremental') {
            var cachedDirty;
            this.ignoreAutosave = true;
            this.persistenceAdapter.saveDatabase(
              this.filename,
              function getLokiCopy() {
                self.ignoreAutosave = false;
                if (cachedDirty) {
                  cFun(new Error('adapter error - getLokiCopy called more than once'));
                  return;
                }
                var lokiCopy = self.copy({
                  removeNonSerializable: true
                });
                cachedDirty = self.collections.map(function(collection) {
                  return [collection.dirty, collection.dirtyIds];
                });
                self.collections.forEach(function(col) {
                  col.dirty = false;
                  col.dirtyIds = [];
                });
                return lokiCopy;
              },
              function exportDatabaseCallback(err) {
                self.ignoreAutosave = false;
                if (err && cachedDirty) {
                  self.collections.forEach(function(col, i) {
                    var cached = cachedDirty[i];
                    col.dirty = col.dirty || cached[0];
                    col.dirtyIds = col.dirtyIds.concat(cached[1]);
                  });
                }
                cFun(err);
              }
            );
          } else if (
            this.persistenceAdapter.mode === 'reference' &&
            typeof this.persistenceAdapter.exportDatabase === 'function'
          ) {
            this.persistenceAdapter.exportDatabase(
              this.filename,
              this.copy({
                removeNonSerializable: true
              }),
              function exportDatabaseCallback(err) {
                self.autosaveClearFlags();
                cFun(err);
              }
            );
          } else {
            this.autosaveClearFlags();
            this.persistenceAdapter.saveDatabase(this.filename, this.serialize(), function saveDatabasecallback(err) {
              cFun(err);
            });
          }
        };
        Loki.prototype.saveDatabase = function(callback) {
          if (!this.throttledSaves) {
            this.saveDatabaseInternal(callback);
            return;
          }
          if (this.throttledSavePending) {
            this.throttledCallbacks.push(callback);
            return;
          }
          var localCallbacks = this.throttledCallbacks;
          this.throttledCallbacks = [];
          localCallbacks.unshift(callback);
          this.throttledSavePending = true;
          var self = this;
          this.saveDatabaseInternal(function(err) {
            self.throttledSavePending = false;
            localCallbacks.forEach(function(pcb) {
              if (typeof pcb === 'function') {
                setTimeout(function() {
                  pcb(err);
                }, 1);
              }
            });
            if (self.throttledCallbacks.length > 0) {
              self.saveDatabase();
            }
          });
        };
        Loki.prototype.save = Loki.prototype.saveDatabase;
        Loki.prototype.deleteDatabase = function(options, callback) {
          var cFun =
            callback ||
            function(err, data) {
              if (err) {
                throw err;
              }
            };
          if (typeof options === 'function' && !callback) {
            cFun = options;
          }
          if (this.persistenceAdapter !== null) {
            this.persistenceAdapter.deleteDatabase(this.filename, function deleteDatabaseCallback(err) {
              cFun(err);
            });
          } else {
            cFun(new Error('persistenceAdapter not configured'));
          }
        };
        Loki.prototype.autosaveDirty = function() {
          for (var idx = 0; idx < this.collections.length; idx++) {
            if (this.collections[idx].dirty) {
              return true;
            }
          }
          return false;
        };
        Loki.prototype.autosaveClearFlags = function() {
          for (var idx = 0; idx < this.collections.length; idx++) {
            this.collections[idx].dirty = false;
          }
        };
        Loki.prototype.autosaveEnable = function(options, callback) {
          this.autosave = true;
          var delay = 5e3,
            self = this;
          if (typeof this.autosaveInterval !== 'undefined' && this.autosaveInterval !== null) {
            delay = this.autosaveInterval;
          }
          this.autosaveHandle = setInterval(function autosaveHandleInterval() {
            if (self.autosaveDirty() && !self.ignoreAutosave) {
              self.saveDatabase(callback);
            }
          }, delay);
        };
        Loki.prototype.autosaveDisable = function() {
          if (typeof this.autosaveHandle !== 'undefined' && this.autosaveHandle !== null) {
            clearInterval(this.autosaveHandle);
            this.autosaveHandle = null;
          }
        };
        function Resultset(collection, options) {
          options = options || {};
          this.collection = collection;
          this.filteredrows = [];
          this.filterInitialized = false;
          return this;
        }
        Resultset.prototype.reset = function() {
          if (this.filteredrows.length > 0) {
            this.filteredrows = [];
          }
          this.filterInitialized = false;
          return this;
        };
        Resultset.prototype.toJSON = function() {
          var copy = this.copy();
          copy.collection = null;
          return copy;
        };
        Resultset.prototype.limit = function(qty) {
          if (!this.filterInitialized && this.filteredrows.length === 0) {
            this.filteredrows = this.collection.prepareFullDocIndex();
          }
          var rscopy = new Resultset(this.collection);
          rscopy.filteredrows = this.filteredrows.slice(0, qty);
          rscopy.filterInitialized = true;
          return rscopy;
        };
        Resultset.prototype.offset = function(pos) {
          if (!this.filterInitialized && this.filteredrows.length === 0) {
            this.filteredrows = this.collection.prepareFullDocIndex();
          }
          var rscopy = new Resultset(this.collection);
          rscopy.filteredrows = this.filteredrows.slice(pos);
          rscopy.filterInitialized = true;
          return rscopy;
        };
        Resultset.prototype.copy = function() {
          var result = new Resultset(this.collection);
          if (this.filteredrows.length > 0) {
            result.filteredrows = this.filteredrows.slice();
          }
          result.filterInitialized = this.filterInitialized;
          return result;
        };
        Resultset.prototype.branch = Resultset.prototype.copy;
        Resultset.prototype.transform = function(transform, parameters) {
          var idx,
            step,
            rs = this;
          if (typeof transform === 'string') {
            if (this.collection.transforms.hasOwnProperty(transform)) {
              transform = this.collection.transforms[transform];
            }
          }
          if (typeof transform !== 'object' || !Array.isArray(transform)) {
            throw new Error('Invalid transform');
          }
          if (typeof parameters !== 'undefined') {
            transform = Utils.resolveTransformParams(transform, parameters);
          }
          for (idx = 0; idx < transform.length; idx++) {
            step = transform[idx];
            switch (step.type) {
              case 'find':
                rs.find(step.value);
                break;
              case 'where':
                rs.where(step.value);
                break;
              case 'simplesort':
                rs.simplesort(step.property, step.desc || step.options);
                break;
              case 'compoundsort':
                rs.compoundsort(step.value);
                break;
              case 'sort':
                rs.sort(step.value);
                break;
              case 'limit':
                rs = rs.limit(step.value);
                break;
              case 'offset':
                rs = rs.offset(step.value);
                break;
              case 'map':
                rs = rs.map(step.value, step.dataOptions);
                break;
              case 'eqJoin':
                rs = rs.eqJoin(step.joinData, step.leftJoinKey, step.rightJoinKey, step.mapFun, step.dataOptions);
                break;
              case 'mapReduce':
                rs = rs.mapReduce(step.mapFunction, step.reduceFunction);
                break;
              case 'update':
                rs.update(step.value);
                break;
              case 'remove':
                rs.remove();
                break;
              default:
                break;
            }
          }
          return rs;
        };
        Resultset.prototype.sort = function(comparefun) {
          if (!this.filterInitialized && this.filteredrows.length === 0) {
            this.filteredrows = this.collection.prepareFullDocIndex();
          }
          var wrappedComparer = (function(userComparer, data) {
            return function(a, b) {
              return userComparer(data[a], data[b]);
            };
          })(comparefun, this.collection.data);
          this.filteredrows.sort(wrappedComparer);
          return this;
        };
        Resultset.prototype.simplesort = function(propname, options) {
          var eff,
            targetEff = 10,
            dc = this.collection.data.length,
            frl = this.filteredrows.length,
            hasBinaryIndex = this.collection.binaryIndices.hasOwnProperty(propname);
          if (typeof options === 'undefined' || options === false) {
            options = {
              desc: false
            };
          }
          if (options === true) {
            options = {
              desc: true
            };
          }
          if (frl === 0) {
            if (this.filterInitialized) {
              return this;
            }
            if (this.collection.binaryIndices.hasOwnProperty(propname)) {
              this.collection.ensureIndex(propname);
              this.filteredrows = this.collection.binaryIndices[propname].values.slice(0);
              if (options.desc) {
                this.filteredrows.reverse();
              }
              return this;
            } else {
              this.filteredrows = this.collection.prepareFullDocIndex();
            }
          } else {
            if (!options.disableIndexIntersect && hasBinaryIndex) {
              eff = dc / frl;
              if (options.useJavascriptSorting) {
                targetEff = 6;
              }
              if (eff <= targetEff || options.forceIndexIntersect) {
                var idx,
                  fr = this.filteredrows;
                var io = {};
                for (idx = 0; idx < frl; idx++) {
                  io[fr[idx]] = true;
                }
                var pv = this.collection.binaryIndices[propname].values;
                this.filteredrows = pv.filter(function(n) {
                  return io[n];
                });
                if (options.desc) {
                  this.filteredrows.reverse();
                }
                return this;
              }
            }
          }
          if (options.useJavascriptSorting) {
            return this.sort(function(obj1, obj2) {
              if (obj1[propname] === obj2[propname]) return 0;
              if (obj1[propname] > obj2[propname]) return 1;
              if (obj1[propname] < obj2[propname]) return -1;
            });
          }
          var wrappedComparer = (function(prop, desc, data) {
            var val1, val2, arr;
            return function(a, b) {
              if (~prop.indexOf('.')) {
                arr = prop.split('.');
                val1 = Utils.getIn(data[a], arr, true);
                val2 = Utils.getIn(data[b], arr, true);
              } else {
                val1 = data[a][prop];
                val2 = data[b][prop];
              }
              return sortHelper(val1, val2, desc);
            };
          })(propname, options.desc, this.collection.data);
          this.filteredrows.sort(wrappedComparer);
          return this;
        };
        Resultset.prototype.compoundsort = function(properties) {
          if (properties.length === 0) {
            throw new Error('Invalid call to compoundsort, need at least one property');
          }
          var prop;
          if (properties.length === 1) {
            prop = properties[0];
            if (Array.isArray(prop)) {
              return this.simplesort(prop[0], prop[1]);
            }
            return this.simplesort(prop, false);
          }
          for (var i = 0, len = properties.length; i < len; i += 1) {
            prop = properties[i];
            if (!Array.isArray(prop)) {
              properties[i] = [prop, false];
            }
          }
          if (!this.filterInitialized && this.filteredrows.length === 0) {
            this.filteredrows = this.collection.prepareFullDocIndex();
          }
          var wrappedComparer = (function(props, data) {
            return function(a, b) {
              return compoundeval(props, data[a], data[b]);
            };
          })(properties, this.collection.data);
          this.filteredrows.sort(wrappedComparer);
          return this;
        };
        Resultset.prototype.findOr = function(expressionArray) {
          var fr = null,
            fri = 0,
            frlen = 0,
            docset = [],
            idxset = [],
            idx = 0,
            origCount = this.count();
          for (var ei = 0, elen = expressionArray.length; ei < elen; ei++) {
            fr = this.branch().find(expressionArray[ei]).filteredrows;
            frlen = fr.length;
            for (fri = 0; fri < frlen; fri++) {
              idx = fr[fri];
              if (idxset[idx] === void 0) {
                idxset[idx] = true;
                docset.push(idx);
              }
            }
          }
          this.filteredrows = docset;
          this.filterInitialized = true;
          return this;
        };
        Resultset.prototype.$or = Resultset.prototype.findOr;
        function precompileQuery(operator, value) {
          if (operator === '$regex') {
            if (Array.isArray(value)) {
              value = new RegExp(value[0], value[1]);
            } else if (!(value instanceof RegExp)) {
              value = new RegExp(value);
            }
          } else if (typeof value === 'object') {
            for (var key in value) {
              if (key === '$regex' || typeof value[key] === 'object') {
                value[key] = precompileQuery(key, value[key]);
              }
            }
          }
          return value;
        }
        Resultset.prototype.findAnd = function(expressionArray) {
          for (var i = 0, len = expressionArray.length; i < len; i++) {
            if (this.count() === 0) {
              return this;
            }
            this.find(expressionArray[i]);
          }
          return this;
        };
        Resultset.prototype.$and = Resultset.prototype.findAnd;
        Resultset.prototype.find = function(query, firstOnly) {
          if (this.collection.data.length === 0) {
            this.filteredrows = [];
            this.filterInitialized = true;
            return this;
          }
          var queryObject = query || 'getAll',
            p,
            property,
            queryObjectOp,
            obj,
            operator,
            value,
            key,
            searchByIndex = false,
            result = [],
            filters = [],
            index = null;
          firstOnly = firstOnly || false;
          if (typeof queryObject === 'object') {
            for (p in queryObject) {
              obj = {};
              obj[p] = queryObject[p];
              filters.push(obj);
              if (hasOwnProperty.call(queryObject, p)) {
                property = p;
                queryObjectOp = queryObject[p];
              }
            }
            if (filters.length > 1) {
              return this.find(
                {
                  $and: filters
                },
                firstOnly
              );
            }
          }
          if (!property || queryObject === 'getAll') {
            if (firstOnly) {
              if (this.filterInitialized) {
                this.filteredrows = this.filteredrows.slice(0, 1);
              } else {
                this.filteredrows = this.collection.data.length > 0 ? [0] : [];
                this.filterInitialized = true;
              }
            }
            return this;
          }
          if (property === '$and' || property === '$or') {
            this[property](queryObjectOp);
            if (firstOnly && this.filteredrows.length > 1) {
              this.filteredrows = this.filteredrows.slice(0, 1);
            }
            return this;
          }
          if (queryObjectOp === null || typeof queryObjectOp !== 'object' || queryObjectOp instanceof Date) {
            operator = '$eq';
            value = queryObjectOp;
          } else if (typeof queryObjectOp === 'object') {
            for (key in queryObjectOp) {
              if (hasOwnProperty.call(queryObjectOp, key)) {
                operator = key;
                value = queryObjectOp[key];
                break;
              }
            }
          } else {
            throw new Error('Do not know what you want to do.');
          }
          if (operator === '$regex' || typeof value === 'object') {
            value = precompileQuery(operator, value);
          }
          var usingDotNotation = property.indexOf('.') !== -1;
          var doIndexCheck = !this.filterInitialized;
          if (doIndexCheck && this.collection.binaryIndices[property] && indexedOps[operator]) {
            if (this.collection.adaptiveBinaryIndices !== true) {
              this.collection.ensureIndex(property);
            }
            searchByIndex = true;
            index = this.collection.binaryIndices[property];
          }
          if (!searchByIndex && operator === '$in' && Array.isArray(value) && typeof Set !== 'undefined') {
            value = new Set(value);
            operator = '$inSet';
          }
          var fun = LokiOps[operator];
          var t = this.collection.data;
          var i = 0,
            len = 0;
          var filter,
            rowIdx = 0,
            record;
          if (this.filterInitialized) {
            filter = this.filteredrows;
            len = filter.length;
            if (usingDotNotation) {
              property = property.split('.');
              for (i = 0; i < len; i++) {
                rowIdx = filter[i];
                record = t[rowIdx];
                if (dotSubScan(record, property, fun, value, record)) {
                  result.push(rowIdx);
                  if (firstOnly) {
                    this.filteredrows = result;
                    return this;
                  }
                }
              }
            } else {
              for (i = 0; i < len; i++) {
                rowIdx = filter[i];
                record = t[rowIdx];
                if (fun(record[property], value, record)) {
                  result.push(rowIdx);
                  if (firstOnly) {
                    this.filteredrows = result;
                    return this;
                  }
                }
              }
            }
          } else {
            if (!searchByIndex) {
              len = t.length;
              if (usingDotNotation) {
                property = property.split('.');
                for (i = 0; i < len; i++) {
                  record = t[i];
                  if (dotSubScan(record, property, fun, value, record)) {
                    result.push(i);
                    if (firstOnly) {
                      this.filteredrows = result;
                      this.filterInitialized = true;
                      return this;
                    }
                  }
                }
              } else {
                for (i = 0; i < len; i++) {
                  record = t[i];
                  if (fun(record[property], value, record)) {
                    result.push(i);
                    if (firstOnly) {
                      this.filteredrows = result;
                      this.filterInitialized = true;
                      return this;
                    }
                  }
                }
              }
            } else {
              var segm = this.collection.calculateRange(operator, property, value);
              if (operator !== '$in') {
                for (i = segm[0]; i <= segm[1]; i++) {
                  if (indexedOps[operator] !== true) {
                    if (indexedOps[operator](Utils.getIn(t[index.values[i]], property, usingDotNotation), value)) {
                      result.push(index.values[i]);
                      if (firstOnly) {
                        this.filteredrows = result;
                        this.filterInitialized = true;
                        return this;
                      }
                    }
                  } else {
                    result.push(index.values[i]);
                    if (firstOnly) {
                      this.filteredrows = result;
                      this.filterInitialized = true;
                      return this;
                    }
                  }
                }
              } else {
                for (i = 0, len = segm.length; i < len; i++) {
                  result.push(index.values[segm[i]]);
                  if (firstOnly) {
                    this.filteredrows = result;
                    this.filterInitialized = true;
                    return this;
                  }
                }
              }
            }
          }
          this.filteredrows = result;
          this.filterInitialized = true;
          return this;
        };
        Resultset.prototype.where = function(fun) {
          var viewFunction,
            result = [];
          if ('function' === typeof fun) {
            viewFunction = fun;
          } else {
            throw new TypeError('Argument is not a stored view or a function');
          }
          try {
            if (this.filterInitialized) {
              var j = this.filteredrows.length;
              while (j--) {
                if (viewFunction(this.collection.data[this.filteredrows[j]]) === true) {
                  result.push(this.filteredrows[j]);
                }
              }
              this.filteredrows = result;
              return this;
            } else {
              var k = this.collection.data.length;
              while (k--) {
                if (viewFunction(this.collection.data[k]) === true) {
                  result.push(k);
                }
              }
              this.filteredrows = result;
              this.filterInitialized = true;
              return this;
            }
          } catch (err) {
            throw err;
          }
        };
        Resultset.prototype.count = function() {
          if (this.filterInitialized) {
            return this.filteredrows.length;
          }
          return this.collection.count();
        };
        Resultset.prototype.data = function(options) {
          var result = [],
            data = this.collection.data,
            obj,
            len,
            i,
            method;
          options = options || {};
          if (options.removeMeta && !options.forceClones) {
            options.forceClones = true;
            options.forceCloneMethod = options.forceCloneMethod || 'shallow';
          }
          if (!this.collection.disableDeltaChangesApi && this.collection.disableFreeze) {
            options.forceClones = true;
            options.forceCloneMethod = 'parse-stringify';
          }
          if (!this.filterInitialized) {
            if (this.filteredrows.length === 0) {
              if (this.collection.cloneObjects || options.forceClones) {
                len = data.length;
                method = options.forceCloneMethod || this.collection.cloneMethod;
                for (i = 0; i < len; i++) {
                  obj = clone(data[i], method);
                  if (options.removeMeta) {
                    delete obj.$loki;
                    delete obj.meta;
                  }
                  result.push(obj);
                }
                return result;
              } else {
                return data.slice();
              }
            } else {
              this.filterInitialized = true;
            }
          }
          var fr = this.filteredrows;
          len = fr.length;
          if (this.collection.cloneObjects || options.forceClones) {
            method = options.forceCloneMethod || this.collection.cloneMethod;
            for (i = 0; i < len; i++) {
              obj = clone(data[fr[i]], method);
              if (options.removeMeta) {
                delete obj.$loki;
                delete obj.meta;
              }
              result.push(obj);
            }
          } else {
            for (i = 0; i < len; i++) {
              result.push(data[fr[i]]);
            }
          }
          return result;
        };
        Resultset.prototype.update = function(updateFunction) {
          if (typeof updateFunction !== 'function') {
            throw new TypeError('Argument is not a function');
          }
          if (!this.filterInitialized && this.filteredrows.length === 0) {
            this.filteredrows = this.collection.prepareFullDocIndex();
          }
          var obj,
            len = this.filteredrows.length,
            rcd = this.collection.data;
          for (var idx = 0; idx < len; idx++) {
            if (!this.disableFreeze || this.collection.cloneObjects || !this.collection.disableDeltaChangesApi) {
              obj = clone(rcd[this.filteredrows[idx]], this.collection.cloneMethod);
              updateFunction(obj);
              this.collection.update(obj);
            } else {
              updateFunction(rcd[this.filteredrows[idx]]);
              this.collection.update(rcd[this.filteredrows[idx]]);
            }
          }
          return this;
        };
        Resultset.prototype.remove = function() {
          if (!this.filterInitialized && this.filteredrows.length === 0) {
            this.filteredrows = this.collection.prepareFullDocIndex();
          }
          this.collection.removeBatchByPositions(this.filteredrows);
          this.filteredrows = [];
          return this;
        };
        Resultset.prototype.mapReduce = function(mapFunction, reduceFunction) {
          try {
            return reduceFunction(this.data().map(mapFunction));
          } catch (err) {
            throw err;
          }
        };
        Resultset.prototype.eqJoin = function(joinData, leftJoinKey, rightJoinKey, mapFun, dataOptions) {
          var leftData = [],
            leftDataLength,
            rightData = [],
            rightDataLength,
            key,
            result = [],
            leftKeyisFunction = typeof leftJoinKey === 'function',
            rightKeyisFunction = typeof rightJoinKey === 'function',
            joinMap = {};
          leftData = this.data(dataOptions);
          leftDataLength = leftData.length;
          if (joinData instanceof Collection) {
            rightData = joinData.chain().data(dataOptions);
          } else if (joinData instanceof Resultset) {
            rightData = joinData.data(dataOptions);
          } else if (Array.isArray(joinData)) {
            rightData = joinData;
          } else {
            throw new TypeError('joinData needs to be an array or result set');
          }
          rightDataLength = rightData.length;
          for (var i = 0; i < rightDataLength; i++) {
            key = rightKeyisFunction ? rightJoinKey(rightData[i]) : rightData[i][rightJoinKey];
            joinMap[key] = rightData[i];
          }
          if (!mapFun) {
            mapFun = function(left, right) {
              return {
                left,
                right
              };
            };
          }
          for (var j = 0; j < leftDataLength; j++) {
            key = leftKeyisFunction ? leftJoinKey(leftData[j]) : leftData[j][leftJoinKey];
            result.push(mapFun(leftData[j], joinMap[key] || {}));
          }
          this.collection = new Collection('joinData');
          this.collection.insert(result);
          this.filteredrows = [];
          this.filterInitialized = false;
          return this;
        };
        Resultset.prototype.map = function(mapFun, dataOptions) {
          var data = this.data(dataOptions).map(mapFun);
          this.collection = new Collection('mappedData');
          this.collection.insert(data);
          this.filteredrows = [];
          this.filterInitialized = false;
          return this;
        };
        function DynamicView(collection, name, options) {
          this.collection = collection;
          this.name = name;
          this.rebuildPending = false;
          this.options = options || {};
          if (!this.options.hasOwnProperty('persistent')) {
            this.options.persistent = false;
          }
          if (!this.options.hasOwnProperty('sortPriority')) {
            this.options.sortPriority = 'passive';
          }
          if (!this.options.hasOwnProperty('minRebuildInterval')) {
            this.options.minRebuildInterval = 1;
          }
          this.resultset = new Resultset(collection);
          this.resultdata = [];
          this.resultsdirty = false;
          this.cachedresultset = null;
          this.filterPipeline = [];
          if (!this.collection.disableFreeze) {
            Object.freeze(this.filterPipeline);
          }
          this.sortFunction = null;
          this.sortCriteria = null;
          this.sortCriteriaSimple = null;
          this.sortDirty = false;
          this.events = {
            rebuild: [],
            filter: [],
            sort: []
          };
        }
        DynamicView.prototype = new LokiEventEmitter();
        DynamicView.prototype.constructor = DynamicView;
        DynamicView.prototype.getSort = function() {
          return this.sortFunction || this.sortCriteria || this.sortCriteriaSimple;
        };
        DynamicView.prototype.rematerialize = function(options) {
          var fpl, fpi, idx;
          options = options || {};
          this.resultdata = [];
          this.resultsdirty = true;
          this.resultset = new Resultset(this.collection);
          if (this.sortFunction || this.sortCriteria || this.sortCriteriaSimple) {
            this.sortDirty = true;
          }
          var wasFrozen = Object.isFrozen(this.filterPipeline);
          if (options.hasOwnProperty('removeWhereFilters')) {
            if (wasFrozen) {
              this.filterPipeline = this.filterPipeline.slice();
            }
            fpl = this.filterPipeline.length;
            fpi = fpl;
            while (fpi--) {
              if (this.filterPipeline[fpi].type === 'where') {
                if (fpi !== this.filterPipeline.length - 1) {
                  this.filterPipeline[fpi] = this.filterPipeline[this.filterPipeline.length - 1];
                }
                this.filterPipeline.length--;
              }
            }
          }
          var ofp = this.filterPipeline;
          this.filterPipeline = [];
          fpl = ofp.length;
          for (idx = 0; idx < fpl; idx++) {
            this.applyFind(ofp[idx].val, ofp[idx].uid);
          }
          if (wasFrozen) {
            Object.freeze(this.filterPipeline);
          }
          this.data();
          this.emit('rebuild', this);
          return this;
        };
        DynamicView.prototype.branchResultset = function(transform, parameters) {
          var rs = this.resultset.branch();
          if (typeof transform === 'undefined') {
            return rs;
          }
          return rs.transform(transform, parameters);
        };
        DynamicView.prototype.toJSON = function() {
          var copy = new DynamicView(this.collection, this.name, this.options);
          copy.resultset = this.resultset;
          copy.resultdata = [];
          copy.resultsdirty = true;
          copy.filterPipeline = this.filterPipeline;
          copy.sortFunction = this.sortFunction;
          copy.sortCriteria = this.sortCriteria;
          copy.sortCriteriaSimple = this.sortCriteriaSimple || null;
          copy.sortDirty = this.sortDirty;
          copy.collection = null;
          return copy;
        };
        DynamicView.prototype.removeFilters = function(options) {
          options = options || {};
          this.rebuildPending = false;
          this.resultset.reset();
          this.resultdata = [];
          this.resultsdirty = true;
          this.cachedresultset = null;
          var wasFrozen = Object.isFrozen(this.filterPipeline);
          var filterChanged = this.filterPipeline.length > 0;
          this.filterPipeline = [];
          if (wasFrozen) {
            Object.freeze(this.filterPipeline);
          }
          this.sortFunction = null;
          this.sortCriteria = null;
          this.sortCriteriaSimple = null;
          this.sortDirty = false;
          if (options.queueSortPhase === true) {
            this.queueSortPhase();
          }
          if (filterChanged) {
            this.emit('filter');
          }
        };
        DynamicView.prototype.applySort = function(comparefun) {
          this.sortFunction = comparefun;
          this.sortCriteria = null;
          this.sortCriteriaSimple = null;
          this.queueSortPhase();
          this.emit('sort');
          return this;
        };
        DynamicView.prototype.applySimpleSort = function(propname, options) {
          this.sortCriteriaSimple = {
            propname,
            options: options || false
          };
          if (!this.collection.disableFreeze) {
            deepFreeze(this.sortCriteriaSimple);
          }
          this.sortCriteria = null;
          this.sortFunction = null;
          this.queueSortPhase();
          this.emit('sort');
          return this;
        };
        DynamicView.prototype.applySortCriteria = function(criteria) {
          this.sortCriteria = criteria;
          if (!this.collection.disableFreeze) {
            deepFreeze(this.sortCriteria);
          }
          this.sortCriteriaSimple = null;
          this.sortFunction = null;
          this.queueSortPhase();
          this.emit('sort');
          return this;
        };
        DynamicView.prototype.startTransaction = function() {
          this.cachedresultset = this.resultset.copy();
          return this;
        };
        DynamicView.prototype.commit = function() {
          this.cachedresultset = null;
          return this;
        };
        DynamicView.prototype.rollback = function() {
          this.resultset = this.cachedresultset;
          if (this.options.persistent) {
            this.resultdata = this.resultset.data();
            this.emit('rebuild', this);
          }
          return this;
        };
        DynamicView.prototype._indexOfFilterWithId = function(uid) {
          if (typeof uid === 'string' || typeof uid === 'number') {
            for (var idx = 0, len = this.filterPipeline.length; idx < len; idx += 1) {
              if (uid === this.filterPipeline[idx].uid) {
                return idx;
              }
            }
          }
          return -1;
        };
        DynamicView.prototype._addFilter = function(filter) {
          var wasFrozen = Object.isFrozen(this.filterPipeline);
          if (wasFrozen) {
            this.filterPipeline = this.filterPipeline.slice();
          }
          if (!this.collection.disableFreeze) {
            deepFreeze(filter);
          }
          this.filterPipeline.push(filter);
          if (wasFrozen) {
            Object.freeze(this.filterPipeline);
          }
          this.resultset[filter.type](filter.val);
        };
        DynamicView.prototype.reapplyFilters = function() {
          this.resultset.reset();
          this.cachedresultset = null;
          if (this.options.persistent) {
            this.resultdata = [];
            this.resultsdirty = true;
          }
          var filters = this.filterPipeline;
          var wasFrozen = Object.isFrozen(filters);
          this.filterPipeline = [];
          for (var idx = 0, len = filters.length; idx < len; idx += 1) {
            this._addFilter(filters[idx]);
          }
          if (wasFrozen) {
            Object.freeze(this.filterPipeline);
          }
          if (this.sortFunction || this.sortCriteria || this.sortCriteriaSimple) {
            this.queueSortPhase();
          } else {
            this.queueRebuildEvent();
          }
          this.emit('filter');
          return this;
        };
        DynamicView.prototype.applyFilter = function(filter) {
          var idx = this._indexOfFilterWithId(filter.uid);
          if (idx >= 0) {
            var wasFrozen = Object.isFrozen(this.filterPipeline);
            if (wasFrozen) {
              this.filterPipeline = this.filterPipeline.slice();
            }
            this.filterPipeline[idx] = filter;
            if (wasFrozen) {
              freeze(filter);
              Object.freeze(this.filterPipeline);
            }
            return this.reapplyFilters();
          }
          this.cachedresultset = null;
          if (this.options.persistent) {
            this.resultdata = [];
            this.resultsdirty = true;
          }
          this._addFilter(filter);
          if (this.sortFunction || this.sortCriteria || this.sortCriteriaSimple) {
            this.queueSortPhase();
          } else {
            this.queueRebuildEvent();
          }
          this.emit('filter');
          return this;
        };
        DynamicView.prototype.applyFind = function(query, uid) {
          this.applyFilter({
            type: 'find',
            val: query,
            uid
          });
          return this;
        };
        DynamicView.prototype.applyWhere = function(fun, uid) {
          this.applyFilter({
            type: 'where',
            val: fun,
            uid
          });
          return this;
        };
        DynamicView.prototype.removeFilter = function(uid) {
          var idx = this._indexOfFilterWithId(uid);
          if (idx < 0) {
            throw new Error('Dynamic view does not contain a filter with ID: ' + uid);
          }
          var wasFrozen = Object.isFrozen(this.filterPipeline);
          if (wasFrozen) {
            this.filterPipeline = this.filterPipeline.slice();
          }
          this.filterPipeline.splice(idx, 1);
          if (wasFrozen) {
            Object.freeze(this.filterPipeline);
          }
          this.reapplyFilters();
          return this;
        };
        DynamicView.prototype.count = function() {
          if (this.resultsdirty) {
            this.resultdata = this.resultset.data();
          }
          return this.resultset.count();
        };
        DynamicView.prototype.data = function(options) {
          if (this.sortDirty || this.resultsdirty) {
            this.performSortPhase({
              suppressRebuildEvent: true
            });
          }
          return this.options.persistent ? this.resultdata : this.resultset.data(options);
        };
        DynamicView.prototype.queueRebuildEvent = function() {
          if (this.rebuildPending) {
            return;
          }
          this.rebuildPending = true;
          var self = this;
          setTimeout(function() {
            if (self.rebuildPending) {
              self.rebuildPending = false;
              self.emit('rebuild', self);
            }
          }, this.options.minRebuildInterval);
        };
        DynamicView.prototype.queueSortPhase = function() {
          if (this.sortDirty) {
            return;
          }
          this.sortDirty = true;
          var self = this;
          if (this.options.sortPriority === 'active') {
            setTimeout(function() {
              self.performSortPhase();
            }, this.options.minRebuildInterval);
          } else {
            this.queueRebuildEvent();
          }
        };
        DynamicView.prototype.performSortPhase = function(options) {
          if (!this.sortDirty && !this.resultsdirty) {
            return;
          }
          options = options || {};
          if (this.sortDirty) {
            if (this.sortFunction) {
              this.resultset.sort(this.sortFunction);
            } else if (this.sortCriteria) {
              this.resultset.compoundsort(this.sortCriteria);
            } else if (this.sortCriteriaSimple) {
              this.resultset.simplesort(this.sortCriteriaSimple.propname, this.sortCriteriaSimple.options);
            }
            this.sortDirty = false;
          }
          if (this.options.persistent) {
            this.resultdata = this.resultset.data();
            this.resultsdirty = false;
          }
          if (!options.suppressRebuildEvent) {
            this.emit('rebuild', this);
          }
        };
        DynamicView.prototype.evaluateDocument = function(objIndex, isNew) {
          if (!this.resultset.filterInitialized) {
            if (this.options.persistent) {
              this.resultdata = this.resultset.data();
            }
            if (this.sortFunction || this.sortCriteria || this.sortCriteriaSimple) {
              this.queueSortPhase();
            } else {
              this.queueRebuildEvent();
            }
            return;
          }
          var ofr = this.resultset.filteredrows;
          var oldPos = isNew ? -1 : ofr.indexOf(+objIndex);
          var oldlen = ofr.length;
          var evalResultset = new Resultset(this.collection);
          evalResultset.filteredrows = [objIndex];
          evalResultset.filterInitialized = true;
          var filter;
          for (var idx = 0, len = this.filterPipeline.length; idx < len; idx++) {
            filter = this.filterPipeline[idx];
            evalResultset[filter.type](filter.val);
          }
          var newPos = evalResultset.filteredrows.length === 0 ? -1 : 0;
          if (oldPos === -1 && newPos === -1) return;
          if (oldPos === -1 && newPos !== -1) {
            ofr.push(objIndex);
            if (this.options.persistent) {
              this.resultdata.push(this.collection.data[objIndex]);
            }
            if (this.sortFunction || this.sortCriteria || this.sortCriteriaSimple) {
              this.queueSortPhase();
            } else {
              this.queueRebuildEvent();
            }
            return;
          }
          if (oldPos !== -1 && newPos === -1) {
            if (oldPos < oldlen - 1) {
              ofr.splice(oldPos, 1);
              if (this.options.persistent) {
                this.resultdata.splice(oldPos, 1);
              }
            } else {
              ofr.length = oldlen - 1;
              if (this.options.persistent) {
                this.resultdata.length = oldlen - 1;
              }
            }
            if (this.sortFunction || this.sortCriteria || this.sortCriteriaSimple) {
              this.queueSortPhase();
            } else {
              this.queueRebuildEvent();
            }
            return;
          }
          if (oldPos !== -1 && newPos !== -1) {
            if (this.options.persistent) {
              this.resultdata[oldPos] = this.collection.data[objIndex];
            }
            if (this.sortFunction || this.sortCriteria || this.sortCriteriaSimple) {
              this.queueSortPhase();
            } else {
              this.queueRebuildEvent();
            }
            return;
          }
        };
        DynamicView.prototype.removeDocument = function(objIndex) {
          var idx,
            rmidx,
            rmlen,
            rxo = {},
            fxo = {};
          var adjels = [];
          var drs = this.resultset;
          var fr = this.resultset.filteredrows;
          var frlen = fr.length;
          if (!this.resultset.filterInitialized) {
            if (this.options.persistent) {
              this.resultdata = this.resultset.data();
            }
            if (this.sortFunction || this.sortCriteria || this.sortCriteriaSimple) {
              this.queueSortPhase();
            } else {
              this.queueRebuildEvent();
            }
            return;
          }
          if (!Array.isArray(objIndex)) {
            objIndex = [objIndex];
          }
          rmlen = objIndex.length;
          for (rmidx = 0; rmidx < rmlen; rmidx++) {
            rxo[objIndex[rmidx]] = true;
          }
          for (idx = 0; idx < frlen; idx++) {
            if (rxo[fr[idx]]) fxo[idx] = true;
          }
          if (Object.keys(fxo).length > 0) {
            this.resultset.filteredrows = this.resultset.filteredrows.filter(function(di, idx2) {
              return !fxo[idx2];
            });
            if (this.options.persistent) {
              this.resultdata = this.resultdata.filter(function(obj, idx2) {
                return !fxo[idx2];
              });
            }
            if (this.sortFunction || this.sortCriteria || this.sortCriteriaSimple) {
              this.queueSortPhase();
            } else {
              this.queueRebuildEvent();
            }
          }
          var filt = function(idx2) {
            return function(di) {
              return di < drs.filteredrows[idx2];
            };
          };
          frlen = drs.filteredrows.length;
          for (idx = 0; idx < frlen; idx++) {
            adjels = objIndex.filter(filt(idx));
            drs.filteredrows[idx] -= adjels.length;
          }
        };
        DynamicView.prototype.mapReduce = function(mapFunction, reduceFunction) {
          try {
            return reduceFunction(this.data().map(mapFunction));
          } catch (err) {
            throw err;
          }
        };
        function Collection(name, options) {
          this.name = name;
          this.data = [];
          this.idIndex = null;
          this.binaryIndices = {};
          this.constraints = {
            unique: {},
            exact: {}
          };
          this.uniqueNames = [];
          this.transforms = {};
          this.objType = name;
          this.dirty = true;
          this.cachedIndex = null;
          this.cachedBinaryIndex = null;
          this.cachedData = null;
          var self = this;
          options = options || {};
          if (options.hasOwnProperty('unique')) {
            if (!Array.isArray(options.unique)) {
              options.unique = [options.unique];
            }
            options.unique.forEach(function(prop) {
              self.uniqueNames.push(prop);
            });
          }
          if (options.hasOwnProperty('exact')) {
            options.exact.forEach(function(prop) {
              self.constraints.exact[prop] = new ExactIndex(prop);
            });
          }
          this.adaptiveBinaryIndices = options.hasOwnProperty('adaptiveBinaryIndices')
            ? options.adaptiveBinaryIndices
            : true;
          this.transactional = options.hasOwnProperty('transactional') ? options.transactional : false;
          this.cloneObjects = options.hasOwnProperty('clone') ? options.clone : false;
          this.cloneMethod = options.hasOwnProperty('cloneMethod') ? options.cloneMethod : 'parse-stringify';
          this.asyncListeners = options.hasOwnProperty('asyncListeners') ? options.asyncListeners : false;
          this.disableMeta = options.hasOwnProperty('disableMeta') ? options.disableMeta : false;
          this.disableChangesApi = options.hasOwnProperty('disableChangesApi') ? options.disableChangesApi : true;
          this.disableDeltaChangesApi = options.hasOwnProperty('disableDeltaChangesApi')
            ? options.disableDeltaChangesApi
            : true;
          if (this.disableChangesApi) {
            this.disableDeltaChangesApi = true;
          }
          this.autoupdate = options.hasOwnProperty('autoupdate') ? options.autoupdate : false;
          this.serializableIndices = options.hasOwnProperty('serializableIndices') ? options.serializableIndices : true;
          this.disableFreeze = options.hasOwnProperty('disableFreeze') ? options.disableFreeze : true;
          this.ttl = {
            age: null,
            ttlInterval: null,
            daemon: null
          };
          this.setTTL(options.ttl || -1, options.ttlInterval);
          this.maxId = 0;
          this.DynamicViews = [];
          this.events = {
            insert: [],
            update: [],
            'pre-insert': [],
            'pre-update': [],
            close: [],
            flushbuffer: [],
            error: [],
            delete: [],
            warning: []
          };
          this.changes = [];
          this.dirtyIds = [];
          var indices = [];
          if (options && options.indices) {
            if (Object.prototype.toString.call(options.indices) === '[object Array]') {
              indices = options.indices;
            } else if (typeof options.indices === 'string') {
              indices = [options.indices];
            } else {
              throw new TypeError('Indices needs to be a string or an array of strings');
            }
          }
          for (var idx = 0; idx < indices.length; idx++) {
            this.ensureIndex(indices[idx]);
          }
          function observerCallback(changes) {
            var changedObjects = typeof Set === 'function' ? /* @__PURE__ */ new Set() : [];
            if (!changedObjects.add)
              changedObjects.add = function(object) {
                if (this.indexOf(object) === -1) this.push(object);
                return this;
              };
            changes.forEach(function(change) {
              changedObjects.add(change.object);
            });
            changedObjects.forEach(function(object) {
              if (!hasOwnProperty.call(object, '$loki')) return self.removeAutoUpdateObserver(object);
              try {
                self.update(object);
              } catch (err) {}
            });
          }
          this.observerCallback = observerCallback;
          function getChangeDelta(obj, old) {
            if (old) {
              return getObjectDelta(old, obj);
            } else {
              return JSON.parse(JSON.stringify(obj));
            }
          }
          this.getChangeDelta = getChangeDelta;
          function getObjectDelta(oldObject, newObject) {
            var propertyNames = newObject !== null && typeof newObject === 'object' ? Object.keys(newObject) : null;
            if (
              propertyNames &&
              propertyNames.length &&
              ['string', 'boolean', 'number'].indexOf(typeof newObject) < 0
            ) {
              var delta = {};
              for (var i = 0; i < propertyNames.length; i++) {
                var propertyName = propertyNames[i];
                if (newObject.hasOwnProperty(propertyName)) {
                  if (
                    !oldObject.hasOwnProperty(propertyName) ||
                    self.uniqueNames.indexOf(propertyName) >= 0 ||
                    propertyName == '$loki' ||
                    propertyName == 'meta'
                  ) {
                    delta[propertyName] = newObject[propertyName];
                  } else {
                    var propertyDelta = getObjectDelta(oldObject[propertyName], newObject[propertyName]);
                    if (typeof propertyDelta !== 'undefined' && propertyDelta != {}) {
                      delta[propertyName] = propertyDelta;
                    }
                  }
                }
              }
              return Object.keys(delta).length === 0 ? void 0 : delta;
            } else {
              return oldObject === newObject ? void 0 : newObject;
            }
          }
          this.getObjectDelta = getObjectDelta;
          function flushChanges() {
            self.changes = [];
          }
          this.getChanges = function() {
            return self.changes;
          };
          this.flushChanges = flushChanges;
          this.setChangesApi = function(enabled) {
            self.disableChangesApi = !enabled;
            if (!enabled) {
              self.disableDeltaChangesApi = false;
            }
          };
          this.on('delete', function deleteCallback(obj) {
            if (!self.disableChangesApi) {
              self.createChange(self.name, 'R', obj);
            }
          });
          this.on('warning', function(warning) {
            self.lokiConsoleWrapper.warn(warning);
          });
          flushChanges();
        }
        Collection.prototype = new LokiEventEmitter();
        Collection.prototype.contructor = Collection;
        Collection.prototype.createChange = function(name, op, obj, old) {
          this.changes.push({
            name,
            operation: op,
            obj:
              op == 'U' && !this.disableDeltaChangesApi
                ? this.getChangeDelta(obj, old)
                : JSON.parse(JSON.stringify(obj))
          });
        };
        Collection.prototype.insertMeta = function(obj) {
          var len, idx;
          if (this.disableMeta || !obj) {
            return;
          }
          if (Array.isArray(obj)) {
            len = obj.length;
            for (idx = 0; idx < len; idx++) {
              if (!obj[idx].hasOwnProperty('meta')) {
                obj[idx].meta = {};
              }
              obj[idx].meta.created = new Date().getTime();
              obj[idx].meta.revision = 0;
            }
            return;
          }
          if (!obj.meta) {
            obj.meta = {};
          }
          obj.meta.created = new Date().getTime();
          obj.meta.revision = 0;
        };
        Collection.prototype.updateMeta = function(obj) {
          if (this.disableMeta || !obj) {
            return obj;
          }
          if (!this.disableFreeze) {
            obj = unFreeze(obj);
            obj.meta = unFreeze(obj.meta);
          }
          obj.meta.updated = new Date().getTime();
          obj.meta.revision += 1;
          return obj;
        };
        Collection.prototype.createInsertChange = function(obj) {
          this.createChange(this.name, 'I', obj);
        };
        Collection.prototype.createUpdateChange = function(obj, old) {
          this.createChange(this.name, 'U', obj, old);
        };
        Collection.prototype.insertMetaWithChange = function(obj) {
          this.insertMeta(obj);
          this.createInsertChange(obj);
        };
        Collection.prototype.updateMetaWithChange = function(obj, old, objFrozen) {
          obj = this.updateMeta(obj, objFrozen);
          this.createUpdateChange(obj, old);
          return obj;
        };
        Collection.prototype.lokiConsoleWrapper = {
          log: function() {},
          warn: function() {},
          error: function() {}
        };
        Collection.prototype.addAutoUpdateObserver = function(object) {
          if (!this.autoupdate || typeof Object.observe !== 'function') return;
          Object.observe(object, this.observerCallback, ['add', 'update', 'delete', 'reconfigure', 'setPrototype']);
        };
        Collection.prototype.removeAutoUpdateObserver = function(object) {
          if (!this.autoupdate || typeof Object.observe !== 'function') return;
          Object.unobserve(object, this.observerCallback);
        };
        Collection.prototype.addTransform = function(name, transform) {
          if (this.transforms.hasOwnProperty(name)) {
            throw new Error('a transform by that name already exists');
          }
          this.transforms[name] = transform;
        };
        Collection.prototype.getTransform = function(name) {
          return this.transforms[name];
        };
        Collection.prototype.setTransform = function(name, transform) {
          this.transforms[name] = transform;
        };
        Collection.prototype.removeTransform = function(name) {
          delete this.transforms[name];
        };
        Collection.prototype.byExample = function(template) {
          var k, obj, query;
          query = [];
          for (k in template) {
            if (!template.hasOwnProperty(k)) continue;
            query.push(((obj = {}), (obj[k] = template[k]), obj));
          }
          return {
            $and: query
          };
        };
        Collection.prototype.findObject = function(template) {
          return this.findOne(this.byExample(template));
        };
        Collection.prototype.findObjects = function(template) {
          return this.find(this.byExample(template));
        };
        Collection.prototype.ttlDaemonFuncGen = function() {
          var collection = this;
          var age = this.ttl.age;
          return function ttlDaemon() {
            var now = Date.now();
            var toRemove = collection.chain().where(function daemonFilter(member) {
              var timestamp = member.meta.updated || member.meta.created;
              var diff = now - timestamp;
              return age < diff;
            });
            toRemove.remove();
          };
        };
        Collection.prototype.setTTL = function(age, interval) {
          if (age < 0) {
            clearInterval(this.ttl.daemon);
          } else {
            this.ttl.age = age;
            this.ttl.ttlInterval = interval;
            this.ttl.daemon = setInterval(this.ttlDaemonFuncGen(), interval);
          }
        };
        Collection.prototype.prepareFullDocIndex = function() {
          var len = this.data.length;
          var indexes = new Array(len);
          for (var i = 0; i < len; i += 1) {
            indexes[i] = i;
          }
          return indexes;
        };
        Collection.prototype.configureOptions = function(options) {
          options = options || {};
          if (options.hasOwnProperty('adaptiveBinaryIndices')) {
            this.adaptiveBinaryIndices = options.adaptiveBinaryIndices;
            if (this.adaptiveBinaryIndices) {
              this.ensureAllIndexes();
            }
          }
        };
        Collection.prototype.ensureIndex = function(property, force) {
          if (typeof force === 'undefined') {
            force = false;
          }
          if (property === null || property === void 0) {
            throw new Error('Attempting to set index without an associated property');
          }
          if (this.binaryIndices[property] && !force) {
            if (!this.binaryIndices[property].dirty) return;
          }
          if (this.adaptiveBinaryIndices === true && this.binaryIndices.hasOwnProperty(property) && !force) {
            return;
          }
          var index = {
            name: property,
            dirty: true,
            values: this.prepareFullDocIndex()
          };
          this.binaryIndices[property] = index;
          var wrappedComparer = (function(prop, data) {
            var val1, val2;
            var propPath = ~prop.indexOf('.') ? prop.split('.') : false;
            return function(a, b) {
              if (propPath) {
                val1 = Utils.getIn(data[a], propPath, true);
                val2 = Utils.getIn(data[b], propPath, true);
              } else {
                val1 = data[a][prop];
                val2 = data[b][prop];
              }
              if (val1 !== val2) {
                if (Comparators.lt(val1, val2, false)) return -1;
                if (Comparators.gt(val1, val2, false)) return 1;
              }
              return 0;
            };
          })(property, this.data);
          index.values.sort(wrappedComparer);
          index.dirty = false;
          this.dirty = true;
        };
        Collection.prototype.checkAllIndexes = function(options) {
          var key,
            bIndices = this.binaryIndices;
          var results = [],
            result;
          for (key in bIndices) {
            if (hasOwnProperty.call(bIndices, key)) {
              result = this.checkIndex(key, options);
              if (!result) {
                results.push(key);
              }
            }
          }
          return results;
        };
        Collection.prototype.checkIndex = function(property, options) {
          options = options || {};
          if (options.randomSamplingFactor && options.randomSampling !== false) {
            options.randomSampling = true;
          }
          options.randomSamplingFactor = options.randomSamplingFactor || 0.1;
          if (options.randomSamplingFactor < 0 || options.randomSamplingFactor > 1) {
            options.randomSamplingFactor = 0.1;
          }
          var valid = true,
            idx,
            iter,
            pos,
            len,
            biv;
          if (!this.binaryIndices.hasOwnProperty(property)) {
            throw new Error('called checkIndex on property without an index: ' + property);
          }
          if (!this.adaptiveBinaryIndices) {
            this.ensureIndex(property);
          }
          biv = this.binaryIndices[property].values;
          len = biv.length;
          if (len !== this.data.length) {
            if (options.repair) {
              this.ensureIndex(property, true);
            }
            return false;
          }
          if (len === 0) {
            return true;
          }
          var usingDotNotation = property.indexOf('.') !== -1;
          if (len === 1) {
            valid = biv[0] === 0;
          } else {
            if (options.randomSampling) {
              if (
                !LokiOps.$lte(
                  Utils.getIn(this.data[biv[0]], property, usingDotNotation),
                  Utils.getIn(this.data[biv[1]], property, usingDotNotation)
                )
              ) {
                valid = false;
              }
              if (
                !LokiOps.$lte(
                  Utils.getIn(this.data[biv[len - 2]], property, usingDotNotation),
                  Utils.getIn(this.data[biv[len - 1]], property, usingDotNotation)
                )
              ) {
                valid = false;
              }
              if (valid) {
                iter = Math.floor((len - 1) * options.randomSamplingFactor);
                for (idx = 0; idx < iter - 1; idx++) {
                  pos = Math.floor(Math.random() * (len - 1));
                  if (
                    !LokiOps.$lte(
                      Utils.getIn(this.data[biv[pos]], property, usingDotNotation),
                      Utils.getIn(this.data[biv[pos + 1]], property, usingDotNotation)
                    )
                  ) {
                    valid = false;
                    break;
                  }
                }
              }
            } else {
              for (idx = 0; idx < len - 1; idx++) {
                if (
                  !LokiOps.$lte(
                    Utils.getIn(this.data[biv[idx]], property, usingDotNotation),
                    Utils.getIn(this.data[biv[idx + 1]], property, usingDotNotation)
                  )
                ) {
                  valid = false;
                  break;
                }
              }
            }
          }
          if (!valid && options.repair) {
            this.ensureIndex(property, true);
          }
          return valid;
        };
        Collection.prototype.getBinaryIndexValues = function(property) {
          var idx,
            idxvals = this.binaryIndices[property].values;
          var result = [];
          for (idx = 0; idx < idxvals.length; idx++) {
            result.push(Utils.getIn(this.data[idxvals[idx]], property, true));
          }
          return result;
        };
        Collection.prototype.getUniqueIndex = function(field, force) {
          var index = this.constraints.unique[field];
          if (!index && force) {
            return this.ensureUniqueIndex(field);
          }
          return index;
        };
        Collection.prototype.ensureUniqueIndex = function(field) {
          var index = this.constraints.unique[field];
          if (!index) {
            if (this.uniqueNames.indexOf(field) == -1) {
              this.uniqueNames.push(field);
            }
          }
          this.constraints.unique[field] = index = new UniqueIndex(field);
          this.data.forEach(function(obj) {
            index.set(obj);
          });
          return index;
        };
        Collection.prototype.ensureAllIndexes = function(force) {
          var key,
            bIndices = this.binaryIndices;
          for (key in bIndices) {
            if (hasOwnProperty.call(bIndices, key)) {
              this.ensureIndex(key, force);
            }
          }
        };
        Collection.prototype.flagBinaryIndexesDirty = function() {
          var key,
            bIndices = this.binaryIndices;
          for (key in bIndices) {
            if (hasOwnProperty.call(bIndices, key)) {
              bIndices[key].dirty = true;
            }
          }
        };
        Collection.prototype.flagBinaryIndexDirty = function(index) {
          if (this.binaryIndices[index]) this.binaryIndices[index].dirty = true;
        };
        Collection.prototype.count = function(query) {
          if (!query) {
            return this.data.length;
          }
          return this.chain().find(query).filteredrows.length;
        };
        Collection.prototype.ensureId = function() {
          if (this.idIndex) {
            return;
          }
          var data = this.data,
            i = 0;
          var len = data.length;
          var index = new Array(len);
          for (i; i < len; i++) {
            index[i] = data[i].$loki;
          }
          this.idIndex = index;
        };
        Collection.prototype.ensureIdAsync = function(callback) {
          this.async(function() {
            this.ensureId();
          }, callback);
        };
        Collection.prototype.addDynamicView = function(name, options) {
          var dv = new DynamicView(this, name, options);
          this.DynamicViews.push(dv);
          return dv;
        };
        Collection.prototype.removeDynamicView = function(name) {
          this.DynamicViews = this.DynamicViews.filter(function(dv) {
            return dv.name !== name;
          });
        };
        Collection.prototype.getDynamicView = function(name) {
          for (var idx = 0; idx < this.DynamicViews.length; idx++) {
            if (this.DynamicViews[idx].name === name) {
              return this.DynamicViews[idx];
            }
          }
          return null;
        };
        Collection.prototype.findAndUpdate = function(filterObject, updateFunction) {
          if (typeof filterObject === 'function') {
            this.updateWhere(filterObject, updateFunction);
          } else {
            this.chain()
              .find(filterObject)
              .update(updateFunction);
          }
        };
        Collection.prototype.findAndRemove = function(filterObject) {
          this.chain()
            .find(filterObject)
            .remove();
        };
        Collection.prototype.insert = function(doc, overrideAdaptiveIndices) {
          if (!Array.isArray(doc)) {
            return this.insertOne(doc);
          }
          var obj;
          var results = [];
          var adaptiveBatchOverride =
            overrideAdaptiveIndices &&
            !this.cloneObjects &&
            this.adaptiveBinaryIndices &&
            Object.keys(this.binaryIndices).length > 0;
          if (adaptiveBatchOverride) {
            this.adaptiveBinaryIndices = false;
          }
          try {
            this.emit('pre-insert', doc);
            for (var i = 0, len = doc.length; i < len; i++) {
              obj = this.insertOne(doc[i], true);
              if (!obj) {
                return void 0;
              }
              results.push(obj);
            }
          } finally {
            if (adaptiveBatchOverride) {
              this.ensureAllIndexes();
              this.adaptiveBinaryIndices = true;
            }
          }
          this.emit('insert', results);
          results = this.cloneObjects ? clone(results, this.cloneMethod) : results;
          return results.length === 1 ? results[0] : results;
        };
        Collection.prototype.insertOne = function(doc, bulkInsert) {
          var err = null;
          var returnObj;
          if (typeof doc !== 'object') {
            err = new TypeError('Document needs to be an object');
          } else if (doc === null) {
            err = new TypeError('Object cannot be null');
          }
          if (err !== null) {
            this.emit('error', err);
            throw err;
          }
          var obj = this.cloneObjects ? clone(doc, this.cloneMethod) : doc;
          if (!this.disableFreeze) {
            obj = unFreeze(obj);
          }
          if (!this.disableMeta) {
            if (typeof obj.meta === 'undefined') {
              obj.meta = {
                revision: 0,
                created: 0
              };
            } else if (!this.disableFreeze) {
              obj.meta = unFreeze(obj.meta);
            }
          }
          if (!bulkInsert) {
            this.emit('pre-insert', obj);
          }
          if (!this.add(obj)) {
            return void 0;
          }
          if (this.disableChangesApi) {
            this.insertMeta(obj);
          } else {
            this.insertMetaWithChange(obj);
          }
          if (!this.disableFreeze) {
            deepFreeze(obj);
          }
          returnObj = this.cloneObjects ? clone(obj, this.cloneMethod) : obj;
          if (!bulkInsert) {
            this.emit('insert', returnObj);
          }
          this.addAutoUpdateObserver(returnObj);
          return returnObj;
        };
        Collection.prototype.clear = function(options) {
          var self = this;
          options = options || {};
          this.data = [];
          this.idIndex = null;
          this.cachedIndex = null;
          this.cachedBinaryIndex = null;
          this.cachedData = null;
          this.maxId = 0;
          this.DynamicViews = [];
          this.dirty = true;
          this.constraints = {
            unique: {},
            exact: {}
          };
          if (options.removeIndices === true) {
            this.binaryIndices = {};
            this.uniqueNames = [];
          } else {
            var keys = Object.keys(this.binaryIndices);
            keys.forEach(function(biname) {
              self.binaryIndices[biname].dirty = false;
              self.binaryIndices[biname].values = [];
            });
          }
        };
        Collection.prototype.update = function(doc) {
          var adaptiveBatchOverride, k, len;
          if (Array.isArray(doc)) {
            len = doc.length;
            adaptiveBatchOverride =
              !this.cloneObjects && this.adaptiveBinaryIndices && Object.keys(this.binaryIndices).length > 0;
            if (adaptiveBatchOverride) {
              this.adaptiveBinaryIndices = false;
            }
            try {
              for (k = 0; k < len; k += 1) {
                this.update(doc[k]);
              }
            } finally {
              if (adaptiveBatchOverride) {
                this.ensureAllIndexes();
                this.adaptiveBinaryIndices = true;
              }
            }
            return;
          }
          if (!hasOwnProperty.call(doc, '$loki')) {
            throw new Error(
              'Trying to update unsynced document. Please save the document first by using insert() or addMany()'
            );
          }
          try {
            this.startTransaction();
            var arr = this.get(doc.$loki, true),
              oldInternal,
              newInternal,
              position,
              self = this;
            if (!arr) {
              throw new Error('Trying to update a document not in collection.');
            }
            oldInternal = arr[0];
            position = arr[1];
            newInternal =
              this.cloneObjects || (!this.disableDeltaChangesApi && this.disableFreeze)
                ? clone(doc, this.cloneMethod)
                : doc;
            this.emit('pre-update', doc);
            this.uniqueNames.forEach(function(key2) {
              self.getUniqueIndex(key2, true).update(oldInternal, newInternal);
            });
            this.data[position] = newInternal;
            if (newInternal !== doc) {
              this.addAutoUpdateObserver(doc);
            }
            for (var idx = 0; idx < this.DynamicViews.length; idx++) {
              this.DynamicViews[idx].evaluateDocument(position, false);
            }
            var key;
            if (this.adaptiveBinaryIndices) {
              var bIndices = this.binaryIndices;
              for (key in bIndices) {
                this.adaptiveBinaryIndexUpdate(position, key);
              }
            } else {
              this.flagBinaryIndexesDirty();
            }
            this.idIndex[position] = newInternal.$loki;
            if (this.isIncremental) {
              this.dirtyIds.push(newInternal.$loki);
            }
            this.commit();
            this.dirty = true;
            if (this.disableChangesApi) {
              newInternal = this.updateMeta(newInternal);
            } else {
              newInternal = this.updateMetaWithChange(newInternal, oldInternal);
            }
            if (!this.disableFreeze) {
              deepFreeze(newInternal);
            }
            var returnObj;
            if (this.cloneObjects) {
              returnObj = clone(newInternal, this.cloneMethod);
            } else {
              returnObj = newInternal;
            }
            this.emit('update', returnObj, oldInternal);
            return returnObj;
          } catch (err) {
            this.rollback();
            this.lokiConsoleWrapper.error(err.message);
            this.emit('error', err);
            throw err;
          }
        };
        Collection.prototype.add = function(obj) {
          if ('object' !== typeof obj) {
            throw new TypeError('Object being added needs to be an object');
          }
          if (typeof obj.$loki !== 'undefined') {
            throw new Error('Document is already in collection, please use update()');
          }
          try {
            this.startTransaction();
            this.maxId++;
            if (isNaN(this.maxId)) {
              this.maxId = this.data[this.data.length - 1].$loki + 1;
            }
            var newId = this.maxId;
            obj.$loki = newId;
            if (!this.disableMeta) {
              obj.meta.version = 0;
            }
            for (var i = 0, len = this.uniqueNames.length; i < len; i++) {
              this.getUniqueIndex(this.uniqueNames[i], true).set(obj);
            }
            if (this.idIndex) {
              this.idIndex.push(newId);
            }
            if (this.isIncremental) {
              this.dirtyIds.push(newId);
            }
            this.data.push(obj);
            var addedPos = this.data.length - 1;
            var dvlen = this.DynamicViews.length;
            for (i = 0; i < dvlen; i++) {
              this.DynamicViews[i].evaluateDocument(addedPos, true);
            }
            if (this.adaptiveBinaryIndices) {
              var bIndices = this.binaryIndices;
              for (var key in bIndices) {
                this.adaptiveBinaryIndexInsert(addedPos, key);
              }
            } else {
              this.flagBinaryIndexesDirty();
            }
            this.commit();
            this.dirty = true;
            return this.cloneObjects ? clone(obj, this.cloneMethod) : obj;
          } catch (err) {
            this.rollback();
            this.lokiConsoleWrapper.error(err.message);
            this.emit('error', err);
            throw err;
          }
        };
        Collection.prototype.updateWhere = function(filterFunction, updateFunction) {
          var results = this.where(filterFunction),
            i = 0,
            obj;
          try {
            for (i; i < results.length; i++) {
              obj = updateFunction(results[i]);
              this.update(obj);
            }
          } catch (err) {
            this.rollback();
            this.lokiConsoleWrapper.error(err.message);
          }
        };
        Collection.prototype.removeWhere = function(query) {
          var list;
          if (typeof query === 'function') {
            list = this.data.filter(query);
            this.remove(list);
          } else {
            this.chain()
              .find(query)
              .remove();
          }
        };
        Collection.prototype.removeDataOnly = function() {
          this.remove(this.data.slice());
        };
        Collection.prototype.removeBatchByPositions = function(positions) {
          var len = positions.length;
          var xo = {};
          var dlen, didx, idx;
          var bic = Object.keys(this.binaryIndices).length;
          var uic = Object.keys(this.constraints.unique).length;
          var adaptiveOverride = this.adaptiveBinaryIndices && Object.keys(this.binaryIndices).length > 0;
          var doc,
            self = this;
          try {
            this.startTransaction();
            this.ensureId();
            for (idx = 0; idx < len; idx++) {
              xo[this.idIndex[positions[idx]]] = true;
            }
            dlen = this.DynamicViews.length;
            if (dlen > 0 || bic > 0 || uic > 0) {
              if (dlen > 0) {
                for (didx = 0; didx < dlen; didx++) {
                  this.DynamicViews[didx].removeDocument(positions);
                }
              }
              if (this.adaptiveBinaryIndices && !adaptiveOverride) {
                var key,
                  bIndices = this.binaryIndices;
                for (key in bIndices) {
                  this.adaptiveBinaryIndexRemove(positions, key);
                }
              } else {
                this.flagBinaryIndexesDirty();
              }
              if (uic) {
                this.uniqueNames.forEach(function(key2) {
                  var index = self.getUniqueIndex(key2);
                  if (index) {
                    for (idx = 0; idx < len; idx++) {
                      doc = self.data[positions[idx]];
                      if (doc[key2] !== null && doc[key2] !== void 0) {
                        index.remove(doc[key2]);
                      }
                    }
                  }
                });
              }
            }
            if (!this.disableChangesApi || this.events.delete.length > 1) {
              for (idx = 0; idx < len; idx++) {
                this.emit('delete', this.data[positions[idx]]);
              }
            }
            this.data = this.data.filter(function(obj) {
              return !xo[obj.$loki];
            });
            if (this.isIncremental) {
              for (idx = 0; idx < len; idx++) {
                this.dirtyIds.push(this.idIndex[positions[idx]]);
              }
            }
            this.idIndex = this.idIndex.filter(function(id) {
              return !xo[id];
            });
            if (this.adaptiveBinaryIndices && adaptiveOverride) {
              this.adaptiveBinaryIndices = false;
              this.ensureAllIndexes(true);
              this.adaptiveBinaryIndices = true;
            }
            this.commit();
            this.dirty = true;
          } catch (err) {
            this.rollback();
            if (adaptiveOverride) {
              this.adaptiveBinaryIndices = true;
            }
            this.lokiConsoleWrapper.error(err.message);
            this.emit('error', err);
            return null;
          }
        };
        Collection.prototype.removeBatch = function(batch) {
          var len = batch.length,
            dlen = this.data.length,
            idx;
          var xlt = {};
          var posx = [];
          for (idx = 0; idx < dlen; idx++) {
            xlt[this.data[idx].$loki] = idx;
          }
          for (idx = 0; idx < len; idx++) {
            if (typeof batch[idx] === 'object') {
              posx.push(xlt[batch[idx].$loki]);
            } else {
              posx.push(xlt[batch[idx]]);
            }
          }
          this.removeBatchByPositions(posx);
        };
        Collection.prototype.remove = function(doc) {
          var frozen;
          if (typeof doc === 'number') {
            doc = this.get(doc);
          }
          if ('object' !== typeof doc) {
            throw new Error('Parameter is not an object');
          }
          if (Array.isArray(doc)) {
            this.removeBatch(doc);
            return;
          }
          if (!hasOwnProperty.call(doc, '$loki')) {
            throw new Error('Object is not a document stored in the collection');
          }
          try {
            this.startTransaction();
            var arr = this.get(doc.$loki, true),
              position = arr[1];
            var self = this;
            this.uniqueNames.forEach(function(key2) {
              if (doc[key2] !== null && typeof doc[key2] !== 'undefined') {
                var index = self.getUniqueIndex(key2);
                if (index) {
                  index.remove(doc[key2]);
                }
              }
            });
            for (var idx = 0; idx < this.DynamicViews.length; idx++) {
              this.DynamicViews[idx].removeDocument(position);
            }
            if (this.adaptiveBinaryIndices) {
              var key,
                bIndices = this.binaryIndices;
              for (key in bIndices) {
                this.adaptiveBinaryIndexRemove(position, key);
              }
            } else {
              this.flagBinaryIndexesDirty();
            }
            this.data.splice(position, 1);
            this.removeAutoUpdateObserver(doc);
            this.idIndex.splice(position, 1);
            if (this.isIncremental) {
              this.dirtyIds.push(doc.$loki);
            }
            this.commit();
            this.dirty = true;
            this.emit('delete', arr[0]);
            if (!this.disableFreeze) {
              doc = unFreeze(doc);
            }
            delete doc.$loki;
            delete doc.meta;
            if (!this.disableFreeze) {
              freeze(doc);
            }
            return doc;
          } catch (err) {
            this.rollback();
            this.lokiConsoleWrapper.error(err.message);
            this.emit('error', err);
            return null;
          }
        };
        Collection.prototype.get = function(id, returnPosition) {
          if (!this.idIndex) {
            this.ensureId();
          }
          var retpos = returnPosition || false,
            data = this.idIndex,
            max = data.length - 1,
            min = 0,
            mid = (min + max) >> 1;
          id = typeof id === 'number' ? id : parseInt(id, 10);
          if (isNaN(id)) {
            throw new TypeError('Passed id is not an integer');
          }
          while (data[min] < data[max]) {
            mid = (min + max) >> 1;
            if (data[mid] < id) {
              min = mid + 1;
            } else {
              max = mid;
            }
          }
          if (max === min && data[min] === id) {
            if (retpos) {
              return [this.data[min], min];
            }
            return this.data[min];
          }
          return null;
        };
        Collection.prototype.getBinaryIndexPosition = function(dataPosition, binaryIndexName) {
          var val = Utils.getIn(this.data[dataPosition], binaryIndexName, true);
          var index = this.binaryIndices[binaryIndexName].values;
          var range = this.calculateRange('$eq', binaryIndexName, val);
          if (range[0] === 0 && range[1] === -1) {
            return null;
          }
          var min = range[0];
          var max = range[1];
          for (var idx = min; idx <= max; idx++) {
            if (index[idx] === dataPosition) return idx;
          }
          return null;
        };
        Collection.prototype.adaptiveBinaryIndexInsert = function(dataPosition, binaryIndexName) {
          var usingDotNotation = binaryIndexName.indexOf('.') !== -1;
          var index = this.binaryIndices[binaryIndexName].values;
          var val = Utils.getIn(this.data[dataPosition], binaryIndexName, usingDotNotation);
          if (this.serializableIndices === true && val instanceof Date) {
            this.data[dataPosition][binaryIndexName] = val.getTime();
            val = Utils.getIn(this.data[dataPosition], binaryIndexName);
          }
          var idxPos = index.length === 0 ? 0 : this.calculateRangeStart(binaryIndexName, val, true, usingDotNotation);
          this.binaryIndices[binaryIndexName].values.splice(idxPos, 0, dataPosition);
        };
        Collection.prototype.adaptiveBinaryIndexUpdate = function(dataPosition, binaryIndexName) {
          var idxPos,
            index = this.binaryIndices[binaryIndexName].values,
            len = index.length;
          for (idxPos = 0; idxPos < len; idxPos++) {
            if (index[idxPos] === dataPosition) break;
          }
          this.binaryIndices[binaryIndexName].values.splice(idxPos, 1);
          this.adaptiveBinaryIndexInsert(dataPosition, binaryIndexName);
        };
        Collection.prototype.adaptiveBinaryIndexRemove = function(dataPosition, binaryIndexName, removedFromIndexOnly) {
          var bi = this.binaryIndices[binaryIndexName];
          var len,
            idx,
            rmidx,
            rmlen,
            rxo = {};
          var curr, shift, idxPos;
          if (Array.isArray(dataPosition)) {
            rmlen = dataPosition.length;
            if (rmlen === 1) {
              dataPosition = dataPosition[0];
            } else {
              for (rmidx = 0; rmidx < rmlen; rmidx++) {
                rxo[dataPosition[rmidx]] = true;
              }
              bi.values = bi.values.filter(function(di) {
                return !rxo[di];
              });
              if (removedFromIndexOnly === true) {
                return;
              }
              var sortedPositions = dataPosition.slice();
              sortedPositions.sort(function(a, b) {
                return a - b;
              });
              len = bi.values.length;
              for (idx = 0; idx < len; idx++) {
                curr = bi.values[idx];
                shift = 0;
                for (rmidx = 0; rmidx < rmlen && curr > sortedPositions[rmidx]; rmidx++) {
                  shift++;
                }
                bi.values[idx] -= shift;
              }
              return;
            }
          }
          idxPos = this.getBinaryIndexPosition(dataPosition, binaryIndexName);
          if (idxPos === null) {
            return null;
          }
          bi.values.splice(idxPos, 1);
          if (removedFromIndexOnly === true) {
            return;
          }
          len = bi.values.length;
          for (idx = 0; idx < len; idx++) {
            if (bi.values[idx] > dataPosition) {
              bi.values[idx]--;
            }
          }
        };
        Collection.prototype.calculateRangeStart = function(prop, val, adaptive, usingDotNotation) {
          var rcd = this.data;
          var index = this.binaryIndices[prop].values;
          var min = 0;
          var max = index.length - 1;
          var mid = 0;
          if (index.length === 0) {
            return -1;
          }
          var minVal = Utils.getIn(rcd[index[min]], prop, usingDotNotation);
          var maxVal = Utils.getIn(rcd[index[max]], prop, usingDotNotation);
          while (min < max) {
            mid = (min + max) >> 1;
            if (Comparators.lt(Utils.getIn(rcd[index[mid]], prop, usingDotNotation), val, false)) {
              min = mid + 1;
            } else {
              max = mid;
            }
          }
          var lbound = min;
          if (Comparators.aeq(val, Utils.getIn(rcd[index[lbound]], prop, usingDotNotation))) {
            return lbound;
          }
          if (Comparators.lt(val, Utils.getIn(rcd[index[lbound]], prop, usingDotNotation), false)) {
            return adaptive ? lbound : lbound - 1;
          }
          return adaptive ? lbound + 1 : lbound;
        };
        Collection.prototype.calculateRangeEnd = function(prop, val, usingDotNotation) {
          var rcd = this.data;
          var index = this.binaryIndices[prop].values;
          var min = 0;
          var max = index.length - 1;
          var mid = 0;
          if (index.length === 0) {
            return -1;
          }
          var minVal = Utils.getIn(rcd[index[min]], prop, usingDotNotation);
          var maxVal = Utils.getIn(rcd[index[max]], prop, usingDotNotation);
          while (min < max) {
            mid = (min + max) >> 1;
            if (Comparators.lt(val, Utils.getIn(rcd[index[mid]], prop, usingDotNotation), false)) {
              max = mid;
            } else {
              min = mid + 1;
            }
          }
          var ubound = max;
          if (Comparators.aeq(val, Utils.getIn(rcd[index[ubound]], prop, usingDotNotation))) {
            return ubound;
          }
          if (Comparators.gt(val, Utils.getIn(rcd[index[ubound]], prop, usingDotNotation), false)) {
            return ubound + 1;
          }
          if (Comparators.aeq(val, Utils.getIn(rcd[index[ubound - 1]], prop, usingDotNotation))) {
            return ubound - 1;
          }
          return ubound;
        };
        Collection.prototype.calculateRange = function(op, prop, val) {
          var rcd = this.data;
          var index = this.binaryIndices[prop].values;
          var min = 0;
          var max = index.length - 1;
          var mid = 0;
          var lbound, lval;
          var ubound, uval;
          if (rcd.length === 0) {
            return [0, -1];
          }
          var usingDotNotation = prop.indexOf('.') !== -1;
          var minVal = Utils.getIn(rcd[index[min]], prop, usingDotNotation);
          var maxVal = Utils.getIn(rcd[index[max]], prop, usingDotNotation);
          switch (op) {
            case '$eq':
            case '$aeq':
              if (Comparators.lt(val, minVal, false) || Comparators.gt(val, maxVal, false)) {
                return [0, -1];
              }
              break;
            case '$dteq':
              if (Comparators.lt(val, minVal, false) || Comparators.gt(val, maxVal, false)) {
                return [0, -1];
              }
              break;
            case '$gt':
              if (Comparators.gt(val, maxVal, true)) {
                return [0, -1];
              }
              if (Comparators.gt(minVal, val, false)) {
                return [min, max];
              }
              break;
            case '$gte':
              if (Comparators.gt(val, maxVal, false)) {
                return [0, -1];
              }
              if (Comparators.gt(minVal, val, true)) {
                return [min, max];
              }
              break;
            case '$lt':
              if (Comparators.lt(val, minVal, true)) {
                return [0, -1];
              }
              if (Comparators.lt(maxVal, val, false)) {
                return [min, max];
              }
              break;
            case '$lte':
              if (Comparators.lt(val, minVal, false)) {
                return [0, -1];
              }
              if (Comparators.lt(maxVal, val, true)) {
                return [min, max];
              }
              break;
            case '$between':
              if (Comparators.gt(val[0], maxVal, false)) {
                return [0, -1];
              }
              if (Comparators.lt(val[1], minVal, false)) {
                return [0, -1];
              }
              lbound = this.calculateRangeStart(prop, val[0], false, usingDotNotation);
              ubound = this.calculateRangeEnd(prop, val[1], usingDotNotation);
              if (lbound < 0) lbound++;
              if (ubound > max) ubound--;
              if (!Comparators.gt(Utils.getIn(rcd[index[lbound]], prop, usingDotNotation), val[0], true)) lbound++;
              if (!Comparators.lt(Utils.getIn(rcd[index[ubound]], prop, usingDotNotation), val[1], true)) ubound--;
              if (ubound < lbound) return [0, -1];
              return [lbound, ubound];
            case '$in':
              var idxset = [],
                segResult = [];
              for (var j = 0, len = val.length; j < len; j++) {
                var seg = this.calculateRange('$eq', prop, val[j]);
                for (var i = seg[0]; i <= seg[1]; i++) {
                  if (idxset[i] === void 0) {
                    idxset[i] = true;
                    segResult.push(i);
                  }
                }
              }
              return segResult;
          }
          switch (op) {
            case '$eq':
            case '$aeq':
            case '$dteq':
            case '$gte':
            case '$lt':
              lbound = this.calculateRangeStart(prop, val, false, usingDotNotation);
              lval = Utils.getIn(rcd[index[lbound]], prop, usingDotNotation);
              break;
            default:
              break;
          }
          switch (op) {
            case '$eq':
            case '$aeq':
            case '$dteq':
            case '$lte':
            case '$gt':
              ubound = this.calculateRangeEnd(prop, val, usingDotNotation);
              uval = Utils.getIn(rcd[index[ubound]], prop, usingDotNotation);
              break;
            default:
              break;
          }
          switch (op) {
            case '$eq':
            case '$aeq':
            case '$dteq':
              if (!Comparators.aeq(lval, val)) {
                return [0, -1];
              }
              return [lbound, ubound];
            case '$gt':
              if (!Comparators.aeq(Utils.getIn(rcd[index[ubound]], prop, usingDotNotation), val)) {
                return [ubound, max];
              }
              return [ubound + 1, max];
            case '$gte':
              if (!Comparators.aeq(Utils.getIn(rcd[index[lbound]], prop, usingDotNotation), val)) {
                return [lbound + 1, max];
              }
              return [lbound, max];
            case '$lt':
              if (!Comparators.aeq(Utils.getIn(rcd[index[lbound]], prop, usingDotNotation), val)) {
                return [min, lbound];
              }
              return [min, lbound - 1];
            case '$lte':
              if (!Comparators.aeq(Utils.getIn(rcd[index[ubound]], prop, usingDotNotation), val)) {
                return [min, ubound - 1];
              }
              return [min, ubound];
            default:
              return [0, rcd.length - 1];
          }
        };
        Collection.prototype.by = function(field, value) {
          var self;
          if (value === void 0) {
            self = this;
            return function(value2) {
              return self.by(field, value2);
            };
          }
          var result = this.getUniqueIndex(field, true).get(value);
          if (!this.cloneObjects) {
            return result;
          } else {
            return clone(result, this.cloneMethod);
          }
        };
        Collection.prototype.findOne = function(query) {
          query = query || {};
          var result = this.chain()
            .find(query, true)
            .data();
          if (Array.isArray(result) && result.length === 0) {
            return null;
          } else {
            if (!this.cloneObjects) {
              return result[0];
            } else {
              return clone(result[0], this.cloneMethod);
            }
          }
        };
        Collection.prototype.chain = function(transform, parameters) {
          var rs = new Resultset(this);
          if (typeof transform === 'undefined') {
            return rs;
          }
          return rs.transform(transform, parameters);
        };
        Collection.prototype.find = function(query) {
          return this.chain()
            .find(query)
            .data();
        };
        Collection.prototype.findOneUnindexed = function(prop, value) {
          var i = this.data.length,
            doc;
          while (i--) {
            if (Utils.getIn(this.data[i], prop, true) === value) {
              doc = this.data[i];
              return doc;
            }
          }
          return null;
        };
        Collection.prototype.startTransaction = function() {
          if (this.transactional) {
            this.cachedData = clone(this.data, this.cloneMethod);
            this.cachedIndex = this.idIndex;
            this.cachedBinaryIndex = this.binaryIndices;
            this.cachedDirtyIds = this.dirtyIds;
            for (var idx = 0; idx < this.DynamicViews.length; idx++) {
              this.DynamicViews[idx].startTransaction();
            }
          }
        };
        Collection.prototype.commit = function() {
          if (this.transactional) {
            this.cachedData = null;
            this.cachedIndex = null;
            this.cachedBinaryIndex = null;
            this.cachedDirtyIds = null;
            for (var idx = 0; idx < this.DynamicViews.length; idx++) {
              this.DynamicViews[idx].commit();
            }
          }
        };
        Collection.prototype.rollback = function() {
          if (this.transactional) {
            if (this.cachedData !== null && this.cachedIndex !== null) {
              this.data = this.cachedData;
              this.idIndex = this.cachedIndex;
              this.binaryIndices = this.cachedBinaryIndex;
              this.dirtyIds = this.cachedDirtyIds;
            }
            for (var idx = 0; idx < this.DynamicViews.length; idx++) {
              this.DynamicViews[idx].rollback();
            }
          }
        };
        Collection.prototype.async = function(fun, callback) {
          setTimeout(function() {
            if (typeof fun === 'function') {
              fun();
              callback();
            } else {
              throw new TypeError('Argument passed for async execution is not a function');
            }
          }, 0);
        };
        Collection.prototype.where = function(fun) {
          return this.chain()
            .where(fun)
            .data();
        };
        Collection.prototype.mapReduce = function(mapFunction, reduceFunction) {
          try {
            return reduceFunction(this.data.map(mapFunction));
          } catch (err) {
            throw err;
          }
        };
        Collection.prototype.eqJoin = function(joinData, leftJoinProp, rightJoinProp, mapFun, dataOptions) {
          return new Resultset(this).eqJoin(joinData, leftJoinProp, rightJoinProp, mapFun, dataOptions);
        };
        Collection.prototype.stages = {};
        Collection.prototype.getStage = function(name) {
          if (!this.stages[name]) {
            this.stages[name] = {};
          }
          return this.stages[name];
        };
        Collection.prototype.commitLog = [];
        Collection.prototype.stage = function(stageName, obj) {
          var copy = JSON.parse(JSON.stringify(obj));
          this.getStage(stageName)[obj.$loki] = copy;
          return copy;
        };
        Collection.prototype.commitStage = function(stageName, message) {
          var stage = this.getStage(stageName),
            prop,
            timestamp = new Date().getTime();
          for (prop in stage) {
            this.update(stage[prop]);
            this.commitLog.push({
              timestamp,
              message,
              data: JSON.parse(JSON.stringify(stage[prop]))
            });
          }
          this.stages[stageName] = {};
        };
        Collection.prototype.no_op = function() {
          return;
        };
        Collection.prototype.extract = function(field) {
          var i = 0,
            len = this.data.length,
            isDotNotation = isDeepProperty(field),
            result = [];
          for (i; i < len; i += 1) {
            result.push(deepProperty(this.data[i], field, isDotNotation));
          }
          return result;
        };
        Collection.prototype.max = function(field) {
          return Math.max.apply(null, this.extract(field));
        };
        Collection.prototype.min = function(field) {
          return Math.min.apply(null, this.extract(field));
        };
        Collection.prototype.maxRecord = function(field) {
          var i = 0,
            len = this.data.length,
            deep = isDeepProperty(field),
            result = {
              index: 0,
              value: void 0
            },
            max;
          for (i; i < len; i += 1) {
            if (max !== void 0) {
              if (max < deepProperty(this.data[i], field, deep)) {
                max = deepProperty(this.data[i], field, deep);
                result.index = this.data[i].$loki;
              }
            } else {
              max = deepProperty(this.data[i], field, deep);
              result.index = this.data[i].$loki;
            }
          }
          result.value = max;
          return result;
        };
        Collection.prototype.minRecord = function(field) {
          var i = 0,
            len = this.data.length,
            deep = isDeepProperty(field),
            result = {
              index: 0,
              value: void 0
            },
            min;
          for (i; i < len; i += 1) {
            if (min !== void 0) {
              if (min > deepProperty(this.data[i], field, deep)) {
                min = deepProperty(this.data[i], field, deep);
                result.index = this.data[i].$loki;
              }
            } else {
              min = deepProperty(this.data[i], field, deep);
              result.index = this.data[i].$loki;
            }
          }
          result.value = min;
          return result;
        };
        Collection.prototype.extractNumerical = function(field) {
          return this.extract(field)
            .map(parseBase10)
            .filter(Number)
            .filter(function(n) {
              return !isNaN(n);
            });
        };
        Collection.prototype.avg = function(field) {
          return average(this.extractNumerical(field));
        };
        Collection.prototype.stdDev = function(field) {
          return standardDeviation(this.extractNumerical(field));
        };
        Collection.prototype.mode = function(field) {
          var dict = {},
            data = this.extract(field);
          data.forEach(function(obj) {
            if (dict[obj]) {
              dict[obj] += 1;
            } else {
              dict[obj] = 1;
            }
          });
          var max, prop, mode;
          for (prop in dict) {
            if (max) {
              if (max < dict[prop]) {
                mode = prop;
              }
            } else {
              mode = prop;
              max = dict[prop];
            }
          }
          return mode;
        };
        Collection.prototype.median = function(field) {
          var values = this.extractNumerical(field);
          values.sort(sub);
          var half = Math.floor(values.length / 2);
          if (values.length % 2) {
            return values[half];
          } else {
            return (values[half - 1] + values[half]) / 2;
          }
        };
        function isDeepProperty(field) {
          return field.indexOf('.') !== -1;
        }
        function parseBase10(num) {
          return parseFloat(num, 10);
        }
        function isNotUndefined(obj) {
          return obj !== void 0;
        }
        function add(a, b) {
          return a + b;
        }
        function sub(a, b) {
          return a - b;
        }
        function median(values) {
          values.sort(sub);
          var half = Math.floor(values.length / 2);
          return values.length % 2 ? values[half] : (values[half - 1] + values[half]) / 2;
        }
        function average(array) {
          return array.reduce(add, 0) / array.length;
        }
        function standardDeviation(values) {
          var avg = average(values);
          var squareDiffs = values.map(function(value) {
            var diff = value - avg;
            var sqrDiff = diff * diff;
            return sqrDiff;
          });
          var avgSquareDiff = average(squareDiffs);
          var stdDev = Math.sqrt(avgSquareDiff);
          return stdDev;
        }
        function deepProperty(obj, property, isDeep) {
          if (isDeep === false) {
            return obj[property];
          }
          var pieces = property.split('.'),
            root = obj;
          while (pieces.length > 0) {
            root = root[pieces.shift()];
          }
          return root;
        }
        function binarySearch(array, item, fun) {
          var lo = 0,
            hi = array.length,
            compared,
            mid;
          while (lo < hi) {
            mid = (lo + hi) >> 1;
            compared = fun.apply(null, [item, array[mid]]);
            if (compared === 0) {
              return {
                found: true,
                index: mid
              };
            } else if (compared < 0) {
              hi = mid;
            } else {
              lo = mid + 1;
            }
          }
          return {
            found: false,
            index: hi
          };
        }
        function BSonSort(fun) {
          return function(array, item) {
            return binarySearch(array, item, fun);
          };
        }
        function KeyValueStore() {}
        KeyValueStore.prototype = {
          keys: [],
          values: [],
          sort: function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
          },
          setSort: function(fun) {
            this.bs = new BSonSort(fun);
          },
          bs: function() {
            return new BSonSort(this.sort);
          },
          set: function(key, value) {
            var pos = this.bs(this.keys, key);
            if (pos.found) {
              this.values[pos.index] = value;
            } else {
              this.keys.splice(pos.index, 0, key);
              this.values.splice(pos.index, 0, value);
            }
          },
          get: function(key) {
            return this.values[binarySearch(this.keys, key, this.sort).index];
          }
        };
        function UniqueIndex(uniqueField) {
          this.field = uniqueField;
          this.keyMap = /* @__PURE__ */ Object.create(null);
          this.lokiMap = /* @__PURE__ */ Object.create(null);
        }
        UniqueIndex.prototype.keyMap = {};
        UniqueIndex.prototype.lokiMap = {};
        UniqueIndex.prototype.set = function(obj) {
          var fieldValue = obj[this.field];
          if (fieldValue !== null && typeof fieldValue !== 'undefined') {
            if (this.keyMap[fieldValue]) {
              throw new Error('Duplicate key for property ' + this.field + ': ' + fieldValue);
            } else {
              this.keyMap[fieldValue] = obj;
              this.lokiMap[obj.$loki] = fieldValue;
            }
          }
        };
        UniqueIndex.prototype.get = function(key) {
          return this.keyMap[key];
        };
        UniqueIndex.prototype.byId = function(id) {
          return this.keyMap[this.lokiMap[id]];
        };
        UniqueIndex.prototype.update = function(obj, doc) {
          if (this.lokiMap[obj.$loki] !== doc[this.field]) {
            var old = this.lokiMap[obj.$loki];
            this.set(doc);
            this.keyMap[old] = void 0;
          } else {
            this.keyMap[obj[this.field]] = doc;
          }
        };
        UniqueIndex.prototype.remove = function(key) {
          var obj = this.keyMap[key];
          if (obj !== null && typeof obj !== 'undefined') {
            this.keyMap[key] = void 0;
            this.lokiMap[obj.$loki] = void 0;
          } else {
            throw new Error('Key is not in unique index: ' + this.field);
          }
        };
        UniqueIndex.prototype.clear = function() {
          this.keyMap = /* @__PURE__ */ Object.create(null);
          this.lokiMap = /* @__PURE__ */ Object.create(null);
        };
        function ExactIndex(exactField) {
          this.index = /* @__PURE__ */ Object.create(null);
          this.field = exactField;
        }
        ExactIndex.prototype = {
          set: function add2(key, val) {
            if (this.index[key]) {
              this.index[key].push(val);
            } else {
              this.index[key] = [val];
            }
          },
          remove: function remove(key, val) {
            var idxSet = this.index[key];
            for (var i in idxSet) {
              if (idxSet[i] == val) {
                idxSet.splice(i, 1);
              }
            }
            if (idxSet.length < 1) {
              this.index[key] = void 0;
            }
          },
          get: function get(key) {
            return this.index[key];
          },
          clear: function clear(key) {
            this.index = {};
          }
        };
        function SortedIndex(sortedField) {
          this.field = sortedField;
        }
        SortedIndex.prototype = {
          keys: [],
          values: [],
          sort: function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
          },
          bs: function() {
            return new BSonSort(this.sort);
          },
          setSort: function(fun) {
            this.bs = new BSonSort(fun);
          },
          set: function(key, value) {
            var pos = binarySearch(this.keys, key, this.sort);
            if (pos.found) {
              this.values[pos.index].push(value);
            } else {
              this.keys.splice(pos.index, 0, key);
              this.values.splice(pos.index, 0, [value]);
            }
          },
          get: function(key) {
            var bsr = binarySearch(this.keys, key, this.sort);
            if (bsr.found) {
              return this.values[bsr.index];
            } else {
              return [];
            }
          },
          getLt: function(key) {
            var bsr = binarySearch(this.keys, key, this.sort);
            var pos = bsr.index;
            if (bsr.found) pos--;
            return this.getAll(key, 0, pos);
          },
          getGt: function(key) {
            var bsr = binarySearch(this.keys, key, this.sort);
            var pos = bsr.index;
            if (bsr.found) pos++;
            return this.getAll(key, pos, this.keys.length);
          },
          getAll: function(key, start, end) {
            var results = [];
            for (var i = start; i < end; i++) {
              results = results.concat(this.values[i]);
            }
            return results;
          },
          getPos: function(key) {
            return binarySearch(this.keys, key, this.sort);
          },
          remove: function(key, value) {
            var pos = binarySearch(this.keys, key, this.sort).index;
            var idxSet = this.values[pos];
            for (var i in idxSet) {
              if (idxSet[i] == value) idxSet.splice(i, 1);
            }
            if (idxSet.length < 1) {
              this.keys.splice(pos, 1);
              this.values.splice(pos, 1);
            }
          },
          clear: function() {
            this.keys = [];
            this.values = [];
          }
        };
        Loki.deepFreeze = deepFreeze;
        Loki.freeze = freeze;
        Loki.unFreeze = unFreeze;
        Loki.LokiOps = LokiOps;
        Loki.Collection = Collection;
        Loki.DynamicView = DynamicView;
        Loki.Resultset = Resultset;
        Loki.KeyValueStore = KeyValueStore;
        Loki.LokiMemoryAdapter = LokiMemoryAdapter;
        Loki.LokiPartitioningAdapter = LokiPartitioningAdapter;
        Loki.LokiLocalStorageAdapter = LokiLocalStorageAdapter;
        Loki.LokiFsAdapter = LokiFsAdapter;
        Loki.persistenceAdapters = {
          fs: LokiFsAdapter,
          localStorage: LokiLocalStorageAdapter
        };
        Loki.aeq = aeqHelper;
        Loki.lt = ltHelper;
        Loki.gt = gtHelper;
        Loki.Comparators = Comparators;
        return Loki;
      })();
    });
  }
});

// esm-build-b2151dc180cd55994c3090a3a3076e2296e6b90f-922e429d/mod.js
var __module = __toESM(require_lokijs());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
