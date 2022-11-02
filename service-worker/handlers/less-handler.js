// importScripts('/service-worker/modules.js');
importScripts('/libs/less.js');
importScripts('/service-worker/utils.js');


((less, utils) => {
    async function lessHandler({ request }) {
        // console.log('request======');
        // console.log(request);
        const response = await fetch(request);
        const headers = new Headers(response.headers);
        headers.set("content-type", "application/javascript; charset=utf-8");

        const source = await response.text();
        return new Promise((resolve) => {
            less.render(source, function (e, output) {
                const css = output.css;
                const id = utils.hashCode(request.url);
                const body = `import css from '/libs/css.js';\ncss(\`\n\n${css}\n\n\`, '${id}');`;
                resolve(new Response(body, {
                    headers
                }));
            });
        });
    }


    self.modules.handlers = self.modules.handlers || {};
    self.modules.handlers.lessHandler = lessHandler;
})(self.less, self.modules.utils);

