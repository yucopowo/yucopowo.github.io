/* esm.sh - esbuild bundle(set-harmonic-interval@1.0.1) es2022 development */
// esm-build-fe8e33fe4463b88c668084879a3bf1ee485253f8-9adf8162/node_modules/set-harmonic-interval/lib/index.esm.js
var counter = 0;
var buckets = {};
var setHarmonicInterval = function(fn, ms) {
  var _a;
  var id = counter++;
  if (buckets[ms]) {
    buckets[ms].listeners[id] = fn;
  } else {
    var timer = setInterval(function() {
      var listeners = buckets[ms].listeners;
      var didThrow = false;
      var lastError;
      for (var _i = 0, _a2 = Object.values(listeners); _i < _a2.length; _i++) {
        var listener = _a2[_i];
        try {
          listener();
        } catch (error) {
          didThrow = true;
          lastError = error;
        }
      }
      if (didThrow) throw lastError;
    }, ms);
    buckets[ms] = {
      ms,
      timer,
      listeners: ((_a = {}), (_a[id] = fn), _a)
    };
  }
  return {
    bucket: buckets[ms],
    id
  };
};
var clearHarmonicInterval = function(_a) {
  var bucket = _a.bucket,
    id = _a.id;
  delete bucket.listeners[id];
  var hasListeners = false;
  for (var listener in bucket.listeners) {
    hasListeners = true;
    break;
  }
  if (!hasListeners) {
    clearInterval(bucket.timer);
    delete buckets[bucket.ms];
  }
};
export { clearHarmonicInterval, setHarmonicInterval };
