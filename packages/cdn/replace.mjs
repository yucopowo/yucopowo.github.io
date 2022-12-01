import path from "path";
import replace from 'replace';
import fs from "fs";
const rootPath = path.resolve('../../');

function resolve(p) {
    return path.join(rootPath, p);
}

function append(f, s) {
    const p = resolve(f);
    const content = fs.readFileSync(p, 'utf-8');
    if(content.includes(s)) {
        return;
    }
    fs.appendFileSync(p, s);
}

append('/cdn/v99/rc-util@5.24.6/es2022/es/ref.development.js', `
export {composeRef, supportRef, useComposeRef, fillRef};
`);


append('/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js', `
export {warning, resetWarned, noteOnce};
`);

append('/cdn/v99/rc-util@5.24.6/es2022/es/Dom/dynamicCSS.development.js', `
export {removeCSS, updateCSS, injectCSS};
`);

append('/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useLayoutEffect.development.js', `
export {useLayoutUpdateEffect};
`);

append('/cdn/v99/rc-util@5.24.6/es2022/es/Dom/focus.development.js', `
export {getFocusNodeList};
`);

append('/cdn/v99/rc-util@5.24.6/es2022/es/Dom/css.development.js', `
export {getClientSize, getOffset};
`);

append('/cdn/v99/rc-util@5.24.6/es2022/es/getScrollBarSize.development.js', `
export {getTargetScrollBarSize};
`);

append('/cdn/v99/rc-util@5.24.6/es2022/es/Dom/styleChecker.development.js', `
export {isStyleSupport};
`);

append('/cdn/v99/rc-util@5.24.6/es2022/es/React/render.development.js', `
export {render, unmount};
`);

append('/cdn/v99/axios@1.2.0/es2022/lib/utils.development.js', `
var isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
})();
export {isUndefined, isStandardBrowserEnv, isFormData};
`);

replace({
    regex: "scale@0\.4\.11",
    replacement: "scale@0.3.18",
    paths: [resolve('/cdn/v99/@antv/attr@0.3.3/es2022/attr.development.js')],
    recursive: false,
    silent: false,
});

replace({
    regex: `exports2\.Buffer = Buffer2;`,
    replacement: `
    
    global = global || {};
    global.TYPED_ARRAY_SUPPORT = false;
    exports2.Buffer  =  Buffer2;
    
    `,
    paths: [resolve('/cdn/v99/babel-standalone@6.26.0/es2022/babel-standalone.development.js')],
    recursive: false,
    silent: false,
});
// (function(global = {TYPED_ARRAY_SUPPORT: 'DEFAULT'}) {


// append('/cdn/v99/decode-named-character-reference@1.0.2/es2022/decode-named-character-reference.development.js', `
// export {render, unmount};
// `);



