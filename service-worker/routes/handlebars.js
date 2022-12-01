import { ServiceWorkerRouter } from '/service-worker/index.js';
import { hashCode, escapeTemplateString } from '../util.js';

const router = new ServiceWorkerRouter();

router.get('/src/(.*).hbs', async (ctx) => {
    const { request, response } = ctx;
    const isRaw = request.url.endsWith('?raw');
    const source = response.body;
    response.type = 'js';

    if(isRaw) {
        response.body = `export default \`${escapeTemplateString(source)}\``;
        return;
    }

    const code = `
    import Handlebars from '/cdn/handlebars.js';
    
    export default Handlebars.compile(\`${escapeTemplateString(source)}\`);
    `;
    response.body = code;
    // const source = response.body;
    //
    // const code = await compile(source);
    //
    // const id = hashCode(request.url);
    // response.type = 'js';
    // const body = isRaw
    //     ?
    //     `export default \`${escapeTemplateString(code)}\``
    //     :
    //     `import css from '/public/assets/libs/css.js';\ncss(\`${escapeTemplateString(code)}\`, '${id}'); `;
    // ctx.response.body = body;
});

export default router;
