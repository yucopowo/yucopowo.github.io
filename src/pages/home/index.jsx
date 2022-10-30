import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import PostList from "/src/pages/home/components/post-list/index.jsx";
import '/src/pages/home/index.less';

const Home = () => {
    // const [posts, setPosts] = useState([]);
    // useEffect(() => {
    //     fetch('/posts.json').then((r)=>r.json()).then((r)=>{
    //        setPosts(r);
    //     });
    // }, []);
    return (
        <div className="home-page">
            {/*<PostList posts={posts} />*/}
            home
            <div>
                <Link to={`/about.html`}>about</Link>
            </div>
        </div>
    );
};

export default Home;
