import {getContentType, getType} from './util.js';

class ServiceWorkerResponse {
    _body = null;
    _type = null;
    headers = new Headers();
    status = 404;
    set body(val) {
        if(typeof val === 'object') {
            this._body = JSON.stringify(val);
        } else {
            this._body = val;
        }
        if(this.status === 404) {
            this.status = 200;
        }
        if(!this.type) {
            if (typeof val === 'string') {
                this.type = /^\s*</.test(val) ? 'html' : 'text';
            } else {
                this.type = 'json'
            }
        }
    }
    get body() {
        return this._body;
    }
    set type (type) {
        const _type = getContentType(type);
        this.headers.set('Content-Type', _type);
        this._type = type;
    }
    get type () {
        return this._type;
    }
    toOriginResponse() {
        return new Response(this._body, {
            headers: this.headers,
            status: this.status
        });
    }
    static async fromOriginResponse(response) {
        // (body, {
        //     status: response.status,
        //     headers: new Headers(response.headers)
        // }
        const contentType = response.headers.get('content-type');

        const type = getType(contentType);

        let body = '';
        switch (type) {
            case 'json':{
                body = await response.json();
                break;
            }
            default:{
                body = await response.text();
            }
        }

        const swResponse = new ServiceWorkerResponse();
        swResponse.headers = new Headers(response.headers);
        swResponse.status = response.status;
        swResponse.body = body;
        swResponse.type = type;
        // console.log(response.headers.get('content-type'));

        return swResponse;
    }
}

export default ServiceWorkerResponse;
