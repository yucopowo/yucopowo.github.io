import React, { useEffect, useRef, useState } from 'react';
import inView from '/src/utils/in-view.js';

const ReactInViewRender = (props) => {

    const { render, offset } = props;
    const ref = useRef();
    const [inViewport, setInViewport] = useState(false);

    useEffect(() => {
        if(ref && ref.current) {
            const el = ref.current;
            // inView.offset(-1 * window.screen.height);
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

    // if(!inViewport) {
    //     return props.children;
    // }
    return render(ref, inViewport);

};


export default ReactInViewRender;
