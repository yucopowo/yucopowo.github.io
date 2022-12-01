import { ServiceWorkerRouter } from '../index.js';
import {compile} from '/cdn/@mdx-js/mdx.js';

const router = new ServiceWorkerRouter();

router.get('/api/post/content/mdx/:id', async (ctx) => {
    const { request, response, db, params } = ctx;

    const { id } = params;
    const posts = db.getCollection("posts");

    const result = posts.findOne({
        id
    });
    // if(!result) {
    //     response.body= {code: -1, message: '文章未找到或已删除！'};
    //     return;
    // }

    const p = result.path;
    const _response = await fetch(`/posts/${p}`);

    const content = await _response.text();


    const compiled = await compile(content);

    response.type = 'js';
    response.body = compiled.value;
    // response.body = `
    //     export default () => {
    //         return \`${content}\`;
    //     };
    // `;


});

export default router;

