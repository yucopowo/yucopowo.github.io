import React, { useState, useRef, useEffect } from 'react';
import Loading from '/src/components/loading/index.jsx';
import css from './previewer.less?raw';

const Previewer = (props) => {
    const { url } = props;
    const origin = window.location.origin;

    // const [loading, setLoading] = useState(true);
    // const ref = useRef();
    // useEffect(() => {
    //     const iframe = ref.current;
    //     console.log(iframe);
    //     if(iframe) {
    //         iframe.contentWindow.addEventListener('load', () => {
    //             // console.log('==========');
    //             setLoading(false);
    //         });
    //     }
    //
    //
    // }, []);

    return (
        <>
            <style>{css}</style>
            {/*<div className="browserWindow_my1Q">*/}
            {/*    <div className="browserWindowHeader_jXSR">*/}
            {/*        <div className="buttons_uHc7">*/}
            {/*            <span className="dot_giz1 dot_giz_a"></span>*/}
            {/*            <span className="dot_giz1 dot_giz_b"></span>*/}
            {/*            <span className="dot_giz1 dot_giz_c"></span>*/}
            {/*        </div>*/}
            {/*        /!*<div className="browserWindowAddressBar_Pd8y text--truncate">*!/*/}
            {/*        /!*    {origin+''+url || 'http://localhost:3000'}*!/*/}
            {/*        /!*</div>*!/*/}
            {/*        <div className="browserWindowMenuIcon_Vhuh">*/}
            {/*            <div>*/}
            {/*                <span className="bar_rrRL"></span>*/}
            {/*                <span className="bar_rrRL"></span>*/}
            {/*                <span className="bar_rrRL"></span>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <iframe width="100%" height="300" src={url} frameBorder="no" className="code-previewer"></iframe>
        </>
    );
};

export default Previewer;
