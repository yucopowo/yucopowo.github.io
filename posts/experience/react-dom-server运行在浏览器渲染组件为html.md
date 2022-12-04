# react-dom/server运行在浏览器渲染组件为html


```jsx {demo type=module container=root}

import React from 'react';

import ReactDOMServer from 'react-dom/server';

console.log(ReactDOMServer);

const App = () => {
    return (
        <div>==App==</div>
    );
};

const root = React.createElement(App);

const html = ReactDOMServer.renderToString(root);

console.log(html);

const container = document.getElementById('root');
container.innerHTML = html;


```
