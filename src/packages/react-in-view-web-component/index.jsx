import React from 'react';
import { createRoot } from 'react-dom/client';
import {safeJSONParse} from '/src/utils/util.js';
import InView from '/src/packages/inview/inview.js';
import './index.less';

export function create(name, loader) {
    class HTMLComponent extends HTMLElement {
        connectedCallback() {
            const self = this;

            const el = this;
            el.style.display = 'block';
            el.style.margin = '0px';
            el.style.padding = '0px';

            InView(el, {
                offset: window.screen.height,
            },function(isInView, data) {
                // console.log(isInView);
                if (isInView) {
                    self.render();
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
            loader().then(({default:c}) => {
                root.render(React.createElement(c, {
                    ...props,
                }));
            });
        }
    }

    customElements.define(name, HTMLComponent);
}

