import React, { memo, useEffect, useState } from 'react';
import * as runtime from 'react/jsx-runtime';
import * as provider from '@mdx-js/react';
import {evaluate, evaluateSync} from '@mdx-js/mdx';
import './index.less';

const components = {/* … */};
const options = {...provider, ...runtime};

const MDXRender = (props) => {
    const { mdx } = props;
    const {default: Content} = evaluateSync(mdx, options);
    return (
        <div className="mdx-render">
            <Content components={components} />
        </div>
    );
};

export default memo(MDXRender);
