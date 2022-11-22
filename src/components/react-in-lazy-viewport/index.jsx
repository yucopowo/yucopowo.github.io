import React, {Suspense, useRef, useState, useEffect} from 'react';
import { useInViewport } from 'react-in-viewport';

const Fallback = () => {
    return (
        <div>loading....</div>
    );
};
const LazyViewportComponent = (props) => {

    const { loader, fallback = <Fallback />, options, config } = props;
    const [component, setComponent] = useState();

    const forwardedRef = useRef();
    const { inViewport, enterCount } = useInViewport(forwardedRef, {
        rootMargin: '100px',
        ...options
    }, {
        disconnectOnLeave: true,
        ...config,
    });
    const hasInViewport = inViewport || enterCount >= 1;

    useEffect( () => {
        if(hasInViewport) {
            (async () => {
                console.log('hasInViewport=', hasInViewport);
                // console.log(loader);
                setComponent(loader);
                // const m = await loader();
                // console.log(m);
                // const {default: m} = await loader();
                // const c = React.createElement(m, {b: 9999});
                // setComponent(c);
            })()
        }
    }, [hasInViewport]);

    // const fallback = <Fallback />;
    const style = {
        // visibility: inViewport?'visible':'hidden'
    };
    if(component) {
        return (
            <Suspense fallback={fallback}>
                {React.createElement(component, props)}
            </Suspense>
        );
    }
    return (
        <div ref={forwardedRef} style={style}>
            {fallback}
        </div>
    );
};

export function handleLazyViewport(loader, options, config) {
    return (props) => {
        return (
            <LazyViewportComponent loader={loader} options={options} config={config} {...props} />
        );
    };
}

export default handleLazyViewport;
