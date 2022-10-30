import React from 'react';
import './index.less';

const Loading = () => {
    return (
        <div className="loading-component">
            <div className="spinners">
                <li className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                </li>
            </div>
        </div>
    );
};

export default Loading;
