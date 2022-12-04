import React, { useState, useRef, useEffect } from 'react';
// import CodeHighlight from "../../components/code-highlight/highlight.jsx";
import CodeDemo from '/src/components/code-demo/index.jsx';
const App = (props) => {
    console.log(props);
    const { attributes, children } = props;
    const node = {
        lang: attributes.lang || 'javascript',
        code: children || 'console.log(1)',
        ...props,
        value: children,
    }
    return (
        <div style={{position: 'relative'}}>
            <CodeDemo node={node} />
        </div>
    );
};

export default App;
