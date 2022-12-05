import { ServiceWorkerRouter } from '../index.js';
// import Babel from '../utils/babel.js';
import { transformSync } from '/cdn/@babel/core.js';
import presetReact from '/cdn/@babel/preset-react.js';

const router = new ServiceWorkerRouter();

router.get('/api/html/demo/html', async (ctx) => {
    const { request } = ctx;
    const url = new URL(request.url);
    const code = url.searchParams.get('code');

    await ctx.render('html', {
        code,
    });
});

router.get('/api/html/demo/js', async (ctx) => {
    const { request } = ctx;
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    const attributes = JSON.parse(url.searchParams.get('attributes'));

    await ctx.render('js', {
        code,
        attributes
    });
});

router.get('/api/html/demo/jsx', async (ctx) => {
    const { request } = ctx;
    const url = new URL(request.url);
    const source = url.searchParams.get('code');
    const attributes = JSON.parse(url.searchParams.get('attributes'));

    try {
        const { code } = transformSync(source, {
            presets: [
                [
                    presetReact, {}
                ]
            ],
            plugins: [
            ],
        });

        await ctx.render('js', {
            code,
            attributes
        });

    } catch (e) {
        console.log(request);
        console.error(e);
        ctx.response.body = e.message;
    }


});


router.get('/api/html/demo/react', async (ctx) => {
    const { request } = ctx;

    const url = new URL(request.url);
    const source = url.searchParams.get('code');

    const moduleSource = source.replace(/export[ ]+default[ ]+/, `const __MODULE__ = `)



    const demo =
`
import __React__ from 'react';
import { createRoot as __createRoot__ } from 'react-dom/client';
function render(App) {
    const container = document.getElementById('root');
    const root = __createRoot__(container);
    root.render(__React__.createElement(App));
}

${moduleSource}


render(__MODULE__);

`;

    try {
        const { code } = transformSync(demo, {
            presets: [
                presetReact
                // 'react-demo'
            ],
        });

        await ctx.render('react', {
            code
        });

        // ctx.response.body = code;
    } catch (e) {
        // console.log(request);
        // console.error(e);
        ctx.response.type = 'html';
        ctx.response.body = e.message;
    }

});


router.get('/api/html/demo/vue', async (ctx) => {
    const { request } = ctx;
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    await ctx.render('vue', {
        code
    });
});


export default router;






// router.get('/api/html/demo/:demo', async (ctx) => {
//     const { request, params } = ctx;
//
//     const demo = params.demo || 'javascript';
//
//     console.log('params', params);
//
//     const url = new URL(request.url);
//     const code = url.searchParams.get('code');
//     // const code = transformReactDemo(source);
//
//     await ctx.render(demo, {
//         code
//     });
// });

// ((Handlebars, Babel) => {function route(router) {
//
//     function isRelative(p) {
//         if(!p) return false;
//         if(p[0] === '.') return false;
//         if(p[0] === '/') return false;
//         if(p[0] === 'h') return false;
//         // return !path.isAbsolute(p);
//         return true;
//     }
//
//     const messages = new Map();
//     // self.addEventListener('message', function(event) {
//     //     // if (event.data === "cache-current-page") {
//     //     //     var sourceUrl = event.source.url;
//     //     //     if (event.source.visibilityState === 'visible') {
//     //     //         // 缓存 sourceUrl 和相关的文件
//     //     //     } else {
//     //     //         // 将sourceUrl和相关的文件添加到队列中。稍后缓存
//     //     //     }
//     //     // }
//     //     console.log('self.addEventListener', event.data);
//     //     const message = JSON.parse(event.data);
//     //     console.log('self.addEventListener message', message);
//     //     messages.set(message.id, message);
//     // });
//     function sendMessage(type, data) {
//         return new Promise((resolve) => {
//
//             self.clients.matchAll().then(function(clients) {
//                 // console.log(clients);
//                 clients.forEach(function(client) {
//                     // console.log(client);
//                     // if (client.url.includes('/a.html')) {
//                     //     // 首页
//                     //
//                     // }
//                     // client.postMessage('hello world' + client.id);
//                     client.postMessage(JSON.stringify({
//                         id: client.id,
//                         type,
//                         data
//                     }));
//
//
//                     let interval = setInterval(() => {
//
//                         if(messages.has(client.id)) {
//                             clearInterval(interval);
//                             resolve(messages.get(client.id));
//                         }
//
//
//                     }, 1000);
//
//
//                 });
//             });
//
//
//
//
//         });
//
//     }
//
//     function sleep() {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve();
//             }, 115000);
//         });
//     }
//
//     const cache = new Map();
//     async function getHandlebarsTemplate(p) {
//         if(cache.has(p)) {
//             return cache.get(p);
//         }
//         const t = await fetch(p).then((r)=>r.text());
//         const te = Handlebars.compile(t);
//         // const te = t;
//         cache.set(p, te);
//         return te;
//     }
//
//     async function jsHandler({request}) {
//
//         const url = new URL(request.url);
//
//         const code = url.searchParams.get('code');
//
//         const attributes = JSON.parse(url.searchParams.get('attributes'));
//         // console.log('attributes===');
//         // console.log(attributes);
//         // const message = await sendMessage('code',{
//         //     code
//         // });
//
//         // console.log(message);
//
//
//         const headers = new Headers();
//         headers.set("content-type", "text/html; charset=utf-8");
//         // const _layout = await getTemplate('/service-worker/templates/layout.hbs');
//         // const layout = Handlebars.compile(_layout);
//         const template = await getHandlebarsTemplate('/service-worker/templates/js.hbs');
//         // const template = Handlebars.compile(source);
//         // const html = layout({
//         //    head: ''
//         // });
//
//         const html = template({
//             // code: message.data.code
//             code,
//             attributes
//         });
//         return new Response(html, {
//             headers
//         });
//     }
//
//     router.get('/api/html/demo/js', jsHandler);
//
//     async function htmlHandler({request}) {
//         const url = new URL(request.url);
//
//         // const headers = new Headers();
//         // headers.set("content-type", "text/html; charset=utf-8");
//         // const source = await getTemplate('/service-worker/templates/html.html');
//         const code = url.searchParams.get('code');
//
//         const headers = new Headers();
//         headers.set("content-type", "text/html; charset=utf-8");
//         // const _layout = await getTemplate('/service-worker/templates/layout.hbs');
//         // const layout = Handlebars.compile(_layout);
//         const template = await getHandlebarsTemplate('/service-worker/templates/html.hbs');
//         // const template = Handlebars.compile(source);
//         // const html = layout({
//         //    head: ''
//         // });
//
//         const html = template({
//             code,
//         });
//         return new Response(html, {
//             headers
//         });
//
//     }
//
//     router.get('/api/html/demo/html', htmlHandler);
//
//
//     async function reactHandler({request}) {
//         const url = new URL(request.url);
//         const source = url.searchParams.get('code');
//
//         const source2 = source + `
//
//
// import __React__ from 'react';
// import { createRoot as __createRoot__  } from 'react-dom/client';
//
// (()=>{
// const __container__ = document.getElementById('root');
// document.body.appendChild(__container__);
// const __root__ = __createRoot__(__container__);
// __root__.render(__React__.createElement(__MODULE__));
// })();
//
// `;
//
//         function esmBabelPlugin(){
//             return {
//                 visitor: {
//                     ImportDeclaration(path){
//                         const { node } = path;
//                         const value = node.source.value;
//                         if(value === 'antd') {
//                             node.source.value = `/public/assets/libs/antd/antd.min.js`;
//                         } else if(isRelative(value)) {
//                             node.source.value = `https://esm.sh/${value}`;
//                         }
//                     },
//                     ExportDefaultDeclaration(path){
//                         const { node, parent } = path;
//                         // path.node.children.push('<div>Click me</div>')
//                         // console.log(path);
//
//                         if(!parent) {
//                             return;
//                         }
//
//                         const index = parent.body.findIndex((x)=>x.type==="ExportDefaultDeclaration");
//
//                         // console.log(index);
//                         if(index===-1) return;
//
//                         const name = node.declaration.name;
//
//                         const ast = {
//                             "type": "VariableDeclaration",
//                             "declarations": [
//                                 {
//                                     "type": "VariableDeclarator",
//                                     "id": {
//                                         "type": "Identifier",
//                                         "name": "__MODULE__"
//                                     },
//                                     "init": {
//                                         "type": "NumericLiteral",
//                                         "value": name
//                                     }
//                                 }
//                             ],
//                             "kind": "const"
//                         };
//                         // parent.body.push(ast);
//                         parent.body[index] = ast;
//                     },
//                     // Program(path) {
//                     //     // path.node.body.push(Babel.template.ast('const foo = null'))
//                     //
//                     //     // console.log(JSON.stringify(path.node.body[1], null, 2));
//                     // }
//                 }
//             }
//         }
//
//         const { code } = Babel.transform(source2, {
//             presets: ['react'],
//             plugins: [
//                 [esmBabelPlugin, {}]
//             ],
//         });
//         // console.log('code====');
//         // console.log(code);
//
//         // const moduleCode =
//         //
//         // console.log('moduleCode====');
//         // console.log(moduleCode);
//
//         const headers = new Headers();
//         headers.set("content-type", "text/html; charset=utf-8");
//         // const source = await getTemplate('/service-worker/templates/react_le18.html');
//         const template = await getHandlebarsTemplate('/service-worker/templates/react_ge18.hbs');
//         const html = template({
//             code: code,
//         });
//         return new Response(html, {
//             headers
//         });
//     }
//
//     router.get('/api/html/demo/react', reactHandler);
//
//     async function vueHandler({}) {
//
//         const headers = new Headers();
//         headers.set("content-type", "text/html; charset=utf-8");
//         const source = await getTemplate('/service-worker/templates/vue3.html');
//         return new Response(source, {
//             headers
//         });
//     }
//
//     router.get('/api/html/demo/vue', vueHandler);
//
//
// }
// self.modules.routes = self.modules.routes || [];self.modules.routes.push(route);
// })(self.Handlebars, self.Babel);
