import { ServiceWorkerResponse } from '/service-worker/index.js';
import { hashCode, escapeTemplateString } from '/service-worker/util.js';

function test(url) {
    return /.css(\?raw)?$/.test(url);
}

const template = `

function style(source, id) {
    if(id && document.getElementById(id)) {
        return;
    }
    let link = document.createElement('style');
    if(id) {
        link.id = id;
    }
    link.innerHTML = source;
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    document.head.appendChild(link);
}

function link(url, id) {
    if(id && document.getElementById(id)) {
        return;
    }
    let link = document.createElement('link');
    if(id) {
        link.id = id;
    }
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', url);
    document.head.appendChild(link);
}


`;

export default () => {
    return async (ctx, next) => {
        const { request, response } = ctx;
        const url = request.url;

        if(!test(url)) {
            await next();
            return;
        }

        if(request.destination === 'style') {
            response.type = 'css';
            return;
        }

        const code = response.body;
        response.type = 'js';

        const isRaw = url.endsWith('?raw');
        if(isRaw) {
            ctx.response.body = `export default \`${escapeTemplateString(code)}\``;
            return;
        }


        const id = hashCode(request.url);

        // const url2 = new URL(request.referrer);
        // import {style} from '${url2.origin}/public/assets/libs/css.js'
        ctx.response.body = `style(\`\n${escapeTemplateString(code)}\n\`, '${id}');` + '\n' + template;

    }
}

