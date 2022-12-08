import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PostRenderer from '/src/components/post-renderer/index.jsx';
import './index.less';



const PostDetail = () => {
    const params = useParams();
    const { id } = params;
    const [post, setPost] = useState();

    useEffect(() => {
        axios.get(`/api/post/`+id).then(({data: res}) => {
            // console.log(res);
            setPost(res.data);
            // if(res.code < 0) {
            //     setHTML(res.message);
            // } else {
            //     setHTML(res.data);
            // }
        }).catch((e) => {
            // setHTML(e.message);
        });
    }, [id]);

    // <PostDetailWebComponent id={id} />

    if(!post) {
        return <div>loading...</div>;
    }

    return (
        <div className="post-detail-page">
            <PostRenderer post={post} />
        </div>
    );
};


// import '/public/assets/css/github-markdown-dark.css';
// import '/src/web-components/post-detail-component/index.js';
// import '/src/web-components/post-code-component/index.jsx';

// const PostDetail = () => {
//     const params = useParams();
//     const { id } = params;
//
//     // const [html, setHTML] = useState('<div>loading...</div>');
//     //
//     // const style = {
//     //     border: 'none',
//     //     width: '100%',
//     //     height: '100vh',
//     // };
//     // // <iframe src={`/api/markdown/html/${id}`} style={style}></iframe>
//     // // const html = '';
//     // const dangerouslySetInnerHTML = {__html: html};
//     // useEffect(() => {
//     //     axios.get(`/api/markdown/html/${id}`).then((res) => {
//     //         setHTML(res.data);
//     //     });
//     // }, []);
//     //
//     return (
//         <div className="post-detail-page">
//             <post-detail-component data-post={id} />
//         </div>
//     );
// };

export default PostDetail;
