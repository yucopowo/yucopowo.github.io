import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Alert } from 'antd';
import * as antd from 'antd';

import MDXRender from '/src/components/mdx-render/index.jsx';
import './index.less';
import '/public/assets/css/github-markdown-dark.css';
import {useMDXContent} from '../../hooks/usePostService.js';

// const mdx = `
//
// # Hello, world!
//
// <div>Here is the scope variable: </div>
//
// <Rate value={4} />
//
// `;
const components = {
    ...antd,
};

// let MDXContent = null;
const PostDetail = () => {
    const params = useParams();
    const { id } = params;

    const { loading, MDXContent, error, message } = useMDXContent(id);
    // const { loading, content } = usePostContent(id);
    // console.log(content);
    // const [loading, setLoading] = useState(true);

    // const [mdxContent, setMDXContent] = useState({
    //     loading: true,
    //     content: null
    // });
    // const loading = mdxContent.loading;

    // const [MDXContent, setMDXContent] = useState(null);

    // const [error, setError] = useState(false);
    // const [message, setMessage] = useState('');

    // const [loading, setLoading] = useState(false);
    // const [md, setMD] = useState(mdx);
    // useEffect(() => {
    //
    //     import('/api/post/content/mdx/'+id).then(({default: m}) => {
    //         console.log('========');
    //         console.log(m);
    //         setMDXContent({
    //             content: m,
    //             loading: false,
    //         });
    //         // setMDXContent(m);
    //         // MDXContent = m;
    //         // setLoading(false);
    //     });
    //
    // }, [id]);

    if(loading) {
        return (
            <div>loading...</div>
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
        <div className="mdx-detail-page markdown-body">
            {/*<MDXRender mdx={content} />*/}
            {/*{MDXContent({components})}*/}
            {React.createElement(MDXContent, { components })}
        </div>
    );
};

export default PostDetail;
