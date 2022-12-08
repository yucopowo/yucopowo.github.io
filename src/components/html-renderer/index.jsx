import React from 'react';

class HTMLComponent extends HTMLElement {

    connectedCallback() {

        const html = this.getAttribute('data-html');

        this.innerHTML = html;

    }

}

customElements.define('html-renderer', HTMLComponent);

const HTMLRenderer = (props) => {

    const { post } = props;

    const style = {
        width: '100%',
        border: 'none',
    };

    return (
        <div>
            <iframe src={`/api/post/content/${post.id}`} style={style}></iframe>
        </div>
    );
};

export default HTMLRenderer;
