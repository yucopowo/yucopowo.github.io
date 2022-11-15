((db) => {function route(router) {

    async function okHandler({ request }) {

        const posts = db.getCollection("posts");
        //
        // console.log('posts============================');
        // console.log(posts);
        const code = (!posts || posts.length === 0)?-1:0;

        const headers = new Headers();
        headers.set("content-type", "application/json; charset=utf-8");
        const source = JSON.stringify({code: code, message: 'ok'});
        return new Response(source, {
            headers
        });
    }

    router.get('/api/ok', okHandler);


}
self.modules.routes = self.modules.routes || [];self.modules.routes.push(route);
})(self.modules.db);
