import React from 'react';
import css from './index.less?raw';

const Loading = (props) => {
    const { fullscreen = false, light = false } = props;
    return (
        <>
            <style>
                {css}
            </style>
            <div className={"spinners loading-component"+(fullscreen?' fullscreen':'')+(light?' light':'')}>
                <div className="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    );
};

export default Loading;
