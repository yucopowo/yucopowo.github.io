
((Handlebars) => {function route(router) {

    function sleep() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 115000);
        });
    }

    const cache = new Map();
    async function getTemplate(p) {
        if(cache.has(p)) {
            return cache.get(p);
        }
        const t = await fetch(p).then((r)=>r.text());
        // const te = Handlebars.compile(t);
        const te = t;
        cache.set(p, te);
        return te;
    }

    async function jsHandler({}) {

        const headers = new Headers();
        headers.set("content-type", "text/html; charset=utf-8");
        const source = await getTemplate('/src/service-worker/templates/js.html');
        return new Response(source, {
            headers
        });
    }

    router.get('/api/html/demo/js', jsHandler);

    async function htmlHandler({}) {

        const headers = new Headers();
        headers.set("content-type", "text/html; charset=utf-8");
        const source = await getTemplate('/src/service-worker/templates/html.html');
        return new Response(source, {
            headers
        });
    }

    router.get('/api/html/demo/html', htmlHandler);


    async function reactHandler({}) {

        const headers = new Headers();
        headers.set("content-type", "text/html; charset=utf-8");
        const source = await getTemplate('/src/service-worker/templates/react_le18.html');
        return new Response(source, {
            headers
        });
    }

    router.get('/api/html/demo/react', reactHandler);

    async function vueHandler({}) {

        const headers = new Headers();
        headers.set("content-type", "text/html; charset=utf-8");
        const source = await getTemplate('/src/service-worker/templates/vue3.html');
        return new Response(source, {
            headers
        });
    }

    router.get('/api/html/demo/vue', vueHandler);


}
self.modules.routes = self.modules.routes || [];self.modules.routes.push(route);
})(self.Handlebars);
