import React from 'react';
import PostItem from './item.jsx';

const PostList = (props) => {
    const { posts } = props;
    return (
        <div className="post-list">
            {posts.map((post) => {
                return <PostItem key={post.path} post={post} />;
            })}
        </div>
    );
};

export default PostList;
