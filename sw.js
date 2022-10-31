
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


async function handleRequest(url, request) {
    let originResponse;
    try {
        originResponse = await fetch(request);

    } catch (e) {
        debugger
    }

    if (!originResponse || originResponse.status !== 200) {
        return originResponse;
    }

    const headers = new Headers(originResponse.headers);
    headers.append("X-Service-Worker", "===================================");

    let body = await originResponse.text();
    const pathname = url.pathname;
    if(pathname.endsWith('.jsx')) {
        headers.set("content-type", "application/javascript; charset=utf-8");
        body = await babelCompile(body);
    } else if(pathname.endsWith('.less')) {
        headers.set("content-type", "application/javascript; charset=utf-8");
        body = `import css from '/libs/css.js';\ncss(\`\n\n${await lessCompile(body)}\n\n\`)`;
    } else if(pathname.endsWith('.js')) {
        headers.set("content-type", "application/javascript; charset=utf-8");
    } else if(pathname.endsWith('.md')) {
        headers.set("content-type", "text/plain; charset=utf-8");
        body = await markdownCompile(body);
    }

    return new Response(body, {
        headers
    });
}

self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);
    console.log(request.url);
    const pathname = url.pathname;
    if(pathname.startsWith('/page/')) {
        return;
    }

    if(
        (request.destination === "script") || pathname.endsWith('.md')
    ){
        event.respondWith(handleRequest(url, request));
    }
});



// marked.setOptions({
//     highlight: function(code, lang) {
//         return hljs.highlightAuto(code).value;
//     },
// });
marked.use({
    renderer: {
        code(code, infostring, escaped) {
            const [lang, ...attrsString] = infostring.split(' | ')
            // console.log('lang', lang) // ts
            // console.log(attrsString) // [ 'pre' ]

            const config = {};
            attrsString.forEach((a)=>{
                const c = a.split('=');
                config[c[0]] = c[1] || true;
            });
            console.log(config);

            const templates = [];
            if(config.preview || config.demo) {

                if(config.template === 'react') {

                }

                templates.push(`  <blog-code-previewer><textarea style="display: none;" data-template="${config.template}">${code}</textarea></blog-code-previewer> `);
            }

            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            if(!(config.preview && !config.demo)) {
                templates.push(`
<pre><code class="hljs language-${lang}">${
                        hljs.highlight(code, { language }).value
                    }</code></pre>`
                );
            }


            return templates.join('\n');

            // if(config.preview) {
            //     let template = code;
            //     if(config.template === 'react') {
            //         template = `
            //     ${code.replace('export default', 'const __EXPORT_COMPONENT__ = ')}
            //
            //
            //     const root = ReactDOM.createRoot(document.body);
            //     root.render(React.createElement(__EXPORT_COMPONENT__));
            //
            //     `;
            //     }
            //
            //     return `<blog-sandbox>${encodeURIComponent(template)}</blog-sandbox>`;
            // }
            //
            // if(config.demo) {
            //     return (() => {
            //         const language = hljs.getLanguage(lang) ? lang : 'plaintext'
            //         const codeString = `<pre style="margin-top: 0px"><code class="hljs language-${lang}">${
            //             hljs.highlight(code, { language }).value
            //         }</code></pre>`;
            //
            //
            //         let template = code;
            //         if(config.template === 'react') {
            //             template = `
            //     ${code.replace('export default', 'const __EXPORT_COMPONENT__ = ')}
            //
            //
            //     const root = ReactDOM.createRoot(document.body);
            //     root.render(React.createElement(__EXPORT_COMPONENT__));
            //
            //     `;
            //         }
            //
            //         const previewString = `<blog-sandbox>${encodeURIComponent(template)}</blog-sandbox>`;
            //
            //         return previewString + codeString;
            //     })();
            // }
            //
            //
            //
            // const language = hljs.getLanguage(lang) ? lang : 'plaintext'
            // return `<pre><code class="hljs language-${lang}">${
            //     hljs.highlight(code, { language }).value
            // }</code></pre>`;

        }
    }
})

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
