import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from './pages/home/index.jsx';
import PostDetail from './pages/post-detail/index.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/post/:name",
        element: <PostDetail />,
    },
]);

export default router;
