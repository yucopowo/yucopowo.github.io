import React from 'react';
import toc from "/src/utils/toc.js";

class BlogMarkdownPreviewer extends HTMLElement {

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });


        const style0 = document.createElement('link');
        style0.rel="stylesheet";
        // style0.href = '/public/assets/libs/darcula.min.css';
        style0.href = '/public/assets/libs/highlight.js/styles/github-dark.min.css';
        shadowRoot.appendChild(style0);

        const style1 = document.createElement('link');
        style1.rel="stylesheet";
        style1.href = '/public/assets/css/markdown.css';
        shadowRoot.appendChild(style1);

        const style2 = document.createElement('link');
        style2.rel="stylesheet";
        style2.href = '/src/web-components/blog-markdown-previewer/index.css';
        shadowRoot.appendChild(style2);


        const container = document.createElement('div');
        container.className = 'markdown-container';
        shadowRoot.appendChild(container);

        const mountPoint = document.createElement('div');
        mountPoint.classList.add('markdown-body');
        mountPoint.classList.add('post-body');
        mountPoint.classList.add('posts-expand');


        container.appendChild(mountPoint);

        const content = this.getAttribute('content');
        this.setAttribute('content', '');
        // this.innerHTML = '';
        // console.log(unescape(this.innerHTML));

        // const name = this.getAttribute('name');
        // const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
        mountPoint.innerHTML = content;
        // const root = createRoot(mountPoint);
        // root.render(<a href={url}>{name}</a>);
        // root.render(<div dangerouslySetInnerHTML={{__html: content}}></div>);

        // setTimeout(() => {
        //     // const list = tree(content);
        //     const headers = toc.anchorize(content);
        //     if(!headers.headers || headers.headers.length === 0) return;
        //     // console.log(headers);
        //     // console.log(toc.toc(headers.headers));
        //
        //     const tocContainer = document.createElement('div');
        //     tocContainer.className = 'markdown-toc';
        //     tocContainer.innerHTML = toc.toc(headers.headers);
        //     container.appendChild(tocContainer);
        //
        //     tocContainer.addEventListener('click', (e) => {
        //         const target = e.target;
        //         const id = target.getAttribute('href');
        //         if(id) {
        //             const pid = id.substring(1).replaceAll(' ', '-').replaceAll('.', '');
        //             const go = shadowRoot.getElementById(pid);
        //             if(go) {
        //                 go.scrollIntoView({behavior: "smooth", block: "start"});
        //             }
        //         }
        //     }, false);
        //
        // }, 0);
    }
}

customElements.define("blog-markdown-previewer", BlogMarkdownPreviewer);
