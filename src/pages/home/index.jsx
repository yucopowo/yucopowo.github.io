import React, { useState, useEffect } from 'react';
import { Col, Row, Pagination, Input } from 'antd';
import PostTreeContainer from "../../containers/post-tree-container/index.jsx";
import PostList from "../../components/post-list/index.jsx";
import { usePosts } from '/src/hooks/usePostService.js';
import './index.less';

const Home = () => {
    const { filter, posts, total, updateFilter } = usePosts();
    const [category, setCategory] = useState('home-key');

    useEffect(() => {
        window.scrollTo(0,0);
    }, [posts]);

    const onSelect = (keys) => {
        if(keys && keys[0]) {
            const category = keys[0];
            const pid = (category === 'home-key' || category === 'root-key')?'':category;
            setCategory(category);
            updateFilter({
                pid,
                keyword: ''
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

                        {category === 'root-key' && (
                            <div className="home-page-search">
                                <Input placeholder="搜索博客" bordered={false} onChange={(e)=>{
                                    updateFilter({
                                        keyword: e.target.value
                                    });
                                }}/>
                            </div>
                        )}

                        <PostList posts={posts} />

                        {
                            category === 'root-key' && posts.length > 0 && (
                                <Pagination
                                    onChange={(page)=>{
                                        updateFilter({
                                            current: page
                                        });
                                    }}
                                    onShowSizeChange={(current, size)=>{
                                        updateFilter({
                                            current,
                                            pageSize: size
                                        });
                                    }}
                                    className="home-page-pagination"
                                    current={filter.current}
                                    pageSize={filter.pageSize}
                                    total={total}
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
