/* esm.sh - esbuild bundle(stringify-entities@4.0.3) es2022 production */function m(r,e){if(r=r.replace(e.subset?C(e.subset):/["&'<>`]/g,o),e.subset||e.escapeOnly)return r;return r.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,t).replace(/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,o);function t(n,c,a){return e.format((n.charCodeAt(0)-55296)*1024+n.charCodeAt(1)-56320+65536,a.charCodeAt(c+2),e)}function o(n,c,a){return e.format(n.charCodeAt(0),a.charCodeAt(c+1),e)}}function C(r){let e=[],t=-1;for(;++t<r.length;)e.push(r[t].replace(/[|\\{}()[\]^$+*?.]/g,"\\$&"));return new RegExp("(?:"+e.join("|")+")","g")}function u(r,e,t){let o="&#x"+r.toString(16).toUpperCase();return t&&e&&!/[\dA-Fa-f]/.test(String.fromCharCode(e))?o:o+";"}function l(r,e,t){let o="&#"+String(r);return t&&e&&!/\d/.test(String.fromCharCode(e))?o:o+";"}import{characterEntitiesLegacy as S}from"/cdn/v99/character-entities-legacy@3.0.0/es2022/character-entities-legacy.js";import{characterEntitiesHtml4 as f}from"/cdn/v99/character-entities-html4@2.1.0/es2022/character-entities-html4.js";var g=["cent","copy","divide","gt","lt","not","para","times"];var h={}.hasOwnProperty,s={},i;for(i in f)h.call(f,i)&&(s[f[i]]=i);function d(r,e,t,o){let n=String.fromCharCode(r);if(h.call(s,n)){let c=s[n],a="&"+c;return t&&S.includes(c)&&!g.includes(c)&&(!o||e&&e!==61&&/[^\da-z]/i.test(String.fromCharCode(e)))?a:a+";"}return""}function x(r,e,t){let o=u(r,e,t.omitOptionalSemicolons),n;if((t.useNamedReferences||t.useShortestReferences)&&(n=d(r,e,t.omitOptionalSemicolons,t.attribute)),(t.useShortestReferences||!n)&&t.useShortestReferences){let c=l(r,e,t.omitOptionalSemicolons);c.length<o.length&&(o=c)}return n&&(!t.useShortestReferences||n.length<o.length)?n:o}function p(r){return"&#x"+r.toString(16).toUpperCase()+";"}function $(r,e){return m(r,Object.assign({format:x},e))}function k(r,e){return m(r,Object.assign({format:p},e))}export{$ as stringifyEntities,k as stringifyEntitiesLight};