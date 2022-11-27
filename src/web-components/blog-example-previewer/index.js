import React from 'react';
import { createRoot } from 'react-dom';
import Previewer from './previewer.jsx';

class BlogExamplePreviewer extends HTMLElement {

    connectedCallback() {
        const url = this.getAttribute('src');
        const container = document.createElement('div');

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(container);

        const root = createRoot(container);
        root.render(React.createElement(Previewer,{url}));

    }

}

customElements.define("blog-example-previewer", BlogExamplePreviewer);
