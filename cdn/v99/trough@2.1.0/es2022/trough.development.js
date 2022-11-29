/* esm.sh - esbuild bundle(trough@2.1.0) es2022 development */
// esm-build-b6563bb9f0c39915e75fa7451e09a08a036d0844-0dc409f3/node_modules/trough/index.js
function trough() {
  const fns = [];
  const pipeline = {
    run,
    use
  };
  return pipeline;
  function run(...values) {
    let middlewareIndex = -1;
    const callback = values.pop();
    if (typeof callback !== 'function') {
      throw new TypeError('Expected function as last argument, not ' + callback);
    }
    next(null, ...values);
    function next(error, ...output) {
      const fn = fns[++middlewareIndex];
      let index = -1;
      if (error) {
        callback(error);
        return;
      }
      while (++index < values.length) {
        if (output[index] === null || output[index] === void 0) {
          output[index] = values[index];
        }
      }
      values = output;
      if (fn) {
        wrap(fn, next)(...output);
      } else {
        callback(null, ...output);
      }
    }
  }
  function use(middelware) {
    if (typeof middelware !== 'function') {
      throw new TypeError('Expected `middelware` to be a function, not ' + middelware);
    }
    fns.push(middelware);
    return pipeline;
  }
}
function wrap(middleware, callback) {
  let called;
  return wrapped;
  function wrapped(...parameters) {
    const fnExpectsCallback = middleware.length > parameters.length;
    let result;
    if (fnExpectsCallback) {
      parameters.push(done);
    }
    try {
      result = middleware.apply(this, parameters);
    } catch (error) {
      const exception = error;
      if (fnExpectsCallback && called) {
        throw exception;
      }
      return done(exception);
    }
    if (!fnExpectsCallback) {
      if (result instanceof Promise) {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }
  function done(error, ...output) {
    if (!called) {
      called = true;
      callback(error, ...output);
    }
  }
  function then(value) {
    done(null, value);
  }
}
export { trough, wrap };
