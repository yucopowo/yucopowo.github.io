import React from 'react';
import css from './index.less?raw';

const Loading = (props) => {
    const { fullscreen = false } = props;
    return (
        <>
            <style>
                {css}
            </style>
            <div className={"spinners loading-component"+(fullscreen?' fullscreen':'')}>
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
