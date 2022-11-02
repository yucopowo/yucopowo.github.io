importScripts('/libs/service-worker-router/router.min.js');
// importScripts('/service-worker/modules.js');
importScripts('/service-worker/handlers/babel-handler.js');
importScripts('/service-worker/handlers/cache-handler.js');
importScripts('/service-worker/handlers/less-handler.js');
importScripts('/service-worker/handlers/markdown-handler.js');
// importScripts('/service-worker/handlers/code-live-handler.js');

((Router, handlers) => {
    const router = new Router();
    router.get('(http(s)\\://)esm.sh/*', handlers.cacheHandler, {
        matchUrl: true
    });
    router.get('/libs/*', handlers.cacheHandler);
    router.get('/posts/*.md', handlers.markdownHandler);

    router.get('*.jsx', handlers.babelHandler);
    router.get('*.less', handlers.lessHandler);

    // router.get('/frames/code-live.html', handlers.codeLiveHandler);


    self.modules.router = router;
})(self.ServiceWorkerRouter.Router, self.modules.handlers);
