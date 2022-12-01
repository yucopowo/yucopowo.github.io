import { ServiceWorkerRouter } from '/service-worker/index.js';
import axios from '/service-worker/utils/axios.js';
import { compile } from '/service-worker/libs/mdx.js';

const router = new ServiceWorkerRouter();

router.get('/api/markdown/module/:id', async (ctx) => {

    const { response, db, params } = ctx;

    const { id } = params;
    const posts = db.getCollection("posts");

    const post = posts.findOne({
        id
    });

    if(!post) {
        response.body= {code: -1, message: '文章未找到或已删除！'};
        return;
    }

    // console.log(post);

    const postPath = post.path;
    const {data: content} = await axios.get(`/posts/${postPath}`)


    try {
        console.time('compile');
        const compiled = await compile(content, {
            format: post.format
        });
        console.timeEnd('compile');
        response.type = 'js';
        response.body = compiled.value;
    } catch (e) {
        // console.error(JSON.stringify(e, null, 2));

        console.error(e);
        response.type = 'html';
        response.status = 500;
        response.body = e.message;
    }




});

export default router;

