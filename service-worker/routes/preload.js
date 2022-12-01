import {ServiceWorkerResponse, ServiceWorkerRouter} from '../index.js';

const router = new ServiceWorkerRouter();

router.get('/(src|public)/(.*).(jsx?|css|less|hbs)', async (ctx, next) => {
    const { request } = ctx;
    const response = await fetch(request);
    ctx.response = await ServiceWorkerResponse.fromOriginResponse(response);
    await next();
});

export default router;
