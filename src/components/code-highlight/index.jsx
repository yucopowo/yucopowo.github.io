import React, {memo, useRef} from 'react';
// import { toH } from 'hast-to-hyperscript';
// import { refractor } from 'refractor';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './index.less';
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD
const CodeHighlight = (props) => {

    const { node } = props;

    console.log(node);

    let lang = props.lang || node.lang;
    if(lang==='vue' || lang==='vue2' || lang==='vue3'){
        lang = 'html';
    }

    let code = props.code || node.value;

    // const tree = refractor.highlight(code, lang)
    // console.log(tree);
    //
    // return (
    //     <div>{toH(React.createElement, tree)}</div>
    // );

    return (
        <div className="code-highlight">

            <div className="markdown-code-browser-window">
                <div className="markdown-code-browser-window-header">
                    <div className="markdown-code-browser-window-buttons">
                        <span className="markdown-code-browser-window-button dot_giz1 dot_giz_a"></span>
                        <span className="markdown-code-browser-window-button dot_giz1 dot_giz_b"></span>
                        <span className="markdown-code-browser-window-button dot_giz1 dot_giz_c"></span>
                    </div>
                    <div className="markdown-code-browser-window-address-bar text--truncate">
                        {lang}
                    </div>
                    <div className="markdown-code-browser-window-menu-icon">
                        <div>
                            <span className="bar_rrRL"></span>
                            <span className="bar_rrRL"></span>
                            <span className="bar_rrRL"></span>
                        </div>
                    </div>
                </div>
                <div className="markdown-code-browser-window-body">

                    <SyntaxHighlighter language={lang} style={okaidia} showLineNumbers wrapLongLines>
                        {code}
                    </SyntaxHighlighter>

                </div>

            </div>


        </div>
    );

    // return (
    //     <Highlight {...defaultProps} theme={theme} code={code} language={lang}>
    //         {({className, style, tokens, getLineProps, getTokenProps}) => (
    //             <pre className={className} style={style}>
    //                 {tokens.map((line, i) => (
    //                     <div {...getLineProps({line, key: i})}>
    //                         {line.map((token, key) => (
    //                             <span {...getTokenProps({token, key})} />
    //                         ))}
    //                     </div>
    //                 ))}
    //             </pre>
    //         )}
    //     </Highlight>
    // );

};

export default CodeHighlight;


// import React, {memo, useRef} from 'react';
// import Highlight, {defaultProps} from "prism-react-renderer";
// import theme from "prism-react-renderer/themes/okaidia";
//
// const CodeHighlight = (props) => {
//
//     const { node } = props;
//
//     console.log(node);
//
//     let lang = props.lang || node.lang;
//     if(lang==='vue' || lang==='vue2' || lang==='vue3'){
//         lang = 'html';
//     }
//
//     let code = props.code || node.value;
//
//     return (
//         <Highlight {...defaultProps} theme={theme} code={code} language={lang}>
//             {({className, style, tokens, getLineProps, getTokenProps}) => (
//                 <pre className={className} style={style}>
//                     {tokens.map((line, i) => (
//                         <div {...getLineProps({line, key: i})}>
//                             {line.map((token, key) => (
//                                 <span {...getTokenProps({token, key})} />
//                             ))}
//                         </div>
//                     ))}
//                 </pre>
//             )}
//         </Highlight>
//     );
//
// };
//
// export default CodeHighlight;
//
