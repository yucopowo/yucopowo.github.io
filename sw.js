import { ServiceWorkerServer } from '/service-worker/index.js';
import cache from '/service-worker/middlewares/cache.js';
import db from '/service-worker/middlewares/db.js';
import routes from '/service-worker/routes/index.js';

const app = new ServiceWorkerServer();

app.use(cache());
app.use(db());

routes.forEach((route) => {
   app.use(route.middleware());
});

app.listen();


















// app.get('/src/(.*).js', async (ctx) => {
//     const { request } = ctx;
//     const response = await fetch(request);
//     const body = await response.text();
//     ctx.response.headers = new Headers(response.headers);
//     ctx.response.type = 'js';
//     ctx.response.body = body + 'console.log(999999111)';
//     // console.log(ctx.response);
//
//     // ctx.response.body = ctx.response.body + '\n' + 'console.log(999999)';
//     // return new Response('console.log(999999)', {
//     //     headers: {
//     //         'content-type':'text/javascript; charset=utf-8'
//     //     }
//     // });
//
// });


// import _ from 'https://esm.sh/lodash';
// import a from 'https://esm.sh/lodash';
// console.log(a);
// console.log(111);
// import './service-worker/routes/index.js';
// import { Router } from 'https://esm.sh/tiny-request-router@1.2.2?dev';
// import Router from '/service-worker/router.js';

// app.use(async (ctx) => {
//     const { request } = ctx;
//     // if(!request.url.endsWith('.js')) {
//     //     return;
//     // }
//     if(request.url.endsWith('/src/test.js')) {
//         const res = await fetch(request);
//         const body = await res.text();
//         ctx.createResponse();
//         ctx.response.headers = new Headers(res.headers);
//         ctx.response.body = body;
//     }
//     // console.log('middle1', req, res, next);
//     // ctx.type = 'html';
//     // ctx.body = '<div>next new body content1</div>';
//
// });
// app.use(async (ctx, next) => {
//     const { request } = ctx;
//     if(!request.url.endsWith('.js')) {
//         await next();
//         return;
//     }
//     // console.log('middle1', req, res, next);
//     // ctx.type = 'html';
//     // ctx.body = '<div>next new body content1</div>';
//     const res = await fetch(request);
//     const body = await res.text();
//     ctx.createResponse();
//     ctx.response.headers = new Headers(res.headers);
//     ctx.response.body = body;
//     await next();
// });


// const router = new Router();
// router.get('/src/test.js', (ctx) => {
//     // ctx.createResponse();
//     ctx.response.type = 'js';
//     // ctx.response.body = 'console.log(999999)';
//     // console.log(ctx.response);
//
//     ctx.response.body = ctx.response.body + '\n' + 'console.log(999999)';
// });

// app.use(router.middleware());





// app.use(async (ctx, next) => {
//     // const { req, res } = ctx;
//     // console.log('middle1', req, res, next);
//     // ctx.type = 'html';
//     // ctx.body = '<div>next new body content1</div>';
//     await next();
// });

// app.use(async (ctx, next) => {
//     // const { req, res } = ctx;
//     // console.log('middle1', req, res, next);
//     ctx.type = 'html';
//     ctx.body = '<div>new body content1</div>';
//     await next();
// });

// const router = new Router();

// const route0 = (router) => {
//     const handler = async (ctx, next) => {
//         await next();
//         // return new Response('Hello');
//         ctx.body = ctx.body + '====hello ok body====';
//     };
//
//     router.get('/src/test.js', handler);
// };




// const routes = [
//     route0
// ];

// app.use(router(routes));






// app.use(async (ctx, next) => {
//     const { req, res } = ctx;
//     console.log('middle1', req, res, next);
//     // res.type = 'html';
//     // res.body = '<div>new body content1</div>';
//     await next();
// });

// app.use(async (ctx, next) => {
//     const { req, res } = ctx;
//     console.log('middle2', req, res, next);
//     const { pathname } = new URL(req.url);
//     const match = router.match(req.method, pathname);
//     if (match) {
//         // res.body = await match.handler(ctx);
//         await match.handler(ctx);
//     }
//     await next();
// });


// app.use(async (ctx, next) => {
//     const { req, res } = ctx;
//     console.log('middle1', req, res, next);
//     res.type = 'html';
//     res.body = '<div>new body content1</div>';
//     await next();
// });


// app.use(async (req, res, next) => {
//     console.log('middle1', req, res, next);
//     res.type = 'html';
//     res.body = '<div>new body content1</div>';
//     await next();
// });
//
// app.use( (ctx, next) => {
//     const { req, res } = ctx;
//     console.log('middle2', req, res, next);
//     res.type = 'html';
//     res.body = '<div>new body content2</div>';
//     // next
// });



// self.addEventListener('fetch', async (event) => {
//
//     try {
//         app.handleEvent(event);
//         // const request = event.request;
//         // const { pathname } = new URL(request.url);
//         // const match = router.match(request.method, pathname);
//         // console.log(match);
//         // if (match) {
//         //     const r = await fetch(request);
//         //
//         //     event.respondWith(match.handler(match.params))
//         //     // event.respondWith(match.handler(match.params))
//         // }
//         // else {
//         //     console.log('No route matched.===========');
//         //     console.log(event.request);
//         // }
//         // const result = router.handleRequest(event.request);
//         // if (result) {
//         //     event.respondWith(result.handlerPromise);
//         //     // console.log('result===========');
//         //     // console.log(result);
//         // } else {
//         //     // console.log('No route matched.===========');
//         //     // console.log(event.request);
//         // }
//     } catch (e) {
//         console.log('=============error============');
//         console.error(e);
//     }
//
//
// });

self.addEventListener('install', function(event) {
    // console.log('sw install============================')
    // 用来强制更新的 Service Worker 跳过等待时间
    event.waitUntil(self.skipWaiting());
});
self.addEventListener("activate", (event) => {
    // console.log('sw activate============================')
    // sendMessage();
    // 保证 激活之后能够马上作用于所有的终端
    event.waitUntil(self.clients.claim());
});
