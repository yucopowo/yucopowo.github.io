importScripts('/src/assets/libs/past/past.js');

((db, past) => {function route(router) {

    router.get('/api/posts', async ({request}) => {

        const url = new URL(request.url);
        const current = url.searchParams.get('current') || 1;
        const pageSize = url.searchParams.get('pageSize') || 20;

        const offset = (current-1) * pageSize;
        const limit = pageSize;

        const posts = db.getCollection("posts");

        const total = posts.chain().find({
            type: 'file'
        }).count();
        const result = posts.chain().find({
            type: 'file'
        }).sort((a, b) => {
            const amtime = new Date(a.mtime).getTime();
            const bmtime = new Date(b.mtime).getTime();
            return bmtime - amtime;
        }).offset(offset).limit(limit).data();

        const data = {
            posts: result,
            total
        };

        const headers = new Headers();
        headers.set("content-type", "application/json; charset=utf-8");
        const source = JSON.stringify({code: 0, message: 'ok', data});
        return new Response(source, {
            headers
        });
    });

    router.get('/api/posts/folders/tree', async () => {
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

        const headers = new Headers();
        headers.set("content-type", "application/json; charset=utf-8");
        const source = JSON.stringify({code: 0, message: 'ok', data: root});
        return new Response(source, {
            headers
        });
    });

    router.get('/api/posts/directory/:id', async ({params}) => {

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

        const data = JSON.stringify({code: 0, message: 'ok', data: result});
        return new Response(data, {
            headers
        });
    });


    router.get('/api/post/content/mdast/:id', async ({params}) => {

        const { id } = params;
        const headers = new Headers();
        headers.set("content-type", "application/json; charset=utf-8");
        const posts = db.getCollection("posts");
        //

        const result = posts.findOne({
            id
        });
        if(!result) {
            const data = JSON.stringify({code: -1, message: '文章未找到或已删除！'});
            return new Response(data, {
                headers
            });
        }

        const p = result.path;
        const response = await fetch(`/posts/${p}`);

        const content = await response.text();

        const ast = mdast(content);

        const source = JSON.stringify({code: 0, message: 'ok', data: ast});
        return new Response(source, {
            headers
        });
    });

    router.get('/api/post/content/hast/:id', async ({params}) => {

        const { id } = params;
        const headers = new Headers();
        headers.set("content-type", "application/json; charset=utf-8");
        const posts = db.getCollection("posts");
        //

        const result = posts.findOne({
            id
        });
        if(!result) {
            const data = JSON.stringify({code: -1, message: '文章未找到或已删除！'});
            return new Response(data, {
                headers
            });
        }

        const p = result.path;
        const response = await fetch(`/posts/${p}`);

        const content = await response.text();

        const ast = past(content, {
            html: true
        });

        const source = JSON.stringify({code: 0, message: 'ok', data: ast});
        return new Response(source, {
            headers
        });
    });

    router.get('/api/post/content/:id', async ({params}) => {

        const { id } = params;
        const headers = new Headers();
        headers.set("content-type", "application/json; charset=utf-8");
        const posts = db.getCollection("posts");
        //

        const result = posts.findOne({
            id
        });
        if(!result) {
            const data = JSON.stringify({code: -1, message: '文章未找到或已删除！'});
            return new Response(data, {
                headers
            });
        }

        const p = result.path;
        const response = await fetch(`/posts/${p}`);

        const content = await response.text();

        const html = await marked.parse(content);

        const source = JSON.stringify({code: 0, message: 'ok', data: html});
        return new Response(source, {
            headers
        });
    });



}
self.modules.routes = self.modules.routes || [];self.modules.routes.push(route);
})(self.modules.db, self.past);
