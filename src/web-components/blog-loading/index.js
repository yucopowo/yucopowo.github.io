import React from 'react';
import { createRoot } from 'react-dom/client';
import Component from './component.jsx';

class BlogLoading extends HTMLElement {

    connectedCallback() {
        const progress = this.getAttribute('progress');
        const container = document.createElement('div');

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(container);

        const root = createRoot(container);
        root.render(React.createElement(Component, {progress}));

    }

    // stop() {
    //     if(this.interval) {
    //         clearInterval(this.interval);
    //         this.interval = undefined;
    //     }
    // }
    // connectedCallback() {
    //     const shadowRoot = this.attachShadow({mode: 'open'});
    //
    //     const templateElem = document.getElementById('blog-loading-template');
    //     const content = templateElem.content.cloneNode(true);
    //     shadowRoot.appendChild(content);
    //
    //     let n = 1;
    //     function nextValue() {
    //         n = Math.floor(n + Math.random()*10);
    //         n = n>100?100:n;
    //         return n;
    //     }
    //     const valueElem = shadowRoot.querySelector('.progress .value');
    //     this.interval = setInterval(() => {
    //         if(n>=100) {
    //             this.stop();
    //         } else {
    //             valueElem.innerText = nextValue();
    //         }
    //     }, 100);
    // }
    // disconnectedCallback() {
    //     this.stop();
    // }
    // attributeChangedCallback(name, oldValue, newValue) {
    //
    // }
}
customElements.define('blog-loading', BlogLoading);
