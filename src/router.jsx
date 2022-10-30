import React,{ Suspense } from 'react';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Loading from "./components/loading/index.jsx";
// import Home from './pages/home/index.jsx';
// import AboutPage from "./pages/about";
// import PostDetail from './pages/post-detail/index.jsx';

// import('./pages/home/index.jsx').then((m)=>{
//
//     console.log(m.default);
//
// });

// const Home = React.lazy(await );
// function AboutPage() {
//     // return () => {
//     //     debugger
//     //     return React.createElement(React.lazy(() => import(loader)));
//     // }
//
//     console.log('-=AboutPageAboutPageAboutPage')
//     const { component: Component } = useLoaderData();
//
//     return (
//         <div>
//             =================
//             <React.Suspense fallback={<div>loading...</div>}>
//
//                 <Component />
//
//             </React.Suspense>
//         </div>
//
//     )
// }
// // lazy('/src/pages/about/index.jsx')
//
// function sleep() {
//     return new Promise((resolve) => {
//
//         setTimeout(() => {
//             resolve();
//         }, 7000);
//     });
// }

// const LazyComponent = () => {
//     const [component, setComponent] = useState();
//     useEffect(() => {
//         import('/src/pages/about/index.jsx').then((m) => {
//             setComponent(m.default);
//         });
//
//         // const m = React.lazy(() => import('/src/pages/about/index.jsx'));
//         //
//         // console.log(m);
//         // setComponent(m);
//
//     },[]);
//     console.log(component);
//     return (
//         <div>
//             <div>===================</div>
//             {component && <div>{React.createElement(component)}</div>}
//
//         </div>
//         // <React.Suspense fallback={<div>loading...</div>}>
//         //     {component}
//         // </React.Suspense>
//     )
// };

// const AboutPage = React.lazy(() => import('/src/pages/about/index.jsx'));

const Layout = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Outlet />
        </Suspense>
    );
}
const PostListPage = React.lazy(() => import('/src/pages/post-list/index.jsx'));
const PostDetailPage = React.lazy(() => import('/src/pages/post-detail/index.jsx'));

// <Navigate to="/page/posts" replace={true} />,
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

    // {
    //     path: "/about.html",
    //     element: (
    //         <React.Suspense fallback={<>loading...</>}>
    //             <AboutPage />
    //         </React.Suspense>
    //     )
    //     // element: <AboutPage /> ,
    //     // loader: async () => {
    //     //     const m = await import('/src/pages/about/index.jsx');
    //     //
    //     //     await sleep();
    //     //     return defer({
    //     //         component: m.default
    //     //     });
    //     //     // return new Promise((resolve) => {
    //     //     //     setTimeout(()=>{
    //     //     //         import('/src/pages/about/index.jsx').then((m) => {
    //     //     //             resolve(m.default);
    //     //     //         });
    //     //     //     }, 10000);
    //     //     //
    //     //     // });
    //     // }
    // },
    // {
    //     path: "/post/*",
    //     element: lazy('/src/pages/post-detail/index.jsx'),
    // },
    // {
    //     path: "/posts",
    //     element: <PostDetail />,
    // },
    // {
    //     path: "/post/*",
    //     element: <PostDetail />,
    // },
    // {
    //     path: "/post/:path/:name",
    //     element: <PostDetail />,
    // },
]);

export default router;
