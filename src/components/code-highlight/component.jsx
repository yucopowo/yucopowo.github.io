import React, {memo, useRef, useState} from 'react';
import Highlight from './highlight-lazy-viewport.jsx';
import './index.less';

const CodeHighlight = (props) => {

    const { node, frameless } = props;
    const attributes = node.attributes || {};
    const showLineNumbers = 'showLineNumbers' in attributes;


    let lang = props.lang || node.lang;
    if(lang==='vue' || lang==='vue2' || lang==='vue3'){
        lang = 'html';
    }

    let code = props.code || node.value;

    if(frameless) {
        return <Highlight lang={lang} code={code} showLineNumbers={showLineNumbers} />;
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
                    <Highlight lang={lang} code={code} showLineNumbers={showLineNumbers} />
                </div>

            </div>


        </div>
    );

};

export default CodeHighlight;
