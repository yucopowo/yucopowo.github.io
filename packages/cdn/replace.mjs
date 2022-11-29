import path from "path";
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

// append('/cdn/v99/decode-named-character-reference@1.0.2/es2022/decode-named-character-reference.development.js', `
// export {render, unmount};
// `);



