((less, utils, Handlebars) => {
    const errorTemplate = Handlebars.compile(`console.error({{{error}}});`);

    const template = Handlebars.compile(`
{{#if raw}}
export default 
{{{escapeTemplateString code}}};
    
{{else}}
import css from '/public/assets/libs/css.js';

css({{{escapeTemplateString code}}}, '{{id}}');
{{/if}}
`);


    async function lessHandler({ request }) {

        const isRaw = request.url.endsWith('?raw');
        const response = await fetch(request);
        const headers = new Headers(response.headers);
        headers.set("content-type", "application/javascript; charset=utf-8");

        const source = await response.text();
        return new Promise((resolve) => {
            less.render(source, function (e, output) {

                if(e) {
                    const m = JSON.stringify(e, null, 2);
                    const body = errorTemplate({error: m});
                    resolve(new Response(body, {
                        headers
                    }));
                    return;
                }
                const css = output.css;

                const body = template({
                    raw: isRaw,
                    code: utils.escapeTemplateString(css),
                    id: utils.hashCode(request.url)
                });

                resolve(new Response(body, {
                    headers
                }));
            });
        });
    }


    self.modules.handlers = self.modules.handlers || {};
    self.modules.handlers.lessHandler = lessHandler;
})(self.less, self.modules.utils, self.Handlebars);

