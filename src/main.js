import React from 'react';
import { createRoot } from 'react-dom/client';
// import { createRoot } from 'react-dom';
// console.log('createRoot');
// console.log(createRoot);

import App from '/src/App.jsx';
// const App = () => React.createElement('div', {}, '======');
// import App from '/src/test.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));
