import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom';
import { useParams, useLocation } from 'react-router-dom';
import { getPostService, getPostContentByIdService } from '/src/services/post.js';
import './index.less';

const PostDetail = () => {
    const location = useLocation();
    const postPath = decodeURIComponent(location.pathname.substring(11));


    const params = useParams();
    console.log(params);

    const { id } = params;

    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState('');

    useEffect(() => {
        // getPostService(postPath).then((res) => {
        //     setContent(res);
        //     setLoading(false);
        // }).catch((e) => {
        //     console.error(e);
        // });

        getPostContentByIdService(id).then((res) => {
            console.log(res);
            setContent(res.data);
            setLoading(false);
        }).catch((e) => {
            console.error(e);
        });
    }, [id]);

    return (
        <div className="post-content">
            {loading && <div>loading...</div>}
            {!loading && (
                <blog-markdown-previewer content={content}>

                </blog-markdown-previewer>
            )}

        </div>
    );
};

export default PostDetail;
