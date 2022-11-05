importScripts('/src/service-worker/modules.js');
importScripts('/src/service-worker/router.js');

((window) => {
    const { router } = window.modules;

    function sendMessage(msg) {
        window.clients.matchAll().then(function(clients) {
            console.log(clients);
            clients.forEach(function(client) {
                // console.log(client);
                // if (client.url.includes('/a.html')) {
                    // 首页
                client.postMessage('hello world' + client.id);
                // }
            });
        });
    }

    window.addEventListener('install', function(event) {
        // 用来强制更新的 Service Worker 跳过等待时间
        event.waitUntil(window.skipWaiting());
    });
    window.addEventListener("activate", (event) => {
        // console.log('sw activate============================')
        // sendMessage();
        // 保证 激活之后能够马上作用于所有的终端
        event.waitUntil(window.clients.claim());
    });
    window.addEventListener('fetch', event => {
        const result = router.handleRequest(event.request);
        if (result) {
            event.respondWith(result.handlerPromise);
            // console.log('result===========');
            // console.log(result);
        } else {
            // console.log('No route matched.===========');
            // console.log(event.request);
        }
    })

})(self);
