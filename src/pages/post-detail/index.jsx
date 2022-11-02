import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom';
import { useParams, useLocation } from 'react-router-dom';
import { getPostService } from '/src/services/post.js';
import '/src/pages/post-detail/index.less';



class BlogCodePreviewer extends HTMLElement {

    connectedCallback() {


        const code = this.firstElementChild.value;
        const template = this.firstElementChild.getAttribute('data-template');



        // this.innerHTML = '';
        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.maxHeight = '600px';
        iframe.frameBorder = 'no';
        iframe.style.backgroundColor = '#fff';
        iframe.src = '/src/pages/post-detail/iframe.html';
        // iframe.src = '/frames/code-live.html';
        // iframe.innerHTML = code;
        // iframe.srcdoc = (() => {
        //     const html = `
        //
        //     `;
        //     return html;
        // })();

        // iframedoc = iframe.contentDocument || iframe.contentWindow.document;
        // iframedoc.body.innerHTML = 'Hello world';

        this.appendChild(iframe);
    }
}

customElements.define("blog-code-previewer", BlogCodePreviewer);


class BlogMarkdownPreviewer extends HTMLElement {

    // constructor() {
    //     super();
    //     // console.log(this.innerHTML);
    // }
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
    }
}

customElements.define("blog-markdown-previewer", BlogMarkdownPreviewer);


const PostDetail = () => {
    const location = useLocation();
    const postPath = decodeURIComponent(location.pathname.substring(11));
    // console.log('decodeURIComponent(postPath)====');
    // console.log((postPath));
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState('');

    useEffect(() => {
        getPostService(postPath).then((res) => {
            setContent(res);
            setLoading(false);
        });
    }, [postPath]);

    // const { name } = useParams();
    // const [ content, setContent ] = useState('');
    // console.log(name);
    // fetch('/posts/'+name).then(r=>r.text()).then((r) => {
    //     setContent(marked.parse(r));
    // });


    // useEffect(() => {
    //     console.log(iFrameResize);
    //     iFrameResize({ log: true }, '#myIframe');
    // }, []);

    return (
        <div className="post-detail-page">
            {/*<div dangerouslySetInnerHTML={{*/}
            {/*    __html: content}*/}
            {/*}></div>*/}
            <div className="post-content">
                {/*<iframe id="myIframe" src={`/src/pages/post-detail/iframe.html?post=${encodeURI(encodeURI(name))}`} frameBorder="0"></iframe>*/}
                {loading && <div>loading...</div>}
                {!loading && (
                    <blog-markdown-previewer content={content}>

                    </blog-markdown-previewer>
                )}

            </div>
        </div>
    );
};

export default PostDetail;
