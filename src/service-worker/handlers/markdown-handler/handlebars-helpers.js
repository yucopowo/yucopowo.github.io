importScripts('/src/assets/libs/highlight.min.js');
importScripts('/src/assets/libs/highlight.js/languages/javascript.min.js');
importScripts('/src/assets/libs/highlight.js/languages/xml.min.js');
importScripts('/src/assets/libs/highlight.js/languages/css.min.js');
importScripts('/src/assets/libs/highlight.js/languages/python.min.js');
importScripts('/src/assets/libs/highlight.js/languages/typescript.min.js');
importScripts('/src/assets/libs/highlight.js/languages/markdown.min.js');

((marked, hljs, Handlebars) => {

    const autoSizeTemplate = `<script>
        (() => {
            const topFrame = window.frameElement;
            if (topFrame) {
                const debouncedHandler = () => {
                    const height = document.documentElement.offsetHeight;
                    topFrame.style.height = (height + 10) + 'px';
                };
                const observe = new ResizeObserver(debouncedHandler);
                observe.observe(document.documentElement);
            }
        })();
    </script>`;

    Handlebars.registerHelper('eq', function (v1, v2, options) {
        if(v1 === v2) return options.fn(this);
    });

    Handlebars.registerHelper('highlight', function (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
    });

    Handlebars.registerHelper('html', function (code, type, options) {
        return`
        ${code}
        ${autoSizeTemplate}
        `;
    });

    Handlebars.registerHelper('javascript', function (code, config, options) {
        const type = config.type === 'module' ? 'module' : 'text/javascript';
        return `<body>
            <style>
                html,body {
                    padding: 0;
                    margin: 0;
                }
            </style>
            <script type="${type}">
                ${code}
            </script>
            ${autoSizeTemplate}
            </body>
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


    Handlebars.registerHelper('react', function (code, config) {
        console.log('config=======');
        console.log(config);
        const version = config.react || '';

        const newCode = code.replace(/^(\s*)export\s+default\s+/m, (s, before) => {
            return `${before}\n ;const __MODULE__ = `;
        });

        // import { createRoot as __createRoot__  } from 'react-dom/client';

        const newCode2 = version?`
import __React__ from 'react';
import __ReactDOM__ from 'react-dom';

${newCode}

(() => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    __ReactDOM__.render(
        __React__.createElement(__MODULE__), 
        container
    );
})();
                    `: `
import __React__ from 'react';
import { createRoot as __createRoot__  } from 'react-dom/client';

${newCode}

(() => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = __createRoot__(container);
    root.render(__React__.createElement(__MODULE__));                    
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
        const version = '${config.react || ''}';
        const __LIBS__ = top.window.__LIBS__;
        if(version) {
            // "react": "https://esm.sh/react?dev",
            // "react-dom": "https://esm.sh/react-dom?dev",
            // "react-dom/client": "https://esm.sh/react-dom/client?dev",
            __LIBS__['react'] = "https://esm.sh/react@"+version;
            __LIBS__['react-dom'] = "https://esm.sh/react-dom@"+version;
            __LIBS__['react-dom/client'] = "https://esm.sh/react-dom/client@"+version;
        }
        console.log(__LIBS__);
        script.textContent = JSON.stringify({"imports": top.window.__LIBS__}, null, 2);
        document.currentScript.after(script);
    })();
</script>
<script type="module">

${source}

</script>
`;
    });



    Handlebars.registerHelper('vue', function (code, config) {
        console.log('vue config=======');
        console.log(config);
        return `vue`;
    });


})(self.marked, self.hljs, self.Handlebars);
