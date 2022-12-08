import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { safeJSONParse } from '/src/utils/util.js';
// import { withWebComponent } from '/src/packages/react-web-component/index.jsx';

class HTMLComponent extends HTMLElement {
    connectedCallback() {
        // const shadowRoot = this.attachShadow({ mode: 'open' });
        const properties = safeJSONParse(this.getAttribute('data-properties'));
        // const container = document.createElement('div');
        const container = this;

        // const script = document.createElement('script');
        // script.innerHTML = 'console.log(99999)';
        // container.appendChild(script);

        container.innerHTML = `
        <script>console.log(99999)</script>  
        `;

        const id = properties.id;
        function setHTML(html) {
            // console.log(html);
            // container.innerHTML = html;
            // shadowRoot.appendChild(container);

        }
        axios.get(`/api/post/content/html/`+id).then(({data: res}) => {
            if(res.code < 0) {
                setHTML(res.message);
            } else {
                setHTML(res.data);
            }
        }).catch((e) => {
            setHTML(e.message);
        });
    }
}

// customElements.define('post-detail-web-component', HTMLComponent);

const PostDetailWebComponent = (props) => {

    // return React.createElement('post-detail-web-component', {
    //     'data-properties': JSON.stringify(props)
    // });

    return React.createElement('div', {
        dangerouslySetInnerHTML: {
            __html: `
<script>
    console.log(1);
    
</script>  
`
        }
    });

};

export default PostDetailWebComponent;


// const PostDetailWebComponent = (props) => {
//     // console.log('PostDetailWebComponent===', props);
//     const [html, setHTML] = useState('');
//     useEffect(() => {
//
//         axios.get(`/api/post/content/html/`+props.id).then(({data: res}) => {
//             if(res.code < 0) {
//                 setHTML(res.message);
//             } else {
//                 setHTML(res.data);
//             }
//         }).catch((e) => {
//             setHTML(e.message);
//         });
//
//     }, []);
//     const dangerouslySetInnerHTML = {__html: html};
//     // <div className="markdown-body" >
//     //
//     // </div>
//     return (
//         <div className="post-detail-web-component">
//
//         </div>
//     );
// };

// export default withWebComponent(PostDetailWebComponent,  {
//     // name: 'post-detail-web-component',
//     links: [
//         {
//             rel: "stylesheet", href: '/public/assets/css/github-markdown-dark.css'
//         },
//         {
//             rel: "stylesheet", href: '/src/web-components/post-detail-component/post-detail-component.css'
//         },
//         {
//             rel: "stylesheet", href: '/public/assets/css/prism-themes/themes/okaidia.css'
//         }
//     ],
//     shadow: true
// });
