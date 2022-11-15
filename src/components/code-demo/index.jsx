import React, {useRef, useMemo, useState, useEffect} from 'react';
import CodeHighlight from '/src/components/code-highlight/index.jsx';
import './handlebars-helper.js';
import vueTemplate from './templates/vue.template.js';
import javascriptTemplate from './templates/javascript.template.js';
import htmlTemplate from './templates/html.template.js';
import reactTemplate from './templates/react.template.js';

import './index.less';

const CodeDemo = (props) => {

    const { node } = props;
    const attrs = node.attrs || {};
    const iframeRef = useRef();
    const [showCode, setShowCode] = useState(false);

    const html = useMemo(() => {
        switch (node.lang) {
            case 'vue':
            case 'vue2':
            case 'vue3':
                return vueTemplate({node, version: node.lang==='vue2'?2:3});
            case 'jsx':
                return reactTemplate({node, version: parseInt(attrs.react||'18')});
            case 'js':
            case 'javascript':
                return javascriptTemplate({node});
            case 'html':
                return htmlTemplate({node});
            default:
                return 'error';
        }
    }, [node.value]) || '';

    // useLayoutEffect(() => {
    //     const contentDocument = iframeRef.current;
    //     console.log(contentDocument);
    // }, []);

    // useEffect(() => {
    //
    //     const onLoad = () => {
    //         // const iframeDocument = iframeRef.current?.contentDocument;
    //         // const script = iframeDocument.createElement('script');
    //         // script.innerHTML = ``;
    //         // iframeDocument.body.appendChild(script);
    //         //
    //         // const style = iframeDocument.createElement('style');
    //         // style.innerHTML = `
    //         //
    //         // `;
    //         // iframeDocument.head.appendChild(style);
    //     };
    //     // console.log();
    //     const iframeWindow = iframeRef.current?.contentWindow;
    //     iframeWindow.addEventListener('load', onLoad);
    //     return () => {
    //         iframeWindow.removeEventListener('load', onLoad);
    //     };
    //
    // }, []);

    const iframeProps = {};
    if(attrs.height) {
        iframeProps.height = attrs.height + 'px';
    }

    return (
        <div className="code-demo">
            <div className="markdown-code-browser-window">
                <div className="markdown-code-browser-window-header">
                    <div className="markdown-code-browser-window-buttons">
                        <span className="markdown-code-browser-window-button dot_giz1 dot_giz_a"></span>
                        <span className="markdown-code-browser-window-button dot_giz1 dot_giz_b"></span>
                        <span className="markdown-code-browser-window-button dot_giz1 dot_giz_c"></span>
                    </div>
                    {/*<div className="markdown-code-browser-window-title text--truncate">*/}
                    {/*</div>*/}
                    <div className="markdown-code-browser-window-address-bar text--truncate">
                        {'http://localhost:3000'+'/demo/'+node.lang}
                    </div>
                    <div className="markdown-code-browser-window-menu-icon" onClick={() => {
                        setShowCode(!showCode);
                    }}>
                        <div>
                            <span className="bar_rrRL"></span>
                            <span className="bar_rrRL"></span>
                            <span className="bar_rrRL"></span>
                        </div>
                    </div>
                </div>
                <div className="markdown-code-browser-window-body">
                    <iframe ref={iframeRef} srcDoc={html} frameBorder="0" width="100%" {...iframeProps}></iframe>
                </div>
                {showCode && (
                    <div>
                        <CodeHighlight node={node} />
                    </div>
                )}
            </div>
        </div>
    );

};

export default CodeDemo;

