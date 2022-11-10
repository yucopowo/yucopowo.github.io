import React, { useState, useRef, useEffect } from 'react';

const Component = (props) => {
    return (
        <div className="spinners">
            <div className="lds-spinner">
                <span className="progress">
                    <span className="value">1</span>
                    <span>%</span>
                </span>
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
    );
};

export default Component;
