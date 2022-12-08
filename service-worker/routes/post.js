import { ServiceWorkerRouter } from '../index.js';
import past from '/public/assets/libs/past/past.esm.js';
import { evaluate } from '/service-worker/libs/mdx.js';
import React from '/cdn/react.js';
import * as runtime from '/cdn/react/jsx-runtime.js'
import { renderToReadableStream, renderToString } from '/cdn/react-dom/server.js';

import PostDetail from './components/post-detail.js';

const router = new ServiceWorkerRouter();

router.get('/api/posts', async (ctx) => {
    const { request, response, db } = ctx;
    const url = new URL(request.url);


    const pid = url.searchParams.get('pid');
    const keyword = url.searchParams.get('keyword');
    const current = url.searchParams.get('current') || 1;
    let pageSize = url.searchParams.get('pageSize') || 20;

    if(keyword && keyword.length >= 2) {
        pageSize = 999;
    }

    const offset = (current-1) * pageSize;
    const limit = pageSize;

    const posts = db.getCollection("posts");

    // const total = posts.chain().find({
    //     type: 'file'
    // }).count();
    let chain = posts.chain().find({
        type: 'file',
        ...(pid?{pid}:{})
    });

    if(keyword) {
        chain = chain.where((post) => {
            return post.title.includes(keyword);
        });
    }

    const total = chain.count();

    chain = chain.sort((a, b) => {
        const amtime = new Date(a.mtime).getTime();
        const bmtime = new Date(b.mtime).getTime();
        return bmtime - amtime;
    }).offset(offset).limit(limit)

    const result = chain.data();
    const data = {
        current,
        pageSize,
        posts: result,
        total
    };

    response.body = {code: 0, message: 'ok', data};
});

router.get('/api/posts/folders/tree', async (ctx) => {
    const { request, response, db } = ctx;
    const posts = db.getCollection("posts");
    //
    // console.log('posts============================');
    // console.log(posts);
    const data = posts.find({
        type: 'directory'
    });

    const root = data.filter((d) => !d.pid);

    function findChildren(parent) {
        if(!parent) return;

        const children = posts.find({
            pid: parent.id,
            type: 'directory'
        });
        if(children && children.length > 0) {
            parent.children = children;
            children.forEach((p)=>findChildren(p));
        }
    }

    findChildren(root);

    response.body = {code: 0, message: 'ok', data: root};

});

// router.get('/api/posts/directory/:id', async (ctx) => {
//     const { request, response, db, params } = ctx;
//
//     const headers = new Headers();
//     headers.set("content-type", "application/json; charset=utf-8");
//
//     if(!params || !params.id) {
//         const data = JSON.stringify({code: -1, message: 'id不能为空！'});
//         return new Response(data, {
//             headers
//         });
//     }
//     const { id } = params;
//
//     const posts = db.getCollection("posts");
//
//     const result = posts.find({
//         type: 'file',
//         pid: params.id,
//     });
//
//     response.body = {code: 0, message: 'ok', data: result};
// });


//

// router.get('/api/post/content/:id', async (ctx) => {
//     const { response, db, params } = ctx;
//
//     const { id } = params;
//     const posts = db.getCollection("posts");
//
//     const result = posts.findOne({
//         id
//     });
//     if(!result) {
//         response.body= {code: -1, message: '文章未找到或已删除！'};
//         return;
//     }
//
//     const p = result.path;
//     const _response = await fetch(`/posts/${p}`);
//
//     const content = await _response.text();
//
//     response.body= {code: 0, message: 'ok', data: { content }};
//
// });

router.get('/api/post/content/past/:id', async (ctx) => {
    const { request, response, db, params } = ctx;

    const { id } = params;
    const posts = db.getCollection("posts");

    const result = posts.findOne({
        id
    });
    if(!result) {
        response.body= {code: -1, message: '文章未找到或已删除！'};
        return;
    }

    const p = result.path;
    const _response = await fetch(`/posts/${p}`);

    const content = await _response.text();

    const ast = past(content, {
        html: true,
        mdx: result.ext === 'mdx',
    });

    response.body= {code: 0, message: 'ok', data: {
        type: result.ext,
        past: ast,
    }};


});

router.get('/api/post/:id', async (ctx) => {
    const { response, db, params } = ctx;

    const { id } = params;
    const posts = db.getCollection('posts');

    const post = posts.findOne({
        id
    });

    if(!post) {
        response.body = {code: -1, message: '文章未找到或已删除！'};
        return;
    }

    try {

        response.body = {
            code: 0,
            message: 'ok',
            data: post
        };

    } catch (e) {
        console.error(e);
        response.type = 'html';
        response.status = 500;
        response.body = e.message;
    }


});

router.get('/api/post/content/:id', async (ctx) => {
    const { response, db, params } = ctx;

    const { id } = params;
    const posts = db.getCollection('posts');

    const post = posts.findOne({
        id
    });

    response.type = 'html';

    if(!post) {
        response.body= '文章未找到或已删除';
        return;
    }

    try {

        const content = await (await fetch(`/posts/${post.path}`)).text();

        if(post.format === 'html') {
            response.body = content;
            return;
        }

        const { default: Content } = await evaluate(content, {
            ...runtime,
            format: post.format,
        });

        const html = renderToString(React.createElement(PostDetail, {Content}));
        response.body = html;

    } catch (e) {
        console.error(e);
        response.type = 'html';
        response.status = 500;
        response.body = e.message;
    }


});


export default router;

