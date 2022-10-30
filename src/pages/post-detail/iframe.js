import * as marked from 'marked';
import '/src/components/sandbox/index.js';
// import highlight from 'highlight.js';
// console.log(hljs);
// marked.setOptions({
//     highlight: function(code, lang) {
//         console.log(hljs.highlightAuto(code).value)
//
//         if(lang === 'javascript') {
//             return `<blog-sandbox>${encodeURIComponent(code)}</blog-sandbox>`;
//         }
//         return hljs.highlightAuto(code).value;
//     },
// });

marked.use({
    renderer: {
        code(code, infostring, escaped) {
            const [lang, ...attrsString] = infostring.split(' | ')
            console.log('lang', lang) // ts
            console.log(attrsString) // [ 'pre' ]

            const config = {};
            attrsString.forEach((a)=>{
                const c = a.split('=');
                config[c[0]] = c[1] || true;
            });
            console.log(config);




            if(config.preview) {
                let template = code;
                if(config.template === 'react') {
                    template = `
                ${code.replace('export default', 'const __EXPORT_COMPONENT__ = ')}
                
                
                const root = ReactDOM.createRoot(document.body);
                root.render(React.createElement(__EXPORT_COMPONENT__));

                `;
                }

                return `<blog-sandbox>${encodeURIComponent(template)}</blog-sandbox>`;
            }

            if(config.demo) {
                return (() => {
                    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
                    const codeString = `<pre style="margin-top: 0px"><code class="hljs language-${lang}">${
                        hljs.highlight(code, { language }).value
                    }</code></pre>`;


                    let template = code;
                    if(config.template === 'react') {
                        template = `
                ${code.replace('export default', 'const __EXPORT_COMPONENT__ = ')}
                
                
                const root = ReactDOM.createRoot(document.body);
                root.render(React.createElement(__EXPORT_COMPONENT__));

                `;
                    }

                    const previewString = `<blog-sandbox>${encodeURIComponent(template)}</blog-sandbox>`;

                    return previewString + codeString;
                })();
            }



            const language = hljs.getLanguage(lang) ? lang : 'plaintext'
            return `<pre><code class="hljs language-${lang}">${
                hljs.highlight(code, { language }).value
            }</code></pre>`;

        }
    }
})

function getQueryString(name) {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    const r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

const name = decodeURI(decodeURI(getQueryString('post')));


(async () => {
    const md = await fetch('/posts/'+name).then(r=>r.text());

    // console.log(md);

    const html = marked.parse(md);

    document.getElementById('content').innerHTML = html;


    //

    // setTimeout(() => {
    //     if(window.frameElement) {
    //         // console.log(document.body.scrollHeight)
    //         // console.log(document.body.clientHeight)
    //         // console.log(document.body.offsetHeight)
    //         // console.log(window.screen.availHeight);
    //         const iframeHeight = document.documentElement.offsetHeight;
    //         window.frameElement.style.height = (iframeHeight+100) +'px';
    //     }
    // }, 3000);

})();
