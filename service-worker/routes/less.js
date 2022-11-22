import { ServiceWorkerRouter } from '../index.js';
import less from '/public/assets/libs/less/less.esm.js';
import { hashCode, escapeTemplateString } from '../util.js';

const router = new ServiceWorkerRouter();

function compile(source) {
    return new Promise((resolve) => {
        less.render(source, function (e, output) {
            resolve(output.css);
        });
    });
}

router.get('/src/(.*).less', async (ctx) => {
    const { request, response } = ctx;
    const isRaw = request.url.endsWith('?raw');

    const source = response.body;

    const code = await compile(source);

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
