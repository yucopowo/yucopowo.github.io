import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Alert } from 'antd';
import PastRender from '/src/components/past-render/index.jsx';
import { getPostPastByIdService } from '/src/services/post.js';
import './index.less';
import './github-markdown-dark.less';

const PostDetail = () => {
    const params = useParams();
    const { id } = params;

    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(true);
    const [past, setPast] = useState({});

    useEffect(() => {
        getPostPastByIdService(id).then((res) => {
            console.log(res.data);
            const { code } = res;
            if(code<0) {
                setMessage(res.message);
                setError(true);
                setLoading(false);
                return;
            }
            setPast(res.data.past);
            setLoading(false);
        }).catch((e) => {
            console.error(e);
        });
    }, [id]);

    return (
        <div className="past-post-detail-page post-content">
            {loading && <div>loading...</div>}
            {!loading && (<PastRender past={past}/>)}
            {error && (
                <div className="error-container">
                    <Alert
                        message="错误"
                        description={message}
                        type="error"
                        closable={false}
                    />
                </div>
            )}
        </div>
    );
};

export default PostDetail;
