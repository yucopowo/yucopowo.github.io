importScripts('/service-worker/modules.js');
importScripts('/libs/marked/marked.min.js');
importScripts('/libs/highlight.min.js');
importScripts('/libs/javascript.min.js');
importScripts('/libs/handlebars/handlebars.js');



((marked, hljs, Handlebars) => {
    marked.use({
        renderer: {
            code(code, infostring, escaped) {
                // console.log(1111);
                const [lang, ...attrsString] = infostring.split(' | ')

                const config = {};
                attrsString.forEach((a)=>{
                    const c = a.split('=');
                    config[c[0]] = c[1] || true;
                });
                // console.log(config);

                const templates = [];
                if(config.preview || config.demo) {

                    if(config.template === 'react') {

                    }

//                     const template = `
// <html>
// <body>
// <script type='text/plain'>
// console.log(11);
// </script>
// </body>
// </html>`;
//                     const html = `<iframe srcdoc="${template}"></iframe>`;
//                     templates.push(html);
                    templates.push(`  <blog-code-previewer><textarea style="display: none;" data-template="${config.template}">${code}</textarea></blog-code-previewer> `);
                }

                if(!(config.preview && !config.demo)) {
                    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                    templates.push(`
<pre><code class="hljs language-${lang}">${
                            hljs.highlight(code, { language }).value
                        }</code></pre>`
                    );
                }


                return templates.join('\n');
            }
        }
    })

    async function markdownHandler({ request }) {
        const response = await fetch(request);
        const headers = new Headers(response.headers);
        const source = await response.text();
        headers.set("content-type", "text/plain; charset=utf-8");
        const html = marked.parse(source);
        return new Response(html, {
            headers
        });
    }

    self.modules.handlers = self.modules.handlers || {};
    self.modules.handlers.markdownHandler = markdownHandler;
})(self.marked, self.hljs, self.Handlebars);

