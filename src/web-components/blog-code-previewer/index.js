import React from 'react';
import { createRoot } from 'react-dom';
import Previewer from './previewer.jsx';


class BlogCodePreviewer extends HTMLElement {

    connectedCallback() {
        const url = '/src/web-components/blog-code-previewer/iframe.html';
        const container = document.createElement('div');

        container.style.position = 'relative';
        // const shadowRoot = this.attachShadow({mode: 'open'});
        // shadowRoot.appendChild(container);
        this.appendChild(container);

        const root = createRoot(container);
        root.render(React.createElement(Previewer,{url}));

    }

    // connectedCallback() {
    //
    //
    //     // const code = this.firstElementChild.value;
    //     // const template = this.firstElementChild.getAttribute('data-template');
    //     //
    //     //
    //     //
    //     // // this.innerHTML = '';
    //     // const iframe = document.createElement('iframe');
    //     // iframe.style.width = '100%';
    //     // iframe.style.maxHeight = '600px';
    //     // iframe.frameBorder = 'no';
    //     // iframe.style.backgroundColor = '#fff';
    //     // iframe.src = '/src/web-components/blog-code-previewer/iframe.html';
    //     // // iframe.src = '/frames/code-live.html';
    //     // // iframe.innerHTML = code;
    //     // // iframe.srcdoc = (() => {
    //     // //     const html = `
    //     // //
    //     // //     `;
    //     // //     return html;
    //     // // })();
    //     //
    //     // // iframedoc = iframe.contentDocument || iframe.contentWindow.document;
    //     // // iframedoc.body.innerHTML = 'Hello world';
    //     //
    //     // this.appendChild(iframe);
    // }
}

customElements.define("blog-code-previewer", BlogCodePreviewer);
