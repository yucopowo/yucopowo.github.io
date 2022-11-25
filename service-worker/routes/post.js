import { ServiceWorkerRouter } from '../index.js';
import past from '/public/assets/libs/past/past.esm.js';

const router = new ServiceWorkerRouter();

router.get('/api/posts', async (ctx) => {
    const { request, response, db } = ctx;
    const url = new URL(request.url);

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
        type: 'file'
    });


    const total = chain.count();

    if(keyword) {
        chain = chain.where((post) => {
            return post.title.includes(keyword);
        });
    }

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

router.get('/api/posts/directory/:id', async (ctx) => {
    const { request, response, db, params } = ctx;

    const headers = new Headers();
    headers.set("content-type", "application/json; charset=utf-8");

    if(!params || !params.id) {
        const data = JSON.stringify({code: -1, message: 'id不能为空！'});
        return new Response(data, {
            headers
        });
    }
    const { id } = params;

    const posts = db.getCollection("posts");

    const result = posts.find({
        type: 'file',
        pid: params.id,
    });

    response.body = {code: 0, message: 'ok', data: result};
});


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
        html: true
    });

    response.body= {code: 0, message: 'ok', data: ast};

});

export default router;

