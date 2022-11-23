import React, {useRef, memo} from 'react';
import { useInViewport } from 'react-in-viewport';
import CodeHighlight from '../../code-highlight/index.jsx';
import CodeDemo from "../../code-demo/index.jsx";

const CodeViewportRenderer = (props, ref) => {
    const { node } = props;

    const attributes = node.attributes;
    const demo = attributes['demo'] || 'demo' in attributes;

    if(demo) {
        return (
            <CodeDemo {...props} />
        );
    }
    return (
        <CodeHighlight {...props} />
    );
};

export default function codeRenderer(node, key) {
    const forwardedRef = useRef();
    const { inViewport, enterCount } = useInViewport(forwardedRef, {
        rootMargin: '100px'
    }, { disconnectOnLeave: true });
    const hasInViewport = inViewport || enterCount >= 1;

    if(hasInViewport) {
        return <CodeViewportRenderer key={key} node={node} />;
    }

    if(node.properties) {
        node.properties.ref = forwardedRef;
    }

    return (
        <pre key={key} ref={forwardedRef}>
            <code>
                {node.value}
            </code>
        </pre>
    );
}
