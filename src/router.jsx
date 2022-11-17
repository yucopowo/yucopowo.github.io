import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '/src/layouts/root-layout.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: lazy('/src/pages/home/index.jsx'),
            },
        ],
    },
    {
        path: "/page",
        element: <RootLayout />,
        children: [
            {
                path: "posts",
                element: lazy('/src/pages/post-list/index.jsx')
            },
            {
                path: "post/:id",
                element: lazy('/src/pages/past-post-detail/index.jsx')
            },
            {
                path: "notes",
                element: lazy('/src/pages/notes/index.jsx')
            },
        ]
    },
]);

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

export default router;
