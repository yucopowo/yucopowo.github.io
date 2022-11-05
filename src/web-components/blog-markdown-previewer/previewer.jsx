import React, { useState, useRef, useEffect } from 'react';
import Loading from '/src/components/loading/index.jsx';
import css from './previewer.less?raw';

const Previewer = (props) => {
    const { url } = props;
    const origin = window.location.origin;

    const [loading, setLoading] = useState(true);
    const ref = useRef();
    useEffect(() => {
        const iframe = ref.current;
        console.log(iframe);
        if(iframe) {
            iframe.contentWindow.addEventListener('load', () => {
                // console.log('==========');
                setLoading(false);
            });
        }


    }, []);

    return (
        <div style={{position: 'relative'}}>
            <style>{css}</style>
            <div className="browserWindow_my1Q">
                <div className="browserWindowHeader_jXSR">
                    <div className="buttons_uHc7">
                        <span className="dot_giz1" style={{"background": "rgb(242, 95, 88)"}}></span>
                        <span className="dot_giz1" style={{"background": "rgb(251, 190, 60)"}}></span>
                        <span className="dot_giz1" style={{"background": "rgb(88, 203, 66)"}}></span>
                    </div>
                    <div className="browserWindowAddressBar_Pd8y text--truncate">
                        {origin+''+url || 'http://localhost:3000'}
                    </div>
                    <div className="browserWindowMenuIcon_Vhuh">
                        <div>
                            <span className="bar_rrRL"></span>
                            <span className="bar_rrRL"></span>
                            <span className="bar_rrRL"></span>
                        </div>
                    </div>
                </div>
            </div>

            <iframe style={{visibility: loading?'hidden':'visible'}} ref={ref} width="100%" height="600" src={url} frameBorder="no"></iframe>

            {
                loading && (
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                    }}>
                        <Loading />
                    </div>
                )
            }


        </div>
    );
};

export default Previewer;
