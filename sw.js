importScripts('/libs/babel.js');
importScripts('/libs/less.js');

console.log('new Date()=========');
console.log(new Date());

// console.log(less);

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

async function handleRequest(request) {
    const url = request.url;
    console.log('handleRequest url=', url)
    if(url.includes('/src/')) {
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
    }

}

self.addEventListener('fetch', (event) => {
    // event.respondWith(caches.match(event.request));
    // event.respondWith(fetch(event.request));

    // event.respondWith(fetch(event.request));

    event.respondWith(new Promise(async (resolve) => {
        // setTimeout(() => {
            // resolve(new Response('Hello World!==='+new Date()))
        // }, 1000)
        // console.log(event.request);

        const response = await handleRequest(event.request);

        if(response) {
            resolve(response);
        }
        else {
            resolve(fetch(event.request));
        }
    }))

    // event.respondWith(
    //     caches
    //         .match(event.request)
    //         .then(
    //             async (response) => {
    //                 const r = await handleRequest(event.request, response);
    //                 if(r) {
    //                     return r;
    //                 }
    //                 // if (response) {
    //                 //     return response;
    //                 // }
    //                 return fetch(event.request);
    //             }
    //         )
    // );

});

