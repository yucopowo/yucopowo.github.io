const CACHE_NAME = 'blog';
export default () => {
    return async (ctx, next) => {
        const { request } = ctx;
        const url = request.url;
        // console.log('cache match ==================');
        // console.log(url);

        if(!(
            url.startsWith('https://esm.sh/') || url.includes('/public/assets/libs/')
        )) {
            await next();
            return;
        }

        // console.log('cache start ==================');
        // console.log(url);

        const cacheResponse = await caches.match(request);
        // console.log(cacheResponse);

        if(cacheResponse) {
            ctx.originResponse = cacheResponse;
            return;
        }
        const originResponse = await fetch(request);

        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, originResponse);
        ctx.originResponse = cacheResponse;
        // console.log('cache end ==================');


    }
}

