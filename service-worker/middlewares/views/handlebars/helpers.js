import Handlebars from '/service-worker/libs/handlebars.js';

let registered = false;
async function helpers() {
    if(registered) {
       return;
    }
    const partials = Handlebars.partials;
    if(!partials['layout']) {
        const r = await fetch('/service-worker/views/layouts/default.hbs');
        const layout = await r.text();
        Handlebars.registerPartial('layout', layout);
    }
    registered = true;
}

export default helpers;

// Handlebars.registerPartial(
//     'layout',
// `
// <!DOCTYPE html>
// <html>
// <head>
//     <meta charset="utf-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     {{#if title}}
//     <title>{{title}}</title>
//     {{/if}}
//
//     <script src="/public/cdn.js"></script>
//
//     {{#console}}
//     <link rel="stylesheet" href="//cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/codemirror.css">
//     <link rel="stylesheet" href="//cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/theme/eclipse.css">
//     <link rel="stylesheet" href="//cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/theme/base16-dark.css">
//     <link rel="stylesheet" href="/public/assets/libs/jsconsole/styles/console.css">
//
//     <script src="//cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/codemirror.js"></script>
//     <script src="//cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.js"></script>
//     <script src="/public/assets/libs/jsconsole/console.js"></script>
//
//     <style>
//         body{
//             -webkit-text-size-adjust:none
//         }
//         #console-container {
//             /*max-width: 600px;*/
//             max-height: 300px;
//             margin: 0 auto;
//             overflow-y: auto;
//             position: relative;
//         }
//
//         #console,  {
//             height: 100%;
//             width: 100%;
//             display: none;
//             /*background-color: lightgray;*/
//         }
//     </style>
//     {{/console}}
//
//
//
//
//
//
//
//
//
//
//
// <style>
//     html, body {
//         margin: 0;
//         padding: 0;
//     }
//     body {
//         min-height: 100px;
//     }
// </style>
//
// <script>
//     (() => {
//         const topFrame = window.frameElement;
//         if (topFrame) {
//             const debouncedHandler = () => {
//                 const height = document.documentElement.offsetHeight;
//                 topFrame.style.height = (Math.ceil(height) + 1) + 'px';
//             };
//             const observe = new ResizeObserver(debouncedHandler);
//             observe.observe(document.documentElement);
//         }
//     })();
// </script>
//
// {{#> head}}
// {{/head}}
// </head>
// <body>
//
//
//
// {{#console}}
// <div id="console-container">
//     <div id="console"></div>
// </div>
// <script>
//
// const element = document.getElementById('console');
// const repl = new Console(element);
// repl.wrapLog(console);
//
// window.addEventListener('message', (e) => {
//     // console.log('message======');
//     // console.log(e.data);
//     const obj = JSON.parse(e.data);
//     if(obj && obj.showConsole) {
//         element.style.display = 'block';
//     } else {
//         element.style.display = 'none';
//     }
// }, false);
//
// </script>
// {{/console}}
//
//
//
//
//
// {{> @partial-block }}
//
//
//
//
//
//
//
//
//
// </body>
// </html>
// `
// );
