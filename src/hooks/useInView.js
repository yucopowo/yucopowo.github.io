import React, { useState, useRef, useEffect } from 'react';
import inView from '/src/utils/in-view.js';

export default function useInView(forwardedRef, offset = {}) {
    const [inViewport, setInViewport] = useState(false);

    useEffect(() => {
        if(forwardedRef && forwardedRef.current) {
            const el = forwardedRef.current;
            console.log('======el', el);
            if(offset) {
                inView.offset(offset);
            }
            if(inView.is(el)) {
                setInViewport(true);
            } else {
                inView(el)
                    .once('enter', () => {
                        console.log('======enter');
                        setInViewport(true);
                    });
            }
        }
    }, []);

    return {
        inViewport
    }


}
