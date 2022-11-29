import { ServiceWorkerRouter } from '../index.js';
import { hashCode, escapeTemplateString } from '../util.js';

const router = new ServiceWorkerRouter();

router.get('/(src|public)/(.*).css', async (ctx) => {
    const { request, response } = ctx;
    const isRaw = request.url.endsWith('?raw');
    const code = response.body;
    const id = hashCode(request.url);
    response.type = 'js';
    const body = isRaw
        ?
        `export default \`${escapeTemplateString(code)}\``
        :
        `import css from '/public/assets/libs/css.js';\ncss(\`${escapeTemplateString(code)}\`, '${id}'); `;
    ctx.response.body = body;
});

export default router;
