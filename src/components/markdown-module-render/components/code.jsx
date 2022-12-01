import React, { memo, useEffect, useState } from 'react';
import CodeDemo from '/src/components/code-demo/index.jsx';
import { safeJSONParse } from '/src/utils/util.js';
import './index.less';

export default function code(props) {
    const type = props['data-type'];
    if(!type || type==='inlineCode') {
        return React.createElement('code', {}, props.children);
    }

    const properties = safeJSONParse(props['data-properties']);
    const attributes = properties?.attributes || {};
    const code = props.children;
    const lang = attributes.lang;

    const node = {
        lang,
        value: code,
        attributes,
    };

    return <CodeDemo node={node} />;
}
