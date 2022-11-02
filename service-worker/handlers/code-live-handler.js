// importScripts('/service-worker/modules.js');
importScripts('/libs/handlebars/handlebars.js');

(() => {

    async function codeLiveHandler({ request }) {
        const response = await fetch(request);
        const headers = new Headers(response.headers);
        const source = await response.text();
        const template = Handlebars.compile(source);
        headers.set("content-type", "text/html; charset=utf-8");
        const html = template({
            script: `
            console.log(1);
            `
        });
        return new Response(html, {
            headers
        });
    }

    self.modules.handlers = self.modules.handlers || {};
    self.modules.handlers.codeLiveHandler = codeLiveHandler;
})();

