const libs = [

    // react
    'react',
    'react-dom',
    'react-dom/client',
    'react-dom/server',
    'react-router-dom',
    'react-in-viewport',
    'react-use',
    'react-syntax-highlighter',
    'react-syntax-highlighter/dist/esm/styles/prism',
    'react-web-component',

    // cssinjs
    '@emotion/css',
    '@emotion/react',
    '@emotion/styled',

    // ui
    'antd', '@antv/g2',

    // markdown
    '@mdx-js/react',
    '@mdx-js/mdx',
    'react/jsx-runtime',
    '@emotion/react',
    '@mdx-js/runtime',

    // util
    'axios',
    'query-string',
    'style-to-object',
    'rebass',
    '@rebass/preset',
    'styled-components',

    '@ebay/nice-modal-react',


];


const imports = {
    // 'react': '/cdn/react.js',
    // 'react-dom': '/cdn/react-dom.js',
    // 'react-dom/client': '/cdn/react-dom/client.js',
    // 'antd': '/cdn/antd.js',
    // 'react-router-dom': '/cdn/react-router-dom.js',
    // 'axios': '/cdn/axios.js',
    // 'react-in-viewport': '/cdn/react-in-viewport.js',
    // 'react-use': '/cdn/react-use.js',
    // 'query-string': '/cdn/query-string.js',
    // 'style-to-object': '/cdn/style-to-object.js',
    // '@antv/g2': '/cdn/@antv/g2.js',
    // '@mdx-js/runtime': '/cdn/@mdx-js/runtime.js',
    // 'rebass': '/cdn/rebass.js',
    // '@rebass/preset': '/cdn/@rebass/preset.js',
    // 'styled-components': '/cdn/styled-components.js',
    // '@emotion/react': '/cdn/@emotion/react.js',
    // 'react/jsx-runtime': '/cdn/react/jsx-runtime.js',
    // '@mdx-js/react': '/cdn/@mdx-js/react.js',
    // '@mdx-js/mdx': '/cdn/@mdx-js/mdx.js',
    // 'react-syntax-highlighter': '/cdn/react-syntax-highlighter.js',
    // 'react-syntax-highlighter/dist/esm/styles/prism': '/cdn/react-syntax-highlighter/dist/esm/styles/prism.js',
};
libs.forEach((l) => {
    imports[l] = `/cdn/${l}.js`;
});

const script = document.createElement('script');
script.id = 'importmap';
script.type = 'importmap';
script.textContent = JSON.stringify({ imports }, null, 2);
document.currentScript.after(script);
