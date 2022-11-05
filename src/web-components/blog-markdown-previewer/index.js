import React from 'react';
import toc from "/src/utils/toc.js";

class BlogMarkdownPreviewer extends HTMLElement {

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });


        const style0 = document.createElement('link');
        style0.rel="stylesheet";
        // style0.href = '/src/assets/libs/darcula.min.css';
        style0.href = '/src/assets/libs/highlight.js/styles/github-dark.min.css';
        shadowRoot.appendChild(style0);

        const style1 = document.createElement('link');
        style1.rel="stylesheet";
        style1.href = '/src/assets/css/markdown.css';
        shadowRoot.appendChild(style1);

        const style2 = document.createElement('style');

        style2.innerHTML = `.markdown-code-browser-window {
  //border: 3px solid #ebedf0;
  border: 3px solid #21252b;
  border-radius: 0.4rem 0.4rem 0 0;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
  /*margin-bottom: calc(1.25*1rem);*/
}

.markdown-code-browser-window-header {
  align-items: center;
  //background: #ebedf0;
  background: #21252b;
  display: flex;
  padding: 0 1rem;
}

.markdown-code-browser-window-buttons {
  white-space: nowrap;
  line-height: 1.5;
}

.markdown-code-browser-window-button {
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  height: 12px;
  margin-right: 6px;
  margin-top: 4px;
  width: 12px;
}
.markdown-code-browser-window-button.dot_giz_a {
  background: rgb(242, 95, 88)
}
.markdown-code-browser-window-button.dot_giz_b {
  background: rgb(251, 190, 60)
}
.markdown-code-browser-window-button.dot_giz_c {
  background: rgb(88, 203, 66)
}

.markdown-code-browser-window-menu-icon {
  margin-left: auto;
}

.markdown-code-browser-window-menu-icon .bar_rrRL {
  background-color: #aaa;
  display: block;
  height: 2px;
  margin: 3px 0;
  width: 16px;
}

.markdown-code-browser-window-title {
  border-radius: 12.5px;
  color: #ffffff;
  flex: 1 0;
  font: 400 13px Arial,sans-serif;
  margin: 0 1rem 0 .5rem;
  padding: 5px 15px;
  -webkit-user-select: none;
  user-select: none;
  text-align: center;
}

.markdown-code-browser-window-title.text--truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 14px
}

`;
        shadowRoot.appendChild(style2);


        const mountPoint = document.createElement('div');
        mountPoint.classList.add('markdown-body');
        mountPoint.classList.add('post-body');
        mountPoint.classList.add('posts-expand');


        // mountPoint.
        shadowRoot.appendChild(mountPoint);

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

        setTimeout(() => {
            // const list = tree(content);
            const headers = toc.anchorize(content)
            // console.log(headers);
            // console.log(toc.toc(headers.headers));

            const tocContainer = document.createElement('div');
            tocContainer.className = 'markdown-toc';
            tocContainer.innerHTML = toc.toc(headers.headers);
            shadowRoot.appendChild(tocContainer);

            tocContainer.addEventListener('click', (e) => {
                const target = e.target;
                const id = target.getAttribute('href');
                if(id) {
                    const pid = id.substring(1).replaceAll(' ', '-');
                    const go = shadowRoot.getElementById(pid);
                    if(go) {
                        go.scrollIntoView({behavior: "smooth", block: "start"});
                    }
                }
            }, false);

        }, 0);
    }
}

customElements.define("blog-markdown-previewer", BlogMarkdownPreviewer);
