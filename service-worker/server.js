import compose from './compose.js';
import { Router as TinyRequestRouter } from '/cdn/tiny-request-router.js';

import ServiceWorkerContext from './context.js';

class ServiceWorkerServer {
    constructor() {
        this.middleware = [];
        // this.ctx = {};
        this.router = new TinyRequestRouter();
    }
    createContext (request) {
        return new ServiceWorkerContext({
            app: this,
            request
        });
    }
    handleEvent(event) {
        const request = event.request;
        if(/.(png|jpe?g|gif|bmp)$/.test(request.url)) {
            return;
        }

        const fn = compose(this.middleware);
        const ctx = this.createContext(request);

        const promise = new Promise(async (resolve) => {

            const next = (c, f) => {
                return f(c);
            };

            await fn(ctx, next);

            // console.log('response==========');
            // console.log(ctx);

            if(ctx.originResponse) {
                resolve(ctx.originResponse);
            } else if(ctx.response && ctx.response.body) {
                resolve(ctx.response.toOriginResponse());
            } else {
                resolve(fetch(request));
            }


        });

        event.respondWith(promise);

    }
    use(fn) {
        if (typeof fn !== 'function') {
            throw new TypeError('middleware must be a function!');
        }
        this.middleware.push(fn);
        return this;
    }
    get(pattern, handler, options) {
        this.router.get(pattern, handler, options);
        const route = this.router.routes.slice(-1)[0];
        const fn = async (ctx, next) => {
            const { request } = ctx;
            const { pathname } = new URL(request.url);
            const matches = route.regexp.exec(pathname);
            const match = !(!matches || !matches.length);
            if (match) {
                await handler(ctx, next);
            } else {
                await next();
            }
        };
        this.middleware.push(fn);
        return this;
    }
    listen() {

        self.addEventListener('fetch', (event) => {
            try {
                // console.log(event.request.url);
                this.handleEvent(event);
            } catch (e) {
                console.log('=============error============');
                console.error(e);
            }
        });

    }
}

export default ServiceWorkerServer;
