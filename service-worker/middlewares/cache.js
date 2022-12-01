const CACHE_NAME = 'blog';
export default () => {
    return async (ctx, next) => {
        const { request } = ctx;
        const url = request.url;
        // console.log('cache match ==================');
        // console.log(url);

        // if(
        //     !url.startsWith('https://esm.sh/') &&
        //     !url.includes('/public/assets/libs/')
        // ) {
        //     await next();
        //     return;
        // }

        if(
            !url.startsWith('/cdn/')
        ) {
            await next();
            return;
        }

        // console.log('cache start ==================');
        // console.log(url);

        const cacheResponse = await caches.match(request);
        // console.log(cacheResponse);

        if(cacheResponse) {
            // console.log('cache 命中 ==================');
            ctx.originResponse = cacheResponse;
            return;
        }

        // console.log('cache 未命中 ==================');

        const originResponse = await fetch(request);

        caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, originResponse.clone());
            return originResponse;
        });
        ctx.originResponse = cacheResponse;
        // console.log('cache end ==================');


    }
}

