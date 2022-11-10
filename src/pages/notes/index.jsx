import React, { useState, useEffect } from 'react';
import { Button, Layout, Menu, Tree, Col, Row } from 'antd';
import SplitPane, { Pane } from 'react-split-pane';

import PostTree from '/src/components/post-tree/index.jsx';
import { getPostTreeService } from '/src/services/post.js';
import './index.less';
const { Sider, Content } = Layout;

const NotesPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {

        getPostTreeService().then((res) => {
            setData(res);
        });

    }, []);

    return (
        <div className="notes-page">
            <Layout className="notes-page-container">
                <SplitPane split="vertical" defaultSize={300} minSize={200} >
                    <Sider width="100%" className="notes-page-sider">
                        <PostTree data={data} />
                    </Sider>
                    <Layout className="notes-page-main">
                        <Content>Content</Content>
                    </Layout>
                </SplitPane>
            </Layout>
        </div>
    );
};

export default NotesPage;
