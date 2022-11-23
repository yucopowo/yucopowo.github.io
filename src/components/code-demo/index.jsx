import React, {useRef, useMemo, useState, useEffect} from 'react';
import queryString from 'query-string';
import CodeHighlight from '/src/components/code-highlight/index.jsx';
import Loading from "../loading/index.jsx";
import { uuid } from "../../utils/util.js";
import './index.less';


// const CodeHighlight = React.lazy(() => import('/src/components/code-highlight/index.jsx'));


function getUUID() {
    return new Date().getTime() + Math.floor((Math.random() * 10000000));
}
// const cache = new Map();
function getDemoUrl(lang) {
    switch (lang) {
        case 'vue':
        case 'vue2':
        case 'vue3':
            return '/api/html/demo/vue';
        case 'jsx':
            return '/api/html/demo/react';
        case 'js':
        case 'javascript':
            return '/api/html/demo/js';
        case 'html':
            return '/api/html/demo/html';
        default:
            return '/api/html/demo/404';
    }
}

const CodeDemo = (props) => {

    const { node } = props;
    const attrs = node.attrs || {};
    const iframeRef = useRef();
    const [loading, setLoading] = useState(true);
    const [showCode, setShowCode] = useState(false);
    const [showConsole, setShowConsole] = useState(false);

    // console.log('node===');
    // console.log(node);
    const url = useMemo(() => {
        // const id = uuid();
        // localStorage.setItem(id, node.value);
        // return getDemoUrl(node.lang, node.value);

        return queryString.stringifyUrl({
            url: getDemoUrl(node.lang),
            query: {
                attributes: JSON.stringify(node.attributes),
                code: node.value
            },
        });

    }, [node.lang, node.value]);

    useEffect(() => {

        const onLoad = () => {
            setLoading(false);
        };
        // console.log();
        const iframeWindow = iframeRef.current?.contentWindow;
        iframeWindow.addEventListener('load', onLoad);
        return () => {
            iframeWindow.removeEventListener('load', onLoad);
        };

    }, []);

    useEffect(() => {
        const iframeWindow = iframeRef.current?.contentWindow;
        if(iframeWindow) {
            iframeWindow.postMessage(JSON.stringify({
                type: 'console',
                showConsole,
            }));
        }
    }, [showConsole]);

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

                    {/*<div className="markdown-code-browser-window-menu-icon" onClick={() => {*/}
                    {/*    setShowConsole(!showConsole);*/}
                    {/*}}>*/}
                    {/*    <div>*/}
                    {/*        <span>c</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div className="markdown-code-browser-window-body">
                    {/*<textarea hidden defaultValue={node.value} data-attributes={JSON.stringify(node.attributes)} />*/}
                    <iframe ref={iframeRef} src={url} frameBorder="0" width="100%" {...iframeProps}></iframe>
                </div>
                {loading && (
                    <div className="code-demo-loading">
                        <Loading light />
                    </div>
                )}
                {showCode && (
                    <div>
                        <CodeHighlight frameless node={node} />
                    </div>
                )}
            </div>
        </div>
    );

};

export default CodeDemo;

