const imports = {
    'react': '/cdn/react.js',
    'react-dom': '/cdn/react-dom.js',
    'react-dom/client': '/cdn/react-dom/client.js',
    'antd': '/cdn/antd.js',
    'react-router-dom': '/cdn/react-router-dom.js',
    'axios': '/cdn/axios.js',
    'react-in-viewport': '/cdn/react-in-viewport.js',
    'react-use': '/cdn/react-use.js',
    'query-string': '/cdn/query-string.js',
    'style-to-object': '/cdn/style-to-object.js',
    '@antv/g2': '/cdn/@antv/g2.js',
    '@mdx-js/runtime': '/cdn/@mdx-js/runtime.js',
    'rebass': '/cdn/rebass.js',
    '@rebass/preset': '/cdn/@rebass/preset.js',
    'styled-components': '/cdn/styled-components.js',
    '@emotion/react': '/cdn/@emotion/react.js',
    'react/jsx-runtime': '/cdn/react/jsx-runtime.js',
    '@mdx-js/react': '/cdn/@mdx-js/react.js',
    '@mdx-js/mdx': '/cdn/@mdx-js/mdx.js',
};

const script = document.createElement('script');
script.id = 'importmap';
script.type = 'importmap';
script.textContent = JSON.stringify({ imports }, null, 2);
document.currentScript.after(script);
