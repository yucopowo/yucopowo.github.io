importScripts('/src/assets/libs/marked/marked.min.js');
importScripts('/src/assets/libs/handlebars/handlebars.js');
importScripts('/src/assets/libs/highlight.min.js');
importScripts('/src/assets/libs/highlight.js/languages/javascript.min.js');
importScripts('/src/assets/libs/highlight.js/languages/xml.min.js');
importScripts('/src/assets/libs/highlight.js/languages/css.min.js');
importScripts('/src/assets/libs/highlight.js/languages/python.min.js');
importScripts('/src/assets/libs/highlight.js/languages/typescript.min.js');

((marked, hljs, Handlebars) => {

    Handlebars.registerHelper('eq', function (v1, v2, options) {
        if(v1 === v2) return options.fn(this);
    });

    Handlebars.registerHelper('highlight', function (code, language) {
        return hljs.highlight(code, { language }).value;
    });

    let template = null;
    function parseConfig(infoString) {
        if(!infoString) {
            return {};
        }
        try {
            const [_lang, ...attrsString] = infoString.split('|');
            const lang = _lang.trim();
            let template = lang || 'javascript';
            switch (lang) {
                case 'js': {
                    template = 'javascript';
                    break;
                }
                case 'jsx': {
                    template = 'react';
                    break;
                }
                default: {
                }
            }

            const config = {
                lang,
                template
            };
            attrsString.forEach((a) => {
                if(!a) return;
                const c = a.split('=');
                let k = c[0];
                k = k?k.trim():'';
                let v = c[1];
                v = v?v.trim():true;
                config[k] = v;
            });

            if(config.demo) {
                config.mode = 'demo';
            } else if(config.preview) {
                config.mode = 'preview';
            } else {
                config.mode = '';
            }
            return config;
        } catch (e) {
            console.error(e);
            return {};
        }
    }

    const walkTokens = async (token) => {
        if (token.type === 'code') {
            try {
                if(!template) {
                    const _template = await (await fetch('/src/service-worker/templates/code.hbs')).text();
                    template = Handlebars.compile(_template);
                }

                const config = parseConfig(token.lang);
                // token.text = 'console.log(1);'
                if(config.path && !token.text) {
                    const res = await fetch(config.path);
                    const text = await res.text();
                    token.text = text;
                }
                // token.title =
                // await fetch(token.href);
            } catch (ex) {
                token.title = 'invalid';
                token.text = 'invalid';
            }
        }

    };

    marked.use({ walkTokens, async: true });


    marked.use({
        renderer: {
            code(code, infostring, escaped) {
                const config = parseConfig(infostring);
                const { lang } = config;
                // console.log('config=====');
                // console.log(config);

                // console.log('template=====');
                // console.log(template);
                // console.log('code=====');
                // console.log(code);

                const html = template({
                    lang,
                    code,
                    config,
                    showPreview: config.demo || config.preview,
                    showCode: (() => {
                        if(!config.mode) return true;
                        if(config.demo) return true;
                        return !config.preview;
                    })(),
                    // jsCode: (() => {
                    //     if(config.template !== 'javascript') return '';
                    //     const h = Handlebars.compile(`<script type="module">{{{code}}}</script>`)({
                    //         code
                    //     });
                    //     console.log(h);
                    //     return h;
                    // })(),
                });

                return html;
                // return '<code>=====</code>';
                // console.log(infostring, escaped);
                // let [lang, ...attrsString] = infostring?infostring.split(' | '):[];
                //
                // const originLang = lang;
                // if(lang==='vue') {
                //     lang = 'html';
                // }
                //
                // const config = {};
                // attrsString.forEach((a)=>{
                //     const c = a.split('=');
                //     config[c[0]] = c[1] || true;
                // });

                // console.log('config======');
                // console.log(config);

//                 const templates = [];
//                 if(config.preview || config.demo) {
//
//                     if(config.template === 'react') {
//
//                     }
//
//                     templates.push(`  <blog-code-previewer><textarea style="display: none;" data-template="${config.template}">${code}</textarea></blog-code-previewer> `);
//                 }
//
//                 if(!(config.preview && !config.demo)) {
//                     const title = config.title ||  config.path ;
//                     const language = hljs.getLanguage(lang) ? lang : 'plaintext';
//                     templates.push(`
// <div style="background-color: #f6f8fa;
//     color: #333;
//     font-weight: bold;
//     font-size: 14px;
//     padding: 10px 15px;
//     border-radius: 5px 5px 0 0;
//     ${!title?'display: none;':''}
//     ">${title || ''}</div>
//
// <div class="markdown-code-browser-window">
//     <div class="markdown-code-browser-window-header">
//         <div class="markdown-code-browser-window-buttons">
//             <span class="markdown-code-browser-window-button dot_giz1 dot_giz_a"></span>
//             <span class="markdown-code-browser-window-button dot_giz1 dot_giz_b"></span>
//             <span class="markdown-code-browser-window-button dot_giz1 dot_giz_c"></span>
//         </div>
//         <div class="markdown-code-browser-window-title text--truncate">
//              ${lang}
//         </div>
//         <div class="markdown-code-browser-window-menu-icon">
//             <div>
//                 <span class="bar_rrRL"></span>
//                 <span class="bar_rrRL"></span>
//                 <span class="bar_rrRL"></span>
//             </div>
//         </div>
//     </div>
// </div>
//
// <pre>
// <code class="hljs language-${lang}">
// ${hljs.highlight(code, { language }).value}
// </code>
// </pre>
// `
//                     );
//                 }
//
//
//                 return templates.join('\n');
            }
        }
    })


    Handlebars.registerHelper('javascript', function (code, type, options) {
        return`<script type="${type==='module'?'module':'javascript'}">

${code}

</script>
`;
    });

    Handlebars.registerHelper('typescript', function (code) {

        const { code: source } = Babel.transform(code, {
            filename: 'main.ts',
            presets: ['typescript'],
            plugins: [],
        });
        console.log('typescript=====');
        console.log(source);
        return`
<script>
    (() => {
        const script = document.createElement('script');
        script.type = 'importmap';
        script.textContent = JSON.stringify({"imports": top.window.__LIBS__}, null, 2);
        document.currentScript.after(script);
    })();
</script>
<script type="module">

${source}

</script>
`;
    });


    Handlebars.registerHelper('react', function (code, type, options) {
        const newCode = code.replace(/^(\s*)export\s+default\s+/m, (s, before) => {
            return `${before}\n ;const __MODULE__ = `;
        });

        const newCode2 = `
import { createRoot as __createRoot__  } from 'react-dom/client';


${newCode}


(() => {
const container = document.createElement('div');
document.body.appendChild(container);
const root = __createRoot__(container);
root.render(React.createElement(__MODULE__));
})();

                    `;

        const { code: source } = Babel.transform(newCode2, {
            // 'env',
            presets: ['react'],
            plugins: [],
        });


        return`
<script>
    (() => {
        const script = document.createElement('script');
        script.type = 'importmap';
        script.textContent = JSON.stringify({"imports": top.window.__LIBS__}, null, 2);
        document.currentScript.after(script);
    })();
</script>
<script type="module">

${source}

</script>
`;
    });

    async function markdownHandler({ request }) {
        const response = await fetch(request);
        const headers = new Headers(response.headers);
        const source = await response.text();
        headers.set("content-type", "text/plain; charset=utf-8");
        let html = '';
        if(source.startsWith('<!DOCTYPE html')) {
            html = '<div>error<div>';
        } else {
            html = await marked.parse(source);
        }
        return new Response(html, {
            headers
        });
    }

    self.modules.handlers = self.modules.handlers || {};
    self.modules.handlers.markdownHandler = markdownHandler;
})(self.marked, self.hljs, self.Handlebars);

