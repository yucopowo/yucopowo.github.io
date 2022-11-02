// importScripts('/src/service-worker/modules.js');

(() => {
    const CACHE_NAME = 'blog';

    async function cacheHandler({ request }) {
        const cacheResponse = await caches.match(request);
        if(cacheResponse) {
            return cacheResponse;
        }
        const response = await fetch(request);

        const cache = await caches.open(CACHE_NAME);
        await cache.add(request);
        return response;
    }

    self.modules.handlers = self.modules.handlers || {};
    self.modules.handlers.cacheHandler = cacheHandler;
})();

