import axios from 'axios';
import './index.less';


function appendStyleSheet(container, url) {
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    container.appendChild(link);
}

class HTMLComponent extends HTMLElement {

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        this.className = 'post-detail-component';

        // const link = document.createElement('link');
        // link.type = 'text/css';
        // link.rel = 'stylesheet';
        // link.href = '/public/assets/css/github-markdown-dark.css';
        // shadowRoot.appendChild(link);
        appendStyleSheet(shadowRoot, '/public/assets/css/github-markdown-dark.css');
        appendStyleSheet(shadowRoot, '/src/web-components/post-detail-component/post-detail-component.css');
        appendStyleSheet(shadowRoot, '/public/assets/css/prism-themes/themes/okaidia.css');

        const container = document.createElement('div');
        container.className = 'markdown-body';
        // container.style.backgroundColor = 'transparent';
        shadowRoot.appendChild(container);

        // const shadowRoot = this.attachShadow({ mode: 'open' });
        const id = this.getAttribute('data-post');

        axios.get(`/api/markdown/html/${id}`).then((res) => {
            console.log(res.data);
            container.innerHTML = res.data;
        });

    }

}

customElements.define('post-detail-component', HTMLComponent);
