import React from 'react';
import PostItem from '/src/pages/home/components/post-list/item.jsx';

const PostList = (props) => {
    const { posts } = props;
    return (
        <div className="home-post-list">
            {posts.map((post) => {
                return <PostItem post={post} />;
            })}
        </div>
    );
};

export default PostList;
