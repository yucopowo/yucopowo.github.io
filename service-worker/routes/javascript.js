import {ServiceWorkerResponse, ServiceWorkerRouter} from '../index.js';
import Babel from '/public/assets/libs/babel-standalone/babel.esm.js';
import { isRelative } from '../util.js';

// console.log(Babel);
const router = new ServiceWorkerRouter();

function esmBabelPlugin(babel, params){
    const { env } = params;
    return {
        visitor: {
            ImportDeclaration(path){
                const { node } = path;
                const value = node.source.value;
                if(value === 'antd') {
                    if(env === 'dev') {
                        node.source.value = `/public/assets/libs/antd/antd.esm.js`;
                    } else {
                        node.source.value = `/public/assets/libs/antd/antd.esm.min.js`;
                    }
                } else if(isRelative(value)) {
                    if(env === 'dev') {
                        node.source.value = `https://esm.sh/${value}?dev`;
                    } else {
                        node.source.value = `https://esm.sh/${value}`;
                    }
                }
            }
        }
    }
}

router.get('/src/(.*).(jsx?)', async (ctx) => {
    const source = ctx.response.body;

    const { request } = ctx;

    try {
        const { code } = Babel.transform(source, {
            presets: request.url.endsWith('.jsx')?['react']:[],
            plugins: [
                [esmBabelPlugin, {env: 'dev'}]
            ],
        });

        ctx.response.body = code;
    } catch (e) {
        console.log(request);
        console.error(e);
        ctx.response.body = e.message;
    }

});

export default router;
