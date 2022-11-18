((Babel) => {
    function isRelative(p) {
        if(!p) return false;
        if(p[0] === '.') return false;
        if(p[0] === '/') return false;
        if(p[0] === 'h') return false;
        // return !path.isAbsolute(p);
        return true;
    }

    function getEnv(url) {
        return (url.includes('127.0.0.1') || url.includes('localhost'))?'dev':'prod';
    }

    function esmBabelPlugin(b, params){
        const { env } = params;
        return {
            visitor: {
                ImportDeclaration(path){
                    const { node } = path;
                    const value = node.source.value;
                    if(value === 'antd') {
                        if(env === 'dev') {
                            node.source.value = `/public/assets/libs/antd/antd.js`;
                        } else {
                            node.source.value = `/public/assets/libs/antd/antd.min.js`;
                        }
                    } else if(isRelative(value)) {
                        if(env === 'dev') {
                            node.source.value = `https://esm.sh/${value}?dev`;
                        } else {
                            node.source.value = `https://esm.sh/${value}`;
                        }
                    }
                }
            }
        }
    }

    async function esmHandler({ request }) {
        // console.log('esmHandler request=====',request);
        const response = await fetch(request);
        const headers = new Headers(response.headers);
        headers.set("content-type", "application/javascript; charset=utf-8");
        const source = await response.text();
        const { code } = Babel.transform(source, {
            presets: request.url.endsWith('.jsx')?['react']:[],
            plugins: [
                [esmBabelPlugin, {env: getEnv(request.url)}]
            ],
        });
        return new Response(code, {
            headers
        });
    }

    self.modules.handlers = self.modules.handlers || {};
    self.modules.handlers.esmHandler = esmHandler;
})(self.Babel);

