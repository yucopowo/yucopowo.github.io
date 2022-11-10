import React, { useMemo } from 'react';
import { Tree } from 'antd';
import './index.less';
const { DirectoryTree } = Tree;

function transformNodes(nodes) {
    if(!nodes) return [];
    return nodes.map((node) => transformNode(node));
}

function transformNode(node) {
    if(!node) return {};
    if(node.type === 'directory') {
        return {
            title: node.title,
            // selectable: false,
            key: node.id,
            // key: node.id || new Date().getTime() + Math.floor(Math.random() * 10000),
            children: transformNodes(node.children)
        }
    }
    return {
        title: node.title,
        key: node.id,
        isLeaf: true,
    }
}

const PostTree = (props) => {
    const {
        treeData,
        defaultSelectedKeys,
        defaultExpandedKeys,
        onSelect
    } = props;

    const data = useMemo(()=> {
        return transformNodes(treeData);
        // return children;
        // const newTreeData = [
        //     {
        //         title: '首页',
        //         key: 'home-key',
        //     },
        //     {
        //         title: '我的博客',
        //         key: 'root-key',
        //         selectable: false,
        //         children: [
        //             ...children,
        //         ]
        //     }
        // ];
        // return newTreeData;
    }, [treeData]);
    // const onSelect = (keys, info) => {
    //     console.log('Trigger Select', keys, info);
    // };
    // const onExpand = (keys, info) => {
    //     console.log('Trigger Expand', keys, info);
    // };
    // defaultExpandAll

    // if(!data || data.length === 0) return null;

    return (
        <div className="post-tree">
            <DirectoryTree
                expandAction={false}
                defaultExpandAll
                defaultSelectedKeys={defaultSelectedKeys}
                // defaultExpandedKeys={defaultExpandedKeys}
                blockNode={true}
                onSelect={onSelect}
                // onExpand={onExpand}
                treeData={data}
            />
        </div>
    );
};

export default PostTree;
