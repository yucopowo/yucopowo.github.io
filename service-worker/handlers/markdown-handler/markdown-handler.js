importScripts('/public/assets/libs/marked/marked.min.js');
importScripts('/public/assets/libs/handlebars/handlebars.js');
importScripts('/service-worker/handlers/markdown-handler/handlebars-helpers.js');

((marked, Handlebars, utils) => {

    let codeTemplate = null;

    async function preloadTemplate() {
        if(codeTemplate) return codeTemplate;
        const t = await (await fetch('/service-worker/templates/code.hbs')).text();
        codeTemplate = Handlebars.compile(t);
        return codeTemplate;
    }

    preloadTemplate();

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


                const config = utils.parseAttrs(token.lang);
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

    function getTemplate(lang) {
        switch (lang) {
            case 'js':
            case 'javascript':
                return 'javascript';
            case 'ts':
                return 'typescript';
            case 'jsx':
                return 'react';
            case 'vue':
                return 'vue';
            default:
                return lang || 'html';
        }
    }

    marked.use({ walkTokens, async: true });


    marked.use({
        renderer: {
            code(code, infoString, escaped) {
                const config = utils.parseAttrs(infoString);
                const { lang } = config;
                console.log('config=====');
                console.log(config);

                // console.log('template=====');
                // console.log(template);
                // console.log('code=====');
                // console.log(code);

                const html = codeTemplate({
                    lang,
                    code,
                    template: getTemplate(config.lang),
                    config,
                    showPreview: !!config.hasOwnProperty('demo'),
                    showCode: !(config.demo === 'preview'),
                    // showPreview: config.demo || config.preview,
                    // showCode: (() => {
                    //     if(!config.mode) return true;
                    //     if(config.demo) return true;
                    //     return !config.preview;
                    // })(),
                });

                return html;
            }
        }
    })



    async function markdownHandler({ request }) {
        const url = new URL(request.url);
        const postPath = url.searchParams.get('path')

        await preloadTemplate();

        // const response = await fetch(request);
        const response = await fetch(`/posts/${postPath}`);
        const headers = new Headers(response.headers);
        const source = await response.text();
        headers.set("content-type", "text/html; charset=utf-8");
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
})(self.marked, self.Handlebars, self.modules.utils);

