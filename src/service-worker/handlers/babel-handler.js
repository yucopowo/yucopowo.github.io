importScripts('/src/assets/libs/babel-standalone/babel.min.js');
// importScripts('/src/service-worker/modules.js');

((Babel) => {
    async function babelHandler({ request }) {
        const response = await fetch(request);
        const headers = new Headers(response.headers);
        headers.set("content-type", "application/javascript; charset=utf-8");
        const source = await response.text();
        const { code } = Babel.transform(source, {
            // 'env',
            presets: ['react'],
            plugins: [],
        });

        return new Response(code, {
            headers
        });
    }

    self.modules.handlers = self.modules.handlers || {};
    self.modules.handlers.babelHandler = babelHandler;
})(self.Babel);

