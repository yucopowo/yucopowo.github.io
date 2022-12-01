import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Alert } from 'antd';
// import * as antd from 'antd';

import MarkdownModuleRender from '/src/components/markdown-module-render/index.jsx';
import { useMarkdownModule } from '/src/hooks/usePostService.js';
import Loading from '/src/components/loading/index.jsx';

import './index.less';
import '/public/assets/css/github-markdown-dark.css';

// const mdx = `
//
// # Hello, world!
//
// <div>Here is the scope variable: </div>
//
// <Rate value={4} />
//
// `;
// function code({className, ...props}) {
//     const match = /language-(\w+)/.exec(className || '')
//     return match
//         ? <SyntaxHighlighter language={match[1]} PreTag="div" {...props} />
//         : <code className={className} {...props} />
// }
//
// const components = {
//     ...antd,
//     code,
//
// };

// let MDXContent = null;
const PostDetail = () => {
    const params = useParams();
    const { id } = params;

    const { loading, module, error, message } = useMarkdownModule(id);

    if(loading) {
        return (
            <div>
                <Loading fullscreen />
            </div>
        );
    }
    if(error) {
        return (
            <div className="mdx-detail-page">
                <div className="error-container">
                    <Alert
                        message="错误"
                        description={message}
                        type="error"
                        closable={false}
                    />
                </div>
            </div>
        );
    }
    return (
        <div className="mdx-detail-page">
            {module && <MarkdownModuleRender module={module} />}
        </div>
    );
};

export default PostDetail;
