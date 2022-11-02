importScripts('/src/assets/libs/marked/marked.min.js');
importScripts('/src/assets/libs/highlight.min.js');
importScripts('/src/assets/libs/javascript.min.js');
importScripts('/src/assets/libs/highlight.js/languages/xml.min.js');


importScripts('/src/assets/libs/handlebars/handlebars.js');



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
<pre>
<div style="background-color: #f6f8fa;
    color: #333;
    font-weight: bold;
    font-size: 14px;
    margin: -15px;
    padding: 10px 15px;
    border-radius: 5px 5px 0 0;
    ${!config.title?'display: none;':''}
    ">${config.title}</div>
<code class="hljs language-${lang}">
${hljs.highlight(code, { language }).value}
</code>
</pre>
`
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

