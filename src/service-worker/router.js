importScripts('/src/assets/libs/service-worker-router/router.min.js');
importScripts('/src/service-worker/utils.js');
importScripts('/src/service-worker/handlers/babel-handler.js');
importScripts('/src/service-worker/handlers/cache-handler.js');
importScripts('/src/service-worker/handlers/less-handler.js');
importScripts('/src/service-worker/handlers/markdown-handler/markdown-handler.js');
importScripts('/src/service-worker/routes/ok.js');
importScripts('/src/service-worker/routes/post.js');
importScripts('/src/service-worker/routes/demo.js');

// importScripts('/src/service-worker/handlers/code-live-handler.js');

((Router, handlers) => {
    const router = new Router();
    // router.get('*ref*', jsHandler);
    // router.get('*warning*', jsHandler);
    // router.get('*dynamicCSS*', jsHandler);

    // router.get('/api/ok', okHandler);

    //资源缓存
    router.get('(http(s)\\://)esm.sh/*', handlers.cacheHandler, {
        matchUrl: true
    });
    router.get('/src/assets/libs/*', handlers.cacheHandler);



    //资源拦截编译
    router.get('*.jsx', handlers.babelHandler);
    router.get('*.less', handlers.lessHandler);
    router.get('*.less?raw', handlers.lessHandler);


    // 新增接口
    // api拦截
    // router.get('/posts/*.md', handlers.markdownHandler);
    router.get('/api/post/html', handlers.markdownHandler);


    // router.get('/frames/code-live.html', handlers.codeLiveHandler);

    // async function jsHandler({ request }) {
    //
    //     const response = await fetch(request);
    //     const headers = new Headers(response.headers);
    //     headers.set("content-type", "application/javascript; charset=utf-8");
    //     let source = await response.text();
    //
    //     source = source.replace('function composeRef', 'export function composeRef');
    //     source = source.replace('function supportRef', 'export function supportRef');
    //     source = source.replace('function warning(valid, message)', 'export function warning(valid, message)');
    //     source = source.replace('function updateCSS(css, key)', 'export function updateCSS(css, key)');
    //     source = source.replace('function fillRef(ref, node)', 'export function fillRef(ref, node)');
    //
    //
    //
    //
    //
    //     console.log(source);
    //
    //     return new Response(source, {
    //         headers
    //     });
    // }

    self.modules.routes.forEach((route) => {
        route(router);
    });

    self.modules.router = router;
})(self.ServiceWorkerRouter.Router, self.modules.handlers);
