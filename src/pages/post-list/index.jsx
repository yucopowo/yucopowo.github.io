import React, { useState, useEffect } from 'react';
import PostList from '/src/pages/post-list/components/post-list/index.jsx';
import { getPostsService } from "/src/services/post.js";
import './index.less';

const PostListPage = () => {
    const [posts, setPosts] = useState([]);

    // console.log(posts);
    useEffect(() => {
        getPostsService().then((data) => {
            setPosts(data);
        });
    }, []);

    return (
        <div className="post-list-page">
            <PostList posts={posts} />
        </div>
    );
};

export default PostListPage;
