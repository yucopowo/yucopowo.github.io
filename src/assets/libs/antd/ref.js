/* esm.sh - esbuild bundle(rc-util@5.24.4/es/ref) es2022 production */
var l = Object.defineProperty;
var m = (t,r)=>{
      for (var e in r)
        l(t, e, {
          get: r[e],
          enumerable: !0
        })
    }
;
var f = {};
m(f, {
  composeRef: ()=>p,
  fillRef: ()=>i,
  supportRef: ()=>g,
  useComposeRef: ()=>d
});
import s from "/v97/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.js";
import {isMemo as v} from "/v97/react-is@16.13.1/es2022/react-is.js";
import y from "/v97/rc-util@5.24.4/es2022/es/hooks/useMemo.js";
function i(t, r) {
  typeof t == "function" ? t(r) : s(t) === "object" && t && "current"in t && (t.current = r)
}
function p() {
  for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
    r[e] = arguments[e];
  var o = r.filter(function(n) {
    return n
  });
  return o.length <= 1 ? o[0] : function(n) {
    r.forEach(function(u) {
      i(u, n)
    })
  }
}
function d() {
  for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
    r[e] = arguments[e];
  return y(function() {
    return p.apply(void 0, r)
  }, r, function(o, n) {
    return o.length === n.length && o.every(function(u, c) {
      return u === n[c]
    })
  })
}
function g(t) {
  var r, e, o = v(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !(!((r = o.prototype) === null || r === void 0) && r.render) || typeof t == "function" && !(!((e = t.prototype) === null || e === void 0) && e.render))
}

console.log('=======22');
var {default: a, ...h} = f
    , M = a !== void 0 ? a : h;
export {M as default};
