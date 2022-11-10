import React, { useState, useEffect } from 'react';
import PostTree from '/src/components/post-tree/index.jsx';
import { getPostFoldersTreeService } from '/src/services/post.js';
import './index.less';

const PostTreeContainer = (props) => {
    const { onSelect } = props;
    const [treeData, setTreeData] = useState([]);
    useEffect(() => {

        getPostFoldersTreeService().then((res) => {
            const newTreeData = [
                {
                    title: '首页',
                    id: 'home-key',
                },
                {
                    type: 'directory',
                    title: '我的博客',
                    id: 'root-key',
                    children: res.data
                }
            ];
            setTreeData(newTreeData);
        });

    }, []);
    if(!treeData || treeData.length === 0) return null;
    return (
        <div className="post-tree-container">
            <PostTree
                defaultSelectedKeys={['home-key']}
                defaultExpandedKeys={['root-key']}
                // blockNode={true}
                onSelect={onSelect}
                // onExpand={onExpand}
                treeData={treeData}
            />
        </div>
    );
};

export default PostTreeContainer;
