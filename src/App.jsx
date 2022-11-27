import React from 'react';
import { ConfigProvider, theme as AntdTheme } from 'antd';
import { RouterProvider } from 'react-router-dom';
import router from '/src/router.jsx';

// import './web-components/blog-example-previewer/index.js';
// import './web-components/blog-code-previewer/index.js';
// import './web-components/blog-markdown-previewer/index.js';

import '/src/App.less';

const { darkAlgorithm } = AntdTheme;


const theme = {
    algorithm: [darkAlgorithm],
    token: {
        "colorPrimary": "#1677FF"
    }
};

const App = () => {
    return (
        <ConfigProvider theme={theme}>
            <RouterProvider router={router} />
        </ConfigProvider>
    );
};

export default App;
