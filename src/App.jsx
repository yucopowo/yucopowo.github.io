import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '/src/router.jsx';
import './web-components/blog-example-previewer/index.js';
import '/src/App.less';

const App = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default App;
