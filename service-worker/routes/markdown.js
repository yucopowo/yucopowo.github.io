import { ServiceWorkerRouter } from '/service-worker/index.js';
import axios from '/service-worker/utils/axios.js';
import { evaluate } from '/service-worker/libs/mdx.js';
import React from '/cdn/react.js';
import * as runtime from '/cdn/react/jsx-runtime.js'
import { renderToReadableStream } from '/cdn/react-dom/server.js';
import PostDetail from './components/post-detail.js';

const router = new ServiceWorkerRouter();

router.get('/api/markdown/html/:id', async (ctx) => {

    const { response, db, params } = ctx;

    const { id } = params;
    const posts = db.getCollection("posts");

    const post = posts.findOne({
        id
    });

    if(!post) {
        response.body = {code: -1, message: '文章未找到或已删除！'};
        return;
    }

    // console.log(post);

    const postPath = post.path;
    const {data: content} = await axios.get(`/posts/${postPath}`)


    try {

        const { default: Content } = await evaluate(content, {
            ...runtime,
            format: "md",
        });

        let controller = new AbortController();

        const stream = await renderToReadableStream(
            React.createElement(PostDetail, {Content}),
            {signal: controller.signal}
        );
        ctx.originResponse = new Response(stream, {
            status: 200,
            headers: {'Content-Type': 'text/html'},
        });

    } catch (e) {
        console.error(e);
        response.type = 'html';
        response.status = 500;
        response.body = e.message;
    }




});

// router.get('/api/markdown/module/:id', async (ctx) => {
//
//     const { response, db, params } = ctx;
//
//     const { id } = params;
//     const posts = db.getCollection("posts");
//
//     const post = posts.findOne({
//         id
//     });
//
//     if(!post) {
//         response.body= {code: -1, message: '文章未找到或已删除！'};
//         return;
//     }
//
//     // console.log(post);
//
//     const postPath = post.path;
//     const {data: content} = await axios.get(`/posts/${postPath}`)
//
//
//     try {
//         console.time('compile');
//         const compiled = await compile(content, {
//             format: post.format
//         });
//         console.timeEnd('compile');
//         response.type = 'js';
//         response.body = compiled.value;
//     } catch (e) {
//         // console.error(JSON.stringify(e, null, 2));
//
//         console.error(e);
//         response.type = 'html';
//         response.status = 500;
//         response.body = e.message;
//     }
//
//
//
//
// });

export default router;

