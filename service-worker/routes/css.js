import { ServiceWorkerRouter } from '../index.js';
import { hashCode, escapeTemplateString } from '../util.js';

const router = new ServiceWorkerRouter();

// router.get('/public/(.*).css', async (ctx) => {
//     const { request, response } = ctx;
//     const url = request.url;
//     const id = hashCode(request.url);
//     response.type = 'js';
//     const body = `
//     import {link} from '/public/assets/libs/css.js'
//     link('${url}', '${id}');
//     `;
//     ctx.response.body = body;
// });

router.get('/(src|public)/(.*).css', async (ctx) => {
    const { request, response } = ctx;
    if(request.destination === 'style') {
        response.type = 'css';
        ctx.response.body = response.body;
        return;
    }


    const isRaw = request.url.endsWith('?raw');

    // const isStyle = request.url.endsWith('?style');
    //
    // if(isStyle) {
    //     response.type = 'css';
    //     ctx.response.body = response.body;
    //     return;
    // }
    const code = response.body;
    const id = hashCode(request.url);
    response.type = 'js';
    const body = isRaw
        ?
        `export default \`${escapeTemplateString(code)}\``
        :
        `import {style} from '/public/assets/libs/css.js';
style(\`${escapeTemplateString(code)}\`, '${id}'); 
`;
    ctx.response.body = body;
});

export default router;
