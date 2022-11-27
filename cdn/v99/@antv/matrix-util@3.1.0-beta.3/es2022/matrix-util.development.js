/* esm.sh - esbuild bundle(@antv/matrix-util@3.1.0-beta.3) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-da634544b2e70a52644865005a63170bf2da8a64-9c80b4f0/node_modules/@antv/matrix-util/esm/index.js
import { mat3 as mat32, vec2 as vec22, vec3 } from '/cdn/v99/gl-matrix@3.4.3/es2022/gl-matrix.development.js';

// esm-build-da634544b2e70a52644865005a63170bf2da8a64-9c80b4f0/node_modules/@antv/matrix-util/esm/ext.js
var ext_exports = {};
__export(ext_exports, {
  angleTo: () => angleTo,
  direction: () => direction,
  leftRotate: () => leftRotate,
  leftScale: () => leftScale,
  leftTranslate: () => leftTranslate,
  transform: () => transform,
  vertical: () => vertical
});
import { mat3, vec2 } from '/cdn/v99/gl-matrix@3.4.3/es2022/gl-matrix.development.js';
function leftTranslate(out, a, v) {
  var transMat = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  mat3.fromTranslation(transMat, v);
  return mat3.multiply(out, transMat, a);
}
function leftRotate(out, a, rad) {
  var rotateMat = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  mat3.fromRotation(rotateMat, rad);
  return mat3.multiply(out, rotateMat, a);
}
function leftScale(out, a, v) {
  var scaleMat = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  mat3.fromScaling(scaleMat, v);
  return mat3.multiply(out, scaleMat, a);
}
function leftMultiply(out, a, a1) {
  return mat3.multiply(out, a1, a);
}
function transform(m, actions) {
  var matrix = m ? [].concat(m) : [1, 0, 0, 0, 1, 0, 0, 0, 1];
  for (var i = 0, len = actions.length; i < len; i++) {
    var action = actions[i];
    switch (action[0]) {
      case 't':
        leftTranslate(matrix, matrix, [action[1], action[2]]);
        break;
      case 's':
        leftScale(matrix, matrix, [action[1], action[2]]);
        break;
      case 'r':
        leftRotate(matrix, matrix, action[1]);
        break;
      case 'm':
        leftMultiply(matrix, matrix, action[1]);
        break;
      default:
        break;
    }
  }
  return matrix;
}
function direction(v1, v2) {
  return v1[0] * v2[1] - v2[0] * v1[1];
}
function angleTo(v1, v2, direct) {
  var ang = vec2.angle(v1, v2);
  var angleLargeThanPI = direction(v1, v2) >= 0;
  if (direct) {
    if (angleLargeThanPI) {
      return Math.PI * 2 - ang;
    }
    return ang;
  }
  if (angleLargeThanPI) {
    return ang;
  }
  return Math.PI * 2 - ang;
}
function vertical(out, v, flag) {
  if (flag) {
    out[0] = v[1];
    out[1] = -1 * v[0];
  } else {
    out[0] = -1 * v[1];
    out[1] = v[0];
  }
  return out;
}
export { ext_exports as ext, mat32 as mat3, vec22 as vec2, vec3 };
