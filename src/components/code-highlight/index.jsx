import React, {memo, useRef} from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './index.less';
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD

const Highlight = (props) => {
    const { lang, code } = props;
    return (
        <SyntaxHighlighter language={lang} style={okaidia} showLineNumbers wrapLongLines>
            {code}
        </SyntaxHighlighter>
    );
};

const CodeHighlight = (props) => {

    const { node, frameless } = props;

    let lang = props.lang || node.lang;
    if(lang==='vue' || lang==='vue2' || lang==='vue3'){
        lang = 'html';
    }

    let code = props.code || node.value;

    if(frameless) {
        return <Highlight lang={lang} code={code} />;
    }

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
                    <Highlight lang={lang} code={code} />
                </div>

            </div>


        </div>
    );

};

export default CodeHighlight;
