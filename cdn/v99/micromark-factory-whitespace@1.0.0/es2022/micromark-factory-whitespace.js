/* esm.sh - esbuild bundle(micromark-factory-whitespace@1.0.0) es2022 production */import{factorySpace as u}from"/cdn/v99/micromark-factory-space@1.0.0/es2022/micromark-factory-space.js";import{markdownLineEnding as a,markdownSpace as o}from"/cdn/v99/micromark-util-character@1.1.0/es2022/micromark-util-character.js";function f(r,e){let t;return i;function i(n){return a(n)?(r.enter("lineEnding"),r.consume(n),r.exit("lineEnding"),t=!0,i):o(n)?u(r,i,t?"linePrefix":"lineSuffix")(n):e(n)}}export{f as factoryWhitespace};