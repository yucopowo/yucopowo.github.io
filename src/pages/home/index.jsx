import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Menu, Tree, Col, Row } from 'antd';
import PostTreeContainer from "../../containers/post-tree-container/index.jsx";
import PostList from "../../components/post-list/index.jsx";
import { getAllPostsService, getPostsByDirectoryService } from "../../services/post.js";
import './index.less';

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPostsService().then((res) => {
            setPosts(res.data);
        });
    }, []);

    const onSelect = (keys, info) => {
        console.log('Trigger Select', keys, info);
        const pid = keys[0];
        if(pid === 'home-key' || pid === 'root-key') {
            getAllPostsService().then((res) => {
                setPosts(res.data);
            });
        } else {
            getPostsByDirectoryService(pid).then((res) => {
                setPosts(res.data);
            });
        }
    };

    return (
        <div className="home-page">
            <Row className="home-page-container">
                <Col flex="240px" xs={0} sm={0} md={5} lg={5} xl={5}>

                    <div className="home-page-sidebar">
                        <PostTreeContainer onSelect={onSelect} />
                    </div>

                </Col>
                <Col flex="auto" xs={24} sm={24} md={19} lg={19} xl={19}>

                    <div className="home-page-main">

                        <PostList posts={posts} />
                    </div>

                </Col>
            </Row>
        </div>
    );
};

export default Home;
