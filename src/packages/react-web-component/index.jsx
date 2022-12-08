import React from 'react';
import { createRoot } from 'react-dom/client';
import { safeJSONParse } from '/src/utils/util.js';

// export function create(name, loader) {
//     class HTMLComponent extends HTMLElement {
//         connectedCallback() {
//             const self = this;
//             self.render();
//         }
//         render() {
//             const container = this;
//             const root = createRoot(container);
//
//             const properties = safeJSONParse(this.getAttribute('data-properties'));
//             const children = this.innerText;
//
//             const props = {...properties, children};
//             (async () => {
//                 let c = await loader();
//                 c = c.default || c;
//                 root.render(React.createElement(c, {
//                     ...props,
//                 }));
//             })();
//         }
//     }
//
//     customElements.define(name, HTMLComponent);
// }

function appendStyleSheet(container, url) {
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    container.appendChild(link);
}

function toSnakeCase(str) {

    if (!str) return '';

    return String(str)
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
        .replace(/([a-z])([A-Z])/g, (m, a, b) => a + '-' + b.toLowerCase())
        .replace(/[^A-Za-z0-9]+|_+/g, '-')
        .toLowerCase();

}

const WEB_COMPONENT_DEFAULT_OPTIONS = {
    shadow: false,
    mode: 'open'
};

export const withWebComponent = (component, options) => {
    const name = options.name || toSnakeCase(component.name);
    const o = Object.assign({}, WEB_COMPONENT_DEFAULT_OPTIONS, options);
    class WebComponent extends HTMLElement {
        connectedCallback() {
            const container = o.shadow?this.attachShadow({ mode: o.mode }):this;
            const properties = safeJSONParse(this.getAttribute('data-properties'));
            const root = createRoot(container);

            this.removeAttribute('data-properties');

            const links = o.links;
            if(links) {
                links.forEach((link) => {
                    appendStyleSheet(container, link.href);
                });
            }
            if(o.className) {
                this.classList.add(o.className);
            }

            root.render(React.createElement(component, properties));
        }
    }
    customElements.define(name, WebComponent);

    return (props) => {
        return React.createElement(name, {
            'data-properties': JSON.stringify(props)
        })
    };
}


export function createShadow(name, loader) {
    class HTMLComponent extends HTMLElement {
        connectedCallback() {
            const shadowRoot = this.attachShadow({ mode: 'open' });
            const container = shadowRoot;

            const root = createRoot(container);

            console.log(this.attributes);
            const properties = safeJSONParse(this.getAttribute('data-properties'));
            const children = this.innerText;

            const props = {...properties, children};
            (async () => {
                let c = await loader();
                c = c.default || c;
                root.render(React.createElement(c, {
                    ...props,
                }));
            })();
        }
    }

    customElements.define(name, HTMLComponent);
}


// export function createShadow() {
//
// }

