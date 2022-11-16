import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom';
import { useParams, useLocation } from 'react-router-dom';
import HastRender from "../../components/hast-render/index.jsx";
import { getPostHastByIdService } from '/src/services/post.js';
import './index.less';
import './github-markdown-dark.less';

const PostDetail = () => {
    const params = useParams();
    const { id } = params;

    const [loading, setLoading] = useState(true);
    const [hast, setHast] = useState({});

    useEffect(() => {
        getPostHastByIdService(id).then((res) => {
            console.log(res);
            setHast(res.data);
            setLoading(false);
        }).catch((e) => {
            console.error(e);
        });
    }, [id]);

    return (
        <div className="hast-post-detail-page post-content">
            {loading && <div>loading...</div>}
            {!loading && (<HastRender hast={hast}/>)}
        </div>
    );
};

export default PostDetail;
