import ServiceWorkerResponse from './response.js';
import Handlebars from '/public/assets/libs/handlebars/handlebars.esm.js';

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
            const text = await (await fetch(`/service-worker/views/${name}.hbs`)).text();
            const template = Handlebars.compile(text);
            this.response.body = template(data);
            this.response.type = 'html';
        } catch (e) {
            this.response.body = `<div>${JSON.stringify(e.message)}</div>`;
            this.response.type = 'html';
        }

    }
}

export default ServiceWorkerContext;
