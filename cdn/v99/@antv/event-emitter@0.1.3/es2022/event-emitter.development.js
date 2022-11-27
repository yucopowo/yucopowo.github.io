/* esm.sh - esbuild bundle(@antv/event-emitter@0.1.3) es2022 development */
// esm-build-0b82924795f7be6938e8acb3bfc38022035ee4b6-19f45ea4/node_modules/@antv/event-emitter/esm/index.js
var WILDCARD = '*';
var EventEmitter = (function() {
  function EventEmitter2() {
    this._events = {};
  }
  EventEmitter2.prototype.on = function(evt, callback, once) {
    if (!this._events[evt]) {
      this._events[evt] = [];
    }
    this._events[evt].push({
      callback,
      once: !!once
    });
    return this;
  };
  EventEmitter2.prototype.once = function(evt, callback) {
    return this.on(evt, callback, true);
  };
  EventEmitter2.prototype.emit = function(evt) {
    var _this = this;
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    var events = this._events[evt] || [];
    var wildcardEvents = this._events[WILDCARD] || [];
    var doEmit = function(es) {
      var length = es.length;
      for (var i = 0; i < length; i++) {
        if (!es[i]) {
          continue;
        }
        var _a = es[i],
          callback = _a.callback,
          once = _a.once;
        if (once) {
          es.splice(i, 1);
          if (es.length === 0) {
            delete _this._events[evt];
          }
          length--;
          i--;
        }
        callback.apply(_this, args);
      }
    };
    doEmit(events);
    doEmit(wildcardEvents);
  };
  EventEmitter2.prototype.off = function(evt, callback) {
    if (!evt) {
      this._events = {};
    } else {
      if (!callback) {
        delete this._events[evt];
      } else {
        var events = this._events[evt] || [];
        var length_1 = events.length;
        for (var i = 0; i < length_1; i++) {
          if (events[i].callback === callback) {
            events.splice(i, 1);
            length_1--;
            i--;
          }
        }
        if (events.length === 0) {
          delete this._events[evt];
        }
      }
    }
    return this;
  };
  EventEmitter2.prototype.getEvents = function() {
    return this._events;
  };
  return EventEmitter2;
})();
var esm_default = EventEmitter;
export { esm_default as default };
