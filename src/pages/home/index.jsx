import React, { useState, useEffect, useRef } from 'react';
import { Col, Row, Pagination, Input } from 'antd';
import PostTreeContainer from "../../containers/post-tree-container/index.jsx";
import PostList from "../../components/post-list/index.jsx";
import { getPostsService, getAllPostsService, getPostsByDirectoryService } from "../../services/post.js";
import './index.less';

const Home = () => {
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('home-key');
    const [total, setTotal] = useState(0);
    const [posts, setPosts] = useState([]);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 20,
    });

    useEffect(() => {
        if(category === 'home-key' || category === 'root-key') {
            getPostsService({
                ...pagination,
                keyword,
            }).then(({data: res}) => {
                if(res.code < 0) {

                } else {
                    setTotal(res.data.total)
                    setPosts(res.data.posts);
                }
            });
        } else {
            getPostsByDirectoryService(category).then((res) => {
                setPosts(res.data);
            });
        }
    }, [category, pagination, keyword]);

    useEffect(() => {
        window.scrollTo(0,0);
    }, [posts]);

    const onSelect = (keys, info) => {
        // console.log('Trigger Select', keys, info);
        if(keys && keys[0]) {
            setCategory(keys[0]);
        }
        setKeyword('');
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
                                    setKeyword(e.target.value);
                                }}/>
                            </div>
                        )}

                        <PostList posts={posts} />

                        {
                            category === 'root-key' && posts.length > 0 && (
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
