import React from 'react';
import handleLazyViewport from '/src/components/react-in-lazy-viewport/index.jsx';

const fallback = (props) => {
    // const { node } = props;
    const { lang, code } = props;
    return (
        <pre>
            <code>
                {code}
            </code>
        </pre>
    );
};

export default handleLazyViewport(
    React.lazy(() => import('/src/components/code-highlight/highlight.jsx')),
    fallback
);
