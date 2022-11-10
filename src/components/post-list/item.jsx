import React from 'react';
import { Link } from 'react-router-dom';
import './item.less';

const PostItem = (props) => {
    const { post } = props;
    return (
        <div className="post-item">

            <div className="list-content">
                <div className="list-body">
                    <Link className="list-title" to={`/page/post/${post.id}`} target="_blank">{post.title}</Link>
                    <div className="list-desc">
                        <p>
                            {post.summary}
                        </p>
                    </div>
                </div>
                <div className="list-footer">
                    <span className="list-date">{post.mtime}</span>
                </div>
            </div>

        </div>
    );
};

export default PostItem;
