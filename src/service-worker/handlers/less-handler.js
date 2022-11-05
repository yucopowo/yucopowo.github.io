// importScripts('/src/service-worker/modules.js');
importScripts('/src/assets/libs/less.js');
importScripts('/src/service-worker/utils.js');


((less, utils) => {
    async function lessHandler({ request }) {
        // console.log('request======');
        // console.log(request);

        const isRaw = request.url.endsWith('?raw');
        // if(request.url.endsWith('?raw')) {
        //
        //     const newRequest = request.clone();
        //     const response = await fetch(newRequest);
        //     const source = await response.text();
        //     console.log(source);
        //     debugger
        // }


        const response = await fetch(request);
        const headers = new Headers(response.headers);
        // if(isRaw) {
        //     headers.set("content-type", "text/plain; charset=utf-8");
        // } else {
        //     headers.set("content-type", "application/javascript; charset=utf-8");
        // }
        headers.set("content-type", "application/javascript; charset=utf-8");


        const source = await response.text();
        return new Promise((resolve) => {
            less.render(source, function (e, output) {
                const css = output.css;
                let body = css;
                if(isRaw) {
                    body = `export default \`\n\n${css}\n\n\``;
                } else {
                    const id = utils.hashCode(request.url);
                    body = `import css from '/src/assets/libs/css.js';\ncss(\`\n\n${css}\n\n\`, '${id}');`;
                }

                resolve(new Response(body, {
                    headers
                }));
            });
        });
    }


    self.modules.handlers = self.modules.handlers || {};
    self.modules.handlers.lessHandler = lessHandler;
})(self.less, self.modules.utils);

