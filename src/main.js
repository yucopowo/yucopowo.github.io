import React from 'react';
// import PromiseWorker from 'promise-worker';
import { createRoot } from 'react-dom/client';
import App from '/src/App.jsx';
// import './test.js';

// console.log(PromiseWorker);
// const worker = navigator.serviceWorker;
// console.log(worker);
// const promiseWorker = new PromiseWorker(worker);
// promiseWorker.postMessage({
//     hello: 'hello worker!'
// }).then(function (message) {
//     console.log('message======');
//     console.log(message);
// });

const root = createRoot(document.getElementById('root'));
root.render(React.createElement(App));
