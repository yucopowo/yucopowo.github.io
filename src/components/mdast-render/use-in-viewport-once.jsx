import React, { useRef, useMemo } from 'react';

import handleViewport, { useInViewport } from 'react-in-viewport';

const useInViewportOnce = () => {
    const forwardedRef = useRef();
    const { enterCount } = useInViewport(forwardedRef, {}, { disconnectOnLeave: true });
    console.log('useInViewportOnce=====');
    // inViewport &&
    // const hasEnter = enterCount >= 1;
    // const inViewportOnce = useMemo(() => hasEnter, [hasEnter]);
    const inViewportOnce = enterCount >= 1;
    return { inViewportOnce, forwardedRef };
};

export default useInViewportOnce;
