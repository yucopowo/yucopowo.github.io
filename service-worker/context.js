import ServiceWorkerResponse from './response.js';
import Handlebars from '/public/assets/libs/handlebars/handlebars.esm.js';
import './utils/helpers.js';

const templateCache = new Map();

async function getTemplate(name) {
    if(templateCache.has(name)) {
        return templateCache.get(name);
    }
    const text = await (await fetch(`/service-worker/views/${name}.hbs`)).text();
    const template = Handlebars.compile(text);
    templateCache.set(name, template);
    return template;
}

class ServiceWorkerContext {
    params = {};
    app = null;
    request = null;
    response = new ServiceWorkerResponse();
    originResponse = null;
    constructor(options) {
        Object.assign(this, options);
    }
    async render(name, data) {
        try {

            const template = await getTemplate(name);
            if(!template) {
                return new Error(`${name} 模板不存在！`)
            }
            this.response.body = template(data);
            this.response.type = 'html';

        } catch (e) {
            this.response.body = `<div>${JSON.stringify(e.message)}</div>`;
            this.response.type = 'html';
        }

    }
}

export default ServiceWorkerContext;
