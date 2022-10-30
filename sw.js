
const CACHE_NAME = 'blog';
self.addEventListener('install', function(event) {
    // 用来强制更新的 Service Worker 跳过等待时间
    event.waitUntil(self.skipWaiting());
});
self.addEventListener("activate", (event) => {
    // 保证 激活之后能够马上作用于所有的终端
    event.waitUntil(self.clients.claim());
});

importScripts('/libs/babel.js');
importScripts('/libs/less.js');
importScripts('/libs/marked.js');
importScripts('/libs/highlight.min.js');
importScripts('/libs/javascript.min.js');


marked.setOptions({
    highlight: function(code, lang) {
        return hljs.highlightAuto(code).value;
    },
});


function babelCompile(source) {
    return new Promise(async (resolve)=> {
        const { code } = Babel.transform(source, {
            // 'env',
            presets: ['react'],
            plugins: [],
        });
        resolve(code);
    });
}

function lessCompile(source) {
    return new Promise((resolve)=> {
        less.render(source, function (e, output) {
            resolve(output.css);
        });
    });
}

function markdownCompile(source) {
    return new Promise(async (resolve)=> {
        const html = marked.parse(source);
        resolve(html);
    });
}

async function handleRequest(request) {
    const url = request.url;
    if(!url.includes('/src/')) {
        return;
    }
    console.log('handleRequest url=', url)

    const r = await fetch(request);
    const source = await r.text();
    if(url.endsWith('.js') || url.endsWith('.jsx')) {
        const code = await babelCompile(source);
        return new Response(code, {
            headers: {'Content-Type': 'text/javascript'}
        });
    } else if(url.endsWith('.less')) {
        const code = await lessCompile(source);

        const script = `
import css from '/libs/css.js';

css(\`

${code}

\`);
            `;
        return new Response(script, {
            headers: {'Content-Type': 'text/javascript'}
        });
    } else if(url.endsWith('.css')) {
        return new Response(source, {
            headers: {'Content-Type': 'text/css'}
        });
    }
    // else if(url.endsWith('.jsx')) {
    //     const text = await (await fetch(request)).text();
    //     return new Response(text, {
    //         headers: {'Content-Type': 'text/javascript'}
    //     });
    // }

}

self.addEventListener('fetch', (event) => {


    // console.log(event.clientId);

    const { request } = event;
    // console.log('request=', request);
    // const h = request.headers.get('x-markdown');
    // console.log('headers=', h);

    // if(request.url.endsWith('.html')){
    //     return;
    // }

    if(!
        (
            request.destination === "script" || /\/posts\/[\s\S]*.md/.test(request.url)
        )
    ){
        return;
    }

    // if(!(request.destination === "script" || (request.url.endsWith('.md')) && h)){
    //     return;
    // }

    if(request.url.includes('//cdn.bootcdn.net')) {
        return;
    }
    // if(!url.endsWith('.js')) {
    //     return;
    // }

    event.respondWith(new Promise(async (resolve) => {
        if(request.url.includes('//esm.sh') || request.url.includes('//cdn.bootcdn.net')) {
            const cache = await caches.match(event.request);
            if(cache) {
                // console.log('cache==============');
                // console.log(cache);
                resolve(cache);
                return;
            }
        }



        const url = request.url;


        const originResponse = await fetch(event.request);
        // console.log('url=', url);

        if (!originResponse || originResponse.status !== 200) {
            return originResponse;
        }


        // console.log('originResponse.headers=====================');
        // for (let [k, v] of originResponse.headers.entries()) {
        //     console.log(k, v);
        // }


        const headers = new Headers(originResponse.headers);
        headers.append("X-Service-Worker", "===================================");

        let body = await originResponse.text();
        if(url.endsWith('.jsx')) {
            headers.set("content-type", "application/javascript; charset=utf-8");
            body = await babelCompile(body);
        } else if(url.endsWith('.less')) {
            headers.set("content-type", "application/javascript; charset=utf-8");
            body = `import css from '/libs/css.js';\ncss(\`\n\n${await lessCompile(body)}\n\n\`)`;
        } else if(url.endsWith('.js')) {
            headers.set("content-type", "application/javascript; charset=utf-8");
        } else if(url.endsWith('.md')) {
            headers.set("content-type", "text/plain; charset=utf-8");
            body = await markdownCompile(body);
        }

        const response = new Response(body, {
            headers
        });
        // const response = originResponse.clone();
        // originResponse.headers = {
        //     ...originResponse,
        //     "X-Service-Worker": "==================================="
        // };
        if(request.url.includes('//esm.sh') || request.url.includes('//cdn.bootcdn.net')) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone);
            });
        }


        resolve(response);

        // const response = originResponse.clone();

        // const headers = new Headers(response.headers);
        // immutableheaders.forEach((value, key, parent) => mutableHeaders.set(key, value));


        // headers.append("X-Service-Worker", "===================================");
        // response.headers = headers;
        // console.log(headers.keys());
        // headers.forEach((header) => {
        //     console.log('header=', header);
        // });
        // headers.set("X-Service-Worker", "=======")
        // console.log('response=====================');

        // console.log(response);
        // for (let [k, v] of response.headers.entries()) {
        //     console.log('header=', k, v);
        // }
        // resolve(new Response(`console.log('${new Date()}');`, {
        //     headers: {
        //         ...originResponse,
        //         "X-Service-Worker": "==================================="
        //     }
        // }));

        // resolve(
        //     new Response(`console.log('${new Date()}');`, {
        //         headers: response.headers
        //     })
        // );

        // fetch(event.request).then((r)=>r.text()).then(() => {
        //
        // });

        // if(url.endsWith('.js')) {
        //
        //     resolve(new Response(`console.log('${new Date()}');`));
        // } else {
        //     resolve(fetch(event.request));
        // }

        // setTimeout(() => {
            // resolve(new Response('Hello World!==='+new Date()))
        // }, 1000)
        // console.log(event.request);

        // const response = await handleRequest(event.request);
        //
        // if(response) {
        //     resolve(response);
        // }
        // else {
        //     resolve(fetch(event.request));
        // }



    }));


    // event.respondWith(
    //     caches
    //         .match(event.request)
    //         .then(
    //             async (response) => {
    //                 if (response) {
    //                     console.log('response=====================================');
    //                     return response;
    //                 }
    //                 const r = await handleRequest(event.request);
    //                 if(r) {
    //                     return r;
    //                 }
    //
    //                 return fetch(event.request);
    //             }
    //         )
    // );

    // console.log('fetch==========', event);

    // event.respondWith(caches.match(event.request));
    // event.respondWith(fetch(event.request));

    // event.respondWith(fetch(event.request));

    // event.respondWith(new Promise(async (resolve) => {
    //     // setTimeout(() => {
    //         // resolve(new Response('Hello World!==='+new Date()))
    //     // }, 1000)
    //     // console.log(event.request);
    //
    //     const response = await handleRequest(event.request);
    //
    //     if(response) {
    //         resolve(response);
    //     }
    //     else {
    //         resolve(fetch(event.request));
    //     }
    // }))

});

