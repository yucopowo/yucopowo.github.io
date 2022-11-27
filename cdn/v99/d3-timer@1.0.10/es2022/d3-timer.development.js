/* esm.sh - esbuild bundle(d3-timer@1.0.10) es2022 development */
// esm-build-3df4045e635c3b12a8881c9ceaa807b85dd5c4fe-e07da260/node_modules/d3-timer/src/timer.js
var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1e3;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === 'object' && performance.now ? performance : Date;
var setFrame =
  typeof window === 'object' && window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : function(f) {
        setTimeout(f, 17);
      };
function now() {
  return clockNow || (setFrame(clearNow), (clockNow = clock.now() + clockSkew));
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== 'function') throw new TypeError('callback is not a function');
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead,
    e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(),
    delay = now2 - clockLast;
  if (delay > pokeDelay) (clockSkew -= delay), (clockLast = now2);
}
function nap() {
  var t0,
    t1 = taskHead,
    t2,
    time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      (t0 = t1), (t1 = t1._next);
    } else {
      (t2 = t1._next), (t1._next = null);
      t1 = t0 ? (t0._next = t2) : (taskHead = t2);
    }
  }
  taskTail = t0;
  sleep(time);
}
function sleep(time) {
  if (frame) return;
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) (clockLast = clock.now()), (interval = setInterval(poke, pokeDelay));
    (frame = 1), setFrame(wake);
  }
}

// esm-build-3df4045e635c3b12a8881c9ceaa807b85dd5c4fe-e07da260/node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart(
    function(elapsed) {
      t.stop();
      callback(elapsed + delay);
    },
    delay,
    time
  );
  return t;
}

// esm-build-3df4045e635c3b12a8881c9ceaa807b85dd5c4fe-e07da260/node_modules/d3-timer/src/interval.js
function interval_default(callback, delay, time) {
  var t = new Timer(),
    total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  (delay = +delay), (time = time == null ? now() : +time);
  t.restart(
    function tick(elapsed) {
      elapsed += total;
      t.restart(tick, (total += delay), time);
      callback(elapsed);
    },
    delay,
    time
  );
  return t;
}
export { interval_default as interval, now, timeout_default as timeout, timer, timerFlush };