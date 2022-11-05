import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom';
import { useParams, useLocation } from 'react-router-dom';
import { getPostService } from '/src/services/post.js';
import './index.less';

const PostDetail = () => {
    const location = useLocation();
    const postPath = decodeURIComponent(location.pathname.substring(11));
    // console.log('decodeURIComponent(postPath)====');
    // console.log((postPath));
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState('');

    useEffect(() => {
        getPostService(postPath).then((res) => {
            setContent(res);
            setLoading(false);
        });
    }, [postPath]);

    // const { name } = useParams();
    // const [ content, setContent ] = useState('');
    // console.log(name);
    // fetch('/posts/'+name).then(r=>r.text()).then((r) => {
    //     setContent(marked.parse(r));
    // });


    // useEffect(() => {
    //     console.log(iFrameResize);
    //     iFrameResize({ log: true }, '#myIframe');
    // }, []);

    return (
        <div className="post-detail-page">
            {/*<div dangerouslySetInnerHTML={{*/}
            {/*    __html: content}*/}
            {/*}></div>*/}
            <div className="post-content">
                {/*<iframe id="myIframe" src={`/src/pages/post-detail/iframe.html?post=${encodeURI(encodeURI(name))}`} frameBorder="0"></iframe>*/}
                {loading && <div>loading...</div>}
                {!loading && (
                    <blog-markdown-previewer content={content}>

                    </blog-markdown-previewer>
                )}

            </div>
        </div>
    );
};

export default PostDetail;
