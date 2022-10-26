import React from 'react';
import { Link } from 'react-router-dom';
import '/src/pages/home/components/post-list/item.less';

const PostItem = (props) => {
    const { post } = props;
    return (
        <div className="home-post-item">


            <div className="list-content">
                <div className="list-body">
                    <Link className="list-title" to={`/post/${post.path}`}>{post.title}</Link>
                    <div className="list-desc">
                        <p>
                            ${post.summary}
                        </p>
                    </div>
                </div>
                <div className="list-footer">
                    <span className="list-date">${post.mtime}</span>
                </div>
            </div>

        </div>
    );
};

export default PostItem;
