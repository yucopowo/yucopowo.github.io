import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom';
import { useParams, useLocation } from 'react-router-dom';
import MdastRender from "../../components/mdast-render/index.jsx";
import { getPostMdastByIdService } from '/src/services/post.js';
import './index.less';
import './github-markdown-dark.less';

const PostDetail = () => {
    const params = useParams();
    const { id } = params;

    const [loading, setLoading] = useState(true);
    const [mdast, setMdast] = useState({});

    useEffect(() => {
        getPostMdastByIdService(id).then((res) => {
            console.log(res);
            setMdast(res.data);
            setLoading(false);
        }).catch((e) => {
            console.error(e);
        });
    }, [id]);

    return (
        <div className="mdast-post-detail-page post-content">
            {loading && <div>loading...</div>}
            {!loading && (
                <MdastRender mdast={mdast} />
            )}
        </div>
    );
};

export default PostDetail;
