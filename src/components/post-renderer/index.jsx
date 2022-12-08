import React from 'react';
import MarkdownRenderer from '/src/components/markdown-renderer/index.jsx';
import HTMLRenderer from '/src/components/html-renderer/index.jsx';


const PostRenderer = (props) => {

    const { post } = props;

    if(post.format === 'markdown') {
        return <MarkdownRenderer post={post} />;
    }

    if(post.format === 'html') {
        return <HTMLRenderer post={post} />;
    }

    return (
        <div>unknown</div>
    );
};

export default PostRenderer;
