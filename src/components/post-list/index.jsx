import React from 'react';
import PostItem from './item.jsx';

const style = {fontSize: 18};
const Empty = () => (
    <div className="post-item">

        <div className="list-content">
            <div className="list-body">
                <div className="list-desc">
                    <p style={style}>
                        该分类下暂无博客
                    </p>
                </div>
            </div>
        </div>

    </div>
);

const PostList = (props) => {
    const { posts } = props;
    return (
        <div className="post-list">
            {posts.map((post) => {
                return <PostItem key={post.id} post={post} />;
            })}

            {posts.length === 0 && <Empty />}
        </div>
    );
};

export default PostList;
