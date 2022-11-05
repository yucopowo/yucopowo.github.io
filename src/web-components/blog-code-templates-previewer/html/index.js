import React from 'react';
// import { createRoot } from 'react-dom/client';
// import Previewer from './previewer.jsx';

class BlogCodeTemplateHTMLPreviewer extends HTMLElement {

    connectedCallback() {
        const container = document.createElement('iframe');
        this.appendChild(container);
        // const root = createRoot(container);
        // root.render(React.createElement(Previewer,{url}));
    }
}

customElements.define("blog-code-template-html-previewer", BlogCodeTemplateHTMLPreviewer);
