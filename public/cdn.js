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
};

const script = document.createElement('script');
script.id = 'importmap';
script.type = 'importmap';
script.textContent = JSON.stringify({ imports }, null, 2);
document.currentScript.after(script);
