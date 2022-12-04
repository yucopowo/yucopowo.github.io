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

    const url = request.url;
    const source = response.body;
    const code = await compile(source);

    if(request.destination === 'style') {
        response.type = 'css';
        ctx.response.body = code;
        return;
    }

    response.type = 'js';
    const isRaw = url.endsWith('?raw');
    if(isRaw) {
        ctx.response.body = `export default \`${escapeTemplateString(code)}\``;
        return;
    }

    const isWebComponent = url.endsWith('?web-component');

    const id = hashCode(url);
    if(isWebComponent) {
        ctx.response.body = `import {webComponentStyle} from '/public/assets/libs/css.js';
webComponentStyle(\`${escapeTemplateString(code)}\`, '${id}'); 
`;
        return;
    }

    const body = `import {style} from '/public/assets/libs/css.js';\n
style(\`${escapeTemplateString(code)}\`, '${id}'); `;
    ctx.response.body = body;
});

export default router;
