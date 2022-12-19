import React from 'react';
import { createRoot } from 'react-dom/client';
import {safeJSONParse} from '/src/utils/util.js';
import InView from '/src/packages/inview/inview.js';
import '/public/assets/css/prism-themes/themes/okaidia.css';

class HTMLComponent extends HTMLElement {
    connectedCallback() {
        const self = this;
        const properties = safeJSONParse(this.getAttribute('data-properties'));

        if(!'demo' in properties.attributes) {
            return;
        }

        // console.log(properties);

        const el = this;
        el.style.display = 'block';
        el.style.margin = '0px';
        el.style.padding = '0px';

        function render() {
            const container = self;
            const root = createRoot(container);

            const children = container.innerHTML;
            const props = {...properties, children};
            import('/src/components/markdown-renderer/renderers/code/component.jsx')
                .then(({default: m}) => {
                    root.render(React.createElement(m, props));
            });
        }

        InView(el, {
            offset: window.screen.height,
        },function(isInView, data) {
            // console.log(isInView);
            if (isInView) {
                render();
                this.destroy();
            }
        });
    }
    render() {
        const container = this;
        const root = createRoot(container);

        const properties = safeJSONParse(this.getAttribute('data-properties'));
        const children = this.innerText;

        const props = {...properties, children};
        // loader().then(({default:c}) => {
        //     root.render(React.createElement(c, {
        //         ...props,
        //     }));
        // });
    }
}

customElements.define('post-code-component', HTMLComponent);
