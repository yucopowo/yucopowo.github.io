import { ServiceWorkerResponse } from '/service-worker/index.js';

function test(url) {
    return /.(css|jsx?|less|hbs)(\?raw)?$/.test(url);
}

export default () => {
    return async (ctx, next) => {
        const { request } = ctx;
        const url = request.url;

        if(!test(url)) {
            await next();
            return;
        }

        const response = await fetch(request);
        ctx.response = await ServiceWorkerResponse.fromOriginResponse(response);
        await next();

    }
}

