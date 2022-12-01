import React, { memo, useEffect, useState } from 'react';
import code from './components/code.jsx';
import './index.less';

const components = {
    code
};

const MarkdownModuleRender = (props) => {
    const { module } = props;
    return (
        <div className="markdown-module-render markdown-body">
            {React.createElement(module, {
                components
            })}
        </div>
    );
};

export default memo(MarkdownModuleRender);
