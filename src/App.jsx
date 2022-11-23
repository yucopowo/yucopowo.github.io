import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { RouterProvider } from 'react-router-dom';
import router from '/src/router.jsx';

// import './web-components/blog-example-previewer/index.js';
// import './web-components/blog-code-previewer/index.js';
// import './web-components/blog-markdown-previewer/index.js';

import '/src/App.less';

const { darkAlgorithm } = theme;


const _theme = {
    algorithm: [darkAlgorithm],
    token: {
        "colorPrimary": "#1677FF"
    }
};

const App = () => {
    return (
        <ConfigProvider theme={_theme}>
            <RouterProvider router={router} />
        </ConfigProvider>
    );
};

export default App;
