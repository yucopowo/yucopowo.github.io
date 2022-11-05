import React,{ Suspense, useState, useEffect } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Loading from "./components/loading/index.jsx";


const SuspenseLoading = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
        return () => {

        };
    }, []);
    if(loading) {
        return null;
    }
    return <Loading fullscreen />
}
const Layout = () => {
    return (
        <Suspense fallback={<SuspenseLoading />}>
            <Outlet />
        </Suspense>
    );
}

function lazy(loader) {
    return React.createElement(React.lazy(() => import(loader)));
    // return React.createElement(React.lazy(() => {
    //     return new Promise((resolve) => {
    //         import(loader).then((m) => {
    //             setTimeout(() => {
    //                 resolve(m || m.default);
    //             },  100005000);
    //         });
    //     });
    // }));
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
