import React,{ Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Loading from "./components/loading/index.jsx";

const Layout = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Outlet />
        </Suspense>
    );
}

function lazy(loader) {
    return React.createElement(React.lazy(() => import(loader)));
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: lazy('/src/pages/post-list/index.jsx'),
            },
            {
                path: "/page/posts",
                element: lazy('/src/pages/post-list/index.jsx')
            },
            {
                path: "/page/post/*",
                element: lazy('/src/pages/post-detail/index.jsx')
            },
        ]
    },
]);

export default router;
