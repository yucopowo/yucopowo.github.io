// import { loadOptions } from '/cdn/@babel/core.js';
// import presetReact from '/cdn/@babel/preset-react.js';
// loadOptions(presetReact);


export * from '/cdn/@babel/core.js';





// import * as Babel from '/cdn/@babel/core.js';
// // import { transformSync } from '/cdn/@babel/core.js';
// import presetReact from '/cdn/@babel/preset-react.js';
//
//
// console.log(Babel);
// // Babel.registerPreset('react', presetReact);
//
//
// export default Babel;
//
//
// // console.log(Babel);
//
//
//
//
//
// // const source = `
// //
// // import React from 'react';
// // import { createBrowserRouter } from 'react-router-dom';
// // import RootLayout from '/src/layouts/root-layout.jsx';
// //
// // const router = createBrowserRouter([
// //     {
// //         path: "/",
// //         element: <RootLayout />,
// //         children: [
// //             {
// //                 index: true,
// //                 element: lazy('/src/pages/home/index.jsx'),
// //             },
// //         ],
// //     },
// //     {
// //         path: "/page",
// //         element: <RootLayout />,
// //         children: [
// //             {
// //                 path: "posts",
// //                 element: lazy('/src/pages/post-list/index.jsx')
// //             },
// //             {
// //                 path: "post/:id/*",
// //                 element: lazy('/src/pages/post-detail/index.jsx')
// //             },
// //             {
// //                 path: "notes",
// //                 element: lazy('/src/pages/notes/index.jsx')
// //             },
// //         ]
// //     },
// // ]);
// //
// // function lazy(loader) {
// //     return React.createElement(React.lazy(() => import(loader)));
// // }
// //
// // // 123
// //
// // export default router;
// //
// //
// //
// // `;
//
// // const options = {
// //     "presets": [
// //         [presetReact, {}]
// //     ],
// //     filename: 'main.jsx',
// //     comments: false,
// //     sourceMaps: 'inline'
// // };
// // const { code } = transformSync(source, options);
// //
// // console.log(code);
