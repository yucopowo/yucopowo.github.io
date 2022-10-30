import React,{ Suspense } from 'react';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Loading from "./components/loading/index.jsx";

const Layout = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Outlet />
        </Suspense>
    );
}
const PostListPage = React.lazy(() => import('/src/pages/post-list/index.jsx'));
const PostDetailPage = React.lazy(() => import('/src/pages/post-detail/index.jsx'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <PostListPage />,
            },
            {
                path: "/page/posts",
                element: <PostListPage />,
            },
            {
                path: "/page/post/*",
                element: <PostDetailPage />,
            },
        ]
    },
]);

export default router;
