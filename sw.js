import { ServiceWorkerServer } from '/service-worker/index.js';
import preload from '/service-worker/middlewares/preload.js';
import css from '/service-worker/middlewares/css.js';

import cache from '/service-worker/middlewares/cache.js';
import db from '/service-worker/middlewares/db.js';
import views from '/service-worker/middlewares/views/handlebars/index.js';
import routes from '/service-worker/routes/index.js';

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

const app = new ServiceWorkerServer();

app.use(preload());
app.use(css());
app.use(cache());
app.use(db());
app.use(views());

routes.forEach((route) => {
   app.use(route.middleware());
});

app.listen();


