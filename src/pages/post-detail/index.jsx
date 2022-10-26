import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '/src/pages/post-detail/index.less';

const PostDetail = () => {
    const { name } = useParams();
    // const [ content, setContent ] = useState('');
    // console.log(name);
    // fetch('/posts/'+name).then(r=>r.text()).then((r) => {
    //     setContent(marked.parse(r));
    // });
    return (
        <div className="post-detail-page">
            {/*<div dangerouslySetInnerHTML={{*/}
            {/*    __html: content}*/}
            {/*}></div>*/}
            <div className="post-content">
                <iframe src={`/src/pages/post-detail/iframe.html?post=${encodeURI(encodeURI(name))}`} frameBorder="0"></iframe>
            </div>
        </div>
    );
};

export default PostDetail;
