import { ServiceWorkerRouter } from '/service-worker/index.js';
import { transformSync } from '/cdn/@babel/core.js';
import presetReact from '/cdn/@babel/preset-react.js';

const router = new ServiceWorkerRouter();

router.get('/(src|public|packages)/(.*).jsx', async (ctx) => {
    const source = ctx.response.body;

    const { request } = ctx;

    try {
        const { code } = transformSync(source, {
            // presets: ['react'],
            presets: [
                [
                    presetReact, {}
                ]
            ],
            plugins: [
                // [esmBabelPlugin, {env: 'dev'}]
            ],
            // filenameRelative: url.pathname,
            // sourceMaps: 'inline'
        });

        ctx.response.body = code;
    } catch (e) {
        console.log(request);
        console.error(e);
        ctx.response.body = e.message;
    }

});

export default router;
