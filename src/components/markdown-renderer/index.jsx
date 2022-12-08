import React, { useEffect, useState } from 'react';
import { getPostContentByIdService } from '/src/services/post.js';
import { withWebComponent } from '/src/packages/react-web-component/index.jsx';
import './renderers/code/renderer.jsx';

const MarkdownRenderer = (props) => {
    const { post } = props;

    const [html, setHTML] = useState('');
    useEffect(() => {
        getPostContentByIdService(post.id).then(({data: res}) => {
            setHTML(res);
        }).catch((e) => {
            setHTML(e.message);
        });
    }, [post.id]);
    const dangerouslySetInnerHTML = {__html: html};

    return (
        <div className="markdown-body" dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
        </div>
    );
};

export default withWebComponent(MarkdownRenderer,  {
    // name: 'post-detail-web-component',
    className: 'markdown-renderer',
    links: [
        {
            rel: "stylesheet", href: '/public/assets/css/github-markdown-dark.css'
        },
        {
            rel: "stylesheet", href: '/src/web-components/post-detail-component/post-detail-component.css'
        },
        {
            rel: "stylesheet", href: '/public/assets/css/prism-themes/themes/okaidia.css'
        }
    ],
    shadow: true
});

