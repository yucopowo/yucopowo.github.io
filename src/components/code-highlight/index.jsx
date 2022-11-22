import React from 'react';
import handleLazyViewport from '/src/components/react-in-lazy-viewport/index.jsx';

export default handleLazyViewport(
    React.lazy(() => import('/src/components/code-highlight/component.jsx'))
);
