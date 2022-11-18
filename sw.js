importScripts('/service-worker/modules.js');
importScripts('/service-worker/common.js');
importScripts('/service-worker/db.js');
importScripts('/service-worker/router.js');

// console.log(registerPromiseWorker);
((window) => {
    // console.log('service worker start....');
    const { router, db } = window.modules;
    router.ctx = { db };


    registerPromiseWorker(function (message) {
        // console.log(message); // { hello: 'world', answer: 42, 'this is fun': true }
        return Promise.resolve().then(function () {
            return 'much async, very promise';
        });
    });
    // console.log(db);

    // setTimeout(() => {
    //     const posts = db.getCollection("posts");
    //
    //     console.log('posts=======');
    //     console.log(posts);
    // }, 5000);

    // function onReady() {
    //
    // }


    // db.on('loaded', () => {
    //     console.log('loadedloadedloadedloadedloadedloaded=======');
    //     onReady();
    // });
// console.log(loki.prototype);




    window.addEventListener('fetch', event => {

        try {
            const result = router.handleRequest(event.request);
            if (result) {
                event.respondWith(result.handlerPromise);
                // console.log('result===========');
                // console.log(result);
            } else {
                // console.log('No route matched.===========');
                // console.log(event.request);
            }
        } catch (e) {
            console.log('=============error============');
            console.error(e);
        }


    });















    // function sendMessage(msg) {
    //     window.clients.matchAll().then(function(clients) {
    //         console.log(clients);
    //         clients.forEach(function(client) {
    //             // console.log(client);
    //             // if (client.url.includes('/a.html')) {
    //                 // 首页
    //             client.postMessage('hello world' + client.id);
    //             // }
    //         });
    //     });
    // }

    window.addEventListener('install', function(event) {
        // console.log('sw install============================')
        // 用来强制更新的 Service Worker 跳过等待时间
        event.waitUntil(window.skipWaiting());
    });
    window.addEventListener("activate", (event) => {
        // console.log('sw activate============================')
        // sendMessage();
        // 保证 激活之后能够马上作用于所有的终端
        event.waitUntil(window.clients.claim());
    });


})(self);
