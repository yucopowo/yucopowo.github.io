import { Router as TinyRequestRouter } from 'https://esm.sh/tiny-request-router@1.2.2?dev';

export default class ServiceWorkerRouter {

    constructor() {
        this.router = new TinyRequestRouter();
    }

    middleware() {
        return async (ctx, next) => {
            const { request } = ctx;
            const { pathname } = new URL(request.url);
            const match = this.router.match(request.method, pathname);
            if (match) {
                ctx.params = match.params;
                await match.handler(ctx, next);
            } else {
                await next();
            }
        }
    }

    get(pattern, handler, options) {
        this.router.get(pattern, handler, options);
        return this;
    }

    post(pattern, handler, options) {
        this.router.post(pattern, handler, options);
        return this;
    }

}
