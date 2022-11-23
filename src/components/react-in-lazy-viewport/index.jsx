import React, {Suspense, useRef, useState, useEffect} from 'react';
import { useInViewport } from 'react-in-viewport';
import { useWindowSize } from 'react-use';

const Fallback = () => {
    return (
        <div>loading....</div>
    );
};
const LazyViewportComponent = (props) => {

    const {height} = useWindowSize();

    const { loader, fallback, options, config } = props;
    const [component, setComponent] = useState();

    const forwardedRef = useRef();
    const { inViewport, enterCount } = useInViewport(forwardedRef, {
        // rootMargin: (height+'px') || '100px',
        // rootMargin: "500px 0px",
        // rootMargin: '-100% 0% 0% 0%',
        // threshold: 0,
        // root: document.documentElement,
        // rootMargin: '500px 0px 0px 0px',
        // rootMargin: '300.0px',
        // ...options
    }, {
        // disconnectOnLeave: true,
        // ...config,
    });
    // console.log('inViewport====', inViewport);
    const hasInViewport = inViewport || enterCount >= 1;

    useEffect( () => {
        if(hasInViewport) {
            setComponent(loader);
            // (async () => {
            //     setTimeout(() => {
            //         setComponent(loader);
            //     }, 3000);
            // })()
            // setTimeout(() => {
            //     setComponent(loader);
            // }, 7000);
        }
    }, [hasInViewport]);

    // const fallback = <Fallback />;
    const style = {
        // visibility: inViewport?'visible':'hidden'
        // height: 1000
    };

    // fallback = React.createElement('div', props, '==fallback===')
    // props.ref = forwardedRef;
    if(component) {
        // const fallback1 = React.createElement(fallback, props);
        // console.log(fallback);
        // console.log(fallback1);
        return (
            <div ref={forwardedRef}>
                <Suspense fallback={React.createElement(fallback, props)}>
                    {React.createElement(component, props)}
                </Suspense>
            </div>
        );
    }
    return (
        <div ref={forwardedRef} style={style}>
            {React.createElement(fallback, props)}
        </div>
    );
};

export function handleLazyViewport(loader, fallback , options, config) {
    return (props) => {
        return (
            <LazyViewportComponent loader={loader} fallback={fallback} options={options} config={config} {...props} />
        );
    };
}

export default handleLazyViewport;
