import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Menu, Tree, Col, Row, Pagination } from 'antd';
import PostTreeContainer from "../../containers/post-tree-container/index.jsx";
import PostList from "../../components/post-list/index.jsx";
import { getPostsService, getAllPostsService, getPostsByDirectoryService } from "../../services/post.js";
import './index.less';

const Home = () => {
    const [category, setCategory] = useState('home-key');
    const [total, setTotal] = useState(0);
    const [posts, setPosts] = useState([]);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
    });

    useEffect(() => {
        if(category === 'home-key') {
            getAllPostsService().then((res) => {
                // setPosts(res.data);
                // console.log(res);
                setTotal(res.data.total)
                setPosts(res.data.posts);
            });
        } else if(category === 'root-key') {
            getPostsService(pagination).then((res) => {
                setTotal(res.data.total)
                setPosts(res.data.posts);
            });
        } else {
            getPostsByDirectoryService(category).then((res) => {
                setPosts(res.data);
            });
        }
    }, [category, pagination]);

    useEffect(() => {
        window.scrollTo(0,0);
    }, [posts]);

    const onSelect = (keys, info) => {
        // console.log('Trigger Select', keys, info);
        if(keys && keys[0]) {
            setCategory(keys[0]);
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

                        {
                            category === 'root-key' && (
                                <Pagination
                                    onChange={(page)=>{
                                        setPagination({
                                            ...pagination,
                                            current: page
                                        });
                                    }}
                                    onShowSizeChange={(current, size)=>{
                                        setPagination({
                                            ...pagination,
                                            current,
                                            pageSize: size
                                        });
                                    }}
                                    className="home-page-pagination" {...pagination} total={total}
                                />
                            )
                        }
                    </div>


                </Col>
            </Row>
        </div>
    );
};

export default Home;
